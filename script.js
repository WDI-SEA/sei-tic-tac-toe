const cells = document.querySelectorAll(".cell");



const message = document.getElementById("message");
const resetButton = document.getElementById("reset");
const endGameButton = document.getElementById("endGame");
const playAgainButton = document.getElementById("playAgain");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");


let board = [null, null, null, null, null, null, null, null, null];



let currentPlayer = "X";
let playerWins = 0;
let computerWins = 0;



cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});
resetButton.addEventListener("click", handleResetClick);
endGameButton.addEventListener("click", handleEndGameClick);
playAgainButton.addEventListener("click", handlePlayAgainClick);



function handleCellClick(event) {
	const cell = event.target;
	const cellIndex = parseInt(cell.getAttribute("id"));
	

	if (board[cellIndex] !== null || getWinner() !== null) {
	  return;
	}

	board[cellIndex] = currentPlayer;
	cell.classList.add(`player${currentPlayer}`);
	
  

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

  



function handleResetClick() {

  board = [null, null, null, null, null, null, null, null, null];
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });



  displayTurn();
  message.innerHTML = "";
}



function handleEndGameClick() {
  board = [null, null, null, null, null, null, null, null, null];
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.removeEventListener("click", handleCellClick);
  });
  displayTurn();
  message.innerHTML = "";
}



function handlePlayAgainClick() {
  board = [null, null, null, null, null, null, null, null, null];
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cell.addEventListener("click", handleCellClick);
  });



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
}}
