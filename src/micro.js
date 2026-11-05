/* =========================================================
   МИКРОЭКОНОМИКА (#micro, #mi-…): отдельный предмет, не курс языка.
   Темы с конспектом и тренировочными заданиями — src/micro-mid.js (MI_PARTS, MI_TOPICS, MI_CHEAT),
   итоговый тест (51 вопрос по порядку) — src/micro-test.js (MI_TEST), графики — src/micro-figs.js (MI_FIG).
   Задания тем — обычные блоки (makeBlock + INIT), тест — свой список (miTestPage), ответы по id (mi-…).
   Модуль встраивается внутрь движка (как quizlet.js).
   ========================================================= */
MI_TOPICS.forEach(tp=>{
  tp.ex.forEach(e=>{ if (e.w && !e.w[1]) e.w[1] = e.w[0]; });
  WHY[tp.id] = tp.ex.map(e=>e.w || ["", ""]);
  WHYT[tp.id] = tp.ex.map(e=>e.tt ? [e.tt[0], e.tt[1] || e.tt[0]] : null);
});
const MI_BY = Object.fromEntries(MI_TOPICS.map(x=>[x.id, x]));
const miN = tp => MI_TOPICS.indexOf(tp) + 1;
const MI_TEST_TP = {id:"mi-test", ex:[{}]};
const miEn = () => LANG === "en";

/* проверка ответов: числа с допуском (1,22 = 1.2222 = 11/9, «30 000»), список номеров в любом порядке */
function miNum(s){
  s = String(s).trim().replace(/[\s  ]/g, "").replace(/[−–]/g, "-");
  let m = s.match(/^(-?\d+)\/(\d+)$/); if (m) return +m[1] / +m[2];
  if (/^-?\d{1,3}(,\d{3})+(\.\d+)?$/.test(s)) s = s.replace(/,/g, "");
  else s = s.replace(",", ".");
  return /^-?(\d+\.?\d*|\.\d+)$/.test(s) ? parseFloat(s) : NaN;
}
function microJudge(input, answers){
  const x = miNum(input);
  if (!isNaN(x)) for (const a of answers) { const v = miNum(a); if (!isNaN(v) && Math.abs(x - v) <= Math.max(0.006, Math.abs(v) * 0.0005)) return "ok"; }
  const lst = s => String(s).split(/[^\d]+/).filter(Boolean).map(Number).sort((a, b)=>a - b).join(",");
  for (const a of answers) if (/^\d+(\s*,\s*\d+)+$/.test(a) && /\d/.test(input) && lst(input) === lst(a)) return "ok";
  return null;
}

/* ---------- сайдбар ---------- */
function miTestRes(){ const p = (S.p["mi-test"] || {})[0]; return p ? Math.round(p.b * 100) : null; }
function miNavHTML(){
  const tr = miTestRes();
  return `<div class="nav-main"><a class="nl big" href="#micro" data-id="micro">${ICO.home}<span class="nl-t">${miEn() ? "Overview" : "Обзор"}</span></a></div>
  ${MI_PARTS.map(p=>`<div class="nav-sec">${p.n} · ${miEn() ? p.en : p.t}</div>${MI_TOPICS.filter(x=>x.unit === p.n).map(tp=>{ const pc = topicPct(tp); return `<a class="nl mi-nl${pc.done === pc.n && pc.n ? " done" : ""}" href="#${tp.id}" data-id="${tp.id}"><span class="ng-n" data-hue="${tp.unit}">${miN(tp)}</span><span class="nl-t">${tp.title}</span></a>`; }).join("")}`).join("")}
  <div class="nav-sec">${miEn() ? "Final" : "Итог"}</div>
  <a class="nl mi-nl" href="#mi-cheat" data-id="mi-cheat">${ICO.cheat}<span class="nl-t">${miEn() ? "Formula sheet" : "Шпаргалка: все формулы"}</span></a>
  <a class="nl mi-nl" href="#mi-test" data-id="mi-test">${ICO.test}<span class="nl-t">Mid-Term Test · 51</span>${tr != null ? `<span class="mi-res">${tr}%</span>` : ""}</a>`;
}
function miRefreshNav(){ MI_TOPICS.forEach(tp=>{ const a = $(`.mi-nl[data-id="${tp.id}"]`); if (a) { const p = topicPct(tp); a.classList.toggle("done", p.done === p.n && p.n > 0); } }); }
document.addEventListener("click", e=>{ if (MICRO && e.target.closest && e.target.closest(".exb")) setTimeout(miRefreshNav, 50); });

