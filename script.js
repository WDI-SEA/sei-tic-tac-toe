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
const grid = document.getElementsByTagName("div")

const reset = document.getElementById("reset")

//
const win = [
    [sq1, sq2, sq3],
    [sq4, sq5, sq6],
    [sq7, sq8, sq9],
    [sq1, sq4, sq7],
    [sq2, sq5, sq8],
    [sq3, sq6, sq9],
    [sq3, sq5, sq7],
    [sq1, sq5, sq9],
]


let displayText = document.querySelector("p")

let clickedSqsO = []
let clickedSqsX = []
let clickedSqsTotal = []

const player = ["O","X"]
let turn = player[0]


function checkWinForO () {
    for (i=0; i < win.length; i++) {
        let resultForO = win[i].every(v => clickedSqsO.includes(v));
        console.log(resultForO)
        if (resultForO === true) {
            displayText.innerText = `Player ${player[0]} WINS!`
        } else {
            turn = player[1]
            displayText.innerText = `Player ${turn}, It's your turn!`}}}


function checkWinForX () {
    for (i=0; i < win.length; i++) {
        let resultForX = win[i].every(v => clickedSqsX.includes(v));
        console.log(resultForX)
        if (resultForX === true) {
            displayText.innerText = `Player ${player[1]} WINS!`
        } else {
            turn = player[0]
            displayText.innerText = `Player ${turn}, It's your turn!`}}}


for (let i=0; i < grid.length; i++) {
    grid[i].addEventListener("click", function (e) {
    grid[i].innerText = turn;
    grid[i].style.pointerEvents = "none";
    clickedSqsTotal.push(grid[i]);
    console.log(clickedSqsTotal)
    if (clickedSqsTotal === 9) {displayText.innerText = "It's a draw! Rematch?"}
    else {
        if (turn === player[0]) {
        clickedSqsO.push(grid[i])
        console.log(clickedSqsO)
        checkWinForO ();
        }else {
        clickedSqsX.push(grid[i])
        console.log(clickedSqsX)
        checkWinForX ();
    }}})}



reset.addEventListener("click", function () {
    for(i=0; i < grid.length; i++) {
        grid[i].innerText = ""
    }
    displayText.innerText = "Play Again! 👍"
})

