/* =========================================================
   中文 — справочные данные раздела «Иероглифы»:
   значения ключей (ZH_RADM), как учить иероглифы (ZH_HOW), справочник черт и ключей (ZH_REF)
   ========================================================= */
const ZH_RADM = {
  "亻":["человек","person"], "人":["человек","person"], "口":["рот","mouth"], "女":["женщина","woman"], "子":["ребёнок","child"],
  "氵":["вода","water"], "水":["вода","water"], "冫":["лёд, холод","ice, cold"], "火":["огонь","fire"], "灬":["огонь","fire"],
  "木":["дерево","tree, wood"], "艹":["трава","grass"], "竹":["бамбук","bamboo"], "⺮":["бамбук","bamboo"], "米":["рис","rice"],
  "讠":["речь","speech"], "言":["речь","speech"], "心":["сердце, чувства","heart, feelings"], "忄":["сердце, чувства","heart, feelings"],
  "扌":["рука","hand"], "手":["рука","hand"], "又":["рука","hand"], "攵":["рука с палкой: действие","hand with a stick: action"],
  "足":["нога","foot"], "⻊":["нога","foot"], "走":["идти","walk"], "辶":["движение, путь","movement"], "彳":["шаг","step"], "止":["стопа","foot, stop"],
  "日":["солнце, день","sun, day"], "月":["луна; плоть","moon; flesh"], "目":["глаз","eye"], "耳":["ухо","ear"], "页":["голова","head"],
  "土":["земля","earth"], "山":["гора","mountain"], "石":["камень","stone"], "王":["яшма","jade"], "玉":["яшма","jade"], "𤣩":["яшма","jade"],
  "纟":["шёлк, нить","silk, thread"], "糸":["шёлк, нить","silk, thread"], "巾":["ткань","cloth"], "衣":["одежда","clothes"], "衤":["одежда","clothes"],
  "宀":["крыша","roof"], "广":["навес, здание","shelter, building"], "门":["дверь","door"], "穴":["пещера, дыра","cave, hole"], "冂":["рамка","frame"],
  "犭":["животное","animal"], "犬":["собака","dog"], "鸟":["птица","bird"], "鱼":["рыба","fish"], "羊":["баран","sheep"], "牛":["бык","ox"], "马":["лошадь","horse"],
  "钅":["металл","metal"], "金":["металл","metal"], "贝":["раковина: деньги","shell: money"], "刂":["нож","knife"], "刀":["нож","knife"], "斤":["топор","axe"],
  "疒":["болезнь","illness"], "雨":["дождь, погода","rain, weather"], "饣":["еда","food"], "食":["еда","food"], "车":["повозка","vehicle"],
  "阝":["холм / город","hill / town"], "力":["сила","strength"], "大":["большой; человек","big; person"], "小":["маленький","small"], "白":["белый","white"],
  "欠":["открытый рот","open mouth"], "立":["стоять","stand"], "田":["поле","field"], "示":["алтарь","altar"], "礻":["алтарь","altar"], "见":["видеть","see"],
  "一":["один","one"], "丨":["вертикальная черта","vertical stroke"], "丿":["откидная черта","falling stroke"], "丶":["точка","dot"], "乙":["изгиб","hook"],
  "二":["два","two"], "十":["десять","ten"], "八":["восемь","eight"], "儿":["ноги, сын","legs, son"], "几":["столик","small table"], "夕":["вечер","evening"],
  "工":["работа","work"], "己":["сам","self"], "弓":["лук","bow"], "方":["квадрат, сторона","square, side"], "气":["пар","air"], "毛":["шерсть","fur"],
  "用":["использовать","use"], "生":["рождаться","birth"], "电":["молния","electricity"], "老":["старый","old"], "舌":["язык","tongue"], "身":["тело","body"],
  "里":["деревня","village"], "黑":["чёрный","black"], "高":["высокий","tall"], "长":["длинный","long"], "非":["не","not"], "面":["лицо","face"]
};

const ZHH = (L, fn) => { const kz = ZHL, kh = HL; ZHL = L || "ru"; HL = L || "ru"; try { return fn(); } finally { ZHL = kz; HL = kh; } };

