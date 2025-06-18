const choices = ["batu", "gunting", "kertas"];
const buttons = document.querySelectorAll("[data-choice]");
const playerChoiceEl = document.getElementById("playerChoice");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");
const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    playerChoiceEl.textContent = playerChoice;
    computerChoiceEl.textContent = computerChoice;

    if (result === "win") {
      resultText.textContent = "Kamu Menang!";
      resultText.className = "mt-3 text-success";
      playerScore++;
    } else if (result === "lose") {
      resultText.textContent = "Kamu Kalah!";
      resultText.className = "mt-3 text-danger";
      computerScore++;
    } else {
      resultText.textContent = "Seri!";
      resultText.className = "mt-3 text-secondary";
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "batu" && computer === "gunting") ||
    (player === "gunting" && computer === "kertas") ||
    (player === "kertas" && computer === "batu")
  ) {
    return "win";
  } else {
    return "lose";
  }
}
