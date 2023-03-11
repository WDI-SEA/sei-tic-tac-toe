// PLAYER ARRAYS
let playerOneGrid = [];
let playerTwoGrid = [];
// GAMEBOARD 
const gameBoard = document.getElementById("gamePlay");
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

function gridOneFunction(){ 
    if (playerOneGrid.length % 2 === 0) {
    console.log("Grid One was clicked by player one.");
    gridOneValue = 1;
    playerOneGrid.push(gridOneValue);
    console.log("Player one has selected" + playerOneGrid);
    } 
    else {
    console.log("Grid One was clicked by player one.");
    gridOneValue = 2;
    playerTwoGrid.push(gridOneValue);
    playerOneGrid.push(null);
    console.log("Player one has selected" + playerTwoGrid);
    }
}
function gridTwoFunction(){
    if (playerOneGrid.length % 2 === 0) {
    console.log("Grid Two was clicked by player one.");
    gridTwoValue = 2;
    playerOneGrid.push(gridTwoValue);
    console.log("Player one has selected" + playerOneGrid);
    } 
    else {
    console.log("Grid Two was clicked by player two.");
    gridTwoValue = 2;
    playerTwoGrid.push(gridTwoValue);
    playerOneGrid.push(null);
    console.log("Player two has selected" + playerTwoGrid);
    }
}
function gridThreeFunction(){
    if (playerOneGrid.length % 2 === 0) {
    console.log("Grid Three was clicked by player one.");
    gridThreeValue = 3;
    playerOneGrid.push(gridThreeValue);
    console.log("Player one has selected" + playerOneGrid); } 
    else {
    console.log("Grid Three was clicked by player two.");
    gridThreeValue = 3;
    playerTwoGrid.push(gridThreeValue);
    playerOneGrid.push(null);
    console.log("Player two has selected" + playerTwoGrid);
    }
}
function gridFourFunction(){
    if (playerOneGrid.length % 2 === 0) {
    console.log("Grid Four was clicked by player one.");
    gridFourValue = 4;
    playerOneGrid.push(gridFourValue);
    console.log("Player one has selected" + playerOneGrid);}
    else {
    console.log("Grid Four was clicked by player two.");
    gridFourValue = 4;
    playerTwoGrid.push(gridFourValue);
    playerOneGrid.push(null);
    console.log("Player two has selected" + playerTwoGrid);
    }

}
function gridFiveFunction(){
    if (playerOneGrid.length % 2 === 0) {
    console.log("Grid Five was clicked by player one.");
    gridFiveValue = 5;
    playerOneGrid.push(gridFiveValue);
    console.log("Player one has selected" + playerOneGrid);}
    else {
    console.log("Grid Five was clicked by player two.");
    gridFiveValue = 5;
    playerTwoGrid.push(gridFiveValue);
    playerOneGrid.push(null);
    console.log("Player two has selected" + playerTwoGrid);
    }
}
function gridSixFunction(){
    if (playerOneGrid.length % 2 === 0) {
    console.log("Grid Six was clicked by player one.");
    gridSixValue = 6;
    playerOneGrid.push(gridSixValue);
    console.log("Player one has selected" + playerOneGrid); }
    else {
        console.log("Grid Six was clicked by player two.");
        gridSixValue = 6;
        playerTwoGrid.push(gridSixValue);
        playerOneGrid.push(null);
        console.log("Player two has selected" + playerTwoGrid);
        }
}
function gridSevenFunction(){
    if (playerOneGrid.length % 2 === 0) {
    console.log("Grid Seven was clicked by player one.");
    gridSevenValue = 7;
    playerOneGrid.push(gridSevenValue);
    console.log("Player one has selected" + playerOneGrid);
    }     else {
    console.log("Grid Seven was clicked by player two.");
    gridSevenValue = 7;
    playerTwoGrid.push(gridSevenValue);
    playerOneGrid.push(null);
    console.log("Player two has selected" + playerTwoGrid);
    }
}
function gridEightFunction(){
    if (playerOneGrid.length % 2 === 0) {
    console.log("Grid Eight was clicked by player one.");
    gridEightValue = 8;
    playerOneGrid.push(gridEightValue);
    console.log("Player one has selected" + playerOneGrid);
    } else {
        console.log("Grid Eight was clicked by player two.");
        gridEightValue = 8;
        playerTwoGrid.push(gridEightValue);
        playerOneGrid.push(null);
        console.log("Player two has selected" + playerTwoGrid);
        }
}
function gridNineFunction(){
    if (playerOneGrid.length % 2 === 0) {
    console.log("Grid Nine was clicked by player one.");
    gridNineValue = 9;
    playerOneGrid.push(gridNineValue);
    console.log("Player one has selected" + playerOneGrid);} else {
    console.log("Grid Nine was clicked by player two.");
    gridNineValue = 8;
    playerTwoGrid.push(gridNineValue);
    playerOneGrid.push(null);
    console.log("Player two has selected" + playerTwoGrid);
    }

}

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
        console.log("player one wins!")
    } else if (playerOneGrid.includes(4) === winGameOptTwo.includes(4) && playerOneGrid.includes(5) === winGameOptTwo.includes(5) && playerOneGrid.includes(6) === winGameOptTwo.includes(6)) {
        console.log("player one wins!")
    }  else if (playerOneGrid.includes(7) === winGameOptThree.includes(7) && playerOneGrid.includes(8) === winGameOptThree.includes(8) && playerOneGrid.includes(9) === winGameOptThree.includes(9)) {
        console.log("player one wins!")
    }  else if (playerOneGrid.includes(1) === winGameOptFour.includes(1) && playerOneGrid.includes(4) === winGameOptFour.includes(4) && playerOneGrid.includes(7) === winGameOptFour.includes(7)) {
        console.log("player one wins!")
    } else if (playerOneGrid.includes(2) === winGameOptFive.includes(2) && playerOneGrid.includes(5) === winGameOptFive.includes(5) && playerOneGrid.includes(8) === winGameOptFive.includes(8)) {
        console.log("player one wins!")
    } else if (playerOneGrid.includes(3) === winGameOptSix.includes(3) && playerOneGrid.includes(6) === winGameOptSix.includes(6) && playerOneGrid.includes(9) === winGameOptSix.includes(9)) {
        console.log("player one wins!")
    } else if (playerOneGrid.includes(1) === winGameOptSeven.includes(1) && playerOneGrid.includes(5) === winGameOptSeven.includes(5) && playerOneGrid.includes(9) === winGameOptSeven.includes(9)) {
        console.log("player one wins!")
    } else if (playerOneGrid.includes(3) === winGameOptEight.includes(3) && playerOneGrid.includes(5) === winGameOptEight.includes(5) && playerOneGrid.includes(7) === winGameOptEight.includes(7)) {
        console.log("player one wins!")
    }  else {
}})

