/* =========================================================
   QUIZLET v2 (29.10.2026): слова из учебника французского.
   Главное — одно «Занятие на сегодня»: повторения, до которых дошёл срок,
   плюс немного новых слов. Новое слово проходит шаги
   знакомство → выбор перевода → выбор французского слова → пишешь сам,
   затем уходит в интервальные повторения (SM-2, как в Anki).
   Новые слова вводятся по 3 одновременно и из разных наборов вперемешку,
   чтобы похожие слова (дни, числа) не путались между собой.
   Ответ проверяет сайт, самооценка — только для длинных фраз.
   Наборы по юнитам; у набора своя страница (#quizlet/<id>): слова,
   «Учить этот набор», карточки, подбор.
   Встраивается внутрь движка (как game / platform / study / tools).
   ========================================================= */
Object.assign(I18N.ru, {
  qqLead:"Слова из учебника. Каждый день немного новых, а выученные возвращаются, когда начинаешь их забывать.",
  qqToday:"Занятие на сегодня", qqDue:"повторить", qqNew:"новых", qqMin:n=>`≈ ${n} мин`,
  qqStart:"Начать занятие", qqAllDone:"На сегодня всё",
  qqAllDoneP:s=>`Следующее повторение ${s}. Заходи, чтобы слова не забылись.`,
  qqAllLearned:"Все слова этого раздела уже в повторении.",
  qqMoreNew:n=>`Учить ещё ${n} ${plural(n, ["новое слово", "новых слова", "новых слов"])}`,
  qqScopeAll:"Все<span class=\"qq-uw\"> юниты</span>", qqUnit:u=>`Unité ${u}`, qqPerDay:"Новых в день",
  qqHowH:"Как проходит занятие",
  qqHow:[["Знакомство", "Слушаешь слово и смотришь пример из учебника."], ["Узнавание", "Выбираешь перевод, потом французское слово."], ["Вспоминание", "Пишешь слово сам. Дальше оно возвращается через день, потом всё реже."]],
  qqSt:["Новые", "Учу", "Знаю"], qqStOne:["новое", "учу", "знаю"],
  qqSets:"Наборы", qqSetsSub:"Открой набор: там список слов, карточки и игра на скорость.",
  qqMine:"Мои слова",
  qqKnownOf:(a, b)=>`${a} из ${b}`, qqDueN:n=>`${n} к повтору`,
  qqBack:"Все наборы", qqLearnSet:"Учить этот набор", qqCards:"Карточки", qqMatch:"Подбор", qqWords:"Слова",
  qqRevIn:s=>`повтор ${s}`, qqRevNow:"пора повторить",
  qqExit:"Закончить", qqLeft:n=>`Осталось ${n} ${plural(n, ["слово", "слова", "слов"])}`,
  qqKNew:"Новое слово", qqKMcM:"Выбери перевод", qqKMcFr:"Как это по-французски?", qqKType:"Напиши по-французски",
  qqKListen:"Послушай и выбери перевод", qqKFlip:"Вспомни, как это по-французски", qqKRe:"Ещё раз",
  qqGotIt:"Понятно, дальше", qqKnowIt:"Уже знаю это слово",
  qqShow:"Показать ответ", qqRemember:"Вспомнил", qqForgot:"Не вспомнил",
  qqCheck:"Проверить", qqIdk:"Не знаю", qqNext:"Дальше", qqPh:"Ответ по-французски",
  qqOk:"Juste !", qqAlmostAcc:"Почти: проверь акценты.", qqAlmostArt:"Почти: не забудь артикль.", qqGender:"Проверь артикль, у слова другой род.",
  qqRight:"Правильно:", qqOverride:"Я ответил верно",
  qqKeysMc:"1–4 — вариант · Esc — закончить", qqKeysType:"Enter — проверить · Esc — закончить", qqKeysNext:"Enter — дальше",
  qqKeysFlip:"Пробел — показать · 1 — не вспомнил · 2 — вспомнил",
  qqPlay:"Послушать",
  qqDoneH:"Занятие завершено", qqPauseH:"Сделаем перерыв",
  qqSumNew:"новых слов", qqSumRev:"повторено", qqSumAcc:"верных ответов",
  qqNextRev:s=>`Следующее повторение ${s}.`, qqMistakes:"Эти слова вернутся первыми",
  qqToSets:"К наборам", qqToSet:"К набору", qqGoOn:"Продолжить",
  qqFlip:"Нажми, чтобы перевернуть", qqFlipBtn:"Перевернуть", qqShuffle:"Перемешать", qqCardsKeys:"Пробел — перевернуть · ← → — листать",
  qqMatchHint:"Найди пары. Время идёт с первого нажатия.", qqMatchDone:s=>`Готово за ${s} с`, qqBest:s=>`рекорд ${s} с`, qqAgain:"Ещё раз",
  qqFavSub:"Слова, отмеченные сердечком"
});
Object.assign(I18N.en, {
  qqLead:"Words from the textbook. A few new ones every day, and the ones you know come back just as you start to forget them.",
  qqToday:"Today’s session", qqDue:"to review", qqNew:"new", qqMin:n=>`≈ ${n} min`,
  qqStart:"Start session", qqAllDone:"All done for today",
  qqAllDoneP:s=>`Next review ${s}. Come back so the words stick.`,
  qqAllLearned:"Every word here is already in review.",
  qqMoreNew:n=>`Learn ${n} more new ${n === 1 ? "word" : "words"}`,
  qqScopeAll:"All<span class=\"qq-uw\"> units</span>", qqUnit:u=>`Unité ${u}`, qqPerDay:"New per day",
  qqHowH:"How a session works",
  qqHow:[["Meet", "Hear the word and see an example from the textbook."], ["Recognise", "Pick the translation, then the French word."], ["Recall", "Type the word yourself. Then it comes back tomorrow, and less and less often."]],
  qqSt:["New", "Learning", "Known"], qqStOne:["new", "learning", "known"],
  qqSets:"Sets", qqSetsSub:"Open a set to see its words, flip cards or play a speed game.",
  qqMine:"My words",
  qqKnownOf:(a, b)=>`${a} of ${b}`, qqDueN:n=>`${n} due`,
  qqBack:"All sets", qqLearnSet:"Learn this set", qqCards:"Flashcards", qqMatch:"Match", qqWords:"Words",
  qqRevIn:s=>`review ${s}`, qqRevNow:"due now",
  qqExit:"Finish", qqLeft:n=>`${n} ${n === 1 ? "word" : "words"} left`,
  qqKNew:"New word", qqKMcM:"Pick the translation", qqKMcFr:"How do you say it in French?", qqKType:"Type it in French",
  qqKListen:"Listen and pick the translation", qqKFlip:"Recall it in French", qqKRe:"Once more",
  qqGotIt:"Got it, next", qqKnowIt:"I already know this word",
  qqShow:"Show answer", qqRemember:"I knew it", qqForgot:"I didn’t",
  qqCheck:"Check", qqIdk:"I don’t know", qqNext:"Next", qqPh:"Answer in French",
  qqOk:"Juste !", qqAlmostAcc:"Almost: check the accents.", qqAlmostArt:"Almost: don’t forget the article.", qqGender:"Check the article: the word has a different gender.",
  qqRight:"Correct answer:", qqOverride:"I was right",
  qqKeysMc:"1–4 — pick · Esc — finish", qqKeysType:"Enter — check · Esc — finish", qqKeysNext:"Enter — next",
  qqKeysFlip:"Space — show · 1 — didn’t know · 2 — knew it",
  qqPlay:"Listen",
  qqDoneH:"Session complete", qqPauseH:"Let’s take a break",
  qqSumNew:"new words", qqSumRev:"reviewed", qqSumAcc:"correct answers",
  qqNextRev:s=>`Next review ${s}.`, qqMistakes:"These words come back first",
  qqToSets:"Back to sets", qqToSet:"Back to the set", qqGoOn:"Continue",
  qqFlip:"Tap to flip", qqFlipBtn:"Flip", qqShuffle:"Shuffle", qqCardsKeys:"Space — flip · ← → — browse",
  qqMatchHint:"Find the pairs. The clock starts on your first tap.", qqMatchDone:s=>`Done in ${s} s`, qqBest:s=>`best ${s} s`, qqAgain:"Play again",
  qqFavSub:"Words you marked with a heart"
});

