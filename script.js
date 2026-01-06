/* ==========================================================
   Kerrvin & Shenneth Monthsary Keepsake
   HTML/CSS/JS only • LocalStorage
   PWA-ready • Offline • SPA Navigation
   (Gallery removed safely)
========================================================== */

const START_DATE = new Date("2025-11-06T00:00:00");

const LS = {
  loggedIn: "ks_logged_in",
  user: "ks_user",
  promisesDone: "ks_promises_done",
  promisesState: "ks_promises_state",
  timeline: "ks_timeline",
  moods: "ks_moods",
  music: "ks_music_enabled",
  night: "ks_night_mode"
};

const AUTH = {
  usernames: ["Vincenzo", "Nenetha"],
  password: "110625"
};

const PROMISES = [
  "Even when things go wrong, we choose love and respect.",
  "We speak gently—especially when emotions are loud.",
  "We protect each other’s peace, in public and in private.",
  "We listen fully, not just to reply, but to understand.",
  "We never weaponize silence, and we never belittle feelings.",
  "We apologize sincerely, and we forgive with maturity.",
  "We make time for each other, even when life gets heavy.",
  "We stay faithful—in actions, words, and intentions.",
  "We grow together, not against each other.",
  "We choose patience. We choose kindness. We choose us."
];

// 90+ Daily Love Notes (deterministic) — KEEP YOUR FULL LIST HERE
const LOVE_NOTES = [
  "You make ordinary days feel softly sacred.",
  "I still choose you — in calm, in chaos, in everything.",
  "If love had a shape, it would feel like your presence.",
  "You are my favorite kind of home.",
  "I don’t need perfect days, just you in them.",
  "I love the way you exist — quietly powerful, gently bright.",
  "Your smile is my peace treaty with the world.",
  "I’m proud of you, even for the things you don’t notice.",
  "I’ll always be your safe place to land.",
  "Every month with you feels like a beautiful upgrade.",
  "You deserve tenderness — today and always.",
  "I love you in ways words can’t finish.",
  "Your laugh is a little miracle I never get tired of.",
  "I want to be the reason your heart feels lighter.",
  "With you, love feels like breathing — natural and needed.",
  "You’re my best decision, repeated daily.",
  "I’m grateful your heart found mine.",
  "I love how you make warmth look effortless.",
  "Even time moves softer when I’m with you.",
  "I’m here. Still. Always.",
  "Your presence is my favorite comfort.",
  "I love you beyond moods, moments, and misunderstandings.",
  "You make love feel classy, calm, and real.",
  "I’ll protect your heart like it’s my own.",
  "You are my gentle proof that good things exist.",
  "I’d rather do life slowly with you than fast with anyone else.",
  "You are the softest part of my strongest days.",
  "I love the way you try — even when it’s hard.",
  "Thank you for being you — that’s enough to move me.",
  "You’re my peace, my spark, my forever.",
  "I still get shy thinking about how much I love you.",
  "Loving you feels like coming back to myself.",
  "I’m lucky. And I know it.",
  "You’re the reason my future feels exciting.",
  "I love the way your heart stays kind.",
  "I’d choose you in every version of life.",
  "Your name feels like a prayer in my chest.",
  "You make patience feel easy.",
  "You’re my favorite hello and my safest goodnight.",
  "My love for you is quiet, deep, and permanent.",
  "I want to grow with you — not just be with you.",
  "Your happiness matters to me more than you realize.",
  "I love you more than yesterday — and that’s saying something.",
  "You make love feel mature, warm, and steady.",
  "You’re my calm in a world that rushes.",
  "I’ll hold your hand through everything.",
  "I admire you — the way you love, the way you endure.",
  "I want to build a life that feels soft for you.",
  "I’ll never get tired of choosing you.",
  "You’re my favorite kind of beautiful — the kind that’s real.",
  "I love you, even in the pauses between words.",
  "Your heart is my favorite place to rest.",
  "You make my life feel meaningful.",
  "I want your dreams to feel supported, not lonely.",
  "My love for you is gentle — but unshakable.",
  "You deserve a love that feels safe. That’s my promise.",
  "I love how you care — even when you’re tired.",
  "You are not hard to love. You are easy to cherish.",
  "I still feel butterflies — and I hope I always do.",
  "If I could pause a moment forever, it would be us laughing.",
  "I love being your partner in everything.",
  "You bring out the best in me without forcing it.",
  "I’ll love you in the quiet, not just the exciting.",
  "Your voice is my favorite sound.",
  "I love how we feel like a team.",
  "You’re my sweetest comfort and my proudest love.",
  "I want to keep learning you — slowly, forever.",
  "You are the soft reason I stay strong.",
  "I love you in a way that feels like fate, but better — choice.",
  "You don’t have to be perfect. You already have me.",
  "Even on hard days, I’m grateful we’re ‘us’.",
  "I want to make you feel adored — daily.",
  "Your love feels like a warm light in my chest.",
  "I’ll always take care of your heart.",
  "I love your mind, your soul, your little habits.",
  "You make love feel like a peaceful promise.",
  "I’m not going anywhere. You’re home to me.",
  "I love your softness. I love your strength.",
  "I want a lifetime of monthsaries with you.",
  "I’m grateful for every day we keep choosing each other.",
  "You’re my favorite part of my future.",
  "I want to be the calm you can trust.",
  "I love how you make even silence feel good.",
  "I want to meet you in every mood — with love.",
  "You’re my best friend — and my greatest love.",
  "If love is an art, you are my masterpiece.",
  "You make my heart feel safe to exist.",
  "I love you, and I’m proud to be yours.",
  "The world feels softer with you in it.",
  "I love you today — deeply, gently, endlessly."
];

