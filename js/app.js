const move = document.querySelectorAll(".square")
const turn = document.querySelector("#turn")
const message = document.querySelector("#message")
let playerXTurn = true
const reset = document.querySelector("#reset")
const tiedGame = []


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
        let firstOne = move[winningComb[i][0]].innerText
        if (firstOne === move[winningComb[i][1]].innerText &&
            firstOne === move[winningComb[i][2]].innerText &&
            players.includes(firstOne)) {
            if (playerXTurn) {
                message.innerText = "Player O Wins!"
            }
            else if (!playerXTurn) {
                message.innerText = "Player X Wins!"
            }
            else if (tiedGame.length >= 8){
                message.innerText = "Cat's game!"
            }                      
             else {
            }
        }
    }
    playGame()
}

const playerMoveX = () => {
    for (const square of move) {
        square.addEventListener("click", function(event){
            event.preventDefault
            const clickedSquare = event.target
            if (playerXTurn === true && !clickedSquare.innerText) {
                clickedSquare.innerText = "X"
            } 
            playerXTurn = false
            turn.innerText = "Time for Player O to make a choice."
        })
    }
    tiedGame.push("X")
    checkForWinner()
}
const playerMoveO = () => {
    for (const square of move) {
        square.addEventListener("click", function(event){
            event.preventDefault
            const clickedSquare = event.target
            if (playerXTurn === false && !clickedSquare.innerText) {
                clickedSquare.innerText = "O"
            } 
            playerXTurn = true
            turn.innerText = "Time for Player X to make a choice"
        })
    }
    tiedGame.push("O")
    checkForWinner()
}
function playGame() {
    if (playerXTurn) {
        playerMoveX()
    } else {
        playerMoveO()
    }
}

const resetGame = () => {
    window.location.reload()
}
reset.addEventListener("click", resetGame)

document.addEventListener('DOMContentLoaded', () => { 
    // move.addEventListener("click", playGame)      
    playGame()
})

//click on any square on the board (event listener)
//fill in square with x, then o (repeat or give error message)
//check for winner (loop)
//if winner or tie, give message
//stop clickability when game ends
//reset button clears game and restores clickability