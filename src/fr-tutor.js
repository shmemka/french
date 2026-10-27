/* =========================================================
   FRANÇAIS — Tutor: задания от репетитора (sec:"tutor", массив TUT в движке).
   Двуязычная сборка через TF (FRL из fr-u3.js). Темы добавляются в конец
   TOPICS / TOPICS_EN; группируются по юниту, к которому относится тема.
   Новые задания — новой темой (или в конец существующей) + запись в WHY2.
   ========================================================= */
function FR_TUTOR(L){
  const keepHL = HL, keepFRL = FRL; FRL = L; HL = L;
  try { return FR_TUTOR_TOPICS(); } finally { HL = keepHL; FRL = keepFRL; }
}
function FR_TUTOR_TOPICS(){
const link = (id, name) => `<a class="btn sm sec" href="#${id}">${TF("Теория", "Theory")}: ${name}${f7("arrow_right", "f7-arr")}</a>`;
return [
{
id:"t-possessifs-1", sec:"tutor", unit:"2", kind:TF("Задание репетитора", "Tutor’s task"),
title:"Les adjectifs possessifs", ru:TF("Вставь притяжательное прилагательное: 15 предложений", "Fill in the possessive adjective: 15 sentences"), page:"",
theory:`
${RULE(TF("Как выбрать форму", "How to pick the form"), `<p>${TF(
"Сначала смотри, <b>чьё</b> это (je, tu, il/elle, nous, vous, ils/elles), потом на то, <b>что</b> это: м. р., ж. р. или мн. ч. Род владельца не важен: «son livre» — и его, и её книга.",
"First look at <b>whose</b> it is (je, tu, il/elle, nous, vous, ils/elles), then at <b>what</b> it is: masculine, feminine or plural. The owner’s gender doesn’t matter: «son livre» is both his and her book.")}</p>
${TBL([TF("Чьё","Whose"), TF("м. р.","masc."), TF("ж. р.","fem."), TF("мн. ч.","plural")], [
["je", F("mon"), F("ma"), F("mes")],
["tu", F("ton"), F("ta"), F("tes")],
["il / elle", F("son"), F("sa"), F("ses")],
["nous", F("notre"), F("notre"), F("nos")],
["vous", F("votre"), F("votre"), F("vos")],
["ils / elles", F("leur"), F("leur"), F("leurs")]
])}`)}
${NOTE(TF("Перед словом ж. р. на гласную или немую h вместо ma, ta, sa ставят mon, ton, son: <span class=\"fr\">son amie</span>, <span class=\"fr\">mon école</span>.",
"Before a feminine word starting with a vowel or silent h, use mon, ton, son instead of ma, ta, sa: <span class=\"fr\">son amie</span>, <span class=\"fr\">mon école</span>."))}
<p class="cah-links">${link("u2-possessifs", "Les adjectifs possessifs")}</p>
`,
ex:[
{t:"fill", h:TF("Écrivez l’adjectif possessif approprié: mon, ma, mes, ton, ta, tes, son, sa, ses, notre, nos, votre, vos, leur, leurs", "Écrivez l’adjectif possessif approprié: mon, ma, mes, ton, ta, tes, son, sa, ses, notre, nos, votre, vos, leur, leurs"), items:[
{q:"C’est le livre de Robert. C’est ___ livre.", a:["son"]},
{q:"C’est la sœur de Robert. C’est ___ sœur.", a:["sa"]},
{q:"C’est la petite amie de Robert. C’est ___ amie.", a:["son"]},
{q:"Ce sont les parents de Mireille et de Marie-Laure. Ce sont ___ parents.", a:["leurs"]},
{q:"C’est la classe des étudiants. C’est ___ classe.", a:["leur"]},
{q:"J’ai une radio. C’est ___ radio.", a:["ma"]},
{q:"Nous avons une maison. C’est ___ maison.", a:["notre"]},
{q:"Tu as des amis. Ce sont ___ amis.", a:["tes"]},
{q:"Vous avez des problèmes. Ce sont ___ problèmes.", a:["vos"]},
{q:"Tu as un stylo. C’est ___ stylo.", a:["ton"]},
{q:"Vous avez une voiture. C’est ___ voiture.", a:["votre"]},
{q:"J’ai des idées. Ce sont ___ idées.", a:["mes"]},
{q:"Nous avons des amis. Ce sont ___ amis.", a:["nos"]},
{q:"J’ai un appartement. C’est ___ appartement.", a:["mon"]},
{q:"Michel a des cousins. Ce sont ___ cousins.", a:["ses"]}
]}
]}
];
}

