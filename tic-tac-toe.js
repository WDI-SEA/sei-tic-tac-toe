console.log("hello")


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
    if (playerOne) {
        console.log("orca")
} else {
    playerOne = selectGators;
}

  console.log(playerOne)

//start + radio button determines player one's array of images

document.getElementById("start").addEventListener("click", startGame());


function startGame() {
//     const squaresArray = Array.from(squares);
//     const index = squaresArray.indexOf(e.target)

    for (let i = 0; i < squares.length ; i++) {
        document.getElementById(squares[i]).addEventListener("click", clickSquare())
        
    }

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