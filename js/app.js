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

let playerOne = [0,1,3]
let playerTwo = []
let turnCounter = 0

// EventHandler Function to assign all grid items an event handler.
const createGrid = () => {
    console.log('clicked')
    for (i = 0; i < 9; i++) {
        gridList[i].addEventListener('click', gridSelect)

    }
}

// Will determine whether someone is selecting, or cannot select because
const gridSelect = (event) => {
    console.log(event.target.id)
    isWinner();
    whoseTurn();
}

// we can use modulus to determine whos turn it is, because players are essentiall 0 or 1
const whoseTurn = () => {
    const modulusVariable = turnCounter % 2
    switch(modulusVariable) {
        case 0:
            console.log("It's Player Ones Turn")
            break;
    
        case 1:
            console.log("It's Player Twos Turn")
            break;
    }
}

const isWinner = () => {
    let winCount = 0
    for (i = 0; i < winStates.length; i++) {
        for (j = 0; j < 3; j++) {
            if (playerOne[j] == winStates[i][j]) {
                winCount++;
                console.log(playerOne[j] + "|" + winStates[i][j])
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