//Selectors
const gameCells = document.querySelectorAll(".cell");
const result = document.querySelector(".result");
const markerIndicator = document.querySelector(".markerIndicator");
const resetButton = document.querySelector(".reset");
const changeMarker = document.querySelector(".changeMarker");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const chooseTurnOrderWrapper = document.querySelector(
  ".chooseTurnOrderWrapper"
);

//Variables
let gameBoard = [];

let playerMarker = "X";

let cpuMarker = "O";

let isFirst = true;

//Functions
const showResetButton = () => {
  resetButton.style.display = "unset";
  chooseTurnOrderWrapper.style.display = "unset";
  changeMarker.style.display = "unset";
  if (isFirst) {
    first.style.background = "var(--white)";
    first.style.color = "var(--black)";
    first.style.outlineColor = "var(--white)";
  } else {
    second.style.background = "var(--white)";
    second.style.color = "var(--black)";
    second.style.outlineColor = "var(--white)";
  }
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

const chooseTurnOrder = () => {
  isFirst = !isFirst;
  if (isFirst) {
    first.style.background = "var(--white)";
    first.style.color = "var(--black)";
    first.style.outlineColor = "var(--white)";
    second.style.background = "";
    second.style.color = "var(--white)";
    second.style.outlineColor = "var(--white)";
  } else {
    second.style.background = "var(--white)";
    second.style.color = "var(--black)";
    second.style.outlineColor = "var(--white)";
    first.style.background = "";
    first.style.color = "var(--white)";
    first.style.outlineColor = "var(--white)";
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
  chooseTurnOrderWrapper.style.display = "none";
  changeMarker.style.display = "none";
  result.innerHTML = "";
  for (let i = 0; i < gameCells.length; i++) {
    gameBoard[i] = "";
  }
  if (!isFirst) {
    randomMove();
  }
  renderGame();
});

for (let i = 0; i < gameCells.length; i++) {
  gameBoard[i] = "";
  gameCells[i].addEventListener("click", () => {
    changeMarker.style.display = "none";
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

first.addEventListener("click", () => {
  chooseTurnOrder();
});

second.addEventListener("click", () => {
  chooseTurnOrder();
});

//On Start
renderGame();

//Pick who goes first
