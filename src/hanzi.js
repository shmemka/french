/* =========================================================
   HANZI: окно иероглифа (анимация + порядок черт), раздел «Иероглифы» (#hanzi):
   учить → обводить → писать по памяти с проверкой каждой черты и подсказками, интервальные повторения.
   Модуль встраивается внутрь движка (как quizlet.js).
   Данные черт: zh/hz.json (Make Me a Hanzi / hanzi-writer-data, Arphic PL), библиотека zh/hanzi-writer.min.js (MIT).
   ========================================================= */
Object.assign(I18N.ru, {
  hanzi:"Иероглифы", hzSub:"Смотри, как пишется иероглиф, обводи его и пиши сам: система проверяет каждую черту и подсказывает, что исправить.",
  hzTabs:{learn:"Учить", all:"Все иероглифы", keys:"Ключи", ref:"Черты и правила"},
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
  hzNoTouch:"Пиши пальцем или мышью прямо в клетке.",
  hzWord:"Слово", hzWordStrokes:(n, k)=>`${n} ${plural(n, ["черта", "черты", "черт"])} в ${k} ${plural(k, ["иероглифе", "иероглифах", "иероглифах"])}`,
  hzWordTrace:"Обведи слово: иероглифы по очереди, следующий подсветится сам.", hzWordMem:"Напиши слово по памяти — иероглиф за иероглифом.",
  hzWordRes:(n, list)=>n ? `Готово. Ошибок: ${n} (${list}).` : "Слово написано без единой ошибки!",
  hzUnit:"Учить", hzUnitC:"Иероглифы", hzUnitW:"Слова", hzWordsN:n=>`слов: ${n}`,
  hzKeyN:n=>`Ключ № ${n}`, hzKeyHl:"ключ выделен цветом", hzKeyIn:"Иероглифы курса с этим ключом", hzKeyNone:"В иероглифах курса этого ключа нет.", hzKeyForms:"Формы",
  hzKeysH:"Тренировка ключей", hzKeysSub:"Ключ (部首) — часть иероглифа, по которой его ищут в словаре. Чаще всего он подсказывает смысл: 氵 — вода, 口 — рот, 木 — дерево.",
  hzKM:{char:"Какой ключ?", mean:"Что значит ключ?", find:"Найди ключ"},
  hzKScope:"Ключи", hzKCourse:n=>`из курса (${n})`, hzKAll:"все 214", hzKStart:"Начать: 10 вопросов",
  hzKQchar:"Какой ключ у этого иероглифа?", hzKQmean:"Что значит этот ключ?", hzKQfind:"Какой ключ так называется?",
  hzKExpl:(c, f, n, py, m)=>`${c} — ключ ${f} (№ ${n}, ${py}, «${m}»).`, hzKNote:"В разных словарях ключ иногда определяют по-разному — здесь по таблице 214 ключей Канси.",
  hzKDone:(ok, n)=>`Верно: ${ok} из ${n}.`, hzKAgain:"Ещё 10", hzKNext:"Дальше", hzKStrokes:n=>`${n} ${plural(n, ["черта", "черты", "черт"])}`,
  hzKFilter:"Показать", hzKInCourse:n=>`в курсе: ${n}`,
  zpy:"Пиньинь", zpyHint:"Пиньинь скрыт. Нажми на размытый пиньинь, чтобы подсмотреть."
});
Object.assign(I18N.en, {
  hanzi:"Characters", hzSub:"Watch how a character is written, trace it, then write it yourself: every stroke is checked and you get hints on what to fix.",
  hzTabs:{learn:"Learn", all:"All characters", keys:"Radicals", ref:"Strokes & rules"},
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
  hzNoTouch:"Write with your finger or mouse right in the box.",
  hzWord:"Word", hzWordStrokes:(n, k)=>`${n} strokes in ${k} characters`,
  hzWordTrace:"Trace the word: one character after another, the next one lights up by itself.", hzWordMem:"Write the word from memory, character by character.",
  hzWordRes:(n, list)=>n ? `Done. Mistakes: ${n} (${list}).` : "The whole word, not a single mistake!",
  hzUnit:"Learn", hzUnitC:"Characters", hzUnitW:"Words", hzWordsN:n=>`words: ${n}`,
  hzKeyN:n=>`Radical no. ${n}`, hzKeyHl:"radical highlighted", hzKeyIn:"Course characters with this radical", hzKeyNone:"No course character uses this radical.", hzKeyForms:"Forms",
  hzKeysH:"Radical practice", hzKeysSub:"A radical (部首) is the part a character is filed under in a dictionary. It usually hints at the meaning: 氵 — water, 口 — mouth, 木 — tree.",
  hzKM:{char:"Which radical?", mean:"What does it mean?", find:"Find the radical"},
  hzKScope:"Radicals", hzKCourse:n=>`in the course (${n})`, hzKAll:"all 214", hzKStart:"Start: 10 questions",
  hzKQchar:"Which radical does this character have?", hzKQmean:"What does this radical mean?", hzKQfind:"Which radical is this?",
  hzKExpl:(c, f, n, py, m)=>`${c} — radical ${f} (no. ${n}, ${py}, “${m}”).`, hzKNote:"Dictionaries sometimes assign radicals differently — here we follow the 214 Kangxi radicals.",
  hzKDone:(ok, n)=>`Correct: ${ok} of ${n}.`, hzKAgain:"10 more", hzKNext:"Next", hzKStrokes:n=>`${n} ${n === 1 ? "stroke" : "strokes"}`,
  hzKFilter:"Show", hzKInCourse:n=>`in the course: ${n}`,
  zpy:"Pinyin", zpyHint:"Pinyin is hidden. Tap the blurred pinyin to peek."
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
/* формы ключей — отдельный файл zh/hzk.json, грузится только когда нужен */
function hzKData(){ return HZ.kload || (HZ.kload = fetch(HZ.base + "hzk.json").then(r=>r.ok ? r.json() : {}).catch(()=>({}))); }
function hzChar(c){
  if (HZ.data && HZ.data[c]) return Promise.resolve(HZ.data[c]);
  return hzKData().then(k=>{ if (k[c]) { if (HZ.data) HZ.data[c] = k[c]; return k[c]; }
    return fetch(HZ_CDN(c)).then(r=>r.ok ? r.json() : null).then(d=>{ if (d && HZ.data) HZ.data[c] = d; return d; }).catch(()=>null); });
}
const hzLoader = (c, onLoad, onErr) => { hzChar(c).then(d=>d ? onLoad(d) : onErr && onErr()); };
const hzCss = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const hzColors = () => ({stroke:hzCss("--ink") || "#1a1f3d", outline:hzCss("--hz-outline") || "#dfe2ee", hi:hzCss("--encre") || "#3446d0", draw:hzCss("--encre") || "#3446d0", rad:hzCss("--hz-rad") || "#2f6fd6"});

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

/* ---------- пиньинь: показывать / скрыть (html.zh-nopy, localStorage edito-zh-py) ---------- */
function zpyHidden(){ return ls.get("edito-zh-py") === "0"; }
function zpyBtn(){ return `<button type="button" class="chip-t zpy-tg" aria-pressed="${!zpyHidden()}" title="${zesc(t("zpy"))}">${f7on("eye_slash", "eye")}<span>${t("zpy")}</span></button>`; }
function zpyApply(){
  const hide = zpyHidden();
  document.documentElement.classList.toggle("zh-nopy", hide);
  $$(".zpy-tg").forEach(b=>b.setAttribute("aria-pressed", !hide));
  $$(".zchat").forEach(c=>{ const b = $(".zc-py", c); if (b) b.setAttribute("aria-pressed", hide ? c.classList.contains("py-on") : !c.classList.contains("no-py")); });
  $$(".pyh.rv").forEach(x=>x.classList.remove("rv"));
}
document.documentElement.classList.toggle("zh-nopy", zpyHidden());
document.addEventListener("click", e=>{
  const tg = e.target.closest && e.target.closest(".zpy-tg");
  if (tg) { ls.set("edito-zh-py", zpyHidden() ? "1" : "0"); zpyApply(); if (zpyHidden()) toast(t("zpyHint")); return; }
  const ph = e.target.closest && e.target.closest(".pyh");
  if (ph && document.documentElement.classList.contains("zh-nopy") && !ph.classList.contains("rv")) { ph.classList.add("rv"); }
}, true);

/* ---------- доска для письма: один иероглиф или целое слово подряд ---------- */
/* o: {size, mode:"watch"|"trace"|"write", fb, rad, loop:()=>bool, onDone(r), onChar(i, r)} */
function hzWordBoard(box, chars, o){
  const col = hzColors(), ws = [], cells = [];
  box.innerHTML = ""; box.classList.add("hz-wb");
  chars.forEach(c=>{
    const cell = document.createElement("div"); cell.className = "hzm-cv hz-wc";
    cell.innerHTML = `<svg class="hz-bggrid" viewBox="0 0 1024 1024" aria-hidden="true">${HZ_GRID}</svg>`;
    box.appendChild(cell); cells.push(cell);
    ws.push(HZ.lib.create(cell, c, {width:o.size, height:o.size, padding:o.size > 120 ? 10 : 6, charDataLoader:hzLoader, strokeColor:col.stroke, outlineColor:col.outline, highlightColor:col.hi, drawingColor:col.draw, radicalColor:o.rad ? col.rad : null,
      showCharacter:false, showOutline:o.mode !== "write", strokeAnimationSpeed:1.2, delayBetweenStrokes:220, drawingWidth:o.size > 120 ? 20 : 14}));
  });
  const ctl = {ws, cells, alive:true, tm:null, stop(){ ctl.alive = false; clearTimeout(ctl.tm); ws.forEach(w=>{ try { w.cancelQuiz(); } catch(e) {} }); }};
  if (o.mode === "watch") {
    const run = i => {
      if (!ctl.alive) return;
      if (i >= ws.length) { cells.forEach(x=>x.classList.remove("act")); if (o.loop && o.loop()) ctl.tm = setTimeout(()=>{ ws.forEach(w=>w.hideCharacter()); run(0); }, 900); else if (o.onDone) o.onDone(); return; }
      cells.forEach((x, k)=>x.classList.toggle("act", k === i && ws.length > 1));
      ws[i].animateCharacter({onComplete:()=>{ ctl.tm = setTimeout(()=>run(i + 1), 260); }});
    };
    ctl.tm = setTimeout(()=>run(0), 250);
  } else {
    let total = 0; const per = [];
    const go = i => {
      if (!ctl.alive) return;
      cells.forEach((x, k)=>{ x.classList.toggle("act", k === i && ws.length > 1); x.classList.toggle("done", k < i); x.classList.toggle("wait", k > i); });
      if (i >= ws.length) { if (o.onDone) o.onDone({mistakes:total, per:ws.length === 1 && per[0] ? per[0].per : {}, chars:per, n:0}); return; }
      hzQuiz(ws[i], chars[i], {outline:o.mode === "trace", fb:o.fb, pre:chars.length > 1 ? chars[i] : "", onDone:r=>{ total += r.mistakes; per.push(r); if (o.onChar) o.onChar(i, r); ctl.tm = setTimeout(()=>go(i + 1), 320); }});
    };
    go(0);
  }
  return ctl;
}
/* итог письма слова */
function hzBoardResult(chars, r){
  if (chars.length === 1) return hzResultText({mistakes:r.mistakes, per:r.chars && r.chars[0] ? r.chars[0].per : (r.per || {})});
  return t("hzWordRes", r.mistakes, (r.chars || []).map((x, k)=>`${chars[k]} — ${x.mistakes}`).join(", "));
}
const hzFit = (chars, width, max) => chars.length === 1 ? max : Math.max(84, Math.min(max, Math.floor((width - (chars.length - 1) * 10) / chars.length)));

/* ---------- окно иероглифа / слова ---------- */
const HZM = {el:null, writer:null, board:null, chars:[], k:0, mode:"watch", loop:false, tm:null};
function hzStopAll(){ clearTimeout(HZM.tm); try { HZM.writer && HZM.writer.cancelQuiz && HZM.writer.cancelQuiz(); } catch(e) {} if (HZM.board) HZM.board.stop(); HZM.board = null; HZM.writer = null; }
function hzClose(){ if (!HZM.el) return; hzStopAll(); HZM.el.remove(); HZM.el = null; document.removeEventListener("keydown", hzKey, true); }
function hzKey(e){ if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); hzClose(); } }
window.addEventListener("hashchange", ()=>hzClose());
function hzInfoOf(w){ const D = zhDict(); return D.get(w) || null; }
function hzWordsWith(c){ const out = []; zhDict().forEach(v=>{ if (v.zh.includes(c) && out.length < 8) out.push(v); }); return out; }
const hzMean = v => v ? (LANG === "en" ? v.en : v.ru) : "";
function hzShell(label){
  hzClose();
  const el = document.createElement("div"); el.className = "hzm";
  el.innerHTML = `<div class="hzm-bg" data-x></div><div class="hzm-box" role="dialog" aria-modal="true" aria-label="${zesc(label)}"><div class="hzm-in"><p class="hz-load">${t("hzLoading")}</p></div></div>`;
  document.body.appendChild(el); HZM.el = el;
  el.addEventListener("click", e=>{ if (e.target.closest("[data-x]")) hzClose(); });
  document.addEventListener("keydown", hzKey, true);
  requestAnimationFrame(()=>el.classList.add("in"));
  return el;
}
function hzOpen(word, opts){
  opts = opts || {};
  const chars = [...word].filter(isHan); if (!chars.length) return;
  const el = hzShell(word);
  HZM.chars = chars; HZM.word = word; HZM.mode = "watch"; HZM.kind = "char";
  /* слово открывается целиком; иероглиф — если нажали на конкретную черту */
  HZM.k = chars.length > 1 && opts.stroke == null && !opts.one ? -1 : Math.min(opts.focus || 0, chars.length - 1);
  if (synth) speak(word);
  hzLoad().then(()=>Promise.all(chars.map(hzChar))).then(ds=>{ if (HZM.el !== el) return; HZM.ds = ds; hzPaint(opts.stroke); }).catch(()=>{ if (HZM.el === el) $(".hzm-in", el).innerHTML = `<p class="hz-load">${t("hzFail")}</p>`; });
}
const hzPyH = py => py ? `<span class="pyh">${py}</span>` : "";
function hzKeyRow(c, d){
  const ko = typeof zhKeyOf === "function" ? zhKeyOf(c) : null;
  if (!ko) { const ci = typeof ZH_CH !== "undefined" ? ZH_CH[c] : null; const rad = ci && ci.r; return rad ? `<div><dt>${t("hzRadical")}</dt><dd><span lang="zh-CN" class="hzm-rad">${rad}</span></dd></div>` : ""; }
  const k = ko.k, m = LANG === "en" ? k[5] : k[4], forms = [...k[3]].filter(f=>f !== ko.form);
  return `<div><dt>${t("hzRadical")}</dt><dd><button type="button" class="hzm-rad" data-hzk="${k[0]}" lang="zh-CN">${ko.form}</button> <span class="hzm-kn">№ ${k[0]} · ${hzPyH(k[2])} — ${zesc(m)}${forms.length ? ` <small lang="zh-CN">(${forms.join(" ")})</small>` : ""}</span>${d && d.radStrokes && d.radStrokes.length ? `<small class="hzm-hl"><i></i>${t("hzKeyHl")}</small>` : ""}</dd></div>`;
}
function hzPaint(stroke){
  const el = HZM.el; if (!el) return;
  hzStopAll();
  const W = HZM.k < 0;
  const c = W ? HZM.word : HZM.chars[HZM.k], d = W ? null : HZM.ds[HZM.k];
  const wi = hzInfoOf(HZM.word), ci = !W && typeof ZH_CH !== "undefined" ? ZH_CH[c] : null, cw = W ? null : hzInfoOf(c);
  const py = W ? (wi ? wi.py : HZM.chars.map(x=>(ZH_CH[x] || {}).p || "").join(" ")) : cw ? cw.py : ci ? ci.p : wi && HZM.chars.length === 1 ? wi.py : "";
  const inW = W || cw ? null : wi && HZM.chars.length > 1 ? wi : [...zhDict().values()].find(v=>v.zh.includes(c));
  const mean = W ? hzMean(wi) : (HZM.chars.length === 1 ? hzMean(wi) : "") || hzMean(cw) || (inW ? `${inW.zh} — ${hzMean(inW)}` : "") || (ci && ci.d ? ci.d : "");
  const words = W ? [] : hzWordsWith(c).filter(v=>v.zh !== HZM.word).slice(0, 6);
  const tabs = HZM.chars.length > 1 ? `<button type="button" class="hzm-tab hzm-tabw${W ? " on" : ""}" data-k="-1" lang="zh-CN" title="${zesc(t("hzWord"))}">${HZM.word}</button>` + HZM.chars.map((x, k)=>`<button type="button" class="hzm-tab${k === HZM.k ? " on" : ""}" data-k="${k}" lang="zh-CN">${x}</button>`).join("") : `<span class="hzm-one" lang="zh-CN">${c}</span>`;
  const nStrokes = W ? HZM.ds.reduce((s, x)=>s + (x ? x.strokes.length : 0), 0) : d.strokes.length;
  const facts = W
    ? `<div><dt>${t("hzOrder")}</dt><dd>${t("hzWordStrokes", nStrokes, HZM.chars.length)}</dd></div>${HZM.chars.map((x, k)=>{ const ko = typeof zhKeyOf === "function" ? zhKeyOf(x) : null; const xi = hzInfoOf(x) || {}; return `<div class="hzm-cr"><dt><button type="button" class="hzm-crc" data-k="${k}" lang="zh-CN">${x}</button></dt><dd>${hzPyH((ZH_CH[x] || {}).p || xi.py || "")}${xi.zh ? ` · ${zesc(hzMean(xi))}` : ""}${ko ? `<br><small>${t("hzRadical")}: <button type="button" class="hzm-rad sm" data-hzk="${ko.k[0]}" lang="zh-CN">${ko.form}</button> № ${ko.k[0]} — ${zesc(LANG === "en" ? ko.k[5] : ko.k[4])}</small>` : ""}</dd></div>`; }).join("")}`
    : `<div><dt>${t("hzOrder")}</dt><dd>${t("hzStrokes", nStrokes)}</dd></div>${hzKeyRow(c, d)}${ci && ci.dc && !/？/.test(ci.dc) && ci.dc.length > 1 ? `<div><dt>${t("hzParts")}</dt><dd lang="zh-CN">${hzDecomp(ci.dc)}</dd></div>` : ""}`;
  $(".hzm-in", el).innerHTML = `
  <div class="hzm-h">
    <div class="hzm-w">${tabs}</div>
    <div class="hzm-t"><span class="hzm-py pyh">${py}</span><span class="hzm-m">${zesc(mean)}</span></div>
    <button type="button" class="qq-mx hzm-say" aria-label="${zesc(t("qzSay"))}">${ICON_PLAY}</button>
    <button type="button" class="qq-mx" data-x aria-label="${zesc(t("hzClose"))}">${f7("xmark")}</button>
  </div>
  <div class="hzm-main${W ? " wide" : ""}">
    <div class="hzm-pad"><div class="hzm-cv${W ? " hz-wb" : ""}" id="hzCv"></div><p class="hzm-fb" aria-live="polite"></p></div>
    <div class="hzm-side">
      <div class="seg hzm-modes" role="tablist">${["watch","trace","write"].map(m=>`<button type="button" role="tab" data-m="${m}" class="${HZM.mode === m ? "on" : ""}" aria-selected="${HZM.mode === m}">${t(m === "watch" ? "hzWatch" : m === "trace" ? "hzTrace" : "hzWrite")}</button>`).join("")}</div>
      <div class="hzm-ctl"><button type="button" class="btn sm sec" data-play>${f7("play_fill")}<span>${t("hzPlay")}</span></button><button type="button" class="chip-t hzm-loop" aria-pressed="${HZM.loop}">${f7("arrow_2_circlepath")}<span>${t("hzLoop")}</span></button></div>
      <dl class="hzm-facts">${facts}</dl>
      ${words.length ? `<div class="hzm-ws"><b>${t("hzWords")}</b>${words.map(v=>`<button type="button" class="hzm-wd" data-w="${zesc(v.zh)}"><span lang="zh-CN">${v.zh}</span><small>${hzPyH(v.py)} · ${zesc(hzMean(v))}</small></button>`).join("")}</div>` : ""}
    </div>
  </div>
  <div class="hzm-steps"><b>${t("hzOrder")}</b>${W ? HZM.ds.map((x, k)=>x ? `<div class="hzm-stw"><span class="hzm-stc" lang="zh-CN">${HZM.chars[k]}</span>${hzStepsHTML(x)}</div>` : "").join("") : hzStepsHTML(d)}</div>`;
  $$(".hzm-tab, .hzm-crc", el).forEach(b=>b.addEventListener("click", ()=>{ HZM.k = +b.dataset.k; HZM.mode = "watch"; hzPaint(); }));
  $(".hzm-say", el).addEventListener("click", ()=>speak(W || HZM.chars.length === 1 ? HZM.word : c));
  $$(".hzm-wd", el).forEach(b=>b.addEventListener("click", ()=>hzOpen(b.dataset.w)));
  $$("[data-m]", el).forEach(b=>b.addEventListener("click", ()=>{ HZM.mode = b.dataset.m; $$("[data-m]", el).forEach(x=>{ x.classList.toggle("on", x === b); x.setAttribute("aria-selected", x === b); }); hzMount(); }));
  $("[data-play]", el).addEventListener("click", ()=>{ HZM.mode = "watch"; $$("[data-m]", el).forEach(x=>x.classList.toggle("on", x.dataset.m === "watch")); hzMount(true); });
  $(".hzm-loop", el).addEventListener("click", e=>{ HZM.loop = !HZM.loop; e.currentTarget.setAttribute("aria-pressed", HZM.loop); hzMount(true); });
  if (W) $$(".hzm-stw", el).forEach((w, k)=>$$(".hz-st-i", w).forEach(b=>b.addEventListener("click", ()=>{ HZM.k = k; HZM.mode = "watch"; hzPaint(+b.dataset.k); })));
  else $$(".hzm-steps .hz-st-i", el).forEach(b=>b.addEventListener("click", ()=>hzShowStroke(+b.dataset.k)));
  hzMount(stroke == null, stroke);
}
function hzDecomp(dc){ return [...dc].filter(x=>!/[⿰-⿻]/.test(x)).map(x=>`<button type="button" class="hzm-part" data-hz="${x}">${x}</button>`).join(" + "); }
function hzSize(){ return Math.min(260, Math.max(180, Math.round(window.innerWidth * .62))); }
function hzMount(play, stroke){
  const el = HZM.el; if (!el) return;
  hzStopAll();
  const box = $("#hzCv", el), fb = $(".hzm-fb", el), col = hzColors();
  fb.textContent = ""; fb.className = "hzm-fb";
  if (HZM.k < 0 || HZM.kind === "key") {
    const chars = HZM.k < 0 ? HZM.chars : [HZM.keyForm];
    const width = Math.min($(".hzm-in", el).clientWidth - 8, 720), size = hzFit(chars, width, chars.length === 1 ? hzSize() : 200) - 2;
    if (HZM.mode !== "watch") fb.textContent = t(chars.length > 1 ? (HZM.mode === "trace" ? "hzWordTrace" : "hzWordMem") : (HZM.mode === "trace" ? "hzTraceP" : "hzMemP"));
    if (HZM.mode === "watch" && play === false) { box.innerHTML = ""; chars.forEach((c, k)=>{ const d = HZM.kind === "key" ? HZM.kd : HZM.ds[k]; if (d) { box.insertAdjacentHTML("beforeend", `<div class="hzm-cv hz-wc">${hzSvg(d, d.strokes.length, null)}</div>`); box.lastChild.firstChild.style.width = size + "px"; box.lastChild.firstChild.style.height = size + "px"; } }); return; }
    HZM.board = hzWordBoard(box, chars, {size, mode:HZM.mode, fb, rad:false, loop:()=>HZM.loop, onDone:r=>{ if (HZM.mode === "watch" || !r) return; fb.className = "hzm-fb " + (r.mistakes ? "acc" : "ok"); fb.innerHTML = hzBoardResult(chars, r); }});
    return;
  }
  const c = HZM.chars[HZM.k], size = hzSize();
  box.innerHTML = "";
  box.insertAdjacentHTML("afterbegin", `<svg class="hz-bggrid" viewBox="0 0 1024 1024" aria-hidden="true">${HZ_GRID}</svg>`);
  const w = HZ.lib.create(box, c, {width:size, height:size, padding:12, charDataLoader:hzLoader, strokeColor:col.stroke, outlineColor:col.outline, highlightColor:col.hi, drawingColor:col.draw, radicalColor:HZM.mode === "watch" ? col.rad : null, showCharacter:HZM.mode === "watch", showOutline:HZM.mode !== "write", strokeAnimationSpeed:1, delayBetweenStrokes:260, drawingWidth:22});
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
  const el = HZM.el; if (!el || HZM.k < 0) return; const d = HZM.ds[HZM.k];
  $$(".hzm-steps .hz-st-i", el).forEach(b=>b.classList.toggle("on", +b.dataset.k === k));
  if (HZM.mode !== "watch") { HZM.mode = "watch"; $$("[data-m]", el).forEach(x=>{ const on = x.dataset.m === "watch"; x.classList.toggle("on", on); x.setAttribute("aria-selected", on); }); }
  hzStopAll();
  const box = $("#hzCv", el), size = hzSize(); box.innerHTML = hzStrokeAnim(d, k); box.firstChild.style.width = size + "px"; box.firstChild.style.height = size + "px";
  const fb = $(".hzm-fb", el); fb.className = "hzm-fb"; fb.innerHTML = `<b>${t("hzStep", k + 1)}</b> · ${zesc(hzNameTxt(hzStrokeInfo(d.medians[k])))}`;
}
function hzResultText(r){
  const bad = Object.keys(r.per || {}).filter(k=>r.per[k] > 0).map(k=>+k + 1);
  return r.mistakes ? `${t("hzDone", r.mistakes)}${bad.length ? ` ${t("hzMistakesAt")}: ${bad.join(", ")}.` : ""}` : t("hzDoneOk");
}

