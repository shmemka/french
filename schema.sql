-- Языки — шаг за шагом — таблица для облачного прогресса.
-- Supabase → SQL Editor → New query → вставь всё и нажми Run.

create table if not exists public.user_docs (
  user_id    uuid        not null default auth.uid() references auth.users(id) on delete cascade,
  key        text        not null check (char_length(key) between 1 and 64),
  body       jsonb       not null default '{}'::jsonb check (octet_length(body::text) < 1000000),
  ts         bigint      not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);

-- Каждый видит и меняет только свои строки
alter table public.user_docs enable row level security;

drop policy if exists "user_docs select own" on public.user_docs;
drop policy if exists "user_docs insert own" on public.user_docs;
drop policy if exists "user_docs update own" on public.user_docs;
drop policy if exists "user_docs delete own" on public.user_docs;

create policy "user_docs select own" on public.user_docs
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "user_docs insert own" on public.user_docs
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "user_docs update own" on public.user_docs
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "user_docs delete own" on public.user_docs
  for delete to authenticated using ((select auth.uid()) = user_id);

-- Доступ через API только для вошедших пользователей
revoke all on public.user_docs from anon;
grant select, insert, update, delete on public.user_docs to authenticated;

-- updated_at обновляется сам
create or replace function public.user_docs_touch() returns trigger
language plpgsql set search_path = '' as $$
begin new.updated_at := now(); return new; end $$;

drop trigger if exists user_docs_touch on public.user_docs;
create trigger user_docs_touch before update on public.user_docs
  for each row execute function public.user_docs_touch();

-- =====================================================================
-- Библиотека сетов Quizlet (30.10.2026): опубликованные пользователями сеты.
-- Можно запускать повторно — всё создаётся «если нет» / заменяется.
-- vis = 'public' — сет виден в поиске библиотеки;
-- vis = 'link'   — сет открывается только по ссылке (функция qset_get), в поиске его нет.
-- =====================================================================
create table if not exists public.qsets (
  id         text        primary key check (id ~ '^[a-z0-9]{8,24}$'),
  owner      uuid        not null default auth.uid() references auth.users(id) on delete cascade,
  author     text        not null default '' check (char_length(author) <= 40),
  lang       text        not null default 'fr' check (lang in ('fr','es')),
  title      text        not null check (char_length(title) between 1 and 80),
  descr      text        not null default '' check (char_length(descr) <= 300),
  words      jsonb       not null check (jsonb_typeof(words) = 'array' and jsonb_array_length(words) between 2 and 500 and octet_length(words::text) < 200000),
  vis        text        not null default 'link' check (vis in ('public','link')),
  saves      integer     not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists qsets_public_idx on public.qsets (saves desc, updated_at desc) where vis = 'public';

alter table public.qsets enable row level security;
drop policy if exists "qsets select public or own" on public.qsets;
drop policy if exists "qsets insert own" on public.qsets;
drop policy if exists "qsets update own" on public.qsets;
drop policy if exists "qsets delete own" on public.qsets;
create policy "qsets select public or own" on public.qsets
  for select to authenticated using (vis = 'public' or (select auth.uid()) = owner);
create policy "qsets insert own" on public.qsets
  for insert to authenticated with check ((select auth.uid()) = owner);
create policy "qsets update own" on public.qsets
  for update to authenticated using ((select auth.uid()) = owner) with check ((select auth.uid()) = owner);
create policy "qsets delete own" on public.qsets
  for delete to authenticated using ((select auth.uid()) = owner);
revoke all on public.qsets from anon;
grant select, insert, update, delete on public.qsets to authenticated;

-- updated_at меняется, только когда меняется сам сет (а не счётчик сохранений)
create or replace function public.qsets_touch() returns trigger
language plpgsql set search_path = '' as $$
begin
  if new.title is distinct from old.title or new.descr is distinct from old.descr or new.words is distinct from old.words or new.vis is distinct from old.vis then
    new.updated_at := now();
  end if;
  return new;
end $$;
drop trigger if exists qsets_touch on public.qsets;
create trigger qsets_touch before update on public.qsets
  for each row execute function public.qsets_touch();

-- открыть сет по ссылке (публичный, «по ссылке» или свой)
create or replace function public.qset_get(p_id text)
returns table (id text, author text, title text, descr text, words jsonb, n integer, vis text, saves integer, mine boolean, updated_at timestamptz)
language sql stable security definer set search_path = '' as $$
  select q.id, q.author, q.title, q.descr, q.words, jsonb_array_length(q.words), q.vis, q.saves, q.owner = auth.uid(), q.updated_at
  from public.qsets q
  where q.id = p_id and (q.vis in ('public','link') or q.owner = auth.uid());
$$;

-- поиск по библиотеке: название, описание, автор, слова
create or replace function public.qset_search(p_q text default '', p_lang text default 'fr', p_lim integer default 30)
returns table (id text, author text, title text, descr text, n integer, saves integer, sample jsonb, mine boolean, updated_at timestamptz)
language sql stable security definer set search_path = '' as $$
  with p as (select '%' || replace(replace(replace(coalesce(btrim(p_q), ''), '\', '\\'), '%', '\%'), '_', '\_') || '%' as pat)
  select q.id, q.author, q.title, q.descr, jsonb_array_length(q.words), q.saves,
         (select coalesce(jsonb_agg(e.value), '[]'::jsonb) from (select value from jsonb_array_elements(q.words) limit 4) e),
         q.owner = auth.uid(), q.updated_at
  from public.qsets q, p
  where q.vis = 'public' and q.lang = coalesce(p_lang, 'fr')
    and (coalesce(btrim(p_q), '') = '' or q.title ilike p.pat or q.descr ilike p.pat or q.author ilike p.pat or q.words::text ilike p.pat)
  order by q.saves desc, q.updated_at desc
  limit least(greatest(coalesce(p_lim, 30), 1), 60);
$$;

-- «сохранить себе»: +1 к счётчику (свои сохранения не считаются)
create or replace function public.qset_saved(p_id text) returns void
language sql security definer set search_path = '' as $$
  update public.qsets set saves = saves + 1 where id = p_id and vis in ('public','link') and owner <> auth.uid();
$$;

revoke all on function public.qset_get(text) from public, anon;
revoke all on function public.qset_search(text, text, integer) from public, anon;
revoke all on function public.qset_saved(text) from public, anon;
grant execute on function public.qset_get(text) to authenticated;
grant execute on function public.qset_search(text, text, integer) to authenticated;
grant execute on function public.qset_saved(text) to authenticated;
