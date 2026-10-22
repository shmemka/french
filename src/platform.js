/* =========================================================
   PLATFORM: профиль и аватар, вход/регистрация, онбординг,
   магазин, оформление, личный кабинет
   ========================================================= */
Object.assign(I18N.ru, {
  shop:"Магазин", shopSub:"Трать монеты на аватарки, рамки, фоны, курсоры и цветовые темы. Монеты дают за правильные ответы, новые уровни и стрик.",
  shopCats:{emoji:"Аватарки", bg:"Фоны аватарки", frame:"Рамки", theme:"Цветовые темы", pattern:"Фоны страницы", cursor:"Курсоры"},
  buy:"Купить", buyQ:p=>`Купить за ${p}?`, owned:"Выбрать", equipped:"Выбрано", free:"Бесплатно", needMore:n=>`Не хватает ${n} 🪙`, bought:n=>`Куплено: ${n}`, balance:"Баланс",
  gateUpH:"Создай аккаунт", gateUpSub:"Почта и пароль — и можно начинать. Прогресс будет на всех твоих устройствах.", gateInH:"С возвращением!", gateInSub:"Войди, чтобы продолжить с того же места.",
  gateLoading:"Загружаем твой прогресс…", gateRetry:"Повторить", gateErr:"Не получилось связаться с сервером. Проверь интернет (и VPN, если он нужен).",
  obH:"Давай познакомимся", obSub:"Как тебя зовут и как будет выглядеть твоя аватарка? Всё это можно поменять позже.", obName:"Имя", obNamePh:"Например, Влад", obBg:"Фон", obEmoji:"Эмодзи", obGo:"Начать", obNeedName:"Напиши, как тебя зовут.", obBonus:"Добро пожаловать! Держи 50 🪙 на первые покупки.",
  accTabs:{acc:["Аккаунт","Имя, аватар, почта и пароль"], set:["Настройки","Язык, обучение и сброс"], prog:["Прогресс","Темы, уровни и контрольные"], look:["Оформление","Тема, цвета и украшения"]},
  profileH:"Профиль", nameSave:"Сохранить", nameSaved:"Имя сохранено", avatarH:"Аватар", emailL:"Почта", securityH:"Безопасность",
  langH:"Язык интерфейса", courseH:"Курс по умолчанию", fxH:"Анимации начисления очков", fxOn:"Показывать", fxOff:"Не показывать", newWordsH:"Новых слов в день (Quizlet)", resetH:"Сброс прогресса",
  themeH:"Тема", themeModes:{light:"Светлая", dark:"Тёмная", system:"Системная"}, paletteH:"Цветовая тема", frameH:"Рамка аватарки", patternH:"Фон страницы", cursorH:"Курсор", toShop:"Больше — в магазине →", locked:"в магазине",
  levelH:"Уровень и опыт", streakH:"Стрик", bestStreak:n=>`рекорд: ${n}`, bestStreakL:"рекорд стрика", calH:"Активность за 8 недель", courseSw:"Курс",
  bankL:"Банк заданий"
});
Object.assign(I18N.en, {
  shop:"Shop", shopSub:"Spend coins on avatars, frames, backgrounds, cursors and colour themes. You earn coins for correct answers, new levels and your streak.",
  shopCats:{emoji:"Avatars", bg:"Avatar backgrounds", frame:"Frames", theme:"Colour themes", pattern:"Page backgrounds", cursor:"Cursors"},
  buy:"Buy", buyQ:p=>`Buy for ${p}?`, owned:"Use", equipped:"In use", free:"Free", needMore:n=>`${n} 🪙 short`, bought:n=>`Bought: ${n}`, balance:"Balance",
  gateUpH:"Create your account", gateUpSub:"An e-mail and a password — and you're in. Your progress will be on all your devices.", gateInH:"Welcome back!", gateInSub:"Sign in to continue where you left off.",
  gateLoading:"Loading your progress…", gateRetry:"Try again", gateErr:"Couldn't reach the server. Check your internet connection (and VPN if you need one).",
  obH:"Let's get to know each other", obSub:"What's your name and what should your avatar look like? You can change all of this later.", obName:"Name", obNamePh:"e.g. Vlad", obBg:"Background", obEmoji:"Emoji", obGo:"Let's go", obNeedName:"Tell us your name.", obBonus:"Welcome! Here are 50 🪙 for your first purchases.",
  accTabs:{acc:["Account","Name, avatar, e-mail and password"], set:["Settings","Language, learning and reset"], prog:["Progress","Topics, levels and tests"], look:["Appearance","Theme, colours and extras"]},
  profileH:"Profile", nameSave:"Save", nameSaved:"Name saved", avatarH:"Avatar", emailL:"E-mail", securityH:"Security",
  langH:"Interface language", courseH:"Default course", fxH:"Points animations", fxOn:"Show", fxOff:"Hide", newWordsH:"New words per day (Quizlet)", resetH:"Reset progress",
  themeH:"Theme", themeModes:{light:"Light", dark:"Dark", system:"System"}, paletteH:"Colour theme", frameH:"Avatar frame", patternH:"Page background", cursorH:"Cursor", toShop:"More in the shop →", locked:"in the shop",
  levelH:"Level and XP", streakH:"Streak", bestStreak:n=>`best: ${n}`, bestStreakL:"best streak", calH:"Activity over 8 weeks", courseSw:"Course",
  bankL:"Exercise bank"
});

