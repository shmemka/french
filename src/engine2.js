(function(){
"use strict";
const $ = (s,r=document)=>r.querySelector(s), $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const main = $("#main"), nav = $("#nav"), app = $(".app");
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
const plural = (n, f) => { const a = Math.abs(n) % 100, b = a % 10; return a > 10 && a < 20 ? f[2] : b > 1 && b < 5 ? f[1] : b === 1 ? f[0] : f[2]; };
const shuffle = a => { for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
const ls = { get(k){ try { return localStorage.getItem(k); } catch(e) { return null; } }, set(k,v){ try { localStorage.setItem(k,v); } catch(e) {} } };
const ICO_TROPHY = f7("rosette");
const ICON_PLAY = f7("speaker_2_fill");
/* стрелки в кнопках — тоже иконки Framework7 */
const ARR = f7("arrow_right", "f7-arr"), ARL = f7("arrow_left", "f7-arr"), ARD = f7("arrow_down", "f7-arr");
const ICO = {
  home:f7("house", "ico"),
  test:f7("checkmark_rectangle", "ico"),
  quiz:f7("rectangle_stack", "ico"),
  cheat:f7("table", "ico"),
  side:f7("sidebar_left"),
  star:f7on("star", "star_fill"),
  lex:f7("book", "ico"),
  check:f7("checkmark_alt"),
  bank:f7("square_grid_2x2", "ico"),
  shop:f7("bag", "ico"),
  cloud:f7("cloud"),
  chev:f7("chevron_down", "ng-ch"),
  search:f7("search"),
  gram:f7("square_stack_3d_up", "ico"),
  ref:f7("bookmark", "ico"),
};
/* иконки карточек тем (по типу темы) */
const KIND_ICO = {
  chat:f7("chat_bubble_2"), doc:f7("doc_text"), vocab:f7("textformat"), sound:f7("waveform"), conj:f7("table"),
  spark:f7("sparkles"), bulb:f7("lightbulb"), medal:f7("checkmark_seal"), pencil:f7("pencil"), read:f7("book")
};
function kindIco(tp){
  const k = String(tp.kind || "").toLowerCase();
  const id = /^(communication|общение|communic)/.test(k) ? "chat" : /^(grammaire|грамматика|grammar)/.test(k) ? "doc" : /^(vocabulaire|лексика|vocab)/.test(k) ? "vocab"
    : /phon|произн|pronun/.test(k) ? "sound" : /спряж|conjug/.test(k) ? "conj" : /нуля|scratch/.test(k) ? "spark" : /полезно|good to know/.test(k) ? "bulb"
    : /delf|^test/.test(k) ? "medal" : /compréhension|чтение|reading/.test(k) ? "read" : tp.sec === "cahier" || tp.sec === "tutor" ? "pencil" : "doc";
  return KIND_ICO[id];
}
/* цвет группы: юнит 0–4, грамматика, справочник */
const HUE_OF = tp => tp.sec === "gram" ? "g" : tp.sec === "ref" ? "r" : String(tp.unit || "0");

/* =========================================================
   i18n
   ========================================================= */
const I18N = {
ru:{
  units:{"0":"Bienvenue ! (база)","1":"Je suis…","2":"Près de moi","3":"Qu’est-ce qu’on mange ?"},
  topics:"Темы", home:"Главная", test:"Самопроверка", quizlet:"Quizlet", cheat:"Памятка", account:"Личный кабинет",
  fromBook:"Из учебника", ref:"Для справки", hideNav:"Скрыть меню", showNav:"Меню", lang:"Язык",
  you:"Ты", guest:"Гость",
  cloud:{local:"Сохраняется только в этом браузере", loading:"Подключаюсь к облаку…", saved:"Сохранено в облаке", saving:"Сохраняю…", error:"Облако недоступно — сохраняю локально", readonly:"Облако только для чтения — сохраняю локально", signedout:"Без входа — только в этом браузере"},
  tipCloudS:"Ответы и прогресс сохраняются в облаке под твоим аккаунтом и видны с любого устройства, где ты вошёл на сайт.", tipSignIn:"Сейчас прогресс хранится только в этом браузере. Войди в личном кабинете, чтобы он сохранялся в облаке.",
  accCloudOnS:"Твои ответы, прогресс, история самопроверок и карточки Quizlet хранятся в облаке под твоим аккаунтом. Их видишь только ты — с любого устройства, где ты вошёл.", accCloudErrS:"Ты вошёл, но облако сейчас не отвечает. Прогресс сохраняется в этом браузере и отправится в облако, как только связь появится.", accNoCloud:"Облако для этой копии сайта не настроено: прогресс сохраняется только в этом браузере.", noTable:"похоже, в Supabase не создана таблица — выполни schema.sql",
  authIn:"Вход", authUp:"Регистрация", authInH:"Войти в аккаунт", authUpH:"Создать аккаунт", authMagicH:"Вход по ссылке", authResetH:"Восстановить пароль",
  authInSub:"Чтобы прогресс сохранялся в облаке и был виден на телефоне и компьютере.", authUpSub:"Нужны только почта и пароль (от 6 символов).", authMagicSub:"Пришлём на почту ссылку — нажми её, и ты войдёшь без пароля.", authResetSub:"Пришлём на почту ссылку, по которой можно задать новый пароль.",
  email:"Почта", password:"Пароль", authInBtn:"Войти", authUpBtn:"Зарегистрироваться", authMagicBtn:"Прислать ссылку", authResetBtn:"Прислать ссылку", authMagicLink:"Войти по ссылке на почту", authForgot:"Забыл пароль", authBackPw:"Вход по паролю",
  authNote:"То, что ты уже решил без входа, после входа перенесётся в аккаунт.", authWait:"Секунду…",
  authCheckMail:e=>`Готово! Мы отправили письмо на ${e}. Открой его и нажми ссылку, чтобы подтвердить почту. После этого ты войдёшь.`, authMagicSent:e=>`Ссылка для входа отправлена на ${e}. Если письма нет, проверь «Спам».`, authResetSent:e=>`Ссылка для смены пароля отправлена на ${e}.`,
  aeCreds:"Неверная почта или пароль.", aeNotConfirmed:"Почта ещё не подтверждена. Открой письмо и нажми ссылку.", aeExists:"Такой аккаунт уже есть. Нажми «Войти» внизу.", aeRate:"Слишком много попыток или писем. Подожди немного и попробуй снова.", aeShort:"Пароль должен быть не короче 6 символов.", aeLink:"Ссылка устарела или уже использована. Запроси новую.", aeNet:"Нет связи с сервером. Проверь интернет (и VPN, если он нужен).", aeEmail:"Проверь адрес почты.",
  favAddedEs:"Добавлено в Избранное (Лексика)", spFav:"Добавить в Избранное", spUnfav:"Убрать из Избранного", spLoading:"перевожу…", spNone:"перевод не найден", spOffline:"нет интернета", spAuto:"автоперевод", spAlso:"ещё:", spAltA:x=>`Показать перевод ${x}`, spForm:x=>`форма глагола ${x}`, favAdded:"Добавлено в Избранное (Quizlet)", favRemoved:"Убрано из Избранного",
  qzFav:"Избранное", qzFavSub:"Слова, отмеченные сердечком", qzFavEmptyH:"Здесь пока пусто", qzFavEmpty:"Выдели любое французское слово или фразу на сайте и нажми на сердечко — оно появится здесь. Ещё можно нажать на сердечко рядом со словом в любом наборе.",
  signOut:"Выйти", pwChange:"Сменить пароль", pwNewH:"Новый пароль", pwNew:"Новый пароль (от 6 символов)", pwSave:"Сохранить пароль", pwSaved:"Пароль изменён", cancel:"Отмена",
  heroEyebrow:"Édito A1 · 2<sup>e</sup> édition · unités 0–3",
  heroLead:n=>`Грамматика и лексика по юнитам: понятные объяснения со схемами и таблицами, ${n} упражнений с мгновенной проверкой, карточки Quizlet и тест для самопроверки.`,
  startFirst:"Начать с первой темы", solved:"из {n} заданий решено", bookTopics:"тем из учебника", refTopics:"тем для справки", lastTest:"последняя самопроверка",
  how:[["Темы из учебника","Иди по порядку: сначала теория, потом задания под ней."],["Quizlet","Учи слова карточками, режимами «Заучивание», «Письмо» и «Подбор»."],["Памятка","Все таблицы на одной странице — чтобы быстро освежить правило."],["Самопроверка","Случайные вопросы по всем темам — видно, что уже усвоено, а что стоит повторить."]],
  tipTts:"Нажимай на французский текст с синим пунктиром — компьютер его прочитает. Лучше всего звучит в Safari или Chrome на Mac.",
  tipNoTts:"Твой браузер не умеет озвучивать текст, поэтому аудио-кнопки скрыты.",
  tipCloud:"Ответы и прогресс сохраняются в облаке и видны с любого устройства, где ты вошёл в Claude.",
  tipLocal:"Ответы и прогресс сохраняются в этом браузере.",
  bookSub:"Unités 0–3, с. 11–58", refSub:"Объяснения с нуля и то, что просто полезно знать", unit0note:" — основа, на которую опираются юниты 1–3",
  refEyebrow:"Для справки", toPractice:n=>`К заданиям (${n})`, practiceSub:"Практика по теме. Ответы проверяются сразу и сохраняются — можно вернуться позже.",
  back:"назад", next:"дальше",
  doneOf:(d,n,p)=>`${d} / ${n} заданий · ${p}%`,
  label:{mc:"Выбор ответа", tf:"Vrai ou faux", fill:"Впиши ответ", conj:"Спряжение", match:"Соедини пары", sort:"Распредели", order:"Собери фразу", listen:"Аудирование", cards:"Карточки", drill:"Читаем вслух"},
  best:p=>`лучший: ${p}%`, bestT:p=>`Лучший результат: ${p}%`, again:"Заново", showAnswers:"Показать ответы", shuffleAgain:"Перемешать заново",
  vrai:"Vrai — верно", faux:"Faux — неверно",
  answerN:n=>`Ответь на ${n} вопр.`, mcProg:(a,n,c)=>`${a} / ${n} · верно: ${c}`,
  instantHint:"Ответ проверяется сразу: Enter, Tab или клик в другое поле. Засчитывается первая попытка.",
  conjHint:"Каждая форма проверяется сразу — правильная подсветится зелёным, и курсор перейдёт дальше.",
  reporter:(g,d,n)=>`<b>${g}</b> верно · проверено ${d} из ${n}`,
  almost:"Почти! Проверь акценты:", answerIs:"Ответ:", insert:"вставить букву", insertA:c=>`вставить ${c}`,
  matchHint:"Нажми слева, потом справа", matchProg:(m,n,e)=>`Пар: ${m} / ${n} · ошибок: ${e}`, matchDone:e=>`<b>Готово!</b> Ошибок: ${e}`,
  sortHint:"Выбери карточку и нажми на колонку (или перетащи) — проверка сразу", sortProg:(p,n,e)=>`<b>${p}</b> из ${n} на месте · ошибок: ${e}`, sortDone:"Всё распределено!",
  orderHint:"Нажимай на слова по порядку — неверное слово сразу подсветится", orderProg:(d,n,g)=>`собрано ${d} из ${n} · без ошибок: ${g}`, collected:"Собрано!", errorsOnWay:n=>`ошибок по пути: ${n}`, wrongWord:"не это слово", errorsN:n=>`ошибок: ${n}`, yourSentence:"твоя фраза",
  listenNoTts:"Синтез речи в этом браузере недоступен — прочитай число и напиши его цифрами.", listen:"Слушать", slow:"медленно", listenHint:"Пиши цифры — ответ проверяется сразу", numberN:n=>`число ${n}`,
  cardsLeft:(q,k)=>`Осталось: <b>${q}</b> · знаю: ${k}`, flip:"нажми, чтобы перевернуть", flipA:"перевернуть карточку", knowIt:"Знаю", againCard:"Ещё раз", cardsHint:"«Знаю» убирает карточку, «Ещё раз» — отправляет в конец", deckDone:"Колода пройдена", deckDoneN:n=>`Все ${n} карточек пройдены.`, dirFr:"FR → RU", dirRu:"RU → FR",
  check:"Проверить", readN:(s,n)=>`Прочитано: ${s} / ${n}`, allRead:"<b>Все слова прочитаны</b>",
  cheatEyebrow:"Unités 1–3 · всё самое важное", cheatSub:"Все таблицы на одном экране — открывай, когда нужно быстро освежить правило.",
  testEyebrow:"Auto-évaluation · unités 0–3", testSub:n=>`Вопросы берутся случайно из банка (${n} шт.) по всем темам юнитов 1–2. Каждый раз — новый вариант. В конце — оценка из 20 и разбор по темам.`,
  modeNow:"Проверять сразу", modeEnd:"В конце", modeGroup:"Режим проверки", qN:n=>`${n} вопросов`, myTries:"Мои попытки",
  testRunEyebrow:(n,now)=>`Contrôle blanc · ${n} questions · ${now?"проверка сразу":"проверка в конце"}`,
  testRunSub:now=>now?"Каждый ответ проверяется сразу. Засчитывается первая попытка. В конце нажми «Узнать оценку».":"Отвечай на всё, потом нажми «Сдать работу» внизу.",
  getGrade:"Узнать оценку", submit:"Сдать работу", answered:(d,n)=>`Отвечено: ${d} / ${n}`, answeredOk:(d,n,g)=>`Отвечено: ${d} / ${n} · верно: <b>${g}</b>`,
  noAnswer:"(нет ответа)", total:(g,n)=>`Итог: ${g} / ${n}`,
  verdicts:[["Très bien !","Отлично — этот материал ты уже знаешь."],["Bien !","Хорошо, но есть темы, которые стоит повторить — они внизу."],["Passable","Проходной балл, но повтори темы с красными полосками."],["À revoir","Пройди темы с красными полосками ещё раз, потом попробуй новый вариант."]],
  gotOf:(g,n)=>`${g} из ${n} правильно.`, newVariant:"Новый вариант", byTopic:"По темам", byTopicSub:"Сверху — самые слабые. Нажми на тему, чтобы повторить.", review:"Разбор ответов",
  /* account */
  accEyebrow:"Личный кабинет", accCloudOn:"Твои ответы, прогресс, история самопроверок и карточки Quizlet хранятся в облаке Claude под твоим аккаунтом. Их видишь только ты — с любого устройства.",
  accCloudOff:"Облако сейчас недоступно (например, страница открыта без входа в Claude). Прогресс сохраняется в этом браузере и выгрузится в облако, когда ты откроешь сайт под своим аккаунтом.",
  stSolved:"заданий решено", stTopics:"тем пройдено полностью", stAvg:"средний результат", stTests:"самопроверок", stBest:"лучшая оценка", stWords:"слов выучено",
  history:"История самопроверок", noTests:"Самопроверок пока не было.", settings:"Настройки", reset:"Сбросить весь прогресс", resetConfirm:"Точно стереть всё? Нажми ещё раз", resetDone:"Прогресс сброшен",
  progressByTopic:"Прогресс по темам",
  lastSync:x=>`последняя синхронизация: ${x}`, pending:n=>`ждут отправки: ${n}`, lastErr:x=>`ошибка: ${x}`, syncNow:"Синхронизировать сейчас", inCloud:"Что лежит в облаке", checking:"Проверяю облако…",
  cloudSummary:(a,b,c,d)=>`результаты ${a} заданий · ответы в ${b} темах · ${c} слов в Quizlet · ${d} самопроверок`, cloudEmpty:"В облаке пока ничего нет.", cloudUnreach:"Не удалось прочитать облако.", updatedAt:x=>`обновлено ${x}`,
  /* quizlet */
  qzSub:"Карточки со словами из юнитов 0–2. Прогресс по каждому слову сохраняется.",
  qzAll:"Все слова", qzWords:"слов", qzLearned:"выучено", qzStarred:"со звёздочкой",
  qzModes:{review:"Повторение", cards:"Карточки", learn:"Заучивание", write:"Письмо", match:"Подбор"}, qzModesS:{review:"Повтор", cards:"Карточки", learn:"Учить", write:"Письмо", match:"Подбор"},
  srsNew:"новые", srsLrn:"учу", srsRev:"повтор", srsShow:"Показать ответ", srsG:["Снова","Трудно","Хорошо","Легко"], srsKeys:"Пробел — показать ответ · 1–4 — оценка", srsUndo:"Отменить", srsTag:["новое","учу","повтор","учу"],
  srsDoneH:"На сегодня всё!", srsNext:s=>`Следующее повторение — ${s}.`, srsToday:(a,n)=>`Сегодня: ${a} ${plural(a,["ответ","ответа","ответов"])}, новых слов — ${n}.`, srsMore:n=>`Ещё ${n} новых слов`, srsFc:"Повторения на неделю вперёд", srsDay:["Сегодня","Завтра"],
  srsPerDay:"Новых слов в день", srsHowS:"Как работает повторение", srsHow:"Посмотри на слово, вспомни перевод и открой ответ. Потом честно оцени себя: «Снова» — не вспомнил, «Трудно» — вспомнил с трудом, «Хорошо» — вспомнил, «Легко» — сразу. На кнопках видно, когда слово вернётся. Новое слово сначала повторяется через минуту и через 10 минут, потом через день, а дальше паузы растут: примерно 3 дня, неделя, две недели… Забытое слово снова начинает с коротких интервалов. Заходи каждый день — это занимает несколько минут.",
  srsDue:n=>`${n} к повтору`, srsWhen:s=>`Следующее повторение: ${s}`, srsU:{lt:"<1 мин", m:"мин", h:"ч", d:"д", mo:"мес", y:"г"}, srsIn:s=>`через ${s}`, srsTmrw:"завтра", srsNow:"сейчас", srsDays:n=>`${n} ${plural(n,["день","дня","дней"])}`, srsBadge:"карточек к повторению",
  qzShuffle:"Перемешать", qzStarOnly:"Только отмеченные", qzStill:"Ещё учу", qzKnow:"Знаю", qzPrev:"Назад", qzNext:"Далее", qzKeys:"Пробел — перевернуть · ← → — листать", qzEmpty:"Нет карточек со звёздочкой в этом наборе.",
  qzLearnDone:"Все слова набора выучены!", qzLearnDoneSub:"Можно сбросить прогресс набора и пройти заново — или выбрать другой набор.", qzResetSet:"Сбросить прогресс набора",
  qzChoose:"Выбери перевод", qzType:"Напиши по-французски", qzLv:["Новые","Учу","Почти","Выучено"], qzCorrect:"Juste !", qzWrongIs:"Правильно:", qzContinue:"Дальше", qzCheck:"Проверить", qzDontKnow:"Не знаю",
  qzWriteDone:(g,n)=>`Готово: ${g} из ${n}`, qzRetryWrong:"Повторить ошибки", qzRoundAgain:"Новый раунд",
  qzMatchHint:"Найди пары: французское слово и перевод. Время пошло с первого клика.", qzMatchDone:s=>`Готово за ${s} с`, qzBest:s=>`рекорд: ${s} с`, qzPlayAgain:"Играть снова",
  qzList:"Слова набора", qzStar:"отметить звёздочкой", qzSay:"произнести", qzLvShort:["новое","учу","почти","знаю"]
},
en:{
  units:{"0":"Bienvenue ! (basics)","1":"Je suis…","2":"Près de moi","3":"Qu’est-ce qu’on mange ?"},
  topics:"Topics", home:"Home", test:"Self-check", quizlet:"Quizlet", cheat:"Quick reference", account:"My account",
  fromBook:"From the textbook", ref:"Reference", hideNav:"Hide menu", showNav:"Menu", lang:"Language",
  you:"You", guest:"Guest",
  cloud:{local:"Saved in this browser only", loading:"Connecting to the cloud…", saved:"Saved to the cloud", saving:"Saving…", error:"Cloud unavailable — saving locally", readonly:"Cloud is read-only — saving locally", signedout:"Not signed in — this browser only"},
  tipCloudS:"Your answers and progress are saved in the cloud under your account and available on any device where you’re signed in.", tipSignIn:"Right now your progress is stored in this browser only. Sign in on the account page to save it to the cloud.",
  accCloudOnS:"Your answers, progress, self-check history and Quizlet cards are stored in the cloud under your account. Only you can see them — on any device where you’re signed in.", accCloudErrS:"You’re signed in, but the cloud isn’t responding right now. Progress is saved in this browser and will be uploaded once the connection is back.", accNoCloud:"The cloud isn’t set up for this copy of the site: progress is saved in this browser only.", noTable:"looks like the table hasn’t been created in Supabase — run schema.sql",
  authIn:"Sign in", authUp:"Sign up", authInH:"Sign in to your account", authUpH:"Create an account", authMagicH:"Sign in with a link", authResetH:"Reset your password",
  authInSub:"So your progress is saved to the cloud and shows up on your phone and computer.", authUpSub:"All you need is an e-mail and a password (6+ characters).", authMagicSub:"We’ll e-mail you a link — click it and you’re in, no password needed.", authResetSub:"We’ll e-mail you a link to set a new password.",
  email:"E-mail", password:"Password", authInBtn:"Sign in", authUpBtn:"Sign up", authMagicBtn:"Send link", authResetBtn:"Send link", authMagicLink:"Sign in with an e-mail link", authForgot:"Forgot password", authBackPw:"Sign in with password",
  authNote:"Whatever you’ve already done without signing in will move to your account.", authWait:"One moment…",
  authCheckMail:e=>`Done! We’ve sent an e-mail to ${e}. Open it and click the link to confirm your address. Then you’re in.`, authMagicSent:e=>`A sign-in link has been sent to ${e}. No e-mail? Check your spam folder.`, authResetSent:e=>`A password reset link has been sent to ${e}.`,
  aeCreds:"Wrong e-mail or password.", aeNotConfirmed:"Your e-mail isn’t confirmed yet. Open the e-mail and click the link.", aeExists:"This account already exists. Tap “Sign in” below.", aeRate:"Too many attempts or e-mails. Wait a bit and try again.", aeShort:"The password must be at least 6 characters.", aeLink:"The link has expired or was already used. Request a new one.", aeNet:"Can’t reach the server. Check your internet connection (and VPN if you need one).", aeEmail:"Check the e-mail address.",
  favAddedEs:"Added to Favourites (Vocabulary)", spFav:"Add to Favourites", spUnfav:"Remove from Favourites", spLoading:"translating…", spNone:"no translation found", spOffline:"you’re offline", spAuto:"machine translation", spAlso:"also:", spAltA:x=>`Show translation ${x}`, spForm:x=>`form of the verb ${x}`, favAdded:"Added to Favourites (Quizlet)", favRemoved:"Removed from Favourites",
  qzFav:"Favourites", qzFavSub:"Words you’ve marked with a heart", qzFavEmptyH:"Nothing here yet", qzFavEmpty:"Select any French word or phrase on the site and tap the heart — it will appear here. You can also tap the heart next to a word in any set.",
  signOut:"Sign out", pwChange:"Change password", pwNewH:"New password", pwNew:"New password (6+ characters)", pwSave:"Save password", pwSaved:"Password changed", cancel:"Cancel",
  heroEyebrow:"Édito A1 · 2<sup>e</sup> édition · unités 0–3",
  heroLead:n=>`Grammar and vocabulary unit by unit: clear explanations with diagrams and tables, ${n} exercises with instant checking, Quizlet flashcards and a self-check test.`,
  startFirst:"Start with the first topic", solved:"of {n} exercises done", bookTopics:"textbook topics", refTopics:"reference topics", lastTest:"last self-check",
  how:[["Textbook topics","Go in order: first the explanation, then the exercises below it."],["Quizlet","Learn words with flashcards, Learn, Write and Match modes."],["Quick reference","All the tables on one page — for a quick refresher."],["Self-check","Random questions across all topics — see what you’ve mastered and what to review."]],
  tipTts:"Click French text with a dotted blue underline and the computer will read it aloud. It sounds best in Safari or Chrome on a Mac.",
  tipNoTts:"Your browser can’t read text aloud, so the audio buttons are hidden.",
  tipCloud:"Your answers and progress are saved in the cloud and available on any device where you’re signed in to Claude.",
  tipLocal:"Your answers and progress are saved in this browser.",
  bookSub:"Unités 0–3, p. 11–58", refSub:"Explanations from scratch and things that are good to know", unit0note:" — the basics units 1–3 build on",
  refEyebrow:"Reference", toPractice:n=>`Go to exercises (${n})`, practiceSub:"Practice for this topic. Answers are checked instantly and saved — you can come back later.",
  back:"back", next:"next",
  doneOf:(d,n,p)=>`${d} / ${n} exercises · ${p}%`,
  label:{mc:"Multiple choice", tf:"Vrai ou faux", fill:"Type the answer", conj:"Conjugation", match:"Match the pairs", sort:"Sort", order:"Build the sentence", listen:"Listening", cards:"Flashcards", drill:"Read aloud"},
  best:p=>`best: ${p}%`, bestT:p=>`Best result: ${p}%`, again:"Start over", showAnswers:"Show answers", shuffleAgain:"Shuffle again",
  vrai:"Vrai — true", faux:"Faux — false",
  answerN:n=>`Answer ${n} questions`, mcProg:(a,n,c)=>`${a} / ${n} · correct: ${c}`,
  instantHint:"Answers are checked instantly: Enter, Tab or click another field. Your first attempt counts.",
  conjHint:"Each form is checked instantly — a correct one turns green and the cursor moves on.",
  reporter:(g,d,n)=>`<b>${g}</b> correct · checked ${d} of ${n}`,
  almost:"Almost! Check the accents:", answerIs:"Answer:", insert:"insert a letter", insertA:c=>`insert ${c}`,
  matchHint:"Click on the left, then on the right", matchProg:(m,n,e)=>`Pairs: ${m} / ${n} · mistakes: ${e}`, matchDone:e=>`<b>Done!</b> Mistakes: ${e}`,
  sortHint:"Pick a card and click a column (or drag it) — checked instantly", sortProg:(p,n,e)=>`<b>${p}</b> of ${n} placed · mistakes: ${e}`, sortDone:"All sorted!",
  orderHint:"Click the words in order — a wrong word is highlighted right away", orderProg:(d,n,g)=>`built ${d} of ${n} · without mistakes: ${g}`, collected:"Done!", errorsOnWay:n=>`mistakes along the way: ${n}`, wrongWord:"not that word", errorsN:n=>`mistakes: ${n}`, yourSentence:"your sentence",
  listenNoTts:"Speech isn’t available in this browser — read the number and write it in digits.", listen:"Listen", slow:"slowly", listenHint:"Type the digits — checked instantly", numberN:n=>`number ${n}`,
  cardsLeft:(q,k)=>`Left: <b>${q}</b> · known: ${k}`, flip:"click to flip", flipA:"flip the card", knowIt:"I know it", againCard:"Again", cardsHint:"«I know it» removes the card, «Again» sends it to the end", deckDone:"Deck finished", deckDoneN:n=>`All ${n} cards done.`, dirFr:"FR → EN", dirRu:"EN → FR",
  check:"Check", readN:(s,n)=>`Read: ${s} / ${n}`, allRead:"<b>All words read</b>",
  cheatEyebrow:"Unités 1–3 · the essentials", cheatSub:"All the tables on one screen — open it whenever you need a quick refresher.",
  testEyebrow:"Auto-évaluation · unités 0–3", testSub:n=>`Questions are drawn at random from a bank of ${n} covering every topic of units 1–2. A new version every time. At the end you get a grade out of 20 and a breakdown by topic.`,
  modeNow:"Check instantly", modeEnd:"At the end", modeGroup:"Checking mode", qN:n=>`${n} questions`, myTries:"My attempts",
  testRunEyebrow:(n,now)=>`Contrôle blanc · ${n} questions · ${now?"instant checking":"checked at the end"}`,
  testRunSub:now=>now?"Each answer is checked instantly. Your first attempt counts. At the end click «Get my grade».":"Answer everything, then click «Hand in» at the bottom.",
  getGrade:"Get my grade", submit:"Hand in", answered:(d,n)=>`Answered: ${d} / ${n}`, answeredOk:(d,n,g)=>`Answered: ${d} / ${n} · correct: <b>${g}</b>`,
  noAnswer:"(no answer)", total:(g,n)=>`Total: ${g} / ${n}`,
  verdicts:[["Très bien !","Excellent — you’ve got this material down."],["Bien !","Good, but some topics are worth reviewing — see below."],["Passable","A pass, but review the topics with red bars."],["À revoir","Go through the topics with red bars again, then try a new version."]],
  gotOf:(g,n)=>`${g} of ${n} correct.`, newVariant:"New version", byTopic:"By topic", byTopicSub:"The weakest are at the top. Click a topic to review it.", review:"Answer review",
  accEyebrow:"My account", accCloudOn:"Your answers, progress, self-check history and Quizlet cards are stored in the Claude cloud under your account. Only you can see them — from any device.",
  accCloudOff:"The cloud isn’t available right now (for example, the page is open without signing in to Claude). Progress is saved in this browser and will be uploaded when you open the site with your account.",
  stSolved:"exercises done", stTopics:"topics fully done", stAvg:"average score", stTests:"self-checks", stBest:"best grade", stWords:"words learned",
  history:"Self-check history", noTests:"No self-checks yet.", settings:"Settings", reset:"Reset all progress", resetConfirm:"Erase everything? Click again", resetDone:"Progress reset",
  progressByTopic:"Progress by topic",
  lastSync:x=>`last sync: ${x}`, pending:n=>`waiting to upload: ${n}`, lastErr:x=>`error: ${x}`, syncNow:"Sync now", inCloud:"What’s in the cloud", checking:"Checking the cloud…",
  cloudSummary:(a,b,c,d)=>`results for ${a} exercises · answers in ${b} topics · ${c} Quizlet words · ${d} self-checks`, cloudEmpty:"Nothing in the cloud yet.", cloudUnreach:"Couldn’t read the cloud.", updatedAt:x=>`updated ${x}`,
  qzSub:"Flashcards with the words from units 0–2. Progress for each word is saved.",
  qzAll:"All words", qzWords:"words", qzLearned:"learned", qzStarred:"starred",
  qzModes:{review:"Review", cards:"Flashcards", learn:"Learn", write:"Write", match:"Match"}, qzModesS:{review:"Review", cards:"Cards", learn:"Learn", write:"Write", match:"Match"},
  srsNew:"new", srsLrn:"learning", srsRev:"review", srsShow:"Show answer", srsG:["Again","Hard","Good","Easy"], srsKeys:"Space — show answer · 1–4 — rate", srsUndo:"Undo", srsTag:["new","learning","review","learning"],
  srsDoneH:"You’re done for today!", srsNext:s=>`Next review: ${s}.`, srsToday:(a,n)=>`Today: ${a} ${a===1?"answer":"answers"}, ${n} new ${n===1?"word":"words"}.`, srsMore:n=>`${n} more new words`, srsFc:"Reviews for the week ahead", srsDay:["Today","Tmrw"],
  srsPerDay:"New words per day", srsHowS:"How review works", srsHow:"Look at the word, recall the translation and reveal the answer. Then rate yourself honestly: Again — you forgot, Hard — you got it with effort, Good — you remembered, Easy — instantly. Each button shows when the word will come back. A new word is repeated after a minute and after 10 minutes, then the next day, and after that the gaps grow: about 3 days, a week, two weeks… A forgotten word starts again with short intervals. Come back every day — it only takes a few minutes.",
  srsDue:n=>`${n} due`, srsWhen:s=>`Next review: ${s}`, srsU:{lt:"<1m", m:"m", h:"h", d:"d", mo:"mo", y:"y"}, srsIn:s=>`in ${s}`, srsTmrw:"tomorrow", srsNow:"now", srsDays:n=>`${n} ${n===1?"day":"days"}`, srsBadge:"cards due for review",
  qzShuffle:"Shuffle", qzStarOnly:"Starred only", qzStill:"Still learning", qzKnow:"I know it", qzPrev:"Back", qzNext:"Next", qzKeys:"Space — flip · ← → — browse", qzEmpty:"No starred cards in this set.",
  qzLearnDone:"You’ve learned every word in this set!", qzLearnDoneSub:"Reset the set to go through it again — or pick another set.", qzResetSet:"Reset this set",
  qzChoose:"Choose the translation", qzType:"Write it in French", qzLv:["New","Learning","Almost","Learned"], qzCorrect:"Juste !", qzWrongIs:"Correct answer:", qzContinue:"Continue", qzCheck:"Check", qzDontKnow:"I don’t know",
  qzWriteDone:(g,n)=>`Done: ${g} of ${n}`, qzRetryWrong:"Retry mistakes", qzRoundAgain:"New round",
  qzMatchHint:"Find the pairs: the French word and its translation. The timer starts on your first click.", qzMatchDone:s=>`Done in ${s} s`, qzBest:s=>`best: ${s} s`, qzPlayAgain:"Play again",
  qzList:"Words in this set", qzStar:"star this word", qzSay:"pronounce", qzLvShort:["new","learning","almost","known"]
}};

/* --- второй курс (испанский) + упрощённый кабинет --- */
Object.assign(I18N.ru, {
  stLex:"слов в лексике", courseLabel:"Язык курса", courseNames:{fr:"Французский", es:"Испанский", zh:"Китайский"}, soon:"скоро", zhNav:"Курс китайского скоро появится. Пока можно заниматься французским или испанским.", zhEyebrow:"中文 · Китайский", zhH:"Скоро здесь будет китайский", zhP:"Курс китайского языка готовится. Как только появятся первые темы, они будут здесь.", zhBackFr:"К французскому", zhBackEs:"К испанскому", navSearch:"Тема или страница", navNone:"Ничего не нашлось", navNonePage:n=>`Нет тем на странице ${n}`, navMore:"Справка", tcOpen:"Открыть", homeAll:"Все", homeTip:"Подсказка", esUnits:{"1":"Nosotros y nosotras","2":"Quiero aprender español","3":"¿Dónde está Santiago?","4":"¿Cuál prefieres?"},
  gram:"Спряжение", gramSub:"Все три группы глаголов и главные неправильные", lexico:"Лексика", lexicoSub:"Все слова юнитов 1–3: слово — перевод на английский — пример. Нажми на испанское, чтобы послушать.",
  lexSearch:"Найти слово…", lexVerbs:"Глаголы", lexFav:"Избранное", lexFavSub:"слова, отмеченные сердечком", lexFavEmpty:"Здесь пока пусто. Выдели любое испанское слово на сайте и нажми на сердечко в подсказке — оно появится здесь.", lexAll:"Все", lexHide:"Скрыть перевод", lexShow:"Показать перевод", lexN:n=>`${n} ${plural(n,["слово","слова","слов"])}`, lexNone:"Ничего не найдено.",
  esHeroEyebrow:"Aula internacional Plus 1 · unidades 1–4", esHeroLead:n=>`Грамматика и лексика первых трёх юнитов: понятные объяснения со схемами и таблицами, ${n} упражнений с мгновенной проверкой, вся лексика с примерами и тест для самопроверки.`,
  esHow:[["Темы по юнитам","Сначала объяснение, потом задания под ним."],["Спряжение","Окончания -ar, -er, -ir и главные неправильные глаголы."],["Лексика","Все слова с переводом и примерами. Скрой перевод и проверь себя."],["Самопроверка","Реши несколько вариантов, пока не будет стабильно 80% и выше."]],
  esBookSub:"Unidades 1–4, p. 14–69", esCheatEyebrow:"Unidades 1–4 · всё самое важное", esStart:"Начать с первой темы",
  esTestEyebrow:"Autoevaluación · unidades 1–4", esTestSub:n=>`Вопросы берутся случайно из банка (${n} шт.) по всем темам юнитов 1–3 и спряжению. Каждый раз — новый вариант. В конце — результат в процентах и разбор по темам.`,
  esVerdicts:[["¡Excelente!","Отлично — этот материал ты уже знаешь."],["¡Muy bien!","Хорошо, но некоторые темы стоит повторить — они внизу."],["Aprobado","Неплохо, но повтори темы с красными полосками."],["A repasar","Пройди темы с красными полосками ещё раз, потом попробуй новый вариант."]],
  practiceH:"Entraînement", practiceHes:"Práctica", unitW:"Unité", unitWes:"Unidad",
  tipTtsEs:"Нажимай на испанский текст с пунктиром — компьютер прочитает его с испанским произношением.",
  dirFr:()=>`${COURSE==="es"?"ES":"FR"} → RU`, dirRu:()=>`RU → ${COURSE==="es"?"ES":"FR"}`,
  cloud:{local:"Только в этом браузере", loading:"Подключаюсь…", saved:"Всё сохранено", saving:"Сохраняю…", error:"Нет связи — сохраню позже", readonly:"Сохраняю в браузере", signedout:"Войди, чтобы сохранять"},
  authInH:"С возвращением!", authUpH:"Создай аккаунт", authResetH:"Восстановить пароль",
  authInSub:"Войди, и прогресс будет одинаковым на телефоне и компьютере.", authUpSub:"Нужны только почта и пароль от 6 символов.", authResetSub:"Пришлём на почту ссылку, чтобы задать новый пароль.",
  authNoAcc:"Нет аккаунта?", authCreate:"Создать", authHaveAcc:"Уже есть аккаунт?", authLogin:"Войти", authForgot:"Забыли пароль?", authBack:"Назад ко входу",
  authNote:"Всё, что ты уже сделал без входа, сохранится в аккаунте.",
  accSaved:"Прогресс сохраняется автоматически — на всех устройствах, где ты вошёл.", accOffline:"Нет связи с сервером. Ничего не потеряется: всё сохранится, когда связь вернётся.", accLocal:"Прогресс сохраняется в этом браузере.", retry:"Повторить",
  accFor:c=>`Прогресс · ${c}`, resetCourse:c=>`Сбросить прогресс: ${c}`,
  saveNudge:"Войди, чтобы прогресс сохранялся на всех устройствах", saveNudgeBtn:"Войти"
});
Object.assign(I18N.en, {
  stLex:"words in the vocabulary", courseLabel:"Course language", courseNames:{fr:"French", es:"Spanish", zh:"Chinese"}, soon:"soon", zhNav:"The Chinese course is coming soon. Meanwhile you can study French or Spanish.", zhEyebrow:"中文 · Chinese", zhH:"Chinese is coming soon", zhP:"The Chinese course is in the works. As soon as the first topics are ready, they’ll appear here.", zhBackFr:"Go to French", zhBackEs:"Go to Spanish", navSearch:"Topic or page", navNone:"Nothing found", navNonePage:n=>`No topics on page ${n}`, navMore:"Reference", tcOpen:"Open", homeAll:"All", homeTip:"Tip", esUnits:{"1":"Nosotros y nosotras","2":"Quiero aprender español","3":"¿Dónde está Santiago?","4":"¿Cuál prefieres?"},
  gram:"Conjugation", gramSub:"All three verb groups and the key irregular verbs", lexico:"Vocabulary", lexicoSub:"Every word from units 1–3: word — English — example. Click the Spanish to hear it.",
  lexSearch:"Find a word…", lexVerbs:"Verbs", lexFav:"Favourites", lexFavSub:"words you’ve marked with a heart", lexFavEmpty:"Nothing here yet. Select any Spanish word on the site and tap the heart in the pop-up — it will appear here.", lexAll:"All", lexHide:"Hide translation", lexShow:"Show translation", lexN:n=>`${n} ${n===1?"word":"words"}`, lexNone:"Nothing found.",
  esHeroEyebrow:"Aula internacional Plus 1 · unidades 1–4", esHeroLead:n=>`The grammar and vocabulary of the first three units: clear explanations with diagrams and tables, ${n} exercises with instant checking, every word with examples, and a self-check test.`,
  esHow:[["Topics by unit","First the explanation, then the exercises below it."],["Conjugation","-ar, -er, -ir endings and the key irregular verbs."],["Vocabulary","Every word with a translation and examples. Hide the translation to test yourself."],["Self-check","Do a few versions until you consistently get 80% or more."]],
  esBookSub:"Unidades 1–4, p. 14–69", esCheatEyebrow:"Unidades 1–4 · the essentials", esStart:"Start with the first topic",
  esTestEyebrow:"Autoevaluación · unidades 1–4", esTestSub:n=>`Questions are drawn at random from a bank of ${n} covering units 1–4 and conjugation. A new version every time. At the end you get a percentage and a breakdown by topic.`,
  esVerdicts:[["¡Excelente!","Excellent — you’ve got this material down."],["¡Muy bien!","Good, but some topics are worth reviewing — see below."],["Aprobado","Not bad, but review the topics with red bars."],["A repasar","Go through the topics with red bars again, then try a new version."]],
  practiceH:"Entraînement", practiceHes:"Práctica", unitW:"Unité", unitWes:"Unidad",
  tipTtsEs:"Click Spanish text with a dotted underline and the computer will read it with Spanish pronunciation.",
  dirFr:()=>`${COURSE==="es"?"ES":"FR"} → EN`, dirRu:()=>`EN → ${COURSE==="es"?"ES":"FR"}`,
  cloud:{local:"This browser only", loading:"Connecting…", saved:"All saved", saving:"Saving…", error:"Offline — will save later", readonly:"Saving in this browser", signedout:"Sign in to save"},
  authInH:"Welcome back!", authUpH:"Create an account", authResetH:"Reset your password",
  authInSub:"Sign in and your progress will be the same on your phone and computer.", authUpSub:"All you need is an e-mail and a password (6+ characters).", authResetSub:"We’ll e-mail you a link to set a new password.",
  authNoAcc:"No account yet?", authCreate:"Create one", authHaveAcc:"Already have an account?", authLogin:"Sign in", authForgot:"Forgot your password?", authBack:"Back to sign in",
  authNote:"Whatever you’ve done without signing in will be kept in your account.",
  accSaved:"Your progress is saved automatically — on every device where you’re signed in.", accOffline:"Can’t reach the server. Nothing will be lost: everything is saved once the connection is back.", accLocal:"Progress is saved in this browser.", retry:"Try again",
  accFor:c=>`Progress · ${c}`, resetCourse:c=>`Reset progress: ${c}`,
  saveNudge:"Sign in to keep your progress on every device", saveNudgeBtn:"Sign in"
});

let LANG = ls.get("edito-lang") === "en" ? "en" : "ru";
let COURSE = ls.get("edito-course") === "es" ? "es" : "fr";
const COURSES = {fr:{code:"FR", name:"Français", book:"Édito A1"}, es:{code:"ES", name:"Español", book:"Aula 1"}};
const FR_IDS = new Set(TOPICS.map(x=>x.id));
const ES_CACHE = {};
const OKW = () => COURSE === "es" ? "¡Correcto!" : "Juste !";
const t = (k, ...a) => { const v = (I18N[LANG][k] !== undefined ? I18N[LANG][k] : I18N.ru[k]); return typeof v === "function" ? v(...a) : v; };

let TOP, BOOK, GRAM, REF, CAH, TUT, ORDER, byId, POOLX, CHEATX;
function setData(){
  if (COURSE === "es") {
    const esPool = L => ES_POOL_BUILD(L).concat(ES_POOL_EXTRA(L), ES_POOL_U4(L));
    if (!ES_CACHE.ruPool) ES_CACHE.ruPool = esPool("ru");
    const c = ES_CACHE[LANG] || (ES_CACHE[LANG] = {top: ES_BUILD(LANG), pool: esPool(LANG), cheat: ES_CHEAT(LANG)});
    if (!c.why) { WHYP_APPLY("es", ES_CACHE.ruPool, c.pool, LANG === "en" ? 1 : 0); c.why = 1; }
    TOP = c.top; POOLX = c.pool; CHEATX = c.cheat;
  } else { TOP = LANG === "en" ? TOPICS_EN : TOPICS; POOLX = LANG === "en" ? POOL_EN : POOL; CHEATX = LANG === "en" ? CHEAT_EN : CHEAT; }
  BOOK = TOP.filter(x=>x.sec==="book"); GRAM = TOP.filter(x=>x.sec==="gram"); REF = TOP.filter(x=>x.sec==="ref"); CAH = TOP.filter(x=>x.sec==="cahier"); TUT = TOP.filter(x=>x.sec==="tutor"); ORDER = [...BOOK, ...GRAM, ...REF];
  byId = Object.fromEntries(TOP.map(x=>[x.id,x]));
  document.documentElement.lang = LANG;
  document.title = LANG === "en" ? "Learn languages step by step" : "Учим языки шаг за шагом";
  document.documentElement.dataset.course = COURSE;
}
setData();
/* французский: Livre / Cahier / Tutor */
let FRMODE = ["livre","cahier","tutor"].includes(ls.get("edito-frmode")) ? ls.get("edito-frmode") : "livre";
const seqOf = tp => tp && tp.sec === "cahier" ? CAH : tp && tp.sec === "tutor" ? TUT : ORDER;

/* =========================================================
   STORE: local cache + cloud (db) under data/users/<id>/
   ========================================================= */
const LKEY = "edito-a1-revisions-v2";
const normProf = o => { o = o || {}; return {name: typeof o.name === "string" ? o.name.slice(0, 40) : "", emoji: o.emoji || "", bg: o.bg || "", own: Array.isArray(o.own) ? o.own.slice() : [], eq: Object.assign({frame:"", cursor:"", theme:"", pattern:""}, o.eq || {}), theme: ["light","dark","system"].includes(o.theme) ? o.theme : "system", fx: o.fx !== false, ob: o.ob === 0 ? 0 : 1, lvl: o.lvl && typeof o.lvl === "object" ? Object.assign({}, o.lvl) : {}, at: o.at || 0}; };
const normGame = o => { o = o || {}; return {xp: +o.xp || 0, coins: o.coins == null ? 50 : +o.coins || 0, aw: o.aw && typeof o.aw === "object" ? o.aw : {}, day: Object.assign({d:"", n:0, q:{}}, o.day || {}), streak: Object.assign({cur:0, best:0, last:""}, o.streak || {}), hist: o.hist && typeof o.hist === "object" ? o.hist : {}, promo: Array.isArray(o.promo) ? o.promo : []}; };
let S = {p:{}, tests:[], ans:{}, quiz:{c:{}, best:{}, fav:[], sd:{}}, prof:normProf(), game:normGame(), ts:{}};
(function loadLocal(){
  try {
    const raw = ls.get(LKEY);
    if (raw) { const o = JSON.parse(raw); if (o && typeof o === "object") S = {p:o.p||{}, tests:o.tests||[], ans:o.ans||{}, quiz:{c:(o.quiz&&o.quiz.c)||{}, best:(o.quiz&&o.quiz.best)||{}, fav:(o.quiz&&o.quiz.fav)||[], esfav:(o.quiz&&o.quiz.esfav)||[], sd:(o.quiz&&o.quiz.sd)||{}}, prof:normProf(o.prof), game:normGame(o.game), ts:o.ts||{}}; }
    else { const old = ls.get("edito-a1-revisions-v1"); if (old) { const o = JSON.parse(old); S.p = o.p || {}; S.tests = o.tests || []; S.ts.progress = Date.now(); } }
  } catch(e) {}
})();
const qKey = fr => { let h = 5381; for (const ch of String(fr)) h = (Math.imul(h, 33) ^ ch.codePointAt(0)) >>> 0; return "k" + h.toString(36); };
function normQuiz(c){ const out = {}; for (const k in (c||{})) { const nk = /^k[0-9a-z]+$/.test(k) ? k : qKey(k); out[nk] = Object.assign({}, out[nk]||{}, c[k]); } return out; }
S.quiz.c = normQuiz(S.quiz.c);
const persistLocal = () => ls.set(LKEY, JSON.stringify(S));
const Cloud = {be:null, kind:"none", uid:null, state:"local", dirty:new Set(), timer:null, busy:false, lastOk:0, lastErr:null, fails:0, inits:0, initing:null};
let ME = null;
const withTimeout = (p, ms) => Promise.race([p, new Promise((_,rej)=>setTimeout(()=>rej({code:"timeout", message:"no answer in " + Math.round(ms/1000) + " s"}), ms))]);
/* --- backends: { uid, list() -> [{id,data}], set(key, body) } --- */
const SUPA_CFG = window.SUPA_CONFIG || null;
let sb = null;
if (SUPA_CFG && SUPA_CFG.url && SUPA_CFG.anonKey && window.supabase && typeof window.supabase.createClient === "function") {
  try { sb = window.supabase.createClient(SUPA_CFG.url, SUPA_CFG.anonKey, {auth:{persistSession:true, autoRefreshToken:true, detectSessionInUrl:true}}); } catch(e) { try { console.warn("[cloud] supabase init failed", e); } catch(_) {} }
}
Cloud.kind = sb ? "supabase" : (window.claude && typeof window.claude.use === "function" ? "claude" : "none");
const sbErr = e => ({code: (e && (e.code || (e.status ? "http_" + e.status : ""))) || "db", message: (e && e.message) || String(e)});
async function claudeBackend(){
  const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
  if (user) { try { ME = await withTimeout(user.me(), 10000); } catch(e) {} }
  const uid = ME && ME.id ? ME.id : (user ? await withTimeout(user.id(), 10000).catch(()=>null) : null);
  if (!db || !uid) return null;
  const col = () => db.collection("data/users/" + uid);
  return {uid,
    async list(){ const snap = await col().get(); return snap.docs.filter(d=>d.exists).map(d=>({id:d.id, data:d.data() || {}})); },
    set:(k, body) => col().doc(k).set(body)};
}
async function supaBackend(){
  const {data, error} = await sb.auth.getSession();
  if (error) throw sbErr(error);
  const s = data && data.session; if (!s || !s.user) return null;
  const u = s.user; ME = {id:u.id, name:u.email || t("you"), email:u.email || ""};
  return {uid:u.id,
    async list(){ const r = await sb.from("user_docs").select("key,body").eq("user_id", u.id); if (r.error) throw sbErr(r.error); return (r.data || []).map(x=>({id:x.key, data:x.body || {}})); },
    async set(k, body){ const r = await sb.from("user_docs").upsert({user_id:u.id, key:k, body, ts:body.ts || 0}, {onConflict:"user_id,key"}); if (r.error) throw sbErr(r.error); }};
}
function docFor(key){
  if (key === "progress") return {p:S.p, tests:S.tests, ts:S.ts.progress||0};
  if (key === "settings") return {lang:LANG, course:COURSE, ts:S.ts.settings||0};
  if (key === "quiz") return {c:S.quiz.c, best:S.quiz.best, fav:S.quiz.fav||[], esfav:S.quiz.esfav||[], sd:S.quiz.sd||{}, ts:S.ts.quiz||0};
  if (key === "profile") return Object.assign({}, S.prof, {ts:S.ts.profile||0});
  if (key === "game") return Object.assign({}, S.game, {ts:S.ts.game||0});
  if (key.startsWith("ans-")) return {ex:S.ans[key.slice(4)]||{}, ts:S.ts[key]||0};
  return null;
}
const hhmm = ms => new Date(ms).toLocaleTimeString(LANG==="en"?"en-GB":"ru-RU",{hour:"2-digit",minute:"2-digit",second:"2-digit"});
function setCloud(st){
  Cloud.state = st;
  $$("[data-cloud]").forEach(el=>{ el.textContent = t("cloud")[st] + (st === "saved" && Cloud.lastOk ? " · " + hhmm(Cloud.lastOk).slice(0,5) : ""); el.dataset.st = st; el.title = Cloud.lastErr || ""; });
  const d = $("#cloudDiag"); if (d) d.innerHTML = cloudDiag();
  try { gateCheck(); } catch(e) {}
}
function schedule(ms){ clearTimeout(Cloud.timer); Cloud.timer = setTimeout(flush, ms); }
function touch(key){
  S.ts[key] = Date.now(); persistLocal();
  if (Cloud.be) { Cloud.dirty.add(key); setCloud("saving"); schedule(700); }
}
async function flush(){
  const be = Cloud.be; if (!be) return;
  if (!Cloud.dirty.size) { if (!Cloud.busy) setCloud("saved"); return; }
  if (Cloud.busy) { schedule(600); return; }
  Cloud.busy = true;
  const keys = [...Cloud.dirty]; Cloud.dirty.clear();
  let failed = null;
  for (const k of keys) {
    const body = docFor(k); if (!body) continue;
    try { await withTimeout(be.set(k, body), 15000); }
    catch(e) { failed = e; Cloud.dirty.add(k); try { console.warn("[cloud] save failed:", k, e && e.code, e && e.message); } catch(_) {} }
  }
  Cloud.busy = false;
  if (Cloud.be !== be) return;
  if (!failed) { Cloud.fails = 0; Cloud.lastOk = Date.now(); Cloud.lastErr = null; setCloud(Cloud.dirty.size ? "saving" : "saved"); if (Cloud.dirty.size) schedule(300); return; }
  const code = failed && failed.code;
  Cloud.lastErr = (code || "error") + (failed && failed.message ? " — " + failed.message : "");
  Cloud.fails++;
  if (["not_granted","revoked","capability_disabled","capability_removed"].includes(code)) { Cloud.be = null; setCloud("error"); return; }
  if (["invalid_argument","42501","42P01","PGRST205"].includes(code) && Cloud.fails >= 3) { Cloud.be = null; setCloud("readonly"); return; }
  setCloud("error");
  schedule(Math.min(30000, 2500 * Cloud.fails) + Math.random()*1500);
}
document.addEventListener("visibilitychange", ()=>{ if (document.visibilityState === "hidden" && Cloud.dirty.size) flush(); });
window.addEventListener("pagehide", ()=>{ if (Cloud.dirty.size) flush(); });
function hasData(k){
  if (k === "progress") return Object.keys(S.p).length || S.tests.length;
  if (k === "quiz") return Object.keys(S.quiz.c).length || Object.keys(S.quiz.best).length || (S.quiz.fav||[]).length || (S.quiz.esfav||[]).length;
  if (k === "settings") return LANG !== "ru" || COURSE !== "fr";
  if (k === "profile") return !!S.prof.name;
  if (k === "game") return Object.keys(S.game.hist).length > 0;
  if (k.startsWith("ans-")) return S.ans[k.slice(4)] && Object.keys(S.ans[k.slice(4)]).length;
  return false;
}
function resetLocal(){ S = {p:{}, tests:[], ans:{}, quiz:{c:{}, best:{}, fav:[], sd:{}}, prof:normProf(), game:normGame(), ts:{}}; persistLocal(); }
/* слить облачные документы с локальными; pull = подтягивание на лету (без смены языка и курса) */
function mergeDocs(docs, pull, changed){
  changed = !!changed; let langChanged = false;
    const cloudKeys = new Set();
    docs.forEach(({id:k, data:v})=>{
      cloudKeys.add(k);
      if (pull && k === "settings") return;   /* язык и курс на этом устройстве не трогаем */
      v = v || {};
      const lt = S.ts[k] || 0, ct = v.ts || 0;
      if (k === "progress") {
        let up = false;
        const cp = v.p || {};
        for (const tid in cp) { S.p[tid] = S.p[tid] || {}; for (const ei in cp[tid]) { const a = S.p[tid][ei], b = cp[tid][ei]; if (!b) continue; if (!a || b.b > a.b) { S.p[tid][ei] = {b:b.b, l:b.l}; changed = true; } else if (a.b > b.b) up = true; } }
        for (const tid in S.p) for (const ei in S.p[tid]) if (!cp[tid] || !cp[tid][ei]) up = true;
        const seen = new Set(S.tests.map(x=>x.d + "|" + x.got + "|" + x.total));
        (v.tests || []).forEach(x=>{ const key = x.d + "|" + x.got + "|" + x.total; if (!seen.has(key)) { S.tests.push(x); seen.add(key); changed = true; } });
        if (S.tests.length > (v.tests || []).length) up = true;
        S.tests.sort((a,b)=>(a.at||0)-(b.at||0)); S.tests = S.tests.slice(-60);
        if (up) Cloud.dirty.add("progress");
        S.ts.progress = Math.max(lt, ct);
      } else if (ct > lt) {
        if (k === "settings") { if ((v.lang === "en" || v.lang === "ru") && v.lang !== LANG) { LANG = v.lang; ls.set("edito-lang", LANG); langChanged = true; } if ((v.course === "es" || v.course === "fr") && v.course !== COURSE) { COURSE = v.course; ls.set("edito-course", COURSE); langChanged = true; } }
        else if (k === "quiz") S.quiz = {c:normQuiz(v.c), best:v.best||{}, fav:Array.isArray(v.fav) ? v.fav : [], esfav:Array.isArray(v.esfav) ? v.esfav : [], sd:v.sd||{}};
        else if (k.startsWith("ans-")) S.ans[k.slice(4)] = v.ex || {};
        else if (k === "profile") S.prof = normProf(v);
        else if (k === "game") S.game = normGame(v);
        S.ts[k] = ct; changed = true;
      } else if (lt > ct) Cloud.dirty.add(k);
    });
    ["progress","quiz","settings","profile","game", ...Object.keys(S.ans).map(id=>"ans-" + id)].forEach(k=>{ if (!cloudKeys.has(k) && hasData(k)) Cloud.dirty.add(k); });
  return {changed, langChanged};
}
/* подтягиваем изменения с других устройств, когда возвращаешься на вкладку */
function pullSafe(){
  if (typeof DECK !== "undefined" && DECK) return false;
  if (document.body.classList.contains("gated")) return false;
  if (typeof PLY !== "undefined" && PLY.playing) return false;
  const h = decodeURIComponent((location.hash||"").slice(1));
  if (["test","bank","quizlet"].includes(h)) return false;
  const a = document.activeElement;
  if (a && main.contains(a) && /^(INPUT|TEXTAREA)$/.test(a.tagName) && a.value) return false;
  return true;
}
async function pullCloud(){
  const be = Cloud.be;
  if (!be || Cloud.pulling || Cloud.initing || document.visibilityState === "hidden" || Date.now() - (Cloud.pulledAt || 0) < 4000) return;
  Cloud.pulling = true; Cloud.pulledAt = Date.now();
  try {
    if (Cloud.dirty.size) await flush();
    const docs = await withTimeout(be.list(), 15000);
    if (Cloud.be !== be) return;
    const r = mergeDocs(docs, true);
    persistLocal();
    if (Cloud.dirty.size) flush();
    if (r.changed) { paintNavProgress(); applyLook(); paintMe(); if (pullSafe()) rerender(); }
  } catch(e) { try { console.warn("[cloud] pull failed:", e && e.code, e && e.message); } catch(_) {} }
  finally { Cloud.pulling = false; }
}
document.addEventListener("visibilitychange", ()=>{ if (document.visibilityState === "visible") pullCloud(); });
window.addEventListener("focus", ()=>pullCloud());
window.addEventListener("online", ()=>pullCloud());
function initCloud(){
  const prev = Cloud.initing || Promise.resolve();
  const run = prev.catch(()=>{}).then(()=>initCloudRun());
  Cloud.initing = run.finally(()=>{ if (Cloud.initing === run2) Cloud.initing = null; });
  const run2 = Cloud.initing;
  return run2;
}
async function initCloudRun(){
  if (Cloud.kind === "none") { setCloud("local"); return; }
  Cloud.inits++;
  setCloud("loading");
  let changed = false, langChanged = false;
  try {
    const be = await withTimeout(Cloud.kind === "supabase" ? supaBackend() : claudeBackend(), 25000);
    paintAccount();
    if (!be) { Cloud.be = null; Cloud.uid = null; setCloud(Cloud.kind === "supabase" ? "signedout" : "local"); if (location.hash === "#account") rerender(); return; }
    /* другой аккаунт на этом же устройстве — не смешиваем чужой прогресс */
    const owner = ls.get("edito-owner");
    if (owner && owner !== be.uid) { resetLocal(); changed = true; }
    ls.set("edito-owner", be.uid);
    const docs = await withTimeout(be.list(), 20000);
    ({changed, langChanged} = mergeDocs(docs, false, changed));
    persistLocal();
    Cloud.be = be; Cloud.uid = be.uid; Cloud.fails = 0; Cloud.lastOk = Date.now(); Cloud.lastErr = null;
    setCloud(Cloud.dirty.size ? "saving" : "saved");
    if (Cloud.dirty.size) flush();
  } catch(e) {
    Cloud.be = null; Cloud.lastErr = (e && e.code || "error") + (e && e.message ? " — " + e.message : "");
    setCloud("error");
    try { console.warn("[cloud] init failed:", e && e.code, e && e.message); } catch(_) {}
    if (Cloud.inits < 4) setTimeout(initCloud, 4000 * Cloud.inits);
    if (location.hash === "#account") try { rerender(); } catch(_) {}
    return;
  }
  try { paintNavProgress(); applyLook(); paintMe(); if (langChanged) { setData(); buildNav(); } if (changed || langChanged || location.hash === "#account") rerender(); } catch(e) {}
}
function cloudDiag(){
  const lines = [];
  if (Cloud.lastOk) lines.push(t("lastSync", hhmm(Cloud.lastOk)));
  if (Cloud.dirty.size) lines.push(t("pending", Cloud.dirty.size));
  if (Cloud.lastErr) { lines.push(t("lastErr", esc(Cloud.lastErr))); if (/user_docs|PGRST205|42P01/.test(Cloud.lastErr)) lines.push(t("noTable")); }
  return lines.join(" · ");
}
async function syncNow(){
  if (Cloud.kind === "none") return;
  ["progress","quiz","settings","profile","game", ...Object.keys(S.ans).map(id=>"ans-" + id)].forEach(k=>{ if (hasData(k)) Cloud.dirty.add(k); });
  if (!Cloud.be) { Cloud.inits = 0; await initCloud(); }
  if (Cloud.be) { Cloud.fails = 0; await flush(); }
}
/* --- Supabase auth --- */
const Auth = {mode:"in", msg:"", msgKind:"", recovery:false, redirect:false};
(function(){
  const h = location.hash || "";
  if (/access_token=|error_description=|type=recovery|type=signup|type=magiclink/.test(h)) {
    Auth.redirect = true;
    const m = h.match(/error_description=([^&]+)/);
    if (m) { Auth.msg = authErrText({message:decodeURIComponent(m[1].replace(/\+/g, " "))}); Auth.msgKind = "err"; try { history.replaceState(null, "", location.pathname + location.search + "#account"); } catch(e) {} }
  }
})();
const authRedirectTo = () => location.origin + location.pathname;
function authErrText(e){
  const m = (e && e.message) || String(e || "");
  if (/invalid login credentials/i.test(m)) return t("aeCreds");
  if (/email not confirmed/i.test(m)) return t("aeNotConfirmed");
  if (/already registered|already been registered|user_already_exists/i.test(m)) return t("aeExists");
  if (/rate limit|too many|security purposes/i.test(m)) return t("aeRate");
  if (/password.*(at least|short|characters)/i.test(m)) return t("aeShort");
  if (/expired|invalid.*(link|token)|otp_expired/i.test(m)) return t("aeLink");
  if (/failed to fetch|network|load failed/i.test(m)) return t("aeNet");
  return m;
}
function authSay(msg, kind){ Auth.msg = msg; Auth.msgKind = kind || ""; const el = $("#authMsg"); if (el) { el.textContent = msg; el.dataset.k = Auth.msgKind; } }
if (sb) {
  sb.auth.onAuthStateChange((ev, session)=>{
    setTimeout(()=>{
      if (ev === "INITIAL_SESSION") { Gate.ready = true; initCloud(); if (Auth.redirect && session) { Auth.redirect = false; location.hash = "account"; } return; }
      if (ev === "PASSWORD_RECOVERY") { Auth.recovery = true; Auth.redirect = false; if (location.hash !== "#account") location.hash = "account"; else rerender(); return; }
      if (ev === "SIGNED_IN") { ls.set("edito-seen-auth", "1"); if (!session || session.user.id !== Cloud.uid) { Auth.msg = ""; initCloud().then(()=>{ if (Auth.redirect) { Auth.redirect = false; location.hash = "account"; } }); } return; }
      if (ev === "USER_UPDATED") { if (session && session.user) { ME = {id:session.user.id, name:session.user.email || t("you"), email:session.user.email || ""}; paintAccount(); } return; }
      if (ev === "SIGNED_OUT") {
        clearTimeout(Cloud.timer); Cloud.be = null; Cloud.uid = null; ME = null; Cloud.dirty.clear(); Cloud.lastOk = 0; Cloud.lastErr = null;
        resetLocal(); try { localStorage.removeItem("edito-owner"); } catch(e) {}
        Auth.mode = "in"; Auth.touched = true; applyLook(); setData(); buildNav();
        setCloud("signedout"); paintAccount(); paintNavProgress(); rerender();
      }
    }, 0);
  });
}
async function signOut(){
  try { if (Cloud.dirty.size) await withTimeout(flush(), 8000); } catch(e) {}
  try { await sb.auth.signOut(); } catch(e) { try { await sb.auth.signOut({scope:"local"}); } catch(_) {} }
}

/* progress */
function setScore(tid, ei, got, total){
  const p = S.p[tid] || (S.p[tid] = {});
  const r = total ? got/total : 1, prev = p[ei];
  p[ei] = {b: Math.max(r, prev ? prev.b : 0), l: r};
  touch("progress"); paintNavProgress();
}
/* тест на уровень «закрывает» темы учебника и тетради до стартового юнита: S.prof.lvl = {fr:"2", es:"3"} */
function closedTp(tp){ if (tp.sec !== "book" && tp.sec !== "cahier") return false; const l = S.prof.lvl && S.prof.lvl[tp.id.slice(0,2) === "es" ? "es" : "fr"]; return l != null && +tp.unit < +l; }
function topicPct(tp){ if (closedTp(tp)) return {pct:1, done:tp.ex.length, n:tp.ex.length, closed:true}; const p = S.p[tp.id] || {}; let s = 0, d = 0; tp.ex.forEach((_,i)=>{ if (p[i]) { s += p[i].b; d++; } }); return {pct: tp.ex.length ? s/tp.ex.length : 0, done:d, n:tp.ex.length}; }

/* =========================================================
   speech
   ========================================================= */
const synth = ("speechSynthesis" in window) ? window.speechSynthesis : null;
let frVoice = null, esVoice = null;
function pickVoice(){ try { const vs = synth.getVoices();
  frVoice = vs.find(v=>/^fr[-_]FR/i.test(v.lang) && /Thomas|Amélie|Audrey|Aurélie|Marie|Google/i.test(v.name)) || vs.find(v=>/^fr[-_]FR/i.test(v.lang)) || vs.find(v=>/^fr/i.test(v.lang)) || null;
  esVoice = vs.find(v=>/^es[-_]ES/i.test(v.lang) && /Mónica|Monica|Jorge|Marisol|Google|Lucía|Lucia|Elvira|Álvaro|Alvaro/i.test(v.name)) || vs.find(v=>/^es[-_]ES/i.test(v.lang)) || vs.find(v=>/^es/i.test(v.lang)) || null; } catch(e) {} }
if (synth) { pickVoice(); try { synth.addEventListener("voiceschanged", pickVoice); } catch(e) {} }
const cleanSay = s => s.replace(/‿/g," ").replace(/\[[^\]]*\]/g," ").replace(/\((?:m|f|fam|e|ne|s|es)\.?\)/g,"").replace(/[✗✓→=]/g," ").replace(/\s+\/\s+/g,", ").replace(/\s—\s/g,", ").replace(/\s+/g," ").trim();
/* повторное прослушивание того же текста (в течение 15 с) — медленнее */
const SAY_LAST = {k:"", at:0, n:0};
function speak(text, rate){
  if (!synth) return false;
  const k = cleanSay(text).trim().toLowerCase(), now = Date.now();
  if (k && k === SAY_LAST.k && now - SAY_LAST.at < 15000) SAY_LAST.n++; else SAY_LAST.n = 0;
  SAY_LAST.k = k; SAY_LAST.at = now;
  if (SAY_LAST.n > 0) rate = Math.min(rate || .88, SAY_LAST.n === 1 ? .62 : .5);
  try { synth.cancel(); const u = new SpeechSynthesisUtterance(cleanSay(text)); const es = COURSE === "es"; u.lang = es ? "es-ES" : "fr-FR"; const vo = es ? esVoice : frVoice; if (vo) u.voice = vo; u.rate = rate || .88; synth.speak(u); return true; } catch(e) { return false; }
}
if (!synth) document.documentElement.classList.add("no-tts");
document.addEventListener("click", e=>{
  const el = e.target.closest(".fr");
  if (!el || !synth || e.detail > 1) return;
  const sl = window.getSelection && window.getSelection(); if (sl && !sl.isCollapsed && sl.toString().trim()) return;
  speak(el.dataset.say || el.textContent);
  el.classList.add("speaking"); setTimeout(()=>el.classList.remove("speaking"), 900);
});

/* =========================================================
   перевод по выделению: словарь → автоперевод (MyMemory)
   ========================================================= */
const dk = s => String(s||"").normalize("NFC").toLowerCase().replace(/[’`´‘ʼ]/g,"'").replace(/[  ]/g," ").replace(/^[\s«»"“”„.,;:!?¡¿()\[\]…—–-]+|[\s«»"“”„.,;:!?¡¿()\[\]…—–-]+$/g,"").replace(/\s+/g," ").trim();
const ART = /^(le|la|les|un|une|des|du|de la|l'|d'|de)\s*/;
const ELI = /^(l|d|j|m|t|s|n|c|qu|jusqu|lorsqu|puisqu)'/;
let DICT = null;
function buildDict(){
  DICT = new Map();
  const add = (k, e) => { k = dk(k); if (k && !DICT.has(k)) DICT.set(k, e); };
  const addAll = (fr, ru, en) => {
    const e = {fr, ru, en};
    add(fr, e);
    fr.replace(/\s*\([^)]*\)/g, m => /\(e\)|\(s\)/.test(m) ? m : "").split(/\s+\/\s+/).forEach(part=>{
      part = part.trim(); if (!part || /^(le|la|les|l’|un|une)$/i.test(part)) return;
      const vs = /\((e|s)\)/.test(part) ? [part.replace(/\((e|s)\)/g,""), part.replace(/\((e|s)\)/g,"$1")] : [part];
      vs.forEach(v=>{ add(v, e); const n = dk(v).replace(ART, ""); add(n, e); });
    });
  };
  QSETS.forEach(s=>s.w.forEach(w=>addAll(w[0], w[1], w[2])));
  GLOSS.forEach(w=>addAll(w[0], w[1], w[2]));
}
function verbOf(w){
  for (const inf in VFORMS) if (VFORMS[inf].split(" ").includes(w)) return inf;
  const m = w.match(/^(.+?)(ons|ez|ent|es|e)$/);
  if (m) { let st = m[1]; if (m[2] === "ons" && /ge$/.test(st)) st = st.slice(0, -1); if (m[2] === "ons" && /ç$/.test(st)) st = st.slice(0, -1) + "c"; const inf = st + "er"; if (DICT.has(inf)) return inf; }
  return null;
}
function lookup(raw){
  if (!DICT) buildDict();
  const k = dk(raw); if (!k) return null;
  const hit = DICT.get(k); if (hit) return Object.assign({form:null}, hit);
  const cands = [k.replace(ELI, ""), k.replace(ART, "")];
  for (const c of cands) if (c && c !== k && DICT.has(c)) return Object.assign({form:null}, DICT.get(c));
  if (/\s/.test(k.replace(ELI, "")) ) return null;
  const w = k.replace(ELI, "");
  const inf = verbOf(w);
  if (inf) { const e = DICT.get(dk(inf)) || DICT.get(dk(inf.replace(/^s’/, ""))); return {fr:inf, ru:e ? e.ru : "", en:e ? e.en : "", form:inf}; }
  const tries = [w.replace(/[sx]$/, ""), w.replace(/aux$/, "al"), w.replace(/e$/, ""), w.replace(/es$/, ""), w.replace(/enne$/, "en"), w.replace(/euse$/, "eur"), w.replace(/rice$/, "eur"), w.replace(/ère$/, "er"), w.replace(/ve$/, "f")];
  for (const c of tries) if (c && c !== w && DICT.has(c)) return Object.assign({form:null}, DICT.get(c));
  return null;
}
const TRC = "edito-tr-cache";
let trCache = {}; try { trCache = JSON.parse(ls.get(TRC) || "{}") || {}; } catch(e) {}
async function remoteTr(text, to, from = "fr"){
  const key = (from === "fr" ? "" : from + ">") + to + "|" + text.trim().toLowerCase().replace(/\s+/g, " ");
  if (trCache[key]) return trCache[key];
  const url = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(text.trim()) + "&langpair=" + from + "|" + to;
  const ctl = ("AbortController" in window) ? new AbortController() : null;
  const tm = setTimeout(()=>{ if (ctl) ctl.abort(); }, 7000);
  try {
    const r = await fetch(url, ctl ? {signal:ctl.signal} : {}); const j = await r.json();
    let out = j && j.responseData && j.responseData.translatedText;
    if (!out || +j.responseStatus !== 200 || /MYMEMORY WARNING|QUERY LENGTH LIMIT|INVALID/i.test(out)) return null;
    out = out.replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,"&").trim();
    if (dk(out) === dk(text)) return null;
    out = withTail(out, endPunct(text), to === "fr");
    if (text.trim() === text.trim().toLowerCase() && out[0]) out = out[0].toLowerCase() + out.slice(1);
    trCache[key] = out; const ks = Object.keys(trCache); if (ks.length > 400) delete trCache[ks[0]];
    ls.set(TRC, JSON.stringify(trCache));
    return out;
  } catch(e) { return null; } finally { clearTimeout(tm); }
}

/* --- обратный словарь: русский / английский → французский --- */
let RDICT = null;
/* знаки конца фразы (? ! …) сохраняются в переводе */
const endPunct = s => { const m = String(s).trim().match(/(\?!|!\?|[?!]+|…|\.{3})$/); return m ? m[1].replace("...", "…") : ""; };
const withTail = (s, tail, fr) => !tail || !s || /[?!…]\s*$/.test(s) ? s : s.replace(/[\s.]+$/, "") + (fr && tail !== "…" ? "\u00a0" : "") + tail;
const rk = s => dk(s).replace(/ё/g, "е");
const RU_END = ["ившись","ались","ились","алась","илась","ался","ился","ила","ило","или","ала","али","ало","яла","яли","ил","ал","ял","иться","аться","яться","еться","ться","тся","ить","ать","ять","еть","уть","ешься","ется","ются","ются","ишься","ится","ятся","атся","ешь","ете","ает","ают","яет","яют","аешь","аете","аем","аю","яю","ишь","ите","ят","ат","ет","ут","ют","ит","им","ем","ями","ами","ого","его","ому","ему","ыми","ими","ых","их","ой","ей","ий","ый","ая","яя","ое","ее","ую","юю","ом","ам","ям","ах","ях","ов","ев","ью","ся","сь","а","я","ы","и","у","ю","е","о","ь","й"];
function ruStem(w){ for (const e of RU_END) if (w.length - e.length >= 2 && w.endsWith(e)) return w.slice(0, -e.length); return w; }
const EN_IRR = {is:"be", are:"be", am:"be", was:"be", were:"be", been:"be", has:"have", had:"have", does:"do", did:"do", done:"do", goes:"go", went:"go", gone:"go", made:"make", took:"take", said:"say", saw:"see", knew:"know", came:"come", wrote:"write", read:"read", children:"child", men:"man", women:"woman", people:"person", "i'm":"i", "you're":"you"};
function buildRDict(){
  if (!DICT) buildDict();
  RDICT = {ru:new Map(), en:new Map(), rs:new Map()};
  let ord = 0;
  const put = (lang, k, e, rank) => { k = rk(k); if (!k || k.length > 48) return; let a = RDICT[lang].get(k); if (!a) RDICT[lang].set(k, a = []); if (!a.some(x=>x.e.fr === e.fr)) a.push({e, rank, ord: ord++}); };
  const keysOf = (m, lang) => {
    const out = []; if (!m) return out;
    const base = m.replace(/\([^)]*\)/g, " ").replace(/\s+/g, " ").trim();
    out.push([base, 0]);
    base.split(/\s*[;\/]\s*|,\s+/).forEach(part=>{
      part = part.replace(/^=.*$/, "").replace(/\s+—.*$/, "").trim(); if (!part || /[a-zà-ÿ].*…|…/.test(part) && lang === "ru") return;
      out.push([part, 1]);
      if (lang === "en") { const b = /^to\s+(the|a|an)\b/i.test(part) ? part : part.replace(/^to\s+/i, "").replace(/^(a|an|the)\s+/i, ""); if (b !== part) out.push([b, 1]); }
    });
    return out;
  };
  const addE = (fr, ru, en, src) => { const e = {fr, ru, en}; keysOf(ru, "ru").forEach(([k, x])=>put("ru", k, e, src*2 + x)); keysOf(en, "en").forEach(([k, x])=>put("en", k, e, src*2 + x)); };
  QSETS.forEach(st=>st.w.forEach(w=>addE(w[0], w[1], w[2], 0)));
  GLOSS.forEach(w=>addE(w[0], w[1], w[2], 1));
  for (const [k, a] of RDICT.ru) if (!/\s/.test(k) && k.length >= 3) { const st = ruStem(k); if (st.length >= 2 && !RDICT.rs.has(st)) RDICT.rs.set(st, {k, a}); }
}
function rlookup(raw, lang){
  if (!RDICT) buildRDict();
  const M = RDICT[lang], k = rk(raw); if (!k) return null;
  let a = M.get(k), base = null;
  if (!a && !/\s/.test(k)) {
    if (lang === "en") {
      const tries = [EN_IRR[k], k.replace(/ies$/, "y"), k.replace(/es$/, ""), k.replace(/s$/, ""), k.replace(/'s$/, ""), k.replace(/ing$/, ""), k.replace(/ing$/, "e"), k.replace(/(.)\1ing$/, "$1"), k.replace(/ed$/, ""), k.replace(/d$/, ""), k.replace(/(.)\1ed$/, "$1")];
      for (const c of tries) if (c && c !== k && M.has(c)) { a = M.get(c); base = c; break; }
    } else if (k.length >= 4) {
      const hit = RDICT.rs.get(ruStem(k)); if (hit) { a = hit.a; base = hit.k; }
    }
  }
  if (!a) return null;
  const list = a.slice().sort((x, y)=>x.rank - y.rank || x.ord - y.ord).map(x=>x.e);
  const named = list.filter(e=>!/['’]$/.test(e.fr));
  return {list: named.length ? named : list, base};
}
const FR_MARK = /[àâæçéèêëîïôœùûüÿ]|(^|[\s(«"])(l|d|j|qu|n|c|s|m|t)['’][a-zà-ÿh]/i;
const EN_FN = /\b(the|is|are|am|was|were|and|of|you|your|my|what|which|this|that|it|its|with|for|have|has|do|does|be|can|i|he|she|we|they|their|his|her|how|where|when|why|who|at|in|on|to|a|an)\b/i;
const FR_FN = /(^|\s)(le|la|les|un|une|des|du|de|est|et|je|tu|il|elle|nous|vous|ils|elles|ce|ne|pas|à|au|aux|en|mon|ma|mes|ton|ta|tes|son|sa|ses|que|qui|où|avec|pour|dans|sur|chez|très|bien|oui|non)(?=\s|$)/i;

/* --- избранное --- */
const favIdx = fr => (S.quiz.fav || []).findIndex(x=>dk(x.fr) === dk(fr));
const isFav = fr => favIdx(fr) >= 0;
function toggleFav(e){
  S.quiz.fav = S.quiz.fav || [];
  const i = favIdx(e.fr);
  if (i >= 0) S.quiz.fav.splice(i, 1); else S.quiz.fav.unshift({fr:e.fr, ru:e.ru || "", en:e.en || "", at:Date.now()});
  touch("quiz");
  return i < 0;
}
const esFavIdx = es => (S.quiz.esfav || []).findIndex(x=>dk(x.es) === dk(es));
const isEsFav = es => esFavIdx(es) >= 0;
function toggleEsFav(e){
  S.quiz.esfav = S.quiz.esfav || [];
  const i = esFavIdx(e.es);
  if (i >= 0) S.quiz.esfav.splice(i, 1); else S.quiz.esfav.unshift({es:String(e.es).trim().replace(/[.,;:!?…]+$/, ""), m:String(e.m || "").trim().replace(/\.$/, ""), at:Date.now()});
  touch("quiz"); return i < 0;
}
function qMeaning(fr){ if (!DICT) buildDict(); const e = DICT.get(dk(fr)); if (e) return LANG === "en" ? e.en : e.ru; const f = (S.quiz.fav || [])[favIdx(fr)]; return f ? (LANG === "en" ? (f.en || f.ru) : (f.ru || f.en)) : ""; }

/* --- всплывающая подсказка --- */
const SP = {el:null, range:null, entry:null, req:0, timer:null};
const ICO_HEART = f7on("heart", "heart_fill");
function spBuild(){
  const el = document.createElement("div");
  el.className = "selpop"; el.hidden = true; el.setAttribute("role", "dialog");
  el.innerHTML = `<div class="sp-tx"><span class="sp-fr"></span><span class="sp-m"></span><span class="sp-note"></span></div><div class="sp-btns"><button type="button" class="sp-say">${ICON_PLAY}</button><button type="button" class="sp-fav">${ICO_HEART}</button><button type="button" class="sp-go"></button></div>`;
  el.addEventListener("mousedown", e=>e.preventDefault());
  el.addEventListener("pointerdown", e=>{ if (e.pointerType !== "mouse") e.preventDefault(); });
  $(".sp-say", el).addEventListener("click", ()=>{ if (SP.entry && SP.entry.say) speak(SP.entry.say); });
  $(".sp-go", el).addEventListener("click", ()=>{ const e = SP.entry; if (!e || !e.long) return; trOpen(e.long); spHide(); try { window.getSelection().removeAllRanges(); } catch(_) {} });
  $(".sp-fav", el).addEventListener("click", ()=>{
    const e = SP.entry; if (!e) return;
    if (COURSE === "es") { if (!e.es) return; const on = toggleEsFav(e); spPaintFav(); toast(on ? t("favAddedEs") : t("favRemoved")); if (location.hash === "#lexico") lexPaintFav(); return; }
    if (!e.fr) return;
    const on = toggleFav(e); spPaintFav(); toast(on ? t("favAdded") : t("favRemoved"));
    if (location.hash === "#quizlet") qzRefreshList();
  });
  document.body.appendChild(el); SP.el = el;
}
function spPaintFav(){
  const esC = COURSE === "es", b = $(".sp-fav", SP.el), on = SP.entry && (esC ? isEsFav(SP.entry.es || "") : isFav(SP.entry.fr));
  b.classList.toggle("on", !!on); b.setAttribute("aria-pressed", on ? "true" : "false");
  b.setAttribute("aria-label", on ? t("spUnfav") : t("spFav")); b.title = b.getAttribute("aria-label");
  const s = $(".sp-say", SP.el); s.setAttribute("aria-label", t("qzSay")); s.title = t("qzSay");
  s.hidden = !synth;
  const ready = !!(SP.entry && (esC ? SP.entry.es : SP.entry.fr)); b.disabled = !ready; s.disabled = !(SP.entry && (SP.entry.fr || SP.entry.say));
}
function spHide(){ if (SP.el && !SP.el.hidden) { SP.el.hidden = true; SP.el.classList.remove("in"); } SP.range = null; SP.entry = null; SP.req++; }
function spPlace(){
  if (!SP.el || SP.el.hidden || !SP.range) return;
  const rs = SP.range.getClientRects(); const r = rs.length ? rs[0] : SP.range.getBoundingClientRect();
  const last = rs.length ? rs[rs.length - 1] : r;
  if (!r || (!r.width && !r.height)) { spHide(); return; }
  const el = SP.el, vw = document.documentElement.clientWidth, vh = window.innerHeight;
  const w = el.offsetWidth, h = el.offsetHeight, gap = 10;
  const touchUI = window.matchMedia("(pointer:coarse)").matches;
  let top = touchUI ? last.bottom + gap + 4 : r.top - h - gap, below = touchUI;
  if (!touchUI && top < 8) { top = last.bottom + gap; below = true; }
  if (touchUI && top + h > vh - 8) { top = r.top - h - gap; below = false; }
  const cx = below ? last.left + last.width / 2 : r.left + r.width / 2;
  let left = Math.round(cx - w / 2); left = Math.max(8, Math.min(left, vw - w - 8));
  /* длинное выделение может не помещаться в экран: держим окошко внутри экрана, стрелку тогда прячем */
  const t0 = top; top = Math.max(8, Math.min(top, vh - h - 8)); el.classList.toggle("free", Math.abs(top - t0) > 1);
  el.style.left = left + "px"; el.style.top = Math.round(top) + "px";
  el.style.setProperty("--ax", Math.max(14, Math.min(w - 14, cx - left)) + "px");
  el.classList.toggle("below", below);
  const all = SP.range.getBoundingClientRect();   /* прячем, только если всё выделение ушло за экран */
  if (all.bottom < 0 || all.top > vh) el.style.visibility = "hidden"; else el.style.visibility = "";
}
function spAllowed(sel){
  const h = location.hash.slice(1);
  if (h === "test" || h === "quizlet") return false;
  const n = sel.anchorNode; const el = n && (n.nodeType === 1 ? n : n.parentElement);
  if (!el || el.closest("input,textarea,.selpop,.trp,.ply,.nav,.topbar,[contenteditable]")) return false;
  return true;
}

/* --- испанский курс: подсказка по выделению (словарь лексики → автоперевод) --- */
let ESD = null;
function esDict(){
  if (ESD) return ESD;
  ESD = {es:new Map(), en:new Map()};
  const add = (m, k, v) => { k = dk(k); if (k && !m.has(k)) m.set(k, v); };
  ES_LEX.forEach(c=>c.w.forEach(([w, en])=>{
    const e = {es:w, en};
    add(ESD.es, w, e);
    w.split(/\s*(?:→|\/|·)\s*/).forEach(part=>{ part = part.replace(/\([^)]*\)/g, "").trim(); if (!part) return; add(ESD.es, part, e); add(ESD.es, part.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i, ""), e); });
    en.split(/\s*(?:→|\/|·|,)\s*/).forEach(part=>{ part = part.replace(/\([^)]*\)/g, "").replace(/^(to|a|an|the)\s+/i, "").trim(); if (part) add(ESD.en, part, e); });
  }));
  return ESD;
}
function esLookup(txt){
  const D = esDict().es, k = dk(txt); if (!k) return null;
  if (D.has(k)) return D.get(k);
  const k2 = k.replace(/^(el|la|los|las|un|una|unos|unas)\s+/, ""); if (D.has(k2)) return D.get(k2);
  if (!/\s/.test(k2)) for (const c of [k2.replace(/es$/, ""), k2.replace(/s$/, ""), k2.replace(/a$/, "o"), k2.replace(/as$/, "o"), k2.replace(/esa$/, "és"), k2.replace(/ana$/, "án")]) if (c && c !== k2 && D.has(c)) return D.get(c);
  return null;
}
const ES_MARK = /[ñáéíóú¿¡]/i;
const ES_FN = /(^|\s)(el|la|los|las|un|una|es|son|está|hay|de|del|en|con|por|para|que|qué|muy|mucho|yo|tú|soy|eres|y|o|no|sí|me|te|se)(?=\s|$)/i;
function esPop(o){
  const {txt, q, cyr, req, to, el, mEl, nEl, show} = o;
  el.dataset.dir = "fr";
  const put = (m, note, say, st, es) => { SP.entry = {sel:q, say:say || "", fr:"", ru:"", en:"", es:st === "ok" ? (es || "") : "", m:st === "ok" ? m : ""}; mEl.textContent = m; nEl.textContent = note || ""; el.dataset.st = st || "ok"; };
  const remote = (from, toL, sayOut) => {
    put(t("spLoading"), "", "", "load"); show();
    remoteTr(q, toL, from).then(out=>{
      if (req !== SP.req) return;
      if (out) { put(out, t("spAuto"), sayOut ? out : q, "ok", sayOut ? out : q); if (sayOut) SP.entry.m = q; } else put(t("spNone"), navigator.onLine === false ? t("spOffline") : "", "", "none");
      spPaintFav(); spPlace();
    });
  };
  if (cyr) { el.dataset.dir = "rev"; return remote("ru", "es", true); }
  const hit = esLookup(txt);
  if (hit) { put(hit.en, dk(hit.es) !== dk(txt) ? hit.es : "", q, "ok", hit.es); return show(); }
  const rEn = !ES_MARK.test(txt) && esDict().en.get(dk(txt).replace(/^(to|a|an|the)\s+/, ""));
  if (rEn) { el.dataset.dir = "rev"; put(rEn.es, rEn.en, rEn.es, "ok", rEn.es); SP.entry.m = rEn.en; return show(); }
  if (!ES_MARK.test(txt) && EN_FN.test(txt) && !ES_FN.test(txt)) {
    el.dataset.dir = "rev";
    const r = esDict().en.get(dk(txt));
    if (r) { put(r.es, r.en, r.es, "ok", r.es); SP.entry.m = r.en; return show(); }
    return remote("en", "es", true);
  }
  remote("es", to, false);
}

function spCheck(){
  const sel = window.getSelection ? window.getSelection() : null;
  if (!sel || sel.isCollapsed || !sel.rangeCount) { spHide(); return; }
  const raw = sel.getRangeAt(0).toString().replace(/\s+/g, " ").trim();
  const txt = raw.replace(/^[\s«»"“”„.,;:!?¡¿()\[\]…—–-]+|[\s«»"“”„.,;:!?¡¿()\[\]…—–-]+$/g, "");
  const q = raw.replace(/^[\s«»"“”„.,;:!?()\[\]…—–-]+/, "").replace(/[\s«»"“”„,;:()\[\]—–-]+$/, "").replace(/([^.])\.$/, "$1").trim();
  const tail = endPunct(q);
  const cyr = /[А-Яа-яЁё]/.test(txt), lat = /[a-zà-ÿœæç]/i.test(txt);
  /* длинное выделение: окошко с кнопкой «Перевести» → панель переводчика */
  const long = txt.length > 80 || txt.split(" ").length > 8;
  if (!txt || (!cyr && !lat) || (!long && cyr && lat) || !spAllowed(sel)) { spHide(); return; }
  if (!SP.el) spBuild();
  const range = sel.getRangeAt(0).cloneRange();
  if (SP.entry && SP.entry.sel === q && !SP.el.hidden) { SP.range = range; spPlace(); return; }
  SP.range = range;
  const req = ++SP.req, to = LANG === "en" ? "en" : "ru";
  const el = SP.el, mEl = $(".sp-m", el), nEl = $(".sp-note", el);
  $(".sp-fr", el).textContent = q;
  const show = () => { spPaintFav(); el.hidden = false; spPlace(); requestAnimationFrame(()=>el.classList.add("in")); };
  el.classList.toggle("long", long);
  if (long) {
    const full = raw.slice(0, 1500);
    SP.entry = {sel:q, long:full, say: trDetect(full) === trCourse() ? full : ""};
    mEl.textContent = ""; nEl.textContent = ""; el.dataset.st = "ok"; el.dataset.dir = "fr";
    const g = $(".sp-go", el); g.textContent = t("trBtn");
    return show();
  }
  if (COURSE === "es") return esPop({txt, q, cyr, req, to, el, mEl, nEl, show});
  const loading = () => { mEl.textContent = t("spLoading"); nEl.textContent = ""; el.dataset.st = "load"; };
  const fail = () => { mEl.textContent = t("spNone"); nEl.textContent = navigator.onLine === false ? t("spOffline") : ""; el.dataset.st = "none"; };
  /* --- французский → ru/en --- */
  const fromFr = hit => {
    el.dataset.dir = "fr";
    if (hit) {
      const fr = hit.form || hit.fr;
      SP.entry = {sel:q, say:q, fr, ru:hit.ru, en:hit.en};
      mEl.textContent = withTail((to === "en" ? (hit.en || hit.ru) : (hit.ru || hit.en)) || "—", tail, false);
      nEl.textContent = hit.form ? t("spForm", hit.form) : (dk(fr) !== dk(txt) ? fr : "");
      el.dataset.st = "ok"; return show();
    }
    SP.entry = {sel:q, say:q, fr:q, ru:"", en:""}; loading(); show();
    remoteTr(q, to).then(out=>{
      if (req !== SP.req) return;
      if (out) { SP.entry[to] = out; mEl.textContent = out; nEl.textContent = t("spAuto"); el.dataset.st = "ok"; spPlace(); }
      else if (!FR_MARK.test(txt)) remoteRev("en");
      else { fail(); spPlace(); }
    });
  };
  /* --- ru/en → французский --- */
  const paintRev = (src, list, i, base) => {
    const e = list[i];
    SP.entry = {sel:q, say:withTail(e.fr, tail, true), fr:e.fr, ru:e.ru, en:e.en, rev:true};
    mEl.textContent = withTail(e.fr, tail, true); el.dataset.st = "ok"; el.dataset.dir = "rev";
    const gloss = src === "en" ? e.en : e.ru;
    const g = gloss && rk(gloss) !== rk(txt) ? gloss : (base && base !== rk(txt) ? base : "");
    const alts = list.map((x, j)=>({x, j})).filter(o=>o.j !== i).slice(0, 3);
    nEl.innerHTML = (g ? `<span class="sp-gl">${esc(g)}</span>` : "") + (alts.length ? `<span class="sp-alts">${t("spAlso")} ${alts.map(o=>`<button type="button" class="sp-alt" data-j="${o.j}" aria-label="${esc(t("spAltA", o.x.fr))}">${esc(o.x.fr)}</button>`).join("")}</span>` : "");
    $$(".sp-alt", nEl).forEach(b=>b.addEventListener("click", ()=>{ paintRev(src, list, +b.dataset.j, base); spPaintFav(); spPlace(); }));
  };
  const remoteRev = src => {
    el.dataset.dir = "rev";
    SP.entry = {sel:q, say:"", fr:"", ru:"", en:"", rev:true}; loading(); show();
    remoteTr(q, "fr", src).then(out=>{
      if (req !== SP.req) return;
      if (out) { SP.entry = {sel:q, say:out, fr:out, ru: src === "ru" ? q : "", en: src === "en" ? q : "", rev:true}; mEl.textContent = out; nEl.textContent = t("spAuto"); el.dataset.st = "ok"; spPaintFav(); }
      else fail();
      spPlace();
    });
  };
  const fromRev = (src, r) => { if (r) { paintRev(src, r.list, 0, r.base); return show(); } remoteRev(src); };

  if (cyr) return fromRev("ru", rlookup(txt, "ru"));
  const node = sel.anchorNode, nodeEl = node && (node.nodeType === 1 ? node : node.parentElement);
  const inFr = !!(nodeEl && nodeEl.closest('.fr,[lang="fr"],.fl-ex'));
  const frHit = lookup(txt);
  if (inFr || FR_MARK.test(txt)) return fromFr(frHit);
  const enHit = rlookup(txt, "en");
  if (LANG === "en" && enHit && !enHit.base) return fromRev("en", enHit);
  if (frHit) return fromFr(frHit);
  if (enHit) return fromRev("en", enHit);
  if (EN_FN.test(txt) && !FR_FN.test(txt)) return remoteRev("en");
  fromFr(null);
}
document.addEventListener("selectionchange", ()=>{ clearTimeout(SP.timer); SP.timer = setTimeout(spCheck, 260); });
window.addEventListener("scroll", ()=>{ if (SP.el && !SP.el.hidden) requestAnimationFrame(spPlace); }, {passive:true, capture:true});
window.addEventListener("resize", ()=>{ if (SP.el && !SP.el.hidden) spPlace(); });
document.addEventListener("keydown", e=>{ if (e.key === "Escape") spHide(); });
window.addEventListener("hashchange", spHide);

/* =========================================================
   answer checking + accent bar
   ========================================================= */
const norm = s => (s||"").normalize("NFC").toLowerCase().replace(/[¿¡]/g,"").replace(/[’`´‘ʼ]/g,"'").replace(/[  ]/g," ").replace(/\s*'\s*/g,"'").replace(/\s*-\s*/g,"-").replace(/\s+/g," ").replace(/\s*([?!,;:.…])/g,"$1").replace(/[.!?…]+$/,"").trim();
const strip = s => s.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/œ/g,"oe");
function judge(input, answers){
  const n = norm(input); if (!n) return "empty";
  if (answers.some(a=>norm(a)===n)) return "ok";
  if (answers.some(a=>strip(norm(a))===strip(n))) return "acc";
  return "bad";
}
const qhtml = q => q.replace(/___/g,'<span class="blank"></span>');
const ACC = ["é","è","ê","à","â","ç","ù","û","î","ï","ô","ë","œ","’"];
let lastInput = null;
document.addEventListener("focusin", e=>{ if (e.target.classList && e.target.classList.contains("ans")) lastInput = e.target; });
document.addEventListener("mousedown", e=>{ if (e.target.closest(".acc")) e.preventDefault(); });
document.addEventListener("click", e=>{
  const b = e.target.closest(".acc"); if (!b) return;
  const block = b.closest(".exb, .qz-stage") || document; let inp = lastInput;
  if (!inp || !block.contains(inp)) inp = $(".ans", block);
  if (!inp || inp.disabled) return;
  const s = inp.selectionStart ?? inp.value.length, en = inp.selectionEnd ?? inp.value.length;
  inp.value = inp.value.slice(0,s) + b.dataset.c + inp.value.slice(en);
  inp.focus(); try { inp.setSelectionRange(s+1, s+1); } catch(_) {}
  inp.dispatchEvent(new Event("input", {bubbles:true}));
});
const ACC_ES = ["á","é","í","ó","ú","ñ","ü","¿","¡"];
const accBar = () => `<div class="accbar" data-label="${esc(t("insert"))}">${(COURSE === "es" ? ACC_ES : ACC).map(c=>`<button type="button" class="acc" data-c="${c}" aria-label="${esc(t("insertA", c))}">${c}</button>`).join("")}</div>`;
const inputAttrs = 'autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"';

/* =========================================================
   exercise blocks (with saved answers)
   ========================================================= */
function praise(r){ if (COURSE === "es") return r>=1 ? "¡Perfecto!" : r>=.8 ? "¡Muy bien!" : r>=.6 ? "¡No está mal!" : "A repasar…"; return r>=1 ? "Parfait !" : r>=.8 ? "Très bien !" : r>=.6 ? "Pas mal !" : "À revoir…"; }
/* заголовок блока: «Упр. 1 · Grammaire — выбери артикль» → заголовок «Упр. 1 · Grammaire» + подзаголовок «Выбери артикль» */
function exHead(ex, i){
  const h = String(ex.h || ""), m = h.match(/^(.*?)\s+—\s+([\s\S]+)$/);
  let title = m ? m[1] : h, sub = m ? m[2] : "";
  if (!/^(\d|Упр|Ex\b|Ex\.|[IVX]+\.|Unit|Unidad|Unité)/.test(title.replace(/<[^>]+>/g, ""))) title = `${i+1}. ${title}`;
  if (sub) sub = sub.replace(/^(<[^>]+>)*([a-zа-яё])/i, (x, tag, ch) => (tag || "") + ch.toUpperCase());
  return {title, sub};
}
const CONFETTI = () => `<div class="cf-layer" aria-hidden="true">${Array.from({length:18}, (_, k)=>`<span class="cf cf${k}"></span>`).join("")}</div>`;
function makeBlock(tp, ex, i){
  const el = document.createElement("section"); el.className = "exb exb5"; el.dataset.i = i; el.dataset.t = ex.t;
  const hd = exHead(ex, i);
  el.innerHTML = `<header class="exb-h"><div class="exb-ht"><h4 class="exb-title">${hd.title}</h4>${hd.sub ? `<p class="exb-sub">${hd.sub}</p>` : ""}</div></header><div class="exb-b"></div><footer class="exb-f"><div class="exb-fl"><span class="exb-best"></span><span class="exb-score"></span></div><div class="exb-btns"></div></footer>`;
  const api = {
    el, body: $(".exb-b", el), score: $(".exb-score", el), btns: $(".exb-btns", el),
    saved: (S.ans[tp.id] || {})[i] || null,
    save(obj){ (S.ans[tp.id] || (S.ans[tp.id] = {}))[i] = obj; api.saved = obj; touch("ans-" + tp.id); },
    clear(){ if (S.ans[tp.id] && S.ans[tp.id][i] !== undefined) { delete S.ans[tp.id][i]; touch("ans-" + tp.id); } api.saved = null; el.classList.remove("perfect"); const c = $(".cf-layer", el); if (c) c.remove(); },
    showBest(){ const p = (S.p[tp.id]||{})[i], b = $(".exb-best", el); if (!p) { b.innerHTML = ""; b.removeAttribute("title"); return; } const pc = Math.round(p.b*100); b.innerHTML = `${ICO_TROPHY}<span>${pc}%</span>`; b.title = t("bestT", pc); b.setAttribute("aria-label", b.title); b.classList.toggle("full", pc >= 100); },
    /* счётчик «Верно X / N» убран по просьбе Влада (29.10.2026); итог — в подвале после завершения */
    count(){},
    finish(got, total, msg, restoring){
      if (!restoring) setScore(tp.id, i, got, total);
      const r = total ? got/total : 1;
      api.score.innerHTML = msg || `<b>${got} / ${total}</b> · <span class="pen">${praise(r)}</span>`;
      api.showBest();
      if (!restoring && total && got === total && !el.classList.contains("perfect")) {
        el.classList.add("perfect"); el.insertAdjacentHTML("afterbegin", CONFETTI());
        setTimeout(()=>{ const l = $(".cf-layer", el); if (l) l.remove(); }, 2600);
      }
    },
    status(txt){ api.score.innerHTML = txt; },
    button(label, cls, fn){ const b = document.createElement("button"); b.type = "button"; b.className = "btn sm " + cls; b.textContent = label; b.addEventListener("click", fn); api.btns.appendChild(b); return b; },
    tid: tp.id, ei: i,
    ans(k, st, restoring){ if (!restoring) gameAnswer(tp.id + "|" + i, k, st); },
    rule(){ return ruleFor(tp.id, i); },
    whyItem(answer, e){ return whyHTML(answer, e, ruleFor(tp.id, i)); },
    whyFoot(){ if ($(".why-foot", el)) return; const h = whyHTML("", taskFor(tp.id, i), ruleFor(tp.id, i)); if (!h) return; const f = $(".exb-f", el); f.insertAdjacentHTML("beforeend", `<div class="why-foot">${h}</div>`); }
  };
  api.showBest();
  return api;
}
/* строка списка заданий: номер · содержимое · статус и «?»; под строкой — разбор */
function itemRow(k, inner, side){
  const li = document.createElement("li"); li.className = "it it5" + (side ? " it-side" : "");
  li.innerHTML = `<div class="it-g"><span class="it-n">${k+1}</span><div class="it-c">${inner}</div><div class="it-r"><span class="it-note" aria-live="polite"></span><button type="button" class="why-b" aria-expanded="false" aria-label="${esc(t("whyA"))}" title="${esc(t("whyA"))}">?</button></div></div><div class="why-p" hidden></div>`;
  return li;
}
function rowNote(li, kind, html){ const n = $(".it-note", li); n.className = "it-note" + (kind ? " n-" + kind : ""); n.innerHTML = html || ""; if (kind) { n.classList.remove("a-note"); void n.offsetWidth; n.classList.add("a-note"); } }
function rowWhy(li, answer, e, rule){ const p = $(".why-p", li), h = whyPanel(answer, e, rule); p.innerHTML = h; const b = $(".why-b", li); b.hidden = !h; if (!h) { p.hidden = true; b.classList.remove("on"); b.setAttribute("aria-expanded", "false"); } }
function animIn(el, cls){ el.classList.remove("a-ok", "a-bad"); void el.offsetWidth; el.classList.add(cls); }
function ruleFor(tid, ei){ const w = WHY[tid] && WHY[tid][ei]; return w ? (LANG === "en" ? w[1] : w[0]) : ""; }
function taskFor(tid, ei){ const w = WHYT[tid] && WHYT[tid][ei]; return w ? (LANG === "en" ? w[1] : w[0]) : ""; }
/* разбор: Ответ → Почему здесь так → (линия) → Правило */
function whyPanel(answer, e, rule){
  const a = answer !== "" && answer != null ? `<p class="why-a"><b>${t("answerIs")}</b> ${esc(answer)}</p>` : "";
  const c = e ? `<p class="why-c"><b>${t("whyHere").trim()}</b> ${e}</p>` : "";
  const r = rule ? `<p class="why-r"><b>${t("whyRule").trim()}</b> ${rule}</p>` : "";
  return a || c || r ? a + c + ((a || c) && r ? `<i class="why-hr"></i>` : "") + r : "";
}
function whyHTML(answer, e, rule){
  const p = whyPanel(answer, e, rule); if (!p) return "";
  return `<button type="button" class="why-b" aria-expanded="false" aria-label="${esc(t("whyA"))}" title="${esc(t("whyA"))}">?</button><div class="why-p" hidden>${p}</div>`;
}
document.addEventListener("click", e=>{
  const b = e.target.closest(".why-b"); if (!b) return;
  const li = b.closest(".it5"), p = li ? $(":scope > .why-p", li) : b.nextElementSibling; if (!p || !p.classList.contains("why-p")) return;
  const open = p.hidden; p.hidden = !open; b.setAttribute("aria-expanded", open); b.classList.toggle("on", open);
});
const fbHtml = (state, answers) => {
  const right = esc(answers[0]);
  if (state === "ok") return `<span class="ok-t">${OKW()}</span>`;
  if (state === "acc") return `<span class="acc-t">${t("almost")}</span> <b>${right}</b>`;
  if (state === "shown") return `<span class="ex-e">${t("answerIs")} <b>${right}</b></span>`;
  return `<span class="pen">${f7("arrow_right", "f7-in")}${right}</span>`;
};
const INIT = {};

/* multiple choice + true/false */
INIT.mc = (api, ex) => {
  const items = ex.t === "tf" ? ex.items.map(it=>({q:it.q, o:tfOpts(), a: it.a?0:1, e:it.e, keep:true})) : ex.items;
  let answered, correct, sel, rows;
  const choose = (k, j, restoring) => {
    const row = rows[k], it = items[k];
    if (!row || row.dataset.done) return; row.dataset.done = "1";
    const ok = j === it.a; answered++; if (ok) correct++;
    $$(".opt", row).forEach(x=>{ x.disabled = true; const jj = +x.dataset.j; if (jj === it.a) x.classList.add("is-ok"); else if (jj === j) x.classList.add("is-bad"); if (!restoring && jj === j) animIn(x, ok ? "a-ok" : "a-bad"); });
    rowNote(row, ok ? "ok" : "bad", ok ? OKW() : `${t("answerIs")} ${it.o[it.a]}`);
    rowWhy(row, it.o[it.a], it.e, api.rule());
    sel[k] = j; if (!restoring) { api.save({sel}); api.ans(k, ok ? "ok" : "bad"); }
    api.count(correct, items.length);
    if (answered === items.length) api.finish(correct, items.length, null, restoring); else api.status(t("mcHint5"));
  };
  const build = restore => {
    answered = 0; correct = 0; sel = {}; rows = [];
    api.body.innerHTML = `<ol class="its"></ol>`; const list = $(".its", api.body);
    api.status(t("mcHint5")); api.count(0, items.length);
    items.forEach((it,k)=>{
      const opts = it.o.map((o,j)=>({o,j})); if (!it.keep) shuffle(opts);
      const row = itemRow(k, `<p class="q">${qhtml(it.q)}</p><div class="opts">${opts.map(x=>`<button type="button" class="opt" data-j="${x.j}">${x.o}</button>`).join("")}</div>`);
      rowWhy(row, "", "", api.rule());
      $$(".opt", row).forEach(b=>b.addEventListener("click", ()=>choose(k, +b.dataset.j, false)));
      list.appendChild(row); rows.push(row);
    });
    if (restore && restore.sel) Object.keys(restore.sel).forEach(k=>choose(+k, +restore.sel[k], true));
  };
  api.button(t("again"), "sec", ()=>{ api.clear(); build(null); });
  build(api.saved);
};
INIT.tf = INIT.mc;

/* instant checking for text inputs */
function wireInstant(slots, onFirst, init, onSave, onAns){
  const first = slots.map((_,k)=> init && init.f && init.f[k] ? init.f[k] : null);
  const save = () => { if (onSave) onSave({v: slots.map(s=>s.inp.value), f: first}); };
  const paint = k => {
    const s = slots[k], st = judge(s.inp.value, s.a);
    if (st === "empty") return st;
    s.inp.classList.remove("r-ok","r-bad","r-acc","r-shown"); s.inp.classList.add(st==="ok"?"r-ok":st==="acc"?"r-acc":"r-bad");
    s.show(st); return st;
  };
  const mark = k => {
    const st = paint(k); if (st === "empty") return st;
    animIn(slots[k].inp, st === "bad" ? "a-bad" : "a-ok");
    if (!first[k]) { first[k] = st; onFirst(first, false); if (onAns) onAns(k, st); }
    save(); return st;
  };
  const next = k => { const n = slots[k+1]; if (n) n.inp.focus(); else s0blur(k); };
  const s0blur = k => { try { slots[k].inp.blur(); } catch(e) {} };
  slots.forEach((s,k)=>{
    s.inp.setAttribute("enterkeyhint", k < slots.length - 1 ? "next" : "done");
    s.inp.addEventListener("input", ()=>{ s.inp.classList.remove("r-ok","r-bad","r-acc"); s.hide(); });
    s.inp.addEventListener("keydown", e=>{ if (e.key === "Enter") { e.preventDefault(); if (mark(k) !== "empty") next(k); } });
  });
  if (init && init.v) slots.forEach((s,k)=>{ if (init.v[k]) { s.inp.value = init.v[k]; if (first[k]) paint(k); } });
  onFirst(first, true);
  return {
    first,
    reveal(){ slots.forEach((s,k)=>{ if (first[k] === "ok") return; s.inp.value = s.a[0]; s.inp.classList.remove("r-ok","r-bad","r-acc"); s.inp.classList.add("r-shown"); s.show("shown"); if (!first[k]) first[k] = "gave"; }); onFirst(first, false); save(); }
  };
}
const reporter = (api, n) => (first, restoring) => {
  const done = first.filter(Boolean).length, got = first.filter(x=>x==="ok").length;
  api.count(got, n);
  if (done === n) api.finish(got, n, null, restoring);
  else api.status(t("hintFirst"));
};

/* статус строки для заданий с вводом: Juste ! / Почти: … / Ответ: … */
function fillNote(li, st, answers){
  const right = esc(answers[0]);
  if (st === "ok") rowNote(li, "ok", OKW());
  else if (st === "acc") rowNote(li, "acc", `${t("almostS")} <b>${right}</b>`);
  else if (st === "shown") rowNote(li, "shown", `${t("answerIs")} ${right}`);
  else rowNote(li, "bad", `${t("answerIs")} ${right}`);
}
INIT.fill = (api, ex) => {
  let ctl;
  const build = restore => {
    api.body.innerHTML = accBar() + `<ol class="its"></ol>`; const list = $(".its", api.body);
    api.status(t("hintFirst"));
    const slots = ex.items.map((it,k)=>{
      const inp = `<input class="ans${it.long?" wide":""}" ${inputAttrs} placeholder="…" aria-label="${esc(t("gapN", k+1))}">`;
      const inline = it.q.includes("___");
      const row = itemRow(k, inline ? `<p class="fillq">${it.q.replace("___", inp).replace(/___/g,"…")}</p>` : `<label class="it-q">${it.q.replace(/\s*→\s*$/, "")}</label>${inp.replace('placeholder="…"', `placeholder="${esc(t("answerPh"))}"`)}`, !inline);
      rowWhy(row, "", "", api.rule());
      list.appendChild(row);
      return {inp: $(".ans", row), a: it.a, long: it.long, show: st => { fillNote(row, st, it.a); rowWhy(row, it.a[0], it.e, api.rule()); }, hide: () => { rowNote(row, "", ""); }};
    });
    ctl = wireInstant(slots, reporter(api, slots.length), restore, st=>api.save(st), (k, st)=>api.ans(k, st));
  };
  api.button(t("showAnswers"), "sec", ()=>ctl.reveal());
  api.button(t("again"), "sec", ()=>{ api.clear(); build(null); });
  build(api.saved);
};

INIT.conj = (api, ex) => {
  let ctl;
  const build = restore => {
    api.body.innerHTML = accBar() + `<div class="conj-grid">${ex.items.map((it,v)=>`<div class="conj-card"><h5><span class="fr">${it.v}</span></h5>${it.f.map((f,k)=>`<div class="conj-row"><label for="c-${api.el.dataset.i}-${v}-${k}">${it.p[k]}</label><input id="c-${api.el.dataset.i}-${v}-${k}" class="ans" ${inputAttrs} data-v="${v}" data-k="${k}"></div>`).join("")}</div>`).join("")}</div>`;
    api.status(t("hintFirst"));
    const slots = $$(".ans", api.body).map(inp=>{
      const f = ex.items[+inp.dataset.v].f[+inp.dataset.k], row = inp.parentNode;
      const clear = () => $$(".pen,.acc-t", row).forEach(n=>n.remove());
      return {inp, a:[f], show: st => { clear(); api.whyFoot(); if (st === "bad") row.insertAdjacentHTML("beforeend", `<span class="pen">${esc(f)}</span>`); else if (st === "acc") row.insertAdjacentHTML("beforeend", `<span class="acc-t">${esc(f)}</span>`); }, hide: clear};
    });
    ctl = wireInstant(slots, reporter(api, slots.length), restore, st=>api.save(st), (k, st)=>api.ans(k, st));
  };
  api.button(t("showAnswers"), "sec", ()=>ctl.reveal());
  api.button(t("again"), "sec", ()=>{ api.clear(); build(null); });
  build(api.saved);
};

INIT.listen = (api, ex) => {
  const items = ex.items; let ctl;
  const build = restore => {
    const tts = !!synth;
    api.body.innerHTML = (tts ? "" : `<p class="q" style="color:var(--ink-3)">${t("listenNoTts")}</p>`) + `<ol class="its"></ol>`;
    const list = $(".its", api.body);
    const rows = items.map((it,k)=>{
      const row = itemRow(k, `<div class="lis">${tts ? `<button type="button" class="play" data-k="${k}">${ICON_PLAY}<span>${t("listen")}</span></button><button type="button" class="play slow" data-k="${k}">${t("slow")}</button>` : `<span class="read">${esc(it.say)}</span>`}</div><input class="ans" ${inputAttrs} inputmode="numeric" placeholder="${esc(t("answerPh"))}" aria-label="${esc(t("numberN", k+1))}">`, true);
      rowWhy(row, "", "", api.rule()); list.appendChild(row); return row;
    });
    $$(".play", api.body).forEach(b=>b.addEventListener("click", ()=>speak(items[+b.dataset.k].say, b.classList.contains("slow") ? .55 : .9)));
    api.status(t("listenHint"));
    const slots = rows.map((row,k)=>{ const it = items[k];
      return {inp: $(".ans", row), a: it.a, minAdv: 2,
        show: st => { fillNote(row, st, it.a); rowWhy(row, it.a[0] + " — " + it.say, "", api.rule()); },
        hide: () => { rowNote(row, "", ""); }}; });
    ctl = wireInstant(slots, reporter(api, slots.length), restore, st=>api.save(st), (k, st)=>api.ans(k, st));
  };
  api.button(t("showAnswers"), "sec", ()=>ctl.reveal());
  api.button(t("again"), "sec", ()=>{ api.clear(); build(null); });
  build(api.saved);
};

/* matching */
INIT.match = (api, ex) => {
  let mistakes, matched, selL, selR, done;
  const n = ex.pairs.length;
  const lockPair = k => { $$(`.opt[data-k="${k}"]`, api.body).forEach(x=>{ x.classList.remove("sel"); x.classList.add("is-ok"); x.disabled = true; }); };
  const report = restoring => {
    api.count(matched, n, t("cntPairs"));
    if (matched === n) { api.finish(Math.max(0, n - mistakes), n, `${t("matchDone", mistakes)} · <span class="pen">${praise((n-mistakes)/n)}</span>`, restoring); api.count(matched, n, t("cntPairs")); }
    else api.status(matched || mistakes ? t("matchProg", matched, n, mistakes) : t("matchHint"));
  };
  const build = restore => {
    mistakes = 0; matched = 0; selL = null; selR = null; done = [];
    const L = ex.pairs.map((p,k)=>({t:p[0],k})), R = shuffle(ex.pairs.map((p,k)=>({t:p[1],k})));
    api.body.innerHTML = `<div class="match"><div class="colm">${L.map(x=>`<button type="button" class="opt" data-side="L" data-k="${x.k}">${x.t}</button>`).join("")}</div><div class="colm">${R.map(x=>`<button type="button" class="opt" data-side="R" data-k="${x.k}">${x.t}</button>`).join("")}</div></div>`;
    $$(".opt", api.body).forEach(b=>b.addEventListener("click", ()=>{
      if (b.disabled) return;
      const side = b.dataset.side;
      $$(`.opt[data-side="${side}"]`, api.body).forEach(x=>x.classList.remove("sel"));
      b.classList.add("sel");
      if (side === "L") selL = b; else selR = b;
      if (side === "L" && synth) speak(b.textContent);
      if (selL && selR) {
        if (selL.dataset.k === selR.dataset.k) { lockPair(selL.dataset.k); matched++; done.push(+selL.dataset.k); api.ans(+selL.dataset.k, "ok"); }
        else { mistakes++; api.ans(null, "bad"); const r = selR; r.classList.add("is-bad","flash"); setTimeout(()=>r.classList.remove("is-bad","flash","sel"), 450); selL.classList.remove("sel"); }
        selL = null; selR = null;
        api.save({m: done, mis: mistakes}); api.whyFoot(); report(false);
      }
    }));
    if (restore && restore.m) { mistakes = restore.mis || 0; restore.m.forEach(k=>{ lockPair(k); matched++; done.push(k); }); if (restore.m.length || mistakes) api.whyFoot(); }
    report(true);
  };
  api.button(t("again"), "sec", ()=>{ api.clear(); build(null); });
  build(api.saved);
};

/* sorting */
INIT.sort = (api, ex) => {
  let sel = null, wrong, placed, firstWrong, pl;
  const n = ex.items.length;
  const report = restoring => { const got = n - firstWrong.size; api.count(placed, n, t("cntPlaced")); if (placed === n) api.finish(got, n, null, restoring); else api.status(placed || firstWrong.size ? t("sortProg", placed, n, firstWrong.size) : t("sortHint")); };
  const lockIn = (chip, binEl) => { $(".bin-l", binEl).appendChild(chip); chip.classList.add("is-ok"); chip.classList.remove("sel"); chip.draggable = false; $$(".pen", chip).forEach(x=>x.remove()); };
  const persist = () => api.save({pl, fw:[...firstWrong], w:wrong});
  const tryPlace = (chip, binEl) => {
    sel = null; if (!chip || chip.classList.contains("is-ok")) return;
    chip.classList.remove("sel");
    const b = +binEl.dataset.bin, k = +chip.dataset.k, it = ex.items[k];
    if (b === it[1]) { lockIn(chip, binEl); placed++; pl.push(k); if (!firstWrong.has(k)) api.ans(k, "ok"); }
    else {
      if (!firstWrong.has(k)) api.ans(null, "bad");
      firstWrong.add(k); wrong[k] = (wrong[k]||0) + 1;
      chip.classList.add("is-bad","flash"); setTimeout(()=>chip.classList.remove("is-bad","flash"), 650);
      if (wrong[k] >= 2 && !$(".pen", chip)) chip.insertAdjacentHTML("beforeend", `<span class="pen">${f7("arrow_right", "f7-in")}${esc(ex.cats[it[1]])}</span>`);
    }
    persist(); api.whyFoot(); report(false);
  };
  api.body.addEventListener("click", e=>{
    const chip = e.target.closest(".chip");
    if (chip) { if (chip.classList.contains("is-ok")) return; if (sel === chip) { chip.classList.remove("sel"); sel = null; return; } if (sel) sel.classList.remove("sel"); sel = chip; chip.classList.add("sel"); return; }
    const bin = e.target.closest(".bin");
    if (bin && sel) tryPlace(sel, bin);
  });
  const build = restore => {
    sel = null; wrong = {}; placed = 0; firstWrong = new Set(); pl = [];
    const chips = shuffle(ex.items.map((it,k)=>({t:it[0],k})));
    api.body.innerHTML = `<div class="sort-pool" data-done="${esc(t("sortDone"))}">${chips.map(c=>`<button type="button" class="chip" draggable="true" data-k="${c.k}">${c.t}</button>`).join("")}</div><div class="bins">${ex.cats.map((c,j)=>`<div class="bin" data-bin="${j}" role="button" tabindex="0"><h5>${c}</h5><div class="bin-l"></div></div>`).join("")}</div>`;
    $$(".bin", api.body).forEach(b=>{
      b.addEventListener("keydown", e=>{ if ((e.key==="Enter"||e.key===" ") && sel) { e.preventDefault(); tryPlace(sel, b); } });
      b.addEventListener("dragover", e=>{ e.preventDefault(); b.classList.add("over"); });
      b.addEventListener("dragleave", ()=>b.classList.remove("over"));
      b.addEventListener("drop", e=>{ e.preventDefault(); b.classList.remove("over"); if (sel) tryPlace(sel, b); });
    });
    $$(".chip", api.body).forEach(ch=>ch.addEventListener("dragstart", e=>{ if (ch.classList.contains("is-ok")) { e.preventDefault(); return; } try { e.dataTransfer.setData("text/plain", ch.dataset.k); } catch(_) {} sel = ch; }));
    if (restore) {
      (restore.fw || []).forEach(k=>firstWrong.add(k)); wrong = restore.w || {};
      (restore.pl || []).forEach(k=>{ const chip = $(`.chip[data-k="${k}"]`, api.body), bin = $(`.bin[data-bin="${ex.items[k][1]}"]`, api.body); if (chip && bin) { lockIn(chip, bin); placed++; pl.push(k); } });
      if ((restore.pl || []).length || (restore.fw || []).length) api.whyFoot();
    }
    report(true);
  };
  api.button(t("again"), "sec", ()=>{ api.clear(); build(null); });
  build(api.saved);
};

/* word order */
INIT.order = (api, ex) => {
  let res;
  const n = ex.items.length;
  const report = restoring => { const done = res.filter(r=>r.done).length, got = res.filter(r=>r.done && r.mis===0).length; api.count(got, n); if (done === n) api.finish(got, n, null, restoring); else api.status(done || res.some(r=>r.mis) ? t("orderProg", done, n, got) : t("orderHint")); };
  const build = restore => {
    api.body.innerHTML = `<ol class="its"></ol>`; const list = $(".its", api.body);
    res = ex.items.map((_,k)=> restore && restore.r && restore.r[k] ? {...restore.r[k]} : {pos:0, mis:0, done:false});
    ex.items.forEach((it,k)=>{
      const words = it.sep ? it.s.split(it.sep) : it.s.split(" "), said = it.sep ? words.join(", ") : it.s;
      let toks = shuffle(words.slice()); let guard = 0;
      while (words.length > 2 && toks.join("\u0001") === words.join("\u0001") && guard++ < 10) toks = shuffle(toks);
      const row = itemRow(k, `<p class="ru">${it.ru}</p><div class="ord-line" aria-label="${esc(t("yourSentence"))}"></div><div class="ord-bank">${toks.map(w=>`<button type="button" class="tok">${esc(w)}</button>`).join("")}</div>`);
      row.classList.add("ord"); if (it.sep) row.classList.add("ord-seq");
      rowWhy(row, "", "", api.rule());
      const line = $(".ord-line", row), bank = $(".ord-bank", row);
      const finishRow = () => { line.classList.add("r-ok"); bank.hidden = true; const r = res[k]; rowNote(row, r.mis ? "acc" : "ok", r.mis ? `${t("collected")} · ${t("errorsOnWay", r.mis)}` : OKW()); rowWhy(row, said, it.ru, api.rule()); };
      for (let p = 0; p < res[k].pos; p++) { const tk = $$(".tok", bank).find(x=>x.textContent === words[p]); if (tk) line.appendChild(tk); }
      if (res[k].done) finishRow();
      row.addEventListener("click", e=>{
        const tk = e.target.closest(".ord-bank .tok"); const r = res[k];
        if (!tk || r.done) return;
        if (tk.textContent === words[r.pos]) {
          line.appendChild(tk); r.pos++;
          if (r.pos === words.length) { r.done = true; finishRow(); speak(said); api.ans(k, r.mis ? "bad" : "ok"); } else rowNote(row, "", "");
        } else {
          r.mis++; tk.classList.add("is-bad"); animIn(tk, "a-bad"); setTimeout(()=>tk.classList.remove("is-bad"), 550);
          rowNote(row, "bad", `${t("wrongWord")} · ${t("errorsN", r.mis)}`);
        }
        api.save({r: res}); report(false);
      });
      list.appendChild(row);
    });
    report(true);
  };
  api.button(t("again"), "sec", ()=>{ api.clear(); build(null); });
  build(api.saved);
};

/* flashcards inside a topic */
INIT.cards = (api, ex) => {
  let queue, known, flipped, dir;
  const persist = () => api.save({known, dir});
  const build = restore => {
    known = restore && restore.known ? restore.known.slice() : []; dir = restore && restore.dir || "fr"; flipped = false;
    queue = shuffle(ex.items.map((_,k)=>k).filter(k=>!known.includes(k)));
    draw(!!restore);
  };
  const draw = restoring => {
    if (!queue.length) {
      api.body.innerHTML = `<div class="cards-x"><div class="fcard seyes"><span class="front">${COURSE === "es" ? "¡Bravo!" : "Bravo !"}</span><span class="back">${t("deckDoneN", ex.items.length)}</span></div></div>`;
      api.finish(1, 1, `<b>${t("deckDone")}</b> · <span class="pen">${praise(1)}</span>`, restoring); api.count(known.length, ex.items.length, t("cntKnow")); return;
    }
    const [fr, tr] = ex.items[queue[0]];
    const front = dir === "fr" ? fr : tr, back = dir === "fr" ? tr : fr;
    api.body.innerHTML = `<div class="cards-x">
      <div class="cards-meta"><span>${t("cardsLeft", queue.length, known.length)}</span><span class="seg"><button type="button" data-d="fr" class="${dir==="fr"?"on":""}">${t("dirFr")}</button><button type="button" data-d="ru" class="${dir==="ru"?"on":""}">${t("dirRu")}</button></span></div>
      <div class="fcard" role="button" tabindex="0" aria-label="${esc(t("flipA"))}"><span class="front">${esc(front)}</span><span class="back" ${flipped?"":"hidden"}>${esc(back)}</span><span class="hint">${flipped?"":esc(t("flip"))}</span></div>
      <div class="btns"><button type="button" class="btn sm sec" data-a="again">${t("againCard")}</button><button type="button" class="btn sm pri" data-a="know">${t("knowIt")}</button></div></div>`;
    const card = $(".fcard", api.body);
    const flip = () => { flipped = !flipped; draw(); if (flipped) speak(fr); };
    card.addEventListener("click", flip);
    card.addEventListener("keydown", e=>{ if (e.key==="Enter"||e.key===" ") { e.preventDefault(); flip(); } });
    $$(".seg button", api.body).forEach(b=>b.addEventListener("click", ()=>{ dir = b.dataset.d; flipped = false; persist(); draw(); }));
    $('[data-a="know"]', api.body).addEventListener("click", ()=>{ const k = queue.shift(); known.push(k); api.ans(k, "self"); api.whyFoot(); flipped = false; persist(); draw(); });
    $('[data-a="again"]', api.body).addEventListener("click", ()=>{ queue.push(queue.shift()); flipped = false; draw(); });
    api.status(t("cardsHint")); api.count(known.length, ex.items.length, t("cntKnow"));
  };
  api.button(t("shuffleAgain"), "sec", ()=>{ api.clear(); build(null); });
  build(api.saved);
};

/* read-aloud drill */
INIT.drill = (api, ex) => {
  let seen;
  const build = restore => {
    seen = restore && restore.seen ? restore.seen.slice() : [];
    api.body.innerHTML = `<div class="drill">${ex.items.map(([w,tx],k)=>`<div class="dr"><b>${esc(w)}</b><span class="tx" ${seen.includes(k)?"":"hidden"}>${esc(tx)}</span><button type="button" class="play" data-k="${k}" ${seen.includes(k)?"data-seen":""}>${ICON_PLAY} ${t("check")}</button></div>`).join("")}</div>`;
    const upd = restoring => { api.count(seen.length, ex.items.length, t("cntRead")); if (seen.length === ex.items.length) api.finish(1, 1, `${t("allRead")} · <span class="pen">${COURSE === "es" ? "¡Bravo!" : "Bravo !"}</span>`, restoring); else api.status(t("readN", seen.length, ex.items.length)); };
    $$(".play", api.body).forEach(b=>b.addEventListener("click", ()=>{
      const k = +b.dataset.k; b.previousElementSibling.hidden = false; b.dataset.seen = "1"; speak(ex.items[k][0], .8);
      if (!seen.includes(k)) { seen.push(k); api.save({seen}); api.ans(k, "self"); api.whyFoot(); upd(false); }
    }));
    upd(true); if (seen.length) api.whyFoot();
  };
  api.button(t("again"), "sec", ()=>{ api.clear(); build(null); });
  build(api.saved);
};

/* =========================================================
   navigation
   ========================================================= */
function navLink(tp){ return `<a class="nl" href="#${tp.id}" data-id="${tp.id}"><span class="nl-t">${tp.title}</span><span class="ring" data-ring="${tp.id}"></span></a>`; }
/* группы в сайдбаре: юниты, грамматика, справочник — сворачиваются, состояние в localStorage */
let NAVG = {}; try { NAVG = JSON.parse(ls.get("edito-navg") || "{}") || {}; } catch(e) { NAVG = {}; }
const navGKey = g => COURSE + ":" + (COURSE === "fr" ? FRMODE + ":" : "") + g;
function navGroup(key, head, links, opts){
  opts = opts || {};
  const k = navGKey(key), open = NAVG[k] !== undefined ? NAVG[k] : !!opts.open;
  return `<div class="ng${open ? " open" : ""}" data-g="${esc(k)}">
    <button type="button" class="ng-h" aria-expanded="${open}">${head}${ICO.chev}</button>
    <div class="ng-b"><div class="ng-in">${links}</div></div></div>`;
}
const unitBadge = (u, hue) => `<span class="ng-n" data-hue="${hue}">${u}</span>`;
function navTopics(units, unitW, uname){
  const es = COURSE === "es";
  if (!es && FRMODE === "tutor" && !TUT.length) return `<p class="nav-empty">${t("tutorEmptyS")}</p>`;
  const tut = !es && FRMODE === "tutor", cah = (!es && FRMODE === "cahier") || tut, list = tut ? TUT : cah ? CAH : BOOK;
  const first = units.find(u=>list.some(x=>x.unit===u));
  let h = units.map(u=>{ const g = list.filter(x=>x.unit===u); return g.length ? navGroup("u" + u, `${unitBadge(u, u)}<span class="ng-t"><b>${unitW} ${u}</b><i>${uname(u)}</i></span>`, g.map(navLink).join(""), {open: u === first}) : ""; }).join("");
  if (!cah) h += `<div class="nav-sec">${t("navMore")}</div>`
    + (GRAM.length ? navGroup("gram", `<span class="ng-n ng-i" data-hue="g">${ICO.gram}</span><span class="ng-t"><b>${t("gram")}</b></span>`, GRAM.map(navLink).join("")) : "")
    + navGroup("ref", `<span class="ng-n ng-i" data-hue="r">${ICO.ref}</span><span class="ng-t"><b>${t("ref")}</b></span>`, REF.map(navLink).join(""));
  return h;
}
function navOpenGroup(el, open, save){
  el.classList.toggle("open", open); $(".ng-h", el).setAttribute("aria-expanded", open);
  if (save) { NAVG[el.dataset.g] = open; ls.set("edito-navg", JSON.stringify(NAVG)); }
}
/* поиск по темам в сайдбаре («/» — фокус) */
function navSearchHTML(){
  return `<label class="nsearch">${ICO.search}<input type="search" id="navQ" placeholder="${esc(t("navSearch"))}" autocomplete="off" spellcheck="false" aria-label="${esc(t("navSearch"))}"><kbd>/</kbd></label>`;
}
function navWhere(tp){
  const es = COURSE === "es";
  return tp.sec === "cahier" ? `Cahier · ${t("unitW")} ${tp.unit}` : tp.sec === "tutor" ? `Tutor · ${t("unitW")} ${tp.unit}` : tp.sec === "book" ? `${es ? t("unitWes") : t("unitW")} ${tp.unit}` : tp.sec === "gram" ? t("gram") : t("ref");
}
function pagesOf(tp){
  const src = String(tp.page || "").replace(/(Unidad|Unité)\s*\d+/g, ""), out = [];
  src.replace(/(\d+)\s*[–-]\s*(\d+)|(\d+)/g, (m, a, b, c)=>{ out.push(c ? [+c, +c] : [+a, +b]); return m; });
  return out;
}
function navSearchRun(q){
  const box = $("#navRes"), groups = $("#navGroups"); if (!box || !groups) return;
  const f = fold(q).trim();
  if (!f) { box.hidden = true; groups.hidden = false; box.innerHTML = ""; return; }
  const pages = [["test", t("test")], ["bank", t("bank")], COURSE === "es" ? ["lexico", t("lexico")] : ["quizlet", t("quizlet")], ["shpargalka", t("cheat")]];
  const tps = [...BOOK, ...CAH, ...TUT, ...GRAM, ...REF];
  const hit = s => fold(s).includes(f);
  /* число → темы с этой страницей учебника / тетради */
  if (/^\d{1,3}$/.test(f)) {
    const n = +f, onPage = tps.filter(tp=>pagesOf(tp).some(([a,b])=>n >= a && n <= b));
    const rest = tps.filter(tp=>!onPage.includes(tp) && (hit(tp.title) || hit(tp.ru)));
    const row = (tp, pg) => `<a class="nl nsr" href="#${tp.id}" data-id="${tp.id}"><span class="nl-t">${tp.title}<small>${navWhere(tp)}${pg ? " · " + esc(String(tp.page).replace(/^(Unidad|Unité)\s*\d+,\s*/, "")) : " · " + esc(String(tp.ru).replace(/<[^>]+>/g,""))}</small></span></a>`;
    const res = onPage.map(tp=>row(tp, true)).concat(rest.slice(0, 20).map(tp=>row(tp, false)));
    box.innerHTML = res.length ? res.join("") : `<p class="nav-empty">${t("navNonePage", n)}</p>`;
    box.hidden = false; groups.hidden = true; markActive(); return;
  }
  const res = pages.filter(([,n])=>hit(n)).map(([id,n])=>`<a class="nl nsr" href="#${id}" data-id="${id}"><span class="nl-t">${esc(n)}</span></a>`)
    .concat(tps.filter(tp=>hit(tp.title) || hit(tp.ru) || hit(tp.kind)).slice(0, 40).map(tp=>`<a class="nl nsr" href="#${tp.id}" data-id="${tp.id}"><span class="nl-t">${tp.title}<small>${navWhere(tp)} · ${esc(String(tp.ru).replace(/<[^>]+>/g,""))}</small></span></a>`));
  box.innerHTML = res.length ? res.join("") : `<p class="nav-empty">${t("navNone")}</p>`;
  box.hidden = false; groups.hidden = true; markActive();
}
function wireNavSearch(){
  const q = $("#navQ"); if (!q) return;
  q.addEventListener("input", ()=>navSearchRun(q.value));
  q.addEventListener("keydown", e=>{
    if (e.key === "Escape") { if (q.value) { e.preventDefault(); e.stopPropagation(); q.value = ""; navSearchRun(""); } else q.blur(); }
    else if (e.key === "Enter") { const a = $("#navRes .nsr"); if (a) { e.preventDefault(); location.hash = a.getAttribute("href").slice(1); q.value = ""; navSearchRun(""); q.blur(); } }
    else if (e.key === "ArrowDown") { const a = $("#navRes .nsr"); if (a) { e.preventDefault(); a.focus(); } }
  });
  $("#navRes").addEventListener("keydown", e=>{
    const list = $$("#navRes .nsr"), k = list.indexOf(document.activeElement); if (k < 0) return;
    if (e.key === "ArrowDown") { e.preventDefault(); (list[k+1] || list[k]).focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); (k ? list[k-1] : q).focus(); }
  });
  $("#navRes").addEventListener("click", e=>{ if (e.target.closest(".nsr")) { q.value = ""; setTimeout(()=>navSearchRun(""), 0); } });
}
document.addEventListener("keydown", e=>{
  if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
  const a = document.activeElement; if (a && (a.isContentEditable || /^(input|textarea|select)$/i.test(a.tagName))) return;
  const q = $("#navQ"); if (!q || VIEW_ZH) return;
  e.preventDefault();
  if (window.matchMedia("(max-width:979px)").matches && !nav.classList.contains("open")) openNav();
  else if (app.classList.contains("nav-off")) setNavHidden(false);
  setTimeout(()=>{ const q2 = $("#navQ"); if (q2) q2.focus(); }, 30);
});
const CFLAG = {fr:'<span class="cflag cf-fr" aria-hidden="true"><i></i><i></i><i></i></span>', es:'<span class="cflag cf-es" aria-hidden="true"><i></i><i></i><i></i></span>', zh:'<span class="cflag cf-zh" aria-hidden="true"><b>★</b></span>'};
let VIEW_ZH = decodeURIComponent((location.hash||"").slice(1)) === "zh";
const ddCur = () => VIEW_ZH ? "zh" : COURSE;
const cName = c => t("courseNames")[c];
const cddVal = c => `<span class="cdd-v"><b>${cName(c)}</b><small>${c === "zh" ? t("soon") : COURSES[c].book}</small></span>`;
function courseDDHTML(){
  return `<div class="cdd" id="cdd">
    <button type="button" class="cdd-btn" id="cddBtn" aria-haspopup="listbox" aria-expanded="false" aria-label="${esc(t("courseLabel"))}">${CFLAG[ddCur()]}${cddVal(ddCur())}${f7("chevron_down", "cdd-ch")}</button>
    <div class="cdd-menu" role="listbox" aria-label="${esc(t("courseLabel"))}">${["fr","es","zh"].map(c=>`<button type="button" role="option" class="cdd-opt${c===ddCur()?" on":""}" data-course="${c}" aria-selected="${c===ddCur()}">${cName(c)}${c === "zh" ? ` <small class="cdd-soon">${t("soon")}</small>` : ""}</button>`).join("")}</div>
  </div>`;
}
function paintCourseDD(c){
  const dd = $("#cdd"); if (!dd) return;
  $("#cddBtn", dd).innerHTML = `${CFLAG[c]}${cddVal(c)}` + $("#cddBtn .cdd-ch", dd).outerHTML;
  $$(".cdd-opt", dd).forEach(o=>{ const on = o.dataset.course === c; o.classList.toggle("on", on); o.setAttribute("aria-selected", on); });
}
function cddOpen(open, focus){
  const dd = $("#cdd"); if (!dd) return;
  dd.classList.toggle("open", open); $("#cddBtn", dd).setAttribute("aria-expanded", open);
  if (open && focus) { const o = $(".cdd-opt.on", dd) || $(".cdd-opt", dd); o.focus(); }
}
function wireCourseDD(){
  const dd = $("#cdd"); if (!dd) return;
  const btn = $("#cddBtn", dd), opts = () => $$(".cdd-opt", dd);
  btn.addEventListener("click", e=>{ cddOpen(!dd.classList.contains("open"), e.detail === 0); });
  btn.addEventListener("keydown", e=>{ if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); cddOpen(true, true); } });
  opts().forEach(o=>{
    o.addEventListener("click", ()=>{
      cddOpen(false); btn.focus({preventScroll:true});
      const c = o.dataset.course;
      if (c === "zh") { location.hash = "zh"; return; }
      if (VIEW_ZH && c === COURSE) { location.hash = "home"; return; }
      setCourse(c);
    });
    o.addEventListener("keydown", e=>{
      const list = opts(), k = list.indexOf(o);
      if (e.key === "ArrowDown") { e.preventDefault(); list[(k + 1) % list.length].focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); list[(k - 1 + list.length) % list.length].focus(); }
      else if (e.key === "Escape" || e.key === "Tab") { cddOpen(false); if (e.key === "Escape") { e.preventDefault(); btn.focus(); } }
    });
  });
}
document.addEventListener("click", e=>{ const dd = $("#cdd"); if (dd && dd.classList.contains("open") && !dd.contains(e.target)) cddOpen(false); });
document.addEventListener("keydown", e=>{ if (e.key === "Escape") { const dd = $("#cdd"); if (dd && dd.classList.contains("open")) { cddOpen(false); $("#cddBtn").focus(); } } });
/* сегменты Livre / Cahier / Tutor (только французский) */
function frModeHTML(where){
  return `<div class="seg frmode${where === "nav" ? " frmode-nav" : ""}" role="tablist" aria-label="${esc(t("frModeL"))}">${["livre","cahier","tutor"].map(m=>`<button type="button" role="tab" data-frmode="${m}" aria-selected="${FRMODE===m}" class="${FRMODE===m?"on":""}">${t("frModes")[m]}</button>`).join("")}</div>`;
}
function setFrMode(m, quiet){
  if (!["livre","cahier","tutor"].includes(m) || m === FRMODE) return;
  FRMODE = m; ls.set("edito-frmode", m);
  const keepNav = nav.classList.contains("open"), sc = $(".nav-scroll", nav), y = sc ? sc.scrollTop : 0;
  buildNav(); if (keepNav) nav.classList.add("open");
  const sc2 = $(".nav-scroll", nav); if (sc2) sc2.scrollTop = Math.min(y, 0);
  if (!quiet) { const h = decodeURIComponent((location.hash||"").slice(1)); if (!h || h === "home") { renderHome(); markActive(); } }
}
document.addEventListener("click", e=>{ const b = e.target.closest("[data-frmode]"); if (b) setFrMode(b.dataset.frmode); });
function buildNav(){
  const es = COURSE === "es", unitW = es ? t("unitWes") : t("unitW");
  const units = es ? ["1","2","3","4"] : ["0","1","2","3"], uname = u => es ? t("esUnits")[u] : t("units")[u];
  nav.innerHTML = `
  <div class="nav-top">
    ${courseDDHTML()}
    <button type="button" class="icon-btn" id="navHide" aria-label="${esc(t("hideNav"))}" title="${esc(t("hideNav"))}"><span class="ico-side">${ICO.side}</span><span class="ico-x">${f7("xmark")}</span></button>
  </div>
  ${VIEW_ZH ? "" : navSearchHTML()}
  <div class="nav-scroll">${VIEW_ZH ? `<div class="nav-zh"><span class="nav-zh-h">中文</span><p>${t("zhNav")}</p></div>` : `
    <div class="nav-main">
      <a class="nl big" href="#home" data-id="home">${ICO.home}<span class="nl-t">${t("home")}</span></a>
      <a class="nl big" href="#test" data-id="test">${ICO.test}<span class="nl-t">${t("test")}</span></a>
      <a class="nl big" href="#bank" data-id="bank">${ICO.bank}<span class="nl-t">${t("bank")}</span></a>
      ${es ? `<a class="nl big" href="#lexico" data-id="lexico">${ICO.lex}<span class="nl-t">${t("lexico")}</span></a>` : `<a class="nl big" href="#quizlet" data-id="quizlet">${ICO.quiz}<span class="nl-t">${t("quizlet")}</span><span class="nl-badge" id="srsBadge" hidden></span></a>`}
      <a class="nl big" href="#shpargalka" data-id="shpargalka">${ICO.cheat}<span class="nl-t">${t("cheat")}</span></a>
    </div>
    ${es ? `<div class="nav-sec">${t("fromBook")}</div>` : frModeHTML("nav")}
    <div id="navGroups">${navTopics(units, unitW, uname)}</div>
    <div class="nav-res" id="navRes" hidden></div>`}
  </div>
  <div class="nav-foot">
    ${meHTML()}
  </div>`;
  $("#navHide").addEventListener("click", ()=>{ if (window.matchMedia("(max-width:979px)").matches) closeNav(); else setNavHidden(true); });
  $$("[data-lang]", nav).forEach(b=>b.addEventListener("click", ()=>setLang(b.dataset.lang)));
  wireCourseDD(); wireNavSearch();
  $$(".ng-h", nav).forEach(b=>b.addEventListener("click", ()=>{ const g = b.parentElement; navOpenGroup(g, !g.classList.contains("open"), true); }));
  const tb = $(".topbar .brand"); if (tb) tb.innerHTML = VIEW_ZH ? `<span class="cs-badge cs-zh">ZH</span><b>中文</b><span>${cName("zh")}</span>` : `<span class="cs-badge cs-${COURSE}">${COURSES[COURSE].code}</span><b>${COURSES[COURSE].name}</b><span>${COURSES[COURSE].book}</span>`;
  const mt = $("#meTop"); if (mt) mt.outerHTML = meTopHTML(); else { const mb = $("#menuBtn"); if (mb) mb.insertAdjacentHTML("beforebegin", meTopHTML()); }
  paintNavProgress(); paintAccount(); markActive();
}
function setCourse(c, silent){
  if (c === COURSE || !COURSES[c]) return;
  const root = document.documentElement; root.classList.add("theme-anim"); clearTimeout(setCourse.tm); setCourse.tm = setTimeout(()=>root.classList.remove("theme-anim"), 700);
  paintCourseDD(c);
  COURSE = c; ls.set("edito-course", c); setData(); touch("settings"); spHide();
  const finish = () => {
    const keepNav = nav.classList.contains("open");
    buildNav(); if (keepNav) nav.classList.add("open");
    if (silent) return;
    const h = decodeURIComponent((location.hash||"").slice(1));
    if (["home","test","account","bank","shpargalka",""].includes(h)) route(false); else location.hash = "home";
  };
  if (silent) finish(); else setTimeout(finish, 240);
}
function authHTML(gate){
  const m = Auth.mode, up = m === "up", reset = m === "reset";
  const head = gate
    ? `<h2 class="g-title" id="authH">${t("gTitle")}</h2>
    <p class="auth-sub" id="authSub">${up ? t("authUpSub") : reset ? t("authResetSub") : t("authInSub")}</p>`
    : `<div class="auth-ico">${ICO.cloud}</div>
    <h2 id="authH">${up ? t("authUpH") : reset ? t("authResetH") : t("authInH")}</h2>
    <p class="auth-sub" id="authSub">${up ? t("authUpSub") : reset ? t("authResetSub") : t("authInSub")}</p>`;
  return `<form class="auth${gate ? " g-auth" : ""}" id="authForm" novalidate data-mode="${m}">
    ${head}
    <label class="fld"><span>${t("email")}</span><input type="email" id="authEmail" autocomplete="email" inputmode="email" autocapitalize="off" spellcheck="false" required placeholder="${gate ? esc(t("gEmailPh")) : "name@mail.com"}"></label>
    <div class="fld-wrap" ${reset ? "hidden" : ""}><label class="fld"><span>${t("password")}</span><input type="password" id="authPw" autocomplete="${up?"new-password":"current-password"}" minlength="6" required${gate ? ` placeholder="${esc(t("gPwPh"))}"` : ""}></label></div>
    <p class="auth-msg" id="authMsg" data-k="${Auth.msgKind}" aria-live="polite">${esc(Auth.msg)}</p>
    <button type="submit" class="btn pri auth-go" id="authGo">${up ? t("authUpBtn") : reset ? t("authResetBtn") : t("authInBtn")}</button>
    <div class="auth-links" id="authLinks">${authLinks(m)}</div>
  </form>`;
}
function authLinks(m){
  if (m === "up") return `<span>${t("authHaveAcc")} <button type="button" data-am="in">${t("authLogin")}</button></span>`;
  if (m === "reset") return `<button type="button" data-am="in">${ARL}${t("authBack")}</button>`;
  return `<span>${t("authNoAcc")} <button type="button" data-am="up">${t("authCreate")}</button></span><button type="button" data-am="reset">${t("authForgot")}</button>`;
}
function setAuthMode(m){
  const f = $("#authForm"); if (!f) return;
  Auth.mode = m; Auth.touched = true; Auth.msg = ""; Auth.msgKind = "";
  f.classList.add("swap");
  setTimeout(()=>{
    const up = m === "up", reset = m === "reset";
    f.dataset.mode = m;
    if (!f.classList.contains("g-auth")) $("#authH").textContent = up ? t("authUpH") : reset ? t("authResetH") : t("authInH");
    $("#authSub").textContent = up ? t("authUpSub") : reset ? t("authResetSub") : t("authInSub");
    $("#authGo").textContent = up ? t("authUpBtn") : reset ? t("authResetBtn") : t("authInBtn");
    $(".fld-wrap", f).hidden = reset; const pw = $("#authPw"); pw.autocomplete = up ? "new-password" : "current-password";
    $("#authLinks").innerHTML = authLinks(m); authSay("", "");
    f.classList.remove("swap");
    const e = $("#authEmail"); (e.value ? (reset ? e : pw) : e).focus();
  }, 160);
}
function recoveryHTML(){
  return `<form class="auth" id="pwForm" novalidate><div class="auth-ico">${ICO.cloud}</div><h2>${t("pwNewH")}</h2>
    <label class="fld"><span>${t("pwNew")}</span><input type="password" id="newPw" autocomplete="new-password" minlength="6" required></label>
    <p class="auth-msg" id="pwMsg" aria-live="polite"></p>
    <div class="cb-btns"><button type="submit" class="btn pri">${t("pwSave")}</button><button type="button" class="btn sec" id="pwCancel">${t("cancel")}</button></div></form>`;
}
function wireAuth(){
  const f = $("#authForm");
  if (f && !f.dataset.wired) { f.dataset.wired = "1";
    f.addEventListener("click", e=>{ const b = e.target.closest("[data-am]"); if (b) setAuthMode(b.dataset.am); });
    f.addEventListener("submit", async ev=>{
      ev.preventDefault();
      const email = $("#authEmail").value.trim(), pwEl = $("#authPw"), pw = Auth.mode === "reset" ? "" : pwEl.value;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { authSay(t("aeEmail"), "err"); $("#authEmail").focus(); return; }
      if (Auth.mode !== "reset" && pw.length < 6) { authSay(t("aeShort"), "err"); pwEl.focus(); return; }
      const go = $("#authGo"); go.disabled = true; go.classList.add("busy"); authSay("", "");
      const done = () => { go.disabled = false; go.classList.remove("busy"); };
      try {
        let r;
        if (Auth.mode === "up") {
          r = await withTimeout(sb.auth.signUp({email, password:pw, options:{emailRedirectTo:authRedirectTo()}}), 20000);
          if (r.error) throw r.error;
          if (r.data && r.data.user && Array.isArray(r.data.user.identities) && !r.data.user.identities.length) throw {message:"already registered"};
          if (!r.data.session) { authSay(t("authCheckMail", email), "ok"); done(); return; }
        } else if (Auth.mode === "reset") {
          r = await sb.auth.resetPasswordForEmail(email, {redirectTo:authRedirectTo()});
          if (r.error) throw r.error; authSay(t("authResetSent", email), "ok"); done(); return;
        } else {
          r = await withTimeout(sb.auth.signInWithPassword({email, password:pw}), 20000);
          if (r.error) throw r.error;
        }
        Auth.msg = ""; Auth.mode = "in"; ls.set("edito-seen-auth", "1");
        if (r && r.data && r.data.session && !ME) initCloud();
      } catch(e) {
        /* бывает, что ответ пришёл с ошибкой, но сессия уже создана — тогда это успех */
        let s2 = null; if (Auth.mode !== "reset") { try { const g = await withTimeout(sb.auth.getSession(), 5000); s2 = g && g.data && g.data.session; } catch(_) {} }
        if (s2) { Auth.msg = ""; Auth.mode = "in"; ls.set("edito-seen-auth", "1"); if (!ME) initCloud(); return; }
        authSay(authErrText(e), "err"); done(); f.classList.remove("shake"); void f.offsetWidth; f.classList.add("shake");
      }
    });
  }
  const pf = $("#pwForm");
  if (pf && !pf.dataset.wired) { pf.dataset.wired = "1";
    $("#pwCancel").addEventListener("click", ()=>{ Auth.recovery = false; renderAccount(); });
    pf.addEventListener("submit", async ev=>{
      ev.preventDefault();
      const pw = $("#newPw").value, msg = $("#pwMsg");
      if (pw.length < 6) { msg.textContent = t("aeShort"); msg.dataset.k = "err"; return; }
      const r = await sb.auth.updateUser({password:pw});
      if (r.error) { msg.textContent = authErrText(r.error); msg.dataset.k = "err"; return; }
      Auth.recovery = false; renderAccount(); toast(t("pwSaved"));
    });
  }
}
function paintAccount(){ paintMe(); }
function paintNavProgress(){
  $$("[data-ring]").forEach(r=>{ const tp = byId[r.dataset.ring]; if (!tp) return; const p = topicPct(tp).pct*100; r.style.setProperty("--p", p.toFixed(0)); r.classList.toggle("full", p>=99.5); r.classList.toggle("zero", p < .5); });
  paintMe();
}
function setLang(l){
  if (l === LANG) return;
  LANG = l; ls.set("edito-lang", l); setData(); touch("settings");
  buildNav(); $("#menuLbl").textContent = t("topics"); $("#navShow").lastChild.textContent = t("showNav"); trFabPaint(); rerender();
}
function setNavHidden(h){ app.classList.toggle("nav-off", h); document.body.classList.toggle("nav-off", h); ls.set("edito-nav", h ? "off" : "on"); }
setNavHidden(ls.get("edito-nav") === "off");
const menuBtn = $("#menuBtn"); let scrim = null;
function openNav(){ nav.classList.add("open"); document.body.classList.add("nav-open"); menuBtn.setAttribute("aria-expanded","true"); scrim = document.createElement("div"); scrim.className = "scrim"; scrim.addEventListener("click", closeNav); document.body.appendChild(scrim); }
function closeNav(){ nav.classList.remove("open"); document.body.classList.remove("nav-open"); menuBtn.setAttribute("aria-expanded","false"); if (scrim) { scrim.remove(); scrim = null; } }
menuBtn.addEventListener("click", ()=> nav.classList.contains("open") ? closeNav() : openNav());
$("#navShow").addEventListener("click", ()=>setNavHidden(false));
nav.addEventListener("click", e=>{ if (e.target.closest("a[href]") && nav.classList.contains("open")) closeNav(); });
document.addEventListener("keydown", e=>{ if (e.key === "Escape" && nav.classList.contains("open")) closeNav(); });
window.matchMedia("(max-width:979px)").addEventListener("change", ()=>closeNav());