/* ---------- страницы ---------- */
function renderMicro(h){
  if (h === "mi-cheat") return miCheatPage();
  if (h === "mi-test") return miTestPage();
  if (MI_BY[h]) return miTopic(MI_BY[h]);
  const done = MI_TOPICS.reduce((s, x)=>s + topicPct(x).done, 0), nEx = MI_TOPICS.reduce((s, x)=>s + x.ex.length, 0);
  const cont = done ? MI_TOPICS.find(x=>{ const p = topicPct(x); return p.done < p.n; }) : null;
  const cta = cont ? `<a class="btn sec" href="#${cont.id}"><span class="btn-l">${t("homeCont")}: ${cont.title}</span>${ARR}</a>` : `<a class="btn sec" href="#${MI_TOPICS[0].id}">${t("homeStart")}${ARR}</a>`;
  const tr = miTestRes();
  main.innerHTML = `<div class="col">
  <header class="ph">
    <h1>Microeconomics <em>Mid-Term</em></h1>
    <p class="ph-sub">Подготовка к тесту за недели 1–8: 10 тем с конспектами и тренировочными заданиями, шпаргалка со всеми формулами и сам тест — 51 вопрос по порядку. После ответа нажми «?», чтобы увидеть объяснение.</p>
    <div class="stats"><span><b>${done}</b>${t("solved").replace("{n}", nEx)}</span>${tr != null ? `<span><b>${tr}%</b>Mid-Term Test</span>` : ""}</div>
  </header>
  <div class="ph-bar"><div class="ph-act">${cta}</div></div>
  ${MI_PARTS.map(p=>`<section class="hu"><h3 class="unit-h"><span class="ng-n u-pill" data-hue="${p.n}">${miEn() ? "Part" : "Часть"} ${p.n}</span><small>${miEn() ? p.en : p.t}</small></h3><div class="cards">${MI_TOPICS.filter(x=>x.unit === p.n).map(card).join("")}</div></section>`).join("")}
  <section class="hu"><h3 class="unit-h"><span class="ng-n u-pill" data-hue="g">${miEn() ? "Final" : "Итог"}</span><small>${miEn() ? "Formulas and the test" : "Формулы и тест"}</small></h3><div class="cards">
    <a class="tc" href="#mi-cheat" data-hue="g"><span class="tc-glow" aria-hidden="true"></span><span class="tc-top"><span class="tc-ic">${ICO.cheat}</span><span class="tc-go">${t("tcOpen")}</span></span><h3>Шпаргалка</h3><p>Все формулы теста: эластичность, излишки, издержки, монополия — с дробями, индексами и пояснениями.</p><span class="tc-f"><span class="tc-m"><span class="k">Formula sheet</span></span></span></a>
    <a class="tc${tr === 100 ? " done" : ""}" href="#mi-test" data-hue="g"><span class="tc-glow" aria-hidden="true"></span><span class="tc-top"><span class="tc-ic">${ICO.test}</span><span class="tc-go">${t("tcOpen")}</span></span><h3>Mid-Term Test (Weeks 1–8)</h3><p>51 вопрос в том порядке, как в тесте. Ответ проверяется сразу, у каждого вопроса — объяснение.</p><span class="tc-f"><span class="bar"><i style="width:${tr || 0}%"></i></span><span class="tc-m"><span class="k">Test</span><span class="pc">${tr != null ? tr + "%" : "51"}</span></span></span></a>
  </div></section>
  </div>`;
}

