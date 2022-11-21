// storing the game status
const statusDisplay = document.querySelector('.gameStatus');
// variables that check the status of the game
// gameActive will pause the game once someone win or draw
let gameActive = true;
// currentPlayer will hold whos turn is
let currentPlayer = "X";
// weston's idea
let gameState = ["", "", "", "", "", "", "", "", ""];
// messages for the user during the game like draw message
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();
function handleBoxPlayed() {

}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleBoxClick() {

}
function handleRestartGame() {

}

// event listeners for the cells and reset button
document.querySelectorAll('.box').forEach(box => box.addEventListener('click', handleBoxClick));

document.querySelector('.reset').addEventListener('click', handleRestartGame);
// grabbing the data-cell-index (took forever to realize it returns a string so I had to convert it to integer)
// also it will check if the cell has been clicked or the game is paused, if so the click will be ignored
function handleBoxClick(clickedBoxEvent) {
    const clickedBox = clickedBoxEvent.target;
    const clickedBoxIndex = parseInt(
        clickedBox.getAttribute('data-cell-index')
      );
      if (gameState[clickedBoxIndex] !== "" || !gameActive) {
        return;
    }
    handleBoxPlayed(clickedBox, clickedBoxIndex);
    handleResultValidation();
}
function handleBoxPlayed(clickedBox, clickedBoxIndex) {
    gameState[clickedBoxIndex] = currentPlayer;
    clickedBox.innerHTML = currentPlayer;
}

// winning conditions, it will check if one of those were met if not the game will keep running
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
   // function that restart the game 
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.box')
               .forEach(box => box.innerHTML = "");
}
