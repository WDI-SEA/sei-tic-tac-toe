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

// function freeze() {
//     gameGridArray = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth]
//     for (i=0; i < gameGridArray.length; i++) {
//     gameGridArray[i].removeEventListener('click', function(){})
// }}

// Main board array:
const gridArray = ['','','','','','','','','']

let turns = 0

/////////// First box clicked: //////////////////
first.addEventListener('click', function(e) {

//Player X's turn:
    if (gameIsRunning = true && player === "Player X") {
        console.log("Player X has gone");
        first.innerText = "X"
        gridArray[0] = "X"
        console.log(gridArray) 
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
}
//Player O's turn:
    else if (gameIsRunning = true && player === "Player O") {
        console.log("Player O has gone");
        first.innerText = "O"
        gridArray[0] = "O"
        console.log(gridArray)
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
} 

// CHECKING FOR A WIN:
if ((gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X") || (gridArray[3] === "X" && gridArray[4] === "X" && gridArray[5] === "X") || (gridArray[6] === "X" && gridArray[7] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[3] === "X" && gridArray[6] === "X") || (gridArray[1] === "X" && gridArray[4] === "X" && gridArray[7] === "X") || (gridArray[2] === "X" && gridArray[5] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[4] === "X" && gridArray[8] === "X") || (gridArray[2] === "X" && gridArray[4] === "X" && gridArray[6] === "X")) {
    console.log("Player X wins!");
    gameIsRunning = false;
    message.innerText = "Player X, you win!"}

if ((gridArray[0] === "O" && gridArray[1] === "O" && gridArray[2] === "O") || (gridArray[3] === "O" && gridArray[4] === "O" && gridArray[5] === "O") || (gridArray[6] === "O" && gridArray[7] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[3] === "O" && gridArray[6] === "O") || (gridArray[1] === "O" && gridArray[4] === "O" && gridArray[7] === "O") || (gridArray[2] === "O" && gridArray[5] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[4] === "O" && gridArray[8] === "O") || (gridArray[2] === "O" && gridArray[4] === "O" && gridArray[6] === "O")) {
    console.log("Player O wins!");
    gameIsRunning = false;
    message.innerText = "Player O, you win!"}
if (turns === 9) {
    message.innerText = "Cats game!"
}
}, {once: true})

// Second box clicked:
second.addEventListener('click', function(e) {

    //Player X's turn:
    if (gameIsRunning = true && player === "Player X") {
        console.log("Player X has gone");
        second.innerText = "X"
        gridArray[1] = "X"
        console.log(gridArray) 
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
    //Player O's turn:
    if (gameIsRunning = true && player === "Player O") {
        console.log("Player O has gone");
        second.innerText = "O"
        gridArray[1] = "O"
        console.log(gridArray)
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
    // CHECKING FOR A WIN:
if ((gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X") || (gridArray[3] === "X" && gridArray[4] === "X" && gridArray[5] === "X") || (gridArray[6] === "X" && gridArray[7] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[3] === "X" && gridArray[6] === "X") || (gridArray[1] === "X" && gridArray[4] === "X" && gridArray[7] === "X") || (gridArray[2] === "X" && gridArray[5] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[4] === "X" && gridArray[8] === "X") || (gridArray[2] === "X" && gridArray[4] === "X" && gridArray[6] === "X")) {
    console.log("Player X wins!");
    gameIsRunning = false;
    message.innerText = "Player X, you win!"}

if ((gridArray[0] === "O" && gridArray[1] === "O" && gridArray[2] === "O") || (gridArray[3] === "O" && gridArray[4] === "O" && gridArray[5] === "O") || (gridArray[6] === "O" && gridArray[7] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[3] === "O" && gridArray[6] === "O") || (gridArray[1] === "O" && gridArray[4] === "O" && gridArray[7] === "O") || (gridArray[2] === "O" && gridArray[5] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[4] === "O" && gridArray[8] === "O") || (gridArray[2] === "O" && gridArray[4] === "O" && gridArray[6] === "O")) {
    console.log("Player O wins!");
    gameIsRunning = false;
    message.innerText = "Player O, you win!"}
if (turns === 9) {
    message.innerText = "Cats game!"
}
}, {once: true})

// Third box clicked:
third.addEventListener('click', function(e) {

    //Player X's turn:
    if (gameIsRunning = true && player === "Player X") {
        console.log("Player X has gone");
        third.innerText = "X"
        gridArray[2] = "X"
        console.log(gridArray) 
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
    //Player O's turn:
    else if (gameIsRunning = true && player === "Player O") {
        console.log("Player O has gone");
        third.innerText = "O"
        gridArray[2] = "O"
        console.log(gridArray)
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
// CHECKING FOR A WIN:
if ((gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X") || (gridArray[3] === "X" && gridArray[4] === "X" && gridArray[5] === "X") || (gridArray[6] === "X" && gridArray[7] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[3] === "X" && gridArray[6] === "X") || (gridArray[1] === "X" && gridArray[4] === "X" && gridArray[7] === "X") || (gridArray[2] === "X" && gridArray[5] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[4] === "X" && gridArray[8] === "X") || (gridArray[2] === "X" && gridArray[4] === "X" && gridArray[6] === "X")) {
    console.log("Player X wins!");
    gameIsRunning = false;
    message.innerText = "Player X, you win!"}

if ((gridArray[0] === "O" && gridArray[1] === "O" && gridArray[2] === "O") || (gridArray[3] === "O" && gridArray[4] === "O" && gridArray[5] === "O") || (gridArray[6] === "O" && gridArray[7] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[3] === "O" && gridArray[6] === "O") || (gridArray[1] === "O" && gridArray[4] === "O" && gridArray[7] === "O") || (gridArray[2] === "O" && gridArray[5] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[4] === "O" && gridArray[8] === "O") || (gridArray[2] === "O" && gridArray[4] === "O" && gridArray[6] === "O")) {
    console.log("Player O wins!");
    gameIsRunning = false;
    message.innerText = "Player O, you win!"}
    if (turns === 9) {
        message.innerText = "Cats game!"
    }
    }, {once: true})

// Fourth box clicked:
fourth.addEventListener('click', function(e) {

    //Player X's turn:
    if (gameIsRunning = true && player === "Player X") {
        console.log("Player X has gone");
        fourth.innerText = "X"
        gridArray[3] = "X"
        console.log(gridArray) 
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
    //Player O's turn:
    else if (gameIsRunning = true && player === "Player O") {
        console.log("Player O has gone");
        fourth.innerText = "O"
        gridArray[3] = "O"
        console.log(gridArray)
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
// CHECKING FOR A WIN:
if ((gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X") || (gridArray[3] === "X" && gridArray[4] === "X" && gridArray[5] === "X") || (gridArray[6] === "X" && gridArray[7] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[3] === "X" && gridArray[6] === "X") || (gridArray[1] === "X" && gridArray[4] === "X" && gridArray[7] === "X") || (gridArray[2] === "X" && gridArray[5] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[4] === "X" && gridArray[8] === "X") || (gridArray[2] === "X" && gridArray[4] === "X" && gridArray[6] === "X")) {
    console.log("Player X wins!");
    gameIsRunning = false;
    message.innerText = "Player X, you win!"}

if ((gridArray[0] === "O" && gridArray[1] === "O" && gridArray[2] === "O") || (gridArray[3] === "O" && gridArray[4] === "O" && gridArray[5] === "O") || (gridArray[6] === "O" && gridArray[7] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[3] === "O" && gridArray[6] === "O") || (gridArray[1] === "O" && gridArray[4] === "O" && gridArray[7] === "O") || (gridArray[2] === "O" && gridArray[5] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[4] === "O" && gridArray[8] === "O") || (gridArray[2] === "O" && gridArray[4] === "O" && gridArray[6] === "O")) {
    console.log("Player O wins!");
    gameIsRunning = false;
    message.innerText = "Player O, you win!"}
if (turns === 9) {
        message.innerText = "Cats game!"
    }
    }, {once: true})

// Fifth box clicked:
fifth.addEventListener('click', function(e) {

    //Player X's turn:
    if (gameIsRunning = true && player === "Player X") {
        console.log("Player X has gone");
        fifth.innerText = "X"
        gridArray[4] = "X"
        console.log(gridArray) 
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
    //Player O's turn:
    else if (gameIsRunning = true && player === "Player O") {
        console.log("Player O has gone");
        fifth.innerText = "O"
        gridArray[4] = "O"
        console.log(gridArray)
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
// CHECKING FOR A WIN:
if ((gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X") || (gridArray[3] === "X" && gridArray[4] === "X" && gridArray[5] === "X") || (gridArray[6] === "X" && gridArray[7] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[3] === "X" && gridArray[6] === "X") || (gridArray[1] === "X" && gridArray[4] === "X" && gridArray[7] === "X") || (gridArray[2] === "X" && gridArray[5] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[4] === "X" && gridArray[8] === "X") || (gridArray[2] === "X" && gridArray[4] === "X" && gridArray[6] === "X")) {
    console.log("Player X wins!");
    gameIsRunning = false;
    message.innerText = "Player X, you win!"}

if ((gridArray[0] === "O" && gridArray[1] === "O" && gridArray[2] === "O") || (gridArray[3] === "O" && gridArray[4] === "O" && gridArray[5] === "O") || (gridArray[6] === "O" && gridArray[7] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[3] === "O" && gridArray[6] === "O") || (gridArray[1] === "O" && gridArray[4] === "O" && gridArray[7] === "O") || (gridArray[2] === "O" && gridArray[5] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[4] === "O" && gridArray[8] === "O") || (gridArray[2] === "O" && gridArray[4] === "O" && gridArray[6] === "O")) {
    console.log("Player O wins!");
    gameIsRunning = false;
    message.innerText = "Player O, you win!"}
 if (turns === 9) {
        message.innerText = "Cats game!"
    }
    }, {once: true})

// Sixth box clicked:
sixth.addEventListener('click', function(e) {

    //Player X's turn:
    if (gameIsRunning = true && player === "Player X") {
        console.log("Player X has gone");
        sixth.innerText = "X"
        gridArray[5] = "X"
        console.log(gridArray) 
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
    //Player O's turn:
    else if (gameIsRunning = true && player === "Player O") {
        console.log("Player O has gone");
        sixth.innerText = "O"
        gridArray[5] = "O"
        console.log(gridArray)
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
// CHECKING FOR A WIN:
if ((gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X") || (gridArray[3] === "X" && gridArray[4] === "X" && gridArray[5] === "X") || (gridArray[6] === "X" && gridArray[7] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[3] === "X" && gridArray[6] === "X") || (gridArray[1] === "X" && gridArray[4] === "X" && gridArray[7] === "X") || (gridArray[2] === "X" && gridArray[5] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[4] === "X" && gridArray[8] === "X") || (gridArray[2] === "X" && gridArray[4] === "X" && gridArray[6] === "X")) {
    console.log("Player X wins!");
    gameIsRunning = false;
    message.innerText = "Player X, you win!"}

if ((gridArray[0] === "O" && gridArray[1] === "O" && gridArray[2] === "O") || (gridArray[3] === "O" && gridArray[4] === "O" && gridArray[5] === "O") || (gridArray[6] === "O" && gridArray[7] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[3] === "O" && gridArray[6] === "O") || (gridArray[1] === "O" && gridArray[4] === "O" && gridArray[7] === "O") || (gridArray[2] === "O" && gridArray[5] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[4] === "O" && gridArray[8] === "O") || (gridArray[2] === "O" && gridArray[4] === "O" && gridArray[6] === "O")) {
    console.log("Player O wins!");
    gameIsRunning = false;
    message.innerText = "Player O, you win!"}
 if (turns === 9) {
        message.innerText = "Cats game!"
    }
    }, {once: true})

// Seventh box clicked:
seventh.addEventListener('click', function(e) {

    //Player X's turn:
    if (gameIsRunning = true && player === "Player X") {
        console.log("Player X has gone");
        seventh.innerText = "X"
        gridArray[6] = "X"
        console.log(gridArray) 
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
    //Player O's turn:
    else if (gameIsRunning = true && player === "Player O") {
        console.log("Player O has gone");
        seventh.innerText = "O"
        gridArray[6] = "O"
        console.log(gridArray)
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
// CHECKING FOR A WIN:
if ((gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X") || (gridArray[3] === "X" && gridArray[4] === "X" && gridArray[5] === "X") || (gridArray[6] === "X" && gridArray[7] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[3] === "X" && gridArray[6] === "X") || (gridArray[1] === "X" && gridArray[4] === "X" && gridArray[7] === "X") || (gridArray[2] === "X" && gridArray[5] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[4] === "X" && gridArray[8] === "X") || (gridArray[2] === "X" && gridArray[4] === "X" && gridArray[6] === "X")) {
    console.log("Player X wins!");
    gameIsRunning = false;
    message.innerText = "Player X, you win!"}

if ((gridArray[0] === "O" && gridArray[1] === "O" && gridArray[2] === "O") || (gridArray[3] === "O" && gridArray[4] === "O" && gridArray[5] === "O") || (gridArray[6] === "O" && gridArray[7] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[3] === "O" && gridArray[6] === "O") || (gridArray[1] === "O" && gridArray[4] === "O" && gridArray[7] === "O") || (gridArray[2] === "O" && gridArray[5] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[4] === "O" && gridArray[8] === "O") || (gridArray[2] === "O" && gridArray[4] === "O" && gridArray[6] === "O")) {
    console.log("Player O wins!");
    gameIsRunning = false;
    message.innerText = "Player O, you win!"}
 if (turns === 9) {
        message.innerText = "Cats game!"
    }
    }, {once: true})

// Eighth box clicked:
eighth.addEventListener('click', function(e) {

    //Player X's turn:
    if (gameIsRunning = true && player === "Player X") {
        console.log("Player X has gone");
        eighth.innerText = "X"
        gridArray[7] = "X"
        console.log(gridArray) 
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
    //Player O's turn:
    else if (gameIsRunning = true && player === "Player O") {
        console.log("Player O has gone");
        eighth.innerText = "O"
        gridArray[7] = "O"
        console.log(gridArray)
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
// CHECKING FOR A WIN:
if ((gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X") || (gridArray[3] === "X" && gridArray[4] === "X" && gridArray[5] === "X") || (gridArray[6] === "X" && gridArray[7] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[3] === "X" && gridArray[6] === "X") || (gridArray[1] === "X" && gridArray[4] === "X" && gridArray[7] === "X") || (gridArray[2] === "X" && gridArray[5] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[4] === "X" && gridArray[8] === "X") || (gridArray[2] === "X" && gridArray[4] === "X" && gridArray[6] === "X")) {
    console.log("Player X wins!");
    gameIsRunning = false;
    message.innerText = "Player X, you win!"}

if ((gridArray[0] === "O" && gridArray[1] === "O" && gridArray[2] === "O") || (gridArray[3] === "O" && gridArray[4] === "O" && gridArray[5] === "O") || (gridArray[6] === "O" && gridArray[7] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[3] === "O" && gridArray[6] === "O") || (gridArray[1] === "O" && gridArray[4] === "O" && gridArray[7] === "O") || (gridArray[2] === "O" && gridArray[5] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[4] === "O" && gridArray[8] === "O") || (gridArray[2] === "O" && gridArray[4] === "O" && gridArray[6] === "O")) {
    console.log("Player O wins!");
    gameIsRunning = false;
    message.innerText = "Player O, you win!"}
 if (turns === 9) {
        message.innerText = "Cats game!"
    }
    }, {once: true})

// Ninth box clicked:
ninth.addEventListener('click', function(e) {

    //Player X's turn:
    if (gameIsRunning = true && player === "Player X") {
        console.log("Player X has gone");
        ninth.innerText = "X"
        gridArray[8] = "X"
        console.log(gridArray) 
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
    //Player O's turn:
    else if (gameIsRunning = true && player === "Player O") {
        console.log("Player O has gone");
        ninth.innerText = "O"
        gridArray[8] = "O"
        console.log(gridArray)
        nextTurn(player)
        message.innerText = (`It's ${player}'s turn`)
        turns++
    }
// CHECKING FOR A WIN:
if ((gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X") || (gridArray[3] === "X" && gridArray[4] === "X" && gridArray[5] === "X") || (gridArray[6] === "X" && gridArray[7] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[3] === "X" && gridArray[6] === "X") || (gridArray[1] === "X" && gridArray[4] === "X" && gridArray[7] === "X") || (gridArray[2] === "X" && gridArray[5] === "X" && gridArray[8] === "X") || (gridArray[0] === "X" && gridArray[4] === "X" && gridArray[8] === "X") || (gridArray[2] === "X" && gridArray[4] === "X" && gridArray[6] === "X")) {
    console.log("Player X wins!");
    gameIsRunning = false;
    message.innerText = "Player X, you win!"}

if ((gridArray[0] === "O" && gridArray[1] === "O" && gridArray[2] === "O") || (gridArray[3] === "O" && gridArray[4] === "O" && gridArray[5] === "O") || (gridArray[6] === "O" && gridArray[7] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[3] === "O" && gridArray[6] === "O") || (gridArray[1] === "O" && gridArray[4] === "O" && gridArray[7] === "O") || (gridArray[2] === "O" && gridArray[5] === "O" && gridArray[8] === "O") || (gridArray[0] === "O" && gridArray[4] === "O" && gridArray[8] === "O") || (gridArray[2] === "O" && gridArray[4] === "O" && gridArray[6] === "O")) {
    console.log("Player O wins!");
    gameIsRunning = false;
    message.innerText = "Player O, you win!"}
 if (turns === 9) {
        message.innerText = "Cats game!"
    }
    }, {once: true}) 

// Reset button
restart.addEventListener('click', function () {
    document.location.reload();
});

// Cats game algorithm:
// for (i=0; i<gridArray.length;i++) {
//     if (i>7) {
//         message.innerText= "It's a cats game!"
//     }
// }
