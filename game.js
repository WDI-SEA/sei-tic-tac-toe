// take a deep breath. you can do this!

// VARIABLES
/*
variable for user turns
var for X and o
variable to keep track of moves, detect win/lose/draw
gameboard array to keep track of player moves
boolen for end game
*/


//not sure if I should use individual or an array
let boxOne = document.getElementById("one")
let boxTwo=  document.getElementById("two")
let boxThree = document.getElementById("three")
let boxFour = document.getElementById("four")
let boxFive = document.getElementById("five")
let boxSix = document.getElementById("six")
let boxSeven= document.getElementById("seven")
let boxEight = document.getElementById("eight")
let boxNine = document.getElementById("nine")

const boxArray = ["one", "two", "three", "four", "five","six","seven", "eight", "nine"]

const userOne= "x"
const userTwo= "o"
let playerTurn = 1

//  game logic
function gameLogic (){
    if  (boxOne === boxTwo === boxThree){
     return winner
 } else if (boxThree === boxFour === boxFive) {
     return winner
 } else if (boxSix=== boxSeven === boxEight) {
     return winner
 } else if (boxOne === boxFour === boxSeven) {
     return winner
 } else if (boxTwo === boxFive === boxEight) {
     return winner
} else if (boxThree === boxSix=== boxNine) {
     return winner
 } else if (boxOne === boxFive === boxNine) {
     return winner
 } else if (boxThree=== boxFive === boxSeven) {
     return winner
 } else{
     return tie
 }
}


// function for player turn
if (playerTurn % 2 === 0 ){
    boxArray.innerText = "0"
} else{
    boxArray.innerText = "X"
}



// Event Listeners
// change inner text to x or o : getElementbyID:"box1"...


let choiceX = document.getElementById("one").addEventListener("click", userOneChoice)
let choiceO = document.getElementById("two").addEventListener("click", userTwoChoice)

function userOneChoice(){ 
        document.getElementById("one").innerText= "x";
        }

function userTwoChoice (){
    document.getElementById("two").innerText = "o"
}
 

// // to start game
// const newGame = newGame()

// function newGame (){
    
// }

//game play
//function gamePlay (e) {
// userOne (X) chooses sq - somehow this needs to be a click event on current box for each??
// switch turns
// userTwo (O) chooses sq
// check for win-drasw
//}

// function to change turns
// function changeUser(){
//     playerOne = !playerOne
// }




















// reset the game
function clearBoard (){

}
function resetGameboard() {
    document.getElementById("button").addEventListener("click", clearBoard)
}
