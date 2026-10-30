/* =========================================================
   HANZI: окно иероглифа (анимация + порядок черт), раздел «Иероглифы» (#hanzi):
   учить → обводить → писать по памяти с проверкой каждой черты и подсказками, интервальные повторения.
   Модуль встраивается внутрь движка (как quizlet.js).
   Данные черт: zh/hz.json (Make Me a Hanzi / hanzi-writer-data, Arphic PL), библиотека zh/hanzi-writer.min.js (MIT).
   ========================================================= */
Object.assign(I18N.ru, {
  hanzi:"Иероглифы", hzSub:"Смотри, как пишется иероглиф, обводи его и пиши сам: система проверяет каждую черту и подсказывает, что исправить.",
  hzTabs:{learn:"Учить", all:"Все иероглифы", ref:"Черты и ключи"},
  hzLoading:"Загружаем иероглифы…", hzFail:"Не получилось загрузить данные иероглифов. Проверь интернет и обнови страницу.",
  hzStrokes:n=>`${n} ${plural(n, ["черта", "черты", "черт"])}`, hzOrder:"Порядок черт", hzPlay:"Показать", hzLoop:"Повторять", hzTrace:"Обвести", hzWrite:"По памяти", hzWatch:"Смотреть",
  hzRadical:"Ключ", hzParts:"Состоит из", hzWords:"Слова с этим иероглифом", hzStep:k=>`Черта ${k}`, hzClose:"Закрыть",
  hzNow:(k, n)=>`Черта ${k} из ${n}`, hzNext:"Следующая черта", hzGood:"Верно!", hzDoneOk:"Всё верно — без единой ошибки!", hzDone:n=>`Готово. Ошибок: ${n}.`,
  hzBack:"Черта в обратную сторону. Начни от точки и веди, куда показывает стрелка.",
  hzOrderErr:(j, k)=>`Это черта ${j}, а сейчас нужна черта ${k}: в иероглифах важен порядок.`,
  hzDirErr:(want, got)=>`Нужна черта ${want}, а у тебя получилась ${got}.`,
  hzPosErr:"Форма похожа, но черта не на своём месте: смотри, где она начинается.",
  hzShortErr:"Черта слишком короткая — веди её до конца.",
  hzHint:"Подсветили, как писать эту черту.",
  hzMistakesAt:"Ошибки были в чертах", hzAgain:"Ещё раз", hzNextChar:"Дальше",
  hzStepsL:["Посмотри", "Обведи", "Напиши сам"],
  hzLook:"Посмотри, как пишется иероглиф, и повтори движение пальцем в воздухе. Нажми на любую черту ниже, чтобы увидеть её отдельно.",
  hzTraceP:"Обведи иероглиф по контуру. Начинай каждую черту с правильной стороны.",
  hzMemP:"Теперь напиши иероглиф сам, без контура. Если ошибёшься три раза, черта подсветится.",
  hzRevP:"Вспомни и напиши иероглиф.",
  hzToday:"Занятие на сегодня", hzNewN:n=>`новых: ${n}`, hzDueN:n=>`повторить: ${n}`, hzStart:"Начать занятие", hzNoDue:"На сегодня всё! Новые иероглифы откроются завтра — или возьми ещё.", hzMore:"Ещё 5 новых",
  hzPerDay:"Новых в день", hzLessons:"Уроки", hzUpTo:n=>`1–${n}`, hzAllL:"Все",
  hzSt:{new:"новый", learn:"учу", know:"знаю"}, hzLegend:"Нажми на иероглиф, чтобы посмотреть и потренироваться.",
  hzSessDone:"Занятие закончено", hzSessSum:(n, ok)=>`Иероглифов: ${n}. С первого раза без ошибок: ${ok}.`, hzHome:"К иероглифам",
  hzHowH:"Как учить иероглифы", hzQuit:"Выйти",
  hzBasic:"Основные черты", hzRads:"Ключи из учебника", hzRadSub:"Ключ (偏旁) подсказывает смысл иероглифа: 氵 — вода, 口 — рот, 木 — дерево.",
  hzExDone:(ok, n)=>`Без ошибок: ${ok} из ${n}`, hzWriteIt:"Напиши иероглиф", hzShowOutline:"Показать контур",
  hzNoTouch:"Пиши пальцем или мышью прямо в клетке."
});
Object.assign(I18N.en, {
  hanzi:"Characters", hzSub:"Watch how a character is written, trace it, then write it yourself: every stroke is checked and you get hints on what to fix.",
  hzTabs:{learn:"Learn", all:"All characters", ref:"Strokes & radicals"},
  hzLoading:"Loading characters…", hzFail:"Couldn’t load the character data. Check your connection and reload.",
  hzStrokes:n=>`${n} ${n === 1 ? "stroke" : "strokes"}`, hzOrder:"Stroke order", hzPlay:"Play", hzLoop:"Loop", hzTrace:"Trace", hzWrite:"From memory", hzWatch:"Watch",
  hzRadical:"Radical", hzParts:"Made of", hzWords:"Words with this character", hzStep:k=>`Stroke ${k}`, hzClose:"Close",
  hzNow:(k, n)=>`Stroke ${k} of ${n}`, hzNext:"Next stroke", hzGood:"Correct!", hzDoneOk:"All correct — not a single mistake!", hzDone:n=>`Done. Mistakes: ${n}.`,
  hzBack:"The stroke goes the other way. Start at the dot and follow the arrow.",
  hzOrderErr:(j, k)=>`That’s stroke ${j}, but stroke ${k} comes now: order matters.`,
  hzDirErr:(want, got)=>`This stroke should be ${want}, yours looks like ${got}.`,
  hzPosErr:"Right shape, wrong place: check where the stroke starts.",
  hzShortErr:"Too short — draw the stroke all the way.",
  hzHint:"Here’s how to write this stroke.",
  hzMistakesAt:"Mistakes in strokes", hzAgain:"Again", hzNextChar:"Next",
  hzStepsL:["Watch", "Trace", "Write"],
  hzLook:"Watch how the character is written and copy the movement with your finger in the air. Tap any stroke below to see it on its own.",
  hzTraceP:"Trace the character. Start each stroke from the right end.",
  hzMemP:"Now write it yourself, without the outline. After three misses the stroke is highlighted.",
  hzRevP:"Recall and write the character.",
  hzToday:"Today’s session", hzNewN:n=>`new: ${n}`, hzDueN:n=>`to review: ${n}`, hzStart:"Start", hzNoDue:"That’s all for today! New characters unlock tomorrow — or take more now.", hzMore:"5 more new",
  hzPerDay:"New per day", hzLessons:"Lessons", hzUpTo:n=>`1–${n}`, hzAllL:"All",
  hzSt:{new:"new", learn:"learning", know:"known"}, hzLegend:"Tap a character to watch and practise it.",
  hzSessDone:"Session complete", hzSessSum:(n, ok)=>`Characters: ${n}. Right first time: ${ok}.`, hzHome:"Back to characters",
  hzHowH:"How to learn characters", hzQuit:"Quit",
  hzBasic:"Basic strokes", hzRads:"Radicals from the textbook", hzRadSub:"A radical (偏旁) hints at the meaning: 氵 — water, 口 — mouth, 木 — tree.",
  hzExDone:(ok, n)=>`No mistakes: ${ok} of ${n}`, hzWriteIt:"Write the character", hzShowOutline:"Show outline",
  hzNoTouch:"Write with your finger or mouse right in the box."
});

