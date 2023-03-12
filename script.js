 //# javascript
// script.js

// APP STATE (variables)
    // players choices (a virtual representation of the gameboard)


const playSquares = document.querySelectorAll(".squares")

const a1 = document.querySelector("#a1")
const a2 = document.querySelector("#a2")
const a3 = document.querySelector("#a3")
const b1 = document.querySelector("#b1")
const b2 = document.querySelector("#b2")
const b3 = document.querySelector("#b3")
const c1 = document.querySelector("#c1")
const c2 = document.querySelector("#c2")
const c3 = document.querySelector("#c3")

    // whose turn it is (is it x or o)
let currentPlayer = "X"

let messageArea = document.querySelector(".messages")

// a boolean that tells you if the game is currently running (if gameOver = true, disable clicking) 
let gameOver = false

// (optional) check for tie, turn counter, if there are 9 moves with no winner
let turnCounter = 0

// Event Listners
    // a click on the reset button
let reset = document.querySelector(".btn-reset")

let resetSquares = function() {
    for (let i = 0; i < playSquares.length; i++) {
        playSquares[i].innerText = ""
    }
}
let resetGame = function() {
    messageArea.innerText = "Game Reset. X goes first."
    resetSquares()
    currentPlayer = "X"
    console.log("Game Reset.")
    turnCounter = 0
    gameOver = false
}

reset.addEventListener("click", resetGame)

    // for when you click on the game board
        // when a square is clicked we should do the following:
            // set the innerText of the square that got clicked on of whose turn it currently is
            // prevent repeat clicks -- check the gameboard array if it is != '' empty string
            // set the move into the gameboard array
a1.addEventListener("click", function() {
    if (gameOver === false) {
        checkBoxMark(a1)
        checkA1Win()
        changeTurn()
    }
})
a2.addEventListener("click", function() {
    if (gameOver === false) {
        checkBoxMark(a2)
        checkA2Win()
        changeTurn()
    }
})
a3.addEventListener("click", function() {
    if (gameOver === false) {
        checkBoxMark(a3)
        checkA3Win()
        changeTurn()
    }
})
b1.addEventListener("click", function() {
    if (gameOver === false) {
        checkBoxMark(b1)
        checkB1Win()
        changeTurn()
    }
})
b2.addEventListener("click", function() {
    if (gameOver === false) {
        checkBoxMark(b2)
        checkB2Win()
        changeTurn()
    }
})
b3.addEventListener("click", function() {
    if (gameOver === false) {
        checkBoxMark(b3)
        checkB3Win()
        changeTurn()
    }
})
c1.addEventListener("click", function() {
    if (gameOver === false) {
        checkBoxMark(c1)
        checkC1Win()
        changeTurn()
    }
})
c2.addEventListener("click", function() {
    if (gameOver === false) {
        checkBoxMark(c2)
        checkC2Win()
        changeTurn()        
    }
})
c3.addEventListener("click", function() {
    if (gameOver === false) {
        checkBoxMark(c3)
        checkC3Win()
        changeTurn()
    }
})

function changeTurn() {
    if (gameOver === false) {
        if (currentPlayer === "X" && gameOver === false) {
            currentPlayer = "O"
        } else if (currentPlayer === "O" && gameOver === false) {
            currentPlayer = "X"
        }
        messageArea.innerText = `Player ${currentPlayer}'s turn.`
        turnCounter++
        if (turnCounter > 8) {
            tieGame()
        }
        console.log(`turns: ${turnCounter}.`)
    }
}

function checkBoxMark(box) {
    if (gameOver === false) {
        if (box.innerText === '') {
            if (currentPlayer === "X") {
                box.innerText = "X"
            } else if (currentPlayer === "O") {
                box.innerText = "O"
            } else {
                messageArea.innerText = "Can't go there..."
            }
        }
    }
}

// check if there is a winner (could have a checkWin funciton)
function checkA1Win() {
    if (a2.innerText === currentPlayer && a3.innerText === currentPlayer) {
        playerWins()
    } else if (b1.innerText === currentPlayer && c1.innerText === currentPlayer) {
        playerWins()
    } else if (b2.innerText === currentPlayer && c3.innerText === currentPlayer) {
        playerWins()
    } else {
        tieGame()
    }
}
function checkA2Win() {
    if (a1.innerText === currentPlayer && a3.innerText === currentPlayer) {
        playerWins()
    } else if (b2.innerText === currentPlayer && c2.innerText === currentPlayer) {
        playerWins()
    }
}
function checkA3Win() {
    if (a1.innerText === currentPlayer && a2.innerText === currentPlayer) {
        playerWins()
    } else if (c1.innerText === currentPlayer && b2.innerText === currentPlayer) {
        playerWins()
    } else if (c3.innerText === currentPlayer && b3.innerText === currentPlayer) {
        playerWins()
    }
}
function checkB1Win() {
    if (a1.innerText === currentPlayer && c1.innerText === currentPlayer) {
        playerWins()
    } else if (b3.innerText === currentPlayer && b2.innerText === currentPlayer) {
        playerWins()
    }
}
function checkB2Win() {
    if (a2.innerText === currentPlayer && c2.innerText === currentPlayer) {
        playerWins()
    } else if (b1.innerText === currentPlayer && b3.innerText === currentPlayer) {
        playerWins()
    } else if (a1.innerText === currentPlayer && c3.innerText === currentPlayer) {
        playerWins()
    } else if (c1.innerText === currentPlayer && a3.innerText === currentPlayer) {
        playerWins()
    }
}
function checkB3Win() {
    if (a3.innerText === currentPlayer && c3.innerText === currentPlayer) {
        playerWins()
    } else if (b1.innerText === currentPlayer && b2.innerText === currentPlayer) {
        playerWins()
    }
}
function checkC1Win() {
    if (c3.innerText === currentPlayer && c2.innerText === currentPlayer) {
        playerWins()
    } else if (a3.innerText === currentPlayer && b2.innerText === currentPlayer) {
        playerWins()
    } else if (a1.innerText === currentPlayer && b1.innerText === currentPlayer) {
        playerWins()
    }
}
function checkC2Win() {
    if (c1.innerText === currentPlayer && c3.innerText === currentPlayer) {
        playerWins()
    } else if (a2.innerText === currentPlayer && b2.innerText === currentPlayer) {
        playerWins()
    }
}
function checkC3Win() {
    if (c1.innerText === currentPlayer && c2.innerText === currentPlayer) {
        playerWins()
    } else if (a1.innerText === currentPlayer && b2.innerText === currentPlayer) {
        playerWins()
    } else if (a3.innerText === currentPlayer && b3.innerText === currentPlayer) {
        playerWins()
    }
}

function playerWins() {
    gameOver = true
    messageArea.innerText = `PLAYER ${currentPlayer} WINS!`
    console.log(`playerWins invoked by ${currentPlayer}.`)
    
}

// check for tie
function tieGame() {
    if (turnCounter > 8 && gameOver === false) {
        gameOver = true
        console.log(`tieGame invoked by ${currentPlayer}.`)
        messageArea.innerText = "TIE GAME! Please reset."
    }
}

console.log("hello there!")