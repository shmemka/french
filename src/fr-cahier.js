/* =========================================================
   FRANÇAIS — Cahier d’activités, юниты 0–3 (с. 3–42)
   Задания перенесены из рабочей тетради; аудио-задания и задания
   по картинкам пропущены. Ответы — по «Corrigés» (с. 133–135).
   Сборка: CAHIER("ru") / CAHIER("en"); у каждого упражнения w:[ru, en].
   ========================================================= */
function CAHIER(L){
  const keepHL = HL; FRL = L; HL = L;
  try { return CAHIER_PARTS(); } finally { HL = keepHL; }
}
const CPG = s => TF("с. ", "p. ") + s;
const CX = n => TF("Упр. ", "Ex. ") + n + ". ";
/* памятка + ссылка на тему учебника */
const MEMO = (rule, links) => `${rule}<p class="cah-links">${links.map(([id, name])=>`<a class="btn sm sec" href="#${id}">${TF("Теория", "Theory")}: ${name} →</a>`).join(" ")}</p>`;

function CAHIER_PARTS(){ return [

/* ================= UNITÉ 0 ================= */
{
id:"c0-salut", sec:"cahier", unit:"0", kind:"Cahier",
title:"Bonjour, ça va ? · Je m’appelle…", ru:TF("Приветствия и ударные местоимения moi, toi, vous","Greetings and the stressed pronouns moi, toi, vous"), page:CPG("3, 5"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`${F("Salut")} — с друзьями, ${F("Bonjour")} — со всеми. Прощаются ${F("Au revoir")}, ${F("À bientôt")}, ${F("À demain")}. «А ты?» — ${F("Et toi ?")}, «А вы?» — ${F("Et vous ?")}; «я» в начале фразы — ${F("Moi, …")}.`, `${F("Salut")} — with friends, ${F("Bonjour")} — with anyone. Goodbyes: ${F("Au revoir")}, ${F("À bientôt")}, ${F("À demain")}. «And you?» — ${F("Et toi ?")} / ${F("Et vous ?")}; «me» at the start — ${F("Moi, …")}.`)}</p>`), [["u0-contact","Bonjour, ça va ?"]]),
ex:[
{t:"fill", h:CX(2)+TF("Вставь: À bientôt – Merci – Bonjour – Salut – Au revoir","Fill in: À bientôt – Merci – Bonjour – Salut – Au revoir"), w:[
"Salut — неформально (Stéphanie, друзья), Bonjour — вежливо (monsieur Bens). На «Bonne journée» отвечают «Merci», на «Au revoir» — «À bientôt».",
"Salut is informal (Stéphanie, friends), Bonjour is polite (monsieur Bens). «Bonne journée» → «Merci», «Au revoir» → «À bientôt»."], items:[
{q:"– ___ Stéphanie ! Ça va ? – Oui, ça va bien, et toi ?", a:["Salut"]},
{q:"– ___, monsieur Bens. Vous allez bien ? – Très bien, merci !", a:["Bonjour"]},
{q:"– Bonne journée, Mano ! – ___ maman !", a:["Merci"]},
{q:"– ___, monsieur ! – À demain, Coco !", a:["Au revoir"]},
{q:"– Au revoir, les enfants ! – ___ !", a:["À bientôt","A bientôt"]}
]},
{t:"fill", h:CX(1)+TF("Вставь moi, toi или vous (с. 5)","Fill in moi, toi or vous (p. 5)"), w:[
"После «Et» вопрос к собеседнику: на «ты» — Et toi ?, на «вы» — Et vous ?. Moi, … — «а я…», выделяет говорящего.",
"After «Et» you ask the other person: informal — Et toi ?, formal — Et vous ?. Moi, … — «as for me…» highlights the speaker."], items:[
{q:"– Moi, je m’appelle Karina. Et ___ ?", a:["toi"]},
{q:"– ___, c’est Camille.", a:["Moi"]},
{q:"– Bonjour monsieur Zain. Vous allez bien ? – Oui, très bien. Et ___ ?", a:["vous"], e:TF("Разговор на «вы» (monsieur, madame).","A formal conversation (monsieur, madame).")},
{q:"– Salut, tu vas bien ? – Oui, très bien ! Merci. Et ___ ?", a:["toi"]}
]}
]},
{
id:"c0-alphabet", sec:"cahier", unit:"0", kind:"Cahier",
title:"L’alphabet · Un, deux, trois !", ru:TF("Города Франции и числа 0–10","French cities and numbers 0–10"), page:CPG("4–5"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`Числа 0–10: ${F("zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix")}. Большие города Франции: ${F("Paris, Marseille, Lyon, Toulouse, Nantes, Strasbourg, Bordeaux, Lille, Dijon")}.`, `Numbers 0–10: ${F("zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix")}. Big French cities: ${F("Paris, Marseille, Lyon, Toulouse, Nantes, Strasbourg, Bordeaux, Lille, Dijon")}.`)}</p>`), [["u0-contact","Bonjour, ça va ?"],["u0-dates","Aujourd’hui, c’est le…"]]),
ex:[
{t:"fill", h:CX(2)+TF("Допиши названия городов на карте (с. 4)","Complete the city names on the map (p. 4)"), w:[
"Это крупные города Франции: Strasbourg (Grand-Est), Nantes (Pays de la Loire), Dijon (Bourgogne), Bordeaux, Toulouse, Marseille.",
"These are major French cities: Strasbourg (Grand-Est), Nantes (Pays de la Loire), Dijon (Bourgogne), Bordeaux, Toulouse, Marseille."], items:[
{q:"Stra– –our– (Grand-Est) →", a:["Strasbourg"]},
{q:"N– –t– s (Pays-de-la-Loire) →", a:["Nantes"]},
{q:"D– –on (Bourgogne) →", a:["Dijon"]},
{q:"Bor–e–u– (Nouvelle-Aquitaine) →", a:["Bordeaux"]},
{q:"T– –lous– (Occitanie) →", a:["Toulouse"]},
{q:"Ma–sei– –e (Provence-Alpes-Côte d’Azur) →", a:["Marseille"]}
]},
{t:"fill", h:CX(1)+TF("Напиши цифрами (с. 5)","Write the numbers in digits (p. 5)"), w:[
"0 zéro, 1 un, 2 deux, 3 trois, 4 quatre, 5 cinq, 6 six, 7 sept, 8 huit, 9 neuf.",
"0 zéro, 1 un, 2 deux, 3 trois, 4 quatre, 5 cinq, 6 six, 7 sept, 8 huit, 9 neuf."], items:[
{q:"trois →", a:["3"]},{q:"un →", a:["1"]},{q:"cinq →", a:["5"]},{q:"sept →", a:["7"]},{q:"zéro →", a:["0"]},{q:"neuf →", a:["9"]},{q:"deux →", a:["2"]},{q:"quatre →", a:["4"]},{q:"huit →", a:["8"]},{q:"six →", a:["6"]}
]}
]},
{
id:"c0-dates", sec:"cahier", unit:"0", kind:"Cahier",
title:"Aujourd’hui, c’est le…", ru:TF("Дни недели, месяцы и даты","Days, months and dates"), page:CPG("6"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`Дни и месяцы пишутся со строчной буквы. Дата: ${F("le 14 juillet")}, но ${F("le 1er mai")} (premier). Национальный праздник — ${F("le 14 Juillet")}, праздник музыки — ${F("le 21 juin")}.`, `Days and months are lower case. A date: ${F("le 14 juillet")}, but ${F("le 1er mai")} (premier). The national holiday is ${F("le 14 Juillet")}, the music festival is ${F("le 21 juin")}.`)}</p>`), [["u0-dates","Aujourd’hui, c’est le…"]]),
ex:[
{t:"fill", h:CX(1)+TF("Допиши дни недели","Complete the days of the week"), w:[
"Неделя во Франции начинается с понедельника: lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.",
"The French week starts on Monday: lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche."], items:[
{q:"lundi → ___", a:["mardi"]},{q:"mardi → ___", a:["mercredi"]},{q:"mercredi → ___", a:["jeudi"]},{q:"jeudi → ___", a:["vendredi"]},{q:"samedi → ___", a:["dimanche"]}
]},
{t:"fill", h:CX(2)+TF("Какой это месяц по счёту? (janvier = 1)","Which month number is it? (janvier = 1)"), w:[
"janvier 1, février 2, mars 3, avril 4, mai 5, juin 6, juillet 7, août 8, septembre 9, octobre 10, novembre 11, décembre 12.",
"janvier 1, février 2, mars 3, avril 4, mai 5, juin 6, juillet 7, août 8, septembre 9, octobre 10, novembre 11, décembre 12."], items:[
{q:"mars : ___", a:["3"]},{q:"novembre : ___", a:["11"]},{q:"décembre : ___", a:["12"]},{q:"avril : ___", a:["4"]},{q:"mai : ___", a:["5"]},{q:"février : ___", a:["2"]},{q:"octobre : ___", a:["10"]},{q:"juillet : ___", a:["7"]},{q:"août : ___", a:["8"]},{q:"septembre : ___", a:["9"]},{q:"juin : ___", a:["6"]}
]},
{t:"fill", h:CX(3)+TF("Вставь: Demain – Aujourd’hui – le 14 Juillet – le 21 juin – dimanche","Fill in: Demain – Aujourd’hui – le 14 Juillet – le 21 juin – dimanche"), w:[
"Национальный праздник — 14 июля, праздник музыки — 21 июня. После субботы идёт воскресенье; aujourd’hui — сегодня, demain — завтра.",
"The national holiday is 14 July, the music festival is 21 June. Sunday follows Saturday; aujourd’hui — today, demain — tomorrow."], items:[
{q:"La fête nationale, c’est ___ ?", a:["le 14 Juillet","le 14 juillet"]},
{q:"Demain, c’est ___ ! (aujourd’hui, c’est samedi)", a:["dimanche"]},
{q:"La fête de la Musique ? C’est ___.", a:["le 21 juin"]},
{q:"___, c’est le 1er Mai ! (aujourd’hui, c’est le 30 avril)", a:["Demain"]},
{q:"C’est vendredi, ___, c’est le week-end !", a:["Aujourd’hui","Aujourd'hui"], e:TF("В оригинале «C’est vendredi, aujourd’hui, …» — фраза о сегодняшнем дне.","The original reads «C’est vendredi, aujourd’hui, …» — it’s about today.")}
]}
]},

/* ================= UNITÉ 1 ================= */
{
id:"c1-nationalites", sec:"cahier", unit:"1", kind:"Cahier",
title:"Les adjectifs de nationalité", ru:TF("Национальность: мужской и женский род","Nationality: masculine and feminine"), page:CPG("7"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`Женский род: обычно + <b>e</b> (${F("allemand → allemande")}); ${F("-ien → -ienne")}, ${F("-éen → -éenne")}; на -e не меняется (${F("suisse, belge, russe")}); исключения ${F("grec → grecque, turc → turque")}.`, `Feminine: usually + <b>e</b> (${F("allemand → allemande")}); ${F("-ien → -ienne")}, ${F("-éen → -éenne")}; no change if it already ends in -e (${F("suisse, belge, russe")}); exceptions ${F("grec → grecque, turc → turque")}.`)}</p>`), [["u1-nationalites","Les adjectifs de nationalité"],["u1-verbes","Être, avoir, s’appeler"]]),
ex:[
{t:"sort", h:CX(1)+TF("Мужской или женский род?","Masculine or feminine?"), cats:[TF("мужской","masculine"),TF("женский","feminine")], w:[
"Окончание -e (кроме слов, которые и так на -e) и -enne — признак женского рода.",
"A final -e (except words that always end in -e) and -enne mark the feminine."], items:[["américain",0],["sénégalaise",1],["allemand",0],["argentin",0],["espagnole",1],["colombienne",1]]},
{t:"fill", h:CX(2)+TF("Допиши прилагательное в другом роде","Write the adjective in the other gender"), w:[
"suisse не меняется (уже на -e), colombienne → colombien, congolais → congolaise, turque → turc, tunisien → tunisienne.",
"suisse doesn’t change (already ends in -e), colombienne → colombien, congolais → congolaise, turque → turc, tunisien → tunisienne."], items:[
{q:"Il est suisse. Elle est ___.", a:["suisse"]},
{q:"Il est ___. Elle est colombienne.", a:["colombien"]},
{q:"Il est congolais. Elle est ___.", a:["congolaise"]},
{q:"Il est ___. Elle est turque.", a:["turc"]},
{q:"Il est tunisien. Elle est ___.", a:["tunisienne"]}
]},
{t:"mc", h:CX(3)+TF("Выбери правильную форму","Choose the correct form"), w:[
"Прилагательное согласуется с человеком: elle → женский род, il → мужской.",
"The adjective agrees with the person: elle → feminine, il → masculine."], items:[
{q:"Pauline, elle est ___.", o:["française","français"], a:0},
{q:"Simon, il est ___.", o:["suédois","suédoise"], a:0},
{q:"Naomi, elle est ___.", o:["japonaise","japonais"], a:0},
{q:"Kosta, il est ___.", o:["grec","grecque"], a:0},
{q:"Jeff, il est ___.", o:["anglais","anglaise"], a:0}
]},
{t:"match", h:CX(5)+TF("Составь фразы","Make sentences"), w:[
"Глагол согласуется с подлежащим: je m’appelle, tu as, nous sommes, ils ont, vous êtes, elle s’appelle.",
"The verb agrees with the subject: je m’appelle, tu as, nous sommes, ils ont, vous êtes, elle s’appelle."], pairs:[
["Je","m’appelle Ramzi."],["Tu","as 24 ans ?"],["Paul et moi, nous","sommes français."],["Sam et Émilie","ont 30 ans."],["Vous","êtes américain ?"],["Elle","s’appelle Colette."]]}
]},
{
id:"c1-articles", sec:"cahier", unit:"1", kind:"Cahier",
title:"Les articles définis le, la, l’, les", ru:TF("Определённые артикли и страны","Definite articles and countries"), page:CPG("8"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`${F("le")} — м. р., ${F("la")} — ж. р., ${F("l’")} — перед гласной или немой h, ${F("les")} — мн. ч. Страны на -e обычно женского рода (${F("la France")}), остальные — мужского (${F("le Mali")}); ${F("les États-Unis, les Pays-Bas")} — мн. ч. Исключение: ${F("le Mexique")}.`, `${F("le")} — masc., ${F("la")} — fem., ${F("l’")} — before a vowel or silent h, ${F("les")} — plural. Countries ending in -e are usually feminine (${F("la France")}), the rest masculine (${F("le Mali")}); ${F("les États-Unis, les Pays-Bas")} are plural. Exception: ${F("le Mexique")}.`)}</p>`), [["u1-articles-def","Les articles définis"]]),
ex:[
{t:"sort", h:CX(1)+TF("Мужской род, женский или множественное число?","Masculine, feminine or plural?"), cats:[TF("мужской","masculine"),TF("женский","feminine"),TF("мн. ч.","plural")], w:[
"Mali, Iran — без -e → м. р.; France, Italie — на -e → ж. р.; Pays-Bas, États-Unis — мн. ч.",
"Mali, Iran — no -e → masc.; France, Italie — end in -e → fem.; Pays-Bas, États-Unis — plural."], items:[["Mali",0],["Iran",0],["France",1],["Italie",1],["Pays-Bas",2],["États-Unis",2]]},
{t:"fill", h:CX(2)+TF("Напиши артикль перед страной","Write the article before the country"), w:[
"Mexique — исключение (на -e, но м. р.); Chine, Argentine — ж. р.; Japon — м. р.; перед гласной — l’.",
"Mexique is an exception (ends in -e but masculine); Chine, Argentine — fem.; Japon — masc.; before a vowel — l’."], items:[
{q:"___ Mexique", a:["Le"]},{q:"___ Chine", a:["La"]},{q:"___ Japon", a:["Le"]},{q:"___ Argentine", a:["L’","L'"]}
]},
{t:"mc", h:CX(3)+TF("Выбери правильный артикль","Choose the correct article"), w:[
"Перед гласной всегда l’ (l’art, l’Algérie, l’Espagne); la/le — по роду; les — только мн. ч.",
"Before a vowel always l’ (l’art, l’Algérie, l’Espagne); la/le follow gender; les is plural only."], items:[
{q:"Tu aimes ___ art ?", o:["l’","le"], a:0},
{q:"C’est ___ langue de Paul.", o:["la","les"], a:0},
{q:"J’aime ___ Algérie.", o:["l’","les"], a:0},
{q:"Radka aime ___ géographie.", o:["la","les"], a:0},
{q:"Julie aime ___ Espagne.", o:["l’","la"], a:0}
]},
{t:"fill", h:CX(4)+TF("Вставь le, la, l’ или les","Fill in le, la, l’ or les"), w:[
"После aimer — определённый артикль: le cinéma, la musique, les langues, l’histoire, le café, le chocolat.",
"After aimer use the definite article: le cinéma, la musique, les langues, l’histoire, le café, le chocolat."], items:[
{q:"Nino aime ___ cinéma…", a:["le"]},{q:"…Lisa aime ___ musique.", a:["la"]},{q:"Sonia aime ___ langues…", a:["les"]},{q:"…Hussein aime ___ histoire.", a:["l’","l'"]},{q:"Bertille aime ___ café…", a:["le"]},{q:"…Denis aime ___ chocolat.", a:["le"]}
]}
]},
{
id:"c1-nombres", sec:"cahier", unit:"1", kind:"Cahier",
title:"Les loisirs (1), les nombres (1)", ru:TF("Числа 30–69","Numbers 30–69"), page:CPG("9"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`Десятки: ${F("trente (30), quarante (40), cinquante (50), soixante (60)")}. Единицы через дефис: ${F("trente-deux")}; но с 1 — ${F("et")}: ${F("quarante et un, soixante et un")}.`, `Tens: ${F("trente (30), quarante (40), cinquante (50), soixante (60)")}. Units with a hyphen: ${F("trente-deux")}; but with 1 — ${F("et")}: ${F("quarante et un, soixante et un")}.`)}</p>`), [["u1-nombres","Les nombres"]]),
ex:[
{t:"fill", h:CX(2)+TF("Напиши число цифрами","Write the number in digits"), w:[
"trente 30, quarante 40, cinquante 50, soixante 60 + единицы. «et un» = …1.",
"trente 30, quarante 40, cinquante 50, soixante 60 + units. «et un» = …1."], items:[
{q:"soixante-huit →", a:["68"]},{q:"trente-deux →", a:["32"]},{q:"quarante et un →", a:["41"]},{q:"cinquante-cinq →", a:["55"]},{q:"quarante-cinq →", a:["45"]},{q:"trente-sept →", a:["37"]},{q:"soixante et un →", a:["61"]}
]},
{t:"fill", h:CX(3)+TF("Допиши десяток словами","Write the tens in words"), w:[
"Десятки: 30 trente, 40 quarante, 50 cinquante, 60 soixante. Перед «un» — «et»: cinquante et un.",
"Tens: 30 trente, 40 quarante, 50 cinquante, 60 soixante. Before «un» use «et»: cinquante et un."], items:[
{q:"46 : ___-six", a:["quarante"]},{q:"38 : ___-huit", a:["trente"]},{q:"65 : ___-cinq", a:["soixante"]},{q:"52 : ___-deux", a:["cinquante"]},{q:"37 : ___-sept", a:["trente"]},{q:"51 : ___ et un", a:["cinquante"]}
]}
]},
{
id:"c1-prepositions", sec:"cahier", unit:"1", kind:"Cahier",
title:"Les prépositions devant les noms de villes et de pays", ru:TF("à, en, au, aux + город / страна; être или avoir","à, en, au, aux + city / country; être or avoir"), page:CPG("10"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`Город — ${F("à")}. Страна ж. р. или на гласную — ${F("en")} (${F("en Russie, en Iran")}), м. р. — ${F("au")} (${F("au Canada")}), мн. ч. — ${F("aux")} (${F("aux Pays-Bas")}). Возраст — ${F("avoir")}, национальность — ${F("être")}.`, `City — ${F("à")}. Feminine or vowel-initial country — ${F("en")} (${F("en Russie, en Iran")}), masculine — ${F("au")} (${F("au Canada")}), plural — ${F("aux")} (${F("aux Pays-Bas")}). Age — ${F("avoir")}, nationality — ${F("être")}.`)}</p>`), [["u1-prepositions","À, au, en, aux + ville / pays"]]),
ex:[
{t:"fill", h:CX(1)+TF("Расставь слова: «à город, en/au/aux страна»","Put the words in order: «à city, en/au/aux country»"), w:[
"Сначала город с à, потом страна с en (ж. р.), au (м. р.) или aux (мн. ч.).",
"First the city with à, then the country with en (fem.), au (masc.) or aux (plural)."], items:[
{q:"Nikita est né (Moscou / en / à / Russie)", a:["à Moscou, en Russie","à Moscou en Russie"], long:true},
{q:"Florence habite (Canada / au / Ottawa / à)", a:["à Ottawa, au Canada","à Ottawa au Canada"], long:true},
{q:"Vasu est né (Inde / à / Calcutta / en)", a:["à Calcutta, en Inde","à Calcutta en Inde"], long:true},
{q:"Lydia habite (Pays-Bas / Amsterdam / à / aux)", a:["à Amsterdam, aux Pays-Bas","à Amsterdam aux Pays-Bas"], long:true},
{q:"Louis est né (à / Portugal / Porto / au)", a:["à Porto, au Portugal","à Porto au Portugal"], long:true}
]},
{t:"fill", h:CX(3)+TF("Напиши фразу по образцу: Emma – Oslo → Emma habite à Oslo, en Norvège.","Write a sentence like the model: Emma – Oslo → Emma habite à Oslo, en Norvège."), w:[
"Glasgow — au Royaume-Uni (м. р.), Rotterdam — aux Pays-Bas, Bordeaux — en France, Madrid — en Espagne, Alger — en Algérie.",
"Glasgow — au Royaume-Uni (masc.), Rotterdam — aux Pays-Bas, Bordeaux — en France, Madrid — en Espagne, Alger — en Algérie."], items:[
{q:"Petra – Glasgow →", a:["Petra habite à Glasgow, au Royaume-Uni","Petra habite à Glasgow, en Écosse","Petra habite à Glasgow au Royaume-Uni"], long:true},
{q:"Jan – Rotterdam →", a:["Jan habite à Rotterdam, aux Pays-Bas","Jan habite à Rotterdam aux Pays-Bas"], long:true},
{q:"Ana – Bordeaux →", a:["Ana habite à Bordeaux, en France","Ana habite à Bordeaux en France"], long:true},
{q:"Pablo – Madrid →", a:["Pablo habite à Madrid, en Espagne","Pablo habite à Madrid en Espagne"], long:true},
{q:"Nasser – Alger →", a:["Nasser habite à Alger, en Algérie","Nasser habite à Alger en Algérie"], long:true}
]},
{t:"mc", h:CX(4)+TF("être или avoir?","être or avoir?"), w:[
"Возраст и «иметь что-то» — avoir (a 24 ans, as deux nationalités, avez une adresse). Национальность и местонахождение — être (sommes belges, sont à Toulouse).",
"Age and «having something» — avoir (a 24 ans, as deux nationalités, avez une adresse). Nationality and location — être (sommes belges, sont à Toulouse)."], items:[
{q:"Loana ___ 24 ans et elle est hollandaise.", o:["a","est"], a:0},
{q:"Lucille et moi, nous ___ belges.", o:["sommes","avons"], a:0},
{q:"Tu ___ deux nationalités, Pedro ?", o:["as","es"], a:0},
{q:"Kristof et Nils ___ à Toulouse maintenant.", o:["sont","ont"], a:0},
{q:"Vous ___ une adresse à Lyon ?", o:["avez","êtes"], a:0}
]}
]},
{
id:"c1-quel", sec:"cahier", unit:"1", kind:"Cahier",
title:"L’adjectif interrogatif quel", ru:TF("quel, quelle, quels, quelles и глагол parler","quel, quelle, quels, quelles and the verb parler"), page:CPG("11"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`${F("quel")} согласуется с существительным: ${F("quel âge")} (м.), ${F("quelle adresse")} (ж.), ${F("quels artistes")} (м. мн.), ${F("quelles langues")} (ж. мн.). Все четыре формы звучат одинаково [kɛl].`, `${F("quel")} agrees with the noun: ${F("quel âge")} (m.), ${F("quelle adresse")} (f.), ${F("quels artistes")} (m. pl.), ${F("quelles langues")} (f. pl.). All four sound the same [kɛl].`)}</p>`), [["u1-quel","L’adjectif interrogatif quel"]]),
ex:[
{t:"fill", h:CX(1)+TF("Согласуй quel (допиши окончание: — / le / s / les)","Make quel agree (add: — / le / s / les)"), w:[
"Ищи существительное: langues, nationalités — ж. мн. → quelles; adresse, date — ж. → quelle; artistes — м. мн. → quels; pays — м. → quel.",
"Find the noun: langues, nationalités — f. pl. → quelles; adresse, date — f. → quelle; artistes — m. pl. → quels; pays — m. → quel."], items:[
{q:"___ langues vous parlez ?", a:["Quelles"]},
{q:"Tu habites à ___ adresse ?", a:["quelle"]},
{q:"___ est la date de naissance de Louane ?", a:["Quelle"]},
{q:"___ sont les nationalités dans la classe ?", a:["Quelles"]},
{q:"___ artistes tu aimes ?", a:["Quels"]},
{q:"Tu habites dans ___ pays ?", a:["quel"]}
]},
{t:"fill", h:CX(2)+TF("Вставь: numéro – langues – âge – ville – auteurs – adresse","Fill in: numéro – langues – âge – ville – auteurs – adresse"), w:[
"Форма quel подсказывает слово: quel → âge, numéro; quelles → langues; quels → auteurs; quelle → ville, adresse.",
"The form of quel points to the word: quel → âge, numéro; quelles → langues; quels → auteurs; quelle → ville, adresse."], items:[
{q:"Tu as quel ___ ?", a:["âge"]},{q:"Tu parles quelles ___ ?", a:["langues"]},{q:"Vous aimez quels ___ ?", a:["auteurs"]},{q:"Quel est le ___ de Bilal ?", a:["numéro"]},{q:"Vous habitez dans quelle ___ ?", a:["ville"]},{q:"Quelle est votre ___ mail ?", a:["adresse"]}
]},
{t:"fill", h:CX(4)+TF("Вставь quel, quelle, quels, quelles","Fill in quel, quelle, quels, quelles"), w:[
"Согласуй с существительным после глагола être: est votre nom (м.) → Quel, est votre adresse (ж.) → Quelle, sont les pays (м. мн.) → Quels.",
"Agree with the noun after être: est votre nom (m.) → Quel, est votre adresse (f.) → Quelle, sont les pays (m. pl.) → Quels."], items:[
{q:"___ est votre nom ?", a:["Quel"]},{q:"___ sport vous pratiquez ?", a:["Quel"]},{q:"___ est votre adresse ?", a:["Quelle"]},{q:"___ villes de France vous aimez ?", a:["Quelles"]},{q:"___ sont les pays de naissance des personnes ici ?", a:["Quels"]},{q:"___ est votre nationalité ?", a:["Quelle"]}
]},
{t:"fill", h:CX(5)+TF("Поставь parler в настоящее время","Put parler in the present"), w:[
"parler: je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.",
"parler: je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent."], items:[
{q:"Sur Duo, je ___ espagnol avec Francesco.", a:["parle"]},{q:"Dans la classe, nous ___ français.", a:["parlons"]},{q:"Vous ___ quelle langue ?", a:["parlez"]},{q:"Li et Chang ___ chinois.", a:["parlent"]},{q:"Lisa ___ français, portugais et polonais.", a:["parle"]},{q:"Tu ___ quatre langues ?", a:["parles"]}
]}
]},
{
id:"c1-identite", sec:"cahier", unit:"1", kind:"Cahier",
title:"Les pays, les nationalités, l’identité", ru:TF("Национальности, анкета, страны","Nationalities, a form, countries"), page:CPG("12"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`Анкета: ${F("Nom")} (фамилия), ${F("Prénom")} (имя), ${F("Adresse, Code postal, Ville, Pays, Téléphone, Mail")}. ${F("né(e) en / au / aux…")} — «родился(-ась) в…».`, `A form: ${F("Nom")} (surname), ${F("Prénom")} (first name), ${F("Adresse, Code postal, Ville, Pays, Téléphone, Mail")}. ${F("né(e) en / au / aux…")} — «born in…».`)}</p>`), [["u1-presenter","Se présenter"],["u1-nationalites","Nationalités"]]),
ex:[
{t:"fill", h:CX(1)+TF("Допиши национальность","Write the nationality"), w:[
"Род берём от человека: Hélène, Malia, Angela — ж. р.; Akem, Hyunsok, Adam — м. р.",
"The gender comes from the person: Hélène, Malia, Angela — fem.; Akem, Hyunsok, Adam — masc."], items:[
{q:"Hélène est née en Belgique, elle est ___.", a:["belge"]},
{q:"Akem est né au Cameroun, il est ___.", a:["camerounais"]},
{q:"Hyunsok est né en Corée, il est ___.", a:["coréen"]},
{q:"Malia est née au Sénégal, elle est ___.", a:["sénégalaise"]},
{q:"Adam est né en Pologne, il est ___.", a:["polonais"]},
{q:"Angela est née en Allemagne, elle est ___.", a:["allemande"]}
]},
{t:"match", h:CX(2)+TF("Анкета: какое поле?","The form: which field?"), w:[
"Péret — фамилия (Nom), Anne-Marie — имя (Prénom), 32, place de la République — адрес, France — страна, 06… — телефон, …@hotmail.fr — mail.",
"Péret is the surname (Nom), Anne-Marie the first name (Prénom), 32, place de la République the address, France the country, 06… the phone, …@hotmail.fr the e-mail."], pairs:[
["Anne-Marie","Prénom"],["32, place de la République","Adresse"],["France","Pays"],["06 87 98 14 08","Téléphone"],["peret.annem@hotmail.fr","Mail"]]},
{t:"fill", h:CX(3)+TF("Заполни таблицу: страна ↔ национальность","Fill in the table: country ↔ nationality"), w:[
"Inde, Argentine — ж. р. (l’); Maroc, Vietnam — м. р. (le); États-Unis — американец (américain).",
"Inde, Argentine — fem. (l’); Maroc, Vietnam — masc. (le); États-Unis — American (américain)."], items:[
{q:"L’___ → indien(ne)", a:["Inde"]},
{q:"La République tchèque → ___", a:["tchèque"]},
{q:"Le ___ → marocain(e)", a:["Maroc"]},
{q:"Les États-Unis → ___", a:["américain","américain(e)","américaine"]},
{q:"Le ___ → vietnamien(ne)", a:["Vietnam","Viêt Nam"]}
]}
]},
{
id:"c1-bilan", sec:"cahier", unit:"1", kind:"Cahier",
title:"Bilan linguistique · Unité 1", ru:TF("Итоговая проверка юнита 1","End-of-unit check, unit 1"), page:CPG("14–15"),
theory:MEMO(RULE(TF("Как работать","How to use it"), `<p>${TF("Это итоговый тест юнита (40 баллов в тетради). Реши без подсказок, потом открой «?» у ошибок.","This is the end-of-unit test (40 points in the workbook). Do it without help, then open «?» on your mistakes.")}</p>`), [["u1-nationalites","Nationalités"],["u1-prepositions","À, au, en, aux"],["u1-quel","Quel"],["u1-nombres","Les nombres"]]),
ex:[
{t:"fill", h:CX(1)+TF("Женский род прилагательных","Feminine adjectives"), w:[
"Обычно +e; turc → turque.", "Usually +e; turc → turque."], items:[
{q:"Il est japonais. Elle est ___.", a:["japonaise"]},{q:"Il est turc. Elle est ___.", a:["turque"]},{q:"Il est suédois. Elle est ___.", a:["suédoise"]},{q:"Il est espagnol. Elle est ___.", a:["espagnole"]},{q:"Il est mexicain. Elle est ___.", a:["mexicaine"]}
]},
{t:"fill", h:CX(2)+TF("le, la, l’ или les","le, la, l’ or les"), w:[
"café — м. р.; histoire, Italie — перед гласной/немой h → l’; langues — мн. ч.; Tunisie — ж. р.",
"café — masc.; histoire, Italie — before a vowel / silent h → l’; langues — plural; Tunisie — fem."], items:[
{q:"J’aime ___ café.", a:["le"]},{q:"Tu aimes ___ histoire ?", a:["l’","l'"]},{q:"C’est quel pays, ___ Italie ?", a:["l’","l'"]},{q:"Kathlyn aime ___ langues.", a:["les"]},{q:"San aime ___ Tunisie.", a:["la"]}
]},
{t:"mc", h:CX(3)+TF("Выбери предлог","Choose the preposition"), w:[
"Chine, Inde — ж. р. → en; États-Unis — мн. ч. → aux; Genève — город → à; Portugal — м. р. → au.",
"Chine, Inde — fem. → en; États-Unis — plural → aux; Genève — a city → à; Portugal — masc. → au."], items:[
{q:"Tao est chinoise. Elle habite ___ Chine.", o:["en","au"], a:0},
{q:"Charlie est américaine. Elle habite ___ États-Unis.", o:["aux","en"], a:0},
{q:"Matteo est suisse. Il habite ___ Genève.", o:["à","en"], a:0},
{q:"Nélia est portugaise. Elle habite ___ Portugal.", o:["au","à"], a:0},
{q:"Amrish est indien. Il habite ___ Inde.", o:["en","à"], a:0}
]},
{t:"match", h:CX(4)+TF("Соедини начало и конец","Match the beginnings and endings"), w:[
"quel + м. ед. (sport, pays), quelle + ж. ед. (nationalité), quels + м. мн. (artistes), quelles + ж. мн. (langues).",
"quel + m. sing. (sport, pays), quelle + f. sing. (nationalité), quels + m. pl. (artistes), quelles + f. pl. (langues)."], pairs:[
["Quel","sport vous aimez ?"],["Quelle","est la nationalité de John ?"],["Quels","artistes tu aimes ?"],["Quelles","langues vous parlez ?"],["Dans quel","pays tu habites ?"]]},
{t:"fill", h:TF("Vocabulaire · ","Vocabulaire · ")+CX(2)+TF("Напиши число цифрами","Write the number in digits"), w:[
"quarante 40, cinquante 50, trente 30, soixante 60.", "quarante 40, cinquante 50, trente 30, soixante 60."], items:[
{q:"quarante-deux →", a:["42"]},{q:"cinquante-neuf →", a:["59"]},{q:"trente et un →", a:["31"]},{q:"soixante-huit →", a:["68"]},{q:"cinquante et un →", a:["51"]}
]},
{t:"fill", h:TF("Vocabulaire · ","Vocabulaire · ")+CX(3)+TF("Допиши страну","Write the country"), w:[
"Предлог подсказывает род страны: en — ж. р. (Allemagne, Argentine), au — м. р. (Maroc, Vietnam), aux — мн. ч. (États-Unis).",
"The preposition tells you the gender: en — fem. (Allemagne, Argentine), au — masc. (Maroc, Vietnam), aux — plural (États-Unis)."], items:[
{q:"Chris est allemand, il est né en ___.", a:["Allemagne"]},{q:"Miranda est américaine, elle est née aux ___.", a:["États-Unis","Etats-Unis"]},{q:"Ignacio est argentin, il est né en ___.", a:["Argentine"]},{q:"Aya est marocaine, elle est née au ___.", a:["Maroc"]},{q:"Mai est vietnamienne, elle est née au ___.", a:["Vietnam","Viêt Nam"]}
]},
{t:"fill", h:TF("Vocabulaire · ","Vocabulaire · ")+CX(4)+TF("Напиши число словами","Write the number in words"), w:[
"70 = soixante-dix (60+10), 80 = quatre-vingts (4×20, с s), 90 = quatre-vingt-dix. В 82, 92 у vingt нет s.",
"70 = soixante-dix (60+10), 80 = quatre-vingts (4×20, with s), 90 = quatre-vingt-dix. In 82, 92 vingt has no s."], items:[
{q:"79 →", a:["soixante-dix-neuf"], long:true},{q:"82 →", a:["quatre-vingt-deux"], long:true},{q:"92 →", a:["quatre-vingt-douze"], long:true},{q:"70 →", a:["soixante-dix"], long:true},{q:"80 →", a:["quatre-vingts"], long:true}
]}
]},
{
id:"c1-delf", sec:"cahier", unit:"1", kind:"DELF A1",
title:"DELF A1 · Compréhension des écrits", ru:TF("Афиша фестиваля: понимание письменного текста","A festival poster: reading comprehension"), page:CPG("16–17"),
theory:`<div class="doc-card fr"><b>FESTIVAL DE MUSIQUE FRANCOFOLIES</b><br>MERCREDI 14 JUILLET<br>Concert de Jane Birkin à La Rochelle.<br>Jane Birkin est une musicienne anglaise. Elle est née le 14 décembre 1946 à Londres. Elle habite en France depuis 1960. Jane Birkin parle français et italien. Elle est aussi artiste de cinéma.<br><br><b>PROGRAMME</b><br>19 h Présentation de l’artiste<br>20 h Concert « Jane par Charlotte »<br><br><b>PRIX DU BILLET</b><br>25 euros sur www.francofolies.billet.fr</div>
${NOTE(TF("Задание DELF A1, «Compréhension des écrits», упражнение 4. Прочитай афишу и ответь на вопросы.","DELF A1, «Compréhension des écrits», exercise 4. Read the poster and answer the questions."))}`,
ex:[
{t:"mc", ctx:true, h:TF("Ответь на вопросы по афише","Answer the questions about the poster"), w:[
"Все ответы есть в тексте: concert, musicienne anglaise, née le 14 décembre, programme 19 h / 20 h, billet sur Internet.",
"Every answer is in the text: concert, musicienne anglaise, née le 14 décembre, programme 19 h / 20 h, billet sur Internet."], items:[
{q:"L’affiche est pour quel événement ?", o:["Un concert.","Un film au cinéma.","Une exposition."], a:0},
{q:"Quelle est la nationalité de l’artiste ?", o:["Anglaise.","Italienne.","Française."], a:0, e:TF("Она живёт во Франции, но она англичанка.","She lives in France, but she is English.")},
{q:"Quelle est la date de naissance de l’artiste ?", o:["14 décembre.","14 juillet.","25 septembre."], a:0, e:TF("14 juillet — дата концерта.","14 juillet is the concert date.")},
{q:"À quelle heure commence l’événement ?", o:["À 19 h.","À 20 h.","À 21 h."], a:1, e:TF("По ответам тетради — 20 h: в 19 h только представление артистки.","The workbook key says 20 h: at 19 h there’s only the introduction.")},
{q:"Comment vous pouvez avoir un billet ?", o:["Sur Internet.","Au festival.","Au téléphone."], a:0}
]}
]},

/* ================= UNITÉ 2 ================= */
{
id:"c2-articles", sec:"cahier", unit:"2", kind:"Cahier",
title:"Les articles définis et indéfinis", ru:TF("un, une, des или le, la, l’, les + habiter","un, une, des or le, la, l’, les + habiter"), page:CPG("19"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`${F("un / une / des")} — что-то новое, «какой-то»; ${F("le / la / l’ / les")} — конкретное или «вообще» (после ${F("aimer, adorer")}). Цепочка: ${F("un quartier → le quartier de Vizille")}.`, `${F("un / une / des")} — something new, «a, some»; ${F("le / la / l’ / les")} — specific or «in general» (after ${F("aimer, adorer")}). The chain: ${F("un quartier → le quartier de Vizille")}.`)}</p>`), [["u2-articles","Articles définis et indéfinis"],["u2-verbes-er","Les verbes en -er"]]),
ex:[
{t:"mc", h:CX(2)+TF("Выбери артикль","Choose the article"), w:[
"Впервые и «какой-то» — un/une; конкретный (quartier Saint-Laurent) и «вообще» после adorer/aimer — le/la/les.",
"First mention / «some» — un/une; a specific one (quartier Saint-Laurent) and «in general» after adorer/aimer — le/la/les."], items:[
{q:"Tu as ___ piano ?", o:["un","le"], a:0},
{q:"Pauline adore ___ langues.", o:["les","des"], a:0},
{q:"J’aime ___ histoire de la France.", o:["l’","la"], a:0},
{q:"___ quartier Saint-Laurent est super !", o:["Le","Un"], a:0}
]},
{t:"fill", h:CX(3)+TF("Вставь un, une, des, le, la, l’ или les","Fill in un, une, des, le, la, l’ or les"), w:[
"Сначала un quartier (новый), потом le quartier de Vizille (уже известный). appartement de Jeanine — конкретная → L’. aimer + la musique (вообще).",
"First un quartier (new), then le quartier de Vizille (now known). appartement de Jeanine is specific → L’. aimer + la musique (in general)."], items:[
{q:"Jeanine habite ___ quartier calme.", a:["un"]},
{q:"C’est ___ quartier de Vizille.", a:["le"]},
{q:"Elle est dans ___ appartement…", a:["un"]},
{q:"…avec ___ amie. Elle s’appelle Mireille.", a:["une"]},
{q:"___ appartement de Jeanine et de Mireille est très sympa.", a:["L’","L'"]},
{q:"Elles aiment ___ musique.", a:["la"]},
{q:"Elles ont ___ instruments de musique.", a:["des"]},
{q:"Mireille a ___ piano…", a:["un"]},
{q:"…et Jeanine a ___ guitare !", a:["une"]}
]},
{t:"fill", h:CX(4)+TF("Допиши окончания глагола habiter","Complete the endings of habiter"), w:[
"habiter: j’habite, tu habites, il habite, nous habitons, vous habitez, ils habitent.",
"habiter: j’habite, tu habites, il habite, nous habitons, vous habitez, ils habitent."], items:[
{q:"Marie et Frédéric habit___ à Bruxelles.", a:["ent"]},{q:"Stéphane habit___ à Genève.", a:["e"]},{q:"J’habit___ à Dakar.", a:["e"]},{q:"Rio et moi, nous habit___ à Montréal.", a:["ons"]},{q:"Vous habit___ où ?", a:["ez"]},{q:"Tu habit___ avec Jacques ?", a:["es"]}
]}
]},
{
id:"c2-verbes-er", sec:"cahier", unit:"2", kind:"Cahier",
title:"Les verbes en -er au présent", ru:TF("Глаголы на -er, je/j’ и ne/n’","-er verbs, je/j’ and ne/n’"), page:CPG("20"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`Окончания: ${F("-e, -es, -e, -ons, -ez, -ent")}. Перед гласной или немой h: ${F("je → j’")}, ${F("ne → n’")} (${F("j’adore, il n’aime pas")}).`, `Endings: ${F("-e, -es, -e, -ons, -ez, -ent")}. Before a vowel or silent h: ${F("je → j’")}, ${F("ne → n’")} (${F("j’adore, il n’aime pas")}).`)}</p>`), [["u2-verbes-er","Les verbes en -er"]]),
ex:[
{t:"mc", h:CX(1)+TF("Выбери правильный вариант","Choose the right option"), w:[
"Перед согласной — je / ne, перед гласной или немой h — j’ / n’.",
"Before a consonant — je / ne, before a vowel or silent h — j’ / n’."], items:[
{q:"___ déteste le sport.", o:["Je","J’"], a:0},{q:"___ adore la montagne.", o:["J’","Je"], a:0},{q:"Il ___ aime pas la ville.", o:["n’","ne"], a:0},{q:"Nous ___ habitons pas à Paris.", o:["n’","ne"], a:0},{q:"Tu ___ parles pas espagnol ?", o:["ne","n’"], a:0},{q:"___ habite à Lyon.", o:["J’","Je"], a:0}
]},
{t:"match", h:CX(2)+TF("Составь фразы","Make sentences"), w:[
"Окончание подсказывает подлежащее: -ons — nous, -ez — vous, -es — tu, -ent — ils, -e — je/il.",
"The ending points to the subject: -ons — nous, -ez — vous, -es — tu, -ent — ils, -e — je/il."], pairs:[
["Mike et moi, nous","parlons suédois."],["Je n’","aime pas l’histoire."],["Jacqueline","écoute la radio."],["Vous","regardez des films français ?"],["Tu","marches le dimanche ?"],["Les amis de Rick","détestent le ski."]]},
{t:"fill", h:CX(3)+TF("Вставь: détestes – aime – adorent – dansez – parle – aimons","Fill in: détestes – aime – adorent – dansez – parle – aimons"), w:[
"Подбирай по лицу: elle aime, ils adorent, je parle, tu détestes, nous aimons, vous dansez.",
"Match by person: elle aime, ils adorent, je parle, tu détestes, nous aimons, vous dansez."], items:[
{q:"Elle ___ l’appartement de Julie ! Il est super !", a:["aime"]},
{q:"Ils ___ la danse.", a:["adorent"]},
{q:"Je ne ___ pas bien anglais.", a:["parle"]},
{q:"Tu ___ le quartier Saint-Jean ? Il n’est pas bien ?", a:["détestes"]},
{q:"Nous ___ les films argentins.", a:["aimons"]},
{q:"Vous ___ avec nous ?", a:["dansez"]}
]},
{t:"fill", h:CX(4)+TF("Допиши окончания","Complete the endings"), w:[
"je -e, il -e, ils -ent, vous -ez, tu -es, nous -ons (skier → nous skions).",
"je -e, il -e, ils -ent, vous -ez, tu -es, nous -ons (skier → nous skions)."], items:[
{q:"Je détest___ le sport.", a:["e"]},{q:"Léo march___ à la montagne.", a:["e"]},{q:"Lou et Vadim ador___ danser.", a:["ent"]},{q:"Vous habit___ où ?", a:["ez"]},{q:"Tu dans___ avec moi ?", a:["es"]},{q:"Jorma et moi, nous ne ski___ pas.", a:["ons"]}
]}
]},
{
id:"c2-lieux", sec:"cahier", unit:"2", kind:"Cahier",
title:"Les lieux, les loisirs (2)", ru:TF("Места и досуг","Places and leisure"), page:CPG("21"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`Занятие ↔ глагол: ${F("le ski → skier, la natation → nager, la marche → marcher, la danse → danser")}. Места: ${F("l’appartement, la rue, le quartier, la mer, la plage, l’université")}.`, `Activity ↔ verb: ${F("le ski → skier, la natation → nager, la marche → marcher, la danse → danser")}. Places: ${F("l’appartement, la rue, le quartier, la mer, la plage, l’université")}.`)}</p>`), [["u2-gouts","Les loisirs et les goûts"],["u2-habiter","Habiter"]]),
ex:[
{t:"fill", h:CX(1)+TF("Допиши по образцу: le ski → skier","Complete like the model: le ski → skier"), w:[
"nager ↔ la natation, marcher ↔ la marche, la danse ↔ danser.", "nager ↔ la natation, marcher ↔ la marche, la danse ↔ danser."], items:[
{q:"Bertille adore la ___. Elle adore nager.", a:["natation"]},{q:"Zaza déteste la ___. Elle déteste marcher.", a:["marche"]},{q:"Albert n’aime pas la danse. Il n’aime pas ___.", a:["danser"]}
]},
{t:"fill", h:CX(2)+TF("Допиши слова","Complete the words"), w:[
"Число пропусков = число букв: appartement, rue, mer, plages, quartier, instrument.",
"The number of blanks = the number of letters: appartement, rue, mer, plages, quartier, instrument."], items:[
{q:"L’a_ _ _ _ _ _ _ _ _ _ de Thierry…", a:["appartement"]},{q:"…est dans une r_ _ sympa ?", a:["rue"]},{q:"À Nice, il y a la m_ _…", a:["mer"]},{q:"…et les p_ _ _ _ _ sont grandes.", a:["plages"]},{q:"L’université de Carl est dans un q_ _ _ _ _ _ _ calme.", a:["quartier"]},{q:"Tu as un i_ _ _ _ _ _ _ _ _ de musique ?", a:["instrument"]}
]},
{t:"fill", h:CX(4)+TF("Вставь: films – marche – festival – université – guitare","Fill in: films – marche – festival – université – guitare"), w:[
"films (мн. ч. после les), festival de danse, piano ou guitare, je marche (глагол), à l’université.",
"films (plural after les), festival de danse, piano ou guitare, je marche (verb), à l’université."], items:[
{q:"J’adore les ___ des frères Podalydès.", a:["films"]},{q:"Deux places pour le ___ de danse, s’il vous plaît.", a:["festival"]},{q:"Tu préfères le piano ou la ___ ?", a:["guitare"]},{q:"Le dimanche, je ___ à la montagne.", a:["marche"]},{q:"Armelle est à l’___ de Lyon.", a:["université"]}
]}
]},
{
id:"c2-possessifs", sec:"cahier", unit:"2", kind:"Cahier",
title:"Les adjectifs possessifs", ru:TF("mon, ma, mes, notre, leur…","mon, ma, mes, notre, leur…"), page:CPG("22"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`Род берётся от <b>предмета</b>, а не от владельца: ${F("sa rue")} — «его/её улица». Перед гласной в ж. р. — ${F("mon / ton / son")} (${F("son adresse")}). Один владелец — ${F("son / sa / ses")}, несколько — ${F("leur / leurs")}.`, `The gender comes from the <b>thing owned</b>, not the owner: ${F("sa rue")} — «his/her street». Before a vowel in the feminine — ${F("mon / ton / son")} (${F("son adresse")}). One owner — ${F("son / sa / ses")}, several — ${F("leur / leurs")}.`)}</p>`), [["u2-possessifs","Les adjectifs possessifs"]]),
ex:[
{t:"mc", h:CX(1)+TF("Выбери правильное слово","Choose the right word"), w:[
"cousine, rue, tante — ж. ед. → ma/sa; père — м. → ton; parents, frères — мн. → mes/tes.",
"cousine, rue, tante — f. sing. → ma/sa; père — m. → ton; parents, frères — pl. → mes/tes."], items:[
{q:"___ cousine est fille unique.", o:["Ma","Mon"], a:0},{q:"___ père est fleuriste ?", o:["Ton","Ta"], a:0},{q:"___ rue est calme.", o:["Sa","Son"], a:0},{q:"___ parents habitent à Paris.", o:["Mes","Ma"], a:0},{q:"___ frères ont quel âge ?", o:["Tes","Ton"], a:0},{q:"___ tante est informaticienne ?", o:["Sa","Ses"], a:0}
]},
{t:"mc", h:CX(2)+TF("Выбери правильный ответ","Choose the correct answer"), w:[
"il → ses; nous → nos; elles / ils → leurs; vous → vos. Мн. ч. предмета → форма на -s.",
"il → ses; nous → nos; elles / ils → leurs; vous → vos. Plural thing → the form in -s."], items:[
{q:"Il a deux frères. Ce sont…", o:["ses frères.","leurs frères."], a:0},
{q:"Nous avons trois enfants. Ce sont…", o:["nos enfants.","leurs enfants."], a:0},
{q:"Elles ont des amis à l’université. Ce sont…", o:["leurs amis.","ses amis."], a:0},
{q:"Vous avez deux filles. Ce sont…", o:["vos filles.","leurs filles."], a:0},
{q:"Ils ont deux fils. Ce sont…", o:["leurs fils.","ses fils."], a:0},
{q:"Nous avons huit cousins. Ce sont…", o:["nos cousins.","notre cousin."], a:0}
]},
{t:"fill", h:CX(4)+TF("Перепиши по образцу: L’appartement est à vous ? → C’est votre appartement ?","Rewrite like the model: L’appartement est à vous ? → C’est votre appartement ?"), w:[
"à toi → ton, à moi → ma/mes, de Nicolas / de madame Pinot → sa/son (adresse — перед гласной son), de Pia et Kelly → leurs.",
"à toi → ton, à moi → ma/mes, de Nicolas / de madame Pinot → sa/son (adresse starts with a vowel → son), de Pia et Kelly → leurs."], items:[
{q:"Le piano est à toi ? → C’est ___ piano ?", a:["ton"]},
{q:"La guitare est à moi ! → C’est ___ guitare !", a:["ma"]},
{q:"C’est la famille de Nicolas. → C’est ___ famille.", a:["sa"]},
{q:"C’est l’adresse de madame Pinot. → C’est ___ adresse.", a:["son"], e:TF("adresse — ж. р., но начинается с гласной → son.","adresse is feminine but starts with a vowel → son.")},
{q:"Les instruments de musique sont à moi. → Ce sont ___ instruments de musique.", a:["mes"]},
{q:"Ce sont les parents de Pia et Kelly. → Ce sont ___ parents.", a:["leurs"]}
]}
]},
{
id:"c2-professions", sec:"cahier", unit:"2", kind:"Cahier",
title:"Le masculin et le féminin des professions", ru:TF("Профессии в мужском и женском роде, travailler и étudier","Jobs in the masculine and feminine, travailler and étudier"), page:CPG("23"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`${F("-eur → -euse")} (coiffeur → coiffeuse), ${F("-teur → -trice")} (acteur → actrice), ${F("-ier → -ière")} (infirmier → infirmière), ${F("-ien → -ienne")} (informaticien → informaticienne), + e (étudiant → étudiante, professeur → professeure).`, `${F("-eur → -euse")} (coiffeur → coiffeuse), ${F("-teur → -trice")} (acteur → actrice), ${F("-ier → -ière")} (infirmier → infirmière), ${F("-ien → -ienne")} (informaticien → informaticienne), + e (étudiant → étudiante, professeur → professeure).`)}</p>`), [["u2-professions","Le masculin et le féminin des professions"]]),
ex:[
{t:"sort", h:CX(1)+TF("Мужской или женский род?","Masculine or feminine?"), cats:[TF("мужской (Il est…)","masculine (Il est…)"),TF("женский (Elle est…)","feminine (Elle est…)")], w:[
"Женские окончания: -euse, -trice, -ière, -ienne, -e.", "Feminine endings: -euse, -trice, -ière, -ienne, -e."], items:[["infirmier",0],["professeure",1],["actrice",1],["coiffeuse",1],["informaticien",0],["étudiant",0]]},
{t:"mc", h:CX(2)+TF("Прочитай текст Софи и выбери форму","Read Sophie’s text and choose the form"), w:[
"Профессия согласуется с человеком: Sophie → professeure, Younès → informaticien, Florent → étudiant, Rose → coiffeuse, petite amie → actrice, le mari → infirmier.",
"The job agrees with the person: Sophie → professeure, Younès → informaticien, Florent → étudiant, Rose → coiffeuse, petite amie → actrice, le mari → infirmier."], items:[
{q:"Je m’appelle Sophie, je suis ___.", o:["professeure","professeur"], a:0},
{q:"Mon mari s’appelle Younès et il est ___.", o:["informaticien","informaticienne"], a:0},
{q:"Notre fils s’appelle Florent. Il est ___ à l’université.", o:["étudiant","étudiante"], a:0},
{q:"Notre fille Rose est ___.", o:["coiffeuse","coiffeur"], a:0},
{q:"La petite amie de Florent est ___.", o:["actrice","acteur"], a:0},
{q:"Le mari de Rose est ___.", o:["infirmier","infirmière"], a:0}
]},
{t:"mc", h:CX(4)+TF("Выбери форму travailler / étudier","Choose the form of travailler / étudier"), w:[
"j’étudie, nous travaillons, ils travaillent, elles étudient, vous travaillez, tu étudies.",
"j’étudie, nous travaillons, ils travaillent, elles étudient, vous travaillez, tu étudies."], items:[
{q:"J’___ la littérature.", o:["étudie","étudies"], a:0},{q:"Mon mari et moi, nous ___ à l’hôpital.", o:["travaillons","travaillent"], a:0},{q:"Mes parents ___ à l’université.", o:["travaillent","travaille"], a:0},{q:"Tes amies ___ l’histoire aussi ?", o:["étudient","étudions"], a:0},{q:"Vous ___ dans quelle ville ?", o:["travaillez","travaillons"], a:0},{q:"Tu ___ le cinéma à l’université ?", o:["étudies","étudie"], a:0}
]},
{t:"fill", h:CX(5)+TF("Поставь глагол в нужную форму","Put the verb in the right form"), w:[
"Mon père et ma mère = ils → travaillent; ma sœur et ma cousine = elles → étudient; mon oncle = il → travaille.",
"Mon père et ma mère = ils → travaillent; ma sœur et ma cousine = elles → étudient; mon oncle = il → travaille."], items:[
{q:"Je ___ à Bruxelles. (travailler)", a:["travaille"]},{q:"Mon père et ma mère ___ à Paris. (travailler)", a:["travaillent"]},{q:"Mon frère Stan ___ à Lyon. (étudier)", a:["étudie"]},{q:"Ma sœur et ma cousine, elles ___ à l’université de Grenoble. (étudier)", a:["étudient"]},{q:"Mon oncle ___ beaucoup, il est professeur. (travailler)", a:["travaille"]},{q:"Tu ___ où ? (étudier)", a:["étudies"]}
]}
]},
{
id:"c2-famille", sec:"cahier", unit:"2", kind:"Cahier",
title:"La famille, les professions", ru:TF("Семья: кто кому кем приходится","Family: who is who"), page:CPG("24"),
theory:`<div class="doc-card fr">Mes grands-parents s’appellent Monique et Albert. Ils ont deux enfants, mon père, Richard, et ma tante, Isabelle. Isabelle est mariée, son mari s’appelle Karim. Ma mère s’appelle Diane. Je suis fille unique. J’ai une cousine. Elle s’appelle Sarah. Moi, je m’appelle Cécilia.</div>
${MEMO("", [["u2-famille","La famille"]])}`,
ex:[
{t:"mc", ctx:true, h:CX(1)+TF("Прочитай текст Сесилии: кто это?","Read Cécilia’s text: who is it?"), w:[
"Построй дерево: Monique + Albert → Richard (+ Diane) и Isabelle (+ Karim). Дети: Cécilia (у Richard и Diane) и Sarah (у Isabelle и Karim).",
"Build the tree: Monique + Albert → Richard (+ Diane) and Isabelle (+ Karim). Children: Cécilia (Richard and Diane’s) and Sarah (Isabelle and Karim’s)."], items:[
{q:"Le père de Cécilia s’appelle…", o:["Richard","Albert","Karim"], a:0},
{q:"Isabelle est … de Cécilia.", o:["la tante","la mère","la cousine"], a:0},
{q:"Karim est le mari de…", o:["Isabelle","Diane","Monique"], a:0},
{q:"Sarah est la fille de…", o:["Isabelle et Karim","Richard et Diane","Monique et Albert"], a:0},
{q:"Cécilia a des frères et sœurs ?", o:["Non, elle est fille unique.","Oui, une sœur, Sarah."], a:0, e:TF("Sarah — двоюродная сестра (cousine).","Sarah is her cousin (cousine).")}
]},
{t:"mc", h:CX(2)+TF("Выбери правильный ответ","Choose the right answer"), w:[
"Брат отца — дядя (oncle), отец — сын бабушки и дедушки, сын дяди и тёти — двоюродный брат (cousin), я — внучка (petite-fille), сестра мамы — тётя (tante).",
"Your father’s brother is your uncle (oncle), your father is your grandparents’ son, your uncle and aunt’s son is your cousin, you’re your grandparents’ petite-fille, your mother’s sister is your aunt (tante)."], items:[
{q:"Le frère de mon père, c’est mon…", o:["oncle","neveu"], a:0},
{q:"Mon père, c’est le fils de mes…", o:["grands-parents","parents"], a:0},
{q:"Le fils de mon oncle et de ma tante, c’est mon…", o:["cousin","frère"], a:0},
{q:"Je suis la … de mes grands-parents.", o:["petite-fille","fille"], a:0},
{q:"La sœur de ma mère, c’est ma…", o:["tante","grand-mère"], a:0}
]}
]},
{
id:"c2-lecture", sec:"cahier", unit:"2", kind:TF("Compréhension écrite","Compréhension écrite"),
title:"Comment tu vas ?", ru:TF("Письмо Фионы: понимание текста","Fiona’s e-mail: reading comprehension"), page:CPG("25"),
theory:`<div class="doc-card fr">Salut Mimi,<br>Comment tu vas ?<br>Moi, ça va très bien ! J’ai un petit ami maintenant, il s’appelle Marius. Il est très sympa. Il travaille avec mon frère, ils sont professeurs à l’université. La famille de Marius est super aussi, son père est fleuriste et sa mère est informaticienne. Marius est fils unique mais il a beaucoup de cousins. Marius et moi, nous habitons ensemble dans un appartement, dans un quartier sympa. C’est le quartier de Barriol, il est très calme.<br>On aime beaucoup la danse ! Nous dansons le rock ! Et on adore la musique. Nous avons un piano maintenant !<br>Et toi, et ton mari ? Vous habitez dans quel quartier maintenant ? Et tes parents, ta sœur, ça va ?<br>Bisous,<br>Fiona</div>`,
ex:[
{t:"mc", ctx:true, h:CX(1)+TF("Выбери правильный ответ","Choose the correct answer"), w:[
"В письме: «J’ai un petit ami… Marius», «ils sont professeurs», «Marius est fils unique».",
"The e-mail says: «J’ai un petit ami… Marius», «ils sont professeurs», «Marius est fils unique»."], items:[
{q:"Marius est…", o:["le petit ami de Fiona.","le mari de Fiona."], a:0},
{q:"Marius est…", o:["professeur.","fleuriste."], a:0, e:TF("Fleuriste — его отец.","His father is the florist.")},
{q:"Marius…", o:["n’a pas de frères et sœurs.","a des frères et sœurs."], a:0, e:TF("fils unique — единственный сын.","fils unique — an only son.")}
]},
{t:"tf", ctx:true, h:CX(2)+TF("Верно или неверно?","True or false?"), w:[
"Отец — флорист, мать — программист → оба работают; они живут в квартире; квартал «très calme», «sympa» — Фионе нравится.",
"His father is a florist and his mother a programmer → both work; they live in a flat; the area is «très calme», «sympa» — Fiona likes it."], items:[
{q:"Les parents de Marius travaillent.", a:true},
{q:"Fiona et Marius habitent dans un appartement.", a:true},
{q:"Fiona n’aime pas son quartier.", a:false}
]},
{t:"mc", ctx:true, h:CX(3)+"–4. "+TF("Досуг и инструмент","Hobbies and instrument"), w:[
"«On aime beaucoup la danse… on adore la musique. Nous avons un piano maintenant !»",
"«On aime beaucoup la danse… on adore la musique. Nous avons un piano maintenant !»"], items:[
{q:"Quels sont les deux loisirs de Fiona et Marius ?", o:["La danse et la musique.","Le cinéma et le ski.","La natation et la marche."], a:0},
{q:"Quel instrument de musique ils ont ?", o:["Un piano.","Une guitare.","Un violon."], a:0}
]}
]},
{
id:"c2-bilan", sec:"cahier", unit:"2", kind:"Cahier",
title:"Bilan linguistique · Unité 2", ru:TF("Итоговая проверка юнита 2","End-of-unit check, unit 2"), page:CPG("26–27"),
theory:MEMO(RULE(TF("Как работать","How to use it"), `<p>${TF("Итоговый тест юнита 2. Реши без подсказок, потом открой «?» у ошибок.","The unit 2 end test. Do it without help, then open «?» on your mistakes.")}</p>`), [["u2-articles","Articles"],["u2-verbes-er","Verbes en -er"],["u2-possessifs","Possessifs"],["u2-professions","Professions"]]),
ex:[
{t:"fill", h:CX(1)+TF("Определённый или неопределённый артикль","Definite or indefinite article"), w:[
"rue calme (какая-то) → une; instruments de Martin (конкретные) → les; appartement de Marilou → l’; quartier sympa (какой-то) → un; ville de naissance d’Abel → la.",
"rue calme (some street) → une; instruments de Martin (specific) → les; appartement de Marilou → l’; quartier sympa (some area) → un; ville de naissance d’Abel → la."], items:[
{q:"C’est ___ rue calme.", a:["une"]},{q:"Ce sont ___ instruments de Martin.", a:["les"]},{q:"C’est ___ appartement de Marilou.", a:["l’","l'"]},{q:"Vous travaillez dans ___ quartier sympa.", a:["un"]},{q:"C’est ___ ville de naissance d’Abel.", a:["la"]}
]},
{t:"fill", h:CX(2)+TF("Поставь глагол в настоящее время","Put the verb in the present"), w:[
"je parle, nous habitons, il skie, vous aimez, ils adorent.", "je parle, nous habitons, il skie, vous aimez, ils adorent."], items:[
{q:"Je ___ anglais. (parler)", a:["parle"]},{q:"Nous ___ un quartier sympa. (habiter)", a:["habitons"]},{q:"Il ne ___ pas. (skier)", a:["skie"]},{q:"Vous ___ la natation ? (aimer)", a:["aimez"]},{q:"Magali et Léo ___ la marche. (adorer)", a:["adorent"]}
]},
{t:"fill", h:CX(3)+TF("Ответь с притяжательным словом","Answer with a possessive"), w:[
"appartement de Sofia → son; ta fille → ma; parents de Joe → ses; fils de Marie et Antoine (двое владельцев, один сын) → leur; amis de Matyas et Jacob → leurs.",
"appartement de Sofia → son; ta fille → ma; parents de Joe → ses; fils de Marie et Antoine (two owners, one son) → leur; amis de Matyas et Jacob → leurs."], items:[
{q:"– C’est l’appartement de Sofia ? – Oui, c’est ___ appartement.", a:["son"]},
{q:"– Comment s’appelle ta fille ? – ___ fille s’appelle Dita.", a:["Ma"]},
{q:"– Les parents de Joe travaillent ? – Oui, ___ parents travaillent.", a:["ses"]},
{q:"– Le fils de Marie et Antoine est à l’université ? – Oui, ___ fils est à l’université.", a:["leur"]},
{q:"– Les amis de Matyas et Jacob sont sympas ? – Oui, ___ amis sont très sympas !", a:["leurs"]}
]},
{t:"fill", h:CX(4)+TF("Измени профессию, если нужно","Change the job word if needed"), w:[
"coiffeur → coiffeuse, fleuriste не меняется, acteur → actrice, infirmier (oncle — м. р.), informaticien → informaticienne.",
"coiffeur → coiffeuse, fleuriste doesn’t change, acteur → actrice, infirmier (oncle is masc.), informaticien → informaticienne."], items:[
{q:"Ma fille est ___. (coiffeur)", a:["coiffeuse"]},{q:"Mon frère est ___. (fleuriste)", a:["fleuriste"]},{q:"Ma cousine est ___. (acteur)", a:["actrice"]},{q:"Mon oncle est ___. (infirmier)", a:["infirmier"]},{q:"Ma sœur est ___. (informaticien)", a:["informaticienne"]}
]},
{t:"fill", h:TF("Vocabulaire · ","Vocabulaire · ")+CX(1)+TF("Вставь слова из юнита","Fill in words from the unit"), w:[
"Логика текста: rue dans un quartier, instruments: un piano et une guitare, le festival de Cannes, marcher sur la plage, nager dans la mer.",
"Follow the text: a street in a quartier, instruments: un piano et une guitare, le festival de Cannes, walk on the plage, swim in the mer."], items:[
{q:"Notre rue est dans un ___ très sympa.", a:["quartier"]},
{q:"Nous avons deux instruments de musique : un piano et une ___.", a:["guitare"]},
{q:"On adore le ___ international de Cannes !", a:["festival"]},
{q:"Le week-end, on adore marcher sur la ___…", a:["plage"]},
{q:"…et nager dans la ___.", a:["mer"]}
]},
{t:"tf", h:TF("Vocabulaire · ","Vocabulaire · ")+CX(3)+TF("Верно или неверно?","True or false?"), w:[
"Fille unique — значит без братьев и сестёр, поэтому «J’ai deux frères. Je suis fille unique» — неверно. Остальное — правда.",
"Fille unique means no brothers or sisters, so «J’ai deux frères. Je suis fille unique» is false. The rest are true."], items:[
{q:"La sœur de ma mère est ma tante.", a:true},{q:"Mon père est le fils de mes grands-parents.", a:true},{q:"Elle étudie à l’université. Elle est étudiante.", a:true},{q:"J’ai deux frères. Je suis fille unique.", a:false},{q:"Le neveu de ma mère est mon cousin.", a:true}
]},
{t:"fill", h:TF("Vocabulaire · ","Vocabulaire · ")+CX(4)+TF("Вставь: petits-enfants – petit ami – infirmier – professeure – actrice","Fill in: petits-enfants – petit ami – infirmier – professeure – actrice"), w:[
"больница → infirmier; не замужем → petit ami; у бабушки с дедушкой → petits-enfants; кино → actrice; университет → professeure.",
"hospital → infirmier; not married → petit ami; grandparents have → petits-enfants; cinema → actrice; university → professeure."], items:[
{q:"Mon frère travaille à l’hôpital. Il est ___.", a:["infirmier"]},{q:"Ma sœur n’est pas mariée. Son ___ s’appelle Marc.", a:["petit ami"]},{q:"Mes grands-parents ont 13 ___.", a:["petits-enfants"]},{q:"Ma mère est ___ de cinéma.", a:["actrice"]},{q:"Ma tante travaille à l’université, elle est ___.", a:["professeure"]}
]}
]},
{
id:"c2-delf", sec:"cahier", unit:"2", kind:"DELF A1",
title:"DELF A1 · Compréhension des écrits", ru:TF("Сообщение Бланш: понимание письменного текста","Blanche’s message: reading comprehension"), page:CPG("28"),
theory:`<div class="doc-card fr">Salut,<br>Ce week-end, je vais chez ma sœur, à la montagne. Je t’invite. Elle habite dans un grand appartement. Elle est infirmière à l’hôpital et son mari est professeur de ski. Tu aimes skier ? Moi, j’adore ! C’est plus sympa que la plage, je déteste nager.<br>Je t’attends vendredi à 10 h, devant l’université. Il y a 5 heures entre Paris et Grenoble. Nous arrivons l’après-midi, à 15 h.<br>Bisous,<br>Blanche</div>
${NOTE(TF("DELF A1, «Compréhension des écrits», упражнение 1.","DELF A1, «Compréhension des écrits», exercise 1."))}`,
ex:[
{t:"mc", ctx:true, h:TF("Ответь на вопросы по сообщению","Answer the questions about the message"), w:[
"Ответы в тексте: chez ma sœur, à la montagne; elle est infirmière; j’adore skier; vendredi à 10 h, devant l’université.",
"The answers are in the text: chez ma sœur, à la montagne; elle est infirmière; j’adore skier; vendredi à 10 h, devant l’université."], items:[
{q:"Où va Blanche ce week-end ?", o:["À la montagne.","À la plage.","À Paris."], a:0},
{q:"Quelle est la profession de la sœur de Blanche ?", o:["Infirmière.","Professeure de ski.","Étudiante."], a:0, e:TF("Professeur de ski — её муж.","Her husband is the ski instructor.")},
{q:"Blanche adore…", o:["skier.","nager.","marcher."], a:0},
{q:"Vous partez avec Blanche à quelle heure ?", o:["À 10 h.","À 5 h.","À 15 h."], a:0, e:TF("15 h — время прибытия, 5 h — длительность поездки.","15 h is the arrival time, 5 h is the length of the trip.")},
{q:"Où est le rendez-vous ?", o:["À l’université.","À la gare.","À l’hôpital."], a:0}
]}
]},
{
id:"c2-jeux", sec:"cahier", unit:"2", kind:"Cahier",
title:"Jeux · Unité 2", ru:TF("Слова из слогов и спряжение","Words from syllables and conjugation"), page:CPG("30"),
theory:MEMO("", [["u2-famille","La famille"],["u2-verbes-er","Les verbes en -er"]]),
ex:[
{t:"fill", h:CX(1)+TF("Собери слово из слогов","Put the syllables together"), w:[
"célibataire — не женат; marié — женат; mariage — свадьба; petit ami — парень; étudiant — студент; enfants — дети.",
"célibataire — single; marié — married; mariage — wedding; petit ami — boyfriend; étudiant — student; enfants — children."], items:[
{q:"ba – li – cé – taire →", a:["célibataire"]},{q:"é – ma – ri →", a:["marié"]},{q:"ri – age – ma →", a:["mariage"]},{q:"tit – pe – mi – a →", a:["petit ami","petit-ami"]},{q:"tu – di – ant – é →", a:["étudiant"]},{q:"ts – fan – en →", a:["enfants"]}
]},
{t:"fill", h:CX(3)+TF("Проспрягай","Conjugate"), w:[
"Окончания -er: elles -ent, je -e, il -e, tu -es, elle -e, nous -ons, ils -ent, vous -ez.",
"-er endings: elles -ent, je -e, il -e, tu -es, elle -e, nous -ons, ils -ent, vous -ez."], items:[
{q:"travailler : elles ___", a:["travaillent"]},{q:"nager : je ___", a:["nage"]},{q:"danser : il ___", a:["danse"]},{q:"étudier : tu ___", a:["étudies"]},{q:"adorer : elle ___", a:["adore"]},{q:"parler : nous ___", a:["parlons"]},{q:"aimer : ils ___", a:["aiment"]},{q:"détester : vous ___", a:["détestez"]}
]}
]},

