/* =========================================================
   FRANÇAIS — Livre · «Test unités 1–2» (контрольная по двум юнитам, 1 version)
   Раздаточный лист преподавателя, фото Влада 27.10.2026. Тема вставляется
   в самый конец юнита 2 (после u2-test). Двуязычная сборка через TF.
   Часть I (Compréhension orale, «Écoutez et complétez la fiche») пропущена —
   записи нет. Задания с двумя пропусками разбиты на два вопроса (второй
   пропуск показан как «…»).
   ========================================================= */
function FR_TEST_U12(L){
  const keepHL = HL, keepFRL = FRL; FRL = L; HL = L;
  try { return FR_TEST_U12_TOPIC(); } finally { HL = keepHL; FRL = keepFRL; }
}
function FR_TEST_U12_TOPIC(){
const N = s => s + " · ";
const link = (id, name) => `<a class="btn sm sec" href="#${id}">${TF("Теория", "Theory")}: ${name}${f7("arrow_right", "f7-arr")}</a>`;
const BANK = "rue, étudiant, des instruments musicaux, habite, la mer, adore, jouent, marcher, des festivals, amis";
return {
id:"u12-test", sec:"book", unit:"2", kind:"Test",
title:"Test unités 1–2", ru:TF("Контрольная по юнитам 1 и 2 (вариант 1)", "Test on units 1 and 2 (version 1)"), page:"",
theory:`
${RULE(TF("Как проходить", "How to do it"), `<p>${TF(
"Это контрольная по двум юнитам сразу: грамматика и лексика юнитов 1 и 2. Реши всё без подсказок, потом открой «?» у ошибок: там разбор именно этого вопроса и правило.",
"This test covers two units at once: the grammar and vocabulary of units 1 and 2. Do everything without hints, then open «?» on your mistakes: it explains that exact question and gives the rule.")}</p>
<p>${TF(
"В оригинале 100 баллов: аудирование 30, грамматика 35, лексика 35. Здесь грамматика и лексика, всего 70 баллов. Где в предложении два пропуска, это два отдельных вопроса: второй пропуск показан как «…».",
"The original is out of 100: listening 30, grammar 35, vocabulary 35. Here you get grammar and vocabulary, 70 points in total. Where a sentence has two gaps, they are two separate questions: the other gap is shown as «…».")}</p>`)}
${NOTE(TF("Часть I (Compréhension orale: послушай и заполни анкету Люси) пропущена: записи к ней нет.", "Part I (Compréhension orale: listen and fill in Lucie’s form) is skipped: there is no recording for it."))}
<p class="cah-links">${[["u1-prepositions","À, au, en, aux"],["u1-quel","Quel"],["u2-verbes-er","Verbes en -er"],["u2-articles","Articles"],["u2-possessifs","Possessifs"],["u1-nombres","Les nombres"],["u1-nationalites","Nationalités"],["u2-professions","Professions"],["u2-famille","La famille"]].map(([id, n])=>link(id, n)).join(" ")}</p>
`,
ex:[
{t:"fill", h:N("II.1")+"Grammaire — "+TF("вставь предлог: à, au, en, aux", "fill in the preposition: à, au, en, aux"), items:[
{q:"Jim habite ___ New York, … États-Unis.", a:["à"]},
{q:"Jim habite … New York, ___ États-Unis.", a:["aux"]},
{q:"Je n’habite pas ___ France, j’habite … Portugal.", a:["en"]},
{q:"Je n’habite pas … France, j’habite ___ Portugal.", a:["au"]},
{q:"Takeshi habite ___ Tokyo, … Japon.", a:["à"]},
{q:"Takeshi habite … Tokyo, ___ Japon.", a:["au"]},
{q:"Marion est ___ Belgique, … Bruxelles.", a:["en"]},
{q:"Marion est … Belgique, ___ Bruxelles.", a:["à"]},
{q:"Nous travaillons ___ Italie et … Mexique.", a:["en"]},
{q:"Nous travaillons … Italie et ___ Mexique.", a:["au"]},
{q:"Sophie vit ___ Paris, … France.", a:["à"]},
{q:"Sophie vit … Paris, ___ France.", a:["en"]},
{q:"Louise est née ___ Phnom Penh, … Cambodge.", a:["à"]},
{q:"Louise est née … Phnom Penh, ___ Cambodge.", a:["au"]}
]},
{t:"fill", h:N("II.2")+"Grammaire — "+TF("quel в нужной форме", "quel in the right form"), items:[
{q:"Tu habites dans ___ ville ?", a:["quelle"]},
{q:"Vous avez ___ âge ?", a:["quel"]},
{q:"___ sont les nationalités de tes amis ?", a:["quelles"]},
{q:"Vous aimez ___ sports ?", a:["quels"]},
{q:"___ amie tu préfères ?", a:["quelle"]},
{q:"Vous habitez dans ___ pays ?", a:["quel"]},
{q:"___ sont tes actrices préférées ? — Ce sont Marion Cotillard et Vanessa Paradis.", a:["quelles"], long:true}
]},
{t:"fill", h:N("II.3")+"Grammaire — "+TF("поставь глагол в настоящее время", "put the verb in the present tense"), items:[
{q:"J’___ le chocolat. (aimer)", a:["aime"]},
{q:"Elle ___ à Montpellier. (habiter)", a:["habite"]},
{q:"Vous ___ le sport. (détester)", a:["détestez"]},
{q:"Tu ___ italien. (parler)", a:["parles"]},
{q:"Ils ___ 32 ans. (avoir)", a:["ont"]},
{q:"Nous ___, nous … amis. (se présenter)", a:["nous présentons","nous nous présentons"], long:true},
{q:"Nous …, nous ___ amis. (être)", a:["sommes"]}
]},
{t:"fill", h:N("II.4")+"Grammaire — "+TF("вставь артикль", "fill in the article"), items:[
{q:"Alice aime ___ danse.", a:["la"]},
{q:"J’habite dans ___ rue calme.", a:["une"]},
{q:"Tu as ___ piano ?", a:["un"]},
{q:"___ quartier Saint-Laurent est super !", a:["le"]},
{q:"Mes amies adorent ___ langues.", a:["les"]},
{q:"Marie est dans ___ appartement avec … amie.", a:["un","l’","l'"]},
{q:"Marie est dans … appartement avec ___ amie.", a:["une","son","l’","l'"]}
]},
{t:"fill", h:N("II.5")+"Grammaire — "+TF("вставь притяжательное прилагательное", "fill in the possessive adjective"), items:[
{q:"Nous avons trois enfants. Ce sont ___ enfants.", a:["nos"]},
{q:"Tu as des amis. Ce sont ___ amis.", a:["tes"]},
{q:"Anna et Michel ont trois filles, ___ filles s’appellent Lisa, Rose et Alice.", a:["leurs"]},
{q:"Il habite dans un appartement. C’est ___ appartement.", a:["son"]},
{q:"J’ai une guitare. C’est ___ guitare.", a:["ma"]},
{q:"Vous avez un piano. C’est ___ piano.", a:["votre"]},
{q:"Il a une amie. ___ amie aime l’art.", a:["son"]}
]},
{t:"fill", h:N("III.1")+"Vocabulaire — "+TF("напиши число цифрами", "write the number in digits"), items:[
{q:"huit cent soixante-quinze →", a:["875"]},
{q:"quatre-vingt-treize →", a:["93"]},
{q:"mille neuf cent soixante-sept →", a:["1967"]},
{q:"quatre-vingt-cinq →", a:["85"]},
{q:"quarante-six →", a:["46"]}
]},
{t:"fill", ctx:true, h:N("III.2")+"Vocabulaire — "+TF("вставь слова: ", "fill in the words: ")+BANK, items:[
{q:"Je suis ___ à l’université à Nice.", a:["étudiant"]},
{q:"J’___ dans un appartement avec deux amis.", a:["habite"]},
{q:"J’habite dans un appartement avec deux ___.", a:["amis"]},
{q:"Notre ___ est très sympa.", a:["rue"]},
{q:"Mes amis ont ___.", a:["des instruments musicaux"], long:true},
{q:"Ils ___ du piano et de la guitare.", a:["jouent"]},
{q:"À Nice il y a aussi la plage et ___.", a:["la mer"], long:true},
{q:"Nous aimons ___ le samedi.", a:["marcher"]},
{q:"On ___ aussi le cinéma.", a:["adore"]},
{q:"Nous visitons ___.", a:["des festivals"], long:true}
]},
{t:"fill", h:N("III.3")+"Vocabulaire — "+TF("назови национальность", "give the nationality"), items:[
{q:"Alexandra habite aux États-Unis, elle est ___.", a:["américaine"], long:true},
{q:"Colette est née en Grande-Bretagne, elle est ___.", a:["britannique","anglaise"], long:true},
{q:"Madame Lambert aime la Chine, elle est ___.", a:["chinoise"], long:true},
{q:"Klaudia et Anna adorent la Belgique, elles sont ___.", a:["belges"], long:true},
{q:"Lina est née en Colombie, elle est ___.", a:["colombienne"], long:true}
]},
{t:"fill", h:N("III.4")+"Vocabulaire — "+TF("профессия", "the profession"), items:[
{q:"Marie travaille dans l’informatique. Elle est ___.", a:["informaticienne"], long:true},
{q:"Nicolas étudie à l’université de Strasbourg. Il est ___.", a:["étudiant"], long:true},
{q:"Isabelle travaille dans un salon de coiffure. Elle est ___.", a:["coiffeuse"], long:true},
{q:"Hugo travaille à l’hôpital. Il est ___.", a:["médecin","infirmier","docteur"], long:true},
{q:"Lina travaille à l’université de Montpellier. Elle est ___.", a:["professeure","professeur","enseignante","prof"], long:true}
]},
{t:"fill", h:N("III.5")+"Vocabulaire — "+TF("угадай, о ком речь", "guess who it is"), items:[
{q:"Il n’a pas de frère et sœur. → Il est ___.", a:["fils unique"], long:true},
{q:"C’est la fille de ma sœur. → C’est ___.", a:["ma nièce","nièce"], long:true},
{q:"C’est le fils de ma fille. → C’est ___.", a:["mon petit-fils","petit-fils"], long:true},
{q:"C’est le frère de mon père. → C’est ___.", a:["mon oncle","oncle"], long:true},
{q:"Ce sont les enfants de mon oncle et ma tante. → Ce sont ___.", a:["mes cousins","cousins"], long:true}
]},
{t:"fill", h:N("III.6")+"Vocabulaire — "+TF("заполни анкету: что это за графа?", "complete the form: which field is it?"), items:[
{q:"___ : Dubois Paul", a:["nom et prénom","nom, prénom","nom prénom","nom","prénom et nom"], long:true},
{q:"___ : 29/04/2002", a:["date de naissance"], long:true},
{q:"___ : la Suisse", a:["pays","nationalité","pays de naissance","pays d’origine","pays d'origine"], long:true},
{q:"___ : Genève", a:["ville","adresse","ville de naissance","lieu de naissance"], long:true},
{q:"___ : infirmier", a:["profession","métier"], long:true}
]}
]};
}

