/* =========================================================
   МИКРОЭКОНОМИКА (#micro, #mi-<тема>): отдельный предмет, не курс языка.
   Данные — src/micro-mid.js (MI_PARTS, MI_TOPICS), графики — src/micro-figs.js (MI_FIG).
   Задания рисуются обычными блоками (makeBlock + INIT), ответы и прогресс — по id темы (mi-…).
   Модуль встраивается внутрь движка (как quizlet.js).
   ========================================================= */
/* «почему так»: правило задания (w) и разбор сопоставлений (tt) */
MI_TOPICS.forEach(tp=>{
  WHY[tp.id] = tp.ex.map(e=>e.w || ["", ""]);
  WHYT[tp.id] = tp.ex.map(e=>e.tt ? [e.tt[0], e.tt[1] || e.tt[0]] : null);
  tp.ex.forEach(e=>{ if (e.w && !e.w[1]) e.w[1] = e.w[0]; });
});
const MI_BY = Object.fromEntries(MI_TOPICS.map(x=>[x.id, x]));
const miN = tp => MI_TOPICS.indexOf(tp) + 1;

/* проверка ответов: числа с допуском (1.22 = 1,2222 = 11/9), список номеров в любом порядке и с пробелами */
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

/* сайдбар раздела */
function miNavHTML(){
  return `<div class="nav-main"><a class="nl big" href="#micro" data-id="micro">${ICO.home}<span class="nl-t">${LANG === "en" ? "Overview" : "Обзор"}</span></a></div>
  ${MI_PARTS.map(p=>`<div class="nav-sec">${p.n} · ${LANG === "en" ? p.en : p.t}</div>${MI_TOPICS.filter(x=>x.unit === p.n).map(tp=>{ const pc = topicPct(tp); return `<a class="nl mi-nl${pc.done === pc.n && pc.n ? " done" : ""}" href="#${tp.id}" data-id="${tp.id}"><span class="ng-n" data-hue="${tp.unit}">${miN(tp)}</span><span class="nl-t">${tp.title}</span></a>`; }).join("")}`).join("")}`;
}

function renderMicro(h){
  if (MI_BY[h]) return miTopic(MI_BY[h]);
  const all = MI_TOPICS.reduce((s, x)=>s + x.ex.reduce((k, e)=>k + (e.items ? e.items.length : 1), 0), 0);
  const done = MI_TOPICS.reduce((s, x)=>s + topicPct(x).done, 0), nEx = MI_TOPICS.reduce((s, x)=>s + x.ex.length, 0);
  const cont = done ? MI_TOPICS.find(x=>{ const p = topicPct(x); return p.done < p.n; }) : null;
  const cta = cont ? `<a class="btn sec" href="#${cont.id}"><span class="btn-l">${t("homeCont")}: ${cont.title}</span>${ARR}</a>` : `<a class="btn sec" href="#${MI_TOPICS[0].id}">${t("homeStart")}${ARR}</a>`;
  main.innerHTML = `<div class="col">
  <header class="ph">
    <h1>Microeconomics <em>Mid-Term</em></h1>
    <p class="ph-sub">Тест за недели 1–8: ${all} ${plural(all, ["вопрос", "вопроса", "вопросов"])}, разложенных по ${MI_TOPICS.length} темам в ${MI_PARTS.length} частях. В каждой теме — короткий конспект и задания; после ответа нажми «?», чтобы увидеть объяснение.</p>
    <div class="stats"><span><b>${done}</b>${t("solved").replace("{n}", nEx)}</span></div>
  </header>
  <div class="ph-bar"><div class="ph-act">${cta}</div></div>
  ${MI_PARTS.map(p=>`<section class="hu"><h3 class="unit-h"><span class="ng-n u-pill" data-hue="${p.n}">${LANG === "en" ? "Part" : "Часть"} ${p.n}</span><small>${LANG === "en" ? p.en : p.t}</small></h3><div class="cards">${MI_TOPICS.filter(x=>x.unit === p.n).map(card).join("")}</div></section>`).join("")}
  </div>`;
}

function miTopic(tp){
  const i = MI_TOPICS.indexOf(tp), prev = MI_TOPICS[i - 1], next = MI_TOPICS[i + 1], part = MI_PARTS.find(p=>p.n === tp.unit);
  main.innerHTML = `<div class="col"><article>
  <header class="t-head seyes">
    <p class="eyebrow">Microeconomics · ${LANG === "en" ? "Part" : "Часть"} ${tp.unit} · ${tp.kind}</p>
    <h1>${tp.title}</h1><p class="t-ru">${tp.ru}</p>
    <div class="t-jump"><button type="button" class="btn sm sec" data-jump="practice">${t("toPractice", tp.ex.length)}${ARD}</button></div>
  </header>
  <section class="theory mi-theory">${tp.theory}</section>
  <section class="practice" id="practice"><h2>${LANG === "en" ? "Test questions" : "Вопросы теста"}</h2><p>${LANG === "en" ? "Answer, then tap «?» next to a question to see why." : "Ответь, потом нажми «?» у вопроса — там объяснение."}</p><div class="exs"></div></section>
  <nav class="pager">${prev ? `<a href="#${prev.id}"><small>${ARL}${t("back")}</small>${prev.title}</a>` : `<a href="#micro"><small>${ARL}${t("back")}</small>${LANG === "en" ? "Overview" : "Обзор"}</a>`}${next ? `<a class="next" href="#${next.id}"><small>${t("next")}${ARR}</small>${next.title}</a>` : `<a class="next" href="#micro"><small>${t("next")}${ARR}</small>${LANG === "en" ? "Overview" : "Обзор"}</a>`}</nav>
  </article></div>`;
  const exs = $(".exs", main);
  tp.ex.forEach((ex, k)=>{
    const api = makeBlock(tp, ex, k); exs.appendChild(api.el);
    if (ex.fig && MI_FIG[ex.fig]) api.body.insertAdjacentHTML("beforebegin", `<div class="mi-figw">${MI_FIG[ex.fig]}</div>`);
    try { INIT[ex.t](api, ex); } catch(err) { api.body.textContent = "Error: " + err.message; }
  });
  $('[data-jump="practice"]', main).addEventListener("click", ()=>$("#practice").scrollIntoView({behavior:"smooth"}));
}
/* прогресс в сайдбаре обновляется после ответа */
document.addEventListener("click", e=>{ if (!MICRO || !e.target.closest || !e.target.closest(".exb")) return; setTimeout(()=>{ MI_TOPICS.forEach(tp=>{ const a = $(`.mi-nl[data-id="${tp.id}"]`); if (a) { const p = topicPct(tp); a.classList.toggle("done", p.done === p.n && p.n > 0); } }); }, 50); });
