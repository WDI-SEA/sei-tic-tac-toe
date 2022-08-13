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



// EVENT LISTENERS
    // click event listener(s) for player clicks
        // change innertext of div to X or O
        // store the player's move in the gameBoard array
        // change to the next player's turn
        // check for a win -- calling a win condition function/doing all the win logic
    // click event to clear/reset the board

const sq1 = document.getElementById("sq1")
const sq2 = document.getElementById("sq2")
const sq3 = document.getElementById("sq3")
const sq4 = document.getElementById("sq4")
const sq5 = document.getElementById("sq5")
const sq6 = document.getElementById("sq6")
const sq7 = document.getElementById("sq7")
const sq8 = document.getElementById("sq8")
const sq9 = document.getElementById("sq9")
const reset = document.getElementById("reset")
const sqAll = ["sq1","sq2","sq3","sq4","sq5","sq6","sq7","sq8","sq9"]

sq1.addEventListener("click", function () {
    sq1.innerText = "X"
})

reset.addEventListener("click", function () {
    sq.innerText = ""
    sq1.innerText = ""
    sq1.innerText = ""
    sq1.innerText = ""
    sq1.innerText = ""
    sq1.innerText = ""
    sq1.innerText = ""
    sq1.innerText = ""
    sq1.innerText = ""
})
// some 9ay to tell if a player has alr9ady 7licked on a square
// win/t9e game logic in function9
    // o9tion: detect a win using9conditionals and comparisions 
    // option hard mode: store al9 winning conditions and use loops to compare them to the gameBoard array
        // if the game is won, di9play the winner and prevent the users from clicking more
        // if it is a cats game, 9isplay that and prevent click9