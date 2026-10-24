/* =========================================================
   ESPAÑOL — шпаргалка: все главные таблицы юнитов 1–3
   ES_CHEAT("ru") / ES_CHEAT("en"). Примечания не сравнивают
   испанский с русским.
   ========================================================= */
function ES_CHEAT(L) {
  const keep = ESL; ESL = L;
  try {
    const C = (h, tbl, note) => `<section class="ch"><h3>${h}</h3>${tbl}${note ? `<p class="ch-n">${note}</p>` : ""}</section>`;
    const P = ["yo", "tú", T("él, ella, Ud.", "él, ella, Ud."), "nosotros", "vosotros", T("ellos, Uds.", "ellos, Uds.")];
    const V = (verbs, rows) => TBL(["", ...verbs], P.map((p, k) => [p, ...rows.map(r => r[k])]));
    return `<div class="cheat">
${C("+ · − · ?", TBL(["", ""], [[T("<b>+</b> (подлежащее) + глагол", "<b>+</b> (subject) + verb"), "Hablas inglés."], [T("<b>−</b> no + глагол", "<b>−</b> no + verb"), "No hablas inglés."], ["<b>?</b> ¿ … ?", "¿Hablas inglés?"], [T("<b>?</b> слово + глагол", "<b>?</b> word + verb"), "¿Dónde vive tu hermano?"]]),
  T("no — перед глаголом и перед me / te / se. Ответ «нет»: <b>No, no hablo.</b>", "no goes before the verb and before me / te / se. Answering «no»: <b>No, no hablo.</b>"))}
${C("ser · tener", V(["ser", "tener"], [["soy", "eres", "es", "somos", "sois", "son"], ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"]]),
  T("Возраст — <b>tener</b>: tengo 20 años. Профессия — <b>ser</b> без артикля: soy profesora.", "Age uses <b>tener</b>: tengo 20 años. Jobs use <b>ser</b> with no article: soy profesora."))}
${C(T("Presente: окончания", "Presente: endings"), V(["habl-ar", "com-er", "viv-ir"], [["-o", "-as", "-a", "-amos", "-áis", "-an"], ["-o", "-es", "-e", "-emos", "-éis", "-en"], ["-o", "-es", "-e", "-imos", "-ís", "-en"]]),
  T("-er и -ir отличаются только в nosotros и vosotros: comemos / vivimos, coméis / vivís.", "-er and -ir differ only in nosotros and vosotros: comemos / vivimos, coméis / vivís."))}
${C("estar · ir", V(["estar", "ir"], [["estoy", "estás", "está", "estamos", "estáis", "están"], ["voy", "vas", "va", "vamos", "vais", "van"]]),
  T("<b>ir a</b> + место: voy a Madrid (a + el = <b>al</b>: voy al cine).", "<b>ir a</b> + place: voy a Madrid (a + el = <b>al</b>: voy al cine)."))}
${C("llamarse · hacer", V(["llamarse", "hacer"], [["me llamo", "te llamas", "se llama", "nos llamamos", "os llamáis", "se llaman"], ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"]]),
  T("¿Cómo te llamas? — Me llamo Ana. ¿Qué haces? — Estudio.", "¿Cómo te llamas? — Me llamo Ana. ¿Qué haces? — Estudio."))}
${C(T("«Ботинок»: querer · poder", "The “boot”: querer · poder"), V(["querer", "poder"], [["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"], ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"]]),
  T("Гласная корня меняется везде, кроме nosotros и vosotros. <b>querer + инфинитив</b>: quiero viajar.", "The stem vowel changes everywhere except nosotros and vosotros. <b>querer + infinitive</b>: quiero viajar."))}
${C(T("Артикли", "Articles"), TBL(["", T("м. р.", "masc."), T("ж. р.", "fem.")], [[T("опред. ед.", "def. sing."), "el", "la"], [T("опред. мн.", "def. pl."), "los", "las"], [T("неопред. ед.", "indef. sing."), "un", "una"], [T("неопред. мн.", "indef. pl."), "unos", "unas"]]),
  T("a + el = <b>al</b>, de + el = <b>del</b>. С <b>la</b> не сливаются: a la, de la.", "a + el = <b>al</b>, de + el = <b>del</b>. No merging with <b>la</b>: a la, de la."))}
${C(T("Род и число", "Gender and number"), TBL([T("Окончание", "Ending"), T("Род", "Gender"), T("Пример", "Example")], [["-o", T("м.", "m."), "el libro"], ["-a", T("ж.", "f."), "la playa"], ["-ción, -dad", T("ж.", "f."), "la canción, la ciudad"], ["-aje", T("м.", "m."), "el viaje"], ["-e", T("любой", "either"), "el coche, la noche"]]),
  T("Исключения: <b>el</b> día, idioma, problema, mapa · <b>la</b> mano, foto, moto, radio. Мн. ч.: гласная + <b>s</b> (libros), согласная + <b>es</b> (ciudades), z → <b>ces</b> (lápices).", "Exceptions: <b>el</b> día, idioma, problema, mapa · <b>la</b> mano, foto, moto, radio. Plural: vowel + <b>s</b> (libros), consonant + <b>es</b> (ciudades), z → <b>ces</b> (lápices)."))}
${C(T("Национальности", "Nationalities"), TBL([T("Тип", "Type"), T("он", "he"), T("она", "she")], [["-o → -a", "italiano", "italiana"], [T("согл. + a", "cons. + a"), "francés", "francesa"], ["", "español", "española"], [T("одна форма", "one form"), "belga, marroquí", "belga, marroquí"], ["-ense", "canadiense", "canadiense"]]),
  T("Тильда исчезает в женском роде: alemán → alemana, inglés → inglesa. Пишутся со строчной буквы.", "The accent disappears in the feminine: alemán → alemana, inglés → inglesa. Written in lower case."))}
${C("ser · estar · hay", TBL(["", T("Вопрос", "Question"), T("Пример", "Example")], [["ser", T("какой? что это?", "what like? what is it?"), "Perú es muy bonito."], ["estar", T("где находится?", "where is it?"), "Tikal está en Guatemala."], ["hay", T("что там есть?", "what is there?"), "En Chile hay muchas montañas."]]),
  T("<b>hay</b> + un / una / число / без артикля. <b>el / la</b> + está: El museo está en Bilbao. ✗ hay el…", "<b>hay</b> + un / una / a number / no article. <b>el / la</b> + está: El museo está en Bilbao. ✗ hay el…"))}
${C("muy · mucho", TBL(["", "", T("Пример", "Example")], [[T("+ прилаг.", "+ adj."), "muy", "muy grande"], [T("+ сущ.", "+ noun"), "mucho / -a / -os / -as", "muchas montañas"], [T("глагол +", "verb +"), "mucho", "llueve mucho"]]),
  T("Превосходная: <b>el / la + сущ. + más + прилаг. + de</b>: la ciudad más grande de Paraguay.", "Superlative: <b>el / la + noun + más + adj. + de</b>: la ciudad más grande de Paraguay."))}
${C(T("Вопросительные слова", "Question words"), TBL(["", ""], [["¿Qué?", T("что? / какой + сущ.", "what? / which + noun")], ["¿Cuál? ¿Cuáles?", T("какой из (с ser)", "which one (with ser)")], ["¿Quién? ¿Quiénes?", T("кто?", "who?")], ["¿Dónde?", T("где?", "where?")], ["¿Cómo?", T("как? какой?", "how? what like?")], ["¿Cuándo?", T("когда?", "when?")], ["¿Cuántos? ¿Cuántas?", T("сколько?", "how many?")], ["¿Por qué?", T("почему?", "why?")]]),
  T("Всегда с тильдой. ¿<b>Cuál</b> es la capital…? — не ¿Qué es…? (это просьба дать определение).", "Always with an accent. ¿<b>Cuál</b> es la capital…? — not ¿Qué es…? (that asks for a definition)."))}
${C(T("Причина и цель", "Reason and goal"), TBL(["", T("После", "Followed by"), T("Пример", "Example")], [["por", T("сущ.", "noun"), "por mi trabajo"], ["para", T("инфинитив", "infinitive"), "para viajar"], ["porque", T("глагол", "verb"), "porque trabajo aquí"]]),
  T("Вопрос — <b>¿Por qué?</b> (два слова, тильда), ответ — <b>porque</b> (одно слово).", "Question: <b>¿Por qué?</b> (two words, accent); answer: <b>porque</b> (one word)."))}
${C(T("Числа", "Numbers"), TBL(["", ""], [["11–15", "once, doce, trece, catorce, quince"], ["16–19", "dieciséis, diecisiete, dieciocho, diecinueve"], ["21–29", "veintiuno, veintidós, veintitrés…"], ["30, 31", "treinta, treinta y uno"], ["40–90", "cuarenta, cincuenta, sesenta, setenta, ochenta, noventa"], ["100", "cien"]]),
  T("16–29 — одним словом, с 31 — через <b>y</b>: cuarenta y cinco. Тильда: dieciséis, veintidós, veintitrés, veintiséis.", "16–29 are one word; from 31 use <b>y</b>: cuarenta y cinco. Accents: dieciséis, veintidós, veintitrés, veintiséis."))}
${C(T("Дата", "Dates"), TBL(["", ""], [["¿Qué fecha es hoy?", "Hoy es 5 de mayo. / Estamos a 5 de mayo."], ["¿Qué día es hoy?", "Hoy es lunes."], ["¿Cuándo es tu cumpleaños?", "Es el 12 de octubre."], [T("дни", "days"), "lunes, martes, miércoles, jueves, viernes, sábado, domingo"], [T("сезоны", "seasons"), "la primavera, el verano, el otoño, el invierno"]]),
  T("Дни и месяцы — со строчной буквы. <b>el lunes</b> = в понедельник, <b>los lunes</b> = по понедельникам.", "Days and months are lower case. <b>el lunes</b> = on Monday, <b>los lunes</b> = on Mondays."))}
${C(T("Произношение", "Pronunciation"), TBL(["", ""], [["c + e, i · z", "[θ] cine, zapato"], ["c + a, o, u · qu", "[k] casa, queso"], ["g + e, i · j", T("[x] — хриплое «х»: gente, jamón", "[x] — a rasping h: gente, jamón")], ["gu + e, i", "[g] guitarra"], ["h", T("не читается: hola", "silent: hola")], ["ll · y", T("[j]: llamar, yo", "[j]: llamar, yo")], ["ñ", "[ɲ] España"], ["r- · rr", T("раскатистое: rosa, perro", "rolled: rosa, perro")]]),
  T("Ударение: на -a/-e/-o/-n/-s — предпоследний слог, иначе последний. Всё остальное — тильда: café, inglés.", "Stress: words ending in a vowel, -n or -s stress the second-to-last syllable, others the last. Anything else gets an accent: café, inglés."))}
</div>`;
  } finally { ESL = keep; }
}
