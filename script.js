
//Set all const variables
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

//Set Win arrays
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

//Set all lets
let displayText = document.querySelector("p")
let clickedSqsO = []
let clickedSqsX = []
let clickedSqsTotal = []
let player = ["O","X"]
let turn = player[0]

//Function to check results

function checkWinForO () {
    for (i=0; i < win.length; i++) {
        let resultForO = win[i].every(v => clickedSqsO.includes(v));
        console.log(resultForO)
        if (resultForO === true) { 
            displayText.innerText = `Player ${player[0]} WINS!`
            for (i=0; i < grid.length; i++) {
                grid[i].style.pointerEvents = "none";}
            break            
        } else {
            turn = player[1]
            displayText.innerText = `Player ${turn}, It's your turn!`}}}


function checkWinForX () {
    for (i=0; i < win.length; i++) {
        let resultForX = win[i].every(v => clickedSqsX.includes(v));
        console.log(resultForX)
        if (resultForX === true) {
            displayText.innerText = `Player ${player[1]} WINS!`
            for (i=0; i < grid.length; i++) {
                grid[i].style.pointerEvents = "none";}
            break
        } else {
            turn = player[0]
            displayText.innerText = `Player ${turn}, It's your turn!`}}}

// Event Listeners

for (let i=0; i < grid.length; i++) {
    grid[i].addEventListener("click", function (e) {
    grid[i].innerText = turn;
    grid[i].style.pointerEvents = "none";
    clickedSqsTotal.push(grid[i]);
    if (turn === player[0]) {
        grid[i].style.backgroundColor = "#FFA07A"
    } else {
        grid[i].style.backgroundColor = "#9FE2BF"}
    console.log(clickedSqsTotal)
    if (clickedSqsTotal.length === 9) {displayText.innerText = "It's a draw! Rematch?"}
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
        grid[i].style.pointerEvents = "auto"
        grid[i].innerText = ""
        grid[i].style.backgroundColor = "burlywood"
    }
    displayText.innerText = "Play Again! 👍"
    clickedSqsO = []
    clickedSqsX = []
    clickedSqsTotal = []        
    turn = player[0]
})