const HZ = {data:null, lib:null, loading:null, base:"zh/"};
const isHan = c => /[㐀-鿿⺀-⿟㇀-㇯]/.test(c);
function hzLoad(){
  if (HZ.loading) return HZ.loading;
  const lib = window.HanziWriter ? Promise.resolve() : new Promise((ok, bad)=>{ const s = document.createElement("script"); s.src = HZ.base + "hanzi-writer.min.js"; s.onload = ok; s.onerror = bad; document.head.appendChild(s); });
  const data = fetch(HZ.base + "hz.json").then(r=>{ if (!r.ok) throw new Error("hz " + r.status); return r.json(); });
  HZ.loading = Promise.all([lib, data]).then(([, d])=>{ HZ.data = d; HZ.lib = window.HanziWriter; return HZ; }).catch(e=>{ HZ.loading = null; throw e; });
  return HZ.loading;
}
/* данные черт: из пакета курса, иначе — с CDN */
const HZ_CDN = c => `https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/${encodeURIComponent(c)}.json`;
function hzChar(c){ return HZ.data && HZ.data[c] ? Promise.resolve(HZ.data[c]) : fetch(HZ_CDN(c)).then(r=>r.ok ? r.json() : null).then(d=>{ if (d && HZ.data) HZ.data[c] = d; return d; }).catch(()=>null); }
const hzLoader = (c, onLoad, onErr) => { hzChar(c).then(d=>d ? onLoad(d) : onErr && onErr()); };
const hzCss = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const hzColors = () => ({stroke:hzCss("--ink") || "#1a1f3d", outline:hzCss("--hz-outline") || "#dfe2ee", hi:hzCss("--encre") || "#3446d0", draw:hzCss("--encre") || "#3446d0", rad:hzCss("--hz-rad") || "#c02769"});

/* ---------- статичная картинка иероглифа (SVG): черты 0..upto-1, текущая — цветом ---------- */
const HZ_GRID = `<g class="hz-grid"><rect x="2" y="2" width="1020" height="1020" rx="40"/><path d="M512 2V1022M2 512H1022M2 2L1022 1022M1022 2L2 1022"/></g>`;
function hzSvg(d, upto, cur, opts){
  opts = opts || {};
  const rad = new Set(opts.rad && d.radStrokes ? d.radStrokes : []);
  const p = d.strokes.map((s, i)=>{
    const cls = i === cur ? "hz-cur" : i < upto ? (rad.has(i) ? "hz-done hz-r" : "hz-done") : "hz-ghost";
    return `<path class="${cls}" d="${s}"/>`;
  }).join("");
  let mark = "";
  if (cur != null && cur >= 0 && d.medians[cur]) { const m = d.medians[cur], a = m[0], b = m[Math.min(m.length - 1, 2)];
    mark = `<circle class="hz-start" cx="${a[0]}" cy="${a[1]}" r="46"/>` + (opts.arrow !== false ? `<path class="hz-arr" d="M${a[0]} ${a[1]} L${b[0]} ${b[1]}"/>` : ""); }
  return `<svg viewBox="0 0 1024 1024" class="hz-svg${opts.cls ? " " + opts.cls : ""}" aria-hidden="true">${opts.grid === false ? "" : HZ_GRID}<g transform="translate(0,900) scale(1,-1)">${p}${mark}</g></svg>`;
}

