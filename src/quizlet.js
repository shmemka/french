/* =========================================================
   QUIZLET v2 (29.10.2026): слова из учебника французского.
   Главное — одно «Занятие на сегодня»: повторения, до которых дошёл срок,
   плюс немного новых слов. Новое слово проходит шаги
   знакомство → выбор перевода → выбор французского слова → пишешь сам,
   затем уходит в интервальные повторения (SM-2, как в Anki).
   Новые слова вводятся по 3 одновременно и из разных наборов вперемешку,
   чтобы похожие слова (дни, числа) не путались между собой.
   Ответ проверяет сайт, самооценка — только для длинных фраз.
   Наборы по юнитам; у набора своя страница (#quizlet/<id>): слова,
   «Учить этот набор», карточки, подбор.
   Встраивается внутрь движка (как game / platform / study / tools).
   ========================================================= */
Object.assign(I18N.ru, {
  qqLead:"Слова из учебника. Каждый день немного новых, а выученные возвращаются, когда начинаешь их забывать.",
  qqToday:"Занятие на сегодня", qqDue:"повторить", qqNew:"новых", qqMin:n=>`≈ ${n} мин`,
  qqStart:"Начать занятие", qqAllDone:"На сегодня всё",
  qqAllDoneP:s=>`Следующее повторение ${s}. Заходи, чтобы слова не забылись.`,
  qqAllLearned:"Все слова этого раздела уже в повторении.",
  qqMoreNew:n=>`Учить ещё ${n} ${plural(n, ["новое слово", "новых слова", "новых слов"])}`,
  qqScopeAll:"Все<span class=\"qq-uw\"> юниты</span>", qqUnit:u=>`Unité ${u}`, qqPerDay:"Новых в день",
  qqHowH:"Как проходит занятие",
  qqHow:[["Знакомство", "Слушаешь слово и смотришь пример из учебника."], ["Узнавание", "Выбираешь перевод, потом французское слово."], ["Вспоминание", "Пишешь слово сам. Дальше оно возвращается через день, потом всё реже."]],
  qqSt:["Новые", "Учу", "Знаю"], qqStOne:["новое", "учу", "знаю"],
  qqSets:"Наборы", qqSetsSub:"Открой набор: там список слов, карточки и игра на скорость.",
  qqMine:"Мои слова",
  qqKnownOf:(a, b)=>`${a} из ${b}`, qqDueN:n=>`${n} к повтору`,
  qqBack:"Все наборы", qqLearnSet:"Учить этот набор", qqCards:"Карточки", qqMatch:"Подбор", qqWords:"Слова",
  qqRevIn:s=>`повтор ${s}`, qqRevNow:"пора повторить",
  qqExit:"Закончить", qqLeft:n=>`Осталось ${n} ${plural(n, ["слово", "слова", "слов"])}`,
  qqKNew:"Новое слово", qqKMcM:"Выбери перевод", qqKMcFr:"Как это по-французски?", qqKType:"Напиши по-французски",
  qqKListen:"Послушай и выбери перевод", qqKFlip:"Вспомни, как это по-французски", qqKRe:"Ещё раз",
  qqGotIt:"Понятно, дальше", qqKnowIt:"Уже знаю это слово",
  qqShow:"Показать ответ", qqRemember:"Вспомнил", qqForgot:"Не вспомнил",
  qqCheck:"Проверить", qqIdk:"Не знаю", qqNext:"Дальше", qqPh:"Ответ по-французски",
  qqOk:"Juste !", qqAlmostAcc:"Почти: проверь акценты.", qqAlmostArt:"Почти: не забудь артикль.", qqGender:"Проверь артикль, у слова другой род.",
  qqRight:"Правильно:", qqOverride:"Я ответил верно",
  qqKeysMc:"1–4 — вариант · Esc — закончить", qqKeysType:"Enter — проверить · Esc — закончить", qqKeysNext:"Enter — дальше",
  qqKeysFlip:"Пробел — показать · 1 — не вспомнил · 2 — вспомнил",
  qqPlay:"Послушать",
  qqDoneH:"Занятие завершено", qqPauseH:"Сделаем перерыв",
  qqSumNew:"новых слов", qqSumRev:"повторено", qqSumAcc:"верных ответов",
  qqNextRev:s=>`Следующее повторение ${s}.`, qqMistakes:"Эти слова вернутся первыми",
  qqToSets:"К наборам", qqToSet:"К набору", qqGoOn:"Продолжить",
  qqFlip:"Нажми, чтобы перевернуть", qqFlipBtn:"Перевернуть", qqShuffle:"Перемешать", qqCardsKeys:"Пробел — перевернуть · ← → — листать",
  qqMatchHint:"Найди пары. Время идёт с первого нажатия.", qqMatchDone:s=>`Готово за ${s} с`, qqBest:s=>`рекорд ${s} с`, qqAgain:"Ещё раз",
  qqFavSub:"Слова, отмеченные сердечком"
});
Object.assign(I18N.en, {
  qqLead:"Words from the textbook. A few new ones every day, and the ones you know come back just as you start to forget them.",
  qqToday:"Today’s session", qqDue:"to review", qqNew:"new", qqMin:n=>`≈ ${n} min`,
  qqStart:"Start session", qqAllDone:"All done for today",
  qqAllDoneP:s=>`Next review ${s}. Come back so the words stick.`,
  qqAllLearned:"Every word here is already in review.",
  qqMoreNew:n=>`Learn ${n} more new ${n === 1 ? "word" : "words"}`,
  qqScopeAll:"All<span class=\"qq-uw\"> units</span>", qqUnit:u=>`Unité ${u}`, qqPerDay:"New per day",
  qqHowH:"How a session works",
  qqHow:[["Meet", "Hear the word and see an example from the textbook."], ["Recognise", "Pick the translation, then the French word."], ["Recall", "Type the word yourself. Then it comes back tomorrow, and less and less often."]],
  qqSt:["New", "Learning", "Known"], qqStOne:["new", "learning", "known"],
  qqSets:"Sets", qqSetsSub:"Open a set to see its words, flip cards or play a speed game.",
  qqMine:"My words",
  qqKnownOf:(a, b)=>`${a} of ${b}`, qqDueN:n=>`${n} due`,
  qqBack:"All sets", qqLearnSet:"Learn this set", qqCards:"Flashcards", qqMatch:"Match", qqWords:"Words",
  qqRevIn:s=>`review ${s}`, qqRevNow:"due now",
  qqExit:"Finish", qqLeft:n=>`${n} ${n === 1 ? "word" : "words"} left`,
  qqKNew:"New word", qqKMcM:"Pick the translation", qqKMcFr:"How do you say it in French?", qqKType:"Type it in French",
  qqKListen:"Listen and pick the translation", qqKFlip:"Recall it in French", qqKRe:"Once more",
  qqGotIt:"Got it, next", qqKnowIt:"I already know this word",
  qqShow:"Show answer", qqRemember:"I knew it", qqForgot:"I didn’t",
  qqCheck:"Check", qqIdk:"I don’t know", qqNext:"Next", qqPh:"Answer in French",
  qqOk:"Juste !", qqAlmostAcc:"Almost: check the accents.", qqAlmostArt:"Almost: don’t forget the article.", qqGender:"Check the article: the word has a different gender.",
  qqRight:"Correct answer:", qqOverride:"I was right",
  qqKeysMc:"1–4 — pick · Esc — finish", qqKeysType:"Enter — check · Esc — finish", qqKeysNext:"Enter — next",
  qqKeysFlip:"Space — show · 1 — didn’t know · 2 — knew it",
  qqPlay:"Listen",
  qqDoneH:"Session complete", qqPauseH:"Let’s take a break",
  qqSumNew:"new words", qqSumRev:"reviewed", qqSumAcc:"correct answers",
  qqNextRev:s=>`Next review ${s}.`, qqMistakes:"These words come back first",
  qqToSets:"Back to sets", qqToSet:"Back to the set", qqGoOn:"Continue",
  qqFlip:"Tap to flip", qqFlipBtn:"Flip", qqShuffle:"Shuffle", qqCardsKeys:"Space — flip · ← → — browse",
  qqMatchHint:"Find the pairs. The clock starts on your first tap.", qqMatchDone:s=>`Done in ${s} s`, qqBest:s=>`best ${s} s`, qqAgain:"Play again",
  qqFavSub:"Words you marked with a heart"
});

