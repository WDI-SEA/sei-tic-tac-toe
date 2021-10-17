const move = document.querySelectorAll(".square")
const turn = document.querySelector("#turn")
const message = document.querySelector("#message")
const playerX = move.innerText = "X"
const playerO = move.innerText = "O"
const sq1 = document.getElementById("#button-1")
const sq2 = document.getElementById("#button-2")
const sq3 = document.getElementById("#button-3")
const sq4 = document.getElementById("#button-4")
const sq5 = document.getElementById("#button-5")
const sq6 = document.getElementById("#button-6")
const sq7 = document.getElementById("#button-7")
const sq8 = document.getElementById("#button-8")
const sq9 = document.getElementById("#button-9")
let playerXTurn = true
const reset = document.querySelector("#reset")

// const clearMessage = () => {
//     if (message.innerText) {
//         message.removeInnerText(message.innerText)
//     }
// }
const tiedGame = for (i = 0; i < move.length; i++){
    if (move.innerText >= 8)
}

const checkForWinner = () => {
    if (sq1 === "X" && sq2 === "X" && sq3 === "X" ||
    sq4 === "X" && sq5 === "X" && sq6 === "X" ||
    sq7 === "X" && sq8 === "X" && sq9 === "X" ||
    sq1 === "X" && sq5 === "X" && sq9 === "X" ||
    sq3 === "X" && sq5 === "X" && sq7 === "X" ||
    sq1 === "X" && sq4 === "X" && sq7 === "X" ||
    sq2 === "X" && sq5 === "X" && sq8 === "X" ||
    sq3 === "X" && sq6 === "X" && sq9 === "X") {
        message.innerText = "Player X wins!"
    } else if (sq1 === "O" && sq2 === "O" && sq3 === "O" ||
    sq4 === "O" && sq5 === "O" && sq6 === "O" ||
    sq7 === "O" && sq8 === "O" && sq9 === "O" ||
    sq1 === "O" && sq5 === "O" && sq9 === "O" ||
    sq3 === "O" && sq5 === "O" && sq7 === "O" ||
    sq1 === "O" && sq4 === "O" && sq7 === "O" ||
    sq2 === "O" && sq5 === "O" && sq8 === "O" ||
    sq3 === "O" && sq6 === "O" && sq9 === "O") {
        message.innerText = "Player O wins!"
    // } else if (playerXTurn) {
        
        
    // } else if (playerXTurn == false) {
        
        
    } 
    else if (tiedGame()){
            message.innerText = "Cat's game!"
    }
     else {

     }
    playGame()
    
}
//click on any square on the board (event listener)
const playerMoveX = () => {
        for (const square of move) {
            square.addEventListener("click", function(event){
                event.preventDefault
                if (playerXTurn == true && !square.innerText) {
                    square.innerText = "X"
                } 
                else if (square.innerText) {
                    message.innerText = "Why would you choose a square that's already filled?"
                }
                checkForWinner()
                playerXTurn = false
                turn.innerText = "Time for Player O to make a choice."
            })
        }
    }
const playerMoveO = () => {
    for (const square of move)
        square.addEventListener("click", function(event){
            event.preventDefault
            if (playerXTurn == false && !square.innerText) {
                square.innerText = "O"
            } 
            else if (square.innerText) {
                message.innerText = "Why would you choose a square that's already filled?"
            }
            checkForWinner() 
            playerXTurn = true
            turn.innerText = "Time for Player X to make a choice"
        })
    //     event.preventDefault
    //     event.target.innerText = "X"
    // })
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
 
//fill in square with x, then o (repeat or give error message)
//check for winner (loop)
//if winner or tie, give message
//stop clickability when game ends
//reset button clears game and restores clickability
                                    
document.addEventListener('DOMContentLoaded', () => {
    // move.addEventListener('click', playerMove)         
    playGame()
})