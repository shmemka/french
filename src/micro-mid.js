/* =========================================================
   Микроэкономика — Mid-Term Test (Weeks 1–8), 51 вопрос.
   Вопросы — как в тесте (по-английски), разложены по 10 темам в 4 частях.
   У каждого вопроса — объяснение (e), у задания — общее правило (w), у сопоставлений — разбор (tt).
   Числовые ответы проверяются с допуском (microJudge в micro.js).
   ========================================================= */
const MI_PARTS = [
  {n:"1", t:"Основы", en:"Foundations"},
  {n:"2", t:"Рынок: спрос, предложение, благосостояние", en:"Markets"},
  {n:"3", t:"Фирма: производство и издержки", en:"The firm"},
  {n:"4", t:"Рыночные структуры", en:"Market structures"}
];
const MIF = (s, cls) => `<span class="mi-f${cls ? " " + cls : ""}">${s}</span>`;   /* формула */

const MI_TOPICS = [
/* ---------------------------------------------------------------- 1 */
{id:"mi-basics", unit:"1", kind:"Basics", title:"Что изучает экономика", ru:"Ограниченность, альтернативная стоимость, факторы производства, рынок и государство",
theory:`
${LEAD("Экономика начинается с <b>ограниченности</b> (scarcity): ресурсов меньше, чем желаний. Поэтому любой выбор чего-то стоит — это и есть <b>альтернативная стоимость</b> (opportunity cost).")}
${SEC("Главные понятия")}
${PAIRS(["Термин", "Что значит"], [
  ["<b>Scarcity</b> — ограниченность", "ресурсы ограничены относительно потребностей → приходится выбирать"],
  ["<b>Opportunity cost</b> — альтернативная стоимость", "ценность <i>лучшей</i> из отвергнутых альтернатив"],
  ["<b>Microeconomics</b>", "отдельные рынки, потребители и фирмы"],
  ["<b>Positive</b> economics", "что есть или что будет — можно проверить фактами"],
  ["<b>Normative</b> economics", "что <i>должно</i> быть — оценки, «следует», «справедливо»"]])}
${SEC("Факторы производства")}
${PAIRS(["Фактор", "Пример"], [["Land — земля, природные ресурсы", "участок, нефть, вода"], ["Labor — труд", "время и усилия работников"], ["<b>Capital</b> — капитал", "созданные человеком средства производства: станки, здания, оборудование"], ["Entrepreneurship", "организация производства и риск"]])}
${ASIDE("Деньги в экономической теории — не «капитал», а средство обмена. Капитал — это то, <b>чем</b> производят (станок), а не то, на что покупают.")}
${SEC("Кто координирует экономику")}
${CHOOSE([
  {lab:"Рынок", key:"цены", plain:true, acc:true, ex:["цены сигнализируют, что нужно", "прибыль привлекает ресурсы", "доходы от факторов решают, «для кого»"]},
  {lab:"Государство вмешивается, когда", key:"провалы рынка", plain:true, ex:["общественные блага (оборона)", "внешние эффекты (загрязнение)", "рыночная власть (монополия)", "справедливость (перераспределение)"]}])}`,
ex:[
{t:"match", h:"Основные понятия — сопоставь термин и описание", w:["Положительная экономика описывает и предсказывает (можно проверить), нормативная — оценивает, «как должно быть». Альтернативная стоимость — лучшая из упущенных возможностей, а не все сразу.", ""],
 tt:["<b>Opportunity cost</b> — ценность лучшей отвергнутой альтернативы. <b>Microeconomics</b> — отдельные рынки, потребители, фирмы (макро — экономика в целом). <b>Normative</b> — оценочные суждения: «налоги <i>следует</i> снизить». <b>Positive</b> — утверждения о фактах: «если налог вырастет, продажи упадут» — это можно проверить.", ""],
 pairs:[["Opportunity cost", "Value of the best alternative forgone"], ["Microeconomics", "Study of individual markets, consumers, and firms"], ["Normative economics", "Analysis involving value judgments about what ought to be"], ["Positive economics", "Analysis of what is or what will happen"]]},
{t:"mc", h:"Ограниченность, капитал, координация", w:["Ограниченность есть всегда и везде; капитал — созданные средства производства; в рыночной экономике выбор координируют цены.", ""], items:[
 {q:"Which statement best captures the economic meaning of scarcity?", o:["Scarcity means that resources are limited relative to human wants, so choices have opportunity costs.", "Scarcity means that all goods are rare in nature.", "Scarcity disappears when markets are perfectly competitive.", "Scarcity exists only in low-income economies."], a:0,
  e:"Ограниченность — это соотношение: ресурсов меньше, чем желаний. Поэтому у каждого выбора есть альтернативная стоимость. Она есть и в богатых странах, и на конкурентных рынках; «редкость в природе» — другое (вода не редкая, но тоже ограничена)."},
 {q:"Which item is an example of capital in the economic sense?", o:["A machine used to manufacture components", "A consumer's preference for coffee", "A worker's leisure time", "A firm's current selling price"], a:0,
  e:"Капитал — созданные человеком средства, которые используются для производства других благ: станок, здание, оборудование. Предпочтения — это спрос, свободное время — не фактор производства, цена — рыночный сигнал."},
 {q:"In a modern market economy, which mechanism primarily coordinates what is produced, how it is produced, and for whom it is produced?", o:["Prices, profits, factor incomes, and decentralized exchange", "A single national production plan", "Equal physical quantities for all consumers", "Random allocation of resources"], a:0,
  e:"Три главных вопроса (что, как, для кого) рынок решает через цены: высокая цена сигнализирует о дефиците, прибыль притягивает ресурсы в эту отрасль, а доходы от факторов (зарплата, рента, процент) определяют, кто сколько может купить. Единый план — это командная экономика."}]},
{t:"tf", h:"Деньги и специализация", w:["Деньги — средство обмена: они убирают необходимость искать партнёра для бартера.", ""], items:[
 {q:"Money facilitates specialization because it reduces the need for direct barter between people who want what the other person offers.", a:true,
  e:"При бартере нужно «двойное совпадение желаний»: найти того, у кого есть то, что тебе нужно, и кому нужно то, что есть у тебя. С деньгами каждый продаёт свой товар за деньги и покупает что угодно — поэтому выгодно специализироваться."}]},
{t:"match", h:"Зачем вмешивается государство — сопоставь проблему и причину", w:["Провалы рынка: общественные блага, внешние эффекты, рыночная власть. Плюс цель справедливости — она нормативная, не про эффективность.", ""],
 tt:["<b>National defense → Public good</b>: оборону нельзя «продать» отдельно — неплательщика не исключишь (non-excludable), и одному она не мешает защищать другого (non-rival). Рынок её недопроизведёт из-за «безбилетников». <b>Pollution → Externality</b>: часть издержек несут третьи лица, а в цене они не учтены. <b>Redistribution → Equity</b>: перераспределение — про справедливость, это нормативная цель. <b>Dominant seller → Imperfect competition</b>: монополист ставит цену выше MC и выпускает меньше эффективного.", ""],
 pairs:[["National defense", "Public good"], ["Pollution from a factory", "Externality"], ["Redistribution toward low-income households", "Equity objective"], ["A single dominant seller with market power", "Imperfect competition"]]}]},

/* ---------------------------------------------------------------- 2 */
{id:"mi-ppf", unit:"1", kind:"PPF", title:"Кривая производственных возможностей", ru:"Точки на кривой, внутри и снаружи; сдвиги; наклон как альтернативная стоимость",
theory:`
${LEAD("КПВ (production-possibility frontier) показывает все <b>максимальные</b> комбинации двух благ при данных ресурсах и технологии.")}
${SEC("Где точка")}
${CHOOSE([
  {lab:"На кривой", key:"эффективно", plain:true, acc:true, ex:["больше одного — только за счёт другого"]},
  {lab:"Внутри", key:"неэффективно", plain:true, ex:["безработица, простаивающие ресурсы", "можно больше обоих"]},
  {lab:"Снаружи", key:"недостижимо", plain:true, ex:["пока не вырастут ресурсы или технологии"]}])}
${SEC("Движение и сдвиг")}
${PAIRS(["Что происходит", "Как это на графике"], [["переход от безработицы к полной занятости", "движение <b>к</b> кривой изнутри"], ["производим больше X и меньше Y", "движение <b>вдоль</b> кривой"], ["новые технологии, больше ресурсов", "сдвиг кривой <b>наружу</b>"]])}
${SEC("Наклон = альтернативная стоимость")}
${KCAP(`Наклон ${MIF("dY/dX")} показывает, сколько Y приходится отдать за ещё одну единицу X. Кривая выпуклая наружу → альтернативная стоимость растёт: ресурсы не одинаково хороши для обоих благ.`)}`,
ex:[
{t:"tf", h:"Точка внутри границы", w:["Внутри КПВ ресурсы используются не полностью или неэффективно.", ""], items:[
 {q:"With given resources and technology, a production point strictly inside the production-possibility frontier indicates productive inefficiency or unemployed resources.", a:true,
  e:"Изнутри можно увеличить выпуск одного блага, не уменьшая другого — значит, какие-то ресурсы простаивают (безработица) или используются неэффективно. На самой кривой так уже нельзя."}]},
{t:"mc", h:"Что сдвигает КПВ", w:["Наружу кривую сдвигает только рост ресурсов или технологий.", ""], items:[
 {q:"Which change is most likely to shift an economy's production-possibility frontier outward?", o:["A technological improvement that raises productivity", "A temporary recession that leaves resources unemployed", "A movement from an inefficient point to a point on the existing frontier", "A reallocation of production from one good to another along the existing frontier"], a:0,
  e:"Технологии позволяют произвести больше из тех же ресурсов — граница возможностей расширяется. Рецессия — точка уходит внутрь, кривая на месте. Переход к кривой и перераспределение вдоль неё — это движения, а не сдвиг."}]},
{t:"fill", h:"Наклон КПВ", w:["Наклон КПВ — производная dY/dX. Её модуль — альтернативная стоимость единицы X.", ""], items:[
 {q:"A smooth production-possibility frontier is Y = 100 - 0.5X^2. Calculate dY/dX at X = 6.", a:["-6"],
  e:"dY/dX = −0,5·2X = −X. При X = 6: <b>−6</b>. Смысл: ещё одна единица X обходится примерно в 6 единиц Y. Чем больше X, тем круче наклон — альтернативная стоимость растёт."}]}]},

/* ---------------------------------------------------------------- 3 */
{id:"mi-sd", unit:"2", kind:"Supply & demand", title:"Спрос и предложение", ru:"Движение и сдвиг кривых, факторы спроса и предложения, равновесие, дефицит и излишек",
theory:`
${LEAD("Главный вопрос: изменилась <b>цена самого товара</b> (движение вдоль кривой) или <b>что-то другое</b> (сдвиг всей кривой)?")}
${SEC("Движение или сдвиг")}
${CHOOSE([
  {lab:"Изменилась цена этого товара", key:"движение вдоль", plain:true, acc:true, ex:["change in quantity demanded / supplied"]},
  {lab:"Изменилось что-то ещё", key:"сдвиг кривой", plain:true, ex:["change in demand / supply"]}])}
${SEC("Что сдвигает спрос")}
${PAIRS(["Фактор", "Куда сдвигается спрос"], [
  ["доход растёт, <b>normal good</b>", "вправо"], ["доход растёт, <b>inferior good</b>", "влево"],
  ["цена <b>substitute</b> (заменителя) падает", "влево — покупатели уходят к заменителю"], ["цена <b>complement</b> (дополнения) падает", "вправо"],
  ["вкусы, ожидания, число покупателей", "по смыслу"]])}
${SEC("Что сдвигает предложение")}
${PAIRS(["Фактор", "Куда сдвигается предложение"], [["ресурсы (inputs) дешевеют", "вправо"], ["технологии улучшаются", "вправо"], ["больше продавцов", "вправо"], ["налог на производителей", "влево"]])}
${SEC("Равновесие")}
${MERGE([{f:["~Qd", "=", "~Qs"], r:"~равновесие P*, Q*", hl:true, ex:"решаем систему уравнений"}, {f:["~Qd", "−", "~Qs", "> 0"], r:"~дефицит (shortage)", ex:"цена ниже равновесной"}, {f:["~Qs", "−", "~Qd", "> 0"], r:"~излишек (surplus)", ex:"цена выше равновесной"}])}
${ASIDE("Потолок цены (price ceiling) ниже равновесия → <b>дефицит</b>. Пол цены (price floor) выше равновесия → <b>излишек</b>. Кривые при этом не сдвигаются.")}`,
ex:[
{t:"tf", h:"Движение или сдвиг", w:["Своя цена — движение вдоль кривой; всё остальное — сдвиг.", ""], items:[
 {q:"A change in a good's own price, with other demand determinants unchanged, causes a movement along the demand curve rather than a shift of the demand curve.", a:true,
  e:"Цена товара стоит на оси графика, поэтому её изменение — это переход в другую точку той же кривой (меняется величина спроса). Кривая сдвигается, только когда меняются другие факторы: доход, цены других товаров, вкусы, ожидания."}]},
{t:"match", h:"Связи между товарами и доходом — сопоставь", w:["Заменители: дороже один → больше спрос на другой. Дополнения: дороже один → меньше спрос на другой. Нормальный товар — спрос растёт с доходом, низший — падает.", ""],
 tt:["<b>Complements</b> (кофе и сахар): кофе подорожал → кофе пьют меньше → и сахара нужно меньше. <b>Substitutes</b> (чай и кофе): кофе подорожал → переходят на чай. <b>Normal good</b> — с ростом дохода покупают больше. <b>Inferior good</b> (дешёвая лапша) — с ростом дохода заменяют на лучшее.", ""],
 pairs:[["Complements", "A higher price of one tends to reduce demand for the other"], ["Normal good", "Demand tends to rise when income rises"], ["Inferior good", "Demand tends to fall when income rises"], ["Substitutes", "A higher price of one tends to increase demand for the other"]]},
{t:"match", h:"Какую кривую сдвигает — сопоставь", w:["Факторы со стороны покупателей двигают спрос, со стороны производства — предложение.", ""],
 tt:["<b>Дешевле ресурс</b> → производить дешевле → при каждой цене предлагают больше: предложение вправо. <b>Заменитель подешевел</b> → часть покупателей уходит к нему: спрос влево. <b>Доход вырос (normal good)</b> → спрос вправо. <b>Технологии лучше</b> → ниже издержки: предложение вправо.", ""],
 pairs:[["Lower price of a major production input", "Supply shifts right"], ["Fall in the price of a substitute good", "Demand shifts left"], ["Higher consumer income for a normal good", "Demand shifts right"], ["Improved production technology", "Supply shifts right"]]},
{t:"mc", h:"Сдвиг спроса и регулирование цен", w:["Спрос вправо → цена и количество растут. Потолок цены ниже равновесия → дефицит.", ""], items:[
 {q:"Holding supply constant, a rightward shift of the demand curve normally causes:", o:["A higher equilibrium price and higher equilibrium quantity", "No change in market equilibrium", "A lower equilibrium price and lower equilibrium quantity", "A higher equilibrium price and lower equilibrium quantity"], a:0,
  e:"При старой цене покупатели хотят больше, чем продают, — возникает дефицит, и цена растёт. Продавцы двигаются вверх по кривой предложения и продают больше. Итог: выше и цена, и количество."},
 {q:"A binding price ceiling set below the competitive equilibrium price will create:", o:["A shortage", "A surplus", "An outward shift of demand", "An outward shift of supply"], a:0,
  e:"При цене ниже равновесной покупатели хотят больше (Qd растёт), а продавцы предлагают меньше (Qs падает): Qd > Qs — дефицит. Кривые не сдвигаются, меняется только точка на них. Излишек создаёт пол цены выше равновесия."}]},
{t:"fill", h:"Равновесие на числах", w:["Равновесие: приравняй Qd и Qs. Дефицит = Qd − Qs при заданной цене.", ""], items:[
 {q:"Market demand is Qd = 120 - 2P and market supply is Qs = 20 + 3P. Find the equilibrium price P.", a:["20"],
  e:"120 − 2P = 20 + 3P → 100 = 5P → <b>P = 20</b>. Количество: Q = 120 − 40 = 80."},
 {q:"For Qd = 120 - 2P and Qs = 20 + 3P, calculate the shortage (Qd - Qs) when P = 15.", a:["25"],
  e:"Qd = 120 − 30 = 90, Qs = 20 + 45 = 65. Дефицит = 90 − 65 = <b>25</b>. Цена 15 ниже равновесной (20), поэтому спрос больше предложения."},
 {q:"What is the standard market term for a situation in which quantity supplied exceeds quantity demanded at the current price?", a:["surplus", "a surplus", "excess supply", "market surplus", "излишек"],
  e:"Qs > Qd — <b>surplus</b> (excess supply, излишек): продавцы не могут продать всё, и цена снижается к равновесию. Обратная ситуация, Qd > Qs, — shortage (дефицит)."}]}]},

/* ---------------------------------------------------------------- 4 */
{id:"mi-elast", unit:"2", kind:"Elasticity", title:"Эластичность", ru:"Эластичность спроса и предложения, формула средней точки, выручка",
theory:`
${LEAD("Эластичность — на сколько <b>процентов</b> меняется количество, когда цена меняется на 1 %.")}
${SEC("Формулы")}
${MERGE([{f:["~E", "="], r:"~%ΔQ / %ΔP", hl:true, ex:"простая формула"}, {f:["~midpoint:"], r:"~(ΔQ / Q̄) / (ΔP / P̄)", ex:"Q̄ и P̄ — средние между старым и новым значением"}])}
${SEC("Классификация")}
${PAIRS(["|E|", "Название", "Что значит"], [["> 1", "relatively <b>elastic</b>", "количество реагирует сильнее цены"], ["= 1", "<b>unit</b>-elastic", "в той же пропорции"], ["< 1", "relatively <b>inelastic</b>", "количество реагирует слабо"], ["= 0", "perfectly inelastic", "не реагирует вообще — вертикальная кривая"]])}
${SEC("Эластичность и выручка (TR = P·Q)")}
${CHOOSE([{lab:"Спрос неэластичен", key:"P↑ → TR↑", plain:true, acc:true, ex:["количество падает меньше, чем растёт цена"]}, {lab:"Спрос эластичен", key:"P↑ → TR↓", plain:true, ex:["покупатели сильно сокращают покупки"]}, {lab:"Единичная", key:"TR макс.", plain:true, ex:["MR = 0"]}])}`,
ex:[
{t:"match", h:"Типы эластичности — сопоставь", w:["Сравнивай модуль эластичности с единицей.", ""],
 tt:["|Ed| = 1 — <b>unit-elastic</b>: количество меняется в той же пропорции, что и цена. |Ed| < 1 — <b>inelastic</b>: реакция слабая (хлеб, лекарства). |Ed| > 1 — <b>elastic</b>: реакция сильная (товары с заменителями). Предложение, которое не реагирует на цену, — <b>perfectly inelastic</b> (вертикальная кривая, например билеты на конкретный концерт).", ""],
 pairs:[["|Ed| = 1", "Unit-elastic demand"], ["|Ed| < 1", "Relatively inelastic demand"], ["Quantity supplied does not respond to price", "Perfectly inelastic supply"], ["|Ed| > 1", "Relatively elastic demand"]]},
{t:"fill", h:"Считаем эластичность", w:["E = %ΔQ / %ΔP. По формуле средней точки проценты считают от средних значений.", ""], items:[
 {q:"A product's price rises by 20 percent and quantity supplied rises by 30 percent. Calculate the price elasticity of supply.", a:["1.5"],
  e:"Es = %ΔQs / %ΔP = 30 / 20 = <b>1,5</b>. Больше 1 — предложение эластично."},
 {q:"Price rises from 10 to 12 while quantity demanded falls from 100 to 80. Using the midpoint formula, calculate the absolute value of the price elasticity of demand.", a:["1.2222"],
  e:"%ΔQ = −20 / 90 = −22,2 % (90 — среднее между 100 и 80). %ΔP = 2 / 11 = 18,2 % (11 — среднее между 10 и 12). |Ed| = 22,2 / 18,2 = 11/9 ≈ <b>1,22</b>. Больше 1 — спрос эластичен."}]},
{t:"mc", h:"Эластичность и выручка", w:["При неэластичном спросе рост цены увеличивает выручку, при эластичном — уменьшает.", ""], items:[
 {q:"If demand is price inelastic over the relevant range, an increase in price will normally:", o:["Increase total revenue", "Decrease total revenue", "Make marginal revenue exactly zero", "Leave total revenue unchanged"], a:0,
  e:"TR = P·Q. При |Ed| < 1 количество падает в процентах меньше, чем растёт цена, — выручка растёт. Пример: цена +10 %, количество −4 % → TR ≈ +6 %. MR = 0 и неизменная выручка — это единичная эластичность."}]}]},

/* ---------------------------------------------------------------- 5 */
{id:"mi-utility", unit:"2", kind:"Consumer choice", title:"Полезность и выбор потребителя", ru:"Общая и предельная полезность, убывающая предельная полезность, правило равной отдачи",
theory:`
${LEAD("Потребитель распределяет бюджет так, чтобы <b>последний рубль</b> на каждый товар приносил одинаковую полезность.")}
${SEC("Общая и предельная полезность")}
${PAIRS(["Понятие", "Что это"], [["TU — total utility", "вся полезность от количества x"], ["MU — marginal utility", "прибавка полезности от ещё одной единицы: MU = dU/dx"]])}
${ASIDE("Убывающая MU не значит, что TU падает. Пока MU > 0, общая полезность <b>растёт</b>, просто всё медленнее. TU падает, только когда MU < 0.")}
${SEC("Правило равной отдачи (equimarginal principle)")}
${MERGE([{f:["~MUx / Px", "="], r:"~MUy / Py", hl:true, ex:"полезность на 1 рубль одинакова для всех благ"}])}
${KCAP("Если MUx/Px > MUy/Py, выгодно перекладывать деньги в X: каждый рубль там приносит больше. По мере покупки X его MU падает, и отношения выравниваются.")}`,
ex:[
{t:"tf", h:"Убывающая предельная полезность", w:["Убывает предельная полезность, а общая растёт, пока MU > 0.", ""], items:[
 {q:"The law of diminishing marginal utility means that total utility must fall whenever consumption of a good increases.", a:false,
  e:"Неверно. Закон говорит, что каждая <i>следующая</i> единица приносит меньше дополнительной полезности: первый кусок пиццы — 10, второй — 7, третий — 4. Но общая полезность всё равно растёт (10 → 17 → 21). Она падает, только если MU становится отрицательной."}]},
{t:"mc", h:"Равновесие потребителя", w:["Условие оптимума: MUx/Px = MUy/Py.", ""], items:[
 {q:"For an interior utility-maximizing allocation across two goods X and Y, the equimarginal principle requires:", o:["MUx/Px = MUy/Py", "Px = Py", "MUx = MUy", "Total utility from X equals total utility from Y"], a:0,
  e:"Важна полезность <i>на рубль</i>, а не сама полезность. Если X стоит вдвое дороже, его MU должна быть вдвое больше. Равенство MUx = MUy верно только при равных ценах."}]},
{t:"fill", h:"Предельная полезность — производная", w:["MU = dU/dx.", ""], items:[
 {q:"Utility from a good is U(x) = 10*sqrt(x). Calculate marginal utility dU/dx at x = 25.", a:["1"],
  e:"U = 10·x^0,5 → dU/dx = 5·x^(−0,5) = 5 / √x. При x = 25: 5 / 5 = <b>1</b>. С ростом x MU падает — убывающая предельная полезность."}]}]},

/* ---------------------------------------------------------------- 6 */
{id:"mi-surplus", unit:"2", kind:"Welfare", title:"Излишки и потери благосостояния", ru:"Излишек потребителя и производителя, чистые потери (deadweight loss)",
theory:`
${LEAD("Излишек — выгода сверх цены. Потери (deadweight loss) — излишек, который исчезает, когда рынок производит меньше эффективного.")}
${SEC("Где на графике")}
${PAIRS(["Излишек", "Площадь", "Формула для прямых"], [["<b>Consumer surplus</b>", "под спросом, над ценой", "½ · Q · (P<sub>max</sub> − P)"], ["<b>Producer surplus</b>", "над предложением (MC), под ценой", "площадь трапеции/треугольника"], ["<b>Deadweight loss</b>", "треугольник между спросом и MC от Q<sub>монополии</sub> до Q<sub>конкуренции</sub>", "½ · ΔQ · (P<sub>m</sub> − MC)"]])}
${ASIDE("Монополия поднимает цену: часть излишка потребителей переходит производителю, а часть (DWL) не достаётся никому.")}`,
ex:[
{t:"fill", h:"Считаем излишки", w:["CS — треугольник под спросом над ценой; DWL — треугольник между спросом и MC.", ""], items:[
 {q:"A market has inverse demand P = 50 - Q. If the market price is 20, calculate consumer surplus.", a:["450"],
  e:"При P = 20: Q = 50 − 20 = 30. Треугольник: высота 50 − 20 = 30 (от цены до точки пересечения спроса с осью), основание 30. CS = ½ · 30 · 30 = <b>450</b>."},
 {q:"Demand is P = 100 - Q and marginal cost is constant at MC = 20. A single-price monopolist chooses Qm = 40 and Pm = 60, while the competitive benchmark is Qc = 80 and Pc = 20. Calculate the deadweight loss.", a:["800"],
  e:"DWL — треугольник между спросом и MC от Q = 40 до Q = 80. Основание: 80 − 40 = 40. Высота: 60 − 20 = 40 (цена монополиста минус MC). DWL = ½ · 40 · 40 = <b>800</b>."}]},
{t:"fill", h:"Излишек производителя на графике", fig:"B", w:["Под монополией цена P<sub>M</sub>, продают Q<sub>M</sub>. Излишек производителя — между ценой P<sub>M</sub> и кривой предложения, левее Q<sub>M</sub>.", ""], items:[
 {q:"Identify producer's surplus under monopoly - answer by putting the numbers together from least to greatest - e.g. 10,11,12,14", a:["3,4,5,6,7"],
  e:"При конкуренции: цена P<sub>PC</sub>, излишек потребителей — 9, 8, 5, 4, 1; производителей — 6, 3, 2, 7. Монополист выпускает Q<sub>M</sub> и ставит P<sub>M</sub>: площади 5 и 4 переходят от потребителей к нему, а 1 и 2 пропадают (это DWL). Итог: излишек производителя = <b>3, 4, 5, 6, 7</b>; потребителей — 8, 9."}]}]},

/* ---------------------------------------------------------------- 7 */
{id:"mi-prod", unit:"3", kind:"Production", title:"Производство", ru:"Краткий и долгий период, средний и предельный продукт, убывающая отдача, отдача от масштаба",
theory:`
${LEAD("Производственная функция Q(K, L) — сколько можно выпустить из данных ресурсов при данной технологии.")}
${SEC("Периоды")}
${CHOOSE([{lab:"Short run", key:"хотя бы 1 фактор фиксирован", plain:true, acc:true, ex:["обычно капитал K"]}, {lab:"Long run", key:"все факторы меняются", plain:true, ex:["можно построить новый завод"]}])}
${SEC("Средний и предельный продукт")}
${MERGE([{f:["~AP_L", "="], r:"~Q / L", ex:"выпуск на одного работника"}, {f:["~MP_L", "="], r:"~dQ / dL", hl:true, ex:"прибавка выпуска от ещё одного работника"}])}
${SEC("Две разные «отдачи»")}
${PAIRS(["", "Diminishing marginal returns", "Returns to scale"], [["период", "краткосрочный", "долгосрочный"], ["что растёт", "один фактор, другие фиксированы", "все факторы в одной пропорции"], ["что смотрим", "падает ли MP", "во сколько раз растёт Q"]])}
${KCAP("Для Q = A·K^a·L^b: a + b = 1 — постоянная отдача (CRS), > 1 — возрастающая, < 1 — убывающая.")}
${SEC("Инновации")}
${PAIRS(["Вид", "Пример"], [["Product innovation", "новый или заметно улучшенный продукт"], ["Process innovation", "новый способ производить старый продукт"]])}`,
ex:[
{t:"match", h:"Понятия производства — сопоставь", w:["Короткий период — что-то зафиксировано; длинный — всё можно менять. Продуктовая инновация — новый товар, процессная — новый способ.", ""],
 tt:["<b>Short run</b>: хотя бы один важный фактор (обычно здания и оборудование) нельзя быстро изменить. <b>Long run</b>: меняются все факторы. <b>Product innovation</b> — новый или улучшенный продукт (новый смартфон). <b>Process innovation</b> — новый метод производства того же продукта (конвейер).", ""],
 pairs:[["Product innovation", "A new or substantially improved product"], ["Short run", "At least one important input is fixed"], ["Long run", "All inputs can be adjusted"], ["Process innovation", "A new method of producing an existing product"]]},
{t:"tf", h:"Технологии и функция производства", w:["Технологический прогресс: больше выпуска из тех же ресурсов.", ""], items:[
 {q:"If improved technology allows more output from the same quantities of inputs, the production function shifts upward.", a:true,
  e:"При тех же K и L выпуск теперь больше — вся кривая Q(L) поднимается. Это та же причина, по которой КПВ сдвигается наружу."}]},
{t:"mc", h:"Закон убывающей отдачи", w:["Краткосрочный закон: растёт один фактор при фиксированных остальных → MP со временем падает.", ""], items:[
 {q:"The law of diminishing marginal returns refers to a situation in which:", o:["One variable input is increased while other relevant inputs are fixed, and its marginal product eventually falls", "Total product must immediately fall when labor increases", "All inputs are increased proportionally and output rises less than proportionally", "Technology deteriorates every period"], a:0,
  e:"Пример: на кухню с одной плитой добавляют поваров. Второй помогает сильно, пятый — меньше, десятый мешает: MP падает. Общий выпуск при этом сначала продолжает расти. Вариант про пропорциональный рост всех факторов — это убывающая отдача <i>от масштаба</i>, долгосрочное понятие."}]},
{t:"fill", h:"Средний и предельный продукт, отдача от масштаба", w:["AP = Q/L, MP = dQ/dL. Отдача от масштаба — что происходит с Q, если все факторы умножить на одно число.", ""], items:[
 {q:"A firm uses 4 units of labor and produces total product of 120 units. Calculate average product of labor.", a:["30"],
  e:"AP<sub>L</sub> = Q / L = 120 / 4 = <b>30</b> единиц на работника."},
 {q:"A short-run production function is Q(L) = 20L + 3L^2 - 0.2L^3. Calculate the marginal product of labor dQ/dL at L = 5.", a:["35"],
  e:"MP = dQ/dL = 20 + 6L − 0,6L². При L = 5: 20 + 30 − 0,6 · 25 = 20 + 30 − 15 = <b>35</b>."},
 {q:"A production function is Q = K^0.5 * L^0.5. If both K and L are doubled, output doubles. What type of returns to scale does this represent?", a:["constant returns to scale", "constant returns", "constant", "CRS", "постоянная отдача от масштаба", "постоянная"],
  e:"Q(2K, 2L) = (2K)^0,5 · (2L)^0,5 = 2 · K^0,5 · L^0,5 — выпуск растёт ровно вдвое: <b>constant returns to scale</b> (CRS). Быстрая проверка: 0,5 + 0,5 = 1."}]}]},

/* ---------------------------------------------------------------- 8 */
{id:"mi-cost", unit:"3", kind:"Costs", title:"Издержки и прибыль", ru:"Явные и неявные издержки, экономическая прибыль, средние и предельные издержки",
theory:`
${LEAD("Экономист считает <b>все</b> издержки, включая упущенные возможности. Поэтому экономическая прибыль меньше бухгалтерской.")}
${SEC("Виды издержек")}
${PAIRS(["Термин", "Что это", "Пример"], [["<b>Explicit cost</b>", "прямые денежные платежи", "зарплата, аренда, сырьё"], ["<b>Implicit cost</b>", "альтернативная стоимость своих ресурсов без платежа", "своё время, своё помещение"], ["<b>Depreciation</b>", "распределение стоимости актива по периодам", "станок за 1 млн на 10 лет"]])}
${SEC("Прибыль")}
${MERGE([{f:["~TR", "−", "~explicit"], r:"~бухгалтерская прибыль"}, {f:["~TR", "−", "~explicit", "−", "~implicit"], r:"~экономическая прибыль", hl:true}])}
${SEC("Функции издержек")}
${PAIRS(["Формула", "Смысл"], [["TC = FC + VC", "постоянные не зависят от Q"], ["AC = TC / Q", "издержки на единицу"], ["MC = dTC / dQ", "издержки ещё одной единицы"]])}
${ASIDE("MC < AC → AC падает; MC > AC → AC растёт. Поэтому MC пересекает AC в его минимуме. Как средняя оценка: если новая оценка ниже средней, средняя падает.", "info")}`,
ex:[
{t:"match", h:"Виды издержек — сопоставь", w:["Явные — платёж; неявные — упущенная выгода от своих ресурсов; амортизация — распределение стоимости актива во времени.", ""],
 tt:["<b>Depreciation</b> — стоимость станка «размазывается» по годам службы. <b>Implicit cost</b> — например, зарплата, которую владелец мог бы получать в найме, или аренда своего помещения: денег не платят, но выгоду теряют. <b>Explicit cost</b> — реальные платежи (зарплата, аренда). <b>Opportunity cost</b> — ценность лучшей отвергнутой альтернативы.", ""],
 pairs:[["Depreciation", "Allocation of a capital asset's cost over accounting periods"], ["Implicit cost", "Opportunity cost of owner-supplied resources without a direct payment"], ["Explicit cost", "Direct monetary payment recorded by the firm"], ["Opportunity cost", "Value of the best alternative forgone"]]},
{t:"fill", h:"Прибыль и издержки на числах", w:["Экономическая прибыль = TR − явные − неявные. AC = TC/Q, MC = dTC/dQ.", ""], items:[
 {q:"A business has total revenue of 200000, explicit costs of 120000, and implicit opportunity costs of 50000. Calculate economic profit.", a:["30000"],
  e:"Экономическая прибыль = 200 000 − 120 000 − 50 000 = <b>30 000</b>. Бухгалтерская была бы 80 000 — она не учитывает неявные издержки."},
 {q:"For TC(Q) = 500 + 20Q + Q^2, calculate average cost at Q = 10.", a:["80"],
  e:"TC(10) = 500 + 200 + 100 = 800. AC = 800 / 10 = <b>80</b>. Или по частям: AC = 500/Q + 20 + Q = 50 + 20 + 10."},
 {q:"A firm's total cost is TC(Q) = 500 + 20Q + Q^2. Calculate marginal cost at Q = 10.", a:["40"],
  e:"MC = dTC/dQ = 20 + 2Q. При Q = 10: 20 + 20 = <b>40</b>. Постоянные 500 в MC не входят — они не зависят от выпуска."}]},
{t:"mc", h:"MC и AC", w:["Если предельная единица дешевле средней, средняя падает.", ""], items:[
 {q:"If marginal cost is below average cost, then an increase in output will, at the margin:", o:["Lower average cost", "Raise average cost", "Leave average cost unchanged", "Make fixed cost rise"], a:0,
  e:"Как со средней оценкой: если новая оценка ниже средней, средняя падает. Здесь MC = 40 < AC = 80 (из прошлого задания) — следующая единица снижает средние издержки. Постоянные издержки от выпуска не зависят."}]}]},

/* ---------------------------------------------------------------- 9 */
{id:"mi-comp", unit:"4", kind:"Perfect competition", title:"Совершенная конкуренция", ru:"P = MC, прибыль и убытки, точка закрытия, долгосрочное равновесие, рыночное предложение",
theory:`
${LEAD("Конкурентная фирма не влияет на цену (price taker): P = MR. Она выбирает только количество — там, где <b>P = MC</b>.")}
${SEC("Сколько производить")}
${MERGE([{f:["~P", "=", "~MC"], r:"~оптимальный выпуск q*", hl:true, ex:"на возрастающем участке MC"}])}
${SEC("Что с прибылью при q*")}
${PAIRS(["Цена", "Результат", "Что делать"], [["P > AC", "экономическая прибыль", "производить"], ["P = AC", "нулевая экономическая прибыль", "производить (это нормально)"], ["AVC < P < AC", "убыток, но меньше FC", "производить в краткосрочном периоде"], ["P < min AVC", "не покрывает даже переменные", "<b>закрыться</b> (q = 0), убыток = FC"]])}
${SEC("Долгий период")}
${KCAP("Прибыль → входят новые фирмы → предложение растёт → цена падает. Убытки → фирмы уходят. Итог: P = min AC, экономическая прибыль = 0.")}
${SEC("Рыночное предложение")}
${ASIDE("Рыночное предложение — сумма предложений всех фирм: если 100 одинаковых фирм и каждая предлагает q = P − 5, то Qs = 100(P − 5).")}`,
ex:[
{t:"match", h:"Цена и состояние фирмы — сопоставь", w:["Сравни цену с AC (прибыль или убыток) и с min AVC (работать или закрыться).", ""],
 tt:["<b>P > AC</b> — каждая единица приносит больше, чем стоит: прибыль. <b>P = AC</b> — нулевая экономическая прибыль (все альтернативные издержки покрыты). <b>AVC < P < AC</b> — убыток, но выручка покрывает переменные издержки и часть постоянных, поэтому работать выгоднее, чем закрыться. <b>P < min AVC</b> — даже переменные не покрыты: лучше закрыться, потеряв только FC.", ""],
 pairs:[["P > AC", "Positive economic profit"], ["P < min AVC", "Shut down in the short run"], ["AVC < P < AC", "Economic loss but continue producing"], ["P = AC", "Zero economic profit"]]},
{t:"mc", h:"Правило выбора выпуска", w:["Для конкурентной фирмы MR = P, поэтому MR = MC превращается в P = MC.", ""], items:[
 {q:"For a perfectly competitive firm that is operating, which condition identifies its profit-maximizing output?", o:["P = MC on the rising portion of MC", "P = AC", "P = AVC", "MR = 0"], a:0,
  e:"Пока P > MC, каждая следующая единица добавляет прибыль; когда P < MC — отнимает. Значит, оптимум там, где P = MC. Берём возрастающий участок MC: на падающем пересечение — минимум прибыли, а не максимум."}]},
{t:"fill", h:"Фирма на числах", w:["Выпуск: P = MC. Если P < min AVC — выпуск 0.", ""], items:[
 {q:"A competitive firm's market price is 8 while its minimum average variable cost is 10. What output should it choose in the short run?", a:["0"],
  e:"P = 8 < min AVC = 10: на каждой единице фирма теряет даже на переменных издержках. Лучше закрыться — выпуск <b>0</b>, убыток ограничится постоянными издержками."},
 {q:"A competitive firm has TC(q) = 100 + 10q + q^2 and faces market price P = 30. Calculate the profit-maximizing positive output q.", a:["10"],
  e:"MC = dTC/dq = 10 + 2q. P = MC: 30 = 10 + 2q → <b>q = 10</b>. Проверка: AC(10) = 100/10 + 10 + 10 = 30 = P — фирма в точке нулевой экономической прибыли (минимум AC)."}]},
{t:"tf", h:"Долгосрочное равновесие", w:["Свободный вход и выход сводят экономическую прибыль к нулю.", ""], items:[
 {q:"With free entry and exit and the standard identical-firm competitive assumptions, long-run equilibrium tends toward zero economic profit.", a:true,
  e:"Положительная прибыль привлекает новые фирмы → предложение растёт → цена падает до минимума AC. При убытках фирмы уходят и цена растёт. В итоге P = min AC и экономическая прибыль = 0 (бухгалтерская может быть положительной)."}]},
{t:"fill", h:"Рыночное равновесие из предложения фирм", w:["Сначала сложи предложение всех фирм, потом приравнивай к спросу.", ""], items:[
 {q:"There are 100 identical competitive firms. Each supplies q = P - 5 for P >= 5. Market demand is Qd = 2000 - 100P. Calculate the market equilibrium price.", a:["12.5"],
  e:"Ловушка — забыть, что фирм 100. Рыночное предложение: Qs = 100 · (P − 5) = 100P − 500. Равновесие: 100P − 500 = 2000 − 100P → 200P = 2500 → <b>P = 12,5</b>. Количество: Q = 2000 − 1250 = 750 (по 7,5 у каждой фирмы)."}]}]},

/* ---------------------------------------------------------------- 10 */
{id:"mi-monop", unit:"4", kind:"Monopoly", title:"Монополия и рыночные структуры", ru:"Типы рынков, MR = MC, предельная выручка, цена выше MC, прибыль и убыток на графике",
theory:`
${LEAD("Любая фирма максимизирует прибыль при <b>MR = MC</b>. У монополиста MR ниже цены, поэтому его цена выше MC.")}
${SEC("Рыночные структуры")}
${PAIRS(["Структура", "Фирм", "Товар", "Вход"], [["Perfect competition", "очень много", "одинаковый", "свободный"], ["Monopolistic competition", "много", "дифференцированный", "относительно свободный"], ["Oligopoly", "несколько крупных", "любой", "барьеры; фирмы следят друг за другом"], ["Monopoly", "один", "без близких заменителей", "сильные барьеры (патент, лицензия)"]])}
${SEC("Монополист шаг за шагом")}
${PAIRS(["Шаг", "Как"], [["1. MR", "для прямой P = a − bQ: MR = a − 2bQ (вдвое круче спроса)"], ["2. Количество", "MR = MC → Q<sub>m</sub>"], ["3. Цена", "подставь Q<sub>m</sub> в спрос: P<sub>m</sub>"], ["4. Прибыль", "(P<sub>m</sub> − AC) · Q<sub>m</sub>; если AC > P — убыток"]])}
${ASIDE("Чтобы продать ещё единицу, монополист снижает цену на <b>все</b> единицы, поэтому MR < P. В оптимуме MR = MC, значит P > MC — и возникают чистые потери.")}`,
ex:[
{t:"match", h:"Рыночные структуры — сопоставь", w:["Различаются числом фирм, однородностью товара и барьерами входа.", ""],
 tt:["<b>Monopolistic competition</b> — много фирм, товары немного разные (кафе, парикмахерские), войти легко. <b>Monopoly</b> — один продавец и сильные барьеры. <b>Patent</b> — законный барьер, который на время защищает изобретателя от конкурентов. <b>Oligopoly</b> — несколько крупных фирм, каждая учитывает реакцию остальных (операторы связи, авиакомпании).", ""],
 pairs:[["Monopolistic competition", "Many firms selling differentiated products with relatively free entry"], ["Monopoly", "One dominant seller in the relevant market with strong barriers to entry"], ["Patent", "A legal barrier that can temporarily limit entry"], ["Oligopoly", "A few large firms with strategic interdependence"]]},
{t:"mc", h:"Правило MR = MC", w:["MR = MC — общее правило для любой фирмы; у монополиста MR < P, поэтому P > MC.", ""], items:[
 {q:"According to standard microeconomic theory, how does a profit-maximizing firm (ANY type of market competition) determine its optimal quantity of output?", o:["It produces the quantity at which MR=MC.", "It produces where price equals average cost.", "It produces where total revenue is highest.", "It produces where average cost is lowest."], a:0,
  e:"Пока MR > MC, следующая единица добавляет к прибыли; когда MR < MC — уменьшает. Максимум прибыли — при MR = MC. Это верно для любой структуры рынка; у конкурентной фирмы просто MR = P."},
 {q:"At an interior profit-maximizing output for a single-price monopolist with downward-sloping demand, why is price typically above marginal cost?", o:["Because the monopolist sets MR = MC and MR is below price", "Because MR = P for a monopolist", "Because fixed cost is always positive", "Because average cost must equal price"], a:0,
  e:"Спрос убывает, и чтобы продать ещё единицу, приходится снижать цену на все — поэтому MR < P. Монополист выбирает MR = MC, а цену берёт со спроса, она выше MR, значит и выше MC. MR = P бывает только у конкурентной фирмы."}]},
{t:"fill", h:"Монополист на числах", w:["Для P = a − bQ: MR = a − 2bQ. Оптимум: MR = MC.", ""], items:[
 {q:"A monopolist faces inverse demand P = 120 - 0.5Q. Calculate marginal revenue MR at Q = 40.", a:["80"],
  e:"TR = P·Q = 120Q − 0,5Q². MR = dTR/dQ = 120 − Q. При Q = 40: <b>80</b>. (Цена при этом 120 − 20 = 100 — выше MR.)"},
 {q:"A monopolist faces inverse demand P = 100 - Q and total cost TC = 100 + 20Q. Calculate the profit-maximizing quantity.", a:["40"],
  e:"MR = 100 − 2Q, MC = dTC/dQ = 20. 100 − 2Q = 20 → <b>Q = 40</b>. Цена: P = 100 − 40 = 60, прибыль: 60 · 40 − (100 + 800) = 1500."}]},
{t:"fill", h:"Прибыль или убыток на графике", fig:"A", w:["Площадь прямоугольника между ценой и AC при Q<sub>m</sub>: если AC выше цены — убыток, ниже — прибыль.", ""], items:[
 {q:"What is depicted by the red area?", a:["loss", "economic loss", "losses", "a loss", "negative economic profit", "убыток", "экономический убыток"],
  e:"Монополист выпускает Q<sub>m</sub> (там, где MR = MC) и продаёт по цене P<sub>m</sub> со спроса. Но AC при Q<sub>m</sub> выше цены, поэтому на каждой единице он теряет AC − P<sub>m</sub>. Красный прямоугольник (AC − P<sub>m</sub>) · Q<sub>m</sub> — это <b>economic loss</b>."}]},
{t:"match", h:"Площади на графике монополии — сопоставь номер и смысл", fig:"C", w:["Прямоугольник шириной Q<sub>E</sub>: высота до N — AVC, от N до M — AFC (= ATC − AVC), от M до P<sub>E</sub> — прибыль на единицу.", ""],
 tt:["Вся площадь O–P<sub>E</sub> × Q<sub>E</sub> — выручка TR. <b>3</b> = AVC · Q = общие переменные издержки (TVC). <b>2</b> = (ATC − AVC) · Q = AFC · Q = общие постоянные издержки (TFC). <b>1</b> = (P − ATC) · Q = экономическая прибыль. TR = TVC + TFC + прибыль.", ""],
 pairs:[["1", "economic profit"], ["2", "total fixed costs"], ["3", "total variable costs"]]}]}
];