WHY2_ADD({"t-possessifs-1": [
{r:["Форма зависит от двух вещей: чьё (je → mon/ma/mes, tu → ton/ta/tes, il/elle → son/sa/ses, nous → notre/nos, vous → votre/vos, ils/elles → leur/leurs) и что (м. р., ж. р., мн. ч.). Род владельца не важен. Перед ж. р. на гласную: mon, ton, son.",
"The form depends on two things: whose (je → mon/ma/mes, tu → ton/ta/tes, il/elle → son/sa/ses, nous → notre/nos, vous → votre/vos, ils/elles → leur/leurs) and what (masc., fem., plural). The owner’s gender doesn’t matter. Before a feminine word with a vowel: mon, ton, son."],
 i:[["Владелец Robert = il, livre м. р. ед. ч. → son livre.","The owner Robert = il, livre is masc. sing. → son livre."],
    ["Robert = il, sœur ж. р. → sa sœur. Род Robert не важен, важен род слова sœur.","Robert = il, sœur is feminine → sa sœur. Robert’s gender doesn’t matter, the gender of sœur does."],
    ["amie ж. р., но начинается с гласной → не sa, а son: son‿amie [n].","amie is feminine but starts with a vowel → not sa but son: son‿amie [n]."],
    ["Владельцев двое (Mireille et Marie-Laure = elles), родителей несколько → leurs parents.","Two owners (Mireille et Marie-Laure = elles), several parents → leurs parents."],
    ["Владельцы — студенты (ils), но класс один → leur classe (без -s).","The owners are students (ils), but there’s one class → leur classe (no -s)."],
    ["Владелец je, radio ж. р. (la radio) на согласную → ma radio.","Owner je, radio is feminine (la radio) with a consonant → ma radio."],
    ["Владелец nous, дом один → notre maison (у notre одна форма для м. и ж. р.).","Owner nous, one house → notre maison (notre is the same for masc. and fem.)."],
    ["Владелец tu, друзей несколько → tes amis (связывание tes‿amis [z]).","Owner tu, several friends → tes amis (liaison tes‿amis [z])."],
    ["Владелец vous, проблем несколько → vos problèmes.","Owner vous, several problems → vos problèmes."],
    ["Владелец tu, stylo м. р. ед. ч. → ton stylo.","Owner tu, stylo is masc. sing. → ton stylo."],
    ["Владелец vous, машина одна → votre voiture.","Owner vous, one car → votre voiture."],
    ["Владелец je, идей несколько → mes idées (mes‿idées [z]).","Owner je, several ideas → mes idées (mes‿idées [z])."],
    ["Владелец nous, друзей несколько → nos amis (nos‿amis [z]).","Owner nous, several friends → nos amis (nos‿amis [z])."],
    ["Владелец je, appartement м. р. → mon appartement (mon‿appartement [n]).","Owner je, appartement is masculine → mon appartement (mon‿appartement [n])."],
    ["Michel = il, кузенов несколько → ses cousins.","Michel = il, several cousins → ses cousins."]]}
]});

(function(){
  const ru = FR_TUTOR("ru"), en = FR_TUTOR("en");
  ru.forEach((tp, k)=>{ if (!WHY[tp.id]) WHY[tp.id] = tp.ex.map(()=>["",""]); TOPICS.push(tp); TOPICS_EN.push(en[k]); });
})();
