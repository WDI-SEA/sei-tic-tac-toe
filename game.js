// take a deep breath. you can do this!

// VARIABLES

//not sure if I should use individual or array
let boxOne = document.getElementById("one")
let boxTwo=  document.getElementById("two")
let boxThree = document.getElementById("three")
let boxFour = document.getElementById("four")
let boxFive = document.getElementById("five")
let boxSix = document.getElementById("six")
let boxSeven= document.getElementById("seven")
let boxEight = document.getElementById("eight")
let boxNine = document.getElementById("nine")

const boxArray = ["boxOne", "boxTwo", "boxThree ", "boxFour ", "boxFive ","boxSix "," boxSeven", "boxEight ", "boxNine "]

const userOne= "x"
const userTwo= "o"
let playerTurn = 1
let box = document.querySelectorAll(".box")


// Event Listeners: 
boxOne.addEventListener("click", function ( ){
    markBoxAsfilled (1)
})
boxTwo.addEventListener("click",  function ( ){
    markBoxAsfilled (2)
})

boxThree.addEventListener("click",  function ( ){
    markBoxAsfilled (3)
})
boxFour.addEventListener("click",  function ( ){
    markBoxAsfilled (4)
})
boxFive.addEventListener("click",  function ( ){
    markBoxAsfilled (5)
})
boxSix.addEventListener("click",  function ( ){
    markBoxAsfilled (6)
})
boxSeven.addEventListener("click", function ( ){
    markBoxAsfilled (7)
})
boxEight.addEventListener("click",  function ( ){
    markBoxAsfilled (8)
})
boxNine.addEventListener("click",  function ( ){
    markBoxAsfilled (9)
})

function markBoxAsfilled () {

}
// box.forEach (box => {
//     box.addEventListener("click", chooseTurn)
//         console.log ('box clicked')
//     } )


const chooseTurn = function (){
    if (playerTurn % 2 === 0 ){
        document.getElementById(boxArray[""]).addEventListener("click", userChoice)
        boxArray[" "].innerText = "x" ///this needs to change the value of ANY slected box 
        console.log()
    } else{
        boxArray[ " "].innerText = "o"
    }
    }

// function to start game play
let gamePlay = function gamePlay(){
    if (playCount <= 5){
    //this is the function for x and 0 
  (playerTurn %2 === 0)
        chooseTurn()
    } else if (playCount === 9) {
        gameOutcome()
    }
}

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



// reset the game
let clearBoard=  function clearBoard (){
  //need to reset all inner text to " "
  let reset = document.getElementsByClassName("box")
  reset=innerText = " "
 }
 function resetGameboard() {
document.getElementById("button").addEventListener("click", clearBoard)
}

addEventListener('DOMContentLoaded', (event) => {});
onDOMContentLoaded = (event) => { };