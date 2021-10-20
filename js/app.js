const square = document.querySelectorAll(".square")
const turnMessage = document.querySelector("#turn")
const gameEndMessage = document.querySelector("#message")
const reset = document.querySelector("#reset")
let xTurn = true
let tiedGame = []

const playGame = () => {
    if (xTurn === true){
        turnMessage.innerText = "Time for player O to make a choice"
        xTurn = false
        playerMove()
    }
    else {
        turnMessage.innerText = "Time for player X to make a choice"
        xTurn = true
        playerMove()
    }
    // console.log(xTurn)
}
square.forEach((box) => {
    box.addEventListener("click", playGame)
})
console.log(square.forEach())

//problem: accessing the individual .innerText of .square (class of multiple buttons)
        //solving: getting the X and O to appear on game board
        //solving: make squares unclickable after clicked/after game over
//problem: adding elements to gameTied array 
        //solving: determining the tied game
    //also, make sure reset button works once x/o input works

// document.getElementById("button-1").addEventListener("click", playGame)
// document.getElementById("button-2").addEventListener("click", playGame)
// document.getElementById("button-3").addEventListener("click", playGame)
// document.getElementById("button-4").addEventListener("click", playGame)
// document.getElementById("button-5").addEventListener("click", playGame)
// document.getElementById("button-6").addEventListener("click", playGame)
// document.getElementById("button-7").addEventListener("click", playGame)
// document.getElementById("button-8").addEventListener("click", playGame)
// document.getElementById("button-9").addEventListener("click", playGame)

const playerMove = () => {
    if (!square.innerText && xTurn === true){
        square.innerText = "X"
        checkForWinner()
        tiedGame.push("X")
    }
    else if (!square.innerText && xTurn === false){
        square.innerText = "O"
        checkForWinner()
        tiedGame.push("O")
        // console.log(square.innerText)
    }
}
const checkForWinner = () => {
    winningComb = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i = 0; i < winningComb.length; i++) {
        const players = ["X", "O"]
        let firstOne = square[winningComb[i][0]].innerText
        if (firstOne === square[winningComb[i][1]].innerText &&
            firstOne === square[winningComb[i][2]].innerText &&
            players.includes(firstOne)) {
            if (xTurn) {
                gameEndMessage.innerText = "Player X Wins!"
            }
            else if (!xTurn) {
                gameEndMessage.innerText = "Player O Wins!"
            }
            square.disabled = true
        }
        else if (tiedGame.length >= 8){
                gameEndMessage.innerText = "Cat's game!"
                square.disabled = true
            }                      
        else {
                return
            }
        }
    }


const resetGame = () => {
    square.innerText = ""
    gameEndMessage.innerText = "New game! Pick a square."
    turnMessage.innerText= ""
    square.disabled = false
}

reset.addEventListener("click", resetGame)
























// const move = document.querySelectorAll(".square")
// const turn = document.querySelector("#turn")
// const message = document.querySelector("#message")
// let playerXTurn = true
// const reset = document.querySelector("#reset")
// const tiedGame = []



// const playerMoveX = () => {
//     if (playerXTurn === true && !move.innerText) {
//         move.innerText = "X"
//         tiedGame.push("X")
//         playerXTurn = false
//         turn.innerText = "Time for Player O to make a choice."
//         checkForWinner()
//     } 
// }
// const playerMoveO = () => {
//     if (playerXTurn === false && !move.innerText) {
//         move.innerText = "O"
//         tiedGame.push("O")
//         playerXTurn = true
//         turn.innerText = "Time for Player X to make a choice"
//         checkForWinner()
//     } 
// }
// const playGame = () => {
//     if (playerXTurn) {
//         playerMoveX()
//     } else {
//         playerMoveO()
//     }
// }
// const test = () => {
//     console.log("test")
// }


// document.getElementById("button-1").addEventListener("click", playGame)
// document.getElementById("button-2").addEventListener("click", playGame)
// document.getElementById("button-3").addEventListener("click", playGame)
// document.getElementById("button-4").addEventListener("click", playGame)
// document.getElementById("button-5").addEventListener("click", playGame)
// document.getElementById("button-6").addEventListener("click", playGame)
// document.getElementById("button-7").addEventListener("click", playGame)
// document.getElementById("button-8").addEventListener("click", playGame)
// document.getElementById("button-9").addEventListener("click", playGame)


//click on any square on the board (event listener)
//fill in square with x, then o (repeat or give error message)
//check for winner (loop)
//if winner or tie, give message
//stop clickability when game ends
//reset button clears game and restores clickability