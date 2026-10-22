/* =========================================================
   UNIDAD 3 — ¿DÓNDE ESTÁ SANTIAGO?
   ========================================================= */
ES_PARTS.push(() => [
{
id:"es3-ser-estar-hay", sec:"book", unit:"3", kind:T("Грамматика", "Grammar"),
title:"Ser, estar y hay", ru:T("Описать место, сказать, где оно и что там есть", "Describing a place, saying where it is and what's there"), page:"Unidad 3, p. 46, 51",
theory:`
<h3>${T("Три глагола — три вопроса", "Three verbs — three questions")}</h3>
<div class="bigc">
<div class="bc m"><span class="big fr">ser</span><h5>${T("Какой? Что это?", "What is it like? What is it?")}</h5><span class="ex fr">Perú es muy bonito. México es un país muy turístico.</span></div>
<div class="bc f"><span class="big fr">estar</span><h5>${T("Где находится?", "Where is it?")}</h5><span class="ex fr">Tikal está en Guatemala.</span></div>
<div class="bc p"><span class="big fr">hay</span><h5>${T("Что там есть?", "What is there?")}</h5><span class="ex fr">En Barcelona hay un estadio muy grande.</span></div>
</div>
<h3>${T("Как выбрать", "How to choose")}</h3>
${FLOW([[T("Говоришь, <b>что где-то есть</b> (или нет) — с <b>un / una</b>, числом, <b>mucho</b> или без артикля?", "Saying that something <b>exists</b> somewhere (or not) — with <b>un / una</b>, a number, <b>mucho</b> or no article?"), "hay", "En Chile hay muchas montañas."], [T("Говоришь, <b>где находится</b> конкретная вещь — с <b>el / la</b> или названием?", "Saying <b>where</b> a specific thing is — with <b>el / la</b> or a name?"), "está / están", "Las islas Galápagos están en Ecuador."]], [T("Описываешь или определяешь: какой это, что это", "Describing or defining: what it's like, what it is"), "es / son", "Los peruanos son muy amables."])}
<h3>Ser + ${T("прилагательное / существительное", "adjective / noun")}</h3>
${TBL(["SER + adjetivo", "SER + sustantivo"], [
[Es("Perú es muy <u>bonito</u>."), Es("México es <u>un país</u> muy turístico.")],
[Es("Los peruanos son muy <u>amables</u>."), Es("Las rancheras son <u>canciones</u>.")]
])}
<h3>Estar — ${T("где находится", "location")}</h3>
<div class="cjs">${EsCJ("estar", T("находиться", "to be (located)"), ["est<b>oy</b>", "est<b>ás</b>", "est<b>á</b>", "estamos", "estáis", "est<b>án</b>"], 1)}</div>
${EsEX([["Tikal está en Guatemala.", "Тикаль находится в Гватемале.", "Tikal is in Guatemala."], ["La capital está en el centro del país.", "Столица находится в центре страны.", "The capital is in the centre of the country."], ["– ¿Dónde está Panamá? – En Centroamérica.", "– Где находится Панама? – В Центральной Америке.", "– Where is Panama? – In Central America."], ["Hoy estamos en la capital.", "Сегодня мы в столице.", "Today we're in the capital."]])}
<h3>Hay — ${T("что есть", "what there is")}</h3>
<p>${T("<b>Hay</b> — безличная форма глагола <b>haber</b>. Она одна и для единственного, и для множественного числа.", "<b>Hay</b> is the impersonal form of <b>haber</b>. It's the same for singular and plural.")}</p>
${EsEX([["En Barcelona hay un estadio de fútbol muy grande.", "В Барселоне есть очень большой футбольный стадион.", "In Barcelona there's a very big football stadium."], ["En Paraguay hay dos lenguas oficiales.", "В Парагвае два официальных языка.", "In Paraguay there are two official languages."], ["En Costa Rica hay muchos parques naturales.", "В Коста-Рике много природных парков.", "In Costa Rica there are lots of national parks."], ["En Venezuela hay petróleo. En España no hay petróleo.", "В Венесуэле есть нефть. В Испании нефти нет.", "There's oil in Venezuela. There's no oil in Spain."]])}
${EsWARN(T("<b>Hay</b> никогда не идёт с <b>el / la / los / las</b>: ✗ <s>Hay el lago precioso</s> → ✓ <b>Hay un lago precioso.</b> А место можно поставить и до, и после: <b>En Barcelona hay…</b> = <b>Hay … en Barcelona.</b>", "<b>Hay</b> never goes with <b>el / la / los / las</b>: ✗ <s>Hay el lago precioso</s> → ✓ <b>Hay un lago precioso.</b> The place can go before or after: <b>En Barcelona hay…</b> = <b>Hay … en Barcelona.</b>"))}
${VS({h:"hay + un / una", big:Es("Hay un museo en Bilbao."), sub:T("какой-то музей существует", "a museum exists")}, {h:"el / la + está", big:Es("El museo Guggenheim está en Bilbao."), sub:T("где этот конкретный музей", "where this particular museum is")})}
${EsEN(T("<b>hay</b> = <i>there is / there are</i>; <b>estar</b> = <i>to be</i> о местонахождении (<i>it's in…</i>); <b>ser</b> = <i>to be</i> в описании (<i>it's beautiful</i>).", "<b>hay</b> = <i>there is / there are</i>; <b>estar</b> = <i>to be</i> for location (<i>it's in…</i>); <b>ser</b> = <i>to be</i> for description (<i>it's beautiful</i>)."))}
<h3>${T("Блог Лолы", "Lola's blog")}</h3>
<div class="sample"><p>${Es("Aquí todo <b>es</b> precioso. <b>Hay</b> unas playas de arena negra muy bonitas, <b>están</b> en la costa del Pacífico. Hoy <b>estamos</b> en la capital, que <b>está</b> en el centro del país. La gente <b>es</b> muy simpática. Mañana vamos a Tikal para visitar unas ruinas mayas que <b>están</b> en la selva. <b>Hay</b> cinco templos antiguos…")}</p><p class="tr">${T("Лола в Гватемале: hay — что есть, está(n) — где, es — какое.", "Lola is in Guatemala: hay — what's there, está(n) — where, es — what it's like.")}</p></div>
`,
ex:[
{t:"conj", h:T("Проспрягай estar", "Conjugate estar"), items:[{v:"estar", p:ES_P6, f:["estoy", "estás", "está", "estamos", "estáis", "están"]}]},
{t:"mc", h:T("Es, está или hay?", "Es, está or hay?"), items:[
{q:"Santiago de Compostela ___ una ciudad muy antigua.", o:["es", "está", "hay"], a:0},
{q:"Santiago de Compostela ___ en el noroeste de España.", o:["está", "es", "hay"], a:0},
{q:"En Santiago de Compostela ___ una universidad muy antigua.", o:["hay", "está", "es"], a:0},
{q:"Machu Picchu ___ en Perú.", o:["está", "es", "hay"], a:0},
{q:"En Guatemala ___ ruinas mayas.", o:["hay", "están", "son"], a:0},
{q:"Las ruinas de Tikal ___ en la selva.", o:["están", "hay", "son"], a:0},
{q:"La gente de Guatemala ___ muy simpática.", o:["es", "está", "hay"], a:0},
{q:"En España no ___ petróleo.", o:["hay", "es", "está"], a:0}
]},
{t:"fill", h:T("Вставь es / son, está / están или hay", "Fill in es / son, está / están or hay"), items:[
{q:"Lima ___ la capital de Perú.", a:["es"]},
{q:"Valparaíso ___ en la costa de Chile.", a:["está"]},
{q:"En Uruguay ___ playas muy bonitas.", a:["hay"]},
{q:"Mallorca ___ una isla.", a:["es"]},
{q:"Las islas Galápagos ___ en Ecuador.", a:["están"]},
{q:"En México ___ muchas ciudades bonitas.", a:["hay"]},
{q:"Los argentinos ___ muy simpáticos.", a:["son"]},
{q:"Yo ___ en Madrid ahora.", a:["estoy"]}
]},
{t:"tf", h:T("Правильно или нет?", "Correct or not?"), items:[
{q:"Hay el lago precioso en Chile.", a:false, e:"Hay un lago precioso en Chile."},
{q:"En Barcelona hay un estadio muy grande.", a:true},
{q:"Tikal es en Guatemala.", a:false, e:"Tikal está en Guatemala."},
{q:"En Costa Rica hay muchos parques naturales.", a:true},
{q:"Los Andes están en el oeste de Argentina.", a:true},
{q:"Hay unas playas que es en la costa.", a:false, e:"… que están en la costa."}
]},
{t:"sort", h:T("Что нужно: es, está или hay?", "What's needed: es, está or hay?"), cats:["es", "está", "hay"], items:[["Chile ___ un país muy largo.", 0], ["Chile ___ en América del Sur.", 1], ["En Chile ___ desiertos.", 2], ["Cuba ___ una isla.", 0], ["La Habana ___ en Cuba.", 1], ["En Cuba ___ playas preciosas.", 2], ["El clima ___ tropical.", 0], ["El museo ___ en el centro.", 1], ["En mi ciudad no ___ metro.", 2]]},
{t:"order", h:T("Собери фразу", "Build the sentence"), items:[
{s:"En Barcelona hay un estadio de fútbol muy grande.", ru:T("В Барселоне есть очень большой футбольный стадион.", "There's a very big football stadium in Barcelona.")},
{s:"La capital está en el centro del país.", ru:T("Столица находится в центре страны.", "The capital is in the centre of the country.")},
{s:"México es un país muy turístico.", ru:T("Мексика — очень туристическая страна.", "Mexico is a very touristy country.")}
]}
]},

{
id:"es3-muy-mucho", sec:"book", unit:"3", kind:T("Грамматика", "Grammar"),
title:"Muy, mucho y el superlativo", ru:T("Очень, много и «самый … в мире»", "Very, a lot and “the most … in the world”"), page:"Unidad 3, p. 47, 49, 51",
theory:`
<h3>${T("Muy или mucho? Смотри на соседнее слово", "Muy or mucho? Look at the next word")}</h3>
${TBL([T("Перед / после", "Before / after"), T("Форма", "Form"), T("Пример", "Example")], [
[T("перед <b>прилагательным</b>", "before an <b>adjective</b>"), Es("<b>muy</b>") + ` (${T("не меняется", "never changes")})`, Es("El lago Maracaibo es <b>muy</b> grande. Las selvas son <b>muy</b> húmedas.")],
[T("перед <b>существительным</b>", "before a <b>noun</b>"), Es("<b>mucho / mucha / muchos / muchas</b>"), Es("Hay <b>mucho</b> café. Hay <b>mucha</b> contaminación. Hay <b>muchos</b> tipos de queso. Hay <b>muchas</b> ciudades bonitas.")],
[T("после <b>глагола</b>", "after a <b>verb</b>"), Es("<b>mucho</b>") + ` (${T("не меняется", "never changes")})`, Es("En el sur de Argentina llueve <b>mucho</b>.")]
])}
${GRID(["", T("ед. ч.", "singular"), T("мн. ч.", "plural")], [
[T("мужской", "masc."), "m:mucho café", "m:muchos parques"],
[T("женский", "fem."), "f:mucha gente", "f:muchas montañas"]
])}
${EsWARN(T("<b>muy</b> и <b>mucho</b> после глагола никогда не меняются. Согласуется только <b>mucho</b> перед существительным — как обычное прилагательное.", "<b>muy</b> and <b>mucho</b> after a verb never change. Only <b>mucho</b> before a noun agrees — like an ordinary adjective."))}
${EsEN(T("Похоже на английский: <b>muy</b> = <i>very</i>, <b>mucho</b> + сущ. = <i>much / many / a lot of</i>, глагол + <b>mucho</b> = <i>a lot</i>. Ошибка «muy mucho» — как <i>very much</i> там, где нужно <i>very</i>.", "Like English: <b>muy</b> = <i>very</i>, <b>mucho</b> + noun = <i>much / many / a lot of</i>, verb + <b>mucho</b> = <i>a lot</i>."))}
<h3>${T("Превосходная степень: самый … из", "Superlative: the most … in")}</h3>
${FX(["el / la / los / las", "+", T("(сущ.)", "(noun)"), "+", "!más", "+", T("прилаг.", "adj."), "+", "!de"])}
${EsEX([["El Prado es el museo más famoso de Madrid.", "Прадо — самый знаменитый музей Мадрида.", "The Prado is the most famous museum in Madrid."], ["Asunción es la ciudad más grande de Paraguay.", "Асунсьон — самый большой город Парагвая.", "Asunción is the biggest city in Paraguay."], ["El Nilo y el Amazonas son los ríos más largos del mundo.", "Нил и Амазонка — самые длинные реки мира.", "The Nile and the Amazon are the longest rivers in the world."], ["El Everest y el K2 son las montañas más altas del mundo.", "Эверест и К2 — самые высокие горы мира.", "Everest and K2 are the highest mountains in the world."], ["El volcán Arenal es uno de los volcanes más activos del mundo.", "Вулкан Ареналь — один из самых активных вулканов мира.", "Arenal is one of the most active volcanoes in the world."]])}
${EsWARN(T("Артикль и прилагательное согласуются с существительным: <b>la</b> ciudad más grand<b>e</b>, <b>las</b> montañas más alt<b>as</b>. После — <b>de</b> (de + el = <b>del</b> mundo).", "The article and adjective agree with the noun: <b>la</b> ciudad más grand<b>e</b>, <b>las</b> montañas más alt<b>as</b>. Then <b>de</b> (de + el = <b>del</b> mundo)."))}
${EsEN(T("В английском <i>the biggest city <b>in</b> Paraguay</i>, в испанском — <b>de</b>: la ciudad más grande <b>de</b> Paraguay. И нет формы на <i>-est</i>: всегда <b>más</b> + прилагательное.", "English says <i>the biggest city <b>in</b> Paraguay</i>; Spanish uses <b>de</b>: la ciudad más grande <b>de</b> Paraguay. And there's no <i>-est</i>: always <b>más</b> + adjective."))}
<h3>${T("Мир латиноамериканских рекордов", "A world of Latin American records")}</h3>
${EsEX([["El Aconcagua está en Argentina y es la montaña más alta de América.", "Аконкагуа — в Аргентине, самая высокая гора Америки.", "Aconcagua is in Argentina and is the highest mountain in the Americas."], ["El desierto de Atacama, en Chile, es el lugar más seco del planeta.", "Пустыня Атакама в Чили — самое сухое место на планете.", "The Atacama Desert in Chile is the driest place on the planet."], ["México es el país más poblado del mundo hispano.", "Мексика — самая населённая испаноязычная страна.", "Mexico is the most populated country in the Spanish-speaking world."], ["El salar de Uyuni, en Bolivia, es el desierto de sal más grande del mundo.", "Солончак Уюни в Боливии — самая большая соляная пустыня в мире.", "The Uyuni salt flat in Bolivia is the largest salt desert in the world."]])}
`,
ex:[
{t:"fill", h:T("Вставь muy, mucho, mucha, muchos или muchas", "Fill in muy, mucho, mucha, muchos or muchas"), items:[
{q:"Santiago de Compostela es una ciudad ___ antigua.", a:["muy"]},
{q:"En Santiago de Compostela hay ___ lugares turísticos.", a:["muchos"]},
{q:"En Guatemala hay ___ playas maravillosas.", a:["muchas"]},
{q:"El cobre es un producto ___ importante en Chile.", a:["muy"]},
{q:"Lola cree que la gente de Guatemala es ___ simpática.", a:["muy"]},
{q:"En el sur de Argentina llueve ___.", a:["mucho"]},
{q:"En esta ciudad hay ___ contaminación.", a:["mucha"]},
{q:"En México hay ___ café.", a:["mucho"]}
]},
{t:"sort", h:T("Muy или mucho?", "Muy or mucho?"), cats:["muy", "mucho/a/os/as"], items:[["… grande", 0], ["… montañas", 1], ["… bonito", 0], ["llueve …", 1], ["… gente", 1], ["… húmedo", 0], ["… turistas", 1], ["… interesante", 0]]},
{t:"fill", h:T("Вставь el / la / los / las … más … de / del", "Fill in el / la / los / las … más … de / del"), items:[
{q:"Brasil es ___ país más poblado de Latinoamérica.", a:["el"]},
{q:"Rusia es el país más grande ___ mundo.", a:["del"]},
{q:"El Kilimanjaro, el Everest y el Mauna Kea son ___ montañas más altas del mundo.", a:["las"]},
{q:"Groenlandia es la isla ___ grande del mundo.", a:["más"]},
{q:"Madrid es la ciudad más poblada ___ España.", a:["de"]},
{q:"El Nilo es ___ río más largo de África.", a:["el"]}
]},
{t:"mc", h:T("Выбери правильный вариант", "Choose the correct option"), items:[
{q:"El Amazonas es ___.", o:["el río más largo de América del Sur", "el río más largo en América del Sur", "el más río largo de América del Sur"], a:0},
{q:"Las selvas de Venezuela son ___ húmedas.", o:["muy", "muchas", "mucho"], a:0},
{q:"Argentina tiene ___ volcanes.", o:["muchos", "muy", "mucho"], a:0},
{q:"Ciudad del Vaticano y Mónaco son los países más pequeños ___ Europa.", o:["de", "en", "del"], a:0},
{q:T("Tokio es la ciudad con más habitantes del mundo. «Más habitantes» значит…", "Tokio es la ciudad con más habitantes del mundo. “Más habitantes” means…"), o:[T("больше всего жителей", "the most inhabitants"), T("очень много жителей", "lots of inhabitants"), T("меньше всего жителей", "the fewest inhabitants")], a:0}
]},
{t:"order", h:T("Собери фразу", "Build the sentence"), items:[
{s:"El Prado es el museo más famoso de Madrid.", ru:T("Прадо — самый знаменитый музей Мадрида.", "The Prado is the most famous museum in Madrid.")},
{s:"En el sur hace mucho frío y llueve mucho.", ru:T("На юге очень холодно и много дождей.", "In the south it's very cold and it rains a lot.")},
{s:"México es un país muy grande.", ru:T("Мексика — очень большая страна.", "Mexico is a very big country.")}
]}
]},

{
id:"es3-preguntas", sec:"book", unit:"3", kind:T("Грамматика", "Grammar"),
title:"¿Qué? ¿Cuál? ¿Dónde? ¿Cuántos?", ru:T("Вопросительные слова и ловушка qué / cuál", "Question words and the qué / cuál trap"), page:"Unidad 3, p. 48, 51",
theory:`
<h3>${T("Вопросительные слова", "Question words")}</h3>
${TBL([T("Слово", "Word"), T("О чём спрашивает", "Asks about"), T("Пример", "Example")], [
[Es("¿Dónde?"), T("место", "place"), Es("¿Dónde está Panamá? — En Centroamérica.")],
[Es("¿Cómo?"), T("какой, как", "how, what like"), Es("¿Cómo es el clima en Cuba? — Tropical.")],
[Es("¿Cuántos? ¿Cuántas?"), T("количество", "quantity"), Es("¿Cuántos habitantes hay en España? — 47 millones.")],
[Es("¿Qué?"), T("что это (определение)", "what is it (definition)"), Es("¿Qué es el mate? — Una infusión.")],
[Es("¿Qué + sustantivo?"), T("какой (из многих)", "which / what (+ noun)"), Es("¿Qué gran río nace en Perú? — El Amazonas.")],
[Es("¿Cuál? ¿Cuáles?"), T("какой из (с ser)", "which one (with ser)"), Es("¿Cuál es la capital de Venezuela? — Caracas.")],
[Es("¿Quién? ¿Quiénes?"), T("кто", "who"), Es("¿Quién es? — Es mi profesora.")],
[Es("¿Cuándo?"), T("когда", "when"), Es("¿Cuándo es la fiesta?")],
[Es("¿Por qué?"), T("почему", "why"), Es("¿Por qué estudias español?")]
])}
${EsWARN(T("Вопросительные слова <b>всегда с тильдой</b>: qué, cuál, dónde, cómo, cuántos, quién, cuándo. А <b>cuánto</b> согласуется с существительным: <b>cuántos</b> habitantes, <b>cuántas</b> lenguas.", "Question words <b>always carry an accent</b>: qué, cuál, dónde, cómo, cuántos, quién, cuándo. And <b>cuánto</b> agrees with the noun: <b>cuántos</b> habitantes, <b>cuántas</b> lenguas."))}
<h3>${T("Ловушка: qué или cuál?", "The trap: qué or cuál?")}</h3>
${FLOW([[T("Просишь <b>определение</b> — что это такое?", "Asking for a <b>definition</b> — what is it?"), "¿Qué es / son…?", "¿Qué es el tequila? — Una bebida."], [T("Сразу после вопроса идёт <b>существительное</b>?", "Is the question word directly followed by a <b>noun</b>?"), "¿Qué + sustantivo…?", "¿Qué platos típicos hay en Perú?"]], [T("Выбираешь <b>один из известного набора</b> + ser", "Picking <b>one from a known set</b> + ser"), "¿Cuál es / Cuáles son…?", "¿Cuáles son las dos ciudades más pobladas?"])}
${VS({h:"✓", big:Es("¿Cuál es la capital de Uruguay?"), sub:T("столиц много — выбираем одну", "there are many capitals — we pick one"), tone:"good"}, {h:"✗", big:"¿Qué es la capital de Uruguay?", sub:T("так спрашивают, что значит слово «capital»", "this asks what the word “capital” means"), tone:"bad"})}
${EsEN(T("В английском <i>What is the capital?</i> — с <i>what</i>. В испанском здесь <b>¿Cuál es…?</b> «What is…?» переводится как <b>¿Qué es…?</b>, только когда просим определение.", "English says <i>What is the capital?</i>, but Spanish needs <b>¿Cuál es…?</b> here. “What is…?” becomes <b>¿Qué es…?</b> only when asking for a definition."))}
<h3>${T("Ficha страны: вопросы", "A country fact file: questions")}</h3>
${EsQA([["¿Cuál es la capital?", "Tegucigalpa.", ""], ["¿Cómo es el clima?", "Tropical y lluvioso.", ""], ["¿Cuál es la lengua oficial?", "El español.", ""], ["¿Cuál es la moneda?", "El lempira.", ""], ["¿Cuántos habitantes tiene?", "Más de 10 millones.", ""], ["¿Dónde está?", "En Centroamérica.", ""], ["¿Qué es la baleada?", "Un plato típico.", ""]])}
`,
ex:[
{t:"fill", h:T("Вставь qué, cuál, cuáles, dónde, cómo, cuántos или cuántas", "Fill in qué, cuál, cuáles, dónde, cómo, cuántos or cuántas"), items:[
{q:"¿___ está Bolivia? – En América del Sur.", a:["Dónde"]},
{q:"¿___ es el clima de Bolivia? – Es diferente en cada región.", a:["Cómo"]},
{q:"¿___ es el ajiaco? – Es un tipo de sopa.", a:["Qué"]},
{q:"¿___ es la bebida típica? – La chicha.", a:["Cuál"]},
{q:"¿___ son las ciudades más pobladas? – Santa Cruz y La Paz.", a:["Cuáles"]},
{q:"¿___ habitantes tiene el país? – Más de 11 millones.", a:["Cuántos"]},
{q:"¿___ lenguas oficiales hay? – Más de 30.", a:["Cuántas"]}
]},
{t:"mc", h:T("Qué, cuál или cuáles?", "Qué, cuál or cuáles?"), items:[
{q:"¿___ es la bachata?", o:["Qué", "Cuál", "Cuáles"], a:0, e:T("Определение: что это?", "Definition: what is it?")},
{q:"¿___ son las playas más famosas de Cádiz?", o:["Cuáles", "Qué", "Cuál"], a:0},
{q:"¿___ es el país más pequeño de América Central?", o:["Cuál", "Qué", "Cuáles"], a:0},
{q:"¿___ es el flamenco?", o:["Qué", "Cuál", "Cuáles"], a:0},
{q:"¿___ río es el más largo de América del Sur?", o:["Qué", "Cuál", "Cuáles"], a:0, e:T("Qué + существительное.", "Qué + noun.")},
{q:"¿___ es la moneda de México?", o:["Cuál", "Qué", "Cuántas"], a:0}
]},
{t:"match", h:T("Соедини вопрос и ответ", "Match the question and the answer"), pairs:[["¿Qué es el tequila?", "Una bebida."], ["¿Qué son las enchiladas?", "Un plato típico."], ["¿Dónde está Oaxaca?", "En el sur."], ["¿Cuál es la moneda?", "El peso."], ["¿Cuántas lenguas oficiales hay?", "Una: el español."], ["¿Cómo es el clima en la costa?", "Tropical y lluvioso."]]},
{t:"tf", h:T("Правильно или нет?", "Correct or not?"), items:[
{q:"¿Qué es la capital de Chile?", a:false, e:"¿Cuál es la capital de Chile?"},
{q:"¿Cuántas habitantes tiene Madrid?", a:false, e:"¿Cuántos habitantes…?"},
{q:"¿Qué platos típicos hay en Perú?", a:true},
{q:"¿Donde está Tikal?", a:false, e:T("Нужна тильда: ¿Dónde?", "It needs an accent: ¿Dónde?")},
{q:"¿Qué es el mate? — Una infusión.", a:true}
]},
{t:"order", h:T("Собери вопрос", "Build the question"), items:[
{s:"¿Cuál es la capital de Venezuela?", ru:T("Какая столица у Венесуэлы?", "What is the capital of Venezuela?")},
{s:"¿Cuántos habitantes hay en España?", ru:T("Сколько жителей в Испании?", "How many people live in Spain?")},
{s:"¿Qué platos típicos hay en Perú?", ru:T("Какие типичные блюда есть в Перу?", "What typical dishes are there in Peru?")}
]}
]},

{
id:"es3-paises", sec:"book", unit:"3", kind:T("Лексика", "Vocabulary"),
title:"Países, geografía y clima", ru:T("Данные о стране, погода, времена года, стороны света, география", "Country facts, weather, seasons, compass points, geography"), page:"Unidad 3, p. 45, 49, 50",
theory:`
<h3>${T("Данные о стране", "Facts about a country")}</h3>
${EsCARD("Chile", T("ficha del país", "country fact file"), [[Es("la capital"), "Santiago"], [Es("la lengua oficial"), "el español"], [Es("la moneda"), "el peso"], [Es("la población"), T("≈ 19 млн жителей", "≈ 19 million people")], [Es("el clima"), "seco en el norte, templado en el centro y frío en el sur", 1], [Es("un producto importante"), "el cobre"], [Es("un plato típico"), "la empanada"], [Es("lugares de interés turístico"), "los Andes, el desierto de Atacama, la isla de Pascua", 1]])}
${EsEX([["La capital es Santiago.", "Столица — Сантьяго.", "The capital is Santiago."], ["La lengua oficial es el español.", "Официальный язык — испанский.", "The official language is Spanish."], ["Tiene 19 millones de habitantes.", "Там живёт 19 миллионов человек.", "It has 19 million inhabitants."], ["Un plato típico es la empanada.", "Типичное блюдо — эмпанада.", "A typical dish is the empanada."]])}
<h3>${T("Погода: hace, hay, está или сам глагол", "Weather: hace, hay, está or a verb on its own")}</h3>
<div class="bigc">
<div class="bc m"><span class="big fr">hace…</span><h5>${T("hace + сущ.", "hace + noun")}</h5><span class="ex fr">Hace calor. Hace frío. Hace sol. Hace viento. Hace buen tiempo.</span></div>
<div class="bc f"><span class="big fr">llueve · nieva</span><h5>${T("отдельный глагол", "a verb on its own")}</h5><span class="ex fr">Llueve mucho. En invierno nieva.</span></div>
<div class="bc p"><span class="big fr">está · hay</span><h5>${T("облачно", "cloudy")}</h5><span class="ex fr">Está nublado. Hay nubes.</span></div>
</div>
${EsEN(T("В английском <i>it is hot / it is raining</i>. В испанском нет «it»: <b>Hace calor</b>, <b>Llueve</b>. И «жарко» — через <b>hace</b> («делает»), а не через ser/estar.", "English says <i>it is hot / it is raining</i>. Spanish has no “it”: <b>Hace calor</b>, <b>Llueve</b>. And heat uses <b>hace</b> (“makes”), not ser/estar."))}
<h3>${T("Климат", "Climate")}</h3>
${FX(["El clima es", "+", "!templado · tropical · frío · árido · seco · cálido · húmedo"])}
${EsEX([["En verano hace sol y no hace mucho frío.", "Летом солнечно и не очень холодно.", "In summer it's sunny and not very cold."], ["El clima es muy seco y llueve muy poco. – ¡Es el desierto del Sáhara!", "Климат очень сухой, дождей почти нет. – Это пустыня Сахара!", "The climate is very dry and it hardly rains. – It's the Sahara!"]])}
<h3>${T("Времена года", "Seasons")}</h3>
<div class="seasons"><div class="ss s0"><h5><span class="fr">el invierno</span><small>${T("зима", "winter")}</small></h5><p>${Es("Hace frío. Nieva.")}</p></div><div class="ss s1"><h5><span class="fr">la primavera</span><small>${T("весна", "spring")}</small></h5><p>${Es("Llueve un poco.")}</p></div><div class="ss s2"><h5><span class="fr">el verano</span><small>${T("лето", "summer")}</small></h5><p>${Es("Hace calor y sol.")}</p></div><div class="ss s3"><h5><span class="fr">el otoño</span><small>${T("осень", "autumn")}</small></h5><p>${Es("Hace viento.")}</p></div></div>
${EsNOTE(T("В Чили или Аргентине времена года наоборот: в декабре там <b>verano</b>.", "In Chile or Argentina the seasons are reversed: December is <b>verano</b> there."))}
<h3>${T("Стороны света", "Compass points")}</h3>
<div class="compass">${[["noroeste", "nw"], ["norte", "n"], ["noreste", "ne"], ["oeste", "w"], ["", "c"], ["este", "e"], ["suroeste", "sw"], ["sur", "s"], ["sureste", "se"]].map(([w, c]) => c === "c" ? `<span class="cp-c">✦</span>` : `<span class="cp ${c}"><span class="fr">${w}</span></span>`).join("")}</div>
${EsEX([["Santiago de Compostela está en el noroeste de España.", "Сантьяго-де-Компостела — на северо-западе Испании.", "Santiago de Compostela is in the north-west of Spain."], ["Los Andes están en el oeste de Argentina.", "Анды — на западе Аргентины.", "The Andes are in the west of Argentina."]])}
<h3>${T("География", "Geography")}</h3>
<div class="bigc">${[["el volcán", T("вулкан", "volcano")], ["la montaña", T("гора", "mountain")], ["la cordillera", T("горный хребет", "mountain range")], ["el desierto", T("пустыня", "desert")], ["el río", T("река", "river")], ["el lago", T("озеро", "lake")], ["la selva", T("джунгли, тропический лес", "jungle, rainforest")], ["el bosque", T("лес", "forest")], ["la costa", T("побережье", "coast")], ["la península", T("полуостров", "peninsula")], ["la isla", T("остров", "island")], ["la catarata", T("водопад", "waterfall")]].map(([w, h]) => `<div class="bc ${w.startsWith("el") ? "m" : "f"}"><span class="big fr" style="font-size:20px">${w}</span><h5>${h}</h5></div>`).join("")}</div>
${TBL([T("Континенты", "Continents"), T("Океаны", "Oceans")], [[Es("Europa · África · América · Asia · Oceanía"), Es("el océano Atlántico · el océano Pacífico · el océano Índico")]])}
${EsNOTE(T("Цвет карточек — род слова: <span class=\"g-m\">мужской</span> или <span class=\"g-f\">женский</span>. <b>El volcán</b> — с тильдой, а во множественном числе тильда пропадает: <b>los volcanes</b>.", "The card colour shows the gender: <span class=\"g-m\">masculine</span> or <span class=\"g-f\">feminine</span>. <b>El volcán</b> has an accent, which disappears in the plural: <b>los volcanes</b>."))}
`,
ex:[
{t:"match", h:T("Погода: соедини фразу с переводом", "Weather: match the phrase with its meaning"), pairs:[["Hace calor.", T("Жарко.", "It's hot.")], ["Hace frío.", T("Холодно.", "It's cold.")], ["Llueve.", T("Идёт дождь.", "It's raining.")], ["Nieva.", T("Идёт снег.", "It's snowing.")], ["Hace viento.", T("Ветрено.", "It's windy.")], ["Está nublado.", T("Облачно.", "It's cloudy.")], ["Hace sol.", T("Солнечно.", "It's sunny.")]]},
{t:"sort", h:T("Какой глагол? hace, está, hay или es (климат)", "Which verb? hace, está, hay or es (climate)"), cats:["hace", "está", "hay", "es"], items:[["… calor", 0], ["… frío", 0], ["… viento", 0], ["… nublado", 1], ["… nubes", 2], ["… (un clima) tropical", 3], ["… (un clima) seco", 3], ["… sol", 0], ["… (un clima) húmedo", 3]]},
{t:"tf", h:T("Аргентина: правда или нет?", "Argentina: true or false?"), items:[
{q:"Argentina tiene más de 75 millones de habitantes.", a:false, e:T("Примерно 46 миллионов.", "About 46 million.")},
{q:"En el sur de Argentina hay muchos lagos.", a:true},
{q:"El clima es tropical en todo el país.", a:false, e:T("На юге очень холодно.", "The south is very cold.")},
{q:"Los Andes están en el oeste.", a:true},
{q:"El mate es una bebida típica.", a:true},
{q:"Hay dos lenguas oficiales: el inglés y el español.", a:false, e:T("Одна — испанский.", "Just one: Spanish.")},
{q:"Boca Juniors y River Plate son dos equipos de béisbol.", a:false, e:T("Это футбольные клубы.", "They're football clubs.")}
]},
{t:"fill", h:T("Вставь слово: capital, isla, río, cordillera, montaña, bebida", "Fill in: capital, isla, río, cordillera, montaña, bebida"), items:[
{q:"El Nilo es el ___ más largo de África.", a:["río"]},
{q:"Cuba es una ___ del Caribe.", a:["isla"]},
{q:"El Everest es la ___ más alta del mundo.", a:["montaña"]},
{q:"La ___ de los Andes está en Sudamérica.", a:["cordillera"]},
{q:"Lima es la ___ de Perú.", a:["capital"]},
{q:"El pisco es una ___ típica de Perú y de Chile.", a:["bebida"]}
]},
{t:"mc", h:T("Выбери правильный ответ", "Choose the right answer"), items:[
{q:T("Противоположность «norte»:", "The opposite of “norte”:"), o:["sur", "este", "oeste"], a:0},
{q:T("Сезон после invierno:", "The season after invierno:"), o:["la primavera", "el verano", "el otoño"], a:0},
{q:"En invierno ___ frío.", o:["hace", "es", "hay"], a:0},
{q:"En Bilbao ___ mucho.", o:["llueve", "hace lluvia", "es lluvia"], a:0},
{q:"¿Cuál es la moneda de México?", o:["el peso", "el euro", "el dólar"], a:0},
{q:"El Aconcagua es ___ más alta de América.", o:["la montaña", "el río", "la isla"], a:0}
]},
{t:"cards", h:T("Карточки: география", "Flashcards: geography"), items:[["el volcán", T("вулкан", "volcano")], ["la cordillera", T("горный хребет", "mountain range")], ["el desierto", T("пустыня", "desert")], ["el lago", T("озеро", "lake")], ["la selva", T("тропический лес", "rainforest")], ["el bosque", T("лес", "forest")], ["la costa", T("побережье", "coast")], ["la península", T("полуостров", "peninsula")], ["la catarata", T("водопад", "waterfall")], ["la moneda", T("валюта", "currency")], ["la población", T("население", "population")], ["el noroeste", T("северо-запад", "north-west")]]}
]}
]);
