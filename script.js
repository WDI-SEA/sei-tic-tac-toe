let gameOn = null;
// PLAYER ARRAYS
let playerOneGrid = [null, null];
let playerTwoGrid = [];
let gameDraw = [];

let playerOneName = document.getElementById("playerOneName");
let playerTwoName = document.getElementById("playerTwoName");

// GAME START BUTTON
function gameStartFunction () {
    if (playerOneName.value === "" || playerTwoName.value === "") {
        alert("Please enter player names!");
    } else {
    // console.log("game start button clicked");
    // console.log("Player one is " + playerOneName.value);
    // console.log("Player Two is " + playerTwoName.value);
    document.getElementById("gameResultContent").innerText = (playerOneName.value + " vs " + playerTwoName.value);
    gameOn = true;
    playGame ();
}}
let gameOnButton = document.getElementById("gameStartButton");
    gameOnButton.addEventListener("click", gameStartFunction);
//GAME RESET BUTTON
let gameResetButton = document.getElementById("gameResultButton");
    gameResetButton.addEventListener("click", function () {
        console.log("Game reset button clicked.");
        gameOn = null;
        playerOneGrid = [null, null];
        playerTwoGrid = [];
        document.getElementById("optionOneContent").innerText = "";
        document.getElementById("optionTwoContent").innerText = "";
        document.getElementById("optionThreeContent").innerText = "";
        document.getElementById("optionFourContent").innerText = "";
        document.getElementById("optionFiveContent").innerText = "";
        document.getElementById("optionSixContent").innerText = "";
        document.getElementById("optionSevenContent").innerText = "";
        document.getElementById("optionEightContent").innerText = "";
        document.getElementById("optionNineContent").innerText = "";
        gameStartFunction ();
    })

// GAMEBOARD GRID
let gridOne = document.getElementById("optionOne");
let gridTwo = document.getElementById("optionTwo");
let gridThree = document.getElementById("optionThree");
let gridFour = document.getElementById("optionFour");
let gridFive = document.getElementById("optionFive");
let gridSix = document.getElementById("optionSix");
let gridSeven = document.getElementById("optionSeven");
let gridEight = document.getElementById("optionEight");
let gridNine = document.getElementById("optionNine");
// GAMEBOARD 
const gameBoard = document.getElementById("gamePlay");