function miTopic(tp){
  const i = MI_TOPICS.indexOf(tp), prev = MI_TOPICS[i - 1], next = MI_TOPICS[i + 1];
  main.innerHTML = `<div class="col"><article>
  <header class="t-head seyes">
    <p class="eyebrow">Microeconomics · ${miEn() ? "Part" : "Часть"} ${tp.unit} · ${tp.kind}</p>
    <h1>${tp.title}</h1><p class="t-ru">${tp.ru}</p>
    <div class="t-jump"><button type="button" class="btn sm sec" data-jump="practice">${t("toPractice", tp.ex.length)}${ARD}</button><a class="btn sm sec" href="#mi-cheat">${ICO.cheat}<span>${miEn() ? "Formulas" : "Шпаргалка"}</span></a></div>
  </header>
  <section class="theory mi-theory">${tp.theory}</section>
  <section class="practice" id="practice"><h2>${miEn() ? "Practice" : "Тренировка"}</h2><p>${miEn() ? "Answer, then tap «?» to see why." : "Ответь, потом нажми «?» у вопроса — там объяснение."}</p><div class="exs"></div></section>
  <nav class="pager">${prev ? `<a href="#${prev.id}"><small>${ARL}${t("back")}</small>${prev.title}</a>` : `<a href="#micro"><small>${ARL}${t("back")}</small>${miEn() ? "Overview" : "Обзор"}</a>`}${next ? `<a class="next" href="#${next.id}"><small>${t("next")}${ARR}</small>${next.title}</a>` : `<a class="next" href="#mi-cheat"><small>${t("next")}${ARR}</small>${miEn() ? "Formula sheet" : "Шпаргалка"}</a>`}</nav>
  </article></div>`;
  const exs = $(".exs", main);
  tp.ex.forEach((ex, k)=>{
    const api = makeBlock(tp, ex, k); exs.appendChild(api.el);
    if (ex.fig && MI_FIG[ex.fig]) api.body.insertAdjacentHTML("beforebegin", `<div class="mi-figw">${MI_FIG[ex.fig]}</div>`);
    try { INIT[ex.t](api, ex); } catch(err) { api.body.textContent = "Error: " + err.message; }
  });
  $('[data-jump="practice"]', main).addEventListener("click", ()=>$("#practice").scrollIntoView({behavior:"smooth"}));
}

function miCheatPage(){
  main.innerHTML = `<div class="col"><article>
  <header class="t-head seyes"><p class="eyebrow">Microeconomics · Formula sheet</p><h1>Шпаргалка: все формулы</h1><p class="t-ru">Всё, что нужно посчитать в midterm, — по темам. Слева что считаем, в центре формула, справа когда она нужна.</p>
  <div class="t-jump"><a class="btn sm sec" href="#mi-test">${ICO.test}<span>Mid-Term Test</span></a></div></header>
  <section class="theory mi-theory mi-cheat">${MI_CHEAT()}</section>
  <nav class="pager"><a href="#${MI_TOPICS[MI_TOPICS.length - 1].id}"><small>${ARL}${t("back")}</small>${MI_TOPICS[MI_TOPICS.length - 1].title}</a><a class="next" href="#mi-test"><small>${t("next")}${ARR}</small>Mid-Term Test</a></nav>
  </article></div>`;
}