const MOTIVATION_QUOTES = [
  "Small steps still move you forward.",
  "Peace is progress too.",
  "You’re allowed to grow at your own pace.",
  "Consistency beats intensity.",
  "You’ve survived every hard day so far.",
  "Be proud of the person you’re becoming.",
  "Choose what protects your peace.",
  "Today is a good day to be gentle with yourself.",
  "Your future self is cheering for you.",
  "You don’t need perfection — you need persistence.",
  "Slow progress is still progress.",
  "You’re building something beautiful, even if it’s quiet.",
  "Your best is enough for today.",
  "One good decision can change everything.",
  "Rest is not laziness — it’s maintenance.",
  "Keep going. Your story matters.",
  "You can do hard things.",
  "You’re doing better than you think.",
  "Progress looks good on you.",
  "Even tiny wins deserve celebration."
];

const MOODS = [
  { key: "Happy", emoji: "😊" },
  { key: "Loved", emoji: "🥰" },
  { key: "Grateful", emoji: "🙏" },
  { key: "Missing You", emoji: "🥺" },
  { key: "Tired", emoji: "😴" },
  { key: "Stressed", emoji: "😣" },
  { key: "Excited", emoji: "✨" },
  { key: "Calm", emoji: "🌿" }
];

let deferredPrompt = null;
let calendarCursor = new Date();
let letterTypingTimer = null;
let letterRevealed = false;
let particleRAF = null;
let shootingStarTimer = null;

/* =========================
   START APP
========================= */
window.addEventListener("DOMContentLoaded", () => {
  initPWA();
  initAuthFlow();
  initPromisesUI();
  initNav();
  initHome();
  initMood();
  initTimeline();
  initLetter();
  initSettings();
  initShootingStars();
});

/* =========================
   PWA
========================= */
function initPWA(){
  if("serviceWorker" in navigator){
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js");
    });
  }

  const installBanner = document.getElementById("installBanner");
  const installBtn = document.getElementById("installBtn");
  const installClose = document.getElementById("installClose");

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if(installBanner) installBanner.classList.remove("hidden");
  });

  if(installBtn){
    installBtn.addEventListener("click", async () => {
      if(!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      if(installBanner) installBanner.classList.add("hidden");
    });
  }

  if(installClose){
    installClose.addEventListener("click", () => {
      if(installBanner) installBanner.classList.add("hidden");
    });
  }
}

