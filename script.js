// ===== CONFIG =====
const correctPassword = "capybara"; // change anytime

// ===== ELEMENTS =====
const lockScreen = document.getElementById("lockScreen");
const mainSite = document.getElementById("mainSite");
const passwordInput = document.getElementById("passwordInput");
const continueBtn = document.getElementById("continueBtn");
const errorMsg = document.getElementById("errorMsg");

const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("music");

// ===== FUNCTIONS =====
function unlockSite() {
  const input = passwordInput.value;

  if (input === correctPassword) {
    // switch screens
    lockScreen.classList.remove("active");
    mainSite.classList.add("active");

    // change background to pink after unlocking
    document.body.style.background = "pink";

    // start music (allowed due to button click)
    music.play().catch(() => {});
  } else {
    errorMsg.style.display = "block";
  }
}

function startLove() {
  mainSite.innerHTML =
    "<h1 style='margin:0 0 10px 0; font-size:3em;'>I knew you'd say yes ❤️</h1>" +
    "<p style='font-size:1.2em; margin:0;'>Happy Valentine’s Day 💕</p>";
}

// ===== EVENTS =====
continueBtn.addEventListener("click", unlockSite);

passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") unlockSite();
});

yesBtn.addEventListener("click", startLove);
