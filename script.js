// GAME STATUS
let gameOn = null;
let gameVsPlayer = null;
let gameVsComp = null;
// PLAYER ARRAYS
let playerOneGrid = [null, null];
let playerTwoGrid = [];
let computerGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let gameDraw = [];

let playerOneName = document.getElementById("playerOneName");
let playerTwoName = document.getElementById("playerTwoName");

// GAME PLAY: COMPUTER
function computerRandomNum () {
    // maxValue = computerGrid.length;
    computerRandomSelectValue = Math.floor(Math.random() * (9) + 1);
    console.log(computerRandomSelectValue);
    document.getElementById("playerTurnDisplay").innerText = "Computer thinking...";
    let computerThinking = setTimeout(computerSelect, 2000);
}

function computerSelect () {
    if (computerRandomSelectValue === 1 && computerGrid.includes(1) === true) {
        gridOneFunction();
        computerWinCheck ();
    } else if (computerRandomSelectValue === 2 && computerGrid.includes(2) === true) {
        gridTwoFunction();
        computerWinCheck ();
    } else if (computerRandomSelectValue === 3 && computerGrid.includes(3) === true) {
        gridThreeFunction();
        computerWinCheck ();
    } else if (computerRandomSelectValue === 4 && computerGrid.includes(4) === true) {
        gridFourFunction();
        computerWinCheck ();
    } else if (computerRandomSelectValue === 5 && computerGrid.includes(5) === true) {
        gridFiveFunction();
        computerWinCheck ();
    } else if (computerRandomSelectValue === 6  && computerGrid.includes(6) === true) {
        gridSixFunction();
        computerWinCheck ();
    } else if (computerRandomSelectValue === 7 && computerGrid.includes(7) === true) {
        gridSevenFunction();
        computerWinCheck ();
    } else if (computerRandomSelectValue === 8 && computerGrid.includes(8) === true) {
        gridEightFunction();
        computerWinCheck ();
    } else if (computerRandomSelectValue === 9 && computerGrid.includes(9) === true) {
        gridNineFunction();
        computerWinCheck ();
    } else if (computerGrid.length === 0) {
        console.log("No more moves for Computer to make.")
    }
    else {
        console.log("computerRandom Num function rerun.");
        computerRandomNum ();
    } 
}

// GAME START PLAYER vs PLAYER BUTTON
function gamePlayerVsPlayerStartFunction () {
    gameVsPlayer = true;
    gameVsComp = false;
    gameOn = true;
    console.log("player vs player button clicked");
    if (playerOneName.value === "" || playerTwoName.value === "") {
        alert("Please enter player names!");
    } else {
    // console.log("game start button clicked");
    // console.log("Player one is " + playerOneName.value);
    // console.log("Player Two is " + playerTwoName.value);
    document.getElementById("gameResultContent").innerText = (playerOneName.value + " vs " + playerTwoName.value);
    playGame ();
}}
let gameOnButton = document.getElementById("gameStartButton");
    gameOnButton.addEventListener("click", gamePlayerVsPlayerStartFunction);

// GAME START PLAYER vs COMPUTER BUTTON
function gamePlayerVsCompStartFunction () {
    console.log("player computer button clicked");
    if (playerOneName.value === "") {
        alert("Please enter player one's name!");
    } else if (playerTwoName.value === "Computer") {
        document.getElementById("gameResultContent").innerText = (playerOneName.value + " vs Computer!");
        document.getElementById("playerTwoName").value = "Computer";
        gameOn = true;
        gameVsPlayer = false;
        gameVsComp = true;
        playGame ();
    }
    else if (playerTwoName.value !== "" && playerTwoName.value !== "Computer"){
        alert("Player two is replaced by the computer!");
        document.getElementById("gameResultContent").innerText = (playerOneName.value + " vs Computer!");
        document.getElementById("playerTwoName").value = "Computer";
        gameOn = true;
        gameVsPlayer = false;
        gameVsComp = true;
        playGame ();
    } else {
    // console.log("game start button clicked");
    // console.log("Player one is " + playerOneName.value);
    // console.log("Player Two is " + playerTwoName.value);
    document.getElementById("gameResultContent").innerText = (playerOneName.value + " vs Computer!");
    document.getElementById("playerTwoName").value = "Computer";
    gameOn = true;
    gameVsPlayer = false;
    gameVsComp = true;
    playGame ();
}}
let gameOnVsCompButton = document.getElementById("playComputer");
gameOnVsCompButton.addEventListener("click", gamePlayerVsCompStartFunction);