/* =========================
   AUTH + PROMISES FLOW
========================= */
function initAuthFlow(){
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  const loggedIn = localStorage.getItem(LS.loggedIn) === "1";
  const promisesDone = localStorage.getItem(LS.promisesDone) === "1";

  if(!loggedIn){
    showScreen("login");
  } else if(!promisesDone){
    showScreen("promises");
  } else {
    showScreen("app");
  }

  if(loginForm){
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const u = document.getElementById("username").value.trim();
      const p = document.getElementById("password").value.trim();

      if(AUTH.usernames.includes(u) && p === AUTH.password){
        localStorage.setItem(LS.loggedIn, "1");
        localStorage.setItem(LS.user, u);

        if(loginMessage) loginMessage.classList.add("hidden");
        showScreen("promises");
      } else {
        if(loginMessage){
          loginMessage.textContent = "That doesn’t match our secret code 🤍";
          loginMessage.classList.remove("hidden");
        }
      }
    });
  }
}

function showScreen(which){
  const loginScreen = document.getElementById("loginScreen");
  const promisesScreen = document.getElementById("promisesScreen");
  const app = document.getElementById("app");

  loginScreen.classList.add("hidden");
  promisesScreen.classList.add("hidden");
  app.classList.add("hidden");

  if(which === "login") loginScreen.classList.remove("hidden");
  if(which === "promises") promisesScreen.classList.remove("hidden");
  if(which === "app") app.classList.remove("hidden");
}

/* =========================
   PROMISES UI
========================= */
function initPromisesUI(){
  const promisesList = document.getElementById("promisesList");
  const promisesContinue = document.getElementById("promisesContinue");
  const promisesReset = document.getElementById("promisesReset");
  const promisesMessage = document.getElementById("promisesMessage");

  if(!promisesList || !promisesContinue || !promisesReset) return;

  renderPromises();

  promisesReset.addEventListener("click", () => {
    localStorage.removeItem(LS.promisesDone);
    localStorage.removeItem(LS.promisesState);
    renderPromises();
    if(promisesMessage){
      promisesMessage.textContent = "Promises reset. Take your time and check again.";
      promisesMessage.classList.remove("hidden");
      setTimeout(()=>promisesMessage.classList.add("hidden"), 2200);
    }
  });

  promisesContinue.addEventListener("click", () => {
    const state = getPromisesState();
    const allChecked = state.every(Boolean);

    if(!allChecked){
      if(promisesMessage){
        promisesMessage.textContent = "We must uphold them all before proceeding. 🤍";
        promisesMessage.classList.remove("hidden");
      }
      return;
    }

    localStorage.setItem(LS.promisesDone, "1");
    if(promisesMessage) promisesMessage.classList.add("hidden");
    showScreen("app");

    // music after proceed (user gesture)
    ensureMusicPreference();
    if(localStorage.getItem(LS.music) === "1"){
      playMusicSafe();
    }
  });

  function renderPromises(){
    promisesList.innerHTML = "";
    const state = getPromisesState();

    PROMISES.forEach((text, i) => {
      const row = document.createElement("label");
      row.className = "promise";
      row.innerHTML = `
        <input type="checkbox" ${state[i] ? "checked" : ""} data-index="${i}">
        <p>${text}</p>
      `;
      promisesList.appendChild(row);
    });

    promisesList.querySelectorAll("input[type=checkbox]").forEach(cb => {
      cb.addEventListener("change", () => {
        const idx = Number(cb.dataset.index);
        const s = getPromisesState();
        s[idx] = cb.checked;
        localStorage.setItem(LS.promisesState, JSON.stringify(s));
        updateButton();
      });
    });

    updateButton();
  }

  function updateButton(){
    const state = getPromisesState();
    const allChecked = state.every(Boolean);
    promisesContinue.disabled = !allChecked;
  }

  function getPromisesState(){
    const raw = localStorage.getItem(LS.promisesState);
    if(raw){
      try{
        const parsed = JSON.parse(raw);
        if(Array.isArray(parsed) && parsed.length === PROMISES.length) return parsed;
      } catch {}
    }
    return new Array(PROMISES.length).fill(false);
  }
}

