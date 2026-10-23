/* =========================================================
   ESPAÑOL — Unidad 4 «¿Cuál prefieres?» (Aula internacional Plus 1, p. 56–69)
   Темы собираются как и остальные части: ES_PARTS.push(() => [...]).
   У каждого упражнения w:[ru, en] — «почему так» (заносится в WHY).
   Объяснения не сравнивают испанский с русским; сравнения с английским — через EsEN().
   ========================================================= */
ES_UNITS["4"] = {es:"¿Cuál prefieres?", ru:"Покупки и одежда", en:"Shopping and clothes"};
const ES4_COLOR = (name, cls) => `<span class="es-col ${cls}"></span>${Es(name)}`;

ES_PARTS.push(() => { const L4 = [

/* ---------- 1. En la tienda ---------- */
{
id:"es4-tiendas", sec:"book", unit:"4", kind:T("Общение", "Communication"),
title:"¿Qué desea?", ru:T("Покупки в магазине: спросить цену, выбрать, заплатить", "Shopping: asking the price, choosing, paying"), page:"Unidad 4, p. 57, 63, 65",
theory:`
<h3>${T("Где делать покупки", "Where to shop")}</h3>
${EsEX([["ir de compras", "ходить за покупками", "to go shopping"], ["una tienda · un centro comercial · un supermercado", "магазин · торговый центр · супермаркет", "a shop · a shopping centre · a supermarket"], ["un mercado · un mercadillo", "рынок · барахолка, уличный рынок", "a market · a street market"], ["comprar por internet · ropa de segunda mano", "покупать в интернете · одежда секонд-хенд", "to buy online · second-hand clothes"]])}
<h3>${T("Диалог в магазине", "A conversation in a shop")}</h3>
${TBL([T("Продавец", "Shop assistant"), T("Покупатель", "Customer")], [
[Es("Hola. / Buenos días. / Buenas tardes."), Es("Hola. / Buenos días. / Buenas tardes.")],
[Es("¿Qué desea? / ¿Qué quería?"), Es("Quería unos zapatos (para hombre / para mujer).") + "<br>" + Es("¿Cuánto cuestan estos (de aquí)?")],
[Es("45 euros."), Es("Son un poco caros, ¿no? ¿Tiene algo más barato?")],
[Es("Sí, tenemos estos."), Es("(Pues) me llevo los negros.")],
[Es("Muy bien. ¿(Desea) alguna cosa más?"), Es("No, gracias.")],
[Es("Pues (son) 45 euros, por favor."), Es("Aquí tiene.")],
[Es("Muchas gracias."), Es("Gracias.")]
])}
${EsNOTE(T("<b>Quería…</b> — вежливая форма: «я хотел(а) бы…». В магазине продавец и покупатель обычно говорят друг другу <b>usted</b>, поэтому глагол в 3-м лице: <b>¿Qué desea?</b>, <b>¿Tiene algo más barato?</b>", "<b>Quería…</b> is the polite way to say «I’d like…». In a shop the assistant and the customer usually use <b>usted</b>, so the verb is in the 3rd person: <b>¿Qué desea?</b>, <b>¿Tiene algo más barato?</b>"))}
<h3>${T("Сколько стоит: cuesta или cuestan", "How much: cuesta or cuestan")}</h3>
${VS({h:T("одна вещь", "one thing"), big:Es("¿Cuánto cuesta este vestido?"), sub:T("ед. ч. → cuesta", "singular → cuesta")}, {h:T("несколько вещей", "several things"), big:Es("¿Cuánto cuestan estos vestidos?"), sub:T("мн. ч. → cuestan", "plural → cuestan")})}
${EsWARN(T("Глагол <b>costar</b> меняет <b>o → ue</b>: <b>cuesta, cuestan</b>. Согласуется с вещью, а не с покупателем: <b>Las botas cuestan 60 euros.</b>", "The verb <b>costar</b> changes <b>o → ue</b>: <b>cuesta, cuestan</b>. It agrees with the item, not the shopper: <b>Las botas cuestan 60 euros.</b>"))}
<h3>${T("Цены", "Prices")}</h3>
${EsEX([["19,39 € — diecinueve euros con treinta y nueve", "в цене запятая; центы часто через «con»", "prices use a comma; cents often follow «con»"], ["10,90 € — diez con noventa", "в разговоре «euros» часто опускают", "in speech «euros» is often dropped"]])}
<h3>${T("Me llevo… — я беру", "Me llevo… — I’ll take")}</h3>
<p>${T(`<b>llevarse</b> — «взять, купить» (выбрать одну вещь из нескольких): ${Es("Me llevo este jersey rojo. Es más barato que el verde.")}`, `<b>llevarse</b> means «to take, to buy» (choosing one of several things): ${Es("Me llevo este jersey rojo. Es más barato que el verde.")}`)}</p>
${EsEN(T("<b>Me llevo…</b> = <i>I’ll take…</i>; <b>¿Tiene algo más barato?</b> = <i>Do you have anything cheaper?</i>", "<b>Me llevo…</b> = <i>I’ll take…</i>; <b>¿Tiene algo más barato?</b> = <i>Do you have anything cheaper?</i>"))}
`,
ex:[
{t:"sort", h:T("Кто это говорит?", "Who says it?"), cats:[T("продавец", "shop assistant"), T("покупатель", "customer")], w:[
"Продавец спрашивает, что нужно, называет цену и предлагает ещё что-то; покупатель просит (Quería…), спрашивает цену, выбирает (Me llevo…) и платит (Aquí tiene).",
"The assistant asks what you need, gives the price and offers something else; the customer asks (Quería…), asks the price, chooses (Me llevo…) and pays (Aquí tiene)."], items:[
["¿Qué desea?", 0], ["¿Desea alguna cosa más?", 0], ["Sí, tenemos estos.", 0], ["Pues son 45 euros, por favor.", 0],
["Quería una crema solar.", 1], ["¿Cuánto cuestan estos?", 1], ["¿Tiene algo más barato?", 1], ["Me llevo los negros.", 1], ["Aquí tiene.", 1]]},
{t:"mc", h:T("cuesta или cuestan?", "cuesta or cuestan?"), w:[
"Одна вещь — cuesta, несколько — cuestan. Смотри на существительное и на este/estos.",
"One thing — cuesta, several — cuestan. Look at the noun and at este/estos."], items:[
{q:"¿Cuánto ___ estos zapatos?", o:["cuestan", "cuesta"], a:0},
{q:"Esta camiseta de aquí, ¿cuánto ___?", o:["cuesta", "cuestan"], a:0},
{q:"¿Cuánto ___ las gafas de sol?", o:["cuestan", "cuesta"], a:0},
{q:"El bolso ___ 35 euros.", o:["cuesta", "cuestan"], a:0},
{q:"Los vaqueros ___ 50 euros.", o:["cuestan", "cuesta"], a:0}
]},
{t:"match", h:T("Соедини реплики", "Match the lines"), w:[
"Типичные пары в магазине: ¿Qué desea? → Quería…; ¿Algo más? → No, gracias; ¿Cuánto cuesta? → цена; Son 20 euros → Aquí tiene.",
"Typical shop pairs: ¿Qué desea? → Quería…; ¿Algo más? → No, gracias; ¿Cuánto cuesta? → a price; Son 20 euros → Aquí tiene."], pairs:[
["¿Qué desea?", "Quería una camiseta blanca."], ["¿Cuánto cuesta esta?", "Esta, 19,39 euros."], ["¿Desea alguna cosa más?", "No, gracias."], ["Son 20 euros, por favor.", "Aquí tiene."], ["Son un poco caros, ¿no?", "Tenemos estos más baratos."]]},
{t:"mc", h:T("Что сказать?", "What do you say?"), w:[
"Просьба — Quería…; дорого — ¿Tiene algo más barato?; выбор — Me llevo…; отдаёшь деньги — Aquí tiene.",
"Asking — Quería…; too expensive — ¿Tiene algo más barato?; choosing — Me llevo…; handing over money — Aquí tiene."], items:[
{q:T("Ты хочешь вежливо попросить солнцезащитный крем.", "You want to politely ask for sun cream."), o:["Quería una crema solar.", "Quiero crema solar, ¡ya!", "¿Qué desea crema solar?"], a:0},
{q:T("Вещь слишком дорогая.", "The item is too expensive."), o:["¿Tiene algo más barato?", "¿Tiene algo más caro?", "¿Cuánto cuestan?"], a:0},
{q:T("Ты выбрал чёрные ботинки.", "You’ve chosen the black boots."), o:["Me llevo las negras.", "Llevo negras.", "Me lleva las negras."], a:0, e:T("las botas → las negras (ж. р., мн. ч.).", "las botas → las negras (fem. pl.).")},
{q:T("Ты отдаёшь деньги продавцу.", "You hand the money to the assistant."), o:["Aquí tiene.", "Aquí está usted.", "Tenga gracias."], a:0}
]},
{t:"order", h:T("Собери фразу", "Build the sentence"), w:[
"Вопрос о цене: ¿Cuánto cuesta(n) + указательное + вещь?; просьба: Quería + вещь.",
"Price question: ¿Cuánto cuesta(n) + demonstrative + item?; request: Quería + item."], items:[
{s:"¿Cuánto cuestan estos zapatos?", ru:T("Сколько стоят эти туфли?", "How much are these shoes?")},
{s:"Quería una camiseta de manga corta.", ru:T("Я бы хотел футболку с коротким рукавом.", "I’d like a short-sleeved T-shirt.")},
{s:"Pues me llevo la azul.", ru:T("Тогда я беру синюю.", "Then I’ll take the blue one.")}
]}
]},

/* ---------- 2. Ropa, accesorios y colores ---------- */
{
id:"es4-ropa", sec:"book", unit:"4", kind:T("Лексика", "Vocabulary"),
title:"Ropa, accesorios y colores", ru:T("Одежда, аксессуары, цвета и глагол llevar", "Clothes, accessories, colours and the verb llevar"), page:"Unidad 4, p. 58–60, 64",
theory:`
<h3>${T("Одежда и аксессуары", "Clothes and accessories")}</h3>
${TBL([T("Одежда", "Clothes"), T("Обувь", "Shoes"), T("Аксессуары", "Accessories")], [
[Es("un jersey, una camiseta, una camisa"), Es("unos zapatos"), Es("un bolso")],
[Es("unos pantalones, unos vaqueros"), Es("unas zapatillas deportivas"), Es("unas gafas (de sol)")],
[Es("una falda, un vestido"), Es("unas botas"), Es("un gorro, una bufanda")],
[Es("una chaqueta, un abrigo"), Es("unas sandalias"), Es("un cinturón, una pulsera")],
[Es("un bañador, ropa interior"), "", Es("una maleta")]
])}
${EsNOTE(T("Многие вещи «парные» и всегда во множественном числе: <b>unos pantalones, unos vaqueros, unas gafas</b> — даже если это одна вещь.", "Many items are «pairs» and always plural: <b>unos pantalones, unos vaqueros, unas gafas</b> — even for a single item."))}
<h3>${T("Цвета согласуются с вещью", "Colours agree with the item")}</h3>
${TBL([T("Тип", "Type"), T("Цвета", "Colours"), T("Пример", "Example")], [
[T("4 формы: -o / -a / -os / -as", "4 forms: -o / -a / -os / -as"), ES4_COLOR("blanco", "c-w") + " " + ES4_COLOR("negro", "c-k") + " " + ES4_COLOR("rojo", "c-r") + " " + ES4_COLOR("amarillo", "c-y"), Es("una chaqueta roja, unos pantalones negros")],
[T("2 формы: + -s", "2 forms: + -s"), ES4_COLOR("verde", "c-g") + " " + ES4_COLOR("naranja", "c-o") + " " + ES4_COLOR("rosa", "c-p") + " " + ES4_COLOR("lila", "c-l"), Es("una falda verde, unas faldas verdes")],
[T("2 формы: + -es", "2 forms: + -es"), ES4_COLOR("azul", "c-b") + " " + ES4_COLOR("gris", "c-gr") + " " + ES4_COLOR("marrón", "c-br"), Es("unas sandalias azules, dos jerséis marrones")],
[T("не меняется", "never changes"), ES4_COLOR("beis", "c-be"), Es("un abrigo beis, unas botas beis")]
])}
${EsWARN(T("Цвет стоит <b>после</b> существительного: <b>una camiseta blanca</b>. <b>marrón → marrones</b> (тильда исчезает). Вопрос: <b>¿De qué color es el jersey?</b> — <b>Amarillo.</b>", "The colour goes <b>after</b> the noun: <b>una camiseta blanca</b>. <b>marrón → marrones</b> (the accent goes). The question: <b>¿De qué color es el jersey?</b> — <b>Amarillo.</b>"))}
${EsEN(T("В английском цвет стоит перед существительным и не меняется: <i>a red jacket, red sandals</i>. В испанском — после и согласуется: <b>una chaqueta roja, unas sandalias rojas</b>.", "In English the colour comes before the noun and never changes: <i>a red jacket, red sandals</i>. In Spanish it comes after and agrees: <b>una chaqueta roja, unas sandalias rojas</b>."))}
<h3>${T("Как описать вещь", "Describing an item")}</h3>
${TBL([T("Характеристика", "Feature"), T("Пример", "Example")], [
[T("рукав", "sleeves"), Es("de manga corta / de manga larga / de tirantes")],
[T("рисунок", "pattern"), Es("de rayas, de cuadros, estampada")],
[T("оценка", "opinion"), Es("bonita, fea, elegante, clásica, moderna, práctica, original, informal")],
[T("цена", "price"), Es("cara, barata")]
])}
<h3>${T("llevar и llevarse", "llevar and llevarse")}</h3>
${TBL([T("Значение", "Meaning"), T("Пример", "Example")], [
[T("быть одетым во что-то", "to wear"), Es("Hoy llevo un vestido rojo, pero normalmente llevo vaqueros.")],
[T("иметь при себе, брать с собой", "to carry, to take with you"), Es("¿Llevas dinero? Necesito 10 euros.")],
[T("llevarse — купить (выбрать)", "llevarse — to buy (choose)"), Es("Me llevo este jersey rojo.")]
])}
`,
ex:[
{t:"fill", h:T("Согласуй цвет с вещью", "Make the colour agree"), w:[
"Цвет на -o меняется по роду и числу (roja, negros); на -e и согласную — только по числу (verdes, azules, grises, marrones); beis не меняется.",
"Colours in -o change for gender and number (roja, negros); in -e or a consonant only for number (verdes, azules, grises, marrones); beis never changes."], items:[
{q:"una chaqueta ___ (rojo)", a:["roja"]},
{q:"unos pantalones ___ (negro)", a:["negros"]},
{q:"unas sandalias ___ (azul)", a:["azules"]},
{q:"una falda ___ (verde)", a:["verde"]},
{q:"dos jerséis ___ (marrón)", a:["marrones"]},
{q:"unas botas ___ (blanco)", a:["blancas"]},
{q:"unos zapatos ___ (gris)", a:["grises"]},
{q:"un abrigo ___ (beis)", a:["beis"]}
]},
{t:"sort", h:T("Одежда, обувь или аксессуар?", "Clothes, shoes or accessory?"), cats:[T("одежда", "clothes"), T("обувь", "shoes"), T("аксессуары", "accessories")], w:[
"Обувь: zapatos, botas, sandalias, zapatillas. Аксессуары носят «в дополнение»: bolso, gafas, gorro, bufanda, cinturón, pulsera.",
"Shoes: zapatos, botas, sandalias, zapatillas. Accessories are «extras»: bolso, gafas, gorro, bufanda, cinturón, pulsera."], items:[
["el jersey", 0], ["la falda", 0], ["los vaqueros", 0], ["el abrigo", 0], ["las botas", 1], ["las sandalias", 1], ["las zapatillas deportivas", 1], ["el bolso", 2], ["las gafas de sol", 2], ["la bufanda", 2], ["el cinturón", 2]]},
{t:"mc", h:T("Что значит llevar здесь?", "What does llevar mean here?"), w:[
"llevar = носить (одежду) или иметь при себе; llevarse = купить, выбрать.",
"llevar = to wear (clothes) or to carry; llevarse = to buy, to choose."], items:[
{q:"Hoy llevo un vestido rojo.", o:[T("я одета в…", "I’m wearing…"), T("я покупаю…", "I’m buying…"), T("я несу с собой…", "I’m carrying…")], a:0, keep:true},
{q:"¿Llevas dinero?", o:[T("у тебя есть с собой…?", "have you got … on you?"), T("ты носишь…?", "are you wearing…?"), T("ты покупаешь…?", "are you buying…?")], a:0, keep:true},
{q:"Me llevo este jersey.", o:[T("я беру (покупаю)…", "I’ll take (buy)…"), T("я ношу…", "I wear…"), T("я ненавижу…", "I hate…")], a:0, keep:true}
]},
{t:"match", h:T("Описание ↔ вещь", "Description ↔ item"), w:[
"de manga corta / larga — про рукав; de tirantes — на бретелях; de rayas — в полоску; de cuadros — в клетку.",
"de manga corta / larga — about sleeves; de tirantes — with straps; de rayas — striped; de cuadros — checked."], pairs:[
["una camiseta de tirantes", T("майка на бретелях", "a strappy top")], ["una camisa de cuadros", T("рубашка в клетку", "a checked shirt")], ["un jersey de rayas", T("свитер в полоску", "a striped jumper")], ["una camisa de manga larga", T("рубашка с длинным рукавом", "a long-sleeved shirt")], ["un vestido estampado", T("платье с принтом", "a patterned dress")]]},
{t:"cards", h:T("Карточки: одежда", "Flashcards: clothes"), w:[
"Запоминай вещь с артиклем: род подскажет, как согласовать цвет (la falda roja, el jersey rojo).",
"Learn each item with its article: the gender tells you how the colour agrees (la falda roja, el jersey rojo)."], items:[
["el jersey", T("свитер", "jumper")], ["la camiseta", T("футболка", "T-shirt")], ["la camisa", T("рубашка", "shirt")], ["los pantalones", T("брюки", "trousers")], ["los vaqueros", T("джинсы", "jeans")], ["la falda", T("юбка", "skirt")], ["el vestido", T("платье", "dress")], ["la chaqueta", T("куртка, пиджак", "jacket")], ["el abrigo", T("пальто", "coat")], ["los zapatos", T("туфли, обувь", "shoes")], ["las botas", T("сапоги, ботинки", "boots")], ["el bolso", T("сумка", "bag")], ["las gafas", T("очки", "glasses")], ["la bufanda", T("шарф", "scarf")], ["el gorro", T("шапка", "hat")], ["el bañador", T("купальник, плавки", "swimsuit")]]}
]},

/* ---------- 3. Los números a partir de 100 ---------- */
{
id:"es4-numeros", sec:"book", unit:"4", kind:T("Лексика", "Vocabulary"),
title:"Los números a partir de 100", ru:T("Сотни, тысячи, миллионы и согласование по роду", "Hundreds, thousands, millions and gender agreement"), page:"Unidad 4, p. 63–64",
theory:`
${TBL([T("Число", "Number"), "Español", T("Число", "Number"), "Español"], [
["100", Es("cien"), "1000", Es("mil")],
["101", Es("ciento uno / una"), "2000", Es("dos mil")],
["200", Es("doscientos / as"), "10 000", Es("diez mil")],
["300", Es("trescientos / as"), "100 000", Es("cien mil")],
["400", Es("cuatrocientos / as"), "200 000", Es("doscientos / as mil")],
["500", Es("<b>quinientos</b> / as"), "1 000 000", Es("un millón")],
["600", Es("seiscientos / as"), "2 000 000", Es("dos millones")],
["700", Es("<b>setecientos</b> / as"), "1 000 000 000", Es("mil millones")],
["800", Es("ochocientos / as"), "", ""],
["900", Es("<b>novecientos</b> / as"), "", ""]
])}
${FLOW([[T("Ровно 100 или 100 перед <b>mil / millones</b>?", "Exactly 100, or 100 before <b>mil / millones</b>?"), "cien", "cien euros · cien mil"]], [T("Больше 100: 101–199", "Above 100: 101–199"), "ciento…", "ciento veinte · ciento uno"])}
${EsWARN(T("Сотни согласуются с существительным: <b>doscientos euros</b>, но <b>doscientas personas</b>, <b>quinientas libras</b>. А <b>mil</b> не меняется: <b>dos mil, tres mil</b>.", "Hundreds agree with the noun: <b>doscientos euros</b>, but <b>doscientas personas</b>, <b>quinientas libras</b>. <b>mil</b> never changes: <b>dos mil, tres mil</b>."))}
${EsNOTE(T("Неправильные формы — запомни: <b>quinientos</b> (500), <b>setecientos</b> (700), <b>novecientos</b> (900). <b>y</b> ставится только между десятками и единицами: <b>ciento veinte</b>, но <b>ciento cuarenta y cinco</b>.", "Irregular forms to learn: <b>quinientos</b> (500), <b>setecientos</b> (700), <b>novecientos</b> (900). <b>y</b> only goes between tens and units: <b>ciento veinte</b>, but <b>ciento cuarenta y cinco</b>."))}
${EsEX([["3 453 276 = tres millones cuatrocientos cincuenta y tres mil doscientos setenta y seis", "длинное число читается группами: миллионы — тысячи — остальное", "a long number is read in groups: millions — thousands — the rest"], ["un millón de habitantes", "после millón — de", "after millón — de"]])}
${EsEN(T("В английском <i>one hundred and twenty</i> — с <i>and</i>. В испанском <b>y</b> только между десятками и единицами: <b>ciento veinte</b>, <b>ciento veintitrés</b>.", "English says <i>one hundred and twenty</i>. In Spanish <b>y</b> only goes between tens and units: <b>ciento veinte</b>, <b>ciento veintitrés</b>."))}
`,
ex:[
{t:"mc", h:T("Как это читается?", "How is it read?"), w:[
"100 = cien, 101–199 = ciento…; 500 quinientos, 700 setecientos, 900 novecientos; y — только между десятками и единицами.",
"100 = cien, 101–199 = ciento…; 500 quinientos, 700 setecientos, 900 novecientos; y only between tens and units."], items:[
{q:"100", o:["cien", "ciento", "cientos"], a:0},
{q:"150", o:["ciento cincuenta", "cien cincuenta", "ciento y cincuenta"], a:0},
{q:"500", o:["quinientos", "cincocientos", "quiñentos"], a:0},
{q:"700", o:["setecientos", "sietecientos", "setentacientos"], a:0},
{q:"900", o:["novecientos", "nuevecientos", "noventacientos"], a:0},
{q:"2000", o:["dos mil", "dos miles", "doscientos mil"], a:0}
]},
{t:"fill", h:T("Напиши словами (обрати внимание на род)", "Write in words (watch the gender)"), w:[
"Сотни согласуются: doscientos euros, но doscientas libras / personas. mil не меняется.",
"Hundreds agree: doscientos euros, but doscientas libras / personas. mil never changes."], items:[
{q:"200 € → ___ euros", a:["doscientos"]},
{q:"200 £ → ___ libras", a:["doscientas"], e:T("libra — ж. р.", "libra is feminine.")},
{q:"500 personas → ___ personas", a:["quinientas"]},
{q:"300 € → ___ euros", a:["trescientos"]},
{q:"100 000 → ___ mil", a:["cien"]},
{q:"1 000 000 → un ___", a:["millón"]}
]},
{t:"mc", h:T("Выбери правильную запись", "Choose the correct version"), w:[
"y стоит только между десятками и единицами; cien перед mil и millones; mil без -es.",
"y only goes between tens and units; cien before mil and millones; mil takes no -es."], items:[
{q:"245", o:["doscientos cuarenta y cinco", "doscientos y cuarenta y cinco", "dos cientos cuarenta cinco"], a:0},
{q:"120", o:["ciento veinte", "cien veinte", "ciento y veinte"], a:0},
{q:"3500", o:["tres mil quinientos", "tres miles quinientos", "tres mil cincocientos"], a:0},
{q:"100 000", o:["cien mil", "ciento mil", "cientos mil"], a:0},
{q:"1 200 000", o:["un millón doscientos mil", "un mil doscientos mil", "un millón doscientas mil"], a:0}
]},
{t:"listen", h:T("Послушай и запиши цифрами", "Listen and write the number"), w:[
"Слушай по группам: сначала тысячи (mil), потом сотни, потом десятки и единицы.",
"Listen in groups: first the thousands (mil), then the hundreds, then tens and units."], items:[
{say:"ciento treinta", a:["130"]}, {say:"cuatrocientos cincuenta", a:["450"]}, {say:"setecientos ochenta y dos", a:["782"]}, {say:"novecientos noventa", a:["990"]}, {say:"dos mil quinientos", a:["2500"]}, {say:"un millón", a:["1000000","1 000 000"]}]}
]},

/* ---------- 4. Demostrativos ---------- */
{
id:"es4-demostrativos", sec:"book", unit:"4", kind:T("Грамматика", "Grammar"),
title:"Este, esta, esto · el azul, la de rayas", ru:T("Указательные слова и как не повторять существительное", "Demonstratives and how to avoid repeating the noun"), page:"Unidad 4, p. 61–62, 65",
theory:`
<h3>${T("Указательные слова", "Demonstratives")}</h3>
${GRID(["", T("ед. ч.", "singular"), T("мн. ч.", "plural")], [
[T("мужской", "masc."), "m:este jersey", "m:estos zapatos"],
[T("женский", "fem."), "f:esta camiseta", "f:estas sandalias"],
[T("«это» (неизвестно что)", "«this» (unknown thing)"), "esto", ""]
])}
${EsEX([["– Estas botas, ¿cuánto cuestan? – 40 euros. – ¿Y estas?", "существительное понятно — его можно не повторять", "the noun is clear — you can drop it"], ["¡Este jersey es precioso! – Pues yo prefiero este.", "", ""], ["¿Esto qué es: una camiseta o un vestido?", "esto — когда не знаем или не называем, что это", "esto — when we don’t know or don’t name what it is"]])}
${EsWARN(T("<b>esto</b> не меняется и никогда не стоит перед существительным: ✗ <s>esto jersey</s> → ✓ <b>este jersey</b>.", "<b>esto</b> never changes and never goes before a noun: ✗ <s>esto jersey</s> → ✓ <b>este jersey</b>."))}
<h3>${T("el / la / los / las + прилагательное или de + сущ.", "el / la / los / las + adjective or de + noun")}</h3>
<p>${T("Если по контексту понятно, о чём речь, существительное можно опустить — артикль и прилагательное остаются и согласуются с ним:", "If the context makes clear what we mean, we can drop the noun — the article and adjective stay and still agree with it:")}</p>
${TBL([T("Полная фраза", "Full phrase"), T("Сокращённо", "Short")], [
[Es("el coche nuevo"), Es("→ <b>el nuevo</b>")],
[Es("la camiseta azul"), Es("→ <b>la azul</b>")],
[Es("los zapatos negros"), Es("→ <b>los negros</b>")],
[Es("las maletas negras"), Es("→ <b>las negras</b>")],
[Es("la camiseta de tirantes"), Es("→ <b>la de</b> tirantes")]
])}
${EsEX([["¿Qué coche usamos: el nuevo o el viejo?", "", ""], ["Luis quiere comprar la camiseta verde y Julia, la azul.", "", ""], ["Para mí, la marrón, de manga corta. Para Julia, la de tirantes.", "", ""]])}
${EsEN(T("Похоже на английское <i>the blue one</i>, только без <i>one</i>: <b>la azul</b> = <i>the blue one</i>, <b>la de rayas</b> = <i>the striped one</i>.", "Like English <i>the blue one</i>, but without <i>one</i>: <b>la azul</b> = <i>the blue one</i>, <b>la de rayas</b> = <i>the striped one</i>."))}
`,
ex:[
{t:"mc", h:T("este, esta, estos или estas?", "este, esta, estos or estas?"), w:[
"Согласуй с существительным: jersey, bolso — este; camiseta, falda — esta; zapatos — estos; sandalias, gafas — estas.",
"Agree with the noun: jersey, bolso — este; camiseta, falda — esta; zapatos — estos; sandalias, gafas — estas."], items:[
{q:"¿Cuánto cuesta ___ jersey?", o:["este", "esta", "esto"], a:0},
{q:"___ sandalias son muy bonitas.", o:["Estas", "Estos", "Esta"], a:0},
{q:"Me llevo ___ camiseta.", o:["esta", "este", "esto"], a:0},
{q:"___ zapatos son caros.", o:["Estos", "Estas", "Esto"], a:0},
{q:"¿___ qué es: una falda o un vestido?", o:["Esto", "Este", "Esta"], a:0, e:T("Не знаем, что это → esto.", "We don’t know what it is → esto.")},
{q:"¿Te gustan ___ gafas?", o:["estas", "estos", "esta"], a:0}
]},
{t:"mc", h:T("О чём эта фраза?", "What is this sentence about?"), w:[
"Артикль и окончание прилагательного показывают род и число: la azul — ж. ед., los verdes — м. мн., las rojas — ж. мн., el negro — м. ед.",
"The article and adjective ending show gender and number: la azul — fem. sing., los verdes — masc. pl., las rojas — fem. pl., el negro — masc. sing."], items:[
{q:"La azul es muy pequeña.", o:["una camiseta", "un jersey", "unas sandalias"], a:0},
{q:"Los verdes son muy bonitos.", o:["unos pantalones", "unas sandalias", "un bañador"], a:0},
{q:"Las más caras son las rojas.", o:["unas sandalias", "unos zapatos", "unos jerséis"], a:0},
{q:"¡El negro es precioso!", o:["un bañador", "unas gafas de sol", "una camiseta"], a:0}
]},
{t:"fill", h:T("Сократи: убери существительное", "Shorten: drop the noun"), w:[
"Оставь артикль и прилагательное (или de + сущ.): la camiseta verde → la verde; el bolso de piel → el de piel.",
"Keep the article and adjective (or de + noun): la camiseta verde → la verde; el bolso de piel → el de piel."], items:[
{q:"¿Qué falda prefieres? – (la falda azul) → ___", a:["la azul"]},
{q:"¿Qué zapatos compro? – (los zapatos negros) → ___", a:["los negros"]},
{q:"¿Qué camiseta? – (la camiseta de rayas) → ___", a:["la de rayas"]},
{q:"¿Qué coche usamos? – (el coche nuevo) → ___", a:["el nuevo"]},
{q:"¿Qué maletas llevamos? – (las maletas rojas) → ___", a:["las rojas"]}
]},
{t:"fill", h:T("Вставь este, esta, estos, estas или esto", "Fill in este, esta, estos, estas or esto"), w:[
"Перед существительным или вместо известного — este/esta/estos/estas; esto — когда не знаем, что это.",
"Before a noun or replacing a known one — este/esta/estos/estas; esto — when we don’t know what it is."], items:[
{q:"– ¿Cuáles son más bonitas? ¿Estas o ___? – Las verdes.", a:["estas"]},
{q:"– ¿Cuáles prefieres? ¿Estos o ___? – Los negros.", a:["estos"]},
{q:"– ¿Cuál es más barato? ¿Este o ___? – El gris.", a:["este"]},
{q:"– ¿Cuál compro? ¿Esta o ___? – La azul.", a:["esta"]},
{q:"¿___ qué es? ¿Una camiseta o un vestido?", a:["Esto"]}
]}
]},

/* ---------- 5. Qué / cuál ---------- */
{
id:"es4-que-cual", sec:"book", unit:"4", kind:T("Грамматика", "Grammar"),
title:"¿Qué falda? ¿Cuál prefieres?", ru:T("Qué + существительное и cuál / cuáles при выборе", "Qué + noun and cuál / cuáles when choosing"), page:"Unidad 4, p. 61–62, 65",
theory:`
${FLOW([[T("Сразу после вопроса идёт <b>существительное</b>?", "Is the question word followed by a <b>noun</b>?"), "¿Qué + sustantivo?", "¿Qué falda prefieres?"]], [T("Тип вещи уже понятен — выбираем <b>одну / несколько</b> из них", "The type of item is already clear — we pick <b>one / several</b>"), "¿Cuál? / ¿Cuáles?", "¿Cuál compro para mi hermana?"])}
${EsEX([["– ¿Qué falda prefieres? – Esta, la azul.", "qué + существительное", "qué + noun"], ["En esta tienda hay muchas camisas. ¿Cuál compro para mi hermana?", "уже знаем, что речь о рубашках → cuál", "we already know it’s about shirts → cuál"], ["¿Qué zapatos compro? ¿Cuáles crees que son más elegantes?", "мн. ч. → cuáles", "plural → cuáles"]])}
${EsWARN(T("<b>cuál</b> не ставится перед существительным: ✗ <s>¿Cuál falda prefieres?</s> → ✓ <b>¿Qué falda prefieres?</b> А <b>cuál / cuáles</b> согласуется по числу: <b>¿Cuáles son más bonitas?</b>", "<b>cuál</b> doesn’t go before a noun: ✗ <s>¿Cuál falda prefieres?</s> → ✓ <b>¿Qué falda prefieres?</b> And <b>cuál / cuáles</b> agrees in number: <b>¿Cuáles son más bonitas?</b>"))}
${EsEN(T("<b>¿Qué falda…?</b> = <i>Which skirt…?</i>; <b>¿Cuál…?</b> = <i>Which one…?</i>, <b>¿Cuáles…?</b> = <i>Which ones…?</i>", "<b>¿Qué falda…?</b> = <i>Which skirt…?</i>; <b>¿Cuál…?</b> = <i>Which one…?</i>, <b>¿Cuáles…?</b> = <i>Which ones…?</i>"))}
`,
ex:[
{t:"mc", h:T("qué, cuál или cuáles?", "qué, cuál or cuáles?"), w:[
"Перед существительным — qué. Без существительного: одна вещь — cuál, несколько — cuáles.",
"Before a noun — qué. Without a noun: one thing — cuál, several — cuáles."], items:[
{q:"¿___ jersey te gusta más?", o:["Qué", "Cuál"], a:0},
{q:"Hay tres maletas. ¿___ es más práctica?", o:["Cuál", "Qué", "Cuáles"], a:0},
{q:"¿___ zapatos compro?", o:["Qué", "Cuáles"], a:0},
{q:"Estas gafas son bonitas. ¿___ prefieres?", o:["Cuáles", "Cuál", "Qué"], a:0},
{q:"¿___ prefieres, el rojo o el verde?", o:["Cuál", "Qué", "Cuáles"], a:0},
{q:"¿___ camiseta llevas mañana?", o:["Qué", "Cuál"], a:0}
]},
{t:"fill", h:T("Вставь qué, cuál или cuáles", "Fill in qué, cuál or cuáles"), w:[
"qué + существительное; cuál / cuáles — выбор из уже известных вещей.",
"qué + noun; cuál / cuáles — choosing among things already mentioned."], items:[
{q:"¿___ maleta es más moderna?", a:["Qué"]},
{q:"– ¿___ son más bonitas? – Las verdes.", a:["Cuáles"]},
{q:"– ¿___ es más barato? – El gris.", a:["Cuál"]},
{q:"¿___ gafas son más elegantes?", a:["Qué"]},
{q:"Tengo dos bolsos. ¿___ llevo?", a:["Cuál"]}
]}
]},

/* ---------- 6. Tener que ---------- */
{
id:"es4-tener-que", sec:"book", unit:"4", kind:T("Грамматика + лексика", "Grammar + vocabulary"),
title:"Tener que + infinitivo", ru:T("Выразить необходимость и вещи в дорогу", "Expressing necessity and things to pack"), page:"Unidad 4, p. 59–60, 65",
theory:`
${FX(["tener", "+", "!que", "+", T("инфинитив", "infinitive")], T("«нужно, надо, должен»", "«have to, need to»"))}
<div class="cjs">${EsCJ("tener que", T("быть должным", "to have to"), ["ten<b>g</b>o que llevar", "t<b>ie</b>nes que llevar", "t<b>ie</b>ne que llevar", "tenemos que llevar", "tenéis que llevar", "t<b>ie</b>nen que llevar"], 1)}</div>
${EsEX([["Esta noche voy a una fiesta de cumpleaños. Tengo que llevar un regalo.", "", ""], ["Voy de viaje al extranjero. Tengo que llevar el pasaporte.", "", ""], ["Voy a la playa. Tengo que llevar crema solar.", "", ""]])}
${EsWARN(T("<b>que</b> обязателен: ✗ <s>Tengo llevar el pasaporte</s> → ✓ <b>Tengo que llevar</b>. Изменяется только <b>tener</b>, инфинитив остаётся.", "<b>que</b> is required: ✗ <s>Tengo llevar el pasaporte</s> → ✓ <b>Tengo que llevar</b>. Only <b>tener</b> changes; the infinitive stays."))}
${EsEN(T("<b>tener que</b> = <i>have to</i>: <b>Tengo que llevar el pasaporte</b> = <i>I have to take my passport</i>.", "<b>tener que</b> = <i>have to</i>: <b>Tengo que llevar el pasaporte</b> = <i>I have to take my passport</i>."))}
<h3>${T("Вещи в дорогу", "Things to pack")}</h3>
${TBL(["Español", T("Перевод", "Translation"), "Español", T("Перевод", "Translation")], [
[Es("la toalla de playa"), T("пляжное полотенце", "beach towel"), Es("el cargador de móvil"), T("зарядка", "phone charger")],
[Es("la pasta de dientes"), T("зубная паста", "toothpaste"), Es("el cepillo de dientes"), T("зубная щётка", "toothbrush")],
[Es("el champú y el gel de baño"), T("шампунь и гель для душа", "shampoo and shower gel"), Es("el secador de pelo"), T("фен", "hairdryer")],
[Es("la crema solar"), T("солнцезащитный крем", "sun cream"), Es("los medicamentos"), T("лекарства", "medicines")],
[Es("el carné de identidad"), T("удостоверение личности", "ID card"), Es("el pasaporte"), T("паспорт", "passport")],
[Es("la tarjeta de crédito"), T("кредитная карта", "credit card"), Es("el dinero"), T("деньги", "money")],
[Es("el peine"), T("расчёска", "comb"), Es("el libro"), T("книга", "book")]
])}
${EsNOTE(T("С частотой: <b>siempre llevo</b> — всегда беру; <b>nunca llevo</b> — никогда не беру: <b>Yo nunca llevo secador de pelo.</b>", "With frequency: <b>siempre llevo</b> — I always take; <b>nunca llevo</b> — I never take: <b>Yo nunca llevo secador de pelo.</b>"))}
`,
ex:[
{t:"conj", h:T("Проспрягай tener que", "Conjugate tener que"), w:[
"tener: tengo, tienes, tiene, tenemos, tenéis, tienen + que + инфинитив.",
"tener: tengo, tienes, tiene, tenemos, tenéis, tienen + que + infinitive."], items:[
{v:"tener (que)", p:ES_P6, f:["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"]}
]},
{t:"match", h:T("Ситуация → что нужно взять", "Situation → what to take"), w:[
"За границу — паспорт; за покупками — деньги или карта; на пляж — крем; в спортзал — спортивная одежда; машину напрокат — права.",
"Abroad — passport; shopping — money or a card; the beach — sun cream; the gym — sports clothes; a hire car — a driving licence."], pairs:[
["Voy de viaje al extranjero.", "Tengo que llevar el pasaporte."], ["Voy de compras.", "Tengo que llevar dinero o una tarjeta de crédito."], ["Voy a la playa a tomar el sol.", "Tengo que llevar crema solar."], ["Voy al gimnasio.", "Tengo que llevar ropa de deporte."], ["Quiero alquilar un coche.", "Tengo que llevar el carné de conducir."]]},
{t:"fill", h:T("Поставь tener в нужную форму", "Put tener in the right form"), w:[
"После подлежащего — нужная форма tener + que: yo tengo, tú tienes, ella tiene, nosotros tenemos, vosotros tenéis, ellos tienen.",
"After the subject — the right form of tener + que: yo tengo, tú tienes, ella tiene, nosotros tenemos, vosotros tenéis, ellos tienen."], items:[
{q:"Mañana es el cumpleaños de Clara. ___ que comprar un regalo. (yo)", a:["Tengo"]},
{q:"¿Vosotros ___ que llevar el pasaporte?", a:["tenéis"]},
{q:"Ana ___ que estudiar esta tarde.", a:["tiene"]},
{q:"Nosotros ___ que llevar ropa de deporte.", a:["tenemos"]},
{q:"Mis padres ___ que ir al aeropuerto.", a:["tienen"]},
{q:"¿Qué ___ que llevar tú a la playa?", a:["tienes"]}
]},
{t:"mc", h:T("Найди правильную фразу", "Find the correct sentence"), w:[
"Схема: tener (по лицу) + que + инфинитив. Без que и с личной формой второго глагола — ошибка.",
"The pattern: tener (by person) + que + infinitive. Leaving out que or conjugating the second verb is wrong."], items:[
{q:T("Мне нужно взять паспорт.", "I have to take my passport."), o:["Tengo que llevar el pasaporte.", "Tengo llevar el pasaporte.", "Tengo que llevo el pasaporte."], a:0},
{q:T("Нам нужно купить подарок.", "We have to buy a present."), o:["Tenemos que comprar un regalo.", "Tenemos de comprar un regalo.", "Tenemos que compramos un regalo."], a:0},
{q:T("Тебе нужно взять зарядку.", "You have to take the charger."), o:["Tienes que llevar el cargador.", "Tenes que llevar el cargador.", "Tienes que lleva el cargador."], a:0}
]},
{t:"cards", h:T("Карточки: вещи в дорогу", "Flashcards: things to pack"), w:[
"Это слова из списка вещей Лукаса (с. 59): запоминай вместе с артиклем.",
"These are the words from Lucas’s packing list (p. 59): learn them with the article."], items:[
["la toalla de playa", T("пляжное полотенце", "beach towel")], ["la pasta de dientes", T("зубная паста", "toothpaste")], ["el cepillo de dientes", T("зубная щётка", "toothbrush")], ["el cargador de móvil", T("зарядка для телефона", "phone charger")], ["el secador de pelo", T("фен", "hairdryer")], ["la crema solar", T("солнцезащитный крем", "sun cream")], ["el carné de identidad", T("удостоверение личности", "ID card")], ["la tarjeta de crédito", T("кредитная карта", "credit card")], ["los medicamentos", T("лекарства", "medicines")], ["el peine", T("расчёска", "comb")], ["el champú", T("шампунь", "shampoo")], ["el gel de baño", T("гель для душа", "shower gel")]]}
]},

/* ---------- 7. Preferir e ir ---------- */
{
id:"es4-preferir-ir", sec:"book", unit:"4", kind:T("Грамматика", "Grammar"),
title:"Preferir e ir", ru:T("Два неправильных глагола и сочетания с ir", "Two irregular verbs and combinations with ir"), page:"Unidad 4, p. 64–65",
theory:`
<div class="cjs">
${EsCJ("preferir", T("предпочитать", "to prefer"), ["pref<b>ie</b>ro", "pref<b>ie</b>res", "pref<b>ie</b>re", "preferimos", "preferís", "pref<b>ie</b>ren"], 1)}
${EsCJ("ir", T("идти, ехать", "to go"), ["<b>voy</b>", "<b>vas</b>", "<b>va</b>", "<b>vamos</b>", "<b>vais</b>", "<b>van</b>"], 1)}
</div>
${EsNOTE(T("<b>preferir</b> — «ботинок» <b>e → ie</b>, как <b>querer</b>: меняется везде, кроме nosotros и vosotros. <b>ir</b> полностью неправильный — формы учат наизусть.", "<b>preferir</b> is a «boot» verb <b>e → ie</b>, like <b>querer</b>: it changes everywhere except nosotros and vosotros. <b>ir</b> is completely irregular — learn its forms by heart."))}
<h3>${T("Сочетания с ir", "Combinations with ir")}</h3>
${TBL([T("Предлог", "Preposition"), T("Примеры", "Examples")], [
[Es("ir de"), Es("ir de compras, ir de viaje")],
[Es("ir al") + ` (a + el)`, Es("ir al gimnasio, ir al extranjero, ir al mercado")],
[Es("ir a la"), Es("ir a la playa, ir a la universidad")],
[Es("ir a") + ` + ${T("un / una", "un / una")}`, Es("ir a un hotel, ir a un cámping, ir a una tienda")]
])}
${EsWARN(T("<b>a + el = al</b>: ✗ <s>a el gimnasio</s> → ✓ <b>al gimnasio</b>. С <b>la</b> не сливается: <b>a la playa</b>.", "<b>a + el = al</b>: ✗ <s>a el gimnasio</s> → ✓ <b>al gimnasio</b>. No contraction with <b>la</b>: <b>a la playa</b>."))}
${EsEX([["¿Qué ropa prefieres para ir de viaje?", "", ""], ["Yo prefiero la camiseta azul. – Pues yo prefiero la blanca.", "", ""], ["Este fin de semana vamos a la playa.", "", ""]])}
${EsEN(T("<b>ir de compras</b> = <i>go shopping</i>, <b>ir de viaje</b> = <i>go on a trip</i>, <b>ir al extranjero</b> = <i>go abroad</i>.", "<b>ir de compras</b> = <i>go shopping</i>, <b>ir de viaje</b> = <i>go on a trip</i>, <b>ir al extranjero</b> = <i>go abroad</i>."))}
`,
ex:[
{t:"conj", h:T("Проспрягай preferir и ir", "Conjugate preferir and ir"), w:[
"preferir: prefiero, prefieres, prefiere, preferimos, preferís, prefieren. ir: voy, vas, va, vamos, vais, van.",
"preferir: prefiero, prefieres, prefiere, preferimos, preferís, prefieren. ir: voy, vas, va, vamos, vais, van."], items:[
{v:"preferir", p:ES_P6, f:["prefiero", "prefieres", "prefiere", "preferimos", "preferís", "prefieren"]},
{v:"ir", p:ES_P6, f:["voy", "vas", "va", "vamos", "vais", "van"]}
]},
{t:"fill", h:T("de, al, a la или a?", "de, al, a la or a?"), w:[
"ir de compras / de viaje; a + el = al (gimnasio, mercado, extranjero); a la + ж. р. (playa, universidad); a + un/una.",
"ir de compras / de viaje; a + el = al (gimnasio, mercado, extranjero); a la + fem. (playa, universidad); a + un/una."], items:[
{q:"Los sábados voy ___ compras.", a:["de"]},
{q:"Después del trabajo voy ___ gimnasio.", a:["al"]},
{q:"En verano vamos ___ playa.", a:["a la"]},
{q:"Este año quiero ir ___ extranjero.", a:["al"]},
{q:"¿Vais ___ un hotel o a un cámping?", a:["a"]},
{q:"Mañana voy ___ viaje.", a:["de"]}
]},
{t:"mc", h:T("Выбери правильную форму", "Choose the correct form"), w:[
"preferir: e → ie под ударением (prefiero, prefieren), но preferimos, preferís. ir: voy, vas, va, vamos, vais, van.",
"preferir: e → ie when stressed (prefiero, prefieren), but preferimos, preferís. ir: voy, vas, va, vamos, vais, van."], items:[
{q:"Yo ___ la camiseta blanca.", o:["prefiero", "prefero", "prefiere"], a:0},
{q:"Nosotros ___ ir de compras por internet.", o:["preferimos", "prefierimos", "prefieren"], a:0},
{q:"¿Qué ropa ___ vosotros?", o:["preferís", "prefieréis", "prefieren"], a:0},
{q:"Mis amigos ___ al mercadillo.", o:["van", "vamos", "ven"], a:0},
{q:"¿Tú ___ de viaje en agosto?", o:["vas", "va", "vais"], a:0},
{q:"Vosotros ___ a la universidad.", o:["vais", "vamos", "váis"], a:0}
]}
]}

]; L4.forEach(tp=>{ if (!WHY[tp.id]) WHY[tp.id] = tp.ex.map(e=>e.w || ["", ""]); }); return L4; });

