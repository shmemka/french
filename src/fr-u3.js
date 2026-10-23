/* =========================================================
   FRANÇAIS — Livre, Unité 3 « Qu’est-ce qu’on mange ? » (с. 45–58)
   Двуязычная сборка: FR_U3("ru") / FR_U3("en").
   У каждого упражнения поле w:[ru, en] — «почему так» (идёт в WHY).
   ========================================================= */
var FRL = "ru";
const TF = (ru, en) => FRL === "en" ? en : ru;
const PG = s => TF("с. ", "p. ") + s;
/* сравнение: по-русски показываем RU+EN, по-английски — только EN */
const CMP2 = (ruRU, enRU, enEN) => FRL === "en" ? CMP("", enEN) : CMP(ruRU, enRU);

function FR_U3(L){
  const keepHL = HL; FRL = L; HL = L;
  try { return FR_U3_PARTS(); } finally { HL = keepHL; }
}
function FR_U3_PARTS(){ return [

/* ---------- 1. Faire les courses ---------- */
{
id:"u3-courses", sec:"book", unit:"3", kind:"Communication",
title:"Faire les courses", ru:TF("В магазине: попросить, спросить цену, заплатить", "In a shop: asking for things, asking the price, paying"), page:PG("46–47, 49"),
theory:`
<p>${TF("В магазине французы говорят вежливо и коротко. Почти весь диалог — это пять-шесть готовых фраз.", "In shops the French are polite and brief. Almost the whole conversation is five or six set phrases.")}</p>
${TBL([TF("Кто говорит","Who says it"), "Français", TF("Значение","Meaning")],[
[TF("продавец","shopkeeper"), F("Bonjour ! C’est à qui ?"), TF("Здравствуйте! Чья очередь?","Hello! Who’s next?")],
[TF("покупатель","customer"), F("C’est à moi. Je voudrais un pain, s’il vous plaît."), TF("Моя. Я бы хотел(а) хлеб, пожалуйста.","Me. I’d like a loaf of bread, please.")],
[TF("продавец","shopkeeper"), F("Et avec ça ? / Ce sera tout ?"), TF("Что-нибудь ещё? / Это всё?","Anything else? / Will that be all?")],
[TF("покупатель","customer"), F("Oui, c’est tout. Ça coûte combien ?"), TF("Да, всё. Сколько это стоит?","Yes, that’s all. How much is it?")],
[TF("продавец","shopkeeper"), F("Ça fait 3,40 €. Vous payez comment ?"), TF("С вас 3,40 €. Как будете платить?","That’s €3.40. How are you paying?")],
[TF("покупатель","customer"), F("Par carte. / En espèces."), TF("Картой. / Наличными.","By card. / In cash.")]
])}
${RULE(TF("Je voudrais — главная фраза покупателя","Je voudrais — the customer’s key phrase"), `<p>${TF(`${F("Je voudrais…")} — «я бы хотел(а)», вежливая форма от ${F("vouloir")}. ${F("Je veux")} («я хочу») в магазине звучит грубо.`, `${F("Je voudrais…")} means «I would like…», the polite form of ${F("vouloir")}. ${F("Je veux")} («I want») sounds rude in a shop.`)}</p>`)}
<h3>${TF("Спросить и назвать цену","Asking and giving the price")}</h3>
${FXS(FX([TF("~вопрос","~question"),"!Combien coûte","la baguette ?"]), FX(["!Ça coûte combien ?","/","!Combien ça coûte ?"],TF("разговорные варианты","everyday variants")), FX(["Elle","!coûte","1,20 €."], TF("ответ: il / elle coûte…, ça coûte…, ça fait…","answer: il / elle coûte…, ça coûte…, ça fait…")))}
${WARN(TF(`В ценах — <b>запятая</b>, а знак € пишется <b>после</b> числа: ${F("16,90 €")} = ${F("seize euros quatre-vingt-dix")}. Слово «центы» обычно не говорят.`, `Prices use a <b>comma</b>, and € goes <b>after</b> the number: ${F("16,90 €")} = ${F("seize euros quatre-vingt-dix")}. People usually don’t say «cents».`))}
<h3>${TF("Два глагола из магазина","Two verbs you need in a shop")}</h3>
${CJS(
CJ("acheter", TF("покупать","to buy"), ["j’ach<b>è</b>te","tu ach<b>è</b>tes","il / elle / on ach<b>è</b>te","nous achetons","vous achetez","ils / elles ach<b>è</b>tent"]),
CJ("payer", TF("платить","to pay"), ["je pa<b>i</b>e / paye","tu pa<b>i</b>es / payes","il / elle / on pa<b>i</b>e / paye","nous payons","vous payez","ils / elles pa<b>i</b>ent / payent"])
)}
${RULE(TF("Логика «ботинка»","The «boot» pattern"), `<p>${TF(`Окончания — как у обычных глаголов на -er. Меняется только основа в формах je, tu, il, ils (там окончание не читается): ${F("achet- → achèt-")}, ${F("pay- → pai-")}. У ${F("nous")} и ${F("vous")} основа обычная: ${F("nous achetons, vous payez")}.`, `The endings are those of ordinary -er verbs. Only the stem changes in the je, tu, il, ils forms (where the ending is silent): ${F("achet- → achèt-")}, ${F("pay- → pai-")}. With ${F("nous")} and ${F("vous")} the stem is regular: ${F("nous achetons, vous payez")}.`)}</p>`)}
${CMP2(`«Я бы хотел» = ${F("je voudrais")}; «картой / наличными» = ${F("par carte / en espèces")} — запомни предлоги целиком, дословно они не переводятся.`, `${F("Je voudrais")} = <i>I would like</i>; ${F("Combien ça coûte ?")} = <i>How much is it?</i>; ${F("par carte / en espèces")} = <i>by card / in cash</i>.`, `${F("Je voudrais")} = <i>I would like</i>; ${F("Combien ça coûte ?")} = <i>How much is it?</i>; ${F("par carte / en espèces")} = <i>by card / in cash</i> — learn the prepositions as part of the phrase.`)}
${NOTE(TF(`Во Франции в маленьких магазинах сначала здороваются: ${F("Bonjour !")} — и только потом просят товар. Без «bonjour» начинать невежливо.`, `In small French shops you greet first: ${F("Bonjour !")} — and only then ask for something. Starting without «bonjour» is impolite.`))}
`,
ex:[
{t:"mc", h:TF("Что сказать в этой ситуации?","What do you say in this situation?"), w:[
"Покупатель вежливо просит: Je voudrais…; продавец спрашивает «Чья очередь?» — C’est à qui ?, «Это всё?» — Ce sera tout ?, «Как платите?» — Vous payez comment ?",
"The customer asks politely: Je voudrais…; the shopkeeper asks «Who’s next?» — C’est à qui ?, «Is that all?» — Ce sera tout ?, «How are you paying?» — Vous payez comment ?"], items:[
{q:TF("Ты покупатель. Попроси багет.","You’re the customer. Ask for a baguette."), o:["Je voudrais une baguette, s’il vous plaît.","Je veux une baguette.","C’est à qui, la baguette ?"], a:0, e:TF("Je veux — слишком резко.","Je veux sounds too blunt.")},
{q:TF("Ты продавец. Спроси, чья очередь.","You’re the shopkeeper. Ask who’s next."), o:["C’est à qui ?","C’est qui ?","Ça coûte combien ?"], a:0},
{q:TF("Ты продавец. Спроси, всё ли это.","You’re the shopkeeper. Ask if that’s everything."), o:["Ce sera tout ?","C’est tout le monde ?","Vous payez tout ?"], a:0},
{q:TF("Спроси цену сыра.","Ask the price of the cheese."), o:["Combien coûte le fromage ?","Combien de fromage ?","Le fromage, c’est à qui ?"], a:0, e:TF("Combien de… — «сколько штук», а не цена.","Combien de… asks «how many», not the price.")},
{q:"– Vous payez comment ? – …", o:["Par carte.","Avec carte.","En carte."], a:0},
{q:"– Vous payez comment ? – …", o:["En espèces.","Par espèces.","Aux espèces."], a:0}
]},
{t:"conj", h:TF("Проспрягай acheter и payer","Conjugate acheter and payer"), w:[
"acheter: è в je, tu, il, ils (achète, achètes, achète, achètent), но nous achetons, vous achetez. payer: je paie (или paye), nous payons, vous payez.",
"acheter: è in je, tu, il, ils (achète, achètes, achète, achètent) but nous achetons, vous achetez. payer: je paie (or paye), nous payons, vous payez."], items:[
{v:"acheter", p:P6j, f:["achète","achètes","achète","achetons","achetez","achètent"]},
{v:"payer", p:P6, f:["paie","paies","paie","payons","payez","paient"]}
]},
{t:"fill", h:TF("Поставь глагол в нужную форму","Put the verb in the right form"), w:[
"У acheter над e появляется гравис (è) там, где окончание немое: j’achète, ils achètent. Nous и vous — без значка.",
"acheter gets a grave accent (è) where the ending is silent: j’achète, ils achètent. Nous and vous have no accent."], items:[
{q:"J’___ un panier par semaine. (acheter)", a:["achète"]},
{q:"Nous ___ un panier complet. (acheter)", a:["achetons"], e:TF("Окончание -ons слышно → основа без è.","The -ons ending is heard → no è in the stem.")},
{q:"Vous ___ par carte ? (payer)", a:["payez"]},
{q:"Je ___ en espèces. (payer)", a:["paie","paye"]},
{q:"Ils ___ des fruits au marché. (acheter)", a:["achètent"]},
{q:"Tu ___ comment ? (payer)", a:["paies","payes"]}
]},
{t:"match", h:TF("Соедини реплики","Match the lines"), w:[
"Это стандартные пары «вопрос — ответ» в магазине: на «C’est à qui ?» отвечают «C’est à moi», на вопрос о цене — «Ça coûte…».",
"These are standard question–answer pairs in a shop: «C’est à qui ?» → «C’est à moi», a price question → «Ça coûte…»."], pairs:[
["C’est à qui ?","C’est à moi !"],["Ce sera tout ?","Oui, merci, c’est tout."],["Combien coûte le panier ?","Il coûte 16,90 €."],["Vous payez comment ?","Par carte bancaire."],["Je voudrais du riz.","Un paquet ? Voilà !"]]},
{t:"mc", h:TF("Сколько это стоит? Выбери, как читается цена","How much? Pick how the price is read"), w:[
"Цену читают: евро + центы без слова «центы»: 3,50 € = trois euros cinquante. Числа 70–99 — soixante-dix…, quatre-vingts…, quatre-vingt-dix…",
"A price is read as euros + cents without the word «cents»: 3,50 € = trois euros cinquante. Numbers 70–99: soixante-dix…, quatre-vingts…, quatre-vingt-dix…"], items:[
{q:"16,90 €", o:["seize euros quatre-vingt-dix","six euros quatre-vingt-dix","seize euros neuf"], a:0},
{q:"39,40 €", o:["trente-neuf euros quarante","trois euros quatre","trente-neuf euros quatorze"], a:0},
{q:"5,50 €", o:["cinq euros cinquante","cinquante euros cinq","cinq euros quinze"], a:0},
{q:"12,70 €", o:["douze euros soixante-dix","deux euros soixante-dix","douze euros sept"], a:0, e:"70 = soixante-dix."},
{q:"2,80 €", o:["deux euros quatre-vingts","deux euros huit","vingt euros quatre-vingts"], a:0, e:"80 = quatre-vingts."}
]},
{t:"order", h:TF("Собери фразу","Build the sentence"), w:[
"Вежливая просьба: Je voudrais + товар + s’il vous plaît. Вопрос о цене: Combien coûte + товар ?",
"A polite request: Je voudrais + item + s’il vous plaît. A price question: Combien coûte + item ?"], items:[
{s:"Je voudrais une bouteille d’huile d’olive, s’il vous plaît.", ru:TF("Я бы хотела бутылку оливкового масла, пожалуйста.","I’d like a bottle of olive oil, please.")},
{s:"Combien coûte le panier de légumes ?", ru:TF("Сколько стоит корзина овощей?","How much is the vegetable basket?")},
{s:"Vous payez par carte ou en espèces ?", ru:TF("Вы платите картой или наличными?","Are you paying by card or in cash?")}
]}
]},

/* ---------- 2. Singulier / pluriel ---------- */
{
id:"u3-pluriel", sec:"book", unit:"3", kind:"Grammaire",
title:"Le singulier et le pluriel des noms", ru:TF("Множественное число существительных","Plural of nouns"), page:PG("47, 50"),
theory:`
${RULE(TF("Основное правило","The basic rule"), `<p>${TF(`Во множественном числе к существительному обычно добавляют <b>-s</b>: ${F("un panier → des paniers")}, ${F("une bouteille → des bouteilles")}.`, `In the plural you usually add <b>-s</b> to the noun: ${F("un panier → des paniers")}, ${F("une bouteille → des bouteilles")}.`)}</p>`)}
${GRID(["", TF("ед. ч.","singular"), TF("мн. ч.","plural")],[[TF("м. р.","masc."),"m:un panier","p:des paniers"],[TF("ж. р.","fem."),"f:une bouteille","p:des bouteilles"]])}
${WARN(TF(`Это <b>-s не читается</b>! ${F("panier")} и ${F("paniers")} звучат одинаково. Число на слух слышно только по артиклю: ${F("le / la")} [lə / la] ↔ ${F("les")} [le], ${F("un / une")} ↔ ${F("des")} [de].`, `This <b>-s is silent</b>! ${F("panier")} and ${F("paniers")} sound the same. You only hear the number through the article: ${F("le / la")} [lə / la] ↔ ${F("les")} [le], ${F("un / une")} ↔ ${F("des")} [de].`))}
${SAME(["le panier","les paniers"], "[panje]", [["le","[lə]"],["les","[le]"]])}
<h3>${TF("Особые случаи","Special cases")}</h3>
${TBL([TF("Слово кончается на…","Word ends in…"), TF("Мн. ч.","Plural"), TF("Пример","Example")],[
["-s, -x, -z", TF("не меняется","no change"), F("un jus → des jus, le prix → les prix")],
["-eau", "-eaux", F("un gâteau → des gâteaux")],
["-al", "-aux", F("un journal → des journaux")]
])}
${NOTE(TF(`${F("un œuf")} [œf] → ${F("des œufs")} [ø]: во множественном числе f и s <b>не читаются</b>.`, `${F("un œuf")} [œf] → ${F("des œufs")} [ø]: in the plural both f and s are <b>silent</b>.`))}
<h3>${TF("После числа и количества","After a number or a quantity")}</h3>
${EX([["J’achète trois croissants.", TF("после числа — мн. ч.","after a number — plural")],["un kilo de pommes", TF("считаемое — мн. ч.: яблок много","countable — plural: many apples")],["une bouteille de jus", TF("несчитаемое — ед. ч.","uncountable — singular")],["deux paquets de riz", TF("мн. ч. получает упаковка, а не рис","the packet goes plural, not the rice")]])}
${CMP2(`Как в русском: «два пакета риса», «килограмм яблок». Только по-французски окончание пишется, но не слышно.`, `Like English <i>two packets of rice, a kilo of apples</i>.`, `Like English <i>two packets of rice, a kilo of apples</i> — but the French -s is written and not pronounced.`)}
`,
ex:[
{t:"sort", h:TF("Единственное или множественное?","Singular or plural?"), cats:[TF("единственное","singular"),TF("множественное","plural")], w:[
"Число видно по артиклю (un / une / le / la — ед., des / les — мн.) и по -s на конце слова.",
"You can see the number from the article (un / une / le / la — sing., des / les — pl.) and from the final -s."], items:[["une baguette",0],["des abricots",1],["les tomates",1],["la courgette",0],["des pâtes",1],["le panier",0],["un poulet",0],["les œufs",1],["des fraises",1],["le riz",0]]},
{t:"fill", h:TF("Поставь во множественное число","Put into the plural"), w:[
"Обычно +s. Слова на -s/-x/-z не меняются (jus, prix), на -eau → -eaux (gâteau → gâteaux).",
"Usually +s. Words in -s/-x/-z don’t change (jus, prix), -eau → -eaux (gâteau → gâteaux)."], items:[
{q:"J’achète un pain. → J’achète trois ___.", a:["pains"]},
{q:"Nous proposons une formule. → Nous proposons des ___.", a:["formules"]},
{q:"Je voudrais une bouteille d’huile. → Je voudrais deux ___ d’huile.", a:["bouteilles"]},
{q:"un jus de pomme → deux ___ de pomme", a:["jus"], e:TF("Кончается на -s → не меняется.","Ends in -s → no change.")},
{q:"un gâteau au chocolat → des ___ au chocolat", a:["gâteaux"], e:"-eau → -eaux."},
{q:"un œuf → six ___", a:["œufs","oeufs"]}
]},
{t:"mc", h:TF("Выбери правильную форму","Choose the right form"), w:[
"После un / une / le / la — ед. ч.; после des / les / числа больше одного — мн. ч.",
"After un / une / le / la — singular; after des / les / a number above one — plural."], items:[
{q:"J’aime les ___ de saison.", o:["fruits","fruit"], a:0},
{q:"Il y a une ___ ici ?", o:["boulangerie","boulangeries"], a:0},
{q:"Deux ___ de chèvre, s’il vous plaît.", o:["fromages","fromage"], a:0},
{q:"Le ___ est très sympa.", o:["poissonnier","poissonniers"], a:0},
{q:"J’achète mes ___ au marché.", o:["légumes","légume"], a:0},
{q:"Trois ___ de crème, s’il vous plaît.", o:["pots","pot"], a:0}
]},
{t:"mc", h:TF("Что ты слышишь?","What do you hear?"), w:[
"Конечное -s не читается, поэтому ед. и мн. ч. различаются только артиклем: le [lə] / les [le], un / des [de].",
"The final -s is silent, so singular and plural differ only in the article: le [lə] / les [le], un / des [de]."], items:[
{q:TF("Как звучит «paniers» по сравнению с «panier»?","How does «paniers» sound compared with «panier»?"), o:[TF("одинаково","the same"),TF("на конце слышно [s]","you hear [s] at the end")], a:0, keep:true},
{q:TF("Как на слух понять, что «les tomates» — множественное?","How do you hear that «les tomates» is plural?"), o:[TF("по артиклю les [le]","from the article les [le]"),TF("по звуку [s] в tomates","from an [s] sound in tomates")], a:0, keep:true},
{q:TF("des œufs читается…","des œufs is pronounced…"), o:["[dezø]","[dezœfs]","[dezœf]"], a:0, e:TF("Связывание des‿œufs [z], а f и s молчат.","Liaison des‿œufs [z]; f and s are silent.")}
]},
{t:"fill", h:TF("Переведи","Translate"), w:[
"После числа — мн. ч. с -s; после слова-количества (kilo, bouteille, paquet) — de без артикля.",
"After a number — plural with -s; after a quantity word (kilo, bouteille, paquet) — de with no article."], items:[
{q:TF("два килограмма помидоров","two kilos of tomatoes"), a:["deux kilos de tomates"], long:true},
{q:TF("три круассана","three croissants"), a:["trois croissants"], long:true},
{q:TF("шесть яиц","six eggs"), a:["six œufs","six oeufs"], long:true}
]}
]},

/* ---------- 3. Commerces + à / chez ---------- */
{
id:"u3-commerces", sec:"book", unit:"3", kind:TF("Grammaire + vocabulaire","Grammaire + vocabulaire"),
title:"Les commerces : à la boulangerie, chez le boulanger", ru:TF("Магазины, предлоги места à / chez и глагол aller","Shops, the place prepositions à / chez and the verb aller"), page:PG("48–50"),
theory:`
<h3>${TF("Магазин и продавец","The shop and the shopkeeper")}</h3>
${TBL([TF("Магазин (место)","Shop (place)"), TF("Продавец (человек)","Shopkeeper (person)"), TF("Что там купить","What you buy there")],[
[F("la boulangerie"), F("le boulanger / la boulangère"), F("le pain, la baguette, les croissants")],
[F("la boucherie"), F("le boucher / la bouchère"), F("la viande, le poulet")],
[F("la poissonnerie"), F("le poissonnier / la poissonnière"), F("le poisson")],
[F("la fromagerie"), F("le fromager / la fromagère"), F("le fromage")],
[F("l’épicerie"), F("l’épicier / l’épicière"), F("le riz, les pâtes, l’huile")],
[F("le marché"), "—", F("les fruits, les légumes")],
[F("le supermarché"), "—", TF("всё","everything")]
])}
${RULE(TF("Место → à, человек → chez","Place → à, person → chez"), `<p>${TF(`Про <b>место</b> говорят ${F("à")} (+ артикль): ${F("Je vais à la boulangerie.")}<br>Про <b>человека</b> — ${F("chez")}: ${F("Je vais chez le boulanger.")} Смысл тот же — «в булочную».`, `For a <b>place</b> use ${F("à")} (+ article): ${F("Je vais à la boulangerie.")}<br>For a <b>person</b> use ${F("chez")}: ${F("Je vais chez le boulanger.")} Same meaning — «to the bakery».`)}</p>`)}
${FLOW([[TF("После предлога — <b>место</b> (boulangerie, marché, épicerie)?","Is it followed by a <b>place</b> (boulangerie, marché, épicerie)?"), "à + le / la / l’ / les", "à la boucherie, au marché"]], [TF("После предлога — <b>человек</b> (boucher, fromagère, mes parents)","Followed by a <b>person</b> (boucher, fromagère, mes parents)"), "chez", "chez le boucher, chez moi"])}
<h3>${TF("à + артикль: слияния","à + article: contractions")}</h3>
${FXS(FX(["à","+","le","=","!au"],TF("au marché, au supermarché","au marché, au supermarché")), FX(["à","+","les","=","!aux"],TF("aux caisses","aux caisses")), FX(["à","+","la","=","à la"],TF("не сливаются","no contraction")), FX(["à","+","l’","=","à l’"],TF("перед гласной","before a vowel")))}
${WARN(TF(`✗ ${F("à le marché")}, ✗ ${F("à les caisses")} — так нельзя, только ${F("au")} и ${F("aux")}. А ${F("chez")} с артиклем <b>не сливается</b>: ${F("chez le boucher")}.`, `✗ ${F("à le marché")}, ✗ ${F("à les caisses")} — impossible, only ${F("au")} and ${F("aux")}. But ${F("chez")} <b>never contracts</b>: ${F("chez le boucher")}.`))}
<h3>${TF("Глагол aller — идти, ехать","The verb aller — to go")}</h3>
${CJS(CJ("aller", TF("идти, ехать","to go"), ["je vais","tu vas","il / elle / on va","nous allons","vous allez","ils / elles vont"]))}
${NOTE(TF(`${F("aller")} — неправильный глагол, хотя кончается на -er. Его формы просто учат: ${F("vais, vas, va, allons, allez, vont")}.`, `${F("aller")} is irregular even though it ends in -er. Just learn the forms: ${F("vais, vas, va, allons, allez, vont")}.`))}
${CMP2(`${F("chez")} = «у кого-то / к кому-то»: ${F("chez le boucher")} — «к мяснику», ${F("chez moi")} — «у меня дома».`, `${F("chez le boulanger")} = <i>at the baker’s</i>, ${F("chez moi")} = <i>at my place</i>.`, `${F("chez le boulanger")} = <i>at the baker’s</i>, ${F("chez moi")} = <i>at my place</i> — chez is always about a person.`)}
`,
ex:[
{t:"mc", h:TF("à или chez?","à or chez?"), w:[
"Место (boucherie, marché, épicerie) — à + артикль. Человек (boucher, fromagère) — chez.",
"A place (boucherie, marché, épicerie) — à + article. A person (boucher, fromagère) — chez."], items:[
{q:"Pour le poisson, je vais ___ le poissonnier.", o:["chez","à"], a:0, e:TF("poissonnier — человек.","poissonnier is a person.")},
{q:"On achète le pain ___ boulangerie.", o:["à la","chez la"], a:0, e:TF("boulangerie — место.","boulangerie is a place.")},
{q:"Le week-end, j’aime aller ___ marché.", o:["au","à le","chez le"], a:0},
{q:"Pour le fromage, je vais ___ fromagère.", o:["chez la","à la"], a:0},
{q:"Je paie ___ caisses automatiques.", o:["aux","à les","chez les"], a:0},
{q:"Il y a beaucoup de monde ___ épicier.", o:["chez l’","à l’"], a:0}
]},
{t:"fill", h:TF("Вставь à la, au, à l’, aux или chez","Fill in à la, au, à l’, aux or chez"), w:[
"à + le = au, à + les = aux, à la и à l’ не сливаются; chez — перед человеком.",
"à + le = au, à + les = aux, à la and à l’ stay as they are; chez goes before a person."], items:[
{q:"Pour acheter le poisson, je vais ___ le poissonnier.", a:["chez"]},
{q:"Les Français aiment aller ___ boulangerie.", a:["à la"]},
{q:"Tu vas ___ marché pour acheter les produits frais ?", a:["au"]},
{q:"Pourquoi tu ne vas pas ___ caisses automatiques ?", a:["aux"]},
{q:"Je vais ___ épicerie demain.", a:["à l’","à l'"]},
{q:"Le dimanche, nous allons ___ le boulanger.", a:["chez"]}
]},
{t:"conj", h:TF("Проспрягай aller","Conjugate aller"), w:[
"aller неправильный: je vais, tu vas, il va, nous allons, vous allez, ils vont.",
"aller is irregular: je vais, tu vas, il va, nous allons, vous allez, ils vont."], items:[
{v:"aller", p:P6, f:["vais","vas","va","allons","allez","vont"]}
]},
{t:"match", h:TF("Магазин ↔ продавец","Shop ↔ shopkeeper"), w:[
"Продавец образуется от названия магазина: boucherie → boucher, poissonnerie → poissonnier, fromagerie → fromager, épicerie → épicier.",
"The shopkeeper’s name comes from the shop: boucherie → boucher, poissonnerie → poissonnier, fromagerie → fromager, épicerie → épicier."], pairs:[
["la boulangerie","la boulangère"],["la boucherie","le boucher"],["la poissonnerie","le poissonnier"],["la fromagerie","le fromager"],["l’épicerie","l’épicier"]]},
{t:"sort", h:TF("Где это купить?","Where do you buy it?"), cats:["la boulangerie","la boucherie","la poissonnerie","la fromagerie"], w:[
"Хлеб и выпечка — boulangerie, мясо и курица — boucherie, рыба — poissonnerie, сыр — fromagerie.",
"Bread and pastries — boulangerie, meat and chicken — boucherie, fish — poissonnerie, cheese — fromagerie."], items:[["la baguette",0],["les croissants",0],["le poulet",1],["la viande",1],["le poisson",2],["le thon",2],["le fromage de chèvre",3],["le camembert",3]]},
{t:"fill", h:TF("Поставь aller в нужную форму","Put aller in the right form"), w:[
"aller: je vais, tu vas, il va, nous allons, vous allez, ils vont.",
"aller: je vais, tu vas, il va, nous allons, vous allez, ils vont."], items:[
{q:"Je ___ à la boulangerie et j’achète le pain.", a:["vais"]},
{q:"Vous ___ où pour faire vos courses ?", a:["allez"]},
{q:"Les Français ___ au marché le week-end.", a:["vont"]},
{q:"Nous ___ chez le fromager.", a:["allons"]},
{q:"Tu ___ au supermarché ?", a:["vas"]}
]}
]},

/* ---------- 4. Les aliments et les quantités ---------- */
{
id:"u3-aliments", sec:"book", unit:"3", kind:"Vocabulaire",
title:"Les aliments et les quantités", ru:TF("Продукты, упаковки и способы оплаты","Food, packaging and ways to pay"), page:PG("46, 49"),
theory:`
<h3>${TF("Продукты по группам","Food by group")}</h3>
${TBL([TF("Группа","Group"), TF("Слова","Words")],[
[F("les fruits"), F("l’abricot (m.), la cerise, la fraise, la pêche, la pomme, la tomate")],
[F("les légumes"), F("la courgette, les haricots verts, le poivron, la pomme de terre, la salade")],
[F("les produits laitiers"), F("le beurre, la crème, le fromage (de chèvre), le lait, le yaourt")],
[F("les céréales"), F("la farine, les pâtes, le riz")],
[F("le pain, les viennoiseries"), F("la baguette, le croissant")],
[TF("белок","protein"), F("la viande, le poulet, le poisson, l’œuf (m.)")],
[TF("ещё","also"), F("l’huile d’olive (f.), le jus de pomme, le sel, le poivre, le sucre")]
])}
${NOTE(TF(`${F("la tomate")} во французской классификации — фрукт, но в салате её все называют овощем. ${F("une pomme")} — яблоко, ${F("une pomme de terre")} — «земляное яблоко», картофель.`, `In French classification ${F("la tomate")} is a fruit, though everyone calls it a vegetable in a salad. ${F("une pomme")} is an apple, ${F("une pomme de terre")} — an «earth apple», a potato.`))}
<h3>${TF("Количество и упаковка","Quantities and packaging")}</h3>
${TBL([TF("Упаковка","Packaging"), TF("Пример","Example")],[
[F("une boîte de…"), F("une boîte de thon")],[F("une bouteille de…"), F("une bouteille d’huile, de jus")],[F("un kilo de…"), F("un kilo de pommes")],[F("un paquet de…"), F("un paquet de riz, de pâtes")],[F("un pot de…"), F("un pot de crème, de yaourt")],[F("un panier de…"), F("un panier de légumes")]
])}
${RULE(TF("После количества — только de","After a quantity — just de"), `<p>${TF(`После слова-количества идёт <b>de</b> (d’ перед гласной) <b>без артикля</b>: ${F("un kilo de pommes")}, ${F("une bouteille d’eau")}. ✗ ${F("un kilo des pommes")}.`, `After a quantity word comes <b>de</b> (d’ before a vowel) <b>with no article</b>: ${F("un kilo de pommes")}, ${F("une bouteille d’eau")}. ✗ ${F("un kilo des pommes")}.`)}</p>`)}
${FX(["un paquet","+","!de","+","riz"], TF("без артикля после de","no article after de"))}
<h3>${TF("Как платить","How to pay")}</h3>
${EX([["par carte (bancaire / bleue)", TF("картой","by card")],["en espèces", TF("наличными","in cash")]])}
${CMP2(`Как в русском родительный падеж: «пачка риса», «бутылка масла» — по-французски всё это делает одно слово ${F("de")}.`, `Like English <i>a packet of rice, a bottle of oil</i> — ${F("de")} = <i>of</i>.`, `Like English <i>a packet of rice, a bottle of oil</i>: ${F("de")} = <i>of</i>, with no article after it.`)}
`,
ex:[
{t:"sort", h:TF("Фрукты, овощи или молочное?","Fruit, vegetables or dairy?"), cats:[TF("фрукты","fruit"),TF("овощи","vegetables"),TF("молочное","dairy")], w:[
"fraise, pêche, cerise, abricot — фрукты; courgette, poivron, haricots verts, pomme de terre — овощи; beurre, yaourt, crème, fromage — молочные продукты.",
"fraise, pêche, cerise, abricot — fruit; courgette, poivron, haricots verts, pomme de terre — vegetables; beurre, yaourt, crème, fromage — dairy."], items:[["les fraises",0],["les pêches",0],["les cerises",0],["l’abricot",0],["la courgette",1],["le poivron",1],["les haricots verts",1],["la pomme de terre",1],["le beurre",2],["le yaourt",2],["la crème",2],["le fromage",2]]},
{t:"mc", h:TF("Какая упаковка подходит?","Which packaging fits?"), w:[
"boîte — консервы (thon), bouteille — жидкость (huile, jus, eau), paquet — сухое (riz, pâtes, biscuits), pot — густое (crème, yaourt), kilo — на вес.",
"boîte — a tin (thon), bouteille — liquids (huile, jus, eau), paquet — dry goods (riz, pâtes, biscuits), pot — thick things (crème, yaourt), kilo — by weight."], items:[
{q:"une ___ de thon", o:["boîte","bouteille","pot"], a:0},
{q:"une ___ d’huile d’olive", o:["bouteille","boîte","paquet"], a:0},
{q:"un ___ de riz", o:["paquet","pot","verre"], a:0},
{q:"un ___ de crème", o:["pot","paquet","bouteille"], a:0},
{q:"deux ___ de pommes de terre", o:["kilos","pots","boîtes"], a:0},
{q:"un paquet de ___", o:["biscuits","jus de tomate","crème"], a:0}
]},
{t:"fill", h:TF("de или d’?","de or d’?"), w:[
"После количества — de без артикля; перед гласной или немой h — d’.",
"After a quantity — de with no article; before a vowel or silent h — d’."], items:[
{q:"un kilo ___ pommes", a:["de"]},
{q:"une bouteille ___ eau", a:["d’","d'"]},
{q:"un paquet ___ pâtes", a:["de"]},
{q:"une bouteille ___ huile d’olive", a:["d’","d'"]},
{q:"un pot ___ yaourt", a:["de"], e:TF("yaourt начинается с y — это согласный звук [j], поэтому de не сокращается.","yaourt starts with y, a consonant sound [j], so de doesn’t elide.")}
]},
{t:"mc", h:TF("Как заплатить?","How to pay?"), w:[
"Устойчивые сочетания: par carte (bancaire), en espèces.",
"Fixed phrases: par carte (bancaire), en espèces."], items:[
{q:"Je paie ___ carte bancaire.", o:["par","en","à"], a:0},
{q:"Je paie ___ espèces.", o:["en","par","aux"], a:0},
{q:TF("Минимум для оплаты картой — 15 €, у тебя покупок на 11 €. Как платишь?","The card minimum is €15 and your shopping comes to €11. How do you pay?"), o:["En espèces.","Par carte."], a:0, keep:true}
]},
{t:"cards", h:TF("Карточки: продукты","Flashcards: food"), w:[
"Учи слово вместе с артиклем: по нему видно род (le poivron, la courgette).",
"Learn each word with its article: it shows the gender (le poivron, la courgette)."], items:[
["la fraise",TF("клубника","strawberry")],["la pêche",TF("персик","peach")],["la cerise",TF("вишня, черешня","cherry")],["la courgette",TF("кабачок","courgette")],["le poivron",TF("сладкий перец","pepper")],["la pomme de terre",TF("картофель","potato")],["les haricots verts",TF("стручковая фасоль","green beans")],["le beurre",TF("сливочное масло","butter")],["la farine",TF("мука","flour")],["l’huile d’olive",TF("оливковое масло","olive oil")],["le poulet",TF("курица","chicken")],["l’œuf",TF("яйцо","egg")]]}
]},

/* ---------- 5. Partitifs ---------- */
{
id:"u3-partitifs", sec:"book", unit:"3", kind:"Grammaire",
title:"La quantité non définie : du, de la, des", ru:TF("Частичные артикли, beaucoup de / un peu de, pas de и глагол faire","Partitive articles, beaucoup de / un peu de, pas de and the verb faire"), page:PG("53, 56"),
theory:`
<p>${TF(`Когда нельзя сосчитать (сколько «рыбы», «муки», «масла»?) или количество неизвестно, ставят <b>частичный артикль</b> — «немного, какое-то количество».`, `When you can’t count something (how much «fish», «flour», «oil»?) or the amount is unknown, use a <b>partitive article</b> — «some, a certain amount».`)}</p>
${GRID(["", TF("форма","form"), TF("пример","example")],[
[TF("м. р.","masc."),"m:du  (de + le)","m:du poisson"],
[TF("ж. р.","fem."),"f:de la","f:de la farine"],
[TF("перед гласной","before a vowel"),"de l’","de l’huile, de l’eau"],
[TF("мн. ч.","plural"),"p:des  (de + les)","p:des pâtes"]
])}
${RULE(TF("aimer или manger?","aimer or manger?"), `<p>${TF(`Говорим о вкусах (${F("aimer, adorer, détester, préférer")}) — <b>le / la / les</b>, «вообще»: ${F("J’aime le poisson.")}<br>Говорим, что едим, покупаем, берём (${F("manger, acheter, prendre, il y a, je voudrais")}) — <b>du / de la / des</b>, «немного»: ${F("Je mange du poisson.")}`, `Talking about tastes (${F("aimer, adorer, détester, préférer")}) — <b>le / la / les</b>, «in general»: ${F("J’aime le poisson.")}<br>Talking about eating, buying, taking (${F("manger, acheter, prendre, il y a, je voudrais")}) — <b>du / de la / des</b>, «some»: ${F("Je mange du poisson.")}`)}</p>`)}
${VS({h:"le / la / les", big:F("J’adore le chocolat."), sub:TF("вообще, как вид","in general")},{h:"du / de la / des", big:F("Je mange du chocolat."), sub:TF("какое-то количество","some")})}
<h3>${TF("Сколько? — beaucoup de, un peu de, pas de","How much? — beaucoup de, un peu de, pas de")}</h3>
${FXS(FX(["beaucoup","+","!de","+","légumes"]), FX(["un peu","+","!de","+","sel"]), FX(["ne … pas","+","!de","+","viande"], TF("в отрицании du / de la / des → de","in the negative du / de la / des → de")))}
${EX([["Ils mangent un peu de légumes.", TF("немного овощей","a few vegetables")],["Une quiche avec beaucoup de poivre.", TF("много перца","lots of pepper")],["On n’a pas de tomates.", TF("des → de","des → de")],["Il n’y a pas d’huile d’olive.", TF("de l’ → d’","de l’ → d’")]])}
${WARN(TF(`После ${F("beaucoup, un peu, pas")} — только ${F("de / d’")}: ✗ ${F("beaucoup des légumes")}, ✗ ${F("pas du sel")}. Но с ${F("être")} артикль остаётся: ${F("Ce n’est pas du poisson, c’est du poulet.")}`, `After ${F("beaucoup, un peu, pas")} — only ${F("de / d’")}: ✗ ${F("beaucoup des légumes")}, ✗ ${F("pas du sel")}. With ${F("être")} the article stays: ${F("Ce n’est pas du poisson, c’est du poulet.")}`))}
<h3>${TF("Глагол faire и вопросы на кухне","The verb faire and kitchen questions")}</h3>
${CJS(CJ("faire", TF("делать","to do, to make"), ["je fais","tu fais","il / elle / on fait","nous faisons","vous faites","ils / elles font"]))}
${EX([["Qu’est-ce qu’on mange ? / On mange quoi ?", TF("Что едим? — открытый вопрос","What are we eating? — open question")],["Est-ce qu’on a des tomates ? – Oui. / Non.", TF("закрытый вопрос: ответ да / нет","closed question: yes / no answer")],["On fait les courses ? On fait la cuisine ?", TF("faire les courses — ходить за покупками, faire la cuisine — готовить","faire les courses — do the shopping, faire la cuisine — cook")]])}
${NOTE(TF(`${F("nous faisons")} читается [fəzɔ̃] — как «фёзон», а ${F("vous faites")} без -ez: это одно из трёх исключений (${F("vous êtes, vous faites, vous dites")}).`, `${F("nous faisons")} is pronounced [fəzɔ̃], and ${F("vous faites")} has no -ez: it’s one of three exceptions (${F("vous êtes, vous faites, vous dites")}).`))}
${CMP2(`В русском артикля нет: «я ем рыбу» → ${F("je mange du poisson")}, «я люблю рыбу» → ${F("j’aime le poisson")}. Подставь мысленно «немного» — если подходит, нужен du / de la.`, `Close to <i>some</i>: <i>I eat (some) fish</i> → ${F("je mange du poisson")}. But in French you can’t leave it out.`, `Close to <i>some</i>: <i>I eat (some) fish</i> → ${F("je mange du poisson")}. But in French you can’t leave it out, and <i>I like fish</i> → ${F("j’aime le poisson")}.`)}
`,
ex:[
{t:"mc", h:TF("du, de la, de l’ или des?","du, de la, de l’ or des?"), w:[
"Смотри на род и число: м. р. — du, ж. р. — de la, перед гласной — de l’, мн. ч. — des.",
"Look at gender and number: masc. — du, fem. — de la, before a vowel — de l’, plural — des."], items:[
{q:"J’aime manger ___ pâtes.", o:["des","du","de la"], a:0, e:TF("pâtes — мн. ч.","pâtes is plural.")},
{q:"Je voudrais ___ eau, s’il vous plaît.", o:["de l’","de la","du"], a:0},
{q:"Tu manges ___ viande ?", o:["de la","du","des"], a:0},
{q:"On mange ___ poisson aujourd’hui ?", o:["du","de la","des"], a:0},
{q:"Il y a ___ farine ?", o:["de la","du","de l’"], a:0},
{q:"Je voudrais ___ café.", o:["du","de la","des"], a:0}
]},
{t:"mc", h:TF("Вкус или количество?","Taste or amount?"), w:[
"После aimer / adorer / détester — le, la, les (вообще). После manger / acheter / il y a / je voudrais — du, de la, des (немного).",
"After aimer / adorer / détester — le, la, les (in general). After manger / acheter / il y a / je voudrais — du, de la, des (some)."], items:[
{q:"Mes enfants détestent ___ poisson.", o:["le","du"], a:0},
{q:"Au restaurant, ils mangent ___ poisson.", o:["du","le"], a:0},
{q:"J’adore ___ fromage !", o:["le","du"], a:0},
{q:"J’achète ___ fromage au marché.", o:["du","le"], a:0},
{q:"Tu aimes ___ glace ?", o:["la","de la"], a:0},
{q:"Il y a ___ glace à la maison ?", o:["de la","la"], a:0}
]},
{t:"fill", h:TF("Вставь du, de la, de l’, des, de или d’","Fill in du, de la, de l’, des, de or d’"), w:[
"После beaucoup / un peu / pas — только de (d’ перед гласной). В остальных случаях — частичный артикль по роду.",
"After beaucoup / un peu / pas — only de (d’ before a vowel). Otherwise — the partitive that matches the gender."], items:[
{q:"Isa adore le poisson, elle mange ___ poisson à la maison.", a:["du"]},
{q:"Jean-Pierre mange beaucoup ___ pâtes.", a:["de"]},
{q:"Je suis végétarienne, je ne mange pas ___ viande.", a:["de"]},
{q:"Mes enfants mangent ___ glace après le repas.", a:["de la"]},
{q:"Alexandra achète ___ huile bio.", a:["de l’","de l'"]},
{q:"Dans ma quiche, il y a un peu ___ sel.", a:["de"]},
{q:"On n’a pas ___ œufs.", a:["d’","d'"]}
]},
{t:"fill", h:TF("Сделай отрицание","Make it negative"), w:[
"В отрицании du / de la / de l’ / des → de (d’): Je mange de la viande → Je ne mange pas de viande.",
"In the negative du / de la / de l’ / des → de (d’): Je mange de la viande → Je ne mange pas de viande."], items:[
{q:"On a des tomates. →", a:["On n’a pas de tomates","On n'a pas de tomates"], long:true},
{q:"Il y a de l’huile d’olive. →", a:["Il n’y a pas d’huile d’olive","Il n'y a pas d'huile d'olive"], long:true},
{q:"Je mange de la viande. →", a:["Je ne mange pas de viande"], long:true},
{q:"Nous achetons du pain. →", a:["Nous n’achetons pas de pain","Nous n'achetons pas de pain"], long:true}
]},
{t:"conj", h:TF("Проспрягай faire","Conjugate faire"), w:[
"faire: je fais, tu fais, il fait, nous faisons, vous faites, ils font. Запомни vous faites (не faisez) и ils font.",
"faire: je fais, tu fais, il fait, nous faisons, vous faites, ils font. Remember vous faites (not faisez) and ils font."], items:[
{v:"faire", p:P6, f:["fais","fais","fait","faisons","faites","font"]}
]},
{t:"fill", h:TF("faire или manger: поставь в нужную форму","faire or manger: put in the right form"), w:[
"manger: nous mangeons (e после g, чтобы g осталось мягким). faire: nous faisons, ils font.",
"manger: nous mangeons (e after g keeps the g soft). faire: nous faisons, ils font."], items:[
{q:"Vous faites les courses au marché. → Nous ___ les courses au marché.", a:["faisons"]},
{q:"Tu manges avec nous ? → Vous ___ avec nous ?", a:["mangez"]},
{q:"Je ne mange pas le soir. → Nous ne ___ pas le soir.", a:["mangeons"], e:TF("e сохраняет мягкое g [ʒ].","The e keeps the g soft [ʒ].")},
{q:"Il fait les courses chez l’épicier. → Ils ___ les courses chez l’épicier.", a:["font"]},
{q:"Elle ne mange pas au restaurant. → Elles ne ___ pas au restaurant.", a:["mangent"]}
]}
]},

/* ---------- 6. Au restaurant ---------- */
{
id:"u3-restaurant", sec:"book", unit:"3", kind:TF("Communication + vocabulaire","Communication + vocabulaire"),
title:"Au restaurant", ru:TF("Меню, заказ, оценка блюд и посуда","The menu, ordering, giving your opinion and tableware"), page:PG("52, 54–55"),
theory:`
<h3>${TF("Что есть в меню","What’s on the menu")}</h3>
${TBL([TF("Часть","Part"), TF("Примеры","Examples")],[
[F("l’entrée (f.)"), F("la salade niçoise, la soupe de légumes, les œufs cocotte")],
[F("le plat"), F("la blanquette de veau, le steak-frites, l’omelette, le magret de canard, la quiche")],
[F("le dessert"), F("la glace, la mousse au chocolat, le riz au lait, la tarte aux pommes")],
[F("les boissons"), F("l’eau, le jus de fruits, le soda, le café, le café crème, le thé")]
])}
${NOTE(TF(`${F("l’entrée")} — <b>закуска</b>, а не основное блюдо (как в американском английском). ${F("le plat du jour")} — блюдо дня, ${F("la formule")} — комплекс (например, entrée + plat). Графин воды ${F("une carafe d’eau")} во Франции бесплатный.`, `${F("l’entrée")} is the <b>starter</b>, not the main course (unlike American English). ${F("le plat du jour")} is the dish of the day, ${F("la formule")} is a set menu (e.g. entrée + plat). A ${F("carafe d’eau")} is free in France.`))}
<h3>${TF("Заказать","Ordering")}</h3>
${EX([["Je voudrais de la blanquette de veau.", TF("Я бы хотел бланкет из телятины.","I’d like the veal blanquette.")],["Pour moi, un croque-monsieur végétarien.", TF("Мне — вегетарианский крок-месье.","For me, a vegetarian croque-monsieur.")],["Une carafe d’eau, s’il vous plaît !", TF("Графин воды, пожалуйста!","A jug of water, please!")],["L’addition, s’il vous plaît !", TF("Счёт, пожалуйста!","The bill, please!")]])}
<h3>${TF("Оценить блюдо","Giving your opinion")}</h3>
${SCALE([["C’est délicieux !", TF("очень вкусно","delicious")],["C’est bon.", TF("вкусно","good")],["C’est pas mal.", TF("неплохо","not bad")],["Ce n’est pas bon.", TF("невкусно","not good")],["C’est mauvais. / Ça n’a pas de goût.", TF("плохо / безвкусно","bad / tasteless")]], [TF("лучше","better"), TF("хуже","worse")])}
${WARN(TF(`${F("C’est pas mal")} — разговорная форма без ${F("ne")}, и это <b>похвала</b>: «неплохо, вполне хорошо».`, `${F("C’est pas mal")} is the spoken form without ${F("ne")}, and it’s <b>praise</b>: «not bad, pretty good».`))}
<h3>${TF("Посуда","Tableware")}</h3>
${TBL(["Français", TF("Значение","Meaning")],[[F("l’assiette (f.)"), TF("тарелка","plate")],[F("le verre"), TF("стакан, бокал","glass")],[F("la carafe"), TF("графин","jug, carafe")],[F("le couteau"), TF("нож","knife")],[F("la fourchette"), TF("вилка","fork")],[F("la cuillère"), TF("ложка","spoon")]])}
<h3>${TF("manger","manger")}</h3>
${CJS(CJ("manger", TF("есть, кушать","to eat"), ["je mange","tu manges","il / elle / on mange","nous mang<b>e</b>ons","vous mangez","ils / elles mangent"]))}
${CMP2(`${F("nous mangeons")}: e нужна, чтобы g читалось мягко [ʒ], как в ${F("manger")}. Без неё было бы [g].`, `Same idea as in English <i>courageous</i>: the e keeps the g soft.`, `${F("nous mangeons")}: the e keeps the g soft [ʒ]; without it you’d read a hard [g].`)}
`,
ex:[
{t:"sort", h:TF("Закуска, блюдо, десерт или напиток?","Starter, main, dessert or drink?"), cats:[F("entrée"),F("plat"),F("dessert"),F("boisson")], w:[
"Закуски — салаты, суп; основные блюда — мясо, рыба, омлет, киш; десерты — сладкое; напитки — вода, соки, кофе, чай.",
"Starters — salads, soup; mains — meat, fish, omelette, quiche; desserts — sweet things; drinks — water, juice, coffee, tea."], items:[["la soupe de légumes",0],["la salade niçoise",0],["le steak-frites",1],["la blanquette de veau",1],["le magret de canard",1],["la mousse au chocolat",2],["le riz au lait",2],["la tarte aux pommes",2],["le jus de fruits",3],["le café crème",3],["l’eau",3]]},
{t:"fill", h:TF("Вставь слово: plat du jour, poivre, café crème, addition, entrée","Fill in: plat du jour, poivre, café crème, addition, entrée"), w:[
"addition — счёт, entrée — закуска, plat du jour — блюдо дня, café crème — кофе со сливками, poivre — перец.",
"addition — the bill, entrée — starter, plat du jour — dish of the day, café crème — coffee with cream, poivre — pepper."], items:[
{q:"Aujourd’hui, quel est le ___ ?", a:["plat du jour"]},
{q:"– Une formule ___ / plat ou plat / dessert ? – Plat / dessert pour moi.", a:["entrée"]},
{q:"Du sel et du ___, s’il vous plaît.", a:["poivre"]},
{q:"– Un café ? – Oui, un ___, s’il vous plaît.", a:["café crème"]},
{q:"– Un dessert, un café ? – Non, merci. L’___, s’il vous plaît.", a:["addition"]}
]},
{t:"mc", h:TF("Как оценить?","How would you rate it?"), w:[
"Шкала: délicieux > bon > pas mal > pas bon > mauvais / ça n’a pas de goût. «C’est pas mal» — это похвала.",
"The scale: délicieux > bon > pas mal > pas bon > mauvais / ça n’a pas de goût. «C’est pas mal» is praise."], items:[
{q:TF("Тебе очень понравилось.","You loved it."), o:["C’est délicieux !","C’est pas mal.","Ça n’a pas de goût."], a:0},
{q:TF("Блюдо безвкусное.","The dish is bland."), o:["Ça n’a pas de goût.","C’est bon.","C’est pas mal."], a:0},
{q:TF("«C’est pas mal» значит…","«C’est pas mal» means…"), o:[TF("неплохо, вполне хорошо","not bad, pretty good"),TF("плохо","bad"),TF("ужасно","awful")], a:0, keep:true},
{q:TF("Противоположность «C’est bon»","The opposite of «C’est bon»"), o:["Ce n’est pas bon.","C’est délicieux.","C’est pas mal."], a:0}
]},
{t:"match", h:TF("Посуда: чем это делают?","Tableware: what do you use?"), w:[
"Ножом режут (couteau), вилкой едят (fourchette), ложкой — суп и десерт (cuillère), из стакана пьют (verre), в графине — вода (carafe).",
"You cut with a couteau, eat with a fourchette, use a cuillère for soup and dessert, drink from a verre, and water comes in a carafe."], pairs:[
["le couteau",TF("резать стейк","cut the steak")],["la cuillère",TF("есть суп, мусс","eat soup, mousse")],["le verre",TF("пить воду","drink water")],["l’assiette",TF("положить блюдо","put the dish on")],["la carafe",TF("вода на стол","water for the table")]]},
{t:"mc", h:TF("Что сказать официанту?","What do you say to the waiter?"), w:[
"Заказ: Je voudrais… / Pour moi, … Счёт: L’addition, s’il vous plaît. Вода: Une carafe d’eau, s’il vous plaît.",
"Ordering: Je voudrais… / Pour moi, … The bill: L’addition, s’il vous plaît. Water: Une carafe d’eau, s’il vous plaît."], items:[
{q:TF("Ты хочешь заплатить.","You want to pay."), o:["L’addition, s’il vous plaît.","La carte, s’il vous plaît.","Le menu, s’il vous plaît."], a:0},
{q:TF("Ты хочешь бесплатной воды.","You want free water."), o:["Une carafe d’eau, s’il vous plaît.","Une bouteille d’eau, s’il vous plaît.","De l’eau gazeuse."], a:0},
{q:TF("Ты заказываешь омлет.","You order the omelette."), o:["Pour moi, l’omelette au fromage.","Je mange l’omelette ?","C’est à qui, l’omelette ?"], a:0},
{q:TF("Ты хочешь посмотреть меню.","You want to see the menu."), o:["La carte, s’il vous plaît.","L’addition, s’il vous plaît.","Le plat, s’il vous plaît."], a:0}
]},
{t:"conj", h:TF("Проспрягай manger","Conjugate manger"), w:[
"manger — обычный глагол на -er, но nous mangeons с e, чтобы g осталось мягким.",
"manger is a regular -er verb, but nous mangeons keeps an e so the g stays soft."], items:[
{v:"manger", p:P6, f:["mange","manges","mange","mangeons","mangez","mangent"]}
]}
]},

/* ---------- 7. Verbes en -ir ---------- */
{
id:"u3-verbes-ir", sec:"book", unit:"3", kind:"Grammaire",
title:"Les verbes en -ir (2e groupe) : choisir, finir", ru:TF("Глаголы второй группы в настоящем времени","Second-group verbs in the present"), page:PG("54, 56"),
theory:`
<p>${TF(`Вторая группа — глаголы на <b>-ir</b>, у которых во множественном числе появляется <b>-iss-</b>. Главные в юните: ${F("choisir")} (выбирать) и ${F("finir")} (заканчивать).`, `The second group is <b>-ir</b> verbs that add <b>-iss-</b> in the plural. The key ones in this unit: ${F("choisir")} (to choose) and ${F("finir")} (to finish).`)}</p>
${FX(["chois|"+TF("основа","stem"),"+","!is · is · it|"+TF("ед. ч.","sing."),"·","!issons · issez · issent|"+TF("мн. ч.","pl.")], TF("отбрасываем -ir, добавляем окончания","drop -ir, add the endings"))}
${CJS(
CJ("choisir", TF("выбирать","to choose"), ["je chois<b>is</b>","tu chois<b>is</b>","il / elle / on chois<b>it</b>","nous chois<b>issons</b>","vous chois<b>issez</b>","ils / elles chois<b>issent</b>"]),
CJ("finir", TF("заканчивать","to finish"), ["je fin<b>is</b>","tu fin<b>is</b>","il / elle / on fin<b>it</b>","nous fin<b>issons</b>","vous fin<b>issez</b>","ils / elles fin<b>issent</b>"])
)}
${SAME(["je choisis","tu choisis","il choisit"], "[ʃwazi]", [["nous choisissons","[ʃwazisɔ̃]"],["ils choisissent","[ʃwazis]"]])}
${RULE(TF("Как не перепутать с -er","How not to mix them up with -er"), `<p>${TF(`У je и tu здесь одинаковое окончание <b>-is</b> (у глаголов на -er — ${F("je parle / tu parles")}). Ловушка — ${F("il choisit")} с <b>-t</b> на конце, его не слышно.`, `Here je and tu share the ending <b>-is</b> (with -er verbs it’s ${F("je parle / tu parles")}). The trap is ${F("il choisit")} with a silent <b>-t</b>.`)}</p>`)}
${EX([["Je choisis le plat du jour.", TF("Я выбираю блюдо дня.","I’m choosing the dish of the day.")],["Vous choisissez quel dessert ?", TF("Какой десерт вы выбираете?","Which dessert are you choosing?")],["Tu ne finis pas ton assiette ?", TF("Ты не доедаешь?","Aren’t you finishing your plate?")],["Ils finissent leur jus et ils arrivent.", TF("Они допивают сок и идут.","They finish their juice and they’re coming.")]])}
${CMP2(`Звук [s] во множественном числе помогает на слух: ${F("il finit")} [fini] ↔ ${F("ils finissent")} [finis].`, `Like <i>he finishes / they finish</i>, the plural is longer.`, `Listen for the [s]: ${F("il finit")} [fini] ↔ ${F("ils finissent")} [finis] — the plural is one syllable longer.`)}
`,
ex:[
{t:"conj", h:TF("Проспрягай choisir и finir","Conjugate choisir and finir"), w:[
"Окончания второй группы: -is, -is, -it, -issons, -issez, -issent.",
"Second-group endings: -is, -is, -it, -issons, -issez, -issent."], items:[
{v:"choisir", p:P6, f:["choisis","choisis","choisit","choisissons","choisissez","choisissent"]},
{v:"finir", p:P6, f:["finis","finis","finit","finissons","finissez","finissent"]}
]},
{t:"mc", h:TF("Выбери правильную форму","Choose the correct form"), w:[
"je / tu — -is, il / elle / on — -it, nous — -issons, vous — -issez, ils / elles — -issent.",
"je / tu — -is, il / elle / on — -it, nous — -issons, vous — -issez, ils / elles — -issent."], items:[
{q:"Tu ___ le dessert ?", o:["choisis","choisit"], a:0},
{q:"Vous ___ le restaurant ?", o:["choisissez","choisissent"], a:0},
{q:"Les enfants ___ leur dessert.", o:["finissent","finit"], a:0},
{q:"Nous ___ notre assiette !", o:["finissons","finissez"], a:0},
{q:"Je ___ mon plat.", o:["finis","finit"], a:0},
{q:"Il ___ une formule.", o:["choisit","choisissent"], a:0}
]},
{t:"fill", h:TF("Поставь глагол в нужную форму","Put the verb in the right form"), w:[
"Смотри на подлежащее: nous → -issons, vous → -issez, ils → -issent, il → -it.",
"Look at the subject: nous → -issons, vous → -issez, ils → -issent, il → -it."], items:[
{q:"Tu ne ___ pas ton dessert ? (finir)", a:["finis"]},
{q:"Je ___ le menu à 16 €. (choisir)", a:["choisis"]},
{q:"Vous ___ quel plat ? (choisir)", a:["choisissez"]},
{q:"Il ___ son jus d’orange et il arrive ! (finir)", a:["finit"]},
{q:"Nous ___ le dessert. (choisir)", a:["choisissons"]},
{q:"Elles ne ___ pas leur assiette ? (finir)", a:["finissent"]}
]},
{t:"mc", h:TF("Кто это делает?","Who is doing it?"), w:[
"Окончание подсказывает лицо: -issons — nous, -issez — vous, -issent — ils/elles, -it — il/elle/on.",
"The ending tells you the person: -issons — nous, -issez — vous, -issent — ils/elles, -it — il/elle/on."], items:[
{q:"___ choisissons le plat.", o:["Nous","Vous","Ils"], a:0},
{q:"___ finit le café.", o:["Il","Je","Tu"], a:0},
{q:"___ ne finis pas mon assiette.", o:["Je","Il","Nous"], a:0, e:TF("mon → это я.","mon → it’s me.")},
{q:"___ choisis ton dessert ?", o:["Tu","Il","Je"], a:0, e:TF("ton → это ты.","ton → it’s you.")},
{q:"___ choisissent l’entrée.", o:["Ils","Nous","Il"], a:0},
{q:"___ finissez la salade ?", o:["Vous","Nous","Ils"], a:0}
]},
{t:"order", h:TF("Собери фразу","Build the sentence"), w:[
"Порядок как в любой французской фразе: подлежащее + глагол + дополнение; отрицание ne … pas вокруг глагола.",
"The usual French order: subject + verb + object; the negation ne … pas goes around the verb."], items:[
{s:"Mes parents choisissent le restaurant.", ru:TF("Мои родители выбирают ресторан.","My parents are choosing the restaurant.")},
{s:"Les enfants ne finissent pas leur assiette.", ru:TF("Дети не доедают.","The children don’t finish their plates.")},
{s:"Vous choisissez quel dessert ?", ru:TF("Какой десерт вы выбираете?","Which dessert are you choosing?")}
]}
]},

/* ---------- 8. Phonie-graphie ---------- */
{
id:"u3-phonetique", sec:"book", unit:"3", kind:"Phonie-graphie",
title:"Les voyelles [i], [y], [u] et l’intonation", ru:TF("Три «узких» гласных и интонация вопроса","Three «close» vowels and question intonation"), page:PG("50, 56"),
theory:`
<h3>${TF("Три гласных — три положения губ","Three vowels — three lip positions")}</h3>
${BIGC([["[i]", TF("губы растянуты, как в улыбке","lips spread, as in a smile"), "dix, midi, la liste", "m"],["[y]", TF("губы трубочкой, язык — как для [i]","lips rounded, tongue as for [i]"), "tu, du, légumes", "f"],["[u]", TF("губы трубочкой, язык назад","lips rounded, tongue pulled back"), "vous, douze, courses", "p"]])}
${TBL([TF("Звук","Sound"), TF("Пишется","Spelt"), TF("Примеры","Examples")],[["[i]", "i, y, î", F("lundi, midi, liste, stylo")],["[y]", "u, û", F("tu, du, lundi, légumes, menu")],["[u]", "ou, où, oû", F("vous, douze, beaucoup, courses, soupe")]])}
${WARN(TF(`Самая важная пара — [y] и [u]: ${F("du")} [dy] ≠ ${F("doux")} [du], ${F("tu")} [ty] ≠ ${F("tout")} [tu], ${F("vu")} ≠ ${F("vous")}. Буква <b>u</b> — это всегда [y], а «у» по-французски пишется <b>ou</b>.`, `The key pair is [y] vs [u]: ${F("du")} [dy] ≠ ${F("doux")} [du], ${F("tu")} [ty] ≠ ${F("tout")} [tu], ${F("vu")} ≠ ${F("vous")}. The letter <b>u</b> is always [y]; the sound [u] is spelt <b>ou</b>.`))}
${CMP2(`[y] — как «ю» без «й» в начале: скажи «и» и, не двигая языком, вытяни губы трубочкой.`, `English has no [y]: say «ee» and round your lips without moving your tongue.`, `English has no [y]: say «ee» and round your lips as for «oo» without moving your tongue.`)}
<h3>${TF("Интонация: вопрос или утверждение","Intonation: question or statement")}</h3>
${TBL([TF("Голос","Voice"), TF("Значит","Means"), TF("Пишем","We write")],[[TF("поднимается ↗","rises ↗"), TF("вопрос","question"), "?"],[TF("опускается ↘","falls ↘"), TF("утверждение","statement"), "."]])}
${EX([["Tu es d’accord ? ↗", TF("вопрос без слов-маркеров — только интонация","a question with no question word — intonation only")],["On mange. ↘", TF("утверждение","statement")],["De la viande ↗ ou du poisson ? ↘", TF("в выборе «или» голос сначала идёт вверх, потом вниз","in an «or» choice the voice goes up, then down")]])}
`,
ex:[
{t:"sort", h:TF("Какой звук: [i], [y] или [u]?","Which sound: [i], [y] or [u]?"), cats:["[i]","[y]","[u]"], w:[
"i / y → [i]; u → [y]; ou → [u]. Смотри на написание ударной гласной.",
"i / y → [i]; u → [y]; ou → [u]. Look at how the stressed vowel is spelt."], items:[["dix",0],["midi",0],["la liste",0],["tu",1],["le menu",1],["du jus",1],["vous",2],["douze",2],["la soupe",2],["beaucoup",2],["la mule",1],["la vie",0]]},
{t:"mc", h:TF("Какое слово со звуком [u]?","Which word has the sound [u]?"), w:[
"Звук [u] пишется ou. Одна буква u даёт [y].",
"The sound [u] is spelt ou. A single u gives [y]."], items:[
{q:"du – doux", o:["doux","du"], a:0},
{q:"tu – tout", o:["tout","tu"], a:0},
{q:"vu – vous", o:["vous","vu"], a:0},
{q:"lu – loup", o:["loup","lu"], a:0}
]},
{t:"tf", h:TF("Верно или нет?","True or false?"), w:[
"Буква u = [y], ou = [u], i и y = [i]. Голос вверх — вопрос, вниз — утверждение.",
"The letter u = [y], ou = [u], i and y = [i]. Rising voice — question, falling — statement."], items:[
{q:TF("В слове «légumes» звук [y].","«légumes» has the sound [y]."), a:true},
{q:TF("В слове «courses» звук [y].","«courses» has the sound [y]."), a:false, e:TF("ou → [u].","ou → [u].")},
{q:TF("Если голос в конце поднимается, это вопрос.","If the voice rises at the end, it’s a question."), a:true},
{q:TF("«On mange.» с понижением голоса — это вопрос.","«On mange.» with a falling voice is a question."), a:false},
{q:TF("В слове «stylo» буква y читается как [i].","In «stylo» the letter y is read [i]."), a:true}
]},
{t:"drill", h:TF("Читаем вслух","Read aloud"), w:[
"Тяни гласную и следи за губами: [i] — улыбка, [y] и [u] — трубочка.",
"Stretch the vowel and watch your lips: [i] — smile, [y] and [u] — rounded."], items:[
["Dix amis pique-niquent lundi midi.", TF("Десять друзей устраивают пикник в понедельник в полдень.","Ten friends have a picnic on Monday at noon.")],
["Tu aimes les menus avec des légumes ?", TF("Ты любишь меню с овощами?","Do you like menus with vegetables?")],
["Vous achetez douze courgettes pour faire une soupe.", TF("Вы покупаете двенадцать кабачков для супа.","You’re buying twelve courgettes to make a soup.")],
["Tu voudrais une bouteille de jus pour le goûter ?", TF("Хочешь бутылку сока на полдник?","Would you like a bottle of juice for your snack?")]
]}
]}

]; }

