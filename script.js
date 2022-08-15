// Tic-Tac-Toe notes
//___________________

//*** numerous win conditions don't compute correctly
//

// arrays representing each indivual win combo
const winningComboOne = ["buttonOne", "buttonTwo", "buttonThree"]
const winningComboTwo = ["buttonOne", "buttonFour", "buttonSeven"]
const winningComboThree = ["buttonOne", "buttonFive", "buttonNine"]
const winningComboFour = ["buttonTwo", "buttonFive", "buttonEight"]
const winningComboFive = ["buttonFour", "buttonFive", "buttonSix"]
const winningComboSix = ["buttonThree", "buttonFive", "buttonSeven"]
const winningComboSeven = ["buttonThree", "buttonSix", "buttonNine"]
const winningComboEight = ["buttonSeven", "buttonEight", "buttonNine"]

// single array of all winning combinations
const winningCombos = [winningComboOne, winningComboTwo, winningComboThree, winningComboFour, winningComboFive, winningComboSix, winningComboSeven, winningComboEight]

// var for each gameboard button 
let butOne = document.getElementById("buttonOne")
let butTwo = document.getElementById("buttonTwo")
let butThree = document.getElementById("buttonThree")
let butFour = document.getElementById("buttonFour")
let butFive = document.getElementById("buttonFive")
let butSix = document.getElementById("buttonSix")
let butSeven = document.getElementById("buttonSeven")
let butEight = document.getElementById("buttonEight")
let butNine = document.getElementById("buttonNine")

// single array for buttons representing the game board
const buttons = [butOne, butTwo, butThree, butFour, butFive, butSix, butSeven, butEight, butNine]

// var for reset button
let butNew = document.getElementById("resetButton")

// Receives button id from clicks
let playerOneTurns = [], playerTwoTurns = []  

// number of total wins
let playerOneWins = 0, playerTwoWins = 0 

// number of total clicks, per player
let turnCount = 0

// var to get displayBox by id 
const displayBox = document.getElementById("displayBox")

// test: doesn't test anything really. 
console.log("Hello")

// function that runs when end game conditions are met
function endGame(player) {
    buttons.forEach(function(item) {
        item.disabled = true })
    switch(player) {
        case 0: {
            displayBox.innerText = "Player two wins!"
            playerTwoWins ++
            displayBoxThree.innerText = playerTwoWins
            break
        }
        case 1: {
            displayBox.innerText = "Player one wins!"
            playerOneWins ++
            displayBoxTwo.innerText = playerOneWins
            break
        } 
        case 2: {
            displayBox.innerText = "It's a tie."
            break
            } 
    
        }
    }


// function to compare players array to win combos (solution found on grepper)
const compareArrays = (a, b) => {
    if (a.length < b.length) {
        return false
    }
    let newA = a;
    let newB = b;
    console.log(newA, newB)
  return (
    newA.every((el) => newB.includes(el))
  )
}

// function to run everytime gameboard buttons are clicked
// ("& 1" checks if the last digit of the number as binary is 1)
function turnProcess(e) {
        displayBox.innerText = "Player One's Turn"
        turnCount ++
    let button = e.srcElement
    if (turnCount & 1) {  
        button.innerText = "X"
        playerOneTurns.push(button.id)
        console.log(playerOneTurns)
        displayBox.innerText = "Player Two's Turn"
    } else {
        button.innerText = "O"
        playerTwoTurns.push(button.id)
        console.log(playerTwoTurns)
        displayBox.innerText = "Player One's Turn"
    }

// makes event button not clickable any more
    button.disabled = true
    
// calls compareArrays and compares against win condtions + tie
    winningCombos.forEach(function(item) {
        if (compareArrays(playerOneTurns, item)) {
            endGame(1)// PLAYER 1 WINS
        } else if (compareArrays(playerTwoTurns, item)) {
            endGame(0)// PLAYER 2 WINS
    } else if (turnCount == 9) {
            endGame(2)//IT IS A TIE!!
        }
    })
}
// adds event listener to each gameboard button and calls turnProcess 
butOne.addEventListener("click", turnProcess)
butTwo.addEventListener("click", turnProcess)
butThree.addEventListener("click", turnProcess)
butFour.addEventListener("click", turnProcess)
butFive.addEventListener("click", turnProcess)
butSix.addEventListener("click", turnProcess)
butSeven.addEventListener("click", turnProcess)
butEight.addEventListener("click", turnProcess)
butNine.addEventListener("click", turnProcess)

// reset button event listener and anon function to reset board
butNew.addEventListener("click", function() {
    buttons.forEach(function(item) {
        item.disabled = false
        item.innerText = ""
    }) 
    playerOneTurns = []
    playerTwoTurns = []
    turnCount = 0
    displayBox.innerText = ""
})





//______________________________________________
//NOTES SECTION---------------------------------
//notes below this line are only kept for reference durng the process and to preserve said process. In the future these notes would be deleted or saced somewhere else.

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


//compareArrays(newA, newB); // true

/*
function compareArray(a, b) {
    if (a.length < b.length) {
        return false        
    }
    
    let newA = a;
    let newB = b;
    
    for (i = 0; i <= newA.length; i++) {
        for (ii = 0; ii <= newB.length; ii++) {
            if (newA[i] == newB[ii]) {
                newA.splice(i, 1);
                newB.splice(ii, 1);
            }
        }
    }
    return (newA.length == 1);
}
*/
/*
function compareArrays(a, b) {
    if (a.length !== b.length) {
        return false        
    }
    let newA = a;
    let newB = b;
    
    for (i = 0; i <= newA.length; i++) {
        for (ii = 0; ii <= newB.length; ii++) {
            if (newA[i] == newB[ii]) {
                newA.splice(i, 1);
                newB.splice(ii, 1);
            }
        }
    }
    return (newA.length == 1 && newB.length == 1);
}
*/
/*function compareArrays(a, b) {
    if (a.length !== b.length)
    return false
    let newA = a
    let newB = b
    console.log("hello " + newA + " and " + newB)
    for (i = 0; i > a.length; i++) {
        for (ii = 0; ii > b.length; ii++) {
            if (newA[i] == newB[ii]) {
                newA.splice(i, 1)
                newB.splice(ii, 1)
            }
        }
    }
    return (newA.length == 0 && newB.length == 0)
    
}
*/

/*
const compareArrays = (a, b) => {
    return (
        a.every((el) => b.includes(el))
    )
}
*/



    /*
    winningCombos.forEach(function(item) {
        console.log(item)
        if (turnCount == 9) {
            endGame(0)//IT IS A TIE!!
        } else if (compareArrays(playerOneTurns, item)) {
            endGame(1)// Run win conditon: PLAYER 1 WINS
        } else if (compareArrays(playerTwoTurns, item)) {
            endGame(2)// run win condition PLAYER 2 WINS
        } 
    })
    */
    

/*
buttons.forEach(function(item) {
    item.addEventListener("click", turnProcess)
})
*/