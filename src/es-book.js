/* =========================================================
   ESPAÑOL — Aula internacional Plus 1, unidades 1–3
   Контент собирается функцией для нужного языка интерфейса:
   ES_BUILD("ru") / ES_BUILD("en"). Объяснения не сравнивают
   испанский с русским (кроме возвратных глаголов вроде llamarse).
   ========================================================= */
var ESL = "ru";
const T = (ru, en) => ESL === "en" ? en : ru;
const ES_PARTS = [];
const ES_UNITS = {
  "1": {es:"Nosotros y nosotras", ru:"Знакомимся", en:"Getting to know each other"},
  "2": {es:"Quiero aprender español", ru:"Испанский и я", en:"Spanish and me"},
  "3": {es:"¿Dónde está Santiago?", ru:"Страны и места", en:"Countries and places"}
};
/* helpers (префикс Es — чтобы не путать с французскими) */
const Es = s => `<span class="fr">${s}</span>`;
const EsEX = arr => `<ul class="exl">${arr.map(([a, ru, en]) => `<li><span class="fr">${a}</span>${ru || en ? `<span class="tr">${T(ru, en)}</span>` : ""}</li>`).join("")}</ul>`;
const EsNOTE = h => `<div class="note es-note"><span class="note-t">${T("Важно", "Note")}</span> ${h}</div>`;
const EsWARN = h => `<div class="warn"><span class="warn-t">¡Ojo!</span> ${h}</div>`;
const EsEN = h => `<div class="cmp"><p><span class="lang">EN</span><span>${h}</span></p></div>`;
const EsQA = rows => `<div class="qa">${rows.map(([q, a, tr]) => `<div class="qa-r"><span class="qa-q fr">${q}</span><span class="qa-a fr">${a}</span>${tr ? `<span class="qa-t">${tr}</span>` : ""}</div>`).join("")}</div>`;
const EsDAY = parts => `<div class="daybar">${parts.map(([h, sub, c]) => `<div class="db-s ${c}"><span class="fr">${h}</span><small>${sub}</small></div>`).join("")}</div>`;
const EsCHIPS = rows => `<div class="colloc">${rows.map(([v, nouns]) => `<div class="co-r"><span class="co-v fr">${v}</span><span class="co-n">${nouns.map(n => `<span class="fr">${n}</span>`).join("")}</span></div>`).join("")}</div>`;
const EsCARD = (title, sub, fields) => `<div class="idcard"><div class="id-t"><span>${title}</span><span>${sub}</span></div>${fields.map(([lab, val, wide]) => `<div class="id-f${wide ? " wide" : ""}"><span class="lab">${lab}</span><b>${val}</b></div>`).join("")}</div>`;
/* спряжение: формы с выделенным окончанием / нерегулярной частью */
const EsCJ = (verb, gl, forms, star) => `<div class="cj${star ? " cj-star" : ""}"><div class="cj-h"><span class="fr">${verb}</span><span class="cj-ru">${star ? "★ " : ""}${gl}</span></div>${forms.map((f, k) => `<div class="cj-r cj-rp"><span class="cj-p">${ES_P[k]}</span><span class="fr">${f}</span></div>`).join("")}</div>`;
const ES_P = ["yo", "tú", "él / ella / usted", "nosotros/as", "vosotros/as", "ellos/as / ustedes"];
const ES_P6 = ["yo", "tú", "él / ella / usted", "nosotros", "vosotros", "ellos / ustedes"];
function ES_BUILD(L) {
  const keepHL = HL; ESL = L; HL = L;
  try { const out = ES_PARTS.flatMap(f => f()); if (typeof ES_PLUS_APPLY === "function") ES_PLUS_APPLY(out); return out; } finally { HL = keepHL; }
}

/* =========================================================
   UNIDAD 1 — NOSOTROS Y NOSOTRAS
   ========================================================= */
