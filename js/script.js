const topLeftDiv = document.querySelector("#topLeftDiv")
const topLeftTic = document.querySelector("#topLeftTic")
const topCenterDiv = document.querySelector("#topCenterDiv")
const topCentertTic = document.querySelector("#topCenterTic")
const topRightDiv = document.querySelector("#topRightDiv")
const topRightTic = document.querySelector("#topRightTic")
const centerLeftDiv = document.querySelector("#centerLeftDiv")
const centerLeftTic = document.querySelector("#centerLeftTic")
const centerCenterDiv = document.querySelector("#centerCenterDiv")
const centerCentertTic = document.querySelector("#centerCenterTic")
const centerRightDiv = document.querySelector("#centerRightDiv")
const centerRightTic = document.querySelector("#centerRightTic")
const bottomLeftDiv = document.querySelector("#bottomLeftDiv")
const bottomLeftTic = document.querySelector("#bottomLeftTic")
const bottomCenterDiv = document.querySelector("#bottomCenterDiv")
const bottomCentertTic = document.querySelector("#bottomCenterTic")
const bottomRightDiv = document.querySelector("#bottomRightDiv")
const bottomRightTic = document.querySelector("#bottomRightTic")
const clearButton = document.querySelector("#clearButton")
const p1Turn = document.querySelector("#p1Turn")
const p2Turn = document.querySelector("#p2Turn")
const p1Winner = document.querySelector("#p1Winner")
const p2Winner = document.querySelector("#p2Winner")
const p1Wins = document.querySelector("#p1Wins")
const p2Wins = document.querySelector("#p2Wins")
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const p1Cat = document.querySelector("#p1CatsGame")
const p2Cat = document.querySelector("#p2CatsGame")

// Declare an array that will be used to hold values for the game
let gameboard = ["","","","","","","","",""]

// Declare a variable to store whose turn it is
let turn = "x"

// Declare a variable to count the total number of turns
let totalTurns = 0

// Declare a variable to set the status of the game. Boolean value. True will keep the game running, false stop it. 
let activeGame = true;

// Declare variables to hold the total amount of wins for each player 
let p1TotalWins = 0
let p2TotalWins = 0

const coloring = function(cell, target) {
    if (cell === "x") {
    target.style.color = "lime"
    target.style.textShadow = "2px 2px 10px lime"
    } else if (cell === "o") {
        target.style.color = "aqua"
        target.style.textShadow = "2px 2px 10px aqua"
    }
}

const turnCounter = function() {
    if (turn === "x") {
        turn = "o"
        p2Turn.style.display = "block"
        p1Turn.style.display = "none"
        totalTurns ++
    } else if (turn === "o"){
        turn = ("x")
        p1Turn.style.display = "block"
        p2Turn.style.display = "none"
        totalTurns++
    }

}

const printGameBoard = function() {
    topLeftTic.textContent = gameboard[0]
    topCenterTic.textContent = gameboard[1]
    topRightTic.textContent = gameboard[2]
    centerLeftTic.textContent = gameboard[3]
    centerCenterTic.textContent = gameboard[4]
    centerRightTic.textContent = gameboard[5]
    bottomLeftTic.textContent = gameboard[6]
    bottomCenterTic.textContent = gameboard[7]
    bottomRightTic.textContent = gameboard[8]
}

const printTotalWins = function () {
    p1Wins.textContent = " " + p1TotalWins
    p2Wins.textContent = " " + p2TotalWins
}

const clearGameBoard = function () {
    gameboard = ["","","","","","","","",""]
}

const isCellBlankandGameActive = function (target) {
    if (target === "" && activeGame === true) {
        return true
    } else {
        return false
    }
}

const winner = function(win) {
    if (win === "x") {
        p1Turn.style.display = "none"
        p2Turn.style.display = "none"
        p1Winner.style.display = "block"
        p1TotalWins ++
        console.log("x wins")
        printTotalWins()
    } else if (win === "o") {
        p1Turn.style.display = "none"
        p2Turn.style.display = "none"
        p2Winner.style.display = "block"
        p2TotalWins ++
        console.log("o wins")
        printTotalWins ()
    }
}

const catsgame = function () {
    p1Turn.style.display = "none"
    p2Turn.style.display = "none"
    p1Cat.style.display = "block"
    p2Cat.style.display = "block"
}