/* как учить иероглифы: методика и на чём она основана */
const ZH_HOW = L => ZHH(L, ()=>`
${LEAD(TZ("Иероглиф запоминается лучше всего, когда ты его <b>пишешь по памяти</b>, а не просто смотришь. Поэтому каждый новый иероглиф проходит три шага, а потом возвращается в повторения через растущие промежутки.", "A character sticks best when you <b>write it from memory</b>, not just look at it. So every new character goes through three steps, then comes back for review at growing intervals."))}
${SEC(TZ("Три шага нового иероглифа", "Three steps for a new character"))}
${CHOOSE([
  {lab:TZ("1 · Смотри", "1 · Watch"), key:TZ("порядок черт", "stroke order"), plain:true, ex:[TZ("Анимация и черты по шагам: название, направление, откуда начинать.", "Animation and strokes step by step: name, direction, where to start.")]},
  {lab:TZ("2 · Обведи", "2 · Trace"), key:TZ("по контуру", "over the outline"), plain:true, ex:[TZ("Пишешь поверх серого контура. Ошибся — система скажет, что не так: порядок, направление или место.", "Write over a grey outline. Make a mistake and you'll hear what's wrong: order, direction or position.")]},
  {lab:TZ("3 · Напиши сам", "3 · Write"), key:TZ("по памяти", "from memory"), acc:true, plain:true, ex:[TZ("Пустая клетка. Это главный шаг: вспоминание из памяти закрепляет лучше, чем повторное разглядывание.", "An empty grid. This is the key step: recalling from memory fixes it better than looking again.")]}
])}
${SEC(TZ("Почему так", "Why it works"))}
<ul class="hz-why">
<li>${TZ("<b>Письмо помогает читать.</b> У китайских школьников умение писать и копировать иероглифы связано с навыком чтения (Tan et al., 2005, PNAS). У взрослых, изучающих китайский, письмо от руки лучше улучшает узнавание иероглифов, чем набор пиньинем (Guan et al., 2011).", "<b>Writing helps reading.</b> In Chinese schoolchildren, writing and copying skill is linked to reading ability (Tan et al., 2005, PNAS). For adult learners, handwriting improves character recognition more than typing in pinyin (Guan et al., 2011).")}</li>
<li>${TZ("<b>Вспоминать полезнее, чем перечитывать.</b> Попытка достать ответ из памяти закрепляет его сильнее, чем повторное изучение (Karpicke & Roediger, 2008, Science). Поэтому шаг 3 — без подсказки.", "<b>Recall beats re-reading.</b> Retrieving an answer strengthens memory more than studying it again (Karpicke & Roediger, 2008, Science). That's why step 3 has no outline.")}</li>
<li>${TZ("<b>Повторения с интервалами.</b> Иероглиф, который ты написал легко, вернётся через несколько дней, трудный — завтра. Так меньше повторов и прочнее память.", "<b>Spaced review.</b> An easy character comes back in a few days, a hard one tomorrow. Fewer reviews, stronger memory.")}</li>
<li>${TZ("<b>Ключи и части.</b> Большинство иероглифов — это смысловая часть (ключ) + часть, подсказывающая звучание. Кто знает ключи, запоминает новые иероглифы быстрее (Taft & Chung, 1999; Shen, 2005). Поэтому в окне иероглифа есть ключ и разложение на части.", "<b>Radicals and parts.</b> Most characters are a meaning part (radical) + a sound hint. Knowing radicals speeds up learning new characters (Taft & Chung, 1999; Shen, 2005). That's why the character window shows the radical and the parts.")}</li>
<li>${TZ("<b>Сразу обратная связь.</b> Ошибку исправляют на той черте, где она случилась, — так неправильный порядок не успевает закрепиться.", "<b>Immediate feedback.</b> A mistake is corrected on the very stroke — so a wrong order doesn't become a habit.")}</li>
</ul>
${SEC(TZ("Советы", "Tips"))}
<ul class="hz-why">
<li>${TZ("5–10 новых иероглифов в день и все повторения — лучше, чем 30 раз в неделю.", "5–10 new characters a day plus all reviews beats 30 once a week.")}</li>
<li>${TZ("Произноси слово вслух, пока пишешь: звук, значение и форма запоминаются вместе.", "Say the word aloud as you write: sound, meaning and shape stick together.")}</li>
<li>${TZ("Сначала ищи знакомые части: 妈 = 女 «женщина» + 马 mǎ (подсказка звучания).", "Look for familiar parts first: 妈 = 女 “woman” + 马 mǎ (the sound hint).")}</li>
<li>${TZ("Учи иероглифы в словах урока, а не по одному — в тексте их легче узнать.", "Learn characters within the lesson's words, not alone — they're easier to recognise in text.")}</li>
</ul>`);

