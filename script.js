// TIC TAC TOE
// get from html
const result = document.getElementsByClassName("result");
const resetButton = document.getElementsByClassName("reset");
const newButton = document.getElementsByClassName("new");

//GAME
// array for empty gameBoard
let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let gameOver = false;

// ALL PLAYERS
// players
let player1 = "X";
let player2 = "O";

// TRACK WINS
let player1Wins = 0;
let player2Wins = 0;

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
      if (currentPlayer === player1) {
        player1Wins++;
        document.querySelector(".xWins").innerText =
          "Player X: " + player1Wins + " wins";
      } else {
        player2Wins++;
        document.querySelector(".oWins").innerText =
          "Player O: " + player2Wins + " wins";
      }
      document.querySelector(".result").innerText =
        currentPlayer + " wins!" + " 🎉";
      gameOver = true;
    } else if (checkTie()) {
      document.querySelector(".result").innerText = "It's a tie" + " 🙀";
      gameOver = true;
    } else {
      // switch to the other player
      switchPlayer();
            // if the current player is the computer, make a move
            computerBtn.addEventListener("click", function() {
              // call the compMove function to make the computer play in next turn
              // compMove(); THIS IS PROBABLY CAUSING COMPMOVE TO GO TWICE
            });
    }
  }
      
          // update the display with the new gameBoard
          // updateBoardDisplay();
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

// WINNINGCOMBOS
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// CHECKWIN USING ARRAYS
// loop will check each square
const checkWin = function () {
  // this loops through each array in winningCombos
  for (let i = 0; i < winningCombos.length; i++) {
    // new variable to run against true/false (this is assuming the player is a winner)
    let foundWinner = true;
    // this will go over each indice in the winningcombos
    for (let j = 0; j < winningCombos[i].length; j++) {
      // this will create what a winning combo looks like
      const gameboardIndex = winningCombos[i][j];
      // this will check the winningcombos against the player
      if (gameBoard[gameboardIndex] !== currentPlayer) {
        // this will make the winner as false
        foundWinner = false;
        //this stops the j loop from continuing
        break;
      }
    }
    // if the winningcombos match find it as true
    if (foundWinner) {
      return true;
    }
  }
  return false;
};
// loop that checks winningCombos

// CHECK IF THERE IS A TIE
function checkTie() {
  for (let i = 0; i <= 8; i++) {
    if (gameBoard[i] === " ") {
      return false;
    }
  }
  return true;
}

// NEW
// event listener for the reset button
resetButton[0].addEventListener("click", gameNew);

// function to reset the game
function gameNew() {
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

// RESET
// event listener for the reset button
newButton[0].addEventListener("click", gameReset);

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

  // score reset
  player1Wins = 0;
  player2Wins = 0;

  // reset display
  document.querySelector(".xWins").innerText =
    "Player X: " + player1Wins + " wins";
  document.querySelector(".oWins").innerText =
    "Player O: " + player2Wins + " wins";

  // change gameOver
  gameOver = false;
}

// UPDATE BOARD
// function to update the display with the current state of the game board
function updateBoardDisplay() {
  document.querySelectorAll(".grid-item").forEach(function (item, index) {
    item.innerText = gameBoard[index];
  });
}

// COMPUTER
const computerBtn = document.querySelector(".computer")

computerBtn.addEventListener("click", function() {
  // call the compMove function to make the computer play in next turn
  compMove();
});

function compMove() {
  // check if the computer can win in the next move
  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i];
    if (gameBoard[combo[0]] === "O" && gameBoard[combo[1]] === "O" && gameBoard[combo[2]] === " ") {
      handleMove(combo[2], "O");
      updateBoardDisplay()
      return;
    } else if (gameBoard[combo[0]] === "O" && gameBoard[combo[1]] === " " && gameBoard[combo[2]] === "O") {
      handleMove(combo[1], "O");
      updateBoardDisplay()
      return;
    } else if (gameBoard[combo[0]] === " " && gameBoard[combo[1]] === "O" && gameBoard[combo[2]] === "O") {
      handleMove(combo[0], "O");
      updateBoardDisplay()
      return;
    }
  }

  // check if the player can win in the next move and block them
  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i];
    if (gameBoard[combo[0]] === "X" && gameBoard[combo[1]] === "X" && gameBoard[combo[2]] === " ") {
      handleMove(combo[2], "O");
      updateBoardDisplay()
      return;
    } else if (gameBoard[combo[0]] === "X" && gameBoard[combo[1]] === " " && gameBoard[combo[2]] === "X") {
      handleMove(combo[1], "O");
      updateBoardDisplay()
      return;
    } else if (gameBoard[combo[0]] === " " && gameBoard[combo[1]] === "X" && gameBoard[combo[2]] === "X") {
      handleMove(combo[0], "O");
      updateBoardDisplay()
      return;
    }
  }

  // if there is no immediate threat or opportunity, randomly choose a move that is not already taken
  let validMoves = [];
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === " ") {
      validMoves.push(i);
    }
  }
  let randomIndex = Math.floor(Math.random() * validMoves.length);
  let compMove = validMoves[randomIndex];

  // call the handleMove function with the computer's move
  handleMove(compMove);
  updateBoardDisplay()
}

document.querySelectorAll(".grid-item").forEach(function (item) {
  item.addEventListener("click", function(event) {
    handleMove(parseInt(event.target.id) -1)
    updateBoardDisplay()
  })
})
//   document.querySelectorAll(".grid-item").forEach(function (item) {
//     // item.addEventListener("click", function (event) {
//     //   //event.target.id - 1 is for indice
//     //   handleMove(parseInt(event.target.id) - 1);
//     //   // update the display with the new gameBoard
//       document.querySelectorAll(".grid-item").forEach(function (item, index) {
//         item.innerText = gameBoard[index];
//       });
//     });
//   // });
// }

// // show the computer's move in the game board
// if (document.querySelector('.grid-item[data-index="' + parseInt(compMove) + '"]')) {
//   document.querySelector('.grid-item[data-index="' + parseInt(compMove) + '"]').textContent = "O";
// }
// }

// document.querySelectorAll(".grid-item").forEach(function (item) {
//   // item.addEventListener("click", function (event) {
//   //   //event.target.id - 1 is for indice
//   //   handleMove(parseInt(event.target.id) - 1);
//   //   // update the display with the new gameBoard
//     document.querySelectorAll(".grid-item").forEach(function (item, index) {
//       item.innerText = gameBoard[index];
//     });
//   });
// // });