let QZ = {scope:"all", perDay:10, dir:"fr", shuf:false};
try { const q = JSON.parse(ls.get("edito-qz") || "null"); if (q) { if (+q.perDay) QZ.perDay = +q.perDay; ["scope", "dir", "shuf"].forEach(k=>{ if (q[k] !== undefined) QZ[k] = q[k]; }); } } catch(e) {}
const saveQZ = () => ls.set("edito-qz", JSON.stringify(QZ));
let qzKeyHandler = null, qzTimer = null;
const qzKeys = fn => { if (qzKeyHandler) document.removeEventListener("keydown", qzKeyHandler); qzKeyHandler = fn || null; if (fn) document.addEventListener("keydown", fn); };
const UORD = u => u === "1–2" ? 1.5 : (+u || 0);

/* ---------- слова и их состояние ---------- */
function qWords(scope){
  if (scope === "fav") return (S.quiz.fav || []).map(f=>({fr:f.fr, m:(LANG === "en" ? (f.en || f.ru) : (f.ru || f.en)) || qMeaning(f.fr) || "…", set:"fav", unit:""}));
  const sets = scope === "all" ? QSETS : /^u:/.test(scope) ? QSETS.filter(s=>String(s.unit).split("–").includes(scope.slice(2))) : QSETS.filter(s=>s.id === scope);
  const seen = new Set(), out = [];
  sets.forEach(s=>s.w.forEach(w=>{ if (seen.has(w[0])) return; seen.add(w[0]); out.push({fr:w[0], m:LANG === "en" ? w[2] : w[1], set:s.id, unit:s.unit}); }));
  return out;
}
function qSet(fr, patch){ const k = qKey(fr); S.quiz.c[k] = Object.assign({}, S.quiz.c[k], patch); touch("quiz"); }
const qR = fr => (S.quiz.c[qKey(fr)] || {}).r || null;
/* 0 — новое, 1 — учу, 2 — знаю (ушло в повторения) */
const qSt = fr => { const r = qR(fr); return !r ? 0 : r.st === 2 ? 2 : 1; };

/* ---------- интервальное повторение (SM-2, как в Anki) ----------
   r = {st:1 учу|2 повтор|3 переучиваю, ls (шаг нового слова), step, due(ms), ivl(дни), ef, reps, lap} → S.quiz.c[k].r */
const MIN = 60000, DAY = 864e5;
const SRS = {learn:[1, 10], relearn:[10], grad:1, easy:4};
const dayStart = (ms = Date.now()) => { const d = new Date(ms - 4*3600e3); d.setHours(4, 0, 0, 0); return d.getTime(); };
const dayKey = () => String(dayStart());
function srsNext(r0, g, now = Date.now()){
  const r = r0 ? Object.assign({}, r0) : {st:0, step:0, ivl:0, ef:2.5, reps:0, lap:0, due:now};
  delete r.ls;
  const grad = d => { r.st = 2; r.step = 0; r.ivl = d; r.due = dayStart(now) + d*DAY; };
  const fuzz = d => d < 3 ? d : Math.round(d * (0.95 + Math.random()*0.1));
  if (r.st === 2) {
    const late = Math.max(0, Math.round((dayStart(now) - dayStart(r.due)) / DAY));
    if (g === 1) { r.lap++; r.ef = Math.max(1.3, r.ef - .2); r.ivl = Math.max(1, Math.round(r.ivl * .5)); r.st = 3; r.step = 0; r.due = now + SRS.relearn[0]*MIN; }
    else {
      const hard = Math.max(r.ivl + 1, Math.round(r.ivl * 1.2));
      const good = Math.max(hard + 1, Math.round((r.ivl + late/2) * r.ef));
      const easy = Math.max(good + 1, Math.round((r.ivl + late) * r.ef * 1.3));
      if (g === 2) r.ef = Math.max(1.3, r.ef - .15); else if (g === 4) r.ef += .15;
      grad(fuzz(g === 2 ? hard : g === 3 ? good : easy));
    }
  } else {
    const steps = r.st === 3 ? SRS.relearn : SRS.learn;
    if (r.st === 0) r.st = 1;
    if (g === 1) { r.step = 0; r.due = now + steps[0]*MIN; }
    else if (g === 2) { const m = steps.length > 1 && r.step === 0 ? (steps[0] + steps[1]) / 2 : steps[r.step] * (steps.length === 1 ? 1.5 : 1); r.due = now + Math.round(m)*MIN; }
    else if (g === 3) { if (r.step + 1 < steps.length) { r.step++; r.due = now + steps[r.step]*MIN; } else grad(r.st === 3 ? Math.max(1, r.ivl) : SRS.grad); }
    else grad(r.st === 3 ? r.ivl + 1 : SRS.easy);
  }
  r.reps++; r.last = now;
  return r;
}
function srsWhenTxt(due, now = Date.now()){
  if (due <= now) return t("srsNow");
  const dd = Math.round((dayStart(due) - dayStart(now)) / DAY);
  if (dd <= 0) { const m = Math.round((due - now) / MIN), u = t("srsU"), sp = LANG === "ru" ? " " : ""; return t("srsIn", m < 1 ? u.lt : m < 60 ? `${m}${sp}${u.m}` : `${Math.round(m/60)}${sp}${u.h}`); }
  return dd === 1 ? t("srsTmrw") : t("srsIn", t("srsDays", dd));
}
const srsDueCount = (scope, now = Date.now()) => qWords(scope).filter(w=>{ const r = qR(w.fr); return r && r.due <= now; }).length;
function sdToday(){ const k = dayKey(), sd = S.quiz.sd || {}; return sd.d === k ? Object.assign({n:0, a:0, x:0}, sd) : {d:k, n:0, a:0, x:0}; }
function updSrsBadge(){
  const b = document.getElementById("srsBadge"); if (!b || COURSE !== "fr") return;
  const n = srsDueCount("all"); b.hidden = !n; b.textContent = n > 99 ? "99+" : String(n); b.title = `${n} ${t("srsBadge")}`;
}
/* прогресс старых режимов (lv без r) → в повторения; звёздочки → в Избранное */
let QZ_MIG = null;
function qzMigrate(){
  if (QZ_MIG === S.quiz) return; QZ_MIG = S.quiz;
  let ch = false; const now = Date.now();
  qWords("all").forEach(w=>{
    const k = qKey(w.fr), c = S.quiz.c[k]; if (!c) return;
    if (!c.r && c.lv >= 1) { c.r = c.lv >= 2 ? {st:2, step:0, ivl:c.lv >= 3 ? 3 : 1, ef:2.5, reps:1, lap:0, due:dayStart(now)} : {st:1, ls:1, step:0, ivl:0, ef:2.5, reps:0, lap:0, due:now}; ch = true; }
    if (c.s) {
      if (!isFav(w.fr)) { if (!DICT) buildDict(); const d = DICT.get(dk(w.fr)); (S.quiz.fav = S.quiz.fav || []).push({fr:w.fr, ru:d ? d.ru : (LANG === "en" ? "" : w.m), en:d ? d.en : (LANG === "en" ? w.m : ""), at:now}); }
      c.s = 0; ch = true;
    }
  });
  if (ch) touch("quiz");
}
function qzCounts(scope){
  const now = Date.now(), ws = qWords(scope); let nw = 0, lr = 0, kn = 0, due = 0;
  ws.forEach(w=>{ const r = qR(w.fr); if (!r) nw++; else if (r.st === 2) { kn++; if (r.due <= now) due++; } else { lr++; due++; } });
  return {n:ws.length, nw, lr, kn, due};
}
const qzIsSet = scope => scope !== "all" && scope !== "fav" && !/^u:/.test(scope);
const qzNewToday = (scope, c) => qzIsSet(scope) ? Math.min(10, c.nw) : Math.min(c.nw, Math.max(0, (QZ.perDay || 10) + sdToday().x - sdToday().n));