/* справочник: правила порядка черт, основные черты, ключи учебника */
const ZH_REF = L => ZHH(L, ()=>{
  const rules = [
    ["十", TZ("Сначала горизонтальная, потом вертикальная", "Horizontal before vertical")],
    ["人", TZ("Сначала откидная влево, потом вправо", "Left-falling before right-falling")],
    ["三", TZ("Сверху вниз", "Top to bottom")],
    ["川", TZ("Слева направо", "Left to right")],
    ["月", TZ("Сначала снаружи, потом внутри", "Outside before inside")],
    ["日", TZ("Сначала внутри, потом закрыть рамку", "Fill the inside, then close the frame")],
    ["小", TZ("Сначала середина, потом края", "Middle before the sides")]
  ];
  const strokes = [
    ["一", "横", "héng", TZ("горизонтальная: слева направо", "horizontal: left to right")],
    ["丨", "竖", "shù", TZ("вертикальная: сверху вниз", "vertical: top to bottom")],
    ["丿", "撇", "piě", TZ("откидная влево", "left-falling")],
    ["丶", "点", "diǎn", TZ("точка", "dot")],
    ["㇏", "捺", "nà", TZ("откидная вправо, с нажимом в конце", "right-falling, pressing at the end")],
    ["㇀", "提", "tí", TZ("восходящая: снизу-слева вверх", "rising: from lower left upwards")],
    ["𠃍", "横折", "héngzhé", TZ("горизонтальная с изломом вниз", "horizontal turning down")],
    ["亅", "竖钩", "shùgōu", TZ("вертикальная с крючком", "vertical with a hook")]
  ];
  const rads = [["𤣩","现球"],["⻊","跑踢"],["⺮","篮笔"],["欠","歌吹"],["木","杯椅"],["刂","别到"],["纟","给结"],["忄","忙快"],["子","孩孙"],["广","店床"],["犭","猫狗"],["心","想念"],["彳","行往"],["攵","放收"],["又","欢对"],["巾","帮帽"],["土","块地"],["灬","热黑"],["走","超起"],["穴","空穿"],["疒","病疯"],["冫","冷冰"],["止","趾步"],["冂","同网"],["斤","新所"],["页","颜须"],["雨","雪雾"],["贝","财货"],["山","岭岖"],["大","天夫"]];
  return `${LEAD(TZ("Правила порядка черт, восемь основных черт и все ключи из учебника. Нажми на иероглиф — откроется окно с анимацией и тренировкой.", "Stroke-order rules, the eight basic strokes and every radical from the textbook. Tap a character to open the animation and practice."))}
${SEC(TZ("Семь правил порядка черт", "Seven stroke-order rules"))}
<div class="hz-rules">${rules.map(([c, r], i)=>`<div class="hz-rule"><button type="button" class="zpict-c" data-hz="${c}" lang="zh-CN">${c}</button><div><b>${i + 1}. ${r}</b>${ZSTEPS(c)}</div></div>`).join("")}</div>
${SEC(TZ("Основные черты", "Basic strokes"))}
<div class="kn-t zstk" style="--cols:56px minmax(0,1fr)">${strokes.map(([s, n, py, d])=>`<div class="kn-tr"><span class="zrad-r" lang="zh-CN">${s}</span><span>${Z(n)} <i class="zstk-py">${py}</i><small>${d}</small></span></div>`).join("")}</div>
${SEC(TZ("Ключи учебника", "Radicals from the textbook"))}
<div class="kn-t zrad" style="--cols:56px minmax(0,1fr) minmax(0,1fr)">${rads.map(([r, ex])=>{ const m = ZH_RADM[r]; return `<div class="kn-tr"><span class="zrad-r" lang="zh-CN">${r}</span><span>${m ? TZ(m[0], m[1]) : ""}</span><span class="zstk-ex">${[...ex].map(c=>`<button type="button" class="zstk-c" data-hz="${c}" lang="zh-CN">${c}</button>`).join("")}</span></div>`; }).join("")}</div>
<p class="hz-cred">${TZ("Анимация и проверка черт — <a href=\"https://hanziwriter.org\" target=\"_blank\" rel=\"noopener\">Hanzi Writer</a> (MIT). Данные черт и разложения — <a href=\"https://github.com/skishore/makemeahanzi\" target=\"_blank\" rel=\"noopener\">Make Me a Hanzi</a> (Arphic Public License). Тексты и задания — по учебнику «HSK 标准教程 2».", "Stroke animation and checking — <a href=\"https://hanziwriter.org\" target=\"_blank\" rel=\"noopener\">Hanzi Writer</a> (MIT). Stroke data and decompositions — <a href=\"https://github.com/skishore/makemeahanzi\" target=\"_blank\" rel=\"noopener\">Make Me a Hanzi</a> (Arphic Public License). Texts and exercises follow “HSK Standard Course 2”.")}</p>`;
});
