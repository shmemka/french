/* =========================================================
   中文 — HSK 标准教程 2 (HSK Standard Course 2), 15 уроков.
   Каждый урок задаётся одним объектом ZH_LESSON({...}) в zh-hsk2-*.js
   и собирается в три темы: «Тексты и слова», «Грамматика», «Звуки и иероглифы».
   Двуязычно: TZ(ru, en). Китайский текст — Z("…") (класс fr: озвучка; клик по иероглифу — окно с порядком черт).
   ========================================================= */
var ZHL = "ru";
const TZ = (ru, en) => ZHL === "en" ? (en === undefined ? ru : en) : ru;
const ZH_LS = [];
const ZH_LESSON = def => { ZH_LS.push(def); };
const zesc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const zstrip = s => String(s).replace(/<[^>]+>/g, "");
/* китайский текст: озвучивается по нажатию, клик по иероглифу открывает окно с порядком черт */
const Z = (s, say) => `<span class="fr zh" lang="zh-CN"${say ? ` data-say="${zesc(say)}"` : ""}>${s}</span>`;
/* текст в вариантах ответа (кнопки): без окна иероглифа, только шрифт */
const ZO = s => `<span class="zo" lang="zh-CN">${s}</span>`;
/* иероглифы + пиньинь над ними (одной строкой, как в учебнике) */
const ZP = (zh, py) => `<span class="zp"><span class="zp-py">${py}</span>${Z(zh)}</span>`;
/* выделить часть в китайском тексте */
const ZK = s => `<b class="kn-a">${s}</b>`;
/* ударный слог (точка снизу, как в учебнике) */
const ZST = s => `<b class="zst">${s}</b>`;

/* ---------- тоны пиньиня: варианты-ловушки для заданий ---------- */
const ZT_V = {a:"āáǎà", e:"ēéěè", i:"īíǐì", o:"ōóǒò", u:"ūúǔù", ü:"ǖǘǚǜ"};
const ZT_MAP = (()=>{ const m = {}; for (const b in ZT_V) [...ZT_V[b]].forEach((c, k)=>{ m[c] = [b, k]; }); return m; })();
/* все варианты, где у одного слога другой тон */
function zToneVariants(py){
  const out = new Set(), ch = [...py];
  ch.forEach((c, i)=>{ const m = ZT_MAP[c]; if (!m) return; [0,1,2,3].forEach(k=>{ if (k === m[1]) return; const v = ch.slice(); v[i] = ZT_V[m[0]][k]; out.add(v.join("")); }); });
  out.delete(py); return [...out];
}
/* детерминированный «случайный» выбор, чтобы задания не менялись между сборками */
const zPick = (arr, n, seed) => { const a = arr.slice(), out = []; let s = seed * 9301 + 49297; while (a.length && out.length < n) { s = (s * 9301 + 49297) % 233280; out.push(a.splice(s % a.length, 1)[0]); } return out; };