/* ---------- подключение: темы, «почему так», вопросы контрольной ---------- */
(function(){
  const reg = (list, L) => list.forEach(tp=>{
    const w = tp.ex.map(e=>e.w || ["",""]);
    if (!WHY[tp.id]) WHY[tp.id] = w;
  });
  const ru = FR_U3("ru"), en = FR_U3("en");
  /* WHY хранит пары [ru, en]: берём из русской сборки (там w одинаковые) */
  reg(ru, "ru");
  TOPICS.push(...ru); TOPICS_EN.push(...en);
})();

/* ---------- вопросы для пробной контрольной (юнит 3) ---------- */
(function(){
  const Q = () => [
  {tp:"u3-courses", q:"– C’est à qui ? – C’est à moi. Je ___ un pain, s’il vous plaît.", o:["voudrais","veux","voulez"], a:0, e:TF("Вежливая просьба — je voudrais.","A polite request — je voudrais.")},
  {tp:"u3-courses", q:"– Vous payez comment ? – ___ carte.", o:["Par","En","À"], a:0},
  {tp:"u3-courses", q:"Ça ___ combien ?", o:["coûte","coûtent","coûtes"], a:0},
  {tp:"u3-courses", q:"Nous ___ un panier par semaine. (acheter)", a:["achetons"], e:TF("У nous нет è.","No è with nous.")},
  {tp:"u3-courses", q:"Ils ___ en espèces. (payer)", a:["paient","payent"]},
  {tp:"u3-pluriel", q:"Deux ___ de riz, s’il vous plaît.", o:["paquets","paquet","paquetes"], a:0},
  {tp:"u3-pluriel", q:"un gâteau → des ___", a:["gâteaux"], e:"-eau → -eaux."},
  {tp:"u3-pluriel", q:"un jus → deux ___", o:["jus","juss","jux"], a:0, e:TF("На -s — без изменений.","Ends in -s — no change.")},
  {tp:"u3-commerces", q:"Pour le pain, je vais ___ boulangerie.", o:["à la","chez la","au"], a:0},
  {tp:"u3-commerces", q:"Pour la viande, je vais ___ boucher.", o:["chez le","au","à le"], a:0},
  {tp:"u3-commerces", q:"Le samedi, on va ___ marché.", o:["au","à le","chez le"], a:0},
  {tp:"u3-commerces", q:"Ils ___ au supermarché. (aller)", a:["vont"]},
  {tp:"u3-commerces", q:"Nous ___ chez la fromagère. (aller)", a:["allons"]},
  {tp:"u3-commerces", q:TF("Le poissonnier travaille…","Le poissonnier travaille…"), o:["à la poissonnerie.","à la boucherie.","à la fromagerie."], a:0},
  {tp:"u3-aliments", q:"une ___ d’huile d’olive", o:["bouteille","boîte","pot"], a:0},
  {tp:"u3-aliments", q:"un kilo ___ pommes", o:["de","des","du"], a:0, e:TF("После количества — de без артикля.","After a quantity — de with no article.")},
  {tp:"u3-aliments", q:TF("Что из этого — овощ?","Which of these is a vegetable?"), o:["la courgette","la fraise","la cerise"], a:0},
  {tp:"u3-partitifs", q:"Je mange ___ poisson.", o:["du","le","de la"], a:0},
  {tp:"u3-partitifs", q:"J’adore ___ poisson.", o:["le","du","de"], a:0, e:TF("После adorer — le/la/les.","After adorer — le/la/les.")},
  {tp:"u3-partitifs", q:"Tu veux ___ eau ?", o:["de l’","de la","du"], a:0},
  {tp:"u3-partitifs", q:"Je ne mange pas ___ viande.", o:["de","de la","la"], a:0},
  {tp:"u3-partitifs", q:"Il mange beaucoup ___ légumes.", o:["de","des","du"], a:0},
  {tp:"u3-partitifs", q:"Vous ___ les courses ? (faire)", a:["faites"]},
  {tp:"u3-partitifs", q:"Ils ___ la cuisine. (faire)", a:["font"]},
  {tp:"u3-restaurant", q:"– Et pour finir ? – L’___, s’il vous plaît.", o:["addition","entrée","assiette"], a:0},
  {tp:"u3-restaurant", q:TF("Тебе не понравилось: блюдо безвкусное.","You didn’t like it: the dish is bland."), o:["Ça n’a pas de goût.","C’est pas mal.","C’est délicieux."], a:0},
  {tp:"u3-restaurant", q:"Nous ___ au restaurant. (manger)", a:["mangeons"], e:TF("e сохраняет мягкое g.","The e keeps the g soft.")},
  {tp:"u3-restaurant", q:TF("Чем режут мясо?","What do you cut meat with?"), o:["un couteau","une cuillère","un verre"], a:0},
  {tp:"u3-verbes-ir", q:"Vous ___ quel dessert ? (choisir)", a:["choisissez"]},
  {tp:"u3-verbes-ir", q:"Les enfants ne ___ pas leur assiette.", o:["finissent","finisent","finit"], a:0},
  {tp:"u3-verbes-ir", q:"Il ___ le plat du jour.", o:["choisit","choisis","choisist"], a:0},
  {tp:"u3-verbes-ir", q:"Je ___ mon café. (finir)", a:["finis"]},
  {tp:"u3-phonetique", q:TF("В каком слове звук [u]?","Which word has the sound [u]?"), o:["douze","du","dix"], a:0},
  {tp:"u3-phonetique", q:TF("Голос в конце поднимается. Это…","The voice rises at the end. It’s…"), o:[TF("вопрос","a question"),TF("утверждение","a statement")], a:0}
  ];
  FRL = "ru"; POOL.push(...Q());
  FRL = "en"; POOL_EN.push(...Q());
  FRL = "ru";
})();