/* ---------- каталог ---------- */
const CAT = {
  emoji:[
    ...["😀","😎","🙂","🤓","🦊","🐱","🐶","🐻","🌸","⭐","📚","🎧","🍀","🌙","☕","🎨"].map(v=>({id:v, v, p:0})),
    {id:"🐼", v:"🐼", p:40}, {id:"🐸", v:"🐸", p:40}, {id:"🥐", v:"🥐", p:40}, {id:"🌶️", v:"🌶️", p:40}, {id:"🦋", v:"🦋", p:50}, {id:"🐙", v:"🐙", p:50},
    {id:"🗼", v:"🗼", p:50}, {id:"🎸", v:"🎸", p:50}, {id:"🦁", v:"🦁", p:60}, {id:"🚀", v:"🚀", p:60}, {id:"💃", v:"💃", p:60}, {id:"🧠", v:"🧠", p:60},
    {id:"🦖", v:"🦖", p:70}, {id:"🌈", v:"🌈", p:70}, {id:"🦄", v:"🦄", p:80}, {id:"🔥", v:"🔥", p:90}, {id:"👑", v:"👑", p:120}, {id:"🐉", v:"🐉", p:150}, {id:"💎", v:"💎", p:200}
  ],
  bg:[
    {id:"peach", css:"#ffd9c2", p:0}, {id:"mint", css:"#c8f0dc", p:0}, {id:"sky", css:"#cfe3ff", p:0}, {id:"lavender", css:"#e2d6ff", p:0}, {id:"lemon", css:"#fff1b8", p:0}, {id:"rose", css:"#ffd3e1", p:0},
    {id:"sunset", css:"linear-gradient(135deg,#ff9a8b,#ff6a88 55%,#ffcc70)", p:60}, {id:"ocean", css:"linear-gradient(135deg,#43cbff,#9708cc)", p:60}, {id:"forest", css:"linear-gradient(135deg,#a8e063,#2f9e61)", p:60},
    {id:"candy", css:"linear-gradient(135deg,#f6d5f7,#fbe9d7 50%,#a1c4fd)", p:80}, {id:"aurora", css:"linear-gradient(135deg,#00c9a7,#845ec2 60%,#ff6f91)", p:90}, {id:"night", css:"radial-gradient(circle at 30% 25%,#5b5fc7,#1b1d3a 70%)", p:100},
    {id:"gold", css:"linear-gradient(135deg,#fceabb,#f8b500)", p:150}, {id:"rainbow", css:"conic-gradient(from 0deg,#ff6b6b,#ffd93d,#6bcB77,#4d96ff,#c77dff,#ff6b6b)", p:200}
  ],
  frame:[
    {id:"", p:0}, {id:"leaf", p:120}, {id:"silver", p:100}, {id:"gold", p:180}, {id:"sparkle", p:220}, {id:"rainbow", p:250}, {id:"flame", p:300}
  ],
  theme:[
    {id:"", p:0, sw:["#3446d0","#b9520f","#d23466"]},
    {id:"mint", p:150, sw:["#0f8a6a","#d4f5e9","#ff7a59"]}, {id:"lavender", p:150, sw:["#6c4fd8","#ece6ff","#e05297"]}, {id:"cherry", p:150, sw:["#c2185b","#fde3ec","#ff8a3d"]},
    {id:"ocean", p:180, sw:["#0b72b9","#dff0ff","#00a3a3"]}, {id:"forest", p:180, sw:["#2e7d32","#e5f4e3","#c77d1a"]}, {id:"midnight", p:220, sw:["#5c6bff","#1a1c3a","#ff6fb5"]}, {id:"gold", p:300, sw:["#a46b00","#fff3d1","#d9480f"]}
  ],
  pattern:[{id:"", p:0}, {id:"dots", p:80}, {id:"grid", p:80}, {id:"waves", p:120}, {id:"confetti", p:140}, {id:"stars", p:160}],
  cursor:[{id:"", p:0}, {id:"dot", p:60}, {id:"heart", p:90}, {id:"star", p:90}, {id:"paw", p:100}, {id:"pen", p:120}]
};
const NAMES = {
  ru:{frame:{"":"Без рамки", leaf:"Листья", silver:"Серебро", gold:"Золото", sparkle:"Искры", rainbow:"Радуга", flame:"Пламя"}, theme:{"":"Как у курса", mint:"Мята", lavender:"Лаванда", cherry:"Вишня", ocean:"Океан", forest:"Лес", midnight:"Полночь", gold:"Золото"}, pattern:{"":"Без узора", dots:"Точки", grid:"Клетка", waves:"Волны", confetti:"Конфетти", stars:"Звёзды"}, cursor:{"":"Обычный", dot:"Точка", heart:"Сердце", star:"Звезда", paw:"Лапка", pen:"Перо"}, bg:{peach:"Персик", mint:"Мята", sky:"Небо", lavender:"Лаванда", lemon:"Лимон", rose:"Роза", sunset:"Закат", ocean:"Океан", forest:"Лес", candy:"Конфета", aurora:"Сияние", night:"Ночь", gold:"Золото", rainbow:"Радуга"}},
  en:{frame:{"":"No frame", leaf:"Leaves", silver:"Silver", gold:"Gold", sparkle:"Sparkles", rainbow:"Rainbow", flame:"Flame"}, theme:{"":"Course colours", mint:"Mint", lavender:"Lavender", cherry:"Cherry", ocean:"Ocean", forest:"Forest", midnight:"Midnight", gold:"Gold"}, pattern:{"":"No pattern", dots:"Dots", grid:"Grid", waves:"Waves", confetti:"Confetti", stars:"Stars"}, cursor:{"":"Default", dot:"Dot", heart:"Heart", star:"Star", paw:"Paw", pen:"Feather"}, bg:{peach:"Peach", mint:"Mint", sky:"Sky", lavender:"Lavender", lemon:"Lemon", rose:"Rose", sunset:"Sunset", ocean:"Ocean", forest:"Forest", candy:"Candy", aurora:"Aurora", night:"Night", gold:"Gold", rainbow:"Rainbow"}}
};
const itemName = (cat, id) => cat === "emoji" ? id : (NAMES[LANG][cat] || {})[id] || id;
const catItem = (cat, id) => CAT[cat].find(x=>x.id === id);
const owns = (cat, id) => { const it = catItem(cat, id); return !!it && (it.p === 0 || S.prof.own.includes(cat + ":" + id)); };
const bgCss = id => (catItem("bg", id) || CAT.bg[0]).css;
function avHTML(prof, size, override){
  const p = Object.assign({}, prof, override || {});
  const emoji = p.emoji || "🙂", fr = p.eq && p.eq.frame ? " fr-" + p.eq.frame : "";
  return `<span class="av av-${size || "m"}${fr}" style="--avbg:${bgCss(p.bg || "peach")}"><span class="av-e">${emoji}</span></span>`;
}

