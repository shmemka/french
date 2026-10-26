/* =========================================================
   TOOLS: переводчик для длинных выделений и мини-плеер диалогов
   (встраивается внутрь движка вместе с game / platform / study)
   ========================================================= */
Object.assign(I18N.ru, {
  trTitle:"Переводчик", trBtn:"Перевести", trSrcPh:"Введи или вставь текст", trCopy:"Копировать", trCopied:"Скопировано", trClear:"Очистить",
  trSwap:"Поменять языки", trListen:"Слушать", trClose:"Закрыть", trFrom:"С языка", trTo:"На язык", trFail:"Не получилось перевести. Проверь интернет и попробуй ещё раз.",
  trEmpty:"Здесь появится перевод", trAuto:"машинный перевод", trLangs:{fr:"Французский", es:"Испанский", ru:"Русский", en:"Английский"},
  plyPlay:"Слушать", plyPause:"Пауза", plyBack:"Назад на 5 секунд", plyFwd:"Вперёд на 5 секунд", plySpeed:"Скорость", plyWords:"Показывать слова", plyWords2:"Слова и перевод", plyWords0:"Скрыть слова", plyClose:"Закрыть плеер",
  plyDlg:"Слушать диалог"
});
Object.assign(I18N.en, {
  trTitle:"Translator", trBtn:"Translate", trSrcPh:"Type or paste text", trCopy:"Copy", trCopied:"Copied", trClear:"Clear",
  trSwap:"Swap languages", trListen:"Listen", trClose:"Close", trFrom:"From", trTo:"To", trFail:"Couldn’t translate. Check your connection and try again.",
  trEmpty:"The translation will appear here", trAuto:"machine translation", trLangs:{fr:"French", es:"Spanish", ru:"Russian", en:"English"},
  plyPlay:"Play", plyPause:"Pause", plyBack:"Back 5 seconds", plyFwd:"Forward 5 seconds", plySpeed:"Speed", plyWords:"Show the words", plyWords2:"Words and translation", plyWords0:"Hide the words", plyClose:"Close the player",
  plyDlg:"Play the dialogue"
});
const ICO_X = f7("xmark");
const ICO_COPY = f7("doc_on_doc");
const ICO_SWAP = f7("arrow_right_arrow_left");
const VOICE_LANG = {fr:"fr-FR", es:"es-ES", ru:"ru-RU", en:"en-US"};
/* озвучка на любом из четырёх языков */
function sayIn(text, lang){
  if (!synth || !text) return;
  if (lang === (COURSE === "es" ? "es" : "fr")) return speak(text);
  try { synth.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = VOICE_LANG[lang] || lang; u.rate = .95; synth.speak(u); } catch(e) {}
}
function copyText(s){
  const ok = () => toast(t("trCopied"));
  try { if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(s).then(ok, ()=>{}); } catch(e) {}
  try { const ta = document.createElement("textarea"); ta.value = s; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); ok(); } catch(e) {}
}