/* одна черта анимацией (SVG): предыдущие — готовы, текущая прорисовывается вдоль средней линии */
let HZ_UID = 0;
function hzStrokeAnim(d, k){
  const id = "hzc" + (++HZ_UID), m = d.medians[k], len = m.reduce((s, p, i)=>i ? s + Math.hypot(p[0] - m[i-1][0], p[1] - m[i-1][1]) : 0, 0) + 200;
  return `<svg viewBox="0 0 1024 1024" class="hz-svg hz-anim" aria-hidden="true">${HZ_GRID}<g transform="translate(0,900) scale(1,-1)">${d.strokes.map((s, i)=>`<path class="${i < k ? "hz-done" : "hz-ghost"}" d="${s}"/>`).join("")}<clipPath id="${id}"><path d="${d.strokes[k]}"/></clipPath><path class="hz-run" clip-path="url(#${id})" d="M${m.map(p=>p.join(" ")).join(" L")}" style="stroke-dasharray:${len};stroke-dashoffset:${len};--len:${len}"/><circle class="hz-start" cx="${m[0][0]}" cy="${m[0][1]}" r="46"/></g></svg>`;
}
/* ---------- тип черты по её средней линии (координаты: y вверх) ---------- */
function hzRdp(pts, eps){
  if (pts.length < 3) return pts;
  const [a, b] = [pts[0], pts[pts.length - 1]], dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
  let mx = 0, mi = 0;
  for (let i = 1; i < pts.length - 1; i++) { const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + b[0] * a[1] - b[1] * a[0]) / L; if (d > mx) { mx = d; mi = i; } }
  if (mx <= eps) return [a, b];
  return hzRdp(pts.slice(0, mi + 1), eps).slice(0, -1).concat(hzRdp(pts.slice(mi), eps));
}
const HZ_DIRS = ["E","NE","N","NW","W","SW","S","SE"];
const hzDir = (dx, dy) => HZ_DIRS[((Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) % 8) + 8) % 8];
const HZ_ARROW = {E:"→", NE:"↗", N:"↑", NW:"↖", W:"←", SW:"↙", S:"↓", SE:"↘"};
/* названия черт: [иероглиф, пиньинь, ru, en] */
const HZ_NAMES = {
  "E":["横","héng","горизонтальная","horizontal"], "S":["竖","shù","вертикальная","vertical"], "SW":["撇","piě","откидная влево","left-falling"],
  "SE":["捺","nà","откидная вправо","right-falling"], "dot":["点","diǎn","точка","dot"], "NE":["提","tí","восходящая","rising"],
  "E,S":["横折","héngzhé","горизонтальная с изломом","horizontal-turning"], "E,S,h":["横折钩","héngzhégōu","горизонтальная с изломом и крючком","horizontal-turning-hook"],
  "E,SW":["横撇","héngpiě","горизонтальная с откидной","horizontal-left-falling"], "E,h":["横钩","hénggōu","горизонтальная с крючком","horizontal-hook"],
  "S,E":["竖折","shùzhé","вертикальная с изломом","vertical-turning"], "S,NE":["竖提","shùtí","вертикальная с подъёмом","vertical-rising"],
  "S,h":["竖钩","shùgōu","вертикальная с крючком","vertical-hook"], "S,E,h":["竖弯钩","shùwāngōu","вертикальная с изгибом и крючком","vertical-curved-hook"],
  "SW,E":["撇折","piězhé","откидная с изломом","left-falling-turning"], "SW,NE":["撇折","piězhé","откидная с изломом","left-falling-turning"], "SW,SE":["撇点","piědiǎn","откидная с точкой","left-falling-dot"],
  "E,S,NE":["横折提","héngzhétí","горизонтальная с изломом и подъёмом","horizontal-turning-rising"], "SE,h":["斜钩","xiégōu","наклонная с крючком","slanting hook"],
  "E,SE,h":["横折斜钩","héngzhéxiégōu","горизонтальная, излом, наклон, крючок","horizontal-turning-slanting-hook"], "E,S,E,h":["横折弯钩","héngzhéwāngōu","горизонтальная, излом, изгиб, крючок","horizontal-turning-curved-hook"],
  "S,E,S,h":["竖折折钩","shùzhézhégōu","вертикальная с двумя изломами и крючком","vertical-double-turning-hook"], "E,SW,S,h":["横撇弯钩","héngpiěwāngōu","горизонтальная, откидная, изгиб, крючок","horizontal-left-falling-curved-hook"]
};
function hzStrokeInfo(med){
  const pts = hzRdp(med, 48), segs = [];
  for (let i = 1; i < pts.length; i++) { const dx = pts[i][0] - pts[i-1][0], dy = pts[i][1] - pts[i-1][1], len = Math.hypot(dx, dy); if (len < 22) continue; const dir = hzDir(dx, dy); if (segs.length && segs[segs.length - 1].dir === dir) segs[segs.length - 1].len += len; else segs.push({dir, len}); }
  if (!segs.length) return {key:"dot", arrows:"•"};
  const total = segs.reduce((s, x)=>s + x.len, 0);
  const keys = segs.map((s, i)=>{
    const last = i === segs.length - 1 && i > 0;
    if (last && s.len < 170 && ["N","NW","NE","W"].includes(s.dir)) return "h";
    if (last && s.len < 150 && segs[i-1].dir === "E" && s.dir === "SW") return "h";
    return ({N:"S", W:"E"})[s.dir] && i > 0 ? null : s.dir;
  }).filter(Boolean);
  let key = keys.join(",");
  if (keys.length === 1) { if (total < 190 && ["SE","SW","S"].includes(keys[0])) key = "dot"; }
  return {key, arrows:segs.map(s=>HZ_ARROW[s.dir]).join(" "), main:segs[0].dir};
}
const hzName = info => { const n = HZ_NAMES[info.key]; return n ? {zh:n[0], py:n[1], tr:LANG === "en" ? n[3] : n[2]} : null; };
const hzNameTxt = info => { const n = hzName(info); return n ? `${n.zh} (${n.tr}) ${info.arrows}` : info.arrows; };

/* ---------- полоска шагов: иероглиф по чертам ---------- */
function hzStepsHTML(d, opts){
  opts = opts || {};
  return `<div class="hz-st-l">${d.strokes.map((_, i)=>{ const inf = hzStrokeInfo(d.medians[i]), nm = hzName(inf);
    return `<button type="button" class="hz-st-i" data-k="${i}" title="${zesc(hzNameTxt(inf))}">${hzSvg(d, i, i)}<span class="hz-st-n"><b>${i + 1}</b>${nm ? `<i lang="zh-CN">${nm.zh}</i>` : ""}<em>${inf.arrows}</em></span></button>`; }).join("")}</div>`;
}
/* заполнить все .hz-steps на странице */
function hzFillSteps(root){
  const list = $$(".hz-steps:not([data-done])", root || main); if (!list.length) return;
  hzLoad().then(()=>list.forEach(el=>{
    el.dataset.done = "1";
    const chars = [...el.dataset.ch].filter(isHan);
    Promise.all(chars.map(hzChar)).then(ds=>{ el.innerHTML = ds.map((d, k)=>d ? `<div class="hz-st-w" data-c="${chars[k]}">${hzStepsHTML(d)}</div>` : "").join(""); });
  })).catch(()=>{});
}
document.addEventListener("click", e=>{
  const st = e.target.closest && e.target.closest(".hz-steps .hz-st-i");
  if (st) { const c = st.closest(".hz-st-w").dataset.c; hzOpen(c, {stroke:+st.dataset.k}); return; }
  const b = e.target.closest && e.target.closest("[data-hz]");
  if (b) { e.preventDefault(); hzOpen(b.dataset.hz); }
});

