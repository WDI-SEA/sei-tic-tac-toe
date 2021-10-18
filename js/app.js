// Select elements and attach functions via event listeners
const subContainer = document.querySelector('#subContainer')
const reset = document.querySelector('#reset')
// let message = document.querySelector('#messageDisplay')
let player1Message = document.querySelector('#player1Message')
let player2Message = document.querySelector('#player2Message')
const start = document.querySelector('#start')

// You will also need a variable to keep track of moves.

let currentPlayer = ""
const player1 = "X"
const player2 = "O"

// pseudo code - this logic needs to be somewhere in the gameplay
// currentPlayer = player1
// currentPlayer = player2


// let winner;
// later on when there is a winner you assign winner to winner
// const winner = player1
const boxList = document.querySelectorAll('.containerChild')
// const gameBoard = getElementsByClassName("mainBlock"[0])

//This will be used to indicate whether or not to draw an X or an O
const howToWin = [[0, 1, 2,], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6,], [2, 5, 8,]]

function startGame() {
    console.log('starting game')
    playPlayer1()
}

// function playPlayer() {
//     currentPlayer = player1

//     // let boxes;
//     for (let i = 0; i < 9; i++) {
//         boxList[i].addEventListener('click', e => {
//             let box = e.target

//             if (box.innerText === '' && currentPlayer === player1) {
//                 box.innerText = 'X'
//             }
//         })
//     }
//     // console.log('these are the boxes', boxes)

// }

function playPlayer1() {
    // console.log(
    //     'we are inside playPlayer1',
    //     'boxList', boxList,
    //     )
    for (let i = 0; i < 9; i++){
        boxList[i].addEventListener('click', (e) => {
            let box = e.target

            console.log('inner text BEFORE', box.innerText)
            console.log('testing here', e.currentTarget.innerText)
            if (box.innerText == "") {
                box.innerText = "X"
                console.log('inner text AFTER', box.innerText)
                player1Message.innerHTML + player2 + "'s turn."
                player2Message.innerHTML = ""
                playPlayer2()
            } else if (box.innerText == "X" || box.innerText == "O") {
                box.innerText = "X"
                player1Message.innerHTML + player2 + "'s turn."
                player2Message.innerHTML = ""
                playPlayer2()
                // player1Message.innerHTML = "Box not available, please try again"
            }
        })
    }
}

function playPlayer2() {
    console.log("we are inside")
    for (let i = 0; i < 9; i++) {
        boxList[i].addEventListener('click', (e) => {
            let box = e.target

            if (box.innerText == "") {
                box.innerText = "O"
                player1Message.innerHTML = "It's " + player1 + "'s turn."
                player2Message.innerHTML = ""
                playPlayer1()
            } else if (box.innerText == "X" || box.innerText == "O") {
                box.innerText = "O"
                player1Message.innerHTML = "It's " + player2 + "'s turn."
                player2Message.innerHTML = ""
                playPlayer1()
                // player1Message.innerHTML = "Box not available, please try again"
            }
        })
    }
}


// document.getElementById("myBtn").addEventListener("click", myFunction);
function gamePlay() {
    console.log('click')

    // currentPlayer = player1
    // playPlayer1()

    for (let i = 0; i < 9; i++) {
        boxList[i].addEventListener('click', startGame)
        // boxList[i].addEventListener('click', clickCheckO)
        // boxList[i].addEventListener('click', clickCheck)
        console.log("This is boxList[i]", boxList[i])
    }

}

    
    // function clickCheck(e) {
    //     let box = e.target

    //     if (currentPlayer === player1) {
    //         box = 'X'
    //     } else {
    //         box = 'O'
    //     }
    // }

    
// Gameplay
// function clickCheckX(event) {
//     let  box = event.target
//     console.log(box)
//     // If innerText  is not filled/empty then have it filled with the first letter I want (either X or O)
//     // if (innerHTML == false) {
//         box.innerHTML = "X"
//         console.log(box.innerHTML) 
//         // 
//         if (currentPlayer) {
//             box = "X"
//         } else {
//             box = "O"
//         }
//     }

//     function clickCheckO(event) {
//         let  box = event.target
//         console.log(box)
//         // If innerText  is not filled/empty then have it filled with the first letter I want (either X or O)
//         // if (innerHTML == false) {
//             box.innerHTML = "O"
//             console.log(box.innerHTML) 
//             if (box == player2 === "O" ? "X" : "O") {
//                 box = "O"
//                 message.innerHTML = "Player 1's turn!"
//                 console.log(message)

//             } else if (box == "X") {
//                 console.log("It's Player 2's turn")
//             }   
//         }
    
    // }
    // return innerHTML



// This will tell me whose turn it is.
//     if (player1 = player1 === "X" ? "O" : "X");
// } else if ()    
//     console.log("Player 2's turn!")
//     message.innerHTML = player1();
// } 


// let whoseTurn = function(square) {
//     if (player2 = player2 === "O" ? "X" : "O");
//     message.innerHTML = player2();
// }


// Check for winner or for draw
//if & else statements, for loops, addEventListeners





document.addEventListener('DOMContentLoaded', () => {
    start.addEventListener('click', startGame)
    // start.addEventListener('click', gamePlay)

    // reset.addEventListener('click', gamePlay)
})