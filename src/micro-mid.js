/* =========================================================
   Микроэкономика — подготовка к Mid-Term Test (Weeks 1–8).
   10 тем в 4 частях: в каждой конспект с формулами и тренировочные задания
   (новые числа и ситуации — на всё, что спрашивается в тесте), объяснение у каждого вопроса.
   Шпаргалка формул — MI_CHEAT(), сам тест (51 вопрос по порядку) — src/micro-test.js.
   ========================================================= */
/* ---------- формулы: дроби, индексы, степени ---------- */
/* одиночные латинские буквы вне тегов — курсивом (переменные), сокращения MC, ATC — прямо */
const FM = s => `<span class="fm">${String(s).split(/(<[^>]+>)/).map(p=>p[0] === "<" ? p : p.replace(/(^|[^A-Za-z&;#])([a-z][A-Z]|d[a-z]|[A-Za-z][\u0300-\u036f]?)(?![A-Za-z\u0300-\u036f])/g, (m, a, v)=>a + v.match(/[A-Za-z][\u0300-\u036f]?/g).map(c=>`<i>${c}</i>`).join(""))).join("")}</span>`;
const FQ = (n, d) => `<span class="fq"><span>${n}</span><span>${d}</span></span>`;   /* дробь */
const FD = (n, d) => FQ(n, d);
const FSQ = x => `<span class="fsq"><span class="fsq-r">√</span><span class="fsq-o">${x}</span></span>`;   /* корень с чертой */
const FTX = s => `<span class="ft">${s}</span>`;   /* обычный текст внутри формулы */
/* блок формул: [[название, формула, пояснение]] */
const FBOX = rows => `<div class="fbox">${rows.map(([lab, f, note])=>`<div class="fbox-r"><div class="fbox-l">${lab}</div><div class="fbox-f">${FM(f)}</div>${note ? `<div class="fbox-n">${note}</div>` : ""}</div>`).join("")}</div>`;
const MIF = s => FM(s);

const MI_PARTS = [
  {n:"1", t:"Основы", en:"Foundations"},
  {n:"2", t:"Рынок: спрос, предложение, благосостояние", en:"Markets"},
  {n:"3", t:"Фирма: производство и издержки", en:"The firm"},
  {n:"4", t:"Рыночные структуры", en:"Market structures"}
];

/* ---------- формулы по темам (общие для конспектов и шпаргалки) ---------- */
const MI_F = {
  basics:[
    ["Альтернативная стоимость", `OC = ${FTX("ценность <b>лучшей</b> отвергнутой альтернативы")}`, "не сумма всех альтернатив"],
    ["Бухгалтерская прибыль", `π<sub>acc</sub> = TR − ${FTX("explicit costs")}`, ""],
    ["Экономическая прибыль", `π<sub>econ</sub> = TR − ${FTX("explicit")} − ${FTX("implicit costs")}`, "меньше бухгалтерской на неявные издержки"]],
  ppf:[
    ["Наклон КПВ", `${FTX("slope")} = ${FQ("ΔY", "ΔX")} ≈ ${FQ("dY", "dX")}`, "отрицательный: больше X — меньше Y"],
    ["Альтернативная стоимость 1 ед. X", `OC<sub>X</sub> = ${FQ("|ΔY|", "ΔX")}`, "растёт вдоль выпуклой КПВ"]],
  sd:[
    ["Спрос и предложение (линейные)", "Q<sub>d</sub> = a − bP,  Q<sub>s</sub> = c + dP", ""],
    ["Равновесие", `Q<sub>d</sub> = Q<sub>s</sub>  ⇒  P* = ${FQ("a − c", "b + d")}`, "подставь P* в любое уравнение — получишь Q*"],
    ["Дефицит (shortage)", "Q<sub>d</sub> − Q<sub>s</sub> > 0", "цена ниже равновесной, например потолок цен"],
    ["Излишек (surplus)", "Q<sub>s</sub> − Q<sub>d</sub> > 0", "цена выше равновесной, например пол цен"],
    ["Рыночное предложение n одинаковых фирм", "Q<sub>s</sub> = n · q(P)", "сначала сложи фирмы, потом приравнивай к спросу"]],
  el:[
    ["Эластичность спроса по цене", `E<sub>d</sub> = ${FQ("%ΔQ<sub>d</sub>", "%ΔP")}`, "берём по модулю |E<sub>d</sub>|"],
    ["Формула средней точки", `E<sub>d</sub> = ${FQ(`${FQ("Q<sub>2</sub> − Q<sub>1</sub>", "(Q<sub>1</sub> + Q<sub>2</sub>) / 2")}`, `${FQ("P<sub>2</sub> − P<sub>1</sub>", "(P<sub>1</sub> + P<sub>2</sub>) / 2")}`)}`, "проценты считаем от средних значений"],
    ["Точечная эластичность", `E<sub>d</sub> = ${FQ("dQ", "dP")} · ${FQ("P", "Q")}`, "для Q = a − bP: E<sub>d</sub> = −b · P / Q"],
    ["Эластичность предложения", `E<sub>s</sub> = ${FQ("%ΔQ<sub>s</sub>", "%ΔP")}`, ""],
    ["По доходу", `E<sub>I</sub> = ${FQ("%ΔQ", "%ΔI")}`, "> 0 — нормальный товар, < 0 — низший"],
    ["Перекрёстная", `E<sub>xy</sub> = ${FQ("%ΔQ<sub>x</sub>", "%ΔP<sub>y</sub>")}`, "> 0 — заменители, < 0 — дополнения"],
    ["Выручка", "TR = P · Q", "|E<sub>d</sub>| < 1: P↑ ⇒ TR↑;  |E<sub>d</sub>| > 1: P↑ ⇒ TR↓;  |E<sub>d</sub>| = 1: TR max, MR = 0"]],
  ut:[
    ["Предельная полезность", `MU = ${FQ("ΔTU", "Δx")} = ${FQ("dU", "dx")}`, "TU растёт, пока MU > 0; максимум TU при MU = 0"],
    ["Правило равной отдачи", `${FQ("MU<sub>x</sub>", "P<sub>x</sub>")} = ${FQ("MU<sub>y</sub>", "P<sub>y</sub>")}`, "полезность на 1 рубль одинакова"],
    ["Бюджетное ограничение", "P<sub>x</sub> · x + P<sub>y</sub> · y = I", ""],
    ["Производная корня", `U = a${FSQ("x")}  ⇒  MU = ${FQ("a", "2" + FSQ("x"))}`, "например U = 10√x ⇒ MU = 5 / √x"]],
  wel:[
    ["Излишек потребителя", `CS = ${FQ("1", "2")} · Q* · (P<sub>max</sub> − P*)`, "P<sub>max</sub> — где спрос пересекает ось цены"],
    ["Излишек производителя", `PS = ${FQ("1", "2")} · Q* · (P* − P<sub>min</sub>)`, "P<sub>min</sub> — где предложение пересекает ось цены"],
    ["Чистые потери монополии", `DWL = ${FQ("1", "2")} · (Q<sub>c</sub> − Q<sub>m</sub>) · (P<sub>m</sub> − MC)`, "треугольник между спросом и MC"]],
  prod:[
    ["Средний продукт труда", `AP<sub>L</sub> = ${FQ("Q", "L")}`, ""],
    ["Предельный продукт труда", `MP<sub>L</sub> = ${FQ("ΔQ", "ΔL")} = ${FQ("dQ", "dL")}`, "убывающая отдача — MP падает"],
    ["Отдача от масштаба", "Q = A · K<sup>α</sup> · L<sup>β</sup>", "α + β = 1 — постоянная (CRS), > 1 — возрастающая, < 1 — убывающая"],
    ["Производная степени", "Q = aL<sup>n</sup>  ⇒  MP = n · aL<sup>n−1</sup>", ""]],
  cost:[
    ["Общие издержки", "TC = FC + VC", "FC не зависят от Q"],
    ["Средние", `ATC = ${FQ("TC", "Q")} = AFC + AVC,  AFC = ${FQ("FC", "Q")},  AVC = ${FQ("VC", "Q")}`, ""],
    ["Предельные", `MC = ${FQ("ΔTC", "ΔQ")} = ${FQ("dTC", "dQ")}`, "FC в MC не входят"],
    ["Пример", "TC = 500 + 20Q + Q<sup>2</sup>  ⇒  MC = 20 + 2Q", ""],
    ["MC и AC", "MC < AC ⇒ AC↓;  MC > AC ⇒ AC↑", "MC пересекает AC в его минимуме"]],
  comp:[
    ["Выручка конкурентной фирмы", "TR = P · q,  MR = P", "фирма принимает цену"],
    ["Оптимальный выпуск", "P = MC", "на возрастающем участке MC"],
    ["Прибыль", "π = (P − ATC) · q", ""],
    ["Закрыться", "P < min AVC  ⇒  q = 0", "убыток = FC"],
    ["Долгий период", "P = min ATC,  π = 0", "вход и выход фирм"]],
  mon:[
    ["Правило для любой фирмы", "MR = MC", ""],
    ["Предельная выручка (линейный спрос)", "P = a − bQ  ⇒  TR = aQ − bQ<sup>2</sup>,  MR = a − 2bQ", "MR вдвое круче спроса"],
    ["Цена монополиста", "P<sub>m</sub> = a − bQ<sub>m</sub>", "подставь Q<sub>m</sub> в спрос"],
    ["Прибыль / убыток", "π = (P<sub>m</sub> − ATC) · Q<sub>m</sub>", "ATC > P — убыток"],
    ["Площади на графике", "TR = TVC + TFC + π", "TVC = AVC · Q, TFC = (ATC − AVC) · Q"]]
};
function MI_CHEAT(){
  const sec = [["basics", "Основы: прибыль и альтернативная стоимость"], ["ppf", "Кривая производственных возможностей"], ["sd", "Спрос и предложение"], ["el", "Эластичность"], ["ut", "Полезность"], ["wel", "Излишки и потери"], ["prod", "Производство"], ["cost", "Издержки"], ["comp", "Совершенная конкуренция"], ["mon", "Монополия"]];
  return `${LEAD("Все формулы к midterm на одной странице. Дроби, индексы и степени — как в учебнике; справа — когда формула нужна и на чём легко ошибиться.")}
  ${sec.map(([k, h])=>SEC(h) + FBOX(MI_F[k])).join("")}
  ${SEC("Без формул, но спрашивают")}
  ${PAIRS(["Ситуация", "Ответ"], [["своя цена товара изменилась", "движение вдоль кривой спроса"], ["доход, цены других товаров, вкусы", "сдвиг кривой спроса"], ["цены ресурсов, технологии", "сдвиг кривой предложения"], ["точка внутри КПВ", "неэффективность / безработица"], ["технологии, новые ресурсы", "КПВ сдвигается наружу"], ["потолок цены ниже равновесия", "дефицит"], ["пол цены выше равновесия", "излишек"], ["оборона / загрязнение / монополия / перераспределение", "общественное благо / внешний эффект / несовершенная конкуренция / справедливость"]])}`;
}