/* ---------- Quizlet: наборы юнита 3 ---------- */
QSETS.push(
{id:"aliments", unit:"3", t:"Les aliments", ru:"Продукты", en:"Food", w:[
["le fruit","фрукт","fruit"],["le légume","овощ","vegetable"],["l’abricot","абрикос","apricot"],["la cerise","вишня, черешня","cherry"],["la fraise","клубника","strawberry"],["la pêche","персик","peach"],["la pomme","яблоко","apple"],["la tomate","помидор","tomato"],["la courgette","кабачок","courgette"],["les haricots verts","стручковая фасоль","green beans"],["le poivron","сладкий перец","pepper"],["la pomme de terre","картофель","potato"],["la salade","салат","lettuce, salad"],["le pain","хлеб","bread"],["la baguette","багет","baguette"],["le croissant","круассан","croissant"],["le beurre","сливочное масло","butter"],["la crème","сливки","cream"],["le fromage","сыр","cheese"],["le yaourt","йогурт","yoghurt"],["le lait","молоко","milk"],["la farine","мука","flour"],["les pâtes","макароны","pasta"],["le riz","рис","rice"],["l’œuf","яйцо","egg"],["le poisson","рыба","fish"],["le poulet","курица","chicken"],["la viande","мясо","meat"],["l’huile d’olive","оливковое масло","olive oil"]]},
{id:"commerces", unit:"3", t:"Les commerces et les quantités", ru:"Магазины, упаковки, оплата", en:"Shops, quantities, payment", w:[
["la boulangerie","булочная","bakery"],["le boulanger / la boulangère","пекарь","baker"],["la boucherie","мясная лавка","butcher’s"],["le boucher / la bouchère","мясник","butcher"],["la poissonnerie","рыбный магазин","fishmonger’s"],["la fromagerie","сырная лавка","cheese shop"],["l’épicerie","бакалея","grocery"],["le marché","рынок","market"],["le supermarché","супермаркет","supermarket"],["une boîte de","банка (чего-то)","a tin of"],["une bouteille de","бутылка","a bottle of"],["un kilo de","килограмм","a kilo of"],["un paquet de","пачка, пакет","a packet of"],["un pot de","баночка","a pot of"],["par carte","картой","by card"],["en espèces","наличными","in cash"],["Je voudrais…","Я бы хотел(а)…","I’d like…"],["Combien ça coûte ?","Сколько стоит?","How much is it?"],["C’est à qui ?","Чья очередь?","Who’s next?"],["acheter","покупать","to buy"],["payer","платить","to pay"],["aller","идти, ехать","to go"]]},
{id:"restaurant", unit:"3", t:"Au restaurant", ru:"В ресторане", en:"At the restaurant", w:[
["la carte","меню (список блюд)","the menu"],["le menu, la formule","комплексное меню","set menu"],["le plat du jour","блюдо дня","dish of the day"],["l’entrée","закуска","starter"],["le plat","основное блюдо","main course"],["le dessert","десерт","dessert"],["l’addition","счёт","the bill"],["la carafe d’eau","графин воды","jug of water"],["l’assiette","тарелка","plate"],["le verre","стакан","glass"],["le couteau","нож","knife"],["la fourchette","вилка","fork"],["la cuillère","ложка","spoon"],["le sel, le poivre","соль, перец","salt, pepper"],["le café crème","кофе со сливками","white coffee"],["C’est délicieux !","Очень вкусно!","It’s delicious!"],["C’est pas mal.","Неплохо.","Not bad."],["Ça n’a pas de goût.","Безвкусно.","It’s tasteless."],["commander","заказывать","to order"],["choisir","выбирать","to choose"],["finir","заканчивать","to finish"],["manger","есть","to eat"]]}
);
