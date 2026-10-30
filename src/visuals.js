var HL = "ru";
const HT = (ru, en) => HL === "en" ? en : ru;
/* диалоги для мини-плеера: DLG[id] = {lang, title, lines:[[кто, текст]…]}; кнопка — [data-dlg="id"] */
const DLG = {};
/* ===== visual scheme helpers ===== */
const OPS = new Set(["+","=","→","×","≠","/","↔","…"]);
/* FX: формула из «кирпичиков». Префиксы: ! — выделить, ~ — не французский текст, _ — приглушить; "текст|подпись" */
const FX = (parts, cap) => `<div class="fx">${parts.map(p=>{
  if (OPS.has(p)) return `<span class="fx-op">${p}</span>`;
  let cls = "fx-t";
  if (p[0]==="!") { cls += " hi"; p = p.slice(1); } else if (p[0]==="~") { cls += " ru"; p = p.slice(1); } else if (p[0]==="_") { cls += " mute"; p = p.slice(1); }
  const [t, s] = p.split("|");
  const inner = cls.includes(" ru") ? `<span class="fx-w">${t}</span>` : `<span class="fr">${t}</span>`;
  return `<span class="${cls}">${inner}${s?`<small>${s}</small>`:""}</span>`;
}).join("")}${cap?`<span class="fx-cap">${cap}</span>`:""}</div>`;
const FXS = (...f) => `<div class="fxs">${f.join("")}</div>`;

/* GRID: цветная сетка; ячейки "m:…", "f:…", "p:…" окрашиваются по роду */
const GRID = (head, rows) => `<div class="ggrid" style="grid-template-columns:minmax(72px,auto) repeat(${head.length-1},minmax(0,1fr))">${head.map(h=>`<div class="gh">${h}</div>`).join("")}${rows.map(r=>r.map((c,j)=>{
  if (j===0) return `<div class="gl">${c}</div>`;
  const m = /^(m|f|p):(.*)$/.exec(c); const tone = m ? m[1] : "", txt = m ? m[2] : c;
  return `<div class="gc ${tone}"><span class="fr">${txt}</span></div>`;
}).join("")).join("")}</div>`;

/* FLOW: дерево решений «вопрос → да → ответ / нет ↓» */
const FLOW = (steps, last) => `<div class="flow">${steps.map(([q,res,ex],k)=>`<div class="fl-row"><div class="fl-q"><span class="fl-n">${k+1}</span><span>${q}</span></div><div class="fl-yes">${HT("да","yes")}</div><div class="fl-res"><b class="fr">${res}</b>${ex?`<span class="fr fl-ex">${ex}</span>`:""}</div></div><div class="fl-no">${HT("нет ↓","no ↓")}</div>`).join("")}<div class="fl-row last"><div class="fl-q"><span class="fl-n">${steps.length+1}</span><span>${last[0]}</span></div><div class="fl-yes">→</div><div class="fl-res"><b class="fr">${last[1]}</b>${last[2]?`<span class="fr fl-ex">${last[2]}</span>`:""}</div></div></div>`;

/* VS: сравнение двух (или трёх) вариантов */
const VS = (...cards) => `<div class="vs vs${cards.length}">${cards.map(c=>`<div class="vs-c ${c.tone||""}"><span class="vs-h">${c.h}</span><span class="vs-big">${c.big}</span>${c.sub?`<span class="vs-sub">${c.sub}</span>`:""}</div>`).join(`<span class="vs-mid">vs</span>`)}</div>`;

/* SCALE: шкала от минуса к плюсу */
const SCALE = (items, ends) => `<div class="scale" style="--n:${items.length}"><div class="sc-bar"></div><div class="sc-stops">${items.map(([fr,ru])=>`<div class="sc-s"><span class="sc-dot"></span><div class="sc-t"><span class="fr">${fr}</span><small>${ru}</small></div></div>`).join("")}</div>${ends?`<div class="sc-ends"><span>${ends[0]}</span><span>${ends[1]}</span></div>`:""}</div>`;

