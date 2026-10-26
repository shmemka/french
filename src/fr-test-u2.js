/* =========================================================
   FRANÇAIS — Livre · «Test unité 2» (Guide pédagogique, с. 51–52)
   Двуязычная сборка через TF (FRL из fr-u3.js). Тема вставляется
   в TOPICS / TOPICS_EN сразу после u2-phonetique (последняя тема юнита 2).
   Упр. 9 (Compréhension orale): записи нет, диалог восстановлен по
   расшифровке и озвучивается синтезом речи в мини-плеере (DLG["fr-u2-test"], кнопка data-dlg).
   ========================================================= */
function FR_TEST_U2(L){
  const keepHL = HL, keepFRL = FRL; FRL = L; HL = L;
  try { return FR_TEST_U2_TOPIC(); } finally { HL = keepHL; FRL = keepFRL; }
}
const FR_U2_DIALOG = [
  /* [кто, реплика, перевод ru, перевод en] — перевод показывается в плеере в режиме «слова + перевод» */
  ["Astrid", "Allô ? Oncle Armand ? C’est Astrid.", "Алло? Дядя Арман? Это Астрид.", "Hello? Uncle Armand? It’s Astrid."],
  ["Armand", "Oh, Astrid, ma chérie ! Comment vas-tu ?", "О, Астрид, дорогая! Как ты?", "Oh, Astrid, my dear! How are you?"],
  ["Astrid", "Très, très bien. Je prépare mon mariage !", "Очень-очень хорошо. Я готовлюсь к свадьбе!", "Very, very well. I’m getting ready for my wedding!"],
  ["Armand", "Bravo, c’est fantastique ! Avec… oh, comment il s’appelle… euh… Hector ?", "Браво, это потрясающе! С… ох, как его зовут… э-э… Гектором?", "Bravo, that’s fantastic! With… oh, what’s his name… er… Hector?"],
  ["Astrid", "Non, oncle Armand, c’est Victor !", "Нет, дядя Арман, это Виктор!", "No, Uncle Armand, it’s Victor!"],
  ["Armand", "Oui, pardon. Victor, pas Hector. Félicitations !", "Да, извини. Виктор, не Гектор. Поздравляю!", "Yes, sorry. Victor, not Hector. Congratulations!"],
  ["Astrid", "Merci. Je t’invite. C’est en mai.", "Спасибо. Я тебя приглашаю. Это в мае.", "Thanks. I’m inviting you. It’s in May."],
  ["Armand", "Oui, mais…", "Да, но…", "Yes, but…"],
  ["Astrid", "Oui, tu adores le cinéma… Mais, oncle Armand, c’est mon mariage !", "Да, ты обожаешь кино… Но, дядя Арман, это же моя свадьба!", "Yes, you love cinema… But, Uncle Armand, it’s my wedding!"]
];
DLG["fr-u2-test"] = {lang:"fr", title:"Test unité 2 · Compréhension orale", lines:FR_U2_DIALOG};
function FR_TEST_U2_TOPIC(){
const N = n => TF("Упр. ", "Ex. ") + n + " · ";
const link = (id, name) => `<a class="btn sm sec" href="#${id}">${TF("Теория", "Theory")}: ${name} →</a>`;
const DIALOG = `<span class="t2-aud"><button type="button" class="btn sm sec dlg-btn" data-dlg="fr-u2-test">${f7("play_fill")}${TF("Слушать диалог", "Play the dialogue")}</button></span>
<details class="t2-tr"><summary>${TF("Текст диалога (открой, если не расслышал)", "Dialogue text (open if you didn’t catch it)")}</summary>${FR_U2_DIALOG.map(([who, s])=>`<span class="t2-l"><b>${who}</b> <span class="fr">${s}</span></span>`).join("")}</details><br>`;
const THIAGO = "Bonjour, moi c’est Thiago ! Je suis portugais et j’ai 38 ans. J’ai une grande famille. J’ai trois frères et une sœur. Mes deux frères, Paulo et Mateo, sont célibataires. Mon frère Leo a deux filles, elles s’appellent Vanessa et Victoria. Ma sœur, Amanda, a un fils, João. Il est fils unique. Mes parents sont âgés : mon père a 79 ans et ma mère a 76 ans. Ma famille habite à 5 minutes de la mer. Mais moi, j’habite en ville, à Paris, avec ma femme Alice. Elle est française et elle a 37 ans.";
const PETIT = "Madame Petit travaille dans un hôpital. Elle adore son travail et aime aider les autres. Elle joue au basket-ball avec ses enfants le week-end.";
return {
id:"u2-test", sec:"book", unit:"2", kind:"Test",
title:"Test unité 2", ru:TF("Итоговый тест юнита 2 «Près de moi»","End-of-unit test, unit 2 «Près de moi»"), page:TF("тест, с. 51–52","test, p. 51–52"),
theory:`
${RULE(TF("Как проходить","How to do it"), `<p>${TF(
"Это официальный тест к юниту 2. Реши всё без подсказок и теории, потом открой «?» у ошибок: там разбор именно этого вопроса и правило.",
"This is the official test for unit 2. Do everything without hints or theory, then open «?» on your mistakes: it explains that exact question and gives the rule.")}</p>
<p>${TF(
"Баллы как в оригинале: каждое упражнение 5 баллов, всего 50. Чтобы получить оценку по французской шкале /20, раздели сумму на 2,5. Упражнение 11 по фонетике бонусное.",
"Scoring as in the original: each exercise is worth 5 points, 50 in total. To get the French /20 mark, divide by 2.5. Exercise 11 on phonetics is a bonus.")}</p>`)}
${NOTE(TF("Упражнение 9 (аудирование): записи из учебника здесь нет, поэтому диалог читает синтезатор речи. Текст восстановлен по расшифровке записи; сначала послушай, текст открывай, только если не расслышал.","Exercise 9 (listening): the book’s recording isn’t available here, so the dialogue is read by speech synthesis. The text was restored from a transcript of the recording; listen first and open the text only if you didn’t catch it."))}
<p class="cah-links">${[["u2-articles","Articles"],["u2-verbes-er","Verbes en -er"],["u2-possessifs","Possessifs"],["u2-professions","Professions"],["u2-gouts","Loisirs et goûts"],["u2-famille","La famille"],["u2-phonetique","Liaisons"]].map(([id, n])=>link(id, n)).join(" ")}</p>
`,
ex:[
{t:"mc", h:N(1)+"Grammaire — "+TF("выбери артикль","choose the article"), items:[
{q:"À Paris, il y a ___ universités.", o:["des","les"], a:0},
{q:"Peter habite ___ quartier Montchat à Lyon.", o:["un","le"], a:1},
{q:"J’ai ___ guitare électrique.", o:["une","la"], a:0},
{q:"Terry adore ___ danse.", o:["une","la"], a:1},
{q:"Mon frère habite dans ___ rue calme.", o:["une","la"], a:0}
]},
{t:"fill", h:N(2)+"Grammaire — "+TF("поставь глагол в настоящее время","put the verb in the present tense"), items:[
{q:"Nous ___ italien. (parler)", a:["parlons"]},
{q:"Tu ___ place Kléber. (habiter)", a:["habites"]},
{q:"Ils ___ le cinéma. (aimer)", a:["aiment"]},
{q:"Vous ___ la montagne. (détester)", a:["détestez"]},
{q:"Je ___ à Cannes. (travailler)", a:["travaille"]}
]},
{t:"fill", h:N(3)+"Grammaire — "+TF("вставь притяжательное прилагательное","fill in the possessive adjective"), items:[
{q:"J’ai deux frères. ___ frères s’appellent Arturo et Alexis.", a:["mes"]},
{q:"Anna et Farid ont une fille. ___ fille s’appelle Jeanne.", a:["leur"]},
{q:"Nous avons deux enfants. ___ enfants adorent la mer !", a:["nos"]},
{q:"Et vous, Stefania, comment s’appelle ___ père ?", a:["votre"]},
{q:"Et toi, Sara, quel est le nom de ___ quartier ?", a:["ton"]}
]},
{t:"fill", h:N(4)+"Grammaire — "+TF("профессия в нужном роде","the profession in the right gender"), items:[
{q:"Ma femme est ___. (infirmier)", a:["infirmière"], long:true},
{q:"Rosa ? Elle est ___. (fleuriste)", a:["fleuriste"], long:true},
{q:"Ma sœur Julia est ___. (acteur)", a:["actrice"], long:true},
{q:"Ma petite amie est ___. (informaticien)", a:["informaticienne"], long:true},
{q:"Elle est ___. (professeur)", a:["professeure","professeur"], long:true}
]},
{t:"fill", h:N(5)+"Vocabulaire — "+TF("вставь слово: plage, quartier, piano, Festival, université","fill in: plage, quartier, piano, Festival, université"), items:[
{q:"J’habite un ___ sympa.", a:["quartier"]},
{q:"Michelle est étudiante, elle est à l’___.", a:["université"]},
{q:"J’adore la mer et j’aime marcher sur la ___.", a:["plage"]},
{q:"Elle aime les instruments de musique, elle a un ___.", a:["piano"]},
{q:"Il aime le cinéma et il adore le ___ de Cannes !", a:["festival"]}
]},
{t:"fill", h:N(6)+"Vocabulaire — "+TF("найди глагол (le travail → travailler)","find the verb (le travail → travailler)"), items:[
{q:"la danse →", a:["danser"], long:true},
{q:"la marche →", a:["marcher"], long:true},
{q:"la natation →", a:["nager"], long:true},
{q:"le ski →", a:["skier"], long:true},
{q:"l’habitation →", a:["habiter"], long:true}
]},
{t:"mc", h:N(7)+"Vocabulaire — "+TF("найди лишнее (chassez l’intrus)","find the odd one out (chassez l’intrus)"), items:[
{q:"la rue – la petite-fille – la plage – la mer", o:["la rue","la petite-fille","la plage","la mer"], a:1},
{q:"célibataire – la guitare – le piano – l’instrument de musique", o:["célibataire","la guitare","le piano","l’instrument de musique"], a:0},
{q:"le grand-père – le père – la tante – le frère", o:["le grand-père","le père","la tante","le frère"], a:2},
{q:"la cousine – la nièce – la petite-fille – le neveu", o:["la cousine","la nièce","la petite-fille","le neveu"], a:3},
{q:"le coiffeur – le mari – le petit ami – la femme", o:["le coiffeur","le mari","le petit ami","la femme"], a:0}
]},
{t:"fill", h:N(8)+"Vocabulaire — "+TF("вставь слово: neveu, femme, petits-fils, tante, célibataire","fill in: neveu, femme, petits-fils, tante, célibataire"), items:[
{q:"Je suis marié : ma ___ s’appelle Stella.", a:["femme"]},
{q:"Erika n’est pas mariée, elle est ___.", a:["célibataire"], long:true},
{q:"Svetlana est la sœur de ma mère : c’est ma ___.", a:["tante"]},
{q:"Antoine est le fils de mon frère : c’est mon ___.", a:["neveu"]},
{q:"Maxime et Louis sont les fils de la fille de Gérard et Annie : ce sont leurs ___.", a:["petits-fils"], long:true}
]},
{t:"mc", ctx:true, h:N(9)+TF("Compréhension orale — послушай диалог и ответь","Compréhension orale — listen to the dialogue and answer"), items:[
{q:`${DIALOG}Vrai ou faux ? Astrid est la fille d’Armand.`, o:["Vrai","Faux"], a:1},
{q:"Choisissez la bonne réponse :", o:["Astrid est mariée.","Astrid est célibataire.","Astrid a un petit ami."], a:2},
{q:"Comment s’appelle le marié ?", o:["Victor","Hector","Armand"], a:0},
{q:"Le mariage est quand ?", o:["en mai","en mars","en juin"], a:0},
{q:"Qu’est-ce qu’Armand adore ?", o:["le cinéma","la danse","la musique"], a:0}
]},
{t:"mc", ctx:true, h:N(10)+TF("Compréhension écrite — Тьяго рассказывает о семье","Compréhension écrite — Thiago talks about his family"), items:[
{q:`<span class="fr">${THIAGO}</span><br><br>Thiago a combien de neveux et de nièces ?`, o:[TF("трое: две племянницы и племянник","three: two nieces and a nephew"),TF("двое: две племянницы","two: two nieces"),TF("четверо","four")], a:0},
{q:"Vrai ou faux ? Vanessa a trois tantes.", o:["Vrai","Faux"], a:1},
{q:"Vrai ou faux ? Mateo est l’oncle de João.", o:["Vrai","Faux"], a:0},
{q:"Quel âge ont les grands-parents de Victoria ?", o:[TF("79 и 76 лет","79 and 76"),TF("38 и 37 лет","38 and 37"),TF("79 и 38 лет","79 and 38")], a:0},
{q:"Alice est célibataire ?", o:[TF("Нет, она жена Тьяго","No, she’s Thiago’s wife"),TF("Да","Yes"),TF("Нет, она сестра Тьяго","No, she’s Thiago’s sister")], a:0}
]},
{t:"mc", h:N(11)+TF("Phonie-graphie (бонус) — ударение и связывание","Phonie-graphie (bonus) — stress and liaison"), items:[
{q:`<span class="fr">${PETIT}</span><br><br>${TF("«dans un hôpital» — что слышим между un и hôpital?","«dans un hôpital» — what links un and hôpital?")}`, o:["[n]","[z]",TF("связывания нет","no liaison")], a:0},
{q:TF("«avec ses enfants» — что слышим между ses и enfants?","«avec ses enfants» — what links ses and enfants?"), o:["[z]","[s]",TF("связывания нет","no liaison")], a:0},
{q:TF("«aider les autres» — что слышим между les и autres?","«aider les autres» — what links les and autres?"), o:["[z]","[s]",TF("связывания нет","no liaison")], a:0},
{q:TF("«Madame Petit» — где ударение?","«Madame Petit» — where is the stress?"), o:[TF("на -tit","on -tit"),TF("на -dame","on -dame"),TF("на Ma-","on Ma-")], a:0},
{q:TF("«Madame Petit travaille dans un hôpital» — сколько ритмических групп?","«Madame Petit travaille dans un hôpital» — how many rhythmic groups?"), o:["2","1","6"], a:0}
]}
]};
}

