/* =========================================================
   GAME: опыт, уровни, монеты, стрик, анимации начисления
   (встраивается внутрь движка при сборке)
   ========================================================= */
Object.assign(I18N.ru, {
  lvl:n=>`Уровень ${n}`, lvlS:n=>`Ур. ${n}`, lvlUp:(n, c)=>`Новый уровень — ${n}! +${c} 🪙`, xpN:n=>`${n} XP`, xpTo:(a, b)=>`${a} / ${b} XP до следующего уровня`,
  streakT:"Стрик", streakDays:n=>`${n} ${plural(n,["день","дня","дней"])} подряд`, streakToday:(n)=>`Сегодня: ${Math.min(n,10)}/10 заданий для огонька`, streakDone:"Огонёк на сегодня получен 🔥", streakGot:n=>`🔥 Стрик: ${n} ${plural(n,["день","дня","дней"])}! +10 🪙`,
  coinsN:n=>`${n} ${plural(n,["монета","монеты","монет"])}`, dailyH:"Цель дня", dailySub:"Выполни 10 заданий — и получишь огонёк в стрик.", dailyDone:"Цель на сегодня выполнена!", dailyGo:"К заданиям",
  whyA:"Пояснение", whyRule:"Почему так: ",
  instantHint:"Впиши ответ и нажми Enter — он сразу проверится. Засчитывается первая попытка.",
  conjHint:"Впиши форму и нажми Enter — проверка, и курсор перейдёт к следующей."
});
Object.assign(I18N.en, {
  lvl:n=>`Level ${n}`, lvlS:n=>`Lv ${n}`, lvlUp:(n, c)=>`Level ${n} reached! +${c} 🪙`, xpN:n=>`${n} XP`, xpTo:(a, b)=>`${a} / ${b} XP to the next level`,
  streakT:"Streak", streakDays:n=>`${n} ${n===1?"day":"days"} in a row`, streakToday:(n)=>`Today: ${Math.min(n,10)}/10 tasks for your flame`, streakDone:"Today's flame earned 🔥", streakGot:n=>`🔥 Streak: ${n} ${n===1?"day":"days"}! +10 🪙`,
  coinsN:n=>`${n} ${n===1?"coin":"coins"}`, dailyH:"Daily goal", dailySub:"Complete 10 tasks to keep your streak alive.", dailyDone:"Today's goal is done!", dailyGo:"Go to exercises",
  whyA:"Explanation", whyRule:"Why: ",
  instantHint:"Type the answer and press Enter to check it. Your first attempt counts.",
  conjHint:"Type the form and press Enter to check it — the cursor moves to the next one."
});

const gDay = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const dayShift = (k, n) => { const [y,m,d] = k.split("-").map(Number); return gDay(new Date(y, m-1, d + n)); };
const lvlNeed = L => 100 + (L - 1) * 50;
function lvlOf(xp){ let L = 1, base = 0; while (xp >= base + lvlNeed(L)) { base += lvlNeed(L); L++; } return {L, cur: xp - base, need: lvlNeed(L), pct: (xp - base) / lvlNeed(L)}; }
function dayRoll(){ const g = S.game, k = gDay(); if (g.day.d !== k) g.day = {d:k, n:0, q:{}}; }
function streakNow(){ const s = S.game.streak, k = gDay(); return s.last === k || s.last === dayShift(k, -1) ? s.cur : 0; }
function awTake(base, k){
  const aw = S.game.aw;
  if (typeof k === "number" && k >= 0 && k < 31) { const m = aw[base] || 0; if (m & (1 << k)) return false; aw[base] = m | (1 << k); return true; }
  const key = base + "|" + k; if (aw[key]) return false; aw[key] = 1; return true;
}
/* ответ на задание: st = ok | acc | bad | self; k — номер пункта (для «один раз за пункт») */
function gameAnswer(base, k, st, opt){
  const g = S.game; dayRoll();
  g.day.n++; g.hist[g.day.d] = (g.hist[g.day.d] || 0) + 1;
  const hk = Object.keys(g.hist); if (hk.length > 140) hk.sort().slice(0, hk.length - 140).forEach(x=>delete g.hist[x]);
  let xp = 0, coins = 0;
  if (st === "ok" || st === "acc" || st === "self") {
    const fresh = opt && opt.daily ? !g.day.q[base] && (g.day.q[base] = 1) : (k == null ? true : awTake(base, k));
    if (fresh) { xp = st === "ok" ? (opt && opt.xp || 10) : st === "acc" ? 5 : 2; coins = st === "ok" ? 1 : 0; }
  }
  gain(xp, coins);
  streakTick();
  touch("game");
}
function gain(xp, coins){
  const g = S.game, before = lvlOf(g.xp).L;
  g.xp += xp; g.coins += coins;
  const after = lvlOf(g.xp).L; let bonus = 0;
  if (after > before) { bonus = 20 * (after - before); g.coins += bonus; }
  paintMe();
  if (xp || coins) fxPop(xp, coins);
  if (after > before) { fxLevel(after); toast(t("lvlUp", after, bonus)); }
}
function streakTick(){
  const g = S.game, k = g.day.d;
  if (g.day.n >= 10 && g.streak.last !== k) {
    g.streak.cur = g.streak.last === dayShift(k, -1) ? g.streak.cur + 1 : 1;
    g.streak.last = k; g.streak.best = Math.max(g.streak.best, g.streak.cur);
    g.coins += 10; paintMe(); fxStreak(); toast(t("streakGot", g.streak.cur));
  }
}

