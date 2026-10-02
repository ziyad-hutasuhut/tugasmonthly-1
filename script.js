// ==========================================
// 1. STATE MANAGEMENT
// ==========================================
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

// ==========================================
// 2. DOM SELECTORS
// ==========================================
// Candidate 1
const btn1 = document.querySelector("#btn1");
const votesCard1 = document.querySelector("#votesCard1");
const progress1 = document.querySelector("#progress1");
const percent1 = document.querySelector("#percent1");

// Candidate 2
const btn2 = document.querySelector("#btn2");
const votesCard2 = document.querySelector("#votesCard2");
const progress2 = document.querySelector("#progress2");
const percent2 = document.querySelector("#percent2");

// Candidate 3
const btn3 = document.querySelector("#btn3");
const votesCard3 = document.querySelector("#votesCard3");
const progress3 = document.querySelector("#progress3");
const percent3 = document.querySelector("#percent3");

// Candidate 4
const btn4 = document.querySelector("#btn4");
const votesCard4 = document.querySelector("#votesCard4");
const progress4 = document.querySelector("#progress4");
const percent4 = document.querySelector("#percent4");

// Global Elements
const totalVotesEl = document.querySelector("#totalVotes");
const winnerTextEl = document.querySelector("#winnerText");
const feedbackEl = document.querySelector("#feedback");
const resetBtn = document.querySelector("#resetBtn");

// ==========================================
// 3. HELPER & CORE FUNCTIONS
// ==========================================

// Update UI Angka Kartu & Statistik Global
function updateUI() {
    // Synchronize angka suara di UI Card
    votesCard1.textContent = count1;
    votesCard2.textContent = count2;
    votesCard3.textContent = count3;
    votesCard4.textContent = count4;

    const total = count1 + count2 + count3 + count4;
    totalVotesEl.textContent = total;

    // Hitung Persentase & Progress Bar
    updateCandidateStats(count1, total, progress1, percent1);
    updateCandidateStats(count2, total, progress2, percent2);
    updateCandidateStats(count3, total, progress3, percent3);
    updateCandidateStats(count4, total, progress4, percent4);

    // Cari Pemenang
    calculateWinner(total);
}

function updateCandidateStats(votes, total, progressEl, percentEl) {
    let percentage = 0;
    if (total > 0) {
        percentage = Math.round((votes / total) * 100);
    }
    progressEl.style.width = percentage + "%";
    percentEl.textContent = percentage + "%";
}

function calculateWinner(total) {
    if (total === 0) {
        winnerTextEl.textContent = "Belum ada suara";
        return;
    }

    const maxVote = Math.max(count1, count2, count3, count4);
    let winners = [];

    if (count1 === maxVote) winners.push("🎮 Mini Game 2D");
    if (count2 === maxVote) winners.push("🛒 E-Commerce Store");
    if (count3 === maxVote) winners.push("📝 Task Manager");
    if (count4 === maxVote) winners.push("🧠 Quiz Master");

    if (winners.length > 1) {
        winnerTextEl.textContent = "Seri: " + winners.join(" & ");
    } else {
        winnerTextEl.textContent = winners[0] + " (" + maxVote + " Votes)";
    }
}

// Fungsi Menampilkan Notification Feedback
function showFeedback(candidateName) {
    feedbackEl.textContent = "✅ Suara ditambahkan untuk: " + candidateName;
    feedbackEl.classList.remove("hidden");
}

// ==========================================
// 4. EVENT LISTENERS
// ==========================================

btn1.addEventListener("click", function () {
    count1++;
    showFeedback("Mini Game 2D");
    updateUI();
});

btn2.addEventListener("click", function () {
    count2++;
    showFeedback("E-Commerce Store");
    updateUI();
});

btn3.addEventListener("click", function () {
    count3++;
    showFeedback("Task Manager");
    updateUI();
});

btn4.addEventListener("click", function () {
    count4++;
    showFeedback("Quiz Master");
    updateUI();
});

// Reset Function
resetBtn.addEventListener("click", function () {
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;

    feedbackEl.classList.add("hidden");
    updateUI();
});