/* ---------- клик по иероглифу в тексте: окно иероглифа (слово, если оно есть в словаре курса) ---------- */
function hzWordAt(text, i){
  const D = zhDict();
  for (let len = 4; len >= 2; len--) for (let s = Math.max(0, i - len + 1); s <= i; s++) { const w = text.slice(s, s + len); if (w.length === len && D.has(w)) return {w, k:i - s}; }
  return {w:text[i], k:0};
}
function hzClickText(e){
  if (COURSE !== "zh") return false;
  const el = e.target.closest && e.target.closest(".fr.zh, .zh .fr");
  if (!el || e.target.closest("button, .opt, .chip, .tok, a")) return false;
  const c = caretAt(e.clientX, e.clientY); if (!c || !c.node || c.node.nodeType !== 3) return false;
  const txt = c.node.nodeValue; let i = c.off;
  /* каретка может стоять после символа — берём тот иероглиф, по которому кликнули */
  const hit = k => { if (k < 0 || k >= txt.length || !isHan(txt[k])) return false; const r = document.createRange(); r.setStart(c.node, k); r.setEnd(c.node, k + 1); const b = r.getBoundingClientRect(); return e.clientX >= b.left - 1 && e.clientX <= b.right + 1 && e.clientY >= b.top - 2 && e.clientY <= b.bottom + 2; };
  if (!hit(i)) { if (hit(i - 1)) i = i - 1; else return false; }
  const {w, k} = hzWordAt(txt, i);
  hzOpen(w, {focus:k});
  return true;
}

