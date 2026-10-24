/* =========================================================
   ESPAÑOL — справочник: «Как строить предложения: + / − / ?»
   ES_PARTS.push, строки через T(ru, en), «почему так» — поле w.
   Объяснения не сравнивают испанский с русским; английский — через EsEN().
   ESERR — из es-plus.js.
   ========================================================= */
ES_PARTS.push(() => {
const SUJ = T("(подлежащее)", "(subject)"), VERB = T("глагол", "verb"), REST = T("остальное", "the rest");
const tp = {
id:"esr-frase", sec:"ref", kind:T("С нуля", "From scratch"),
title:"Cómo construir una frase: + / − / ?", ru:T("Как строить предложения: утверждение, отрицание, вопрос", "Building sentences: statements, negatives, questions"), page:"",
theory:`
<p>${T("Любую фразу можно сказать в трёх видах: утвердить (+), отрицать (−) или спросить (?). В испанском это особенно просто: порядок слов почти не меняется — добавляется только <b>no</b> или знаки <b>¿ ?</b>.", "Any sentence comes in three forms: a statement (+), a negative (−) or a question (?). In Spanish it’s especially simple: the word order barely changes — you just add <b>no</b> or the marks <b>¿ ?</b>.")}</p>
${S3([
{k:"pos", sym:"+", h:T("Утверждение", "Statement"), f:[SUJ, VERB, REST], ex:[["Hablo español.", T("Я говорю по-испански.", "I speak Spanish.")], ["Ana vive en Madrid.", T("Ана живёт в Мадриде.", "Ana lives in Madrid.")], ["Tenemos dos hijos.", T("У нас двое детей.", "We have two children.")]]},
{k:"neg", sym:"−", h:T("Отрицание", "Negative"), f:[SUJ, "!no", VERB, REST], ex:[["No hablo francés.", T("Я не говорю по-французски.", "I don’t speak French.")], ["Ana no vive en Madrid.", T("Ана не живёт в Мадриде.", "Ana doesn’t live in Madrid.")], ["No tenemos hijos.", T("У нас нет детей.", "We don’t have children.")]]},
{k:"q", sym:"?", h:T("Вопрос", "Question"), f:["!¿", VERB, REST, "!?"], ex:[["¿Hablas español?", T("тот же порядок, голос поднимается ↗", "same order, the voice rises ↗")], ["¿Vive Ana en Madrid?", T("подлежащее можно поставить после глагола", "the subject can go after the verb")], ["¿Dónde vives?", T("вопросительное слово — первым, с тильдой", "the question word comes first, with an accent")]]}
])}
${RULE(T("Подлежащее можно не говорить", "You can drop the subject"), `<p>${T(`Окончание глагола уже показывает, кто действует: ${Es("hablo")} — я, ${Es("hablamos")} — мы, ${Es("vivís")} — вы. Поэтому ${Es("yo, tú, nosotros…")} обычно опускают и ставят только для контраста: ${Es("Yo soy de Lima, ¿y tú?")} С <b>usted</b> местоимение часто оставляют из вежливости: ${Es("¿Habla usted inglés?")}`, `The verb ending already shows who is doing it: ${Es("hablo")} — I, ${Es("hablamos")} — we, ${Es("vivís")} — you (pl.). So ${Es("yo, tú, nosotros…")} are usually dropped and only used for contrast: ${Es("Yo soy de Lima, ¿y tú?")} With <b>usted</b> the pronoun is often kept for politeness: ${Es("¿Habla usted inglés?")}`)}</p>`)}
${EsEN(T("В английском подлежащее обязательно: <i>I speak</i>. В испанском его работу делает окончание: <b>hablo</b> = <i>I speak</i>.", "In English the subject is required: <i>I speak</i>. In Spanish the ending does its job: <b>hablo</b> = <i>I speak</i>."))}

<h3>${T("Одна фраза — три формы", "One sentence, three forms")}</h3>
${TBL([S3TH("pos", "+", T("утверждение", "statement")), S3TH("neg", "−", T("отрицание", "negative")), S3TH("q", "?", T("вопрос", "question"))], [
[Es("Hablas inglés."), Es("No hablas inglés."), Es("¿Hablas inglés?")],
[Es("Tienes hermanos."), Es("No tienes hermanos."), Es("¿Tienes hermanos?")],
[Es("Ana es mexicana."), Es("Ana no es mexicana."), Es("¿Ana es mexicana?")],
[Es("Vivís en Barcelona."), Es("No vivís en Barcelona."), Es("¿Vivís en Barcelona?")],
[Es("Se llama Pablo."), Es("No se llama Pablo."), Es("¿Se llama Pablo?")],
[Es("Te gusta el café."), Es("No te gusta el café."), Es("¿Te gusta el café?")],
[Es("Hay farmacias en el barrio."), Es("No hay farmacias en el barrio."), Es("¿Hay farmacias en el barrio?")],
[Es("Tienes que llevar el pasaporte."), Es("No tienes que llevar el pasaporte."), Es("¿Tienes que llevar el pasaporte?")]
])}

<h3>${T("Отрицание: no — перед глаголом", "Negatives: no goes before the verb")}</h3>
${FXS(FX([`~${SUJ}`, "!no", `~${VERB}`]), FX(["!No", "me", "llamo", "Ana."], T("no стоит перед me / te / se / nos / os", "no goes before me / te / se / nos / os")), FX(["Mi hermano", "!no", "se", "llama", "Juan."]), FX(["!No", "me gusta", "el fútbol."]))}
${TBL([T("Правило", "Rule"), T("Пример", "Example")], [
[T("<b>no</b> — прямо перед глаголом", "<b>no</b> — right before the verb"), Es("Mis padres no viven en Madrid.")],
[T("если перед глаголом есть <b>me, te, se, nos, os</b> — no ещё раньше", "if <b>me, te, se, nos, os</b> come before the verb, no goes even earlier"), Es("No me llamo Carlos. ¿No te gusta?")],
[T("ответ «нет» + отрицание = <b>два no</b>", "the answer «no» + the negative = <b>two no’s</b>"), Es("– ¿Hablas alemán? – No, no hablo alemán.")],
[T("с <b>tener que</b> и <b>querer</b> no стоит перед первым глаголом", "with <b>tener que</b> and <b>querer</b> no goes before the first verb"), Es("No tengo que trabajar. No quiero ir.")]
])}
${EsNOTE(T(`Слова <b>nada</b> (ничего), <b>nadie</b> (никто), <b>nunca</b> (никогда) после глагола тоже требуют no: ${Es("No tengo nada. No como nunca carne.")} Если nunca стоит первым — no не нужно: ${Es("Nunca como carne.")}`, `The words <b>nada</b> (nothing), <b>nadie</b> (nobody), <b>nunca</b> (never) after the verb also need no: ${Es("No tengo nada. No como nunca carne.")} If nunca comes first, no isn’t needed: ${Es("Nunca como carne.")}`))}
${EsEN(T("Здесь испанский расходится с английским: <i>I don’t have anything</i>, но <b>No tengo nada</b> — двойное отрицание в испанском правильно.", "Here Spanish differs from English: <i>I don’t have anything</i>, but <b>No tengo nada</b> — a double negative is correct in Spanish."))}

<h3>${T("Вопрос: знаки и порядок слов", "Questions: marks and word order")}</h3>
${TBL([T("Способ", "Way"), T("Как строится", "How it’s built"), T("Пример", "Example")], [
[T("1. Интонация ↗", "1. Intonation ↗"), T("порядок как в утверждении, голос поднимается в конце", "same order as a statement, the voice rises at the end"), Es("¿Ana vive en Madrid?")],
[T("2. Глагол первым", "2. Verb first"), T("подлежащее после глагола (частый вариант с usted)", "the subject after the verb (common with usted)"), Es("¿Vive Ana en Madrid?") + "<br>" + Es("¿Habla usted inglés?")],
[T("3. Вопросительное слово", "3. Question word"), T("вопросительное слово → глагол → (подлежащее)", "question word → verb → (subject)"), Es("¿Dónde vive tu hermano?") + "<br>" + Es("¿Cuántos años tienes?")]
])}
${FXS(FX(["!¿Dónde", `~${VERB}`, `~${SUJ}`, "!?"], Es("¿Dónde vive tu hermano?")), FX(["!¿De dónde", "eres", "!?"], T("предлог идёт вместе с вопросительным словом", "the preposition goes with the question word")), FX(["!¿Con quién", "vives", "!?"]))}
${RULE(T("Знаки ¿ ¡ в начале", "¿ ¡ at the start"), `<p>${T(`Вопрос открывается перевёрнутым <b>¿</b> и закрывается <b>?</b>; восклицание — <b>¡ … !</b>. Знаки ставят там, где начинается сам вопрос: ${Es("Yo soy de Lima, ¿y tú?")} ${Es("¡Qué bonito!")}`, `A question opens with an upside-down <b>¿</b> and closes with <b>?</b>; an exclamation — <b>¡ … !</b>. The marks go where the question itself starts: ${Es("Yo soy de Lima, ¿y tú?")} ${Es("¡Qué bonito!")}`)}</p>`)}
${EsWARN(T(`Вопросительные слова пишутся с тильдой: <b>qué, cuál, dónde, cuándo, cómo, cuánto, quién, por qué</b>. Между вопросительным словом и глаголом подлежащее не ставят: ✗ <s>¿Dónde tu hermano vive?</s> → ✓ ${Es("¿Dónde vive tu hermano?")}`, `Question words carry an accent: <b>qué, cuál, dónde, cuándo, cómo, cuánto, quién, por qué</b>. Don’t put the subject between the question word and the verb: ✗ <s>¿Dónde tu hermano vive?</s> → ✓ ${Es("¿Dónde vive tu hermano?")}`))}

<h3>${T("Как ответить: sí / no", "How to answer: sí / no")}</h3>
${TBL([T("Вопрос", "Question"), T("Да", "Yes"), T("Нет", "No")], [
[Es("¿Hablas inglés?"), Es("Sí, hablo inglés."), Es("No, no hablo inglés.")],
[Es("¿Tienes coche?"), Es("Sí, tengo coche."), Es("No, no tengo coche.")],
[Es("¿No eres de aquí?"), Es("Sí, soy de aquí."), Es("No, soy de Lima.")]
])}
<p>${T(`<b>sí</b> (да) — с тильдой; <b>si</b> без тильды значит «если». На вопрос с no отвечают по смыслу: <b>sí</b> — если утверждаешь, <b>no</b> — если отрицаешь.`, `<b>sí</b> (yes) has an accent; <b>si</b> without one means «if». A question with no is answered by meaning: <b>sí</b> if you confirm, <b>no</b> if you deny.`)}</p>
${EsEN(T("Помощника <i>do / does</i> нет: <i>Do you speak English?</i> → <b>¿Hablas inglés?</b>; <i>No, I don’t</i> → <b>No, no hablo</b>: первое no — ответ, второе — отрицание.", "There’s no helper <i>do / does</i>: <i>Do you speak English?</i> → <b>¿Hablas inglés?</b>; <i>No, I don’t</i> → <b>No, no hablo</b>: the first no is the answer, the second is the negative."))}
${ESERR([
["Hablo no francés.", "No hablo francés.", T("no — перед глаголом.", "no goes before the verb.")],
["Me no llamo Ana.", "No me llamo Ana.", T("no — перед me / te / se.", "no goes before me / te / se.")],
["Dónde vives?", "¿Dónde vives?", T("В начале вопроса — перевёрнутый ¿.", "A question starts with an upside-down ¿.")],
["¿Donde vives?", "¿Dónde vives?", T("Вопросительные слова пишутся с тильдой.", "Question words carry an accent.")],
["¿Dónde tu hermano vive?", "¿Dónde vive tu hermano?", T("После вопросительного слова — сразу глагол.", "The verb comes right after the question word.")],
["– ¿Hablas alemán? – No, hablo alemán.", "– No, no hablo alemán.", T("Нужно два no: ответ и отрицание.", "You need two no’s: the answer and the negative.")]
])}
`,
ex:[
{t:"sort", h:T("Утверждение, отрицание или вопрос?", "Statement, negative or question?"), cats:[T("+ утверждение", "+ statement"), T("− отрицание", "− negative"), T("? вопрос", "? question")], w:[
"Отрицание узнаём по no перед глаголом (или перед me / te / se); вопрос — по знакам ¿ ?.",
"A negative has no before the verb (or before me / te / se); a question has the marks ¿ ?."], items:[["Vivo en Sevilla.", 0], ["No me gusta el té.", 1], ["¿Tienes hermanos?", 2], ["Somos estudiantes.", 0], ["Mi padre no habla inglés.", 1], ["¿De dónde eres?", 2], ["No hay metro en mi ciudad.", 1], ["¿Te gusta bailar?", 2], ["Hay muchos museos.", 0], ["No tenemos clase hoy.", 1]]},
{t:"fill", h:T("Сделай отрицание", "Make it negative"), w:[
"no ставится прямо перед глаголом, а если перед глаголом есть me / te / se / nos / os — перед ними: No me llamo…, No nos gusta…",
"no goes right before the verb, and if me / te / se / nos / os come first — before them: No me llamo…, No nos gusta…"], items:[
{q:"Hablo alemán. →", a:["No hablo alemán"], long:true},
{q:"Me llamo Lucía. →", a:["No me llamo Lucía"], long:true},
{q:"Pedro vive en Bogotá. →", a:["Pedro no vive en Bogotá"], long:true},
{q:"Nos gusta el fútbol. →", a:["No nos gusta el fútbol"], long:true},
{q:"Tenéis que estudiar. →", a:["No tenéis que estudiar"], long:true},
{q:"Hay un supermercado cerca. →", a:["No hay un supermercado cerca", "No hay supermercado cerca", "No hay ningún supermercado cerca"], long:true}
]},
{t:"mc", h:T("Выбери правильный вопрос", "Choose the correct question"), w:[
"¿ в начале, ? в конце; вопросительное слово первым и с тильдой; после него сразу глагол; предлог стоит перед вопросительным словом: ¿De dónde…?",
"¿ at the start, ? at the end; the question word comes first and has an accent; the verb follows it directly; a preposition goes before the question word: ¿De dónde…?"], items:[
{q:T("Где живёт твой брат?", "Where does your brother live?"), o:["¿Dónde vive tu hermano?", "¿Dónde tu hermano vive?", "Dónde vive tu hermano?"], a:0},
{q:T("Вы говорите по-английски? (usted)", "Do you speak English? (usted)"), o:["¿Habla usted inglés?", "¿Hablas usted inglés?", "¿Usted no habla inglés"], a:0},
{q:T("Откуда ты?", "Where are you from?"), o:["¿De dónde eres?", "¿Dónde eres de?", "¿De donde eres?"], a:0, e:T("Предлог de идёт первым, dónde — с тильдой.", "The preposition de comes first, dónde has an accent.")},
{q:T("Сколько тебе лет?", "How old are you?"), o:["¿Cuántos años tienes?", "¿Cuántos años eres?", "¿Tienes cuántos años?"], a:0},
{q:T("Что ты делаешь?", "What are you doing?"), o:["¿Qué haces?", "¿Que haces?", "¿Qué tú haces?"], a:0}
]},
{t:"order", h:T("Собери фразу", "Build the sentence"), w:[
"+ : (подлежащее) + глагол + остальное. − : no перед глаголом и перед me / te / se. ? : ¿ + вопросительное слово + глагол + (подлежащее) ?",
"+ : (subject) + verb + the rest. − : no before the verb and before me / te / se. ? : ¿ + question word + verb + (subject) ?"], items:[
{s:"No me llamo Carlos.", ru:T("Меня зовут не Карлос.", "My name isn’t Carlos.")},
{s:"¿Dónde vive tu hermana?", ru:T("Где живёт твоя сестра?", "Where does your sister live?")},
{s:"Mis padres no viven en Madrid.", ru:T("Мои родители не живут в Мадриде.", "My parents don’t live in Madrid.")},
{s:"¿Tienes que trabajar mañana?", ru:T("Тебе завтра надо работать?", "Do you have to work tomorrow?")},
{s:"No, no tengo hermanos.", ru:T("Нет, у меня нет братьев и сестёр.", "No, I don’t have any brothers or sisters.")}
]},
{t:"mc", h:T("Как ответить?", "How do you answer?"), w:[
"«Нет» + отрицание = два no: No, no hablo. «Да» — sí с тильдой. no всегда перед me / te / se и перед глаголом.",
"«No» + the negative = two no’s: No, no hablo. «Yes» is sí with an accent. no always goes before me / te / se and the verb."], items:[
{q:"– ¿Hablas alemán? – …", o:["No, no hablo alemán.", "No, hablo alemán.", "No hablo no alemán."], a:0},
{q:"– ¿Eres de aquí? – …", o:["Sí, soy de aquí.", "Si, soy de aquí.", "Sí, no soy de aquí."], a:0, e:T("sí (да) — с тильдой; si — «если».", "sí (yes) has an accent; si means «if».")},
{q:"– ¿Te gusta el café? – …", o:["No, no me gusta.", "No, me no gusta.", "No me gusta no."], a:0},
{q:"– ¿Tienes coche? – …", o:["No, no tengo coche.", "No tengo no coche.", "No, tengo no coche."], a:0}
]},
{t:"tf", h:T("Правда или нет?", "True or false?"), w:[
"Вопрос: ¿ … ?, вопросительные слова с тильдой, после них сразу глагол. Отрицание: no перед глаголом; в ответе — два no. Подлежащее часто опускают.",
"Questions: ¿ … ?, question words have an accent and the verb follows them directly. Negatives: no before the verb; two no’s in an answer. The subject is often dropped."], items:[
{q:T("Вопрос в испанском начинается со знака ¿.", "A Spanish question starts with ¿."), a:true},
{q:T("no ставится после глагола: «Hablo no inglés».", "no goes after the verb: “Hablo no inglés”."), a:false, e:"No hablo inglés."},
{q:T("Подлежащее (yo, tú…) часто можно не говорить.", "The subject (yo, tú…) can often be left out."), a:true},
{q:T("dónde, qué, cuándo в вопросе пишутся с тильдой.", "dónde, qué, cuándo carry an accent in questions."), a:true},
{q:T("«No, no hablo» — ошибка: хватит одного no.", "“No, no hablo” is wrong: one no is enough."), a:false, e:T("Первое no — ответ, второе — отрицание.", "The first no is the answer, the second is the negative.")},
{q:"¿Dónde tu hermano vive?" + T(" — правильный порядок слов.", " — correct word order."), a:false, e:"¿Dónde vive tu hermano?"}
]}
]};
if (!WHY[tp.id]) WHY[tp.id] = tp.ex.map(e=>e.w || ["", ""]);
return [tp];
});
