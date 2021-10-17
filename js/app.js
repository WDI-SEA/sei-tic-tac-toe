//DECLARE VARIABLES
//game-related variables
let oneWin = false //one = player one
let twoWin = false //two = player two
let count = 0 //click count
let oneArray = [] //array of player one choices
let twoArray = [] //array of player two choices
let wins = [ //possible winning combinations
    ["div1", "div2", "div3"],
    ["div4", "div5", "div6"],
    ["div7", "div8", "div9"],
    ["div1", "div5", "div9"],
    ["div1", "div4", "div7"],
    ["div1", "div3", "div5"],
    ["div2", "div5", "div8"],
    ["div3", "div6", "div9"],
    ["div7", "div5", "div3"],
]

//declare DOM manipulation variables
let playerTurn = null //text that changes depending on whose turn
let restartButton = null //restart button variable
let gameBoard = null //board game container
let boxText = null //variable that passes text for box from HTML

//declare each box class as a variable (tried using IDs here at first, but kept getting errors.)
const square1 = document.querySelector(".div1")
const square2 = document.querySelector(".div2")
const square3 = document.querySelector(".div3")
const square4 = document.querySelector(".div4")
const square5 = document.querySelector(".div5")
const square6 = document.querySelector(".div6")
const square7 = document.querySelector(".div7")
const square8 = document.querySelector(".div8")
const square9 = document.querySelector(".div9")

playerTurn = document.querySelector(".game-stat") //text that changes depending on whose turn
gameBoard = document.querySelector(".parent") //board game container
restartButton = document.querySelector("#restart-game") //restart button variable

//GAME FUNCTIONS

//assigning X or O text to box
const boxChosen = (event) => {
    //if count is divisible by 2, player 2 is playing (player 2 exclusively plays on even number count)
    if (count % 2 === 0) {
        count++
        event.target.innerText = "X"
        event.target.style.backgroundColor = "#F3D9BE"
        //box chosen propels the turn of the next player, player 2
        playerTurn.innerHTML = "Player 2 turn"
        //push results to player 1 array
        oneArray.push(event.target.parentNode.className)
    //else it is player 1 playing
    }else{
        count++
        event.target.innerText = "O"
        event.target.style.backgroundColor = "#E5F7DE"
        //box chosen propels the turn of the next player, player 1
        playerTurn.innerHTML = "Player 1 turn"
        //push results to player 2 array
        twoArray.push(event.target.parentNode.className);
    }
    console.log(count)
    checkWin()
} 

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
                    oneWin = true
                    console.log(onePlayTurns)
                    console.log(oneWin)
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
                    twoWin = true
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
    oneWin = false //one = player one
    twoWin = false //two = player two
    console.log(oneWin)
    console.log(twoWin)
}


//EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
    //begin game
    gameBoard.addEventListener("click", selectBox)
    //restart game
    restartButton.addEventListener("click", restartGame) 
})