/* RHY: ритмические группы, ударный слог выделен */
const RHY = (groups, cap, say) => `<div class="rhy fr" data-say="${say||""}"><div class="rhy-l">${groups.map(g=>`<span class="rg">${g.map((s,k)=>`<span class="sy${k===g.length-1?" st":""}">${s}</span>`).join("")}</span>`).join('<span class="rsep">/</span>')}</div>${cap?`<span class="fx-cap">${cap}</span>`:""}</div>`;

/* LI: связывание двух слов с дугой и звуком */
const LI = (a, b, snd) => `<span class="li fr${snd?"":" no"}" data-say="${a} ${b}"><span>${a}</span><span class="li-arc"><i>${snd?"["+snd+"]":HT("нет","none")}</i></span><span>${b}</span></span>`;
const LIS = (...x) => `<div class="lis-row">${x.join("")}</div>`;

/* SAME: формы, которые звучат одинаково */
const SAME = (forms, snd, others) => `<div class="same"><div class="same-g"><div class="same-l">${forms.map(f=>`<span class="fr">${f}</span>`).join("")}</div><div class="same-b"><b>${snd}</b><small>${HT("звучат<br>одинаково","sound<br>the same")}</small></div></div>${others?`<div class="same-o">${others.map(([f,s])=>`<span><span class="fr">${f}</span> <b>${s}</b></span>`).join("")}<small>${HT("а эти — слышно","these you can hear")}</small></div>`:""}</div>`;

/* MORPH: превращение формы, отличие подсвечивается */
const diffHi = (a, b) => { if (a===b) return `${b} <i class="mo-eq">=</i>`; let i = 0; while (i < a.length && a[i]===b[i]) i++; return `${b.slice(0,i)}<b>${b.slice(i)}</b>`; };
const MORPH = cards => `<div class="morph">${cards.map(([h, rows])=>`<div class="mo-c"><span class="mo-h">${h}</span>${rows.map(([m,f])=>`<div class="mo-r"><span class="fr">${m}</span><span class="mo-ar">→</span><span class="fr">${diffHi(m,f)}</span></div>`).join("")}</div>`).join("")}</div>`;

/* BIGC: крупные карточки-подсказки */
const BIGC = list => `<div class="bigc">${list.map(([big,h,ex,tone])=>`<div class="bc ${tone||""}"><span class="big fr">${big}</span><h5>${h}</h5>${ex?`<span class="ex fr">${ex}</span>`:""}</div>`).join("")}</div>`;

/* CJ2: спряжение в две колонки (ед. / мн.), hi — индексы выделенных форм («ботинок») */
const CJ2 = (verb, ru, forms, hi) => `<div class="boot"><div class="bh"><span class="fr">${verb}</span><span>${ru}</span></div>${[0,3,1,4,2,5].map(k=>`<div class="bcl${hi.includes(k)?" hi":""}"><span class="fr">${forms[k]}</span></div>`).join("")}</div>`;
const BOOTS = (...b) => `<div class="boots">${b.join("")}</div>`;

/* NODE / TREE: семейное древо */
const NODE = (fr, ru, c="") => `<div class="tn ${c}"><span class="fr">${fr}</span><small>${ru}</small></div>`;
const TC = (col, row, cap, nodes, dn) => `<div class="tr-c${dn?" dn":""}" style="grid-column:${col};grid-row:${row}">${cap?`<span class="cap">${cap}</span>`:""}<div class="tr-n">${nodes}</div></div>`;

/* S3: три карточки «+ / − / ?» — схема предложения.
   cards: [{k:"pos"|"neg"|"q", sym:"+", h:"Утверждение", f:["подлежащее","!ne", …], ex:[[фраза, перевод], …]}]
   в f: "!слово" — выделенное слово языка, остальное — подписи-кирпичики */