/* ---------- блоки конспекта ---------- */
/* диалог: строки [кто, иероглифы, пиньинь, ru, en]; переключатели «Пиньинь» и «Перевод», кнопка «Слушать» (мини-плеер) */
const ZCHAT = (id, title, lines) => {
  DLG[id] = {lang:"zh", title:zstrip(title), lines:lines.map(l=>[l[0], l[1], l[3] || "", l[4] || ""])};
  const first = lines[0][0];
  return `<div class="chat zchat"><div class="chat-h"><b>${title}</b><span class="chat-b"><button type="button" class="chip-t zc-py" aria-pressed="true">${TZ("Пиньинь", "Pinyin")}</button><button type="button" class="chip-t chat-tg" aria-pressed="false">${TZ("Скрыть перевод", "Hide translation")}</button><button type="button" class="btn sm sec" data-dlg="${id}">${f7("play_fill")}<span>${TZ("Слушать", "Listen")}</span></button></span></div>
  ${lines.map(([who, zh, py, ru, en])=>`<div class="chat-r ${who === first ? "l" : "r"}"><span class="chat-w">${who}</span><div class="chat-m"><p class="zc-py-l">${py}</p><p class="fr zh zc-zh" lang="zh-CN">${zh}</p><p class="chat-tr">${TZ(ru, en || ru)}</p></div></div>`).join("")}</div>`;
};
/* карточки новых слов: [иероглифы, пиньинь, часть речи, ru, en] */
const ZPOS = {"n.":["сущ.","n."], "v.":["гл.","v."], "adj.":["прил.","adj."], "adv.":["нар.","adv."], "pron.":["мест.","pron."], "num.":["числ.","num."], "m.":["сч. сл.","m."], "num.-m.":["числ.-сч.","num.-m."], "prep.":["предл.","prep."], "conj.":["союз","conj."], "part.":["част.","part."], "aux.":["модальн.","aux."], "int.":["межд.","int."], "":["", ""]};
const ZWORDS = list => `<div class="zws">${list.map(w=>{ const [zh, py, pos, ru, en, star] = w, p = ZPOS[pos] || [pos, pos];
  return `<div class="zw"><button type="button" class="zw-h" data-hz="${zesc(zh)}" lang="zh-CN" aria-label="${zesc(TZ("Как пишется: ", "How to write: ") + zh)}">${zh}</button><div class="zw-t"><span class="fr zw-py" data-say="${zesc(zh)}">${py}</span><span class="zw-m">${p[ZHL === "en" ? 1 : 0] ? `<i>${p[ZHL === "en" ? 1 : 0]}</i> ` : ""}${TZ(ru, en)}</span>${star ? `<small class="zw-s">${TZ("слово уровня HSK 3", "HSK 3 word")}</small>` : ""}</div></div>`; }).join("")}</div>`;
/* последовательность черт иероглифа (рисует модуль hanzi.js) */
const ZSTEPS = ch => `<div class="hz-steps" data-ch="${zesc(ch)}" lang="zh-CN"></div>`;
/* таблица новых черт: [знак черты, название, пиньинь, ru, en, примеры "话说", подписи [[py, ru, en]]] */
const ZSTROKES = rows => `<div class="kn-t zstk" style="--cols:minmax(0,1.25fr) minmax(0,1fr)">${rows.map(([sym, name, py, ru, en, ex, exm])=>`<div class="kn-tr"><span><b class="zstk-s" lang="zh-CN">${sym}</b> ${Z(name)} <i class="zstk-py">${py}</i><small>${TZ(ru, en)}</small></span><span class="zstk-ex">${[...ex].map((c, k)=>`<button type="button" class="zstk-c" data-hz="${c}" lang="zh-CN">${c}<small>${exm && exm[k] ? exm[k][0] + " · " + TZ(exm[k][1], exm[k][2]) : ""}</small></button>`).join("")}</span></div>`).join("")}</div>`;
/* ключи: [ключ, название, пиньинь, ru, en, примеры "现球", подписи] */
const ZRAD = rows => `<div class="kn-t zrad" style="--cols:56px minmax(0,1.3fr) minmax(0,1fr)">${rows.map(([r, name, py, ru, en, ex, exm])=>`<div class="kn-tr"><span class="zrad-r" lang="zh-CN">${r}</span><span>${Z(name)} <i class="zstk-py">${py}</i><small>${TZ(ru, en)}</small></span><span class="zstk-ex">${[...ex].map((c, k)=>`<button type="button" class="zstk-c" data-hz="${c}" lang="zh-CN">${c}<small>${exm && exm[k] ? exm[k][0] + " · " + TZ(exm[k][1], exm[k][2]) : ""}</small></button>`).join("")}</span></div>`).join("")}</div>`;
/* иероглиф-картинка: [иероглиф, пиньинь, ru, en] → описание + шаги */
const ZPICT = ([ch, py, ru, en]) => `<div class="zpict"><div class="zpict-h"><button type="button" class="zpict-c" data-hz="${ch}" lang="zh-CN">${ch}</button><span class="zpict-py">${py}</span></div><p>${TZ(ru, en)}</p>${ZSTEPS(ch)}</div>`;
/* слова с ударением: [[иероглифы с ZST, пиньинь]] */
const ZSTRESS = list => `<div class="zstr">${list.map(([zh, py])=>`<span class="zstr-i"><span class="zp-py">${py}</span>${Z(zh, zstrip(zh))}</span>`).join("")}</div>`;
/* пример: [иероглифы, пиньинь, ru, en] */
const ZEX = list => `<div class="kn-t zex" style="--cols:minmax(0,1.35fr) minmax(0,1fr)">${list.map(([zh, py, ru, en])=>`<div class="kn-tr"><span>${py ? `<span class="zp-py">${py}</span>` : ""}${Z(zh, zstrip(zh))}</span><span><small>${TZ(ru, en)}</small></span></div>`).join("")}</div>`;
/* схема-формула для китайского: части [текст | "~подпись"], + и = как операторы */
const ZFX = (parts, cap) => FX(parts.map(p => typeof p === "string" ? p : p), cap);