function gridOneFunction(){ 
    if (playerOneGrid.length % 2 === 0) {
    // console.log("Player one selected grid one.");
    gridOneValue = 1;
    playerOneGrid.push(gridOneValue);
    gameDraw.push(gridOneValue);
    document.getElementById("optionOneContent").innerText = "X";
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else {
    // console.log("Player two selected grid one.");
    gridOneValue = 1;
    playerTwoGrid.push(gridOneValue);
    playerOneGrid.push(null);
    gameDraw.push(gridOneValue);
    document.getElementById("optionOneContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    }
}
function gridTwoFunction(){
    if (playerOneGrid.length % 2 === 0) {
    // console.log("Player one selected grid two.");
    gridTwoValue = 2;
    playerOneGrid.push(gridTwoValue);
    gameDraw.push(gridTwoValue);
    document.getElementById("optionTwoContent").innerText = "X";
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else {
    // console.log("Player two selected grid two.");
    gridTwoValue = 2;
    playerTwoGrid.push(gridTwoValue);
    playerOneGrid.push(null);
    gameDraw.push(gridTwoValue);
    document.getElementById("optionTwoContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    }
}
function gridThreeFunction(){
    if (playerOneGrid.length % 2 === 0) {
    // console.log("Player one selected grid three.");
    gridThreeValue = 3;
    playerOneGrid.push(gridThreeValue);
    gameDraw.push(gridThreeValue);
    document.getElementById("optionThreeContent").innerText = "X"; 
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else {
    // console.log("Player two selected grid three.");
    gridThreeValue = 3;
    playerTwoGrid.push(gridThreeValue);
    playerOneGrid.push(null);
    gameDraw.push(gridThreeValue);
    document.getElementById("optionThreeContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    }
}
function gridFourFunction(){
    if (playerOneGrid.length % 2 === 0) {
    // console.log("Player one selected grid four.");
    gridFourValue = 4;
    playerOneGrid.push(gridFourValue);
    gameDraw.push(gridFourValue);
    document.getElementById("optionFourContent").innerText = "X";
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else {
    // console.log("Player two selected grid four.");
    gridFourValue = 4;
    playerTwoGrid.push(gridFourValue);
    playerOneGrid.push(null);
    gameDraw.push(gridFourValue);
    document.getElementById("optionFourContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    }

}
function gridFiveFunction(){
    if (playerOneGrid.length % 2 === 0) {
    // console.log("Player one selected grid five.");
    gridFiveValue = 5;
    playerOneGrid.push(gridFiveValue);
    gameDraw.push(gridFiveValue);
    document.getElementById("optionFiveContent").innerText = "X";
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else {
    // console.log("Player two selected grid five.");
    gridFiveValue = 5;
    playerTwoGrid.push(gridFiveValue);
    playerOneGrid.push(null);
    gameDraw.push(gridFiveValue);
    document.getElementById("optionFiveContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    }
}
function gridSixFunction(){
    if (playerOneGrid.length % 2 === 0) {
    // console.log("Player one selected grid six.");
    gridSixValue = 6;
    playerOneGrid.push(gridSixValue);
    gameDraw.push(gridSixValue);
    document.getElementById("optionSixContent").innerText = "X"; 
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else {
    // console.log("Player two selected grid six.");
    gridSixValue = 6;
    playerTwoGrid.push(gridSixValue);
    playerOneGrid.push(null);
    gameDraw.push(gridSixValue);
    document.getElementById("optionSixContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    }
}
function gridSevenFunction(){
    if (playerOneGrid.length % 2 === 0) {
    // console.log("Player one selected grid seven.");
    gridSevenValue = 7;
    playerOneGrid.push(gridSevenValue);
    gameDraw.push(gridSevenValue);
    document.getElementById("optionSevenContent").innerText = "X";
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else {
    // console.log("Player two selected grid seven.");
    gridSevenValue = 7;
    playerTwoGrid.push(gridSevenValue);
    playerOneGrid.push(null);
    gameDraw.push(gridSevenValue);
    document.getElementById("optionSevenContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    }
}
function gridEightFunction(){
    if (playerOneGrid.length % 2 === 0) {
    // console.log("Player one selected grid eight.");
    gridEightValue = 8;
    playerOneGrid.push(gridEightValue);
    gameDraw.push(gridEightValue);
    document.getElementById("optionEightContent").innerText = "X";
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else {
    // console.log("Player two selected grid eight.");
    gridEightValue = 8;
    playerTwoGrid.push(gridEightValue);
    gameDraw.push(gridEightValue);
    playerOneGrid.push(null);
    document.getElementById("optionEightContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    }
}
function gridNineFunction(){
    if (playerOneGrid.length % 2 === 0) {
    // console.log("Player one selected grid nine.");
    gridNineValue = 9;
    playerOneGrid.push(gridNineValue);
    gameDraw.push(gridNineValue);
    document.getElementById("optionNineContent").innerText = "X";
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else {
    // console.log("Player two selected grid nine.");
    gridNineValue = 9;
    playerTwoGrid.push(gridNineValue);
    playerOneGrid.push(null);
    gameDraw.push(gridNineValue);
    document.getElementById("optionNineContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    }
}
// PLAY GAME FUNCTION
function playGame () {
    if (gameOn === true) {
        document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";

// GAME WINNING OPTIONS
const winGameOptOne = [1, 2, 3];
const winGameOptTwo = [4, 5, 6];
const winGameOptThree = [7, 8, 9];
const winGameOptFour = [1, 4, 7];
const winGameOptFive = [2, 5, 8];
const winGameOptSix = [3, 6, 9];
const winGameOptSeven = [1, 5, 9];
const winGameOptEight = [3, 5, 7];
// GAME PLAY GRID


gridOne.addEventListener("click", gridOneFunction,{once:true})
gridTwo.addEventListener("click", gridTwoFunction,{once:true})
gridThree.addEventListener("click", gridThreeFunction,{once:true})
gridFour.addEventListener("click", gridFourFunction,{once:true})
gridFive.addEventListener("click", gridFiveFunction,{once:true})
gridSix.addEventListener("click", gridSixFunction,{once:true})
gridSeven.addEventListener("click", gridSevenFunction,{once:true})
gridEight.addEventListener("click", gridEightFunction,{once:true})
gridNine.addEventListener("click", gridNineFunction,{once:true})

// GAME PLAY RESULT PLAYER ONE
gameBoard.addEventListener("click", function (event) {
    if (playerOneGrid.includes(1) === winGameOptOne.includes(1) && playerOneGrid.includes(2) === winGameOptOne.includes(2) && playerOneGrid.includes(3) === winGameOptOne.includes(3)) {
        playerOneWinner ();
    } else if (playerOneGrid.includes(4) === winGameOptTwo.includes(4) && playerOneGrid.includes(5) === winGameOptTwo.includes(5) && playerOneGrid.includes(6) === winGameOptTwo.includes(6)) {
        playerOneWinner ();
    }  else if (playerOneGrid.includes(7) === winGameOptThree.includes(7) && playerOneGrid.includes(8) === winGameOptThree.includes(8) && playerOneGrid.includes(9) === winGameOptThree.includes(9)) {
        playerOneWinner ();
    }  else if (playerOneGrid.includes(1) === winGameOptFour.includes(1) && playerOneGrid.includes(4) === winGameOptFour.includes(4) && playerOneGrid.includes(7) === winGameOptFour.includes(7)) {
        playerOneWinner ();
    } else if (playerOneGrid.includes(2) === winGameOptFive.includes(2) && playerOneGrid.includes(5) === winGameOptFive.includes(5) && playerOneGrid.includes(8) === winGameOptFive.includes(8)) {
        playerOneWinner ();
    } else if (playerOneGrid.includes(3) === winGameOptSix.includes(3) && playerOneGrid.includes(6) === winGameOptSix.includes(6) && playerOneGrid.includes(9) === winGameOptSix.includes(9)) {
        playerOneWinner ();
    } else if (playerOneGrid.includes(1) === winGameOptSeven.includes(1) && playerOneGrid.includes(5) === winGameOptSeven.includes(5) && playerOneGrid.includes(9) === winGameOptSeven.includes(9)) {
        playerOneWinner ();
    } else if (playerOneGrid.includes(3) === winGameOptEight.includes(3) && playerOneGrid.includes(5) === winGameOptEight.includes(5) && playerOneGrid.includes(7) === winGameOptEight.includes(7)) {
        playerOneWinner ();
    } else {
}})

// GAME PLAY RESULT PLAYER TWO
gameBoard.addEventListener("click", function (event) {
    if (playerTwoGrid.includes(1) === winGameOptOne.includes(1) && playerTwoGrid.includes(2) === winGameOptOne.includes(2) && playerTwoGrid.includes(3) === winGameOptOne.includes(3)) {
        playerTwoWinner ();
    } else if (playerTwoGrid.includes(4) === winGameOptTwo.includes(4) && playerTwoGrid.includes(5) === winGameOptTwo.includes(5) && playerTwoGrid.includes(6) === winGameOptTwo.includes(6)) {
        playerTwoWinner ();
    }  else if (playerTwoGrid.includes(7) === winGameOptThree.includes(7) && playerTwoGrid.includes(8) === winGameOptThree.includes(8) && playerTwoGrid.includes(9) === winGameOptThree.includes(9)) {
        playerTwoWinner ();
    }  else if (playerTwoGrid.includes(1) === winGameOptFour.includes(1) && playerTwoGrid.includes(4) === winGameOptFour.includes(4) && playerTwoGrid.includes(7) === winGameOptFour.includes(7)) {
        playerTwoWinner ();
    } else if (playerTwoGrid.includes(2) === winGameOptFive.includes(2) && playerTwoGrid.includes(5) === winGameOptFive.includes(5) && playerTwoGrid.includes(8) === winGameOptFive.includes(8)) {
        playerTwoWinner ();
    } else if (playerTwoGrid.includes(3) === winGameOptSix.includes(3) && playerTwoGrid.includes(6) === winGameOptSix.includes(6) && playerTwoGrid.includes(9) === winGameOptSix.includes(9)) {
        playerTwoWinner ();
    } else if (playerTwoGrid.includes(1) === winGameOptSeven.includes(1) && playerTwoGrid.includes(5) === winGameOptSeven.includes(5) && playerTwoGrid.includes(9) === winGameOptSeven.includes(9)) {
        playerTwoWinner ();
    } else if (playerTwoGrid.includes(3) === winGameOptEight.includes(3) && playerTwoGrid.includes(5) === winGameOptEight.includes(5) && playerTwoGrid.includes(7) === winGameOptEight.includes(7)) {
        playerTwoWinner ();
    }  else if (gameDraw.length === 9) {
        // console.log("The game is a draw.")
        gameResultDraw();
    } else {
}})

// GAME START
} else {
    alert("Press Start Game!")
}}

// GAME RESULT: PLAYER ONE WINS
function playerOneWinner () {
    document.getElementById("gameResultContent").innerText = playerOneName.value + " wins!";
    gameOnButton.removeEventListener("click", gameStartFunction);
    gridOne.removeEventListener("click", gridOneFunction);
    gridTwo.removeEventListener("click", gridTwoFunction);
    gridThree.removeEventListener("click", gridThreeFunction);
    gridFour.removeEventListener("click", gridFourFunction);
    gridFive.removeEventListener("click", gridFiveFunction);
    gridSix.removeEventListener("click", gridSixFunction);
    gridSeven.removeEventListener("click", gridSevenFunction);
    gridEight.removeEventListener("click", gridEightFunction);
    gridNine.removeEventListener("click", gridNineFunction);
    gameOn=false;
    document.getElementById("playerTurnDisplay").innerText = playerTwoName.value + ", don't be so easy on " + playerOneName.value + " this time!";
}
// GAME RESULT: PLAYER TWO WINS
function playerTwoWinner () {
    document.getElementById("gameResultContent").innerText = playerTwoName.value + " wins!";
    gameOnButton.removeEventListener("click", gameStartFunction);
    gridOne.removeEventListener("click", gridOneFunction);
    gridTwo.removeEventListener("click", gridTwoFunction);
    gridThree.removeEventListener("click", gridThreeFunction);
    gridFour.removeEventListener("click", gridFourFunction);
    gridFive.removeEventListener("click", gridFiveFunction);
    gridSix.removeEventListener("click", gridSixFunction);
    gridSeven.removeEventListener("click", gridSevenFunction);
    gridEight.removeEventListener("click", gridEightFunction);
    gridNine.removeEventListener("click", gridNineFunction);
    gameOn=false;
    document.getElementById("playerTurnDisplay").innerText = playerTwoName.value + " got lucky. You'll win this time " + playerOneName.value +"!";
}
//GAME RESULT: DRAW

function gameResultDraw() {
    document.getElementById("gameResultContent").innerText = "It's a draw.";
    gameOnButton.removeEventListener("click", gameStartFunction);
    gridOne.removeEventListener("click", gridOneFunction);
    gridTwo.removeEventListener("click", gridTwoFunction);
    gridThree.removeEventListener("click", gridThreeFunction);
    gridFour.removeEventListener("click", gridFourFunction);
    gridFive.removeEventListener("click", gridFiveFunction);
    gridSix.removeEventListener("click", gridSixFunction);
    gridSeven.removeEventListener("click", gridSevenFunction);
    gridEight.removeEventListener("click", gridEightFunction);
    gridNine.removeEventListener("click", gridNineFunction);
    gameOn=false;
    document.getElementById("playerTurnDisplay").innerText = "No one likes a tie, play again!";
}