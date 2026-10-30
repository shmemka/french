/* =========================================================
   FRANÇAIS — Livre, Unité 3 « Qu’est-ce qu’on mange ? » (с. 45–58)
   Двуязычная сборка: FR_U3("ru") / FR_U3("en").
   У каждого упражнения поле w:[ru, en] — «почему так» (идёт в WHY).
   ========================================================= */
var FRL = "ru";
const TF = (ru, en) => FRL === "en" ? en : ru;
const PG = s => TF("с. ", "p. ") + s;
/* сравнение (только если есть чёткая параллель): по-русски RU и/или EN, по-английски — только EN */
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
${KEY([
TF(`Сначала поздоровайся: ${F("Bonjour !")} Без этого начинать разговор невежливо.`, `Greet first: ${F("Bonjour !")} Starting without it is impolite.`),
TF(`Просишь — ${F("Je voudrais…, s’il vous plaît.")} («Я бы хотел(а)…»). ${F("Je veux")} звучит грубо.`, `To ask for something — ${F("Je voudrais…, s’il vous plaît.")} ${F("Je veux")} sounds rude.`),
TF(`Цена: ${F("Ça coûte combien ?")} — ответ ${F("Ça fait 3,40 €.")}`, `The price: ${F("Ça coûte combien ?")} — the answer: ${F("Ça fait 3,40 €.")}`),
TF(`Платишь ${F("par carte")} (картой) или ${F("en espèces")} (наличными).`, `You pay ${F("par carte")} (by card) or ${F("en espèces")} (in cash).`)
])}
<h3>${TF("Как проходит покупка","How a purchase goes")}</h3>
<p>${TF("Почти весь разговор в магазине — шесть готовых фраз. Послушай диалог, потом закрой перевод и попробуй понять всё сам.", "Almost the whole conversation in a shop is six set phrases. Listen to the dialogue, then hide the translation and try to follow it on your own.")}</p>
${CHAT("fr-u3-boulangerie", TF("В булочной","At the bakery"), [
["Vendeuse", "Bonjour ! C’est à qui ?", "Здравствуйте! Чья очередь?", "Hello! Who’s next?"],
["Client", "C’est à moi. Bonjour ! Je voudrais une baguette, s’il vous plaît.", "Моя. Здравствуйте! Я бы хотел багет, пожалуйста.", "Me. Hello! I’d like a baguette, please."],
["Vendeuse", "Voilà. Et avec ça ?", "Вот. Что-нибудь ещё?", "Here you are. Anything else?"],
["Client", "Deux croissants. Ça coûte combien ?", "Два круассана. Сколько это стоит?", "Two croissants. How much is it?"],
["Vendeuse", "Ça fait 3,40 €. Vous payez comment ?", "С вас 3,40 €. Как будете платить?", "That’s €3.40. How are you paying?"],
["Client", "Par carte. Merci, au revoir !", "Картой. Спасибо, до свидания!", "By card. Thank you, goodbye!"]
])}
${TBL([TF("Тебе говорят","You hear"), TF("Значит","It means"), TF("Ты отвечаешь","You answer")],[
[F("C’est à qui ?"), TF("Чья очередь?","Who’s next?"), F("C’est à moi.")],
[F("Et avec ça ?"), TF("Что-нибудь ещё?","Anything else?"), F("Deux croissants. / C’est tout.")],
[F("Ce sera tout ?"), TF("Это всё?","Will that be all?"), F("Oui, c’est tout.")],
[F("Vous payez comment ?"), TF("Как платите?","How are you paying?"), F("Par carte. / En espèces.")]
])}
<h3>${TF("Как спросить и назвать цену?","How to ask and give the price")}</h3>
${FXS(FX(["!Combien coûte","la baguette ?"], TF("сколько стоит + товар","how much is + item")), FX(["!Ça coûte combien ?"], TF("разговорный вариант","everyday variant")), FX(["Elle","!coûte","1,20 €."], TF("ответ: il / elle coûte…, ça fait…","answer: il / elle coûte…, ça fait…")))}
<p>${TF(`В цене — <b>запятая</b>, знак € — <b>после</b> числа. Читают так: ${F("3,40 €")} = ${F("trois euros quarante")} — слово «центы» не говорят.`, `Prices use a <b>comma</b> and € goes <b>after</b> the number. Read it like this: ${F("3,40 €")} = ${F("trois euros quarante")} — nobody says «cents».`)}</p>
<h3>${TF("acheter и payer: где меняется основа?","acheter and payer: where does the stem change?")}</h3>
${CJS(
CJ("acheter", TF("покупать","to buy"), ["j’ach<b>è</b>te","tu ach<b>è</b>tes","il / elle / on ach<b>è</b>te","nous achetons","vous achetez","ils / elles ach<b>è</b>tent"]),
CJ("payer", TF("платить","to pay"), ["je pa<b>i</b>e","tu pa<b>i</b>es","il / elle / on pa<b>i</b>e","nous payons","vous payez","ils / elles pa<b>i</b>ent"])
)}
<p>${TF(`Окончания обычные, как у всех глаголов на -er. Меняется основа там, где окончание <b>не слышно</b>: je, tu, il, ils. У ${F("nous")} и ${F("vous")} основа как в инфинитиве. У ${F("payer")} можно и без изменения: ${F("je paye")}.`, `The endings are the usual -er ones. The stem changes where the ending is <b>silent</b>: je, tu, il, ils. With ${F("nous")} and ${F("vous")} the stem is as in the infinitive. ${F("payer")} may also keep its stem: ${F("je paye")}.`)}</p>
${QC([
[TF("Как вежливо попросить два круассана?","How do you politely ask for two croissants?"), F("Je voudrais deux croissants, s’il vous plaît.")],
[TF("Продавец говорит «Et avec ça ?». Что он спрашивает?","The shopkeeper says «Et avec ça ?». What is he asking?"), TF("«Что-нибудь ещё?»","«Anything else?»")],
[TF("Как прочитать 4,50 € ?","How do you read 4,50 €?"), F("quatre euros cinquante")]
])}
${ERRS([
["Je veux un pain.", "Je voudrais un pain, s’il vous plaît.", TF("Je veux звучит как требование.","Je veux sounds like a demand.")],
["Je paie avec carte.", "Je paie par carte.", TF("Картой — par carte, наличными — en espèces.","By card — par carte, in cash — en espèces.")],
["nous achètons", "nous achetons", TF("У nous и vous нет è: окончание слышно.","No è with nous and vous: the ending is heard.")]
])}
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
${KEY([
TF(`Множественное число — обычно <b>+ -s</b>: ${F("un panier → des paniers")}.`, `The plural is usually <b>+ -s</b>: ${F("un panier → des paniers")}.`),
TF(`Это -s <b>не читается</b>: на слух число слышно только по артиклю ${F("le / les")}, ${F("un / des")}.`, `This -s is <b>silent</b>: you only hear the number in the article ${F("le / les")}, ${F("un / des")}.`),
TF(`Особые случаи: ${F("-eau → -eaux")}, ${F("-al → -aux")}, а слова на ${F("-s, -x, -z")} не меняются.`, `Special cases: ${F("-eau → -eaux")}, ${F("-al → -aux")}, and words in ${F("-s, -x, -z")} don’t change.`)
])}
<h3>${TF("Что меняется во множественном числе?","What changes in the plural?")}</h3>
${GRID(["", TF("один","one"), TF("много","many")],[[TF("м. р.","masc."),"m:un panier","p:des panier<b>s</b>"],[TF("ж. р.","fem."),"f:une bouteille","p:des bouteille<b>s</b>"]])}
<p>${TF("Меняются два места: артикль и окончание слова. Слышно только первое.", "Two things change: the article and the end of the word. Only the first one is heard.")}</p>
${SAME(["le panier","les paniers"], "[panje]", [["le","[lə]"],["les","[le]"]])}
<h3>${TF("Особые случаи","Special cases")}</h3>
${TBL([TF("Слово кончается на…","The word ends in…"), TF("Мн. ч.","Plural"), TF("Пример","Example")],[
["-s, -x, -z", TF("не меняется","no change"), F("un jus → des jus · le prix → les prix")],
["-eau", "-eau<b>x</b>", F("un gâteau → des gâteau<b>x</b>")],
["-al", "-<b>aux</b>", F("un journal → des journ<b>aux</b>")]
])}
${NOTE(TF(`${F("un œuf")} [œf] → ${F("des œufs")} [ø]: во множественном числе f и s молчат.`, `${F("un œuf")} [œf] → ${F("des œufs")} [ø]: in the plural both f and s are silent.`))}
<h3>${TF("Число и количество","Numbers and quantities")}</h3>
${EX([["J’achète trois croissant<b>s</b>.", TF("после числа больше одного — мн. ч.","after a number above one — plural")],["un kilo de pomme<b>s</b>", TF("яблок много — мн. ч.","many apples — plural")],["une bouteille de jus", TF("сок не считают — ед. ч.","juice isn’t counted — singular")],["deux paquet<b>s</b> de riz", TF("во мн. ч. — упаковка, а не рис","the packet goes plural, not the rice")]])}
${CMP2(`Как в русском: «два пакета риса», «килограмм яблок». Только по-французски окончание пишется, но не слышно.`, ``, `Like English <i>two packets of rice, a kilo of apples</i> — but the French -s is written and not pronounced.`)}
${QC([
[TF("Как на слух отличить «le panier» от «les paniers»?","How do you hear the difference between «le panier» and «les paniers»?"), TF(`Только по артиклю: ${F("le")} [lə] — ${F("les")} [le].`, `Only by the article: ${F("le")} [lə] vs ${F("les")} [le].`)],
[TF("un gâteau → des …?","un gâteau → des …?"), F("des gâteaux")],
[TF("un jus → deux …?","un jus → deux …?"), TF(`${F("deux jus")} — слово на -s не меняется.`, `${F("deux jus")} — a word in -s doesn’t change.`)]
])}
${ERRS([
["des gâteaus", "des gâteaux", TF("-eau → -eaux.","-eau → -eaux.")],
["deux juss", "deux jus", TF("На -s, -x, -z — без изменений.","Words in -s, -x, -z don’t change.")],
["deux paquets de riz<b>s</b>", "deux paquets de riz", TF("Во мн. ч. — только упаковка.","Only the packet goes plural.")]
])}
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
${KEY([
TF(`Магазин (место) — ${F("à")} + артикль: ${F("Je vais à la boulangerie.")}`, `A shop (place) — ${F("à")} + article: ${F("Je vais à la boulangerie.")}`),
TF(`Продавец (человек) — ${F("chez")}: ${F("Je vais chez le boulanger.")}`, `A shopkeeper (person) — ${F("chez")}: ${F("Je vais chez le boulanger.")}`),
TF(`${F("à + le = au")}, ${F("à + les = aux")}; ${F("à la")} и ${F("à l’")} не сливаются.`, `${F("à + le = au")}, ${F("à + les = aux")}; ${F("à la")} and ${F("à l’")} stay as they are.`),
TF(`${F("aller")}: je vais, tu vas, il va, nous allons, vous allez, ils vont.`, `${F("aller")}: je vais, tu vas, il va, nous allons, vous allez, ils vont.`)
])}
<h3>${TF("Магазины","Shops")}</h3>
${PICS([
["boulangerie","la boulangerie",TF("булочная","bakery")],["boucherie","la boucherie",TF("мясная лавка","butcher’s")],["poissonnerie","la poissonnerie",TF("рыбный магазин","fishmonger’s")],["fromagerie","la fromagerie",TF("сырная лавка","cheese shop")],["epicerie","l’épicerie",TF("бакалея","grocer’s"),"f"],["marche","le marché",TF("рынок","market")],["supermarche","le supermarché",TF("супермаркет","supermarket")]
])}
<h3>${TF("Магазин → продавец","Shop → shopkeeper")}</h3>
${FX(["boulang|"+TF("основа","stem"),"+","!-erie|"+TF("магазин","shop"),"→","!-er / -ère|"+TF("продавец","shopkeeper")], TF("по названию магазина легко угадать продавца","the shop name gives you the shopkeeper"))}
${TBL([TF("Магазин","Shop"), TF("Продавец","Shopkeeper"), TF("Что там купить","What you buy there")],[
[F("la boulangerie"), F("le boulanger / la boulangère"), F("le pain, les croissants")],
[F("la boucherie"), F("le boucher / la bouchère"), F("la viande, le poulet")],
[F("la poissonnerie"), F("le poissonnier / la poissonnière"), F("le poisson")],
[F("la fromagerie"), F("le fromager / la fromagère"), F("le fromage")],
[F("l’épicerie"), F("l’épicier / l’épicière"), F("le riz, les pâtes, l’huile")]
])}
<h3>${TF("à или chez?","à or chez?")}</h3>
${FLOW([[TF("Дальше <b>место</b>: boulangerie, marché, épicerie?","Is it followed by a <b>place</b>: boulangerie, marché, épicerie?"), "à + le / la / l’ / les", "à la boucherie, au marché"]], [TF("Дальше <b>человек</b>: boucher, fromagère, mes parents","Followed by a <b>person</b>: boucher, fromagère, mes parents"), "chez", "chez le boucher, chez moi"])}
${FXS(FX(["à","+","le","=","!au"],"au marché"), FX(["à","+","les","=","!aux"],"aux caisses"), FX(["à","+","la","=","à la"],TF("без слияния","no contraction")), FX(["à","+","l’","=","à l’"],TF("перед гласной","before a vowel")))}
<p>${TF(`${F("chez")} с артиклем никогда не сливается: ${F("chez le boucher")}.`, `${F("chez")} never contracts with the article: ${F("chez le boucher")}.`)}</p>
<h3>${TF("aller — идти, ехать","aller — to go")}</h3>
${CJS(CJ("aller", TF("идти, ехать","to go"), ["je <b>vais</b>","tu <b>vas</b>","il / elle / on <b>va</b>","nous allons","vous allez","ils / elles <b>vont</b>"]))}
<p>${TF(`Кончается на -er, но спрягается неправильно: формы ${F("vais, vas, va, vont")} просто запоминают.`, `It ends in -er but is irregular: just learn ${F("vais, vas, va, vont")}.`)}</p>
${QC([
[TF("Ты идёшь к мяснику. Как сказать?","You’re going to the butcher’s. How do you say it?"), TF(`${F("Je vais chez le boucher.")} или ${F("Je vais à la boucherie.")}`, `${F("Je vais chez le boucher.")} or ${F("Je vais à la boucherie.")}`)],
[TF("à + le marché = ?","à + le marché = ?"), F("au marché")],
[TF("«Они идут» — как будет?","«They go» — how do you say it?"), F("ils vont")]
])}
${ERRS([
["Je vais à le marché.", "Je vais au marché.", TF("à + le = au.","à + le = au.")],
["Je vais chez la boulangerie.", "Je vais à la boulangerie.", TF("chez — только перед человеком.","chez only goes before a person.")],
["ils allent", "ils vont", TF("aller — неправильный глагол.","aller is irregular.")]
])}
${PHOTOS(["boulangerie","boucherie","poissonnerie","fromagerie","epicerie","marche","supermarche"])}
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
${KEY([
TF(`Учи слово <b>вместе с артиклем</b>: по нему видно род (${F("le poivron")}, ${F("la courgette")}).`, `Learn each word <b>with its article</b>: it shows the gender (${F("le poivron")}, ${F("la courgette")}).`),
TF(`Количество + ${F("de")} + продукт без артикля: ${F("un kilo de pommes")}.`, `Quantity + ${F("de")} + food with no article: ${F("un kilo de pommes")}.`),
TF(`Перед гласной ${F("de → d’")}: ${F("une bouteille d’eau")}.`, `Before a vowel ${F("de → d’")}: ${F("une bouteille d’eau")}.`)
])}
<p>${TF("Нажми на карточку, чтобы услышать слово. Цвет артикля — род: синий — мужской, розовый — женский.", "Tap a card to hear the word. The article colour shows the gender: blue — masculine, pink — feminine.")}</p>
<h3>${TF("Фрукты и овощи","Fruit and vegetables")}</h3>
${PICS([
["pomme","la pomme",TF("яблоко","apple")],["fraise","la fraise",TF("клубника","strawberry")],["cerise","la cerise",TF("вишня, черешня","cherry")],["peche","la pêche",TF("персик","peach")],["abricot","l’abricot",TF("абрикос","apricot"),"m"],["tomate","la tomate",TF("помидор","tomato")],
["courgette","la courgette",TF("кабачок","courgette")],["poivron","le poivron",TF("сладкий перец","pepper")],["haricots","les haricots verts",TF("стручковая фасоль","green beans")],["pdt","la pomme de terre",TF("картофель","potato")],["salade","la salade",TF("салат","lettuce")]
])}
${NOTE(TF(`${F("une pomme")} — яблоко, а ${F("une pomme de terre")} — дословно «земляное яблоко», то есть картофель.`, `${F("une pomme")} is an apple, and ${F("une pomme de terre")} is literally an «earth apple» — a potato.`))}
<h3>${TF("Молочные продукты","Dairy")}</h3>
${PICS([["lait","le lait",TF("молоко","milk")],["beurre","le beurre",TF("сливочное масло","butter")],["creme","la crème",TF("сливки","cream")],["yaourt","le yaourt",TF("йогурт","yoghurt")],["chevre","le fromage de chèvre",TF("козий сыр","goat’s cheese")]])}
<h3>${TF("Хлеб, мука, крупы","Bread, flour, grains")}</h3>
${PICS([["baguette","la baguette",TF("багет","baguette")],["croissant","le croissant",TF("круассан","croissant")],["farine","la farine",TF("мука","flour")],["pates","les pâtes",TF("макароны","pasta")],["riz","le riz",TF("рис","rice")]])}
<h3>${TF("Мясо, рыба, яйца, масло","Meat, fish, eggs, oil")}</h3>
${PICS([["viande","la viande",TF("мясо","meat")],["poulet","le poulet",TF("курица","chicken")],["poisson","le poisson",TF("рыба","fish")],["oeuf","l’œuf",TF("яйцо","egg"),"m"],["huile","l’huile d’olive",TF("оливковое масло","olive oil"),"f"]])}
<h3>${TF("Как сказать, сколько?","How do you say how much?")}</h3>
${FX(["un paquet","+","!de","+","riz"], TF("после количества — de, без артикля","after a quantity — de, with no article"))}
${PICS([["boite","une boîte de thon",TF("банка тунца","a tin of tuna")],["bouteille","une bouteille d’huile",TF("бутылка масла","a bottle of oil")],["pot","un pot de yaourt",TF("баночка йогурта","a pot of yoghurt")],["panier","un panier de légumes",TF("корзина овощей","a basket of vegetables")]])}
${TBL([TF("Упаковка","Packaging"), TF("Для чего","Used for"), TF("Пример","Example")],[
[F("une boîte de"), TF("консервы","tins"), F("une boîte de thon")],
[F("une bouteille de"), TF("жидкое","liquids"), F("une bouteille d’eau, de jus")],
[F("un paquet de"), TF("сухое","dry goods"), F("un paquet de riz, de pâtes")],
[F("un pot de"), TF("густое","thick things"), F("un pot de crème")],
[F("un kilo de"), TF("на вес","by weight"), F("un kilo de pommes")]
])}
${CMP2(`Как в русском родительный падеж: «пачка риса», «бутылка масла» — по-французски всё это делает одно слово ${F("de")}.`, ``, `Like English <i>a packet of rice, a bottle of oil</i>: ${F("de")} = <i>of</i>, with no article after it.`)}
${QC([
[TF("Какой род у слова «pomme de terre»?","What gender is «pomme de terre»?"), TF(`Женский: ${F("la pomme de terre")}.`, `Feminine: ${F("la pomme de terre")}.`)],
[TF("«Бутылка воды» по-французски?","«A bottle of water» in French?"), F("une bouteille d’eau")],
[TF("В чём продают йогурт и сливки?","What do yoghurt and cream come in?"), F("un pot de yaourt, un pot de crème")]
])}
${ERRS([
["un kilo des pommes", "un kilo de pommes", TF("После количества — de без артикля.","After a quantity — de with no article.")],
["une bouteille de eau", "une bouteille d’eau", TF("Перед гласной de → d’.","Before a vowel de → d’.")],
["le pomme", "la pomme", TF("Род учи вместе со словом.","Learn the gender with the word.")]
])}
${PHOTOS(["pomme","fraise","cerise","peche","abricot","tomate","courgette","poivron","haricots","pdt","salade","lait","beurre","creme","yaourt","chevre","baguette","croissant","farine","pates","riz","viande","poulet","poisson","oeuf","huile","boite","bouteille","pot","panier"])}
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
${KEY([
TF(`«Немного, какое-то количество» — ${F("du / de la / de l’ / des")}: ${F("Je mange du poisson.")}`, `«Some, a certain amount» — ${F("du / de la / de l’ / des")}: ${F("Je mange du poisson.")}`),
TF(`Вкусы (aimer, adorer, détester) — ${F("le / la / les")}: ${F("J’aime le poisson.")}`, `Tastes (aimer, adorer, détester) — ${F("le / la / les")}: ${F("J’aime le poisson.")}`),
TF(`После ${F("beaucoup, un peu, pas")} — только ${F("de")}: ${F("pas de viande")}.`, `After ${F("beaucoup, un peu, pas")} — just ${F("de")}: ${F("pas de viande")}.`),
TF(`${F("faire")}: je fais, nous faisons, vous <b>faites</b>, ils <b>font</b>.`, `${F("faire")}: je fais, nous faisons, vous <b>faites</b>, ils <b>font</b>.`)
])}
<h3>${TF("Какой артикль выбрать?","Which article do you choose?")}</h3>
${FLOW([
[TF("Говоришь о <b>вкусах</b>: aimer, adorer, détester, préférer?","Talking about <b>tastes</b>: aimer, adorer, détester, préférer?"), "le / la / les", "J’aime le chocolat."],
[TF("Перед словом <b>количество</b>: beaucoup, un peu, un kilo… или <b>отрицание</b> pas?","Is there a <b>quantity</b> before it: beaucoup, un peu, un kilo… or a <b>negative</b> pas?"), "de / d’", "Je ne mange pas de viande."]
], [TF("Ешь, покупаешь, берёшь <b>какое-то количество</b>: manger, acheter, prendre, il y a, je voudrais","Eating, buying, taking <b>some</b>: manger, acheter, prendre, il y a, je voudrais"), "du / de la / de l’ / des", "Je mange du pain."])}
<h3>${TF("Формы частичного артикля","Forms of the partitive article")}</h3>
${GRID(["", TF("форма","form"), TF("пример","example")],[
[TF("м. р.","masc."),"m:du  (de + le)","m:du poisson"],
[TF("ж. р.","fem."),"f:de la","f:de la farine"],
[TF("перед гласной","before a vowel"),"de l’","de l’eau, de l’huile"],
[TF("мн. ч.","plural"),"p:des  (de + les)","p:des pâtes"]
])}
${VS({h:TF("вкус: le / la / les","taste: le / la / les"), big:F("J’adore le chocolat."), sub:TF("шоколад вообще","chocolate in general")},{h:TF("количество: du / de la / des","amount: du / de la / des"), big:F("Je mange du chocolat."), sub:TF("какое-то количество","some")})}
<h3>${TF("Сколько? beaucoup de, un peu de, pas de","How much? beaucoup de, un peu de, pas de")}</h3>
${FXS(FX(["beaucoup","+","!de","+","légumes"]), FX(["un peu","+","!de","+","sel"]), FX(["ne … pas","+","!de","+","viande"], TF("в отрицании du / de la / des → de","in the negative du / de la / des → de")))}
${EX([["Il mange beaucoup <b>de</b> légumes.", TF("много овощей","lots of vegetables")],["Un peu <b>de</b> sel, s’il vous plaît.", TF("немного соли","a little salt")],["On n’a pas <b>de</b> tomates.", TF("des → de","des → de")],["Il n’y a pas <b>d’</b>huile.", TF("de l’ → d’","de l’ → d’")]])}
${NOTE(TF(`С ${F("être")} артикль остаётся и в отрицании: ${F("Ce n’est pas du poisson, c’est du poulet.")}`, `With ${F("être")} the article stays even in the negative: ${F("Ce n’est pas du poisson, c’est du poulet.")}`))}
<h3>${TF("faire — делать, готовить","faire — to do, to make")}</h3>
${CJS(CJ("faire", TF("делать","to do, to make"), ["je fais","tu fais","il / elle / on fait","nous faisons","vous <b>faites</b>","ils / elles <b>font</b>"]))}
${EX([["On fait les courses ?", TF("Сходим за покупками?","Shall we do the shopping?")],["Je fais la cuisine.", TF("Я готовлю.","I’m cooking.")],["Qu’est-ce qu’on mange ?", TF("Что будем есть?","What are we eating?")]])}
${CMP2(`Подставь мысленно «немного» — если подходит, нужен du / de la: «я ем рыбу» → ${F("je mange du poisson")}, но «я люблю рыбу» → ${F("j’aime le poisson")}.`, `Как <i>some</i>: <i>I eat (some) fish</i> → ${F("je mange du poisson")}, только во французском его нельзя опустить.`, `Close to <i>some</i>: <i>I eat (some) fish</i> → ${F("je mange du poisson")}. But in French you can’t leave it out, and <i>I like fish</i> → ${F("j’aime le poisson")}.`)}
${QC([
[TF("«Я ем хлеб» или «Я люблю хлеб» — где du?","«I eat bread» or «I love bread» — which one takes du?"), TF(`${F("Je mange du pain.")} А вкус — ${F("J’aime le pain.")}`, `${F("Je mange du pain.")} For a taste — ${F("J’aime le pain.")}`)],
[TF("Сделай отрицание: «Je mange de la viande.»","Make it negative: «Je mange de la viande.»"), F("Je ne mange pas de viande.")],
[TF("«Вы делаете» — как будет?","«You do» (vous) — how do you say it?"), F("vous faites")]
])}
${ERRS([
["J’aime du chocolat.", "J’aime le chocolat.", TF("Вкусы — le / la / les.","Tastes take le / la / les.")],
["beaucoup des légumes", "beaucoup de légumes", TF("После beaucoup — только de.","After beaucoup — only de.")],
["Je ne mange pas de la viande.", "Je ne mange pas de viande.", TF("В отрицании — de.","In the negative — de.")]
])}
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
${KEY([
TF(`Меню идёт по порядку: ${F("l’entrée")} (закуска) → ${F("le plat")} → ${F("le dessert")}.`, `The menu goes in order: ${F("l’entrée")} (starter) → ${F("le plat")} → ${F("le dessert")}.`),
TF(`Заказать: ${F("Je voudrais…")} / ${F("Pour moi, …")}`, `To order: ${F("Je voudrais…")} / ${F("Pour moi, …")}`),
TF(`Попросить счёт: ${F("L’addition, s’il vous plaît !")}`, `To ask for the bill: ${F("L’addition, s’il vous plaît !")}`),
TF(`Оценить: ${F("délicieux")} > ${F("bon")} > ${F("pas mal")} > ${F("pas bon")} > ${F("mauvais")}.`, `To rate: ${F("délicieux")} > ${F("bon")} > ${F("pas mal")} > ${F("pas bon")} > ${F("mauvais")}.`)
])}
<h3>${TF("Как заказать?","How do you order?")}</h3>
${CHAT("fr-u3-restaurant", TF("В ресторане","At the restaurant"), [
["Serveur", "Bonjour, madame. Vous désirez ?", "Здравствуйте. Что желаете?", "Hello, madam. What would you like?"],
["Cliente", "En entrée, la soupe de légumes, s’il vous plaît.", "На закуску — овощной суп, пожалуйста.", "The vegetable soup to start, please."],
["Serveur", "Et comme plat ?", "А из основных блюд?", "And for your main course?"],
["Cliente", "Pour moi, le plat du jour. Et une carafe d’eau.", "Мне — блюдо дня. И графин воды.", "The dish of the day for me. And a jug of water."],
["Serveur", "Très bien. … C’est bon ?", "Хорошо. … Вкусно?", "Very good. … Is it good?"],
["Cliente", "C’est délicieux ! L’addition, s’il vous plaît.", "Очень вкусно! Счёт, пожалуйста.", "It’s delicious! The bill, please."]
])}
<h3>${TF("Что есть в меню?","What’s on the menu?")}</h3>
<p><b>${F("l’entrée")}</b> — ${TF("закуска","starter")}</p>
${PICS([["nicoise","la salade niçoise",TF("салат нисуаз","salade niçoise")],["soupe","la soupe",TF("суп","soup")]])}
<p><b>${F("le plat")}</b> — ${TF("основное блюдо","main course")}</p>
${PICS([["steakfrites","le steak-frites",TF("стейк с картошкой фри","steak and chips")],["blanquette","la blanquette de veau",TF("рагу из телятины в сливочном соусе","veal in a creamy sauce")],["omelette","l’omelette",TF("омлет","omelette"),"f"],["quiche","la quiche",TF("киш, открытый пирог","quiche")],["magret","le magret de canard",TF("утиная грудка","duck breast")],["croque","le croque-monsieur",TF("горячий бутерброд с ветчиной и сыром","toasted ham and cheese sandwich")]])}
<p><b>${F("le dessert")}</b> — ${TF("десерт","dessert")}</p>
${PICS([["mousse","la mousse au chocolat",TF("шоколадный мусс","chocolate mousse")],["tarte","la tarte aux pommes",TF("яблочный пирог","apple tart")],["rizaulait","le riz au lait",TF("рисовый пудинг","rice pudding")],["glace","la glace",TF("мороженое","ice cream")]])}
<p><b>${F("la boisson")}</b> — ${TF("напиток","drink")}</p>
${PICS([["cafecreme","le café crème",TF("кофе со сливками","white coffee")]])}
${NOTE(TF(`${F("le plat du jour")} — блюдо дня, ${F("la formule")} — комплекс (например, entrée + plat), а графин воды ${F("une carafe d’eau")} во Франции приносят бесплатно.`, `${F("le plat du jour")} is the dish of the day, ${F("la formule")} is a set menu (e.g. entrée + plat), and a ${F("carafe d’eau")} is free in France.`))}
<h3>${TF("Как оценить блюдо?","How do you rate a dish?")}</h3>
${SCALE([["C’est délicieux !", TF("очень вкусно","delicious")],["C’est bon.", TF("вкусно","good")],["C’est pas mal.", TF("неплохо","not bad")],["Ce n’est pas bon.", TF("невкусно","not good")],["C’est mauvais. / Ça n’a pas de goût.", TF("плохо / безвкусно","bad / tasteless")]], [TF("лучше","better"), TF("хуже","worse")])}
<p>${TF(`${F("C’est pas mal")} — разговорная форма без ${F("ne")}, и это <b>похвала</b>.`, `${F("C’est pas mal")} is the spoken form without ${F("ne")}, and it’s <b>praise</b>.`)}</p>
<h3>${TF("Что на столе?","What’s on the table?")}</h3>
${PICS([["assiette","l’assiette",TF("тарелка","plate"),"f"],["verre","le verre",TF("стакан, бокал","glass")],["carafe","la carafe",TF("графин","jug")],["couteau","le couteau",TF("нож","knife")],["fourchette","la fourchette",TF("вилка","fork")],["cuillere","la cuillère",TF("ложка","spoon")]])}
<h3>${TF("manger — есть","manger — to eat")}</h3>
${CJS(CJ("manger", TF("есть, кушать","to eat"), ["je mange","tu manges","il / elle / on mange","nous mang<b>e</b>ons","vous mangez","ils / elles mangent"]))}
<p>${TF(`${F("nous mangeons")}: буква e сохраняет мягкое [ʒ], как в ${F("manger")}.`, `${F("nous mangeons")}: the e keeps the soft [ʒ] of ${F("manger")}.`)}</p>
${QC([
[TF("Что такое «l’entrée» в меню?","What is «l’entrée» on a menu?"), TF("Закуска — то, что едят перед основным блюдом.","The starter — what you eat before the main course.")],
[TF("Как попросить счёт?","How do you ask for the bill?"), F("L’addition, s’il vous plaît !")],
[TF("«C’est pas mal» — это похвала или критика?","«C’est pas mal» — praise or criticism?"), TF("Похвала: «неплохо, вполне хорошо».","Praise: «not bad, pretty good».")]
])}
${ERRS([
["Le menu, s’il vous plaît.", "La carte, s’il vous plaît.", TF("Список блюд — la carte; le menu — комплексное меню.","The list of dishes is la carte; le menu is a set menu.")],
["nous mangons", "nous mangeons", TF("e сохраняет мягкое g.","The e keeps the g soft.")],
["Je veux l’addition.", "L’addition, s’il vous plaît.", TF("Просьба — вежливой формулой.","Ask with the polite formula.")]
])}
${PHOTOS(["nicoise","soupe","steakfrites","blanquette","omelette","quiche","magret","croque","mousse","tarte","rizaulait","glace","cafecreme","assiette","verre","carafe","couteau","fourchette","cuillere"])}
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
${KEY([
TF(`Вторая группа — глаголы на <b>-ir</b> с <b>-iss-</b> во множественном числе: ${F("choisir, finir")}.`, `The second group is <b>-ir</b> verbs with <b>-iss-</b> in the plural: ${F("choisir, finir")}.`),
TF(`Окончания: <b>-is, -is, -it, -issons, -issez, -issent</b>.`, `Endings: <b>-is, -is, -it, -issons, -issez, -issent</b>.`),
TF(`На слух je, tu, il звучат одинаково [ʃwazi]; во мн. ч. появляется [s].`, `By ear je, tu, il sound the same [ʃwazi]; the plural adds [s].`)
])}
<h3>${TF("Как спрягать?","How do you conjugate them?")}</h3>
${FX(["chois|"+TF("основа","stem"),"+","!is · is · it|"+TF("ед. ч.","sing."),"·","!issons · issez · issent|"+TF("мн. ч.","pl.")], TF("отбрасываем -ir, добавляем окончания","drop -ir, add the endings"))}
${CJS(
CJ("choisir", TF("выбирать","to choose"), ["je chois<b>is</b>","tu chois<b>is</b>","il / elle / on chois<b>it</b>","nous chois<b>issons</b>","vous chois<b>issez</b>","ils / elles chois<b>issent</b>"]),
CJ("finir", TF("заканчивать","to finish"), ["je fin<b>is</b>","tu fin<b>is</b>","il / elle / on fin<b>it</b>","nous fin<b>issons</b>","vous fin<b>issez</b>","ils / elles fin<b>issent</b>"])
)}
<h3>${TF("Что слышно?","What do you hear?")}</h3>
${SAME(["je choisis","tu choisis","il choisit"], "[ʃwazi]", [["nous choisissons","[ʃwazisɔ̃]"],["ils choisissent","[ʃwazis]"]])}
<p>${TF(`На письме у je и tu одинаково <b>-is</b>, у il — <b>-it</b>. Буква -t не читается, но писать её нужно.`, `In writing je and tu both take <b>-is</b>, and il takes <b>-it</b>. The -t is silent but must be written.`)}</p>
<h3>${TF("В ресторане","At the restaurant")}</h3>
${EX([["Je choisis le plat du jour.", TF("Я выбираю блюдо дня.","I’m choosing the dish of the day.")],["Vous choisissez quel dessert ?", TF("Какой десерт вы выбираете?","Which dessert are you choosing?")],["Tu ne finis pas ton assiette ?", TF("Ты не доедаешь?","Aren’t you finishing your plate?")],["Ils finissent leur jus.", TF("Они допивают сок.","They’re finishing their juice.")]])}
${WARN(TF(`Не все глаголы на -ir такие: ${F("partir, sortir, dormir")} спрягаются иначе (их учат позже).`, `Not all -ir verbs work like this: ${F("partir, sortir, dormir")} are conjugated differently (you’ll learn them later).`))}
${QC([
[TF("«Мы выбираем» — как будет?","«We choose» — how do you say it?"), F("nous choisissons")],
[TF("Какая буква на конце у «il finit»?","What letter ends «il finit»?"), TF("-t (не читается).","-t (silent).")],
[TF("«Они заканчивают» — как будет?","«They finish» — how do you say it?"), F("ils finissent")]
])}
${ERRS([
["il choisis", "il choisit", TF("У il — окончание -it.","il takes -it.")],
["nous choisons", "nous choisissons", TF("Во мн. ч. нужно -iss-.","The plural needs -iss-.")],
["ils finisent", "ils finissent", TF("Две s: -issent.","Double s: -issent.")]
])}
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
${KEY([
TF(`[i] — губы в улыбке, [y] и [u] — губы трубочкой.`, `[i] — spread lips, [y] and [u] — rounded lips.`),
TF(`Буква ${F("u")} читается [y], сочетание ${F("ou")} — [u].`, `The letter ${F("u")} is read [y], the pair ${F("ou")} — [u].`),
TF(`Голос вверх ↗ — вопрос, вниз ↘ — утверждение.`, `Voice up ↗ — a question, down ↘ — a statement.`)
])}
<h3>${TF("Три гласных — три положения губ","Three vowels — three lip positions")}</h3>
${BIGC([["[i]", TF("губы растянуты, как в улыбке","lips spread, as in a smile"), "dix, midi, la liste", "m"],["[y]", TF("губы трубочкой, язык — как для [i]","lips rounded, tongue as for [i]"), "tu, du, légumes", "f"],["[u]", TF("губы трубочкой, язык назад","lips rounded, tongue pulled back"), "vous, douze, courses", "p"]])}
${CMP2(`[y] — как «ю» без «й» в начале: скажи «и» и, не двигая языком, вытяни губы трубочкой.`, ``, `Say «ee» and round your lips as for «oo» without moving your tongue.`)}
${TBL([TF("Звук","Sound"), TF("Пишется","Spelt"), TF("Примеры","Examples")],[["[i]", "i, y, î", F("lundi, midi, liste, stylo")],["[y]", "u, û", F("tu, du, légumes, menu")],["[u]", "ou, où, oû", F("vous, douze, beaucoup, soupe")]])}
<h3>${TF("Послушай пары: [y] или [u]?","Listen to the pairs: [y] or [u]?")}</h3>
<p>${TF("Нажми на слово, чтобы услышать. В каждой паре слова различаются только этим звуком.", "Tap a word to hear it. The words in each pair differ only in this sound.")}</p>
${TBL(["[y] · u", "[u] · ou", TF("Значение","Meaning")],[[F("du"), F("doux"), TF("немного · мягкий","some · soft")],[F("tu"), F("tout"), TF("ты · всё","you · all")],[F("vu"), F("vous"), TF("увиденный · вы","seen · you")],[F("lu"), F("loup"), TF("прочитанный · волк","read · wolf")]])}
<h3>${TF("Вопрос или утверждение?","Question or statement?")}</h3>
${EX([["Tu es d’accord ? ↗", TF("вопрос без вопросительного слова — только интонация","a question with no question word — intonation only")],["On mange. ↘", TF("утверждение","statement")],["De la viande ↗ ou du poisson ? ↘", TF("в выборе «или» голос сначала вверх, потом вниз","in an «or» choice the voice goes up, then down")]])}
${QC([
[TF("Как пишется звук [u]?","How is the sound [u] spelt?"), TF(`Сочетанием ${F("ou")}: ${F("vous, douze")}.`, `With ${F("ou")}: ${F("vous, douze")}.`)],
[TF("Какой звук в слове «menu»?","Which sound is in «menu»?"), TF("[y]: буква u.","[y]: the letter u.")],
[TF("«On mange ?» с голосом вверх — это…","«On mange ?» with a rising voice is…"), TF("вопрос","a question")]
])}
${ERRS([
["tu [tu]", "tu [ty]", TF("Буква u — всегда [y].","The letter u is always [y].")],
["vous [vy]", "vous [vu]", TF("ou — это [u].","ou is [u].")]
])}
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
