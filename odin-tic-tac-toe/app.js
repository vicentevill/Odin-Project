const gameCells = document.querySelectorAll(".cell");

let gameBoard = [];

for (let i = 0; i < gameCells.length; i++) {
  gameBoard[i] = "";
  gameCells[i].addEventListener("click", () => {
    if (!gameBoard[i]) {
      gameBoard[i] = "X";
      checkWinner("X");
      renderGame();
    }
  });
}

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
  gameBoard[openCells[randomCell]] = "O";
};

const checkWinner = (marker) => {
  if (gameBoard[0] && gameBoard[1] && gameBoard[2] === marker) {
    alert("Winner");
  } else if (gameBoard[3] && gameBoard[4] && gameBoard[5] === marker) {
    alert("Winner");
  } else if (gameBoard[6] && gameBoard[7] && gameBoard[8] === marker) {
    alert("Winner");
  }
  //
  else if (gameBoard[2] && gameBoard[4] && gameBoard[6] === marker) {
    alert("Winner");
  } else if (gameBoard[0] && gameBoard[4] && gameBoard[8] === marker) {
    alert("Winner");
  }
  //
  else if (gameBoard[0] && gameBoard[3] && gameBoard[6] === marker) {
    alert("Winner");
  } else if (gameBoard[1] && gameBoard[4] && gameBoard[7] === marker) {
    alert("Winner");
  } else if (gameBoard[2] && gameBoard[5] && gameBoard[8] === marker) {
    alert("Winner");
  } else {
    randomMove();
  }
};

renderGame();
//make check for win function