const S3 = cards => `<div class="s3">${cards.map(c=>`<div class="s3-c s3-${c.k}"><div class="s3-h"><span class="s3-k">${c.sym}</span><span>${c.h}</span></div><div class="s3-f">${c.f.map(p=>p[0]==="!" ? `<span class="s3-p hi fr">${p.slice(1)}</span>` : `<span class="s3-p">${p}</span>`).join("")}</div><ul class="s3-ex">${c.ex.map(([a,b])=>`<li><span class="fr">${a}</span>${b?`<small>${b}</small>`:""}</li>`).join("")}</ul></div>`).join("")}</div>`;
/* заголовок столбца таблицы с кружком + / − / ? */
const S3TH = (k, sym, txt) => `<span class="s3-th s3-${k}"><span class="s3-k">${sym}</span>${txt}</span>`;

/* =========================================================
   КОНСПЕКТ v2 (30.10.2026): блоки для теории. Правила — docs/konspekt.md.
   ========================================================= */
/* артикль цветом рода: le/un — м. р., la/une — ж. р., les/des — мн. ч.; g — род для l’ («m» / «f») */
const GART = (fr, g) => String(fr).split(" / ").map(p=>{
  const m = p.match(/^(le|un|la|une|les|des)(?=\s)/i);
  if (m) return `<span class="${/^(le|un)$/i.test(m[1]) ? "g-m" : /^(la|une)$/i.test(m[1]) ? "g-f" : "g-pl"}">${m[1]}</span>${p.slice(m[1].length)}`;
  const e = p.match(/^(l[’'])/i);
  if (e && g) return `<span class="${g === "f" ? "g-f" : "g-m"}">${e[1]}</span>${p.slice(e[1].length)}`;
  return p;
}).join(" / ");
/* «Главное»: 2–4 пункта, с которых начинается тема */
const KEY = items => `<div class="ks"><div class="ks-t">${HT("Главное", "Key points")}</div><ol class="ks-l">${items.map(x=>`<li>${x}</li>`).join("")}</ol></div>`;
/* картинки к словам: [[файл в img/w, слово с артиклем, перевод, род для l’]]; нажатие — озвучка */
const PICS = list => `<div class="pics">${list.filter(x=>typeof IMG_CREDITS === "undefined" || IMG_CREDITS[x[0]]).map(([img, fr, tr, g])=>`<figure class="pic fr" data-say="${fr.replace(/"/g, "&quot;")}"><span class="pic-i"><img src="img/w/${img}.webp" alt="${tr}" loading="lazy" decoding="async" width="400" height="300"></span><figcaption><b>${GART(fr, g)}${g ? `<i class="pic-g">${g === "f" ? HT("ж.", "f.") : HT("м.", "m.")}</i>` : ""}</b><small>${tr}</small></figcaption></figure>`).join("")}</div>`;
/* «Проверь себя»: [[вопрос, ответ]] — ответ открывается по нажатию */
const QC = list => `<div class="qc"><div class="qc-t">${HT("Проверь себя", "Check yourself")}</div>${list.map(([q, a])=>`<details class="qc-i"><summary><span class="qc-q">${q}</span><span class="qc-s">${HT("Ответ", "Answer")}</span></summary><div class="qc-a">${a}</div></details>`).join("")}</div>`;
/* частые ошибки: [[как нельзя, как надо, почему]] */
const ERRS = rows => `<div class="mist"><div class="mist-t">${HT("Частые ошибки", "Common mistakes")}</div>${rows.map(([bad, good, why])=>`<div class="mist-r"><span class="mist-bad">✗ <s>${bad}</s></span><span class="mist-good">✓ <span class="fr">${good}</span></span>${why ? `<span class="mist-why">${why}</span>` : ""}</div>`).join("")}</div>`;
/* диалог с озвучкой в мини-плеере: lines [[кто, фраза, перевод ru, перевод en]] */
const CHAT = (id, title, lines) => {
  DLG[id] = {lang:"fr", title, lines:lines.map(l=>[l[0], l[1], l[2] || "", l[3] || ""])};
  const first = lines[0][0];
  return `<div class="chat"><div class="chat-h"><b>${title}</b><span class="chat-b"><button type="button" class="chip-t chat-tg" aria-pressed="false">${HT("Скрыть перевод", "Hide translation")}</button><button type="button" class="btn sm sec dlg-btn" data-dlg="${id}">${f7("play_fill")}${HT("Слушать", "Listen")}</button></span></div>
  ${lines.map(([who, fr, ru, en])=>`<div class="chat-r ${who === first ? "l" : "r"}"><span class="chat-w">${who}</span><div class="chat-m"><p class="fr">${fr}</p><p class="chat-tr">${HT(ru, en || ru)}</p></div></div>`).join("")}</div>`;
};
document.addEventListener("click", e=>{ const b = e.target.closest && e.target.closest(".chat-tg"); if (!b) return; const c = b.closest(".chat"), on = !c.classList.contains("no-tr"); c.classList.toggle("no-tr", on); b.setAttribute("aria-pressed", on ? "true" : "false"); b.textContent = on ? HT("Показать перевод", "Show translation") : HT("Скрыть перевод", "Hide translation"); });
/* источники фото: список файлов из img/w (подписи берутся из IMG_CREDITS) */
const PHOTOS = files => typeof IMG_CREDITS === "undefined" ? "" : `<details class="photo-cr"><summary>${HT("Фото", "Photos")}: Wikimedia Commons</summary><p>${files.filter(f=>IMG_CREDITS[f]).map(f=>{ const c = IMG_CREDITS[f]; return `<a href="${c.page}" target="_blank" rel="noopener">${c.w}</a> — ${c.author || HT("автор не указан", "unknown author")}, <a href="${c.lurl || c.page}" target="_blank" rel="noopener">${c.license}</a>`; }).join("; ")}.</p></details>`;

/* =========================================================
   КОНСПЕКТ v3 (30.10.2026, по референсу Влада «à или chez?»). Правила — docs/konspekt.md.
   Тема = вводная фраза (LEAD) + нумерованные шаги (SEC) из блоков:
   выбор (CHOOSE) → контраст (PAIRS) → формула (MERGE) → спряжение (CONJ) → ловушка (ASIDE)
   → «Не путай» (TRAPS) → «Проверь себя» (QUIZ). Всё французское — с классом fr (озвучка по нажатию).
   ========================================================= */
let KN_N = 0;
const KA = s => `<b class="kn-a">${s}</b>`;            /* важная часть — цветом курса */
const KX = s => `<s class="kn-x">${s}</s>`;            /* так нельзя */
const LEAD = html => { KN_N = 0; return `<p class="kn-lead">${html}</p>`; };
const SEC = title => `<h3 class="kn-h">${++KN_N} · ${title}</h3>`;
const KSUB = (label, note) => `<p class="kn-sub">${label}${note ? `<span class="kn-sub-n">${note}</span>` : ""}</p>`;
const KCAP = html => `<p class="kn-cap">${html}</p>`;
const knLi = x => Array.isArray(x) ? `<li><span class="fr">${x[0]}</span><small>${x[1]}</small></li>` : `<li><span class="fr">${x}</span></li>`;
/* карточки выбора: [{lab, hint, key, add, ex:[фраза | [фраза, перевод]], acc, plain}] — plain: ключ не озвучивается */
const CHOOSE = cards => `<div class="kn-ch" style="--n:${cards.length}">${cards.map(c=>`<div class="kn-c${c.acc ? " kn-acc" : ""}"><div class="kn-c-h"><span class="kn-c-l">${c.lab}</span>${c.hint ? `<span class="kn-c-n">${c.hint}</span>` : ""}</div><div class="kn-c-k"><span class="kn-c-big${c.plain ? "" : " fr"}">${c.key}</span>${c.add ? `<span class="kn-c-add">${c.add}</span>` : ""}</div>${c.ex && c.ex.length ? `<ul class="kn-c-x">${c.ex.map(knLi).join("")}</ul>` : ""}</div>`).join("")}</div>`;
/* таблица-контраст: заголовки, строки; o.fr — номера французских столбцов, o.cols — ширины (grid-template-columns) */
const PAIRS = (heads, rows, o = {}) => `<div class="kn-t" style="--cols:${o.cols || `repeat(${heads.length},minmax(0,1fr))`}">${heads.some(Boolean) ? `<div class="kn-tr kn-th">${heads.map(h=>`<span>${h}</span>`).join("")}</div>` : ""}${rows.map(r=>`<div class="kn-tr">${r.map((c, i)=>`<span>${(o.fr || []).includes(i) ? `<span class="fr">${c}</span>` : c}</span>`).join("")}</div>`).join("")}</div>`;
/* формулы: [{f:["à","+","le","="], r:"au", ex:"au marché", hl:true}]; «~текст» — не французский */
const knTok = p => /^[+=→·]$/.test(p) ? `<span class="kn-op">${p}</span>` : p[0] === "~" ? `<span>${p.slice(1)}</span>` : `<span class="fr">${p}</span>`;
const MERGE = items => `<div class="kn-m">${items.map(it=>`<div class="kn-mc${it.hl ? " hl" : ""}"><div class="kn-me">${it.f.map(knTok).join("")}${it.r ? `<span class="kn-pill${it.r[0] === "~" ? "" : " fr"}">${it.r.replace(/^~/, "")}</span>` : ""}</div>${it.ex ? `<span class="kn-mx">${it.ex}</span>` : ""}</div>`).join("")}</div>`;
/* заметка-ловушка (k = "info" — просто факт) */
const ASIDE = (html, k) => `<aside class="kn-as">${k === "info" ? f7("info_circle", "kn-as-i") : f7("exclamationmark_circle", "kn-as-i")}<p>${html}</p></aside>`;
/* спряжение 2 × 3 (ед. ч. | мн. ч.): forms — 6 форм с местоимением, hi — номера форм, которые подсветить */
const KN_PR = /^(je |j’|tu |il \/ elle \/ on |il |nous |vous |ils \/ elles |ils )/;
const CONJ = (v, tr, forms, hi = [], note) => {
  const cell = i => { const f = forms[i], m = f.match(KN_PR); return `<span class="kn-cj-c fr${hi.includes(i) ? " hi" : ""}" data-say="${f.replace(/<[^>]+>/g, "")}">${m ? `<i>${m[1].trim()}</i>${/’$/.test(m[1]) ? "" : " "}` : ""}${m ? f.slice(m[1].length) : f}</span>`; };
  return `<div class="kn-cj"><div class="kn-cj-h"><span class="fr kn-cj-v">${v}</span><span class="kn-cj-t">${tr}</span></div><div class="kn-cj-g"><span class="kn-cj-th">${HT("ед. ч.", "singular")}</span><span class="kn-cj-th">${HT("мн. ч.", "plural")}</span>${[0, 3, 1, 4, 2, 5].map(cell).join("")}</div>${note ? `<p class="kn-cj-n">${note}</p>` : ""}</div>`;
};
const CONJS = (...cards) => `<div class="kn-cjs">${cards.join("")}</div>`;
/* шкала оценок: [[фраза, значение]] от лучшего к худшему */
const RATE = rows => `<div class="kn-t kn-rate" style="--cols:minmax(0,1.3fr) minmax(0,1fr)">${rows.map(([fr, tr], i)=>`<div class="kn-tr"><span><span class="fr">${fr}</span></span><span><i class="kn-mt" aria-hidden="true">${[0, 1, 2, 3, 4].map(k=>`<i${k < rows.length - i ? ' class="on"' : ""}></i>`).join("")}</i>${tr}</span></div>`).join("")}</div>`;
/* «Не путай»: [[как нельзя, как надо, почему]] */
const TRAPS = rows => PAIRS([HT("Не так", "Not this"), HT("Так", "This"), HT("Почему", "Why")], rows.map(([b, g, w])=>[KX(b), `<b>${g}</b>`, `<small>${w}</small>`]), {fr:[1], cols:"minmax(0,1fr) minmax(0,1fr) minmax(0,1.2fr)"});
/* «Проверь себя»: [[вопрос, ответ]] — ответ по нажатию */
const QUIZ = list => `<div class="kn-q">${list.map(([q, a])=>`<details class="kn-qi"><summary><span class="kn-qq">${q}</span><span class="kn-qs">${HT("Ответ", "Answer")}</span></summary><div class="kn-qa">${a}</div></details>`).join("")}</div>`;
