/* =========================================================
   STUDY: банк заданий, карточный режим темы, «?» в пробной
   ========================================================= */
Object.assign(I18N.ru, {
  bank:"Банк заданий", bankSub:"Все задания с выбором ответа и вводом в одном месте. Выбери темы и количество — и тренируйся сколько хочешь.",
  bankTopics:"Темы", bankAll:"Все", bankNone:"Снять все", bankCount:"Сколько заданий", bankMode:"Порядок", bankByTopic:"По темам", bankMix:"Вперемешку", bankGo:"Начать", bankAvail:n=>`доступно: ${n}`,
  bankPick:"Выбери хотя бы одну тему.", bankQ:(i,n)=>`Задание ${i} из ${n}`, bankNext:"Дальше", bankEnterHint:"Enter — проверить", bankEnterNext:"Enter — дальше", bankFinish:"Результат",
  bankDoneH:(g,n)=>`${g} из ${n} верно`, bankRetry:n=>`Повторить ошибки (${n})`, bankNew:"Новый набор", bankBack:"К настройкам", bankFrom:"Из темы",
  deckOn:"Режим карточек", deckOff:"Обычный режим", deckGo:"К заданиям", deckOf:(i,n)=>`${i} / ${n}`, deckKeys:"← → или свайп — листать · Esc — обычный режим",
  lexCal:"Календарь", tfEs:["Verdadero — верно","Falso — неверно"], tfLbl:"Verdadero o falso",
  practiceSub:"Практика по теме. Впиши или выбери ответ — проверка по Enter. После ответа можно открыть «?» с объяснением.",
  qzSub:"Карточки со словами из юнитов 0–2.",
  listenHint:"Пиши цифры и нажми Enter"
});
Object.assign(I18N.en, {
  bank:"Exercise bank", bankSub:"All the multiple-choice and type-in tasks in one place. Pick topics and how many — and practise as much as you like.",
  bankTopics:"Topics", bankAll:"All", bankNone:"Clear", bankCount:"How many", bankMode:"Order", bankByTopic:"By topic", bankMix:"Mixed", bankGo:"Start", bankAvail:n=>`available: ${n}`,
  bankPick:"Pick at least one topic.", bankQ:(i,n)=>`Task ${i} of ${n}`, bankNext:"Next", bankEnterHint:"Enter — check", bankEnterNext:"Enter — next", bankFinish:"Results",
  bankDoneH:(g,n)=>`${g} of ${n} correct`, bankRetry:n=>`Retry mistakes (${n})`, bankNew:"New set", bankBack:"Back to settings", bankFrom:"Topic",
  deckOn:"Card mode", deckOff:"Normal mode", deckGo:"Go to exercises", deckOf:(i,n)=>`${i} / ${n}`, deckKeys:"← → or swipe to browse · Esc — normal mode",
  lexCal:"Calendar", tfEs:["Verdadero — true","Falso — false"], tfLbl:"Verdadero o falso",
  practiceSub:"Practice for this topic. Type or pick an answer — press Enter to check. After answering you can open “?” for an explanation.",
  qzSub:"Flashcards with the words from units 0–2.",
  listenHint:"Type the digits and press Enter"
});
function tfOpts(){ return COURSE === "es" ? t("tfEs") : [t("vrai"), t("faux")]; }
function exLabel(ex){ return ex.t === "tf" && COURSE === "es" ? t("tfLbl") : t("label")[ex.t]; }

/* правило для вопроса из банка пробной: берём «почему» первого похожего задания темы */
function poolRule(q){
  const tp = byId[q.tp]; if (!tp || !WHY[tp.id]) return "";
  const want = q.o ? ["mc","tf"] : ["fill","conj"];
  let i = tp.ex.findIndex(x=>want.includes(x.t)); if (i < 0) i = 0;
  return ruleFor(tp.id, i);
}