/* ---------- окно ключа ---------- */
document.addEventListener("click", e=>{ const b = e.target.closest && e.target.closest("[data-hzk]"); if (b) { e.preventDefault(); e.stopPropagation(); hzKeyOpen(+b.dataset.hzk); } }, true);
function hzKeyOpen(n, form){
  const k = ZH_KEYS[n - 1]; if (!k) return;
  const el = hzShell(k[3]);
  HZM.kind = "key"; HZM.k = 0; HZM.mode = "watch"; HZM.keyN = n; HZM.chars = []; HZM.word = "";
  const forms = [...k[3]], show = form || (typeof zhKeyForm === "function" ? zhKeyForm(n) : forms[0]);
  if (!forms.includes(show)) forms.push(show);
  hzLoad().then(()=>Promise.all(forms.map(hzChar))).then(ds=>{
    if (HZM.el !== el) return;
    const has = forms.filter((f, i)=>ds[i]);
    HZM.keyForm = has.includes(show) ? show : has[0] || show; HZM.kd = ds[forms.indexOf(HZM.keyForm)];
    hzKeyPaint(forms.filter((f, i)=>ds[i] || f === show));
  }).catch(()=>{ if (HZM.el === el) $(".hzm-in", el).innerHTML = `<p class="hz-load">${t("hzFail")}</p>`; });
}
function hzKeyPaint(forms){
  const el = HZM.el; if (!el) return;
  hzStopAll();
  const n = HZM.keyN, k = ZH_KEYS[n - 1], m = LANG === "en" ? k[5] : k[4], d = HZM.kd;
  const inC = (typeof zhKeyChars === "function" ? zhKeyChars().by[n] : null) || [];
  $(".hzm-in", el).innerHTML = `
  <div class="hzm-h">
    <div class="hzm-w"><span class="hzm-one hzm-key" lang="zh-CN">${HZM.keyForm}</span></div>
    <div class="hzm-t"><span class="hzm-kno">${t("hzKeyN", n)} · ${t("hzKStrokes", k[1])}</span><span class="hzm-py pyh">${k[2]}</span><span class="hzm-m">${zesc(m)}</span></div>
    <button type="button" class="qq-mx" data-x aria-label="${zesc(t("hzClose"))}">${f7("xmark")}</button>
  </div>
  <div class="hzm-main">
    <div class="hzm-pad">${d ? `<div class="hzm-cv" id="hzCv"></div>` : `<div class="hzm-cv hz-noglyph" lang="zh-CN">${HZM.keyForm}</div>`}<p class="hzm-fb" aria-live="polite"></p></div>
    <div class="hzm-side">
      ${d ? `<div class="seg hzm-modes" role="tablist">${["watch","trace","write"].map(x=>`<button type="button" role="tab" data-m="${x}" class="${HZM.mode === x ? "on" : ""}">${t(x === "watch" ? "hzWatch" : x === "trace" ? "hzTrace" : "hzWrite")}</button>`).join("")}</div>
      <div class="hzm-ctl"><button type="button" class="btn sm sec" data-play>${f7("play_fill")}<span>${t("hzPlay")}</span></button></div>` : ""}
      <dl class="hzm-facts"><div><dt>${t("hzKeyForms")}</dt><dd class="hzk-forms">${forms.map(f=>`<button type="button" class="hzm-part${f === HZM.keyForm ? " on" : ""}" data-f="${f}" lang="zh-CN">${f}</button>`).join(" ")}</dd></div></dl>
      <div class="hzm-ws"><b>${t("hzKeyIn")}</b>${inC.length ? `<div class="hz-cgrid sm" lang="zh-CN">${inC.slice(0, 40).map(c=>`<button type="button" class="hz-chip" data-hz="${c}">${c}</button>`).join("")}</div>` : `<p class="muted">${t("hzKeyNone")}</p>`}</div>
    </div>
  </div>
  ${d ? `<div class="hzm-steps"><b>${t("hzOrder")}</b>${hzStepsHTML(d)}</div>` : ""}`;
  $$("[data-f]", el).forEach(b=>b.addEventListener("click", ()=>{ const f = b.dataset.f; hzChar(f).then(dd=>{ HZM.keyForm = f; HZM.kd = dd; HZM.mode = "watch"; hzKeyPaint(forms); }); }));
  $$("[data-m]", el).forEach(b=>b.addEventListener("click", ()=>{ HZM.mode = b.dataset.m; $$("[data-m]", el).forEach(x=>x.classList.toggle("on", x === b)); hzMount(); }));
  const pl = $("[data-play]", el); if (pl) pl.addEventListener("click", ()=>{ HZM.mode = "watch"; $$("[data-m]", el).forEach(x=>x.classList.toggle("on", x.dataset.m === "watch")); hzMount(true); });
  $$(".hzm-steps .hz-st-i", el).forEach(b=>b.addEventListener("click", ()=>{ hzStopAll(); const box = $("#hzCv", el), size = hzSize(); box.innerHTML = hzStrokeAnim(d, +b.dataset.k); box.firstChild.style.width = size + "px"; box.firstChild.style.height = size + "px"; }));
  if (d) hzMount(true);
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
  const per = {}; let mistakes = 0; const P = o.pre ? `<b lang="zh-CN">${o.pre}</b> · ` : "";
  hzChar(c).then(d=>{
    if (!d) return;
    w.quiz({
      showOutline: !!o.outline, showHintAfterMisses: o.hintAfter || (o.outline ? 2 : 3), highlightOnComplete:true, leniency: o.leniency || 1.1, markStrokeCorrectAfterMisses: 5,
      onMistake: s=>{ mistakes++; per[s.strokeNum] = (per[s.strokeNum] || 0) + 1;
        if (o.fb) { o.fb.className = "hzm-fb bad"; o.fb.innerHTML = P + zesc(s.isBackwards ? t("hzBack") : hzMistakeText(d, s.strokeNum, s.drawnPath)) + (s.mistakesOnStroke >= (o.hintAfter || (o.outline ? 2 : 3)) ? " " + zesc(t("hzHint")) : ""); }
        if (o.onMistake) o.onMistake(s); },
      onCorrectStroke: s=>{ if (o.fb) { o.fb.className = "hzm-fb ok"; o.fb.innerHTML = P + zesc(s.strokesRemaining ? `${t("hzGood")} ${t("hzNow", s.strokeNum + 2, d.strokes.length)}` : t("hzGood")); } },
      onComplete: s=>{ const r = {mistakes:s.totalMistakes, per, n:d.strokes.length}; if (o.onDone) o.onDone(r); }
    });
  });
}