/* ---------- вопросы пробной (unidad 4) ---------- */
function ES_POOL_U4(L){
  ESL = L;
  return [
  {tp:"es4-tiendas", q:"¿Cuánto ___ estos pantalones?", o:["cuestan","cuesta","cuestas"], a:0},
  {tp:"es4-tiendas", q:"¿Cuánto ___ esta chaqueta?", a:["cuesta"]},
  {tp:"es4-tiendas", q:T("Продавец спрашивает, что нужно клиенту:", "The assistant asks what the customer wants:"), o:["¿Qué desea?","¿Qué quieres tú?","¿Cuánto cuesta?"], a:0},
  {tp:"es4-tiendas", q:T("Ты выбрал вещь и говоришь:", "You’ve chosen and you say:"), o:["Me llevo este.","Llevo este a mí.","Me lleva este."], a:0},
  {tp:"es4-tiendas", q:"– Son 30 euros. – ___", o:["Aquí tiene.","Aquí está tú.","De nada."], a:0},
  {tp:"es4-ropa", q:"unas faldas ___ (rojo)", a:["rojas"]},
  {tp:"es4-ropa", q:"unos zapatos ___ (azul)", a:["azules"]},
  {tp:"es4-ropa", q:"una camisa ___ (verde)", o:["verde","verda","verdes"], a:0},
  {tp:"es4-ropa", q:"dos jerséis ___", o:["marrones","marróns","marrón"], a:0},
  {tp:"es4-ropa", q:T("Что из этого — аксессуар?", "Which of these is an accessory?"), o:["el cinturón","la falda","el abrigo"], a:0},
  {tp:"es4-ropa", q:"Hoy ___ un vestido rojo. (llevar, yo)", a:["llevo"]},
  {tp:"es4-numeros", q:"500", o:["quinientos","cincocientos","quinientas mil"], a:0},
  {tp:"es4-numeros", q:"200 personas → ___ personas", a:["doscientas"]},
  {tp:"es4-numeros", q:"100 €", o:["cien euros","ciento euros","cientos euros"], a:0},
  {tp:"es4-numeros", q:"3000", o:["tres mil","tres miles","trescientos mil"], a:0},
  {tp:"es4-numeros", q:"175", o:["ciento setenta y cinco","cien setenta y cinco","ciento y setenta y cinco"], a:0},
  {tp:"es4-demostrativos", q:"¿Cuánto cuesta ___ bolso?", o:["este","esta","esto"], a:0},
  {tp:"es4-demostrativos", q:"___ gafas son muy caras.", o:["Estas","Estos","Esto"], a:0},
  {tp:"es4-demostrativos", q:"¿___ qué es?", o:["Esto","Este","Esta"], a:0},
  {tp:"es4-demostrativos", q:"– ¿Qué camiseta prefieres? – ___ (la camiseta azul)", a:["la azul"]},
  {tp:"es4-que-cual", q:"¿___ jersey compro?", o:["Qué","Cuál","Cuáles"], a:0},
  {tp:"es4-que-cual", q:"Hay dos maletas. ¿___ prefieres?", o:["Cuál","Qué","Cuáles"], a:0},
  {tp:"es4-que-cual", q:"– ¿___ son más bonitas? – Las verdes.", a:["Cuáles"]},
  {tp:"es4-tener-que", q:"Voy a la playa. ___ que llevar crema solar. (yo)", a:["Tengo"]},
  {tp:"es4-tener-que", q:"Tenemos ___ comprar un regalo.", o:["que","de","a"], a:0},
  {tp:"es4-tener-que", q:"¿Vosotros ___ que trabajar mañana?", a:["tenéis"]},
  {tp:"es4-preferir-ir", q:"Yo ___ la falda negra. (preferir)", a:["prefiero"]},
  {tp:"es4-preferir-ir", q:"Nosotros ___ la camiseta azul.", o:["preferimos","prefierimos","prefieremos"], a:0},
  {tp:"es4-preferir-ir", q:"Los sábados voy ___ gimnasio.", o:["al","a el","a la"], a:0},
  {tp:"es4-preferir-ir", q:"Mañana mis amigos ___ de compras. (ir)", a:["van"]}
  ];
}
