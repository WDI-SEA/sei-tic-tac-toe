// TIC TAC TOE
// get from html
const result = document.getElementsByClassName("result");
const resetButton = document.getElementsByClassName("reset");

//GAME
// array for empty gameBoard
let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let gameOver = false;

// ALL PLAYERS
// players
let player1 = "X";
let player2 = "O";

// CURRENT PLAYER
// current player - it always starts with player 1
let currentPlayer = player1;

// SWITCH PLAYERS
// function to switch players
function switchPlayer() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
  document.querySelector(".result").innerText = currentPlayer + "'s turn";
}
// HANDLE MOVES
// function to handle a player's move
function handleMove(move) {
  // check if the move is valid
  if (gameBoard[move] === " " && !gameOver) {
    // update the gameBoard with the move
    gameBoard[move] = currentPlayer;

    // check if the current player has won
    if (checkWin(currentPlayer)) {
      document.querySelector(".result").innerText = currentPlayer + " wins!";
      gameOver = true;
      // // reset the gameBoard
      // gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    } else if (checkTie()) {
        document.querySelector(".result").innerText = "It's a tie";
        gameOver = true;        
    } else {
      // switch to the other player
      switchPlayer();
    }
  }
}
// CLICK ON PAGE
//event listener to grid to check if there is a click
document.querySelectorAll(".grid-item").forEach(function (item) {
  item.addEventListener("click", function (event) {
    //event.target.id - 1 is for indice
    handleMove(parseInt(event.target.id) - 1);
    // update the display with the new gameBoard
    document.querySelectorAll(".grid-item").forEach(function (item, index) {
      item.innerText = gameBoard[index];
    });
  });
});

// CHECK IF THERE IS A WINNER
// check win
function checkWin(player) {
  // rows
  if (
    (gameBoard[0] === player &&
      gameBoard[1] === player &&
      gameBoard[2] === player) ||
    (gameBoard[3] === player &&
      gameBoard[4] === player &&
      gameBoard[5] === player) ||
    (gameBoard[6] === player &&
      gameBoard[7] === player &&
      gameBoard[8] === player)
  ) {
    return true;
  }

  // columns
  if (
    (gameBoard[0] === player &&
      gameBoard[3] === player &&
      gameBoard[6] === player) ||
    (gameBoard[1] === player &&
      gameBoard[4] === player &&
      gameBoard[7] === player) ||
    (gameBoard[2] === player &&
      gameBoard[5] === player &&
      gameBoard[8] === player)
  ) {
    return true;
  }

  // diagonals
  if (
    (gameBoard[0] === player &&
      gameBoard[4] === player &&
      gameBoard[8] === player) ||
    (gameBoard[2] === player &&
      gameBoard[4] === player &&
      gameBoard[6] === player)
  ) {
    return true;
  }

  // if no win, return false
  return false;
}

// CHECK IF THERE IS A TIE
function checkTie() {
  for (let i = 0; i <= 8; i++) {
    if (gameBoard[i] === " ") {
      return false;
    }
  }
  return true;
}

// RESET
// event listener for the reset button
resetButton[0].addEventListener("click", gameReset);

// function to reset the game
function gameReset() {
  // reset the gameBoard
  gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  // set the current player to player1
  currentPlayer = player1;
  // reset the board
  document.querySelectorAll(".grid-item").forEach(function (item, index) {
    item.innerText = gameBoard[index];
  });
  // change message back to RESULT
  document.querySelector(".result").innerText = "X Starts";
  // change gameOver
  gameOver = false;
}
