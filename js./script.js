const winningComboOne = ["buttonOne", "buttonTwo", "buttonThree"]
const winningComboTwo = ["buttonOne", "buttonFour", "buttonSeven"]
const winningComboThree = ["buttonOne", "buttonFive", "buttonNine"]
const winningComboFour = ["buttonTwo", "buttonFive", "buttonEight"]
const winningComboFive = ["buttonFour", "buttonFive", "buttonSix"]
const winningComboSix = ["buttonThree", "buttonFive", "buttonSeven"]
const winningComboSeven = ["buttonThree", "buttonSix", "buttonNine"]
const winningComboEight = ["buttonSeven", "buttonEight", "buttonNine"]

const winningCombos = [winningComboOne, winningComboTwo, winningComboThree, winningComboFour, winningComboFive, winningComboSix, winningComboSeven, winningComboEight]

let butOne = document.querySelector("buttonOne")
let butTwo = document.querySelector("buttonTwo")
let butThree = document.querySelector("buttonThree")
let butFour = document.querySelector("buttonFour")
let butFive = document.querySelector("buttonFive")
let butSix = document.querySelector("buttonSix")
let butSeven = document.querySelector("buttonSeven")
let butEight = document.querySelector("buttonEight")
let butNine = document.querySelector("buttonNine")

const buttons = [butOne, butTwo, butThree, butFour, butFive, butSix, butSeven, butEight, butNine]

let butNew = document.querySelector("resetButton")

let playerOneTurns = [], playerTwoTurns = []  // Receives button id from clicks

let turnCount = 0 /* number of total clicks*/

const displayBox = document.querySelector("displayBox")

function endGame(player) {
    switch(player) {
        case "one": {
            displayBox.innerText = "You are a cunt, player one wins!"
        }
        case "two": {
            displayBox.innerText = "Player one is a cunt, Player two wins!"
        } 
        case "tie": {
            displayBox.innerText = "You're both cunts, it is a tie."
        }
    }
}


function turnProcess(e) {
    turnCount ++
    let button = e.srcElement
    if (turnCount & 1) {  //("& 1" checks if the last digit of the number as binary is 1)
        button.innerText = "X"
        playerOneTurns.append(button.id)
        
    } else {
        button.innerText = "O"
        playerTwoTurns.append(button.id)
    }
    button.disabled = true // Makes button not clickable any more
    
    winningCombos.forEach(function(item) {
        if (playerOneTurns == item) {
            endGame("one")// Run win conditon: PLAYER 1 WINS
        } else if (playerTwoTurns == item) {
            endGame("two")// run win condition PLAYER 2 WINS
        } else if (turnCount == 9) {
            endGame("tie")//You SUCK IT IS A TIE!!
        }
    })
    
    
} 

buttons.forEach(function(item) {
    item.addEventListener("click", turnProcess)
})

/*
butOne.addEventListener("click", turnProcess)
butTwo.addEventListener("click", turnProcess)
butThree.addEventListener("click", turnProcess)
butFour.addEventListener("click", turnProcess)
butFive.addEventListener("click", turnProcess)
butSix.addEventListener("click", turnProcess)
butSeven.addEventListener("click", turnProcess)
butEight.addEventListener("click", turnProcess)
butNine.addEventListener("click", turnProcess)
*/


butNew.addEventListener("click", function() {
    buttons.forEach(function(item) {
        item.disabled = false
        item.innerText = ""
    }) 
    playerOneTurns = []
    playerTwoTurns = []
    turnCount = 0
    document.querySelector("displayBox").innerText = ""
})



// APP STATE (variables)
    // a variable to track whose turn it is
    // a var for 'x' and a var for 'o'
    // a var to keep count of moves to detect cats/draw game
    // gameBoard array to keep track of player moves ['x', '', 'o', 'x', '', 'o', 'x', '', '']
        // 2d array
        // [
        //     ['x', '', 'o'],
        //     ['x', 'o', ''],
        //     ['x', '', 'o']
        // ]
    // a boolean for if the game is over or not -- is the game currently happening?

/*

    const divs = document.querySelectorAll("div")

addGlobalEventListener("click", "div", e => {
    console.log("this is fuckin hard")
})

  function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
   })
}

const newDiv = document.createElement("div")
newDiv.style.width = "200px"
newDiv.style.height = "200px"
newDiv.style.backgroundColor = "grey"
document.body.append(newDiv)

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

        */