/* =========================
   NAVIGATION
========================= */
function initNav(){
  const navItems = document.querySelectorAll(".nav-item");
  const pages = document.querySelectorAll(".page");
  const openSettingsBtn = document.getElementById("openSettings");

  if(!navItems.length || !pages.length) return;

  navItems.forEach(btn => {
    btn.addEventListener("click", () => {
      setActivePage(btn.dataset.target);
    });
  });

  if(openSettingsBtn){
    openSettingsBtn.addEventListener("click", () => setActivePage("settings"));
  }

  function setActivePage(key){
    navItems.forEach(n => n.classList.toggle("active", n.dataset.target === key));
    pages.forEach(p => p.classList.toggle("active", p.id === `page-${key}`));
  }
}

/* =========================
   HOME
========================= */
function initHome(){
  const sinceCounter = document.getElementById("sinceCounter");
  const monthsaryCountdown = document.getElementById("monthsaryCountdown");
  const dailyNote = document.getElementById("dailyNote");
  const littleReminderText = document.getElementById("littleReminderText");

  updateCounters();
  setInterval(updateCounters, 1000);
  setDailyNote();
  setLittleReminder();

  function updateCounters(){
    const now = new Date();
    const diffMs = now - START_DATE;

    if(sinceCounter){
      sinceCounter.textContent = diffMs < 0 ? "Not started yet 🤍" : formatSince(START_DATE, now);
    }

    if(monthsaryCountdown){
      const target = nextMonthsaryDate(now);
      monthsaryCountdown.textContent = formatCountdown(target - now);
    }
  }

  function setDailyNote(){
    if(!dailyNote) return;
    const todayKey = new Date().toISOString().slice(0,10);
    const idx = hashString(todayKey) % LOVE_NOTES.length;
    dailyNote.textContent = LOVE_NOTES[idx];
  }

  function setLittleReminder(){
    if(!littleReminderText) return;
    const todayKey = new Date().toISOString().slice(0,10);
    const idx = hashString("LITTLE_REMINDER_" + todayKey) % MOTIVATION_QUOTES.length;
    littleReminderText.textContent = MOTIVATION_QUOTES[idx];
  }
}

/* =========================
   MOOD
========================= */
function initMood(){
  const moodButtons = document.getElementById("moodButtons");
  const moodNote = document.getElementById("moodNote");
  const saveMoodBtn = document.getElementById("saveMoodBtn");
  const moodSaveMsg = document.getElementById("moodSaveMsg");
  const moodStreakEl = document.getElementById("moodStreak");

  const calPrev = document.getElementById("calPrev");
  const calNext = document.getElementById("calNext");
  const calTitle = document.getElementById("calTitle");
  const calendarGrid = document.getElementById("calendarGrid");
  const moodDetail = document.getElementById("moodDetail");

  if(!moodButtons || !calendarGrid) return;

  renderMoodButtons();
  renderCalendar();
  updateMoodStreak();

  saveMoodBtn.addEventListener("click", () => {
    const selected = document.querySelector(".mood-btn.active");
    if(!selected){
      showMsg("Please pick a mood first. 🤍");
      return;
    }

    const today = isoDate(new Date());
    const moods = getMoods();
    moods[today] = {
      mood: selected.dataset.key,
      emoji: selected.dataset.emoji,
      note: (moodNote.value || "").trim(),
      date: today
    };
    setMoods(moods);

    showMsg("Saved for today. 🌙");
    renderCalendar();
    updateMoodStreak();
  });

  calPrev.addEventListener("click", () => {
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
    renderCalendar();
  });

  calNext.addEventListener("click", () => {
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
    renderCalendar();
  });

  function renderMoodButtons(){
    moodButtons.innerHTML = "";
    MOODS.forEach(m => {
      const btn = document.createElement("button");
      btn.className = "mood-btn";
      btn.textContent = `${m.emoji} ${m.key}`;
      btn.dataset.key = m.key;
      btn.dataset.emoji = m.emoji;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".mood-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
      moodButtons.appendChild(btn);
    });
  }

  function renderCalendar(){
    const year = calendarCursor.getFullYear();
    const month = calendarCursor.getMonth();

    calTitle.textContent = calendarCursor.toLocaleString(undefined, { month: "long", year: "numeric" });
    calendarGrid.innerHTML = "";

    const firstDay = new Date(year, month, 1);
    const startWeekDay = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();
    const moods = getMoods();

    for(let i=0; i<42; i++){
      const cell = document.createElement("div");
      cell.className = "cal-day";

      let dayNum = i - startWeekDay + 1;
      let cellDate = new Date(year, month, dayNum);

      if(dayNum <= 0){
        cell.classList.add("mutedDay");
        dayNum = prevMonthDays + dayNum;
        cellDate = new Date(year, month - 1, dayNum);
      } else if(dayNum > daysInMonth){
        cell.classList.add("mutedDay");
        dayNum = dayNum - daysInMonth;
        cellDate = new Date(year, month + 1, dayNum);
      }

      const key = isoDate(cellDate);
      const entry = moods[key];

      cell.innerHTML = `<div>${dayNum}</div>`;
      if(entry){
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.textContent = entry.emoji;
        cell.appendChild(dot);
      }

      cell.addEventListener("click", () => showDetail(key));
      calendarGrid.appendChild(cell);
    }
  }

  function showDetail(dateKey){
    const moods = getMoods();
    const entry = moods[dateKey];

    moodDetail.classList.remove("hidden");

    if(!entry){
      moodDetail.innerHTML = `
        <strong>${dateKey}</strong>
        <p class="muted" style="margin:6px 0 0;">No mood saved that day.</p>
      `;
      return;
    }

    moodDetail.innerHTML = `
      <strong>${dateKey} — ${entry.emoji} ${entry.mood}</strong>
      <p class="muted" style="margin:6px 0 0;">${escapeHtml(entry.note || "No note.")}</p>
    `;
  }

  function showMsg(text){
    moodSaveMsg.textContent = text;
    moodSaveMsg.classList.remove("hidden");
    setTimeout(() => moodSaveMsg.classList.add("hidden"), 2200);
  }

  function updateMoodStreak(){
    const moods = getMoods();
    let streak = 0;
    let cursor = new Date();

    for(;;){
      const key = isoDate(cursor);
      if(moods[key]){
        streak++;
        cursor.setDate(cursor.getDate() - 1);
      } else break;
    }

    moodStreakEl.textContent = String(streak);
  }

  function getMoods(){
    const raw = localStorage.getItem(LS.moods);
    if(!raw) return {};
    try{ return JSON.parse(raw) || {}; } catch { return {}; }
  }

  function setMoods(obj){
    localStorage.setItem(LS.moods, JSON.stringify(obj));
  }
}

