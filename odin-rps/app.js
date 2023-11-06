const rockButton = document.querySelector(".Rock");
const paperButton = document.querySelector(".Paper");
const scissorsButton = document.querySelector(".Scissors");
const playButton = document.querySelector(".Play");
const result = document.querySelector(".Result");
const options = document.querySelectorAll(".Option");

let playerSection = "";

let cpuSelection = "";
//
// let count = 0;

// const test = document.querySelector(".test");

// test.innerText = count;

// test.addEventListener("click", () => {
//   count++;
//   test.innerText = count;
// });
//

rockButton.addEventListener("click", () => {
  playerSection = "Rock";
});

paperButton.addEventListener("click", () => {
  playerSection = "Paper";
});

scissorsButton.addEventListener("click", () => {
  playerSection = "Scissors";
});

playButton.addEventListener("click", () => {
  if (playerSection) {
    calculateWinner();
  }
});

function resetOptions() {
  for (let i = 0; i < options.length; i++) {
    options[i].style.outline = "";
  }
}

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", () => {
    resetOptions();
    options[i].style.outline = "4px solid white";
  });
}

function calculateWinner() {
  const cpuOptions = ["Rock", "Paper", "Scissors"];

  const winning = {
    Rock: ["Paper"],
    Paper: ["Scissors"],
    Scissors: ["Rock"],
  };

  cpuSelection = cpuOptions[Math.floor(Math.random() * 3)];

  console.log(cpuSelection);
  // console.log(winning[playerSection].includes(cpuSelection));
  if (playerSection === cpuSelection) {
    result.innerHTML = `You picked '${playerSection}', your opponent picked '${cpuSelection}'. <strong>It's a tie.</strong>`;
  } else if (winning[playerSection].includes(cpuSelection)) {
    result.innerHTML = `You picked '${playerSection}', your opponent picked '${cpuSelection}'. <strong>You lose.</strong>`;
  } else if (!winning[playerSection].includes(cpuSelection)) {
    result.innerHTML = `You picked '${playerSection}', your opponent picked '${cpuSelection}'. <strong>You win!</strong>`;
  }

  // result.innerText = `Result: You picked '${playerSection}', your opponent picked '${cpuSelection}'`;
}