/* =========================================================
   задание «Напиши иероглиф / слово» внутри темы: items [{c, py, m:[ru,en]}], c — иероглиф или слово
   ========================================================= */
INIT.hz = (api, ex) => {
  let res; const boards = [];
  const build = restore => {
    boards.forEach(b=>b.stop()); boards.length = 0;
    res = ex.items.map((_, k)=>restore && restore.r && restore.r[k] ? restore.r[k] : null);
    api.body.innerHTML = `<p class="hz-ex-p">${t("hzNoTouch")}</p><div class="hz-ex"></div>`;
    const box = $(".hz-ex", api.body);
    ex.items.forEach((it, k)=>{
      const chars = [...it.c].filter(isHan), many = chars.length > 1, size = many ? 112 : 150;
      const card = document.createElement("div"); card.className = "hz-exc" + (many ? " wide" : ""); card.style.setProperty("--n", chars.length);
      card.innerHTML = `<div class="hz-exq"><span class="hz-expy pyh">${it.py}</span><span class="hz-exm">${zesc(LANG === "en" ? it.m[1] : it.m[0])}</span></div><div class="hz-excv"></div><p class="hzm-fb" aria-live="polite"></p><div class="hz-exb"><button type="button" class="chip-t" data-show>${t("hzShowOutline")}</button><button type="button" class="chip-t" data-again>${t("hzAgain")}</button><button type="button" class="chip-t" data-look data-hz="${it.c}">${t("hzWatch")}</button></div>`;
      box.appendChild(card);
      const cv = $(".hz-excv", card), fb = $(".hzm-fb", card);
      const done = r => { const ok = r.mistakes <= chars.length; card.classList.add(ok ? "is-ok" : "is-acc"); fb.className = "hzm-fb " + (ok ? "ok" : "acc"); fb.innerHTML = r.chars ? hzBoardResult(chars, r) : hzResultText(r); return ok; };
      const mount = outline => hzLoad().then(()=>{
        card.classList.remove("is-ok", "is-acc"); fb.textContent = ""; fb.className = "hzm-fb";
        const b = hzWordBoard(cv, chars, {size, mode:outline ? "trace" : "write", fb, onDone:r=>{ const ok = done(r); if (!res[k]) { res[k] = {m:r.mistakes}; api.ans(k, ok ? "ok" : "bad"); api.save({r:res}); report(false); } }});
        boards.push(b);
      }).catch(()=>{ fb.textContent = t("hzFail"); });
      $("[data-show]", card).addEventListener("click", ()=>mount(true));
      $("[data-again]", card).addEventListener("click", ()=>mount(false));
      if (res[k]) { hzLoad().then(()=>Promise.all(chars.map(hzChar))).then(ds=>{ cv.innerHTML = ""; cv.classList.add("hz-wb"); ds.forEach(d=>{ if (d) { cv.insertAdjacentHTML("beforeend", `<div class="hzm-cv hz-wc">${hzSvg(d, d.strokes.length, null)}</div>`); cv.lastChild.firstChild.style.width = size + "px"; cv.lastChild.firstChild.style.height = size + "px"; } }); done({mistakes:res[k].m, per:{}, n:0}); }).catch(()=>{}); }
      else mount(false);
    });
    report(true);
  };
  const report = restoring => { const n = ex.items.length, done = res.filter(Boolean).length, ok = res.filter((r, k)=>r && r.m <= [...ex.items[k].c].filter(isHan).length).length; api.count(ok, n); if (done === n) api.finish(ok, n, t("hzExDone", ok, n) + ` · <span class="pen">${praise(ok / n)}</span>`, restoring); else api.status(t("hzMemP")); };
  api.button(t("again"), "sec", ()=>{ api.clear(); build(null); });
  build(api.saved);
};