/* ---------- оформление: тема, палитра, узор, курсор ---------- */
const PAL = {
  mint:{l:["#0f8a6a","#0a6a51","#d7f5ea","#ff7a59","#ffe6df","#f3faf7","#e6f4ee","#d6ece2"], d:["#4fd6ae","#8aeccd","#173a31","#ff9d84","#46261f","#0d1714","#1d2c27","#26392f"]},
  lavender:{l:["#6c4fd8","#5236b5","#ece6ff","#e05297","#fce4f0","#f6f4fd","#ece8fb","#e1dbf7"], d:["#a995ff","#c8bcff","#2c2457","#ff86bd","#45203a","#121026","#1f1b3d","#29234f"]},
  cherry:{l:["#c2185b","#960f44","#fde3ec","#ff8a3d","#ffeadb","#fdf5f7","#f9e8ee","#f3d9e2"], d:["#ff7aa8","#ffaac8","#4a1a2c","#ffa66b","#47291a","#1a0f13","#2b1820","#38202a"]},
  ocean:{l:["#0b72b9","#08568d","#dff0ff","#00a3a3","#d9f6f6","#f2f8fc","#e4f0f8","#d4e6f3"], d:["#5bb6ff","#9ad2ff","#13324d","#3fd6d6","#123a3a","#0b131b","#16222e","#1d2d3c"]},
  forest:{l:["#2e7d32","#1f5c23","#e5f4e3","#c77d1a","#fbecd6","#f5f9f3","#e8f1e5","#dae8d6"], d:["#7fd283","#aee6b0","#1d3a1f","#f0a64a","#45311a","#0f160f","#1b261b","#233323"]},
  midnight:{l:["#4f5bd5","#3a44a8","#e6e8ff","#e0559b","#fce3ef","#f4f5fb","#e9ebf7","#dde0f2"], d:["#8b96ff","#b6bdff","#262b5c","#ff6fb5","#471f37","#0b0c1d","#171933","#20234a"]},
  gold:{l:["#a46b00","#7a5000","#fff1cf","#d9480f","#ffe6d9","#fdfaf2","#f7f0de","#efe4c9"], d:["#ffc94d","#ffdc8a","#40310f","#ff8a5c","#472316","#15120a","#262012","#332b18"]}
};
const PAT = {
  dots:"radial-gradient(color-mix(in srgb,var(--encre) 13%,transparent) 1.4px,transparent 1.6px) 0 0/22px 22px",
  grid:"linear-gradient(color-mix(in srgb,var(--encre) 7%,transparent) 1px,transparent 1px) 0 0/28px 28px,linear-gradient(90deg,color-mix(in srgb,var(--encre) 7%,transparent) 1px,transparent 1px) 0 0/28px 28px",
  waves:`url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40"><path d="M0 20 Q15 8 30 20 T60 20 T90 20 T120 20" fill="none" stroke="#888" stroke-opacity=".13" stroke-width="2"/></svg>')}") 0 0/120px 40px`,
  confetti:`url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140"><g opacity=".22"><rect x="12" y="18" width="10" height="4" rx="2" fill="#ff6b6b" transform="rotate(25 17 20)"/><rect x="80" y="30" width="10" height="4" rx="2" fill="#4d96ff" transform="rotate(-30 85 32)"/><circle cx="45" cy="80" r="3" fill="#ffd93d"/><rect x="100" y="95" width="10" height="4" rx="2" fill="#6bcb77" transform="rotate(60 105 97)"/><circle cx="120" cy="20" r="2.5" fill="#c77dff"/><circle cx="20" cy="120" r="2.5" fill="#ff9f43"/></g></svg>')}") 0 0/140px 140px`,
  stars:`url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="110" height="110"><g fill="#f5b300" fill-opacity=".25"><path d="M20 10l2.4 5 5.4.7-4 3.7 1 5.3-4.8-2.6-4.8 2.6 1-5.3-4-3.7 5.4-.7z"/><path d="M80 60l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z"/><circle cx="60" cy="25" r="1.6"/><circle cx="25" cy="85" r="1.6"/></g></svg>')}") 0 0/110px 110px`
};
const CUR = {
  dot:['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="6" fill="#ff7a59" stroke="#fff" stroke-width="2.5"/></svg>', 12, 12],
  heart:['<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path d="M13 22s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 21 11c0 6-8 11-8 11z" fill="#ff4d7e" stroke="#fff" stroke-width="2"/></svg>', 13, 6],
  star:['<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path d="m13 2 3.3 6.8 7.4 1-5.4 5.2 1.3 7.4L13 18.9l-6.6 3.5 1.3-7.4L2.3 9.8l7.4-1z" fill="#ffc83d" stroke="#fff" stroke-width="1.8"/></svg>', 13, 4],
  paw:['<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#8a5a3c" stroke="#fff" stroke-width="1.5"><ellipse cx="13" cy="17" rx="5.5" ry="4.5"/><circle cx="6" cy="10" r="2.6"/><circle cx="10.5" cy="6" r="2.6"/><circle cx="15.5" cy="6" r="2.6"/><circle cx="20" cy="10" r="2.6"/></svg>', 13, 6],
  pen:['<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path d="M3 25 6 16 20 2l6 6-14 14z" fill="#4f5bd5" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><path d="M3 25l3-9 3 3z" fill="#1a1f3d"/></svg>', 3, 25]
};
function applyLook(){
  const root = document.documentElement, p = S.prof;
  if (p.theme === "light" || p.theme === "dark") root.dataset.theme = p.theme; else delete root.dataset.theme;
  const pal = p.eq.theme && owns("theme", p.eq.theme) ? p.eq.theme : "";
  if (pal) root.dataset.palette = pal; else delete root.dataset.palette;
  let css = "";
  if (pal && PAL[pal]) {
    const v = (a, dark) => `--encre:${a[0]};--encre-2:${a[1]};--encre-soft:${a[2]};--on-encre:${dark ? a[5] : "#fff"};--marge:${a[3]};--marge-soft:${a[4]};--paper:${a[5]};--tint:${a[6]};--tint-2:${a[7]};` + (dark ? `--sheet:color-mix(in srgb,${a[6]} 70%,${a[5]});` : "");
    css += `:root[data-palette][data-palette]{${v(PAL[pal].l)}}@media (prefers-color-scheme:dark){:root[data-palette][data-palette]:not([data-theme="light"]){${v(PAL[pal].d, 1)}}}:root[data-palette][data-palette][data-theme="dark"]{${v(PAL[pal].d, 1)}}`;
  }
  const pat = p.eq.pattern && owns("pattern", p.eq.pattern) ? p.eq.pattern : "";
  if (pat) css += `body{background:${PAT[pat]},var(--paper);background-attachment:fixed}`;
  const cur = p.eq.cursor && owns("cursor", p.eq.cursor) ? CUR[p.eq.cursor] : null;
  if (cur) { const u = `url("data:image/svg+xml,${encodeURIComponent(cur[0])}") ${cur[1]} ${cur[2]}`; css += `html,html *{cursor:${u},auto!important}html input,html textarea,html [contenteditable]{cursor:text!important}`; }
  let st = document.getElementById("lookCss"); if (!st) { st = document.createElement("style"); st.id = "lookCss"; document.head.appendChild(st); }
  st.textContent = css;
}
function setProf(patch, quiet){ Object.assign(S.prof, patch); S.prof.at = Date.now(); touch("profile"); applyLook(); paintMe(); if (!quiet) paintAccount(); }