/* =========================
   TIMELINE
========================= */
function initTimeline(){
  const tlDate = document.getElementById("tlDate");
  const tlTitle = document.getElementById("tlTitle");
  const tlDesc = document.getElementById("tlDesc");
  const addTimelineBtn = document.getElementById("addTimelineBtn");
  const timelineList = document.getElementById("timelineList");

  if(!addTimelineBtn || !timelineList) return;

  let items = getTimeline();
  if(items.length === 0){
    items = [{
      id: cryptoRandomId(),
      date: "2025-11-06",
      title: "Our beginning",
      desc: "The day our story truly started."
    }];
    setTimeline(items);
  }

  renderTimeline();

  addTimelineBtn.addEventListener("click", () => {
    const date = tlDate.value || isoDate(new Date());
    const title = (tlTitle.value || "").trim();
    const desc = (tlDesc.value || "").trim();

    if(!title){
      toast("Please add a title.");
      return;
    }

    const items = getTimeline();
    items.push({ id: cryptoRandomId(), date, title, desc });
    setTimeline(items);

    tlTitle.value = "";
    tlDesc.value = "";
    renderTimeline();
    toast("Added to our story. ✨");
  });

  function getTimeline(){
    const raw = localStorage.getItem(LS.timeline);
    if(!raw) return [];
    try{ return JSON.parse(raw) || []; } catch { return []; }
  }

  function setTimeline(arr){
    localStorage.setItem(LS.timeline, JSON.stringify(arr));
  }

  function renderTimeline(){
    const items = getTimeline().slice().sort((a,b) => (a.date||"").localeCompare(b.date||""));
    timelineList.innerHTML = "";

    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "timeline-item";
      div.innerHTML = `
        <div class="muted small"><strong>${item.date || ""}</strong></div>
        <div class="timeline-title">${escapeHtml(item.title)}</div>
        <div class="muted">${escapeHtml(item.desc || "")}</div>

        <div class="timeline-actions">
          <button class="btn btn-ghost" data-action="edit">Edit</button>
          <button class="btn btn-danger" data-action="delete">Delete</button>
        </div>
      `;

      div.querySelector("[data-action=edit]").addEventListener("click", () => {
        const newTitle = prompt("Edit title:", item.title);
        if(newTitle === null) return;
        const newDesc = prompt("Edit details:", item.desc || "");
        if(newDesc === null) return;
        const newDate = prompt("Edit date (YYYY-MM-DD):", item.date || "");
        if(newDate === null) return;

        const arr = getTimeline();
        const idx = arr.findIndex(x => x.id === item.id);
        if(idx >= 0){
          arr[idx].title = newTitle.trim() || item.title;
          arr[idx].desc = (newDesc || "").trim();
          arr[idx].date = (newDate || "").trim() || item.date;
          setTimeline(arr);
          renderTimeline();
        }
      });

      div.querySelector("[data-action=delete]").addEventListener("click", () => {
        const ok = confirm("Delete this timeline entry?");
        if(!ok) return;
        const arr = getTimeline().filter(x => x.id !== item.id);
        setTimeline(arr);
        renderTimeline();
      });

      timelineList.appendChild(div);
    });
  }
}