//GAME RESET BUTTON
let gameResetButton = document.getElementById("gameResultButton");
    gameResetButton.addEventListener("click", function () {
        console.log("Game reset button clicked.");
        // gameOn = null;
        // gameVsComp = null;
        // gameVsPlayer = null;
        playerOneGrid = [null, null];
        playerTwoGrid = [];
        gameDraw = [];
        computerGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        document.getElementById("gameResultButton").innerText = "Game reset";
        document.getElementById("optionOneContent").innerText = "";
        document.getElementById("optionTwoContent").innerText = "";
        document.getElementById("optionThreeContent").innerText = "";
        document.getElementById("optionFourContent").innerText = "";
        document.getElementById("optionFiveContent").innerText = "";
        document.getElementById("optionSixContent").innerText = "";
        document.getElementById("optionSevenContent").innerText = "";
        document.getElementById("optionEightContent").innerText = "";
        document.getElementById("optionNineContent").innerText = "";
        if (gameVsPlayer === true) {
            gamePlayerVsPlayerStartFunction ();
            console.log("reset player vs player game.");
        } else if (gameVsComp === true) {
            gamePlayerVsCompStartFunction ();
            console.log("reset player vs computer game.");
        } else {
            alert("Game reset error!")
        }
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

// GAME WINNING OPTIONS
const winGameOptOne = [1, 2, 3];
const winGameOptTwo = [4, 5, 6];
const winGameOptThree = [7, 8, 9];
const winGameOptFour = [1, 4, 7];
const winGameOptFive = [2, 5, 8];
const winGameOptSix = [3, 6, 9];
const winGameOptSeven = [1, 5, 9];
const winGameOptEight = [3, 5, 7];

// GRID FUNCTIONS
function gridOneFunction(){ 
    if (playerOneGrid.length % 2 === 0 && gameVsPlayer === true) {
    // console.log("Player one selected grid one.");
    gridOneValue = 1;
    playerOneGrid.push(gridOneValue);
    gameDraw.push(gridOneValue);
    document.getElementById("optionOneContent").innerText = "X";
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 !== 0 && gameVsPlayer === true) {
    // console.log("Player two selected grid one.");
    gridOneValue = 1;
    playerTwoGrid.push(gridOneValue);
    playerOneGrid.push(null);
    gameDraw.push(gridOneValue);
    document.getElementById("optionOneContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 === 0 && gameVsComp === true) {
        gridOneValue = 1;
        playerOneGrid.push(gridOneValue);
        gameDraw.push(gridOneValue);
        let computerGridArrayIndex = computerGrid.indexOf(1);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionOneContent").innerText = "X";
        document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
        computerRandomNum ();
    } else if (playerOneGrid.length % 2 !== 0 && gameVsComp === true) {
        gridOneValue = 1;
        playerTwoGrid.push(gridOneValue);
        playerOneGrid.push(null);
        gameDraw.push(gridOneValue);
        let computerGridArrayIndex = computerGrid.indexOf(1);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionOneContent").innerText = "O";
        document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else {
        console.log("grid one function error.")
    }
}
function gridTwoFunction(){
    if (playerOneGrid.length % 2 === 0 && gameVsPlayer === true) {
    // console.log("Player one selected grid two.");
    gridTwoValue = 2;
    playerOneGrid.push(gridTwoValue);
    gameDraw.push(gridTwoValue);
    document.getElementById("optionTwoContent").innerText = "X";
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 !== 0 && gameVsPlayer === true) {
    // console.log("Player two selected grid two.");
    gridTwoValue = 2;
    playerTwoGrid.push(gridTwoValue);
    playerOneGrid.push(null);
    gameDraw.push(gridTwoValue);
    document.getElementById("optionTwoContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 === 0 && gameVsComp === true) {
        gridTwoValue = 2;
        playerOneGrid.push(gridTwoValue);
        gameDraw.push(gridTwoValue);
        let computerGridArrayIndex = computerGrid.indexOf(2);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionTwoContent").innerText = "X";
        document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
        computerRandomNum ();
    } else if (playerOneGrid.length % 2 !== 0 && gameVsComp === true) {
        gridTwoValue = 2;
        playerTwoGrid.push(gridTwoValue);
        playerOneGrid.push(null);
        gameDraw.push(gridTwoValue);
        let computerGridArrayIndex = computerGrid.indexOf(2);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionTwoContent").innerText = "O";
        document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else {
        console.log("grid two function error.")
    }
}
function gridThreeFunction(){
    if (playerOneGrid.length % 2 === 0 && gameVsPlayer === true) {
    // console.log("Player one selected grid three.");
    gridThreeValue = 3;
    playerOneGrid.push(gridThreeValue);
    gameDraw.push(gridThreeValue);
    document.getElementById("optionThreeContent").innerText = "X"; 
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 !== 0 && gameVsPlayer === true) {
    // console.log("Player two selected grid three.");
    gridThreeValue = 3;
    playerTwoGrid.push(gridThreeValue);
    playerOneGrid.push(null);
    gameDraw.push(gridThreeValue);
    document.getElementById("optionThreeContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 === 0 && gameVsComp === true) {
        gridThreeValue = 3;
        playerOneGrid.push(gridThreeValue);
        gameDraw.push(gridThreeValue);
        let computerGridArrayIndex = computerGrid.indexOf(3);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionThreeContent").innerText = "X";
        document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
        computerRandomNum ();
    } else if (playerOneGrid.length % 2 !== 0 && gameVsComp === true) {
        gridThreeValue = 3;
        playerTwoGrid.push(gridThreeValue);
        playerOneGrid.push(null);
        gameDraw.push(gridThreeValue);
        let computerGridArrayIndex = computerGrid.indexOf(3);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionThreeContent").innerText = "O";
        document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else {
        console.log("grid three function error.")
    }
}
function gridFourFunction(){
    if (playerOneGrid.length % 2 === 0 && gameVsPlayer === true) {
    // console.log("Player one selected grid four.");
    gridFourValue = 4;
    playerOneGrid.push(gridFourValue);
    gameDraw.push(gridFourValue);
    document.getElementById("optionFourContent").innerText = "X";
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 !== 0 && gameVsPlayer === true) {
    // console.log("Player two selected grid four.");
    gridFourValue = 4;
    playerTwoGrid.push(gridFourValue);
    playerOneGrid.push(null);
    gameDraw.push(gridFourValue);
    document.getElementById("optionFourContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 === 0 && gameVsComp === true) {
        gridFourValue = 4;
        playerOneGrid.push(gridFourValue);
        gameDraw.push(gridFourValue);
        let computerGridArrayIndex = computerGrid.indexOf(4);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionFourContent").innerText = "X";
        document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
        computerRandomNum ();
    } else if (playerOneGrid.length % 2 !== 0 && gameVsComp === true) {
        gridFourValue = 4;
        playerTwoGrid.push(gridFourValue);
        gameDraw.push(gridFourValue);
        playerOneGrid.push(null);
        let computerGridArrayIndex = computerGrid.indexOf(4);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionFourContent").innerText = "O";
        document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else {
        console.log("grid four function error.")
    }

}
function gridFiveFunction(){
    if (playerOneGrid.length % 2 === 0 && gameVsPlayer === true) {
    // console.log("Player one selected grid five.");
    gridFiveValue = 5;
    playerOneGrid.push(gridFiveValue);
    gameDraw.push(gridFiveValue);
    document.getElementById("optionFiveContent").innerText = "X";
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 !== 0 && gameVsPlayer === true) {
    // console.log("Player two selected grid five.");
    gridFiveValue = 5;
    playerTwoGrid.push(gridFiveValue);
    playerOneGrid.push(null);
    gameDraw.push(gridFiveValue);
    document.getElementById("optionFiveContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 === 0 && gameVsComp === true) {
        gridFiveValue = 5;
        playerOneGrid.push(gridFiveValue);
        gameDraw.push(gridFiveValue);
        let computerGridArrayIndex = computerGrid.indexOf(5);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionFiveContent").innerText = "X";
        document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
        computerRandomNum ();
    } else if (playerOneGrid.length % 2 !== 0 && gameVsComp === true) {
        gridFiveValue = 5;
        playerTwoGrid.push(gridFiveValue);
        playerOneGrid.push(null);
        gameDraw.push(gridFiveValue);
        let computerGridArrayIndex = computerGrid.indexOf(5);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionFiveContent").innerText = "O";
        document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else {
        console.log("grid five function error.")
    }
}
function gridSixFunction(){
    if (playerOneGrid.length % 2 === 0 && gameVsPlayer === true) {
    // console.log("Player one selected grid six.");
    gridSixValue = 6;
    playerOneGrid.push(gridSixValue);
    gameDraw.push(gridSixValue);
    document.getElementById("optionSixContent").innerText = "X"; 
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 !== 0 && gameVsPlayer === true) {
    // console.log("Player two selected grid six.");
    gridSixValue = 6;
    playerTwoGrid.push(gridSixValue);
    playerOneGrid.push(null);
    gameDraw.push(gridSixValue);
    let computerGridArrayIndex = computerGrid.indexOf(6);
    computerGrid.splice(computerGridArrayIndex, 1);
    document.getElementById("optionSixContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 === 0 && gameVsComp === true) {
        gridSixValue = 6;
        playerOneGrid.push(gridSixValue);
        gameDraw.push(gridSixValue);
        let computerGridArrayIndex = computerGrid.indexOf(6);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionSixContent").innerText = "X"; 
        document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
        computerRandomNum ();
    } else if (playerOneGrid.length % 2 !== 0 && gameVsComp === true) {
        gridSixValue = 6;
        playerTwoGrid.push(gridSixValue);
        playerOneGrid.push(null);
        gameDraw.push(gridSixValue);
        let computerGridArrayIndex = computerGrid.indexOf(6);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionSixContent").innerText = "O";
        document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else {
        console.log("grid six function error.")
    }
}
function gridSevenFunction(){
    if (playerOneGrid.length % 2 === 0 && gameVsPlayer === true) {
    // console.log("Player one selected grid seven.");
        gridSevenValue = 7;
        playerOneGrid.push(gridSevenValue);
        gameDraw.push(gridSevenValue);
        document.getElementById("optionSevenContent").innerText = "X";
        document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 !== 0 && gameVsPlayer === true) {
    // console.log("Player two selected grid seven.");
        gridSevenValue = 7;
        playerTwoGrid.push(gridSevenValue);
        playerOneGrid.push(null);
        gameDraw.push(gridSevenValue);
        document.getElementById("optionSevenContent").innerText = "O";
        document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 === 0 && gameVsComp === true) {
        gridSevenValue = 7;
        playerOneGrid.push(gridSevenValue);
        gameDraw.push(gridSevenValue);
        let computerGridArrayIndex = computerGrid.indexOf(7);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionSevenContent").innerText = "X";
        document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
        computerRandomNum ();
    } else if (playerOneGrid.length % 2 !== 0 && gameVsComp === true) {
        gridSevenValue = 7;
        playerTwoGrid.push(gridSevenValue);
        playerOneGrid.push(null);
        gameDraw.push(gridSevenValue);
        let computerGridArrayIndex = computerGrid.indexOf(7);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionSevenContent").innerText = "O";
        document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else {
        console.log("grid seven function error.")
    }
}
function gridEightFunction(){
    if (playerOneGrid.length % 2 === 0 && gameVsPlayer === true) {
    // console.log("Player one selected grid eight.");
    gridEightValue = 8;
    playerOneGrid.push(gridEightValue);
    gameDraw.push(gridEightValue);
    document.getElementById("optionEightContent").innerText = "X";
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 !== 0 && gameVsPlayer === true) {
    // console.log("Player two selected grid eight.");
    gridEightValue = 8;
    playerTwoGrid.push(gridEightValue);
    gameDraw.push(gridEightValue);
    playerOneGrid.push(null);
    document.getElementById("optionEightContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 === 0 && gameVsComp === true) {
        gridEightValue = 8;
        playerOneGrid.push(gridEightValue);
        gameDraw.push(gridEightValue);
        let computerGridArrayIndex = computerGrid.indexOf(8);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionEightContent").innerText = "X";
        document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
        computerRandomNum ();
    } else if (playerOneGrid.length % 2 !== 0 && gameVsComp === true) {
        gridEightValue = 8;
        playerTwoGrid.push(gridEightValue);
        gameDraw.push(gridEightValue);
        playerOneGrid.push(null);
        let computerGridArrayIndex = computerGrid.indexOf(8);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionEightContent").innerText = "O";
        document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else {
            console.log("grid eight function error.")
        }
}
function gridNineFunction(){
    if (playerOneGrid.length % 2 === 0 && gameVsPlayer === true) {
    // console.log("Player one selected grid nine.");
    gridNineValue = 9;
    playerOneGrid.push(gridNineValue);
    gameDraw.push(gridNineValue);
    document.getElementById("optionNineContent").innerText = "X";
    document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 !== 0 && gameVsPlayer === true) {
    // console.log("Player two selected grid nine.");
    gridNineValue = 9;
    playerTwoGrid.push(gridNineValue);
    playerOneGrid.push(null);
    gameDraw.push(gridNineValue);
    document.getElementById("optionNineContent").innerText = "O";
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else if (playerOneGrid.length % 2 === 0 && gameVsComp === true) {
        gridNineValue = 9;
        playerOneGrid.push(gridNineValue);
        gameDraw.push(gridNineValue);
        let computerGridArrayIndex = computerGrid.indexOf(9);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionNineContent").innerText = "X";
        document.getElementById("playerTurnDisplay").className = "playerTwoTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerTwoName.value +"'s turn!";
        computerRandomNum ();
    } else if (playerOneGrid.length % 2 !== 0 && gameVsComp === true) {
        gridNineValue = 9;
        playerTwoGrid.push(gridNineValue);
        playerOneGrid.push(null);
        gameDraw.push(gridNineValue);
        let computerGridArrayIndex = computerGrid.indexOf(9);
        computerGrid.splice(computerGridArrayIndex, 1);
        document.getElementById("optionNineContent").innerText = "O";
        document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";
    } else {
        console.log("grid nine function error.")
    }
}

// PLAY GAME FUNCTION
function playGame () {
    if (gameOn === true && gameVsPlayer === true) {
        document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
        document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";

// GAME PLAY GRID LISTENERS
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

// GAME START VS COMPUTER
} else if (gameOn === true && gameVsComp === true) {
    document.getElementById("playerTurnDisplay").className = "playerOneTurnDisplay";
    document.getElementById("playerTurnDisplay").innerText = "It's " + playerOneName.value +"'s turn!";

// GAME PLAY GRID LISTENERS
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


} else {
 alert("Select a game mode!")
}}

function computerWinCheck () {
    if (playerTwoGrid.includes(1) === winGameOptOne.includes(1) && playerTwoGrid.includes(2) === winGameOptOne.includes(2) && playerTwoGrid.includes(3) === winGameOptOne.includes(3)) {
        computerWinner ();
    } else if (playerTwoGrid.includes(4) === winGameOptTwo.includes(4) && playerTwoGrid.includes(5) === winGameOptTwo.includes(5) && playerTwoGrid.includes(6) === winGameOptTwo.includes(6)) {
        computerWinner ();
    }  else if (playerTwoGrid.includes(7) === winGameOptThree.includes(7) && playerTwoGrid.includes(8) === winGameOptThree.includes(8) && playerTwoGrid.includes(9) === winGameOptThree.includes(9)) {
        computerWinner ();
    }  else if (playerTwoGrid.includes(1) === winGameOptFour.includes(1) && playerTwoGrid.includes(4) === winGameOptFour.includes(4) && playerTwoGrid.includes(7) === winGameOptFour.includes(7)) {
        computerWinner ();
    } else if (playerTwoGrid.includes(2) === winGameOptFive.includes(2) && playerTwoGrid.includes(5) === winGameOptFive.includes(5) && playerTwoGrid.includes(8) === winGameOptFive.includes(8)) {
        computerWinner ();
    } else if (playerTwoGrid.includes(3) === winGameOptSix.includes(3) && playerTwoGrid.includes(6) === winGameOptSix.includes(6) && playerTwoGrid.includes(9) === winGameOptSix.includes(9)) {
        computerWinner ();
    } else if (playerTwoGrid.includes(1) === winGameOptSeven.includes(1) && playerTwoGrid.includes(5) === winGameOptSeven.includes(5) && playerTwoGrid.includes(9) === winGameOptSeven.includes(9)) {
        computerWinner ();
    } else if (playerTwoGrid.includes(3) === winGameOptEight.includes(3) && playerTwoGrid.includes(5) === winGameOptEight.includes(5) && playerTwoGrid.includes(7) === winGameOptEight.includes(7)) {
        computerWinner ();
    }  else if (gameDraw.length === 9) {
        // console.log("The game is a draw.")
        gameResultDraw();
    } else {
    }}



// GAME RESULT: PLAYER ONE WINS
function playerOneWinner () {
    document.getElementById("gameResultContent").innerText = playerOneName.value + " wins!";
    gameOnButton.removeEventListener("click", gamePlayerVsPlayerStartFunction);
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
    document.getElementById("gameResultButton").innerText = "Play again!";
}
// GAME RESULT: PLAYER TWO WINS
function playerTwoWinner () {
    document.getElementById("gameResultContent").innerText = playerTwoName.value + " wins!";
    gameOnButton.removeEventListener("click", gamePlayerVsPlayerStartFunction);
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
    document.getElementById("gameResultButton").innerText = "Play again!";

}
// GAME RESULT: COMPUTER WINS
function computerWinner () {
    document.getElementById("gameResultContent").innerText = playerTwoName.value + " wins!";
    gameOnButton.removeEventListener("click", gamePlayerVsPlayerStartFunction);
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
    document.getElementById("playerTurnDisplay").innerText = "The " + playerTwoName.value + " isn't even real. You can win this time " + playerOneName.value +"!";
    document.getElementById("gameResultButton").innerText = "Play again!";

}
//GAME RESULT: DRAW

function gameResultDraw() {
    document.getElementById("gameResultContent").innerText = "It's a draw.";
    gameOnButton.removeEventListener("click", gamePlayerVsPlayerStartFunction);
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
    document.getElementById("gameResultButton").innerText = "Play again!";
    }