/* =========================================================
   views
   ========================================================= */
function totals(){ let ex = 0, done = 0, full = 0, sum = 0; TOP.forEach(tp=>{ const p = topicPct(tp); ex += p.n; done += p.done; sum += p.pct*p.n; if (p.pct >= .995) full++; }); return {ex, done, full, avg: ex ? sum/ex : 0}; }
function card(tp){ const p = topicPct(tp), pc = Math.round(p.pct*100); return `<a class="tc${pc >= 100 ? " done" : ""}" href="#${tp.id}" data-hue="${HUE_OF(tp)}"><span class="tc-glow" aria-hidden="true"></span><span class="tc-top"><span class="tc-ic">${kindIco(tp)}</span><span class="tc-go">${pc >= 100 ? ICO.check : ""}${t("tcOpen")}</span></span><h3>${tp.title}</h3><p>${tp.ru}</p><span class="tc-f"><span class="bar"><i style="width:${pc}%"></i></span><span class="tc-m"><span class="k">${tp.kind}</span><span class="pc">${p.done}/${p.n}</span></span></span></a>`; }
function testsOf(){ return S.tests.filter(x=>(x.c||"fr") === COURSE); }
const scoreTxt = h => (h.c === "es") ? `${Math.round((h.got / (h.total||1)) * 100)}%` : `${String(h.n20).replace(".",",")}/20`;
function saveNudge(){
  if (Cloud.kind !== "supabase" || ME || Cloud.state === "loading") return "";
  return `<a class="nudge" href="#account"><span class="nudge-i">${ICO.cloud}</span><span>${t("saveNudge")}</span><b>${t("saveNudgeBtn")}${ARR}</b></a>`;
}
let HOME_U = "all";
function renderHome(){
  const es = COURSE === "es", tt = totals(), tests = testsOf(), last = tests[tests.length-1];
  const nEx = TOP.reduce((s,x)=>s+x.ex.length,0);
  const unitW = es ? t("unitWes") : t("unitW"), units = es ? ["1","2","3","4"] : ["0","1","2","3"];
  const seq = !es && FRMODE === "cahier" ? CAH : !es && FRMODE === "tutor" ? TUT : ORDER;
  const cont = tt.done ? seq.find(x=>{ const p = topicPct(x); return p.done < p.n; }) : null;
  const uname = u => es ? t("esUnits")[u] : t("units")[u] + (u==="0" && FRMODE === "livre" ? t("unit0note") : "");
  const uHead = u => `<h3 class="unit-h"><span class="ng-n u-pill" data-hue="${u}">${unitW} ${u}</span><small>${uname(u)}</small></h3>`;
  if (!es || !["all","ref",...units].includes(HOME_U)) HOME_U = "all";
  const showU = k => !es || HOME_U === "all" || HOME_U === k;
  const tabs = es ? `<div class="seg ph-tabs" role="tablist">${["all",...units,"ref"].map(k=>`<button type="button" role="tab" data-hu="${k}" class="${HOME_U===k?"on":""}" aria-selected="${HOME_U===k}">${k === "all" ? t("homeAll") : k === "ref" ? t("navMore") : "Unidad " + k}</button>`).join("")}</div>` : frModeHTML("home");
  const cta = cont ? `<a class="btn sec" href="#${cont.id}"><span class="btn-l">${t("homeCont")}: ${cont.title}</span>${ARR}</a>` : `<a class="btn sec" href="#${seq[0] ? seq[0].id : "test"}">${t("homeStart")}${ARR}</a>`;
  main.innerHTML = `<div class="col">
  <header class="ph">
    <h1>${es ? `El español <em>paso a paso</em>` : `Le français <em>pas à pas</em>`}</h1>
    <p class="ph-sub">${es ? t("esHeroLead", nEx) : t("heroLead", nEx)}</p>
    <div class="stats"><span><b>${tt.done}</b>${t("solved").replace("{n}", tt.ex)}</span>${last ? `<span><b>${scoreTxt(last)}</b>${t("lastTest")}</span>` : ""}</div>
  </header>
  <div class="ph-bar">${tabs}<span class="ph-div" aria-hidden="true"></span><div class="ph-act">${cta}</div></div>
  ${!es && FRMODE === "tutor" && TUT.length ? `
  <div class="sec-h"><h2>Tutor</h2><p>${t("tutorSub")}</p></div>
  ${units.map(u=>{ const g = TUT.filter(x=>x.unit===u); return g.length ? `${uHead(u)}<div class="cards">${g.map(card).join("")}</div>` : ""; }).join("")}` : !es && FRMODE === "tutor" ? `<div class="empty-st"><div class="empty-i">${f7("pencil")}</div><h2>${t("tutorH")}</h2><p>${t("tutorEmpty")}</p></div>` : !es && FRMODE === "cahier" ? `
  <div class="sec-h"><h2>Cahier d’activités</h2><p>${t("cahierSub")}</p></div>
  ${units.map(u=>{ const g = CAH.filter(x=>x.unit===u); return g.length ? `${uHead(u)}<div class="cards">${g.map(card).join("")}</div>` : ""; }).join("")}` : `
  ${es && HOME_U === "ref" ? "" : `<div class="sec-h"><h2>${t("fromBook")}</h2></div>`}
  ${units.filter(showU).map(u=>`<section class="hu">${uHead(u)}<div class="cards">${BOOK.filter(x=>x.unit===u).map(card).join("")}</div></section>`).join("")}
  ${showU("ref") ? `${GRAM.length ? `<div class="ref-band"><div class="sec-h"><h2>${t("gram")}</h2><p>${t("gramSub")}</p></div><div class="cards">${GRAM.map(card).join("")}</div></div>` : ""}
  <div class="ref-band"><div class="sec-h"><h2>${t("ref")}</h2><p>${t("refSub")}</p></div><div class="cards">${REF.map(card).join("")}</div></div>` : ""}`}
  </div>`;
  $$("[data-hu]", main).forEach(b=>b.addEventListener("click", ()=>{ HOME_U = b.dataset.hu; renderHome(); }));
}
function renderTopic(tp){
  const seq = seqOf(tp), idx = seq.indexOf(tp), prev = seq[idx-1], next = seq[idx+1], es = COURSE === "es";
  const eb = tp.sec === "cahier" ? `Cahier · ${t("unitW")} ${tp.unit}` : tp.sec === "tutor" ? `Tutor · ${t("unitW")} ${tp.unit}` : tp.sec === "book" ? `${es ? t("unitWes") : t("unitW")} ${tp.unit} · ${tp.kind}` : tp.sec === "gram" ? `${t("gram")} · ${tp.kind}` : `${t("refEyebrow")} · ${tp.kind}`;
  main.innerHTML = `<div class="col"><article>
  <header class="t-head seyes">
    <p class="eyebrow">${eb}${tp.page ? ` · <span>${tp.sec === "book" ? tp.page.replace(/^(Unidad|Unité)\s*\d+,\s*/, "") : tp.page}</span>` : ""}</p>
    ${deckToggleHTML()}<h1>${tp.title}</h1><p class="t-ru">${tp.ru}</p>
    <div class="t-jump"><button type="button" class="btn sm sec" data-jump="practice">${t("toPractice", tp.ex.length)}${ARD}</button></div>
  </header>
  <section class="theory">${tp.theory}</section>
  <section class="practice" id="practice"><h2>${es ? t("practiceHes") : t("practiceH")}</h2><p>${t("practiceSub")}</p><div class="exs"></div></section>
  <nav class="pager">${prev ? `<a href="#${prev.id}"><small>${ARL}${t("back")}</small>${prev.title}</a>` : ""}${next ? `<a class="next" href="#${next.id}"><small>${t("next")}${ARR}</small>${next.title}</a>` : `<a class="next" href="#test"><small>${t("next")}${ARR}</small>${t("test")}</a>`}</nav>
  </article></div>`;
  const exs = $(".exs", main);
  tp.ex.forEach((ex,i)=>{ const api = makeBlock(tp, ex, i); exs.appendChild(api.el); try { INIT[ex.t](api, ex); } catch(err) { api.body.textContent = "Error: " + err.message; } });
  $('[data-jump="practice"]', main).addEventListener("click", ()=>$("#practice").scrollIntoView({behavior:"smooth"}));
  wireDeck(tp);
}
function renderCheat(){
  const es = COURSE === "es";
  main.innerHTML = `<div class="col" style="max-width:1100px"><header class="t-head seyes"><p class="eyebrow">${es ? t("esCheatEyebrow") : t("cheatEyebrow")}</p><h1>${t("cheat")}</h1><p class="t-ru">${t("cheatSub")}</p></header>${CHEATX}</div>`;
}

