let selectedColor = "";

const fortunes = {
  3: "You are entering a season where things finally start making sense.",
  6: "Someone appreciates your presence more than they know how to say.",
  9: "You are not behind — you are becoming ready.",
  11: "Your intuition has been right. Trust the feeling before you need proof.",
  14: "The softness you carry is not weakness. It is evidence that you survived with your heart intact.",
  17: "You are allowed to want more without feeling guilty for outgrowing less.",
  21: "Something beautiful is forming quietly in the background.",
  24: "Your next chapter needs confidence, not permission.",
  27: "You are more magnetic when you stop trying to be understood by everyone.",
  30: "The version of you that chooses peace is the version that changes everything."
};

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
    screen.style.display = "none";
  });

  const targetScreen = document.getElementById(screenId);
  targetScreen.classList.add("active");
  targetScreen.style.display = "block";
}

function goToColors() {
  showScreen("colorScreen");
}

function chooseColor(color) {
  selectedColor = color;

  document.getElementById("chosenColorText").textContent =
    `You chose ${color}. Now pick your number.`;

  showScreen("numberScreen");
}

function chooseNumber(num) {
  const fortune = fortunes[num];

  document.getElementById("fortuneLabel").textContent =
    `${selectedColor} · ${num}`;

  document.getElementById("fortuneText").textContent = fortune;

  showScreen("fortuneScreen");
}

function restartGame() {
  selectedColor = "";
  showScreen("startScreen");
}