/* ---------------------------------------------------------------- */
const MI_TOPICS = [
/* ================================================================ 1 */
{id:"mi-1-basics", unit:"1", kind:"Basics", title:"Что изучает экономика", ru:"Ограниченность, альтернативная стоимость, позитивная и нормативная экономика, факторы производства, рынок и государство",
theory:`
${LEAD("Экономика начинается с <b>ограниченности</b> (scarcity): ресурсов меньше, чем желаний. Поэтому любой выбор чего-то стоит — это <b>альтернативная стоимость</b> (opportunity cost).")}
${SEC("Главные понятия")}
${PAIRS(["Термин", "Что значит"], [
  ["<b>Scarcity</b>", "ресурсы ограничены относительно потребностей → приходится выбирать (и в богатых странах тоже)"],
  ["<b>Opportunity cost</b>", "ценность <i>лучшей</i> из отвергнутых альтернатив"],
  ["<b>Microeconomics</b>", "отдельные рынки, потребители и фирмы"],
  ["<b>Positive</b>", "что есть или что будет — можно проверить фактами"],
  ["<b>Normative</b>", "что <i>должно</i> быть — оценки, «следует», «справедливо»"]])}
${FBOX(MI_F.basics)}
${SEC("Факторы производства")}
${PAIRS(["Фактор", "Пример"], [["Land — природные ресурсы", "участок, нефть, вода"], ["Labor — труд", "время и усилия работников"], ["<b>Capital</b> — капитал", "созданные человеком средства производства: станки, здания, оборудование"], ["Entrepreneurship", "организация бизнеса и риск"]])}
${ASIDE("Деньги в экономической теории — не капитал, а средство обмена. Капитал — то, <b>чем</b> производят (станок).")}
${SEC("Кто координирует экономику")}
${CHOOSE([
  {lab:"Рынок", key:"цены", plain:true, acc:true, ex:["цены сигнализируют, чего не хватает", "прибыль привлекает ресурсы", "доходы от факторов решают, «для кого»"]},
  {lab:"Государство — при провалах рынка", key:"4 причины", plain:true, ex:["общественные блага (оборона)", "внешние эффекты (загрязнение)", "рыночная власть (монополия)", "справедливость (перераспределение)"]}])}
${ASIDE("Деньги помогают специализации: без них нужен бартер и «двойное совпадение желаний».", "info")}`,
ex:[
{t:"mc", h:"Positive или normative?", w:["Позитивное утверждение можно проверить данными (даже если оно неверно). Нормативное содержит оценку: should, ought, fair, better.", ""], items:[
 {q:"If the minimum wage rises, unemployment among teenagers will increase.", o:["Positive", "Normative"], a:0, keep:true, e:"Это прогноз о последствиях — его можно проверить данными. Позитивное утверждение, даже если оно окажется неверным."},
 {q:"The government should raise the minimum wage.", o:["Positive", "Normative"], a:1, keep:true, e:"«Should» — оценка, как должно быть. Нормативное утверждение."},
 {q:"Inflation was higher in 2022 than in 2021.", o:["Positive", "Normative"], a:0, keep:true, e:"Факт, который проверяется статистикой. Позитивное."},
 {q:"It is unfair that rich people pay the same tax rate as everyone else.", o:["Positive", "Normative"], a:1, keep:true, e:"«Unfair» — оценка справедливости. Нормативное."}]},
{t:"mc", h:"Альтернативная стоимость", w:["Альтернативная стоимость — ценность лучшей отвергнутой альтернативы (плюс прямые расходы на выбранный вариант, если они есть). Не сумма всех альтернатив.", ""], items:[
 {q:"Anna can work a 3-hour shift for 600 roubles or go to the cinema (ticket 400 roubles). What is the opportunity cost of the cinema?", o:["1000 roubles", "400 roubles", "600 roubles", "200 roubles"], a:0,
  e:"Она теряет 600 рублей заработка и тратит 400 на билет — эти деньги тоже можно было потратить иначе. Альтернативная стоимость = 600 + 400 = 1000."},
 {q:"Job A pays 50 000, job B pays 60 000. You choose to study full-time instead (no pay). What is the opportunity cost of studying?", o:["60 000", "110 000", "50 000", "0"], a:0,
  e:"Считается только <b>лучшая</b> отвергнутая альтернатива — работа B за 60 000. Сразу на двух работах ты бы не работал, поэтому 110 000 — ошибка."},
 {q:"Which statement best describes scarcity?", o:["Resources are limited relative to wants, so every choice has an opportunity cost", "Only poor countries face scarcity", "Scarcity ends when markets are competitive", "Scarcity means goods are rare in nature"], a:0,
  e:"Ограниченность — это соотношение ресурсов и желаний. Она есть везде, поэтому у любого выбора есть альтернативная стоимость."}]},
{t:"match", h:"Факторы производства — сопоставь", w:["Земля — природные ресурсы, труд — время людей, капитал — созданные средства производства, предпринимательство — организация и риск.", ""],
 tt:["<b>Oil field</b> — природный ресурс (land). <b>Programmer's working hours</b> — труд (labor). <b>Delivery truck of a bakery</b> — капитал: создан человеком и используется для производства. <b>Starting a business and bearing the risk</b> — предпринимательство.", ""],
 pairs:[["An oil field", "Land"], ["A programmer's working hours", "Labor"], ["A delivery truck owned by a bakery", "Capital"], ["Starting a new business and bearing the risk", "Entrepreneurship"]]},
{t:"match", h:"Провалы рынка — почему вмешивается государство", w:["Общественное благо, внешний эффект, рыночная власть, справедливость.", ""],
 tt:["<b>Lighthouse</b> — общественное благо: нельзя запретить кораблю видеть свет (non-excludable), и свет не «кончается» (non-rival). <b>Car exhaust</b> — внешний эффект: вред третьим лицам не включён в цену бензина. <b>The only railway company</b> — несовершенная конкуренция (монополия). <b>Pensions for low-income retirees</b> — справедливость (equity).", ""],
 pairs:[["A lighthouse", "Public good"], ["Car exhaust polluting the city", "Externality"], ["The only railway company in the country", "Imperfect competition"], ["Higher pensions for low-income retirees", "Equity objective"]]},
{t:"tf", h:"Рынок, деньги, капитал", w:["Рынок координирует через цены; деньги снимают проблему бартера; капитал — средства производства.", ""], items:[
 {q:"Without money, trade requires a double coincidence of wants.", a:true, e:"При бартере нужно найти того, кому нужно твоё и у кого есть нужное тебе. Деньги это убирают — поэтому выгоднее специализироваться."},
 {q:"In a market economy, a central plan decides what and how much each factory produces.", a:false, e:"Это командная экономика. В рыночной это решают цены, прибыль и добровольный обмен."},
 {q:"Money in a firm's bank account is 'capital' in the economic sense.", a:false, e:"Экономический капитал — физические средства производства (станки, здания). Деньги — финансовый капитал, средство обмена."},
 {q:"Microeconomics studies individual consumers, firms and markets.", a:true, e:"Микро — отдельные рынки и решения; макро — экономика в целом (инфляция, ВВП, безработица)."}]}]},

/* ================================================================ 2 */
{id:"mi-2-ppf", unit:"1", kind:"PPF", title:"Кривая производственных возможностей", ru:"Точки на кривой, внутри и снаружи; сдвиги; наклон как альтернативная стоимость",
theory:`
${LEAD("КПВ (production-possibility frontier) — все <b>максимальные</b> комбинации двух благ при данных ресурсах и технологии.")}
${SEC("Где точка")}
${CHOOSE([
  {lab:"На кривой", key:"эффективно", plain:true, acc:true, ex:["больше одного — только за счёт другого"]},
  {lab:"Внутри", key:"неэффективно", plain:true, ex:["безработица, простой ресурсов"]},
  {lab:"Снаружи", key:"недостижимо", plain:true, ex:["пока не вырастут ресурсы или технологии"]}])}
${SEC("Движение и сдвиг")}
${PAIRS(["Что происходит", "На графике"], [["рецессия, безработица", "точка уходит <b>внутрь</b>"], ["выход из рецессии", "движение <b>к</b> кривой"], ["больше X, меньше Y", "движение <b>вдоль</b> кривой"], ["технологии, больше ресурсов", "сдвиг <b>наружу</b>"], ["война, катастрофа разрушила заводы", "сдвиг <b>внутрь</b>"]])}
${SEC("Наклон = альтернативная стоимость")}
${FBOX(MI_F.ppf)}
${KCAP("Кривая выпуклая наружу → альтернативная стоимость растёт: ресурсы не одинаково хороши для обоих благ.")}`,
ex:[
{t:"fill", h:"КПВ по таблице — точки (машины, пшеница): A (0; 40), B (10; 36), C (20; 28), D (30; 16), E (40; 0)", w:["Альтернативная стоимость = сколько пшеницы теряем за дополнительные машины (|ΔY| / ΔX). Точку сравниваем с кривой при том же числе машин.", ""], items:[
 {q:"Opportunity cost of the first 10 cars (A → B), in tonnes of wheat →", a:["4"], e:"Пшеница падает с 40 до 36: за 10 машин отдаём <b>4</b> тонны (0,4 на машину)."},
 {q:"Opportunity cost of cars 21–30 (C → D), in tonnes of wheat →", a:["12"], e:"28 − 16 = <b>12</b> тонн за 10 машин — в три раза дороже, чем первые 10. Альтернативная стоимость растёт: кривая выпуклая наружу."},
 {q:"Opportunity cost of ONE car between C and D →", a:["1.2"], e:"12 тонн / 10 машин = <b>1,2</b> тонны на машину."}]},
{t:"mc", h:"Где эта точка?", w:["Сравни с точкой на кривой при том же X.", ""], items:[
 {q:"Point (20 cars; 20 wheat), using the table above", o:["Inside the PPF — inefficient", "On the PPF — efficient", "Outside the PPF — unattainable"], a:0, keep:true, e:"При 20 машинах можно произвести 28 т пшеницы (точка C), а здесь только 20 — ресурсы используются не полностью."},
 {q:"Point (30 cars; 30 wheat)", o:["Inside the PPF — inefficient", "On the PPF — efficient", "Outside the PPF — unattainable"], a:2, keep:true, e:"При 30 машинах максимум 16 т (точка D). 30 т недостижимы при текущих ресурсах."},
 {q:"Point (10 cars; 36 wheat)", o:["Inside the PPF — inefficient", "On the PPF — efficient", "Outside the PPF — unattainable"], a:1, keep:true, e:"Это точка B — на кривой, эффективно."}]},
{t:"mc", h:"Движение или сдвиг КПВ", w:["Наружу — только рост ресурсов или технологий. Безработица — внутрь точки, а не сдвиг кривой.", ""], items:[
 {q:"A new fertilizer doubles wheat yields.", o:["Outward shift of the PPF", "Inward shift of the PPF", "Movement along the PPF", "Movement to a point inside the PPF"], a:0, keep:true, e:"Технологии позволяют произвести больше пшеницы из тех же ресурсов — кривая сдвигается наружу (по оси пшеницы)."},
 {q:"A recession: many factories stand idle.", o:["Outward shift of the PPF", "Inward shift of the PPF", "Movement along the PPF", "Movement to a point inside the PPF"], a:3, keep:true, e:"Ресурсы никуда не исчезли, просто простаивают — точка уходит внутрь, кривая на месте."},
 {q:"The economy decides to produce more cars and less wheat.", o:["Outward shift of the PPF", "Inward shift of the PPF", "Movement along the PPF", "Movement to a point inside the PPF"], a:2, keep:true, e:"Перераспределение ресурсов при полной занятости — движение вдоль кривой."},
 {q:"An earthquake destroys a third of all factories.", o:["Outward shift of the PPF", "Inward shift of the PPF", "Movement along the PPF", "Movement to a point inside the PPF"], a:1, keep:true, e:"Ресурсов стало меньше — максимальные возможности сократились, кривая сдвигается внутрь."}]},
{t:"fill", h:"Наклон КПВ — производная", w:["dY/dX: производная степени x<sup>n</sup> — это n·x<sup>n−1</sup>. Модуль наклона — альтернативная стоимость единицы X.", ""], items:[
 {q:"PPF: Y = 200 − 2X^2. Calculate dY/dX at X = 5.", a:["-20"], e:"dY/dX = −4X. При X = 5: <b>−20</b>. Ещё одна единица X стоит 20 единиц Y."},
 {q:"PPF: Y = 90 − 0.5X^2. Calculate dY/dX at X = 4.", a:["-4"], e:"dY/dX = −X = <b>−4</b>."},
 {q:"PPF is a straight line Y = 80 − 4X. What is the opportunity cost of one unit of X (in units of Y)?", a:["4"], e:"Наклон −4 постоянный: каждая единица X стоит <b>4</b> единицы Y. Прямая КПВ — постоянная альтернативная стоимость."}]}]},

/* ================================================================ 3 */
{id:"mi-3-sd", unit:"2", kind:"Supply & demand", title:"Спрос и предложение", ru:"Движение и сдвиг кривых, заменители и дополнения, равновесие, дефицит, излишек, регулирование цен",
theory:`
${LEAD("Главный вопрос: изменилась <b>цена самого товара</b> (движение вдоль кривой) или <b>что-то другое</b> (сдвиг всей кривой)?")}
${SEC("Движение или сдвиг")}
${CHOOSE([
  {lab:"Изменилась цена этого товара", key:"движение вдоль", plain:true, acc:true, ex:["change in quantity demanded / supplied"]},
  {lab:"Изменилось что-то ещё", key:"сдвиг кривой", plain:true, ex:["change in demand / supply"]}])}
${SEC("Что сдвигает спрос")}
${PAIRS(["Фактор", "Куда сдвигается спрос"], [
  ["доход ↑, <b>normal good</b>", "вправо"], ["доход ↑, <b>inferior good</b>", "влево"],
  ["цена <b>substitute</b> (заменителя) ↓", "влево — уходят к заменителю"], ["цена <b>complement</b> (дополнения) ↓", "вправо"],
  ["вкусы, ожидания, число покупателей", "по смыслу"]])}
${SEC("Что сдвигает предложение")}
${PAIRS(["Фактор", "Куда"], [["ресурсы дешевеют", "вправо"], ["технологии лучше", "вправо"], ["больше продавцов", "вправо"], ["налог на производителя, ресурсы дорожают", "влево"]])}
${SEC("Что будет с ценой и количеством")}
${PAIRS(["Изменение", "P*", "Q*"], [["спрос → вправо", "↑", "↑"], ["спрос → влево", "↓", "↓"], ["предложение → вправо", "↓", "↑"], ["предложение → влево", "↑", "↓"], ["спрос ↑ и предложение ↓", "↑ точно", "неизвестно"]])}
${SEC("Формулы")}
${FBOX(MI_F.sd)}
${ASIDE("Потолок цены (ceiling) действует, только если он <b>ниже</b> равновесия — тогда дефицит. Пол цены (floor) — если <b>выше</b> равновесия — излишек.")}`,
ex:[
{t:"mc", h:"Что произойдёт на рынке?", w:["Своя цена — движение вдоль кривой. Факторы покупателей сдвигают спрос, факторы производства — предложение.", ""], items:[
 {q:"Coffee becomes more expensive. What happens in the market for TEA (a substitute)?", o:["Demand shifts right", "Demand shifts left", "Supply shifts right", "Supply shifts left", "Movement along the demand curve"], a:0, keep:true, e:"Чай — заменитель кофе: часть покупателей переходит на чай, спрос на чай растёт при каждой цене."},
 {q:"Printers become cheaper. What happens in the market for ink cartridges (a complement)?", o:["Demand shifts right", "Demand shifts left", "Supply shifts right", "Supply shifts left", "Movement along the demand curve"], a:0, keep:true, e:"Принтеров покупают больше → нужно больше картриджей: спрос на дополнение растёт."},
 {q:"Incomes rise. What happens in the market for instant noodles (an inferior good)?", o:["Demand shifts right", "Demand shifts left", "Supply shifts right", "Supply shifts left", "Movement along the demand curve"], a:1, keep:true, e:"Низший товар: с ростом дохода его заменяют на лучшее — спрос падает."},
 {q:"Bakers' wages rise. What happens in the bread market?", o:["Demand shifts right", "Demand shifts left", "Supply shifts right", "Supply shifts left", "Movement along the demand curve"], a:3, keep:true, e:"Производить дороже → при каждой цене предлагают меньше: предложение влево."},
 {q:"The price of bread itself rises. What happens to the demand for bread?", o:["Demand shifts right", "Demand shifts left", "Supply shifts right", "Supply shifts left", "Movement along the demand curve"], a:4, keep:true, e:"Своя цена — движение вдоль кривой спроса: величина спроса падает, сама кривая на месте."},
 {q:"A new robot halves the cost of assembling cars.", o:["Demand shifts right", "Demand shifts left", "Supply shifts right", "Supply shifts left", "Movement along the demand curve"], a:2, keep:true, e:"Технологии снижают издержки — предложение вправо."}]},
{t:"mc", h:"Цена и количество после сдвига", w:["Сдвиг спроса двигает P и Q в одну сторону, сдвиг предложения — в разные.", ""], items:[
 {q:"Supply increases, demand unchanged. Equilibrium:", o:["P falls, Q rises", "P rises, Q rises", "P falls, Q falls", "P rises, Q falls"], a:0, keep:true, e:"При старой цене возникает излишек, продавцы снижают цену, покупатели берут больше."},
 {q:"Demand decreases, supply unchanged. Equilibrium:", o:["P falls, Q rises", "P rises, Q rises", "P falls, Q falls", "P rises, Q falls"], a:2, keep:true, e:"Спрос влево: при старой цене излишек → цена падает, продают меньше."},
 {q:"Demand rises AND supply falls at the same time. What is certain?", o:["Price rises; quantity can go either way", "Quantity rises; price can go either way", "Both rise", "Both fall"], a:0, keep:true, e:"Оба сдвига поднимают цену. На количество они действуют в разные стороны — итог зависит от того, какой сдвиг сильнее."}]},
{t:"fill", h:"Равновесие на числах: Qd = 200 − 4P, Qs = −40 + 2P", w:["Равновесие: Qd = Qs. Дефицит = Qd − Qs, излишек = Qs − Qd.", ""], items:[
 {q:"Equilibrium price P* →", a:["40"], e:"200 − 4P = −40 + 2P → 240 = 6P → <b>P* = 40</b>."},
 {q:"Equilibrium quantity Q* →", a:["40"], e:"Q = 200 − 4 · 40 = <b>40</b> (проверка: −40 + 80 = 40)."},
 {q:"At P = 30: shortage Qd − Qs →", a:["60"], e:"Qd = 200 − 120 = 80, Qs = −40 + 60 = 20. Дефицит = <b>60</b>. Цена ниже равновесной."},
 {q:"At P = 45: surplus Qs − Qd →", a:["30"], e:"Qd = 200 − 180 = 20, Qs = −40 + 90 = 50. Излишек = <b>30</b>. Цена выше равновесной."}]},
{t:"fill", h:"Рыночное предложение из фирм", w:["Сначала умножь предложение одной фирмы на число фирм, потом приравнивай к спросу.", ""], items:[
 {q:"50 identical firms, each supplies q = P − 2 (for P ≥ 2). Market demand Qd = 500 − 50P. Equilibrium price →", a:["6"], e:"Qs = 50(P − 2) = 50P − 100. 50P − 100 = 500 − 50P → 100P = 600 → <b>P = 6</b>."},
 {q:"…and how much does EACH firm produce at that price? →", a:["4"], e:"q = P − 2 = 6 − 2 = <b>4</b>. Всего 50 · 4 = 200 = 500 − 300 ✓."}]},
{t:"mc", h:"Регулирование цен", w:["Ceiling ниже равновесия — дефицит, floor выше — излишек. Если ограничение «с другой стороны», оно ни на что не влияет.", ""], items:[
 {q:"Rent control sets maximum rent below the equilibrium rent. Result:", o:["A shortage of apartments", "A surplus of apartments", "No effect", "Demand shifts left"], a:0, keep:true, e:"Ниже равновесия хотят снять больше, а сдают меньше: дефицит квартир."},
 {q:"A minimum wage is set above the equilibrium wage. In the labour market this creates:", o:["A surplus of labour (unemployment)", "A shortage of labour", "No effect", "Supply of labour shifts left"], a:0, keep:true, e:"Пол цены выше равновесия: работать хотят больше людей, чем нанимают — излишек труда, то есть безработица."},
 {q:"A price ceiling is set ABOVE the equilibrium price. Result:", o:["No effect — it is not binding", "A shortage", "A surplus", "Supply shifts right"], a:0, keep:true, e:"Рынок и так торгует ниже потолка — ограничение не действует."}]}]},

/* ================================================================ 4 */
{id:"mi-4-elast", unit:"2", kind:"Elasticity", title:"Эластичность", ru:"Эластичность спроса и предложения, формула средней точки, точечная эластичность, выручка",
theory:`
${LEAD("Эластичность — на сколько <b>процентов</b> меняется количество, когда цена меняется на 1 %.")}
${SEC("Формулы")}
${FBOX(MI_F.el)}
${SEC("Классификация")}
${PAIRS(["|E|", "Название", "Что значит"], [["> 1", "relatively <b>elastic</b>", "количество реагирует сильнее цены"], ["= 1", "<b>unit</b>-elastic", "в той же пропорции"], ["< 1", "relatively <b>inelastic</b>", "количество реагирует слабо"], ["= 0", "perfectly inelastic", "вертикальная кривая"], ["∞", "perfectly elastic", "горизонтальная кривая"]])}
${SEC("Эластичность и выручка")}
${CHOOSE([{lab:"Спрос неэластичен", key:"P↑ → TR↑", plain:true, acc:true, ex:["количество падает меньше, чем растёт цена"]}, {lab:"Спрос эластичен", key:"P↑ → TR↓", plain:true, ex:["покупатели сильно сокращают покупки"]}, {lab:"Единичная", key:"TR не меняется", plain:true, ex:["TR максимальна, MR = 0"]}])}`,
ex:[
{t:"fill", h:"Считаем эластичность", w:["Простая: %ΔQ / %ΔP. Средняя точка: проценты от средних значений. Точечная: (dQ/dP)·(P/Q). Ответ — по модулю.", ""], items:[
 {q:"Price rises by 5%, quantity demanded falls by 15%. |Ed| →", a:["3"], e:"|Ed| = 15 / 5 = <b>3</b> — спрос эластичный."},
 {q:"Price rises by 10%, quantity supplied rises by 4%. Es →", a:["0.4"], e:"Es = 4 / 10 = <b>0,4</b> — предложение неэластичное."},
 {q:"Midpoint formula: price rises from 20 to 30, quantity demanded falls from 60 to 40. |Ed| →", a:["1"], e:"%ΔQ = −20 / 50 = −40 % (50 — среднее между 60 и 40). %ΔP = 10 / 25 = 40 % (25 — среднее между 20 и 30). |Ed| = 40 / 40 = <b>1</b> — единичная эластичность."},
 {q:"Midpoint formula: price falls from 8 to 6, quantity demanded rises from 100 to 140. |Ed| →", a:["1.1667", "7/6"], e:"%ΔQ = 40 / 120 = 33,3 %. %ΔP = −2 / 7 = −28,6 %. |Ed| = 33,3 / 28,6 = 7/6 ≈ <b>1,17</b>."},
 {q:"Point elasticity: Qd = 100 − 2P at P = 20. |Ed| →", a:["0.6667", "2/3"], e:"Q = 100 − 40 = 60. Ed = (dQ/dP) · P/Q = −2 · 20 / 60 = −2/3. |Ed| ≈ <b>0,67</b> — неэластичный участок."}]},
{t:"mc", h:"Эластичность и выручка", w:["Неэластичный спрос: цена и выручка двигаются вместе. Эластичный: в разные стороны. Единичный: выручка не меняется.", ""], items:[
 {q:"Demand is elastic. A shop CUTS its price. Total revenue:", o:["Rises", "Falls", "Stays the same"], a:0, keep:true, e:"Количество растёт в процентах сильнее, чем падает цена, — выручка растёт."},
 {q:"Demand is inelastic. The price FALLS. Total revenue:", o:["Rises", "Falls", "Stays the same"], a:1, keep:true, e:"Цена падает сильнее, чем растёт количество, — выручка падает. Поэтому неурожай может повысить выручку фермеров."},
 {q:"Demand is unit-elastic. The price rises by 10%. Total revenue:", o:["Rises", "Falls", "Stays the same"], a:2, keep:true, e:"Количество падает тоже на 10 % — выручка (почти) не меняется. Здесь MR = 0."}]},
{t:"match", h:"Какая эластичность — сопоставь", w:["Чем больше заменителей и чем менее необходим товар, тем эластичнее спрос.", ""],
 tt:["<b>Insulin</b> — необходим, заменителей нет: спрос неэластичен. <b>One brand of cola</b> — полно заменителей: эластичен. <b>Vertical supply curve</b> — количество не реагирует: совершенно неэластичное предложение. <b>Horizontal demand curve</b> — малейший рост цены обнуляет спрос: совершенно эластичный (как у конкурентной фирмы).", ""],
 pairs:[["Insulin for diabetics", "Relatively inelastic demand"], ["One particular brand of cola", "Relatively elastic demand"], ["A vertical supply curve", "Perfectly inelastic supply"], ["A horizontal demand curve", "Perfectly elastic demand"]]},
{t:"mc", h:"Эластичность по доходу и перекрёстная", w:["E<sub>I</sub> > 0 — нормальный, < 0 — низший. E<sub>xy</sub> > 0 — заменители, < 0 — дополнения.", ""], items:[
 {q:"Income elasticity of demand for bus rides is −0.4. Bus rides are:", o:["An inferior good", "A normal good", "A luxury", "A complement"], a:0, keep:true, e:"Отрицательная эластичность по доходу: богатея, люди ездят на автобусе меньше — низший товар."},
 {q:"Cross-price elasticity between butter and margarine is +0.8. They are:", o:["Substitutes", "Complements", "Unrelated", "Inferior goods"], a:0, keep:true, e:"Масло дорожает → маргарина покупают больше: положительная перекрёстная эластичность — заменители."},
 {q:"Cross-price elasticity between cars and petrol is −0.5. They are:", o:["Substitutes", "Complements", "Unrelated", "Normal goods"], a:1, keep:true, e:"Бензин дорожает → машин покупают меньше: отрицательная — дополнения."}]}]},

/* ================================================================ 5 */
{id:"mi-5-utility", unit:"2", kind:"Consumer choice", title:"Полезность и выбор потребителя", ru:"Общая и предельная полезность, убывающая предельная полезность, правило равной отдачи",
theory:`
${LEAD("Потребитель распределяет бюджет так, чтобы <b>последний рубль</b> на каждый товар приносил одинаковую полезность.")}
${SEC("Общая и предельная полезность")}
${FBOX(MI_F.ut)}
${ASIDE("Убывающая MU не значит, что TU падает. Пока MU > 0, общая полезность <b>растёт</b>, просто всё медленнее. TU падает, только когда MU < 0.")}
${SEC("Почему MU/P, а не просто MU")}
${KCAP(`Если ${FM(`${FQ("MU<sub>x</sub>", "P<sub>x</sub>")} > ${FQ("MU<sub>y</sub>", "P<sub>y</sub>")}`)}, рубль в X приносит больше — покупай больше X. Его MU падает, и отношения выравниваются.`)}`,
ex:[
{t:"fill", h:"Таблица полезности: кусочки пиццы 1–6, TU = 10, 18, 24, 27, 27, 25", w:["MU = TU(n) − TU(n − 1). TU максимальна, когда MU = 0; падает, когда MU < 0.", ""], items:[
 {q:"MU of the 3rd slice →", a:["6"], e:"24 − 18 = <b>6</b>."},
 {q:"MU of the 5th slice →", a:["0"], e:"27 − 27 = <b>0</b> — пятый кусок уже ничего не добавляет."},
 {q:"MU of the 6th slice →", a:["-2"], e:"25 − 27 = <b>−2</b> — шестой кусок вредит: общая полезность падает."},
 {q:"After how many slices is total utility maximised? (smallest number) →", a:["4"], e:"TU = 27 уже на <b>4</b> кусках, пятый ничего не добавляет (MU = 0), шестой уменьшает."}]},
{t:"fill", h:"Предельная полезность — производная", w:["MU = dU/dx. Для √x производная 1/(2√x).", ""], items:[
 {q:"U(x) = 20√x. MU at x = 4 →", a:["5"], e:"MU = 20 / (2√x) = 10 / √x. При x = 4: 10 / 2 = <b>5</b>."},
 {q:"U(x) = 6x − x^2. MU at x = 2 →", a:["2"], e:"MU = 6 − 2x = 6 − 4 = <b>2</b>."},
 {q:"U(x) = 6x − x^2. At what x is total utility maximal? →", a:["3"], e:"MU = 6 − 2x = 0 → <b>x = 3</b>. Дальше MU < 0 и TU падает."}]},
{t:"mc", h:"Правило равной отдачи", w:["Сравнивай MU/P. Перекладывай деньги туда, где отношение больше.", ""], items:[
 {q:"MUx = 30, Px = 10; MUy = 20, Py = 5. To raise utility the consumer should:", o:["Buy more Y and less X", "Buy more X and less Y", "Change nothing", "Buy only X"], a:0, keep:true, e:"MUx/Px = 3, MUy/Py = 4. Рубль в Y даёт больше — покупай больше Y. Сравнивать только MU (30 > 20) — ошибка."},
 {q:"The consumer is at an optimum. MUx = 12, Px = 4, Py = 2. Then MUy =", o:["6", "12", "24", "3"], a:0, keep:true, e:"MUx/Px = 3 = MUy/2 → MUy = <b>6</b>."},
 {q:"Diminishing marginal utility means that:", o:["Each extra unit adds less utility than the previous one", "Total utility falls with every extra unit", "Marginal utility is always negative", "Prices must fall"], a:0, keep:true, e:"Убывает прибавка, а не общая полезность. TU падает, только если MU < 0."}]}]},

/* ================================================================ 6 */
{id:"mi-6-surplus", unit:"2", kind:"Welfare", title:"Излишки и потери благосостояния", ru:"Излишек потребителя и производителя, чистые потери (deadweight loss)",
theory:`
${LEAD("Излишек — выгода сверх цены. Потери (deadweight loss) — излишек, который исчезает, когда рынок производит меньше эффективного.")}
${SEC("Площади на графике")}
${PAIRS(["Излишек", "Где"], [["<b>Consumer surplus</b>", "под спросом, над ценой"], ["<b>Producer surplus</b>", "над предложением (MC), под ценой"], ["<b>Deadweight loss</b>", "треугольник между спросом и MC от Q<sub>m</sub> до Q<sub>c</sub>"]])}
${FBOX(MI_F.wel)}
${ASIDE("Монополия поднимает цену: часть излишка потребителей переходит производителю, а часть (DWL) не достаётся никому.")}`,
ex:[
{t:"fill", h:"Излишки при заданной цене", w:["CS — треугольник: ½ · Q · (P<sub>max</sub> − P). PS — треугольник: ½ · Q · (P − P<sub>min</sub>).", ""], items:[
 {q:"Demand P = 80 − 2Q, market price 20. Consumer surplus →", a:["900"], e:"Q: 20 = 80 − 2Q → Q = 30. Высота: 80 − 20 = 60. CS = ½ · 30 · 60 = <b>900</b>."},
 {q:"Supply P = 10 + Q, market price 40. Producer surplus →", a:["450"], e:"Q: 40 = 10 + Q → Q = 30. Высота: 40 − 10 = 30. PS = ½ · 30 · 30 = <b>450</b>."}]},
{t:"fill", h:"Рынок целиком: спрос P = 100 − Q, предложение P = 20 + Q", w:["Найди равновесие, потом площади треугольников над и под ценой.", ""], items:[
 {q:"Equilibrium price →", a:["60"], e:"100 − Q = 20 + Q → Q = 40, P = <b>60</b>."},
 {q:"Consumer surplus →", a:["800"], e:"½ · 40 · (100 − 60) = <b>800</b>."},
 {q:"Producer surplus →", a:["800"], e:"½ · 40 · (60 − 20) = <b>800</b>. Общий излишек 1600 — максимум, рынок эффективен."}]},
{t:"fill", h:"Монополия и потери: спрос P = 120 − Q, MC = 30", w:["Конкуренция: P = MC. Монополия: MR = MC, цена со спроса. DWL — треугольник между ними.", ""], items:[
 {q:"Competitive quantity Qc →", a:["90"], e:"P = MC: 120 − Q = 30 → <b>Qc = 90</b>."},
 {q:"Monopoly quantity Qm (MR = 120 − 2Q) →", a:["45"], e:"120 − 2Q = 30 → <b>Qm = 45</b>, Pm = 120 − 45 = 75."},
 {q:"Deadweight loss →", a:["1012.5"], e:"DWL = ½ · (90 − 45) · (75 − 30) = ½ · 45 · 45 = <b>1012,5</b>."}]},
{t:"mc", h:"Что меняет монополия", w:["Монополия: CS ↓, PS ↑, появляется DWL.", ""], items:[
 {q:"When a competitive market becomes a monopoly, consumer surplus:", o:["Falls — part goes to the producer, part is lost", "Rises", "Stays the same", "Becomes producer surplus entirely"], a:0, keep:true, e:"Цена выше, количество меньше. Прямоугольник между старой и новой ценой уходит монополисту, треугольник DWL пропадает."},
 {q:"Deadweight loss is:", o:["Surplus that nobody receives because too little is produced", "The monopolist's profit", "Consumer surplus under monopoly", "Fixed costs"], a:0, keep:true, e:"Это сделки, которые были бы выгодны обеим сторонам (P > MC), но не происходят."}]}]},

/* ================================================================ 7 */
{id:"mi-7-prod", unit:"3", kind:"Production", title:"Производство", ru:"Краткий и долгий период, средний и предельный продукт, убывающая отдача, отдача от масштаба, инновации",
theory:`
${LEAD("Производственная функция Q(K, L) — сколько можно выпустить из данных ресурсов при данной технологии. Лучше технология — функция выше.")}
${SEC("Периоды")}
${CHOOSE([{lab:"Short run", key:"хотя бы 1 фактор фиксирован", plain:true, acc:true, ex:["обычно капитал K"]}, {lab:"Long run", key:"все факторы меняются", plain:true, ex:["можно построить новый завод"]}])}
${SEC("Формулы")}
${FBOX(MI_F.prod)}
${SEC("Две разные «отдачи»")}
${PAIRS(["", "Diminishing marginal returns", "Returns to scale"], [["период", "краткосрочный", "долгосрочный"], ["что растёт", "один фактор, другие фиксированы", "все факторы в одной пропорции"], ["что смотрим", "падает ли MP", "во сколько раз растёт Q"]])}
${SEC("Инновации")}
${PAIRS(["Вид", "Пример"], [["Product innovation", "новый или заметно улучшенный продукт"], ["Process innovation", "новый способ производить старый продукт"]])}`,
ex:[
{t:"fill", h:"Таблица: работники L = 1…5, выпуск Q = 10, 25, 36, 44, 48", w:["MP = ΔQ при +1 работнике, AP = Q / L.", ""], items:[
 {q:"MP of the 2nd worker →", a:["15"], e:"25 − 10 = <b>15</b>."},
 {q:"MP of the 4th worker →", a:["8"], e:"44 − 36 = <b>8</b>."},
 {q:"AP at L = 3 →", a:["12"], e:"36 / 3 = <b>12</b>."},
 {q:"From which worker does diminishing marginal returns start (MP begins to fall)? →", a:["3"], e:"MP: 10, 15, 11, 8, 4. Рост до второго, с <b>3-го</b> работника MP падает."}]},
{t:"fill", h:"MP и AP из функции", w:["MP = dQ/dL, AP = Q/L.", ""], items:[
 {q:"Q(L) = 12L^2 − L^3. MP at L = 4 →", a:["48"], e:"MP = 24L − 3L² = 96 − 48 = <b>48</b>."},
 {q:"Q(L) = 12L^2 − L^3. AP at L = 4 →", a:["32"], e:"Q(4) = 192 − 64 = 128. AP = 128 / 4 = <b>32</b>."},
 {q:"Q(L) = 10L + 2L^2 − 0.1L^3. MP at L = 10 →", a:["20"], e:"MP = 10 + 4L − 0,3L² = 10 + 40 − 30 = <b>20</b>."}]},
{t:"mc", h:"Отдача от масштаба", w:["Для Q = A·K<sup>α</sup>·L<sup>β</sup> сложи степени: = 1 — постоянная, > 1 — возрастающая, < 1 — убывающая.", ""], items:[
 {q:"Q = K^0.3 · L^0.5", o:["Decreasing returns to scale", "Constant returns to scale", "Increasing returns to scale"], a:0, keep:true, e:"0,3 + 0,5 = 0,8 < 1: удвоим факторы — выпуск вырастет меньше, чем вдвое."},
 {q:"Q = 4 · K^0.6 · L^0.4", o:["Decreasing returns to scale", "Constant returns to scale", "Increasing returns to scale"], a:1, keep:true, e:"0,6 + 0,4 = 1. Коэффициент 4 на отдачу не влияет."},
 {q:"Q = K · L", o:["Decreasing returns to scale", "Constant returns to scale", "Increasing returns to scale"], a:2, keep:true, e:"1 + 1 = 2 > 1: удвоение K и L учетверяет выпуск."},
 {q:"All inputs are doubled and output triples.", o:["Decreasing returns to scale", "Constant returns to scale", "Increasing returns to scale"], a:2, keep:true, e:"Выпуск вырос больше, чем факторы, — возрастающая отдача."}]},
{t:"mc", h:"Периоды, убывающая отдача, инновации", w:["Short run — что-то фиксировано; убывающая отдача — краткосрочное понятие; product — новый товар, process — новый способ.", ""], items:[
 {q:"A café cannot enlarge its kitchen this month but can hire more cooks. This is:", o:["The short run", "The long run"], a:0, keep:true, e:"Кухня (капитал) фиксирована — краткосрочный период."},
 {q:"Adding the 6th cook to a small kitchen adds less output than the 5th. This illustrates:", o:["Diminishing marginal returns", "Decreasing returns to scale", "Technological progress", "Increasing returns to scale"], a:0, keep:true, e:"Растёт один фактор (повара) при фиксированной кухне — MP падает. Отдача от масштаба — когда растёт всё."},
 {q:"A bakery installs ovens that bake twice as fast; the bread is the same.", o:["Process innovation", "Product innovation"], a:0, keep:true, e:"Тот же продукт, новый способ — процессная инновация."},
 {q:"A phone maker launches a foldable phone.", o:["Process innovation", "Product innovation"], a:1, keep:true, e:"Новый продукт — продуктовая инновация."}]},
{t:"tf", h:"Верно или нет?", w:["Технология сдвигает функцию производства вверх; убывающая отдача не значит, что Q падает.", ""], items:[
 {q:"Better technology shifts the production function upward.", a:true, e:"Из тех же ресурсов — больше выпуска."},
 {q:"Diminishing marginal returns means total output falls when another worker is hired.", a:false, e:"Падает прибавка (MP), а общий выпуск растёт, пока MP > 0."},
 {q:"In the long run all inputs are variable.", a:true, e:"По определению: в долгом периоде можно менять и капитал."}]}]},

/* ================================================================ 8 */
{id:"mi-8-cost", unit:"3", kind:"Costs", title:"Издержки и прибыль", ru:"Явные и неявные издержки, экономическая прибыль, амортизация, FC, VC, ATC, MC",
theory:`
${LEAD("Экономист считает <b>все</b> издержки, включая упущенные возможности. Поэтому экономическая прибыль меньше бухгалтерской.")}
${SEC("Виды издержек")}
${PAIRS(["Термин", "Что это", "Пример"], [["<b>Explicit cost</b>", "прямые денежные платежи", "зарплата, аренда, сырьё"], ["<b>Implicit cost</b>", "альтернативная стоимость своих ресурсов без платежа", "своё время, своё помещение"], ["<b>Depreciation</b>", "распределение стоимости актива по периодам", "станок за 1 млн на 10 лет"]])}
${FBOX(MI_F.basics.slice(1))}
${SEC("Функции издержек")}
${FBOX(MI_F.cost)}
${ASIDE("Как средняя оценка: если новая оценка ниже средней, средняя падает. Так и MC < AC тянет AC вниз.", "info")}`,
ex:[
{t:"fill", h:"Издержки из функции: TC = 200 + 4Q + 0.5Q^2", w:["FC — часть без Q, VC — всё с Q. ATC = TC/Q, MC = dTC/dQ.", ""], items:[
 {q:"Fixed cost FC →", a:["200"], e:"Часть, не зависящая от Q: <b>200</b>."},
 {q:"Variable cost VC at Q = 10 →", a:["90"], e:"4 · 10 + 0,5 · 100 = <b>90</b>."},
 {q:"ATC at Q = 10 →", a:["29"], e:"TC = 200 + 90 = 290. ATC = 290 / 10 = <b>29</b> (AFC 20 + AVC 9)."},
 {q:"MC at Q = 10 →", a:["14"], e:"MC = 4 + Q = <b>14</b>. FC в MC не входит."}]},
{t:"fill", h:"Издержки из таблицы: TC при Q = 0, 1, 2, 3, 4 — 30, 50, 70, 84, 104", w:["MC = TC(Q) − TC(Q − 1). FC = TC при Q = 0.", ""], items:[
 {q:"Fixed cost →", a:["30"], e:"При Q = 0 платим только постоянные: <b>30</b>."},
 {q:"MC of the 3rd unit →", a:["14"], e:"84 − 70 = <b>14</b>."},
 {q:"ATC at Q = 4 →", a:["26"], e:"104 / 4 = <b>26</b>."}]},
{t:"fill", h:"Бухгалтерская и экономическая прибыль", w:["Бухгалтерская = TR − явные. Экономическая = TR − явные − неявные.", ""], items:[
 {q:"Revenue 500 000; explicit costs 300 000. Accounting profit →", a:["200000"], e:"500 000 − 300 000 = <b>200 000</b>."},
 {q:"Same firm: the owner could earn 150 000 elsewhere and rent out her own premises for 80 000. Economic profit →", a:["-30000"], e:"Неявные: 150 000 + 80 000 = 230 000. Экономическая прибыль = 200 000 − 230 000 = <b>−30 000</b>: выгоднее было бы работать в найме и сдать помещение."}]},
{t:"match", h:"Виды издержек — сопоставь пример", w:["Платёж — явные; упущенная выгода от своих ресурсов — неявные; не зависят от Q — постоянные.", ""],
 tt:["<b>Salary paid to a manager</b> — прямой платёж: явные. <b>Owner's own time</b> — денег не платят, но теряют альтернативу: неявные. <b>Spreading a 1 mln machine over 10 years</b> — амортизация. <b>Rent that does not depend on output</b> — постоянные издержки (FC).", ""],
 pairs:[["Salary paid to a manager", "Explicit cost"], ["The owner's own time spent running the shop", "Implicit cost"], ["Spreading the cost of a machine over 10 years", "Depreciation"], ["Monthly rent that does not depend on output", "Fixed cost"]]},
{t:"mc", h:"MC и средние издержки", w:["MC ниже средних тянет их вниз, выше — вверх; MC пересекает ATC и AVC в их минимумах.", ""], items:[
 {q:"MC = 50, ATC = 40. If output increases, ATC will:", o:["Rise", "Fall", "Stay the same"], a:0, keep:true, e:"Новая единица дороже средней — средняя растёт."},
 {q:"MC crosses the ATC curve:", o:["At the minimum of ATC", "At the maximum of ATC", "Where ATC = 0", "Never"], a:0, keep:true, e:"Пока MC < ATC, ATC падает; когда MC > ATC — растёт. Значит, пересечение — в минимуме ATC."},
 {q:"As output grows, average FIXED cost:", o:["Always falls", "Always rises", "Is constant", "First falls, then rises"], a:0, keep:true, e:"AFC = FC / Q: постоянная сумма делится на всё большее Q."}]}]},

/* ================================================================ 9 */
{id:"mi-9-comp", unit:"4", kind:"Perfect competition", title:"Совершенная конкуренция", ru:"P = MC, прибыль и убытки, точка закрытия, долгосрочное равновесие, рыночное предложение",
theory:`
${LEAD("Конкурентная фирма не влияет на цену (price taker): P = MR. Она выбирает только количество — там, где <b>P = MC</b>.")}
${SEC("Формулы")}
${FBOX(MI_F.comp)}
${SEC("Что с прибылью при q*")}
${PAIRS(["Цена", "Результат", "Что делать"], [["P > ATC", "экономическая прибыль", "производить"], ["P = ATC", "нулевая экономическая прибыль", "производить (это нормально)"], ["AVC < P < ATC", "убыток, но меньше FC", "производить в коротком периоде"], ["P < min AVC", "не покрывает даже переменные", "<b>закрыться</b> (q = 0), убыток = FC"]])}
${SEC("Долгий период")}
${KCAP("Прибыль → входят новые фирмы → предложение растёт → цена падает. Убытки → фирмы уходят. Итог: P = min ATC, экономическая прибыль = 0.")}`,
ex:[
{t:"mc", h:"Цена и решение фирмы: min ATC = 15, min AVC = 10", w:["Сравни P с min ATC (прибыль или убыток) и с min AVC (работать или закрыться).", ""], items:[
 {q:"P = 18", o:["Positive economic profit", "Zero economic profit", "Loss, but keep producing", "Shut down"], a:0, keep:true, e:"18 > min ATC = 15 — на каждой единице прибыль."},
 {q:"P = 15", o:["Positive economic profit", "Zero economic profit", "Loss, but keep producing", "Shut down"], a:1, keep:true, e:"P = min ATC — нулевая экономическая прибыль (точка безубыточности)."},
 {q:"P = 12", o:["Positive economic profit", "Zero economic profit", "Loss, but keep producing", "Shut down"], a:2, keep:true, e:"10 < 12 < 15: убыток, но выручка покрывает переменные издержки и часть постоянных — работать лучше, чем закрыться."},
 {q:"P = 8", o:["Positive economic profit", "Zero economic profit", "Loss, but keep producing", "Shut down"], a:3, keep:true, e:"8 < min AVC = 10 — даже переменные не покрыты. Закрыться: убыток ограничится FC."}]},
{t:"fill", h:"Фирма на числах: TC = 50 + 2q + q^2, цена P = 22", w:["MC = dTC/dq, оптимум P = MC, прибыль = TR − TC.", ""], items:[
 {q:"Profit-maximizing output q →", a:["10"], e:"MC = 2 + 2q = 22 → <b>q = 10</b>."},
 {q:"Profit at that output →", a:["50"], e:"TR = 22 · 10 = 220. TC = 50 + 20 + 100 = 170. Прибыль = <b>50</b>."},
 {q:"If the price fell to 12, what output would the firm choose? →", a:["5"], e:"2 + 2q = 12 → <b>q = 5</b>. AVC = 2 + q = 7 < 12 — работать выгодно, хотя ATC(5) = 10 + 2 + 5 = 17 > 12 (убыток)."}]},
{t:"fill", h:"Рынок из многих фирм", w:["Рыночное предложение = число фирм × предложение одной.", ""], items:[
 {q:"200 identical firms, each supplies q = (P − 4) / 2 for P ≥ 4. Market demand Qd = 1000 − 100P. Equilibrium price →", a:["7"], e:"Qs = 200 · (P − 4)/2 = 100P − 400. 100P − 400 = 1000 − 100P → 200P = 1400 → <b>P = 7</b>."},
 {q:"…market quantity →", a:["300"], e:"Q = 1000 − 700 = <b>300</b> (по 1,5 у каждой фирмы)."}]},
{t:"tf", h:"Верно или нет?", w:["P = MR = MC; закрытие — по min AVC; в долгом периоде прибыль = 0.", ""], items:[
 {q:"A perfectly competitive firm can raise its price above the market price without losing customers.", a:false, e:"Товар одинаковый, продавцов много — все покупатели уйдут к другим. Спрос для фирмы горизонтальный."},
 {q:"The short-run shutdown point is the minimum of average TOTAL cost.", a:false, e:"Минимум <b>AVC</b>. Между min AVC и min ATC фирма работает с убытком, но меньшим, чем FC."},
 {q:"If firms in a competitive industry earn economic profits, new firms enter and the price falls.", a:true, e:"Так рынок приходит к P = min ATC и нулевой экономической прибыли."},
 {q:"For a perfectly competitive firm, marginal revenue equals price.", a:true, e:"Каждая дополнительная единица продаётся по той же рыночной цене."}]}]},

/* ================================================================ 10 */
{id:"mi-10-monop", unit:"4", kind:"Monopoly", title:"Монополия и рыночные структуры", ru:"Типы рынков, барьеры, MR = MC, предельная выручка, цена выше MC, прибыль и убыток на графике",
theory:`
${LEAD("Любая фирма максимизирует прибыль при <b>MR = MC</b>. У монополиста MR ниже цены, поэтому его цена выше MC.")}
${SEC("Рыночные структуры")}
${PAIRS(["Структура", "Фирм", "Товар", "Вход"], [["Perfect competition", "очень много", "одинаковый", "свободный"], ["Monopolistic competition", "много", "дифференцированный", "относительно свободный"], ["Oligopoly", "несколько крупных", "любой", "барьеры; фирмы следят друг за другом"], ["Monopoly", "один", "без близких заменителей", "сильные барьеры (патент, лицензия)"]])}
${SEC("Формулы")}
${FBOX(MI_F.mon)}
${ASIDE("Чтобы продать ещё единицу, монополист снижает цену на <b>все</b> единицы, поэтому MR < P. В оптимуме MR = MC, значит P > MC — и возникают чистые потери.")}`,
ex:[
{t:"match", h:"Какая структура рынка — сопоставь", w:["Смотри на число фирм, одинаковость товара и барьеры входа.", ""],
 tt:["<b>Cafés with different menus</b> — много фирм, разный товар, легко открыться: монополистическая конкуренция. <b>Three mobile operators</b> — несколько крупных, следят друг за другом: олигополия. <b>The only water supplier</b> — монополия. <b>Thousands of wheat farmers</b> — одинаковый товар, никто не влияет на цену: совершенная конкуренция.", ""],
 pairs:[["Many cafés with different menus", "Monopolistic competition"], ["Three mobile operators in the country", "Oligopoly"], ["The only water supplier in a city", "Monopoly"], ["Thousands of wheat farmers", "Perfect competition"]]},
{t:"fill", h:"Монополист на числах: спрос P = 200 − 2Q, TC = 500 + 40Q", w:["MR = a − 2bQ, MC = dTC/dQ, MR = MC, цена со спроса, прибыль = TR − TC.", ""], items:[
 {q:"MR at Q = 30 →", a:["80"], e:"MR = 200 − 4Q = 200 − 120 = <b>80</b>."},
 {q:"Profit-maximizing quantity →", a:["40"], e:"MC = 40. 200 − 4Q = 40 → <b>Q = 40</b>."},
 {q:"Monopoly price →", a:["120"], e:"P = 200 − 2 · 40 = <b>120</b> — выше MC = 40."},
 {q:"Profit →", a:["2700"], e:"TR = 120 · 40 = 4800. TC = 500 + 1600 = 2100. Прибыль = <b>2700</b>."},
 {q:"Deadweight loss (competitive output: P = MC) →", a:["1600"], e:"Qc: 200 − 2Q = 40 → Q = 80. DWL = ½ · (80 − 40) · (120 − 40) = ½ · 40 · 80 = <b>1600</b>."}]},
{t:"mc", h:"Почему монополист так поступает", w:["MR = MC для любой фирмы; у монополиста MR < P, значит P > MC.", ""], items:[
 {q:"Why is a monopolist's MR below price?", o:["To sell one more unit it must lower the price on all units", "Because its fixed costs are high", "Because MC is rising", "Because it is a price taker"], a:0, keep:true, e:"Дополнительная единица приносит свою цену, но все прежние единицы теперь продаются дешевле — MR меньше P."},
 {q:"At its profit-maximizing output a monopolist charges:", o:["P > MC", "P = MC", "P < MC", "P = MR"], a:0, keep:true, e:"MR = MC, а цена берётся со спроса, который выше MR. Поэтому P > MC."},
 {q:"Which is NOT a barrier to entry?", o:["Many small sellers of an identical product", "A patent", "A government licence", "Control of a key resource"], a:0, keep:true, e:"Много мелких продавцов — признак совершенной конкуренции, а не барьер."}]},
{t:"mc", h:"Прибыль или убыток на графике монополии", fig:"A", w:["Прямоугольник (P − ATC) × Q: ATC выше цены — убыток.", ""], items:[
 {q:"On this graph, the monopolist at Qm:", o:["Makes an economic loss", "Makes an economic profit", "Breaks even", "Should produce where P = MC"], a:0, keep:true, e:"При Q<sub>m</sub> AC выше P<sub>m</sub>: на каждой единице убыток AC − P<sub>m</sub>. Красный прямоугольник — весь убыток."},
 {q:"Why does it produce Qm and not more?", o:["Because MR = MC at Qm", "Because AC is lowest at Qm", "Because demand is highest at Qm", "Because P = AC at Qm"], a:0, keep:true, e:"Даже в убытке фирма выбирает выпуск, где MR = MC: так убыток минимален."}]},
{t:"match", h:"Площади на графике: TR = TVC + TFC + прибыль", fig:"C", w:["Высота до N — AVC, от N до M — AFC, от M до P<sub>E</sub> — прибыль на единицу; ширина — Q<sub>E</sub>.", ""],
 tt:["Вся площадь 0–P<sub>E</sub> × Q<sub>E</sub> — выручка. <b>1 + 2 + 3</b> = TR. <b>2 + 3</b> = ATC · Q = общие издержки TC. <b>3</b> = AVC · Q = TVC. <b>1</b> = прибыль.", ""],
 pairs:[["1 + 2 + 3", "Total revenue"], ["2 + 3", "Total cost"], ["3", "Total variable cost"], ["1", "Economic profit"]]}]}
];