/* ---------- экран входа и онбординг ---------- */
const gateEl = (() => { const el = document.createElement("div"); el.className = "gate"; el.id = "gate"; el.hidden = true; document.body.appendChild(el); return el; })();
let GATE = "";
function gateCheck(){
  let want = "";
  if (Cloud.kind === "supabase") {
    if (!ME) want = Cloud.state === "loading" || !Gate.ready ? "loading" : "auth";
    else if (!S.prof.name) want = Cloud.be || Cloud.state === "error" ? "onboard" : "loading";
  } else if (!S.prof.name) want = "onboard";
  showGate(want);
}
const Gate = {ready:false, busy:false};
function showGate(mode){
  if (!mode) { if (GATE) { GATE = ""; gateEl.classList.add("out"); document.body.classList.remove("gated"); setTimeout(()=>{ if (!GATE) { gateEl.hidden = true; gateEl.classList.remove("out"); gateEl.innerHTML = ""; } }, 380); route(false); } return; }
  if (GATE === mode && mode !== "auth") return;
  if (GATE === "auth" && mode === "auth" && $("#authForm", gateEl)) return;
  GATE = mode; gateEl.hidden = false; gateEl.classList.remove("out"); document.body.classList.add("gated"); closeNav();
  const langSw = `<div class="lang-sw gate-lang"><button type="button" data-glang="ru" class="${LANG==="ru"?"on":""}">RU</button><button type="button" data-glang="en" class="${LANG==="en"?"on":""}">EN</button></div>`;
  const brand = `<div class="gate-brand"><span class="cs-badge cs-fr">FR</span><span class="cs-badge cs-es">ES</span><b>Révisions · Repaso</b></div>`;
  let body = "";
  if (mode === "loading") body = `<div class="gate-card center"><span class="spin big"></span><p class="muted">${t("gateLoading")}</p></div>`;
  else if (mode === "auth") { if (!Auth.touched) Auth.mode = ls.get("edito-seen-auth") ? "in" : "up"; body = `<div class="gate-card">${authHTML()}</div>`; }
  else if (mode === "onboard") body = onboardHTML();
  gateEl.innerHTML = `<div class="gate-bg"></div><div class="gate-in">${brand}${langSw}${body}</div>`;
  $$("[data-glang]", gateEl).forEach(b=>b.addEventListener("click", ()=>{ if (b.dataset.glang !== LANG) { setLang(b.dataset.glang); const m = GATE; GATE = ""; showGate(m); } }));
  if (mode === "auth") { wireAuth(); const e = $("#authEmail", gateEl); if (e) setTimeout(()=>e.focus(), 60); }
  if (mode === "onboard") wireOnboard();
}
function onboardHTML(){
  const d = {emoji: S.prof.emoji || "🙂", bg: S.prof.bg || "peach"};
  return `<form class="gate-card ob" id="obForm" novalidate>
    <div class="ob-prev" id="obPrev">${avHTML(S.prof, "xl", d)}</div>
    <h2>${t("obH")}</h2><p class="auth-sub">${t("obSub")}</p>
    <label class="fld"><span>${t("obName")}</span><input id="obName" maxlength="30" autocomplete="given-name" placeholder="${esc(t("obNamePh"))}" value="${esc(S.prof.name || "")}"></label>
    <div class="ob-sec"><span class="ob-l">${t("obBg")}</span><div class="sw-row">${CAT.bg.filter(x=>x.p === 0).map(x=>`<button type="button" class="sw${x.id===d.bg?" on":""}" data-obbg="${x.id}" style="--sw:${x.css}" aria-label="${esc(itemName("bg", x.id))}"></button>`).join("")}</div></div>
    <div class="ob-sec"><span class="ob-l">${t("obEmoji")}</span><div class="em-grid">${CAT.emoji.filter(x=>x.p === 0).map(x=>`<button type="button" class="em${x.v===d.emoji?" on":""}" data-obem="${x.v}">${x.v}</button>`).join("")}</div></div>
    <p class="auth-msg" id="obMsg" data-k="err"></p>
    <button type="submit" class="btn pri auth-go">${t("obGo")} →</button>
  </form>`;
}
function wireOnboard(){
  const st = {emoji: S.prof.emoji || "🙂", bg: S.prof.bg || "peach"};
  const prev = () => { $("#obPrev").innerHTML = avHTML(S.prof, "xl", st); };
  $$("[data-obbg]", gateEl).forEach(b=>b.addEventListener("click", ()=>{ st.bg = b.dataset.obbg; $$("[data-obbg]", gateEl).forEach(x=>x.classList.toggle("on", x===b)); prev(); }));
  $$("[data-obem]", gateEl).forEach(b=>b.addEventListener("click", ()=>{ st.emoji = b.dataset.obem; $$("[data-obem]", gateEl).forEach(x=>x.classList.toggle("on", x===b)); prev(); }));
  $("#obForm").addEventListener("submit", e=>{
    e.preventDefault();
    const name = $("#obName").value.trim().replace(/\s+/g, " ");
    if (!name) { $("#obMsg").textContent = t("obNeedName"); $("#obName").focus(); return; }
    const first = !S.prof.name;
    setProf({name, emoji: st.emoji, bg: st.bg}, true);
    buildNav(); gateCheck();
    if (first) setTimeout(()=>toast(t("obBonus")), 500);
  });
  setTimeout(()=>$("#obName").focus(), 60);
}

