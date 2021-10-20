let currentPlayerIsX = true;
let announcer = document.getElementById("announcer")

// all the possible winning combos
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [0,4,8],
    [2,4,6]
]

let gameBoard = [" "," "," "," "," "," "," "," "," "]

// function that checks for a winner by comparing current board to winning selections
const checkForWinner = () => {


}
// function to determine if tile has been played

// function to reset board on click of reset button
const resetButton = () => {
    tileOne.innerText = "";
    tileTwo.innerText = "";
    tileThree.innerText = "";
    tileFour.innerText = "";
    tileFive.innerText = "";
    tileSix.innerText = "";
    tileSeven.innerText = "";
    tileEight.innerText = "";
    tileNine.innerText = "";
    announcer.innerText = "Player X goes first!"
}

// function that gets called when clickevent happens to a tile
const playerMove = (e) => {
    let tileClick = e.target
    if(currentPlayerIsX){
    tileClick.innerText = "X"
    announcer.innerText = "Player O turn"
    currentPlayerIsX = false;
    
    } else {
    tileClick.innerText = "O"
    announcer.innerText = "Player X turn"
    currentPlayerIsX = true;
    }
    
    
    
}
let tileOne = document.getElementById("tile1") 
let tileTwo = document.getElementById("tile2")
let tileThree = document.getElementById("tile3")
let tileFour = document.getElementById("tile4") 
let tileFive = document.getElementById("tile5")
let tileSix = document.getElementById("tile6") 
let tileSeven = document.getElementById("tile7") 
let tileEight = document.getElementById("tile8")
let tileNine = document.getElementById("tile9") 
tileOne.addEventListener('click', playerMove)
tileTwo.addEventListener('click', playerMove)
tileThree.addEventListener('click', playerMove)
tileFour.addEventListener('click', playerMove)
tileFive.addEventListener('click', playerMove)
tileSix.addEventListener('click', playerMove)
tileSeven.addEventListener('click', playerMove)
tileEight.addEventListener('click', playerMove)
tileNine.addEventListener('click', playerMove)
document.getElementById("reset").addEventListener('click', resetButton)

    