/* =========================================================
   раздел «Иероглифы»: #hanzi, #hanzi/all, #hanzi/keys, #hanzi/ref
   ========================================================= */
const HZS = {tab:"learn", perDay:+(ls.get("edito-hz-pd") || 5) || 5, upTo:+(ls.get("edito-hz-up") || 15) || 15, unit:ls.get("edito-hz-unit") === "w" ? "w" : "c", sess:null};
const hzSt = () => (S.quiz.hz = S.quiz.hz || {});
const hzStW = () => (S.quiz.hzw = S.quiz.hzw || {});
const hzMap = unit => unit === "w" ? hzStW() : hzSt();
const hzStatusIn = (map, c) => { const r = map[c]; if (!r) return "new"; return r.st === 2 && r.ivl >= 7 ? "know" : "learn"; };
const hzStatus = c => hzStatusIn(hzSt(), c);
/* слова уроков (без имён), по урокам */
function zhLessonWords(){
  const seen = new Set();
  return ZH_LS.slice().sort((a, b)=>a.n - b.n).map(d=>({n:d.n, zh:d.zh, words:d.texts.flatMap(x=>x.w || []).filter(w=>!w[6] && [...w[0]].some(isHan) && !seen.has(w[0]) && seen.add(w[0])).map(w=>w[0])}));
}
function hzToday(){
  const W = HZS.unit === "w", lessons = (W ? zhLessonWords().map(l=>({n:l.n, items:l.words})) : zhLessonChars().map(l=>({n:l.n, items:l.chars}))).filter(l=>l.n <= HZS.upTo);
  const all = lessons.flatMap(l=>l.items), now = Date.now(), st = hzMap(HZS.unit);
  const due = all.filter(c=>st[c] && st[c].due <= now);
  const dn = typeof dayStart === "function" ? dayStart(now) : now - now % 864e5;
  const learnedToday = Object.values(st).filter(r=>r.first && r.first >= dn).length;
  const fresh = all.filter(c=>!st[c]).slice(0, Math.max(0, HZS.perDay - learnedToday + (HZS.extra || 0)));
  return {due, fresh, all};
}
const hzUnitSeg = () => `<div class="seg hz-unit" role="tablist">${[["c", t("hzUnitC")], ["w", t("hzUnitW")]].map(([k, l])=>`<button type="button" data-u="${k}" class="${HZS.unit === k ? "on" : ""}" aria-selected="${HZS.unit === k}">${l}</button>`).join("")}</div>`;
function hzBindUnit(body, again){ $$("[data-u]", body).forEach(b=>b.addEventListener("click", ()=>{ HZS.unit = b.dataset.u; ls.set("edito-hz-unit", HZS.unit); HZS.extra = 0; again(); })); }
function renderHanzi(sub){
  HZS.tab = ["all","keys","ref"].includes(sub) ? sub : "learn";
  HZS.sess = null; HZK.q = null;
  main.innerHTML = `<div class="col hz-col">
  <header class="t-head seyes"><p class="eyebrow">中文 · HSK 2</p><h1>${t("hanzi")} <span lang="zh-CN" class="hz-h1">汉字</span></h1><p class="t-ru">${t("hzSub")}</p>
    <div class="hz-hrow"><div class="seg hz-tabs" role="tablist">${["learn","all","keys","ref"].map(k=>`<a role="tab" href="#hanzi${k === "learn" ? "" : "/" + k}" class="${HZS.tab === k ? "on" : ""}" aria-selected="${HZS.tab === k}">${t("hzTabs")[k]}</a>`).join("")}</div>${zpyBtn()}</div>
  </header><div id="hzBody"></div></div>`;
  const body = $("#hzBody");
  if (HZS.tab === "all") hzAll(body); else if (HZS.tab === "keys") hzKeys(body); else if (HZS.tab === "ref") hzRef(body); else hzLearnHome(body);
}
function hzLearnHome(body){
  const td = hzToday(), n = td.due.length + td.fresh.length, W = HZS.unit === "w";
  const lessons = zhLessonChars();
  body.innerHTML = `<section class="pcard hz-today">
    <div class="hz-tdh"><h2>${t("hzToday")}</h2><span class="hz-tdn">${t("hzNewN", td.fresh.length)} · ${t("hzDueN", td.due.length)}</span></div>
    <div class="hz-opts">
      <div class="hz-opt"><span>${t("hzUnit")}</span>${hzUnitSeg()}</div>
      <label class="hz-opt"><span>${t("hzLessons")}</span><select id="hzUp">${lessons.map(l=>`<option value="${l.n}"${l.n === HZS.upTo ? " selected" : ""}>${l.n === 15 ? t("hzAllL") + " (1–15)" : t("hzUpTo", l.n)}</option>`).join("")}</select></label>
      <label class="hz-opt"><span>${t("hzPerDay")}</span><select id="hzPd">${[3,5,8,12].map(x=>`<option value="${x}"${x === HZS.perDay ? " selected" : ""}>${x}</option>`).join("")}</select></label>
    </div>
    <div class="hz-prev${W ? " words" : ""}" lang="zh-CN">${td.due.concat(td.fresh).slice(0, 24).map(c=>`<button type="button" class="hz-chip st-${hzStatusIn(hzMap(HZS.unit), c)}" data-hz="${c}">${c}</button>`).join("")}</div>
    <div class="hz-go">${n ? `<button type="button" class="btn pri" id="hzStart">${t("hzStart")}${ARR}</button>` : `<p class="muted">${t("hzNoDue")}</p><button type="button" class="btn sec" id="hzMore">${t("hzMore")}</button>`}</div>
  </section>
  <details class="pcard hz-how"><summary>${f7("lightbulb")}<b>${t("hzHowH")}</b></summary>${typeof ZH_HOW === "function" ? ZH_HOW(LANG) : ""}</details>`;
  hzBindUnit(body, ()=>hzLearnHome(body));
  $("#hzUp").addEventListener("change", e=>{ HZS.upTo = +e.target.value; ls.set("edito-hz-up", HZS.upTo); hzLearnHome(body); });
  $("#hzPd").addEventListener("change", e=>{ HZS.perDay = +e.target.value; ls.set("edito-hz-pd", HZS.perDay); hzLearnHome(body); });
  const go = $("#hzStart"); if (go) go.addEventListener("click", ()=>hzSession(td));
  const more = $("#hzMore"); if (more) more.addEventListener("click", ()=>{ HZS.extra = (HZS.extra || 0) + 5; hzLearnHome(body); });
}
/* занятие: новые — 3 шага (посмотри → обведи → напиши сам), повторения — сразу по памяти; единица — иероглиф или слово */
function hzSession(td){
  const queue = td.due.map(c=>({c, kind:"rev"})).concat(td.fresh.map(c=>({c, kind:"new", step:0})));
  HZS.sess = {queue, i:0, done:0, ok:0, n:queue.length, unit:HZS.unit};
  hzSessPaint();
}
function hzSessPaint(){
  const s = HZS.sess, body = $("#hzBody"); if (!s || !body) return;
  if (s.board) { s.board.stop(); s.board = null; }
  if (s.i >= s.queue.length) {
    body.innerHTML = `<section class="pcard hz-sum"><div class="dk-end-i">${f7("checkmark_alt")}</div><h2>${t("hzSessDone")}</h2><p class="muted">${t("hzSessSum", s.n, s.ok)}</p><a class="btn sec" href="#hanzi" id="hzBackH">${t("hzHome")}</a></section>`;
    $("#hzBackH").addEventListener("click", e=>{ e.preventDefault(); HZS.sess = null; renderHanzi("learn"); });
    return;
  }
  const it = s.queue[s.i], c = it.c, chars = [...c].filter(isHan), many = chars.length > 1;
  const own = hzInfoOf(c), info = own || [...zhDict().values()].find(v=>v.zh.includes(c));
  const ci = !many && typeof ZH_CH !== "undefined" ? ZH_CH[c] : null;
  const py = (own || {}).py || (ci && ci.p) || "", mean = hzMean(own) || (info ? `${info.zh} — ${hzMean(info)}` : (ci && ci.d) || "");
  const step = it.kind === "rev" ? 2 : it.step;
  const ko = !many && typeof zhKeyOf === "function" ? zhKeyOf(c) : null;
  body.innerHTML = `<section class="pcard hz-sess">
    <div class="hz-sh"><span class="hz-prog"><i style="width:${Math.round(s.i / s.queue.length * 100)}%"></i></span><button type="button" class="chip-t" id="hzQuit">${t("hzQuit")}</button></div>
    ${it.kind === "new" ? `<ol class="hz-stp">${t("hzStepsL").map((x, k)=>`<li class="${k < step ? "done" : k === step ? "on" : ""}">${x}</li>`).join("")}</ol>` : ""}
    <div class="hz-card">
      <div class="hz-q"><span class="hz-qpy pyh">${py}</span><span class="hz-qm">${zesc(mean)}</span>${step === 0 ? `<span class="hz-qc" lang="zh-CN">${c}</span>` : ""}${!many && info && info.zh !== c ? `<span class="hz-qw" lang="zh-CN">${step === 2 ? info.zh.split(c).join("＿") : info.zh}</span>` : ""}${ko && step < 2 ? `<span class="hz-qk">${t("hzRadical")}: <button type="button" class="hzm-rad sm" data-hzk="${ko.k[0]}" lang="zh-CN">${ko.form}</button> — ${zesc(LANG === "en" ? ko.k[5] : ko.k[4])}</span>` : ""}</div>
      <div class="hz-pad"><div class="hzm-cv${many ? " hz-wb" : ""}" id="hzSCv"></div><p class="hzm-fb" id="hzSFb" aria-live="polite">${t(step === 0 ? "hzLook" : step === 1 ? (many ? "hzWordTrace" : "hzTraceP") : it.kind === "rev" ? "hzRevP" : (many ? "hzWordMem" : "hzMemP"))}</p></div>
      <div class="hz-sbtn">${step === 0 ? `<button type="button" class="btn sec" id="hzReplay">${f7("play_fill")}<span>${t("hzPlay")}</span></button><button type="button" class="btn pri" id="hzNextS">${t("hzNextChar")}${ARR}</button>` : `<button type="button" class="btn sec" id="hzRetry">${t("hzAgain")}</button><button type="button" class="btn pri" id="hzNextS" hidden>${t("hzNextChar")}${ARR}</button>`}</div>
    </div>
    ${step === 0 ? `<div class="hzm-steps" id="hzSSteps"></div>` : ""}
  </section>`;
  $("#hzQuit").addEventListener("click", ()=>{ if (s.board) s.board.stop(); HZS.sess = null; renderHanzi("learn"); });
  if (synth) speak(many ? c : info ? info.zh : c);
  hzLoad().then(()=>Promise.all(chars.map(hzChar))).then(ds=>{
    if (HZS.sess !== s || ds.some(d=>!d)) return;
    const cv = $("#hzSCv"), fb = $("#hzSFb");
    const width = Math.min(640, cv.parentElement.clientWidth || 600), size = many ? hzFit(chars, width, 200) : Math.min(300, Math.max(220, Math.round(window.innerWidth * .7)));
    const mount = () => {
      if (s.board) s.board.stop();
      if (step === 0) {
        s.board = hzWordBoard(cv, chars, {size, mode:"watch", rad:!many});
        $("#hzReplay").onclick = () => mount();
        const ss = $("#hzSSteps");
        ss.innerHTML = `<b>${t("hzOrder")}</b>` + ds.map((d, i)=>`<div class="hzm-stw" data-i="${i}">${many ? `<span class="hzm-stc" lang="zh-CN">${chars[i]}</span>` : ""}${hzStepsHTML(d)}</div>`).join("");
        $$(".hz-st-i", ss).forEach(b=>b.addEventListener("click", ()=>{ const k = +b.dataset.k, i = +b.closest(".hzm-stw").dataset.i, d = ds[i];
          $$(".hz-st-i", ss).forEach(x=>x.classList.toggle("on", x === b)); if (s.board) s.board.stop();
          fb.innerHTML = `${many ? `<b lang="zh-CN">${chars[i]}</b> · ` : ""}<b>${t("hzStep", k + 1)}</b> · ${zesc(hzNameTxt(hzStrokeInfo(d.medians[k])))}`;
          const cell = cv.children[i]; if (cell) { cell.innerHTML = hzStrokeAnim(d, k); cell.firstChild.style.width = size + "px"; cell.firstChild.style.height = size + "px"; } }));
        return;
      }
      s.board = hzWordBoard(cv, chars, {size, mode:step === 1 ? "trace" : "write", fb, onDone:r=>{
        fb.className = "hzm-fb " + (r.mistakes ? "acc" : "ok"); fb.innerHTML = hzBoardResult(chars, r);
        const nx = $("#hzNextS"); nx.hidden = false; nx.focus();
        if (step === 2) hzGrade(c, r.mistakes, it.kind === "new", s.unit, chars.length);
        it.res = r;
      }});
    };
    mount();
    const rt = $("#hzRetry"); if (rt) rt.addEventListener("click", mount);
    $("#hzNextS").addEventListener("click", ()=>{
      if (it.kind === "new" && step < 2) { it.step++; }
      else { if (it.res && !it.res.mistakes) s.ok++; s.done++; s.i++; if (it.res && it.res.mistakes > 3 * chars.length && !it.again) { it.again = true; s.queue.push({c, kind:"new", step:1, again:true}); } }
      hzSessPaint();
    });
  });
}
/* оценка → интервальное повторение (как в Quizlet); в слове ошибки считаются на иероглиф */
function hzGrade(c, mistakes, isNew, unit, nChars){
  const st = hzMap(unit || "c"), m = mistakes / Math.max(1, nChars || 1), g = m === 0 ? 4 : m <= 2 ? 3 : m <= 5 ? 2 : 1;
  const r = srsNext(st[c] && st[c].due ? st[c] : null, isNew && g >= 3 ? 3 : g);
  if (!st[c]) r.first = Date.now(); else if (st[c].first) r.first = st[c].first;
  st[c] = r; touch("quiz");
}
function hzAll(body){
  const W = HZS.unit === "w";
  const lessons = W ? zhLessonWords().map(l=>({n:l.n, zh:l.zh, items:l.words})) : zhLessonChars().map(l=>({n:l.n, zh:l.zh, items:l.chars}));
  const map = hzMap(HZS.unit);
  body.innerHTML = `<div class="hz-allh">${hzUnitSeg()}<p class="muted hz-leg">${t("hzLegend")} <span class="hz-chip st-new sm">${t("hzSt").new}</span> <span class="hz-chip st-learn sm">${t("hzSt").learn}</span> <span class="hz-chip st-know sm">${t("hzSt").know}</span></p></div>
  ${lessons.map(l=>`<section class="hz-les"><h3 class="unit-h"><span class="ng-n u-pill" data-hue="${zHue(l.n)}">${t("unitWzh")} ${l.n}</span><small lang="zh-CN">${l.zh}</small></h3><div class="hz-cgrid${W ? " words" : ""}" lang="zh-CN">${l.items.map(c=>{ const p = W ? (hzInfoOf(c) || {}).py : (ZH_CH && ZH_CH[c] ? ZH_CH[c].p : ""); return `<button type="button" class="hz-chip st-${hzStatusIn(map, c)}" data-hz="${c}">${c}<small class="pyh">${p || ""}</small></button>`; }).join("")}</div></section>`).join("")}`;
  hzBindUnit(body, ()=>hzAll(body));
}
function hzRef(body){
  body.innerHTML = typeof ZH_REF === "function" ? ZH_REF(LANG) : "";
  hzFillSteps(body);
}

