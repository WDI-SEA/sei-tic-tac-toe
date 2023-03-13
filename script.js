const gameBoard = document.querySelector("#gameGrid");
const infoDisplay = document.querySelector("#info");
//document.getElementsByClassName("gameGrit");
//document.getElementsByClassName("motherBoard");
//document.getElementsByClassName("rowOne");
//document.getElementsByClassName("rowTwo");
//document.getElementsByClassName("rowThree");
//document.getElementsByClassName("restartButton");
//document.getElementsByClassName("playerX");
//document.getElementsByClassName("playerO");
//document.getElementsByClassName("winner");
//document.getElementsByClassName("catsGame");
//document.getElementsByClassName("titleFont");
//document.getElementsByID("boxZero");
//document.getElementsByID("boxOne");
//document.getElementsByID("boxTwo");
//document.getElementsByID("boxThree");
//document.getElementsByID("boxFour");
//document.getElementsByID("boxFive");
//document.getElementsByID("boxSix");
//document.getElementsByID("boxSeven");
//document.getElementsByID("boxEight");



const gameGrid = ["", "", "", "", "", "", "", "", ""];
const players = ["X", "O"];

const playerX = "x"
const playerO = "o"
const button = document.getElementsByClassName("restartButton");

let boxZero = gameGrid[0];
let boxOne = gameGrid[1];
let boxTwo = gameGrid[2];
let boxThree = gameGrid[3];
let boxFour = gameGrid[4];
let boxFive = gameGrid[5];
let boxSix = gameGrid[6];
let boxSeven = gameGrid[7];
let boxEight = gameGrid[8];

let playerOne = players[0];
let playerTwo = players[1];

let winner = "WINNER!"
let catsGame = "CATS GAME"

let go = "mario";
infoDisplay.textContent = "Your turn mario!"

// this function creates board 
function createBoard() {
    // loop through gameGrid array to access each individual box
    for (let i = 0; i < gameGrid.length; i++) {
        // creating a div
        const boxElement = document.createElement("div")
        // giving div a class name
        boxElement.classList.add("square")
        // setting the id on each box to match the index
        boxElement.id = i
        // when clicking on your choice
        // this will run addGo
        boxElement.addEventListener("click", addGo)
        //inserts box to game board
        gameBoard.append(boxElement)
    }
}
// call function
createBoard();

// this function
function addGo(event) {
    // create div
    const yourTurn = document.createElement("div")
    // give it a class name
    yourTurn.classList.add(go)
    //inserts your character to whatever you click on with the event target using the element with the class name chosen
    event.target.append(yourTurn)
    // this creates a condition to switches players turns
    if (go === "mario") {
        go = "lakitu"
    } else {
        go = "mario"
    }
    // this tells player it is now their turn after player 1 
    //has already gone
    infoDisplay.textContent = `Your turn ${go}`
    // this makes box unclickable again in the same game
    event.target.removeEventListener("click", addGo)
    whoWon();
}

function whoWon () {
    // how to win on tic tac toe
    const waysToWin = [
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 6],
        [2, 5, 8],
        [2, 4, 6],
        [6, 7, 8],
        [3, 4, 5],
        [1, 4, 7]
    ]
    // this selects all squares 
    const wholeBoard = document.querySelectorAll(".square")
    // this loops through the waysToWin array
    for (let i = 0; i < waysToWin.length; i++) {
    // tries to find matching boxes
        const marioWins = waysToWin[i].every(box => wholeBoard[box].firstChild?.classList.contains("mario")) 
        if (marioWins) { 
            infoDisplay.textContent = "MARIO WINS!"
            // loops through board to get each individual square
            // and replaces existing nodes
            for (let i = 0; i < wholeBoard.length; i++) {
                wholeBoard[i].replaceWith(wholeBoard[i].cloneNode(true))
                return
            }      
        }
    } 
    // goes through whole board
    for (let i = 0; i < waysToWin.length; i++) {
        // tries to find matching boxes indices
            const lakituWins = waysToWin[i].every(box => wholeBoard[box].firstChild?.classList.contains("lakitu")) 
            if (lakituWins) { 
                infoDisplay.textContent = "LAKITU WINS!"
                // loops through board to get each individual square
                // and replaces existing nodes
                for (let i = 0; i < wholeBoard.length; i++) {
                    wholeBoard[i].replaceWith(wholeBoard[i].cloneNode(true))
                    return
                }      
            } 
        } 
}

// function restart() {
//     const reset = document.getElementsByClassName("restartButton")
//     reset.addEventListener("click", () => {
//         window.location.reload();
//     })
// }