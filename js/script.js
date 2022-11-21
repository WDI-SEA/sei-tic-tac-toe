console.log("we're linked to js, yassss")

// Variables
let gameGrid = document.getElementById("game-grid")

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
let reset = document.getElementById("reset-btn")

let boardArray = {
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
    sixth: '',
    seventh: '',
    eighth: '',
    ninth: ''
}

// Determining player turn

// let playerTurn = "x"
// let i=0
// while (i<9) {
//     console.log(i)
//     if (i % 2 === 0) {
//         console.log("Player X, it's your turn!");
//         message.innerText = "Player X, it's your turn!";
//         i++
//     } else if (i % 2 != 0) {
//         console.log("Player O, it's your turn!");
//         message.innerText = "Player O, it's your turn!";
//         i++
//      } // else if (i === 9 && no win) {
        // set isRunning to false
    //}
//}

let player = "Player X"
function nextTurn(currentPlayer) {
    if (currentPlayer === "Player X") {
        player = "Player O";
    } else {
        player = "Player X"
    }
}

// function takeATurn

gameGrid.addEventListener('click', function(e) {
    if (player === "Player X") {
    console.log("Player X has gone");
    console.log(e.target)
    squareChosen = e.target
    boardArray[e.target.value] = "X"
    e.target.innerText = "X"
    console.log(boardArray)
    nextTurn(player)
    message.innerText = (`It's ${player}'s turn`)
    // e.target.removeEventListener('click,')
} else if (player === "Player O") {
    console.log("Player O has gone");
    console.log(e.target)
    boardArray[e.target.value] = "O"
    e.target.innerText = "O"
    console.log(boardArray)
    nextTurn(player)
    message.innerText = (`It's ${player}'s turn`)
}})
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



// second.addEventListener('click', function(e) {
//     console.log("Player X has gone");
//     second.innerText = "X"
// }, {once: true}
// )


// if (first.clicked == true) {
//     console.log("first button was clicked")
// }

// for (i = 0; i < boardArray.length; i++) {
//         console.log(boardArray[i]);
//         boardArray[i].addEventListener('click', function() {
//         let clicked = boardArray[i]
//         console.log("you clicked " + clicked)
//         // clicked.innerText = "X"
//    });
// }



// second.addEventListener('click', function(e) {
//     console.log("Player X has gone");
//     second.innerText = "X"
// }, {once: true}
// )

//Player O turns

// CHECKING FOR A WIN:

// checking for x's:
if ((boardArray[0] === "X" && boardArray[1] === "X" && boardArray[2] === "X") || (boardArray[3] === "X" && boardArray[4] === "X" && boardArray[5] === "X") || (boardArray[7] === "X" && boardArray[8] === "X" && boardArray[9] === "X") || (boardArray[0] === "X" && boardArray[3] === "X" && boardArray[6] === "X") || (boardArray[1] === "X" && boardArray[4] === "X" && boardArray[7] === "X") || (boardArray[2] === "X" && boardArray[5] === "X" && boardArray[8] === "X") || (boardArray[0] === "X" && boardArray[4] === "X" && boardArray[8] === "X") || (boardArray[2] === "X" && boardArray[4] === "X" && boardArray[6] === "X")) {
    console.log("Player X wins!");
    isRunning === false;
    message.innerText = "Player X, you win!"}

// checking for o's:
if ((boardArray[0] === "O" && boardArray[1] === "O" && boardArray[2] === "O") || (boardArray[3] === "O" && boardArray[4] === "O" && boardArray[5] === "O") || (boardArray[7] === "O" && boardArray[8] === "O" && boardArray[9] === "O") || (boardArray[0] === "O" && boardArray[3] === "X" && boardArray[6] === "O") || (boardArray[1] === "O" && boardArray[4] === "O" && boardArray[7] === "O") || (boardArray[2] === "O" && boardArray[5] === "O" && boardArray[8] === "O") || (boardArray[0] === "O" && boardArray[4] === "O" && boardArray[8] === "O") || (boardArray[2] === "O" && boardArray[4] === "O" && boardArray[6] === "O")) {
    console.log("Player O wins!");
    isRunning === false;
    message.innerText = "Player O, you win!"}



    // somehow keep the x or o there and block off that square


// Game isRunning variable