/* =========================================================
   ключи: #hanzi/keys — тренировка (какой ключ у иероглифа / что значит / найди) + таблица 214 ключей
   ========================================================= */
const HZK = {mode:ls.get("edito-hzk-mode") || "char", scope:ls.get("edito-hzk-scope") === "all" ? "all" : "course", show:ls.get("edito-hzk-show") === "all" ? "all" : "course", q:null};
const hzKSt = () => (S.quiz.hzk = S.quiz.hzk || {});
const hzKMean = k => LANG === "en" ? k[5] : k[4];
function hzKeys(body){
  const by = zhKeyChars().by, inCourse = ZH_KEYS.filter(k=>by[k[0]]);
  const list = HZK.show === "all" ? ZH_KEYS : inCourse, st = hzKSt();
  const groups = {}; list.forEach(k=>{ (groups[k[1]] = groups[k[1]] || []).push(k); });
  body.innerHTML = `<section class="pcard hz-today hzk-train" id="hzKT">
    <div class="hz-tdh"><h2>${t("hzKeysH")}</h2></div>
    <p class="muted hzk-sub">${t("hzKeysSub")}</p>
    <div class="hz-opts">
      <div class="seg hzk-modes" role="tablist">${["char","mean","find"].map(m=>`<button type="button" data-km="${m}" class="${HZK.mode === m ? "on" : ""}">${t("hzKM")[m]}</button>`).join("")}</div>
      <label class="hz-opt"><span>${t("hzKScope")}</span><select id="hzKSc"${HZK.mode === "char" ? " disabled" : ""}><option value="course"${HZK.scope === "course" || HZK.mode === "char" ? " selected" : ""}>${t("hzKCourse", inCourse.length)}</option><option value="all"${HZK.scope === "all" && HZK.mode !== "char" ? " selected" : ""}>${t("hzKAll")}</option></select></label>
    </div>
    <div class="hz-go"><button type="button" class="btn pri" id="hzKGo">${t("hzKStart")}${ARR}</button></div>
  </section>
  <div class="hzk-listh"><h2>${t("hzTabs").keys}</h2><div class="seg hzk-show">${[["course", t("hzKCourse", inCourse.length)], ["all", t("hzKAll")]].map(([k, l])=>`<button type="button" data-ks="${k}" class="${HZK.show === k ? "on" : ""}">${l}</button>`).join("")}</div></div>
  ${Object.keys(groups).sort((a, b)=>a - b).map(n=>`<section class="hz-les"><h3 class="unit-h"><span class="ng-n u-pill">${t("hzKStrokes", +n)}</span></h3><div class="hzk-grid">${groups[n].map(k=>{ const cnt = (by[k[0]] || []).length, f = zhKeyForm(k[0]), other = [...k[3]].filter(x=>x !== f); return `<button type="button" class="hzk-c st-${hzStatusIn(st, k[0])}" data-hzk="${k[0]}"><span class="hzk-n">${k[0]}</span><span class="hzk-f" lang="zh-CN">${f}</span>${other.length ? `<span class="hzk-v" lang="zh-CN">${other.join(" ")}</span>` : ""}<span class="hzk-py pyh">${k[2]}</span><span class="hzk-m">${zesc(hzKMean(k))}</span>${cnt ? `<span class="hzk-cnt">${t("hzKInCourse", cnt)}</span>` : ""}</button>`; }).join("")}</div></section>`).join("")}`;
  $$("[data-km]", body).forEach(b=>b.addEventListener("click", ()=>{ HZK.mode = b.dataset.km; ls.set("edito-hzk-mode", HZK.mode); hzKeys(body); }));
  $$("[data-ks]", body).forEach(b=>b.addEventListener("click", ()=>{ HZK.show = b.dataset.ks; ls.set("edito-hzk-show", HZK.show); hzKeys(body); }));
  $("#hzKSc").addEventListener("change", e=>{ HZK.scope = e.target.value; ls.set("edito-hzk-scope", HZK.scope); });
  $("#hzKGo").addEventListener("click", ()=>hzKStart());
}
function hzKShuffle(a){ for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function hzKStart(){
  const by = zhKeyChars().by, st = hzKSt(), now = Date.now(), mode = HZK.mode;
  const pool = (mode === "char" || HZK.scope === "course" ? ZH_KEYS.filter(k=>by[k[0]]) : ZH_KEYS).map(k=>k[0]);
  const due = hzKShuffle(pool.filter(n=>st[n] && st[n].due <= now)), fresh = hzKShuffle(pool.filter(n=>!st[n])), rest = hzKShuffle(pool.filter(n=>st[n] && st[n].due > now));
  const pick = due.concat(fresh, rest).slice(0, 10);
  const items = pick.map(n=>{
    const k = ZH_KEYS[n - 1], others = hzKShuffle(pool.filter(x=>x !== n)).slice(0, 12);
    if (mode === "char") {
      const notSelf = by[n].filter(x=>![...ZH_KEYS[n - 1][3]].includes(x)), c = hzKShuffle((notSelf.length ? notSelf : by[n]).slice())[0], ko = zhKeyOf(c);
      const opts = [ko.form]; others.forEach(x=>{ const f = zhKeyForm(x); if (opts.length < 4 && !opts.includes(f)) opts.push(f); });
      return {n, c, q:c, o:hzKShuffle(opts.slice()), a:ko.form, expl:t("hzKExpl", c, ko.form, n, k[2], hzKMean(k))};
    }
    if (mode === "mean") {
      const opts = [hzKMean(k)]; others.forEach(x=>{ const m = hzKMean(ZH_KEYS[x - 1]); if (opts.length < 4 && !opts.includes(m)) opts.push(m); });
      return {n, q:zhKeyForm(n), o:hzKShuffle(opts.slice()), a:hzKMean(k), expl:`${zhKeyForm(n)} — № ${n}, ${k[2]}, «${hzKMean(k)}».`};
    }
    const opts = [zhKeyForm(n)]; others.forEach(x=>{ const f = zhKeyForm(x); if (opts.length < 4 && !opts.includes(f)) opts.push(f); });
    return {n, q:hzKMean(k), o:hzKShuffle(opts.slice()), a:zhKeyForm(n), expl:`«${hzKMean(k)}» — ${zhKeyForm(n)} (№ ${n}, ${k[2]}).`};
  });
  HZK.q = {items, i:0, ok:0, mode};
  hzKPaint();
}
function hzKPaint(){
  const q = HZK.q, box = $("#hzKT"); if (!q || !box) return;
  if (q.i >= q.items.length) {
    box.innerHTML = `<div class="hz-tdh"><h2>${t("hzKeysH")}</h2></div><p class="hzk-res">${t("hzKDone", q.ok, q.items.length)}</p><div class="hz-go"><button type="button" class="btn pri" id="hzKGo">${t("hzKAgain")}${ARR}</button><button type="button" class="btn sec" id="hzKBack">${t("hzHome")}</button></div>`;
    $("#hzKGo").addEventListener("click", hzKStart); $("#hzKBack").addEventListener("click", ()=>hzKeys($("#hzBody")));
    return;
  }
  const it = q.items[q.i], hanQ = q.mode !== "find", hanO = q.mode !== "mean";
  box.innerHTML = `<div class="hz-sh"><span class="hz-prog"><i style="width:${Math.round(q.i / q.items.length * 100)}%"></i></span><button type="button" class="chip-t" id="hzKQuit">${t("hzQuit")}</button></div>
    <p class="hzk-qh">${t(q.mode === "char" ? "hzKQchar" : q.mode === "mean" ? "hzKQmean" : "hzKQfind")}</p>
    <div class="hzk-q${hanQ ? " han" : ""}"${hanQ ? ` lang="zh-CN"` : ""}>${zesc(it.q)}</div>
    <div class="opts hzk-opts${hanO ? " han" : ""}">${it.o.map(o=>`<button type="button" class="opt" data-o="${zesc(o)}"${hanO ? ` lang="zh-CN"` : ""}>${zesc(o)}</button>`).join("")}</div>
    <p class="hzm-fb hzk-fb" aria-live="polite"></p>
    <div class="hz-go"><button type="button" class="btn pri" id="hzKNx" hidden>${t("hzKNext")}${ARR}</button></div>`;
  $("#hzKQuit").addEventListener("click", ()=>{ HZK.q = null; hzKeys($("#hzBody")); });
  if (q.mode === "char" && synth) speak(it.c);
  $$(".hzk-opts .opt", box).forEach(b=>b.addEventListener("click", ()=>{
    if (it.done) return; it.done = true;
    const ok = b.dataset.o === it.a; if (ok) q.ok++;
    $$(".hzk-opts .opt", box).forEach(x=>{ x.disabled = true; if (x.dataset.o === it.a) x.classList.add("is-ok"); else if (x === b) x.classList.add("is-bad"); });
    const st = hzKSt(); st[it.n] = srsNext(st[it.n] && st[it.n].due ? st[it.n] : null, ok ? 3 : 1); touch("quiz");
    const fb = $(".hzk-fb", box); fb.className = "hzm-fb hzk-fb " + (ok ? "ok" : "bad");
    fb.innerHTML = `${ok ? t("hzGood") + " " : ""}${zesc(it.expl)} <button type="button" class="chip-t" data-hzk="${it.n}">${t("hzKeyN", it.n)}</button>${q.mode === "char" ? `<br><small class="muted">${t("hzKNote")}</small>` : ""}`;
    const nx = $("#hzKNx"); nx.hidden = false; nx.focus();
  }));
  $("#hzKNx").addEventListener("click", ()=>{ q.i++; hzKPaint(); });
}