/* ---------- переводчик ---------- */
const TR = {el:null, from:"fr", to:"ru", req:0, timer:null};
const trCourse = () => COURSE === "es" ? "es" : "fr";
function trDetect(s){
  const cyr = (s.match(/[А-Яа-яЁё]/g) || []).length, lat = (s.match(/[A-Za-zÀ-ÿœæçñ]/g) || []).length;
  if (cyr > lat) return "ru";
  const c = trCourse();
  if (c === "fr" && FR_MARK.test(s)) return "fr";
  if (c === "es" && ES_MARK.test(s)) return "es";
  if (EN_FN.test(s) && !(c === "fr" ? FR_FN : ES_FN).test(s)) return "en";
  return c;
}
function trLangs(){ return [trCourse(), "ru", "en"]; }
function trBuild(){
  const el = document.createElement("aside");
  el.className = "trp"; el.hidden = true; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "false");
  el.innerHTML = `<div class="trp-bg" data-trx></div><div class="trp-card">
    <div class="trp-hd"><span class="trp-grab" aria-hidden="true"></span><b class="trp-t"></b><button type="button" class="trp-ib" data-trx></button></div>
    <div class="trp-langs"><label><select class="trp-sel" id="trFrom"></select></label><button type="button" class="trp-ib" id="trSwap">${ICO_SWAP}</button><label><select class="trp-sel" id="trTo"></select></label></div>
    <div class="trp-box"><textarea id="trSrc" maxlength="1500" spellcheck="false"></textarea>
      <div class="trp-tools"><span class="trp-cnt" id="trCnt"></span><button type="button" class="trp-ib" id="trSaySrc">${ICON_PLAY}</button><button type="button" class="trp-ib" id="trClr">${ICO_X}</button></div></div>
    <div class="trp-box trp-res"><div class="trp-out" id="trOut" aria-live="polite"></div>
      <div class="trp-tools"><span class="trp-cnt" id="trSt"></span><button type="button" class="trp-ib" id="trSayOut">${ICON_PLAY}</button><button type="button" class="trp-ib" id="trCopy">${ICO_COPY}</button></div></div>
  </div>`;
  document.body.appendChild(el); TR.el = el;
  $$("[data-trx]", el).forEach(b=>b.addEventListener("click", trClose));
  $("#trFrom", el).addEventListener("change", e=>{ TR.from = e.target.value; if (TR.from === TR.to) TR.to = TR.from === trCourse() ? (LANG === "en" ? "en" : "ru") : trCourse(); trPaint(); trRun(0); });
  $("#trTo", el).addEventListener("change", e=>{ TR.to = e.target.value; if (TR.from === TR.to) TR.from = TR.to === trCourse() ? (LANG === "en" ? "en" : "ru") : trCourse(); trPaint(); trRun(0); });
  $("#trSwap", el).addEventListener("click", ()=>{ const o = $("#trOut", el).dataset.v || ""; [TR.from, TR.to] = [TR.to, TR.from]; if (o) $("#trSrc", el).value = o; trPaint(); trRun(0); });
  $("#trSrc", el).addEventListener("input", ()=>{ trCount(); trRun(650); });
  $("#trClr", el).addEventListener("click", ()=>{ const s = $("#trSrc", el); s.value = ""; trCount(); trRun(0); s.focus(); });
  $("#trSaySrc", el).addEventListener("click", ()=>sayIn($("#trSrc", el).value.trim(), TR.from));
  $("#trSayOut", el).addEventListener("click", ()=>sayIn($("#trOut", el).dataset.v || "", TR.to));
  $("#trCopy", el).addEventListener("click", ()=>{ const v = $("#trOut", el).dataset.v; if (v) copyText(v); });
}
function trCount(){ const s = $("#trSrc", TR.el).value; $("#trCnt", TR.el).textContent = s.length ? `${s.length} / 1500` : ""; }
function trPaint(){
  const el = TR.el, L = t("trLangs"), opts = v => trLangs().map(k=>`<option value="${k}"${k === v ? " selected" : ""}>${L[k]}</option>`).join("");
  $(".trp-t", el).textContent = t("trTitle");
  $("#trFrom", el).innerHTML = opts(TR.from); $("#trTo", el).innerHTML = opts(TR.to);
  $("#trFrom", el).setAttribute("aria-label", t("trFrom")); $("#trTo", el).setAttribute("aria-label", t("trTo"));
  $("#trSrc", el).placeholder = t("trSrcPh");
  const lbl = (id, k) => { const b = $(id, el); b.setAttribute("aria-label", t(k)); b.title = t(k); };
  lbl(".trp-hd [data-trx]", "trClose"); lbl("#trSwap", "trSwap"); lbl("#trSaySrc", "trListen"); lbl("#trSayOut", "trListen"); lbl("#trCopy", "trCopy"); lbl("#trClr", "trClear");
  $(".trp-hd [data-trx]", el).innerHTML = ICO_X;
  $("#trSaySrc", el).hidden = $("#trSayOut", el).hidden = !synth;
  el.setAttribute("aria-label", t("trTitle"));
}
/* MyMemory принимает до ~500 символов за раз: режем по предложениям */
function trChunks(s){
  const parts = s.replace(/\s+/g, " ").trim().match(/[^.!?…]+[.!?…]*\s*/g) || [s], out = [];
  let cur = "";
  parts.forEach(p=>{ if ((cur + p).length > 450 && cur) { out.push(cur.trim()); cur = ""; } while (p.length > 450) { out.push(p.slice(0, 450)); p = p.slice(450); } cur += p; });
  if (cur.trim()) out.push(cur.trim());
  return out;
}
function trRun(delay){
  clearTimeout(TR.timer);
  TR.timer = setTimeout(async ()=>{
    const el = TR.el, src = $("#trSrc", el).value.trim(), out = $("#trOut", el), st = $("#trSt", el), req = ++TR.req;
    if (!src) { out.textContent = t("trEmpty"); out.dataset.v = ""; out.dataset.st = "empty"; st.textContent = ""; return; }
    out.dataset.st = "load"; st.textContent = t("spLoading");
    const chunks = trChunks(src), res = [];
    for (const c of chunks) { const r = await remoteTr(c, TR.to, TR.from); if (req !== TR.req) return; if (!r) { out.dataset.st = "err"; out.textContent = t("trFail"); out.dataset.v = ""; st.textContent = navigator.onLine === false ? t("spOffline") : ""; return; } res.push(r); }
    const v = res.join(" ");
    out.textContent = v; out.dataset.v = v; out.dataset.st = "ok"; st.textContent = t("trAuto");
  }, delay);
}
function trOpen(text){
  if (!TR.el) trBuild();
  const src = String(text || "").replace(/\s+/g, " ").trim().slice(0, 1500);
  TR.from = trDetect(src); TR.to = TR.from === trCourse() ? (LANG === "en" ? "en" : "ru") : trCourse();
  trPaint();
  $("#trSrc", TR.el).value = src; trCount();
  const el = TR.el; el.hidden = false; requestAnimationFrame(()=>el.classList.add("in"));
  document.body.classList.add("has-trp");
  trRun(0);
}
function trClose(){ if (!TR.el || TR.el.hidden) return; TR.el.classList.remove("in"); document.body.classList.remove("has-trp"); TR.req++; setTimeout(()=>{ if (!TR.el.classList.contains("in")) TR.el.hidden = true; }, 220); }
document.addEventListener("keydown", e=>{ if (e.key === "Escape" && TR.el && !TR.el.hidden && !(SP.el && !SP.el.hidden)) trClose(); });

