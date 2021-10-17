const headerDisplay = document.querySelector('#display-text')
const resetButton = document.querySelector('#reset-button')
const gameGrid = document.querySelector('.game-grid-container')
const startButton = document.querySelector('#start-game')
const gridList = document.querySelectorAll('.tic-tac-box')
const declareWinnerArea = document.querySelector('#declare-winner')
const playedMoves = []

let playerOneMoves = []
let playerTwoMoves = []
let turnCounter = 0

let playerOne = 0
let playerOneIcon = "✘"

let playerTwo = 1
let playerTwoIcon = "Ⓞ"

// EventHandler Function to assign all grid items an event handler.
const createGrid = () => {
    console.log('clicked')
    for (i = 0; i < 9; i++) {
        gridList[i].addEventListener('click', selectCell)
        gridList[i].addEventListener('click', incrementCounter)
        gridList[i].setAttribute("data-value", i+1)
        // console.log(gridList[i].getAttribute("data-value"))
    }
}

// Will determine whether someone is selecting, or cannot select because
const selectCell = (event) => {
    console.log(event.target.getAttribute('data-value'))
    const currentPlayer = whoseTurn();
    if (currentPlayer == playerOne) {
        event.target.innerText =  playerOneIcon
        playerOneMoves.push(event.target.getAttribute('data-value'))
        event.target.style.pointerEvents = 'none';
    } else if (currentPlayer == playerTwo) {
        event.target.innerText = playerTwoIcon
        playerTwoMoves.push(event.target.getAttribute('data-value'))
        event.target.style.pointerEvents = 'none';
    } 
    isWinner()
    if (turnCounter >= 8) {
        declareWinnerArea.innerText = "This game is a draw."
    }
}   

/* 
    I need move validation logic
    instead of storing 0 or 1 and the coordinate of the move,
    [0,5],[1,1],[0,4][1,7]
    {{1: move: null         }}

    playerObj: { moves: [ ]}
    each turn append to mov?
*/

// we can use modulus to determine whos turn it is, because players are essentiall 0 or 1.
// Note: This Logic Might Actually be backwards because it does not display until the first user clicks.
const whoseTurn = () => {
    const modulusVariable = turnCounter % 2

    switch(modulusVariable) {
        case 0:
            headerDisplay.innerText = "It's player Two's turn."
            break;
    
        case 1:
            headerDisplay.textContent = "It's player One's turn."
            break;
    }

    return modulusVariable
}

const winStates = [
    [1,2,3],
    [1,5,9], 
    [1,4,7],
    [2,5,8],
    [3,5,7],
    [3,6,9],
    [4,5,6],
    [7,8,9],
]

const isWinner = () => {
    console.log("Testing isWinner()")
    playerOneMoves.sort((function(a, b){return a-b}))
    playerTwoMoves.sort((function(a, b){return a-b}))

    for (let i = 0; i < winStates.length; i++) {        
        let p1winCount = 0
        let p2winCount = 0
        for (let j = 0; j < playerOneMoves.length; j++) {
            // console.log("[i][j]: " + i + "/" + j)
            if (playerOneMoves[j] == winStates[i][j]) {
                p1winCount++;

            }
            else if (playerTwoMoves[j] == winStates[i][j]) {
                p2winCount++;
            }
            // console.log("\tp1win : p2win => " + p1winCount + " : " + p2winCount)
        }

        // console.log("Player 1: " + p1winCount)

        if (p1winCount === 3) {
            declareWinnerArea.innerText = "Player One wins."
            gameGrid.style.pointerEvents = 'none';
            return "Player One Wins"
        } else if (p2winCount === 3) {
            declareWinnerArea.innerText = "Player Two wins."
            gameGrid.style.pointerEvents = 'none';
            return "Player Two Wins"
        }

    }

    return "TEST"
}

const gameOver = () => {

}

const incrementCounter = () => {
    turnCounter++;
    // console.log("incrementCounter() " + turnCounter)
}

const resetBoard = () => {
    headerDisplay.innerText = ""
    turnCounter = ""
    playerOneMoves = []
    playerTwoMoves = []
    gameGrid.style.pointerEvents = "auto"
    headerDisplay.innerText = "It's Player One's Turn."
    for (i = 0; i < 9; i++) {
        gridList[i].innerText = "";
        gridList[i].style.pointerEvents = "auto"    
    }
}

document.addEventListener('DOMContentLoaded', () => {
    startButton.addEventListener('click', createGrid)
    resetButton.addEventListener('click', resetBoard)
    // gameGrid.addEventListener('click', incrementCounter)

})