/* ---------- магазин ---------- */
let SHOP_CAT = "emoji", ARMED = "";
function renderShop(){
  const cats = Object.keys(CAT);
  main.innerHTML = `<div class="col" style="max-width:1000px">
    <header class="t-head seyes shop-head"><div><p class="eyebrow">${t("shop")}</p><h1>${t("shop")}</h1><p class="t-ru">${t("shopSub")}</p></div>
      <div class="bal"><span class="bal-l">${t("balance")}</span><b>🪙 <span data-coins>${S.game.coins}</span></b></div></header>
    <div class="shop-tabs" role="tablist">${cats.map(c=>`<button type="button" role="tab" data-scat="${c}" class="${SHOP_CAT===c?"on":""}">${t("shopCats")[c]}</button>`).join("")}</div>
    <div class="shop-grid" id="shopGrid"></div></div>`;
  $$("[data-scat]", main).forEach(b=>b.addEventListener("click", ()=>{ SHOP_CAT = b.dataset.scat; ARMED = ""; $$("[data-scat]", main).forEach(x=>x.classList.toggle("on", x===b)); paintShop(); }));
  paintShop();
}
function equippedId(cat){ return cat === "emoji" ? S.prof.emoji : cat === "bg" ? S.prof.bg : S.prof.eq[cat] || ""; }
function itemPreview(cat, it){
  if (cat === "emoji") return avHTML(S.prof, "l", {emoji: it.v});
  if (cat === "bg") return avHTML(S.prof, "l", {bg: it.id});
  if (cat === "frame") return avHTML(S.prof, "l", {eq: Object.assign({}, S.prof.eq, {frame: it.id})});
  if (cat === "theme") return `<span class="pal-sw">${it.sw.map(c=>`<i style="background:${c}"></i>`).join("")}</span>`;
  if (cat === "pattern") return `<span class="pat-sw" style="background:${esc(it.id ? PAT[it.id] + ",var(--paper)" : "var(--paper)")}"></span>`;
  if (cat === "cursor") return `<span class="cur-sw">${it.id ? CUR[it.id][0] : `<svg width="22" height="22" viewBox="0 0 22 22"><path d="M5 2v16l4-4 3 6 3-1.5-3-6h5z" fill="var(--ink)" stroke="var(--sheet)" stroke-width="1.5"/></svg>`}</span>`;
  return "";
}
function paintShop(){
  const g = $("#shopGrid"); if (!g) return;
  const cat = SHOP_CAT, eq = equippedId(cat);
  g.innerHTML = CAT[cat].map(it=>{
    const id = cat === "emoji" ? it.v : it.id, own = owns(cat, it.id), on = eq === id || (!eq && !id && cat !== "emoji" && cat !== "bg"), key = cat + ":" + it.id;
    let btn;
    if (on) btn = `<button type="button" class="btn sm sec on" disabled>✓ ${t("equipped")}</button>`;
    else if (own) btn = `<button type="button" class="btn sm sec" data-use="${esc(key)}">${t("owned")}</button>`;
    else if (S.game.coins < it.p) btn = `<button type="button" class="btn sm sec poor" disabled>🪙 ${it.p}<small>${t("needMore", it.p - S.game.coins)}</small></button>`;
    else btn = `<button type="button" class="btn sm pri${ARMED === key ? " armed" : ""}" data-buy="${esc(key)}">${ARMED === key ? t("buyQ", it.p) : "🪙 " + it.p}</button>`;
    return `<div class="si${on ? " on" : ""}${own ? " own" : ""}"><div class="si-prev">${itemPreview(cat, it)}</div><span class="si-n">${esc(itemName(cat, it.id))}</span>${it.p === 0 ? `<span class="si-free">${t("free")}</span>` : ""}${btn}</div>`;
  }).join("");
  $$("[data-use]", g).forEach(b=>b.addEventListener("click", ()=>equip(b.dataset.use)));
  $$("[data-buy]", g).forEach(b=>b.addEventListener("click", ()=>{
    const key = b.dataset.buy;
    if (ARMED !== key) { ARMED = key; paintShop(); clearTimeout(paintShop.tm); paintShop.tm = setTimeout(()=>{ if (ARMED === key) { ARMED = ""; paintShop(); } }, 4000); return; }
    const [cat, id] = [key.slice(0, key.indexOf(":")), key.slice(key.indexOf(":") + 1)], it = catItem(cat, id);
    if (!it || S.game.coins < it.p) return;
    S.game.coins -= it.p; touch("game"); ARMED = "";
    if (!S.prof.own.includes(key)) S.prof.own.push(key);
    equip(key, true);
    toast(t("bought", itemName(cat, id)));
    const card = b.closest(".si"); if (card) { card.classList.add("pop"); }
  }));
}
function equip(key, silent){
  const cat = key.slice(0, key.indexOf(":")), id = key.slice(key.indexOf(":") + 1), it = catItem(cat, id);
  if (cat === "emoji") setProf({emoji: it.v}, true);
  else if (cat === "bg") setProf({bg: id}, true);
  else setProf({eq: Object.assign({}, S.prof.eq, {[cat]: id})}, true);
  paintShop(); if ($("#accLook")) paintLook();
}