/* ---------- мини-плеер диалогов (синтез речи с перемоткой и словами) ---------- */
const PLY = {el:null, d:null, words:[], lines:[], total:0, pos:0, wi:0, playing:false, speed:1, tok:0, tick:null, bnd:false, t0:0, show:false};
/* PLY.show: 0 — слов нет, 1 — слова в реальном времени, 2 — слова + перевод реплики */
try { PLY.show = Math.max(0, Math.min(2, +ls.get("edito-ply-words") || 0)); } catch(e) {}
PLY.tr = {};
const PLY_SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];
const spdTxt = v => String(v).replace(".", LANG === "en" ? "." : ",") + "×";
const CPS = 13.5;          /* оценка: символов в секунду при скорости 1 */
const LINE_GAP = .45;      /* пауза между репликами, с */
const fmtT = s => { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
function plyPrep(d){
  const words = [], lines = []; let tt = 0;
  d.lines.forEach(([who, text], li)=>{
    const ws = [], re = /\S+/g; let m;
    const l = {who, text, li, w0:words.length, t0:tt};
    while ((m = re.exec(text))) { const dur = (m[0].length + 1) / CPS; ws.push({li, s:m.index, w:m[0], t0:tt, dur}); tt += dur; }
    words.push(...ws); l.w1 = words.length; l.t1 = tt; lines.push(l); tt += LINE_GAP;
  });
  PLY.words = words; PLY.lines = lines; PLY.total = tt - LINE_GAP;
}
function plyVoices(lang){
  if (!synth) return [];
  const vs = synth.getVoices().filter(v=>v.lang && v.lang.toLowerCase().startsWith(lang));
  const pref = lang === "fr" ? frVoice : esVoice;
  const out = pref ? [pref] : []; vs.forEach(v=>{ if (!out.includes(v)) out.push(v); });
  return out;
}
function plyBuild(){
  const el = document.createElement("div");
  el.className = "ply"; el.hidden = true; el.setAttribute("role", "region");
  el.innerHTML = `<div class="ply-live" id="plyLive" hidden></div>
  <div class="ply-bar">
    <button type="button" class="ply-b" data-ply="back">${f7("gobackward")}</button>
    <button type="button" class="ply-b ply-pp" data-ply="pp"></button>
    <button type="button" class="ply-b" data-ply="fwd">${f7("goforward")}</button>
    <div class="ply-mid"><div class="ply-ti"><span class="ply-name"></span><span class="ply-time"></span></div><div class="ply-track" data-ply="seek"><i></i></div></div>
    <span class="ply-spw"><button type="button" class="ply-b ply-sp" data-ply="speed" aria-haspopup="menu" aria-expanded="false"></button><div class="ply-menu" role="menu" hidden></div></span>
    <button type="button" class="ply-b ply-cc" data-ply="words"><i class="ply-cc-n" aria-hidden="true"></i>${f7on("captions_bubble", "captions_bubble_fill")}</button>
    <button type="button" class="ply-b" data-ply="close">${ICO_X}</button>
  </div>`;
  document.body.appendChild(el); PLY.el = el;
  document.addEventListener("click", e=>{ if (PLY.menu && !e.target.closest(".ply-spw")) plyMenu(false); });
  document.addEventListener("keydown", e=>{
    if (!PLY.menu) return;
    const its = $$(".ply-menu [data-v]", el), i = its.indexOf(document.activeElement);
    if (e.key === "Escape") { e.preventDefault(); plyMenu(false); $(".ply-sp", el).focus(); }
    else if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); const n = its[(i + (e.key === "ArrowDown" ? 1 : -1) + its.length) % its.length]; if (n) n.focus(); }
  });
  el.addEventListener("click", e=>{
    const b = e.target.closest("[data-ply]"); if (!b) return;
    const a = b.dataset.ply;
    if (a === "pp") return PLY.playing ? plyPause() : plyPlay();
    if (a === "back") return plySeek(PLY.pos - 5);
    if (a === "fwd") return plySeek(PLY.pos + 5);
    if (a === "speed") return plyMenu(!PLY.menu);
    if (a === "spd") { PLY.speed = +b.dataset.v; plyMenu(false); $(".ply-sp", el).focus(); if (PLY.playing) plyPlay(); else plyPaint(); return; }
    if (a === "words") { PLY.show = (PLY.show + 1) % 3; try { ls.set("edito-ply-words", String(PLY.show)); } catch(_) {} return plyPaint(); }
    if (a === "close") return plyClose();
    if (a === "seek") { const r = b.getBoundingClientRect(); plySeek((e.clientX - r.left) / r.width * PLY.total); }
  });
}
function plyOpen(id){
  const d = DLG[id]; if (!d) return;
  if (!PLY.el) plyBuild();
  if (PLY.d !== d) { plyStop(); PLY.d = d; plyPrep(d); PLY.pos = 0; PLY.wi = 0; }
  const el = PLY.el; el.hidden = false; requestAnimationFrame(()=>el.classList.add("in"));
  document.body.classList.add("has-ply");
  plyPlay();
}
function plyClose(){ if (!PLY.el) return; plyMenu(false); plyStop(); PLY.el.classList.remove("in"); document.body.classList.remove("has-ply"); setTimeout(()=>{ if (!PLY.el.classList.contains("in")) PLY.el.hidden = true; }, 220); }
function plyStop(){ PLY.tok++; PLY.playing = false; clearInterval(PLY.tick); try { synth && synth.cancel(); } catch(e) {} }
function plyPause(){ plyStop(); plyPaint(); }
function plyWordAt(sec){ const ws = PLY.words; let i = 0; while (i < ws.length - 1 && ws[i + 1].t0 <= sec + 1e-6) i++; return i; }
function plySeek(sec){
  sec = Math.max(0, Math.min(PLY.total - .01, sec));
  PLY.wi = plyWordAt(sec); PLY.pos = PLY.words[PLY.wi].t0;
  if (PLY.playing) plyPlay(); else plyPaint();
}
/* говорим реплику начиная с текущего слова; позиция — по событиям boundary, а если их нет — по таймеру */
function plyPlay(){
  if (!synth || !PLY.d) return;
  plyStop();
  if (PLY.wi >= PLY.words.length - 1 && PLY.pos >= PLY.total - .05) { PLY.wi = 0; PLY.pos = 0; }
  const tok = PLY.tok, w = PLY.words[PLY.wi], line = PLY.lines[w.li];
  const text = line.text.slice(w.s);
  const u = new SpeechSynthesisUtterance(text);
  const vs = plyVoices(PLY.d.lang), spk = PLY.d.lines.findIndex(x=>x[0] === line.who) % 2;
  u.lang = VOICE_LANG[PLY.d.lang];
  if (vs.length > 1) u.voice = vs[spk % vs.length]; else { if (vs[0]) u.voice = vs[0]; u.pitch = spk ? .85 : 1.15; }
  u.rate = .9 * PLY.speed;
  PLY.playing = true; PLY.bnd = false; PLY.t0 = performance.now(); const base = w.t0, wi0 = PLY.wi;
  u.onboundary = ev => { if (tok !== PLY.tok || ev.name && ev.name !== "word") return; PLY.bnd = true; const ci = ev.charIndex + w.s; let i = wi0; while (i + 1 < line.w1 && PLY.words[i + 1].s <= ci) i++; PLY.wi = i; PLY.pos = PLY.words[i].t0; plyPaint(); };
  u.onend = () => {
    if (tok !== PLY.tok) return;
    clearInterval(PLY.tick);
    if (line.li + 1 >= PLY.lines.length) { PLY.playing = false; PLY.pos = PLY.total; PLY.wi = PLY.words.length - 1; plyPaint(true); return; }
    PLY.wi = PLY.lines[line.li + 1].w0; PLY.pos = PLY.lines[line.li + 1].t0; plyPaint();
    setTimeout(()=>{ if (tok === PLY.tok) plyPlay(); }, LINE_GAP * 1000 / PLY.speed);
  };
  u.onerror = ev => { if (tok !== PLY.tok) return; if (ev.error === "interrupted" || ev.error === "canceled") { PLY.playing = false; clearInterval(PLY.tick); plyPaint(); } else u.onend(); };
  PLY.tick = setInterval(()=>{
    if (tok !== PLY.tok || PLY.bnd) return;
    const el = (performance.now() - PLY.t0) / 1000 * PLY.speed;
    PLY.pos = Math.min(base + el, line.t1 - .01); PLY.wi = Math.max(wi0, Math.min(plyWordAt(PLY.pos), line.w1 - 1)); plyPaint();
  }, 120);
  try { synth.cancel(); synth.speak(u); } catch(e) { PLY.playing = false; }
  plyPaint();
}
/* на компьютере плеер по центру белой панели, на телефоне сверху; его высота сдвигает кнопку «Темы» */
function plyPlace(){
  const el = PLY.el; if (!el || el.hidden) return;
  const p = $(".panel"), mob = window.innerWidth <= 760;
  if (!mob && p) { const r = p.getBoundingClientRect(); el.style.left = Math.round(r.left + r.width / 2) + "px"; el.style.width = Math.round(Math.min(640, r.width - 32)) + "px"; }
  else { el.style.left = ""; el.style.width = ""; }
  document.documentElement.style.setProperty("--ply-h", (el.offsetHeight + 8) + "px");
}
window.addEventListener("resize", ()=>plyPlace());
/* выпадающее меню скорости: на компьютере открывается вверх, на телефоне вниз */
function plyMenu(open){
  const el = PLY.el; if (!el) return;
  const m = $(".ply-menu", el), b = $(".ply-sp", el);
  PLY.menu = !!open; b.setAttribute("aria-expanded", PLY.menu); b.classList.toggle("on", PLY.menu);
  if (!PLY.menu) { m.hidden = true; return; }
  m.innerHTML = PLY_SPEEDS.map(v=>`<button type="button" role="menuitemradio" aria-checked="${v === PLY.speed}" class="${v === PLY.speed ? "on" : ""}" data-ply="spd" data-v="${v}"><span>${spdTxt(v)}</span>${v === PLY.speed ? f7("checkmark_alt") : ""}</button>`).join("");
  m.hidden = false;
  const cur = $(".on", m) || $("button", m); if (cur) cur.focus({preventScroll:true});
}
/* перевод реплики: из данных диалога ([кто, текст, ru, en]) или автоперевод */
function plyTr(li){
  const L = LANG === "en" ? "en" : "ru", line = PLY.d.lines[li], own = line[L === "ru" ? 2 : 3];
  if (own) return own;
  const k = L + li;
  if (PLY.tr[k] === undefined) { PLY.tr[k] = null; remoteTr(line[1], L, PLY.d.lang).then(r=>{ PLY.tr[k] = r || ""; plyPaint(); }); }
  return PLY.tr[k];
}
function plyPaint(done){
  const el = PLY.el; if (!el || !PLY.d) return;
  const pp = $(".ply-pp", el);
  pp.innerHTML = PLY.playing ? f7("pause_fill") : f7("play_fill");
  const lbl = (sel, k) => { const b = $(sel, el); b.setAttribute("aria-label", t(k)); b.title = t(k); };
  lbl(".ply-pp", PLY.playing ? "plyPause" : "plyPlay"); lbl('[data-ply="back"]', "plyBack"); lbl('[data-ply="fwd"]', "plyFwd"); lbl(".ply-sp", "plySpeed"); lbl(".ply-cc", ["plyWords", "plyWords2", "plyWords0"][PLY.show]); lbl('[data-ply="close"]', "plyClose");
  el.setAttribute("aria-label", PLY.d.title || t("plyDlg"));
  $(".ply-sp", el).textContent = spdTxt(PLY.speed);
  const cc = $(".ply-cc", el); cc.classList.toggle("on", PLY.show > 0); cc.classList.toggle("dual", PLY.show === 2); cc.setAttribute("aria-pressed", PLY.show > 0);
  $(".ply-cc-n", el).textContent = PLY.show === 2 ? (LANG === "en" ? "EN" : "RU") : "";
  $(".ply-name", el).textContent = PLY.d.title || "";
  $(".ply-time", el).textContent = `${fmtT(PLY.pos / PLY.speed)} / ${fmtT(PLY.total / PLY.speed)}`;
  $(".ply-track i", el).style.width = (PLY.total ? Math.min(100, PLY.pos / PLY.total * 100) : 0).toFixed(1) + "%";
  const live = $("#plyLive", el); live.hidden = !PLY.show; live.classList.toggle("dual", PLY.show === 2);
  if (PLY.show) {
    const w = PLY.words[PLY.wi], line = PLY.lines[w ? w.li : 0];
    const cur = done ? -1 : PLY.wi;
    live.innerHTML = `<b class="ply-who">${esc(line.who)}</b><span class="ply-ln">${PLY.words.slice(line.w0, line.w1).map((x, k)=>`<span class="${line.w0 + k < cur ? "past" : line.w0 + k === cur ? "now" : ""}">${esc(x.w)}</span>`).join(" ")}</span>`
      + (PLY.show === 2 ? (tr => `<span class="ply-tr${tr ? "" : " load"}">${tr ? esc(tr) : "…"}</span>`)(plyTr(line.li)) : "");
  }
  plyPlace();
}
document.addEventListener("click", e=>{ const b = e.target.closest("[data-dlg]"); if (b) { e.preventDefault(); plyOpen(b.dataset.dlg); } });
