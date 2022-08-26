// take a deep breath. you can do this!



// VARIABLES
let boxOne = document.getElementById("one")
let boxTwo=  document.getElementById("two")
let boxThree = document.getElementById("three")
let boxFour = document.getElementById("four")
let boxFive = document.getElementById("five")
let boxSix = document.getElementById("six")
let boxSeven= document.getElementById("seven")
let boxEight = document.getElementById("eight")
let boxNine = document.getElementById("nine")
let box = document.querySelectorAll(".box")

const boxArray = ["boxOne", "boxTwo", "boxThree ", "boxFour ", "boxFive ","boxSix "," boxSeven", "boxEight ", "boxNine "]
const gameBoard = document.getElementById("gameBoard")
const userOne= "x"
const userTwo= "o"
let playerTurn = 1



gameBoard.addEventListener ("click", markBoxAsfilled)

box.forEach (box => {
    box.addEventListener("click", chooseTurn)
        console.log ('box clicked')
    } )


const markBoxAsfilled= function (boxArray){
    // there needs to be a statement if box is empty then run code
    // else choose another square
    // so i understand how to choose one square but I dont get random boxe
    if (playerTurn % 2 === 0 ){
        boxArray[i].innerText = "O"
        console.log('testing event listeners') 
    } else{
        boxOne.innerText = "X"
        console.log ("test1")
    }
    }

// function to start game play
let gamePlay = function gamePlay(){
    if (playCount <= 5 ){
        //user one starts
    } else if (playCount <=9){
        gameLogic() 
        ///return to game
    } else if (playCount === 9) {
        //return: tie 
        console.log("tie")
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
   document.querySelectorAll(".box").innerText =(" ")
 }
 document.getElementById("button").addEventListener("click", clearBoard)




// Event Listeners: 
// boxOne.addEventListener("click", function ( ){
//     markBoxAsfilled (1)
// })
// boxTwo.addEventListener("click",  function ( ){
//     markBoxAsfilled (2)
// })

// boxThree.addEventListener("click",  function ( ){
//     markBoxAsfilled (3)
// })
// boxFour.addEventListener("click",  function ( ){
//     markBoxAsfilled (4)
// })
// boxFive.addEventListener("click",  function ( ){
//     markBoxAsfilled (5)
// })
// boxSix.addEventListener("click",  function ( ){
//     markBoxAsfilled (6)
// })
// boxSeven.addEventListener("click", function ( ){
//     markBoxAsfilled (7)
// })
// boxEight.addEventListener("click",  function ( ){
//     markBoxAsfilled (8)
// })
// boxNine.addEventListener("click",  function ( ){
//     markBoxAsfilled (9)
// })
