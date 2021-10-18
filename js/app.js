//assign variable to html that will show current player's turn
const current = document.querySelector('.playerTurn');
//assign default variable to player one (later on, enable on-click function that switches X to O)
var currentPlayer = "X";
//default gamestate start as a blank grid (dedicate functions to when grid is in a state of "non-blankness" i.e. filled)
var gameState = ["", "", "", "", "", "", "", "", ""];
//create function that will show when x or o player wins
const winningMessage = () => `Player ${currentPlayer} wins!`;
//create function that will show when it's a draw
const drawMessage = () => `It's a draw! Play again!`;
//create function that will show whose turn it currently is
const currentPlayerTurn = () => `Player ${currentPlayer}'s turn`;
//create a variable that defines the state of an ongoing game (in contrast to a won or draw game)
var gameInPlay = true


function cellSelect (clickedCellEvent){
    var clickedCell = clickedCellEvent.target
    var clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    if (gameState[clickedCellIndex] !== "" || !gameInPlay) {
        return;
    }
}
function PlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    current.innerHTML = currentPlayerTurn();


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
    currentPlayerTurn();
    }
function actionCell (clickedCell, clickedCellIndex){
    gameState[clickedCellIndex]= currentPlayer
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
function resultValidation(){
    let roundWon = false;
    for(let i= 0; i<=7; i++){
    const winCondition = winningConditions[i];
    let a = gameState[winCondition [0]]
    let b = gameState[winCondition [1]]
    let c = gameState[winCondition [2]]
    if (a === '' || b === '' || c === ''){
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
    

document.querySelectorAll('.block').forEach(block => block.addEventListener('click', actionCell));


function restartGame() {
    gameInPlay = true;
    currentPlayer = 'X';
    gameState = ["", "", "", "", "", "", "", "", ""];
    current.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.block').forEach(block => block.innerHTML = "");
}
document.querySelector('.gameReset').addEventListener('click', restartGame);
}