/* ---------- итоговый тест: 51 вопрос подряд ---------- */
function miSeedShuffle(arr, seed){ const a = arr.slice(); let s = seed * 9301 + 49297; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = s % (i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function miTestState(){ const a = S.ans["mi-test"] = S.ans["mi-test"] || {}; return (a[0] = a[0] || {r:{}}); }
function miTestSave(){ touch("ans-mi-test"); }
function miTestPage(){
  const st = miTestState();
  main.innerHTML = `<div class="col"><article>
  <header class="t-head seyes"><p class="eyebrow">Microeconomics · ${miEn() ? "Final test" : "Итоговый тест"}</p><h1>Mid-Term Test (Weeks 1–8)</h1>
  <p class="t-ru">51 вопрос в том порядке, как в тесте. Ответ проверяется сразу (в поле — по Enter), засчитывается первая попытка. После ответа «?» покажет объяснение.</p>
  <div class="t-jump"><a class="btn sm sec" href="#mi-cheat">${ICO.cheat}<span>${miEn() ? "Formulas" : "Шпаргалка"}</span></a></div></header>
  <div class="mt-bar"><span class="mt-sc" id="mtSc"></span><button type="button" class="btn sm sec" id="mtReset">${miEn() ? "Start over" : "Начать заново"}</button></div>
  <section class="exb exb5 mt-box"><ol class="its mt-list"></ol></section>
  <div class="mt-end" id="mtEnd" hidden></div>
  </article></div>`;
  const list = $(".mt-list", main);
  MI_TEST.forEach((it, k)=>list.appendChild(miTestRow(it, k, st)));
  $("#mtReset").addEventListener("click", ()=>{ st.r = {}; delete (S.p["mi-test"] || {})[0]; touch("progress"); miTestSave(); miTestPage(); window.scrollTo(0, 0); });
  miTestScore();
}
function miTestScore(){
  const st = miTestState(), n = MI_TEST.length, done = Object.keys(st.r).length, ok = Object.values(st.r).filter(x=>x.ok).length;
  const sc = $("#mtSc"); if (sc) sc.innerHTML = `${miEn() ? "Answered" : "Отвечено"} <b>${done}</b> / ${n} · ${miEn() ? "correct" : "верно"} <b>${ok}</b>`;
  const end = $("#mtEnd");
  if (end) { end.hidden = done < n; if (done === n) end.innerHTML = `<div class="dk-end-i">${f7("checkmark_alt")}</div><h2>${ok} / ${n} · ${Math.round(ok / n * 100)}%</h2><p class="muted">${praise(ok / n)} ${miEn() ? "Review the questions marked red — tap «?» for the explanation." : "Посмотри вопросы, отмеченные красным: «?» покажет объяснение. Формулы — в шпаргалке."}</p>`; }
  if (done === n && !st.saved) { st.saved = 1; setScore("mi-test", 0, ok, n); miTestSave(); }
}
function miTestRow(it, k, st){
  const fig = it.fig && MI_FIG[it.fig] ? `<div class="mi-figw">${MI_FIG[it.fig]}</div>` : "";
  let row;
  const finish = (ok, val, ansTxt, restoring) => {
    rowNote(row, ok ? "ok" : "bad", ok ? OKW() : `${t("answerIs")} ${ansTxt}`);
    rowWhy(row, ansTxt, it.e, "");
    row.classList.add(ok ? "mt-ok" : "mt-bad");
    if (!restoring) { st.r[k] = {v:val, ok}; st.saved = 0; miTestSave(); gameAnswer("mi-test|" + k, 0, ok ? "ok" : "bad"); miTestScore(); }
  };
  if (it.t === "mc" || it.t === "tf") {
    const opts = it.t === "tf" ? [["True", true], ["False", false]].map(([l, v], j)=>({l, j, ok:v === it.a})) : miSeedShuffle(it.o.map((l, j)=>({l, j, ok:j === it.a})), k + 3);
    row = itemRow(k, `${fig}<p class="q">${it.q}</p><div class="opts">${opts.map(o=>`<button type="button" class="opt" data-j="${o.j}">${o.l}</button>`).join("")}</div>`);
    const right = opts.find(o=>o.ok);
    const pick = (j, restoring) => { $$(".opt", row).forEach(b=>{ b.disabled = true; const o = opts.find(x=>x.j === +b.dataset.j); if (o.ok) b.classList.add("is-ok"); else if (o.j === j) b.classList.add("is-bad"); }); finish(opts.find(o=>o.j === j).ok, j, right.l, restoring); };
    $$(".opt", row).forEach(b=>b.addEventListener("click", ()=>{ if (!row.classList.contains("mt-ok") && !row.classList.contains("mt-bad")) pick(+b.dataset.j, false); }));
    if (st.r[k]) pick(st.r[k].v, true);
  } else if (it.t === "fill") {
    row = itemRow(k, `${fig}<label class="it-q">${it.q}</label><input class="ans" ${inputAttrs} placeholder="${esc(t("answerPh"))}">`, true);
    const inp = $(".ans", row);
    const check = (v, restoring) => { const j = judge(v, it.a); if (j === "empty") return; const ok = j === "ok" || j === "acc"; inp.value = v; inp.disabled = true; inp.classList.add(ok ? "r-ok" : "r-bad"); if (!restoring) animIn(inp, ok ? "a-ok" : "a-bad"); finish(ok, v, it.a[0], restoring); };
    inp.addEventListener("keydown", e=>{ if (e.key === "Enter") { e.preventDefault(); check(inp.value, false); } });
    if (st.r[k]) check(st.r[k].v, true);
  } else {
    const L = it.pairs.map((p, j)=>({t:p[0], j})), R = miSeedShuffle(it.pairs.map((p, j)=>({t:p[1], j})), k + 7);
    row = itemRow(k, `${fig}<p class="q">${miEn() ? "Match each item on the left with the right one." : "Сопоставь: нажми слева, потом справа."}</p><div class="match mt-match"><div class="colm">${L.map(x=>`<button type="button" class="opt" data-side="L" data-k="${x.j}">${x.t}</button>`).join("")}</div><div class="colm">${R.map(x=>`<button type="button" class="opt" data-side="R" data-k="${x.j}">${x.t}</button>`).join("")}</div></div>`);
    let selL = null, selR = null, mis = 0, got = 0;
    const lock = j => $$(`.opt[data-k="${j}"]`, row).forEach(x=>{ x.classList.remove("sel"); x.classList.add("is-ok"); x.disabled = true; });
    const ansTxt = it.pairs.map(p=>`${p[0]} → ${p[1]}`).join("; ");
    $$(".opt", row).forEach(b=>b.addEventListener("click", ()=>{
      if (b.disabled) return;
      $$(`.opt[data-side="${b.dataset.side}"]`, row).forEach(x=>x.classList.remove("sel")); b.classList.add("sel");
      if (b.dataset.side === "L") selL = b; else selR = b;
      if (!selL || !selR) return;
      if (selL.dataset.k !== selR.dataset.k && it.pairs[+selL.dataset.k][1] === it.pairs[+selR.dataset.k][1]) { const tw = $(`.opt[data-side="R"][data-k="${selL.dataset.k}"]`, row); if (tw && !tw.disabled) { tw.dataset.k = selR.dataset.k; selR.dataset.k = selL.dataset.k; } }
      if (selL.dataset.k === selR.dataset.k) { lock(selL.dataset.k); got++; }
      else { mis++; const r = selR; r.classList.add("is-bad", "flash"); setTimeout(()=>r.classList.remove("is-bad", "flash", "sel"), 450); selL.classList.remove("sel"); }
      selL = selR = null;
      if (got === it.pairs.length) finish(mis === 0, mis, ansTxt, false);
    }));
    if (st.r[k]) { it.pairs.forEach((_, j)=>lock(j)); finish(st.r[k].ok, st.r[k].v, ansTxt, true); }
  }
  rowWhy(row, "", "", "");
  if (st.r[k]) { const ans = it.t === "fill" ? it.a[0] : it.t === "match" ? it.pairs.map(p=>`${p[0]} → ${p[1]}`).join("; ") : it.t === "tf" ? (it.a ? "True" : "False") : it.o[it.a]; rowWhy(row, ans, it.e, ""); }
  return row;
}
