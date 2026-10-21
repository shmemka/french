-- Révisions Édito A1 — таблица для облачного прогресса.
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
