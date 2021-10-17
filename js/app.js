//define winning combinations array
const winConditions = [
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3'],
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    ['a1', 'b2', 'c3'],
    ['a3', 'b2', 'c1']
]
//track turns
let turnCount = 1
//define playerOne and playerTwo arrays
const playerOne = {
    isTurn: true,
    choices: [],
    wins: 0
}

const playerTwo = {
    isTurn: false,
    choices: [],
    wins: 0
}
//declare empty winner variable
let winner
//clears clicked squares
const resetGame = () => {
    for (i = 0; i < square.length; i++){
        square[i].innerText = ''
    }
    turnCount = 1
    gameConsole.innerText = "You're up:"
    currentPlayer.innerText = "Player One"
    playerOne.isTurn = true
    playerTwo.isTurn = false
    playerOne.choices = []
    playerTwo.choices = []
    winner = undefined
}
//define the squares
const square = document.getElementsByClassName('square')
//mark square with X or 0
const markSquare = (clickedSquare) => {
    if (playerOne.isTurn) {
        //add player's choice to their array
        playerOne.choices.push(clickedSquare.id)
        //mark the square
        clickedSquare.innerHTML = 'X'
    } else {
        playerTwo.choices.push(clickedSquare.id)
        clickedSquare.innerHTML = 'O'
    }
}
//toggle turn and game display
const toggleTurn = () => {
    if (playerOne.isTurn) {
        playerOne.isTurn = false
        playerTwo.isTurn = true
        gameConsole.innerText = "You're up:"
        currentPlayer.innerText = "Player Two"
    } else {
        playerTwo.isTurn = false
        playerOne.isTurn = true
        gameConsole.innerText = "You're up:"
        currentPlayer.innerText = "Player One"
    }
    turnCount++
}

//check for win condition
const validateWinner = () => {
    for (i = 0; i < winConditions.length; i++) {
        //check each value of winning array against player's choices
        const oneWinMatches = winConditions[i].every(i => playerOne.choices.includes(i))
        if (oneWinMatches) {
            winner = 'Player One'
        }
    }
    for (i = 0; i < winConditions.length; i++) {
        //check each value of winning array against player's choices
        const twoWinMatches = winConditions[i].every(i => playerTwo.choices.includes(i))
        if (twoWinMatches) {
            winner = 'Player Two'
        }
    }
}

//when a square is clicked
const clickHandler = () => {
    for (i = 0; i < 9; i++) {
        const gameConsole = document.getElementById('gameConsole')
        const currentPlayer = document.getElementById('currentPlayer')
        square[i].addEventListener('click', (event) => {
            //identify which square was clicked
            const clickedSquare = event.target
            //stop game if stalemate exists
            if (turnCount >= 9 && !winner) {
                markSquare(clickedSquare)
                gameConsole.innerText = 'Stalemate!'
                currentPlayer.innerText = ''
                event.preventDefault()
            //stop game if win condition exists    
            } else if (turnCount >= 5 && winner) {
                event.preventDefault()
            } else {
                //check for click on legal square
                if (clickedSquare.innerText) {
                    gameConsole.innerText = 'Please select an open square'
                //check players turn    
                } else {
                    //and mark the square
                    markSquare(clickedSquare)
                    //check for win condition
                    validateWinner()
                    if (winner) {
                        markSquare(clickedSquare)
                        gameConsole.innerText = "We have a winner!"
                        currentPlayer.innerText = "Congrats, " + winner + "!"
                    //toggle turn if no win condition
                    } else {
                        toggleTurn()
                    }   
                }
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    clickHandler()
    document.getElementById('reset').addEventListener('click', resetGame)    
})