/* ---------- окно иероглифа ---------- */
const HZM = {el:null, writer:null, chars:[], k:0, mode:"watch", loop:false, tm:null};
function hzClose(){ if (!HZM.el) return; clearTimeout(HZM.tm); try { HZM.writer && HZM.writer.cancelQuiz && HZM.writer.cancelQuiz(); } catch(e) {} HZM.el.remove(); HZM.el = null; HZM.writer = null; document.removeEventListener("keydown", hzKey, true); }
function hzKey(e){ if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); hzClose(); } }
window.addEventListener("hashchange", ()=>hzClose());
function hzInfoOf(w){ const D = zhDict(); return D.get(w) || null; }
function hzWordsWith(c){ const out = []; zhDict().forEach(v=>{ if (v.zh.includes(c) && out.length < 8) out.push(v); }); return out; }
const hzMean = v => v ? (LANG === "en" ? v.en : v.ru) : "";
function hzOpen(word, opts){
  opts = opts || {};
  hzClose();
  const chars = [...word].filter(isHan); if (!chars.length) return;
  const el = document.createElement("div"); el.className = "hzm";
  el.innerHTML = `<div class="hzm-bg" data-x></div><div class="hzm-box" role="dialog" aria-modal="true" aria-label="${zesc(word)}"><div class="hzm-in"><p class="hz-load">${t("hzLoading")}</p></div></div>`;
  document.body.appendChild(el); HZM.el = el; HZM.chars = chars; HZM.k = Math.min(opts.focus || 0, chars.length - 1); HZM.word = word; HZM.mode = "watch";
  el.addEventListener("click", e=>{ if (e.target.closest("[data-x]")) hzClose(); });
  document.addEventListener("keydown", hzKey, true);
  requestAnimationFrame(()=>el.classList.add("in"));
  if (synth) speak(word);
  hzLoad().then(()=>Promise.all(chars.map(hzChar))).then(ds=>{ if (HZM.el !== el) return; HZM.ds = ds; hzPaint(opts.stroke); }).catch(()=>{ if (HZM.el === el) $(".hzm-in", el).innerHTML = `<p class="hz-load">${t("hzFail")}</p>`; });
}
function hzPaint(stroke){
  const el = HZM.el; if (!el) return;
  const c = HZM.chars[HZM.k], d = HZM.ds[HZM.k];
  const wi = hzInfoOf(HZM.word), ci = typeof ZH_CH !== "undefined" ? ZH_CH[c] : null, cw = hzInfoOf(c);
  const py = wi ? wi.py : cw ? cw.py : ci ? ci.p : "";
  const inW = !wi && !cw ? [...zhDict().values()].find(v=>v.zh.includes(c)) : null;
  const mean = hzMean(wi) || hzMean(cw) || (inW ? `${inW.zh} — ${hzMean(inW)}` : "") || (ci && ci.d ? ci.d : "");
  const words = hzWordsWith(c).filter(v=>v.zh !== HZM.word).slice(0, 6);
  const rad = ci && ci.r ? ci.r : "", radM = rad && typeof ZH_RADM !== "undefined" && ZH_RADM[rad] ? (LANG === "en" ? ZH_RADM[rad][1] : ZH_RADM[rad][0]) : "";
  $(".hzm-in", el).innerHTML = `
  <div class="hzm-h">
    <div class="hzm-w">${HZM.chars.length > 1 ? HZM.chars.map((x, k)=>`<button type="button" class="hzm-tab${k === HZM.k ? " on" : ""}" data-k="${k}" lang="zh-CN">${x}</button>`).join("") : `<span class="hzm-one" lang="zh-CN">${c}</span>`}</div>
    <div class="hzm-t"><span class="hzm-py">${py}</span><span class="hzm-m">${zesc(mean)}</span></div>
    <button type="button" class="qq-mx hzm-say" aria-label="${zesc(t("qzSay"))}">${ICON_PLAY}</button>
    <button type="button" class="qq-mx" data-x aria-label="${zesc(t("hzClose"))}">${f7("xmark")}</button>
  </div>
  <div class="hzm-main">
    <div class="hzm-pad"><div class="hzm-cv" id="hzCv"></div><p class="hzm-fb" aria-live="polite"></p></div>
    <div class="hzm-side">
      <div class="seg hzm-modes" role="tablist">${["watch","trace","write"].map(m=>`<button type="button" role="tab" data-m="${m}" class="${HZM.mode === m ? "on" : ""}" aria-selected="${HZM.mode === m}">${t(m === "watch" ? "hzWatch" : m === "trace" ? "hzTrace" : "hzWrite")}</button>`).join("")}</div>
      <div class="hzm-ctl"><button type="button" class="btn sm sec" data-play>${f7("play_fill")}<span>${t("hzPlay")}</span></button><button type="button" class="chip-t hzm-loop" aria-pressed="${HZM.loop}">${f7("arrow_2_circlepath")}<span>${t("hzLoop")}</span></button></div>
      <dl class="hzm-facts"><div><dt>${t("hzOrder")}</dt><dd>${t("hzStrokes", d.strokes.length)}</dd></div>${rad ? `<div><dt>${t("hzRadical")}</dt><dd><span lang="zh-CN" class="hzm-rad">${rad}</span>${radM ? ` — ${zesc(radM)}` : ""}</dd></div>` : ""}${ci && ci.dc && !/？/.test(ci.dc) && ci.dc.length > 1 ? `<div><dt>${t("hzParts")}</dt><dd lang="zh-CN">${hzDecomp(ci.dc)}</dd></div>` : ""}</dl>
      ${words.length ? `<div class="hzm-ws"><b>${t("hzWords")}</b>${words.map(v=>`<button type="button" class="hzm-wd" data-w="${zesc(v.zh)}"><span lang="zh-CN">${v.zh}</span><small>${v.py} · ${zesc(hzMean(v))}</small></button>`).join("")}</div>` : ""}
    </div>
  </div>
  <div class="hzm-steps"><b>${t("hzOrder")}</b>${hzStepsHTML(d)}</div>`;
  $$(".hzm-tab", el).forEach(b=>b.addEventListener("click", ()=>{ HZM.k = +b.dataset.k; HZM.mode = "watch"; hzPaint(); }));
  $(".hzm-say", el).addEventListener("click", ()=>speak(HZM.chars.length > 1 && HZM.word ? HZM.word : c));
  $$(".hzm-wd", el).forEach(b=>b.addEventListener("click", ()=>hzOpen(b.dataset.w)));
  $$("[data-m]", el).forEach(b=>b.addEventListener("click", ()=>{ HZM.mode = b.dataset.m; $$("[data-m]", el).forEach(x=>{ x.classList.toggle("on", x === b); x.setAttribute("aria-selected", x === b); }); hzMount(); }));
  $("[data-play]", el).addEventListener("click", ()=>{ HZM.mode = "watch"; $$("[data-m]", el).forEach(x=>x.classList.toggle("on", x.dataset.m === "watch")); hzMount(true); });
  $(".hzm-loop", el).addEventListener("click", e=>{ HZM.loop = !HZM.loop; e.currentTarget.setAttribute("aria-pressed", HZM.loop); hzMount(true); });
  $$(".hzm-steps .hz-st-i", el).forEach(b=>b.addEventListener("click", ()=>hzShowStroke(+b.dataset.k)));
  hzMount(stroke == null, stroke);
}
function hzDecomp(dc){ return [...dc].filter(x=>!/[⿰-⿻]/.test(x)).map(x=>`<button type="button" class="hzm-part" data-hz="${x}">${x}</button>`).join(" + "); }
function hzSize(){ return Math.min(260, Math.max(180, Math.round(window.innerWidth * .62))); }
function hzMount(play, stroke){
  const el = HZM.el; if (!el) return;
  clearTimeout(HZM.tm);
  const box = $("#hzCv", el), fb = $(".hzm-fb", el), c = HZM.chars[HZM.k], col = hzColors(), size = hzSize();
  box.innerHTML = ""; fb.textContent = ""; fb.className = "hzm-fb";
  box.insertAdjacentHTML("afterbegin", `<svg class="hz-bggrid" viewBox="0 0 1024 1024" aria-hidden="true">${HZ_GRID}</svg>`);
  const w = HZ.lib.create(box, c, {width:size, height:size, padding:12, charDataLoader:hzLoader, strokeColor:col.stroke, outlineColor:col.outline, highlightColor:col.hi, drawingColor:col.draw, radicalColor:null, showCharacter:HZM.mode === "watch", showOutline:HZM.mode !== "write", strokeAnimationSpeed:1, delayBetweenStrokes:260, drawingWidth:22});
  HZM.writer = w;
  if (HZM.mode === "watch") {
    const run = () => w.animateCharacter({onComplete:()=>{ if (HZM.loop && HZM.writer === w) HZM.tm = setTimeout(run, 900); }});
    if (stroke != null) hzShowStroke(stroke); else if (play !== false) setTimeout(run, 250);
  } else {
    fb.textContent = t(HZM.mode === "trace" ? "hzTraceP" : "hzMemP");
    hzQuiz(w, c, {outline:HZM.mode === "trace", fb, onDone:r=>{ fb.className = "hzm-fb " + (r.mistakes ? "acc" : "ok"); fb.innerHTML = hzResultText(r); }});
  }
}
function hzShowStroke(k){
  const el = HZM.el; if (!el) return; const d = HZM.ds[HZM.k];
  $$(".hzm-steps .hz-st-i", el).forEach(b=>b.classList.toggle("on", +b.dataset.k === k));
  if (HZM.mode !== "watch") { HZM.mode = "watch"; $$("[data-m]", el).forEach(x=>{ const on = x.dataset.m === "watch"; x.classList.toggle("on", on); x.setAttribute("aria-selected", on); }); }
  clearTimeout(HZM.tm); HZM.writer = null;
  const box = $("#hzCv", el), size = hzSize(); box.innerHTML = hzStrokeAnim(d, k); box.firstChild.style.width = size + "px"; box.firstChild.style.height = size + "px";
  const fb = $(".hzm-fb", el); fb.className = "hzm-fb"; fb.innerHTML = `<b>${t("hzStep", k + 1)}</b> · ${zesc(hzNameTxt(hzStrokeInfo(d.medians[k])))}`;
}
function hzResultText(r){
  const bad = Object.keys(r.per).filter(k=>r.per[k] > 0).map(k=>+k + 1);
  return r.mistakes ? `${t("hzDone", r.mistakes)}${bad.length ? ` ${t("hzMistakesAt")}: ${bad.join(", ")}.` : ""}` : t("hzDoneOk");
}

