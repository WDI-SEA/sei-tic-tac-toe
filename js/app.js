const square = document.querySelectorAll(".square")
const turnMessage = document.querySelector("#turn")
const gameEndMessage = document.querySelector("#message")
const reset = document.querySelector("#reset")
let xTurn = true
let tiedGame = []

const playGame = () => {
    if (xTurn === true){
        xTurn = false
        // console.log(xTurn)
        playerMove()
    }
    else {
        xTurn = true
        playerMove()
    }
}
const playerMove = () => {
    if (!square.innerText && xTurn === true){
        square.innerText = "X"
        tiedGame.push("X")
        // checkForWinner()
    }
    else if (!square.innerText && xTurn === false){
        square.innerText = "O"
        tiedGame.push("O")
        // checkForWinner()
        console.log(tiedGame)
    }
}




document.getElementById("button-1").addEventListener("click", playGame)
document.getElementById("button-2").addEventListener("click", playGame)
document.getElementById("button-3").addEventListener("click", playGame)
document.getElementById("button-4").addEventListener("click", playGame)
document.getElementById("button-5").addEventListener("click", playGame)
document.getElementById("button-6").addEventListener("click", playGame)
document.getElementById("button-7").addEventListener("click", playGame)
document.getElementById("button-8").addEventListener("click", playGame)
document.getElementById("button-9").addEventListener("click", playGame)





















// const move = document.querySelectorAll(".square")
// const turn = document.querySelector("#turn")
// const message = document.querySelector("#message")
// let playerXTurn = true
// const reset = document.querySelector("#reset")
// const tiedGame = []


// const checkForWinner = () => {
//     winningComb = [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6]
//     ]
//     for(let i = 0; i < winningComb.length; i++) {
//         const players = ["X", "O"]
//         let firstOne = move[winningComb[i][0]].innerText
//         if (firstOne === move[winningComb[i][1]].innerText &&
//             firstOne === move[winningComb[i][2]].innerText &&
//             players.includes(firstOne)) {
//             if (playerXTurn) {
//                 message.innerText = "Player O Wins!"
//             }
//             else if (!playerXTurn) {
//                 message.innerText = "Player X Wins!"
//             }
//             else if (tiedGame.length >= 8){
//                 message.innerText = "Cat's game!"
//             }                      
//              else {
//             }
//         }
//     }
//     // playGame()
// }

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
// const resetGame = () => {
//     window.location.reload()
// }

// reset.addEventListener("click", resetGame)

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