/* =========================
   LETTER + PARTICLES (FIXED)
========================= */
function initLetter(){
  const revealLetterBtn = document.getElementById("revealLetterBtn");
  const letterText = document.getElementById("letterText");

  if(!revealLetterBtn || !letterText) return;

  letterRevealed = false;
  revealLetterBtn.disabled = false;
  revealLetterBtn.textContent = "Read slowly…";

  revealLetterBtn.addEventListener("click", () => {
    if(letterRevealed) return;

    const letter = getMonthlyLetter();
    letterText.classList.remove("hidden");

    typeRevealOnce(letterText, letter, 12);
    startParticles();

    letterRevealed = true;
    revealLetterBtn.textContent = "Already reading 🤍";
    revealLetterBtn.disabled = true;
  });
}

function getMonthlyLetter(){
  const now = new Date();
  const monthsSince =
    (now.getFullYear() - START_DATE.getFullYear()) * 12 +
    (now.getMonth() - START_DATE.getMonth());

  const letters = [
`I hope you read this slowly.

Shenneth,
Happy monthsary, my love.

Because in every version of us—
I still choose you.

From now until forever,
I’m yours.

— Kerrvin 🤍`,

`Shenneth,

Another month, another quiet reminder:
you’re still my favorite person.

Happy monthsary, my love.
I choose you again.

— Kerrvin 🤍`,

`My love,

I want to be the calm you can trust.
The arms you can rest in.

Happy monthsary, Shenneth.
Still you. Always you.

— Kerrvin 🤍`
  ];

  const index = ((monthsSince % letters.length) + letters.length) % letters.length;
  return letters[index].trim();
}

function typeRevealOnce(el, text, speed=12){
  if(letterTypingTimer) clearInterval(letterTypingTimer);

  el.textContent = "";
  let i = 0;

  letterTypingTimer = setInterval(() => {
    el.textContent += text[i] || "";
    i++;
    if(i >= text.length){
      clearInterval(letterTypingTimer);
      letterTypingTimer = null;
    }
  }, speed);
}

function startParticles(){
  const particlesCanvas = document.getElementById("particles");
  if(!particlesCanvas) return;

  const ctx = particlesCanvas.getContext("2d");

  function resize(){
    particlesCanvas.width = particlesCanvas.clientWidth;
    particlesCanvas.height = particlesCanvas.clientHeight;
  }
  resize();

  const particles = Array.from({length: 30}).map(() => ({
    x: Math.random() * particlesCanvas.width,
    y: particlesCanvas.height + Math.random() * 200,
    s: 8 + Math.random() * 12,
    v: 0.4 + Math.random() * 0.9,
    a: 0.10 + Math.random() * 0.20,
    w: (Math.random() - 0.5) * 0.8,
    t: Math.random() * Math.PI * 2
  }));

  function draw(){
    ctx.clearRect(0,0,particlesCanvas.width, particlesCanvas.height);

    particles.forEach(p => {
      p.y -= p.v;
      p.x += p.w;
      p.t += 0.02;

      if(p.y < -50){
        p.x = Math.random() * particlesCanvas.width;
        p.y = particlesCanvas.height + Math.random()*120;
      }

      ctx.globalAlpha = p.a;
      const x = p.x + Math.sin(p.t)*1.2;
      const y = p.y;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x - p.s/2, y - p.s/2, x - p.s, y + p.s/4, x, y + p.s);
      ctx.bezierCurveTo(x + p.s, y + p.s/4, x + p.s/2, y - p.s/2, x, y);

      ctx.fillStyle = "rgba(216,166,166,0.45)";
      ctx.fill();

      ctx.globalAlpha = 1;
    });

    particleRAF = requestAnimationFrame(draw);
  }

  if(particleRAF) cancelAnimationFrame(particleRAF);
  draw();
  window.addEventListener("resize", resize);
}

