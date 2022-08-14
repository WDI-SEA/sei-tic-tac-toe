// take a deep breath. you can do this!

// VARIABLES

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

const boxArray = [" ", "", " ", " ", " "," "," ", " ", " "]

const userOne= "x"
const userTwo= "o"
let playerTurn = 1

//  game logic for end result
const gameOutcome =function gameLogic (){
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
const chooseTurn = function (){
if (playerTurn % 2 === 0 ){
    document.getElementById(boxArray[""]).addEventListener("click", userChoice)
    boxArray[" "].innerText = "x" ///this needs to change the value of ANY slected box 
} else{
    boxArray[ " "].innerText = "o"
}
}


// Event Listeners
let choice1 = document.getElementById("one").addEventListener("click", userChoice)
let choice2 = document.getElementById("two").addEventListener("click", userChoice)
let choice3 = document.getElementById("three").addEventListener("click", userChoice)
let choice4= document.getElementById("four").addEventListener("click", userChoice)
let choice5 = document.getElementById("five").addEventListener("click", userChoice)
let choice6 = document.getElementById("six").addEventListener("click", userChoice)
let choice7 = document.getElementById("seven").addEventListener("click", userChoice)
let choice8= document.getElementById("eight").addEventListener("click", userChoice)
let choice9 = document.getElementById("nine").addEventListener("click", userChoice)





function userChoice(){ 
    //if number of plays is  than 5 -->

    //  function for {if player turn put x in chosen box
    // else  place 0 in chosen box }

   // if number of place is 9  -->
   // { function for game logic} 
       
}


// reset the game
function clearBoard (){
 //need to reset all inner text to " "
 let reset = document.getElementsByClassName("box")
  reset=innerText = " "
}
function resetGameboard() {
    document.getElementById("button").addEventListener("click", clearBoard)
}
