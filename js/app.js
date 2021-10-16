const headerDisplay = document.querySelector('#display-text')
const resetButton = document.querySelector('#reset-button')
const gameGrid = document.querySelector('.game-grid-container')
const startButton = document.querySelector('#start-game')
const gridList = document.querySelectorAll('.tic-tac-box')
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
const playedMoves = []

let playerOneMoves = [0,1,3]
let playerTwoMoves = []
let turnCounter = 1


let playerOne = 0
let playerOneIcon = "✘"

let playerTwo = 1
let playerTwoIcon = "Ⓞ"

// EventHandler Function to assign all grid items an event handler.
const createGrid = () => {
    console.log('clicked')
    for (i = 0; i < 9; i++) {
        gridList[i].addEventListener('click', cellSelect)
        gridList[i].setAttribute("data-value", i+1)
        
        
        // console.log(gridList[i].getAttribute("data-value"))

    }
}

// Will determine whether someone is selecting, or cannot select because
const cellSelect = (event) => {
    console.log(event.target.getAttribute('data-value'))
    const currentPlayer = whoseTurn();
    if (currentPlayer == playerOne) {
        event.target.innerText =  playerOneIcon
    }
    else {
        event.target.innerText = playerTwoIcon
    } 




}

const displayMove = () => {

}
// I need move validation logic
// instead of storing 0 or 1 and the coordinate of the move,
// [0,5],[1,1],[0,4][1,7]
// {{1: move: null         }}
//
// playerObj: { moves: [ ]}
// each turn append to mov?


// we can use modulus to determine whos turn it is, because players are essentiall 0 or 1.
// Note: This Logic Might Actually be backwards because it does not display until the first user clicks.
const whoseTurn = () => {
    const modulusVariable = turnCounter % 2
    switch(modulusVariable) {
        case 0:
            console.log("Mod: 0") //Player Two is Case One
            headerDisplay.innerText = "It's player One turn."
            isWinner();
            return 0
            break;
    
        case 1:
            console.log("Mod: 1")
            headerDisplay.textContent = "It's player Two turn."
            isWinner();
            return 1
            break;
    }
}

const isWinner = () => {
    let winCount = 0
    for (i = 0; i < winStates.length; i++) {
        for (j = 0; j < 3; j++) {
            if (playerOneMoves[j] == winStates[i][j]) {
                winCount++;
                console.log(playerOneMoves[j] + "|" + winStates[i][j])
            }
        }
    }
    if (winCount >= 3) {
        console.log("User is a winner!")
    }
}

const incrementCounter = () => {
    turnCounter++;
}

document.addEventListener('DOMContentLoaded', () => {
    startButton.addEventListener('click', createGrid)
    gameGrid.addEventListener('click', incrementCounter)

})