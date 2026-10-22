/* =========================================================
   ESPAÑOL — спряжение по группам и неправильные глаголы,
   справка по произношению
   ========================================================= */
ES_PARTS.push(() => [
{
id:"esg-ar", sec:"gram", kind:T("Спряжение", "Conjugation"),
title:"Verbos en -AR", ru:T("Самая большая группа: окончания, частые глаголы и главные исключения — estar и jugar", "The biggest group: endings, common verbs and the key exceptions — estar and jugar"), page:"Más gramática, p. 224",
theory:`
<h3>${T("Модель: hablar", "Model: hablar")}</h3>
${FX(["habl", "+", "!-o · -as · -a · -amos · -áis · -an"])}
<div class="cjs">
${EsCJ("hablar", T("говорить", "to speak"), ["habl<b>o</b>", "habl<b>as</b>", "habl<b>a</b>", "habl<b>amos</b>", "habl<b>áis</b>", "habl<b>an</b>"])}
${EsCJ("trabajar", T("работать", "to work"), ["trabaj<b>o</b>", "trabaj<b>as</b>", "trabaj<b>a</b>", "trabaj<b>amos</b>", "trabaj<b>áis</b>", "trabaj<b>an</b>"])}
${EsCJ("estudiar", T("учиться, изучать", "to study"), ["estudi<b>o</b>", "estudi<b>as</b>", "estudi<b>a</b>", "estudi<b>amos</b>", "estudi<b>áis</b>", "estudi<b>an</b>"])}
</div>
<h3>${T("Правильные глаголы на -ar из юнитов 1–3", "Regular -ar verbs from units 1–3")}</h3>
${TBL(["", "", "", ""], [
[Es("hablar") + `<br><small>${T("говорить", "to speak")}</small>`, Es("trabajar") + `<br><small>${T("работать", "to work")}</small>`, Es("estudiar") + `<br><small>${T("учить", "to study")}</small>`, Es("escuchar") + `<br><small>${T("слушать", "to listen")}</small>`],
[Es("visitar") + `<br><small>${T("посещать", "to visit")}</small>`, Es("viajar") + `<br><small>${T("путешествовать", "to travel")}</small>`, Es("practicar") + `<br><small>${T("практиковать", "to practise")}</small>`, Es("cenar") + `<br><small>${T("ужинать", "to have dinner")}</small>`],
[Es("bailar") + `<br><small>${T("танцевать", "to dance")}</small>`, Es("cocinar") + `<br><small>${T("готовить", "to cook")}</small>`, Es("pasear") + `<br><small>${T("гулять", "to go for a walk")}</small>`, Es("tocar") + `<br><small>${T("играть (на инстр.)", "to play (an instrument)")}</small>`],
[Es("comprar") + `<br><small>${T("покупать", "to buy")}</small>`, Es("chatear") + `<br><small>${T("переписываться", "to chat")}</small>`, Es("mejorar") + `<br><small>${T("улучшать", "to improve")}</small>`, Es("llamarse") + `<br><small>${T("называться", "to be called")}</small>`]
])}
<h3>★ ${T("Главные неправильные на -ar", "The key irregular -ar verbs")}</h3>
<div class="cjs">
${EsCJ("estar", T("находиться, быть", "to be (located)"), ["est<b>oy</b>", "est<b>ás</b>", "est<b>á</b>", "estamos", "estáis", "est<b>án</b>"], 1)}
${EsCJ("jugar", T("играть", "to play"), ["j<b>ue</b>go", "j<b>ue</b>gas", "j<b>ue</b>ga", "jugamos", "jugáis", "j<b>ue</b>gan"], 1)}
</div>
<ul class="exl">
<li>${T("<b>estar</b>: «yo» — <b>estoy</b>, и почти все формы с тильдой: está<b>s</b>, est<b>á</b>, est<b>án</b>. Нужен, чтобы сказать, где что находится: <b>Tikal está en Guatemala</b>.", "<b>estar</b>: “yo” is <b>estoy</b>, and most forms carry an accent: est<b>ás</b>, est<b>á</b>, est<b>án</b>. Use it for location: <b>Tikal está en Guatemala</b>.")}</li>
<li>${T("<b>jugar</b>: <b>u → ue</b> под ударением («ботинок»). Jugar <b>a</b> + игра: <b>juego al fútbol</b>, <b>jugamos a videojuegos</b>.", "<b>jugar</b>: <b>u → ue</b> when stressed (the “boot”). Jugar <b>a</b> + game: <b>juego al fútbol</b>, <b>jugamos a videojuegos</b>.")}</li>
</ul>
${BOOTS(CJ2("cerrar", T("закрывать (e → ie)", "to close (e → ie)"), ["c<b>ie</b>rro", "c<b>ie</b>rras", "c<b>ie</b>rra", "cerramos", "cerráis", "c<b>ie</b>rran"], [0, 1, 2, 5]), CJ2("jugar", T("играть (u → ue)", "to play (u → ue)"), ["j<b>ue</b>go", "j<b>ue</b>gas", "j<b>ue</b>ga", "jugamos", "jugáis", "j<b>ue</b>gan"], [0, 1, 2, 5]))}
${EsNOTE(T("Возвратные глаголы спрягаются так же, только перед глаголом стоит <b>me, te, se, nos, os, se</b>: <b>me llamo, te llamas, se llama…</b>", "Reflexive verbs conjugate the same way, with <b>me, te, se, nos, os, se</b> in front: <b>me llamo, te llamas, se llama…</b>"))}
`,
ex:[
{t:"conj", h:T("Проспрягай глаголы", "Conjugate the verbs"), items:[
{v:"trabajar", p:ES_P6, f:["trabajo", "trabajas", "trabaja", "trabajamos", "trabajáis", "trabajan"]},
{v:"estar", p:ES_P6, f:["estoy", "estás", "está", "estamos", "estáis", "están"]},
{v:"jugar", p:ES_P6, f:["juego", "juegas", "juega", "jugamos", "jugáis", "juegan"]}
]},
{t:"fill", h:T("Поставь глагол в нужную форму", "Put the verb in the correct form"), items:[
{q:"Yo ___ (escuchar) la radio por la mañana.", a:["escucho"]},
{q:"¿Tú ___ (trabajar) en un banco?", a:["trabajas"]},
{q:"Nosotros ___ (estudiar) Arquitectura.", a:["estudiamos"]},
{q:"¿Vosotros ___ (bailar) salsa?", a:["bailáis"]},
{q:"Mis padres ___ (viajar) mucho.", a:["viajan"]},
{q:"¿Dónde ___ (estar) tú ahora?", a:["estás"]},
{q:"Los sábados yo ___ (jugar) al tenis.", a:["juego"]},
{q:"¿Vosotros ___ (jugar) a videojuegos?", a:["jugáis"]}
]},
{t:"mc", h:T("Выбери правильную форму", "Choose the correct form"), items:[
{q:"Yo ___ en Madrid.", o:["estoy", "esto", "está"], a:0},
{q:"Ellos ___ al fútbol.", o:["juegan", "jugan", "juegen"], a:0},
{q:"Nosotros ___ al fútbol.", o:["jugamos", "juegamos", "jugemos"], a:0, e:T("nosotros — без ue", "nosotros — no ue")},
{q:"Usted ___ muy bien español.", o:["habla", "hablas", "hablan"], a:0},
{q:"Vosotras ___ en un restaurante.", o:["cenáis", "cenais", "cenéis"], a:0}
]},
{t:"match", h:T("Форма → местоимение", "Form → pronoun"), pairs:[["estudiáis", "vosotros"], ["hablo", "yo"], ["están", "ellos"], ["juegas", "tú"], ["visitamos", "nosotros"], ["cocina", "ella"]]}
]},

{
id:"esg-er", sec:"gram", kind:T("Спряжение", "Conjugation"),
title:"Verbos en -ER", ru:T("Окончания -er и главные неправильные: ser, tener, hacer, querer, poder", "-er endings and the key irregulars: ser, tener, hacer, querer, poder"), page:"Más gramática, p. 224–225",
theory:`
<h3>${T("Модель: comprender", "Model: comprender")}</h3>
${FX(["comprend", "+", "!-o · -es · -e · -emos · -éis · -en"])}
<div class="cjs">
${EsCJ("comprender", T("понимать", "to understand"), ["comprend<b>o</b>", "comprend<b>es</b>", "comprend<b>e</b>", "comprend<b>emos</b>", "comprend<b>éis</b>", "comprend<b>en</b>"])}
${EsCJ("leer", T("читать", "to read"), ["le<b>o</b>", "le<b>es</b>", "le<b>e</b>", "le<b>emos</b>", "le<b>éis</b>", "le<b>en</b>"])}
${EsCJ("aprender", T("учить, учиться", "to learn"), ["aprend<b>o</b>", "aprend<b>es</b>", "aprend<b>e</b>", "aprend<b>emos</b>", "aprend<b>éis</b>", "aprend<b>en</b>"])}
</div>
<p>${T("Ещё правильные: <b>comer</b> (есть), <b>beber</b> (пить), <b>ver</b> (смотреть: veo, ves, ve, vemos, veis, ven), <b>vender</b> (продавать), <b>creer</b> (думать, верить).", "More regular verbs: <b>comer</b> (to eat), <b>beber</b> (to drink), <b>ver</b> (to see: veo, ves, ve, vemos, veis, ven), <b>vender</b> (to sell), <b>creer</b> (to believe).")}</p>
<h3>★ ${T("Главные неправильные на -er", "The key irregular -er verbs")}</h3>
<div class="cjs">
${EsCJ("ser", T("быть", "to be"), ["<b>soy</b>", "<b>eres</b>", "<b>es</b>", "<b>somos</b>", "<b>sois</b>", "<b>son</b>"], 1)}
${EsCJ("tener", T("иметь", "to have"), ["ten<b>g</b>o", "t<b>ie</b>nes", "t<b>ie</b>ne", "tenemos", "tenéis", "t<b>ie</b>nen"], 1)}
${EsCJ("hacer", T("делать", "to do, to make"), ["ha<b>g</b>o", "haces", "hace", "hacemos", "hacéis", "hacen"], 1)}
${EsCJ("querer", T("хотеть", "to want"), ["qu<b>ie</b>ro", "qu<b>ie</b>res", "qu<b>ie</b>re", "queremos", "queréis", "qu<b>ie</b>ren"], 1)}
${EsCJ("poder", T("мочь", "can, to be able to"), ["p<b>ue</b>do", "p<b>ue</b>des", "p<b>ue</b>de", "podemos", "podéis", "p<b>ue</b>den"], 1)}
</div>
${TBL([T("Глагол", "Verb"), T("Что неправильного", "What's irregular"), T("Где нужен", "Used for")], [
[Es("ser"), T("всё — учить наизусть", "everything — learn by heart"), Es("Soy rusa. Es un país muy grande.")],
[Es("tener"), T("yo: <b>-g-</b>; e → ie", "yo: <b>-g-</b>; e → ie"), Es("Tengo 20 años. ¿Tienes móvil?")],
[Es("hacer"), T("только yo: <b>hago</b>", "only yo: <b>hago</b>"), Es("Hago fotos. ¿Qué hacéis?")],
[Es("querer"), T("e → ie («ботинок»)", "e → ie (“boot”)"), Es("Quiero viajar.")],
[Es("poder"), T("o → ue («ботинок»)", "o → ue (“boot”)"), Es("¿Puedes repetir, por favor?")],
[Es("haber"), T("на A1 — только <b>hay</b>", "at A1 — just <b>hay</b>"), Es("En Chile hay muchos volcanes.")]
])}
${EsNOTE(T("Ещё глаголы с <b>-g-</b> или особым «yo»: <b>poner → pongo</b>, <b>saber → sé</b> (Sé conducir), <b>conocer → conozco</b>. Остальные формы у них правильные.", "More verbs with <b>-g-</b> or a special “yo”: <b>poner → pongo</b>, <b>saber → sé</b> (Sé conducir), <b>conocer → conozco</b>. Their other forms are regular."))}
`,
ex:[
{t:"conj", h:T("Проспрягай глаголы", "Conjugate the verbs"), items:[
{v:"comer", p:ES_P6, f:["como", "comes", "come", "comemos", "coméis", "comen"]},
{v:"hacer", p:ES_P6, f:["hago", "haces", "hace", "hacemos", "hacéis", "hacen"]},
{v:"poder", p:ES_P6, f:["puedo", "puedes", "puede", "podemos", "podéis", "pueden"]}
]},
{t:"fill", h:T("Поставь глагол в нужную форму", "Put the verb in the correct form"), items:[
{q:"Yo ___ (leer) el periódico en español.", a:["leo"]},
{q:"¿Vosotros ___ (comprender) el texto?", a:["comprendéis"]},
{q:"Mi hermano ___ (aprender) a tocar la guitarra.", a:["aprende"]},
{q:"Yo ___ (tener) un intercambio los martes.", a:["tengo"]},
{q:"¿Qué ___ (hacer, tú) el sábado?", a:["haces"]},
{q:"Nosotros ___ (querer) ir a México.", a:["queremos"]},
{q:"¿___ (poder, tú) repetir, por favor?", a:["Puedes"]},
{q:"Ellos ___ (ser) colombianos.", a:["son"]}
]},
{t:"sort", h:T("Правильный или неправильный?", "Regular or irregular?"), cats:[T("правильный", "regular"), T("неправильный", "irregular")], items:[["comer", 0], ["leer", 0], ["aprender", 0], ["comprender", 0], ["beber", 0], ["ser", 1], ["tener", 1], ["hacer", 1], ["querer", 1], ["poder", 1]]},
{t:"mc", h:T("Выбери правильную форму", "Choose the correct form"), items:[
{q:"Yo ___ muchos ejercicios.", o:["hago", "hazo", "haco"], a:0},
{q:"¿Tú ___ hablar alemán?", o:["puedes", "podes", "pueds"], a:0},
{q:"Nosotros no ___ ir al cine hoy.", o:["podemos", "puedemos", "pudemos"], a:0},
{q:"Ella ___ dos hermanos.", o:["tiene", "tene", "tienes"], a:0},
{q:"Vosotros ___ estudiantes.", o:["sois", "soís", "son"], a:0}
]}
]},

{
id:"esg-ir", sec:"gram", kind:T("Спряжение", "Conjugation"),
title:"Verbos en -IR", ru:T("Окончания -ir и главные неправильные: ir, venir, salir, decir, pedir", "-ir endings and the key irregulars: ir, venir, salir, decir, pedir"), page:"Más gramática, p. 224–225",
theory:`
<h3>${T("Модель: vivir", "Model: vivir")}</h3>
${FX(["viv", "+", "!-o · -es · -e · -imos · -ís · -en"])}
<div class="cjs">
${EsCJ("vivir", T("жить", "to live"), ["viv<b>o</b>", "viv<b>es</b>", "viv<b>e</b>", "viv<b>imos</b>", "viv<b>ís</b>", "viv<b>en</b>"])}
${EsCJ("escribir", T("писать", "to write"), ["escrib<b>o</b>", "escrib<b>es</b>", "escrib<b>e</b>", "escrib<b>imos</b>", "escrib<b>ís</b>", "escrib<b>en</b>"])}
</div>
${VS({h:"-er", big:Es("comprend<b>emos</b> · comprend<b>éis</b>"), sub:T("nosotros / vosotros", "nosotros / vosotros")}, {h:"-ir", big:Es("viv<b>imos</b> · viv<b>ís</b>"), sub:T("отличаются только эти две формы", "only these two forms differ")})}
<p>${T("Ещё правильные: <b>abrir</b> (открывать), <b>compartir</b> (делиться), <b>recibir</b> (получать), <b>subir</b> (подниматься).", "More regular verbs: <b>abrir</b> (to open), <b>compartir</b> (to share), <b>recibir</b> (to receive), <b>subir</b> (to go up).")}</p>
<h3>★ ${T("Главные неправильные на -ir", "The key irregular -ir verbs")}</h3>
<div class="cjs">
${EsCJ("ir", T("идти, ехать", "to go"), ["<b>voy</b>", "<b>vas</b>", "<b>va</b>", "<b>vamos</b>", "<b>vais</b>", "<b>van</b>"], 1)}
${EsCJ("venir", T("приходить, приезжать", "to come"), ["ven<b>g</b>o", "v<b>ie</b>nes", "v<b>ie</b>ne", "venimos", "venís", "v<b>ie</b>nen"], 1)}
${EsCJ("salir", T("выходить", "to go out"), ["sal<b>g</b>o", "sales", "sale", "salimos", "salís", "salen"], 1)}
${EsCJ("decir", T("говорить, сказать", "to say"), ["d<b>ig</b>o", "d<b>i</b>ces", "d<b>i</b>ce", "decimos", "decís", "d<b>i</b>cen"], 1)}
${EsCJ("pedir", T("просить, заказывать", "to ask for, to order"), ["p<b>i</b>do", "p<b>i</b>des", "p<b>i</b>de", "pedimos", "pedís", "p<b>i</b>den"], 1)}
</div>
${EsEX([["Mañana vamos a Tikal. Después vamos en autobús a México.", "Завтра едем в Тикаль. Потом поедем на автобусе в Мексику.", "Tomorrow we're going to Tikal. Then we're going to Mexico by bus."], ["Venimos de Chile.", "Мы приехали из Чили.", "We come from Chile."], ["Los sábados salgo con mis amigos.", "По субботам я гуляю с друзьями.", "On Saturdays I go out with my friends."], ["¿Qué significa «vale»? – Dicen «vale» para decir «OK».", "Что значит «vale»? – Так говорят вместо «OK».", "What does “vale” mean? – They say “vale” for “OK”."]])}
${EsWARN(T("<b>ir</b> полностью неправильный, но очень частый: <b>ir a</b> + место (voy a la playa, voy al cine), <b>ir de</b> + занятие (voy de compras).", "<b>ir</b> is completely irregular but very common: <b>ir a</b> + place (voy a la playa, voy al cine), <b>ir de</b> + activity (voy de compras)."))}
`,
ex:[
{t:"conj", h:T("Проспрягай глаголы", "Conjugate the verbs"), items:[
{v:"escribir", p:ES_P6, f:["escribo", "escribes", "escribe", "escribimos", "escribís", "escriben"]},
{v:"ir", p:ES_P6, f:["voy", "vas", "va", "vamos", "vais", "van"]},
{v:"venir", p:ES_P6, f:["vengo", "vienes", "viene", "venimos", "venís", "vienen"]}
]},
{t:"fill", h:T("Поставь глагол в нужную форму", "Put the verb in the correct form"), items:[
{q:"Yo ___ (vivir) en Moscú.", a:["vivo"]},
{q:"Nosotros ___ (escribir) un blog.", a:["escribimos"]},
{q:"¿Vosotros ___ (vivir) cerca?", a:["vivís"]},
{q:"Yo ___ (ir) al gimnasio los lunes.", a:["voy"]},
{q:"¿Tú ___ (ir) de compras hoy?", a:["vas"]},
{q:"Yo ___ (salir) de noche los viernes.", a:["salgo"]},
{q:"¿De dónde ___ (venir) vosotros? – Venimos de Chile.", a:["venís"]},
{q:"En el restaurante yo siempre ___ (pedir) paella.", a:["pido"]}
]},
{t:"match", h:T("Инфинитив → форма yo", "Infinitive → yo form"), pairs:[["ir", "voy"], ["salir", "salgo"], ["venir", "vengo"], ["decir", "digo"], ["pedir", "pido"], ["vivir", "vivo"], ["hacer", "hago"], ["tener", "tengo"]]},
{t:"mc", h:T("Выбери правильную форму", "Choose the correct form"), items:[
{q:"Nosotros ___ a la playa.", o:["vamos", "imos", "vamo"], a:0},
{q:"Ellos ___ de Argentina.", o:["vienen", "venen", "vinen"], a:0},
{q:"Tú ___ que es fácil.", o:["dices", "deces", "dizes"], a:0},
{q:"Vosotros ___ en Valencia.", o:["vivís", "vivéis", "viváis"], a:0},
{q:"Yo ___ con mis compañeros.", o:["salgo", "salo", "sale"], a:0}
]}
]},

{
id:"esg-irreg", sec:"gram", kind:T("Спряжение", "Conjugation"),
title:"Los irregulares más importantes", ru:T("Карта неправильных глаголов: полностью неправильные, «ботинки», особое yo", "A map of irregular verbs: fully irregular, “boots”, special yo"), page:"Más gramática, p. 224–225",
theory:`
<h3>★ ${T("Минимум для контрольной", "The must-knows for the test")}</h3>
<div class="bigc">${[["ser", T("быть", "to be"), "soy · eres · es · somos · sois · son", "m"], ["estar", T("находиться", "to be located"), "estoy · estás · está · estamos · estáis · están", "f"], ["tener", T("иметь", "to have"), "tengo · tienes · tiene · tenemos · tenéis · tienen", "p"], ["hacer", T("делать", "to do"), "hago · haces · hace · hacemos · hacéis · hacen", "m"], ["querer", T("хотеть", "to want"), "quiero · quieres · quiere · queremos · queréis · quieren", "f"], ["ir", T("идти, ехать", "to go"), "voy · vas · va · vamos · vais · van", "p"], ["llamarse", T("называться", "to be called"), "me llamo · te llamas · se llama · nos llamamos · os llamáis · se llaman", "m"], ["hay", T("есть, имеется", "there is / are"), T("одна форма на всё", "one form for everything"), "f"]].map(([v, h, x, c]) => `<div class="bc ${c}"><span class="big fr">${v}</span><h5>${h}</h5><span class="ex fr">${x}</span></div>`).join("")}</div>
<h3>${T("Тип 1. Полностью неправильные", "Type 1. Completely irregular")}</h3>
<div class="cjs">
${EsCJ("ser", T("быть", "to be"), ["soy", "eres", "es", "somos", "sois", "son"], 1)}
${EsCJ("ir", T("идти", "to go"), ["voy", "vas", "va", "vamos", "vais", "van"], 1)}
${EsCJ("estar", T("находиться", "to be located"), ["est<b>oy</b>", "est<b>á</b>s", "est<b>á</b>", "estamos", "estáis", "est<b>á</b>n"], 1)}
</div>
<h3>${T("Тип 2. «Ботинок»: меняется гласная корня", "Type 2. The “boot”: the stem vowel changes")}</h3>
<p>${T("Гласная корня меняется в <b>yo, tú, él, ellos</b> — под ударением. <b>Nosotros</b> и <b>vosotros</b> не меняются никогда. Подсвеченные формы вместе похожи на ботинок.", "The stem vowel changes in <b>yo, tú, él, ellos</b> — under stress. <b>Nosotros</b> and <b>vosotros</b> never change. The highlighted forms together look like a boot.")}</p>
${BOOTS(
CJ2("querer", "e → ie", ["qu<b>ie</b>ro", "qu<b>ie</b>res", "qu<b>ie</b>re", "queremos", "queréis", "qu<b>ie</b>ren"], [0, 1, 2, 5]),
CJ2("poder", "o → ue", ["p<b>ue</b>do", "p<b>ue</b>des", "p<b>ue</b>de", "podemos", "podéis", "p<b>ue</b>den"], [0, 1, 2, 5]),
CJ2("jugar", "u → ue", ["j<b>ue</b>go", "j<b>ue</b>gas", "j<b>ue</b>ga", "jugamos", "jugáis", "j<b>ue</b>gan"], [0, 1, 2, 5]),
CJ2("pedir", "e → i", ["p<b>i</b>do", "p<b>i</b>des", "p<b>i</b>de", "pedimos", "pedís", "p<b>i</b>den"], [0, 1, 2, 5]))}
<p class="hint-l">${T("Так же: e → ie — cerrar, empezar, preferir, pensar; o → ue — dormir, volver, contar; e → i — seguir, repetir.", "Same pattern: e → ie — cerrar, empezar, preferir, pensar; o → ue — dormir, volver, contar; e → i — seguir, repetir.")}</p>
<h3>${T("Тип 3. Особая форма «yo»", "Type 3. A special “yo” form")}</h3>
${TBL([T("Инфинитив", "Infinitive"), "yo", T("остальные формы", "the rest")], [
[Es("hacer"), Es("ha<b>g</b>o"), Es("haces, hace, hacemos…")],
[Es("salir"), Es("sal<b>g</b>o"), Es("sales, sale, salimos…")],
[Es("poner"), Es("pon<b>g</b>o"), Es("pones, pone, ponemos…")],
[Es("saber"), Es("<b>sé</b>"), Es("sabes, sabe, sabemos…")],
[Es("conocer"), Es("cono<b>zc</b>o"), Es("conoces, conoce…")],
[Es("ver"), Es("v<b>e</b>o"), Es("ves, ve, vemos, veis, ven")]
])}
<h3>${T("Тип 4. Смешанные: -g- в yo + «ботинок»", "Type 4. Mixed: -g- in yo + the “boot”")}</h3>
<div class="cjs">
${EsCJ("tener", "-g- + e → ie", ["ten<b>g</b>o", "t<b>ie</b>nes", "t<b>ie</b>ne", "tenemos", "tenéis", "t<b>ie</b>nen"], 1)}
${EsCJ("venir", "-g- + e → ie", ["ven<b>g</b>o", "v<b>ie</b>nes", "v<b>ie</b>ne", "venimos", "venís", "v<b>ie</b>nen"], 1)}
${EsCJ("decir", "-g- + e → i", ["d<b>ig</b>o", "d<b>i</b>ces", "d<b>i</b>ce", "decimos", "decís", "d<b>i</b>cen"], 1)}
</div>
${EsNOTE(T("Окончания у всех этих глаголов обычные (-o, -es, -e, -emos / -imos, -éis / -ís, -en). Неправильное — только корень. Поэтому сначала выучи окончания, потом — что происходит с корнем.", "All these verbs have regular endings (-o, -es, -e, -emos / -imos, -éis / -ís, -en). Only the stem is irregular. So learn the endings first, then what happens to the stem."))}
`,
ex:[
{t:"sort", h:T("Какой тип неправильности?", "Which type of irregularity?"), cats:[T("«ботинок»", "“boot”"), T("особое yo", "special yo"), T("полностью", "completely")], items:[["querer", 0], ["poder", 0], ["jugar", 0], ["pedir", 0], ["hacer", 1], ["salir", 1], ["saber", 1], ["conocer", 1], ["ser", 2], ["ir", 2]]},
{t:"conj", h:T("Проспрягай глаголы", "Conjugate the verbs"), items:[
{v:"tener", p:ES_P6, f:["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"]},
{v:"pedir", p:ES_P6, f:["pido", "pides", "pide", "pedimos", "pedís", "piden"]},
{v:"ser", p:ES_P6, f:["soy", "eres", "es", "somos", "sois", "son"]},
{v:"ir", p:ES_P6, f:["voy", "vas", "va", "vamos", "vais", "van"]}
]},
{t:"match", h:T("Инфинитив → форма yo", "Infinitive → yo form"), pairs:[["saber", "sé"], ["poner", "pongo"], ["conocer", "conozco"], ["estar", "estoy"], ["ser", "soy"], ["poder", "puedo"], ["querer", "quiero"], ["jugar", "juego"]]},
{t:"fill", h:T("Вставь глагол в нужной форме", "Fill in the verb"), items:[
{q:"Yo no ___ (saber) bailar salsa.", a:["sé"]},
{q:"¿___ (poder, vosotros) hablar más despacio?", a:["Podéis"]},
{q:"Mi hermana ___ (querer) vivir en Perú.", a:["quiere"]},
{q:"Yo ___ (conocer) a muchos argentinos.", a:["conozco"]},
{q:"Nosotros ___ (ir) a Santiago de Chile.", a:["vamos"]},
{q:"Ellos ___ (jugar) al fútbol los domingos.", a:["juegan"]},
{q:"¿Tú ___ (venir) a la fiesta?", a:["vienes"]},
{q:"Yo siempre ___ (decir) la verdad.", a:["digo"]}
]},
{t:"tf", h:T("Верно или неверно?", "True or false?"), items:[
{q:T("У nosotros в «ботинке» корень не меняется: podemos, queremos.", "In the “boot”, nosotros keeps the stem: podemos, queremos."), a:true},
{q:T("«Yo hacio» — правильная форма.", "“Yo hacio” is correct."), a:false, e:"Yo hago."},
{q:T("У ir форма «nosotros» — vamos.", "The nosotros form of ir is vamos."), a:true},
{q:T("Saber в форме yo — «sabo».", "Saber in the yo form is “sabo”."), a:false, e:"Yo sé."},
{q:T("У tener две неправильности: -g- в yo и e → ie.", "Tener has two irregularities: -g- in yo and e → ie."), a:true}
]}
]},

{
id:"esr-pronunciacion", sec:"ref", kind:T("С нуля", "From scratch"),
title:"Alfabeto y pronunciación", ru:T("Алфавит, звуки, ударение и тильда", "The alphabet, sounds, stress and written accents"), page:"Unidad 1, p. 21 · Más gramática, p. 205–207",
theory:`
<h3>${T("Алфавит", "The alphabet")}</h3>
<div class="abc">${[["A", "a"], ["B", "be"], ["C", "ce"], ["D", "de"], ["E", "e"], ["F", "efe"], ["G", "ge"], ["H", "hache"], ["I", "i"], ["J", "jota"], ["K", "ka"], ["L", "ele"], ["M", "eme"], ["N", "ene"], ["Ñ", "eñe"], ["O", "o"], ["P", "pe"], ["Q", "cu"], ["R", "erre"], ["S", "ese"], ["T", "te"], ["U", "u"], ["V", "uve"], ["W", "uve doble"], ["X", "equis"], ["Y", "ye"], ["Z", "zeta"]].map(([l, n]) => `<span class="abc-l fr" data-say="${n}"><b>${l}</b><i>${n}</i></span>`).join("")}</div>
${EsEX([["– ¿Cómo se escribe Canadá? – Ce, a, ene, a, de, a, con acento en la última a.", "– Как пишется Canadá? – C, a, n, a, d, a, с ударением на последней a.", "– How do you spell Canadá? – C, a, n, a, d, a, with an accent on the last a."], ["– ¿Cómo se dice love en español? – Amor.", "– Как сказать love по-испански? – Amor.", "– How do you say love in Spanish? – Amor."], ["– ¿Qué significa «vale»? – OK.", "– Что значит «vale»? – OK.", "– What does “vale” mean? – OK."]])}
<h3>${T("Главные звуки", "Key sounds")}</h3>
${TBL([T("Буквы", "Letters"), T("Звук", "Sound"), T("Примеры", "Examples")], [
["j · g + e, i", T("[x] — как резкое «х»", "[x] — a harsh “h”, like Scottish <i>loch</i>"), Es("jueza, Jiménez, trabajo, ginecólogo, ingeniera")],
["g + a, o, u · gu + e, i", T("[g] — как в «гол»", "[g] — as in <i>go</i>"), Es("Gael, lenguas, belga, bloguero, guineano")],
["gü + e, i", T("[gw] — u читается", "[gw] — the u is pronounced"), Es("lingüista, nicaragüense")],
["c + a, o, u · qu + e, i · k", T("[k]", "[k]"), Es("casa, cubano, correo, médica, qué, arquitecto")],
["z · c + e, i", T("[θ] — межзубный (в Испании)", "[θ] — like English <i>th</i> in <i>think</i> (Spain)"), Es("zumba, suiza, pizarra, nacionalidad, francesa, venezolano")],
["h", T("не читается", "silent"), Es("hola, hablar, hotel")],
["ll · y", T("[j] — как «й»", "[j] — like <i>y</i> in <i>yes</i>"), Es("me llamo, playa, yo")],
["ñ", T("[ɲ] — мягкое «нь»", "[ɲ] — like <i>ny</i> in <i>canyon</i>"), Es("España, mañana, español")],
["r · rr", T("один удар / раскатистое", "one tap / rolled"), Es("pero · perro, rosa, marrón")],
["b · v", T("одинаково", "the same sound"), Es("barco, vaso, bigote, vivir")]
])}
${EsNOTE(T("В Латинской Америке <b>z</b> и <b>c + e, i</b> читаются как [s]: <i>Venezuela</i> [benesuéla]. В Испании — межзубный [θ].", "In Latin America <b>z</b> and <b>c + e, i</b> are pronounced [s]. In Spain they're [θ] like <i>th</i>."))}
${EsEN(T("Гласных всего пять, и они всегда звучат одинаково и чисто: <b>a, e, i, o, u</b> — без английских дифтонгов (<i>no</i> — это [no], а не [nou]).", "There are only five vowels, always pure: <b>a, e, i, o, u</b> — no English-style diphthongs (<i>no</i> is [no], not [nou])."))}
<h3>${T("Ударение: три правила", "Stress: three rules")}</h3>
${TBL([T("Слово оканчивается на…", "The word ends in…"), T("Ударение по умолчанию", "Default stress"), T("Если иначе — пиши тильду", "If not — write an accent")], [
[T("гласную, <b>-n</b> или <b>-s</b>", "a vowel, <b>-n</b> or <b>-s</b>"), T("<b>предпоследний</b> слог", "the <b>second-to-last</b> syllable") + `<br>${Es("ca<u>sa</u>, ha<u>blan</u>, <u>lu</u>nes")}`, Es("ca<b>fé</b>, ale<b>mán</b>, in<b>glés</b>")],
[T("другую согласную", "another consonant"), T("<b>последний</b> слог", "the <b>last</b> syllable") + `<br>${Es("espa<u>ñol</u>, ciu<u>dad</u>, ha<u>blar</u>")}`, Es("<b>ár</b>bol, <b>fá</b>cil, <b>dó</b>lar")],
[T("—", "—"), T("третий от конца слог", "third syllable from the end"), Es("<b>mú</b>sica, <b>pá</b>gina, <b>sá</b>bado") + ` — ${T("тильда всегда", "always an accent")}`]
])}
${EsWARN(T("Тильда различает слова: <b>tú</b> (ты) — <b>tu</b> (твой), <b>él</b> (он) — <b>el</b> (артикль), <b>sí</b> (да) — <b>si</b> (если), <b>qué</b> (что?) — <b>que</b> (что, который).", "The accent tells words apart: <b>tú</b> (you) — <b>tu</b> (your), <b>él</b> (he) — <b>el</b> (the), <b>sí</b> (yes) — <b>si</b> (if), <b>qué</b> (what?) — <b>que</b> (that)."))}
`,
ex:[
{t:"sort", h:T("[x] как Javier или [g] как Gael?", "[x] as in Javier or [g] as in Gael?"), cats:["[x] Javier", "[g] Gael"], items:[["ginecólogo", 0], ["jueza", 0], ["bloguero", 1], ["Jiménez", 0], ["lenguas", 1], ["belga", 1], ["cirujana", 0], ["guineano", 1], ["ingeniera", 0], ["trabajo", 0], ["psicólogo", 1], ["nicaragüense", 1]]},
{t:"sort", h:T("[k] как casa или [θ] как pizarra?", "[k] as in casa or [θ] as in pizarra?"), cats:["[k] casa", "[θ] pizarra"], items:[["francesa", 1], ["correo", 0], ["suiza", 1], ["nacionalidad", 1], ["arquitecto", 0], ["cubano", 0], ["médica", 0], ["qué", 0], ["zumba", 1], ["venezolano", 1]]},
{t:"drill", h:T("Прочитай вслух, потом нажми — проверь себя", "Read it aloud, then click to check"), items:[["jueves", "[ˈxwe.βes]"], ["gente", "[ˈxen.te]"], ["guitarra", "[ɡiˈta.ra]"], ["zapato", "[θaˈpa.to]"], ["cine", "[ˈθi.ne]"], ["hola", "[ˈo.la]"], ["llamar", "[ʝaˈmar]"], ["España", "[esˈpa.ɲa]"], ["perro", "[ˈpe.ro]"], ["vaso", "[ˈba.so]"]]},
{t:"mc", h:T("Где ударение?", "Where's the stress?"), items:[
{q:"hablan", o:["HA-blan", "ha-BLAN"], a:0, e:T("Оканчивается на -n → предпоследний слог.", "Ends in -n → second-to-last syllable.")},
{q:"ciudad", o:["ciu-DAD", "CIU-dad"], a:0, e:T("Оканчивается на -d → последний слог.", "Ends in -d → last syllable.")},
{q:"inglés", o:["in-GLÉS", "IN-glés"], a:0, e:T("Тильда показывает ударение.", "The accent shows the stress.")},
{q:"música", o:["MÚ-si-ca", "mu-SI-ca"], a:0},
{q:"español", o:["es-pa-ÑOL", "es-PA-ñol"], a:0}
]},
{t:"mc", h:T("Нужна ли тильда?", "Does it need an accent?"), items:[
{q:T("– ¿Cómo estás ___? (ты)", "– ¿Cómo estás ___? (you)"), o:["tú", "tu"], a:0},
{q:T("¿Cuál es ___ nombre? (твоё)", "¿Cuál es ___ nombre? (your)"), o:["tu", "tú"], a:0},
{q:"– ¿Eres española? – ___, de Sevilla.", o:["Sí", "Si"], a:0},
{q:"¿___ es el mate?", o:["Qué", "Que"], a:0},
{q:T("___ se llama Pablo. (он)", "___ se llama Pablo. (he)"), o:["Él", "El"], a:0}
]}
]}
]);
