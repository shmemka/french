/* =========================================================
   UNIDAD 2 — QUIERO APRENDER ESPAÑOL
   ========================================================= */
ES_PARTS.push(() => [
{
id:"es2-sustantivos", sec:"book", unit:"2", kind:T("Грамматика", "Grammar"),
title:"El género y los artículos", ru:T("Мужской и женский род, el / la / los / las, un / una, множественное число", "Masculine and feminine, el / la / los / las, un / una, plurals"), page:"Unidad 2, p. 32, 37",
theory:`
<h3>${T("Род по окончанию", "Gender by ending")}</h3>
<div class="bigc">
<div class="bc m"><span class="big fr">-o</span><h5>${T("обычно мужской", "usually masculine")}</h5><span class="ex fr">el libro, el curso, el teatro</span></div>
<div class="bc f"><span class="big fr">-a</span><h5>${T("обычно женский", "usually feminine")}</h5><span class="ex fr">la playa, la película, la revista</span></div>
<div class="bc"><span class="big fr">-e</span><h5>${T("любой род — запоминай", "either — learn them")}</h5><span class="ex fr">el coche, el cine · la noche, la gente, la clase</span></div>
<div class="bc f"><span class="big fr">-ción · -dad</span><h5>${T("всегда женский", "always feminine")}</h5><span class="ex fr">la canción, la televisión, la ciudad</span></div>
<div class="bc m"><span class="big fr">-aje</span><h5>${T("мужской", "masculine")}</h5><span class="ex fr">el mensaje, el viaje</span></div>
</div>
<h3>${T("Исключения, которые встречаются в юните", "Exceptions you'll meet in the unit")}</h3>
${GRID(["", T("исключение", "exception"), T("почему ловушка", "why it's a trap")], [
[T("на -o, но женский", "-o, but feminine"), "f:la mano", T("рука", "hand")],
["", "f:la moto(cicleta)", T("сокращение от motocicleta", "short for motocicleta")],
["", "f:la foto(grafía)", T("сокращение от fotografía", "short for fotografía")],
["", "f:la radio", T("радио", "radio")],
[T("на -a, но мужской", "-a, but masculine"), "m:el idioma", T("язык", "language")],
["", "m:el día", T("день", "day")],
["", "m:el clima", T("климат", "climate")],
["", "m:el sistema", T("система", "system")],
["", "m:el problema", T("проблема", "problem")],
["", "m:el sofá · el pijama · el mapa", ""]
])}
<h3>${T("Артикли", "Articles")}</h3>
${GRID(["", T("определённый · ед.", "definite · sing."), T("определённый · мн.", "definite · pl."), T("неопределённый · ед.", "indefinite · sing."), T("неопределённый · мн.", "indefinite · pl.")], [
[T("мужской", "masc."), "m:el curso", "m:los cursos", "m:un curso", "m:unos cursos"],
[T("женский", "fem."), "f:la playa", "f:las playas", "f:una playa", "f:unas playas"]
])}
${EsEN(T("<b>el / la / los / las</b> = <i>the</i>; <b>un / una</b> = <i>a / an</i>; <b>unos / unas</b> = <i>some</i>. Как и в английском: <i>a</i> — когда упоминаем впервые, <i>the</i> — когда уже понятно, о чём речь.", "<b>el / la / los / las</b> = <i>the</i>; <b>un / una</b> = <i>a / an</i>; <b>unos / unas</b> = <i>some</i>. Just like English: <i>a</i> when it's new, <i>the</i> when we know which one."))}
${EsEX([["– Quiero leer un libro en español. – El último libro de Poniatowska está muy bien.", "– Хочу почитать книгу на испанском. – Последняя книга Понятовской очень хорошая.", "– I want to read a book in Spanish. – Poniatowska's latest book is very good."], ["– ¿Quieres ver una película? – ¡Sí! Quiero ver la nueva película de Almodóvar.", "– Хочешь посмотреть фильм? – Да! Хочу посмотреть новый фильм Альмодовара.", "– Do you want to watch a film? – Yes! I want to see the new Almodóvar film."]])}
<h3>${T("Множественное число", "Plural")}</h3>
${MORPH([[T("гласная → +s", "vowel → +s"), [["el libro", "los libros"], ["la clase", "las clases"], ["el idioma", "los idiomas"]]], [T("согласная → +es", "consonant → +es"), [["la ciudad", "las ciudades"], ["el país", "los países"], ["la canción", "las canciones"]]], [T("-z → -ces", "-z → -ces"), [["el lápiz", "los lápices"], ["la vez", "las veces"]]]])}
<h3>${T("Слияние: al и del", "Contractions: al and del")}</h3>
${FX(["a", "+", "el", "→", "!al"], T("ir al cine, jugar al fútbol", "ir al cine, jugar al fútbol"))}
${FX(["de", "+", "el", "→", "!del"], T("la capital del país, el libro del profesor", "la capital del país, el libro del profesor"))}
${EsWARN(T("С <b>la, los, las</b> слияния нет: <b>a la playa, de las ciudades</b>.", "There's no contraction with <b>la, los, las</b>: <b>a la playa, de las ciudades</b>."))}
`,
ex:[
{t:"sort", h:T("Мужской или женский род?", "Masculine or feminine?"), cats:[T("el (мужской)", "el (masc.)"), T("la (женский)", "la (fem.)")], items:[["teatro", 0], ["noche", 1], ["revista", 1], ["cine", 0], ["película", 1], ["clase", 1], ["historia", 1], ["coche", 0], ["serie", 1], ["diccionario", 0], ["curso", 0], ["idioma", 0], ["mano", 1], ["día", 0], ["canción", 1], ["mensaje", 0]]},
{t:"fill", h:T("Вставь определённый артикль (el, la, los, las)", "Fill in the definite article (el, la, los, las)"), items:[
{q:"___ ciudad", a:["la"]}, {q:"___ museos", a:["los"]}, {q:"___ música", a:["la"]}, {q:"___ cine", a:["el"]}, {q:"___ playas", a:["las"]}, {q:"___ gente", a:["la"]}, {q:"___ idioma", a:["el"]}, {q:"___ estudiantes (chicos)", a:["los"]}, {q:"___ foto", a:["la"]}, {q:"___ clima", a:["el"]}
]},
{t:"mc", h:T("Определённый или неопределённый?", "Definite or indefinite?"), items:[
{q:"– ¿Quieres ir a ___ restaurante esta noche? – ¡Sí!", o:["un", "el", "la"], a:0, e:T("Впервые упоминаем, какой-то ресторан.", "Mentioned for the first time — some restaurant.")},
{q:"___ restaurante indio de mi calle está muy bien.", o:["El", "Un", "La"], a:0, e:T("Конкретный ресторан.", "A specific restaurant.")},
{q:"Este fin de semana quiero ir a ___ exposición.", o:["una", "la", "un"], a:0},
{q:"___ exposición de Picasso es muy interesante.", o:["La", "Una", "El"], a:0},
{q:"Elsa toca ___ piano y ___ guitarra.", o:["el … la", "la … el", "un … una"], a:0},
{q:"Hablo ___ inglés y ___ francés.", o:[T("— (без артикля)", "— (no article)"), "el … el", "un … un"], a:0, e:T("После hablar язык идёт без артикля: Hablo inglés.", "After hablar, no article: Hablo inglés.")}
]},
{t:"fill", h:T("Поставь во множественное число (с артиклем)", "Make it plural (with the article)"), items:[
{q:"el museo → ___", a:["los museos"]}, {q:"la comida → ___", a:["las comidas"]}, {q:"el país → ___", a:["los países"]}, {q:"la ciudad → ___", a:["las ciudades"]}, {q:"un mensaje → ___", a:["unos mensajes"]}, {q:"una canción → ___", a:["unas canciones"]}
]},
{t:"mc", h:T("a / al / a la / de / del", "a / al / a la / de / del"), items:[
{q:"¿Quieres ir ___ cine conmigo?", o:["al", "a el", "a la"], a:0},
{q:"Quiero ir ___ playa.", o:["a la", "al", "a"], a:0},
{q:"Es la capital ___ país.", o:["del", "de el", "de la"], a:0},
{q:"Juego ___ fútbol los sábados.", o:["al", "el", "a la"], a:0}
]}
]},

{
id:"es2-presente", sec:"book", unit:"2", kind:T("Грамматика", "Grammar"),
title:"Presente: verbos regulares", ru:T("Настоящее время правильных глаголов на -ar, -er, -ir и глагол hacer", "Present tense of regular -ar, -er, -ir verbs and the verb hacer"), page:"Unidad 2, p. 33, 37",
theory:`
<h3>${T("Три группы глаголов", "Three verb groups")}</h3>
<p>${T("Инфинитив оканчивается на <b>-ar</b>, <b>-er</b> или <b>-ir</b>. Отрезаем окончание — остаётся основа, к ней добавляем окончание лица.", "The infinitive ends in <b>-ar</b>, <b>-er</b> or <b>-ir</b>. Cut off the ending to get the stem, then add the person ending.")}</p>
${FX([T("habl|основа", "habl|stem"), "+", T("!ar|окончание", "!ar|ending")], T("инфинитив = основа + окончание", "infinitive = stem + ending"))}
${FX(["habl", "+", "!o", "→", "hablo|yo"], T("yo hablo — я говорю", "yo hablo — I speak"))}
<div class="cjs">
${EsCJ("hablar", T("говорить", "to speak"), ["habl<b>o</b>", "habl<b>as</b>", "habl<b>a</b>", "habl<b>amos</b>", "habl<b>áis</b>", "habl<b>an</b>"])}
${EsCJ("comprender", T("понимать", "to understand"), ["comprend<b>o</b>", "comprend<b>es</b>", "comprend<b>e</b>", "comprend<b>emos</b>", "comprend<b>éis</b>", "comprend<b>en</b>"])}
${EsCJ("escribir", T("писать", "to write"), ["escrib<b>o</b>", "escrib<b>es</b>", "escrib<b>e</b>", "escrib<b>imos</b>", "escrib<b>ís</b>", "escrib<b>en</b>"])}
</div>
<h3>${T("Окончания одной схемой", "All endings in one chart")}</h3>
${GRID(["", "-ar", "-er", "-ir"], [
["yo", "p:-o", "p:-o", "p:-o"],
["tú", "-as", "-es", "-es"],
["él / ella / usted", "-a", "-e", "-e"],
["nosotros/as", "-amos", "m:-emos", "f:-imos"],
["vosotros/as", "-áis", "m:-éis", "f:-ís"],
["ellos/as / ustedes", "-an", "-en", "-en"]
])}
<ul class="exl">
<li>${T("<b>yo</b> — всегда <b>-o</b>, во всех трёх группах.", "<b>yo</b> always ends in <b>-o</b>, in all three groups.")}</li>
<li>${T("<b>-er</b> и <b>-ir</b> совпадают везде, кроме <b>nosotros</b> и <b>vosotros</b>: comprend<b>emos</b> / escrib<b>imos</b>.", "<b>-er</b> and <b>-ir</b> are identical except for <b>nosotros</b> and <b>vosotros</b>: comprend<b>emos</b> / escrib<b>imos</b>.")}</li>
<li>${T("У <b>vosotros</b> всегда есть тильда: habl<b>áis</b>, com<b>éis</b>, viv<b>ís</b>.", "<b>vosotros</b> always has a written accent: habl<b>áis</b>, com<b>éis</b>, viv<b>ís</b>.")}</li>
</ul>
<h3>${T("Hacer: неправильный только «yo»", "Hacer: only “yo” is irregular")}</h3>
<div class="cjs">${EsCJ("hacer", T("делать", "to do, to make"), ["ha<b>g</b>o", "haces", "hace", "hacemos", "hacéis", "hacen"], 1)}</div>
${EsEX([["Yo hago muchos ejercicios de gramática.", "Я делаю много упражнений по грамматике.", "I do lots of grammar exercises."], ["¿Qué hacéis el fin de semana?", "Что вы делаете на выходных?", "What do you do at the weekend?"], ["Martín hace un intercambio con una chica mexicana.", "Мартин занимается языковым обменом с девушкой из Мексики.", "Martín does a language exchange with a Mexican girl."]])}
<h3>${T("Примеры из чата Лауры и Марка", "Examples from Laura and Mark's chat")}</h3>
${EsEX([["Hablo inglés y estudio español.", "Я говорю по-английски и учу испанский.", "I speak English and study Spanish."], ["¿Vives en España? – Sí, vivo en Madrid.", "Ты живёшь в Испании? – Да, я живу в Мадриде.", "Do you live in Spain? – Yes, I live in Madrid."], ["Comprendo casi todo, pero quiero hablar mejor.", "Я понимаю почти всё, но хочу говорить лучше.", "I understand almost everything, but I want to speak better."], ["Los dos vivimos en Madrid.", "Мы оба живём в Мадриде.", "We both live in Madrid."]])}
${EsEN(T("В английском в настоящем времени меняется только <i>he/she</i> (<i>speaks</i>). В испанском у каждого лица своё окончание — поэтому местоимение можно не говорить.", "In the English present only <i>he/she</i> changes (<i>speaks</i>). In Spanish every person has its own ending — that's why the pronoun can be dropped."))}
`,
ex:[
{t:"conj", h:T("Проспрягай глаголы", "Conjugate the verbs"), items:[
{v:"estudiar", p:ES_P6, f:["estudio", "estudias", "estudia", "estudiamos", "estudiáis", "estudian"]},
{v:"aprender", p:ES_P6, f:["aprendo", "aprendes", "aprende", "aprendemos", "aprendéis", "aprenden"]},
{v:"vivir", p:ES_P6, f:["vivo", "vives", "vive", "vivimos", "vivís", "viven"]}
]},
{t:"fill", h:T("Поставь глагол в нужную форму", "Put the verb in the correct form"), items:[
{q:"Mark ___ inglés y estudia español. (hablar)", a:["habla"]},
{q:"Yo ___ en Madrid. (vivir)", a:["vivo"]},
{q:"¿___ bien el español? (comprender, tú)", a:["Comprendes"]},
{q:"Nosotros ___ mensajes en español. (escribir)", a:["escribimos"]},
{q:"¿Vosotros ___ la radio? (escuchar)", a:["escucháis"]},
{q:"Muchos turistas no ___ español. (hablar)", a:["hablan"]},
{q:"Yo ___ muchos ejercicios. (hacer)", a:["hago"]},
{q:"Ellos ___ periódicos en español. (leer)", a:["leen"]}
]},
{t:"sort", h:T("К какой группе относится глагол?", "Which group does the verb belong to?"), cats:["-ar", "-er", "-ir"], items:[["trabajar", 0], ["comprender", 1], ["vivir", 2], ["escuchar", 0], ["leer", 1], ["escribir", 2], ["visitar", 0], ["aprender", 1], ["compartir", 2], ["practicar", 0], ["comer", 1], ["abrir", 2]]},
{t:"match", h:T("Кто? Соедини форму с местоимением", "Who? Match the form with the pronoun"), pairs:[["leéis", "vosotros"], ["hace", "él / ella"], ["tengo", "yo"], ["vives", "tú"], ["escribimos", "nosotros"], ["bailan", "ellos / ellas"]]},
{t:"mc", h:T("Выбери правильную форму", "Choose the correct form"), items:[
{q:"Nosotros ___ (comprender) casi todo.", o:["comprendemos", "comprendimos", "comprendamos"], a:0},
{q:"Nosotros ___ (escribir) un diario.", o:["escribimos", "escribemos", "escribamos"], a:0, e:T("-ir → -imos", "-ir → -imos")},
{q:"Vosotros ___ (vivir) en Sevilla.", o:["vivís", "viváis", "vivéis"], a:0},
{q:"Yo ___ (hacer) fotos.", o:["hago", "haco", "hace"], a:0},
{q:"Laura ___ (trabajar) en un hotel.", o:["trabaja", "trabajas", "trabajo"], a:0},
{q:"¿Ustedes ___ (leer) blogs en español?", o:["leen", "leéis", "lean"], a:0}
]},
{t:"order", h:T("Собери фразу", "Build the sentence"), items:[
{s:"Vivo con una chica inglesa y siempre hablamos inglés.", ru:T("Я живу с девушкой-англичанкой, и мы всегда говорим по-английски.", "I live with an English girl and we always speak English.")},
{s:"¿Qué hacéis para aprender español?", ru:T("Что вы делаете, чтобы учить испанский?", "What do you do to learn Spanish?")},
{s:"Leo blogs y escucho música en español.", ru:T("Я читаю блоги и слушаю музыку на испанском.", "I read blogs and listen to music in Spanish.")}
]}
]},

{
id:"es2-querer", sec:"book", unit:"2", kind:T("Грамматика", "Grammar"),
title:"Querer + infinitivo", ru:T("Как говорить о планах и желаниях: quiero viajar, ¿qué queréis hacer?", "Talking about plans and wishes: quiero viajar, ¿qué queréis hacer?"), page:"Unidad 2, p. 34, 37",
theory:`
<h3>${T("Спряжение querer: «ботинок» e → ie", "Conjugating querer: the e → ie “boot”")}</h3>
<p>${T("Под ударением <b>e</b> в корне превращается в <b>ie</b>. Обведи изменившиеся формы — получится ботинок. У <b>nosotros</b> и <b>vosotros</b> ударение на окончании, поэтому корень не меняется.", "When stressed, the stem <b>e</b> turns into <b>ie</b>. Circle the forms that change and you get a boot shape. In <b>nosotros</b> and <b>vosotros</b> the stress is on the ending, so the stem stays the same.")}</p>
${BOOTS(CJ2("querer", T("хотеть", "to want"), ["qu<b>ie</b>ro", "qu<b>ie</b>res", "qu<b>ie</b>re", "queremos", "queréis", "qu<b>ie</b>ren"], [0, 1, 2, 5]))}
${EsWARN(T("Окончания у querer обычные, как у comprender. Меняется только корень: <b>qu-ie-ro</b>.", "Querer has regular endings, like comprender. Only the stem changes: <b>qu-ie-ro</b>."))}
<h3>${T("Querer + инфинитив = планы", "Querer + infinitive = plans")}</h3>
${FX(["quiero", "+", T("!viajar|инфинитив", "!viajar|infinitive")], T("Я хочу путешествовать", "I want to travel"))}
${EsEX([["Quiero aprender otros idiomas.", "Я хочу учить другие языки.", "I want to learn other languages."], ["Mi compañero John quiere vivir en Perú.", "Мой одногруппник Джон хочет жить в Перу.", "My classmate John wants to live in Peru."], ["Anne y yo queremos estudiar en una universidad latinoamericana.", "Мы с Энн хотим учиться в латиноамериканском университете.", "Anne and I want to study at a Latin American university."], ["Katerina y Michael quieren pasar las vacaciones en España.", "Катерина и Майкл хотят провести отпуск в Испании.", "Katerina and Michael want to spend their holidays in Spain."]])}
${EsEN(T("В английском <i>I want <b>to</b> travel</i>, а в испанском никакого «to»: <b>Quiero viajar</b>.", "English says <i>I want <b>to</b> travel</i>; Spanish has no “to”: <b>Quiero viajar</b>."))}
<h3>${T("Спросить о планах и ответить", "Asking about plans and answering")}</h3>
${EsQA([
["¿Qué quieres hacer este fin de semana?", "Quiero salir de noche.", T("что ты хочешь делать", "what you want to do")],
["¿Qué queréis hacer este fin de semana?", "Yo quiero leer y pasear.", T("вопрос группе", "asking a group")],
["Yo, el sábado, quiero ir al cine. ¿Y tú?", "Yo también. / Pues yo quiero ir de excursión.", T("согласиться / предложить своё", "agree / suggest something else")],
["¿Quieres ver una película?", "¡Sí! ¡Buena idea!", T("предложение", "an invitation")]
])}
${EsNOTE(T("<b>Quiero</b> + существительное тоже работает: <b>Quiero un café</b>. А «люблю кого-то» — <b>Te quiero</b>: тот же глагол!", "<b>Quiero</b> + a noun works too: <b>Quiero un café</b>. And “I love you” is <b>Te quiero</b> — the same verb!"))}
`,
ex:[
{t:"conj", h:T("Проспрягай querer", "Conjugate querer"), items:[{v:"querer", p:ES_P6, f:["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"]}]},
{t:"fill", h:T("Вставь querer в нужной форме", "Fill in querer"), items:[
{q:"Yo ___ aprender otros idiomas.", a:["quiero"]},
{q:"¿Qué ___ hacer este fin de semana? (vosotros)", a:["queréis"]},
{q:"Mi compañero John ___ vivir en Perú.", a:["quiere"]},
{q:"Anne y yo ___ estudiar en Chile.", a:["queremos"]},
{q:"¿___ ver una película? (tú)", a:["Quieres"]},
{q:"Katerina y Michael ___ pasar las vacaciones en España.", a:["quieren"]}
]},
{t:"mc", h:T("Выбери правильный вариант", "Choose the correct option"), items:[
{q:"Quiero ___ en un país hispanohablante.", o:["vivir", "vivo", "a vivir"], a:0, e:T("После querer — инфинитив без предлога.", "After querer — infinitive, no preposition.")},
{q:"Nosotros ___ ir a la playa.", o:["queremos", "quieremos", "queramos"], a:0, e:T("Nosotros — без ie.", "Nosotros — no ie.")},
{q:"– Yo quiero ir al cine. – Yo ___.", o:["también", "tampoco", "sí"], a:0},
{q:"¿Qué ___ hacer tu hermana?", o:["quiere", "quiera", "queres"], a:0},
{q:"Vosotras ___ tener amigos de habla hispana.", o:["queréis", "quieréis", "quieren"], a:0}
]},
{t:"order", h:T("Собери фразу", "Build the sentence"), items:[
{s:"Este fin de semana quiero salir con mis amigos.", ru:T("В эти выходные я хочу погулять с друзьями.", "This weekend I want to go out with my friends.")},
{s:"¿Qué queréis hacer en este curso?", ru:T("Что вы хотите делать на этом курсе?", "What do you want to do on this course?")},
{s:"Yo quiero hablar mucho en clase.", ru:T("Я хочу много говорить на занятиях.", "I want to speak a lot in class.")}
]},
{t:"tf", h:T("Верно или неверно?", "True or false?"), items:[
{q:T("«Quiero a viajar» — правильно.", "“Quiero a viajar” is correct."), a:false, e:"Quiero viajar."},
{q:T("У nosotros форма — queremos.", "The nosotros form is queremos."), a:true},
{q:T("У querer меняется корень e → ie в 4 формах.", "Querer changes e → ie in 4 forms."), a:true},
{q:T("«Ellos quieren» — правильная форма.", "“Ellos quieren” is correct."), a:true}
]}
]},

{
id:"es2-motivos", sec:"book", unit:"2", kind:T("Грамматика", "Grammar"),
title:"¿Por qué? Por, para, porque", ru:T("Как объяснить причину и цель", "Explaining reasons and goals"), page:"Unidad 2, p. 35, 37",
theory:`
<h3>${T("Вопрос — ¿Por qué?", "The question — ¿Por qué?")}</h3>
${VS({h:T("вопрос: почему?", "question: why?"), big:Es("¿Por qué estudias español?"), sub:T("два слова + тильда", "two words + accent")}, {h:T("ответ: потому что", "answer: because"), big:Es("Porque trabajo con españoles."), sub:T("одно слово, без тильды", "one word, no accent")})}
<h3>${T("Что идёт после — то и выбираем", "What comes next decides")}</h3>
${FLOW([[T("Дальше <b>существительное</b> (причина сейчас)?", "Followed by a <b>noun</b> (a current reason)?"), "por", "por mi trabajo · por la historia"], [T("Дальше <b>инфинитив</b> (цель, план)?", "Followed by an <b>infinitive</b> (a goal, a plan)?"), "para", "para viajar por Latinoamérica"]], [T("Дальше <b>глагол в спряжённой форме</b>", "Followed by a <b>conjugated verb</b>"), "porque", "porque mi novio es colombiano"])}
${TBL(["", T("Структура", "Structure"), T("Пример", "Example")], [
[T("причина сейчас", "current reason"), Es("por + sustantivo"), Es("Estudio español por mi trabajo.")],
[T("причина сейчас", "current reason"), Es("porque + verbo conjugado"), Es("Porque trabajo con españoles.")],
[T("цель / план", "goal / plan"), Es("para + infinitivo"), Es("Para viajar por Latinoamérica.")],
[T("цель / план", "goal / plan"), Es("porque quiero + infinitivo"), Es("Porque quiero trabajar con españoles.")]
])}
${EsEX([["Tom estudia español para chatear con sus amigos.", "Том учит испанский, чтобы переписываться с друзьями.", "Tom studies Spanish to chat with his friends."], ["Sam estudia español porque su novio es colombiano.", "Сэм учит испанский, потому что её парень колумбиец.", "Sam studies Spanish because her boyfriend is Colombian."], ["Yo quiero visitar Colombia por la historia y para visitar los pueblos.", "Я хочу поехать в Колумбию ради истории и чтобы посмотреть деревни.", "I want to visit Colombia for its history and to see the villages."]])}
${EsEN(T("Подсказка через английский: <b>para</b> = <i>to / in order to</i>, <b>porque</b> = <i>because</i>, <b>por</b> + сущ. = <i>because of</i>.", "Through English: <b>para</b> = <i>to / in order to</i>, <b>porque</b> = <i>because</i>, <b>por</b> + noun = <i>because of</i>."))}
`,
ex:[
{t:"fill", h:T("Вставь por, para или porque", "Fill in por, para or porque"), items:[
{q:"Estudio español ___ ver series latinoamericanas.", a:["para"]},
{q:"Estudio español ___ viajar por España.", a:["para"]},
{q:"Estudio español ___ mi trabajo.", a:["por"]},
{q:"Estudio español ___ mi novia es mexicana.", a:["porque"]},
{q:"Quiero ir a Cuba ___ visitar La Habana.", a:["para"]},
{q:"Quiero visitar el museo del Prado ___ quiero ver los cuadros de Goya.", a:["porque"]},
{q:"Quiero visitar Perú ___ la comida.", a:["por"]},
{q:"¿___ estudias español?", a:["Por qué"]}
]},
{t:"sort", h:T("Что может идти дальше?", "What can come next?"), cats:["por …", "para …", "porque …"], items:[["mi trabajo", 0], ["la música", 0], ["la historia", 0], ["leer en español", 1], ["viajar", 1], ["chatear con amigos", 1], ["quiero vivir en Chile", 2], ["trabajo en un hotel", 2], ["mi novio es colombiano", 2]]},
{t:"mc", h:T("Выбери правильный вариант", "Choose the correct option"), items:[
{q:"– ¿___ estudias español? – Porque quiero vivir en Costa Rica.", o:["Por qué", "Porque", "Para qué"], a:0},
{q:"Laura quiere mejorar su inglés ___ su trabajo.", o:["por", "para", "porque"], a:0},
{q:"Quiero aprender español ___ hablar con mis amigos de México.", o:["para", "por", "porque"], a:0},
{q:"Voy a Madrid ___ quiero ver el Guernica.", o:["porque", "para", "por"], a:0},
{q:"Estudia chino ___ trabajar en China.", o:["para", "porque", "por"], a:0}
]},
{t:"order", h:T("Собери фразу", "Build the sentence"), items:[
{s:"Estudio español porque quiero trabajar en España.", ru:T("Я учу испанский, потому что хочу работать в Испании.", "I study Spanish because I want to work in Spain.")},
{s:"Quiero ir a Valencia para ver la ciudad.", ru:T("Я хочу поехать в Валенсию, чтобы посмотреть город.", "I want to go to Valencia to see the city.")},
{s:"Tom estudia español por su trabajo.", ru:T("Том учит испанский из-за работы.", "Tom studies Spanish because of his job.")}
]}
]},

{
id:"es2-ocio", sec:"book", unit:"2", kind:T("Лексика", "Vocabulary"),
title:"Cultura, ocio e idiomas", ru:T("Досуг, занятия на уроке, культура и языки", "Free time, class activities, culture and languages"), page:"Unidad 2, p. 29–31, 36",
theory:`
<h3>${T("Аспекты культуры", "Aspects of culture")}</h3>
<div class="bigc">${[["la historia", T("история", "history")], ["la comida", T("еда", "food")], ["la música", T("музыка", "music")], ["la literatura", T("литература", "literature")], ["la naturaleza", T("природа", "nature")], ["los pueblos y las ciudades", T("деревни и города", "towns and cities")], ["el arte", T("искусство", "art")], ["el cine", T("кино", "cinema")], ["la vida nocturna", T("ночная жизнь", "nightlife")]].map(([w, h]) => `<div class="bc"><span class="big fr" style="font-size:19px">${w}</span><h5>${h}</h5></div>`).join("")}</div>
${EsEX([["– ¿Qué aspectos de la cultura hispana te interesan? – Para mí, la historia.", "– Что тебе интересно в испаноязычной культуре? – Мне — история.", "– Which aspects of Hispanic culture interest you? – For me, history."]])}
<h3>${T("Досуг и учёба: глагол + слова", "Free time and study: verb + words")}</h3>
<p>${T("Учи не отдельные слова, а сочетания: глагол и то, что с ним говорят.", "Learn whole combinations: the verb plus what goes with it.")}</p>
${EsCHIPS([
["ir a", ["un concierto", "un museo", "una exposición", "la playa", "el cine → al cine", "el teatro → al teatro"]],
["ir de", ["compras", "excursión"]],
["salir a", ["cenar", "bailar"]],
["salir de", ["noche"]],
["salir con", ["amigos / amigas", "mis compañeros"]],
["hacer", ["un curso de teatro", "un intercambio con un nativo", "ejercicios de gramática", "fotos"]],
["ver", ["la televisión", "una serie", "una película"]],
["escuchar", ["música", "la radio", "un pódcast"]],
["leer", ["el periódico", "una revista", "un libro"]],
["escribir", ["un mensaje", "un texto", "un diario"]],
["hablar", ["un idioma", "español"]],
["hablar con", ["nativos", "hispanohablantes"]],
["visitar", ["páginas web", "lugares históricos", "a la familia", "a los amigos"]],
["practicar", ["la pronunciación", "español"]],
["jugar a", ["videojuegos", "el fútbol → al fútbol", "el tenis → al tenis"]],
["aprender", ["un idioma", "idiomas", "inglés"]],
["aprender a", ["bailar", "tocar la guitarra"]]
])}
${EsWARN(T("<b>a + el = al</b>: ir <b>al</b> cine, jugar <b>al</b> fútbol. Перед людьми ставится <b>a</b>: visitar <b>a</b> la familia (но visitar un museo).", "<b>a + el = al</b>: ir <b>al</b> cine, jugar <b>al</b> fútbol. Put <b>a</b> before people: visitar <b>a</b> la familia (but visitar un museo)."))}
${EsEX([["Unai quiere ir de excursión y salir de noche.", "Унаи хочет сходить в поход и куда-нибудь вечером.", "Unai wants to go on a trip and go out at night."], ["Yo visito páginas web en español y leo blogs.", "Я захожу на испанские сайты и читаю блоги.", "I visit Spanish websites and read blogs."], ["Quiero hacer un intercambio para practicar la pronunciación.", "Хочу заниматься языковым обменом, чтобы практиковать произношение.", "I want to do a language exchange to practise pronunciation."]])}
<h3>Idiomas</h3>
${TBL(["Español", T("Перевод", "Translation"), "Español", T("Перевод", "Translation")], [
[Es("el inglés"), T("английский", "English"), Es("el ruso"), T("русский", "Russian")],
[Es("el francés"), T("французский", "French"), Es("el árabe"), T("арабский", "Arabic")],
[Es("el alemán"), T("немецкий", "German"), Es("el italiano"), T("итальянский", "Italian")],
[Es("el chino"), T("китайский", "Chinese"), Es("el español"), T("испанский", "Spanish")]
])}
${EsNOTE(T("Название языка почти всегда совпадает с мужским родом национальности (<b>el francés</b> — французский; <b>un francés</b> — француз). После <b>hablar, estudiar, aprender</b> артикль не нужен: <b>Hablo ruso e inglés</b>.", "The language name almost always matches the masculine nationality (<b>el francés</b> — French; <b>un francés</b> — a Frenchman). No article after <b>hablar, estudiar, aprender</b>: <b>Hablo ruso e inglés</b>."))}
<h3>${T("Официальные языки испаноязычных стран", "Official languages of Spanish-speaking countries")}</h3>
${TBL([T("Страна", "Country"), T("Языки", "Languages")], [
[Es("España"), Es("español (castellano), catalán, gallego, euskera, aranés")],
[Es("Paraguay"), Es("español y guaraní")],
[Es("Bolivia"), Es("español, quechua, aimara, guaraní y otras")],
[Es("Perú"), Es("español, quechua, aimara y otras")],
[Es("Guinea Ecuatorial"), Es("español, francés y portugués")]
])}
${EsWARN(T("Перед словом на <b>i- / hi-</b> союз <b>y</b> («и») превращается в <b>e</b>: <b>español e inglés</b>, <b>Francia e Italia</b>.", "Before a word starting with <b>i- / hi-</b> the word <b>y</b> (“and”) becomes <b>e</b>: <b>español e inglés</b>, <b>Francia e Italia</b>."))}
`,
ex:[
{t:"fill", h:T("Вставь a, al, de или con (если нужно)", "Fill in a, al, de or con (if needed)"), items:[
{q:"¿Quieres ir ___ cine conmigo?", a:["al"]},
{q:"Este fin de semana quiero salir ___ mis amigos españoles.", a:["con"]},
{q:"Quiero salir ___ cenar y después ir a la discoteca.", a:["a"]},
{q:"Eduardo y yo queremos ir ___ excursión.", a:["de"]},
{q:"Mercedes quiere ir ___ concierto de Rosalía.", a:["al"]},
{q:"Quiero aprender ___ tocar la guitarra.", a:["a"]},
{q:"Los sábados voy ___ compras.", a:["de"]}
]},
{t:"match", h:T("Какой глагол подходит?", "Which verb fits?"), pairs:[["___ una serie", "ver"], ["___ un pódcast", "escuchar"], ["___ una revista", "leer"], ["___ un diario", "escribir"], ["___ fotos", "hacer"], ["___ lugares históricos", "visitar"], ["___ la pronunciación", "practicar"], ["___ videojuegos", "jugar a"]]},
{t:"sort", h:T("Распредели по глаголам", "Sort by verb"), cats:["ir a / al", "ir de", "salir a"], items:[["la playa", 0], ["un museo", 0], ["cine", 0], ["compras", 1], ["excursión", 1], ["cenar", 2], ["bailar", 2], ["un concierto", 0]]},
{t:"mc", h:T("Языки и культура", "Languages and culture"), items:[
{q:T("Как сказать «немецкий язык»?", "How do you say “German” (the language)?"), o:["el alemán", "la alemana", "el Alemania"], a:0},
{q:"Hablo español ___ inglés.", o:["e", "y", "i"], a:0, e:T("Перед i- → e.", "Before i- → e.")},
{q:T("Официальные языки Парагвая:", "Official languages of Paraguay:"), o:["español y guaraní", "español y quechua", "español y portugués"], a:0},
{q:"Hablo ___ ruso.", o:[T("— (без артикля)", "— (no article)"), "el", "un"], a:0},
{q:T("«la vida nocturna» — это…", "“la vida nocturna” is…"), o:[T("ночная жизнь", "nightlife"), T("природа", "nature"), T("история", "history")], a:0}
]},
{t:"cards", h:T("Карточки: досуг", "Flashcards: free time"), items:[["ir de compras", T("ходить по магазинам", "to go shopping")], ["ir de excursión", T("ездить на экскурсию, в поход", "to go on a trip")], ["salir de noche", T("гулять вечером, ходить в клубы", "to go out at night")], ["salir a cenar", T("ходить ужинать", "to go out for dinner")], ["hacer un intercambio", T("заниматься языковым обменом", "to do a language exchange")], ["ver una serie", T("смотреть сериал", "to watch a series")], ["tocar la guitarra", T("играть на гитаре", "to play the guitar")], ["jugar a videojuegos", T("играть в видеоигры", "to play video games")], ["visitar a la familia", T("навещать семью", "to visit family")], ["la vida nocturna", T("ночная жизнь", "nightlife")]]}
]}
]);
