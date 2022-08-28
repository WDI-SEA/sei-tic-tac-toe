document.addEventListener('DOMContentLoaded', () => {

    // **** VARIABLES ****
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

// LOADS AT BEGINING OF GAME
 gameInfo.innerText = "Player X goes first"

//  adds an event listener to the boxes and calls the playerturn fxn
gameBoard.addEventListener("click", playerTurn)

// playerTurn fxn starts game play and switches between players
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
            // keep track of turns
            turnNum ++
    // changes to O turn
    } else {
            boxCheck.innerText = "O"
            boxCheck.classList.add("choiceO")
            gameInfo.innerText = "Player X's turn"
            playerO.push(boxCheck.id)
            turnNum ++
        }
     // if turn >4 checkForWin()
    if (turnNum >= 4){
        checkForWIn()
    }
    // if there is not a winner by 9 moves display game is tied
    if (turnNum === 9){
        gameInfo.innerText ="Game Tied"

    }
    }
    }
   
}
// calls playerTurn function
playerTurn(Event)



function checkForWIn (){
//    loop through winconditions array
    for (let i=0; i <winConditions.length; i++){
        let winFoundX = 0
        let winFoundO = 0
        // loops through array in the array 
    for (let j=0; j < winConditions[i].length; j++){
        // check to see if playerX array created during game play matches win conditions
        if(playerX.includes(winConditions[i][j])){
            winFoundX ++
            if (winFoundX ===3)
            gameInfo.innerText=("playerX has won")
        }
    }
    if (playerO.includes(winConditions[i][j])) {
        winFoundO ++
        if (winFoundO === 3){
            gameInfo.innerText= ("player O has won")
        }
    }
}
    }
checkForWIn()
  


// uses reset button to restart game 
function resetGame(){
    gameBoard.removeEventListener("click", playerTurn)
    gameInfo.innerText = "Player X goes first"
    boxCheck.classList.remove("choiceX")
    boxCheck.classList.remove("choiceO")
    boxCheck.innerText = ""
    gameBoard.addEventListener("click", playerTurn)
}
resetGame()

resetBtn.addEventListener('click', resetGame)


})