/* ---------- проверка написания: подсказки по каждой ошибке ---------- */
function hzMistakeText(d, k, drawn){
  if (!drawn || !drawn.points || drawn.points.length < 2) return t("hzShortErr");
  const pts = drawn.points.map(p=>[p.x, p.y]);
  const exp = hzStrokeInfo(d.medians[k]);
  /* на какую черту похоже нарисованное: средняя дистанция до средних линий */
  const dist = (a, med) => { let s = 0; a.forEach(p=>{ let m = 1e9; med.forEach(q=>{ const dd = Math.hypot(p[0] - q[0], p[1] - q[1]); if (dd < m) m = dd; }); s += m; }); return s / a.length; };
  const len = pts.reduce((s, p, i)=>i ? s + Math.hypot(p[0] - pts[i-1][0], p[1] - pts[i-1][1]) : 0, 0);
  const mLen = d.medians[k].reduce((s, p, i)=>i ? s + Math.hypot(p[0] - d.medians[k][i-1][0], p[1] - d.medians[k][i-1][1]) : 0, 0);
  let best = -1, bd = 1e9; d.medians.forEach((m, j)=>{ const v = dist(pts, m); if (v < bd) { bd = v; best = j; } });
  if (best > k && bd < 110) return t("hzOrderErr", best + 1, k + 1);
  const got = hzStrokeInfo(pts);
  const nm = x => { const n = hzName(x); return n ? `${n.zh} (${n.tr} ${x.arrows})` : x.arrows; };
  if (got.key !== exp.key && got.main !== exp.main) return t("hzDirErr", nm(exp), got.arrows);
  if (len < mLen * .45) return t("hzShortErr");
  return t("hzPosErr");
}
function hzQuiz(w, c, o){
  const per = {}; let mistakes = 0;
  hzChar(c).then(d=>{
    if (!d) return;
    w.quiz({
      showOutline: !!o.outline, showHintAfterMisses: o.hintAfter || (o.outline ? 2 : 3), highlightOnComplete:true, leniency: o.leniency || 1.1, markStrokeCorrectAfterMisses: 5,
      onMistake: s=>{ mistakes++; per[s.strokeNum] = (per[s.strokeNum] || 0) + 1;
        if (o.fb) { o.fb.className = "hzm-fb bad"; o.fb.textContent = s.isBackwards ? t("hzBack") : hzMistakeText(d, s.strokeNum, s.drawnPath); if (s.mistakesOnStroke >= (o.hintAfter || (o.outline ? 2 : 3))) o.fb.textContent += " " + t("hzHint"); }
        if (o.onMistake) o.onMistake(s); },
      onCorrectStroke: s=>{ if (o.fb) { o.fb.className = "hzm-fb ok"; o.fb.textContent = s.strokesRemaining ? `${t("hzGood")} ${t("hzNow", s.strokeNum + 2, d.strokes.length)}` : t("hzGood"); } },
      onComplete: s=>{ const r = {mistakes:s.totalMistakes, per, n:d.strokes.length}; if (o.onDone) o.onDone(r); }
    });
  });
}

/* =========================================================
   задание «Напиши иероглиф» внутри темы: items [{c, py, m:[ru,en]}]
   ========================================================= */
INIT.hz = (api, ex) => {
  let res;
  const build = restore => {
    res = ex.items.map((_, k)=>restore && restore.r && restore.r[k] ? restore.r[k] : null);
    api.body.innerHTML = `<p class="hz-ex-p">${t("hzNoTouch")}</p><div class="hz-ex"></div>`;
    const box = $(".hz-ex", api.body);
    ex.items.forEach((it, k)=>{
      const card = document.createElement("div"); card.className = "hz-exc";
      card.innerHTML = `<div class="hz-exq"><span class="hz-expy">${it.py}</span><span class="hz-exm">${zesc(LANG === "en" ? it.m[1] : it.m[0])}</span></div><div class="hz-excv"></div><p class="hzm-fb" aria-live="polite"></p><div class="hz-exb"><button type="button" class="chip-t" data-show>${t("hzShowOutline")}</button><button type="button" class="chip-t" data-again>${t("hzAgain")}</button><button type="button" class="chip-t" data-look data-hz="${it.c}">${t("hzWatch")}</button></div>`;
      box.appendChild(card);
      const cv = $(".hz-excv", card), fb = $(".hzm-fb", card);
      const done = r => { card.classList.add(r.mistakes <= 1 ? "is-ok" : "is-acc"); fb.className = "hzm-fb " + (r.mistakes <= 1 ? "ok" : "acc"); fb.innerHTML = hzResultText(r); };
      const mount = outline => hzLoad().then(()=>{
        cv.innerHTML = `<svg class="hz-bggrid" viewBox="0 0 1024 1024" aria-hidden="true">${HZ_GRID}</svg>`; card.classList.remove("is-ok", "is-acc"); fb.textContent = ""; fb.className = "hzm-fb";
        const col = hzColors(), w = HZ.lib.create(cv, it.c, {width:150, height:150, padding:8, charDataLoader:hzLoader, strokeColor:col.stroke, outlineColor:col.outline, highlightColor:col.hi, drawingColor:col.draw, showCharacter:false, showOutline:outline, drawingWidth:18});
        hzQuiz(w, it.c, {outline, fb, hintAfter:outline ? 2 : 3, onDone:r=>{ done(r); if (!res[k]) { res[k] = {m:r.mistakes}; api.ans(k, r.mistakes <= 1 ? "ok" : "bad"); api.save({r:res}); report(false); } }});
      }).catch(()=>{ fb.textContent = t("hzFail"); });
      $("[data-show]", card).addEventListener("click", ()=>mount(true));
      $("[data-again]", card).addEventListener("click", ()=>mount(false));
      if (res[k]) { hzLoad().then(()=>hzChar(it.c)).then(d=>{ if (d) cv.innerHTML = hzSvg(d, d.strokes.length, null); done({mistakes:res[k].m, per:{}, n:0}); }).catch(()=>{}); }
      else mount(false);
    });
    report(true);
  };
  const report = restoring => { const done = res.filter(Boolean).length, ok = res.filter(r=>r && r.m <= 1).length; api.count(ok, ex.items.length); if (done === ex.items.length) api.finish(ok, ex.items.length, t("hzExDone", ok, ex.items.length) + ` · <span class="pen">${praise(ok / ex.items.length)}</span>`, restoring); else api.status(t("hzMemP")); };
  api.button(t("again"), "sec", ()=>{ api.clear(); build(null); });
  build(api.saved);
};