/* =========================
   SETTINGS (NIGHT MODE + MUSIC + EXPORT/IMPORT)
========================= */
function initSettings(){
  const nightToggle = document.getElementById("nightToggle");
  const musicToggle = document.getElementById("musicToggle");
  const bgMusic = document.getElementById("bgMusic");

  const logoutBtn = document.getElementById("logoutBtn");
  const resetPromisesBtn = document.getElementById("resetPromisesBtn");
  const resetAllBtn = document.getElementById("resetAllBtn");

  const exportBtn = document.getElementById("exportDataBtn2");
  const importInput = document.getElementById("importDataInput2");

  // Night mode
  const nightEnabled = localStorage.getItem(LS.night) === "1";
  applyNightMode(nightEnabled);
  if(nightToggle){
    nightToggle.checked = nightEnabled;
    nightToggle.addEventListener("change", () => {
      const enabled = nightToggle.checked;
      localStorage.setItem(LS.night, enabled ? "1" : "0");
      applyNightMode(enabled);
      toast(enabled ? "Night mode enabled 🌙" : "Night mode disabled 🤍");
    });
  }

  // Music
  ensureMusicPreference();
  const musicEnabled = localStorage.getItem(LS.music) === "1";
  if(musicToggle){
    musicToggle.checked = musicEnabled;
    musicToggle.addEventListener("change", () => {
      const enabled = musicToggle.checked;
      localStorage.setItem(LS.music, enabled ? "1" : "0");
      if(enabled){
        playMusicSafe();
        toast("Music enabled 🎶");
      } else {
        bgMusic.pause();
        toast("Music disabled 🤍");
      }
    });
  }

  if(musicEnabled){
    playMusicSafe();
  }

  // Logout
  if(logoutBtn){
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem(LS.loggedIn);
      localStorage.removeItem(LS.user);
      toast("Logged out.");
      showScreen("login");
    });
  }

  // Reset promises
  if(resetPromisesBtn){
    resetPromisesBtn.addEventListener("click", () => {
      const ok = confirm("Reset promises? You will need to check them again.");
      if(!ok) return;
      localStorage.removeItem(LS.promisesDone);
      localStorage.removeItem(LS.promisesState);
      toast("Promises reset.");
      showScreen("promises");
      location.reload(); // simple safe refresh
    });
  }

  // Reset all
  if(resetAllBtn){
    resetAllBtn.addEventListener("click", () => {
      const ok = confirm("Reset ALL data? This will delete everything.");
      if(!ok) return;
      Object.values(LS).forEach(k => localStorage.removeItem(k));
      toast("All data reset.");
      showScreen("login");
      location.reload();
    });
  }

  // Export / Import
  if(exportBtn) exportBtn.addEventListener("click", exportAllData);
  if(importInput) importInput.addEventListener("change", importAllData);

  function applyNightMode(enabled){
    document.body.classList.toggle("night", enabled);
    if(enabled) setTimeout(spawnShootingStar, 500);
  }

  function playMusicSafe(){
    if(!bgMusic) return;
    bgMusic.volume = 0.35;
    bgMusic.play().catch(() => {
      toast("Tap anywhere to start the music 🎶");
      document.addEventListener("click", () => bgMusic.play().catch(()=>{}), { once: true });
    });
  }

  async function exportAllData(){
    const payload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      localStorage: {
        [LS.timeline]: localStorage.getItem(LS.timeline),
        [LS.moods]: localStorage.getItem(LS.moods),
        [LS.promisesDone]: localStorage.getItem(LS.promisesDone),
        [LS.promisesState]: localStorage.getItem(LS.promisesState),
        [LS.music]: localStorage.getItem(LS.music),
        [LS.night]: localStorage.getItem(LS.night)
      }
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kerrvin-shenneth-keepsake-backup-${isoDate(new Date())}.json`;
    a.click();
    URL.revokeObjectURL(url);

    toast("Exported backup JSON.");
  }

  async function importAllData(e){
    const file = e.target.files?.[0];
    if(!file) return;

    const ok = confirm("Import backup? This will overwrite existing data.");
    if(!ok) return;

    try{
      const text = await file.text();
      const data = JSON.parse(text);

      if(data.localStorage){
        Object.entries(data.localStorage).forEach(([k,v]) => {
          if(v !== null && v !== undefined) localStorage.setItem(k, v);
        });
      }

      toast("Imported successfully.");
      location.reload();
    } catch(err){
      console.error(err);
      toast("Import failed. Invalid JSON.");
    } finally {
      e.target.value = "";
    }
  }
}

/* =========================
   SHOOTING STARS
========================= */
function initShootingStars(){
  const shootingStars = document.getElementById("shootingStars");
  if(!shootingStars) return;

  if(shootingStarTimer) clearTimeout(shootingStarTimer);

  const loop = () => {
    if(document.body.classList.contains("night")){
      spawnShootingStar();
    }
    shootingStarTimer = setTimeout(loop, 4000 + Math.random() * 6000);
  };

  loop();
}

function spawnShootingStar(){
  const shootingStars = document.getElementById("shootingStars");
  if(!shootingStars) return;

  const star = document.createElement("div");
  star.className = "shooting-star";

  star.style.top = `${Math.random() * 35}%`;
  star.style.left = `${Math.random() * 55 - 20}%`;

  shootingStars.appendChild(star);
  star.addEventListener("animationend", () => star.remove());
}

/* =========================
   HELPERS
========================= */
function isoDate(d){ return d.toISOString().slice(0,10); }

function pad(n){ return String(n).padStart(2, "0"); }

function nextMonthsaryDate(now){
  const year = now.getFullYear();
  let month = now.getMonth();
  const day = now.getDate();
  if(day > 6) month += 1;
  return new Date(year, month, 6, 0, 0, 0);
}

function formatCountdown(ms){
  if(ms <= 0) return "0d 00:00:00";
  const days = Math.floor(ms / (1000*60*60*24));
  const hours = Math.floor((ms / (1000*60*60)) % 24);
  const minutes = Math.floor((ms / (1000*60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return `${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function formatSince(start, now){
  let years = 0, months = 0;
  let temp = new Date(start);

  while(new Date(temp.getFullYear() + 1, temp.getMonth(), temp.getDate()) <= now){
    temp = new Date(temp.getFullYear() + 1, temp.getMonth(), temp.getDate());
    years++;
  }
  while(new Date(temp.getFullYear(), temp.getMonth() + 1, temp.getDate()) <= now){
    temp = new Date(temp.getFullYear(), temp.getMonth() + 1, temp.getDate());
    months++;
  }

  const remainingMs = now - temp;
  const days = Math.floor(remainingMs / (1000*60*60*24));
  const hours = Math.floor((remainingMs / (1000*60*60)) % 24);
  const minutes = Math.floor((remainingMs / (1000*60)) % 60);
  const seconds = Math.floor((remainingMs / 1000) % 60);

  return `${years}y ${months}m ${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function hashString(str){
  let h = 2166136261;
  for(let i=0;i<str.length;i++){
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function cryptoRandomId(){
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function toast(text){
  const subtitle = document.getElementById("topbarSubtitle");
  if(subtitle){
    const old = subtitle.textContent;
    subtitle.textContent = text;
    setTimeout(() => subtitle.textContent = old || "Always, with you.", 1600);
  }
}

function ensureMusicPreference(){
  if(localStorage.getItem(LS.music) === null){
    localStorage.setItem(LS.music, "1");
  }
}