// GAME PLAY RESULT PLAYER TWO
gameBoard.addEventListener("click", function (event) {
    if (playerTwoGrid.includes(1) === winGameOptOne.includes(1) && playerTwoGrid.includes(2) === winGameOptOne.includes(2) && playerTwoGrid.includes(3) === winGameOptOne.includes(3)) {
        console.log("player two wins!")
    } else if (playerTwoGrid.includes(4) === winGameOptTwo.includes(4) && playerTwoGrid.includes(5) === winGameOptTwo.includes(5) && playerTwoGrid.includes(6) === winGameOptTwo.includes(6)) {
        console.log("player two wins!")
    }  else if (playerTwoGrid.includes(7) === winGameOptThree.includes(7) && playerTwoGrid.includes(8) === winGameOptThree.includes(8) && playerTwoGrid.includes(9) === winGameOptThree.includes(9)) {
        console.log("player two wins!")
    }  else if (playerTwoGrid.includes(1) === winGameOptFour.includes(1) && playerTwoGrid.includes(4) === winGameOptFour.includes(4) && playerTwoGrid.includes(7) === winGameOptFour.includes(7)) {
        console.log("player two wins!")
    } else if (playerTwoGrid.includes(2) === winGameOptFive.includes(2) && playerTwoGrid.includes(5) === winGameOptFive.includes(5) && playerTwoGrid.includes(8) === winGameOptFive.includes(8)) {
        console.log("player two wins!")
    } else if (playerTwoGrid.includes(3) === winGameOptSix.includes(3) && playerTwoGrid.includes(6) === winGameOptSix.includes(6) && playerTwoGrid.includes(9) === winGameOptSix.includes(9)) {
        console.log("player two wins!")
    } else if (playerTwoGrid.includes(1) === winGameOptSeven.includes(1) && playerTwoGrid.includes(5) === winGameOptSeven.includes(5) && playerTwoGrid.includes(9) === winGameOptSeven.includes(9)) {
        console.log("player two wins!")
    } else if (playerTwoGrid.includes(3) === winGameOptEight.includes(3) && playerTwoGrid.includes(5) === winGameOptEight.includes(5) && playerTwoGrid.includes(7) === winGameOptEight.includes(7)) {
        console.log("player two wins!")
    }  else {
}})