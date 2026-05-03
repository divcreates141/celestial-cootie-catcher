let selectedColor = "";

const fortunes = {
  Rose: ["You love deeply.", "You deserve softness."],
  Sapphire: ["You bring calm.", "Clarity is coming."]
};

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");
}

function goToColors() {
  showScreen("colorScreen");
}

function chooseColor(color) {
  selectedColor = color;
  showScreen("numberScreen");
}

function chooseNumber(num) {
  const fortune = fortunes[selectedColor][num - 1];
  document.getElementById("fortuneText").textContent = fortune;
  showScreen("fortuneScreen");
}

function restartGame() {
  showScreen("startScreen");
}