//Selectors
const gameCells = document.querySelectorAll(".cell");
const result = document.querySelector(".result");
const markerIndicator = document.querySelector(".markerIndicator");
const resetButton = document.querySelector(".reset");
const changeMarker = document.querySelector(".changeMarker");

//Variables
let gameBoard = [];

let playerMarker = "X";

let cpuMarker = "O";

//Functions
const showResetButton = () => {
  resetButton.style.display = "unset";
};

const renderGame = () => {
  for (let i = 0; i < gameCells.length; i++) {
    gameCells[i].innerHTML = gameBoard[i];
  }
};

const randomMove = () => {
  let openCells = [];

  for (let i = 0; i < 9; i++) {
    if (!gameBoard[i]) {
      openCells.push(i);
    }
  }

  let randomCell = Math.floor(Math.random() * openCells.length);

  gameBoard[openCells[randomCell]] = cpuMarker;
};

const checkWinner = (marker) => {
  if (
    gameBoard[0] === marker &&
    gameBoard[1] === marker &&
    gameBoard[2] === marker
  ) {
    showResetButton();
    return true;
  } else if (
    gameBoard[3] === marker &&
    gameBoard[4] === marker &&
    gameBoard[5] === marker
  ) {
    showResetButton();
    return true;
  } else if (
    gameBoard[6] === marker &&
    gameBoard[7] === marker &&
    gameBoard[8] === marker
  ) {
    showResetButton();
    return true;
  } else if (
    gameBoard[2] === marker &&
    gameBoard[4] === marker &&
    gameBoard[6] === marker
  ) {
    showResetButton();
    return true;
  } else if (
    gameBoard[0] === marker &&
    gameBoard[4] === marker &&
    gameBoard[8] === marker
  ) {
    showResetButton();
    return true;
  } else if (
    gameBoard[0] === marker &&
    gameBoard[3] === marker &&
    gameBoard[6] === marker
  ) {
    showResetButton();
    return true;
  } else if (
    gameBoard[1] === marker &&
    gameBoard[4] === marker &&
    gameBoard[7] === marker
  ) {
    showResetButton();
    return true;
  } else if (
    gameBoard[2] === marker &&
    gameBoard[5] === marker &&
    gameBoard[8] === marker
  ) {
    showResetButton();
    return true;
  } else {
    return false;
  }
};

const checkTie = () => {
  const allTrue = gameBoard.every((element) => !!element);
  if (allTrue && !checkWinner(playerMarker) && !checkWinner(cpuMarker)) {
    result.innerHTML = "It's a Tie.";
    showResetButton();
  }
};

//Event Listeners
changeMarker.addEventListener("click", () => {
  if (playerMarker === "X") {
    playerMarker = "O";
    markerIndicator.innerHTML = `Marker: ${playerMarker}`;
    cpuMarker = "X";
  } else {
    playerMarker = "X";
    markerIndicator.innerHTML = `Marker: ${playerMarker}`;
    cpuMarker = "O";
  }
});

resetButton.addEventListener("click", () => {
  resetButton.style.display = "none";
  result.innerHTML = "";
  for (let i = 0; i < gameCells.length; i++) {
    gameBoard[i] = "";
  }
  renderGame();
});

for (let i = 0; i < gameCells.length; i++) {
  gameBoard[i] = "";
  gameCells[i].addEventListener("click", () => {
    if (
      !gameBoard[i] &&
      !checkWinner(playerMarker) &&
      !checkWinner(cpuMarker)
    ) {
      gameBoard[i] = playerMarker;
      randomMove();
      if (checkWinner(playerMarker)) {
        result.innerHTML = "You Win!";
      } else if (checkWinner(cpuMarker)) {
        result.innerHTML = "You Lose.";
      } else {
        checkTie();
      }
      renderGame();
    }
  });
}

//On Start
renderGame();

//Pick who goes first