/* ---------- оформление слова, примеры из учебника ---------- */
function qzFrHtml(fr){
  return String(fr).split(" / ").map(p=>{
    const e = esc(p), m = e.match(/^(le|un|la|une|les|des)(?=\s)/i); if (!m) return e;
    const cls = /^(le|un)$/i.test(m[1]) ? "g-m" : /^(la|une)$/i.test(m[1]) ? "g-f" : "g-pl";
    return `<span class="${cls}">${m[1]}</span>${e.slice(m[1].length)}`;
  }).join(" / ");
}
const QEX = {top:null, list:[]}, QEXC = new Map();
const exNorm = s => " " + dk(s).replace(/[^a-zà-ÿœæç'-]+/gi, " ").replace(/\s+/g, " ").trim() + " ";
function qzExList(){
  if (QEX.top === TOP) return QEX.list;
  QEX.top = TOP; QEX.list = []; QEXC.clear();
  const P = new DOMParser(), seen = new Set();
  (TOP || []).forEach(tp=>{
    if (typeof tp.theory !== "string" || tp.theory.indexOf("exl") < 0) return;
    P.parseFromString(tp.theory, "text/html").querySelectorAll(".exl li").forEach(li=>{
      const f = li.querySelector(".fr"), tr = li.querySelector(".tr"); if (!f) return;
      const fr = f.textContent.replace(/\s+/g, " ").trim(), n = fr.split(" ").length;
      if (n < 3 || n > 14 || seen.has(fr)) return; seen.add(fr);
      QEX.list.push({fr, m:tr ? tr.textContent.replace(/\s+/g, " ").trim() : "", k:exNorm(fr)});
    });
  });
  return QEX.list;
}
const qzCore = fr => dk(String(fr).split(/\s+\/\s+/)[0]).replace(/\([^)]*\)/g, " ").replace(/[!?.…,:;«»"]/g, " ").replace(/\s+/g, " ").trim().replace(ART, "").replace(ELI, "");
function qzExample(w){
  const list = qzExList(), key = w.fr; if (QEXC.has(key)) return QEXC.get(key);
  const core = qzCore(w.fr); let best = null;
  if (core.length >= 3) {
    const a = " " + core + " ", b = "'" + core + " ", self = exNorm(w.fr);
    for (const e of list) if ((e.k.includes(a) || e.k.includes(b)) && e.k !== self && (!best || e.fr.length < best.fr.length)) best = e;
  }
  QEXC.set(key, best); return best;
}
function qzExHtml(w){
  const ex = qzExample(w); if (!ex) return "";
  const core = qzCore(w.fr), low = ex.fr.toLowerCase().replace(/[’`´‘ʼ]/g, "'"), i = core ? low.indexOf(core) : -1;
  const fr = i >= 0 ? esc(ex.fr.slice(0, i)) + "<b>" + esc(ex.fr.slice(i, i + core.length)) + "</b>" + esc(ex.fr.slice(i + core.length)) : esc(ex.fr);
  return `<div class="qq-ex">${qzSayBtn(ex.fr, "sm")}<div><p class="fr">${fr}</p>${ex.m ? `<p class="qq-ex-t">${esc(ex.m)}</p>` : ""}</div></div>`;
}
const qzSayBtn = (txt, cls) => synth ? `<button type="button" class="qq-say${cls ? " " + cls : ""}" data-say="${esc(txt)}" aria-label="${esc(t("qqPlay"))}" title="${esc(t("qqPlay"))}">${ICON_PLAY}</button>` : "";
const qzBindSay = root => $$("[data-say]", root).forEach(b=>b.addEventListener("click", e=>{ e.stopPropagation(); speak(b.dataset.say); }));

/* ---------- варианты ответа и проверка ---------- */
function qzOpts(w, field){
  const n = x => dk(x[field]), long = x => x[field].split(" ").length > 2, shape = x => long(x) === long(w);
  const ok = x => x.fr !== w.fr && n(x) !== n(w) && dk(x.m) !== dk(w.m);
  const all = qWords("all").concat(w.set === "fav" ? qWords("fav") : []);
  const same = all.filter(x=>x.set === w.set && ok(x)), other = all.filter(x=>x.set !== w.set && ok(x));
  const out = [];
  for (const g of [shuffle(same.filter(shape)), shuffle(same.slice()), shuffle(other.filter(shape)), shuffle(other.slice())])
    for (const x of g) { if (out.length >= 3) break; if (!out.some(y=>n(y) === n(x))) out.push(x); }
  return shuffle([w, ...out]);
}
function qzAccept(fr){
  const out = new Set([fr]);
  out.add(fr.replace(/\s*\([^)]*\)\s*$/, "").trim());
  if (/\(/.test(fr)) out.add(fr.replace(/\(([^)]*)\)/g, "$1").replace(/\s+/g, " ").trim());
  const parts = fr.split(/\s+\/\s+/);
  if (parts.length > 1) {
    const tail = parts[parts.length - 1].split(" ").slice(1).join(" ");
    parts.forEach(p=>{ out.add(p); out.add(p.replace(/\(([^)]*)\)/g, "$1")); if (/^(le|la|un|une)$/i.test(p) && tail) out.add(p + " " + tail); });
  }
  return [...out].filter(Boolean);
}
/* ok · acc (акценты) · noart (без артикля) — засчитываем; gender (другой артикль) · bad — ошибка */
function qzJudge(inp, fr){
  const acc = qzAccept(fr);
  /* «l ecole» с пробелом вместо апострофа считаем тем же ответом */
  inp = String(inp).replace(/(^|\s)(l|d|j|m|t|s|n|c|qu)\s+(?=[aeiouyhàâéèêëîïôûœ])/gi, "$1$2'");
  const v = judge(inp, acc);
  if (v !== "bad") return v;
  const hy = x => strip(norm(x)).replace(/-/g, " ");
  if (acc.some(a=>hy(a) === hy(inp))) return "acc";
  const n = norm(inp), core = x => strip(norm(x).replace(ART, "").replace(ELI, ""));
  if (acc.some(a=>core(a) === core(n) && core(a) !== strip(norm(a)))) return ART.test(n) || ELI.test(n) ? "gender" : "noart";
  return "bad";
}
const qzLong = w => w.fr.split(/\s+/).length > 3 || /…/.test(w.fr);

/* =========================================================
   страницы: главная Quizlet и страница набора
   ========================================================= */
let QS = null;   /* текущее занятие */
function renderQuizlet(sub){
  QS = null; qzKeys(null); clearInterval(qzTimer);
  qzMigrate();
  sub = sub || "";
  if (sub && (sub === "fav" || QSETS.some(s=>s.id === sub))) return qzSetView(sub);
  if (!/^(all|u:[0-9])$/.test(QZ.scope)) QZ.scope = "all";
  qzHome();
}
function qzStack(c, big){
  const p = x => c.n ? (x / c.n * 100).toFixed(1) + "%" : "0";
  return `<div class="qq-stack${big ? " big" : ""}"><span class="qq-bar3"><i class="k" style="width:${p(c.kn)}"></i><i class="l" style="width:${p(c.lr)}"></i></span>${big ? `<span class="qq-leg"><span><i class="k"></i>${t("qqSt")[2]} <b>${c.kn}</b></span><span><i class="l"></i>${t("qqSt")[1]} <b>${c.lr}</b></span><span><i></i>${t("qqSt")[0]} <b>${c.nw}</b></span></span>` : ""}</div>`;
}
function qzHome(){
  const scope = QZ.scope, c = qzCounts(scope), nNew = qzNewToday(scope, c), mins = Math.max(1, Math.round(c.due * 0.2 + nNew * 0.8));
  const units = [...new Set(QSETS.flatMap(s=>String(s.unit).split("–")))].sort();
  const scopes = [["all", t("qqScopeAll")], ...units.map(u=>["u:" + u, `<span class="qq-uw">Unité </span>${u}`])];
  const has = c.due + nNew > 0;
  let nextDue = null; if (!has) qWords(scope).forEach(w=>{ const r = qR(w.fr); if (r && (!nextDue || r.due < nextDue)) nextDue = r.due; });
  const empty = scope === "fav" && !c.n;
  const today = empty ? `<div class="qq-done-msg"><span class="qq-ico fav">${ICO_HEART}</span><div><h3>${t("qzFavEmptyH")}</h3><p>${t("qzFavEmpty")}</p></div></div>`
    : has ? `<div class="qq-nums"><div><b>${c.due}</b><span>${t("qqDue")}</span></div><div><b>${nNew}</b><span>${t("qqNew")}</span></div><div class="qq-min">${t("qqMin", mins)}</div></div>
      <button type="button" class="btn pri qq-startb" data-start>${t("qqStart")}${ARR}</button>`
    : `<div class="qq-done-msg"><span class="qq-ico ok">${f7("checkmark_alt")}</span><div><h3>${c.nw || nextDue ? t("qqAllDone") : t("qqAllLearned")}</h3>${nextDue ? `<p>${t("qqAllDoneP", srsWhenTxt(nextDue))}</p>` : ""}</div></div>
      ${c.nw ? `<button type="button" class="btn sec" data-more>${t("qqMoreNew", Math.min(5, c.nw))}</button>` : ""}`;
  const groups = [];
  QSETS.forEach(s=>{ let g = groups.find(x=>x.u === s.unit); if (!g) groups.push(g = {u:s.unit, sets:[]}); g.sets.push(s); });
  groups.sort((a, b)=>UORD(a.u) - UORD(b.u));
  const setCard = (id, title, sub, fav) => { const sc = qzCounts(id); return `<a class="qq-set${fav ? " is-fav" : ""}" href="#quizlet/${id}"><span class="qq-set-t">${fav ? ICO_HEART : ""}${esc(title)}</span>${sub ? `<span class="qq-set-s">${esc(sub)}</span>` : ""}${qzStack(sc)}<span class="qq-set-m">${t("qqKnownOf", sc.kn, sc.n)}${sc.due ? ` · <em>${t("qqDueN", sc.due)}</em>` : ""}</span></a>`; };
  main.innerHTML = `<div class="col qq-col">
  <header class="qq-head"><h1>Quizlet</h1><p class="qq-lead">${t("qqLead")}</p></header>
  <section class="qq-today">
    <div class="qq-tl">
      <p class="qq-eye">${t("qqToday")}</p>
      <div class="qq-scope seg" role="tablist">${scopes.map(([id, l])=>`<button type="button" role="tab" data-scope="${id}" class="${scope === id ? "on" : ""}">${l}</button>`).join("")}</div>
      <div class="qq-main">${today}</div>
      ${empty ? "" : qzStack(c, true)}
    </div>
    <div class="qq-tr">
      <p class="qq-eye">${t("qqHowH")}</p>
      <ol class="qq-how">${t("qqHow").map(([h, p])=>`<li><b>${h}</b><span>${p}</span></li>`).join("")}</ol>
      <div class="qq-per"><span>${t("qqPerDay")}</span><span class="seg">${[5, 10, 15, 20].map(n=>`<button type="button" data-per="${n}" class="${(QZ.perDay || 10) === n ? "on" : ""}">${n}</button>`).join("")}</span></div>
    </div>
  </section>
  <div class="qq-sec-h"><h2>${t("qqSets")}</h2><p>${t("qqSetsSub")}</p></div>
  <div class="qq-group"><h3 class="qq-gh">${t("qqMine")}</h3><div class="qq-sets">${setCard("fav", t("qzFav"), t("qqFavSub"), true)}</div></div>
  ${groups.map(g=>`<div class="qq-group"><h3 class="qq-gh"><span class="qq-upill">${g.u.includes("–") ? "Unités " + g.u : "Unité " + g.u}</span></h3><div class="qq-sets">${g.sets.map(s=>setCard(s.id, s.t, LANG === "en" ? s.en : s.ru)).join("")}</div></div>`).join("")}
  </div>`;
  $$("[data-scope]", main).forEach(b=>b.addEventListener("click", ()=>{ QZ.scope = b.dataset.scope; saveQZ(); qzHome(); }));
  $$("[data-per]", main).forEach(b=>b.addEventListener("click", ()=>{ QZ.perDay = +b.dataset.per; saveQZ(); qzHome(); }));
  const st = $("[data-start]", main); if (st) st.addEventListener("click", ()=>qzSession(scope, null, ""));
  const mo = $("[data-more]", main); if (mo) mo.addEventListener("click", ()=>{ const sd = sdToday(); sd.x += 5; S.quiz.sd = sd; touch("quiz"); qzSession(scope, Math.min(5, c.nw), ""); });
}

function qzSetView(id){
  const isFavSet = id === "fav", set = QSETS.find(s=>s.id === id);
  const title = isFavSet ? t("qzFav") : set.t, sub = isFavSet ? t("qqFavSub") : (LANG === "en" ? set.en : set.ru);
  const ws = qWords(id), c = qzCounts(id), now = Date.now();
  const row = w => {
    const s = qSt(w.fr), r = qR(w.fr);
    const chip = s === 2 ? (r.due <= now ? `<span class="qq-chip due">${t("qqRevNow")}</span>` : `<span class="qq-chip s2" title="${esc(t("qqRevIn", srsWhenTxt(r.due)))}">${t("qqStOne")[2]}</span>`) : `<span class="qq-chip s${s}">${t("qqStOne")[s]}</span>`;
    return `<div class="qq-row">${qzSayBtn(w.fr, "sm")}<span class="qq-rfr fr">${qzFrHtml(w.fr)}</span><span class="qq-rm">${esc(w.m)}</span>${chip}<button type="button" class="qz-heart${isFav(w.fr) ? " on" : ""}" data-fav="${esc(w.fr)}" aria-label="${esc(isFav(w.fr) ? t("spUnfav") : t("spFav"))}" title="${esc(isFav(w.fr) ? t("spUnfav") : t("spFav"))}">${ICO_HEART}</button></div>`;
  };
  main.innerHTML = `<div class="col qq-col">
  <a class="qq-backl" href="#quizlet">${ARL}${t("qqBack")}</a>
  <header class="qq-head"><p class="qq-eye">${isFavSet ? t("qqMine") : (String(set.unit).includes("–") ? "Unités " : "Unité ") + set.unit}</p><h1>${isFavSet ? ICO_HEART : ""}${esc(title)}</h1><p class="qq-lead">${esc(sub)}</p></header>
  ${ws.length ? `${qzStack(c, true)}
  <div class="qq-actions"><button type="button" class="btn pri" data-a="learn">${t("qqLearnSet")}${ARR}</button><button type="button" class="btn sec" data-a="cards">${f7("rectangle_stack")}${t("qqCards")}</button>${ws.length >= 3 ? `<button type="button" class="btn sec" data-a="match">${f7("timer")}${t("qqMatch")}</button>` : ""}</div>
  <section class="qq-tool" hidden></section>
  <div class="qq-sec-h"><h2>${t("qqWords")} <span>${ws.length}</span></h2></div>
  <div class="qq-list">${ws.map(row).join("")}</div>`
  : `<div class="qq-done-msg"><span class="qq-ico fav">${ICO_HEART}</span><div><h3>${t("qzFavEmptyH")}</h3><p>${t("qzFavEmpty")}</p></div></div>`}
  </div>`;
  qzBindSay(main);
  $$("[data-fav]", main).forEach(b=>b.addEventListener("click", ()=>{
    const fr = b.dataset.fav, w = ws.find(x=>x.fr === fr) || {fr, m:""};
    let e = {fr}; if (!isFav(fr)) { if (!DICT) buildDict(); const d = DICT.get(dk(fr)); e = d ? {fr, ru:d.ru, en:d.en} : {fr, ru:LANG === "en" ? "" : w.m, en:LANG === "en" ? w.m : ""}; }
    const on = toggleFav(e); toast(on ? t("favAdded") : t("favRemoved"));
    if (isFavSet) { const y = window.scrollY; qzSetView(id); window.scrollTo(0, y); } else { b.classList.toggle("on", on); b.setAttribute("aria-label", on ? t("spUnfav") : t("spFav")); b.title = b.getAttribute("aria-label"); }
  }));
  const tool = $(".qq-tool", main);
  const open = (mode, btn) => {
    const was = tool.dataset.mode === mode && !tool.hidden;
    $$("[data-a]", main).forEach(x=>x.classList.toggle("on", false));
    qzKeys(null); clearInterval(qzTimer);
    if (was) { tool.hidden = true; tool.dataset.mode = ""; return; }
    tool.hidden = false; tool.dataset.mode = mode; btn.classList.add("on");
    (mode === "cards" ? qzCards : qzMatch)(tool, id);
    tool.scrollIntoView({behavior:"smooth", block:"nearest"});
  };
  $$("[data-a]", main).forEach(b=>b.addEventListener("click", ()=>{ if (b.dataset.a === "learn") qzSession(id, null, id); else open(b.dataset.a, b); }));
}
/* сердечко в окошке перевода: обновить страницу набора, если она открыта */
function qzRefreshList(){ if (QS) return; const h = decodeURIComponent(location.hash.slice(1)); if (!/^quizlet/.test(h)) return; const y = window.scrollY; renderQuizlet(h.slice(8)); window.scrollTo(0, y); }

/* =========================================================
   занятие
   ========================================================= */
function qzPickNew(fresh, n){
  if (n <= 0) return [];
  const by = new Map(); fresh.forEach(w=>{ if (!by.has(w.set)) by.set(w.set, []); by.get(w.set).push(w); });
  const groups = [...by.values()].sort((a, b)=>UORD(a[0].unit) - UORD(b[0].unit));
  const out = [];
  while (out.length < n && groups.some(g=>g.length)) {
    /* три соседних набора по порядку учебника, по слову из каждого */
    for (const g of groups.filter(g=>g.length).slice(0, 3)) { if (out.length >= n) break; out.push(g.shift()); }
  }
  return out;
}
function qzSession(scope, extraNew, origin){
  const now = Date.now(), ws = qWords(scope), learn = [], rev = [], fresh = [];
  ws.forEach(w=>{ const r = qR(w.fr); if (!r) fresh.push(w); else if (r.st === 2) { if (r.due <= now) rev.push(w); } else learn.push(w); });
  rev.sort((a, b)=>qR(a.fr).due - qR(b.fr).due);
  const nNew = extraNew != null ? extraNew : qzNewToday(scope, {nw:fresh.length});
  const queue = [];
  learn.forEach(w=>{ const r = qR(w.fr); queue.push(r.st === 3 ? {w, kind:"re", orig:"rev", stage:3} : {w, kind:"new", stage:Math.max(1, Math.min(3, r.ls || 1))}); });
  shuffle(rev.slice(0, 60)).forEach(w=>queue.push({w, kind:"rev", orig:"rev", stage:3}));
  const freshQ = qzPickNew(fresh, nNew);
  QS = {scope, origin, queue, fresh:freshQ, step:0, last:null, done:0, total:0, revN:0, st:{nw:0, rv:0, ok:0, n:0}, miss:new Map(), undo:null, cur:null, phase:"q", tok:0};
  QS.total = queue.reduce((a, i)=>a + (i.kind === "new" ? 4 - i.stage : 1), 0) + freshQ.length * 4;
  main.innerHTML = `<div class="col qq-col"><section class="qq-ses">
    <header class="qq-sh"><button type="button" class="qq-x" aria-label="${esc(t("qqExit"))}" title="${esc(t("qqExit"))}">${f7("xmark")}</button><span class="qq-pbar"><i></i></span><span class="qq-left"></span></header>
    <div class="qq-q"></div><p class="qq-keys"></p></section></div>`;
  $(".qq-x", main).addEventListener("click", ()=>qzFinish(true));
  window.scrollTo(0, 0);
  qzKeys(qzSesKey);
  qzNext();
}
function qzNextItem(){
  const q = QS.queue, inProg = q.filter(i=>i.kind === "new").length;
  if (QS.fresh.length && inProg < 3 && (!q.length || q[0].w.fr === QS.last || QS.step % 2 === 0)) q.unshift({w:QS.fresh.shift(), kind:"new", stage:0});
  if (!q.length) return null;
  if (q.length > 1 && q[0].w.fr === QS.last) [q[0], q[1]] = [q[1], q[0]];
  return q.shift();
}
function qzQType(it){
  if (it.kind === "new") return it.stage === 0 ? "intro" : it.stage === 1 ? "mcM" : it.stage === 2 ? "mcFr" : (qzLong(it.w) ? "flip" : "type");
  if (qzLong(it.w)) return "flip";
  if (it.kind === "rev" && synth && QS.revN % 3 === 2) return "listen";
  return "type";
}
function qzPaintHead(){
  const ses = $(".qq-ses", main); if (!ses) return;
  $(".qq-pbar i", ses).style.width = Math.min(100, QS.total ? QS.done / QS.total * 100 : 0) + "%";
  const left = new Set(QS.queue.map(i=>i.w.fr)); QS.fresh.forEach(w=>left.add(w.fr)); if (QS.cur && QS.phase !== "fb") left.add(QS.cur.w.fr);
  $(".qq-left", ses).textContent = t("qqLeft", left.size);
}
function qzNext(){
  if (!QS) return;
  const it = qzNextItem();
  if (!it) return qzFinish(false);
  QS.cur = it; QS.phase = "q"; QS.tok++; QS.undo = null;
  if (window.scrollY > 0 && window.innerWidth <= 640) window.scrollTo(0, 0);
  it.q = qzQType(it); if (it.kind === "rev") QS.revN++;
  const w = it.w, box = $(".qq-q", main), keys = $(".qq-keys", main);
  const word = (big) => `<div class="qq-word">${qzSayBtn(w.fr)}<span class="qq-fr fr${big ? " big" : ""}">${qzFrHtml(w.fr)}</span></div>`;
  const kind = txt => `<p class="qq-kind${it.kind === "new" && it.stage === 0 ? " is-new" : ""}">${it.kind === "re" ? `<span class="qq-re">${t("qqKRe")}</span>` : ""}${txt}</p>`;
  const opts = (list, field) => `<div class="qq-opts">${list.map((o, k)=>`<button type="button" class="qq-opt${field === "fr" ? " fr" : ""}" data-fr="${esc(o.fr)}"><kbd>${k + 1}</kbd><span>${field === "fr" ? qzFrHtml(o.fr) : esc(o.m)}</span></button>`).join("")}</div>`;
  let html = "";
  if (it.q === "intro") {
    html = `${kind(t("qqKNew"))}${word(true)}<p class="qq-mean">${esc(w.m)}</p>${qzExHtml(w)}
      <div class="qq-acts"><button type="button" class="btn pri" data-go>${t("qqGotIt")}${ARR}</button><button type="button" class="btn sec" data-known>${t("qqKnowIt")}</button></div>`;
    keys.textContent = t("qqKeysNext");
  } else if (it.q === "mcM") {
    html = `${kind(t("qqKMcM"))}${word(true)}${opts(qzOpts(w, "m"), "m")}<div class="qq-fb" aria-live="polite"></div>`; keys.textContent = t("qqKeysMc");
  } else if (it.q === "mcFr") {
    html = `${kind(t("qqKMcFr"))}<p class="qq-prompt">${esc(w.m)}</p>${opts(qzOpts(w, "fr"), "fr")}<div class="qq-fb" aria-live="polite"></div>`; keys.textContent = t("qqKeysMc");
  } else if (it.q === "listen") {
    html = `${kind(t("qqKListen"))}<div class="qq-word"><button type="button" class="qq-say big" data-say="${esc(w.fr)}" aria-label="${esc(t("qqPlay"))}">${ICON_PLAY}</button></div>${opts(qzOpts(w, "m"), "m")}<div class="qq-fb" aria-live="polite"></div>`; keys.textContent = t("qqKeysMc");
  } else if (it.q === "type") {
    html = `${kind(t("qqKType"))}<p class="qq-prompt">${esc(w.m)}</p>${accBar()}<div class="qq-type"><input class="ans qq-in" ${inputAttrs} placeholder="${esc(t("qqPh"))}" aria-label="${esc(t("qqKType"))}"><button type="button" class="btn pri" data-check>${t("qqCheck")}</button><button type="button" class="btn sec" data-idk>${t("qqIdk")}</button></div><div class="qq-fb" aria-live="polite"></div>`;
    keys.textContent = t("qqKeysType");
  } else {
    html = `${kind(t("qqKFlip"))}<p class="qq-prompt">${esc(w.m)}</p><div class="qq-flip"><button type="button" class="btn pri" data-show>${t("qqShow")}</button></div><div class="qq-fb" aria-live="polite"></div>`;
    keys.textContent = t("qqKeysFlip");
  }
  box.className = "qq-q t-" + it.q; box.innerHTML = html;
  qzBindSay(box); qzPaintHead();
  if (it.q === "intro") {
    $("[data-go]", box).addEventListener("click", ()=>{ qzApply(it, "intro"); qzNext(); });
    $("[data-known]", box).addEventListener("click", ()=>{ qzApply(it, "known"); qzNext(); });
    $("[data-go]", box).focus({preventScroll:true});
    speak(w.fr);
  } else if (/^mc|^listen/.test(it.q)) {
    $$(".qq-opt", box).forEach(b=>b.addEventListener("click", ()=>qzPick(b)));
    if (it.q !== "mcFr") speak(w.fr);
  } else if (it.q === "type") {
    const inp = $(".qq-in", box); inp.focus({preventScroll:true});
    inp.addEventListener("keydown", e=>{ if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); qzCheckType(false); } });
    $("[data-check]", box).addEventListener("click", ()=>qzCheckType(false));
    $("[data-idk]", box).addEventListener("click", ()=>qzCheckType(true));
  } else {
    $("[data-show]", box).addEventListener("click", qzFlipShow);
  }
}
function qzPick(b){
  if (!QS || QS.phase !== "q") return;
  const it = QS.cur, ok = b.dataset.fr === it.w.fr, box = $(".qq-q", main);
  $$(".qq-opt", box).forEach(x=>{ x.disabled = true; if (x.dataset.fr === it.w.fr) x.classList.add("is-ok"); });
  if (!ok) b.classList.add("is-bad");
  qzApply(it, ok ? "ok" : "bad");
  if (it.q === "mcFr" || !ok) speak(it.w.fr);
  qzFeedback(ok ? "ok" : "bad", ok && it.q === "mcM" ? "" : `<span class="qq-fbw fr">${qzFrHtml(it.w.fr)}</span> — ${esc(it.w.m)}`);
}
function qzCheckType(giveUp){
  if (!QS || QS.phase !== "q") return;
  const it = QS.cur, box = $(".qq-q", main), inp = $(".qq-in", box);
  const v = giveUp ? "bad" : qzJudge(inp.value, it.w.fr); if (v === "empty") return;
  const good = v === "ok" || v === "acc" || v === "noart";
  inp.disabled = true; inp.classList.add(v === "ok" ? "r-ok" : good ? "r-acc" : "r-bad");
  if (!good) inp.classList.add("a-bad");
  qzApply(it, v === "ok" ? "ok" : good ? "hard" : "bad");
  speak(it.w.fr);
  const right = `<span class="qq-fbw fr">${qzFrHtml(it.w.fr)}</span>`;
  if (v === "ok") qzFeedback("ok", dk(inp.value) !== dk(it.w.fr) ? right : "");
  else if (good) qzFeedback("acc", `${v === "acc" ? t("qqAlmostAcc") : t("qqAlmostArt")} ${right}`);
  else qzFeedback("bad", `${v === "gender" ? t("qqGender") + " " : ""}${right}${qzExHtml(it.w)}`, !giveUp);
}
function qzFlipShow(){
  if (!QS || QS.phase !== "q" || QS.cur.q !== "flip") return;
  const it = QS.cur, f = $(".qq-flip", main);
  QS.phase = "flip";
  f.innerHTML = `<div class="qq-word">${qzSayBtn(it.w.fr)}<span class="qq-fr fr">${qzFrHtml(it.w.fr)}</span></div><div class="qq-self"><button type="button" class="btn sec" data-g="1"><kbd>1</kbd>${t("qqForgot")}</button><button type="button" class="btn pri" data-g="2"><kbd>2</kbd>${t("qqRemember")}</button></div>`;
  qzBindSay(f); speak(it.w.fr);
  $$("[data-g]", f).forEach(b=>b.addEventListener("click", ()=>qzSelf(b.dataset.g === "2")));
  $('[data-g="2"]', f).focus({preventScroll:true});
}
function qzSelf(ok){
  if (!QS || QS.phase !== "flip") return;
  QS.phase = "q"; qzApply(QS.cur, ok ? "ok" : "bad"); qzNext();
}
function qzFeedback(kind, html, canOverride){
  QS.phase = "fb";
  const fb = $(".qq-fb", main), tok = QS.tok;
  const head = kind === "ok" ? `<b>${t("qqOk")}</b>` : kind === "acc" ? "" : `<b>${t("qqRight")}</b>`;
  fb.className = "qq-fb on " + kind;
  fb.innerHTML = `<div class="qq-fbt">${head} ${html}</div>${kind === "ok" ? "" : `<div class="qq-fbb">${canOverride ? `<button type="button" class="qq-ovr" data-ovr>${t("qqOverride")}</button>` : ""}<button type="button" class="btn pri" data-next>${t("qqNext")}${ARR}</button></div>`}`;
  qzBindSay(fb); qzPaintHead();
  $(".qq-keys", main).textContent = t("qqKeysNext");
  const n = $("[data-next]", fb); if (n) { n.addEventListener("click", qzAdvance); n.focus({preventScroll:true}); }
  const o = $("[data-ovr]", fb); if (o) o.addEventListener("click", qzOverride);
  if (kind === "ok") setTimeout(()=>{ if (QS && QS.tok === tok && QS.phase === "fb") qzAdvance(); }, 900);
}
function qzAdvance(){ if (!QS || QS.phase !== "fb") return; QS.phase = "q"; qzNext(); }
function qzApply(it, res){
  const w = it.w, k = qKey(w.fr), now = Date.now();
  QS.undo = {k, it, prevC:S.quiz.c[k] ? JSON.parse(JSON.stringify(S.quiz.c[k])) : null, prevSd:JSON.parse(JSON.stringify(S.quiz.sd || {})), st:Object.assign({}, QS.st), done:QS.done, total:QS.total, missHad:QS.miss.has(w.fr), again:null};
  let r = qR(w.fr), again = null, gap = 3;
  const sd = sdToday();
  if (res === "intro") { r = {st:1, ls:1, step:0, ivl:0, ef:2.5, reps:0, lap:0, due:now}; sd.n++; again = {w, kind:"new", stage:1}; gap = 2; }
  else if (res === "known") { r = srsNext(null, 4, now); QS.total -= 3; }
  else {
    sd.a++; QS.st.n++;
    if (res === "bad") { QS.miss.set(w.fr, w); QS.total++; gap = 2; }
    else QS.st.ok++;
    if (it.kind === "new") {
      r = Object.assign({st:1, step:0, ivl:0, ef:2.5, reps:0, lap:0, due:now}, r || {});
      if (res === "bad") { again = {w, kind:"new", stage:it.stage}; r.due = now; }
      else if (it.stage >= 3) { r = Object.assign({}, r, {st:2, step:0, ivl:1, reps:(r.reps || 0) + 1, due:dayStart(now) + DAY, last:now}); delete r.ls; QS.st.nw++; }
      else { r.ls = it.stage + 1; again = {w, kind:"new", stage:it.stage + 1}; }
    } else {
      if (res === "bad") { r = srsNext(r, 1, now); again = {w, kind:"re", orig:"rev", stage:3}; }
      else { r = srsNext(r, it.kind === "re" ? 3 : res === "hard" ? 2 : 3, now); QS.st.rv++; }
    }
    gameAnswer("q|" + k, null, res === "bad" ? "bad" : "ok", {daily:true, xp:2});
  }
  S.quiz.sd = sd;
  qSet(w.fr, {r});
  QS.done++; QS.step++; QS.last = w.fr;
  if (again) { const q = QS.queue; q.splice(Math.min(q.length, gap), 0, again); QS.undo.again = again; }
  updSrsBadge();
}
/* «Я ответил верно»: отменяем ошибку и засчитываем ответ */
function qzOverride(){
  const u = QS && QS.undo; if (!u || QS.phase !== "fb") return;
  if (u.prevC) S.quiz.c[u.k] = u.prevC; else delete S.quiz.c[u.k];
  S.quiz.sd = u.prevSd; touch("quiz");
  if (u.again) { const i = QS.queue.indexOf(u.again); if (i >= 0) QS.queue.splice(i, 1); }
  QS.st = u.st; QS.done = u.done; QS.total = u.total; QS.step--; if (!u.missHad) QS.miss.delete(u.it.w.fr);
  qzApply(u.it, "ok");
  QS.phase = "q"; qzNext();
}
function qzSesKey(e){
  if (!QS || !$(".qq-ses", main) || e.metaKey || e.ctrlKey || e.altKey) return;
  const tag = (e.target || {}).tagName || "";
  if (e.key === "Escape") { e.preventDefault(); return qzFinish(true); }
  if (QS.phase === "fb") { if (e.key === "Enter" || (e.key === " " && tag !== "INPUT")) { e.preventDefault(); qzAdvance(); } return; }
  if (/INPUT|TEXTAREA/.test(tag)) return;
  const q = QS.cur && QS.cur.q;
  if (q === "intro" && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); qzApply(QS.cur, "intro"); return qzNext(); }
  if (/^mc|^listen/.test(q || "") && /^[1-4]$/.test(e.key)) { const b = $$(".qq-opt", main)[+e.key - 1]; if (b) { e.preventDefault(); qzPick(b); } return; }
  if (q === "flip") {
    if (QS.phase === "q" && (e.key === " " || e.key === "Enter")) { e.preventDefault(); return qzFlipShow(); }
    if (QS.phase === "flip" && (e.key === "1" || e.key === "2")) { e.preventDefault(); return qzSelf(e.key === "2"); }
  }
}
function qzForecast(scope){
  const now = Date.now(), d0 = dayStart(now), c = [0, 0, 0, 0, 0, 0, 0];
  qWords(scope).forEach(w=>{ const r = qR(w.fr); if (!r) return; const i = Math.max(0, Math.round((dayStart(r.due) - d0) / DAY)); if (i < 7) c[i]++; });
  if (!c.some(Boolean)) return "";
  const mx = Math.max(1, ...c), fmt = new Intl.DateTimeFormat(LANG === "en" ? "en-GB" : "ru-RU", {weekday:"short"});
  return `<div class="qq-fcw"><p class="qq-eye">${t("srsFc")}</p><div class="qq-fc">${c.map((n, i)=>`<div><b>${n || ""}</b><i class="${n ? "" : "z"}" style="height:${n ? Math.max(6, Math.round(n/mx*56)) : 3}px"></i><span>${i < 2 ? t("srsDay")[i] : fmt.format(new Date(d0 + i*DAY + 12*3600e3))}</span></div>`).join("")}</div></div>`;
}
function qzFinish(early){
  if (!QS) return;
  const s = QS, scope = s.scope, origin = s.origin; QS = null; qzKeys(null);
  const left = s.queue.length + s.fresh.length + (early && s.cur && s.phase !== "fb" ? 1 : 0);
  const acc = s.st.n ? Math.round(s.st.ok / s.st.n * 100) : 0;
  let nextDue = null; qWords(scope).forEach(w=>{ const r = qR(w.fr); if (r && (!nextDue || r.due < nextDue)) nextDue = r.due; });
  const c = qzCounts(scope), more = !qzIsSet(scope) && c.nw ? Math.min(5, c.nw) : qzIsSet(scope) && c.nw ? Math.min(10, c.nw) : 0;
  const miss = [...s.miss.values()];
  main.innerHTML = `<div class="col qq-col"><section class="qq-ses qq-sum">
    <span class="qq-ico ${early && left ? "pause" : "ok"}">${f7(early && left ? "pause_fill" : "checkmark_alt")}</span>
    <h2>${early && left ? t("qqPauseH") : t("qqDoneH")}</h2>
    ${s.st.n || s.st.nw ? `<div class="qq-sumn"><div><b>${s.st.nw}</b><span>${t("qqSumNew")}</span></div><div><b>${s.st.rv}</b><span>${t("qqSumRev")}</span></div><div><b>${acc}%</b><span>${t("qqSumAcc")}</span></div></div>` : ""}
    ${nextDue && nextDue > Date.now() ? `<p class="qq-lead">${t("qqNextRev", srsWhenTxt(nextDue))}</p>` : ""}
    ${qzForecast(scope)}
    ${miss.length ? `<div class="qq-miss"><p class="qq-eye">${t("qqMistakes")}</p>${miss.map(w=>`<div class="qq-row">${qzSayBtn(w.fr, "sm")}<span class="qq-rfr fr">${qzFrHtml(w.fr)}</span><span class="qq-rm">${esc(w.m)}</span></div>`).join("")}</div>` : ""}
    <div class="qq-acts">${early && left ? `<button type="button" class="btn pri" data-cont>${t("qqGoOn")}${ARR}</button>` : more ? `<button type="button" class="btn pri" data-more>${t("qqMoreNew", more)}</button>` : ""}<a class="btn sec" href="#quizlet${origin ? "/" + origin : ""}">${origin ? t("qqToSet") : t("qqToSets")}</a></div>
  </section></div>`;
  qzBindSay(main); window.scrollTo(0, 0);
  const ct = $("[data-cont]", main); if (ct) ct.addEventListener("click", ()=>qzSession(scope, null, origin));
  const mo = $("[data-more]", main); if (mo) mo.addEventListener("click", ()=>{ if (!qzIsSet(scope)) { const sd = sdToday(); sd.x += more; S.quiz.sd = sd; touch("quiz"); } qzSession(scope, more, origin); });
}

/* =========================================================
   карточки и подбор (на странице набора)
   ========================================================= */
function qzCards(box, id){
  let deck = qWords(id); if (QZ.shuf) deck = shuffle(deck.slice());
  let i = 0, flipped = false;
  const sideF = () => QZ.dir === "fr" ? "fr" : "m";
  const draw = () => {
    const w = deck[i], fr = sideF() === "fr", showFr = fr !== flipped;
    box.innerHTML = `<div class="qq-ctop"><span class="seg"><button type="button" data-dir="fr" class="${QZ.dir === "fr" ? "on" : ""}">${t("dirFr")}</button><button type="button" data-dir="m" class="${QZ.dir === "m" ? "on" : ""}">${t("dirRu")}</button></span><button type="button" class="chip-t${QZ.shuf ? " on" : ""}" data-shuf>${f7("shuffle", "f7-in")}${t("qqShuffle")}</button><span class="qq-ctr">${i + 1} / ${deck.length}</span></div>
      <div class="qq-card${flipped ? " flipped" : ""}" role="button" tabindex="0" aria-label="${esc(t("qqFlip"))}">
        ${showFr ? `<div class="qq-word">${qzSayBtn(w.fr)}<span class="qq-fr fr big">${qzFrHtml(w.fr)}</span></div>${flipped ? qzExHtml(w) : ""}` : `<p class="qq-prompt">${esc(w.m)}</p>${flipped && qzExample(w) ? qzExHtml(w) : ""}`}
        ${flipped ? "" : `<span class="qq-hint">${t("qqFlip")}</span>`}
      </div>
      <div class="qq-cnav"><button type="button" class="btn sec" data-prev aria-label="${esc(t("qzPrev"))}">${ARL}</button><button type="button" class="btn sec" data-flip>${f7("arrow_2_circlepath", "f7-in")}${t("qqFlipBtn")}</button><button type="button" class="btn sec" data-next aria-label="${esc(t("qzNext"))}">${ARR}</button></div>
      <p class="qq-keys">${t("qqCardsKeys")}</p>`;
    qzBindSay(box);
    $(".qq-card", box).addEventListener("click", e=>{ if (e.target.closest("button")) return; flip(); });
    $("[data-flip]", box).addEventListener("click", flip);
    $("[data-prev]", box).addEventListener("click", ()=>go(-1));
    $("[data-next]", box).addEventListener("click", ()=>go(1));
    $("[data-shuf]", box).addEventListener("click", ()=>{ QZ.shuf = !QZ.shuf; saveQZ(); qzCards(box, id); });
    $$("[data-dir]", box).forEach(b=>b.addEventListener("click", ()=>{ QZ.dir = b.dataset.dir; saveQZ(); flipped = false; draw(); }));
  };
  const flip = () => { flipped = !flipped; draw(); if (flipped === (sideF() === "m")) speak(deck[i].fr); };
  const go = d => { i = (i + d + deck.length) % deck.length; flipped = false; draw(); if (sideF() === "fr") speak(deck[i].fr); };
  qzKeys(e=>{
    if (!document.body.contains(box) || box.hidden || /INPUT|TEXTAREA/.test((e.target || {}).tagName || "") || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === " ") { e.preventDefault(); flip(); } else if (e.key === "ArrowRight") { e.preventDefault(); go(1); } else if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
  });
  draw();
}
function qzMatch(box, id){
  clearInterval(qzTimer);
  const ws = shuffle(qWords(id).slice()).slice(0, 6);
  const tiles = shuffle(ws.flatMap((w, k)=>[{k, txt:w.fr, fr:true}, {k, txt:w.m, fr:false}]));
  let first = null, left = ws.length, t0 = 0;
  const best = S.quiz.best[id];
  box.innerHTML = `<div class="qq-ctop"><span class="qq-mh">${t("qqMatchHint")}</span><span class="qq-ctr" id="qqClock">0.0 s</span>${best ? `<span class="qq-ctr ok">${t("qqBest", String(best).replace(".", LANG === "ru" ? "," : "."))}</span>` : ""}</div><div class="qq-grid">${tiles.map((x, i)=>`<button type="button" class="qq-tile${x.fr ? " fr" : ""}" data-i="${i}">${x.fr ? qzFrHtml(x.txt) : esc(x.txt)}</button>`).join("")}</div>`;
  const clock = $("#qqClock", box);
  $$(".qq-tile", box).forEach(b=>b.addEventListener("click", ()=>{
    if (b.classList.contains("gone")) return;
    if (!t0) { t0 = performance.now(); qzTimer = setInterval(()=>{ clock.textContent = ((performance.now() - t0)/1000).toFixed(1) + " s"; }, 100); }
    const x = tiles[+b.dataset.i];
    if (x.fr) speak(x.txt);
    if (!first) { first = b; b.classList.add("sel"); return; }
    if (first === b) { b.classList.remove("sel"); first = null; return; }
    const y = tiles[+first.dataset.i];
    if (x.k === y.k && x.fr !== y.fr) {
      [b, first].forEach(el=>{ el.classList.remove("sel"); el.classList.add("ok"); setTimeout(()=>el.classList.add("gone"), 250); });
      first = null; left--;
      if (!left) {
        clearInterval(qzTimer); const s = +((performance.now() - t0)/1000).toFixed(1);
        if (!best || s < best) { S.quiz.best[id] = s; touch("quiz"); }
        setTimeout(()=>{ if (!document.body.contains(box)) return; box.innerHTML = `<div class="qq-mdone"><span class="qq-ico ok">${f7("timer")}</span><h3>${t("qqMatchDone", String(s).replace(".", LANG === "ru" ? "," : "."))}</h3><p class="qq-lead">${t("qqBest", String(S.quiz.best[id]).replace(".", LANG === "ru" ? "," : "."))}</p><button type="button" class="btn pri" data-again>${t("qqAgain")}</button></div>`; $("[data-again]", box).addEventListener("click", ()=>qzMatch(box, id)); }, 350);
      }
    } else {
      const a = first; [b, a].forEach(el=>el.classList.add("bad")); first = null;
      setTimeout(()=>[b, a].forEach(el=>el.classList.remove("bad", "sel")), 450);
    }
  }));
}

/* ссылка на ту же страницу Quizlet (например, «К наборам» после занятия) — hashchange не сработает, перерисовываем сами */
document.addEventListener("click", e=>{
  const a = e.target.closest && e.target.closest('a[href^="#quizlet"]'); if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
  if (decodeURIComponent(a.getAttribute("href")) !== decodeURIComponent(location.hash)) return;
  e.preventDefault(); route(false);
});