const checkWinner = function () {
    // check left column for winner
    if (gameboard[0] !== "" && gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6]){
        winner(gameboard[0])
        activeGame = false;
    }
    // check center column for winner   
     else if (gameboard[1] !== "" && gameboard[1] === gameboard[4] && gameboard[1] === gameboard[7]){
        winner(gameboard[1])
        activeGame = false;
    } 
    // check right column for winner
    else if (gameboard[2] !== "" && gameboard[2] === gameboard[5] && gameboard[2] === gameboard[8]){
        winner(gameboard[2])
        activeGame = false;
    }
    // check top row for winner
    else if (gameboard[0] !== "" && gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]){
        winner(gameboard[0])
        activeGame = false;
    }
    // check center row for winner
    else if (gameboard[3] !== "" && gameboard[3] === gameboard[4] && gameboard[3] === gameboard[5]){
        winner(gameboard[3])
        activeGame = false;
    }
    // check bottom row for winner
    else if (gameboard[6] !== "" && gameboard[6] === gameboard[7] && gameboard[6] === gameboard[8]){
        winner(gameboard[6])
        activeGame = false;
    } 
    // check diagonal top-left to bottom-right
    else if (gameboard[0] !== "" && gameboard[0] === gameboard[4] && gameboard[0] === gameboard[8]){
        winner(gameboard[0])
        activeGame = false;
    } 
    // check diagonal top-right to bottom-left
    else if (gameboard[2] !== "" && gameboard[2] === gameboard[4] && gameboard[2] === gameboard[6]){
        winner(gameboard[2])
        activeGame = false;
    } else if (totalTurns === 9) {
        catsgame()
    }
}

// The top left cell is index 0 in the gameboard array
topLeftDiv.addEventListener("click", function() {
    if (isCellBlankandGameActive(gameboard[0])) {
        gameboard[0] = turn
        turnCounter()
        checkWinner()
        coloring(gameboard[0],topLeftDiv)
    } else {
        console.log("Occupied")
    }
    printGameBoard ()
})

// The top center cell is index 1 in the gameboard array
topCenterDiv.addEventListener("click", function() {
    if (isCellBlankandGameActive(gameboard[1])) {
        gameboard[1] = turn
        turnCounter()
        checkWinner()
        coloring(gameboard[1],topCenterDiv)
    } else {
        console.log("Occupied")
    }
    printGameBoard ()
})

// The top right cell is index 2 in the gameboard array
topRightDiv.addEventListener("click", function() {
    if (isCellBlankandGameActive(gameboard[2])) {
        gameboard[2] = turn
        turnCounter()
        checkWinner()
        coloring(gameboard[2],topRightDiv)
    } else {
        console.log("Occupied")
    }
    printGameBoard ()
})

// The center left cell is index 3 in the gameboard array
centerLeftDiv.addEventListener("click", function() {
    if (isCellBlankandGameActive(gameboard[3])) {
        gameboard[3] = turn
        turnCounter()
        checkWinner()
        coloring(gameboard[3],centerLeftDiv)
    } else {
        console.log("Occupied")
    }
    printGameBoard ()
})

// The center center cell is index 4 in the gameboard array
centerCenterDiv.addEventListener("click", function() {
    if (isCellBlankandGameActive(gameboard[4])) {
        gameboard[4] = turn
        turnCounter()
        checkWinner()
        coloring(gameboard[4],centerCenterDiv)
    } else {
        console.log("Occupied")
    }
    printGameBoard ()
})

// The center right cell is index 5 in the gameboard array
centerRightDiv.addEventListener("click", function() {
    if (isCellBlankandGameActive(gameboard[5])) {
        gameboard[5] = turn
        turnCounter()
        checkWinner()
        coloring(gameboard[5],centerRightDiv)
    } else {
        console.log("Occupied")
    }
    printGameBoard ()
})

// The bottom left cell is index 6 in the gameboard array
bottomLeftDiv.addEventListener("click", function() {
    if (isCellBlankandGameActive(gameboard[6])) {
        gameboard[6] = turn
        turnCounter()
        checkWinner()
        coloring(gameboard[6],bottomLeftDiv)
    } else {
        console.log("Occupied")
    }
    printGameBoard ()
})

// The bottom center cell is index 7 in the gameboard array
bottomCenterDiv.addEventListener("click", function() {
    if (isCellBlankandGameActive(gameboard[7])) {
        gameboard[7] = turn
        turnCounter()
        checkWinner()
        coloring(gameboard[7],bottomCenterDiv)
    } else {
        console.log("Occupied")
    }
    printGameBoard ()
})

// The bottom right cell is index 8 in the gameboard array
bottomRightDiv.addEventListener("click", function() {
    if (isCellBlankandGameActive(gameboard[8])) {
        gameboard[8] = turn
        turnCounter()
        checkWinner()
        coloring(gameboard[8],bottomRightDiv)
    } else {
        console.log("Occupied")
    }
    printGameBoard ()
})

// Clear button resets the game board
clearButton.addEventListener("click", function() {
    clearGameBoard()
    printGameBoard()
    activeGame = true
    turn = "x"
    totalTurns = 0;
    p1Turn.style.display = "block"
    p2Turn.style.display = "none"
    p1Winner.style.display = "none"
    p2Winner.style.display = "none"
    p1Cat.style.display = "none"
    p2Cat.style.display = "none"
})