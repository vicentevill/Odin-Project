const gameCells = document.querySelectorAll(".cell");

let gameBoard = [];

for (let i = 0; i < gameCells.length; i++) {
  gameBoard[i] = "";
  gameCells[i].addEventListener("click", () => {
    if (!gameBoard[i]) {
      gameBoard[i] = "X";
      randomMove();
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

randomMove();
renderGame();
//make check for win function