/* =========================================================
   сборка урока → 3 темы
   ========================================================= */
const ZH_TITLES = () => ({
  ke:[TZ("Тексты и слова", "Texts and words"), "课文"],
  yu:[TZ("Грамматика", "Grammar"), "注释"],
  zi:[TZ("Звуки и иероглифы", "Sounds and characters"), "语音 · 汉字"]
});
const zHue = n => String(((n - 1) % 5) + 1);
function zhTopics(d){
  const n = d.n, unit = String(n), T = ZH_TITLES(), hue = zHue(n);
  const page = TZ("с. ", "p. ") + d.page;
  const allW = d.texts.flatMap(x=>x.w || []);
  const W = allW.filter(w=>!w[6]);   /* w[6] = имя собственное */
  const wIdx = (w, k) => k;
  /* ---------- 1. тексты и слова ---------- */
  const keTheory = LEAD(TZ(d.lead ? d.lead[0] : `Четыре коротких диалога урока ${n}. Сначала послушай, потом прочитай с пиньинем, потом — без него. Нажми на иероглиф, чтобы увидеть, как он пишется.`, d.lead ? d.lead[1] : `The four short dialogues of lesson ${n}. Listen first, then read with pinyin, then without it. Tap a character to see how it is written.`))
    + d.texts.map((x, i)=>SEC(`${x.zh} · ${TZ(x.ru, x.en)}`)
      + ZCHAT(`zh-${n}-${i+1}`, `${TZ("Диалог", "Dialogue")} ${i+1}`, x.l)
      + (x.w && x.w.length ? `<p class="kn-sub">${TZ("Новые слова", "New words")}</p>` + ZWORDS(x.w) : "")).join("")
    + (d.check ? SEC(TZ("Проверь себя", "Check yourself")) + QUIZ(d.check.map(([q, py, a, aru, aen])=>[`${ZP(q, py)}`, `${Z(a)}<small class="zq-tr">${TZ(aru, aen)}</small>`])) : "");
  const ke = {id:`zh${n}-ke`, sec:"book", unit, hue, kind:T.ke[0], title:`${T.ke[1]} · ${d.zh}`, ru:TZ(d.ru, d.en), page, theory:keTheory, ex:[]};
  const chunks = []; for (let i = 0; i < W.length; i += 7) chunks.push(W.slice(i, i + 7));
  if (chunks.length > 1 && chunks[chunks.length - 1].length < 4) { const last = chunks.pop(); chunks[chunks.length - 1] = chunks[chunks.length - 1].concat(last); }
  chunks.forEach((c, k)=>ke.ex.push({t:"match", h:TZ(`Соедини слово и значение${chunks.length > 1 ? ` (${k+1})` : ""}`, `Match the word and its meaning${chunks.length > 1 ? ` (${k+1})` : ""}`),
    w:[TZ("Значение слова помогает запомнить его иероглифы: смотри на ключи — они часто подсказывают смысл.", "The meaning helps you remember the characters: look at the radicals, they often hint at the meaning."), ""],
    pairs:c.map(w=>[ZO(w[0]), TZ(w[3], w[4])])}));
  const pyItems = zPick(W.filter(w=>zToneVariants(w[1]).length >= 2), 6, n).map((w, k)=>({q:`${Z(w[0])} — ${TZ("как читается?", "how is it read?")}`, o:[w[1], ...zPick(zToneVariants(w[1]), 2, n + k)], a:0, e:TZ(`${w[0]} — ${w[1]}: ${w[3]}.`, `${w[0]} — ${w[1]}: ${w[4]}.`)}));
  if (pyItems.length) ke.ex.push({t:"mc", h:TZ("Выбери правильный тон", "Pick the right tones"), w:[TZ("В пиньине тон — часть слова: lǚyóu и lǚyǒu — разные слова. Произнеси вслух, прежде чем выбирать.", "In pinyin the tone is part of the word. Say it aloud before you choose."), ""], items:pyItems});
  const wrd = zPick(W, Math.min(6, W.length), n * 7).map((w, k)=>{ const others = zPick(W.filter(x=>x !== w), 3, n + k * 3); return {q:`${w[1]} — ${TZ(w[3], w[4])}`, o:[ZO(w[0]), ...others.map(x=>ZO(x[0]))], a:0, e:`${w[0]} ${w[1]}`}; });
  ke.ex.push({t:"mc", h:TZ("Найди иероглифы по звучанию и значению", "Find the characters by sound and meaning"), w:[TZ("Узнавать слово по иероглифам — главный навык чтения. Сравни, чем похожие иероглифы отличаются.", "Recognising a word by its characters is the key reading skill. Compare how similar characters differ."), ""], items:wrd});
  if (d.qs) ke.ex.push({t:"mc", h:TZ("Ответь на вопросы по диалогам", "Answer the questions about the dialogues"), w:[TZ("Ответы — в диалогах этого урока. Если сомневаешься, перечитай нужный диалог.", "The answers are in this lesson's dialogues. Re-read the dialogue if unsure."), ""], items:d.qs.map(([q, py, o, a, e])=>({q:ZP(q, py), o:o.map(x=>/[\u4e00-\u9fff]/.test(x) ? ZO(x) : x), a, e:e ? TZ(e[0], e[1]) : ""}))});
  if (d.order) ke.ex.push({t:"order", h:TZ("Собери фразу из диалога", "Build a sentence from the dialogue"), w:[TZ("Порядок слов в китайском: кто — когда — где — что делает — что.", "Chinese word order: who — when — where — does — what."), ""], items:d.order.map(([s, ru, en])=>({s, ru:TZ(ru, en)}))});
  ke.ex.push({t:"cards", h:TZ("Карточки: новые слова урока", "Flashcards: the lesson's new words"), w:[TZ("Вспомни звучание и значение, потом переверни карточку. Повторяй, пока не узнаешь все слова.", "Recall the sound and meaning, then flip the card."), ""], items:W.map(w=>[w[0], `${w[1]} — ${TZ(w[3], w[4])}`])});
  /* ---------- 2. грамматика ---------- */
  const yu = {id:`zh${n}-yu`, sec:"book", unit, hue, kind:T.yu[0], title:`${T.yu[1]} · ${d.gt}`, ru:TZ(d.gru, d.gen), page, theory:d.gram(), ex:d.gex()};
  /* ---------- 3. звуки и иероглифы ---------- */
  const zi = {id:`zh${n}-zi`, sec:"book", unit, hue, kind:T.zi[0], title:`${T.zi[1]} · ${d.zt}`, ru:TZ(d.zru, d.zen), page, theory:d.zi(), ex:d.zex()};
  return [ke, yu, zi];
}
/* все иероглифы урока (новые слова) — для раздела «Иероглифы» */
function zhLessonChars(){
  const seen = new Set(), out = [];
  ZH_LS.forEach(d=>{ const list = []; d.texts.forEach(x=>(x.w || []).forEach(w=>{ if (w[6]) return; [...w[0]].forEach(c=>{ if (/[一-鿿]/.test(c) && !seen.has(c)) { seen.add(c); list.push(c); } }); })); (d.extra || "").split("").forEach(c=>{ if (/[一-鿿]/.test(c) && !seen.has(c)) { seen.add(c); list.push(c); } }); out.push({n:d.n, zh:d.zh, chars:list}); });
  return out;
}
/* словарь курса: слово → [пиньинь, ru, en, урок] */
let ZH_DICT = null;
function zhDict(){
  if (ZH_DICT) return ZH_DICT;
  ZH_DICT = new Map();
  ZH_LS.forEach(d=>d.texts.forEach(x=>(x.w || []).forEach(w=>{ if (!ZH_DICT.has(w[0])) ZH_DICT.set(w[0], {zh:w[0], py:w[1], pos:w[2], ru:w[3], en:w[4], n:d.n}); })));
  if (typeof ZH_BASE !== "undefined") ZH_BASE.forEach(w=>{ if (!ZH_DICT.has(w[0])) ZH_DICT.set(w[0], {zh:w[0], py:w[1], pos:"", ru:w[2], en:w[3], n:0}); });
  return ZH_DICT;
}
function ZH_BUILD(L){
  const keepHL = HL, keepZ = ZHL; ZHL = L; HL = L;
  try {
    const out = ZH_LS.slice().sort((a, b)=>a.n - b.n).flatMap(zhTopics);
    if (L === "ru") out.forEach(tp=>{ if (!WHY[tp.id]) WHY[tp.id] = tp.ex.map(e=>e.w || ["", ""]); });
    else out.forEach(tp=>{ const w = WHY[tp.id]; if (w) tp.ex.forEach((e, i)=>{ if (w[i] && e.w && !w[i][1]) w[i][1] = e.w[0]; }); });
    return out;
  } finally { HL = keepHL; ZHL = keepZ; }
}
/* банк самопроверки: все вопросы с выбором из тем курса */
function ZH_POOL_BUILD(top){
  const out = [];
  top.forEach(tp=>tp.ex.forEach(ex=>{ if (ex.t !== "mc" || /Выбери правильный тон|Pick the right tones/.test(ex.h)) return; ex.items.forEach(it=>out.push({tp:tp.id, q:it.q, o:it.o, a:it.a, e:it.e || ""})); }));
  return out;
}
function ZH_CHEAT_BUILD(L){
  const keepZ = ZHL, keepHL = HL; ZHL = L; HL = L;
  try {
    return `<div class="cheat zcheat">${ZH_LS.slice().sort((a, b)=>a.n - b.n).map(d=>`<section class="ch"><h3><span class="ng-n u-pill" data-hue="${zHue(d.n)}">${TZ("Урок", "Lesson")} ${d.n}</span> ${Z(d.zh)}</h3>${(d.cheat || []).map(([pat, zh, ru, en])=>`<div class="zch-r"><b>${pat}</b><span>${Z(zh, zstrip(zh))}</span><small>${TZ(ru, en)}</small></div>`).join("")}</section>`).join("")}</div>`;
  } finally { ZHL = keepZ; HL = keepHL; }
}
document.addEventListener("click", e=>{ const b = e.target.closest && e.target.closest(".zc-py"); if (!b) return; const c = b.closest(".chat"), off = !c.classList.contains("no-py"); c.classList.toggle("no-py", off); b.setAttribute("aria-pressed", off ? "false" : "true"); });
/* ---------- короткие записи для заданий ---------- */
/* вопрос с выбором: предложение (с ___), пиньинь, варианты, номер верного, объяснение ru/en */
const ZQ = (zh, py, o, a, ru, en) => ({q:py ? ZP(zh, py) : Z(zh), o:o.map(x=>/[一-鿿]/.test(x) ? ZO(x) : x), a, e:ru ? TZ(ru, en) : ""});
/* вопрос с выбором, где вопрос — по-русски/по-английски */
const ZQT = (ru, en, o, a, eru, een) => ({q:TZ(ru, en), o:o.map(x=>/[一-鿿]/.test(x) ? ZO(x) : x), a, e:eru ? TZ(eru, een) : ""});
/* собери фразу: слова через пробел */
const ZOR = (s, ru, en) => ({s, ru:TZ(ru, en)});
/* верно / неверно */
const ZTF = (zh, py, a, ru, en) => ({q:py ? ZP(zh, py) : Z(zh), a, e:ru ? TZ(ru, en) : ""});
/* задание «Напиши иероглиф»: [иероглиф, пиньинь, ru, en] */
const ZHZ = (h, list, w) => ({t:"hz", h, w:w || [TZ("Пиши по порядку черт: сверху вниз, слева направо, сначала горизонтальные, потом вертикальные. Засчитывается, если ошибок не больше одной.", "Follow the stroke order: top to bottom, left to right, horizontals before verticals. It counts if you make at most one mistake."), ""], items:list.map(([c, py, ru, en])=>({c, py, m:[ru, en]}))});