/* =========================================================
   раздел «Иероглифы»: #hanzi, #hanzi/all, #hanzi/ref
   ========================================================= */
const HZS = {tab:"learn", perDay:+(ls.get("edito-hz-pd") || 5) || 5, upTo:+(ls.get("edito-hz-up") || 15) || 15, sess:null};
const hzSt = () => (S.quiz.hz = S.quiz.hz || {});
const hzStatus = c => { const r = hzSt()[c]; if (!r) return "new"; return r.st === 2 && r.ivl >= 7 ? "know" : "learn"; };
function hzToday(){
  const lessons = zhLessonChars().filter(l=>l.n <= HZS.upTo), all = lessons.flatMap(l=>l.chars), now = Date.now(), st = hzSt();
  const due = all.filter(c=>st[c] && st[c].due <= now);
  const dn = typeof dayStart === "function" ? dayStart(now) : now - now % 864e5;
  const learnedToday = Object.values(st).filter(r=>r.first && r.first >= dn).length;
  const fresh = all.filter(c=>!st[c]).slice(0, Math.max(0, HZS.perDay - learnedToday + (HZS.extra || 0)));
  return {due, fresh, all};
}
function renderHanzi(sub){
  HZS.tab = ["all","ref"].includes(sub) ? sub : "learn";
  main.innerHTML = `<div class="col hz-col">
  <header class="t-head seyes"><p class="eyebrow">中文 · HSK 2</p><h1>${t("hanzi")} <span lang="zh-CN" class="hz-h1">汉字</span></h1><p class="t-ru">${t("hzSub")}</p>
    <div class="seg hz-tabs" role="tablist">${["learn","all","ref"].map(k=>`<a role="tab" href="#hanzi${k === "learn" ? "" : "/" + k}" class="${HZS.tab === k ? "on" : ""}" aria-selected="${HZS.tab === k}">${t("hzTabs")[k]}</a>`).join("")}</div>
  </header><div id="hzBody"></div></div>`;
  const body = $("#hzBody");
  if (HZS.tab === "all") hzAll(body); else if (HZS.tab === "ref") hzRef(body); else hzLearnHome(body);
}
function hzLearnHome(body){
  const td = hzToday(), n = td.due.length + td.fresh.length;
  const lessons = zhLessonChars();
  body.innerHTML = `<section class="pcard hz-today">
    <div class="hz-tdh"><h2>${t("hzToday")}</h2><span class="hz-tdn">${t("hzNewN", td.fresh.length)} · ${t("hzDueN", td.due.length)}</span></div>
    <div class="hz-opts">
      <label class="hz-opt"><span>${t("hzLessons")}</span><select id="hzUp">${lessons.map(l=>`<option value="${l.n}"${l.n === HZS.upTo ? " selected" : ""}>${l.n === 15 ? t("hzAllL") + " (1–15)" : t("hzUpTo", l.n)}</option>`).join("")}</select></label>
      <label class="hz-opt"><span>${t("hzPerDay")}</span><select id="hzPd">${[3,5,8,12].map(x=>`<option value="${x}"${x === HZS.perDay ? " selected" : ""}>${x}</option>`).join("")}</select></label>
    </div>
    <div class="hz-prev" lang="zh-CN">${td.due.concat(td.fresh).slice(0, 24).map(c=>`<button type="button" class="hz-chip st-${hzStatus(c)}" data-hz="${c}">${c}</button>`).join("")}</div>
    <div class="hz-go">${n ? `<button type="button" class="btn pri" id="hzStart">${t("hzStart")}${ARR}</button>` : `<p class="muted">${t("hzNoDue")}</p><button type="button" class="btn sec" id="hzMore">${t("hzMore")}</button>`}</div>
  </section>
  <details class="pcard hz-how"><summary>${f7("lightbulb")}<b>${t("hzHowH")}</b></summary>${typeof ZH_HOW === "function" ? ZH_HOW(LANG) : ""}</details>`;
  $("#hzUp").addEventListener("change", e=>{ HZS.upTo = +e.target.value; ls.set("edito-hz-up", HZS.upTo); hzLearnHome(body); });
  $("#hzPd").addEventListener("change", e=>{ HZS.perDay = +e.target.value; ls.set("edito-hz-pd", HZS.perDay); hzLearnHome(body); });
  const go = $("#hzStart"); if (go) go.addEventListener("click", ()=>hzSession(td));
  const more = $("#hzMore"); if (more) more.addEventListener("click", ()=>{ HZS.extra = (HZS.extra || 0) + 5; hzLearnHome(body); });
}
/* занятие: новые — 3 шага (посмотри → обведи → напиши сам), повторения — сразу по памяти */
function hzSession(td){
  const queue = td.due.map(c=>({c, kind:"rev"})).concat(td.fresh.map(c=>({c, kind:"new", step:0})));
  HZS.sess = {queue, i:0, done:0, ok:0, n:queue.length};
  hzSessPaint();
}
function hzSessPaint(){
  const s = HZS.sess, body = $("#hzBody"); if (!s || !body) return;
  if (s.i >= s.queue.length) {
    body.innerHTML = `<section class="pcard hz-sum"><div class="dk-end-i">${f7("checkmark_alt")}</div><h2>${t("hzSessDone")}</h2><p class="muted">${t("hzSessSum", s.n, s.ok)}</p><a class="btn sec" href="#hanzi" id="hzBackH">${t("hzHome")}</a></section>`;
    $("#hzBackH").addEventListener("click", e=>{ e.preventDefault(); HZS.sess = null; renderHanzi("learn"); });
    return;
  }
  const it = s.queue[s.i], c = it.c, info = hzInfoOf(c) || [...zhDict().values()].find(v=>v.zh.includes(c));
  const ci = typeof ZH_CH !== "undefined" ? ZH_CH[c] : null;
  const py = (hzInfoOf(c) || {}).py || (ci && ci.p) || "", mean = hzMean(hzInfoOf(c)) || (info ? `${info.zh} — ${hzMean(info)}` : (ci && ci.d) || "");
  const step = it.kind === "rev" ? 2 : it.step;
  body.innerHTML = `<section class="pcard hz-sess">
    <div class="hz-sh"><span class="hz-prog"><i style="width:${Math.round(s.i / s.queue.length * 100)}%"></i></span><button type="button" class="chip-t" id="hzQuit">${t("hzQuit")}</button></div>
    ${it.kind === "new" ? `<ol class="hz-stp">${t("hzStepsL").map((x, k)=>`<li class="${k < step ? "done" : k === step ? "on" : ""}">${x}</li>`).join("")}</ol>` : ""}
    <div class="hz-card">
      <div class="hz-q"><span class="hz-qpy">${py}</span><span class="hz-qm">${zesc(mean)}</span>${step === 0 ? `<span class="hz-qc" lang="zh-CN">${c}</span>` : ""}${info && info.zh !== c ? `<span class="hz-qw" lang="zh-CN">${step === 2 ? info.zh.split(c).join("＿") : info.zh}</span>` : ""}</div>
      <div class="hz-pad"><div class="hzm-cv" id="hzSCv"></div><p class="hzm-fb" id="hzSFb" aria-live="polite">${t(step === 0 ? "hzLook" : step === 1 ? "hzTraceP" : it.kind === "rev" ? "hzRevP" : "hzMemP")}</p></div>
      <div class="hz-sbtn">${step === 0 ? `<button type="button" class="btn sec" id="hzReplay">${f7("play_fill")}<span>${t("hzPlay")}</span></button><button type="button" class="btn pri" id="hzNextS">${t("hzNextChar")}${ARR}</button>` : `<button type="button" class="btn sec" id="hzRetry">${t("hzAgain")}</button><button type="button" class="btn pri" id="hzNextS" hidden>${t("hzNextChar")}${ARR}</button>`}</div>
    </div>
    ${step === 0 ? `<div class="hzm-steps" id="hzSSteps"></div>` : ""}
  </section>`;
  $("#hzQuit").addEventListener("click", ()=>{ HZS.sess = null; renderHanzi("learn"); });
  if (synth) speak(info ? info.zh : c);
  hzLoad().then(()=>hzChar(c)).then(d=>{
    if (!d || HZS.sess !== s) return;
    const cv = $("#hzSCv"), fb = $("#hzSFb"), col = hzColors(), size = Math.min(300, Math.max(220, Math.round(window.innerWidth * .7)));
    const mount = () => {
      cv.innerHTML = `<svg class="hz-bggrid" viewBox="0 0 1024 1024" aria-hidden="true">${HZ_GRID}</svg>`;
      const w = HZ.lib.create(cv, c, {width:size, height:size, padding:12, charDataLoader:hzLoader, strokeColor:col.stroke, outlineColor:col.outline, highlightColor:col.hi, drawingColor:col.draw, showCharacter:step === 0, showOutline:step !== 2, strokeAnimationSpeed:1, delayBetweenStrokes:260, drawingWidth:22});
      if (step === 0) { setTimeout(()=>w.animateCharacter(), 300); $("#hzReplay").onclick = () => mount(); const ss = $("#hzSSteps"); ss.innerHTML = `<b>${t("hzOrder")}</b>${hzStepsHTML(d)}`; $$(".hz-st-i", ss).forEach(b=>b.addEventListener("click", ()=>{ const k = +b.dataset.k; $$(".hz-st-i", ss).forEach(x=>x.classList.toggle("on", x === b)); fb.innerHTML = `<b>${t("hzStep", k + 1)}</b> · ${zesc(hzNameTxt(hzStrokeInfo(d.medians[k])))}`; cv.innerHTML = hzStrokeAnim(d, k); cv.firstChild.style.width = size + "px"; cv.firstChild.style.height = size + "px"; })); return; }
      hzQuiz(w, c, {outline:step === 1, fb, onDone:r=>{
        fb.className = "hzm-fb " + (r.mistakes ? "acc" : "ok"); fb.innerHTML = hzResultText(r);
        const nx = $("#hzNextS"); nx.hidden = false; nx.focus();
        if (step === 2) hzGrade(c, r.mistakes, it.kind === "new");
        it.res = r;
      }});
    };
    mount();
    const rt = $("#hzRetry"); if (rt) rt.addEventListener("click", mount);
    $("#hzNextS").addEventListener("click", ()=>{
      if (it.kind === "new" && step < 2) { it.step++; }
      else { if (it.res && !it.res.mistakes) s.ok++; s.done++; s.i++; if (it.res && it.res.mistakes > 3 && !it.again) { it.again = true; s.queue.push({c, kind:"new", step:1, again:true}); } }
      hzSessPaint();
    });
  });
}
/* оценка → интервальное повторение (как в Quizlet) */
function hzGrade(c, mistakes, isNew){
  const st = hzSt(), g = mistakes === 0 ? 4 : mistakes <= 2 ? 3 : mistakes <= 5 ? 2 : 1;
  const r = srsNext(st[c] && st[c].due ? st[c] : null, isNew && g >= 3 ? 3 : g);
  if (!st[c]) r.first = Date.now(); else if (st[c].first) r.first = st[c].first;
  st[c] = r; touch("quiz");
}
function hzAll(body){
  const ls2 = zhLessonChars();
  body.innerHTML = `<p class="muted hz-leg">${t("hzLegend")} <span class="hz-chip st-new sm">${t("hzSt").new}</span> <span class="hz-chip st-learn sm">${t("hzSt").learn}</span> <span class="hz-chip st-know sm">${t("hzSt").know}</span></p>
  ${ls2.map(l=>`<section class="hz-les"><h3 class="unit-h"><span class="ng-n u-pill" data-hue="${zHue(l.n)}">${t("unitWzh")} ${l.n}</span><small lang="zh-CN">${l.zh}</small></h3><div class="hz-cgrid" lang="zh-CN">${l.chars.map(c=>`<button type="button" class="hz-chip st-${hzStatus(c)}" data-hz="${c}">${c}<small>${(ZH_CH && ZH_CH[c] ? ZH_CH[c].p : "")}</small></button>`).join("")}</div></section>`).join("")}`;
}
function hzRef(body){
  body.innerHTML = typeof ZH_REF === "function" ? ZH_REF(LANG) : "";
  hzFillSteps(body);
}
