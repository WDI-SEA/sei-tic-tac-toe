const squareArray = document.querySelectorAll(".square")
const turnMessage = document.querySelector("#turn")
const gameEndMessage = document.querySelector("#message")
const reset = document.querySelector("#reset")
let xTurn = true
let tiedGame = []
const sq1 = document.getElementById("button-1")
const sq2 = document.getElementById("button-2")
const sq3 = document.getElementById("button-3")
const sq4 = document.getElementById("button-4")
const sq5 = document.getElementById("button-5")
const sq6 = document.getElementById("button-6")
const sq7 = document.getElementById("button-7")
const sq8 = document.getElementById("button-8")
const sq9 = document.getElementById("button-9")

const playGame = (e) => {
    const clickedSquare = e.target
    gameEndMessage.innerText = ""
    if (xTurn === false){
        turnMessage.innerText = "Time for player O to make a choice"
        xTurn = true
        playerMove(clickedSquare)
    }
    else {
        turnMessage.innerText = "Time for player X to make a choice"
        xTurn = false
        playerMove(clickedSquare)
    }
}


//problem: accessing the individual .innerText of .square (class of multiple buttons)
        //solving: getting the X and O to appear on game board
        //solving: make squares unclickable after clicked/after game over
//problem: adding elements to gameTied array 
        //solving: determining the tied game
    //also, make sure reset button works once x/o input works

    
const playerMove = (clickedSquare) => {
        // console.log("what's this?\n", someSquare)
        // someSquare.innerText = "I clicked this"
        // console.log("My logic good?", square.innerText)
    if (!clickedSquare.innerText && xTurn === true){
        clickedSquare.innerText = "X"
        tiedGame.push("X")
    }
    else if (!clickedSquare.innerText && xTurn === false){
        clickedSquare.innerText = "O"
        tiedGame.push("O")
    }
    clickedSquare.disabled = true
    checkForWinner()
}
const checkForWinner = () => {
    const winningComb = [
        [sq1.innerText,sq2.innerText,sq3.innerText],
        [sq4.innerText,sq5.innerText,sq6.innerText],
        [sq7.innerText,sq8.innerText,sq9.innerText],
        [sq1.innerText,sq4.innerText,sq7.innerText],
        [sq2.innerText,sq5.innerText,sq8.innerText],
        [sq3.innerText,sq6.innerText,sq9.innerText],
        [sq1.innerText,sq5.innerText,sq9.innerText],
        [sq3.innerText,sq5.innerText,sq7.innerText]
    ]
    // const playerWins = [
    //     ['X', 'X', 'X'],
    //     ['O', 'O', 'O']
    // ]
    for(let i = 0; i < winningComb.length; i++) {
        console.log(winningComb[i])
        if (winningComb[i][0] === 'X' &&
            winningComb[i][1] === 'X' &&
            winningComb[i][2] === 'X') {
            gameEndMessage.innerText = "Player X Wins!"
            turnMessage.innerText = ""
            sq1.disabled = true
            sq2.disabled = true
            sq3.disabled = true
            sq4.disabled = true
            sq5.disabled = true
            sq6.disabled = true
            sq7.disabled = true
            sq8.disabled = true
            sq9.disabled = true
        }
        else if (winningComb[i][0] === 'O' &&
            winningComb[i][1] === 'O' &&
            winningComb[i][2] === 'O') {
            gameEndMessage.innerText = "Player O Wins!"
            turnMessage.innerText = ""
            sq1.disabled = true
            sq2.disabled = true
            sq3.disabled = true
            sq4.disabled = true
            sq5.disabled = true
            sq6.disabled = true
            sq7.disabled = true
            sq8.disabled = true
            sq9.disabled = true
        }
    }
    if (tiedGame.length >= 9){
        console.log("TIED GAME\n", tiedGame)
        gameEndMessage.innerText = "Cat's game!"
        turnMessage.innerText = ""
    }                      
    else {
        return
    }
}



const resetGame = () => {
    sq1.innerText = ""
    sq2.innerText = ""
    sq3.innerText = ""
    sq4.innerText = ""
    sq5.innerText = ""
    sq6.innerText = ""
    sq7.innerText = ""
    sq8.innerText = ""
    sq9.innerText = ""
    gameEndMessage.innerText = "New game! Pick a square."
    turnMessage.innerText = ""
    sq1.disabled = false
    sq2.disabled = false
    sq3.disabled = false
    sq4.disabled = false
    sq5.disabled = false
    sq6.disabled = false
    sq7.disabled = false
    sq8.disabled = false
    sq9.disabled = false
    tiedGame = []
}

reset.addEventListener("click", resetGame)
document.getElementById("button-1").addEventListener("click", playGame)
document.getElementById("button-2").addEventListener("click", playGame)
document.getElementById("button-3").addEventListener("click", playGame)
document.getElementById("button-4").addEventListener("click", playGame)
document.getElementById("button-5").addEventListener("click", playGame)
document.getElementById("button-6").addEventListener("click", playGame)
document.getElementById("button-7").addEventListener("click", playGame)
document.getElementById("button-8").addEventListener("click", playGame)
document.getElementById("button-9").addEventListener("click", playGame)

//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]
//     const players = ["X", "O"]
//     let firstOne = square[winningComb[i][0]].innerText
//     if (firstOne === square[winningComb[i][1]].innerText &&
//         firstOne === square[winningComb[i][2]].innerText &&
//         players.includes(firstOne)) {





















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




//click on any square on the board (event listener)
//fill in square with x, then o (repeat or give error message)
//check for winner (loop)
//if winner or tie, give message
//stop clickability when game ends
//reset button clears game and restores clickability