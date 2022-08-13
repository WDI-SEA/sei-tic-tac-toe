// take a deep breath. you can do this!

// VARIABLES
/*
variable for user turns
var for X and o
variable to keep track of moves, detect win/lose/draw
gameboard array to keep track of player moves
boolen for end game
*/

let boxOne = "one"
let boxTwo= "two"
let boxThree = "three"
let boxFour = "four"
let boxFive = "five"
let boxSix = "six"
let boxSeven= "seven"
let boxEight = "eight"
let boxNine = "nine"



let gameBoxes = ""
const userOne= ""
const userTwo= ""


//  game logic

// if (box1 === box2 === box3){
//     return winner
// } else if (box3 === box4 === box5) {
//     return winner
// } else if (box6 === box7 === box8) {
//     return winner
// } else if (box1 === box4 === box7) {
//     return winner
// } else if (box2 === box5 === box8) {
//     return winner
// } else if (box3 === box6=== box9) {
//     return winner
// } else if (box1 === box5 === box9) {
//     return winner
// } else if (box3 === box5 === box7) {
//     return winner
// } else{
//     return tie
// }




// Event Listeners
// change inner text to x or o : getElementbyID:"box1"...

let choice= document.getElementById("six")

choice.addEventListener("click", playerChoiceX);

 function playerChoiceX(){ 
        document.getElementById("six").innerText= "x";
        let boxSix = X
 }

  function choice {
    playerChoiceX ()
// userOne (X) chooses then 
//games goes to player 2 
// userTwo chooses (O) 
    
// game goes to userOne(X)
  }

// store players move and keep box from being chosen again


// change turns


// check for win/lose/draw

// reset the game
// 