/* ---------- банк заданий ---------- */
function bankItems(){
  const out = [];
  TOP.forEach(tp=>{
    tp.ex.forEach((ex, ei)=>{
      if (!["mc","tf","fill","conj"].includes(ex.t)) return;
      if (/тексту|по тексту|the text|текст[ае]? выше/i.test(ex.h || "")) return;
      if (ex.t === "mc" || ex.t === "tf") ex.items.forEach((it, k)=>out.push({tid:tp.id, base:tp.id + "|" + ei, k, q:it.q, o: ex.t === "tf" ? tfOpts() : it.o, a: ex.t === "tf" ? (it.a ? 0 : 1) : it.a, keep: ex.t === "tf", e:it.e || "", rule:ruleFor(tp.id, ei), h:ex.h}));
      else if (ex.t === "fill") ex.items.forEach((it, k)=>out.push({tid:tp.id, base:tp.id + "|" + ei, k, q:it.q, a:it.a, e:it.e || "", rule:ruleFor(tp.id, ei), h:ex.h}));
      else { let k = 0; ex.items.forEach(it=>it.f.forEach((f, j)=>{ out.push({tid:tp.id, base:tp.id + "|" + ei, k:k++, q:`<span class="fr">${it.v}</span> · ${it.p[j]} ___`, a:[f], e:"", rule:ruleFor(tp.id, ei), h:ex.h, conj:1}); })); }
    });
  });
  POOLX.forEach((q, k)=>{ if (byId[q.tp]) out.push({tid:q.tp, base:"P|" + COURSE, k, q:q.q, o:q.o, a:q.a, e:q.e || "", rule:poolRule(q)}); });
  return out;
}
const BK = (() => { let o = {}; try { o = JSON.parse(ls.get("edito-bank") || "{}") || {}; } catch(e) {} return o; })();
function bankCfg(){ const c = BK[COURSE] || (BK[COURSE] = {sel:null, n:20, mix:true}); return c; }
const bankSave = () => ls.set("edito-bank", JSON.stringify(BK));
let BANK = null;
function renderBank(){
  const cfg = bankCfg(), items = bankItems(), cnt = {};
  items.forEach(x=>{ cnt[x.tid] = (cnt[x.tid] || 0) + 1; });
  const tops = ORDER.filter(tp=>cnt[tp.id]);
  if (!cfg.sel) cfg.sel = tops.map(x=>x.id);
  const es = COURSE === "es";
  const groups = [];
  const units = es ? ["1","2","3"] : ["0","1","2"];
  units.forEach(u=>{ const g = tops.filter(x=>x.sec === "book" && x.unit === u); if (g.length) groups.push([`${es ? t("unitWes") : t("unitW")} ${u}`, g]); });
  const gr = tops.filter(x=>x.sec === "gram"); if (gr.length) groups.push([t("gram"), gr]);
  const rf = tops.filter(x=>x.sec === "ref"); if (rf.length) groups.push([t("ref"), rf]);
  main.innerHTML = `<div class="col" style="max-width:980px">
  <header class="t-head seyes"><p class="eyebrow">${COURSES[COURSE].name} · ${COURSES[COURSE].book}</p><h1>${t("bank")}</h1><p class="t-ru">${t("bankSub")}</p></header>
  <div class="bank-set">
    <div class="pcard"><div class="bank-h"><h3>${t("bankTopics")}</h3><span><button type="button" class="chip-t" id="bkAll">${t("bankAll")}</button><button type="button" class="chip-t" id="bkNone">${t("bankNone")}</button></span></div>
      ${groups.map(([name, g])=>`<div class="bank-g"><button type="button" class="bank-gh" data-grp="${esc(g.map(x=>x.id).join(","))}">${name}</button><div class="tchips">${g.map(tp=>`<button type="button" class="tchip${cfg.sel.includes(tp.id) ? " on" : ""}" data-tp="${tp.id}">${tp.title}<small>${cnt[tp.id]}</small></button>`).join("")}</div></div>`).join("")}
    </div>
    <div class="bank-row">
      <div class="pcard"><h3>${t("bankCount")}</h3><div class="seg big">${[10,20,30,50].map(n=>`<button type="button" data-bn="${n}" class="${cfg.n===n?"on":""}">${n}</button>`).join("")}</div></div>
      <div class="pcard"><h3>${t("bankMode")}</h3><div class="seg big"><button type="button" data-mix="0" class="${cfg.mix?"":"on"}">${t("bankByTopic")}</button><button type="button" data-mix="1" class="${cfg.mix?"on":""}">${t("bankMix")}</button></div></div>
    </div>
    <div class="bank-go"><span class="muted" id="bkAvail"></span><p class="auth-msg" id="bkMsg" data-k="err"></p><button type="button" class="btn pri" id="bkGo">${t("bankGo")} →</button></div>
  </div></div>`;
  const avail = () => { const n = cfg.sel.reduce((s, id)=>s + (cnt[id] || 0), 0); $("#bkAvail").textContent = t("bankAvail", n); $("#bkGo").disabled = !n; };
  const paint = () => { $$("[data-tp]", main).forEach(b=>b.classList.toggle("on", cfg.sel.includes(b.dataset.tp))); avail(); bankSave(); };
  $$("[data-tp]", main).forEach(b=>b.addEventListener("click", ()=>{ const id = b.dataset.tp; cfg.sel = cfg.sel.includes(id) ? cfg.sel.filter(x=>x!==id) : [...cfg.sel, id]; paint(); }));
  $$("[data-grp]", main).forEach(b=>b.addEventListener("click", ()=>{ const ids = b.dataset.grp.split(","); const all = ids.every(id=>cfg.sel.includes(id)); cfg.sel = all ? cfg.sel.filter(x=>!ids.includes(x)) : [...new Set([...cfg.sel, ...ids])]; paint(); }));
  $("#bkAll").addEventListener("click", ()=>{ cfg.sel = tops.map(x=>x.id); paint(); });
  $("#bkNone").addEventListener("click", ()=>{ cfg.sel = []; paint(); });
  $$("[data-bn]", main).forEach(b=>b.addEventListener("click", ()=>{ cfg.n = +b.dataset.bn; $$("[data-bn]", main).forEach(x=>x.classList.toggle("on", x===b)); bankSave(); }));
  $$("[data-mix]", main).forEach(b=>b.addEventListener("click", ()=>{ cfg.mix = b.dataset.mix === "1"; $$("[data-mix]", main).forEach(x=>x.classList.toggle("on", x===b)); bankSave(); }));
  $("#bkGo").addEventListener("click", ()=>{
    if (!cfg.sel.length) { $("#bkMsg").textContent = t("bankPick"); return; }
    const pool = items.filter(x=>cfg.sel.includes(x.tid));
    /* поровну из каждой темы, потом добираем */
    const by = {}; pool.forEach(x=>(by[x.tid] = by[x.tid] || []).push(x)); Object.values(by).forEach(shuffle);
    const ids = shuffle(Object.keys(by)), pick = [];
    while (pick.length < Math.min(cfg.n, pool.length)) { let add = false; for (const id of ids) if (by[id].length && pick.length < cfg.n) { pick.push(by[id].pop()); add = true; } if (!add) break; }
    const ord = id => ORDER.findIndex(x=>x.id === id);
    if (cfg.mix) shuffle(pick); else pick.sort((a, b)=>ord(a.tid) - ord(b.tid));
    bankRun(pick);
  });
  avail();
}
function bankRun(list){
  BANK = {list: list.map(x=>x.o ? Object.assign({}, x, {oo: x.keep ? x.o.map((o, j)=>({o, j})) : shuffle(x.o.map((o, j)=>({o, j})))}) : x), i:0, res:[]};
  main.innerHTML = `<div class="col bank-run" style="max-width:760px">
    <div class="bank-top"><button type="button" class="chip-t" id="bkBack">← ${t("bankBack")}</button><span class="bank-ctr" id="bkCtr"></span></div>
    <div class="bank-prog"><i id="bkBar"></i></div>
    <section class="exb bank-card" id="bkCard"></section></div>`;
  $("#bkBack").addEventListener("click", ()=>renderBank());
  bankStep();
}
function bankStep(){
  const B = BANK, card = $("#bkCard"); if (!card) return;
  if (B.i >= B.list.length) return bankDone();
  const it = B.list[B.i], tp = byId[it.tid], n = B.list.length;
  $("#bkCtr").textContent = t("bankQ", B.i + 1, n);
  $("#bkBar").style.width = (B.i / n * 100) + "%";
  const inp = `<input class="ans${it.conj ? "" : " wide"}" ${inputAttrs} aria-label="answer">`;
  const qh = it.o ? `<p class="q">${qhtml(it.q)}</p><div class="opts">${it.oo.map(x=>`<button type="button" class="opt" data-j="${x.j}">${x.o}</button>`).join("")}</div>` : `<p class="fillq">${it.q.includes("___") ? it.q.replace("___", inp).replace(/___/g, "…") : `${it.q} ${inp}`}</p>`;
  card.innerHTML = `<header class="exb-h"><span class="exb-n">${B.i + 1}</span><div><span class="exb-k">${t("bankFrom")}: <a href="#${tp.id}">${tp.title}</a></span>${it.h ? `<h4>${it.h}</h4>` : ""}</div></header>
    <div class="exb-b">${it.o ? "" : accBar()}<div class="it">${qh}<div class="fb" hidden></div></div></div>
    <footer class="exb-f"><span class="exb-score muted" id="bkHint">${it.o ? "" : t("bankEnterHint")}</span><div class="exb-btns"><button type="button" class="btn pri" id="bkNext" hidden>${B.i + 1 < n ? t("bankNext") : t("bankFinish")} →</button></div></footer>`;
  card.classList.remove("in"); void card.offsetWidth; card.classList.add("in");
  const fb = $(".fb", card), nextB = $("#bkNext");
  let done = false;
  const finish = (st, answer) => {
    done = true; B.res[B.i] = st === "ok" || st === "acc";
    gameAnswer(it.base, it.k, st === "empty" ? "bad" : st);
    fb.hidden = false;
    fb.innerHTML = (it.o ? (st === "ok" ? `<span class="ok-t">${OKW()}</span>` : `<span class="pen">→ ${it.o[it.a]}</span>`) : fbHtml(st, it.a)) + whyHTML(answer, it.e, it.rule);
    nextB.hidden = false; $("#bkHint").textContent = t("bankEnterNext");
    setTimeout(()=>nextB.focus({preventScroll:true}), 30);
  };
  nextB.addEventListener("click", ()=>{ B.i++; bankStep(); });
  if (it.o) {
    $$(".opt", card).forEach(b=>b.addEventListener("click", ()=>{
      if (done) return; const j = +b.dataset.j, ok = j === it.a;
      $$(".opt", card).forEach(x=>{ x.disabled = true; const jj = +x.dataset.j; if (jj === it.a) x.classList.add("is-ok"); else if (jj === j) x.classList.add("is-bad"); });
      finish(ok ? "ok" : "bad", it.o[it.a]);
    }));
  } else {
    const el = $(".ans", card);
    el.setAttribute("enterkeyhint", "done");
    el.addEventListener("keydown", e=>{
      if (e.key !== "Enter") return; e.preventDefault();
      if (done) { nextB.click(); return; }
      const st = judge(el.value, it.a); if (st === "empty") return;
      el.classList.add(st === "ok" ? "r-ok" : st === "acc" ? "r-acc" : "r-bad"); el.readOnly = true;
      finish(st, it.a[0]);
    });
    setTimeout(()=>el.focus({preventScroll:true}), 60);
  }
}
function bankDone(){
  const B = BANK, got = B.res.filter(Boolean).length, n = B.list.length, wrong = B.list.filter((_, i)=>!B.res[i]);
  $("#bkBar").style.width = "100%"; $("#bkCtr").textContent = "";
  const r = n ? got / n : 0;
  $("#bkCard").innerHTML = `<div class="bank-done"><div class="note20">${Math.round(r * 100)}<small>%</small></div><h2>${praise(r)}</h2><p>${t("bankDoneH", got, n)}</p>
    <div class="btns">${wrong.length ? `<button type="button" class="btn pri" id="bkRetry">${t("bankRetry", wrong.length)}</button>` : ""}<button type="button" class="btn ${wrong.length ? "sec" : "pri"}" id="bkNew">${t("bankNew")}</button></div></div>`;
  const rt = $("#bkRetry"); if (rt) rt.addEventListener("click", ()=>bankRun(shuffle(wrong.slice())));
  $("#bkNew").addEventListener("click", ()=>renderBank());
}

