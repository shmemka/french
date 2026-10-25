/* =========================================================
   «Почему так» v2: для каждого задания — общее правило (r),
   для каждого вопроса — объяснение именно этого ответа (i),
   для заданий без отдельных вопросов (sort, match, order, cards,
   drill, listen, conj) — разбор именно этого задания (t).
   Все строки — пары [ru, en].
   WHY2_ADD({topicId: [ {r, i, t} | null, … по индексам заданий ]})
   WHYP_ADD("fr"|"es", {tp: {"текст вопроса": [ru, en]}}) — пробная и банк.
   ========================================================= */
const WHY2 = {}, WHYT = {}, WHYP = {fr:{}, es:{}};
function WHY2_ADD(map){ Object.assign(WHY2, map); }
function WHYP_ADD(c, map){ for (const tp in map) WHYP[c][tp] = Object.assign(WHYP[c][tp] || {}, map[tp]); }
const whyKey = s => String(Array.isArray(s) ? s[0] : s || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
/* li — 0 для русской сборки, 1 для английской */
function WHY2_APPLY(tops, li){
  tops.forEach(tp=>{
    const spec = WHY2[tp.id]; if (!spec) return;
    spec.forEach((x, ei)=>{
      const ex = tp.ex[ei]; if (!x || !ex) return;
      if (x.r) { WHY[tp.id] = WHY[tp.id] || []; WHY[tp.id][ei] = x.r; }
      if (x.t) { WHYT[tp.id] = WHYT[tp.id] || []; WHYT[tp.id][ei] = x.t; }
      if (x.i && ex.items) ex.items.forEach((it, k)=>{ const v = x.i[k]; if (v) it.e = v[li]; });
    });
  });
}
/* ruPool — русская версия того же списка (ключи), out — список, куда пишем e */
function WHYP_APPLY(c, ruPool, out, li){
  const m = WHYP[c];
  ruPool.forEach((q, i)=>{ const d = m[q.tp], v = d && d[whyKey(q.q)]; if (v && out[i]) out[i].e = v[li]; });
}
