// ===== CONFIG =====
const correctPassword = "capybara";

// ===== ELEMENTS =====
const lockScreen = document.getElementById("lockScreen");
const mainSite = document.getElementById("mainSite");
const passwordInput = document.getElementById("passwordInput");
const continueBtn = document.getElementById("continueBtn");
const errorMsg = document.getElementById("errorMsg");
const music = document.getElementById("music");

// ===== FUNCTIONS =====
function unlockSite() {
  const input = passwordInput.value;

  if (input === correctPassword) {
    errorMsg.style.display = "none";

    // Switch screens
    lockScreen.classList.remove("active");
    mainSite.classList.add("active");

    // Pink background for the second page
    document.body.style.background = "var(--pink-bg)";

    // Start music immediately on successful Continue
    music.play().catch(() => {});
  } else {
    errorMsg.style.display = "block";
  }
}

// Allow Enter key
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") unlockSite();
});

// Button click
continueBtn.addEventListener("click", unlockSite);