Object.assign(I18N.ru, {
  qqTab:{learn:"Учить", my:"Мои сеты", lib:"Библиотека"},
  qqLead:"Учи слова из учебника и свои собственные. Каждый день немного новых, а выученные возвращаются, когда начинаешь их забывать.",
  qqBook:"Наборы из учебника", qqSetsSub:"Открой набор: там список слов, карточки и игра на скорость.",
  qqNewSet:"Создать сет", qqNewSetSub:"Свои слова: из урока, сериала, песни", qqNoSet:"Такого сета нет. Возможно, его удалили.",
  qqTip:["Ты ещё не начинал учить эти слова. Они будут появляться в занятии по несколько штук в день.",
         "Ты уже познакомился со словом, но ещё не прошёл все шаги: выбрать перевод, выбрать слово и написать самому. Сюда же возвращаются слова, в которых ты ошибся на повторении.",
         "Слово прошло все шаги и теперь в повторениях: оно вернётся через день, потом через 3, 7 дней и реже. Если ошибёшься, снова попадёт в «Учу»."],
  qqTipDue:"Срок повторения наступил: слово ждёт тебя в занятии на сегодня.", qqTipNext:s=>`Следующее повторение ${s}.`,
  qqFromLib:"из библиотеки", qqVisShort:{public:"в библиотеке", link:"по ссылке"},
  qqNWords:n=>`${n} ${plural(n, ["слово", "слова", "слов"])}`, qqBy:a=>`автор: ${a}`, qqAnon:"без имени",
  qqMyEmptyH:"Создай свой первый сет", qqMyEmptyP:"Добавь слова, которые хочешь выучить: из урока, сериала или песни. Свой сет учится так же, как наборы из учебника, а ещё им можно поделиться с друзьями.",
  qqFindLib:"Найти в библиотеке",
  qqLibPh:"Тема, слово или автор", qqLibFound:q=>`Результаты по запросу «${q}»`, qqLibPopular:"Популярные сеты",
  qqLibErr:{off:["Библиотека недоступна", "Она работает только при входе в аккаунт."], setup:["Библиотека скоро заработает", "Её ещё подключают. Свои сеты можно создавать уже сейчас."],
    offline:["Нет интернета", "Подключись к сети и попробуй ещё раз."], err:["Не получилось загрузить", "Попробуй ещё раз чуть позже."],
    empty:["Ничего не нашлось", "Попробуй другое слово или создай такой сет сам и опубликуй его."], first:["Пока здесь пусто", "Опубликуй свой сет, и он станет первым в библиотеке."],
    gone:["Сет не найден", "Возможно, автор удалил его или закрыл доступ."]},
  qqLoading:"Загружаем…", qqMineMark:"твой", qqSaves:n=>`сохранили ${n}`,
  qqFromLibBy:a=>`Из библиотеки · ${a}`, qqMySet:"Мой сет", qqLibBy:a=>`Библиотека · ${a}`,
  qqOpenMine:"Открыть в моих сетах", qqSaveSet:"Сохранить себе", qqLearnMy:"Учить этот сет", qqShare:"Поделиться", qqEdit:"Изменить",
  qqSavedT:"Сет сохранён в «Мои сеты»",
  qqShareH:"Поделиться сетом", qqShareLibP:t=>`Отправь ссылку на сет «${t}»: открыв её, человек сможет посмотреть слова и сохранить сет себе.`,
  qqWhoSees:"Кто видит сет", qqLinkA:"Ссылка на сет", qqCopy:"Скопировать", qqCopied:"Скопировано", qqSendVia:"Отправить через…", qqShareText:t=>`Учи со мной французские слова: «${t}»`,
  qqVis:{private:["Только я", "Сет видишь только ты"], link:["По ссылке", "Открыть сет сможет любой, у кого есть ссылка"], public:["В библиотеке", "Сет можно найти в поиске, автор подписан твоим именем"]},
  qqPublishing:"Сохраняем…", qqVisDone:{private:"Готово: сет снова видишь только ты.", link:"Готово: сет доступен по ссылке.", public:"Готово: сет опубликован в библиотеке."},
  qqNoName:"В библиотеке автор будет подписан «без имени». Имя можно указать в личном кабинете.",
  qqNewH:"Новый сет", qqEditH:"Изменить сет", qqEdLead:"Слово по-французски и перевод. Если перевод оставить пустым, сайт подскажет его сам.",
  qqFTitle:"Название", qqFTitlePh:"Например: Слова из сериала Lupin", qqFDesc:"Описание", qqOptional:"необязательно", qqFDescPh:"О чём сет и откуда слова",
  qqImport:"Вставить списком", qqImportHint:"Каждое слово с новой строки: «слово — перевод». Подойдёт и экспорт из Quizlet (слово и перевод через Tab).",
  qqImportPh:"la pomme — яблоко\nle fromage — сыр", qqImportGo:"Добавить в сет", qqCancel:"Отмена",
  qqFFr:"Французский", qqFM:"Перевод", qqAddWord:"Добавить слово", qqRemoveWord:"Убрать слово",
  qqEdTip:"Enter — к следующему полю. Пустые строки не сохраняются.", qqTrLoading:"Подбираем перевод…",
  qqDelete:"Удалить сет", qqDeleteSure:"Точно удалить? Нажми ещё раз", qqDeleted:"Сет удалён",
  qqSaveChanges:"Сохранить", qqCreate:"Создать сет", qqImported:n=>`Добавлено: ${n}`,
  qqErrTitle:"Назови сет.", qqErrHalf:"В выделенных строках не хватает слова или перевода.", qqErrFew:"Добавь хотя бы 2 слова.", qqErrMany:"В сете может быть не больше 500 слов.",
  qqRepubFail:"Сет сохранён, но обновить его в библиотеке не получилось", qqSavedChanges:"Изменения сохранены", qqCreated:"Сет создан"
});
Object.assign(I18N.en, {
  qqTab:{learn:"Learn", my:"My sets", lib:"Library"},
  qqLead:"Learn words from the textbook and your own. A few new ones every day, and the ones you know come back just as you start to forget them.",
  qqBook:"Textbook sets", qqSetsSub:"Open a set to see its words, flip cards or play a speed game.",
  qqNewSet:"Create a set", qqNewSetSub:"Your own words: from a lesson, a series, a song", qqNoSet:"This set doesn’t exist. It may have been deleted.",
  qqTip:["You haven’t started these words yet. A few of them will appear in your session every day.",
         "You’ve met the word but haven’t gone through all the steps yet: pick the translation, pick the word and type it yourself. Words you got wrong in a review also come back here.",
         "The word has passed every step and is now in review: it comes back tomorrow, then in 3 and 7 days, and less often after that. Get it wrong and it goes back to “Learning”."],
  qqTipDue:"It’s time to review this word: it’s waiting in today’s session.", qqTipNext:s=>`Next review ${s}.`,
  qqFromLib:"from the library", qqVisShort:{public:"in the library", link:"via link"},
  qqNWords:n=>`${n} ${n === 1 ? "word" : "words"}`, qqBy:a=>`by ${a}`, qqAnon:"anonymous",
  qqMyEmptyH:"Create your first set", qqMyEmptyP:"Add the words you want to learn: from a lesson, a series or a song. Your set works just like the textbook sets, and you can share it with friends.",
  qqFindLib:"Browse the library",
  qqLibPh:"Topic, word or author", qqLibFound:q=>`Results for “${q}”`, qqLibPopular:"Popular sets",
  qqLibErr:{off:["The library is unavailable", "It only works when you’re signed in."], setup:["The library is coming soon", "It’s still being set up. You can already create your own sets."],
    offline:["No internet", "Connect and try again."], err:["Couldn’t load", "Please try again a bit later."],
    empty:["Nothing found", "Try another word, or create this set yourself and publish it."], first:["Nothing here yet", "Publish your set and it will be the first one in the library."],
    gone:["Set not found", "The author may have deleted it or made it private."]},
  qqLoading:"Loading…", qqMineMark:"yours", qqSaves:n=>`saved ${n}×`,
  qqFromLibBy:a=>`From the library · ${a}`, qqMySet:"My set", qqLibBy:a=>`Library · ${a}`,
  qqOpenMine:"Open in my sets", qqSaveSet:"Save to my sets", qqLearnMy:"Learn this set", qqShare:"Share", qqEdit:"Edit",
  qqSavedT:"The set is saved to “My sets”",
  qqShareH:"Share the set", qqShareLibP:t=>`Send a link to “${t}”: whoever opens it can see the words and save the set.`,
  qqWhoSees:"Who can see the set", qqLinkA:"Link to the set", qqCopy:"Copy", qqCopied:"Copied", qqSendVia:"Send via…", qqShareText:t=>`Learn French words with me: “${t}”`,
  qqVis:{private:["Only me", "Only you can see the set"], link:["Anyone with the link", "Anyone who has the link can open the set"], public:["In the library", "Anyone can find the set; it’s signed with your name"]},
  qqPublishing:"Saving…", qqVisDone:{private:"Done: only you can see the set now.", link:"Done: the set is available via link.", public:"Done: the set is published in the library."},
  qqNoName:"In the library the author will show as “anonymous”. You can set your name in your account.",
  qqNewH:"New set", qqEditH:"Edit set", qqEdLead:"A French word and its translation. Leave the translation empty and the site will suggest one.",
  qqFTitle:"Title", qqFTitlePh:"For example: Words from Lupin", qqFDesc:"Description", qqOptional:"optional", qqFDescPh:"What the set is about and where the words come from",
  qqImport:"Paste a list", qqImportHint:"One word per line: “word — translation”. A Quizlet export (word and translation separated by Tab) works too.",
  qqImportPh:"la pomme — apple\nle fromage — cheese", qqImportGo:"Add to the set", qqCancel:"Cancel",
  qqFFr:"French", qqFM:"Translation", qqAddWord:"Add a word", qqRemoveWord:"Remove the word",
  qqEdTip:"Enter moves to the next field. Empty rows aren’t saved.", qqTrLoading:"Finding a translation…",
  qqDelete:"Delete set", qqDeleteSure:"Delete for sure? Click again", qqDeleted:"Set deleted",
  qqSaveChanges:"Save", qqCreate:"Create set", qqImported:n=>`Added: ${n}`,
  qqErrTitle:"Give the set a title.", qqErrHalf:"The highlighted rows are missing a word or a translation.", qqErrFew:"Add at least 2 words.", qqErrMany:"A set can have at most 500 words.",
  qqRepubFail:"The set is saved, but updating it in the library failed", qqSavedChanges:"Changes saved", qqCreated:"Set created"
});

/* ссылка на сет из библиотеки, с которой человек пришёл на сайт (до входа и онбординга) */
let QZ_DEEP = /^#quizlet\/s\/[a-z0-9]{8,24}$/.test(location.hash) ? location.hash : "";
let QZ = {scope:"all", perDay:10, dir:"fr", shuf:false};
try { const q = JSON.parse(ls.get("edito-qz") || "null"); if (q) { if (+q.perDay) QZ.perDay = +q.perDay; ["scope", "dir", "shuf"].forEach(k=>{ if (q[k] !== undefined) QZ[k] = q[k]; }); } } catch(e) {}
const saveQZ = () => ls.set("edito-qz", JSON.stringify(QZ));
let qzKeyHandler = null, qzTimer = null;
const qzKeys = fn => { if (qzKeyHandler) document.removeEventListener("keydown", qzKeyHandler); qzKeyHandler = fn || null; if (fn) document.addEventListener("keydown", fn); };
const UORD = u => u === "1–2" ? 1.5 : (+u || 0);

/* ---------- слова и их состояние ---------- */
function qWords(scope){
  if (scope === "mine") { const seen = new Set(), out = []; qWords("fav").concat(...qzUsets().map(s=>qWords("c:" + s.id))).forEach(w=>{ if (!seen.has(w.fr)) { seen.add(w.fr); out.push(w); } }); return out; }
  if (/^[cp]:/.test(scope)) { const s = scope[0] === "c" ? qzUset(scope.slice(2)) : PUBC.get(scope.slice(2)); return s ? qzUniq(s.w).map(([fr, m])=>({fr, m:m || "…", set:scope, unit:""})) : []; }
  if (scope === "fav") return (S.quiz.fav || []).map(f=>({fr:f.fr, m:(LANG === "en" ? (f.en || f.ru) : (f.ru || f.en)) || qMeaning(f.fr) || "…", set:"fav", unit:""}));
  const sets = scope === "all" ? QSETS : /^u:/.test(scope) ? QSETS.filter(s=>String(s.unit).split("–").includes(scope.slice(2))) : QSETS.filter(s=>s.id === scope);
  const seen = new Set(), out = [];
  sets.forEach(s=>s.w.forEach(w=>{ if (seen.has(w[0])) return; seen.add(w[0]); out.push({fr:w[0], m:LANG === "en" ? w[2] : w[1], set:s.id, unit:s.unit}); }));
  return out;
}
function qSet(fr, patch){ const k = qKey(fr); S.quiz.c[k] = Object.assign({}, S.quiz.c[k], patch); touch("quiz"); }
const qR = fr => (S.quiz.c[qKey(fr)] || {}).r || null;
/* 0 — новое, 1 — учу, 2 — знаю (ушло в повторения) */
const qSt = fr => { const r = qR(fr); return !r ? 0 : r.st === 2 ? 2 : 1; };

/* ---------- интервальное повторение (SM-2, как в Anki) ----------
   r = {st:1 учу|2 повтор|3 переучиваю, ls (шаг нового слова), step, due(ms), ivl(дни), ef, reps, lap} → S.quiz.c[k].r */
const MIN = 60000, DAY = 864e5;
const SRS = {learn:[1, 10], relearn:[10], grad:1, easy:4};
const dayStart = (ms = Date.now()) => { const d = new Date(ms - 4*3600e3); d.setHours(4, 0, 0, 0); return d.getTime(); };
const dayKey = () => String(dayStart());
function srsNext(r0, g, now = Date.now()){
  const r = r0 ? Object.assign({}, r0) : {st:0, step:0, ivl:0, ef:2.5, reps:0, lap:0, due:now};
  delete r.ls;
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
    else if (g === 3) { if (r.step + 1 < steps.length) { r.step++; r.due = now + steps[r.step]*MIN; } else grad(r.st === 3 ? Math.max(1, r.ivl) : SRS.grad); }
    else grad(r.st === 3 ? r.ivl + 1 : SRS.easy);
  }
  r.reps++; r.last = now;
  return r;
}
function srsWhenTxt(due, now = Date.now()){
  if (due <= now) return t("srsNow");
  const dd = Math.round((dayStart(due) - dayStart(now)) / DAY);
  if (dd <= 0) { const m = Math.round((due - now) / MIN), u = t("srsU"), sp = LANG === "ru" ? " " : ""; return t("srsIn", m < 1 ? u.lt : m < 60 ? `${m}${sp}${u.m}` : `${Math.round(m/60)}${sp}${u.h}`); }
  return dd === 1 ? t("srsTmrw") : t("srsIn", t("srsDays", dd));
}
const srsDueCount = (scope, now = Date.now()) => qWords(scope).filter(w=>{ const r = qR(w.fr); return r && r.due <= now; }).length;
function sdToday(){ const k = dayKey(), sd = S.quiz.sd || {}; return sd.d === k ? Object.assign({n:0, a:0, x:0}, sd) : {d:k, n:0, a:0, x:0}; }
function updSrsBadge(){
  const b = document.getElementById("srsBadge"); if (!b || COURSE !== "fr") return;
  const now = Date.now(), n = qzPool("all").filter(w=>{ const r = qR(w.fr); return r && r.due <= now; }).length; b.hidden = !n; b.textContent = n > 99 ? "99+" : String(n); b.title = `${n} ${t("srsBadge")}`;
}
/* прогресс старых режимов (lv без r) → в повторения; звёздочки → в Избранное */
let QZ_MIG = null;
function qzMigrate(){
  if (QZ_MIG === S.quiz) return; QZ_MIG = S.quiz;
  let ch = false; const now = Date.now();
  qWords("all").forEach(w=>{
    const k = qKey(w.fr), c = S.quiz.c[k]; if (!c) return;
    if (!c.r && c.lv >= 1) { c.r = c.lv >= 2 ? {st:2, step:0, ivl:c.lv >= 3 ? 3 : 1, ef:2.5, reps:1, lap:0, due:dayStart(now)} : {st:1, ls:1, step:0, ivl:0, ef:2.5, reps:0, lap:0, due:now}; ch = true; }
    if (c.s) {
      if (!isFav(w.fr)) { if (!DICT) buildDict(); const d = DICT.get(dk(w.fr)); (S.quiz.fav = S.quiz.fav || []).push({fr:w.fr, ru:d ? d.ru : (LANG === "en" ? "" : w.m), en:d ? d.en : (LANG === "en" ? w.m : ""), at:now}); }
      c.s = 0; ch = true;
    }
  });
  if (ch) touch("quiz");
}
/* «все юниты» = слова учебника + уже начатые слова из своих сетов и избранного (их повторения тоже приходят в занятие) */
function qzPool(scope){
  const ws = qWords(scope); if (scope !== "all") return ws;
  const seen = new Set(ws.map(w=>w.fr));
  qWords("mine").forEach(w=>{ if (!seen.has(w.fr) && qR(w.fr)) { seen.add(w.fr); ws.push(w); } });
  return ws;
}
function qzCounts(scope){
  const now = Date.now(), ws = qzPool(scope); let nw = 0, lr = 0, kn = 0, due = 0;
  ws.forEach(w=>{ const r = qR(w.fr); if (!r) nw++; else if (r.st === 2) { kn++; if (r.due <= now) due++; } else { lr++; due++; } });
  return {n:ws.length, nw, lr, kn, due};
}
const qzIsSet = scope => scope !== "all" && scope !== "fav" && !/^u:/.test(scope);
const qzNewToday = (scope, c) => qzIsSet(scope) ? Math.min(10, c.nw) : Math.min(c.nw, Math.max(0, (QZ.perDay || 10) + sdToday().x - sdToday().n));