WHY2_ADD({"u2-test": [
{r:["un / une / des — что-то одно из многих, впервые упомянутое (после il y a, j’ai, dans une…). le / la / les — конкретное, известное или «вообще» после глаголов вкуса (aimer, adorer, détester).",
"un / une / des — one of many, mentioned for the first time (after il y a, j’ai, dans une…). le / la / les — something specific, known, or «in general» after verbs of taste (aimer, adorer, détester)."],
 i:[["После il y a — неопределённый артикль: il y a des universités.","After il y a use the indefinite article: il y a des universités."],
    ["Квартал назван (Montchat) — он конкретный → le quartier.","The district is named (Montchat), so it’s specific → le quartier."],
    ["После j’ai — неопределённый: j’ai une guitare (одна из многих гитар).","After j’ai use the indefinite: j’ai une guitare (one guitar among many)."],
    ["adorer + определённый артикль: танец «вообще» → la danse.","adorer takes the definite article: dance «in general» → la danse."],
    ["Какая-то тихая улица, впервые упомянутая → une rue calme.","Some quiet street, mentioned for the first time → une rue calme."]]},
{r:["Глаголы на -er: основа (инфинитив без -er) + окончания -e, -es, -e, -ons, -ez, -ent. -e, -es, -ent не читаются.",
"-er verbs: stem (the infinitive minus -er) + endings -e, -es, -e, -ons, -ez, -ent. -e, -es, -ent are silent."],
 i:[["nous → -ons: parl + ons = parlons.","nous → -ons: parl + ons = parlons."],
    ["tu → -es: habit + es = habites.","tu → -es: habit + es = habites."],
    ["ils → -ent (не читается): aim + ent = aiment.","ils → -ent (silent): aim + ent = aiment."],
    ["vous → -ez: détest + ez = détestez.","vous → -ez: détest + ez = détestez."],
    ["je → -e: travaill + e = travaille.","je → -e: travaill + e = travaille."]]},
{r:["Притяжательное зависит от владельца и от того, чем владеют: je → mon/ma/mes, tu → ton/ta/tes, nous → notre/nos, vous → votre/vos, ils → leur/leurs.",
"The possessive depends on the owner and on what is owned: je → mon/ma/mes, tu → ton/ta/tes, nous → notre/nos, vous → votre/vos, ils → leur/leurs."],
 i:[["Владелец je, братьев много → mes frères.","Owner je, several brothers → mes frères."],
    ["Владельцев двое (Anna et Farid = ils), дочь одна → leur fille.","Two owners (Anna et Farid = ils), one daughter → leur fille."],
    ["Владелец nous, детей несколько → nos enfants.","Owner nous, several children → nos enfants."],
    ["Обращение на vous, отец один → votre père.","Addressed as vous, one father → votre père."],
    ["Обращение на toi, quartier м. р. ед. ч. → ton quartier.","Addressed as toi, quartier is masc. sing. → ton quartier."]]},
{r:["Женский род профессий: -ier → -ière, -teur → -trice, -ien → -ienne; на -e не меняется (fleuriste). Professeur: professeur или professeure.",
"Feminine professions: -ier → -ière, -teur → -trice, -ien → -ienne; words in -e don’t change (fleuriste). Professeur: professeur or professeure."],
 i:[["Ma femme — женщина; -ier → -ière: infirmière.","Ma femme is a woman; -ier → -ière: infirmière."],
    ["fleuriste уже кончается на -e → не меняется.","fleuriste already ends in -e → no change."],
    ["-teur → -trice: acteur → actrice.","-teur → -trice: acteur → actrice."],
    ["-ien → -ienne (n удваивается): informaticienne.","-ien → -ienne (double n): informaticienne."],
    ["Сейчас пишут professeure; форма professeur для женщины тоже верна.","Today people write professeure; professeur for a woman is also correct."]]},
{r:["Подставляй слово по смыслу и по артиклю перед пропуском: un → м. р., la / l’ → определённый.",
"Pick the word by meaning and by the article before the gap: un → masculine, la / l’ → definite."],
 i:[["un + м. р. + sympa → un quartier sympa.","un + masc. noun + sympa → un quartier sympa."],
    ["Студентка учится в университете; l’ перед гласной → l’université.","A student studies at university; l’ before a vowel → l’université."],
    ["Море и гулять «по» → marcher sur la plage.","The sea and walking «on» → marcher sur la plage."],
    ["Музыкальный инструмент, un → un piano.","A musical instrument with un → un piano."],
    ["Кино + Канны → le Festival de Cannes.","Cinema + Cannes → le Festival de Cannes."]]},
{r:["Многие занятия образуют глагол на -er от той же основы: la danse → danser. Но бывают и другие основы: la natation → nager.",
"Many activities give an -er verb from the same stem: la danse → danser. But some use another stem: la natation → nager."],
 i:[["danse → dans + er = danser.","danse → dans + er = danser."],
    ["marche → march + er = marcher.","marche → march + er = marcher."],
    ["natation — от латинского корня, глагол другой: nager (nous nageons).","natation comes from a Latin root; the verb is different: nager (nous nageons)."],
    ["ski → skier (je skie, nous skions).","ski → skier (je skie, nous skions)."],
    ["habitation → habiter (j’habite).","habitation → habiter (j’habite)."]]},
{r:["Ищи общую категорию у трёх слов: места / музыка / мужчины в семье / женщины в семье / семья и отношения.",
"Find the category three words share: places / music / male relatives / female relatives / family and relationships."],
 i:[["Улица, пляж, море — места; la petite-fille — внучка (семья).","Street, beach, sea are places; la petite-fille is a granddaughter (family)."],
    ["Гитара, пианино, инструмент — музыка; célibataire — семейное положение.","Guitar, piano, instrument are music; célibataire is marital status."],
    ["Дедушка, отец, брат — мужчины; la tante — женщина.","Grandfather, father, brother are men; la tante is a woman."],
    ["Кузина, племянница, внучка — женщины; le neveu — мужчина.","Cousin, niece, granddaughter are women; le neveu is a man."],
    ["Муж, парень, жена — семья и отношения; le coiffeur — профессия.","Husband, boyfriend, wife are family and relationships; le coiffeur is a profession."]]},
{r:["Семья: la femme (жена), célibataire (не в браке), la tante (сестра мамы или папы), le neveu (сын брата или сестры), les petits-fils (сыновья сына или дочери).",
"Family: la femme (wife), célibataire (single), la tante (parent’s sister), le neveu (sibling’s son), les petits-fils (grandsons)."],
 i:[["Je suis marié → ma femme (жена).","Je suis marié → ma femme (wife)."],
    ["n’est pas mariée → célibataire.","n’est pas mariée → célibataire."],
    ["Сестра мамы → ma tante.","Mother’s sister → ma tante."],
    ["Сын брата → mon neveu.","Brother’s son → mon neveu."],
    ["Сыновья их дочери → leurs petits-fils (мн. ч., с дефисом).","Their daughter’s sons → leurs petits-fils (plural, hyphenated)."]]},
{r:["В аудировании держи в голове вопросы и лови ключевые слова: обращение (oncle), имена, месяц, глагол вкуса (adorer).",
"When listening, keep the questions in mind and catch the key words: the form of address (oncle), names, the month, the verb of taste (adorer)."],
 i:[["Астрид говорит «Oncle Armand» → она его племянница, не дочь → Faux.","Astrid says «Oncle Armand» → she’s his niece, not his daughter → Faux."],
    ["«Je prépare mon mariage» → она ещё не замужем, но у неё есть жених → a un petit ami.","«Je prépare mon mariage» → she isn’t married yet but has a fiancé → a un petit ami."],
    ["Арман путает: Hector. Астрид поправляет: «c’est Victor».","Armand gets it wrong: Hector. Astrid corrects him: «c’est Victor»."],
    ["«C’est en mai» → свадьба в мае.","«C’est en mai» → the wedding is in May."],
    ["«Tu adores le cinéma» → Арман обожает кино.","«Tu adores le cinéma» → Armand loves cinema."]]},
{r:["Нарисуй семью по тексту: у Тьяго братья Paulo, Mateo, Leo и сестра Amanda; у Leo дочери Vanessa и Victoria; у Amanda сын João; жена Тьяго Alice.",
"Draw the family from the text: Thiago’s brothers are Paulo, Mateo and Leo, his sister is Amanda; Leo’s daughters are Vanessa and Victoria; Amanda’s son is João; Thiago’s wife is Alice."],
 i:[["Дочери Leo (2 племянницы) + сын Amanda (1 племянник) = 3.","Leo’s daughters (2 nieces) + Amanda’s son (1 nephew) = 3."],
    ["У Vanessa тётя Amanda (и жена Тьяго Alice), а Thiago, Paulo, Mateo — дяди. Трёх тёть нет → Faux.","Vanessa’s aunt is Amanda (and Thiago’s wife Alice); Thiago, Paulo, Mateo are uncles. Not three aunts → Faux."],
    ["João — сын Amanda, Mateo — брат Amanda → дядя João → Vrai.","João is Amanda’s son, Mateo is Amanda’s brother → João’s uncle → Vrai."],
    ["Бабушка и дедушка Victoria — родители Тьяго и Leo: 79 и 76 лет.","Victoria’s grandparents are Thiago and Leo’s parents: 79 and 76."],
    ["«avec ma femme Alice» → Alice замужем за Тьяго.","«avec ma femme Alice» → Alice is married to Thiago."]]},
{r:["Связывание обязательно после артиклей и притяжательных перед гласной или немой h: un‿hôpital [n], ses‿enfants [z], les‿autres [z]. Ударение — на последний слог ритмической группы.",
"Liaison is compulsory after articles and possessives before a vowel or silent h: un‿hôpital [n], ses‿enfants [z], les‿autres [z]. Stress falls on the last syllable of the rhythmic group."],
 i:[["h в hôpital немая → un‿hôpital [œ̃nɔpital].","The h in hôpital is silent → un‿hôpital [œ̃nɔpital]."],
    ["s перед гласной читается как [z]: ses‿enfants.","s before a vowel is pronounced [z]: ses‿enfants."],
    ["les‿autres [lezotʁ] — тоже [z].","les‿autres [lezotʁ] is also [z]."],
    ["Madame Petit — конец группы, ударение на последний слог Pe-TIT.","Madame Petit ends a group, stress on the last syllable Pe-TIT."],
    ["Madame Petit | travaille dans un hôpital — подлежащее и сказуемое, 2 группы.","Madame Petit | travaille dans un hôpital — subject and predicate, 2 groups."]]}
]});

(function(){
  const ru = FR_TEST_U2("ru"), en = FR_TEST_U2("en");
  if (!WHY[ru.id]) WHY[ru.id] = ru.ex.map(()=>["",""]);
  const put = (list, tp) => { const i = list.findIndex(x=>x.id === "u2-phonetique"); if (i >= 0) list.splice(i + 1, 0, tp); else list.push(tp); };
  put(TOPICS, ru); put(TOPICS_EN, en);
})();
