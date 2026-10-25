/* =========================================================
   FRANÇAIS — Livre · «Test unité 1» (Guide pédagogique, с. 34–35)
   Двуязычная сборка через TF (FRL из fr-u3.js). Тема вставляется
   в TOPICS / TOPICS_EN сразу после u1-phonetique (последняя тема юнита 1).
   Упр. 9 (Compréhension orale) пропущено — к нему нужна аудиозапись.
   ========================================================= */
function FR_TEST_U1(L){
  const keepHL = HL, keepFRL = FRL; FRL = L; HL = L;
  try { return FR_TEST_U1_TOPIC(); } finally { HL = keepHL; FRL = keepFRL; }
}
function FR_TEST_U1_TOPIC(){
const N = n => TF("Упр. ", "Ex. ") + n + " · ";
const link = (id, name) => `<a class="btn sm sec" href="#${id}">${TF("Теория", "Theory")}: ${name} →</a>`;
const ARTH = "Bonjour ! Je m’appelle Arthur et j’ai 26 ans. J’aime la musique, le sport et l’art. Je suis français et italien et je parle quatre langues. Je cherche un covoiturage pour le 25 avril pour Paris. J’habite à Nice.";
return {
id:"u1-test", sec:"book", unit:"1", kind:"Test",
title:"Test unité 1", ru:TF("Итоговый тест юнита 1 «Je suis…»","End-of-unit test, unit 1 «Je suis…»"), page:TF("тест, с. 34–35","test, p. 34–35"),
theory:`
${RULE(TF("Как проходить","How to do it"), `<p>${TF(
"Это официальный тест к юниту 1. Реши всё без подсказок и теории, потом открой «?» у ошибок — там разбор именно этого вопроса и правило.",
"This is the official test for unit 1. Do everything without hints or theory, then open «?» on your mistakes — it explains that exact question and gives the rule.")}</p>
<p>${TF(
"Баллы как в оригинале: каждое упражнение — 5 баллов, всего 50 (с аудированием). Чтобы получить оценку по французской шкале /20, раздели сумму на 2,5. Здесь 9 упражнений на 45 баллов + бонус по фонетике.",
"Scoring as in the original: each exercise is worth 5 points, 50 in total (with the listening part). To get the French /20 mark, divide by 2.5. Here there are 9 exercises for 45 points + a phonetics bonus.")}</p>`)}
${NOTE(TF("Упражнение 9 (Compréhension orale) пропущено — для него нужна аудиозапись из учебника.","Exercise 9 (Compréhension orale) is skipped — it needs the audio recording from the book."))}
<p class="cah-links">${[["u1-nationalites","Nationalités"],["u1-articles-def","Le, la, l’, les"],["u1-prepositions","À, au, en, aux"],["u1-quel","Quel"],["u1-nombres","Les nombres"],["u1-phonetique","Accent tonique"]].map(([id, n])=>link(id, n)).join(" ")}</p>
`,
ex:[
{t:"mc", h:N(1)+"Grammaire — "+TF("выбери правильную форму","choose the right form"), items:[
{q:"Madame Kirtia est ___.", o:["suédois","suédoise"], a:1},
{q:"Monsieur Costas est ___.", o:["grec","grecque"], a:0},
{q:"Monsieur Machado est ___.", o:["portugais","portugaise"], a:0},
{q:"Madame De Leon est ___.", o:["uruguayen","uruguayenne"], a:1},
{q:"Madame Park est ___.", o:["coréen","coréenne"], a:1}
]},
{t:"mc", h:N(2)+"Grammaire — le, la, l’ "+TF("или","or")+" les", items:[
{q:"Aldo aime ___ musique.", o:["le","la","l’","les"], a:1},
{q:"___ Mozambique est un pays d’Afrique.", o:["Le","La","L’","Les"], a:0},
{q:"Simon connaît bien ___ Émirats arabes unis.", o:["le","la","l’","les"], a:3},
{q:"J’aime ___ sport.", o:["le","la","l’","les"], a:0},
{q:"Michelle aime ___ art.", o:["le","la","l’","les"], a:2}
]},
{t:"fill", h:N(3)+"Grammaire — "+TF("вставь à, au, en или aux","fill in à, au, en or aux"), items:[
{q:"Arthur habite ___ Canada.", a:["au"]},
{q:"Il est né ___ États-Unis.", a:["aux"]},
{q:"Il habite ___ Moscou.", a:["à"]},
{q:"Moscou est ___ Russie.", a:["en"]},
{q:"Elle habite ___ Angola.", a:["en"]}
]},
{t:"fill", h:N(4)+"Grammaire — "+TF("вставь quel, quelle, quels или quelles","fill in quel, quelle, quels or quelles"), items:[
{q:"___ est ta date de naissance ?", a:["quelle"]},
{q:"Il est né dans ___ pays ?", a:["quel"]},
{q:"Tu parles ___ langues ?", a:["quelles"]},
{q:"Tu pratiques ___ sports ?", a:["quels"]},
{q:"Sam a ___ âge ?", a:["quel"]}
]},
{t:"fill", h:N(5)+"Vocabulaire — "+TF("напиши число словами","write the number in words"), items:[
{q:"37 →", a:["trente-sept"], long:true},
{q:"50 →", a:["cinquante"], long:true},
{q:"17 →", a:["dix-sept"], long:true},
{q:"43 →", a:["quarante-trois"], long:true},
{q:"65 →", a:["soixante-cinq"], long:true}
]},
{t:"mc", h:N(6)+"Vocabulaire — "+TF("найди лишнее (chassez l’intrus)","find the odd one out (chassez l’intrus)"), items:[
{q:"la bande dessinée – le sport – les langues – la France", o:["la bande dessinée","le sport","les langues","la France"], a:3},
{q:"le nom – le prénom – le mail – la date de naissance", o:["le nom","le prénom","le mail","la date de naissance"], a:2},
{q:"la bande dessinée – le tennis – l’art – le cinéma", o:["la bande dessinée","le tennis","l’art","le cinéma"], a:1},
{q:"l’Italie – l’Espagne – l’Allemagne – Paris", o:["l’Italie","l’Espagne","l’Allemagne","Paris"], a:3},
{q:"Moscou – Washington – le Cambodge – Londres", o:["Moscou","Washington","le Cambodge","Londres"], a:2}
]},
{t:"fill", h:N(7)+"Vocabulaire — "+TF("страна с определённым артиклем","the country with the definite article"), items:[
{q:"Tabea est allemande. Le pays de Tabea, c’est ___.", a:["l’Allemagne"], long:true},
{q:"Anil est indien. Le pays d’Anil, c’est ___.", a:["l’Inde"], long:true},
{q:"Wei est chinoise. Le pays de Wei, c’est ___.", a:["la Chine"], long:true},
{q:"Janusz est polonais. Le pays de Janusz, c’est ___.", a:["la Pologne"], long:true},
{q:"Luis est argentin. Le pays de Luis, c’est ___.", a:["l’Argentine"], long:true}
]},
{t:"fill", h:N(8)+"Vocabulaire — "+TF("напиши число цифрами","write the number in digits"), items:[
{q:"soixante-douze →", a:["72"]},
{q:"soixante-dix-neuf →", a:["79"]},
{q:"quatre-vingt-un →", a:["81"]},
{q:"quatre-vingt-dix →", a:["90"]},
{q:"quatre-vingt-dix-neuf →", a:["99"]}
]},
{t:"mc", ctx:true, h:N(10)+TF("Compréhension écrite — прочитай профиль Артура на BlaBlaCar","Compréhension écrite — read Arthur’s BlaBlaCar profile"), items:[
{q:`<span class="fr">${ARTH}</span><br><br>Arthur a quel âge ?`, o:[TF("26 лет","26"),TF("25 лет","25"),TF("4 года","4")], a:0},
{q:"Quels loisirs Arthur aime ?", o:["la musique, le sport et l’art","les langues et les voyages","le cinéma et la musique"], a:0},
{q:"Quelle est la nationalité d’Arthur ?", o:[TF("француз и итальянец","French and Italian"),TF("только француз","French only"),TF("итальянец","Italian")], a:0},
{q:"Arthur parle deux langues ?", o:[TF("Нет, он говорит на четырёх языках","No, he speaks four languages"),TF("Да, на двух","Yes, two"),TF("Нет, на трёх","No, three")], a:0},
{q:"Arthur cherche un covoiturage Paris-Nice ou Nice-Paris ?", o:["Nice-Paris","Paris-Nice"], a:0}
]},
{t:"mc", h:N(11)+TF("Phonie-graphie (бонус) — ритмические группы и ударение","Phonie-graphie (bonus) — rhythmic groups and stress"), items:[
{q:`<span class="fr">Je m’appelle Jasmine. J’ai vingt ans. J’habite en Italie, avec un ami. Il s’appelle Martin.</span><br><br>${TF("Сколько здесь ритмических групп?","How many rhythmic groups are there?")}`, o:["5","4","17"], a:0},
{q:TF("«Je m’appelle Jasmine» — где ударение?","«Je m’appelle Jasmine» — where is the stress?"), o:[TF("на -mine","on -mine"),TF("на -pelle","on -pelle"),TF("на je","on je")], a:0},
{q:TF("«J’habite en Italie» — где ударение?","«J’habite en Italie» — where is the stress?"), o:[TF("на -lie","on -lie"),TF("на -bite","on -bite"),TF("на I-","on I-")], a:0},
{q:TF("«avec un ami» — что слышим между un и ami?","«avec un ami» — what links un and ami?"), o:["[n]","[z]",TF("связывания нет","no liaison")], a:0},
{q:TF("«J’ai vingt ans» — как читается vingt?","«J’ai vingt ans» — how is vingt pronounced?"), o:[TF("[vɛ̃t] — t звучит и связывается с ans","[vɛ̃t] — the t is heard and links to ans"),TF("[vɛ̃] — t немая","[vɛ̃] — silent t"),TF("[vɛ̃z]","[vɛ̃z]")], a:0}
]}
]};
}