/* ---------- оформление слова, примеры из учебника ---------- */
function qzFrHtml(fr){
  return String(fr).split(" / ").map(p=>{
    const e = esc(p), m = e.match(/^(le|un|la|une|les|des)(?=\s)/i); if (!m) return e;
    const cls = /^(le|un)$/i.test(m[1]) ? "g-m" : /^(la|une)$/i.test(m[1]) ? "g-f" : "g-pl";
    return `<span class="${cls}">${m[1]}</span>${e.slice(m[1].length)}`;
  }).join(" / ");
}
const QEX = {top:null, list:[]}, QEXC = new Map();
const exNorm = s => " " + dk(s).replace(/[^a-zà-ÿœæç'-]+/gi, " ").replace(/\s+/g, " ").trim() + " ";
function qzExList(){
  if (QEX.top === TOP) return QEX.list;
  QEX.top = TOP; QEX.list = []; QEXC.clear();
  const P = new DOMParser(), seen = new Set();
  (TOP || []).forEach(tp=>{
    if (typeof tp.theory !== "string" || tp.theory.indexOf("exl") < 0) return;
    P.parseFromString(tp.theory, "text/html").querySelectorAll(".exl li").forEach(li=>{
      const f = li.querySelector(".fr"), tr = li.querySelector(".tr"); if (!f) return;
      const fr = f.textContent.replace(/\s+/g, " ").trim(), n = fr.split(" ").length;
      if (n < 3 || n > 14 || seen.has(fr)) return; seen.add(fr);
      QEX.list.push({fr, m:tr ? tr.textContent.replace(/\s+/g, " ").trim() : "", k:exNorm(fr)});
    });
  });
  return QEX.list;
}
const qzCore = fr => dk(String(fr).split(/\s+\/\s+/)[0]).replace(/\([^)]*\)/g, " ").replace(/[!?.…,:;«»"]/g, " ").replace(/\s+/g, " ").trim().replace(ART, "").replace(ELI, "");
function qzExample(w){
  const list = qzExList(), key = w.fr; if (QEXC.has(key)) return QEXC.get(key);
  const core = qzCore(w.fr); let best = null;
  if (core.length >= 3) {
    const a = " " + core + " ", b = "'" + core + " ", self = exNorm(w.fr);
    for (const e of list) if ((e.k.includes(a) || e.k.includes(b)) && e.k !== self && (!best || e.fr.length < best.fr.length)) best = e;
  }
  QEXC.set(key, best); return best;
}
function qzExHtml(w){
  const ex = qzExample(w); if (!ex) return "";
  const core = qzCore(w.fr), low = ex.fr.toLowerCase().replace(/[’`´‘ʼ]/g, "'"), i = core ? low.indexOf(core) : -1;
  const fr = i >= 0 ? esc(ex.fr.slice(0, i)) + "<b>" + esc(ex.fr.slice(i, i + core.length)) + "</b>" + esc(ex.fr.slice(i + core.length)) : esc(ex.fr);
  return `<div class="qq-ex">${qzSayBtn(ex.fr, "sm")}<div><p class="fr">${fr}</p>${ex.m ? `<p class="qq-ex-t">${esc(ex.m)}</p>` : ""}</div></div>`;
}
const qzSayBtn = (txt, cls) => synth ? `<button type="button" class="qq-say${cls ? " " + cls : ""}" data-say="${esc(txt)}" aria-label="${esc(t("qqPlay"))}" title="${esc(t("qqPlay"))}">${ICON_PLAY}</button>` : "";
const qzBindSay = root => $$("[data-say]", root).forEach(b=>b.addEventListener("click", e=>{ e.stopPropagation(); speak(b.dataset.say); }));

/* ---------- варианты ответа и проверка ---------- */
function qzOpts(w, field){
  const n = x => dk(x[field]), long = x => x[field].split(" ").length > 2, shape = x => long(x) === long(w);
  const ok = x => x.fr !== w.fr && n(x) !== n(w) && dk(x.m) !== dk(w.m);
  const all = qWords("all").concat(/^(fav|[cp]:)/.test(w.set) ? qWords(w.set) : []);
  const same = all.filter(x=>x.set === w.set && ok(x)), other = all.filter(x=>x.set !== w.set && ok(x));
  const out = [];
  for (const g of [shuffle(same.filter(shape)), shuffle(same.slice()), shuffle(other.filter(shape)), shuffle(other.slice())])
    for (const x of g) { if (out.length >= 3) break; if (!out.some(y=>n(y) === n(x))) out.push(x); }
  return shuffle([w, ...out]);
}
function qzAccept(fr){
  const out = new Set([fr]);
  out.add(fr.replace(/\s*\([^)]*\)\s*$/, "").trim());
  if (/\(/.test(fr)) out.add(fr.replace(/\(([^)]*)\)/g, "$1").replace(/\s+/g, " ").trim());
  const parts = fr.split(/\s+\/\s+/);
  if (parts.length > 1) {
    const tail = parts[parts.length - 1].split(" ").slice(1).join(" ");
    parts.forEach(p=>{ out.add(p); out.add(p.replace(/\(([^)]*)\)/g, "$1")); if (/^(le|la|un|une)$/i.test(p) && tail) out.add(p + " " + tail); });
  }
  return [...out].filter(Boolean);
}
/* ok · acc (акценты) · noart (без артикля) — засчитываем; gender (другой артикль) · bad — ошибка */
function qzJudge(inp, fr){
  const acc = qzAccept(fr);
  /* «l ecole» с пробелом вместо апострофа считаем тем же ответом */
  inp = String(inp).replace(/(^|\s)(l|d|j|m|t|s|n|c|qu)\s+(?=[aeiouyhàâéèêëîïôûœ])/gi, "$1$2'");
  const v = judge(inp, acc);
  if (v !== "bad") return v;
  const hy = x => strip(norm(x)).replace(/-/g, " ");
  if (acc.some(a=>hy(a) === hy(inp))) return "acc";
  const n = norm(inp), core = x => strip(norm(x).replace(ART, "").replace(ELI, ""));
  if (acc.some(a=>core(a) === core(n) && core(a) !== strip(norm(a)))) return ART.test(n) || ELI.test(n) ? "gender" : "noart";
  return "bad";
}
const qzLong = w => w.fr.split(/\s+/).length > 3 || /…/.test(w.fr);

/* =========================================================
   страницы Quizlet (v3, 30.10.2026)
   #quizlet — вкладки «Учить» / «Мои сеты» (#quizlet/my) / «Библиотека» (#quizlet/lib),
   переключаются на месте (qzSoft), без перерисовки страницы.
   #quizlet/<id> и #quizlet/fav — набор из учебника / избранное,
   #quizlet/c/<id> — свой сет, #quizlet/new и #quizlet/edit/<id> — редактор,
   #quizlet/s/<id> — сет из библиотеки (по ссылке).
   ========================================================= */
let QS = null;   /* текущее занятие */
const QZTABS = ["learn", "my", "lib"];
const qzTabOf = sub => sub === "my" ? "my" : sub === "lib" ? "lib" : "learn";
function renderQuizlet(sub){
  QS = null; qzKeys(null); clearInterval(qzTimer); qzTipHide(); qzModalClose();
  qzMigrate();
  sub = sub || "";
  let m;
  if (sub === "new") return qzEditor(null);
  if ((m = sub.match(/^edit\/(.+)$/))) return qzEditor(m[1]);
  if ((m = sub.match(/^c\/(.+)$/))) return qzUset(m[1]) ? qzSetView("c:" + m[1]) : qzMissing();
  if ((m = sub.match(/^s\/(.+)$/))) return qzPubView(m[1]);
  if (sub === "fav" || QSETS.some(s=>s.id === sub)) return qzSetView(sub);
  if (!/^(all|u:[0-9])$/.test(QZ.scope)) QZ.scope = "all";
  qzHome(qzTabOf(sub));
}
function qzSoft(sub){
  if (QS || !$(".qq-home", main) || !["", "my", "lib"].includes(sub)) return false;
  qzTipHide(); qzModalClose(); qzTab(qzTabOf(sub)); return true;
}
function qzMissing(){
  main.innerHTML = `<div class="col qq-col"><a class="qq-backl" href="#quizlet/my">${ARL}${t("qqTab").my}</a><div class="qq-empty"><span class="qq-ico">${f7("question")}</span><h3>${t("qqNoSet")}</h3></div></div>`;
}

/* ---------- полоска прогресса с подсказками ---------- */
function qzStack(c, big){
  const p = x => c.n ? (x / c.n * 100).toFixed(1) + "%" : "0";
  const li = (cls, k, n) => `<span class="qq-legi" tabindex="0" data-tip="${esc(t("qqTip")[k])}"><i class="${cls}"></i><u>${t("qqSt")[k]}</u> <b>${n}</b></span>`;
  return `<div class="qq-stack${big ? " big" : ""}"><span class="qq-bar3"><i class="k" style="width:${p(c.kn)}"></i><i class="l" style="width:${p(c.lr)}"></i></span>${big ? `<span class="qq-leg">${li("k", 2, c.kn)}${li("l", 1, c.lr)}${li("", 0, c.nw)}</span>` : ""}</div>`;
}
function qzChip(fr, now){
  const s = qSt(fr), r = qR(fr);
  if (s === 2 && r.due <= now) return `<span class="qq-chip due" tabindex="0" data-tip="${esc(t("qqTipDue"))}">${t("qqRevNow")}</span>`;
  return `<span class="qq-chip s${s}" tabindex="0" data-tip="${esc(t("qqTip")[s] + (s === 2 ? " " + t("qqTipNext", srsWhenTxt(r.due)) : ""))}">${t("qqStOne")[s]}</span>`;
}
/* ---------- карточки наборов ---------- */
const qzVisBadge = s => s.src ? `<span class="qq-vis">${f7("bookmark")}${t("qqFromLib")}</span>` : s.vis === "public" ? `<span class="qq-vis pub">${f7("globe")}${t("qqVisShort").public}</span>` : s.vis === "link" ? `<span class="qq-vis">${f7("link")}${t("qqVisShort").link}</span>` : "";
function qzSetCard(href, title, sub, scope, extra){
  const c = qzCounts(scope);
  return `<a class="qq-set${extra && extra.cls ? " " + extra.cls : ""}" href="${href}"><span class="qq-set-t">${extra && extra.ico || ""}${esc(title)}</span>${sub ? `<span class="qq-set-s">${sub}</span>` : ""}${extra && extra.badge || ""}${qzStack(c)}<span class="qq-set-m">${t("qqKnownOf", c.kn, c.n)}${c.due ? ` · <em>${t("qqDueN", c.due)}</em>` : ""}</span></a>`;
}

/* ---------- главная: вкладки ---------- */
function qzHome(tab){
  main.innerHTML = `<div class="col qq-col qq-home">
  <header class="qq-head qq-head-row"><div class="qq-head-t"><h1>Quizlet</h1><p class="qq-lead">${t("qqLead")}</p></div><a class="btn sec qq-newb" href="#quizlet/new">${f7("plus")}${t("qqNewSet")}</a></header>
  <div class="qq-tabs seg big" role="tablist">${QZTABS.map(k=>`<button type="button" role="tab" data-tab="${k}" aria-controls="qqp-${k}">${t("qqTab")[k]}${k === "my" ? `<span class="qq-tabn">${qzUsets().length || ""}</span>` : ""}</button>`).join("")}</div>
  ${QZTABS.map(k=>`<section class="qq-pane" id="qqp-${k}" data-pane="${k}" role="tabpanel" hidden></section>`).join("")}
  </div>`;
  $$("[data-tab]", main).forEach(b=>b.addEventListener("click", ()=>{
    const h = "#quizlet" + (b.dataset.tab === "learn" ? "" : "/" + b.dataset.tab);
    if (location.hash !== h) { history.pushState(null, "", h); ROUTE_PREV = h.slice(1); markActive(); }
    qzTab(b.dataset.tab);
  }));
  qzTab(tab);
}
function qzTab(tab){
  $$("[data-tab]", main).forEach(b=>{ const on = b.dataset.tab === tab; b.classList.toggle("on", on); b.setAttribute("aria-selected", on ? "true" : "false"); });
  $$(".qq-pane", main).forEach(p=>{
    const on = p.dataset.pane === tab; p.hidden = !on;
    if (on && !p.dataset.ready) { p.dataset.ready = "1"; ({learn:qzPaneLearn, my:qzPaneMy, lib:qzPaneLib})[tab](p); }
  });
  if (tab === "lib") { const i = $(".qq-sin", main); if (i && window.matchMedia("(pointer:fine)").matches) i.focus({preventScroll:true}); }
}

/* --- вкладка «Учить»: занятие на сегодня + наборы из учебника --- */
function qzPaneLearn(p){
  const units = [...new Set(QSETS.flatMap(s=>String(s.unit).split("–")))].sort();
  const scopes = [["all", t("qqScopeAll")], ...units.map(u=>["u:" + u, `<span class="qq-uw">Unité </span>${u}`])];
  const groups = [];
  QSETS.forEach(s=>{ let g = groups.find(x=>x.u === s.unit); if (!g) groups.push(g = {u:s.unit, sets:[]}); g.sets.push(s); });
  groups.sort((a, b)=>UORD(a.u) - UORD(b.u));
  p.innerHTML = `<section class="qq-today">
    <div class="qq-tl">
      <p class="qq-eye">${t("qqToday")}</p>
      <div class="qq-scope seg" role="group">${scopes.map(([id, l])=>`<button type="button" data-scope="${id}" class="${QZ.scope === id ? "on" : ""}" aria-pressed="${QZ.scope === id}">${l}</button>`).join("")}</div>
      <div class="qq-tbody"></div>
    </div>
    <div class="qq-tr">
      <p class="qq-eye">${t("qqHowH")}</p>
      <ol class="qq-how">${t("qqHow").map(([h, d])=>`<li><b>${h}</b><span>${d}</span></li>`).join("")}</ol>
      <div class="qq-per"><span>${t("qqPerDay")}</span><span class="seg">${[5, 10, 15, 20].map(n=>`<button type="button" data-per="${n}" class="${(QZ.perDay || 10) === n ? "on" : ""}">${n}</button>`).join("")}</span></div>
    </div>
  </section>
  <div class="qq-sec-h"><h2>${t("qqBook")}</h2><p>${t("qqSetsSub")}</p></div>
  ${groups.map(g=>`<div class="qq-group"><h3 class="qq-gh"><span class="qq-upill">${g.u.includes("–") ? "Unités " + g.u : "Unité " + g.u}</span></h3><div class="qq-sets">${g.sets.map(s=>qzSetCard("#quizlet/" + s.id, s.t, esc(LANG === "en" ? s.en : s.ru), s.id)).join("")}</div></div>`).join("")}`;
  $$("[data-scope]", p).forEach(b=>b.addEventListener("click", ()=>{
    QZ.scope = b.dataset.scope; saveQZ();
    $$("[data-scope]", p).forEach(x=>{ x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
    qzPaintToday(p);
  }));
  $$("[data-per]", p).forEach(b=>b.addEventListener("click", ()=>{ QZ.perDay = +b.dataset.per; saveQZ(); $$("[data-per]", p).forEach(x=>x.classList.toggle("on", x === b)); qzPaintToday(p); }));
  qzPaintToday(p);
}
function qzPaintToday(p){
  const body = $(".qq-tbody", p); if (!body) return;
  const scope = QZ.scope, c = qzCounts(scope), nNew = qzNewToday(scope, c), mins = Math.max(1, Math.round(c.due * 0.2 + nNew * 0.8));
  const has = c.due + nNew > 0;
  let nextDue = null; if (!has) qzPool(scope).forEach(w=>{ const r = qR(w.fr); if (r && (!nextDue || r.due < nextDue)) nextDue = r.due; });
  body.innerHTML = `<div class="qq-main">${has
    ? `<div class="qq-nums"><div><b>${c.due}</b><span>${t("qqDue")}</span></div><div><b>${nNew}</b><span>${t("qqNew")}</span></div><div class="qq-min">${t("qqMin", mins)}</div></div>
      <button type="button" class="btn pri qq-startb" data-start>${t("qqStart")}${ARR}</button>`
    : `<div class="qq-done-msg"><span class="qq-ico ok">${f7("checkmark_alt")}</span><div><h3>${c.nw || nextDue ? t("qqAllDone") : t("qqAllLearned")}</h3>${nextDue ? `<p>${t("qqAllDoneP", srsWhenTxt(nextDue))}</p>` : ""}</div></div>
      ${c.nw ? `<button type="button" class="btn sec" data-more>${t("qqMoreNew", Math.min(5, c.nw))}</button>` : ""}`}</div>${qzStack(c, true)}`;
  const st = $("[data-start]", body); if (st) st.addEventListener("click", ()=>qzSession(scope, null, ""));
  const mo = $("[data-more]", body); if (mo) mo.addEventListener("click", ()=>{ const sd = sdToday(); sd.x += 5; S.quiz.sd = sd; touch("quiz"); qzSession(scope, Math.min(5, c.nw), ""); });
}

/* --- вкладка «Мои сеты» --- */
function qzPaneMy(p){
  const sets = qzUsets().slice().sort((a, b)=>(b.up || 0) - (a.up || 0));
  const fav = qzSetCard("#quizlet/fav", t("qzFav"), esc(t("qqFavSub")), "fav", {cls:"is-fav", ico:ICO_HEART});
  const card = s => qzSetCard("#quizlet/c/" + s.id, s.t, esc(t("qqNWords", qzUniq(s.w).length)) + (s.src && s.src.a ? " · " + esc(t("qqBy", s.src.a)) : ""), "c:" + s.id, {badge:qzVisBadge(s)});
  p.innerHTML = `${sets.length ? "" : `<div class="qq-empty qq-empty-my"><span class="qq-ico">${f7("rectangle_stack_badge_plus")}</span><div><h3>${t("qqMyEmptyH")}</h3><p>${t("qqMyEmptyP")}</p><div class="qq-acts left"><a class="btn pri" href="#quizlet/new">${f7("plus")}${t("qqNewSet")}</a><a class="btn sec" href="#quizlet/lib">${f7("search")}${t("qqFindLib")}</a></div></div></div>`}
    <div class="qq-sets qq-sets-my">${sets.length ? `<a class="qq-set qq-set-new" href="#quizlet/new"><span class="qq-ico">${f7("plus")}</span><b>${t("qqNewSet")}</b><span>${t("qqNewSetSub")}</span></a>` : ""}${fav}${sets.map(card).join("")}</div>`;
}

/* --- вкладка «Библиотека» --- */
const QLIB = {req:0, timer:null, q:""};
function qzPaneLib(p){
  p.innerHTML = `<div class="qq-libtop"><label class="qq-search"><span class="qq-sico">${f7("search")}</span><input type="search" class="qq-sin" ${inputAttrs} placeholder="${esc(t("qqLibPh"))}" aria-label="${esc(t("qqLibPh"))}" value="${esc(QLIB.q)}"></label></div>
    <p class="qq-libh"></p><div class="qq-libres" aria-live="polite"></div>`;
  const inp = $(".qq-sin", p);
  inp.addEventListener("input", ()=>{ clearTimeout(QLIB.timer); QLIB.timer = setTimeout(()=>qzLibLoad(p, inp.value), 320); });
  inp.addEventListener("keydown", e=>{ if (e.key === "Enter") { e.preventDefault(); clearTimeout(QLIB.timer); qzLibLoad(p, inp.value); } });
  qzLibLoad(p, QLIB.q);
}
const qzLibMissing = e => /PGRST20[25]|42P01|42883|could not find|does not exist/i.test(((e && e.code) || "") + " " + ((e && e.message) || ""));
function qzLibMsg(kind){
  const m = t("qqLibErr")[kind] || t("qqLibErr").err;
  return `<div class="qq-empty"><span class="qq-ico">${(kind === "empty" ? f7("search") : f7("cloud"))}</span><div><h3>${m[0]}</h3><p>${m[1]}</p>${kind === "empty" ? `<div class="qq-acts left"><a class="btn sec" href="#quizlet/new">${f7("plus")}${t("qqNewSet")}</a></div>` : ""}</div></div>`;
}
async function qzLibLoad(p, q){
  if (document.body.classList.contains("gated") || (sb && !Cloud.uid)) { const r0 = $(".qq-libres", p); if (r0 && !r0.children.length) r0.innerHTML = `<div class="qq-loading">${t("qqLoading")}</div>`; return qzWhenReady(()=>{ if (document.body.contains(p)) qzLibLoad(p, q); }); }
  q = String(q || "").trim().slice(0, 60); QLIB.q = q;
  const res = $(".qq-libres", p), head = $(".qq-libh", p), req = ++QLIB.req;
  head.textContent = q ? t("qqLibFound", q) : t("qqLibPopular");
  if (!sb) { res.innerHTML = qzLibMsg("off"); return; }
  res.classList.add("busy");
  if (!res.children.length) res.innerHTML = `<div class="qq-loading">${t("qqLoading")}</div>`;
  let r; try { r = await withTimeout(sb.rpc("qset_search", {p_q:q, p_lang:"fr", p_lim:30}), 12000); } catch(e) { r = {error:e}; }
  if (req !== QLIB.req || !document.body.contains(res)) return;
  res.classList.remove("busy");
  if (r.error) { res.innerHTML = qzLibMsg(qzLibMissing(r.error) ? "setup" : navigator.onLine === false ? "offline" : "err"); return; }
  const list = r.data || [];
  if (!list.length) { res.innerHTML = qzLibMsg(q ? "empty" : "first"); return; }
  res.innerHTML = `<div class="qq-sets qq-lib">${list.map(x=>`<a class="qq-set qq-lcard" href="#quizlet/s/${esc(x.id)}">
    <span class="qq-set-t">${esc(x.title)}</span>
    <span class="qq-set-s">${esc(t("qqBy", x.author || t("qqAnon")))}${x.mine ? ` · <em class="qq-mine">${t("qqMineMark")}</em>` : ""}</span>
    <span class="qq-chips">${(x.sample || []).map(w=>`<span class="qq-wchip">${esc(Array.isArray(w) ? w[0] : "")}</span>`).join("")}</span>
    <span class="qq-set-m">${t("qqNWords", x.n)}${x.saves ? ` · ${t("qqSaves", x.saves)}` : ""}</span></a>`).join("")}</div>`;
}

/* ---------- страница набора: учебник, избранное, свой сет, сет из библиотеки ---------- */
function qzSetView(scope, pub){
  const kind = pub ? "pub" : scope === "fav" ? "fav" : scope.startsWith("c:") ? "my" : "book";
  const set = kind === "book" ? QSETS.find(s=>s.id === scope) : kind === "my" ? qzUset(scope.slice(2)) : pub || null;
  const title = kind === "fav" ? t("qzFav") : kind === "book" ? set.t : set.t;
  const sub = kind === "fav" ? t("qqFavSub") : kind === "book" ? (LANG === "en" ? set.en : set.ru) : (set.d || "");
  const eye = kind === "book" ? (String(set.unit).includes("–") ? "Unités " : "Unité ") + set.unit
    : kind === "fav" ? t("qqTab").my : kind === "my" ? (set.src ? t("qqFromLibBy", set.src.a || t("qqAnon")) : t("qqMySet")) : t("qqLibBy", set.a || t("qqAnon"));
  const back = kind === "book" ? ["#quizlet", t("qqTab").learn] : kind === "pub" ? ["#quizlet/lib", t("qqTab").lib] : ["#quizlet/my", t("qqTab").my];
  const origin = kind === "book" || kind === "fav" ? scope : kind === "my" ? "c/" + set.id : "";
  const ws = qWords(scope), c = qzCounts(scope), now = Date.now();
  const saved = kind === "pub" ? qzUsets().find(s=>s.src && s.src.id === set.id) : null;
  const row = w => `<div class="qq-row" data-row="${esc(w.fr)}">${qzSayBtn(w.fr, "sm")}<span class="qq-rfr fr">${qzFrHtml(w.fr)}</span><span class="qq-rm">${esc(w.m)}</span>${qzChip(w.fr, now)}<button type="button" class="qz-heart${isFav(w.fr) ? " on" : ""}" data-fav="${esc(w.fr)}" aria-label="${esc(isFav(w.fr) ? t("spUnfav") : t("spFav"))}" title="${esc(isFav(w.fr) ? t("spUnfav") : t("spFav"))}">${ICO_HEART}</button></div>`;
  const primary = kind === "pub"
    ? (saved ? `<a class="btn pri" href="#quizlet/c/${saved.id}">${t("qqOpenMine")}${ARR}</a>` : `<button type="button" class="btn pri" data-a="save">${f7("plus")}${t("qqSaveSet")}</button>`)
    : `<button type="button" class="btn pri" data-a="learn">${kind === "book" ? t("qqLearnSet") : t("qqLearnMy")}${ARR}</button>`;
  const shareB = kind === "my" || kind === "pub" ? `<button type="button" class="btn sec" data-a="share">${f7("square_arrow_up")}${t("qqShare")}</button>` : "";
  const editB = kind === "my" ? `<a class="btn sec qq-ib" href="#quizlet/edit/${set.id}" aria-label="${esc(t("qqEdit"))}" title="${esc(t("qqEdit"))}">${f7("pencil")}<span>${t("qqEdit")}</span></a>` : "";
  main.innerHTML = `<div class="col qq-col">
  <a class="qq-backl" href="${back[0]}">${ARL}${back[1]}</a>
  <header class="qq-head"><p class="qq-eye">${esc(eye)}${kind === "my" ? qzVisBadge(set) : ""}</p><h1>${kind === "fav" ? ICO_HEART : ""}${esc(title)}</h1>${sub ? `<p class="qq-lead">${esc(sub)}</p>` : ""}${kind === "pub" ? `<p class="qq-meta">${t("qqNWords", ws.length)}${set.saves ? ` · ${t("qqSaves", set.saves)}` : ""}</p>` : ""}</header>
  ${ws.length ? `${qzStack(c, true)}
  <div class="qq-actions">${primary}<button type="button" class="btn sec" data-a="cards">${f7("rectangle_stack")}${t("qqCards")}</button>${ws.length >= 3 ? `<button type="button" class="btn sec" data-a="match">${f7("timer")}${t("qqMatch")}</button>` : ""}${shareB}${editB}</div>
  <section class="qq-tool" hidden></section>
  <div class="qq-sec-h"><h2>${t("qqWords")} <span class="qq-wn">${ws.length}</span></h2></div>
  <div class="qq-list">${ws.map(row).join("")}</div>`
  : `<div class="qq-empty"><span class="qq-ico fav">${ICO_HEART}</span><div><h3>${t("qzFavEmptyH")}</h3><p>${t("qzFavEmpty")}</p></div></div>`}
  </div>`;
  qzBindSay(main);
  $$("[data-fav]", main).forEach(b=>b.addEventListener("click", ()=>{
    const fr = b.dataset.fav, w = ws.find(x=>x.fr === fr) || {fr, m:""};
    let e = {fr}; if (!isFav(fr)) { if (!DICT) buildDict(); const d = DICT.get(dk(fr)); e = d ? {fr, ru:d.ru, en:d.en} : {fr, ru:LANG === "en" ? "" : w.m, en:LANG === "en" ? w.m : ""}; }
    const on = toggleFav(e); toast(on ? t("favAdded") : t("favRemoved"));
    if (kind === "fav" && !on) {   /* убираем строку на месте */
      const r = b.closest(".qq-row"); r.remove(); const n = $(".qq-wn", main); if (n) n.textContent = $$(".qq-row", main).length;
      if (!$$(".qq-row", main).length) qzSetView("fav");
      return;
    }
    b.classList.toggle("on", on); b.setAttribute("aria-label", on ? t("spUnfav") : t("spFav")); b.title = b.getAttribute("aria-label");
  }));
  const tool = $(".qq-tool", main);
  const open = (mode, btn) => {
    const was = tool.dataset.mode === mode && !tool.hidden;
    $$('[data-a="cards"],[data-a="match"]', main).forEach(x=>x.classList.remove("on"));
    qzKeys(null); clearInterval(qzTimer);
    if (was) { tool.hidden = true; tool.dataset.mode = ""; return; }
    tool.hidden = false; tool.dataset.mode = mode; btn.classList.add("on");
    (mode === "cards" ? qzCards : qzMatch)(tool, scope);
    tool.scrollIntoView({behavior:"smooth", block:"nearest"});
  };
  $$("[data-a]", main).forEach(b=>b.addEventListener("click", ()=>{
    const a = b.dataset.a;
    if (a === "learn") qzSession(scope, null, origin);
    else if (a === "cards" || a === "match") open(a, b);
    else if (a === "share") kind === "my" && !set.src ? qzShare(set) : qzShareLink(kind === "pub" ? set.id : set.src.id, set.t);
    else if (a === "save") qzSaveCopy(set);
  }));
}
/* сердечко в окошке перевода: обновить страницу набора, если она открыта */
function qzRefreshList(){ if (QS) return; const h = decodeURIComponent(location.hash.slice(1)); if (!/^quizlet\/./.test(h) || /^quizlet\/(my|lib)$/.test(h)) return; const y = window.scrollY; renderQuizlet(h.slice(8)); window.scrollTo(0, y); }

/* ---------- свои сеты: хранение и публикация ---------- */
const qzUsets = () => (S.usets && S.usets.sets) || [];
const qzUset = id => qzUsets().find(s=>s.id === id) || null;
const qzNewId = () => { let s = ""; const a = "abcdefghijklmnopqrstuvwxyz0123456789"; const r = crypto.getRandomValues(new Uint8Array(12)); r.forEach(x=>s += a[x % 36]); return s; };
const qzUniq = w => { const seen = new Set(); return (w || []).filter(x=>Array.isArray(x) && x[0] && !seen.has(x[0]) && seen.add(x[0])); };
const qzLink = id => location.origin + location.pathname + "#quizlet/s/" + id;
function qzSaveUsets(){ S.usets = {sets:qzUsets()}; touch("usets"); }
async function qzPublish(set, vis){
  if (!sb) return {err:"off"};
  let r;
  try {
    r = vis === "private"
      ? await withTimeout(sb.from("qsets").delete().eq("id", set.id), 12000)
      : await withTimeout(sb.from("qsets").upsert({id:set.id, author:(S.prof.name || "").slice(0, 40), lang:"fr", title:set.t.slice(0, 80), descr:(set.d || "").slice(0, 300), words:qzUniq(set.w).slice(0, 500), vis}, {onConflict:"id"}), 12000);
  } catch(e) { r = {error:e}; }
  if (r.error) return {err:qzLibMissing(r.error) ? "setup" : navigator.onLine === false ? "offline" : "err", e:r.error};
  set.vis = vis; set.pubAt = Date.now(); qzSaveUsets();
  return {ok:true};
}
async function qzSaveCopy(pub){
  const id = qzNewId();
  qzUsets().push({id, t:pub.t, d:pub.d || "", w:qzUniq(pub.w), at:Date.now(), up:Date.now(), vis:"private", src:{id:pub.id, a:pub.a || ""}});
  qzSaveUsets(); toast(t("qqSavedT"));
  try { sb && sb.rpc("qset_saved", {p_id:pub.id}).then(()=>{}, ()=>{}); } catch(e) {}
  location.hash = "#quizlet/c/" + id;
}

/* ---------- окно (поделиться) ---------- */
function qzModalClose(){ const m = $(".qq-modal"); if (m) { m.remove(); document.removeEventListener("keydown", qzModalKey, true); } }
function qzModalKey(e){ if (e.key === "Escape") { e.stopPropagation(); e.preventDefault(); qzModalClose(); } }
function qzModal(html){
  qzModalClose();
  const el = document.createElement("div"); el.className = "qq-modal";
  el.innerHTML = `<div class="qq-mbg" data-x></div><div class="qq-mbox" role="dialog" aria-modal="true" aria-labelledby="qqMh">${html}</div>`;
  document.body.appendChild(el);
  el.addEventListener("click", e=>{ if (e.target.closest("[data-x]")) qzModalClose(); });
  document.addEventListener("keydown", qzModalKey, true);
  requestAnimationFrame(()=>el.classList.add("in"));
  return el;
}
window.addEventListener("hashchange", ()=>qzModalClose());
const qzShareRow = id => `<div class="qq-linkrow"><input class="qq-linkin" readonly value="${esc(qzLink(id))}" aria-label="${esc(t("qqLinkA"))}"><button type="button" class="btn pri" data-copy>${f7("doc_on_doc")}<span>${t("qqCopy")}</span></button></div>${navigator.share ? `<button type="button" class="btn sec qq-native" data-native>${f7("square_arrow_up")}${t("qqSendVia")}</button>` : ""}`;
function qzBindShareRow(el, id, title){
  const c = $("[data-copy]", el), n = $("[data-native]", el), inp = $(".qq-linkin", el);
  if (inp) inp.addEventListener("focus", ()=>inp.select());
  if (c) c.addEventListener("click", async ()=>{
    let ok = false; try { await navigator.clipboard.writeText(qzLink(id)); ok = true; } catch(e) { try { inp.select(); ok = document.execCommand("copy"); } catch(_) {} }
    $("span", c).textContent = ok ? t("qqCopied") : t("qqCopy"); if (ok) setTimeout(()=>{ if (document.body.contains(c)) $("span", c).textContent = t("qqCopy"); }, 1800);
  });
  if (n) n.addEventListener("click", ()=>{ navigator.share({title, text:t("qqShareText", title), url:qzLink(id)}).catch(()=>{}); });
}
function qzShareLink(id, title){
  const el = qzModal(`<div class="qq-mh"><h3 id="qqMh">${t("qqShareH")}</h3><button type="button" class="qq-mx" data-x aria-label="${esc(t("trClose"))}">${f7("xmark")}</button></div>
    <p class="qq-mlead">${t("qqShareLibP", esc(title))}</p>${qzShareRow(id)}`);
  qzBindShareRow(el, id, title);
}
function qzShare(set){
  const vis = ["private", "link", "public"];
  const el = qzModal(`<div class="qq-mh"><h3 id="qqMh">${t("qqShareH")}</h3><button type="button" class="qq-mx" data-x aria-label="${esc(t("trClose"))}">${f7("xmark")}</button></div>
    <p class="qq-mlead">«${esc(set.t)}» · ${t("qqNWords", qzUniq(set.w).length)}</p>
    <p class="qq-mlab">${t("qqWhoSees")}</p>
    <div class="qq-visopts" role="radiogroup">${vis.map(v=>`<button type="button" role="radio" class="qq-visopt" data-vis="${v}"><span class="qq-vico">${(v === "private" ? f7("lock") : v === "link" ? f7("link") : f7("globe"))}</span><span><b>${t("qqVis")[v][0]}</b><small>${t("qqVis")[v][1]}</small></span></button>`).join("")}</div>
    <div class="qq-sharebox"></div>
    <p class="qq-mst" aria-live="polite"></p>
    ${S.prof.name ? "" : `<p class="qq-mnote">${t("qqNoName")}</p>`}`);
  const box = $(".qq-sharebox", el), st = $(".qq-mst", el);
  const paint = () => {
    const v = set.vis || "private";
    $$("[data-vis]", el).forEach(b=>{ const on = b.dataset.vis === v; b.classList.toggle("on", on); b.setAttribute("aria-checked", on ? "true" : "false"); });
    box.innerHTML = v === "private" ? "" : qzShareRow(set.id);
    if (v !== "private") qzBindShareRow(box, set.id, set.t);
  };
  const apply = async v => {
    if ((set.vis || "private") === v) return;
    $$("[data-vis]", el).forEach(b=>b.disabled = true); st.className = "qq-mst"; st.textContent = t("qqPublishing");
    const r = await qzPublish(set, v);
    if (!document.body.contains(el)) return;
    $$("[data-vis]", el).forEach(b=>b.disabled = false);
    if (r.ok) { st.textContent = t("qqVisDone")[v]; paint(); const b = $(".qq-eye .qq-vis", main), eye = $(".qq-eye", main); if (eye) { if (b) b.remove(); eye.insertAdjacentHTML("beforeend", qzVisBadge(set)); } }
    else { st.className = "qq-mst bad"; st.textContent = t("qqLibErr")[r.err] ? t("qqLibErr")[r.err][0] + ". " + t("qqLibErr")[r.err][1] : t("qqLibErr").err[0]; }
  };
  $$("[data-vis]", el).forEach(b=>b.addEventListener("click", ()=>apply(b.dataset.vis)));
  paint();
  /* нажали «Поделиться» у личного сета — сразу открываем доступ по ссылке */
  if ((set.vis || "private") === "private") apply("link");
}

/* ---------- сет из библиотеки ---------- */
const PUBC = new Map();
/* пока не вошли (экран входа / онбординг), библиотеку не спрашиваем: ждём и повторяем */
function qzWhenReady(fn){
  const h0 = location.hash, t0 = Date.now();
  const tick = () => { if (location.hash !== h0) return; if (!document.body.classList.contains("gated") && (Cloud.uid || Cloud.kind === "none" || Date.now() - t0 > 15000)) return fn(); setTimeout(tick, 400); };
  tick();
}
async function qzPubView(id){
  main.innerHTML = `<div class="col qq-col"><a class="qq-backl" href="#quizlet/lib">${ARL}${t("qqTab").lib}</a><div class="qq-loading">${t("qqLoading")}</div></div>`;
  if (document.body.classList.contains("gated") || (sb && !Cloud.uid)) return qzWhenReady(()=>qzPubView(id));
  const mine = qzUset(id);
  if (mine && !mine.src) { location.replace("#quizlet/c/" + id); return; }
  const h0 = location.hash;
  let r; if (!sb) r = {error:{code:"off"}}; else { try { r = await withTimeout(sb.rpc("qset_get", {p_id:id}), 12000); } catch(e) { r = {error:e}; } }
  if (location.hash !== h0) return;
  const x = r && !r.error && r.data && r.data[0];
  if (!x) {
    const kind = !r || !r.error ? "gone" : !sb ? "off" : qzLibMissing(r.error) ? "setup" : navigator.onLine === false ? "offline" : "err";
    $(".qq-loading", main).outerHTML = qzLibMsg(kind); return;
  }
  const pub = {id:x.id, t:x.title, d:x.descr, a:x.author, w:qzUniq(x.words), saves:x.saves, vis:x.vis, mine:x.mine};
  PUBC.set(id, pub);
  qzSetView("p:" + id, pub);
}

/* ---------- редактор сета ---------- */
function qzEditor(id){
  const set = id ? qzUset(id) : null;
  if (id && !set) return qzMissing();
  const rows0 = set ? qzUniq(set.w).map(x=>[x[0], x[1] || ""]) : [["", ""], ["", ""], ["", ""]];
  main.innerHTML = `<div class="col qq-col qq-edcol">
  <a class="qq-backl" href="${set ? "#quizlet/c/" + set.id : "#quizlet/my"}">${ARL}${set ? esc(set.t) : t("qqTab").my}</a>
  <header class="qq-head"><h1>${set ? t("qqEditH") : t("qqNewH")}</h1><p class="qq-lead">${t("qqEdLead")}</p></header>
  <section class="qq-ed">
    <label class="qq-f"><span>${t("qqFTitle")}</span><input class="qq-in2" id="qqT" maxlength="80" ${inputAttrs} placeholder="${esc(t("qqFTitlePh"))}" value="${esc(set ? set.t : "")}"></label>
    <label class="qq-f"><span>${t("qqFDesc")} <i>${t("qqOptional")}</i></span><textarea class="qq-in2" id="qqD" maxlength="300" rows="2" placeholder="${esc(t("qqFDescPh"))}">${esc(set ? set.d || "" : "")}</textarea></label>
  </section>
  <section class="qq-ed">
    <div class="qq-edh"><h2>${t("qqWords")} <span class="qq-wn"></span></h2><button type="button" class="btn sec sm" data-imp>${f7("doc_plaintext")}${t("qqImport")}</button></div>
    <div class="qq-imp" hidden><p class="qq-hint">${t("qqImportHint")}</p><textarea class="qq-in2" rows="5" id="qqImp" placeholder="${esc(t("qqImportPh"))}"></textarea><div class="qq-acts left"><button type="button" class="btn pri sm" data-impgo>${t("qqImportGo")}</button><button type="button" class="btn sec sm" data-imp>${t("qqCancel")}</button></div></div>
    <div class="qq-edhead" aria-hidden="true"><span></span><span>${t("qqFFr")}</span><span>${t("qqFM")}</span><span></span></div>
    <ol class="qq-erows"></ol>
    <button type="button" class="qq-addrow" data-add>${f7("plus")}${t("qqAddWord")}</button>
    <p class="qq-hint">${t("qqEdTip")}</p>
  </section>
  <p class="qq-ederr" aria-live="polite"></p>
  <div class="qq-edbar"><div class="qq-edbar-l">${set ? `<button type="button" class="qq-del" data-del>${f7("trash")}${t("qqDelete")}</button>` : ""}</div><div class="qq-edbar-r"><a class="btn sec" href="${set ? "#quizlet/c/" + set.id : "#quizlet/my"}">${t("qqCancel")}</a><button type="button" class="btn pri" data-save>${set ? t("qqSaveChanges") : t("qqCreate")}</button></div></div>
  </div>`;
  const list = $(".qq-erows", main), err = $(".qq-ederr", main);
  const count = () => { const n = $$(".qq-er", list).filter(r=>$(".e-fr", r).value.trim() && $(".e-m", r).value.trim()).length; $(".qq-wn", main).textContent = n || ""; };
  const autoTr = async (r) => {
    const f = $(".e-fr", r), m = $(".e-m", r), fr = f.value.trim();
    if (!fr || m.value.trim()) return;
    const hit = lookup(fr);
    let tr = hit ? (LANG === "en" ? (hit.en || hit.ru) : (hit.ru || hit.en)) : "";
    if (!tr && navigator.onLine !== false) { m.placeholder = t("qqTrLoading"); try { tr = await remoteTr(fr, LANG === "en" ? "en" : "ru", "fr") || ""; } catch(e) {} m.placeholder = t("qqFM"); }
    if (tr && !m.value.trim() && f.value.trim() === fr) { m.value = tr; m.classList.add("auto"); count(); }
  };
  const addRow = (fr, mm, focus) => {
    const li = document.createElement("li"); li.className = "qq-er";
    li.innerHTML = `<span class="qq-ern"></span><input class="qq-in2 e-fr ans" ${inputAttrs} placeholder="${esc(t("qqFFr"))}" aria-label="${esc(t("qqFFr"))}" value="${esc(fr || "")}"><input class="qq-in2 e-m" ${inputAttrs} placeholder="${esc(t("qqFM"))}" aria-label="${esc(t("qqFM"))}" value="${esc(mm || "")}"><button type="button" class="qq-erx" aria-label="${esc(t("qqRemoveWord"))}" title="${esc(t("qqRemoveWord"))}">${f7("xmark")}</button>`;
    list.appendChild(li);
    const f = $(".e-fr", li), m = $(".e-m", li);
    f.addEventListener("blur", ()=>autoTr(li));
    f.addEventListener("keydown", e=>{ if (e.key === "Enter") { e.preventDefault(); m.focus(); } });
    m.addEventListener("input", ()=>m.classList.remove("auto"));
    m.addEventListener("keydown", e=>{ if (e.key === "Enter") { e.preventDefault(); const nx = li.nextElementSibling; if (nx) $(".e-fr", nx).focus(); else addRow("", "", true); } });
    [f, m].forEach(x=>x.addEventListener("input", ()=>{ li.classList.remove("bad"); count(); }));
    $(".qq-erx", li).addEventListener("click", ()=>{ li.remove(); if (!$$(".qq-er", list).length) addRow("", "", true); count(); });
    if (focus) f.focus();
    return li;
  };
  rows0.forEach(([a, b])=>addRow(a, b));
  count();
  $("[data-add]", main).addEventListener("click", ()=>addRow("", "", true));
  const imp = $(".qq-imp", main);
  $$("[data-imp]", main).forEach(b=>b.addEventListener("click", ()=>{ imp.hidden = !imp.hidden; if (!imp.hidden) $("#qqImp", main).focus(); }));
  $("[data-impgo]", main).addEventListener("click", ()=>{
    const lines = $("#qqImp", main).value.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
    let n = 0;
    lines.forEach(l=>{
      const m = l.split(/\t|\s+[—–=-]\s+|\s*[;|]\s*/);
      const fr = (m[0] || "").trim(), tr = m.slice(1).join(", ").trim(); if (!fr) return;
      const empty = $$(".qq-er", list).find(r=>!$(".e-fr", r).value.trim() && !$(".e-m", r).value.trim());
      if (empty) { $(".e-fr", empty).value = fr; $(".e-m", empty).value = tr; if (!tr) autoTr(empty); } else { const r = addRow(fr, tr); if (!tr) autoTr(r); }
      n++;
    });
    $("#qqImp", main).value = ""; imp.hidden = true; count(); toast(t("qqImported", n));
  });
  /* вставка списка прямо в поле слова: «слово — перевод» на нескольких строках */
  list.addEventListener("paste", e=>{
    const txt = (e.clipboardData || window.clipboardData).getData("text"); if (!/\n/.test(txt.trim())) return;
    e.preventDefault(); $("#qqImp", main).value = txt; $("[data-impgo]", main).click();
  });
  const del = $("[data-del]", main);
  if (del) del.addEventListener("click", ()=>{
    if (!del.classList.contains("arm")) { del.classList.add("arm"); del.lastChild.textContent = t("qqDeleteSure"); setTimeout(()=>{ if (document.body.contains(del)) { del.classList.remove("arm"); del.lastChild.textContent = t("qqDelete"); } }, 4000); return; }
    const was = set.vis && set.vis !== "private" && !set.src;
    S.usets.sets = qzUsets().filter(s=>s.id !== set.id); qzSaveUsets();
    if (was && sb) sb.from("qsets").delete().eq("id", set.id).then(()=>{}, ()=>{});
    toast(t("qqDeleted")); location.hash = "#quizlet/my";
  });
  $("[data-save]", main).addEventListener("click", async ()=>{
    const title = $("#qqT", main).value.trim(), d = $("#qqD", main).value.trim();
    err.textContent = ""; $("#qqT", main).classList.remove("bad");
    const w = [], seen = new Set(); let bad = 0;
    $$(".qq-er", list).forEach(r=>{
      const fr = $(".e-fr", r).value.trim().replace(/\s+/g, " "), m = $(".e-m", r).value.trim().replace(/\s+/g, " ");
      r.classList.remove("bad");
      if (!fr && !m) return;
      if (!fr || !m) { r.classList.add("bad"); bad++; return; }
      if (seen.has(fr)) return; seen.add(fr); w.push([fr.slice(0, 120), m.slice(0, 160)]);
    });
    if (!title) { $("#qqT", main).classList.add("bad"); $("#qqT", main).focus(); err.textContent = t("qqErrTitle"); return; }
    if (bad) { err.textContent = t("qqErrHalf"); const r = $(".qq-er.bad", list); if (r) $(".e-fr", r).value ? $(".e-m", r).focus() : $(".e-fr", r).focus(); return; }
    if (w.length < 2) { err.textContent = t("qqErrFew"); return; }
    if (w.length > 500) { err.textContent = t("qqErrMany"); return; }
    const now = Date.now();
    let s = set;
    if (s) Object.assign(s, {t:title.slice(0, 80), d:d.slice(0, 300), w, up:now});
    else { s = {id:qzNewId(), t:title.slice(0, 80), d:d.slice(0, 300), w, at:now, up:now, vis:"private"}; qzUsets().push(s); }
    qzSaveUsets();
    if (s.vis && s.vis !== "private" && !s.src) qzPublish(s, s.vis).then(r=>{ if (!r.ok) toast(t("qqRepubFail")); });
    toast(set ? t("qqSavedChanges") : t("qqCreated"));
    location.hash = "#quizlet/c/" + s.id;
  });
  if (!set) $("#qqT", main).focus();
}

/* ---------- подсказки (Знаю / Учу / Новые, статусы слов) ---------- */
const QTIP = {el:null, on:null};
function qzTipHide(){ if (QTIP.el) QTIP.el.hidden = true; QTIP.on = null; }
function qzTipShow(target){
  if (!QTIP.el) { QTIP.el = document.createElement("div"); QTIP.el.className = "qq-tipbox"; QTIP.el.setAttribute("role", "tooltip"); QTIP.el.hidden = true; document.body.appendChild(QTIP.el); }
  const el = QTIP.el; QTIP.on = target;
  el.textContent = target.dataset.tip; el.hidden = false; el.style.left = "0px"; el.style.top = "0px";
  const r = target.getBoundingClientRect(), w = el.offsetWidth, h = el.offsetHeight, vw = document.documentElement.clientWidth;
  let top = r.top - h - 8, below = false; if (top < 8) { top = r.bottom + 8; below = true; }
  const left = Math.max(8, Math.min(vw - w - 8, r.left + r.width / 2 - w / 2));
  el.style.left = left + "px"; el.style.top = top + "px"; el.classList.toggle("below", below);
  el.style.setProperty("--ax", Math.max(12, Math.min(w - 12, r.left + r.width / 2 - left)) + "px");
}
document.addEventListener("mouseover", e=>{ const tg = e.target.closest && e.target.closest("[data-tip]"); if (tg && tg !== QTIP.on) qzTipShow(tg); else if (!tg && QTIP.on) qzTipHide(); });
document.addEventListener("focusin", e=>{ const tg = e.target.closest && e.target.closest("[data-tip]"); if (tg) qzTipShow(tg); });
document.addEventListener("focusout", e=>{ if (QTIP.on && e.target === QTIP.on) qzTipHide(); });
document.addEventListener("click", e=>{ const tg = e.target.closest && e.target.closest("[data-tip]"); if (tg) { if (QTIP.on === tg && !QTIP.el.hidden && e.pointerType !== "mouse") qzTipHide(); else qzTipShow(tg); } else if (QTIP.on) qzTipHide(); });
window.addEventListener("scroll", ()=>{ if (QTIP.on) qzTipHide(); }, {passive:true, capture:true});

/* =========================================================
   занятие
   ========================================================= */
function qzPickNew(fresh, n){
  if (n <= 0) return [];
  const by = new Map(); fresh.forEach(w=>{ if (!by.has(w.set)) by.set(w.set, []); by.get(w.set).push(w); });
  const groups = [...by.values()].sort((a, b)=>UORD(a[0].unit) - UORD(b[0].unit));
  const out = [];
  while (out.length < n && groups.some(g=>g.length)) {
    /* три соседних набора по порядку учебника, по слову из каждого */
    for (const g of groups.filter(g=>g.length).slice(0, 3)) { if (out.length >= n) break; out.push(g.shift()); }
  }
  return out;
}
function qzSession(scope, extraNew, origin){
  const now = Date.now(), ws = qzPool(scope), learn = [], rev = [], fresh = [];
  ws.forEach(w=>{ const r = qR(w.fr); if (!r) fresh.push(w); else if (r.st === 2) { if (r.due <= now) rev.push(w); } else learn.push(w); });
  rev.sort((a, b)=>qR(a.fr).due - qR(b.fr).due);
  const nNew = extraNew != null ? extraNew : qzNewToday(scope, {nw:fresh.length});
  const queue = [];
  learn.forEach(w=>{ const r = qR(w.fr); queue.push(r.st === 3 ? {w, kind:"re", orig:"rev", stage:3} : {w, kind:"new", stage:Math.max(1, Math.min(3, r.ls || 1))}); });
  shuffle(rev.slice(0, 60)).forEach(w=>queue.push({w, kind:"rev", orig:"rev", stage:3}));
  const freshQ = qzPickNew(fresh, nNew);
  QS = {scope, origin, queue, fresh:freshQ, step:0, last:null, done:0, total:0, revN:0, st:{nw:0, rv:0, ok:0, n:0}, miss:new Map(), undo:null, cur:null, phase:"q", tok:0};
  QS.total = queue.reduce((a, i)=>a + (i.kind === "new" ? 4 - i.stage : 1), 0) + freshQ.length * 4;
  main.innerHTML = `<div class="col qq-col"><section class="qq-ses">
    <header class="qq-sh"><button type="button" class="qq-x" aria-label="${esc(t("qqExit"))}" title="${esc(t("qqExit"))}">${f7("xmark")}</button><span class="qq-pbar"><i></i></span><span class="qq-left"></span></header>
    <div class="qq-q"></div><p class="qq-keys"></p></section></div>`;
  $(".qq-x", main).addEventListener("click", ()=>qzFinish(true));
  window.scrollTo(0, 0);
  qzKeys(qzSesKey);
  qzNext();
}
function qzNextItem(){
  const q = QS.queue, inProg = q.filter(i=>i.kind === "new").length;
  if (QS.fresh.length && inProg < 3 && (!q.length || q[0].w.fr === QS.last || QS.step % 2 === 0)) q.unshift({w:QS.fresh.shift(), kind:"new", stage:0});
  if (!q.length) return null;
  if (q.length > 1 && q[0].w.fr === QS.last) [q[0], q[1]] = [q[1], q[0]];
  return q.shift();
}
function qzQType(it){
  if (it.kind === "new") return it.stage === 0 ? "intro" : it.stage === 1 ? "mcM" : it.stage === 2 ? "mcFr" : (qzLong(it.w) ? "flip" : "type");
  if (qzLong(it.w)) return "flip";
  if (it.kind === "rev" && synth && QS.revN % 3 === 2) return "listen";
  return "type";
}
function qzPaintHead(){
  const ses = $(".qq-ses", main); if (!ses) return;
  $(".qq-pbar i", ses).style.width = Math.min(100, QS.total ? QS.done / QS.total * 100 : 0) + "%";
  const left = new Set(QS.queue.map(i=>i.w.fr)); QS.fresh.forEach(w=>left.add(w.fr)); if (QS.cur && QS.phase !== "fb") left.add(QS.cur.w.fr);
  $(".qq-left", ses).textContent = t("qqLeft", left.size);
}
function qzNext(){
  if (!QS) return;
  const it = qzNextItem();
  if (!it) return qzFinish(false);
  QS.cur = it; QS.phase = "q"; QS.tok++; QS.undo = null;
  if (window.scrollY > 0 && window.innerWidth <= 640) window.scrollTo(0, 0);
  it.q = qzQType(it); if (it.kind === "rev") QS.revN++;
  const w = it.w, box = $(".qq-q", main), keys = $(".qq-keys", main);
  const word = (big) => `<div class="qq-word">${qzSayBtn(w.fr)}<span class="qq-fr fr${big ? " big" : ""}">${qzFrHtml(w.fr)}</span></div>`;
  const kind = txt => `<p class="qq-kind${it.kind === "new" && it.stage === 0 ? " is-new" : ""}">${it.kind === "re" ? `<span class="qq-re">${t("qqKRe")}</span>` : ""}${txt}</p>`;
  const opts = (list, field) => `<div class="qq-opts">${list.map((o, k)=>`<button type="button" class="qq-opt${field === "fr" ? " fr" : ""}" data-fr="${esc(o.fr)}"><kbd>${k + 1}</kbd><span>${field === "fr" ? qzFrHtml(o.fr) : esc(o.m)}</span></button>`).join("")}</div>`;
  let html = "";
  if (it.q === "intro") {
    html = `${kind(t("qqKNew"))}${word(true)}<p class="qq-mean">${esc(w.m)}</p>${qzExHtml(w)}
      <div class="qq-acts"><button type="button" class="btn pri" data-go>${t("qqGotIt")}${ARR}</button><button type="button" class="btn sec" data-known>${t("qqKnowIt")}</button></div>`;
    keys.textContent = t("qqKeysNext");
  } else if (it.q === "mcM") {
    html = `${kind(t("qqKMcM"))}${word(true)}${opts(qzOpts(w, "m"), "m")}<div class="qq-fb" aria-live="polite"></div>`; keys.textContent = t("qqKeysMc");
  } else if (it.q === "mcFr") {
    html = `${kind(t("qqKMcFr"))}<p class="qq-prompt">${esc(w.m)}</p>${opts(qzOpts(w, "fr"), "fr")}<div class="qq-fb" aria-live="polite"></div>`; keys.textContent = t("qqKeysMc");
  } else if (it.q === "listen") {
    html = `${kind(t("qqKListen"))}<div class="qq-word"><button type="button" class="qq-say big" data-say="${esc(w.fr)}" aria-label="${esc(t("qqPlay"))}">${ICON_PLAY}</button></div>${opts(qzOpts(w, "m"), "m")}<div class="qq-fb" aria-live="polite"></div>`; keys.textContent = t("qqKeysMc");
  } else if (it.q === "type") {
    html = `${kind(t("qqKType"))}<p class="qq-prompt">${esc(w.m)}</p>${accBar()}<div class="qq-type"><input class="ans qq-in" ${inputAttrs} placeholder="${esc(t("qqPh"))}" aria-label="${esc(t("qqKType"))}"><button type="button" class="btn pri" data-check>${t("qqCheck")}</button><button type="button" class="btn sec" data-idk>${t("qqIdk")}</button></div><div class="qq-fb" aria-live="polite"></div>`;
    keys.textContent = t("qqKeysType");
  } else {
    html = `${kind(t("qqKFlip"))}<p class="qq-prompt">${esc(w.m)}</p><div class="qq-flip"><button type="button" class="btn pri" data-show>${t("qqShow")}</button></div><div class="qq-fb" aria-live="polite"></div>`;
    keys.textContent = t("qqKeysFlip");
  }
  box.className = "qq-q t-" + it.q; box.innerHTML = html;
  qzBindSay(box); qzPaintHead();
  if (it.q === "intro") {
    $("[data-go]", box).addEventListener("click", ()=>{ qzApply(it, "intro"); qzNext(); });
    $("[data-known]", box).addEventListener("click", ()=>{ qzApply(it, "known"); qzNext(); });
    $("[data-go]", box).focus({preventScroll:true});
    speak(w.fr);
  } else if (/^mc|^listen/.test(it.q)) {
    $$(".qq-opt", box).forEach(b=>b.addEventListener("click", ()=>qzPick(b)));
    if (it.q !== "mcFr") speak(w.fr);
  } else if (it.q === "type") {
    const inp = $(".qq-in", box); inp.focus({preventScroll:true});
    inp.addEventListener("keydown", e=>{ if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); qzCheckType(false); } });
    $("[data-check]", box).addEventListener("click", ()=>qzCheckType(false));
    $("[data-idk]", box).addEventListener("click", ()=>qzCheckType(true));
  } else {
    $("[data-show]", box).addEventListener("click", qzFlipShow);
  }
}
function qzPick(b){
  if (!QS || QS.phase !== "q") return;
  const it = QS.cur, ok = b.dataset.fr === it.w.fr, box = $(".qq-q", main);
  $$(".qq-opt", box).forEach(x=>{ x.disabled = true; if (x.dataset.fr === it.w.fr) x.classList.add("is-ok"); });
  if (!ok) b.classList.add("is-bad");
  qzApply(it, ok ? "ok" : "bad");
  if (it.q === "mcFr" || !ok) speak(it.w.fr);
  qzFeedback(ok ? "ok" : "bad", ok && it.q === "mcM" ? "" : `<span class="qq-fbw fr">${qzFrHtml(it.w.fr)}</span> — ${esc(it.w.m)}`);
}
function qzCheckType(giveUp){
  if (!QS || QS.phase !== "q") return;
  const it = QS.cur, box = $(".qq-q", main), inp = $(".qq-in", box);
  const v = giveUp ? "bad" : qzJudge(inp.value, it.w.fr); if (v === "empty") return;
  const good = v === "ok" || v === "acc" || v === "noart";
  inp.disabled = true; inp.classList.add(v === "ok" ? "r-ok" : good ? "r-acc" : "r-bad");
  if (!good) inp.classList.add("a-bad");
  qzApply(it, v === "ok" ? "ok" : good ? "hard" : "bad");
  speak(it.w.fr);
  const right = `<span class="qq-fbw fr">${qzFrHtml(it.w.fr)}</span>`;
  if (v === "ok") qzFeedback("ok", dk(inp.value) !== dk(it.w.fr) ? right : "");
  else if (good) qzFeedback("acc", `${v === "acc" ? t("qqAlmostAcc") : t("qqAlmostArt")} ${right}`);
  else qzFeedback("bad", `${v === "gender" ? t("qqGender") + " " : ""}${right}${qzExHtml(it.w)}`, !giveUp);
}
function qzFlipShow(){
  if (!QS || QS.phase !== "q" || QS.cur.q !== "flip") return;
  const it = QS.cur, f = $(".qq-flip", main);
  QS.phase = "flip";
  f.innerHTML = `<div class="qq-word">${qzSayBtn(it.w.fr)}<span class="qq-fr fr">${qzFrHtml(it.w.fr)}</span></div><div class="qq-self"><button type="button" class="btn sec" data-g="1"><kbd>1</kbd>${t("qqForgot")}</button><button type="button" class="btn pri" data-g="2"><kbd>2</kbd>${t("qqRemember")}</button></div>`;
  qzBindSay(f); speak(it.w.fr);
  $$("[data-g]", f).forEach(b=>b.addEventListener("click", ()=>qzSelf(b.dataset.g === "2")));
  $('[data-g="2"]', f).focus({preventScroll:true});
}
function qzSelf(ok){
  if (!QS || QS.phase !== "flip") return;
  QS.phase = "q"; qzApply(QS.cur, ok ? "ok" : "bad"); qzNext();
}
function qzFeedback(kind, html, canOverride){
  QS.phase = "fb";
  const fb = $(".qq-fb", main), tok = QS.tok;
  const head = kind === "ok" ? `<b>${t("qqOk")}</b>` : kind === "acc" ? "" : `<b>${t("qqRight")}</b>`;
  fb.className = "qq-fb on " + kind;
  fb.innerHTML = `<div class="qq-fbt">${head} ${html}</div>${kind === "ok" ? "" : `<div class="qq-fbb">${canOverride ? `<button type="button" class="qq-ovr" data-ovr>${t("qqOverride")}</button>` : ""}<button type="button" class="btn pri" data-next>${t("qqNext")}${ARR}</button></div>`}`;
  qzBindSay(fb); qzPaintHead();
  $(".qq-keys", main).textContent = t("qqKeysNext");
  const n = $("[data-next]", fb); if (n) { n.addEventListener("click", qzAdvance); n.focus({preventScroll:true}); }
  const o = $("[data-ovr]", fb); if (o) o.addEventListener("click", qzOverride);
  if (kind === "ok") setTimeout(()=>{ if (QS && QS.tok === tok && QS.phase === "fb") qzAdvance(); }, 900);
}
function qzAdvance(){ if (!QS || QS.phase !== "fb") return; QS.phase = "q"; qzNext(); }
function qzApply(it, res){
  const w = it.w, k = qKey(w.fr), now = Date.now();
  QS.undo = {k, it, prevC:S.quiz.c[k] ? JSON.parse(JSON.stringify(S.quiz.c[k])) : null, prevSd:JSON.parse(JSON.stringify(S.quiz.sd || {})), st:Object.assign({}, QS.st), done:QS.done, total:QS.total, missHad:QS.miss.has(w.fr), again:null};
  let r = qR(w.fr), again = null, gap = 3;
  const sd = sdToday();
  if (res === "intro") { r = {st:1, ls:1, step:0, ivl:0, ef:2.5, reps:0, lap:0, due:now}; sd.n++; again = {w, kind:"new", stage:1}; gap = 2; }
  else if (res === "known") { r = srsNext(null, 4, now); QS.total -= 3; }
  else {
    sd.a++; QS.st.n++;
    if (res === "bad") { QS.miss.set(w.fr, w); QS.total++; gap = 2; }
    else QS.st.ok++;
    if (it.kind === "new") {
      r = Object.assign({st:1, step:0, ivl:0, ef:2.5, reps:0, lap:0, due:now}, r || {});
      if (res === "bad") { again = {w, kind:"new", stage:it.stage}; r.due = now; }
      else if (it.stage >= 3) { r = Object.assign({}, r, {st:2, step:0, ivl:1, reps:(r.reps || 0) + 1, due:dayStart(now) + DAY, last:now}); delete r.ls; QS.st.nw++; }
      else { r.ls = it.stage + 1; again = {w, kind:"new", stage:it.stage + 1}; }
    } else {
      if (res === "bad") { r = srsNext(r, 1, now); again = {w, kind:"re", orig:"rev", stage:3}; }
      else { r = srsNext(r, it.kind === "re" ? 3 : res === "hard" ? 2 : 3, now); QS.st.rv++; }
    }
    gameAnswer("q|" + k, null, res === "bad" ? "bad" : "ok", {daily:true, xp:2});
  }
  S.quiz.sd = sd;
  qSet(w.fr, {r});
  QS.done++; QS.step++; QS.last = w.fr;
  if (again) { const q = QS.queue; q.splice(Math.min(q.length, gap), 0, again); QS.undo.again = again; }
  updSrsBadge();
}
/* «Я ответил верно»: отменяем ошибку и засчитываем ответ */
function qzOverride(){
  const u = QS && QS.undo; if (!u || QS.phase !== "fb") return;
  if (u.prevC) S.quiz.c[u.k] = u.prevC; else delete S.quiz.c[u.k];
  S.quiz.sd = u.prevSd; touch("quiz");
  if (u.again) { const i = QS.queue.indexOf(u.again); if (i >= 0) QS.queue.splice(i, 1); }
  QS.st = u.st; QS.done = u.done; QS.total = u.total; QS.step--; if (!u.missHad) QS.miss.delete(u.it.w.fr);
  qzApply(u.it, "ok");
  QS.phase = "q"; qzNext();
}
function qzSesKey(e){
  if (!QS || !$(".qq-ses", main) || e.metaKey || e.ctrlKey || e.altKey) return;
  const tag = (e.target || {}).tagName || "";
  if (e.key === "Escape") { e.preventDefault(); return qzFinish(true); }
  if (QS.phase === "fb") { if (e.key === "Enter" || (e.key === " " && tag !== "INPUT")) { e.preventDefault(); qzAdvance(); } return; }
  if (/INPUT|TEXTAREA/.test(tag)) return;
  const q = QS.cur && QS.cur.q;
  if (q === "intro" && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); qzApply(QS.cur, "intro"); return qzNext(); }
  if (/^mc|^listen/.test(q || "") && /^[1-4]$/.test(e.key)) { const b = $$(".qq-opt", main)[+e.key - 1]; if (b) { e.preventDefault(); qzPick(b); } return; }
  if (q === "flip") {
    if (QS.phase === "q" && (e.key === " " || e.key === "Enter")) { e.preventDefault(); return qzFlipShow(); }
    if (QS.phase === "flip" && (e.key === "1" || e.key === "2")) { e.preventDefault(); return qzSelf(e.key === "2"); }
  }
}
function qzForecast(scope){
  const now = Date.now(), d0 = dayStart(now), c = [0, 0, 0, 0, 0, 0, 0];
  qWords(scope).forEach(w=>{ const r = qR(w.fr); if (!r) return; const i = Math.max(0, Math.round((dayStart(r.due) - d0) / DAY)); if (i < 7) c[i]++; });
  if (!c.some(Boolean)) return "";
  const mx = Math.max(1, ...c), fmt = new Intl.DateTimeFormat(LANG === "en" ? "en-GB" : "ru-RU", {weekday:"short"});
  return `<div class="qq-fcw"><p class="qq-eye">${t("srsFc")}</p><div class="qq-fc">${c.map((n, i)=>`<div><b>${n || ""}</b><i class="${n ? "" : "z"}" style="height:${n ? Math.max(6, Math.round(n/mx*56)) : 3}px"></i><span>${i < 2 ? t("srsDay")[i] : fmt.format(new Date(d0 + i*DAY + 12*3600e3))}</span></div>`).join("")}</div></div>`;
}
function qzFinish(early){
  if (!QS) return;
  const s = QS, scope = s.scope, origin = s.origin; QS = null; qzKeys(null);
  const left = s.queue.length + s.fresh.length + (early && s.cur && s.phase !== "fb" ? 1 : 0);
  const acc = s.st.n ? Math.round(s.st.ok / s.st.n * 100) : 0;
  let nextDue = null; qWords(scope).forEach(w=>{ const r = qR(w.fr); if (r && (!nextDue || r.due < nextDue)) nextDue = r.due; });
  const c = qzCounts(scope), more = !qzIsSet(scope) && c.nw ? Math.min(5, c.nw) : qzIsSet(scope) && c.nw ? Math.min(10, c.nw) : 0;
  const miss = [...s.miss.values()];
  main.innerHTML = `<div class="col qq-col"><section class="qq-ses qq-sum">
    <span class="qq-ico ${early && left ? "pause" : "ok"}">${(early && left ? f7("pause_fill") : f7("checkmark_alt"))}</span>
    <h2>${early && left ? t("qqPauseH") : t("qqDoneH")}</h2>
    ${s.st.n || s.st.nw ? `<div class="qq-sumn"><div><b>${s.st.nw}</b><span>${t("qqSumNew")}</span></div><div><b>${s.st.rv}</b><span>${t("qqSumRev")}</span></div><div><b>${acc}%</b><span>${t("qqSumAcc")}</span></div></div>` : ""}
    ${nextDue && nextDue > Date.now() ? `<p class="qq-lead">${t("qqNextRev", srsWhenTxt(nextDue))}</p>` : ""}
    ${qzForecast(scope)}
    ${miss.length ? `<div class="qq-miss"><p class="qq-eye">${t("qqMistakes")}</p>${miss.map(w=>`<div class="qq-row">${qzSayBtn(w.fr, "sm")}<span class="qq-rfr fr">${qzFrHtml(w.fr)}</span><span class="qq-rm">${esc(w.m)}</span></div>`).join("")}</div>` : ""}
    <div class="qq-acts">${early && left ? `<button type="button" class="btn pri" data-cont>${t("qqGoOn")}${ARR}</button>` : more ? `<button type="button" class="btn pri" data-more>${t("qqMoreNew", more)}</button>` : ""}<a class="btn sec" href="#quizlet${origin ? "/" + origin : ""}">${origin ? t("qqToSet") : t("qqToSets")}</a></div>
  </section></div>`;
  qzBindSay(main); window.scrollTo(0, 0);
  const ct = $("[data-cont]", main); if (ct) ct.addEventListener("click", ()=>qzSession(scope, null, origin));
  const mo = $("[data-more]", main); if (mo) mo.addEventListener("click", ()=>{ if (!qzIsSet(scope)) { const sd = sdToday(); sd.x += more; S.quiz.sd = sd; touch("quiz"); } qzSession(scope, more, origin); });
}

/* =========================================================
   карточки и подбор (на странице набора)
   ========================================================= */
function qzCards(box, id){
  let deck = qWords(id); if (QZ.shuf) deck = shuffle(deck.slice());
  let i = 0, flipped = false;
  const sideF = () => QZ.dir === "fr" ? "fr" : "m";
  const draw = () => {
    const w = deck[i], fr = sideF() === "fr", showFr = fr !== flipped;
    box.innerHTML = `<div class="qq-ctop"><span class="seg"><button type="button" data-dir="fr" class="${QZ.dir === "fr" ? "on" : ""}">${t("dirFr")}</button><button type="button" data-dir="m" class="${QZ.dir === "m" ? "on" : ""}">${t("dirRu")}</button></span><button type="button" class="chip-t${QZ.shuf ? " on" : ""}" data-shuf>${f7("shuffle", "f7-in")}${t("qqShuffle")}</button><span class="qq-ctr">${i + 1} / ${deck.length}</span></div>
      <div class="qq-card${flipped ? " flipped" : ""}" role="button" tabindex="0" aria-label="${esc(t("qqFlip"))}">
        ${showFr ? `<div class="qq-word">${qzSayBtn(w.fr)}<span class="qq-fr fr big">${qzFrHtml(w.fr)}</span></div>${flipped ? qzExHtml(w) : ""}` : `<p class="qq-prompt">${esc(w.m)}</p>${flipped && qzExample(w) ? qzExHtml(w) : ""}`}
        ${flipped ? "" : `<span class="qq-hint">${t("qqFlip")}</span>`}
      </div>
      <div class="qq-cnav"><button type="button" class="btn sec" data-prev aria-label="${esc(t("qzPrev"))}">${ARL}</button><button type="button" class="btn sec" data-flip>${f7("arrow_2_circlepath", "f7-in")}${t("qqFlipBtn")}</button><button type="button" class="btn sec" data-next aria-label="${esc(t("qzNext"))}">${ARR}</button></div>
      <p class="qq-keys">${t("qqCardsKeys")}</p>`;
    qzBindSay(box);
    $(".qq-card", box).addEventListener("click", e=>{ if (e.target.closest("button")) return; flip(); });
    $("[data-flip]", box).addEventListener("click", flip);
    $("[data-prev]", box).addEventListener("click", ()=>go(-1));
    $("[data-next]", box).addEventListener("click", ()=>go(1));
    $("[data-shuf]", box).addEventListener("click", ()=>{ QZ.shuf = !QZ.shuf; saveQZ(); qzCards(box, id); });
    $$("[data-dir]", box).forEach(b=>b.addEventListener("click", ()=>{ QZ.dir = b.dataset.dir; saveQZ(); flipped = false; draw(); }));
  };
  const flip = () => { flipped = !flipped; draw(); if (flipped === (sideF() === "m")) speak(deck[i].fr); };
  const go = d => { i = (i + d + deck.length) % deck.length; flipped = false; draw(); if (sideF() === "fr") speak(deck[i].fr); };
  qzKeys(e=>{
    if (!document.body.contains(box) || box.hidden || /INPUT|TEXTAREA/.test((e.target || {}).tagName || "") || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === " ") { e.preventDefault(); flip(); } else if (e.key === "ArrowRight") { e.preventDefault(); go(1); } else if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
  });
  draw();
}
function qzMatch(box, id){
  clearInterval(qzTimer);
  const ws = shuffle(qWords(id).slice()).slice(0, 6);
  const tiles = shuffle(ws.flatMap((w, k)=>[{k, txt:w.fr, fr:true}, {k, txt:w.m, fr:false}]));
  let first = null, left = ws.length, t0 = 0;
  const best = S.quiz.best[id];
  box.innerHTML = `<div class="qq-ctop"><span class="qq-mh">${t("qqMatchHint")}</span><span class="qq-ctr" id="qqClock">0.0 s</span>${best ? `<span class="qq-ctr ok">${t("qqBest", String(best).replace(".", LANG === "ru" ? "," : "."))}</span>` : ""}</div><div class="qq-grid">${tiles.map((x, i)=>`<button type="button" class="qq-tile${x.fr ? " fr" : ""}" data-i="${i}">${x.fr ? qzFrHtml(x.txt) : esc(x.txt)}</button>`).join("")}</div>`;
  const clock = $("#qqClock", box);
  $$(".qq-tile", box).forEach(b=>b.addEventListener("click", ()=>{
    if (b.classList.contains("gone")) return;
    if (!t0) { t0 = performance.now(); qzTimer = setInterval(()=>{ clock.textContent = ((performance.now() - t0)/1000).toFixed(1) + " s"; }, 100); }
    const x = tiles[+b.dataset.i];
    if (x.fr) speak(x.txt);
    if (!first) { first = b; b.classList.add("sel"); return; }
    if (first === b) { b.classList.remove("sel"); first = null; return; }
    const y = tiles[+first.dataset.i];
    if (x.k === y.k && x.fr !== y.fr) {
      [b, first].forEach(el=>{ el.classList.remove("sel"); el.classList.add("ok"); setTimeout(()=>el.classList.add("gone"), 250); });
      first = null; left--;
      if (!left) {
        clearInterval(qzTimer); const s = +((performance.now() - t0)/1000).toFixed(1);
        if (!best || s < best) { S.quiz.best[id] = s; touch("quiz"); }
        setTimeout(()=>{ if (!document.body.contains(box)) return; box.innerHTML = `<div class="qq-mdone"><span class="qq-ico ok">${f7("timer")}</span><h3>${t("qqMatchDone", String(s).replace(".", LANG === "ru" ? "," : "."))}</h3><p class="qq-lead">${t("qqBest", String(S.quiz.best[id]).replace(".", LANG === "ru" ? "," : "."))}</p><button type="button" class="btn pri" data-again>${t("qqAgain")}</button></div>`; $("[data-again]", box).addEventListener("click", ()=>qzMatch(box, id)); }, 350);
      }
    } else {
      const a = first; [b, a].forEach(el=>el.classList.add("bad")); first = null;
      setTimeout(()=>[b, a].forEach(el=>el.classList.remove("bad", "sel")), 450);
    }
  }));
}

/* ссылка на ту же страницу Quizlet (например, «К наборам» после занятия) — hashchange не сработает, перерисовываем сами */
document.addEventListener("click", e=>{
  const a = e.target.closest && e.target.closest('a[href^="#quizlet"]'); if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
  if (decodeURIComponent(a.getAttribute("href")) !== decodeURIComponent(location.hash)) return;
  e.preventDefault(); route(false);
});
