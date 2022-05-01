const turnPlayer = document.querySelector(".turnPlayer");
const theWinner = document.querySelector("#theWinner");
const player1WinCount = document.querySelector(".player1");
const player2WinCount = document.querySelector(".player2");

const gameBoard = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "player1";
let turnCount = 0;
let gameState = true;
let playerOneWins = 0;
let playerTwoWins = 0;

const whoWon = () => {
  if (currentPlayer === "player1") {
    theWinner.innerText = "Player One Wins";
    playerOneWins++;
    player1WinCount.innerText = playerOneWins;
    gameState = false;
  } else {
    theWinner.innerText = "Player Two Wins";
    playerTwoWins++;
    player2WinCount.innerText = playerTwoWins;
    gameState = false;
  }
};

const checkWinConditions = () => {
  // all win conditions
  // 0,1,2  a,b,c
  // 3,4,5  d,e,f
  // 6,7,8  g,h,i

  // 0,3,6  a,d,g
  // 1,4,7  b,e,h
  // 2,5,8  c,f,i

  // 0,4,8  a,e,i
  // 2,4,6  c,e,g

  [a, b, c, d, e, f, g, h, i] = gameBoard;

  // row 1, column 1
  if (a !== "") {
    if ((a === b && b === c) || (a === d && d === g)) {
      whoWon();
    }
  }
  // row 2, column 2, cross 1 & 2
  if (e !== "") {
    if (e === d && d === f) {
      whoWon();
    }
    if (e === b && b === h) {
      whoWon();
    }
    if (e === a && a === i) {
      whoWon();
    }
    if (e === c && c === g) {
      whoWon();
    }
  }
  // row 3, column 3
  if (i !== "") {
    if (i === h && h === g) {
      whoWon();
    }
    if (i === f && f === c) {
      whoWon();
    }
  }
};

const playerTurn = (el, id) => {
  updateGameBoard(id);
  if (currentPlayer === "player1") {
    el.innerText = "X";
    checkWinConditions();
    currentPlayer = "player2";
  } else {
    el.innerText = "O";
    checkWinConditions();
    currentPlayer = "player1";
  }
};

const updateGameBoard = (id) => {
  [a, b, c, d, e, f, g, h, i] = gameBoard;

  switch (id) {
    case "game-row-a":
      if (a === "x" || a === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[0] = "x")
          : (gameBoard[0] = "o");
      }
      break;
    case "game-row-b":
      if (b === "x" || b === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[1] = "x")
          : (gameBoard[1] = "o");
      }

      break;
    case "game-row-c":
      if (c === "x" || c === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[2] = "x")
          : (gameBoard[2] = "o");
      }
      break;
    case "game-row-d":
      if (d === "x" || d === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[3] = "x")
          : (gameBoard[3] = "o");
      }
      break;
    case "game-row-e":
      if (e === "x" || e === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[4] = "x")
          : (gameBoard[4] = "o");
      }
      break;
    case "game-row-f":
      if (f === "x" || f === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[5] = "x")
          : (gameBoard[5] = "o");
      }
      break;
    case "game-row-g":
      if (g === "x" || g === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[6] = "x")
          : (gameBoard[6] = "o");
      }
      break;
    case "game-row-h":
      if (h === "x" || h === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[7] = "x")
          : (gameBoard[7] = "o");
      }
      break;
    case "game-row-i":
      if (i === "x" || i === "o") {
        return;
      } else {
        currentPlayer === "player1"
          ? (gameBoard[8] = "x")
          : (gameBoard[8] = "o");
      }
      break;

    default:
      break;
  }
};

const draw = () => {
  turnPlayer.innerText = "It's a DRAW! Y'all Suck!";
  gameState = false;
  turnCount = 0;
};

const game = (e) => {
  let id = e.target.id;
  const className = e.target.className;
  const el = e.target;

  if (className !== "grid-items") {
    return;
  }

  playerTurn(el, id);

  turnCount++;

  if (turnCount === 9) {
    draw();
  }

  if (!gameState) {
    document.querySelector(".container").removeEventListener("click", game);
  }
};

const resetGame = (e) => {
  const allEls = document.querySelectorAll(".grid-items");

  turnCount = 0;
  gameState = true;
  currentPlayer = "player1";
  theWinner.innerText = "";

  for (let i = 0; i < allEls.length; i++) {
    allEls[i].innerText = "";
  }
  for (let j = 0; j < gameBoard.length; j++) {
    gameBoard[j] = "";
  }
  document.querySelector(".container").addEventListener("click", game);
};

document.querySelector(".container").addEventListener("click", game);
document.querySelector(".reset").addEventListener("click", resetGame);

//removeeventlistener
// if a win condition is met, then the currentplayer is the winner
