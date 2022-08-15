//players
const player = "O";
const computer = "X";

let boardFull = false;
let gameBoard = ["", "", "", "", "", "", "", "", ""];

//html elements
const boardContainer = document.querySelector(".playArea");
const winnerStatement = document.getElementById("winner");

//create game board
const renderBoard = () => {
    boardContainer.innerHTML = ""
    gameBoard.forEach((val, i) => {
      boardContainer.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${gameBoard[i]}</div>`
      if (val == player || val == computer) {
        document.querySelector(`#block_${i}`).classList.add("occupied");
      }
    });
  };
  
//player turn - each click
  const addPlayerMove = e => {
    if (!boardFull && gameBoard[e] == "") {
      gameBoard[e] = player;
      gameLoop();
      addComputerMove();
    }
  };

  const addComputerMove = () => {
    if (!boardFull) {
      do {
        selected = Math.floor(Math.random() * 9);
      } while (gameBoard[selected] != "");
      gameBoard[selected] = computer;
      gameLoop();
    }
  };

  const gameLoop = () => {
    renderBoard();
    checkBoardComplete();
    checkForWinner();
  }

checkBoardComplete = () => {
  let flag = true;
  //loop through gameBoard check if full
  gameBoard.forEach(element => {
    if (element != player && element != computer) {
      flag = false;
    }
  });
  boardFull = flag;
};

//returns line combos
const checkLine = (a, b, c) => {
  return (
    gameBoard[a] == gameBoard[b] &&
    gameBoard[b] == gameBoard[c] &&
    (gameBoard[a] == player || gameBoard[a] == computer)
  );
};

const checkMatch = () => {
    //check horizontal
  for (i = 0; i < 9; i += 3) {
    if (checkLine(i, i + 1, i + 2)) {
      document.querySelector(`#block_${i}`).classList.add("win");
      document.querySelector(`#block_${i + 1}`).classList.add("win");
      document.querySelector(`#block_${i + 2}`).classList.add("win");
      return gameBoard[i];
    }
  }
  //check vertical
  for (i = 0; i < 3; i++) {
    if (checkLine(i, i + 3, i + 6)) {
      document.querySelector(`#block_${i}`).classList.add("win");
      document.querySelector(`#block_${i + 3}`).classList.add("win");
      document.querySelector(`#block_${i + 6}`).classList.add("win");
      return gameBoard[i];
    }
  }
  //check diagonals
  if (checkLine(0, 4, 8)) {
    document.querySelector("#block_0").classList.add("win");
    document.querySelector("#block_4").classList.add("win");
    document.querySelector("#block_8").classList.add("win");
    return gameBoard[0];
  }
  if (checkLine(2, 4, 6)) {
    document.querySelector("#block_2").classList.add("win");
    document.querySelector("#block_4").classList.add("win");
    document.querySelector("#block_6").classList.add("win");
    return gameBoard[2];
  }
  return "";
};

const checkForWinner = () => {
  let res = checkMatch()
  if (res == player) {
    winner.innerText = "Winner is player!!";
    winner.classList.add("playerWin");
    boardFull = true
  } else if (res == computer) {
    winner.innerText = "Winner is computer";
    winner.classList.add("computerWin");
    boardFull = true
  } else if (boardFull) {
    winner.innerText = "Draw!";
    winner.classList.add("draw");
  }
};

const resetBoard = () => {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  boardFull = false;
  winner.classList.remove("playerWin");
  winner.classList.remove("computerWin");
  winner.classList.remove("draw");
  winner.innerText = "";
  renderBoard();
};

//initial render
renderBoard();