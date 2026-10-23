/* =========================================================
   ESPAÑOL — дополнения к темам: «Частые ошибки» в конце теории
   и новые задания в конец темы (ответы хранятся по индексу).
   Вызывается из ES_BUILD (там уже выставлен ESL), поэтому T() работает.
   Объяснения не сравнивают испанский с русским.
   ========================================================= */
const ESERR = rows => `<div class="mist"><div class="mist-t">${T("Частые ошибки","Common mistakes")}</div>${rows.map(([bad, good, why])=>`<div class="mist-r"><span class="mist-bad">✗ <s>${bad}</s></span><span class="mist-good">✓ <span class="fr">${good}</span></span>${why ? `<span class="mist-why">${why}</span>` : ""}</div>`).join("")}</div>`;

const ES_PLUS = () => ({
"es1-verbos": {
theory: ESERR([
["Soy 20 años.","Tengo 20 años.",T("Возраст — tener.","Age uses tener.")],
["Me llamo es Ana.","Me llamo Ana.",T("После me llamo сразу имя.","The name comes straight after me llamo.")],
["Soy un profesor.","Soy profesor.",T("Профессия после ser — без артикля.","A job after ser takes no article.")],
["Ella llama Rosa.","Ella se llama Rosa.",T("Глагол возвратный: me, te, se llama.","The verb is reflexive: me, te, se llama.")]
]),
ex:[{t:"mc", h:T("Найди правильную фразу","Find the correct sentence"), w:[
"Возраст — tener; имя — llamarse с me/te/se; профессия после ser без артикля; vosotros sois, ellos son.",
"Age — tener; names — llamarse with me/te/se; no article for a job after ser; vosotros sois, ellos son."], items:[
{q:T("Мне 22 года.","I’m 22."), o:["Tengo 22 años.","Soy 22 años.","Tengo 22."], a:0},
{q:T("Её зовут Лаура.","Her name is Laura."), o:["Se llama Laura.","Llama Laura.","Se llamo Laura."], a:0},
{q:T("Он врач.","He’s a doctor."), o:["Es médico.","Es un médico.","Está médico."], a:0},
{q:T("Вы (vosotros) из Мадрида?","Are you (vosotros) from Madrid?"), o:["¿Sois de Madrid?","¿Son de Madrid?","¿Estáis de Madrid?"], a:0},
{q:T("Как тебя зовут?","What’s your name?"), o:["¿Cómo te llamas?","¿Cómo se llamas?","¿Cómo llamas?"], a:0}
]}]
},
"es1-nacionalidades": {
theory: ESERR([
["Ella es alemána.","Ella es alemana.",T("В женском роде тильда исчезает: ударение и так на -ma-.","The accent disappears in the feminine: the stress already falls on -ma-.")],
["Soy Español.","Soy español.",T("Национальности — со строчной буквы.","Nationalities are written in lower case.")],
["Ella es estadounidensa.","Ella es estadounidense.",T("-ense — одна форма для обоих родов.","-ense has one form for both genders.")],
["Ella es inglésa.","Ella es inglesa.",T("inglés → inglesa (без тильды).","inglés → inglesa (no accent).")]
]),
ex:[{t:"fill", h:T("Поставь в женский род","Put into the feminine"), w:[
"-o → -a; согласная + a (тильда уходит); -e, -a, -í, -ense не меняются.",
"-o → -a; consonant + a (the accent goes); -e, -a, -í, -ense don’t change."], items:[
{q:"Él es francés. Ella es ___.", a:["francesa"]},
{q:"Él es argentino. Ella es ___.", a:["argentina"]},
{q:"Él es belga. Ella es ___.", a:["belga"]},
{q:"Él es japonés. Ella es ___.", a:["japonesa"]},
{q:"Él es canadiense. Ella es ___.", a:["canadiense"]},
{q:"Él es español. Ella es ___.", a:["española"]}
]}]
},
"es2-sustantivos": {
theory: ESERR([
["la problema","el problema",T("На -ma, но мужской род.","Ends in -ma but is masculine.")],
["el mano","la mano",T("На -o, но женский род.","Ends in -o but is feminine.")],
["las ciudads","las ciudades",T("После согласной — -es.","After a consonant add -es.")],
["el canción","la canción",T("-ción — всегда женский род.","-ción is always feminine.")]
]),
ex:[{t:"mc", h:T("el или la?","el or la?"), w:[
"-o обычно м. р., -a обычно ж. р.; -ción, -dad — ж. р.; исключения: el día, el idioma, el problema, la mano, la foto, la radio.",
"-o is usually masc., -a usually fem.; -ción, -dad — fem.; exceptions: el día, el idioma, el problema, la mano, la foto, la radio."], items:[
{q:"___ idioma", o:["el","la"], a:0},
{q:"___ foto", o:["la","el"], a:0},
{q:"___ ciudad", o:["la","el"], a:0},
{q:"___ día", o:["el","la"], a:0},
{q:"___ televisión", o:["la","el"], a:0},
{q:"___ viaje", o:["el","la"], a:0}
]}]
},
"es2-presente": {
theory: ESERR([
["vosotros comís","vosotros coméis",T("-er: coméis; -ir: vivís.","-er: coméis; -ir: vivís.")],
["nosotros vivemos","nosotros vivimos",T("-ir: nosotros -imos.","-ir: nosotros -imos.")],
["yo hace","yo hago",T("hacer: особая форма yo.","hacer has a special yo form.")],
["ellos hablen","ellos hablan",T("-ar: ellos -an; -er/-ir: ellos -en.","-ar: ellos -an; -er/-ir: ellos -en.")]
]),
ex:[{t:"mc", h:T("Найди правильную форму","Find the correct form"), w:[
"-ar: -o, -as, -a, -amos, -áis, -an; -er: -o, -es, -e, -emos, -éis, -en; -ir: как -er, но -imos, -ís.",
"-ar: -o, -as, -a, -amos, -áis, -an; -er: -o, -es, -e, -emos, -éis, -en; -ir: like -er but -imos, -ís."], items:[
{q:"Vosotros ___ (comer)", o:["coméis","comís","comáis"], a:0},
{q:"Nosotros ___ (vivir)", o:["vivimos","vivemos","vivamos"], a:0},
{q:"Ellos ___ (hablar)", o:["hablan","hablen","hablon"], a:0},
{q:"Yo ___ (hacer)", o:["hago","hace","haco"], a:0},
{q:"Tú ___ (escribir)", o:["escribes","escribis","escribas"], a:0}
]}]
},
"es2-querer": {
theory: ESERR([
["Yo quero viajar.","Yo quiero viajar.",T("e → ie в корне: quiero, quieres, quiere, quieren.","e → ie in the stem: quiero, quieres, quiere, quieren.")],
["Quiero a viajar.","Quiero viajar.",T("После querer инфинитив идёт без предлога.","No preposition before the infinitive after querer.")],
["Vosotros quieréis…","Vosotros queréis…",T("У nosotros и vosotros корень не меняется.","nosotros and vosotros keep the regular stem.")]
]),
ex:[{t:"fill", h:T("Поставь querer в нужную форму","Put querer in the right form"), w:[
"querer: quiero, quieres, quiere, queremos, queréis, quieren — «ботинок» без nosotros и vosotros.",
"querer: quiero, quieres, quiere, queremos, queréis, quieren — the «boot» skips nosotros and vosotros."], items:[
{q:"Yo ___ aprender español.", a:["quiero"]},
{q:"¿Vosotros ___ viajar a México?", a:["queréis"]},
{q:"Nosotros ___ ver la película.", a:["queremos"]},
{q:"Mis amigos ___ visitar Perú.", a:["quieren"]},
{q:"¿Qué ___ hacer tú este fin de semana?", a:["quieres"]}
]}]
},
"es2-motivos": {
theory: ESERR([
["¿Porqué estudias español?","¿Por qué estudias español?",T("В вопросе — два слова и тильда.","In a question it’s two words with an accent.")],
["Estudio español por viajar.","Estudio español para viajar.",T("Цель + инфинитив — para.","A goal + infinitive — para.")],
["Estudio español porque mi trabajo.","Estudio español por mi trabajo.",T("porque — только перед глаголом в личной форме.","porque only goes before a conjugated verb.")]
]),
ex:[{t:"mc", h:T("por, para или porque?","por, para or porque?"), w:[
"Дальше существительное — por; инфинитив — para; спряжённый глагол — porque.",
"Followed by a noun — por; an infinitive — para; a conjugated verb — porque."], items:[
{q:"Estudio español ___ mi novia.", o:["por","para","porque"], a:0},
{q:"Estudio español ___ trabajar en Madrid.", o:["para","por","porque"], a:0},
{q:"Estudio español ___ me gusta la música latina.", o:["porque","por","para"], a:0},
{q:"– ¿___ estudias español? – Porque quiero viajar.", o:["Por qué","Porque","Para"], a:0},
{q:"Quiero ir a Cuba ___ la música.", o:["por","para","porque"], a:0}
]}]
},
"es3-ser-estar-hay": {
theory: ESERR([
["Madrid es en España.","Madrid está en España.",T("Местонахождение — estar.","Location uses estar.")],
["Hay el museo Guggenheim en Bilbao.","El museo Guggenheim está en Bilbao.",T("hay не сочетается с el/la/los/las.","hay never goes with el/la/los/las.")],
["En Chile están muchas montañas.","En Chile hay muchas montañas.",T("Что есть где-то — hay.","What exists somewhere — hay.")],
["Perú está muy bonito.","Perú es muy bonito.",T("Описание места — ser.","Describing a place — ser.")]
]),
ex:[{t:"mc", h:T("Найди правильную фразу","Find the correct sentence"), w:[
"Где находится конкретная вещь — estar; что есть (un/una, число, mucho) — hay; какой это — ser.",
"Where a specific thing is — estar; what there is (un/una, numbers, mucho) — hay; what it’s like — ser."], items:[
{q:T("Лима находится в Перу.","Lima is in Peru."), o:["Lima está en Perú.","Lima es en Perú.","Lima hay en Perú."], a:0},
{q:T("В Барселоне есть красивый пляж.","There’s a nice beach in Barcelona."), o:["En Barcelona hay una playa bonita.","En Barcelona está una playa bonita.","En Barcelona hay la playa bonita."], a:0},
{q:T("Кордова очень красивая.","Córdoba is very beautiful."), o:["Córdoba es muy bonita.","Córdoba está muy bonita.","Córdoba hay muy bonita."], a:0},
{q:T("Где находится музей Прадо?","Where is the Prado Museum?"), o:["¿Dónde está el museo del Prado?","¿Dónde es el museo del Prado?","¿Dónde hay el museo del Prado?"], a:0},
{q:T("В Мексике много вулканов.","There are many volcanoes in Mexico."), o:["En México hay muchos volcanes.","En México están muchos volcanes.","En México son muchos volcanes."], a:0}
]}]
},
"es3-muy-mucho": {
theory: ESERR([
["Hay muy montañas.","Hay muchas montañas.",T("Перед существительным — mucho/a/os/as.","Before a noun — mucho/a/os/as.")],
["Es mucho bonito.","Es muy bonito.",T("Перед прилагательным — muy.","Before an adjective — muy.")],
["Llueve muy.","Llueve mucho.",T("После глагола — mucho.","After a verb — mucho.")],
["muchos ciudades","muchas ciudades",T("mucho согласуется с существительным.","mucho agrees with the noun.")]
]),
ex:[{t:"fill", h:T("Вставь muy, mucho, mucha, muchos или muchas","Fill in muy, mucho, mucha, muchos or muchas"), w:[
"muy + прилагательное; mucho/a/os/as + существительное (согласуется); глагол + mucho.",
"muy + adjective; mucho/a/os/as + noun (agrees); verb + mucho."], items:[
{q:"Bogotá es una ciudad ___ grande.", a:["muy"]},
{q:"En Madrid hay ___ museos.", a:["muchos"]},
{q:"En Galicia llueve ___.", a:["mucho"]},
{q:"En la costa hay ___ playas.", a:["muchas"]},
{q:"En verano hay ___ gente en la playa.", a:["mucha"]}
]}]
},
"es3-preguntas": {
theory: ESERR([
["¿Qué es la capital de Perú?","¿Cuál es la capital de Perú?",T("Выбор одного из набора + ser — cuál.","Picking one from a set + ser — cuál.")],
["¿Donde está Cádiz?","¿Dónde está Cádiz?",T("Вопросительные слова — с тильдой.","Question words carry an accent.")],
["¿Cuántos lenguas hablas?","¿Cuántas lenguas hablas?",T("cuánto согласуется с существительным.","cuánto agrees with the noun.")]
]),
ex:[{t:"mc", h:T("Выбери вопросительное слово","Choose the question word"), w:[
"cuál + ser для выбора из известного набора; qué + существительное или для определения; cuántos/cuántas согласуются.",
"cuál + ser to pick from a known set; qué + noun or for a definition; cuántos/cuántas agree."], items:[
{q:"¿___ es la moneda de México?", o:["Cuál","Qué"], a:0},
{q:"¿___ es una arepa?", o:["Qué","Cuál"], a:0, e:T("Просим определение.","Asking for a definition.")},
{q:"¿___ habitantes tiene Chile?", o:["Cuántos","Cuántas"], a:0},
{q:"¿___ lenguas se hablan en España?", o:["Cuántas","Cuántos"], a:0},
{q:"¿___ idiomas hablas?", o:["Qué","Cuál"], a:0, e:T("Сразу существительное → qué.","A noun follows → qué.")}
]}]
},
"esg-ar": {
ex:[{t:"mc", h:T("Найди правильную форму","Find the correct form"), w:[
"-ar: -o, -as, -a, -amos, -áis, -an. estar: estoy, estás, está… jugar: u → ue (juego, juegas…).",
"-ar: -o, -as, -a, -amos, -áis, -an. estar: estoy, estás, está… jugar: u → ue (juego, juegas…)."], items:[
{q:"Yo ___ (estar)", o:["estoy","esto","está"], a:0},
{q:"Vosotros ___ (trabajar)", o:["trabajáis","trabajéis","trabajan"], a:0},
{q:"Ellos ___ (jugar)", o:["juegan","jugan","juegen"], a:0},
{q:"Nosotros ___ (jugar)", o:["jugamos","juegamos","jugemos"], a:0},
{q:"Tú ___ (escuchar)", o:["escuchas","escuches","escuchás"], a:0}
]}]
},
"esg-er": {
ex:[{t:"mc", h:T("Найди правильную форму","Find the correct form"), w:[
"-er: -o, -es, -e, -emos, -éis, -en. ser, tener, hacer, querer, poder — неправильные: soy, tengo, hago, quiero, puedo.",
"-er: -o, -es, -e, -emos, -éis, -en. ser, tener, hacer, querer, poder are irregular: soy, tengo, hago, quiero, puedo."], items:[
{q:"Yo ___ (tener)", o:["tengo","teno","tieno"], a:0},
{q:"Ella ___ (poder)", o:["puede","pode","poda"], a:0},
{q:"Vosotros ___ (leer)", o:["leéis","leís","leen"], a:0},
{q:"Nosotros ___ (tener)", o:["tenemos","tienemos","tenimos"], a:0},
{q:"Tú ___ (ser)", o:["eres","es","sos"], a:0}
]}]
},
"esg-ir": {
ex:[{t:"mc", h:T("Найди правильную форму","Find the correct form"), w:[
"-ir: -o, -es, -e, -imos, -ís, -en. ir: voy, vas, va… venir: vengo, vienes… salir: salgo; decir: digo; pedir: pido.",
"-ir: -o, -es, -e, -imos, -ís, -en. ir: voy, vas, va… venir: vengo, vienes… salir: salgo; decir: digo; pedir: pido."], items:[
{q:"Yo ___ (ir)", o:["voy","vo","iro"], a:0},
{q:"Nosotros ___ (vivir)", o:["vivimos","vivemos","vivamos"], a:0},
{q:"Yo ___ (salir)", o:["salgo","salo","sallo"], a:0},
{q:"Ellos ___ (venir)", o:["vienen","venen","vienan"], a:0},
{q:"Vosotros ___ (escribir)", o:["escribís","escribéis","escriben"], a:0}
]}]
}
});

function ES_PLUS_APPLY(list){
  const P = ES_PLUS();
  list.forEach(tp=>{
    const x = P[tp.id]; if (!x) return;
    if (x.theory) tp.theory += x.theory;
    if (x.ex) tp.ex.push(...x.ex);
    if (x.ex && WHY[tp.id] && WHY[tp.id].length < tp.ex.length) WHY[tp.id].push(...x.ex.map(e=>e.w || ["",""]));
  });
}