/* ---------- карточный режим темы ---------- */
let DECK = null;
const deckPref = () => ls.get("edito-deck") === "1";
const ICO_DECK = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="4.5" y="5" width="11" height="12" rx="2"/><path d="M6.5 3h8a2 2 0 0 1 2 2v9"/></svg>';
const ICO_LIST = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 5.5h12M4 10h12M4 14.5h8"/></svg>';
function deckToggleHTML(){ const on = deckPref(); return `<button type="button" class="deck-tg${on ? " on" : ""}" id="deckTg" aria-pressed="${on}" title="${esc(on ? t("deckOff") : t("deckOn"))}" aria-label="${esc(on ? t("deckOff") : t("deckOn"))}">${on ? ICO_LIST : ICO_DECK}</button>`; }
function deckToggle(){ const on = !deckPref(); ls.set("edito-deck", on ? "1" : "0"); paintDeckTg(); if (on && DECK_TP) openDeck(DECK_TP); else closeDeck(); }
function paintDeckTg(){ const b = $("#deckTg"); if (!b) return; b.outerHTML = deckToggleHTML(); $("#deckTg").addEventListener("click", deckToggle); }
function wireDeck(tp){ DECK_TP = tp; paintDeckTg(); if (deckPref()) openDeck(tp); }
let DECK_TP = null;
function deckCards(tp){
  const tmp = document.createElement("div"); tmp.innerHTML = tp.theory;
  const cards = []; let cur = [];
  [...tmp.childNodes].forEach(n=>{
    if (n.nodeType === 1 && /^H[23]$/.test(n.tagName) && cur.some(x=>x.nodeType === 1 || (x.textContent || "").trim())) { cards.push(cur); cur = []; }
    cur.push(n);
  });
  if (cur.length) cards.push(cur);
  return cards.map(nodes=>{ const d = document.createElement("div"); nodes.forEach(x=>d.appendChild(x)); return d.innerHTML; });
}
function openDeck(tp){
  closeDeck(true);
  DECK_TP = tp;
  const parts = deckCards(tp), es = COURSE === "es";
  const eb = tp.sec === "book" ? `${es ? t("unitWes") : t("unitW")} ${tp.unit} · ${tp.kind}` : tp.sec === "gram" ? `${t("gram")} · ${tp.kind}` : `${t("refEyebrow")} · ${tp.kind}`;
  const cards = [`<div class="dk-intro"><p class="eyebrow">${eb}</p><h1>${tp.title}</h1><p class="t-ru">${tp.ru}</p></div>`, ...parts.map(h=>`<div class="theory">${h}</div>`),
    `<div class="dk-end"><div class="dk-end-i">✓</div><h2>${tp.title}</h2><p class="muted">${t("toPractice", tp.ex.length).replace(/\s*↓/, "")}</p><button type="button" class="btn pri" data-dk-go>${t("deckGo")} →</button></div>`];
  const el = document.createElement("div"); el.className = "deck"; el.id = "deck";
  el.innerHTML = `<div class="dk-top"><span class="dk-t">${tp.title}</span><span class="dk-ctr" id="dkCtr"></span><button type="button" class="dk-x" data-dk-x aria-label="${esc(t("deckOff"))}" title="${esc(t("deckOff"))}">${ICO_LIST}</button></div>
    <div class="dk-stage">${cards.map((c, i)=>`<article class="dk-card" data-i="${i}" ${i ? "hidden" : ""}><div class="dk-in">${c}</div></article>`).join("")}</div>
    <div class="dk-nav"><button type="button" class="dk-arr" data-dk="-1" aria-label="←">←</button><div class="dk-dots">${cards.map((_, i)=>`<i data-dot="${i}"></i>`).join("")}</div><button type="button" class="dk-arr" data-dk="1" aria-label="→">→</button></div>
    <p class="dk-keys">${t("deckKeys")}</p>`;
  document.body.appendChild(el); document.body.classList.add("deck-open");
  DECK = {el, i:0, n:cards.length};
  const go = (i, dir) => {
    if (i < 0 || i >= DECK.n || i === DECK.i && !dir) return;
    const cs = $$(".dk-card", el), from = cs[DECK.i], to = cs[i], fw = i > DECK.i;
    if (from !== to) { from.classList.remove("in", "fw", "bw"); from.hidden = true; }
    to.hidden = false; to.classList.remove("in", "fw", "bw"); void to.offsetWidth; to.classList.add("in", fw ? "fw" : "bw");
    to.scrollTop = 0; DECK.i = i;
    $("#dkCtr").textContent = t("deckOf", i + 1, DECK.n);
    $$("[data-dot]", el).forEach((d, k)=>d.classList.toggle("on", k === i));
    $('[data-dk="-1"]', el).disabled = i === 0; $('[data-dk="1"]', el).disabled = i === DECK.n - 1;
  };
  DECK.go = go;
  el.addEventListener("click", e=>{
    const a = e.target.closest("[data-dk]"); if (a) return go(DECK.i + +a.dataset.dk);
    const d = e.target.closest("[data-dot]"); if (d) return go(+d.dataset.dot);
    if (e.target.closest("[data-dk-x]")) { ls.set("edito-deck", "0"); paintDeckTg(); return closeDeck(); }
    if (e.target.closest("[data-dk-go]")) { closeDeck(); const p = $("#practice"); if (p) setTimeout(()=>p.scrollIntoView({behavior:"smooth"}), 60); }
  });
  let sx = null, sy = null;
  el.addEventListener("touchstart", e=>{ const p = e.touches[0]; sx = p.clientX; sy = p.clientY; }, {passive:true});
  el.addEventListener("touchend", e=>{ if (sx == null) return; const p = e.changedTouches[0], dx = p.clientX - sx, dy = p.clientY - sy; sx = null; if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5 && !(window.getSelection() + "").trim()) go(DECK.i + (dx < 0 ? 1 : -1)); }, {passive:true});
  go(0, 1);
  requestAnimationFrame(()=>el.classList.add("open"));
}
function closeDeck(now){
  if (!DECK) return; const el = DECK.el; DECK = null; document.body.classList.remove("deck-open");
  if (now) { el.remove(); return; }
  el.classList.remove("open"); el.classList.add("closing"); setTimeout(()=>el.remove(), 320);
}
document.addEventListener("keydown", e=>{
  if (!DECK) return;
  if (/INPUT|TEXTAREA/.test((document.activeElement || {}).tagName || "")) return;
  if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); DECK.go(DECK.i + 1); }
  else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); DECK.go(DECK.i - 1); }
  else if (e.key === "Escape") { ls.set("edito-deck", "0"); paintDeckTg(); closeDeck(); }
});
