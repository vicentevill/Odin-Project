const rockButton = document.querySelector(".Rock");
const paperButton = document.querySelector(".Paper");
const scissorsButton = document.querySelector(".Scissors");

let playerSection = "";

let cpuSelection = "";

rockButton.addEventListener("click", () => {
  playerSection = "Rock";
});

paperButton.addEventListener("click", () => {
  playerSection = "Paper";
});

scissorsButton.addEventListener("click", () => {
  playerSection = "Scissors";
});

function calculateWinner() {
  const cpuOptions = ["Rock", "Paper", "Scissors"];

  const winning = {
    Rock: ["Paper"],
    Paper: ["Scissors"],
    Scissors: ["Rock"],
  };

  cpuSelection = cpuOptions[Math.floor(Math.random() * 3)];

  console.log(cpuSelection);
  console.log(winning[playerSection].includes(cpuSelection));
}