/* --- виджет профиля в сайдбаре и в верхней панели --- */
function meHTML(){
  const L = lvlOf(S.game.xp), st = streakNow(), today = S.game.day.d === gDay() ? S.game.day.n : 0, lit = S.game.streak.last === gDay();
  return `<a class="mew" href="#account" data-id="account" id="me">
    <span class="me-av">${avHTML(S.prof, "m")}</span>
    <span class="me-tx"><b class="me-name">${esc(S.prof.name || t("guest"))}</b><span class="me-lv"><span class="me-lvt">${t("lvl", L.L)}</span><span class="me-bar"><i style="width:${(L.pct*100).toFixed(1)}%"></i></span></span></span>
    <span class="me-side"><span class="me-fire${lit ? " lit" : ""}" title="${esc(lit ? t("streakDone") : t("streakToday", today))}">🔥 <b>${st}</b></span><span class="me-coin" title="${esc(t("coinsN", S.game.coins))}">🪙 <b>${S.game.coins}</b></span></span>
  </a>`;
}
function meTopHTML(){
  const L = lvlOf(S.game.xp), lit = S.game.streak.last === gDay();
  return `<a class="me-top" href="#account" id="meTop" aria-label="${esc(t("account"))}">${avHTML(S.prof, "s")}<span class="me-top-t"><b>${t("lvlS", L.L)}</b><span class="me-bar"><i style="width:${(L.pct*100).toFixed(1)}%"></i></span></span><span class="me-fire${lit ? " lit" : ""}">🔥<b>${streakNow()}</b></span></a>`;
}
function paintMe(){
  const L = lvlOf(S.game.xp), lit = S.game.streak.last === gDay(), today = S.game.day.d === gDay() ? S.game.day.n : 0;
  $$("#me, #meTop").forEach(w=>{
    const bar = $(".me-bar i", w); if (bar) bar.style.width = (L.pct*100).toFixed(1) + "%";
    const lt = $(".me-lvt", w); if (lt) lt.textContent = t("lvl", L.L);
    const tt = $(".me-top-t b", w); if (tt) tt.textContent = t("lvlS", L.L);
    const f = $(".me-fire", w); if (f) { f.classList.toggle("lit", lit); $("b", f).textContent = streakNow(); f.title = lit ? t("streakDone") : t("streakToday", today); }
    const c = $(".me-coin b", w); if (c) c.textContent = S.game.coins;
    const nm = $(".me-name", w); if (nm) nm.textContent = S.prof.name || t("guest");
    const av = $(".av", w); if (av) av.outerHTML = avHTML(S.prof, w.id === "me" ? "m" : "s");
  });
  $$("[data-coins]").forEach(x=>x.textContent = S.game.coins);
  const dg = $("#dailyGoal"); if (dg) dg.outerHTML = dailyHTML();
}
function meVisible(){
  const a = $("#me"), b = $("#meTop");
  const vis = el => el && el.offsetParent !== null && el.getBoundingClientRect().width > 0 && getComputedStyle(el).visibility !== "hidden";
  if (vis(b) && !nav.classList.contains("open")) return b;
  if (vis(a)) { const r = a.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight) return a; }
  return vis(b) ? b : null;
}
function fxPop(xp, coins){
  if (!S.prof.fx) return;
  const w = meVisible(); if (!w) return;
  const host = $(".me-av", w) || $(".av", w) || w;
  const r = host.getBoundingClientRect();
  const mk = (txt, cls, delay) => {
    const el = document.createElement("span"); el.className = "xp-pop " + cls; el.textContent = txt;
    el.style.left = (r.left + r.width / 2) + "px"; el.style.top = (r.top) + "px"; el.style.animationDelay = delay + "ms";
    document.body.appendChild(el); setTimeout(()=>el.remove(), 1400 + delay);
  };
  if (xp) mk(`+${xp} XP`, "xp", 0);
  if (coins) mk(`+${coins} 🪙`, "coin", 180);
  w.classList.remove("bump"); void w.offsetWidth; w.classList.add("bump");
}
function fxLevel(){ if (!S.prof.fx) return; $$("#me, #meTop").forEach(w=>{ w.classList.remove("lvl-up"); void w.offsetWidth; w.classList.add("lvl-up"); }); }
function fxStreak(){ if (!S.prof.fx) return; $$(".me-fire").forEach(f=>{ f.classList.remove("burst"); void f.offsetWidth; f.classList.add("burst"); }); }

/* --- цель дня на главной --- */
function dailyHTML(){
  const n = S.game.day.d === gDay() ? S.game.day.n : 0, done = S.game.streak.last === gDay(), p = Math.min(1, n / 10);
  return `<div class="daily${done ? " done" : ""}" id="dailyGoal">
    <div class="dg-ring" style="--p:${(p*100).toFixed(0)}"><span>${done ? "🔥" : Math.min(n,10) + "/10"}</span></div>
    <div class="dg-tx"><b>${done ? t("dailyDone") : t("dailyH")}</b><span>${done ? t("streakDays", streakNow()) : t("dailySub")}</span></div>
    <div class="dg-st"><span class="dg-fire">🔥 ${streakNow()}</span><span class="dg-coin">🪙 <b data-coins>${S.game.coins}</b></span></div>
  </div>`;
}
