let playerSection = "Rock";

let cpuSelection = "";

function calculateWinner() {
  const winning = {
    Rock: ["Paper"],
    Paper: ["Scissors"],
    Scissors: ["Rock"],
  };

  console.log(winning[playerSection].includes(cpuSelection));
}

calculateWinner();
