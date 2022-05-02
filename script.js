let currentPlayer = "player1";
const userTurn = document.querySelector(".userTurn");
const result = document.querySelector(".result");
const totalOne = document.querySelector(".playerOneTotal");
const totalTwo = document.querySelector(".playerTwoTotal");
let gameState = true;
let turnCount = 0;
let playerOneCount = 0;
let playerTwoCount = 0;

let gameBoard = ["", "", "", "", "", "", "", "", ""];

const updateGameBoard = (id) => {
  switch (id) {
    case "row1":
      if (gameBoard[0] === "x" || gameBoard[0] === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[0] = "x")
          : (gameBoard[0] = "o");
      }
      break;
    case "row2":
      if (gameBoard[1] === "x" || gameBoard[1] === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[1] = "x")
          : (gameBoard[1] = "o");
      }
      break;
    case "row3":
      if (gameBoard[2] === "x" || gameBoard[2] === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[2] = "x")
          : (gameBoard[2] = "o");
      }
      break;
    case "row4":
      if (gameBoard[3] === "x" || gameBoard[3] === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[3] = "x")
          : (gameBoard[3] = "o");
      }
      break;
    case "row5":
      if (gameBoard[4] === "x" || gameBoard[4] === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[4] = "x")
          : (gameBoard[4] = "o");
      }
      break;
    case "row6":
      if (gameBoard[5] === "x" || gameBoard[5] === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[5] = "x")
          : (gameBoard[5] = "o");
      }
      break;
    case "row7":
      if (gameBoard[6] === "x" || gameBoard[6] === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[6] = "x")
          : (gameBoard[6] = "o");
      }
      break;
    case "row8":
      if (gameBoard[7] === "x" || gameBoard[7] === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[7] = "x")
          : (gameBoard[7] = "o");
      }
      break;
    case "row9":
      if (gameBoard[8] === "x" || gameBoard[8] === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[8] = "x")
          : (gameBoard[8] = "o");
      }
      break;
  }
};

const whoWins = () => {
  if (currentPlayer === "player1") {
    result.innerText = "Player One Wins";
    playerOneCount++;
    console.log(playerOneCount);
    totalOne.innerText = playerOneCount;
    //tracking the game state if(true the game is runnig) if (its false then the game stops)
    gameState = false;
  } else {
    result.innerText = "Player Two Wins";
    gameState = false;
    playerTwoCount++;
    console.log(playerTwoCount);
    totalTwo.innerText = playerTwoCount;
  }
};

const checkWinCondition = () => {
  //ROW WINS
  //0,1,2
  //3,4,5
  //6,7,8

  //COLUMN WINS
  //0,3,6
  //1,4,7
  //2,5,8

  //CROSS WINS
  //6,4,2
  //0,4,8
  // row 1 && column 1
  if (gameBoard[0] !== "") {
    if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
      whoWins();
    } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
      whoWins();
    }
  }
  // row 3 && column 3
  if (gameBoard[8] !== "") {
    if (gameBoard[8] === gameBoard[6] && gameBoard[6] === gameBoard[7]) {
      whoWins();
    } else if (gameBoard[8] === gameBoard[5] && gameBoard[5] === gameBoard[2]) {
      whoWins();
    }
  }
  //row 2 &&  column 2 && both crosses
  if (gameBoard[4] !== "") {
    if (gameBoard[4] === gameBoard[3] && gameBoard[3] === gameBoard[5]) {
      whoWins();
    } else if (gameBoard[4] === gameBoard[1] && gameBoard[1] === gameBoard[7]) {
      whoWins();
    } else if (gameBoard[4] === gameBoard[6] && gameBoard[6] === gameBoard[2]) {
      whoWins();
    } else if (gameBoard[4] === gameBoard[0] && gameBoard[0] === gameBoard[8]) {
      whoWins();
    }
  }
};

const playerTurn = (el, id) => {
  updateGameBoard(id);
  if (currentPlayer === "player1") {
    el.innerText = "x";
    userTurn.innerText = "Player Two";
    checkWinCondition();
    currentPlayer = "player2";
  } else {
    el.innerText = "o";
    userTurn.innerText = "Player One";
    checkWinCondition();
    currentPlayer = "player1";
  }
};

const draw = () => {
  userTurn.innerText = "Draw";
  gameState = false;
  turnCount = 0;
};

const reset = () => {
  for (let i = 0; i < 9; i++) {
    gameBoard[i] = "";
  }

  const allElements = document.querySelectorAll(".column");
  for (let j = 0; j < allElements.length; j++) {
    allElements[j].innerText = "";
  }

  turnCount = 0;
  currentPlayer = "player1";
  userTurn.innerText = "Player One";
  result.innerText = "";
  gameState = true;
  document.querySelector(".container").addEventListener("click", runGame);
};

const runGame = (e) => {
  const id = e.target.id;
  const className = e.target.className;
  const element = e.target;
  //if the element(e.target) is not an empty string then...
  if (element.innerText !== "") {
    //...it will stop the whole function and return nothing
    return;
  }

  // if the user clicks on anything but the columns then...
  if (className !== "column") {
    // ...it will stop the whole function and return nothing
    return;
  }

  playerTurn(element, id);

  turnCount++;
  if (turnCount === 9) {
    draw();
  }

  if (gameState === false) {
    document.querySelector(".container").removeEventListener("click", runGame);
  }
};

document.querySelector(".container").addEventListener("click", runGame);
document.querySelector("button").addEventListener("click", reset);
