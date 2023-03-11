// TIC TAC TOE
// get from html
const board = document.getElementsByClassName('board')
const result = document.getElementsByClassName('result') 
const reset = document.getElementsByClassName('reset')


//GAME
// array for empty board
let gameBoard = [' ',' ',' ',' ',' ',' ',' ',' ',' ',]

// players
let player1 = 'X'
let player2 = 'O'

// current player - it always starts with player 1
let currentPlayer = player1

// function to switch players
function switchPlayer() {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }

//event listener to grid to check if there is a click
document.querySelectorAll('.grid-item').forEach(function(item) {
    item.addEventListener('click', function(event) {
        //event.target.id - 1 is for indice
      handleMove(parseInt(event.target.id) - 1);
      // update the display with the new board
      document.querySelectorAll('.grid-item').forEach(function(item, index) {
        item.innerText = board[index];
      });
    });
  });
  

// function to handle a player's move
function handleMove(move) {
    // check if the move is valid
    if (board[move] === ' ') {
      // update the board with the move
      board[move] = currentPlayer;
      
      // check if the current player has won
      if (checkWin(currentPlayer)) {
        console.log(currentPlayer + ' wins!');
        // reset the board
        board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      } else {
        // switch to the other player
        switchPlayer();
      }
    }
  }
    // check win

    //index of array
    //update board
    //check for win
    //check for cats game
    //disable board
    //switch to other player


    ====

    