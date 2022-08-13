// take a deep breath. you can do this!

// VARIABLES
/*
variable for user turns
var for X and o
variable to keep track of moves, detect win/lose/draw
gameboard array to keep track of player moves
boolen for end game
*/

 let userTurn = ""

const gameBoxes = ["box1", "box2","box3","box4","box5","box6","box7","box8", "box9"]
const userOne= "x"
const userTwo= "O"

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

document.getElementById("box1").addEventListener("click", playerChoiceX);

function playerChoiceX(){
    document.getElementById("box1").innerText= "x";
}

// store players move and keep box from being chosen again
// change tunrs
// check for win/lose/draw
// reset the game
