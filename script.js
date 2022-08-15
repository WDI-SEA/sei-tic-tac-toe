// APP STATE (variables)
// a variable to track whose turn it is
 // a var for 'x' and a var for 'o'


let playerChoice = "O"
let moves = 1
const finishedGame = document.querySelector('#output')
const currentPlayer = function() {
    if (playerChoice === "O" && moves < 10) {
        playerChoice = "O"
        finishedGame.innerText = "Player 1's Turn"
        return "O"
    }else if (playerChoice === "X" && moves < 10) {
        playerChoice === "X"
        finishedGame.innerText = "Player 2's Turn"
    }
}
   
    // a var to keep count of moves to detect cats/draw game

const tieGame = function() {
    if (moves === 10) {
        finishedGame.innerText = "It's a tie!"
    }
}

// gameBoard array to keep track of player moves ['x', '', 'o', 'x', '', 'o', 'x', '', '']




const boxOne = document.querySelector('#box1')
const boxTwo = document.querySelector('#box2')
const boxThree = document.querySelector('#box3')
const boxFour = document.querySelector('#box4')
const boxFive = document.querySelector('#box5')
const boxSix = document.querySelector('#box6')
const boxSeven = document.querySelector('#box7')
const boxEight = document.querySelector('#box8')
const boxNine = document.querySelector('#box9')

let winningBox = false

document.querySelector("#box1").addEventListener('click', function() {
    if (boxOne.innerText === "") {
        document.querySelector('#box1').innerText = playerChoice
        moves++

        checkWinner()
        if (winningBox === false) {
            currentPlayer()
        }
        tieGame()
    }
})

document.querySelector('#box2').addEventListener('click', function() {
    if (boxTwo.innerText === "") {
        document.querySelector('#box2').innerText = playerChoice
        moves++

        checkWinner()
        if (winningBox === false) {
            currentPlayer()
        }
        tieGame()
    }
})

document.querySelector('#box3').addEventListener('click', function() {
    if (boxThree.innerText === "") {
        document.querySelector('#box3').innerText = playerChoice
        moves++

        checkWinner()
        if (winningBox === false) {
            currentPlayer()
        }
        tieGame()
    }
})

document.querySelector('#box4').addEventListener('click', function() {
    if (boxFour.innerText === "") {
        document.querySelector('#box4').innerText = playerChoice
        moves++

        checkWinner()
        if (winningBox === false) {
            currentPlayer()
        }
        tieGame()
    }
})


document.querySelector('#box5').addEventListener('click', function() {
    if (boxFive.innerText === "") {
        document.querySelector('#box5').innerText = playerChoice
        moves++

        checkWinner()
        if (winningBox === false) {
            currentPlayer()
        }
        tieGame()
    }
})


document.querySelector('#box6').addEventListener('click', function(){
    if (boxSix.innerText === "") {
        document.querySelector('#box6').innerText = playerChoice
        moves++

        checkWinner()
        if (winningBox === false) {
            currentPlayer()
        }
        tieGame()
    }
})


document.querySelector('#box7').addEventListener('click', function() {
    if (boxSeven.innerText === "") {
        document.querySelector('#box7').innerText = playerChoice
        moves++

        checkWinner()
        if (winningBox === false) {
            currentPlayer()
        }
        tieGame()
    }
})


document.querySelector('#box8').addEventListener('click', function() {
    if (boxEight.innerText === "") {
        document.querySelector('#box8').innerText = playerChoice
        moves++

        checkWinner()
        if (winningBox === false) {
            currentPlayer()
        }
        tieGame()
    }
})


document.querySelector('#box9').addEventListener('click', function() {
    if (boxNine.innerText === "") {
        document.querySelector('#box9').innerText = playerChoice
        moves++

        checkWinner()
        if (winningBox === false) {
            currentPlayer()
        }
        tieGame()
    }
})

//checking winner

const checkWinner = function() {
    if (boxOne.innerText === boxFour.innerText && boxFour.innerText === boxSeven.innerText && boxOne.innerText != "") { 
        finishedGame.innerText = (playerChoice + " is the winner!")
    }else if(boxTwo.innerText === boxFive.innerText && boxFive.innerText === boxEight.innerText && boxTwo.innerText != "") { 
        finishedGame.innerText = (playerChoice + " is the winner!")
     }else if(boxThree.innerText === boxSix.innerText & boxSix.innerText === boxNine.innerText && boxThree.innerText != "") {
        finishedGame.innerText = (playerChoice + " is the winner!") 
     }else if(boxOne.innerText === boxTwo.innerText && boxTwo.innerText === boxThree.innerText && boxOne.innerText != "") {
        finishedGame.innerText = (playerChoice + " is the winner!") 
    }else if(boxFour.innerText === boxFive.innerText &&boxFive.innerText === boxSix.innerText && boxFour.innerText != "") {
        finishedGame.innerText = (playerChoice + " is the winner!") 
     }else if(boxSeven.innerText === boxEight.innerText &&boxEight.innerText === boxNine.innerText && boxSeven.innerText != "") {
        finishedGame.innerText = (playerChoice + " is the winner!") 
     }else if(boxOne.innerText === boxFive.innerText &&boxFive.innerText === boxNine.innerText && boxOne.innerText != "") {
        finishedGame.innerText = (playerChoice + " is the winner!") 
     }else if(boxSeven.innerText === boxFive.innerText &&boxFive.innerText === boxThree.innerText && boxSeven.innerText != "") {
        finishedGame.innerText = (playerChoice + " is the winner!") 
    }
}

//Clearing board

const clearBoard = function() {
    const clear = document.querySelectorAll('.boxes')
    for (let i = 0; i < clear.length; i++) {
        clear[i].innerText = ""
    }
    moves = 1
    finishedGame.innerText = ""
    playerChoice = "O"
    winningBox = false
}


        // 2d array
        // [
        //     ['x', '', 'o'],
        //     ['x', 'o', ''],
        //     ['x', '', 'o']
        // ]
    // a boolean for if the game is over or not -- is the game currently happening?


// EVENT LISTENERS
    // click event listener(s) for player clicks
        // change innertext of div to X or O
        // store the player's move in the gameBoard array
        // change to the next player's turn
        // check for a win -- calling a win condition function/doing all the win logic
    // click event to clear/reset the board

// some way to tell if a player has already clicked on a square
// win/tie game logic in functions
    // option: detect a win using conditionals and comparisions 
    // option hard mode: store all winning conditions and use loops to compare them to the gameBoard array
        // if the game is won, display the winner and prevent the users from clicking more
        // if it is a cats game, display that and prevent clicks