WHY2_ADD({"u12-test": [
{r:["Город → à; страна ж. р. (обычно на -e) или на гласную → en; страна м. р. → au; страна во мн. ч. → aux.",
"City → à; feminine country (usually in -e) or one starting with a vowel → en; masculine country → au; plural country → aux."],
 i:[["New York — город → à.","New York is a city → à."],
    ["les États-Unis — мн. ч. → aux.","les États-Unis is plural → aux."],
    ["la France — ж. р. → en France.","la France is feminine → en France."],
    ["le Portugal — м. р. → au Portugal.","le Portugal is masculine → au Portugal."],
    ["Tokyo — город → à.","Tokyo is a city → à."],
    ["le Japon — м. р. → au Japon.","le Japon is masculine → au Japon."],
    ["la Belgique — ж. р. → en Belgique.","la Belgique is feminine → en Belgique."],
    ["Bruxelles — город → à.","Bruxelles is a city → à."],
    ["l’Italie — ж. р. на гласную → en Italie.","l’Italie is feminine, starts with a vowel → en Italie."],
    ["le Mexique — м. р., хотя на -e → au Mexique.","le Mexique is masculine even though it ends in -e → au Mexique."],
    ["Paris — город → à.","Paris is a city → à."],
    ["la France → en France.","la France → en France."],
    ["Phnom Penh — город → à.","Phnom Penh is a city → à."],
    ["le Cambodge — м. р. → au Cambodge.","le Cambodge is masculine → au Cambodge."]]},
{r:["quel согласуется с существительным: quel — м. ед., quelle — ж. ед., quels — м. мн., quelles — ж. мн. В «Quel(le)s sont…» смотри на существительное после sont.",
"quel agrees with the noun: quel — masc. sing., quelle — fem. sing., quels — masc. pl., quelles — fem. pl. In «Quel(le)s sont…» look at the noun after sont."],
 i:[["ville — ж. р. ед. → quelle ville.","ville is fem. sing. → quelle ville."],
    ["âge — м. р. → quel âge.","âge is masculine → quel âge."],
    ["les nationalités — ж. р. мн. → Quelles sont…","les nationalités is fem. plural → Quelles sont…"],
    ["sports — м. р. мн. → quels sports.","sports is masc. plural → quels sports."],
    ["amie — ж. р. ед. → Quelle amie (связывание quelle‿amie).","amie is fem. sing. → Quelle amie."],
    ["pays — м. р. → quel pays.","pays is masculine → quel pays."],
    ["actrices — ж. р. мн. → Quelles sont tes actrices préférées ?","actrices is fem. plural → Quelles sont tes actrices préférées ?"]]},
{r:["Глаголы на -er: основа + -e, -es, -e, -ons, -ez, -ent. avoir и être неправильные: ils ont, nous sommes. Возвратный se présenter: nous nous présentons.",
"-er verbs: stem + -e, -es, -e, -ons, -ez, -ent. avoir and être are irregular: ils ont, nous sommes. Reflexive se présenter: nous nous présentons."],
 i:[["je + aim-e; перед гласной je → j’: j’aime.","je + aim-e; before a vowel je → j’: j’aime."],
    ["elle → -e: habite.","elle → -e: habite."],
    ["vous → -ez: détestez.","vous → -ez: détestez."],
    ["tu → -es: parles.","tu → -es: parles."],
    ["avoir, ils → ont (возраст — с avoir).","avoir, ils → ont (age goes with avoir)."],
    ["Возвратный глагол: nous nous présentons (второе nous — возвратное местоимение).","Reflexive verb: nous nous présentons (the second nous is the reflexive pronoun)."],
    ["être, nous → sommes.","être, nous → sommes."]]},
{r:["un / une — одно из многих, впервые (после avoir, dans une…); le / la / les — конкретное, известное или «вообще» после aimer, adorer, détester.",
"un / une — one of many, mentioned first (after avoir, dans une…); le / la / les — specific, known, or «in general» after aimer, adorer, détester."],
 i:[["aimer + определённый: la danse «вообще».","aimer + definite: la danse «in general»."],
    ["Какая-то тихая улица → une rue calme.","Some quiet street → une rue calme."],
    ["avoir + неопределённый: un piano.","avoir + indefinite: un piano."],
    ["Квартал назван — конкретный → Le quartier Saint-Laurent.","The district is named, so specific → Le quartier Saint-Laurent."],
    ["adorer + определённый, мн. ч. → les langues.","adorer + definite, plural → les langues."],
    ["Какая-то квартира впервые → un appartement (м. р.).","Some flat, mentioned first → un appartement (masculine)."],
    ["С какой-то подругой → une amie (подойдёт и son amie).","With some friend → une amie (son amie also works)."]]},
{r:["Чьё (nous → nos, tu → tes, ils → leurs, il → son/sa, je → ma, vous → votre) + что (м. р., ж. р., мн. ч.). Перед ж. р. на гласную — son, а не sa.",
"Whose (nous → nos, tu → tes, ils → leurs, il → son/sa, je → ma, vous → votre) + what (masc., fem., plural). Before a feminine word with a vowel use son, not sa."],
 i:[["nous, детей несколько → nos enfants.","nous, several children → nos enfants."],
    ["tu, друзей несколько → tes amis.","tu, several friends → tes amis."],
    ["Владельцев двое (ils), дочерей три → leurs filles.","Two owners (ils), three daughters → leurs filles."],
    ["il, appartement м. р. → son appartement.","il, appartement is masculine → son appartement."],
    ["je, guitare ж. р. → ma guitare.","je, guitare is feminine → ma guitare."],
    ["vous, пианино одно → votre piano.","vous, one piano → votre piano."],
    ["amie ж. р., но на гласную → Son amie.","amie is feminine but starts with a vowel → Son amie."]]},
{r:["Числа: 70–79 = soixante + 10…19, 80 = quatre-vingts, 90–99 = quatre-vingt + 10…19; cent = 100, mille = 1000.",
"Numbers: 70–79 = soixante + 10…19, 80 = quatre-vingts, 90–99 = quatre-vingt + 10…19; cent = 100, mille = 1000."],
 i:[["huit cent (800) + soixante-quinze (60 + 15 = 75) = 875.","huit cent (800) + soixante-quinze (60 + 15 = 75) = 875."],
    ["quatre-vingt (80) + treize (13) = 93.","quatre-vingt (80) + treize (13) = 93."],
    ["mille (1000) + neuf cent (900) + soixante-sept (67) = 1967.","mille (1000) + neuf cent (900) + soixante-sept (67) = 1967."],
    ["quatre-vingt (80) + cinq = 85.","quatre-vingt (80) + cinq = 85."],
    ["quarante (40) + six = 46.","quarante (40) + six = 46."]]},
{r:["Подставляй по смыслу и по грамматике: после je suis — кто ты (étudiant), после глагола-подлежащего — форма глагола (habite, jouent, adore), после deux — мн. ч. (amis), после ont / visitons — слово с des.",
"Fill in by meaning and grammar: after je suis — who you are (étudiant), after a subject — a verb form (habite, jouent, adore), after deux — a plural (amis), after ont / visitons — a word with des."],
 i:[["Учится в университете → je suis étudiant.","Studies at university → je suis étudiant."],
    ["j’ + глагол: j’habite dans un appartement.","j’ + verb: j’habite dans un appartement."],
    ["deux + мн. ч. → deux amis.","deux + plural → deux amis."],
    ["Notre ___ est très sympa → notre rue.","Notre ___ est très sympa → notre rue."],
    ["ont + des… → des instruments musicaux.","ont + des… → des instruments musicaux."],
    ["jouer du piano / de la guitare; ils → jouent.","jouer du piano / de la guitare; ils → jouent."],
    ["Пляж и… море → la mer.","The beach and… the sea → la mer."],
    ["aimer + инфинитив → aimer marcher.","aimer + infinitive → aimer marcher."],
    ["on + глагол на -e → on adore le cinéma.","on + verb in -e → on adore le cinéma."],
    ["visitons + des… → des festivals.","visitons + des… → des festivals."]]},
{r:["Национальность в ж. р.: + e (américain → américaine), -ien → -ienne (colombien → colombienne), на -e не меняется (britannique, belge); мн. ч. + s.",
"Feminine nationality: + e (américain → américaine), -ien → -ienne (colombien → colombienne), words in -e don’t change (britannique, belge); plural + s."],
 i:[["Elle → américain + e = américaine.","Elle → américain + e = américaine."],
    ["Великобритания → britannique (на -e, одинаково в м. и ж. р.); anglaise тоже засчитывается.","Great Britain → britannique (ends in -e, same for both genders); anglaise is also accepted."],
    ["По смыслу задания — китаянка: chinois + e = chinoise.","As the task intends — Chinese: chinois + e = chinoise."],
    ["belge одинаково в м. и ж. р.; elles — мн. ч. → belges.","belge is the same for both genders; elles is plural → belges."],
    ["-ien → -ienne: colombienne.","-ien → -ienne: colombienne."]]},
{r:["Профессии в ж. р.: -ien → -ienne, -eur → -euse, -ant → -ante; на -e или médecin — без изменений.",
"Feminine professions: -ien → -ienne, -eur → -euse, -ant → -ante; words in -e and médecin don’t change."],
 i:[["Информатика → informaticien, ж. р. informaticienne.","IT → informaticien, feminine informaticienne."],
    ["Учится в университете → étudiant.","Studies at university → étudiant."],
    ["Салон причёсок → coiffeur, ж. р. coiffeuse.","Hair salon → coiffeur, feminine coiffeuse."],
    ["Больница → médecin или infirmier (оба засчитываются).","Hospital → médecin or infirmier (both accepted)."],
    ["Работает в университете → professeure (или professeur, enseignante).","Works at a university → professeure (or professeur, enseignante)."]]},
{r:["Семья: fils unique — единственный сын, la nièce — дочь брата или сестры, le petit-fils — сын сына или дочери, l’oncle — брат отца или матери, les cousins — дети дяди и тёти.",
"Family: fils unique — only son, la nièce — your sibling’s daughter, le petit-fils — your child’s son, l’oncle — your parent’s brother, les cousins — your uncle and aunt’s children."],
 i:[["Нет братьев и сестёр → il est fils unique.","No brothers or sisters → il est fils unique."],
    ["Дочь сестры → ma nièce.","Sister’s daughter → ma nièce."],
    ["Сын дочери → mon petit-fils (с дефисом).","Daughter’s son → mon petit-fils (hyphenated)."],
    ["Брат отца → mon oncle (mon перед гласной).","Father’s brother → mon oncle."],
    ["Дети дяди и тёти → mes cousins.","Uncle and aunt’s children → mes cousins."]]},
{r:["Графы анкеты (la fiche): nom et prénom, date de naissance, pays / nationalité, ville, profession.",
"Form fields (la fiche): nom et prénom, date de naissance, pays / nationalité, ville, profession."],
 i:[["Dubois Paul — фамилия и имя → nom et prénom.","Dubois Paul — surname and first name → nom et prénom."],
    ["Дата → date de naissance.","A date → date de naissance."],
    ["Страна → pays (или nationalité).","A country → pays (or nationalité)."],
    ["Город → ville.","A city → ville."],
    ["infirmier — профессия → profession.","infirmier is a job → profession."]]}
]});

(function(){
  const ru = FR_TEST_U12("ru"), en = FR_TEST_U12("en");
  if (!WHY[ru.id]) WHY[ru.id] = ru.ex.map(()=>["",""]);
  const put = (list, tp) => { let i = list.findIndex(x=>x.id === "u2-test"); if (i < 0) i = list.findIndex(x=>x.id === "u2-phonetique"); if (i >= 0) list.splice(i + 1, 0, tp); else list.push(tp); };
  put(TOPICS, ru); put(TOPICS_EN, en);
})();
