const gameMessage = document.querySelector('#gameMessage')
const start = document.querySelector('#start')
// This will determine if the game is active
let gameStatus = true

// Plare indicator
let currentPlayer ="X"
let gameFunction = ["", "", "", "", "", "", "", "", ""]

// Who won
// Indicating if the game ended in a draw
// Indicating whose turn it is
const winningMessage = () => `Player ${currentPlayer} is the winner!`
const drawMessage = () => `Its a draw! Play again.`
const whoseTurn = () => `It's ${currentPlayer}'s turn.`

gameMessage.innerHTML = whoseTurn()

// This will be used to indicate the winner
const howToWin = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 6],
    [2, 4, 6]]

// This will indicate which square was played
function squarePlayed(clickedSquare, clickedSquareIndex) {
    gameFunction[clickedSquareIndex] = currentPlayer
    clickedSquare.innerHTML = currentPlayer
}

// How the players change
function changingPlayers() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameMessage.innerHTML = whoseTurn()
}
// How to win the game
function gamePlay() {
    let winnerOfRound = false
    for (let i = 0; i <= 7; i++) {
        const winCondition = howToWin[i]
        let a = gameFunction[winCondition[0]]
        let b = gameFunction[winCondition[1]]
        let c = gameFunction[winCondition[2]]

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            winnerOfRound = true
            break
        }
    }

    if (winnerOfRound) {
        gameMessage.innerHTML = winningMessage()
        gameStatus = false
        return;
    }

    let roundDraw = !gameFunction.includes("")
    if (roundDraw) {
        gameMessage.innerHTML = drawMessage()
        gameStatus = false
        return;
    }

    changingPlayers()
}

//clicked square functionality 
function squareClicked(clickedSquareEvent) {
    const clickedSquare = clickedSquareEvent.target;
    const clickedSquareIndex = parseInt(clickedSquare.getAttribute('data-cell-index'))

    if (gameFunction[clickedSquareIndex] !== "" || !gameStatus) {
        return;
    }

    squarePlayed(clickedSquare, clickedSquareIndex)
    gamePlay();
}

function resetGame() {
    gameStatus = true
    currentPlayer = "X"
    gameFunction = ["", "", "", "", "", "", "", "", ""]
    gameMessage.innerHTML = whoseTurn()
    document.querySelectorAll('.containerChild').forEach(square => square.innerHTML = "")
}

document.querySelectorAll('.containerChild').forEach(square => square.addEventListener('click', squareClicked))
document.querySelector('#reset').addEventListener('click', resetGame)
console.log(resetGame)

document.addEventListener('DOMContentLoaded', () => {
    start.addEventListener('click', gamePlay
    )
    console.log("click")
    // start.addEventListener('click', gamePlay)

    // reset.addEventListener('click', gamePlay)
})

