// Syllable trainer built from the same base set as the Hangeul trainer.

const initials = [
	{ jamo: "ㄱ", rom: "g" },
	{ jamo: "ㄴ", rom: "n" },
	{ jamo: "ㄷ", rom: "d" },
	{ jamo: "ㅁ", rom: "m" },
	{ jamo: "ㅅ", rom: "s" },
	{ jamo: "ㅂ", rom: "b" },
	{ jamo: "ㅈ", rom: "j" },
	{ jamo: "ㄹ", rom: "r" },
	{ jamo: "ㅌ", rom: "t" },
	{ jamo: "ㅋ", rom: "k" },
	{ jamo: "ㅊ", rom: "ch" },
	{ jamo: "ㅍ", rom: "p" },
	{ jamo: "ㅇ", rom: "" } // stummer Anlaut
];

const vowels = [
	{ jamo: "ㅏ", rom: "a" },
	{ jamo: "ㅑ", rom: "ya" },
	{ jamo: "ㅓ", rom: "eo" },
	{ jamo: "ㅕ", rom: "yeo" },
	{ jamo: "ㅗ", rom: "o" },
	{ jamo: "ㅛ", rom: "yo" },
	{ jamo: "ㅜ", rom: "u" },
	{ jamo: "ㅠ", rom: "yu" },
	{ jamo: "ㅡ", rom: "eu" },
	{ jamo: "ㅣ", rom: "i" },
	{ jamo: "ㅐ", rom: "ae" },
	{ jamo: "ㅔ", rom: "e" }
];

// Finals limited to the same base set; mapped to standard Hangul Jongseong indices
const finals = [
	{ jamo: "", rom: "", idx: 0 },
	{ jamo: "ㄱ", rom: "k", idx: 1 },
	{ jamo: "ㄴ", rom: "n", idx: 4 },
	{ jamo: "ㄷ", rom: "t", idx: 7 },
	{ jamo: "ㄹ", rom: "l", idx: 8 },
	{ jamo: "ㅁ", rom: "m", idx: 16 },
	{ jamo: "ㅂ", rom: "p", idx: 17 },
	{ jamo: "ㅅ", rom: "t", idx: 19 },
	{ jamo: "ㅇ", rom: "ng", idx: 21 },
	{ jamo: "ㅈ", rom: "t", idx: 22 },
	{ jamo: "ㅊ", rom: "t", idx: 23 },
	{ jamo: "ㅋ", rom: "k", idx: 24 },
	{ jamo: "ㅌ", rom: "t", idx: 25 },
	{ jamo: "ㅍ", rom: "p", idx: 26 }
];

// Hangul composition helpers (19 initials, 21 vowels, 28 finals)
const initialIndex = {
	"ㄱ": 0,
	"ㄲ": 1,
	"ㄴ": 2,
	"ㄷ": 3,
	"ㄸ": 4,
	"ㄹ": 5,
	"ㅁ": 6,
	"ㅂ": 7,
	"ㅃ": 8,
	"ㅅ": 9,
	"ㅆ": 10,
	"ㅇ": 11,
	"ㅈ": 12,
	"ㅉ": 13,
	"ㅊ": 14,
	"ㅋ": 15,
	"ㅌ": 16,
	"ㅍ": 17,
	"ㅎ": 18
};

const vowelIndex = {
	"ㅏ": 0,
	"ㅐ": 1,
	"ㅑ": 2,
	"ㅒ": 3,
	"ㅓ": 4,
	"ㅔ": 5,
	"ㅕ": 6,
	"ㅖ": 7,
	"ㅗ": 8,
	"ㅘ": 9,
	"ㅙ": 10,
	"ㅚ": 11,
	"ㅛ": 12,
	"ㅜ": 13,
	"ㅝ": 14,
	"ㅞ": 15,
	"ㅟ": 16,
	"ㅠ": 17,
	"ㅡ": 18,
	"ㅢ": 19,
	"ㅣ": 20
};

function composeSyllable(initialJamo, vowelJamo, finalIdx = 0) {
	const l = initialIndex[initialJamo];
	const v = vowelIndex[vowelJamo];
	if (l === undefined || v === undefined) return "?";
	const code = 0xac00 + (l * 21 + v) * 28 + finalIdx;
	return String.fromCharCode(code);
}

let lessons = [];
let current;
let advancedMode = false;

// Sets
const unseen = new Set();
const correctSet = new Set();
const wrongSet = new Set();
const wrongCounter = {};
let timerId = null;
let startTime = null;

// DOM
const lessonEl = document.getElementById("lesson");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("answer");
const feedbackEl = document.getElementById("feedback");
const checkEl = document.getElementById("check");
const restartEl = document.getElementById("restart");
const advancedToggle = document.getElementById("advanced-toggle");
const correctCountEl = document.getElementById("correct-count");
const wrongCountEl = document.getElementById("wrong-count");
const timerEl = document.getElementById("timer");

// Layout container (ähnlich wie Hangeul-Trainer)
const board = document.createElement("div");
board.className = "game-wrapper";

function makeCard(title, id) {
	const box = document.createElement("div");
	box.className = "status-box";
	box.innerHTML = `<h3>${title}</h3><ul id="${id}" class="info-list"></ul>`;
	return box;
}

const openCard = makeCard("🟡 Offen", "unseen");
const correctCard = makeCard("✅ Richtig", "correct");
const wrongCard = makeCard("❌ Falsch", "wrong");

const sideColumn = document.createElement("div");
sideColumn.className = "right-column";
sideColumn.append(correctCard, wrongCard);

