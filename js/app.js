//assign variable to html that will show current player's turn
const currentStatus = document.querySelector('.playerTurn');
//assign default variable to player one (later on, enable on-click function that switches X to O)
let currentPlayer = "X";
//default gamestate start as a blank grid (dedicate functions to when grid is in a state of "non-blankness" i.e. filled)
let gameState = new Array(9);
//create function that will show when x or o player wins
const winningMessage = () => `Player ${currentPlayer} wins!`;
//create function that will show whose turn it currently is
const currentPlayerTurn = () => `Player ${currentPlayer}'s turn`;
let gameActive = true

currentStatus.innerText = currentPlayerTurn()

function drawMessage() {
    console.log ("boom");
    currentStatus.innerText= "It's a draw! Play again!";
    gameActive = false;
}

function resultValidation(index){
    if (index == "0") {
        if (
            (gameState[0] == gameState[1] && gameState[1] == gameState[2]) ||
            (gameState[0] == gameState[3] && gameState[3] == gameState[6]) ||
            (gameState[0] == gameState[4] && gameState[4] == gameState[8])                        
        ) return true;
    } else if (index == "1") {
        if (
            (gameState[0] == gameState[1] && gameState[1] == gameState[2]) ||
            (gameState[1] == gameState[4] && gameState[4] == gameState[7])
        ) return true;
    }else if (index == "2") {
        if (
            (gameState[0] == gameState[1] && gameState[1] == gameState[2]) ||
            (gameState[2] == gameState[5] && gameState[5] == gameState[8]) ||
            (gameState[2] == gameState[4] && gameState[4] == gameState[6])
        ) return true;
    }else if (index == "3") {
        if (
            (gameState[3] == gameState[4] && gameState[4] == gameState[5])||
            (gameState[0] == gameState[3] && gameState[3] == gameState[6])
        ) return true;
    }else if (index == "4") {
        if (
            (gameState[3] == gameState[4] && gameState[4] == gameState[5]) ||
            (gameState[1] == gameState[4] && gameState[4] == gameState[7]) ||
            (gameState[0] == gameState[4] && gameState[4] == gameState[8]) ||
            (gameState[2] == gameState[4] && gameState[4] == gameState[6])
        ) return true;
    }else if (index == "5") {
        if (
            (gameState[3] == gameState[4] && gameState[4] == gameState[5]) ||
            (gameState[2] == gameState[5] && gameState[5] == gameState[8])
        ) return true;
    }else if (index == "6") {
        if (
            (gameState[0] == gameState[3] && gameState[3] == gameState[6]) ||
            (gameState[6] == gameState[7] && gameState[7] == gameState[8]) ||
            (gameState[2] == gameState[4] && gameState[4] == gameState[6])
        ) return true;
    }else if (index == "7") {
        if (
            (gameState[6] == gameState[7] && gameState[7] == gameState[8]) ||
            (gameState[1] == gameState[4] && gameState[4] == gameState[7])
        ) return true;
    } else if (index == "8") {
        if (
            (gameState[6] == gameState[7] && gameState[7] == gameState[8]) ||
            (gameState[2] == gameState[5] && gameState[5] == gameState[8]) ||
            (gameState[0] == gameState[4] && gameState[4] == gameState[8])
        ) return true;
    }

    for (let i = 0; i < gameState.length; i++) {
        if (gameState[i] === undefined)
            return false;
        else if (i === 8) {
            drawMessage();
        }
            
    }
    return false;
}

function cellSelect (clickedCellEvent){
    if ( gameActive == false )
    return;
    var clickedCell = clickedCellEvent.target;
    var clickedCellIndex = (clickedCell.getAttribute('id'));
    if (clickedCell.innerText !== "")
        return;
    if (!gameState[clickedCellIndex]){
        console.log("youre a wizard")
        clickedCell.innerText = currentPlayer
        gameState[clickedCellIndex]=currentPlayer

        /* On click, check for win */
        let res = resultValidation(clickedCellIndex);
        if (res == true) {
            console.log("yey!");
            currentStatus.innerText = winningMessage();
            gameActive = false;
            // win = true;
            return;
        }
        playerChange();       
        console.log('its working')
        return
    }
}
function playerChange() {
    if ( gameActive === false)
        return ;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
        console.log('wawaweewa')
        currentStatus.innerText = currentPlayerTurn()
}
  
function restartGame() {
    console.log('mammammia')
    currentPlayer = 'X';
    document.querySelectorAll('.block').forEach(block => block.innerHTML = "")
    gameState = new Array (9);
    gameActive = true
    currentStatus.innerText = currentPlayerTurn();
}
document.querySelectorAll('.block').forEach(block => block.innerHTML = "");
document.querySelector('.gameReset').addEventListener('click', restartGame);
document.querySelectorAll('.block').forEach(block => block.addEventListener('click', cellSelect));