/* ---------- личный кабинет ---------- */
let ACC_TAB = ls.get("edito-acctab") || "acc", PROG_C = null;
function renderAccount(){
  const isSupa = Cloud.kind === "supabase", L = lvlOf(S.game.xp);
  const tabs = I18N[LANG].accTabs;
  const ico = {acc:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="10" cy="7" r="3.5"/><path d="M3.5 17c1.2-3.2 3.6-4.6 6.5-4.6s5.3 1.4 6.5 4.6"/></svg>', set:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 6h8M15 6h1M4 14h2M9 14h7"/><circle cx="13.5" cy="6" r="1.8"/><circle cx="7.5" cy="14" r="1.8"/></svg>', prog:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 16.5h14M5.5 13V9.5M10 13V5.5M14.5 13V8"/></svg>', look:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M10 3a7 7 0 1 0 0 14c1 0 1.5-.7 1.5-1.4 0-1-.9-1.3-.9-2.2 0-.8.7-1.4 1.6-1.4H14a3 3 0 0 0 3-3C17 5.6 13.9 3 10 3z"/><circle cx="6.5" cy="9" r="1"/><circle cx="9" cy="6.3" r="1"/><circle cx="12.5" cy="6.6" r="1"/></svg>'};
  main.innerHTML = `<div class="col">
  <header class="t-head seyes acc-hero">
    <div class="acc-av">${avHTML(S.prof, "xl")}</div>
    <div class="acc-id"><p class="eyebrow">${t("accEyebrow")}</p><h1>${esc(S.prof.name || t("guest"))}</h1>
      <div class="acc-stats"><span class="pill">${t("lvl", L.L)}</span><span class="pill">🔥 ${streakNow()}</span><span class="pill">🪙 <b data-coins>${S.game.coins}</b></span></div>
      <div class="acc-xp"><span class="me-bar big"><i style="width:${(L.pct*100).toFixed(1)}%"></i></span><small>${t("xpTo", L.cur, L.need)}</small></div></div>
  </header>
  ${Auth.recovery && ME ? recoveryHTML() : ""}
  <div class="acc-tiles" role="tablist">${["acc","set","prog","look"].map(k=>`<button type="button" role="tab" class="acc-tile${ACC_TAB===k?" on":""}" data-tab="${k}" aria-selected="${ACC_TAB===k}"><span class="at-ico">${ico[k]}</span><b>${tabs[k][0]}</b><small>${tabs[k][1]}</small></button>`).join("")}</div>
  <section class="acc-panel" id="accPanel"></section></div>`;
  $$("[data-tab]", main).forEach(b=>b.addEventListener("click", ()=>{ ACC_TAB = b.dataset.tab; ls.set("edito-acctab", ACC_TAB); $$("[data-tab]", main).forEach(x=>{ x.classList.toggle("on", x===b); x.setAttribute("aria-selected", x===b); }); paintPanel(); }));
  wireAuth();
  paintPanel();
}
function paintPanel(){
  const p = $("#accPanel"); if (!p) return;
  p.classList.remove("in"); void p.offsetWidth; p.classList.add("in");
  if (ACC_TAB === "acc") return panelAcc(p);
  if (ACC_TAB === "set") return panelSet(p);
  if (ACC_TAB === "prog") return panelProg(p);
  return panelLook(p);
}
function panelAcc(p){
  const isSupa = Cloud.kind === "supabase";
  p.innerHTML = `<div class="panel-grid">
    <div class="pcard"><h3>${t("profileH")}</h3>
      <label class="fld"><span>${t("obName")}</span><div class="fld-row"><input id="accNameIn" maxlength="30" value="${esc(S.prof.name)}"><button type="button" class="btn sm pri" id="accNameSave">${t("nameSave")}</button></div></label>
      ${ME && ME.email ? `<div class="kv"><span>${t("emailL")}</span><b>${esc(ME.email)}</b></div>` : ""}
    </div>
    <div class="pcard"><h3>${t("avatarH")}</h3>
      <div class="ob-sec"><span class="ob-l">${t("obEmoji")}</span><div class="em-grid sm">${CAT.emoji.filter(x=>owns("emoji", x.id)).map(x=>`<button type="button" class="em${x.v===S.prof.emoji?" on":""}" data-pem="${x.v}">${x.v}</button>`).join("")}</div></div>
      <div class="ob-sec"><span class="ob-l">${t("obBg")}</span><div class="sw-row">${CAT.bg.filter(x=>owns("bg", x.id)).map(x=>`<button type="button" class="sw${x.id===S.prof.bg?" on":""}" data-pbg="${x.id}" style="--sw:${x.css}" aria-label="${esc(itemName("bg", x.id))}"></button>`).join("")}</div></div>
      <a class="lnk" href="#shop">${t("toShop")}</a>
    </div>
    ${isSupa && ME ? `<div class="pcard"><h3>${t("securityH")}</h3><div class="cb-btns"><button type="button" class="btn sm sec" id="pwChange">${t("pwChange")}</button><button type="button" class="btn sm sec" id="signOut">${t("signOut")}</button></div></div>` : ""}
  </div>`;
  const save = () => { const v = $("#accNameIn").value.trim().replace(/\s+/g, " "); if (!v) return; setProf({name: v}, true); renderAccount(); toast(t("nameSaved")); };
  $("#accNameSave").addEventListener("click", save);
  $("#accNameIn").addEventListener("keydown", e=>{ if (e.key === "Enter") { e.preventDefault(); save(); } });
  $$("[data-pem]", p).forEach(b=>b.addEventListener("click", ()=>{ setProf({emoji: b.dataset.pem}, true); renderAccount(); }));
  $$("[data-pbg]", p).forEach(b=>b.addEventListener("click", ()=>{ setProf({bg: b.dataset.pbg}, true); renderAccount(); }));
  const so = $("#signOut"); if (so) so.addEventListener("click", async e=>{ e.currentTarget.disabled = true; await signOut(); });
  const pc = $("#pwChange"); if (pc) pc.addEventListener("click", ()=>{ Auth.recovery = true; renderAccount(); const i = $("#newPw"); if (i) i.focus(); });
}
function panelSet(p){
  let armed = "";
  p.innerHTML = `<div class="panel-grid">
    <div class="pcard"><h3>${t("langH")}</h3><div class="seg big">${[["ru","Русский"],["en","English"]].map(([k,n])=>`<button type="button" data-lang2="${k}" class="${LANG===k?"on":""}">${n}</button>`).join("")}</div></div>
    <div class="pcard"><h3>${t("courseH")}</h3><div class="seg big">${["fr","es"].map(c=>`<button type="button" data-course2="${c}" class="${COURSE===c?"on":""}">${COURSES[c].name}</button>`).join("")}</div></div>
    <div class="pcard"><h3>${t("fxH")}</h3><div class="seg big"><button type="button" data-fx="1" class="${S.prof.fx?"on":""}">${t("fxOn")}</button><button type="button" data-fx="0" class="${S.prof.fx?"":"on"}">${t("fxOff")}</button></div></div>
    <div class="pcard"><h3>${t("newWordsH")}</h3><div class="seg big">${[5,10,15,20,30].map(n=>`<button type="button" data-nw="${n}" class="${(QZ.perDay||15)===n?"on":""}">${n}</button>`).join("")}</div></div>
    <div class="pcard"><h3>${t("resetH")}</h3><div class="cb-btns">${["fr","es"].map(c=>`<button type="button" class="btn sm sec danger" data-reset="${c}">${t("resetCourse", COURSES[c].name)}</button>`).join("")}</div></div>
  </div>`;
  $$("[data-lang2]", p).forEach(b=>b.addEventListener("click", ()=>setLang(b.dataset.lang2)));
  $$("[data-course2]", p).forEach(b=>b.addEventListener("click", ()=>{ setCourse(b.dataset.course2, true); renderAccount(); }));
  $$("[data-fx]", p).forEach(b=>b.addEventListener("click", ()=>{ setProf({fx: b.dataset.fx === "1"}, true); panelSet(p); }));
  $$("[data-nw]", p).forEach(b=>b.addEventListener("click", ()=>{ QZ.perDay = +b.dataset.nw; saveQZ(); panelSet(p); }));
  $$("[data-reset]", p).forEach(b=>b.addEventListener("click", ()=>{
    const c = b.dataset.reset;
    if (armed !== c) { armed = c; b.textContent = t("resetConfirm"); b.classList.add("armed"); setTimeout(()=>{ if (armed === c) { armed = ""; b.textContent = t("resetCourse", COURSES[c].name); b.classList.remove("armed"); } }, 5000); return; }
    resetCourse(c); armed = ""; panelSet(p); toast(t("resetDone"));
  }));
}
function resetCourse(c){
  const ids = c === "es" ? ES_BUILD(LANG).map(x=>x.id) : TOPICS.map(x=>x.id);
  ids.forEach(id=>{ delete S.p[id]; if (S.ans[id]) { delete S.ans[id]; touch("ans-" + id); } });
  S.tests = S.tests.filter(x=>(x.c||"fr") !== c);
  if (c === "fr") { S.quiz = {c:{}, best:{}, fav:S.quiz.fav||[], sd:{}}; touch("quiz"); }
  touch("progress"); paintNavProgress();
}
function panelProg(p){
  const c = PROG_C || COURSE, top = c === COURSE ? TOP : (c === "es" ? ES_BUILD(LANG) : (LANG === "en" ? TOPICS_EN : TOPICS));
  const tests = S.tests.filter(x=>(x.c||"fr") === c), L = lvlOf(S.game.xp);
  let ex = 0, done = 0, sum = 0, full = 0; top.forEach(tp=>{ const q = topicPct(tp); ex += q.n; done += q.done; sum += q.pct*q.n; if (q.pct >= .995) full++; });
  const best = tests.reduce((m,x)=>Math.max(m, x.got/(x.total||1)), 0);
  const today = gDay(), cells = [];
  const start = dayShift(today, -55 - ((new Date().getDay() + 6) % 7));
  for (let i = 0; i < 56 + ((new Date().getDay() + 6) % 7) + 1 && cells.length < 63; i++) { const k = dayShift(start, i); if (k > today) break; cells.push([k, S.game.hist[k] || 0]); }
  p.innerHTML = `<div class="seg big prog-sw">${["fr","es"].map(x=>`<button type="button" data-pc="${x}" class="${c===x?"on":""}">${COURSES[x].name}</button>`).join("")}</div>
  <div class="kpis">
    <div class="kpi"><b>${done}<small>/${ex}</small></b><span>${t("stSolved")}</span></div>
    <div class="kpi"><b>${full}<small>/${top.length}</small></b><span>${t("stTopics")}</span></div>
    <div class="kpi"><b>${ex ? Math.round(sum/ex*100) : 0}%</b><span>${t("stAvg")}</span></div>
    <div class="kpi"><b>${tests.length}</b><span>${t("stTests")}</span></div>
    <div class="kpi"><b>${tests.length ? Math.round(best*100) + "%" : "—"}</b><span>${t("stBest")}</span></div>
    <div class="kpi"><b>${S.game.streak.best}</b><span>${t("bestStreakL")}</span></div>
  </div>
  <div class="panel-grid two">
    <div class="pcard"><h3>${t("levelH")}</h3><div class="lv-big"><b>${L.L}</b><div><span class="me-bar big"><i style="width:${(L.pct*100).toFixed(1)}%"></i></span><small>${t("xpTo", L.cur, L.need)} · ${t("xpN", S.game.xp)}</small></div></div></div>
    <div class="pcard"><h3>${t("calH")}</h3><div class="cal">${cells.map(([k,n])=>`<i class="c${n>=10?3:n>=5?2:n?1:0}${k===today?" today":""}" title="${k}: ${n}"></i>`).join("")}</div><small class="muted">${t("streakDays", streakNow())} · ${t("bestStreak", S.game.streak.best)}</small></div>
  </div>
  <div class="sec-h"><h2>${t("progressByTopic")}</h2></div>
  <div class="brk">${top.map(tp=>{ const r = topicPct(tp).pct; return `<div class="brk-r"><a href="#${tp.id}">${tp.title}</a><div class="bar"><i class="${r>=.8?"":r>=.5?"mid":"low"}" style="width:${Math.max(r?4:0, r*100)}%"></i></div><span>${Math.round(r*100)}%</span></div>`; }).join("")}</div>
  <div class="sec-h"><h2>${t("history")}</h2></div>
  ${tests.length ? `<ul class="hist">${tests.slice().reverse().map(h=>`<li>${esc(h.d)} — <b>${scoreTxt(h)}</b> (${h.got} / ${h.total})</li>`).join("")}</ul>` : `<p class="muted">${t("noTests")}</p>`}`;
  $$("[data-pc]", p).forEach(b=>b.addEventListener("click", ()=>{ PROG_C = b.dataset.pc; panelProg(p); }));
}
function paintLook(){ const p = $("#accPanel"); if (p && ACC_TAB === "look") panelLook(p); }
function panelLook(p){
  const row = (cat, title) => `<div class="pcard"><h3>${title}</h3><div class="look-row">${CAT[cat].map(it=>{
    const own = owns(cat, it.id), on = (S.prof.eq[cat] || "") === it.id;
    return `<button type="button" class="look-i${on?" on":""}${own?"":" lock"}" ${own ? `data-look="${cat}:${it.id}"` : `data-goshop="${cat}"`} title="${esc(itemName(cat, it.id))}${own ? "" : " · " + t("locked")}">${itemPreview(cat, it)}<span>${esc(itemName(cat, it.id))}</span>${own ? "" : `<em>🪙 ${it.p}</em>`}</button>`; }).join("")}</div></div>`;
  p.innerHTML = `<div class="pcard"><h3>${t("themeH")}</h3><div class="seg big theme-seg">${["light","dark","system"].map(m=>`<button type="button" data-tm="${m}" class="${S.prof.theme===m?"on":""}">${t("themeModes")[m]}</button>`).join("")}</div></div>
    <div id="accLook">${row("theme", t("paletteH"))}${row("frame", t("frameH"))}${row("pattern", t("patternH"))}${row("cursor", t("cursorH"))}</div>
    <a class="lnk" href="#shop">${t("toShop")}</a>`;
  $$("[data-tm]", p).forEach(b=>b.addEventListener("click", ()=>{ const root = document.documentElement; root.classList.add("theme-anim"); setTimeout(()=>root.classList.remove("theme-anim"), 700); setProf({theme: b.dataset.tm}, true); panelLook(p); }));
  $$("[data-look]", p).forEach(b=>b.addEventListener("click", ()=>{ const root = document.documentElement; root.classList.add("theme-anim"); setTimeout(()=>root.classList.remove("theme-anim"), 700); equip(b.dataset.look); panelLook(p); }));
  $$("[data-goshop]", p).forEach(b=>b.addEventListener("click", ()=>{ SHOP_CAT = b.dataset.goshop; location.hash = "shop"; }));
}
