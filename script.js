// Select all cells on the game board
const cells = document.querySelectorAll(".cell");


// Select elements for displaying game status and resetting game
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");
const endGameButton = document.getElementById("endGame");
const playAgainButton = document.getElementById("playAgain");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");


// Create the game board
let board = [null, null, null, null, null, null, null, null, null];


// Set the starting player and scores
let currentPlayer = "X";
let playerWins = 0;
let computerWins = 0;


// Add click event listeners to cells, reset button, end game button, and play again button
cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});
resetButton.addEventListener("click", handleResetClick);
endGameButton.addEventListener("click", handleEndGameClick);
playAgainButton.addEventListener("click", handlePlayAgainClick);


// Function that handles when a cell is clicked
function handleCellClick(event) {
	const cell = event.target;
	const cellIndex = parseInt(cell.getAttribute("id"));
	
	// If cell is already played or a winner has been declared, do nothing
	if (board[cellIndex] !== null || getWinner() !== null) {
	  return;
	}
	
	// Add the current player's mark to the cell and update the board
	board[cellIndex] = currentPlayer;
	cell.classList.add(`player${currentPlayer}`);
	
  
	// Check if there is a winner or a tie
	const winner = getWinner();
	if (winner !== null) {
	  endGame(winner);
	  return;
	} else if (isBoardFull()) {
	  endGame(null);
	  return;
	}
  
  
	// Switch to the other player's turn and display it
	currentPlayer = currentPlayer === "X" ? "O" : "X";
	displayTurn();
	
	// If it is the computer's turn, wait half a second and make a move
	if (currentPlayer === "O") {
	  setTimeout(makeComputerMove, 500);
	}
  }
  


// Function that handles resetting the game
function handleResetClick() {
  // Reset the board array, current player, and all cell values
  board = [null, null, null, null, null, null, null, null, null];
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });


  // Display whose turn it is and clear the message
  displayTurn();
  message.innerHTML = "";
}


// Function that handles ending the game
function handleEndGameClick() {
  // Reset the board array and current player, remove click event listeners from cells,
  // display whose turn it is, and clear the message
  board = [null, null, null, null, null, null, null, null, null];
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.removeEventListener("click", handleCellClick);
  });
  displayTurn();
  message.innerHTML = "";
}



// Function that handles playing again after a game has ended
function handlePlayAgainClick() {
  // Reset the board array, current player, and all cell values, and re-add click event listeners to cells
  board = [null, null, null, null, null, null, null, null, null];
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cell.addEventListener("click", handleCellClick);
  });


  // Display whose turn it

function displayTurn() {
  message.innerHTML = "It's " + currentPlayer + "'s turn";
}




function endGame(winner) {
  if (winner === "X") {
    playerWins++;
    playerScore.innerHTML = playerWins;
    message.innerHTML = "You won!";
  } else if (winner === "O") {
    computerWins++;
    computerScore.innerHTML = computerWins;
    message.innerHTML = "The computer won!";
  } else {
    message.innerHTML = "It's a tie!";
  }
  cells.forEach((cell) => {
    cell.removeEventListener("click", handleCellClick);
  });
}




function makeComputerMove() {
  const emptyCells = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      emptyCells.push(i);
    }
  }
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const cellIndex = emptyCells[randomIndex];
  const cell = document.getElementById(cellIndex);
  board[cellIndex] = currentPlayer;
  cell.innerHTML = currentPlayer;
  const winner = getWinner();
  if (winner !== null) {
    endGame(winner);
    return;
  } else if (isBoardFull()) {
    endGame(null);
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  displayTurn();
}




function isBoardFull() {
  return !board.includes(null);
}


function getWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return null;
}
}
