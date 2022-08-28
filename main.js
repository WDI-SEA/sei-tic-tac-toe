//  add DOm content loaded
document.addEventListener('DOMContentLoaded', () => {
// variables
//  elements from DOM
const gameBoard = document.getElementById("gameboard")
const box = document.getElementById("box")
const resetBtn = document.getElementById("resetButton")
const gameInfo = document.getElementById('game-output')
console.log(gameInfo)
//  game play vars
let playerX = []
let playerO = []
let turnNum = 0
let totalMoves = 0

// nested array for win options
let winConditions =[
    ["one","two", "three"],
    ["four","five","six"],
    ['seven', 'eight', 'nine'],
    ["one","four","seven"],
    ["two", "five", "eight"],
    ["three", "six", "nine"],
    ["one", "five", "nine"],
    ["three", "five", "seven"]
]

 gameInfo.innerText = "Player X goes first"


gameBoard.addEventListener("click", playerTurn)

function playerTurn(Event){
   let boxCheck = Event.target
 console.log(boxCheck)
    // if box already filled change inner text to choose another box
    if (boxCheck.classList.contains("choiceX")) {
        gameInfo.innerText = "Choose Again"
    } else {
     if (boxCheck.classList.contains("choiceO")){
        gameInfo.innerText = "Choose Again"
    } else{
        // decides turn
        if (turnNum % 2 === 0){
            // adds class list and places X in box
            boxCheck.classList.add("choiceX")
            boxCheck.innerText = "X"
            // displays change in turn
            gameInfo.innerText = "Player O's turn"
            // push choice to player array
            playerX.push(boxCheck.id)
            // keeps track of turns
            turnNum ++
    // changes to O turn
    } else {
            boxCheck.innerText = "O"
            boxCheck.classList.add("choiceO")
            gameInfo.innerText = "Player X's turn"
            playerO.push(boxCheck.id)
            turnNum ++
    }

    if (turnNum >= 4){
        checkForWin()
    }
}
}
}



playerTurn(Event)
//  function checkForWIn ()
    // sfter 4 turns runs if/else to check for win
    // if a player wins: add win game msg and end game 
    // at 9 moves if no winner declare a tie

// function resetGame- runs when a winner is declared or a tie declared
//    resets game board and all var back to beginning game state
})