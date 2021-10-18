//DECLARE VARIABLES
//game-related variables
let oneWin = false //one = player one
let twoWin = false //two = player two
let onePlayTurns = 0
let twoPlayTurns = 0
let count = 0 //click count
let oneArray = [] //array of player one choices
let twoArray = [] //array of player two choices
let wins = [ //possible winning combinations
    ["square1", "square2", "square3"],
    ["square4", "square5", "square6"],
    ["square7", "square8", "square9"],
    ["square1", "square5", "square9"],
    ["square1", "square4", "square7"],
    ["square1", "square3", "square5"],
    ["square2", "square5", "square8"],
    ["square3", "square6", "square9"],
    ["square7", "square5", "square3"],
]

//declare DOM manipulation variables
let playerTurn = null //text that changes depending on whose turn
let restartButton = null //restart button variable
let gameBoard = null //board game container
let boxText = null //variable that passes text for box from HTML

//declare each box class as a variable (tried using IDs here at first, but kept getting errors.)
const square1 = document.querySelector("#message1")
const square2 = document.querySelector("#message2")
const square3 = document.querySelector("#message3")
const square4 = document.querySelector("#message4")
const square5 = document.querySelector("#message5")
const square6 = document.querySelector("#message6")
const square7 = document.querySelector("#message7")
const square8 = document.querySelector("#message8")
const square9 = document.querySelector("#message9")

playerTurn = document.querySelector(".game-stat") //text that changes depending on whose turn
gameBoard = document.querySelector(".parent") //board game container
restartButton = document.querySelector("#restart-game") //restart button variable

//GAME FUNCTIONS

//determine winner or tie
const checkWin = () => {

    //Looping through both arrays
    for(let i=0; i <= wins.length - 1; i++){
        let onePlayTurns = 0
        let twoPlayTurns = 0
        
        for(let j=0; j <= wins[i].length - 1; j++){
            //player 1 win conditional     
            if(oneArray.includes(wins[i][j])){
                onePlayTurns++
            }
                if(onePlayTurns === 3){
                    playerTurn.innerHTML = "Player 1 won"
                    //console.log("Player 1 wins")
                    setTimeout(() => { restartGame() }, 2000) 
                } 
            //player 2 win conditional 
            if(twoArray.includes(wins[i][j])){
                twoPlayTurns++
                //console.log(twoPlayTurns)
            } 
                if(twoPlayTurns === 3){
                    playerTurn.innerHTML = "Player 2 won"
                    //console.log("player 2 wins")
                    setTimeout(() => { restartGame() }, 2000)
                } 
            //tie conditional
            if (count === 9 && onePlayTurns !== 3 && twoPlayTurns !== 3) {
                playerTurn.innerHTML = "tie"
                setTimeout(() => {restartGame() }, 2000)
            }  
        }
    } 
}

//assigning X or O text to box
const boxChosen = (event) => {
    //if count is divisible by 2, player 2 is playing (player 2 exclusively plays on even number count)
    if (count % 2 === 0) {
        count++
        event.target.innerHTML = "X"
        event.target.style.backgroundColor = "#F3D9BE"
        //box chosen propels the turn of the next player, player 2
        playerTurn.innerHTML = "Player 2 turn"
        //push results to player 1 array
        oneArray.push(event.target.parentNode.id)
        console.log(oneArray)
    //else it is player 1 playing
    }else{
        count++
        event.target.innerHTML = "O"
        event.target.style.backgroundColor = "#E5F7DE"
        //box chosen propels the turn of the next player, player 1
        playerTurn.innerHTML = "Player 1 turn"
        //push results to player 2 array
        twoArray.push(event.target.parentNode.id)
    }
    checkWin()
    console.log(oneArray)
    console.log(twoArray)
} 

//selecting a box
const selectBox = (event) => {
    boxText = event.target.innerHTML
    //if inner text is blank, box is available for selection
    if (boxText == "") {
        boxChosen(event)
    } else if (boxText !== "" && boxText !== restartButton){
        alert("this box has already been claimed")
    }
}

//restart game
function restartGame() {
    //reset html elements
    playerTurn.innerHTML = "Click on a box to start the game"
    square1.innerHTML = ""
    square2.innerHTML = ""
    square3.innerHTML = ""
    square4.innerHTML = ""
    square5.innerHTML = ""
    square6.innerHTML = ""
    square7.innerHTML = ""
    square8.innerHTML = ""
    square9.innerHTML = ""
    square1.style.backgroundColor = "#EDEBE3"
    square2.style.backgroundColor = "#EDEBE3"
    square3.style.backgroundColor = "#EDEBE3"
    square4.style.backgroundColor = "#EDEBE3"
    square5.style.backgroundColor = "#EDEBE3"
    square6.style.backgroundColor = "#EDEBE3"
    square7.style.backgroundColor = "#EDEBE3"
    square8.style.backgroundColor = "#EDEBE3"
    square9.style.backgroundColor = "#EDEBE3"
    //reset number of turns, click count, and arrays
    onePlayTurns = 0
    twoPlayTurns = 0
    count = 0
    oneArray = []
    twoArray = []
    console.log(oneArray)
    console.log(twoArray)
}


//EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
    //begin game
    gameBoard.addEventListener("click", selectBox)
    //restart game
    restartButton.addEventListener("click", restartGame) 
})