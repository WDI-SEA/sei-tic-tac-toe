//DECLARE VARIABLES

//declare DOM manipulation variables
let playerTurn = null //text that changes depending on whose turn
let restartButton = null //restart button variable
let game = null //board game container
let boxText = null //variable that passes text for box from HTML
playerTurn = document.querySelector(".game-stat") //text that changes depending on whose turn
game = document.querySelector(".parent") //board game container
restartButton = document.querySelector("#restart-game") //restart button variable

//declare each box's p ID as a variable. Important to use p ID, NOT div ID.
const square1 = document.querySelector("#message1")
const square2 = document.querySelector("#message2")
const square3 = document.querySelector("#message3")
const square4 = document.querySelector("#message4")
const square5 = document.querySelector("#message5")
const square6 = document.querySelector("#message6")
const square7 = document.querySelector("#message7")
const square8 = document.querySelector("#message8")
const square9 = document.querySelector("#message9")

//game-related variables
let onePlayTurns = 0 //keeping track of player 1 turns 
let twoPlayTurns = 0 //keeping track of player 2 turns
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

//GAME FUNCTIONS

//determine winner/tie
const checkWin = () => {
    //Loop through array of winning options (9 options)
    for(let i=0; i <= wins.length - 1; i++){
        //when game begins, neither player has had a turn:
        let onePlayTurns = 0
        let twoPlayTurns = 0
        //loop through nested array (each of the 9 options above has 3 separate ids inside of it)
        for(let j=0; j <= wins[i].length - 1; j++){
            //every time the user clicks a box [j] within the winning loop [i], count that as one turn.   
            if(oneArray.includes(wins[i][j])){
                //keep tracking player 1 turns
                onePlayTurns++
            }   // if player one reaches turn 3, they have achieved 3 out of 3 squares in one of the winning combinations.
                if(onePlayTurns === 3){
                    playerTurn.innerHTML = "WINNER Player 1"
                    //console.log("Player 1 wins")
                    //automatically reset game in 2 seconds:
                    setTimeout(() => { restartGame() }, 2000) 
                } 
            //player 2 win conditional (same as above, but now for player 2) 
            if(twoArray.includes(wins[i][j])){
                twoPlayTurns++
                //console.log(twoPlayTurns)
            } 
                if(twoPlayTurns === 3){
                    playerTurn.innerHTML = "WINNER Player 2"
                    //console.log("player 2 wins")
                    setTimeout(() => { restartGame() }, 2000)
                } 
            //tie conditional: if the click count has reached 9 and neither player 1 nor player 2 has achieved 3 of 3 boxes in a winning set, draw tie.
            if (count === 9 && onePlayTurns !== 3 && twoPlayTurns !== 3) {
                playerTurn.innerHTML = "Tie!"
                //reset game automatically after 2 seconds
                setTimeout(() => {restartGame() }, 2000)
            }  
        }
    } 
}

//assigning X or O text to p tag id
const boxChosen = (event) => {
    //if count is divisible by 2, player 1 is playing (player 1 exclusively plays on even number count)
    if (count % 2 === 0) {
        count++
        //assign X to the p ID
        event.target.innerHTML = "X"
        //change p ID background color
        event.target.style.backgroundColor = "#F3D9BE"
        //box chosen propels the turn of the next player, player 2
        playerTurn.innerHTML = "Player 2's turn"
        //push results to player 1 array
        oneArray.push(event.target.parentNode.id)
        //console.log(oneArray)
    //else it is player 2 playing
    }else{
        count++
        //assign O to the p ID
        event.target.innerHTML = "O"
        //change p ID background color
        event.target.style.backgroundColor = "#E5F7DE"
        //box chosen propels the turn of the next player, player 1
        playerTurn.innerHTML = "Player 1's turn"
        //push results to player 2 array
        twoArray.push(event.target.parentNode.id)
    }
    //keep track of what boxes are chosen
    checkWin()
    //testing functionality of the populated arrays:
    //console.log(oneArray)
    //console.log(twoArray)
} 

//selecting a box
const selectBox = (event) => {
    //set up variable
    boxText = event.target.innerHTML
    //if inner text is blank, box is available for selection:
    if (boxText == "") {
        boxChosen(event)
    //if inner text is NOT blank and is also NOT the restart button, alert user to select other square
    } else if (boxText !== "" && boxText !== restartButton){
        alert("This box has already been used. Pick another!")
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
    //console.log(oneArray)
    //console.log(twoArray)
}


//EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
    //begin game
    game.addEventListener("click", selectBox)
    //restart game
    restartButton.addEventListener("click", restartGame) 
})