/* ---------- léxico (испанский) ---------- */
let LEX = {u:"all", hide:false, q:""};
try { const o = JSON.parse(ls.get("edito-lex") || "null"); if (o) LEX = Object.assign(LEX, o, {q:""}); } catch(e) {}
const fold = s => String(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
let LEX_APPLY = null;
const lexUnitLabel = u => u === "all" ? t("lexAll") : u === "+" ? f7("calendar", "f7-in") + t("lexCal") : u === "v" ? t("lexVerbs") : u === "fav" ? f7("heart_fill", "f7-in") + t("lexFav") : "Unidad " + u;
function lexFavRows(){
  const f = S.quiz.esfav || [];
  if (!f.length) return `<p class="lex-fav-empty">${t("lexFavEmpty")}</p>`;
  return `<div class="lex-rows">${f.map(x=>`<div class="lex-r lex-r-fav" data-k="${esc(fold(x.es + " " + (x.m || "")))}"><span class="fr lex-w">${esc(x.es)}</span><span class="lex-en" tabindex="0">${esc(x.m || "")}</span><button type="button" class="lex-unfav" data-unfav="${esc(x.es)}" aria-label="${esc(t("spUnfav"))}" title="${esc(t("spUnfav"))}">${ICO_HEART}</button></div>`).join("")}</div>`;
}
function lexPaintFav(){ const sec = $("#lexFavSec"); if (!sec) return; $(".lex-fav-body", sec).innerHTML = lexFavRows(); const b = $('.lex-units [data-u="fav"] small'); if (b) b.textContent = (S.quiz.esfav || []).length || ""; if (LEX_APPLY) LEX_APPLY(); }
function renderLexico(){
  const total = ES_LEX.reduce((n,c)=>n+c.w.length,0), nf = (S.quiz.esfav || []).length;
  main.innerHTML = `<div class="col" style="max-width:1000px">
  <header class="t-head seyes"><p class="eyebrow">Léxico · unidades 1–4</p><h1>${t("lexico")}</h1><p class="t-ru">${t("lexicoSub")}</p>
    <div class="lex-tools">
      <label class="lex-search">${f7("search")}<input type="search" id="lexQ" placeholder="${esc(t("lexSearch"))}" autocomplete="off" spellcheck="false"></label>
      <button type="button" class="chip-t${LEX.hide?" on":""}" id="lexHide">${LEX.hide ? t("lexShow") : t("lexHide")}</button>
    </div>
    <div class="seg lex-units">${["all","1","2","3","4","v","+","fav"].map(u=>`<button type="button" data-u="${u}" class="${LEX.u===u?"on":""}${u==="fav"?" lex-favtab":""}">${lexUnitLabel(u)}${u==="fav" ? ` <small>${nf || ""}</small>` : ""}</button>`).join("")}</div>
  </header>
  <p class="lex-count" id="lexCount"></p>
  <div class="lex${LEX.hide?" lex-hide":""}" id="lexBox">
  <section class="lex-cat lex-favsec" id="lexFavSec" data-u="fav"><h3 class="lex-h"><span class="lex-u">${f7("heart_fill")}</span>${t("lexFav")} <small>${t("lexFavSub")}</small></h3><div class="lex-fav-body">${lexFavRows()}</div></section>
  ${ES_LEX.map((c,ci)=>`<section class="lex-cat" data-u="${c.u}"><h3 class="lex-h"><span class="lex-u">${c.u === "+" ? f7("calendar") : c.u === "v" ? "V" : "U" + c.u}</span>${esc(c.es)} <small>${esc(LANG==="en" ? c.en : c.ru)}</small></h3><div class="lex-rows">${c.w.map(([w,en,ex])=>`<div class="lex-r" data-k="${esc(fold(w + " " + en))}"><span class="fr lex-w">${esc(w)}</span><span class="lex-en" tabindex="0">${esc(en)}</span><span class="fr lex-ex">${esc(ex)}</span></div>`).join("")}</div></section>`).join("")}</div>
  <p class="muted lex-none" id="lexNone" hidden>${t("lexNone")}</p></div>`;
  const box = $("#lexBox"), save = () => ls.set("edito-lex", JSON.stringify({u:LEX.u, hide:LEX.hide}));
  const apply = () => {
    const q = fold(LEX.q.trim()); let n = 0;
    $$(".lex-cat", box).forEach(sec=>{
      const fav = sec.dataset.u === "fav";
      const unitOk = fav ? LEX.u === "fav" : (LEX.u === "all" || sec.dataset.u === LEX.u); let m = 0;
      $$(".lex-r", sec).forEach(r=>{ const ok = unitOk && (!q || r.dataset.k.includes(q)); r.hidden = !ok; if (ok) m++; });
      sec.hidden = fav ? LEX.u !== "fav" : !m; n += m;
    });
    const tot = LEX.u === "fav" ? (S.quiz.esfav || []).length : total;
    $("#lexCount").textContent = t("lexN", n) + (n !== tot ? ` / ${tot}` : "");
    $("#lexNone").hidden = !!n || LEX.u === "fav";
  };
  LEX_APPLY = apply;
  $("#lexQ").addEventListener("input", e=>{ LEX.q = e.target.value; apply(); });
  $$(".lex-units [data-u]", main).forEach(b=>b.addEventListener("click", ()=>{ LEX.u = b.dataset.u; save(); $$(".lex-units [data-u]", main).forEach(x=>x.classList.toggle("on", x===b)); apply(); }));
  $("#lexHide").addEventListener("click", e=>{ LEX.hide = !LEX.hide; save(); box.classList.toggle("lex-hide", LEX.hide); e.currentTarget.classList.toggle("on", LEX.hide); e.currentTarget.textContent = LEX.hide ? t("lexShow") : t("lexHide"); $$(".lex-en.peek", box).forEach(x=>x.classList.remove("peek")); });
  box.addEventListener("click", e=>{
    const un = e.target.closest("[data-unfav]"); if (un) { toggleEsFav({es:un.dataset.unfav}); toast(t("favRemoved")); lexPaintFav(); return; }
    const en = e.target.closest(".lex-en"); if (en && LEX.hide) en.classList.toggle("peek");
  });
  apply();
}

function toast(msg){ const el = document.createElement("div"); el.className = "toast"; el.textContent = msg; document.body.appendChild(el); setTimeout(()=>el.classList.add("out"), 1800); setTimeout(()=>el.remove(), 2300); }

/* ---------- mock test ---------- */
let TEST = null, TMODE = "now", TLEN = 20;
function genTest(n){
  const groups = {}; POOLX.forEach((q,k)=>{ (groups[q.tp] = groups[q.tp] || []).push(k); });
  Object.values(groups).forEach(shuffle);
  const keys = shuffle(Object.keys(groups)); const pick = [];
  while (pick.length < Math.min(n, POOLX.length)) { let added = false; for (const k of keys) { if (groups[k].length && pick.length < n) { pick.push(groups[k].pop()); added = true; } } if (!added) break; }
  const ord = id => ORDER.findIndex(x=>x.id===id);
  pick.sort((a,b)=>ord(POOLX[a].tp)-ord(POOLX[b].tp));
  return pick.map(k=>{ const q = POOLX[k]; return q.o ? {...q, k, oo: shuffle(q.o.map((o,j)=>({o,j})))} : {...q, k}; });
}
function renderTest(){
  const hist = testsOf().slice(-5).reverse(), es = COURSE === "es";
  main.innerHTML = `<div class="col"><header class="t-head seyes"><p class="eyebrow">${es ? t("esTestEyebrow") : t("testEyebrow")}</p><h1>${t("test")}</h1><p class="t-ru">${es ? t("esTestSub", POOLX.length) : t("testSub", POOLX.length)}</p>
  <div class="tset">
    <div class="bank-opt"><span class="bank-l">${t("tCheckL")}</span><div class="seg big" role="group" aria-label="${esc(t("modeGroup"))}"><button type="button" data-m="now" class="${TMODE==="now"?"on":""}">${t("modeNow")}</button><button type="button" data-m="end" class="${TMODE==="end"?"on":""}">${t("modeEnd")}</button></div></div>
    <div class="bank-opt"><span class="bank-l">${t("tLenL")}</span><div class="seg big">${[20,30,45].map(n=>`<button type="button" data-n="${n}" class="${TLEN===n?"on":""}">${n}</button>`).join("")}</div></div>
    <button type="button" class="btn pri" id="tGo">${t("tGo")}${ARR}</button>
  </div></header>
  ${hist.length ? `<div class="sec-h"><h2>${t("myTries")}</h2></div><ul class="hist">${hist.map(h=>`<li>${esc(h.d)} — <b>${scoreTxt(h)}</b> (${h.got} / ${h.total})</li>`).join("")}</ul>` : ""}</div>`;
  $$("[data-m]", main).forEach(b=>b.addEventListener("click", ()=>{ TMODE = b.dataset.m; $$("[data-m]", main).forEach(x=>x.classList.toggle("on", x===b)); }));
  $$("[data-n]", main).forEach(b=>b.addEventListener("click", ()=>{ TLEN = +b.dataset.n; $$("[data-n]", main).forEach(x=>x.classList.toggle("on", x===b)); }));
  $("#tGo").addEventListener("click", ()=>startTest(TLEN));
}
function startTest(n){
  TEST = genTest(n);
  const now = TMODE === "now", res = TEST.map(()=>null);
  main.innerHTML = `<div class="col"><header class="t-head seyes"><p class="eyebrow">${COURSE === "es" ? t("testRunEyebrow", TEST.length, now).replace("Contrôle blanc", "Prueba") : t("testRunEyebrow", TEST.length, now)}</p><h1>${t("test")}</h1><p class="t-ru">${t("testRunSub", now)}</p></header>
  <section class="exb"><div class="exb-b">${accBar()}<div id="tq"></div></div><footer class="exb-f"><span class="exb-score" id="tstat"></span><div class="exb-btns"><button type="button" class="btn pri" id="submit">${now ? t("getGrade") : t("submit")}</button></div></footer></section></div>`;
  const box = $("#tq");
  function stat(){
    if (now) { const done = res.filter(r=>r!==null).length, got = res.filter(r=>r===true).length; $("#tstat").innerHTML = t("answeredOk", done, TEST.length, got); return; }
    const answered = TEST.filter((q,k)=> q.o ? q.sel !== undefined : norm($$(".test-q", box)[k].querySelector(".ans").value)).length; $("#tstat").textContent = t("answered", answered, TEST.length);
  }
  TEST.forEach((q,k)=>{
    const tp = byId[q.tp];
    const row = document.createElement("div"); row.className = "test-q";
    const body = q.o ? `<div class="opts">${q.oo.map(x=>`<button type="button" class="opt" data-j="${x.j}">${x.o}</button>`).join("")}</div>` : (q.q.includes("___") ? "" : `<input class="ans wide" ${inputAttrs} aria-label="${k+1}">`);
    const qq = q.o ? `<p class="q">${qhtml(q.q)}</p>` : `<p class="fillq">${q.q.includes("___") ? q.q.replace("___", `<input class="ans" ${inputAttrs} aria-label="${k+1}">`) : q.q}</p>`;
    row.innerHTML = `<span class="n">${k+1}</span><div class="tq">${qq}${body}<div class="fb" hidden></div><span class="tp">${tp ? tp.title : ""}</span></div>`;
    const fb = $(".fb", row);
    $$(".opt", row).forEach(b=>b.addEventListener("click", ()=>{
      if (row.dataset.locked) return;
      if (now) {
        row.dataset.locked = "1"; const j = +b.dataset.j, ok = j === q.a; q.sel = j; res[k] = ok;
        $$(".opt", row).forEach(x=>{ x.disabled = true; const jj = +x.dataset.j; if (jj === q.a) x.classList.add("is-ok"); else if (jj === j) x.classList.add("is-bad"); });
        fb.hidden = false; fb.innerHTML = (ok ? `<span class="ok-t">${OKW()}</span>` : `<span class="pen">${f7("arrow_right", "f7-in")}${q.o[q.a]}</span>`) + whyHTML(q.o[q.a], q.e, poolRule(q));
        gameAnswer("P|" + COURSE, q.k, ok ? "ok" : "bad");
      } else { $$(".opt", row).forEach(x=>x.classList.remove("sel")); b.classList.add("sel"); q.sel = +b.dataset.j; }
      stat();
    }));
    box.appendChild(row);
    if (!q.o) {
      const inp = $(".ans", row);
      if (now) wireInstant([{inp, a:q.a, show: st => { fb.hidden = false; fb.innerHTML = fbHtml(st, q.a) + whyHTML(q.a[0], q.e, poolRule(q)); }, hide: () => { fb.hidden = true; }}], (first, restoring) => { if (!restoring) { res[k] = first[0] === "ok"; stat(); } }, null, null, (j, st) => gameAnswer("P|" + COURSE, q.k, st));
      else inp.addEventListener("input", stat);
    }
  });
  stat();
  $("#submit").addEventListener("click", ()=>gradeTest(box, now, res));
  window.scrollTo(0,0);
}
function gradeTest(box, now, res){
  let got = 0; const per = {};
  $$(".test-q", box).forEach((row,k)=>{
    const q = TEST[k]; row.dataset.locked = "1"; let ok;
    const fb = $(".fb", row); fb.hidden = false;
    if (q.o) {
      ok = q.sel === q.a;
      $$(".opt", row).forEach(b=>{ b.disabled = true; const j = +b.dataset.j; if (j === q.a) b.classList.add("is-ok"); else if (j === q.sel) b.classList.add("is-bad"); b.classList.remove("sel"); });
      fb.innerHTML = (ok ? `<span class="ok-t">${OKW()}</span>` : `<span class="pen">${f7("arrow_right", "f7-in")}${q.o[q.a]}</span>${q.sel===undefined?` <span class="ex-e">${t("noAnswer")}</span>`:""}`) + whyHTML(q.o[q.a], q.e, poolRule(q));
      if (!now && q.sel !== undefined) gameAnswer("P|" + COURSE, q.k, ok ? "ok" : "bad");
    } else {
      const inp = $(".ans", row), st = judge(inp.value, q.a);
      ok = now ? res[k] === true : st === "ok"; inp.disabled = true;
      inp.classList.remove("r-ok","r-bad","r-acc"); inp.classList.add(st==="ok"?"r-ok":st==="acc"?"r-acc":"r-bad");
      fb.innerHTML = fbHtml(st === "empty" ? "bad" : st, q.a) + whyHTML(q.a[0], q.e, poolRule(q));
      if (!now && st !== "empty") gameAnswer("P|" + COURSE, q.k, st);
    }
    if (ok) got++;
    const p = per[q.tp] || (per[q.tp] = {g:0, n:0}); p.n++; if (ok) p.g++;
  });
  const n20 = Math.round(got / TEST.length * 20 * 2) / 2, es = COURSE === "es", pct = Math.round(got / TEST.length * 100);
  const V = es ? t("esVerdicts") : t("verdicts"), verdict = n20 >= 16 ? V[0] : n20 >= 12 ? V[1] : n20 >= 10 ? V[2] : V[3];
  const d = new Date();
  S.tests.push({d: d.toLocaleDateString(LANG==="en"?"en-GB":"ru-RU") + " " + d.toLocaleTimeString(LANG==="en"?"en-GB":"ru-RU",{hour:"2-digit",minute:"2-digit"}), at: d.getTime(), got, total: TEST.length, n20, c: COURSE});
  S.tests = S.tests.slice(-60); touch("progress");
  const rows = Object.entries(per).sort((a,b)=>a[1].g/a[1].n - b[1].g/b[1].n).map(([tp,p])=>{ const r = p.g/p.n, x = byId[tp]; return `<div class="brk-r"><a href="#${tp}">${x ? x.title : tp}</a><div class="bar"><i class="${r>=.8?"":r>=.5?"mid":"low"}" style="width:${Math.max(4, r*100)}%"></i></div><span>${p.g}/${p.n}</span></div>`; }).join("");
  const resEl = document.createElement("div");
  resEl.innerHTML = `<header class="grade seyes"><div class="note20">${es ? pct + "<small>%</small>" : String(n20).replace(".",",") + "<small>/20</small>"}</div><div><h2>${verdict[0]}</h2><p>${t("gotOf", got, TEST.length)} ${verdict[1]}</p><div class="btns" style="margin-top:12px"><button type="button" class="btn pri" id="again">${t("newVariant")}</button>${es ? `<a class="btn sec" href="#shpargalka">${t("cheat")}</a>` : `<a class="btn sec" href="#shpargalka">${t("cheat")}</a>`}</div></div></header>
  <div class="sec-h"><h2>${t("byTopic")}</h2><p>${t("byTopicSub")}</p></div><div class="brk">${rows}</div><div class="sec-h"><h2>${t("review")}</h2></div>`;
  const col = $(".col", main); col.insertBefore(resEl, col.children[1]);
  $(".t-head", main).remove();
  $("#submit").remove(); $("#tstat").textContent = t("total", got, TEST.length);
  $("#again").addEventListener("click", ()=>startTest(TEST.length));
  window.scrollTo({top:0, behavior:"smooth"});
}

/* =========================================================
   QUIZLET
   ========================================================= */
let QZ = {set:"all", mode:"review", perDay:15, dir:"fr", shuf:false, star:false};
try { const q = JSON.parse(ls.get("edito-qz") || "null"); if (q) QZ = Object.assign(QZ, q); } catch(e) {}
const saveQZ = () => ls.set("edito-qz", JSON.stringify(QZ));
let qzKeyHandler = null, qzTimer = null;
function qWords(setId){
  if (setId === "fav") return (S.quiz.fav || []).map(f=>({fr:f.fr, m: (LANG==="en" ? (f.en || f.ru) : (f.ru || f.en)) || qMeaning(f.fr) || "…", set:"fav"}));
  const sets = setId === "all" ? QSETS : QSETS.filter(s=>s.id===setId);
  const seen = new Set(), out = [];
  sets.forEach(s=>s.w.forEach(w=>{ if (seen.has(w[0])) return; seen.add(w[0]); out.push({fr:w[0], m: LANG==="en" ? w[2] : w[1], set:s.id}); }));
  return out;
}
const qLv = fr => (S.quiz.c[qKey(fr)] || {}).lv || 0;
const qStar = fr => !!(S.quiz.c[qKey(fr)] || {}).s;
function qSet(fr, patch){ const k = qKey(fr); S.quiz.c[k] = Object.assign({lv:0, s:0}, S.quiz.c[k], patch); touch("quiz"); }
function qMeta(setId){ const st = qSetStats(setId), d = srsDueCount(setId); return `${st.learned}/${st.n}` + (d ? ` · ${t("srsDue", d)}` : ""); }
function qSetStats(setId){ const ws = qWords(setId); const learned = ws.filter(w=>qLv(w.fr)>=3).length; return {n:ws.length, learned, starred: ws.filter(w=>qStar(w.fr)).length, pct: ws.length ? learned/ws.length : 0}; }

/* ---------- интервальное повторение (SM-2, как в Anki) ----------
   r = {st:0 новое|1 учу|2 повтор|3 переучиваю, step, due(ms), ivl(дни), ef, reps, lap} хранится в S.quiz.c[k].r */
const MIN = 60000, DAY = 864e5;
const SRS = {learn:[1, 10], relearn:[10], grad:1, easy:4};
const dayStart = (ms = Date.now()) => { const d = new Date(ms - 4*3600e3); d.setHours(4, 0, 0, 0); return d.getTime(); };
const dayKey = () => String(dayStart());
const qR = fr => (S.quiz.c[qKey(fr)] || {}).r || null;
function srsNext(r0, g, now = Date.now()){
  const r = r0 ? Object.assign({}, r0) : {st:0, step:0, ivl:0, ef:2.5, reps:0, lap:0, due:now};
  const grad = d => { r.st = 2; r.step = 0; r.ivl = d; r.due = dayStart(now) + d*DAY; };
  const fuzz = d => d < 3 ? d : Math.round(d * (0.95 + Math.random()*0.1));
  if (r.st === 2) {
    const late = Math.max(0, Math.round((dayStart(now) - dayStart(r.due)) / DAY));
    if (g === 1) { r.lap++; r.ef = Math.max(1.3, r.ef - .2); r.ivl = Math.max(1, Math.round(r.ivl * .5)); r.st = 3; r.step = 0; r.due = now + SRS.relearn[0]*MIN; }
    else {
      const hard = Math.max(r.ivl + 1, Math.round(r.ivl * 1.2));
      const good = Math.max(hard + 1, Math.round((r.ivl + late/2) * r.ef));
      const easy = Math.max(good + 1, Math.round((r.ivl + late) * r.ef * 1.3));
      if (g === 2) r.ef = Math.max(1.3, r.ef - .15); else if (g === 4) r.ef += .15;
      grad(fuzz(g === 2 ? hard : g === 3 ? good : easy));
    }
  } else {
    const steps = r.st === 3 ? SRS.relearn : SRS.learn;
    if (r.st === 0) r.st = 1;
    if (g === 1) { r.step = 0; r.due = now + steps[0]*MIN; }
    else if (g === 2) { const m = steps.length > 1 && r.step === 0 ? (steps[0] + steps[1]) / 2 : steps[r.step] * (steps.length === 1 ? 1.5 : 1); r.due = now + Math.round(m)*MIN; }
    else if (g === 3) { if (r.step + 1 < steps.length) { r.step++; r.due = now + steps[r.step]*MIN; } else grad(r.st === 3 ? r.ivl : SRS.grad); }
    else grad(r.st === 3 ? r.ivl + 1 : SRS.easy);
  }
  r.reps++; r.last = now;
  return r;
}
function srsIvlTxt(r, now){
  const u = t("srsU"), dec = x => (Math.round(x*10)/10).toString().replace(".", LANG === "ru" ? "," : ".");
  const sp = LANG === "ru" ? " " : "";
  if (r.st === 2) { const d = r.ivl; return d < 30 ? `${d}${sp}${u.d}` : d < 365 ? `${dec(d/30)}${sp}${u.mo}` : `${dec(d/365)}${sp}${u.y}`; }
  const m = Math.round((r.due - now) / MIN);
  return m < 1 ? u.lt : m < 60 ? `${m}${sp}${u.m}` : `${dec(m/60)}${sp}${u.h}`;
}
function srsWhenTxt(due, now = Date.now()){
  if (due <= now) return t("srsNow");
  const dd = Math.round((dayStart(due) - dayStart(now)) / DAY);
  if (dd <= 0) { const m = Math.round((due - now) / MIN), u = t("srsU"), sp = LANG === "ru" ? " " : ""; return t("srsIn", m < 1 ? u.lt : m < 60 ? `${m}${sp}${u.m}` : `${Math.round(m/60)}${sp}${u.h}`); }
  return dd === 1 ? t("srsTmrw") : t("srsIn", t("srsDays", dd));
}
const srsDueCount = (setId, now = Date.now()) => qWords(setId).filter(w=>{ const r = qR(w.fr); return r && r.due <= now; }).length;
function sdToday(){ const k = dayKey(), sd = S.quiz.sd || {}; return sd.d === k ? Object.assign({n:0, a:0, x:0}, sd) : {d:k, n:0, a:0, x:0}; }
function updSrsBadge(){
  const b = document.getElementById("srsBadge"); if (!b || COURSE !== "fr") return;
  const n = srsDueCount("all"); b.hidden = !n; b.textContent = n > 99 ? "99+" : String(n); b.title = `${n} ${t("srsBadge")}`;
}

function renderQuizlet(){
  if (!QSETS.some(s=>s.id===QZ.set) && QZ.set !== "all" && QZ.set !== "fav") QZ.set = "all";
  const all = qSetStats("all");
  main.innerHTML = `<div class="col" style="max-width:980px">
  <header class="t-head seyes"><p class="eyebrow">Quizlet · Unités 0–3</p><h1>Quizlet</h1><p class="t-ru">${t("qzSub")}</p>
    <div class="stats"><span><b>${all.n}</b>${t("qzWords")}</span><span><b>${all.learned}</b>${t("qzLearned")}</span><span><b>${all.starred}</b>${t("qzStarred")}</span></div></header>
  <div class="qz-sets">${[{id:"all", t:t("qzAll"), sub:""}, {id:"fav", t:t("qzFav"), sub:t("qzFavSub"), fav:true}].concat(QSETS.map(s=>({id:s.id, t:s.t, sub: LANG==="en" ? s.en : s.ru}))).map(s=>{ const st = qSetStats(s.id); return `<button type="button" class="qz-set${QZ.set===s.id?" on":""}${s.fav?" is-fav":""}" data-set="${s.id}"><b>${s.fav ? ICO_HEART : ""}${s.t}</b>${s.sub?`<small>${s.sub}</small>`:""}<span class="qz-meta">${qMeta(s.id)}</span><span class="bar"><i style="width:${(st.pct*100).toFixed(0)}%"></i></span></button>`; }).join("")}</div>
  <div class="qz-modes" role="tablist">${["review","cards","learn","write","match"].map(m=>`<button type="button" role="tab" class="${QZ.mode===m?"on":""}" data-mode="${m}"><span class="m-l">${t("qzModes")[m]}</span><span class="m-s">${t("qzModesS")[m]}</span></button>`).join("")}</div>
  <section class="qz-stage exb"></section>
  <div class="sec-h"><h2>${t("qzList")}</h2><p class="qz-count"></p></div>
  <div class="qz-list"></div>
  </div>`;
  $$("[data-set]", main).forEach(b=>b.addEventListener("click", ()=>{ QZ.set = b.dataset.set; saveQZ(); renderQuizlet(); }));
  $$("[data-mode]", main).forEach(b=>b.addEventListener("click", ()=>{ QZ.mode = b.dataset.mode; saveQZ(); $$("[data-mode]", main).forEach(x=>x.classList.toggle("on", x===b)); qzStage(); }));
  qzStage(); qzList();
}
function qzList(){
  const box = $(".qz-list", main); if (!box) return;
  const ws = qWords(QZ.set);
  $(".qz-count", main).textContent = `${ws.length} ${t("qzWords")}`;
  box.innerHTML = ws.map(w=>{ const lv = qLv(w.fr); return `<div class="qz-row"><button type="button" class="star${qStar(w.fr)?" on":""}" data-star="${esc(w.fr)}" aria-label="${esc(t("qzStar"))}">${ICO.star}</button><span class="fr qz-fr">${esc(w.fr)}</span><span class="qz-m">${esc(w.m)}</span><span class="lv lv${Math.min(lv,3)}"${qR(w.fr) ? ` title="${esc(t("srsWhen", srsWhenTxt(qR(w.fr).due)))}"` : ""}>${t("qzLvShort")[Math.min(lv,3)]}</span><button type="button" class="qz-heart${isFav(w.fr)?" on":""}" data-fav="${esc(w.fr)}" aria-label="${esc(isFav(w.fr) ? t("spUnfav") : t("spFav"))}" title="${esc(isFav(w.fr) ? t("spUnfav") : t("spFav"))}">${ICO_HEART}</button></div>`; }).join("") || (QZ.set === "fav" ? `<p class="muted qz-favempty">${t("qzFavEmpty")}</p>` : "");
  $$("[data-fav]", box).forEach(b=>b.addEventListener("click", ()=>{ const fr = b.dataset.fav; const w = ws.find(x=>x.fr === fr) || {fr}; let e = {fr}; if (!isFav(fr)) { if (!DICT) buildDict(); const d = DICT.get(dk(fr)); e = d ? {fr, ru:d.ru, en:d.en} : {fr, ru: LANG==="en" ? "" : w.m, en: LANG==="en" ? w.m : ""}; } toggleFav(e); if (QZ.set === "fav") { qzRefreshList(); qzStage(); } else { b.classList.toggle("on", isFav(fr)); qzRefreshFav(); } }));
  $$("[data-star]", box).forEach(b=>b.addEventListener("click", ()=>{ const fr = b.dataset.star; qSet(fr, {s: qStar(fr) ? 0 : 1}); b.classList.toggle("on", qStar(fr)); }));
}
function qzStage(){
  const stage = $(".qz-stage", main); if (!stage) return;
  if (qzKeyHandler) { document.removeEventListener("keydown", qzKeyHandler); qzKeyHandler = null; }
  clearInterval(qzTimer);
  stage.dataset.tok = String(Math.random());
  if (!qWords(QZ.set).length) { stage.innerHTML = `<div class="qz-pad center qz-favpad"><span class="qz-favico">${ICO_HEART}</span><h3 class="qz-done">${t("qzFavEmptyH")}</h3><p class="muted">${t("qzFavEmpty")}</p></div>`; return; }
  (({review:qzReview, cards:qzCards, learn:qzLearn, write:qzWrite, match:qzMatch})[QZ.mode] || qzReview)(stage);
}
function qzRefreshFav(){ const b = $('.qz-set[data-set="fav"]', main); if (!b) return; const st = qSetStats("fav"); $(".qz-meta", b).textContent = qMeta(b.dataset.set); $(".bar i", b).style.width = (st.pct*100).toFixed(0) + "%"; }
const qzRefreshList = () => { qzList(); $$(".qz-set", main).forEach(b=>{ const st = qSetStats(b.dataset.set); $(".qz-meta", b).textContent = qMeta(b.dataset.set); $(".bar i", b).style.width = (st.pct*100).toFixed(0) + "%"; }); };

/* mode 0: spaced repetition */
function qzReview(stage){
  const tok = stage.dataset.tok, alive = () => stage.dataset.tok === tok && document.body.contains(stage);
  const rk = new Map(), hist = [];
  let cur = null, flipped = false, last = null, served = 0;
  const rnd = fr => { if (!rk.has(fr)) rk.set(fr, Math.random()); return rk.get(fr); };
  const queue = (now = Date.now()) => {
    const lrn = [], rev = [], fresh = [], all = qWords(QZ.set);
    all.forEach(w=>{ const r = qR(w.fr); if (!r) fresh.push(w); else if (r.st === 2) { if (r.due <= now) rev.push(w); } else lrn.push(w); });
    const sd = sdToday(), left = Math.max(0, (QZ.perDay || 15) + sd.x - sd.n);
    lrn.sort((a,b)=>qR(a.fr).due - qR(b.fr).due);
    rev.sort((a,b)=>dayStart(qR(a.fr).due) - dayStart(qR(b.fr).due) || rnd(a.fr) - rnd(b.fr));
    return {all, lrnNow: lrn.filter(w=>qR(w.fr).due <= now), lrnLater: lrn.filter(w=>qR(w.fr).due > now), lrn, rev, fresh: fresh.slice(0, left), freshAll: fresh, sd};
  };
  const pick = () => {
    const q = queue(), useNew = q.fresh.length && (!q.rev.length || served % 4 === 3);
    const cand = [...q.lrnNow, ...(useNew ? [q.fresh[0], ...q.rev] : [...q.rev, ...q.fresh.slice(0, 1)]), ...q.lrnLater];
    return cand.find(w=>w.fr !== last) || cand[0] || null;
  };
  const counts = q => `<span class="srs-cnt"><span><b class="c-new">${q.fresh.length}</b> ${t("srsNew")}</span><span><b class="c-lrn">${q.lrn.length}</b> ${t("srsLrn")}</span><span><b class="c-rev">${q.rev.length}</b> ${t("srsRev")}</span></span>`;
  const dirSeg = () => `<span class="seg"><button type="button" data-dir="fr" class="${QZ.dir==="fr"?"on":""}">${t("dirFr")}</button><button type="button" data-dir="m" class="${QZ.dir==="m"?"on":""}">${t("dirRu")}</button></span>`;
  const undoBtn = () => hist.length ? `<button type="button" class="chip-t" data-undo>${f7("arrow_uturn_left", "f7-in")}${t("srsUndo")}</button>` : "";
  const foot = () => `<div class="srs-foot"><label class="srs-per"><span>${t("srsPerDay")}</span><span class="seg">${[5,10,15,20,30].map(n=>`<button type="button" data-per="${n}" class="${(QZ.perDay||15)===n?"on":""}">${n}</button>`).join("")}</span></label>
    <details class="srs-how"><summary>${t("srsHowS")}</summary><p>${t("srsHow")}</p></details></div>`;
  const bind = () => {
    $$("[data-dir]", stage).forEach(b=>b.addEventListener("click", ()=>{ QZ.dir = b.dataset.dir; saveQZ(); flipped = false; draw(true); }));
    $$("[data-per]", stage).forEach(b=>b.addEventListener("click", ()=>{ QZ.perDay = +b.dataset.per; saveQZ(); if (!cur) next(); else draw(false); qzRefreshList(); }));
    const u = $("[data-undo]", stage); if (u) u.addEventListener("click", undo);
  };
  const forecast = q => {
    const now = Date.now(), d0 = dayStart(now), c = [0,0,0,0,0,0,0];
    q.all.forEach(w=>{ const r = qR(w.fr); if (!r) return; const i = Math.max(0, Math.round((dayStart(r.due) - d0) / DAY)); if (i < 7) c[i]++; });
    const mx = Math.max(1, ...c), fmt = new Intl.DateTimeFormat(LANG === "en" ? "en-GB" : "ru-RU", {weekday:"short"});
    return `<p class="srs-fch">${t("srsFc")}</p><div class="srs-fc">${c.map((n,i)=>`<div><b>${n || ""}</b><i class="${n?"":"z"}" style="height:${n ? Math.max(6, Math.round(n/mx*64)) : 3}px"></i><span>${i < 2 ? t("srsDay")[i] : fmt.format(new Date(d0 + i*DAY + 12*3600e3))}</span></div>`).join("")}</div>`;
  };
  const doneView = q => {
    const nexts = q.all.map(w=>qR(w.fr)).filter(Boolean).map(r=>r.due).sort((a,b)=>a-b);
    stage.innerHTML = `<div class="qz-pad"><div class="qz-toolbar">${counts(q)}${undoBtn()}</div><div class="center srs-done">
      <span class="srs-ok">${f7("checkmark_alt")}</span>
      <h3 class="qz-done">${t("srsDoneH")}</h3>
      ${q.sd.a ? `<p class="muted">${t("srsToday", q.sd.a, q.sd.n)}</p>` : ""}
      ${nexts.length ? `<p class="muted">${t("srsNext", srsWhenTxt(nexts[0]))}</p>${forecast(q)}` : ""}
      ${q.freshAll.length ? `<button type="button" class="btn ${nexts.length ? "sec" : "pri"}" id="srsMore">${t("srsMore", Math.min(10, q.freshAll.length))}</button>` : ""}
    </div>${foot()}</div>`;
    bind();
    const m = $("#srsMore", stage); if (m) m.addEventListener("click", ()=>{ const sd = sdToday(); sd.x += Math.max(0, sd.n - (QZ.perDay||15) - sd.x) + 10; S.quiz.sd = sd; touch("quiz"); next(); });
  };
  const draw = speakIt => {
    if (!alive()) return;
    const q = queue();
    if (!cur) return doneView(q);
    const w = cur, r = qR(w.fr), now = Date.now();
    const front = QZ.dir === "fr" ? w.fr : w.m, back = QZ.dir === "fr" ? w.m : w.fr;
    const sideF = QZ.dir === "fr" ? "FR" : (LANG === "en" ? "EN" : "RU"), sideB = QZ.dir === "fr" ? (LANG === "en" ? "EN" : "RU") : "FR";
    const tag = r ? r.st : 0;
    stage.innerHTML = `<div class="qz-pad">
      <div class="qz-toolbar">${counts(q)}${dirSeg()}${undoBtn()}</div>
      <div class="qz-card srs-card${flipped ? " flipped" : ""}" role="button" tabindex="0" aria-label="${esc(t("srsShow"))}">
        <div class="qz-face"><span class="qz-side">${sideF}</span><span class="qz-text${QZ.dir === "fr" ? "" : " is-m"}">${esc(front)}</span>
        ${flipped ? `<span class="srs-sep"></span><span class="qz-side">${sideB}</span><span class="srs-back${QZ.dir === "fr" ? "" : " is-fr"}">${esc(back)}</span>` : ""}</div>
        <button type="button" class="star qz-cstar${qStar(w.fr)?" on":""}" aria-label="${esc(t("qzStar"))}">${ICO.star}</button>
        <button type="button" class="qz-say" aria-label="${esc(t("qzSay"))}">${ICON_PLAY}</button>
        <span class="lv srs-tag t${tag} qz-clv">${t("srsTag")[tag]}</span>
      </div>
      ${flipped ? `<div class="srs-grade">${[1,2,3,4].map(g=>`<button type="button" class="srs-g" data-g="${g}">${t("srsG")[g-1]}<small>${srsIvlTxt(srsNext(r, g, now), now)}</small></button>`).join("")}</div>`
                : `<div class="srs-show"><button type="button" class="btn pri" id="srsShow">${t("srsShow")}</button></div>`}
      <p class="qz-keys">${t("srsKeys")}</p>
      ${foot()}</div>`;
    bind();
    $(".qz-card", stage).addEventListener("click", e=>{ if (e.target.closest("button")) return; if (!flipped) show(); });
    $(".qz-cstar", stage).addEventListener("click", ()=>{ qSet(w.fr, {s: qStar(w.fr) ? 0 : 1}); draw(false); qzRefreshList(); });
    $(".qz-say", stage).addEventListener("click", ()=>speak(w.fr));
    const sb = $("#srsShow", stage); if (sb) sb.addEventListener("click", show);
    $$(".srs-g", stage).forEach(b=>b.addEventListener("click", ()=>grade(+b.dataset.g)));
    if (speakIt && QZ.dir === "fr" && !flipped) speak(w.fr);
  };
  const show = () => { if (!cur || flipped) return; flipped = true; draw(false); if (QZ.dir !== "fr") speak(cur.fr); const g = $('.srs-g[data-g="3"]', stage); if (g) g.focus({preventScroll:true}); };
  const next = () => { cur = pick(); flipped = false; draw(true); };
  const grade = g => {
    if (!cur || !flipped) return;
    const w = cur, k = qKey(w.fr), r0 = qR(w.fr);
    hist.push({w, k, prevC: S.quiz.c[k] ? JSON.parse(JSON.stringify(S.quiz.c[k])) : null, prevSd: JSON.parse(JSON.stringify(S.quiz.sd || {}))});
    if (hist.length > 30) hist.shift();
    const r = srsNext(r0, g), sd = sdToday(); sd.a++; if (!r0) sd.n++; S.quiz.sd = sd;
    const lv = qLv(w.fr);
    qSet(w.fr, {r, lv: g === 1 ? 1 : Math.max(lv, r.st === 2 ? (r.ivl >= 4 ? 3 : 2) : 1)});
    gameAnswer("q|" + k, null, g >= 2 ? "ok" : "bad", {daily:true, xp:2});
    served++; last = w.fr; qzRefreshList(); updSrsBadge(); next();
  };
  const undo = () => {
    const h = hist.pop(); if (!h) return;
    if (h.prevC) S.quiz.c[h.k] = h.prevC; else delete S.quiz.c[h.k];
    S.quiz.sd = h.prevSd; touch("quiz");
    served = Math.max(0, served - 1); cur = h.w; last = null; flipped = false; draw(false); qzRefreshList(); updSrsBadge();
  };
  qzKeyHandler = e => {
    if (location.hash.slice(1) !== "quizlet" || QZ.mode !== "review" || !alive() || e.metaKey || e.ctrlKey || e.altKey || /INPUT|TEXTAREA|SELECT/.test((e.target||{}).tagName||"")) return;
    if (e.key === " " || e.key === "Enter") { if ((e.target||{}).tagName === "BUTTON" && e.key === "Enter") return; e.preventDefault(); if (!flipped) show(); else grade(3); }
    else if (flipped && /^[1-4]$/.test(e.key)) { e.preventDefault(); grade(+e.key); }
  };
  document.addEventListener("keydown", qzKeyHandler);
  next();
}

/* mode 1: flashcards */
function qzCards(stage){
  let deck = qWords(QZ.set); if (QZ.star) deck = deck.filter(w=>qStar(w.fr)); if (QZ.shuf) deck = shuffle(deck.slice());
  let i = 0, flipped = false;
  const draw = () => {
    if (!deck.length) { stage.innerHTML = `<div class="qz-pad"><div class="qz-toolbar">${tools()}</div><p class="muted qz-empty">${t("qzEmpty")}</p></div>`; bindTools(); return; }
    const w = deck[i], front = QZ.dir === "fr" ? w.fr : w.m, back = QZ.dir === "fr" ? w.m : w.fr;
    stage.innerHTML = `<div class="qz-pad">
      <div class="qz-toolbar">${tools()}<span class="qz-ctr">${i+1} / ${deck.length}</span></div>
      <div class="qz-card${flipped?" flipped":""}" role="button" tabindex="0" aria-label="${esc(t("flipA"))}">
        <div class="qz-face"><span class="qz-side">${flipped ? (QZ.dir==="fr" ? (LANG==="en"?"EN":"RU") : "FR") : (QZ.dir==="fr" ? "FR" : (LANG==="en"?"EN":"RU"))}</span><span class="qz-text">${esc(flipped ? back : front)}</span>${flipped?"":`<span class="hint">${esc(t("flip"))}</span>`}</div>
        <button type="button" class="star qz-cstar${qStar(w.fr)?" on":""}" aria-label="${esc(t("qzStar"))}">${ICO.star}</button>
        <button type="button" class="qz-say" aria-label="${esc(t("qzSay"))}">${ICON_PLAY}</button>
        <span class="lv lv${Math.min(qLv(w.fr),3)} qz-clv">${t("qzLvShort")[Math.min(qLv(w.fr),3)]}</span>
      </div>
      <div class="qz-nav"><button type="button" class="btn sec" data-q="prev">${ARL}${t("qzPrev")}</button><button type="button" class="btn sec still" data-q="still">${t("qzStill")}</button><button type="button" class="btn pri" data-q="know">${t("qzKnow")}</button><button type="button" class="btn sec" data-q="next">${t("qzNext")}${ARR}</button></div>
      <p class="qz-keys">${t("qzKeys")}</p></div>`;
    bindTools();
    const cardEl = $(".qz-card", stage);
    cardEl.addEventListener("click", e=>{ if (e.target.closest("button")) return; flip(); });
    $(".qz-cstar", stage).addEventListener("click", ()=>{ qSet(w.fr, {s: qStar(w.fr) ? 0 : 1}); draw(); qzRefreshList(); });
    $(".qz-say", stage).addEventListener("click", ()=>speak(w.fr));
    $('[data-q="prev"]', stage).addEventListener("click", ()=>go(-1));
    $('[data-q="next"]', stage).addEventListener("click", ()=>go(1));
    $('[data-q="still"]', stage).addEventListener("click", ()=>{ qSet(w.fr, {lv:1}); qzRefreshList(); go(1); });
    $('[data-q="know"]', stage).addEventListener("click", ()=>{ qSet(w.fr, {lv:3}); qzRefreshList(); go(1); });
  };
  const flip = () => { flipped = !flipped; draw(); if (flipped || QZ.dir === "fr") speak(deck[i].fr); };
  const go = d => { if (!deck.length) return; i = (i + d + deck.length) % deck.length; flipped = false; draw(); };
  const tools = () => `<button type="button" class="chip-t${QZ.shuf?" on":""}" data-t="shuf">${t("qzShuffle")}</button><button type="button" class="chip-t${QZ.star?" on":""}" data-t="star">${f7("star_fill", "f7-in")}${t("qzStarOnly")}</button><span class="seg"><button type="button" data-dir="fr" class="${QZ.dir==="fr"?"on":""}">${t("dirFr")}</button><button type="button" data-dir="m" class="${QZ.dir==="m"?"on":""}">${t("dirRu")}</button></span>`;
  const bindTools = () => {
    $$("[data-t]", stage).forEach(b=>b.addEventListener("click", ()=>{ QZ[b.dataset.t] = !QZ[b.dataset.t]; saveQZ(); qzCards(stage); }));
    $$("[data-dir]", stage).forEach(b=>b.addEventListener("click", ()=>{ QZ.dir = b.dataset.dir; saveQZ(); flipped = false; draw(); }));
  };
  qzKeyHandler = e => {
    if (location.hash.slice(1) !== "quizlet" || QZ.mode !== "cards" || /INPUT|TEXTAREA/.test((e.target||{}).tagName||"")) return;
    if (e.key === " ") { e.preventDefault(); flip(); } else if (e.key === "ArrowRight") go(1); else if (e.key === "ArrowLeft") go(-1);
  };
  document.addEventListener("keydown", qzKeyHandler);
  draw();
}

/* mode 2: learn (adaptive: choice → typing) */
function qzLearn(stage){
  const tok = stage.dataset.tok, alive = () => stage.dataset.tok === tok && document.body.contains(stage);
  const all = qWords(QZ.set);
  let last = null;
  const counts = () => { const c = [0,0,0,0]; all.forEach(w=>c[Math.min(qLv(w.fr),3)]++); return c; };
  const head = () => { const c = counts(); return `<div class="qz-prog"><div class="qz-progbar">${c.map((n,k)=>`<i class="lv${k}" style="flex:${n}"></i>`).join("")}</div><div class="qz-legend">${c.map((n,k)=>`<span><i class="dot lv${k}"></i>${t("qzLv")[k]}: <b>${n}</b></span>`).join("")}</div></div>`; };
  const nextQ = () => {
    if (!alive()) return;
    const pool = all.filter(w=>qLv(w.fr) < 3);
    if (!pool.length) {
      stage.innerHTML = `<div class="qz-pad center">${head()}<h3 class="qz-done">${t("qzLearnDone")}</h3><p class="muted">${t("qzLearnDoneSub")}</p><button type="button" class="btn sec" id="qzReset">${t("qzResetSet")}</button></div>`;
      $("#qzReset", stage).addEventListener("click", ()=>{ all.forEach(w=>qSet(w.fr, {lv:0})); qzRefreshList(); nextQ(); });
      return;
    }
    pool.sort((a,b)=>qLv(a.fr)-qLv(b.fr) || Math.random()-.5);
    let cand = pool.slice(0, Math.min(7, pool.length)); let w = cand[Math.floor(Math.random()*cand.length)];
    if (last && w.fr === last && pool.length > 1) w = cand.find(x=>x.fr !== last) || pool.find(x=>x.fr !== last) || w;
    last = w.fr;
    const lv = qLv(w.fr);
    if (lv < 2) {
      const others = shuffle((all.length >= 4 ? all : all.concat(qWords("all"))).filter(x=>x.fr !== w.fr && x.m !== w.m)).slice(0, 3);
      const opts = shuffle([w, ...others]);
      stage.innerHTML = `<div class="qz-pad">${head()}<div class="qz-q"><span class="qz-kind">${t("qzChoose")}</span><span class="qz-term fr">${esc(w.fr)}</span></div><div class="qz-opts">${opts.map(o=>`<button type="button" class="qz-opt" data-fr="${esc(o.fr)}">${esc(o.m)}</button>`).join("")}</div><div class="qz-fb"></div></div>`;
      speak(w.fr);
      $$(".qz-opt", stage).forEach(b=>b.addEventListener("click", ()=>{
        if (stage.dataset.lock === "1") return; stage.dataset.lock = "1";
        const ok = b.dataset.fr === w.fr;
        $$(".qz-opt", stage).forEach(x=>{ x.disabled = true; if (x.dataset.fr === w.fr) x.classList.add("is-ok"); });
        if (!ok) b.classList.add("is-bad");
        result(w, ok, w.m);
      }));
    } else {
      stage.innerHTML = `<div class="qz-pad">${head()}<div class="qz-q"><span class="qz-kind">${t("qzType")}</span><span class="qz-term">${esc(w.m)}</span></div>${accBar()}<div class="qz-write"><input class="ans wide" id="qzIn" ${inputAttrs} aria-label="${esc(t("qzType"))}"><button type="button" class="btn pri" id="qzChk">${t("qzCheck")}</button><button type="button" class="btn sec" id="qzIdk">${t("qzDontKnow")}</button></div><div class="qz-fb"></div></div>`;
      const inp = $("#qzIn", stage); inp.focus();
      const check = giveUp => {
        if (stage.dataset.lock === "1") return;
        const st = giveUp ? "bad" : judge(inp.value, [w.fr]); if (st === "empty") return;
        stage.dataset.lock = "1"; inp.disabled = true;
        inp.classList.add(st === "ok" ? "r-ok" : st === "acc" ? "r-acc" : "r-bad");
        result(w, st !== "bad", w.fr, st === "acc");
      };
      inp.addEventListener("keydown", e=>{ if (e.key === "Enter") { e.preventDefault(); check(false); } });
      $("#qzChk", stage).addEventListener("click", ()=>check(false));
      $("#qzIdk", stage).addEventListener("click", ()=>check(true));
    }
    stage.dataset.lock = "";
  };
  const result = (w, ok, right, accWarn) => {
    const lv = qLv(w.fr);
    qSet(w.fr, {lv: ok ? Math.min(3, lv+1) : Math.max(0, lv-1)}); qzRefreshList();
    gameAnswer("q|" + qKey(w.fr), null, ok ? "ok" : "bad", {daily:true, xp:2});
    const fb = $(".qz-fb", stage);
    if (ok) { fb.innerHTML = `<span class="ok-t">${t("qzCorrect")}</span>${accWarn ? ` <span class="acc-t">${t("almost")}</span> <b>${esc(w.fr)}</b>` : ""}`; speak(w.fr); setTimeout(nextQ, accWarn ? 1600 : 850); }
    else { fb.innerHTML = `<span class="pen">${t("qzWrongIs")} ${esc(right)}</span> <button type="button" class="btn sm pri" id="qzGo">${t("qzContinue")}</button>`; speak(w.fr); const go = $("#qzGo", stage); go.focus(); go.addEventListener("click", nextQ); }
  };
  nextQ();
}

/* mode 3: write */
function qzWrite(stage){
  const tok = stage.dataset.tok, alive = () => stage.dataset.tok === tok && document.body.contains(stage);
  let round, i, got, wrong;
  const start = list => { round = shuffle(list.slice()).slice(0, 20); i = 0; got = 0; wrong = []; step(); };
  const step = () => {
    if (!alive()) return;
    if (i >= round.length) {
      stage.innerHTML = `<div class="qz-pad center"><h3 class="qz-done">${t("qzWriteDone", got, round.length)}</h3><p class="pen big">${praise(round.length ? got/round.length : 1)}</p><div class="btns center">${wrong.length ? `<button type="button" class="btn pri" id="qzRetry">${t("qzRetryWrong")} (${wrong.length})</button>` : ""}<button type="button" class="btn sec" id="qzNew">${t("qzRoundAgain")}</button></div></div>`;
      const r = $("#qzRetry", stage); if (r) r.addEventListener("click", ()=>start(wrong));
      $("#qzNew", stage).addEventListener("click", ()=>start(qWords(QZ.set)));
      return;
    }
    const w = round[i];
    stage.innerHTML = `<div class="qz-pad"><div class="qz-toolbar"><span class="qz-ctr">${i+1} / ${round.length}</span><span class="qz-ctr ok">${f7("checkmark_alt", "f7-in")}${got}</span></div><div class="qz-q"><span class="qz-kind">${t("qzType")}</span><span class="qz-term">${esc(w.m)}</span></div>${accBar()}<div class="qz-write"><input class="ans wide" id="qzIn" ${inputAttrs} aria-label="${esc(t("qzType"))}"><button type="button" class="btn pri" id="qzChk">${t("qzCheck")}</button><button type="button" class="btn sec" id="qzIdk">${t("qzDontKnow")}</button></div><div class="qz-fb"></div></div>`;
    const inp = $("#qzIn", stage); inp.focus();
    let done = false;
    const check = giveUp => {
      if (done) { i++; step(); return; }
      const st = giveUp ? "bad" : judge(inp.value, [w.fr]); if (st === "empty") return;
      done = true; inp.disabled = true;
      inp.classList.add(st === "ok" ? "r-ok" : st === "acc" ? "r-acc" : "r-bad");
      const fb = $(".qz-fb", stage), lv = qLv(w.fr);
      speak(w.fr); gameAnswer("q|" + qKey(w.fr), null, st, {daily:true, xp:3});
      if (st === "ok") { got++; qSet(w.fr, {lv: Math.min(3, lv+1)}); fb.innerHTML = `<span class="ok-t">${OKW()}</span>`; setTimeout(()=>{ if (done && round[i] === w) { i++; step(); } }, 800); }
      else { wrong.push(w); qSet(w.fr, {lv: Math.max(0, lv-1)}); fb.innerHTML = `${st === "acc" ? `<span class="acc-t">${t("almost")}</span>` : `<span class="pen">${t("qzWrongIs")}</span>`} <b>${esc(w.fr)}</b> <button type="button" class="btn sm pri" id="qzGo">${t("qzContinue")}</button>`; $("#qzGo", stage).addEventListener("click", ()=>{ i++; step(); }); $("#qzGo", stage).focus(); }
      qzRefreshList();
    };
    inp.addEventListener("keydown", e=>{ if (e.key === "Enter") { e.preventDefault(); check(false); } });
    $("#qzChk", stage).addEventListener("click", ()=>check(false));
    $("#qzIdk", stage).addEventListener("click", ()=>check(true));
  };
  start(qWords(QZ.set));
}

/* mode 4: match game */
function qzMatch(stage){
  const ws = shuffle(qWords(QZ.set).slice()).slice(0, 6);
  const tiles = shuffle(ws.flatMap((w,k)=>[{k, txt:w.fr, fr:true}, {k, txt:w.m, fr:false}]));
  let first = null, left = ws.length, t0 = 0;
  const best = S.quiz.best[QZ.set];
  stage.innerHTML = `<div class="qz-pad"><div class="qz-toolbar"><span class="muted">${t("qzMatchHint")}</span><span class="qz-ctr" id="qzClock">0.0 s</span>${best ? `<span class="qz-ctr ok">${t("qzBest", best)}</span>` : ""}</div><div class="qz-grid">${tiles.map((x,i)=>`<button type="button" class="qz-tile${x.fr?" is-fr":""}" data-i="${i}">${esc(x.txt)}</button>`).join("")}</div></div>`;
  const clock = $("#qzClock", stage);
  $$(".qz-tile", stage).forEach(b=>b.addEventListener("click", ()=>{
    if (b.classList.contains("gone")) return;
    if (!t0) { t0 = performance.now(); qzTimer = setInterval(()=>{ clock.textContent = ((performance.now()-t0)/1000).toFixed(1) + " s"; }, 100); }
    const x = tiles[+b.dataset.i];
    if (x.fr) speak(x.txt);
    if (!first) { first = b; b.classList.add("sel"); return; }
    if (first === b) { b.classList.remove("sel"); first = null; return; }
    const y = tiles[+first.dataset.i];
    if (x.k === y.k && x.fr !== y.fr) {
      [b, first].forEach(el=>{ el.classList.remove("sel"); el.classList.add("ok"); setTimeout(()=>el.classList.add("gone"), 250); });
      first = null; left--;
      if (!left) {
        clearInterval(qzTimer); const s = +((performance.now()-t0)/1000).toFixed(1);
        if (!best || s < best) { S.quiz.best[QZ.set] = s; touch("quiz"); }
        setTimeout(()=>{ stage.innerHTML = `<div class="qz-pad center"><h3 class="qz-done">${t("qzMatchDone", String(s).replace(".", LANG==="ru"?",":"."))}</h3><p class="muted">${t("qzBest", S.quiz.best[QZ.set])}</p><button type="button" class="btn pri" id="qzAgain">${t("qzPlayAgain")}</button></div>`; $("#qzAgain", stage).addEventListener("click", ()=>qzMatch(stage)); }, 350);
      }
    } else {
      const a = first; [b, a].forEach(el=>el.classList.add("bad","flash")); first = null;
      setTimeout(()=>[b, a].forEach(el=>el.classList.remove("bad","flash","sel")), 450);
    }
  }));
}

/*@@MODULES@@*/

/* =========================================================
   router
   ========================================================= */
function renderZh(){
  main.innerHTML = `<div class="col"><div class="zh-soon seyes">
    <div class="zh-big" aria-hidden="true">你好</div>
    <p class="eyebrow">${t("zhEyebrow")}</p><h1>${t("zhH")}</h1><p class="t-ru">${t("zhP")}</p>
    <div class="btns"><a class="btn pri" href="#home" data-zhback="fr">${t("zhBackFr")}</a><a class="btn sec" href="#home" data-zhback="es">${t("zhBackEs")}</a></div>
  </div></div>`;
  $$("[data-zhback]", main).forEach(a=>a.addEventListener("click", e=>{ const c = a.dataset.zhback; if (c !== COURSE) { e.preventDefault(); setCourse(c, true); location.hash = "home"; } }));
}
function markActive(){
  const h = decodeURIComponent((location.hash||"").slice(1));
  const id = byId[h] || ["test","shpargalka","quizlet","account","lexico","bank"].includes(h) ? h : "home";
  $$(".nav a.nl, .nav a.mew").forEach(a=>a.classList.toggle("on", a.dataset.id === id));
  const cur = $(`#navGroups a.nl[data-id="${id}"]`); if (cur) { const g = cur.closest(".ng"); if (g && !g.classList.contains("open")) navOpenGroup(g, true, false); }
}
function route(keepScroll){
  const h = decodeURIComponent((location.hash||"").slice(1));
  if (synth) try { synth.cancel(); } catch(e) {}
  if (qzKeyHandler) { document.removeEventListener("keydown", qzKeyHandler); qzKeyHandler = null; }
  clearInterval(qzTimer); closeDeck(true);
  /* ссылка ведёт в другой курс — переключаемся */
  let want = null;
  if (h === "quizlet" || FR_IDS.has(h)) want = "fr";
  else if (h === "lexico" || /^es[0-9a-z]*-/.test(h)) want = "es";
  if (want && want !== COURSE) setCourse(want, true);
  if ((h === "zh") !== VIEW_ZH) { VIEW_ZH = h === "zh"; const keep = nav.classList.contains("open"); buildNav(); if (keep) nav.classList.add("open"); }
  const y = window.scrollY;
  if (COURSE === "fr" && byId[h]) { const m = byId[h].sec === "cahier" ? "cahier" : byId[h].sec === "tutor" ? "tutor" : "livre"; if (FRMODE !== m) setFrMode(m, true); }
  if (byId[h]) renderTopic(byId[h]);
  else if (h === "test") renderTest();
  else if (h === "shpargalka") renderCheat();
  else if (h === "quizlet") renderQuizlet();
  else if (h === "lexico") renderLexico();
  else if (h === "account") renderAccount();
  else if (h === "bank") renderBank();
  else if (h === "zh") renderZh();
  else renderHome();
  markActive(); closeNav(); updSrsBadge();
  if (!keepScroll) { main.classList.remove("enter"); void main.offsetWidth; main.classList.add("enter"); }
  window.scrollTo(0, keepScroll ? y : 0);
}
/* в теории и разборах встречаются значки ✓ ✗ ★ ✦ — показываем их иконками Framework7 */
const GLYPH_ICO = {"✓":["checkmark_alt", "g-ok"], "✗":["xmark", "g-no"], "★":["star_fill", "g-star"], "✦":["sparkles", "g-star"]}, GLYPH_RE = /[✓✗★✦]/;
function glyphIcons(root){
  if (!root || !GLYPH_RE.test(root.textContent || "")) return;
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode: n => GLYPH_RE.test(n.nodeValue) && !n.parentElement.closest("script,style,textarea,input,.cflag,svg") ? 1 : 3});
  const list = []; while (tw.nextNode()) list.push(tw.currentNode);
  list.forEach(n=>{
    const frag = document.createElement("span"); frag.innerHTML = esc(n.nodeValue).replace(/[✓✗★✦]/g, g => f7(GLYPH_ICO[g][0], "f7-g " + GLYPH_ICO[g][1]));
    n.replaceWith(...frag.childNodes);
  });
}
new MutationObserver(ms=>{ for (const m of ms) for (const n of m.addedNodes) { if (n.nodeType === 1) glyphIcons(n); else if (n.nodeType === 3 && GLYPH_RE.test(n.nodeValue) && n.parentElement) glyphIcons(n.parentElement); } }).observe(document.body, {childList:true, subtree:true});
glyphIcons(document.body);
function rerender(){ route(true); }
window.addEventListener("hashchange", ()=>route(false));
$("#menuLbl").textContent = t("topics"); $("#navShow").lastChild.textContent = t("showNav");
applyLook(); buildNav(); route(false); updSrsBadge(); setInterval(updSrsBadge, 60000);
gateCheck();
if (Cloud.kind !== "supabase") initCloud();
else setTimeout(()=>{ if (!Gate.ready) { Gate.ready = true; initCloud(); } }, 12000);
})();
