// what kind of variables will I need? (app state)
  // data container (array) to hold who has gone where (the gameboard) (this would contain player choices)
  // (optional) -- define each players choice x/o
  // whose turn it is? -- state of player
  // winning combinations to check (data container?)
  // toggle/boolean if someone has won (is user allowd to click/keep playing)
  // (cats option 1) board is full = draw
  // (cats option 2) turn count for cats game

// what will happen when the user clicks?
  // slection of X or O (who's turn is it?)
  // mark space if it is availible
    // if it is marked -- do nothing
  // check if there is a winner
    // if there is a winner -- stop gameplay and show who won
    // if not -- let gameplay continue

// define each players chioce (x/o)    
const xPlayer = () => {
    // ????
}

const oPlayer = () => {
    // ????
}
const player = prompt('X', 'O');

if (player ==="X") {
    xPlayer();
} else if (player==="O") {
    oPlayer();
}

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;


statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {

}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleCellClick() {

}
function handleRestartGame() {

}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

function handleCellClick(clickedCellEvent) {
     
        const clickedCell = clickedCellEvent.target;
    
        const clickedCellIndex = parseInt(
          clickedCell.getAttribute('data-cell-index')
        );
    
        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }
      
        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }
   
    function handleCellPlayed(clickedCell, clickedCellIndex) {

        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
    }
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
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
}