let turnCounter = 1
let correspondingArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]

let currentPlayer = 1
let playerOne = true
let playerTwo = false


const changeClickedSpace = (event) => {
    // IF THE CLICK TARGET VALUE MATCHES THE CLASS OF BOXES...
    if (event.target.matches('.boxes')) {
        if (currentPlayer === 3) {
            document.querySelector('.players').style.color = "white"
            document.querySelector('#currentTurn').innerText = "PLEASE RESET"
        }

        if (event.target.innerText === "O" || event.target.innerText === "X") {
            alert("SOMEONE HAS ALREADY SELECTED THIS SPACE!")
        } else if (turnCounter === 1 || turnCounter === 3 || turnCounter === 5 || turnCounter === 7 || turnCounter === 9) {
            event.target.innerText = "O"
            turnCounter++
            if (playerOne === true) {
                currentPlayer = 2
                playerOne = false
                playerTwo = true
            }
        } else if (turnCounter === 2 || turnCounter === 4 || turnCounter === 6 || turnCounter === 8) {
            event.target.innerText = "X"
            turnCounter++
            if (playerTwo === true) {
                currentPlayer = 1
                playerTwo = false
                playerOne = true
            }
        }

        if (turnCounter === 10) {
            document.querySelector('.players').innerText = "DRAW"
        } else {
            document.querySelector('.players').innerText = "Player " + currentPlayer
        }
    }

    // TO UPDATE THE ARRAY VALUES
    if (event.target.id === "rowOneColumnOne") {
        correspondingArray[0] = event.target.innerText
    } else if (event.target.id === "rowOneColumnTwo") {
        correspondingArray[1] = event.target.innerText
    } else if (event.target.id === "rowOneColumnThree") {
        correspondingArray[2] = event.target.innerText
    } else if (event.target.id === "rowTwoColumnOne") {
        correspondingArray[3] = event.target.innerText
    } else if (event.target.id === "rowTwoColumnTwo") {
        correspondingArray[4] = event.target.innerText
    } else if (event.target.id === "rowTwoColumnThree") {
        correspondingArray[5] = event.target.innerText
    } else if (event.target.id === "rowThreeColumnOne") {
        correspondingArray[6] = event.target.innerText
    } else if (event.target.id === "rowThreeColumnTwo") {
        correspondingArray[7] = event.target.innerText
    } else if (event.target.id === "rowThreeColumnThree") {
        correspondingArray[8] = event.target.innerText
    }

    //WINNING CONDITIONS
    if (correspondingArray[0] === correspondingArray[1] && correspondingArray[1] === correspondingArray[2]) {
        endGame()
    } else if (correspondingArray[3] === correspondingArray[4] && correspondingArray[4] === correspondingArray[5]) {
        endGame()
    } else if (correspondingArray[6] === correspondingArray[7] && correspondingArray[7] === correspondingArray[8]) {
        endGame()
    } else if (correspondingArray[0] === correspondingArray[3] && correspondingArray[3] === correspondingArray[6]) {
        endGame()
    } else if (correspondingArray[1] === correspondingArray[4] && correspondingArray[4] === correspondingArray[7]) {
        endGame()
    } else if (correspondingArray[2] === correspondingArray[5] && correspondingArray[5] === correspondingArray[8]) {
        endGame()
    } else if (correspondingArray[0] === correspondingArray[4] && correspondingArray[4] === correspondingArray[8]) {
        endGame()
    } else if (correspondingArray[2] === correspondingArray[4] && correspondingArray[4] === correspondingArray[6]) {
        endGame()
    }
}


// END GAME FUNCTION
const endGame = () => {
    if (currentPlayer === 1) {
        currentPlayer = 2
    } else if (currentPlayer === 2) {
        currentPlayer = 1
    }
    document.querySelector('.players').innerText = "Winner is player " + currentPlayer
    document.querySelector('.players').style.color = "red"
    document.querySelector('.players').style.fontSize = "3rem"
    //console.dir(document.querySelector('.players'))

    turnCounter = 11
    currentPlayer = 3
}

const container = document.querySelector('.playingFieldContainer')
container.addEventListener('click', changeClickedSpace)


// RESET BUTTON
const resetGame = () => {
    turnCounter = 1
    correspondingArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    currentPlayer = 1
    playerOne = true
    playerTwo = false

    document.querySelector('.players').style.color = "black"
    document.querySelector('.players').innerText = "Player " + currentPlayer
    document.querySelector('#currentTurn').innerText = "Current Turn"

    document.querySelector('#rowOneColumnOne').innerText = " "
    document.querySelector('#rowOneColumnTwo').innerText = " "
    document.querySelector('#rowOneColumnThree').innerText = " "
    document.querySelector('#rowTwoColumnOne').innerText = " "
    document.querySelector('#rowTwoColumnTwo').innerText = " "
    document.querySelector('#rowTwoColumnThree').innerText = " "
    document.querySelector('#rowThreeColumnOne').innerText = " "
    document.querySelector('#rowThreeColumnTwo').innerText = " "
    document.querySelector('#rowThreeColumnThree').innerText = " "
}
const resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', resetGame)