ES_PARTS.push(() => [
{
id:"es1-saludos", sec:"book", unit:"1", kind:T("Общение", "Communication"),
title:"¡Hola! ¿Qué tal?", ru:T("Приветствия и прощания, tú и usted, как представиться", "Greetings and goodbyes, tú and usted, introducing yourself"), page:"Unidad 1, p. 14–22",
theory:`
<h3>${T("Поздороваться", "Saying hello")}</h3>
${TBL(["Español", T("Перевод", "Translation"), T("Когда", "When")], [
[Es("¡Hola!"), T("Привет! / Здравствуйте!", "Hi! / Hello!"), T("всегда, с кем угодно", "always, with anyone")],
[Es("Hola, ¿qué tal?"), T("Привет, как дела?", "Hi, how are things?"), T("очень частое приветствие", "a very common greeting")],
[Es("Hola, ¿cómo estás?"), T("Привет, как ты?", "Hi, how are you?"), T("на «ты»", "informal (tú)")],
[Es("¿Cómo andas?"), T("Как поживаешь?", "How's it going?"), T("разговорное", "colloquial")],
[Es("Buenos días."), T("Доброе утро / Добрый день", "Good morning"), T("утром, примерно до обеда (≈14:00)", "in the morning, until lunch (≈2 pm)")],
[Es("Buenas tardes."), T("Добрый день / Добрый вечер", "Good afternoon / evening"), T("после обеда и до ужина (≈21:00)", "after lunch until dinner (≈9 pm)")],
[Es("Buenas noches."), T("Добрый вечер / Спокойной ночи", "Good evening / Good night"), T("поздно вечером; и при встрече, и при прощании", "late evening; both to greet and to say goodbye")]
])}
${EsDAY([["Buenos días", "~ 6:00 – 14:00", "d1"], ["Buenas tardes", "~ 14:00 – 21:00", "d2"], ["Buenas noches", "~ 21:00 →", "d3"]])}
<p class="hint-l">${T("В Испании обедают поздно (около 14–15 часов), поэтому «tardes» начинаются только после обеда.", "In Spain people have lunch late (around 2–3 pm), so “tardes” only begins after lunch.")}</p>
<h3>${T("Ответить на «¿Qué tal?»", "Answering “¿Qué tal?”")}</h3>
${EsEX([["– Hola, ¿qué tal? – Muy bien, gracias. ¿Y tú?", "– Привет, как дела? – Очень хорошо, спасибо. А у тебя?", "– Hi, how are things? – Very well, thanks. And you?"],
["– ¿Cómo estás? – Bien. ¿Y tú? – Regular…", "– Как ты? – Хорошо. А ты? – Так себе…", "– How are you? – Fine. And you? – So-so…"],
["– Buenos días, señora Martínez. ¿Cómo está? – Muy bien, gracias. ¿Y usted?", "– Доброе утро, сеньора Мартинес. Как вы? – Очень хорошо, спасибо. А вы?", "– Good morning, Mrs Martínez. How are you? – Very well, thank you. And you?"]])}
<h3>${T("Попрощаться", "Saying goodbye")}</h3>
${TBL(["Español", T("Перевод", "Translation")], [
[Es("¡Adiós!"), T("До свидания! / Пока!", "Goodbye! / Bye!")],
[Es("¡Hasta luego!"), T("До встречи! (самое частое прощание)", "See you! (the most common goodbye)")],
[Es("¡Hasta mañana!"), T("До завтра!", "See you tomorrow!")],
[Es("¡Hasta el lunes!"), T("До понедельника!", "See you on Monday!")],
[Es("Buenas noches."), T("Спокойной ночи / Доброй ночи", "Good night")]
])}
<h3>${T("Tú или usted?", "Tú or usted?")}</h3>
<p>${T("В испанском есть неформальное <b>tú</b> («ты») и вежливое <b>usted</b> («Вы»). Если людей несколько — <b>vosotros / vosotras</b> (неформально) и <b>ustedes</b> (вежливо).", "Spanish has informal <b>tú</b> and polite <b>usted</b>. For several people: <b>vosotros / vosotras</b> (informal) and <b>ustedes</b> (polite).")}</p>
${FLOW([[T("Говоришь с одним человеком — другом, ровесником, коллегой, членом семьи?", "Talking to one person — a friend, someone your age, a colleague, family?"), "tú", "¿Cómo estás?"], [T("Один человек, но ситуация официальная или он намного старше?", "One person, but it's formal or they are much older?"), "usted", "¿Cómo está usted?"], [T("Несколько друзей, коллег, одногруппников?", "Several friends, colleagues, classmates?"), "vosotros", "¿Cómo estáis?"]], [T("Несколько человек, и ситуация официальная", "Several people, formal situation"), "ustedes", "¿Cómo están ustedes?"])}
${EsNOTE(T("В Испании на <b>tú</b> говорят очень часто — даже с незнакомыми людьми твоего возраста, с продавцами и с преподавателем. <b>Usted</b> — для пожилых людей и официальных ситуаций.", "In Spain <b>tú</b> is used a lot — even with strangers your age, shop assistants and teachers. <b>Usted</b> is for older people and formal situations."))}
${EsEN(T("В английском всегда одно <i>you</i>. В испанском нужно выбрать форму — и глагол тоже меняется: <i>tú eres</i> / <i>usted es</i>.", "English has just one <i>you</i>. In Spanish you choose a form, and the verb changes too: <i>tú eres</i> / <i>usted es</i>."))}
<h3>${T("Представиться", "Introducing yourself")}</h3>
${EsEX([["Hola, me llamo Anderson. ¿Y tú? ¿Cómo te llamas?", "Привет, меня зовут Андерсон. А тебя? Как тебя зовут?", "Hi, my name is Anderson. And you? What's your name?"],
["Me llamo Giovanna.", "Меня зовут Джованна.", "My name is Giovanna."],
["Soy Paul. Mi nombre es Paul.", "Я Пол. Моё имя — Пол.", "I'm Paul. My name is Paul."],
["– Encantado. / Encantada. – Mucho gusto.", "– Очень приятно (говорит мужчина / женщина). – Приятно познакомиться.", "– Pleased to meet you (said by a man / a woman). – Nice to meet you."]])}
${EsNOTE(T("<b>Me llamo</b> — от возвратного глагола <b>llamarse</b> («называться»), буквально «я называю себя». Как и в русском «меня зовут», здесь есть возвратная частица — <b>me</b>.", "<b>Me llamo</b> comes from the reflexive verb <b>llamarse</b> — literally “I call myself”."))}
<h3>${T("Знаки ¿ и ¡", "The marks ¿ and ¡")}</h3>
<p>${T("Вопрос и восклицание в испанском открываются перевёрнутым знаком: <b>¿</b>…<b>?</b> и <b>¡</b>…<b>!</b> Так ещё до конца фразы видно, что это вопрос.", "Questions and exclamations open with an upside-down mark: <b>¿</b>…<b>?</b> and <b>¡</b>…<b>!</b> — so you know from the start it's a question.")}</p>
${FX(["¿", "Cómo te llamas", "?"], T("вопрос открывается и закрывается", "the question opens and closes"))}
`,
ex:[
{t:"match", h:T("Соедини фразу с переводом", "Match the phrase with its translation"), pairs:[["¡Hola!", T("Привет!", "Hi!")], ["Buenos días.", T("Доброе утро.", "Good morning.")], ["Buenas tardes.", T("Добрый день (после обеда).", "Good afternoon.")], ["Buenas noches.", T("Спокойной ночи.", "Good night.")], ["¡Hasta luego!", T("До встречи!", "See you later!")], ["¡Hasta mañana!", T("До завтра!", "See you tomorrow!")], ["¿Qué tal?", T("Как дела?", "How are things?")], ["Mucho gusto.", T("Приятно познакомиться.", "Nice to meet you.")]]},
{t:"sort", h:T("Поздороваться или попрощаться?", "Greeting or goodbye?"), cats:["Saludar", "Despedirse"], items:[["¡Hola!", 0], ["¡Adiós!", 1], ["Buenos días", 0], ["¡Hasta luego!", 1], ["¿Qué tal?", 0], ["¡Hasta mañana!", 1], ["¿Cómo estás?", 0], ["¡Hasta el lunes!", 1], ["¿Cómo andas?", 0]]},
{t:"mc", h:T("Как сказать в этой ситуации?", "What do you say in this situation?"), items:[
{q:T("10:00, входишь в кабинет врача", "10 am, you walk into a doctor's office"), o:["Buenos días.", "Buenas noches.", "¡Hasta luego!"], a:0},
{q:T("17:00, встречаешь коллегу", "5 pm, you meet a colleague"), o:["Buenas tardes.", "Buenos días.", "Buenas noches."], a:0, e:T("После обеда — tardes.", "After lunch it's tardes.")},
{q:T("23:00, уходишь спать", "11 pm, you're going to bed"), o:["Buenas noches.", "Buenas tardes.", "¡Hola!"], a:0},
{q:T("Прощаешься с другом, увидитесь завтра", "Saying bye to a friend, see you tomorrow"), o:["¡Hasta mañana!", "¡Hasta el lunes!", "Buenos días."], a:0},
{q:"– ¿Qué tal? – ___", o:["Muy bien, gracias.", "Me llamo Ana.", "¡Hasta luego!"], a:0},
{q:"– Hola, me llamo Luis. ¿Y tú? – ___", o:["Me llamo Carmen.", "Muy bien.", "Soy de Madrid, ¿y tú?"], a:0}
]},
{t:"mc", h:T("Tú, usted, vosotros или ustedes?", "Tú, usted, vosotros or ustedes?"), items:[
{q:T("…к другу Пабло", "…to your friend Pablo"), o:["tú", "usted", "vosotros", "ustedes"], a:0},
{q:T("…к пожилому соседу, которого почти не знаешь", "…to an elderly neighbour you barely know"), o:["tú", "usted", "vosotros", "ustedes"], a:1},
{q:T("…к двум одногруппникам", "…to two classmates"), o:["tú", "usted", "vosotros", "ustedes"], a:2},
{q:T("…к делегации на официальной встрече", "…to a delegation at an official meeting"), o:["tú", "usted", "vosotros", "ustedes"], a:3},
{q:T("…к сестре", "…to your sister"), o:["tú", "usted", "vosotros", "ustedes"], a:0},
{q:"¿Cómo está ___? (formal)", o:["usted", "tú", "vosotros"], a:0, e:T("Usted употребляется с формой «он/она»: está.", "Usted takes the he/she form: está.")}
]},
{t:"order", h:T("Собери фразу", "Build the sentence"), items:[
{s:"Hola, ¿qué tal?", ru:T("Привет, как дела?", "Hi, how are things?")},
{s:"Me llamo Giovanna, ¿y tú?", ru:T("Меня зовут Джованна, а тебя?", "My name is Giovanna, and you?")},
{s:"Muy bien, gracias. ¿Y usted?", ru:T("Очень хорошо, спасибо. А вы?", "Very well, thank you. And you?")},
{s:"¡Hasta mañana, Pablo!", ru:T("До завтра, Пабло!", "See you tomorrow, Pablo!")}
]}
]},

{
id:"es1-datos", sec:"book", unit:"1", kind:T("Общение", "Communication"),
title:"¿Cómo te llamas?", ru:T("Личные данные: главные вопросы и ответы", "Personal details: the key questions and answers"), page:"Unidad 1, p. 18–23",
theory:`
<h3>${T("Анкета: datos personales", "The form: datos personales")}</h3>
${EsCARD("Ficha · datos personales", "Escuela de español", [[Es("(el) nombre"), "Virginie"], [Es("(el / los) apellido/s"), "Butel"], [Es("(la) edad"), "28 años"], [Es("(la) nacionalidad"), "francesa"], [Es("(el) móvil / (el) celular"), "631 745 871"], [Es("(el) correo electrónico"), "virgibtl@gmail.com", 1]])}
${EsNOTE(T("У испанцев обычно <b>два apellido</b>: первая фамилия отца и первая фамилия матери. <b>Francisco Martínez Ortega</b> — имя Francisco, apellidos Martínez (отец) и Ortega (мать). Друзья могут звать его <b>Paco</b> или <b>Paquito</b>.", "Spaniards usually have <b>two apellidos</b>: the father's first surname and the mother's first surname. <b>Francisco Martínez Ortega</b> — first name Francisco, surnames Martínez (father) and Ortega (mother). Friends may call him <b>Paco</b> or <b>Paquito</b>."))}
<h3>${T("Главные вопросы и ответы", "The key questions and answers")}</h3>
<p>${T("Слева — вопрос на <b>tú</b>, справа — ответ. Нажми, чтобы послушать.", "On the left — the question with <b>tú</b>, on the right — an answer. Click to listen.")}</p>
${EsQA([
["¿Cómo te llamas?", "Me llamo Daniel.", T("имя", "name")],
["¿Cuál es tu nombre?", "Daniel.", T("имя", "name")],
["¿Cuál es tu apellido?", "Vigny.", T("фамилия", "surname")],
["¿De dónde eres?", "Soy alemán. Soy de Berlín.", T("откуда ты", "where you're from")],
["¿Eres francesa?", "Sí, soy de París. / No, soy italiana.", T("уточнить национальность", "checking nationality")],
["¿Cuántos años tienes?", "Tengo 23 años.", T("возраст", "age")],
["¿Tienes móvil?", "Sí, es el 627 629 047.", T("телефон", "phone")],
["¿Tienes correo electrónico?", "Sí, pedro86@aula.com.", T("e-mail", "e-mail")],
["¿En qué trabajas?", "Soy estudiante y trabajo como recepcionista en un hotel.", T("работа", "job")],
["¿A qué te dedicas?", "Trabajo en un banco. / Soy comercial.", T("чем занимаешься", "what you do")],
["¿Dónde trabajas?", "En un hospital.", T("где работаешь", "where you work")]
])}
<h3>${T("Tú → usted: что меняется", "Tú → usted: what changes")}</h3>
<p>${T("С <b>usted</b> глагол стоит в форме «он / она», а <b>te</b> и <b>tu</b> превращаются в <b>se</b> и <b>su</b>:", "With <b>usted</b> the verb takes the he/she form, and <b>te</b> and <b>tu</b> become <b>se</b> and <b>su</b>:")}</p>
${TBL(["tú", "usted"], [
[Es("¿Cómo <b>te</b> llam<b>as</b>?"), Es("¿Cómo <b>se</b> llam<b>a</b>?")],
[Es("¿Cuál es <b>tu</b> nombre?"), Es("¿Cuál es <b>su</b> nombre?")],
[Es("¿De dónde <b>eres</b>?"), Es("¿De dónde <b>es</b>?")],
[Es("¿Cuántos años <b>tienes</b>?"), Es("¿Cuántos años <b>tiene</b>?")],
[Es("¿En qué trabaj<b>as</b>?"), Es("¿En qué trabaj<b>a</b>?")],
[Es("¿A qué <b>te</b> dedic<b>as</b>?"), Es("¿A qué <b>se</b> dedic<b>a</b>?")]
])}
${FX(["tú", "→", "te · tu · -s"], T("неформально", "informal"))}
${FX(["usted", "→", T("se · su · без -s", "se · su · no -s")], T("вежливо: формы как у él / ella", "polite: the same forms as él / ella"))}
<h3>${T("Возраст — с глаголом tener", "Age — with tener")}</h3>
${VS({h:"✓ Español", big:Es("Tengo 23 años."), sub:T("tener + число + años", "tener + number + años"), tone:"good"}, {h:"✗", big:"Soy 23 años.", sub:T("так не говорят", "never say this"), tone:"bad"})}
${EsEN(T("В английском возраст через <i>to be</i>: <i>I am 23</i>. В испанском — через <b>tener</b> («иметь»): <b>Tengo 23 años</b>, и слово <b>años</b> обязательно.", "English uses <i>to be</i>: <i>I am 23</i>. Spanish uses <b>tener</b> (to have): <b>Tengo 23 años</b>, and the word <b>años</b> is required."))}
<h3>${T("Профессия: без артикля", "Profession: no article")}</h3>
${EsEX([["Soy profesor.", "Я преподаватель.", "I'm a teacher."], ["Trabajo de camarero.", "Я работаю официантом.", "I work as a waiter."], ["Trabajo como recepcionista.", "Я работаю администратором.", "I work as a receptionist."], ["Trabajo en un banco.", "Я работаю в банке.", "I work in a bank."], ["Estudio Arquitectura.", "Я учусь на архитектора.", "I study Architecture."]])}
${EsEN(T("В английском <i>I'm <b>a</b> teacher</i>, а в испанском артикля нет: <b>Soy profesor</b>.", "English says <i>I'm <b>a</b> teacher</i>, but Spanish has no article: <b>Soy profesor</b>."))}
<h3>${T("Как продиктовать e-mail и телефон", "Spelling out e-mails and phone numbers")}</h3>
${TBL([T("Знак", "Symbol"), "Español"], [["@", Es("arroba")], [".", Es("punto")], ["-", Es("guion")], ["_", Es("guion bajo")]])}
${EsEX([["pedro86@aula.com → pedro ochenta y seis arroba aula punto com", "", ""], ["627 62 90 47 → seis, dos, siete, sesenta y dos, noventa, cuarenta y siete", T("номер читают по одной цифре или парами", "read digit by digit or in pairs"), T("номер читают по одной цифре или парами", "read digit by digit or in pairs")]])}
`,
ex:[
{t:"match", h:T("Соедини вопрос и ответ", "Match the question and the answer"), pairs:[["¿Cómo te llamas?", "Me llamo Federica."], ["¿Cuántos años tienes?", "Tengo 25."], ["¿En qué trabajas?", "Soy profesora de italiano."], ["¿Eres española?", "No, soy italiana."], ["¿Tienes correo electrónico?", "Sí, federica25@aula.it."], ["¿Tienes móvil?", "Sí, es el 657 890 345."], ["¿Dónde trabajas?", "En una escuela de idiomas."]]},
{t:"fill", h:T("Вставь вопросительное слово", "Fill in the question word"), items:[
{q:"¿___ te llamas? – Alberto.", a:["Cómo"]},
{q:"¿___ años tienes? – 25.", a:["Cuántos"]},
{q:"¿De ___ eres? – Soy holandés.", a:["dónde"]},
{q:"¿En ___ trabajas? – Soy enfermero.", a:["qué"]},
{q:"¿A qué te ___? – Soy estudiante.", a:["dedicas"]},
{q:"¿___ es tu apellido? – García.", a:["Cuál"]}
]},
{t:"fill", h:T("Переделай вопрос с tú на usted", "Turn the tú question into usted"), items:[
{q:"¿Cómo te llamas? → ¿Cómo ___ llama?", a:["se"]},
{q:"¿De dónde eres? → ¿De dónde ___?", a:["es"]},
{q:"¿Cuál es tu nombre? → ¿Cuál es ___ nombre?", a:["su"]},
{q:"¿Cuántos años tienes? → ¿Cuántos años ___?", a:["tiene"]},
{q:"¿Tienes móvil? → ¿___ móvil?", a:["Tiene"]},
{q:"¿A qué te dedicas? → ¿A qué ___ dedica?", a:["se"]}
]},
{t:"mc", h:T("Выбери правильный вариант", "Choose the correct option"), items:[
{q:"Yo ___ 19 años.", o:["tengo", "soy", "estoy"], a:0, e:T("Возраст — tener.", "Age — tener.")},
{q:"Soy ___.", o:["periodista", "un periodista", "la periodista"], a:0, e:T("Профессия после ser — без артикля.", "No article after ser + profession.")},
{q:"Trabajo ___ un hospital.", o:["en", "de", "como"], a:0, e:T("trabajar en + место", "trabajar en + place")},
{q:"Trabajo ___ camarero.", o:["de", "en", "a"], a:0, e:T("trabajar de + профессия", "trabajar de + job")},
{q:T("Как прочитать «@»?", "How do you say “@”?"), o:["arroba", "punto", "guion"], a:0},
{q:T("«Martínez Ortega» — это…", "“Martínez Ortega” is…"), o:[T("два apellido", "two apellidos"), T("имя и отчество", "first and middle name"), T("имя и фамилия", "first name and surname")], a:0}
]},
{t:"order", h:T("Собери фразу", "Build the sentence"), items:[
{s:"Me llamo Paul, soy inglés y soy traductor.", ru:T("Меня зовут Пол, я англичанин и я переводчик.", "My name is Paul, I'm English and I'm a translator.")},
{s:"¿Cuántos años tienes?", ru:T("Сколько тебе лет?", "How old are you?")},
{s:"Trabajo en un laboratorio y tengo 41 años.", ru:T("Я работаю в лаборатории, мне 41 год.", "I work in a lab and I'm 41.")},
{s:"¿A qué se dedica usted?", ru:T("Чем вы занимаетесь?", "What do you do? (formal)")}
]},
{t:"tf", h:T("Верно или неверно?", "True or false?"), items:[
{q:T("«¿Cómo se llama?» — вопрос на usted.", "“¿Cómo se llama?” is a usted question."), a:true},
{q:T("Возраст говорят с глаголом ser.", "Age is expressed with ser."), a:false, e:"Tengo 30 años."},
{q:T("У испанцев обычно два apellido.", "Spaniards usually have two apellidos."), a:true},
{q:T("Правильно: «Soy un profesor».", "Correct: “Soy un profesor”."), a:false, e:"Soy profesor."}
]}
]},

{
id:"es1-numeros", sec:"book", unit:"1", kind:T("Лексика", "Vocabulary"),
title:"Los números 0–100", ru:T("Числа от нуля до ста, возраст и телефоны", "Numbers from zero to a hundred, ages and phone numbers"), page:"Unidad 1, p. 19, 22",
theory:`
<h3>0–15: ${T("просто запомнить", "just memorise them")}</h3>
<div class="nums">${[["0","cero"],["1","uno"],["2","dos"],["3","tres"],["4","cuatro"],["5","cinco"],["6","seis"],["7","siete"],["8","ocho"],["9","nueve"],["10","diez"],["11","once"],["12","doce"],["13","trece"],["14","catorce"],["15","quince"]].map(([n,w])=>`<span class="num"><b>${n}</b><span class="fr">${w}</span></span>`).join("")}</div>
<h3>16–29: ${T("одно слово", "one word")}</h3>
${FX(["diez", "+", "y", "+", "seis", "→", "!dieciséis|16"], T("dieci- + число", "dieci- + number"))}
${FX(["veinte", "+", "y", "+", "dos", "→", "!veintidós|22"], T("veinti- + число", "veinti- + number"))}
<div class="nums">${[["16","dieciséis"],["17","diecisiete"],["18","dieciocho"],["19","diecinueve"],["20","veinte"],["21","veintiuno"],["22","veintidós"],["23","veintitrés"],["24","veinticuatro"],["25","veinticinco"],["26","veintiséis"],["27","veintisiete"],["28","veintiocho"],["29","veintinueve"]].map(([n,w])=>`<span class="num"><b>${n}</b><span class="fr">${w}</span></span>`).join("")}</div>
${EsWARN(T("Ударение-тильда у <b>dieciséis, veintidós, veintitrés, veintiséis</b> — его нужно писать.", "Written accents in <b>dieciséis, veintidós, veintitrés, veintiséis</b> — don't forget them."))}
<h3>30–100: ${T("три слова через y", "three words with y")}</h3>
${FX(["treinta", "+", "!y", "+", "cuatro", "→", "treinta y cuatro|34"])}
<div class="nums">${[["30","treinta"],["40","cuarenta"],["50","cincuenta"],["60","sesenta"],["70","setenta"],["80","ochenta"],["90","noventa"],["100","cien"]].map(([n,w])=>`<span class="num"><b>${n}</b><span class="fr">${w}</span></span>`).join("")}</div>
${EsEX([["31 → treinta y uno", "", ""], ["45 → cuarenta y cinco", "", ""], ["58 → cincuenta y ocho", "", ""], ["67 → sesenta y siete", "", ""], ["99 → noventa y nueve", "", ""]])}
${EsNOTE(T("<b>Seis → sesenta</b>, <b>siete → setenta</b>: не перепутай 60 и 70! А <b>cien</b> — ровно 100; дальше <b>ciento uno</b> (101).", "<b>Seis → sesenta</b>, <b>siete → setenta</b>: don't mix up 60 and 70! <b>Cien</b> is exactly 100; after that, <b>ciento uno</b> (101)."))}
<h3>${T("Uno перед существительным", "Uno before a noun")}</h3>
<p>${T("Перед существительным мужского рода <b>uno → un</b>, перед женским — <b>una</b>:", "Before a masculine noun <b>uno → un</b>, before a feminine one — <b>una</b>:")}</p>
${EsEX([["un año · veintiún años · treinta y un años", T("год · 21 год · 31 год", "one year · 21 years · 31 years"), T("год · 21 год · 31 год", "one year · 21 years · 31 years")], ["una lengua · veintiuna personas", T("один язык · 21 человек", "one language · 21 people"), T("один язык · 21 человек", "one language · 21 people")]])}
<h3>${T("Математика по-испански", "Maths in Spanish")}</h3>
${EsEX([["7 × 7 = 49 → siete por siete, cuarenta y nueve", "", ""], ["10 – 2 = 8 → diez menos dos, ocho", "", ""], ["15 + 40 = 55 → quince más cuarenta, cincuenta y cinco", "", ""]])}
`,
ex:[
{t:"listen", h:T("Послушай и напиши цифрами", "Listen and write the number in digits"), items:[{say:"diecisiete", a:["17"]}, {say:"veintidós", a:["22"]}, {say:"treinta y cinco", a:["35"]}, {say:"cuarenta y ocho", a:["48"]}, {say:"cincuenta y uno", a:["51"]}, {say:"sesenta y seis", a:["66"]}, {say:"setenta y tres", a:["73"]}, {say:"ochenta y cuatro", a:["84"]}, {say:"noventa y nueve", a:["99"]}, {say:"cien", a:["100"]}, {say:"catorce", a:["14"]}, {say:"quince", a:["15"]}]},
{t:"fill", h:T("Напиши словами", "Write the number in words"), items:[
{q:"16", a:["dieciséis"]}, {q:"23", a:["veintitrés"]}, {q:"26", a:["veintiséis"]}, {q:"38", a:["treinta y ocho"]}, {q:"60", a:["sesenta"]}, {q:"70", a:["setenta"]}, {q:"91", a:["noventa y uno"]}, {q:"100", a:["cien"]}
]},
{t:"mc", h:T("Посчитай", "Do the maths"), items:[
{q:"siete × siete =", o:["cuarenta y nueve", "cuarenta y siete", "setenta y siete"], a:0},
{q:"diez – dos =", o:["ocho", "doce", "seis"], a:0},
{q:"veinte – diecisiete =", o:["tres", "trece", "siete"], a:0},
{q:"treinta + cinco =", o:["treinta y cinco", "treinta cinco", "trescientos"], a:0},
{q:"nueve × diez =", o:["noventa", "novecientos", "diecinueve"], a:0},
{q:"quince + cuarenta =", o:["cincuenta y cinco", "cuarenta y cinco", "sesenta y cinco"], a:0}
]},
{t:"match", h:T("Соедини число и слово", "Match the number and the word"), pairs:[["13", "trece"], ["30", "treinta"], ["12", "doce"], ["20", "veinte"], ["60", "sesenta"], ["70", "setenta"], ["11", "once"], ["15", "quince"]]},
{t:"fill", h:T("Продолжи ряд", "Continue the series"), items:[
{q:"tres, seis, nueve, ___", a:["doce"]},
{q:"doce, catorce, dieciséis, ___", a:["dieciocho"]},
{q:"treinta, cuarenta, cincuenta, ___", a:["sesenta"]},
{q:"noventa y dos, ochenta y dos, setenta y dos, ___", a:["sesenta y dos"]}
]}
]},

{
id:"es1-nacionalidades", sec:"book", unit:"1", kind:T("Грамматика + лексика", "Grammar + vocabulary"),
title:"Países y nacionalidades", ru:T("Страны, национальности и их женский род", "Countries, nationalities and their feminine forms"), page:"Unidad 1, p. 18–23",
theory:`
<h3>${T("Три типа национальностей", "Three types of nationalities")}</h3>
${GRID(["", T("мужской", "masculine"), T("женский", "feminine")], [
[T("<b>-o → -a</b>", "<b>-o → -a</b>"), "m:italiano", "f:italiana"],
["", "m:brasileño", "f:brasileña"],
["", "m:argentino", "f:argentina"],
[T("<b>согласная + a</b>", "<b>consonant + a</b>"), "m:alemán", "f:alemana"],
["", "m:inglés", "f:inglesa"],
["", "m:francés", "f:francesa"],
["", "m:español", "f:española"],
[T("<b>одна форма</b><br><small>-a, -í, -e, -ense</small>", "<b>one form</b><br><small>-a, -í, -e, -ense</small>"), "p:belga", "p:belga"],
["", "p:marroquí", "p:marroquí"],
["", "p:estadounidense", "p:estadounidense"],
["", "p:canadiense", "p:canadiense"]
])}
${MORPH([[T("тильда исчезает", "the accent disappears"), [["alemán", "alemana"], ["inglés", "inglesa"], ["francés", "francesa"], ["portugués", "portuguesa"], ["japonés", "japonesa"]]], [T("просто + a", "just add -a"), [["español", "española"], ["italiano", "italiana"], ["ruso", "rusa"], ["chino", "china"]]]])}
${EsWARN(T("<b>alemán → alemana</b>: в женском роде ударение уже на предпоследнем слоге, поэтому тильда не нужна.", "<b>alemán → alemana</b>: in the feminine the stress falls on the second-to-last syllable, so no accent is needed."))}
<h3>${T("Страны и национальности", "Countries and nationalities")}</h3>
${TBL([T("Страна", "Country"), T("Он", "He"), T("Она", "She")], [
[Es("España"), Es("español"), Es("española")],
[Es("Francia"), Es("francés"), Es("francesa")],
[Es("Alemania"), Es("alemán"), Es("alemana")],
[Es("Italia"), Es("italiano"), Es("italiana")],
[Es("Portugal"), Es("portugués"), Es("portuguesa")],
[Es("Inglaterra / Reino Unido"), Es("inglés / británico"), Es("inglesa / británica")],
[Es("Irlanda"), Es("irlandés"), Es("irlandesa")],
[Es("Rusia"), Es("ruso"), Es("rusa")],
[Es("China"), Es("chino"), Es("china")],
[Es("Japón"), Es("japonés"), Es("japonesa")],
[Es("Brasil"), Es("brasileño"), Es("brasileña")],
[Es("Argentina"), Es("argentino"), Es("argentina")],
[Es("México"), Es("mexicano"), Es("mexicana")],
[Es("Colombia"), Es("colombiano"), Es("colombiana")],
[Es("Chile"), Es("chileno"), Es("chilena")],
[Es("Cuba"), Es("cubano"), Es("cubana")],
[Es("Estados Unidos"), Es("estadounidense"), Es("estadounidense")],
[Es("Canadá"), Es("canadiense"), Es("canadiense")],
[Es("Marruecos"), Es("marroquí"), Es("marroquí")],
[Es("Bélgica"), Es("belga"), Es("belga")],
[Es("Suiza"), Es("suizo"), Es("suiza")],
[Es("Suecia"), Es("sueco"), Es("sueca")]
])}
<h3>${T("Как сказать, откуда ты", "Saying where you're from")}</h3>
${FX(["Soy", "+", "!ruso / rusa"], T("национальность", "nationality"))}
${FX(["Soy", "+", "!de", "+", "Rusia / Moscú"], T("страна или город", "country or city"))}
${EsEX([["– ¿De dónde eres? – Soy argentino, de Buenos Aires.", "– Откуда ты? – Я аргентинец, из Буэнос-Айреса.", "– Where are you from? – I'm Argentinian, from Buenos Aires."], ["Somos Marta y Miguel, de España.", "Мы Марта и Мигель, из Испании.", "We're Marta and Miguel, from Spain."], ["Maha es marroquí y Lea es canadiense.", "Маха — марокканка, а Леа — канадка.", "Maha is Moroccan and Lea is Canadian."]])}
<h3>${T("Множественное число", "Plural")}</h3>
${TBL([T("Окончание", "Ending"), T("Пример", "Example")], [
[T("гласная → <b>+s</b>", "vowel → <b>+s</b>"), Es("italianos, belgas, canadienses")],
[T("согласная → <b>+es</b>", "consonant → <b>+es</b>"), Es("alemanes, ingleses, españoles")],
[T("-í → <b>+es</b>", "-í → <b>+es</b>"), Es("marroquíes")]
])}
${EsEN(T("В английском национальности пишутся с большой буквы (<i>Spanish, French</i>). В испанском — с маленькой: <b>español, francesa</b>. С большой — только страны: <b>España, Francia</b>.", "English capitalises nationalities (<i>Spanish, French</i>). Spanish doesn't: <b>español, francesa</b>. Only countries are capitalised: <b>España, Francia</b>."))}
${EsNOTE(T("Название языка совпадает с мужским родом национальности: <b>el español, el francés, el ruso, el alemán</b>.", "The name of a language is the masculine nationality: <b>el español, el francés, el ruso, el alemán</b>."))}
`,
ex:[
{t:"fill", h:T("Напиши женский род", "Write the feminine form"), items:[
{q:"italiano → ___", a:["italiana"]}, {q:"alemán → ___", a:["alemana"]}, {q:"inglés → ___", a:["inglesa"]}, {q:"español → ___", a:["española"]}, {q:"belga → ___", a:["belga"]}, {q:"francés → ___", a:["francesa"]}, {q:"canadiense → ___", a:["canadiense"]}, {q:"portugués → ___", a:["portuguesa"]}, {q:"marroquí → ___", a:["marroquí"]}, {q:"brasileño → ___", a:["brasileña"]}
]},
{t:"sort", h:T("Как образуется женский род?", "How is the feminine formed?"), cats:["-o → -a", T("+ a", "+ a"), T("одна форма", "one form")], items:[["mexicano", 0], ["chileno", 0], ["sueco", 0], ["japonés", 1], ["irlandés", 1], ["español", 1], ["estadounidense", 2], ["belga", 2], ["marroquí", 2], ["ruso", 0], ["alemán", 1], ["canadiense", 2]]},
{t:"match", h:T("Страна → национальность", "Country → nationality"), pairs:[["Japón", "japonés"], ["Alemania", "alemán"], ["Estados Unidos", "estadounidense"], ["Marruecos", "marroquí"], ["Brasil", "brasileño"], ["Bélgica", "belga"], ["Suiza", "suizo"], ["Francia", "francés"]]},
{t:"mc", h:T("Откуда это? Не забудь про род!", "Where is it from? Mind the gender!"), items:[
{q:"El tango es ___.", o:["argentino", "argentina", "argentinos"], a:0},
{q:"La pizza es ___.", o:["italiana", "italiano", "italianas"], a:0},
{q:"El sushi es ___.", o:["japonés", "japonesa", "japón"], a:0},
{q:"El flamenco es ___.", o:["español", "española", "españoles"], a:0},
{q:"La balalaica es ___.", o:["rusa", "ruso", "rusia"], a:0},
{q:"El cruasán es ___.", o:["francés", "francesa", "franceses"], a:0}
]},
{t:"fill", h:T("Поставь во множественное число", "Put into the plural"), items:[
{q:"Somos ___ (alemán).", a:["alemanes"]}, {q:"Son ___ (inglés).", a:["ingleses"]}, {q:"Sois ___ (español)?", a:["españoles"]}, {q:"Son ___ (belga).", a:["belgas"]}, {q:"Son ___ (marroquí).", a:["marroquíes"]}
]},
{t:"tf", h:T("Верно или неверно?", "True or false?"), items:[
{q:T("«Español» пишется с маленькой буквы.", "“Español” is written with a small letter."), a:true},
{q:T("Женский род от «inglés» — «inglésa».", "The feminine of “inglés” is “inglésa”."), a:false, e:"inglesa"},
{q:T("«Canadiense» одинаково для мужчин и женщин.", "“Canadiense” is the same for men and women."), a:true},
{q:T("«Soy de Rusia» и «Soy ruso» — обе фразы правильные.", "“Soy de Rusia” and “Soy ruso” are both correct."), a:true}
]}
]},

{
id:"es1-profesiones", sec:"book", unit:"1", kind:T("Лексика", "Vocabulary"),
title:"Profesiones y lugares de trabajo", ru:T("Профессии, их женский род и где люди работают", "Jobs, their feminine forms and where people work"), page:"Unidad 1, p. 18–23",
theory:`
<h3>${T("Род профессий", "Gender of jobs")}</h3>
${GRID(["", T("мужской", "masculine"), T("женский", "feminine")], [
["<b>-o → -a</b>", "m:cocinero", "f:cocinera"],
["", "m:secretario", "f:secretaria"],
["", "m:enfermero", "f:enfermera"],
["<b>-or → -ora</b>", "m:profesor", "f:profesora"],
["", "m:traductor", "f:traductora"],
["", "m:diseñador", "f:diseñadora"],
["<b>-z → -za</b>", "m:juez", "f:jueza"],
[T("<b>одна форма</b><br><small>-ista, -ante, -ente</small>", "<b>one form</b><br><small>-ista, -ante, -ente</small>"), "p:periodista", "p:periodista"],
["", "p:estudiante", "p:estudiante"],
["", "p:deportista", "p:deportista"]
])}
${EsWARN(T("Одна форма для обоих родов также у <b>comercial, chófer, policía, agente, modelo</b>. Разницу показывает артикль: <b>el / la periodista</b>.", "<b>Comercial, chófer, policía, agente, modelo</b> also have one form for both. The article shows the gender: <b>el / la periodista</b>."))}
<h3>${T("Профессии из юнита", "Jobs from the unit")}</h3>
${TBL(["Español", T("Перевод", "Translation")], [
[Es("científico / científica"), T("учёный", "scientist")], [Es("cocinero / cocinera"), T("повар", "cook, chef")], [Es("estudiante"), T("студент(ка)", "student")],
[Es("diseñador / diseñadora de moda"), T("модельер", "fashion designer")], [Es("periodista"), T("журналист(ка)", "journalist")], [Es("profesor / profesora"), T("преподаватель", "teacher")],
[Es("traductor / traductora"), T("переводчик", "translator")], [Es("enfermero / enfermera"), T("медбрат / медсестра", "nurse")], [Es("camarero / camarera"), T("официант(ка)", "waiter / waitress")],
[Es("secretario / secretaria"), T("секретарь", "secretary")], [Es("deportista"), T("спортсмен(ка)", "athlete")], [Es("comercial"), T("менеджер по продажам", "sales rep")],
[Es("médico / médica"), T("врач", "doctor")], [Es("informático / informática"), T("IT-специалист", "IT specialist")], [Es("recepcionista"), T("администратор, ресепшн", "receptionist")],
[Es("abogado / abogada"), T("юрист, адвокат", "lawyer")], [Es("arquitecto / arquitecta"), T("архитектор", "architect")], [Es("dependiente / dependienta"), T("продавец", "shop assistant")]
])}
<h3>${T("Места работы", "Workplaces")}</h3>
${FX(["Trabajo", "+", "!en", "+", "un / una", "+", T("место", "place")])}
<div class="bigc">${[["un hospital", T("больница", "hospital"), "enfermero, médica"], ["una universidad", T("университет", "university"), "profesora, estudiante"], ["un restaurante", T("ресторан", "restaurant"), "cocinero, camarera"], ["un laboratorio", T("лаборатория", "lab"), "científica"], ["un periódico", T("газета", "newspaper"), "periodista"], ["un gimnasio", T("спортзал", "gym"), "deportista"], ["un taller", T("мастерская", "workshop, garage"), "mecánico"], ["un banco", T("банк", "bank"), "comercial"], ["una empresa", T("компания", "company"), "de transportes / de telecomunicaciones"], ["un despacho", T("офис, кабинет", "office"), "de abogados / de arquitectura"], ["una agencia", T("агентство", "agency"), "de publicidad / de viajes"], ["una escuela", T("школа", "school"), "de lenguas / de yoga"], ["una tienda", T("магазин", "shop"), "dependienta"], ["un supermercado", T("супермаркет", "supermarket"), "cajero"], ["un hotel", T("отель", "hotel"), "recepcionista"], ["un bar", T("бар", "bar"), "camarero"]].map(([b, h, x]) => `<div class="bc"><span class="big fr" style="font-size:20px">${b}</span><h5>${h}</h5><span class="ex">${x}</span></div>`).join("")}</div>
<h3>${T("Три способа сказать о работе", "Three ways to talk about your job")}</h3>
${TBL([T("Конструкция", "Structure"), T("Пример", "Example")], [
[Es("Soy + profesión"), Es("Soy periodista.")],
[Es("Trabajo de / como + profesión"), Es("Trabajo de camarero. Trabajo como recepcionista.")],
[Es("Trabajo en + lugar"), Es("Trabajo en una agencia de viajes.")],
[Es("Estudio + carrera"), Es("Estudio Arquitectura en la Universidad Politécnica.")]
])}
${EsEX([["– ¿A qué te dedicas? – Soy diseñadora de moda.", "– Чем ты занимаешься? – Я модельер.", "– What do you do? – I'm a fashion designer."], ["Gibson es brasileño y trabaja de cocinero en un restaurante.", "Гибсон — бразилец, работает поваром в ресторане.", "Gibson is Brazilian and works as a cook in a restaurant."], ["Lea es científica. Trabaja en un laboratorio.", "Леа — учёная. Она работает в лаборатории.", "Lea is a scientist. She works in a lab."]])}
`,
ex:[
{t:"fill", h:T("Напиши профессию в женском роде", "Write the job in the feminine"), items:[
{q:"cocinero → ___", a:["cocinera"]}, {q:"profesor → ___", a:["profesora"]}, {q:"periodista → ___", a:["periodista"]}, {q:"traductor → ___", a:["traductora"]}, {q:"juez → ___", a:["jueza"]}, {q:"estudiante → ___", a:["estudiante"]}, {q:"enfermero → ___", a:["enfermera"]}, {q:"diseñador → ___", a:["diseñadora"]}
]},
{t:"match", h:T("Кто где работает?", "Who works where?"), pairs:[["enfermera", "en un hospital"], ["profesor", "en una escuela de lenguas"], ["camarero", "en un bar"], ["científica", "en un laboratorio"], ["periodista", "en un periódico"], ["recepcionista", "en un hotel"], ["dependienta", "en una tienda"], ["abogado", "en un despacho"]]},
{t:"sort", h:T("Как образуется женский род?", "How is the feminine formed?"), cats:["-o → -a", "-or → -ora", T("одна форма", "one form")], items:[["secretario", 0], ["camarero", 0], ["científico", 0], ["pintor", 1], ["diseñador", 1], ["escritor", 1], ["deportista", 2], ["cantante", 2], ["comercial", 2], ["policía", 2], ["informático", 0], ["traductor", 1]]},
{t:"mc", h:T("Выбери предлог", "Choose the preposition"), items:[
{q:"Trabajo ___ un taller.", o:["en", "de", "como"], a:0},
{q:"Mi madre trabaja ___ secretaria.", o:["de", "en", "a"], a:0},
{q:"Andrés trabaja ___ profesor de español.", o:["como", "en", "por"], a:0},
{q:"Trabaja en una agencia ___ viajes.", o:["de", "en", "a"], a:0},
{q:"Soy ___.", o:["recepcionista", "una recepcionista", "de recepcionista"], a:0}
]},
{t:"order", h:T("Собери фразу", "Build the sentence"), items:[
{s:"Soy secretaria y trabajo en una oficina.", ru:T("Я секретарь и работаю в офисе.", "I'm a secretary and I work in an office.")},
{s:"Mi padre es informático y trabaja en una empresa.", ru:T("Мой отец — айтишник и работает в компании.", "My father is an IT specialist and works at a company.")},
{s:"Trabajo de camarero en un restaurante.", ru:T("Я работаю официантом в ресторане.", "I work as a waiter in a restaurant.")}
]}
]},

{
id:"es1-verbos", sec:"book", unit:"1", kind:T("Грамматика", "Grammar"),
title:"Ser, tener y llamarse", ru:T("Три главных глагола юнита и личные местоимения", "The three key verbs of the unit and subject pronouns"), page:"Unidad 1, p. 23",
theory:`
<h3>${T("Личные местоимения", "Subject pronouns")}</h3>
${TBL(["", T("единственное", "singular"), T("множественное", "plural")], [
["1", Es("yo"), Es("nosotros / nosotras")],
["2", Es("tú · usted"), Es("vosotros / vosotras · ustedes")],
["3", Es("él / ella"), Es("ellos / ellas")]
])}
${EsNOTE(T("<b>Usted</b> и <b>ustedes</b> — это «вы» по смыслу, но глагол у них в 3-м лице: <b>usted es</b>, <b>ustedes son</b>. <b>Nosotras, vosotras, ellas</b> — когда в группе только женщины.", "<b>Usted</b> and <b>ustedes</b> mean “you”, but the verb goes in the 3rd person: <b>usted es</b>, <b>ustedes son</b>. <b>Nosotras, vosotras, ellas</b> — when the group is all women."))}
<h3>${T("Местоимение обычно не нужно", "The pronoun is usually dropped")}</h3>
${VS({h:T("обычно", "usually"), big:Es("Soy estudiante.") + "<br>" + Es("Tengo 20 años."), sub:T("окончание глагола уже говорит, кто это", "the verb ending already tells you who"), tone:"good"}, {h:T("для выделения", "for emphasis"), big:Es("Yo soy rusa, y él es italiano."), sub:T("когда противопоставляем людей", "when contrasting people")})}
${EsEN(T("В английском нельзя сказать просто <i>am a student</i> — нужно <i>I</i>. В испанском местоимение обычно опускают: <b>Soy estudiante</b>.", "In English you can't say just <i>am a student</i> — you need <i>I</i>. Spanish usually drops the pronoun: <b>Soy estudiante</b>."))}
<h3>${T("Спряжение", "Conjugation")}</h3>
<div class="cjs">
${EsCJ("ser", T("быть", "to be"), ["<b>soy</b>", "<b>eres</b>", "<b>es</b>", "<b>somos</b>", "<b>sois</b>", "<b>son</b>"], 1)}
${EsCJ("tener", T("иметь", "to have"), ["ten<b>g</b>o", "t<b>ie</b>nes", "t<b>ie</b>ne", "tenemos", "tenéis", "t<b>ie</b>nen"], 1)}
${EsCJ("llamarse", T("называться", "to be called"), ["<b>me</b> llamo", "<b>te</b> llamas", "<b>se</b> llama", "<b>nos</b> llamamos", "<b>os</b> llamáis", "<b>se</b> llaman"], 1)}
</div>
${EsWARN(T("<b>tener</b>: в «yo» появляется <b>g</b> (teng<b>o</b>), а под ударением <b>e → ie</b> (t<b>ie</b>nes). У nosotros и vosotros корень не меняется: <b>tenemos, tenéis</b>.", "<b>tener</b>: <b>g</b> appears in “yo” (ten<b>g</b>o), and when stressed <b>e → ie</b> (t<b>ie</b>nes). Nosotros and vosotros keep the stem: <b>tenemos, tenéis</b>."))}
<h3>${T("Что каким глаголом", "Which verb for what")}</h3>
<div class="bigc">
<div class="bc m"><span class="big fr">ser</span><h5>${T("кто ты, откуда, профессия", "who you are, origin, job")}</h5><span class="ex fr">Soy Lucía. Soy argentina. Soy de Rosario. Soy periodista.</span></div>
<div class="bc f"><span class="big fr">tener</span><h5>${T("возраст, телефон, e-mail", "age, phone, e-mail")}</h5><span class="ex fr">Tengo 23 años. ¿Tienes móvil? Tiene correo electrónico.</span></div>
<div class="bc p"><span class="big fr">llamarse</span><h5>${T("имя", "name")}</h5><span class="ex fr">Me llamo Ulrich. ¿Cómo se llama tu profesor?</span></div>
</div>
${EsNOTE(T("<b>llamarse</b> — возвратный глагол, как русское «называться»: перед ним всегда стоит <b>me, te, se, nos, os, se</b>. Буквально <b>me llamo</b> — «я называю себя», то есть «меня зовут».", "<b>llamarse</b> is reflexive: it always goes with <b>me, te, se, nos, os, se</b>. <b>Me llamo</b> literally means “I call myself”."))}
<h3>${T("Примеры из учебника", "Examples from the textbook")}</h3>
${EsEX([["– Hola, ¿tú también eres estudiante? – Sí, me llamo Luciano. Soy argentino.", "– Привет, ты тоже студент? – Да, меня зовут Лусиано. Я аргентинец.", "– Hi, are you a student too? – Yes, my name is Luciano. I'm Argentinian."], ["– Hola, ¿ustedes son estudiantes? – Sí, somos Marta y Miguel, de España.", "– Здравствуйте, вы студенты? – Да, мы Марта и Мигель, из Испании.", "– Hello, are you students? – Yes, we're Marta and Miguel, from Spain."], ["¿Vosotros también sois estudiantes?", "Вы тоже студенты?", "Are you students too?"], ["Armin y yo tenemos 25 años.", "Нам с Армином 25 лет.", "Armin and I are 25."]])}
${EsNOTE(T("В Аргентине вместо <b>tú</b> говорят <b>vos</b>: <i>vos sos, vos tenés, vos te llamás</i>. В учебнике это встречается, но в Испании так не говорят.", "In Argentina people say <b>vos</b> instead of <b>tú</b>: <i>vos sos, vos tenés, vos te llamás</i>. You'll see it in the book, but it isn't used in Spain."))}
`,
ex:[
{t:"conj", h:T("Проспрягай глаголы", "Conjugate the verbs"), items:[
{v:"ser", p:ES_P6, f:["soy", "eres", "es", "somos", "sois", "son"]},
{v:"tener", p:ES_P6, f:["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"]},
{v:"llamarse", p:ES_P6, f:["me llamo", "te llamas", "se llama", "nos llamamos", "os llamáis", "se llaman"]}
]},
{t:"fill", h:T("Вставь ser, tener или llamarse в нужной форме", "Fill in ser, tener or llamarse"), items:[
{q:"Hola, me ___ Maia. Soy de Estados Unidos.", a:["llamo"]},
{q:"Svenja y yo ___ alemanas.", a:["somos"]},
{q:"¿Vosotros de dónde ___?", a:["sois"]},
{q:"Armin y yo ___ 25 años.", a:["tenemos"]},
{q:"– ¿Cómo te ___? – Federico.", a:["llamas"]},
{q:"¿Qué edad ___ Lea? – 41 años.", a:["tiene"]},
{q:"Ellos ___ franceses: él es de París y ella de Lyon.", a:["son"]},
{q:"¿Ustedes ___ correo electrónico?", a:["tienen"]}
]},
{t:"sort", h:T("Ser или tener?", "Ser or tener?"), cats:["ser", "tener"], items:[["… alemán", 0], ["… 30 años", 1], ["… periodista", 0], ["… móvil", 1], ["… de Berlín", 0], ["… correo electrónico", 1], ["… estudiante", 0], ["… dos apellidos", 1]]},
{t:"match", h:T("Местоимение → форма ser", "Pronoun → form of ser"), pairs:[["yo", "soy"], ["tú", "eres"], ["usted", "es"], ["nosotras", "somos"], ["vosotros", "sois"], ["ustedes", "son"]]},
{t:"mc", h:T("Выбери правильную форму", "Choose the correct form"), items:[
{q:"Usted ___ profesora, ¿no?", o:["es", "eres", "sois"], a:0, e:T("usted → форма 3-го лица", "usted → 3rd-person form")},
{q:"¿Cómo ___ llaman tus amigos?", o:["se", "te", "os"], a:0},
{q:"Nosotros ___ de Chile.", o:["somos", "son", "sois"], a:0},
{q:"Yo ___ 18 años.", o:["tengo", "teno", "tieno"], a:0},
{q:"¿___ (vosotros) móvil?", o:["Tenéis", "Tienéis", "Tienen"], a:0},
{q:"Ellas ___ Ana y Rosa.", o:["se llaman", "se llama", "nos llamamos"], a:0}
]},
{t:"order", h:T("Собери фразу", "Build the sentence"), items:[
{s:"Me llamo Ulrich y soy alemán.", ru:T("Меня зовут Ульрих, я немец.", "My name is Ulrich and I'm German.")},
{s:"¿Vosotros también sois estudiantes?", ru:T("Вы тоже студенты?", "Are you students too?")},
{s:"Ella se llama Chloé y tiene 35 años.", ru:T("Её зовут Хлоэ, ей 35 лет.", "Her name is Chloé and she's 35.")}
]}
]}
]);