/* ================= UNITÉ 3 ================= */
{
id:"c3-pluriel", sec:"cahier", unit:"3", kind:"Cahier",
title:"Le singulier et le pluriel des noms", ru:TF("Единственное и множественное число","Singular and plural"), page:CPG("31"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`Мн. ч. = + ${F("s")} (не читается). После числа больше одного — мн. ч.: ${F("trois kilos de pommes")}.`, `Plural = + ${F("s")} (silent). After a number above one — plural: ${F("trois kilos de pommes")}.`)}</p>`), [["u3-pluriel","Le singulier et le pluriel"]]),
ex:[
{t:"sort", h:CX(1)+TF("Единственное или множественное?","Singular or plural?"), cats:[TF("ед. ч.","singular"),TF("мн. ч.","plural")], w:[
"Мн. ч. — слова на -s: abricots, tomates, pâtes.", "Plural — the words ending in -s: abricots, tomates, pâtes."], items:[["baguette",0],["abricots",1],["tomates",1],["courgette",0],["pâtes",1],["panier",0],["poulet",0]]},
{t:"mc", h:CX(3)+TF("Выбери правильную форму","Choose the correct form"), w:[
"После les / мес / deux — мн. ч.; после une / le — ед. ч.",
"After les / mes / deux — plural; after une / le — singular."], items:[
{q:"J’aime les ___ de saison.", o:["fruits","fruit"], a:0},{q:"Il y a une ___ ici ?", o:["boulangerie","boulangeries"], a:0},{q:"Le ___ est très sympa.", o:["poissonnier","poissonniers"], a:0},{q:"J’achète mes ___ au marché.", o:["légumes","légume"], a:0},{q:"Deux ___ de chèvre, s’il vous plaît.", o:["fromages","fromage"], a:0}
]},
{t:"fill", h:CX(4)+TF("Поставь в ед. или мн. ч.","Singular or plural?"), w:[
"une → ед. ч. (pêche, carte, paquet); trois → мн. ч. (kilos, épiceries).", "une → singular (pêche, carte, paquet); trois → plural (kilos, épiceries)."], items:[
{q:"Je mange une ___. / Tu manges deux pêches.", a:["pêche"]},
{q:"Lydia achète un kilo de pommes. / Son ami achète trois ___ de pommes.", a:["kilos"]},
{q:"Marie a une ___ bleue. / Claude a deux cartes bleues.", a:["carte"]},
{q:"Dans mon quartier, il y a une épicerie. / Dans ton quartier, il y a trois ___.", a:["épiceries"]},
{q:"Je paie un ___ de riz. / Tu paies deux paquets de riz.", a:["paquet"]}
]}
]},
{
id:"c3-prepositions", sec:"cahier", unit:"3", kind:"Cahier",
title:"Les prépositions de lieu (1)", ru:TF("à / au / aux / chez и глаголы acheter, payer, aller","à / au / aux / chez and the verbs acheter, payer, aller"), page:CPG("32"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`Место → ${F("à la, au, à l’, aux")}; человек → ${F("chez")}. ${F("j’achète, nous achetons; je paie, vous payez; je vais, vous allez")}.`, `Place → ${F("à la, au, à l’, aux")}; person → ${F("chez")}. ${F("j’achète, nous achetons; je paie, vous payez; je vais, vous allez")}.`)}</p>`), [["u3-commerces","Les commerces"],["u3-courses","Faire les courses"]]),
ex:[
{t:"match", h:CX(2)+TF("On va… — соедини","On va… — match"), w:[
"chez + человек (épicière, boulangère), à + место (fromagerie, épicerie, marché → au, caisses → aux).",
"chez + person (épicière, boulangère), à + place (fromagerie, épicerie, marché → au, caisses → aux)."], pairs:[
["chez l’","épicière"],["chez la","boulangère"],["à la","fromagerie"],["à l’","épicerie"],["au","marché"],["aux","caisses"]]},
{t:"mc", h:CX(3)+TF("Выбери правильный вариант","Choose the right option"), w:[
"fromagère, épicier — люди → chez; boucherie, boulangerie — места → à la; marché → au; caisses → aux.",
"fromagère, épicier — people → chez; boucherie, boulangerie — places → à la; marché → au; caisses → aux."], items:[
{q:"Pour le fromage, je vais ___ fromagère.", o:["chez la","à la"], a:0},
{q:"J’achète ma viande ___ boucherie.", o:["à la","chez la"], a:0},
{q:"Avec mon mari, on va ___ marché le dimanche.", o:["au","chez le"], a:0},
{q:"Il y a beaucoup de monde ___ épicier.", o:["chez l’","à l’"], a:0},
{q:"J’aime payer ___ caisses automatiques.", o:["aux","chez les"], a:0},
{q:"Le dimanche, on achète les croissants ___ boulangerie.", o:["à la","chez la"], a:0}
]},
{t:"fill", h:CX(4)+TF("Вставь à, au или chez","Fill in à, au or chez"), w:[
"la fromagère, le boucher — люди → chez; marché, supermarché — м. р. → au; la boulangerie → à (la).",
"la fromagère, le boucher — people → chez; marché, supermarché — masc. → au; la boulangerie → à (la)."], items:[
{q:"– Allô, Samira, tu es où ? – Je suis ___ la fromagère.", a:["chez"]},
{q:"– Nous allons ___ marché samedi ?", a:["au"]},
{q:"– Vous payez comment ___ supermarché ? – Par carte bancaire.", a:["au"]},
{q:"– Non, c’est bon, je vais ___ la boulangerie.", a:["à"]},
{q:"– On achète où le poulet ? – On va ___ le boucher.", a:["chez"]}
]},
{t:"fill", h:CX(5)+TF("Поставь глагол в настоящее время","Put the verb in the present"), w:[
"payer: tu paies/payes, vous payez; acheter: elles achètent, il achète; aller: je vais, vous allez.",
"payer: tu paies/payes, vous payez; acheter: elles achètent, il achète; aller: je vais, vous allez."], items:[
{q:"Tu ___ ton panier en ligne ? (payer)", a:["payes","paies"]},
{q:"Elles ___ le fromage chez le fromager. (acheter)", a:["achètent"]},
{q:"Je ___ à la boulangerie et j’achète le pain. (aller)", a:["vais"]},
{q:"Vous ___ comment, Monsieur ? (payer)", a:["payez"]},
{q:"Mon fils ___ le pain au marché. (acheter)", a:["achète"]},
{q:"Vous ___ où pour faire vos courses ? (aller)", a:["allez"]}
]}
]},
{
id:"c3-commerces", sec:"cahier", unit:"3", kind:"Cahier",
title:"Les commerces, la nourriture", ru:TF("Магазины, продавцы, упаковки","Shops, shopkeepers, packaging"), page:CPG("33"),
theory:MEMO("", [["u3-commerces","Les commerces"],["u3-aliments","Les aliments et les quantités"]]),
ex:[
{t:"sort", h:CX(1)+TF("Магазин или продавец?","Shop or shopkeeper?"), cats:[TF("магазины","shops"),TF("продавцы","shopkeepers")], w:[
"Магазин кончается на -erie (poissonnerie, fromagerie, boucherie), продавец — на -ère/-ier/-er.",
"Shops end in -erie (poissonnerie, fromagerie, boucherie), shopkeepers in -ère/-ier/-er."], items:[["la poissonnerie",0],["la fromagerie",0],["la boucherie",0],["la bouchère",1],["la poissonnière",1],["la fromagère",1]]},
{t:"fill", h:CX(3)+TF("Допиши слово (упаковка, оплата, продукт)","Complete the word (packaging, payment, food)"), w:[
"une boîte de thon, par carte ou en espèces, un paquet de pâtes, un pot de crème, le fromage de chèvre.",
"une boîte de thon, par carte ou en espèces, un paquet de pâtes, un pot de crème, le fromage de chèvre."], items:[
{q:"Je voudrais une ___ de thon, s’il vous plaît !", a:["boîte","boite"]},
{q:"Vous payez par ___ ou en espèces ?", a:["carte"]},
{q:"J’ai un ___ de pâtes.", a:["paquet"]},
{q:"Tu achètes un ___ de crème, s’il te plaît ?", a:["pot"]},
{q:"Je n’aime pas le ___ de chèvre.", a:["fromage"]}
]}
]},
{
id:"c3-quantite", sec:"cahier", unit:"3", kind:"Cahier",
title:"La quantité non définie", ru:TF("du, de la, de l’, des, de + faire и manger","du, de la, de l’, des, de + faire and manger"), page:CPG("34"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${TF(`${F("du")} (м.), ${F("de la")} (ж.), ${F("de l’")} (гласная), ${F("des")} (мн.). После ${F("beaucoup, un peu, pas")} — ${F("de / d’")}.`, `${F("du")} (m.), ${F("de la")} (f.), ${F("de l’")} (vowel), ${F("des")} (pl.). After ${F("beaucoup, un peu, pas")} — ${F("de / d’")}.`)}</p>`), [["u3-partitifs","La quantité non définie"]]),
ex:[
{t:"mc", h:CX(2)+TF("Выбери правильный вариант","Choose the right option"), w:[
"viande, glace — ж. р. → de la; café — м. р. → du; eau — гласная → de l’; un peu de — только de.",
"viande, glace — fem. → de la; café — masc. → du; eau — vowel → de l’; un peu de — just de."], items:[
{q:"Nous mangeons ___ viande au restaurant.", o:["de la","de l’"], a:0},{q:"Je voudrais ___ café.", o:["du","de la"], a:0},{q:"Il y a ___ glace ?", o:["de la","de"], a:0},{q:"Dans ma quiche, il y a un peu ___ sel.", o:["de","du"], a:0},{q:"Tu commandes ___ eau, s’il te plaît ?", o:["de l’","d’"], a:0}
]},
{t:"fill", h:CX(3)+TF("Вставь de la, de l’, du, des, de, d’","Fill in de la, de l’, du, des, de, d’"), w:[
"manger du poisson; beaucoup de pâtes; pas de viande; manger de la glace; acheter de l’huile.",
"manger du poisson; beaucoup de pâtes; pas de viande; manger de la glace; acheter de l’huile."], items:[
{q:"Isa adore le poisson, elle mange ___ poisson à la maison et au restaurant.", a:["du"]},
{q:"Jean-Pierre aime les pâtes, il mange beaucoup ___ pâtes.", a:["de"]},
{q:"Je suis végétarienne, je ne mange pas ___ viande.", a:["de"]},
{q:"Mes enfants mangent ___ glace après le repas.", a:["de la"]},
{q:"Alexandra achète ___ huile bio.", a:["de l’","de l'"]}
]},
{t:"fill", h:CX(4)+TF("Измени глагол по новому подлежащему","Change the verb for the new subject"), w:[
"faire: nous faisons, ils font; manger: vous mangez, elles mangent, nous mangeons.",
"faire: nous faisons, ils font; manger: vous mangez, elles mangent, nous mangeons."], items:[
{q:"Vous faites les courses au marché. → Nous ___ les courses au marché.", a:["faisons"]},
{q:"Tu manges avec nous ? → Vous ___ avec nous ?", a:["mangez"]},
{q:"Je fais la cuisine aujourd’hui ! → Nous ___ la cuisine aujourd’hui !", a:["faisons"]},
{q:"Elle ne mange pas au restaurant. → Elles ne ___ pas au restaurant.", a:["mangent"]},
{q:"Je ne mange pas le soir. → Nous ne ___ pas le soir.", a:["mangeons"]},
{q:"Il fait les courses chez l’épicier. → Ils ___ les courses chez l’épicier.", a:["font"]}
]}
]},
{
id:"c3-verbes-ir", sec:"cahier", unit:"3", kind:"Cahier",
title:"Les verbes en -ir (2e groupe) au présent", ru:TF("choisir и finir","choisir and finir"), page:CPG("35"),
theory:MEMO(RULE(TF("Памятка","Reminder"), `<p>${F("-is, -is, -it, -issons, -issez, -issent")}: ${F("je choisis, il finit, nous choisissons, ils finissent")}.</p>`), [["u3-verbes-ir","Les verbes en -ir"]]),
ex:[
{t:"mc", h:CX(1)+TF("Вставь Je, Tu, Il, Nous, Vous, Ils","Fill in Je, Tu, Il, Nous, Vous, Ils"), w:[
"-issons → nous, -it → il/elle, -is + mon → je, -is + ton → tu, -issent → ils, -issez → vous.",
"-issons → nous, -it → il/elle, -is + mon → je, -is + ton → tu, -issent → ils, -issez → vous."], items:[
{q:"___ choisissons le plat.", o:["Nous","Vous"], a:0},{q:"___ finit le café.", o:["Il","Tu"], a:0},{q:"___ ne finis pas mon assiette.", o:["Je","Tu"], a:0},{q:"___ choisis ton dessert ?", o:["Tu","Je"], a:0},{q:"___ choisissent l’entrée.", o:["Ils","Il"], a:0},{q:"___ finissez la salade ?", o:["Vous","Nous"], a:0}
]},
{t:"fill", h:CX(2)+TF("Вставь: choisit – finissent – finis – choisissez – choisissent","Fill in: choisit – finissent – finis – choisissez – choisissent"), w:[
"vous → choisissez, les enfants (ils) → finissent, mes parents → choisissent, je → finis, mon mari (il) → choisit.",
"vous → choisissez, les enfants (ils) → finissent, mes parents → choisissent, je → finis, mon mari (il) → choisit."], items:[
{q:"Les enfants, vous ___ : on mange à la maison ou au restaurant ?", a:["choisissez"]},
{q:"Pourquoi les enfants ne ___ pas leur assiette ?", a:["finissent"]},
{q:"Mes parents ___ le restaurant pour mon anniversaire !", a:["choisissent"]},
{q:"Je ___ le dessert et on commande un café ?", a:["finis"]},
{q:"Mon mari ___ le plat du jour et moi, le magret de canard.", a:["choisit"]}
]},
{t:"fill", h:CX(3)+TF("Допиши окончания","Complete the endings"), w:[
"nous -issons, tu -is, je -is, vous -issez, ils -issent.", "nous -issons, tu -is, je -is, vous -issez, ils -issent."], items:[
{q:"Mes amis et moi, nous choisiss___ nos plats en ligne.", a:["ons"]},
{q:"Tu chois___ quel plat ?", a:["is"]},
{q:"Je ne fin___ pas mon assiette, désolée.", a:["is"]},
{q:"Vous finiss___ la mousse au chocolat ?", a:["ez"]},
{q:"Mes enfants choisiss___ toujours le steak-frites au restaurant.", a:["ent"]}
]},
{t:"fill", h:CX(4)+TF("choisir или finir?","choisir or finir?"), w:[
"Смысл: закончить покупки / доесть → finir; выбрать блюдо → choisir. Форма — по подлежащему.",
"Meaning: finish the shopping / the food → finir; pick a dish → choisir. The form follows the subject."], items:[
{q:"On ___ les courses et on va à la maison !", a:["finit"]},
{q:"Mon fils ___ le plat du jour et moi la blanquette de veau.", a:["choisit"]},
{q:"Vous ne ___ pas votre omelette ?", a:["finissez"]},
{q:"Nous ___ le croque-monsieur végétarien en entrée, s’il vous plaît.", a:["choisissons"]},
{q:"Je ___ ma salade et je mange le riz au lait en dessert.", a:["finis"]}
]}
]},
{
id:"c3-repas", sec:"cahier", unit:"3", kind:"Cahier",
title:"Les repas", ru:TF("Ресторан: порядок действий и меню","The restaurant: order of actions and the menu"), page:CPG("36"),
theory:MEMO("", [["u3-restaurant","Au restaurant"]]),
ex:[
{t:"order", h:CX(2)+TF("Расставь действия по порядку","Put the actions in order"), w:[
"Сначала читают меню, заказывают, едят закуску, основное блюдо, десерт и в конце платят.",
"First you read the menu, order, eat the starter, the main course, the dessert, and pay at the end."], items:[
{s:"lire la carte|commander|manger l’entrée|manger le plat|manger le dessert|payer l’addition", sep:"|", ru:TF("Обед в ресторане от начала до конца","A restaurant meal from start to finish")}
]},
{t:"mc", h:CX(3)+TF("Выбери правильный вариант","Choose the right option"), w:[
"Платят по счёту (l’addition); тарт — десерт; magret — основное блюдо; мороженое едят ложкой; напиток — сок.",
"You pay the bill (l’addition); a tart is a dessert; magret is a main course; you eat ice cream with a spoon; a drink is juice."], items:[
{q:"Je paie ___.", o:["l’addition","le restaurant"], a:0},
{q:"Je voudrais ___ en dessert.", o:["une tarte aux pommes","une quiche"], a:0},
{q:"En plat du jour, nous avons ___.", o:["le magret de canard","le riz au lait"], a:0},
{q:"Je mange ___ avec la cuillère.", o:["la glace","les frites"], a:0},
{q:"Comme boisson, je voudrais ___.", o:["un jus de fruits","une omelette"], a:0}
]}
]},
{
id:"c3-bilan", sec:"cahier", unit:"3", kind:"Cahier",
title:"Bilan linguistique · Unité 3", ru:TF("Итоговая проверка юнита 3","End-of-unit check, unit 3"), page:CPG("38–39"),
theory:MEMO(RULE(TF("Как работать","How to use it"), `<p>${TF("Итоговый тест юнита 3. Реши без подсказок, потом открой «?» у ошибок.","The unit 3 end test. Do it without help, then open «?» on your mistakes.")}</p>`), [["u3-pluriel","Pluriel"],["u3-commerces","À / chez"],["u3-partitifs","Du, de la, des"],["u3-verbes-ir","Verbes en -ir"]]),
ex:[
{t:"mc", h:CX(1)+TF("Выбери правильную форму","Choose the correct form"), w:[
"des → мн. ч. (œufs); un, le, une → ед. ч.; trois → мн. ч. (pots de crème).", "des → plural (œufs); un, le, une → singular; trois → plural (pots de crème)."], items:[
{q:"Il y a des ___ dans la quiche ?", o:["œufs","œuf"], a:0},{q:"On achète un ___ au marché.", o:["poulet","poulets"], a:0},{q:"Le ___ est disponible chez le fleuriste.", o:["panier","paniers"], a:0},{q:"Je voudrais trois ___, s’il vous plaît.", o:["pots de crème","pot de crème"], a:0},{q:"Tu achètes une ___ d’huile d’olive.", o:["bouteille","bouteilles"], a:0}
]},
{t:"fill", h:CX(2)+TF("Вставь chez le, chez la, au, à l’, aux","Fill in chez le, chez la, au, à l’, aux"), w:[
"caisses (мн.) → aux; boulanger, fromagère — люди → chez le / chez la; supermarché → au; épicerie → à l’.",
"caisses (pl.) → aux; boulanger, fromagère — people → chez le / chez la; supermarché → au; épicerie → à l’."], items:[
{q:"Je paie ___ caisses automatiques.", a:["aux"]},{q:"Le dimanche, nous allons ___ boulanger.", a:["chez le"]},{q:"Vous faites vos courses ___ supermarché ?", a:["au"]},{q:"Pour l’huile, on va ___ épicerie bio.", a:["à l’","à l'"]},{q:"Tu achètes le fromage ___ fromagère ?", a:["chez la"]}
]},
{t:"fill", h:CX(3)+TF("Вставь du, de la, de l’, des, de","Fill in du, de la, de l’, des, de"), w:[
"poisson → du; eau → de l’; pommes de terre → des; salade → de la; beaucoup → de.", "poisson → du; eau → de l’; pommes de terre → des; salade → de la; beaucoup → de."], items:[
{q:"On mange ___ poisson aujourd’hui ?", a:["du"]},{q:"Je voudrais ___ eau, s’il vous plaît.", a:["de l’","de l'"]},{q:"Nous avons ___ pommes de terre ?", a:["des"]},{q:"Il y a ___ salade pour le dîner.", a:["de la"]},{q:"Vous mangez beaucoup ___ légumes !", a:["de"]}
]},
{t:"fill", h:CX(4)+TF("choisir или finir","choisir or finir"), w:[
"доесть → finir (tu finis, on finit, nous finissons); выбрать → choisir (je choisis, vous choisissez).", "finish the food → finir (tu finis, on finit, nous finissons); pick → choisir (je choisis, vous choisissez)."], items:[
{q:"Tu ne ___ pas ton assiette ? Ce n’est pas bien !", a:["finis"]},{q:"Je ___ le restaurant pour demain, ok ?", a:["choisis"]},{q:"On ___ de manger et on paie.", a:["finit"]},{q:"Quel dessert vous ___, les enfants ?", a:["choisissez"]},{q:"Nous ___ les courses au supermarché et nous allons chez le boucher.", a:["finissons"]}
]},
{t:"fill", h:TF("Vocabulaire · ","Vocabulaire · ")+CX(1)+TF("Допиши фразы","Complete the sentences"), w:[
"хлеб — boulangerie; fromager работает в fromagerie; рыба — chez la poissonnière; не наличными → par carte; в boucherie — viande.",
"bread — boulangerie; a fromager works in a fromagerie; fish — chez la poissonnière; not cash → par carte; at the boucherie — viande."], items:[
{q:"Pour acheter le pain, je vais à la ___.", a:["boulangerie"]},{q:"Le fromager travaille dans une ___.", a:["fromagerie"]},{q:"Pour le poisson, je vais chez la ___.", a:["poissonnière"]},{q:"Je ne paie pas en espèces, je paie par ___.", a:["carte","carte bancaire"]},{q:"À la boucherie, j’achète de la ___.", a:["viande"]}
]},
{t:"match", h:TF("Vocabulaire · ","Vocabulaire · ")+CX(2)+TF("Упаковка + продукт","Packaging + food"), w:[
"boîte de thon, paquet de riz, bouteille de jus, kilo de poires, pot de crème.", "boîte de thon, paquet de riz, bouteille de jus, kilo de poires, pot de crème."], pairs:[
["une boîte de","thon"],["un paquet de","riz"],["une bouteille de","jus de pomme"],["un kilo de","poires"],["un pot de","crème"]]},
{t:"sort", h:TF("Vocabulaire · ","Vocabulaire · ")+CX(3)+TF("Основное блюдо или десерт?","Main course or dessert?"), cats:[TF("основное блюдо","main course"),TF("десерт","dessert")], w:[
"magret, quiche, blanquette — основные блюда; riz au lait, mousse au chocolat — десерты.", "magret, quiche, blanquette — mains; riz au lait, mousse au chocolat — desserts."], items:[["le magret de canard",0],["la quiche",0],["la blanquette de veau",0],["le riz au lait",1],["la mousse au chocolat",1]]},
{t:"match", h:TF("Vocabulaire · ","Vocabulaire · ")+CX(4)+TF("Соедини начало и конец фразы","Match the beginnings and endings"), w:[
"Платить → счёт; вода → графин; после основного → десерт; выбрать → посмотреть меню; стейк → нож и вилка.",
"Pay → the bill; water → a carafe; after the main → dessert; choose → look at the menu; steak → knife and fork."], pairs:[
["Je voudrais payer,","je demande l’addition."],["Je voudrais de l’eau,","je demande une carafe d’eau."],["Je finis le plat principal et","je commande un dessert."],["Pour choisir mes plats,","je regarde la carte."],["Je mange mon steak-frites","avec un couteau et une fourchette."]]}
]},
{
id:"c3-delf", sec:"cahier", unit:"3", kind:"DELF A1",
title:"DELF A1 · Compréhension des écrits", ru:TF("Объявления в компании: понимание письменного текста","Office notices: reading comprehension"), page:CPG("40"),
theory:`<div class="doc-grid fr">
<div class="doc-card"><b>À la carte</b><br>Plats végans. Ouvert pendant les pauses-déjeuner, du lundi au vendredi.</div>
<div class="doc-card"><b>Ateliers cuisine</b><br>Apprenez à cuisiner avec vos collègues ! Le week-end, de 14 h à 18 h.</div>
<div class="doc-card"><b>Cantine francophone</b><br>Lundi et jeudi à partir de 15 h : découverte de desserts francophones.</div>
<div class="doc-card"><b>Boulangerie française</b><br>Mangez pains au chocolat et croissants ! Ouverte l’après-midi, entre 13 h 30 et 19 h 30.</div>
<div class="doc-card"><b>Marché au bureau</b><br>Tous les premiers lundis du mois. Légumes et fruits du jardin. Renseignements : marcheaubureau@gmail.com</div>
</div>${NOTE(TF("DELF A1, «Compréhension des écrits», упражнение 3. Ты работаешь в Канаде и читаешь объявления.","DELF A1, «Compréhension des écrits», exercise 3. You work in Canada and read these notices."))}`,
ex:[
{t:"mc", ctx:true, h:TF("Ответь на вопросы по объявлениям","Answer the questions about the notices"), w:[
"Week-end → ateliers cuisine; boulangerie ferme à 19 h 30; plats végans pendant les pauses-déjeuner; marché une fois par mois (premiers lundis); cantine à partir de 15 h.",
"Week-end → ateliers cuisine; the bakery closes at 19 h 30; vegan dishes at lunch breaks; the market once a month (first Mondays); the canteen from 15 h."], items:[
{q:"Que pouvez-vous faire le week-end ?", o:["Cuisiner en groupe.","Travailler au restaurant.","Découvrir des desserts."], a:0},
{q:"À quelle heure ferme la boulangerie ?", o:["À 19 h 30.","À 13 h.","À 20 h."], a:0},
{q:"Vous pouvez manger végan…", o:["au déjeuner.","au goûter.","au dîner."], a:0},
{q:"Que pouvez-vous faire une fois par mois ?", o:["Acheter des légumes.","Aller au restaurant.","Manger des croissants."], a:0},
{q:"La cantine francophone ouvre…", o:["à 15 h.","à 13 h.","à 14 h."], a:0}
]}
]}

]; }

(function(){
  const ru = CAHIER("ru"), en = CAHIER("en");
  ru.forEach(tp=>{ if (!WHY[tp.id]) WHY[tp.id] = tp.ex.map(e=>e.w || ["",""]); });
  TOPICS.push(...ru); TOPICS_EN.push(...en);
})();
