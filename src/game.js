/* =========================================================
   ПРОФИЛЬ: виджет в сайдбаре (аватар, имя, прогресс курса)
   и журнал активности по дням (для календаря в «Прогрессе»).
   Геймификации (XP, уровни, монеты, стрик) больше нет.
   ========================================================= */
Object.assign(I18N.ru, {
  meProg:(d,n)=>`${d} из ${n} заданий`, todayN:n=>`Сегодня: ${n} ${plural(n,["ответ","ответа","ответов"])}`,
  whyA:"Пояснение", whyRule:"Правило: ", whyHere:"Почему здесь так: ",
  instantHint:"Впиши ответ и нажми Enter — он сразу проверится. Засчитывается первая попытка.",
  conjHint:"Впиши форму и нажми Enter — проверка, и курсор перейдёт к следующей."
});
Object.assign(I18N.en, {
  meProg:(d,n)=>`${d} of ${n} exercises`, todayN:n=>`Today: ${n} ${n===1?"answer":"answers"}`,
  whyA:"Explanation", whyRule:"Rule: ", whyHere:"Why here: ",
  instantHint:"Type the answer and press Enter to check it. Your first attempt counts.",
  conjHint:"Type the form and press Enter to check it — the cursor moves to the next one."
});

const gDay = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const dayShift = (k, n) => { const [y,m,d] = k.split("-").map(Number); return gDay(new Date(y, m-1, d + n)); };
/* ответ на задание: только отмечаем активность за день */
function gameAnswer(){
  const g = S.game, k = gDay();
  g.hist[k] = (g.hist[k] || 0) + 1;
  const hk = Object.keys(g.hist); if (hk.length > 140) hk.sort().slice(0, hk.length - 140).forEach(x=>delete g.hist[x]);
  touch("game");
}
function courseTotals(){ let d = 0, n = 0; TOP.forEach(tp=>{ const q = topicPct(tp); d += q.done; n += q.n; }); return {d, n, pct: n ? d / n : 0}; }

/* --- виджет профиля в сайдбаре и в верхней панели --- */
function meHTML(){
  const c = courseTotals();
  return `<a class="mew" href="#account" data-id="account" id="me">
    <span class="me-av">${avHTML(S.prof, "m")}</span>
    <span class="me-tx"><b class="me-name">${esc(S.prof.name || t("guest"))}</b><span class="me-lv"><span class="me-lvt">${t("meProg", c.d, c.n)}</span></span><span class="me-bar"><i style="width:${(c.pct*100).toFixed(1)}%"></i></span></span>
    ${f7("chevron_right", "me-ch")}
  </a>`;
}
function meTopHTML(){ return `<a class="me-top" href="#account" id="meTop" aria-label="${esc(t("account"))}">${avHTML(S.prof, "s")}</a>`; }
function paintMe(){
  const c = courseTotals();
  $$("#me, #meTop").forEach(w=>{
    const bar = $(".me-bar i", w); if (bar) bar.style.width = (c.pct*100).toFixed(1) + "%";
    const lt = $(".me-lvt", w); if (lt) lt.textContent = t("meProg", c.d, c.n);
    const nm = $(".me-name", w); if (nm) nm.textContent = S.prof.name || t("guest");
    const av = $(".av", w); if (av) av.outerHTML = avHTML(S.prof, w.id === "me" ? "m" : "s");
  });
}
