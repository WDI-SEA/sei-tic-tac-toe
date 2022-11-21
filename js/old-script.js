// Ensuring JS is linked:
console.log("we're linked to js, yassss")

// Variables
let gameGrid = document.getElementById("game-grid")
let gameGridKids = gameGrid.children

let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")

let fourth = document.getElementById("fourth")
let fifth = document.getElementById("fifth")
let sixth = document.getElementById("sixth")

let seventh = document.getElementById("seventh")
let eighth = document.getElementById("eighth")
let ninth = document.getElementById("ninth")

let message = document.getElementById("message")
let restart = document.getElementById("restart-btn")

// Main board array:
const gameGridKidsArray = ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth']

const gridArray = ['','','','','','','','','','']

// Game is running:
let gameIsRunning = true

// Choosing which turn it is:
let player = "Player X"

function nextTurn(currentPlayer) {
    if (currentPlayer === "Player X") {
        player = "Player O";
    } else {
        player = "Player X"
    }
}

// Moves:
gameGrid.addEventListener('click', function(e) {

//&& e.target.value === null 

//Player X's turn:
    if (gameIsRunning = true && player === "Player X") {
    console.log("Player X has gone");
    
    e.target.innerText = "X"
    for (let i=0; i < gridArray.length; i++) {
        gridArray[e.target] = "X"
        console.log(gridArray) }
    nextTurn(player)
    message.innerText = (`It's ${player}'s turn`)
}
//Player O's turn:
else if (gameIsRunning = true && player === "Player O") {
    console.log("Player O has gone");
    console.log(e.target)
    gridArray[e.target.value] = "O"
    e.target.innerText = "O"
    console.log(gridArray)
    nextTurn(player)
    message.innerText = (`It's ${player}'s turn`)
}})

// CHECKING FOR A WIN:

// Checking for X's:
if ((gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X") || (gridArray[3] === "X" && gridArray[4] === "X" && gridArray[5] === "X") || (gridArray[7] === "X" && gridArray[8] === "X" && gridArray[9] === "X") || (gridArray[0] === "X" && gridArray[3] === "X" && gridArray[6] === "X") || (gridArray[1] === "X" && gridArray[4] === "X" && gridArray[7] === "X") || (gridArray[2] === "X" && gridArray[5] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[4] === "X" && gridArray[8] === "X") || (gridArray[2] === "X" && gridArray[4] === "X" && gridArray[6] === "X")) {
    console.log("Player X wins!");
    gameIsRunning = false;
    message.innerText = "Player X, you win!"}

// Checking for O's:
if ((gridArray[0] === "O" && gridArray[1] === "O" && gridArray[2] === "O") || (gridArray[3] === "O" && gridArray[4] === "O" && gridArray[5] === "O") || (gridArray[7] === "O" && gridArray[8] === "O" && gridArray[9] === "O") || (gridArray[0] === "O" && gridArray[3] === "X" && gridArray[6] === "O") || (gridArray[1] === "O" && gridArray[4] === "O" && gridArray[7] === "O") || (gridArray[2] === "O" && gridArray[5] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[4] === "O" && gridArray[8] === "O") || (gridArray[2] === "O" && gridArray[4] === "O" && gridArray[6] === "O")) {
    console.log("Player O wins!");
    gameIsRunning = false;
    message.innerText = "Player O, you win!"}

else if (gridArray.length)

// Reset button
restart.addEventListener('click', function () {
    document.location.reload();
});

// Cats game algorithm:
let i=0

//     let i=0
//     while (i<9) {
//     if (i % 2 === 0) {
//         console.log("Player X, it's your turn!");
//         message.innerText = "Player X, it's your turn!";
//         i++
//     } else if (i % 2 != 0) {
//         console.log("Player O, it's your turn!");
//         message.innerText = "Player O, it's your turn!";
//         i++
//     }
//     console.log(i)
// }})


// if (first.clicked == true) {
//     console.log("first button was clicked")
// }

// for (i = 0; i < gridArray.length; i++) {
//         console.log(gridArray[i]);
//         gridArray[i].addEventListener('click', function() {
//         let clicked = gridArray[i]
//         console.log("you clicked " + clicked)
//         // clicked.innerText = "X"
//    });
// }



// Still left:
// 1. adding to array
// 2. somehow keep the x or o there and block off that square
// 3. cats game conditions