WHY2_ADD({"u1-test": [
{r:["Женский род национальности: обычно + e (suédois → suédoise); -ec → -ecque (grec → grecque); -en → -enne (coréen → coréenne). Форма зависит от того, о ком речь: Madame — ж. р., Monsieur — м. р.",
"Feminine nationality: usually + e (suédois → suédoise); -ec → -ecque (grec → grecque); -en → -enne (coréen → coréenne). The form depends on who it is: Madame — feminine, Monsieur — masculine."],
 i:[["Madame — женщина → нужен ж. р.: suédois + e = suédoise.","Madame is a woman → feminine: suédois + e = suédoise."],
    ["Monsieur — мужчина → м. р. grec. (Ж. р. был бы особый: grecque.)","Monsieur is a man → masculine grec. (The feminine is irregular: grecque.)"],
    ["Monsieur → м. р. portugais, без -e.","Monsieur → masculine portugais, no -e."],
    ["Madame → ж. р.; -en удваивает n: uruguayen → uruguayenne.","Madame → feminine; -en doubles the n: uruguayen → uruguayenne."],
    ["Madame → ж. р.; coréen → coréenne (n удваивается).","Madame → feminine; coréen → coréenne (double n)."]]},
{r:["le — м. р., la — ж. р., l’ — перед гласной или немой h (любой род), les — мн. ч. После aimer и с названиями стран артикль обязателен.",
"le — masculine, la — feminine, l’ — before a vowel or silent h (any gender), les — plural. After aimer and with country names the article is required."],
 i:[["musique — ж. р. и начинается с согласной → la musique.","musique is feminine and starts with a consonant → la musique."],
    ["Mozambique — страна м. р. (на -que, но мужского рода, как le Mexique) → Le.","Mozambique is a masculine country (ends in -que but is masculine, like le Mexique) → Le."],
    ["Émirats arabes unis — мн. ч. → les (и связывание: les‿Émirats [z]).","Émirats arabes unis is plural → les (with liaison: les‿Émirats [z])."],
    ["sport — м. р. → le sport.","sport is masculine → le sport."],
    ["art начинается с гласной → l’art (род не важен, e/a выпадает).","art starts with a vowel → l’art (gender doesn’t matter, the vowel drops)."]]},
{r:["Город → à; страна ж. р. (обычно на -e) → en; страна м. р. → au; страна во мн. ч. → aux; страна м. р. на гласную → en.",
"City → à; feminine country (usually ending in -e) → en; masculine country → au; plural country → aux; masculine country starting with a vowel → en."],
 i:[["le Canada — м. р. на согласную → au Canada.","le Canada is masculine, starts with a consonant → au Canada."],
    ["les États-Unis — мн. ч. → aux (связывание [z]).","les États-Unis is plural → aux (liaison [z])."],
    ["Moscou — город → à Moscou.","Moscou is a city → à Moscou."],
    ["la Russie — ж. р. → en Russie.","la Russie is feminine → en Russie."],
    ["l’Angola — м. р., но на гласную → en Angola (как en Iran).","l’Angola is masculine but starts with a vowel → en Angola (like en Iran)."]]},
{r:["quel согласуется с существительным: quel — м. ед., quelle — ж. ед., quels — м. мн., quelles — ж. мн. В «Quel(le) est…» смотри на существительное после est.",
"quel agrees with the noun: quel — masc. sing., quelle — fem. sing., quels — masc. pl., quelles — fem. pl. In «Quel(le) est…» look at the noun after est."],
 i:[["Существительное — date (ж. р., ед.) → Quelle est ta date de naissance ?","The noun is date (fem. sing.) → Quelle est ta date de naissance ?"],
    ["pays — м. р. (на -s в любом числе, здесь ед.) → quel pays.","pays is masculine (ends in -s in both numbers, singular here) → quel pays."],
    ["langues — ж. р., мн. ч. → quelles langues.","langues is fem. plural → quelles langues."],
    ["sports — м. р., мн. ч. → quels sports.","sports is masc. plural → quels sports."],
    ["âge — м. р. → quel âge (ср. j’ai 20 ans — возраст с avoir).","âge is masculine → quel âge (cf. j’ai 20 ans — age goes with avoir)."]]},
{r:["Десятки: trente 30, quarante 40, cinquante 50, soixante 60. Десяток + единица — через дефис (trente-sept); у …1 вместо дефиса et (trente et un). 17–19 = dix + 7…9.",
"Tens: trente 30, quarante 40, cinquante 50, soixante 60. Ten + unit — with a hyphen (trente-sept); for …1 use et instead (trente et un). 17–19 = dix + 7…9."],
 i:[["37 = 30 + 7 → trente-sept.","37 = 30 + 7 → trente-sept."],
    ["50 — круглый десяток, одно слово: cinquante.","50 is a round ten, one word: cinquante."],
    ["17 = 10 + 7 → dix-sept (до 16 — отдельные слова, с 17 — составные).","17 = 10 + 7 → dix-sept (up to 16 they’re single words, from 17 they’re compounds)."],
    ["43 = 40 + 3 → quarante-trois.","43 = 40 + 3 → quarante-trois."],
    ["65 = 60 + 5 → soixante-cinq.","65 = 60 + 5 → soixante-cinq."]]},
{r:["В «chassez l’intrus» ищи общую категорию у трёх слов — лишнее то, что в неё не входит (досуг / анкетные данные / вид искусства / страны / столицы).",
"In «chassez l’intrus» find the category three words share — the odd one is the word outside it (hobbies / personal details / art forms / countries / capitals)."],
 i:[["Комиксы, спорт, языки — увлечения (loisirs); la France — страна.","Comics, sport, languages are hobbies (loisirs); la France is a country."],
    ["Фамилия, имя, дата рождения — данные о личности (как в паспорте); le mail — контакт, а не данные о человеке.","Surname, first name, date of birth are identity details (as in a passport); le mail is contact info, not personal identity."],
    ["BD («9-е искусство»), искусство, кино («7-е искусство») — искусства; tennis — спорт.","BD («the 9th art»), art, cinema («the 7th art») are arts; tennis is a sport."],
    ["Италия, Испания, Германия — страны; Paris — город.","Italy, Spain, Germany are countries; Paris is a city."],
    ["Москва, Вашингтон, Лондон — столицы (города, без артикля); le Cambodge — страна (с артиклем).","Moscow, Washington, London are capitals (cities, no article); le Cambodge is a country (with an article)."]]},
{r:["Страны с артиклем: на -e обычно ж. р. → la (la Chine, la Pologne); перед гласной → l’ (l’Allemagne, l’Inde, l’Argentine). Национальность подсказывает страну: allemand → l’Allemagne.",
"Countries take an article: ending in -e usually feminine → la (la Chine, la Pologne); before a vowel → l’ (l’Allemagne, l’Inde, l’Argentine). The nationality points to the country: allemand → l’Allemagne."],
 i:[["allemande → Allemagne; начинается с гласной → l’Allemagne.","allemande → Allemagne; starts with a vowel → l’Allemagne."],
    ["indien → Inde; гласная → l’Inde.","indien → Inde; vowel → l’Inde."],
    ["chinoise → Chine; ж. р., согласная → la Chine.","chinoise → Chine; feminine, consonant → la Chine."],
    ["polonais → Pologne; ж. р. на -e → la Pologne.","polonais → Pologne; feminine in -e → la Pologne."],
    ["argentin → Argentine; гласная → l’Argentine.","argentin → Argentine; vowel → l’Argentine."]]},
{r:["70–79 = soixante + 10…19; 80 = quatre-vingts (4 × 20); 81–99 = quatre-vingt + 1…19 (без et и без s).",
"70–79 = soixante + 10…19; 80 = quatre-vingts (4 × 20); 81–99 = quatre-vingt + 1…19 (no et, no s)."],
 i:[["soixante (60) + douze (12) = 72.","soixante (60) + douze (12) = 72."],
    ["soixante (60) + dix-neuf (19) = 79.","soixante (60) + dix-neuf (19) = 79."],
    ["quatre-vingt (80) + un = 81 — без et, в отличие от 21–71.","quatre-vingt (80) + un = 81 — no et, unlike 21–71."],
    ["quatre-vingt (80) + dix (10) = 90.","quatre-vingt (80) + dix (10) = 90."],
    ["quatre-vingt (80) + dix-neuf (19) = 99.","quatre-vingt (80) + dix-neuf (19) = 99."]]},
{r:["В заданиях на понимание ответ всегда есть в тексте: найди в нём ключевое слово вопроса (âge → ans, loisirs → j’aime, nationalité → je suis, langues, covoiturage) и сверь.",
"In reading tasks the answer is always in the text: find the question’s key word (âge → ans, loisirs → j’aime, nationalité → je suis, langues, covoiturage) and check it."],
 i:[["«J’ai 26 ans» — возраст во французском с avoir: Arthur a 26 ans.","«J’ai 26 ans» — French uses avoir for age: Arthur a 26 ans."],
    ["«J’aime la musique, le sport et l’art» — loisirs = то, что он любит.","«J’aime la musique, le sport et l’art» — loisirs = what he likes."],
    ["«Je suis français et italien» — две национальности.","«Je suis français et italien» — two nationalities."],
    ["«je parle quatre langues» — четыре, а не две → Non.","«je parle quatre langues» — four, not two → Non."],
    ["Он живёт в Ницце (J’habite à Nice) и ищет поездку pour Paris → из Ниццы в Париж: Nice-Paris.","He lives in Nice (J’habite à Nice) and is looking for a ride pour Paris → from Nice to Paris: Nice-Paris."]]},
{r:["Ударение падает на последний произносимый слог ритмической группы. Группа — кусок смысла без паузы. Связывание: согласная в конце слова звучит перед гласной (un‿ami [n], vingt‿ans [t], en‿Italie [n]).",
"Stress falls on the last pronounced syllable of the rhythmic group. A group is a chunk of meaning said without a pause. Liaison: a final consonant is sounded before a vowel (un‿ami [n], vingt‿ans [t], en‿Italie [n])."],
 i:[["Je m’appelle Jasmine | J’ai vingt ans | J’habite en Italie | avec un ami | Il s’appelle Martin — 5 кусков смысла → 5 групп, 5 ударений.","Je m’appelle Jasmine | J’ai vingt ans | J’habite en Italie | avec un ami | Il s’appelle Martin — 5 chunks of meaning → 5 groups, 5 stresses."],
    ["Конец группы — последний слог Jas-MINE.","The end of the group is the last syllable Jas-MINE."],
    ["en Italie — конец группы → I-ta-LIE.","en Italie ends the group → I-ta-LIE."],
    ["un + гласная → n звучит: un‿ami [œ̃nami].","un + vowel → the n is heard: un‿ami [œ̃nami]."],
    ["Перед гласной t в vingt звучит и связывается: vingt‿ans [vɛ̃tɑ̃].","Before a vowel the t of vingt is heard and links: vingt‿ans [vɛ̃tɑ̃]."]]}
]});

(function(){
  const ru = FR_TEST_U1("ru"), en = FR_TEST_U1("en");
  if (!WHY[ru.id]) WHY[ru.id] = ru.ex.map(()=>["",""]);
  const put = (list, tp) => { const i = list.findIndex(x=>x.id === "u1-phonetique"); if (i >= 0) list.splice(i + 1, 0, tp); else list.push(tp); };
  put(TOPICS, ru); put(TOPICS_EN, en);
})();
