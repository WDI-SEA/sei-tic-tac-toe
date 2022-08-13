const winningComboOne = ["buttonOne", "buttonTwo", "buttonThree"]
const winningComboTwo = ["buttonOne", "buttonFour", "buttonSeven"]
const winningComboThree = ["buttonOne", "buttonFive", "buttonNine"]
const winningComboFour = ["buttonTwo", "buttonFive", "buttonEight"]
const winningComboFive = ["buttonFour", "buttonFive", "buttonSix"]
const winningComboSix = ["buttonThree", "buttonFive", "buttonSeven"]
const winningComboSeven = ["buttonThree", "buttonSix", "buttonNine"]
const winningComboEight = ["buttonSeven", "buttonEight", "buttonNine"]

let butOne = document.querySelector("buttonOne")
let butTwo = document.querySelector("buttonTwo")
let butThree = document.querySelector("buttonThree")
let butFour = document.querySelector("buttonFour")
let butFive = document.querySelector("buttonFive")
let butSix = document.querySelector("buttonSix")
let butSeven = document.querySelector("buttonSeven")
let butEight = document.querySelector("buttonEight")
let butNine = document.querySelector("buttonNine")
let butNew = document.querySelector("resetButton")

let turnCount = 0 /* number of total clicks*/


function calcOddEven() {
    return (turnCount & 1)
}

function turnProcess(e) {
    turnCount ++
    calcOddEven()
    //on click call function calcOddEven
    //if odd, then change innerText to "X"
    //else, change innerText to "O"
    //e.srcElement is there for asigning x or o
    
} 


butOne.addEventListener("click", turnProcess)



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