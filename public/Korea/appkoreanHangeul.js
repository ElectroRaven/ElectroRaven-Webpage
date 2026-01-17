const baseLessons = [
  { char: "ㅏ", answer: "a" }, { char: "ㅑ", answer: "ya" },
  { char: "ㅓ", answer: "eo" }, { char: "ㅕ", answer: "yeo" },
  { char: "ㅗ", answer: "o" }, { char: "ㅛ", answer: "yo" },
  { char: "ㅜ", answer: "u" }, { char: "ㅠ", answer: "yu" },
  { char: "ㅡ", answer: "eu" }, { char: "ㅣ", answer: "i" },
  { char: "ㅐ", answer: "ae" }, { char: "ㅔ", answer: "e" },
  { char: "ㄱ", answer: "g" }, { char: "ㄴ", answer: "n" },
  { char: "ㄷ", answer: "d" }, { char: "ㅁ", answer: "m" },
  { char: "ㅅ", answer: "s" }, { char: "ㅂ", answer: "b" },
  { char: "ㅈ", answer: "j" }, { char: "ㄹ", answer: "r" },
  { char: "ㅌ", answer: "t" }, { char: "ㅋ", answer: "k" },
  { char: "ㅊ", answer: "ch" }, { char: "ㅍ", answer: "p" },
  { char: "ㅇ (Anfang)", answer: "" }, { char: "ㅇ (Ende)", answer: "ng" }
];

const batchimLessons = [
  { char: "ㄱ (Batchim)", answer: "k" },
  { char: "ㄲ (Batchim)", answer: "k" },
  { char: "ㅋ (Batchim)", answer: "k" },
  { char: "ㄴ (Batchim)", answer: "n" },
  { char: "ㄷ (Batchim)", answer: "t" },
  { char: "ㅅ (Batchim)", answer: "t" },
  { char: "ㅆ (Batchim)", answer: "t" },
  { char: "ㅈ (Batchim)", answer: "t" },
  { char: "ㅊ (Batchim)", answer: "t" },
  { char: "ㅌ (Batchim)", answer: "t" },
  { char: "ㅎ (Batchim)", answer: "t" },
  { char: "ㄹ (Batchim)", answer: "l" },
  { char: "ㅁ (Batchim)", answer: "m" },
  { char: "ㅂ (Batchim)", answer: "p" },
  { char: "ㅍ (Batchim)", answer: "p" },
  { char: "ㅇ (Batchim)", answer: "ng" }
];

let activeLessons = baseLessons;

let current;

// Sets
const unseen = new Set();
const correctSet = new Set();
const wrongSet = new Set();
const wrongCounter = {}; // wie oft falsche Zeichen korrekt beantwortet wurden
let timerId = null;
let startTime = null;
let finished = false;

// DOM
const lessonEl = document.getElementById("lesson");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("answer");
const feedbackEl = document.getElementById("feedback");
const checkEl = document.getElementById("check");
const restartEl = document.getElementById("restart");
const timerEl = document.getElementById("timer");

/* ===== Layout ===== */
const wrapper = document.createElement("div");
wrapper.style.display = "flex";
wrapper.style.gap = "1.5rem";
wrapper.style.alignItems = "flex-start";

const makeBox = (title, id) => {
  const box = document.createElement("div");
  box.style.width = "200px";
  box.style.background = "#020617";
  box.style.borderRadius = "12px";
  box.style.padding = "1rem";
  box.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
  box.innerHTML = `<h3>${title}</h3><ul id="${id}" style="padding-left:1rem"></ul>`;
  return box;
};

const leftBox = makeBox("🟡 Noch offen", "unseen");
const rightBox = document.createElement("div");
rightBox.style.display = "flex";
rightBox.style.flexDirection = "column";
rightBox.style.gap = "1rem";

const correctBox = makeBox("✅ Richtig", "correct");
const wrongBox = makeBox("❌ Falsch", "wrong");

rightBox.appendChild(correctBox);
rightBox.appendChild(wrongBox);

// DOM umbauen
lessonEl.parentNode.insertBefore(wrapper, lessonEl);
wrapper.appendChild(leftBox);
wrapper.appendChild(lessonEl);
wrapper.appendChild(rightBox);

const modeToggle = document.createElement("button");
modeToggle.textContent = "Batchim-Training: Aus";
modeToggle.style.marginBottom = "1rem";
modeToggle.addEventListener("click", () => {
  activeLessons = activeLessons === baseLessons ? batchimLessons : baseLessons;
  modeToggle.textContent = activeLessons === batchimLessons ? "Batchim-Training: An" : "Batchim-Training: Aus";
  resetSession();
});
wrapper.parentNode.insertBefore(modeToggle, wrapper);