lessonEl.parentNode.insertBefore(board, lessonEl);
board.append(openCard, lessonEl, sideColumn);

// Toggle Button Implementation
const toggleContainer = document.getElementById("toggle-container");
const modeToggle = document.createElement("button");
modeToggle.textContent = "Advanced Mode (3 Zeichen): Aus";
modeToggle.className = "mode-toggle";
modeToggle.addEventListener("click", () => {
	advancedMode = !advancedMode;
	toggleContainer.innerHTML = ""; // Clear to prevent duplicates if re-running
	toggleContainer.appendChild(modeToggle); // Re-append
	modeToggle.textContent = advancedMode ? "Advanced Mode (3 Zeichen): An" : "Advanced Mode (3 Zeichen): Aus";
	rebuildLessons(advancedMode);
	resetSession();
});

if (toggleContainer) {
	toggleContainer.appendChild(modeToggle);
}

// Build lessons depending on mode
function rebuildLessons(useCoda) {
	lessons = initials.flatMap(init =>
		vowels.flatMap(v =>
			(useCoda ? finals.filter(f => f.jamo !== "") : finals.filter(f => f.idx === 0)).map(f => ({
				key: `${init.jamo}${v.jamo}${f.jamo}`,
				char: composeSyllable(init.jamo, v.jamo, f.idx),
				answer: (init.rom + v.rom + f.rom).toLowerCase()
			}))
		)
	);

	unseen.clear();
	lessons.forEach(l => unseen.add(l.key));
	correctSet.clear();
	wrongSet.clear();
	Object.keys(wrongCounter).forEach(k => delete wrongCounter[k]);
}

/* ===== Logik ===== */
function pickPool() {
	if (unseen.size > 0) {
		return lessons.filter(l => unseen.has(l.key));
	}
	if (wrongSet.size > 0) {
		return lessons.filter(l => wrongSet.has(l.key));
	}
	return [];
}

function next() {
	const pool = pickPool();

	if (pool.length === 0) {
		questionEl.textContent = "🎉";
		feedbackEl.textContent = "Alle Silben geschafft!";
		inputEl.value = "";
		inputEl.disabled = true;
		if (checkEl) checkEl.hidden = true;
		if (restartEl) {
			restartEl.hidden = false;
			restartEl.focus();
		}
		stopTimer();
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

function handleAnswer() {
	if (!current) return;
	const value = inputEl.value.trim().toLowerCase();
	const isCorrect = value === current.answer;

	if (unseen.has(current.key)) unseen.delete(current.key);

	if (isCorrect) {
		if (wrongSet.has(current.key)) {
			wrongCounter[current.key] = (wrongCounter[current.key] || 0) + 1;
			if (wrongCounter[current.key] >= 3) {
				wrongSet.delete(current.key);
				correctSet.add(current.key);
			}
		} else {
			correctSet.add(current.key);
		}
		feedbackEl.textContent = "✅ Richtig!";
	} else {
		wrongSet.add(current.key);
		wrongCounter[current.key] = 0;
		feedbackEl.textContent = `❌ Falsch – richtig: "${current.answer || "(nichts)"}"`;
	}

	updateLists();
	const delay = isCorrect ? 280 : 1200;
	setTimeout(next, delay);
}

function updateLists() {
	updateList("unseen", unseen);
	updateList("correct", correctSet);
	updateList("wrong", wrongSet, true);
	updateStats();
}

function updateList(id, set, showCounter = false) {
	const el = document.getElementById(id);
	if (!el) return;
	el.innerHTML = "";
	[...set].forEach(key => {
		const li = document.createElement("li");
		const lesson = lessons.find(l => l.key === key);
		li.textContent = showCounter && wrongCounter[key] !== undefined
			? `${lesson?.char || "?"} (${wrongCounter[key]}/3)`
			: lesson?.char || key;
		el.appendChild(li);
	});
}

function updateStats() {
	if (correctCountEl) correctCountEl.textContent = correctSet.size.toString();
	if (wrongCountEl) wrongCountEl.textContent = wrongSet.size.toString();
	if (timerEl && startTime) timerEl.textContent = formatElapsed(Date.now() - startTime);
}

function resetSession() {
	unseen.clear();
	lessons.forEach(l => unseen.add(l.key));
	correctSet.clear();
	wrongSet.clear();
	Object.keys(wrongCounter).forEach(k => delete wrongCounter[k]);
	inputEl.value = "";
	inputEl.disabled = false;
	feedbackEl.textContent = "";
	if (restartEl) restartEl.hidden = true;
	if (checkEl) checkEl.hidden = false;
	startTimer();
	updateStats();
	next();
}

if (checkEl) checkEl.addEventListener("click", handleAnswer);
if (inputEl) inputEl.addEventListener("keydown", e => {
	if (e.key === "Enter") handleAnswer();
});
if (restartEl) restartEl.addEventListener("click", resetSession);

// Old listener removed since we use button now

rebuildLessons(false);
resetSession();

function startTimer() {
	stopTimer();
	startTime = Date.now();
	if (timerEl) timerEl.textContent = "00:00";
	timerId = setInterval(() => {
		if (!startTime) return;
		if (timerEl) timerEl.textContent = formatElapsed(Date.now() - startTime);
	}, 1000);
}

function stopTimer() {
	if (timerId) {
		clearInterval(timerId);
		timerId = null;
	}
}

function formatElapsed(ms) {
	const totalSeconds = Math.floor(ms / 1000);
	const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
	const seconds = String(totalSeconds % 60).padStart(2, "0");
	return `${minutes}:${seconds}`;
}
