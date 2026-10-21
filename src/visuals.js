var HL = "ru";
const HT = (ru, en) => HL === "en" ? en : ru;
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