/* ===== Logik ===== */

function next() {
  if (finished) return;
  let pool;

  if (unseen.size > 0) {
    // noch neue Zeichen vorhanden
    pool = activeLessons.filter(l => unseen.has(l.char));
  } else if (wrongSet.size > 0) {
    // alle neuen Zeichen fertig, jetzt die Fehler abarbeiten
    pool = activeLessons.filter(l => wrongSet.has(l.char));
  } else {
    showFinished();
    return;
  }

  if (restartEl) restartEl.hidden = true;
  inputEl.disabled = false;
  if (checkEl) checkEl.hidden = false;

  current = pool[Math.floor(Math.random() * pool.length)];
  questionEl.textContent = current.char;
  inputEl.value = "";
  feedbackEl.textContent = "";
  inputEl.focus();

  updateLists();
}

// Automatisch Weiter
document.getElementById("check").onclick = handleAnswer;
inputEl.addEventListener("keydown", e => {
  if (e.key === "Enter") handleAnswer();
});

function handleAnswer() {
  if (finished) return;
  const value = inputEl.value.trim().toLowerCase();
  const isCorrect = value === current.answer;

  // Neues Zeichen entfernen
  if (unseen.has(current.char)) unseen.delete(current.char);

  if (isCorrect) {
    // richtig
    if (wrongSet.has(current.char)) {
      wrongCounter[current.char] = (wrongCounter[current.char] || 0) + 1;
      if (wrongCounter[current.char] >= 3) {
        wrongSet.delete(current.char);
        correctSet.add(current.char);
      }
    } else {
      // neues Zeichen oder schon richtiges Zeichen
      correctSet.add(current.char);
    }
    feedbackEl.textContent = "✅ Richtig!";
  } else {
    // falsch
    wrongSet.add(current.char);
    wrongCounter[current.char] = 0;
    feedbackEl.textContent = `❌ Falsch – richtig: "${current.answer || '(nichts)'}"`;
  }

  updateLists();
  if (unseen.size === 0 && wrongSet.size === 0) {
    showFinished();
    return;
  }

  const delay = isCorrect ? 300 : 1200;
  setTimeout(next, delay);
}

// Update-Listen
function updateLists() {
  updateList("unseen", unseen);
  updateList("correct", correctSet);
  updateList("wrong", wrongSet, true);
  updateTimer();
}

function updateList(id, set, showCounter = false) {
  const el = document.getElementById(id);
  el.innerHTML = "";
  [...set].forEach(char => {
    const li = document.createElement("li");
    li.textContent = showCounter && wrongCounter[char] !== undefined
      ? `${char} (${wrongCounter[char]}/3)`
      : char;
    el.appendChild(li);
  });
}

function resetSession() {
  finished = false;
  unseen.clear();
  activeLessons.forEach(l => unseen.add(l.char));
  correctSet.clear();
  wrongSet.clear();
  for (const key in wrongCounter) {
    if (Object.prototype.hasOwnProperty.call(wrongCounter, key)) {
      delete wrongCounter[key];
    }
  }

  inputEl.value = "";
  inputEl.disabled = false;
  feedbackEl.textContent = "";
  if (restartEl) restartEl.hidden = true;
  if (checkEl) checkEl.hidden = false;
  startTimer();
  next();
}

if (restartEl) {
  restartEl.addEventListener("click", resetSession);
  restartEl.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
    }
  });
  restartEl.addEventListener("keyup", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
    }
  });
}

function showFinished() {
  finished = true;
  questionEl.textContent = "🎉 Fertig!";
  feedbackEl.textContent = "Alle Zeichen erfolgreich gelernt!";
  inputEl.value = "";
  inputEl.disabled = true;
  if (checkEl) checkEl.hidden = true;
  if (restartEl) {
    restartEl.hidden = false;
  }
  stopTimer();
}

function startTimer() {
  stopTimer();
  startTime = Date.now();
  if (timerEl) timerEl.textContent = "00:00";
  timerId = setInterval(updateTimer, 1000);
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  startTime = null;
}

function updateTimer() {
  if (!timerEl || !startTime) return;
  const elapsed = Date.now() - startTime;
  const totalSeconds = Math.floor(elapsed / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  timerEl.textContent = `${minutes}:${seconds}`;
}

resetSession();
