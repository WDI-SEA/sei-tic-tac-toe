//Initialize start + radio button turns on the divs
const squares = ['nw', 'n', 'ne', 'w', 'c', 'e', 'sw', 's', 'se'];
let orcaPics = ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'o8', 'o9']
let gatorPics = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9']
const victoryConditions = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


//player one selects either orcas or alligators
let selectOrcas = function checked(){
    return document.getElementById("Orcas").checked;
};

let selectGators = function checked(){
    return document.getlementByEl("Gators").checked;
}
let playerOne = selectOrcas;

function selectPlayer() {
    if playerOne = true;
} else {
    playerOne = selectGators;
}

  console.log(playerOne)

//start + radio button determines player one's array of images



//i need a counter to track which turn it is
counter = 1;

//player 1 is always odd numbers

//player 2 is always even numbers

//on each turn, a click changes the hidden to visible by if/else statement because on every 
//image the initial state is false, if clicked it returns true, and if true then visibility = visible

//starting on turn five, check for win conditions

//if no win conditions are achieved by turn nine, then tie is achieved

//if win condition is achieved, then display winner tile and event listeners are removed

//if tie condition is achieved, then display tie tile and event listeners are removed

//if reset is clicked then the board resets







































/* This was my first attempt at the game and I decided that the scale of what I wanted to do was too confusing*/

// // function game() {

// // }//page loads

// // variables
// const squares = ['nw', 'n', 'ne', 'w', 'c', 'e', 'sw', 's', 'se'];
// const victoryConditions = [
//     [0, 1, 2],
//     [0, 4, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ];
// // const tieConditions = [];
// let selectOrcas = function checked(){
//     return document.getElementById("Orcas").checked;
// };
// let awin = null;
// let owin = null;



// // event listeners for buttons

// document.getElementById("start").addEventListener("click", startGame);

// //player selects being oras or alligators

// let player = selectOrcas;

// //player clicks start to initiate click on images
// // add.EventListens for the squares
// // dictates who goes first

// function startGame() {
// //     const squaresArray = Array.from(squares);
// //     const index = squaresArray.indexOf(e.target)

//     for (let i = 0; i < squares.length ; i++) {
//         document.getElementById(squares[i]).addEventListener("click", clickSquare())
        
//     }

//     function test() {
//         console.log('nw')
//     }
    
// function removeClicks() {
//     for (let i = 0; i < squares.length; i++) {
//         document.getElementById(squares[i].removeEventListener("click", click));
//     }
// }
//     if (Orcas && turnOnSquares) {
//         //initiate images so that player is orcas
//         for (let i = 0; i < pics.length; i++)
//             pics[i].addEventListener("click", click)

//     } else if (!selectOrcas && turnOnSquares) {
//         //initiate images so that player is alligators
//         for (let i = 0; i < pics.length; i++)
//         pics[i].addEventListener("click", click)
//     }
// }


// //Player one's pictures are all orcas and player 2 pics are all gators
// let orcas = ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'o8', 'o9']
// let gators = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9']
// let playerOne ;
// let playerTwo ;
// //Keep track of what turn it is
// let counter = 1;



// //keep track of who player one is
//     if (player) {
//         //this is orca and gets array playerOne
//         playerOne = orcas;
//         playerTwo = gators;
//     } else {
//         //is gator and gets array playerTwo
//         playerOne = gators;
//         playerTwo = orcas;
//     }
// //make the pictures visible
// // function clickSquare () { if (counter % 2) {} else {} counter++}
// //document.getEelementById("square1").addEventListener("click,clicksquare"); checkVictory () heck victory or checkTie() tie
// var clickedO = "false";
// var clickeG = "false";

// function clickSquare() {
//     if (this.getAttribute("clicked") === "true") {
//         return;
//     }

//     this.setAttribute("clicked", "true");

//     if (counter % 2 === 0) {
//         this.setAttribute("clickedO", "true");
//     }   {
//         this.setAttribute("clickedG", "true");
//     }

//     // if (clickedO == "true") {
        
//     // onclick=document.getElementById("o1").style.visibility = "visible";
//     // onclick=document.getElementById("o2").style.visibility = "visible";
//     // onclick=document.getElementById("o3").style.visibility = "visible";
//     // onclick=document.getElementById("o4").style.visibility = "visible";
//     // onclick=document.getElementById("o5").style.visibility = "visible";
//     // onclick=document.getElementById("o6").style.visibility = "visible";
//     // onclick=document.getElementById("o7").style.visibility = "visible";
//     // onclick=document.getElementById("o8").style.visibility = "visible";
//     // onclick=document.getElementById("o9").style.visibility = "visible";
//     // }


//     // counter += 1;
//     // function test2 () {
//         console.log('it works')
//     }

//     //click event works; grab the square that I have selected and then
//     //then 1. if player is alligator then grab the id for the alligator image of that square
//     //  set that image to visible .style.visibility = "visible"
//     //  else do that for orca

//     //grab id of the selections and .push them into an array

//     //compare array to win options
// // }

// //player 1 clicks on a div which turns their picture's visibility from hidden to visible 
// // the click also turns off the div for the other player disallowing it from being clicked again, counter goes up


// // onclick=document.getElementById("o1").style.visibility = "visible";
// // onclick=document.getElementById("o2").style.visibility = "visible";
// // onclick=document.getElementById("o3").style.visibility = "visible";
// // onclick=document.getElementById("o4").style.visibility = "visible";
// // onclick=document.getElementById("o5").style.visibility = "visible";
// // onclick=document.getElementById("o6").style.visibility = "visible";
// // onclick=document.getElementById("o7").style.visibility = "visible";
// // onclick=document.getElementById("o8").style.visibility = "visible";
// // onclick=document.getElementById("o9").style.visibility = "visible";

// //player 2 clicks a div which turns their picture from transparent to opaque
// // the click also turns off the div for the other player disallowing it from being clicked again

// //when a victory condition is achieved, then the span with the text displaying victory (opacity)
// //two while loops for victory tie conditions


// //if a tie condition is achieved, then the span for a tie is triggered (opacity)

// // function endGame 

// //clicking the reset button empties the squares
// // function resetBoard() {

// 