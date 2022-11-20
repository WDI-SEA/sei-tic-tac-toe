// we need to keep track of the gameboard in javascript
    // a way to index squares -- that correlates to the arrays
    // a way to make the x's and o's stick
    // use an array to keep track of the x's and o's on the gameboard
    // (option 1: 1d array) ['x', '', '', '', '', '', '', '', ''] 
    // (option 2: trickier 2d array):
    // [
    //     ['x', '', ''],
    //     ['o', 'x', ''],
    //     ['o', '', 'x']
    // ]
    // array[0][0] -- accessing a 2d array
// a way to alternate players
    // a varaible that tracks whose turn it currently is -- this would start off as 'x'
// a varaible that tracks if the game is running or not
    // let isRunning = true 
// event listeners --clicking on the divs and making the x's or o's appear
    // when a square is clicked, do the following:
        // first check if that spot in the array is empty and that isRunning is true, if so, do the following:
            // we make an x or o appear -- as simple as setting the inner text
            // check if a win has occured  
                // check all 8 win cases for 'x' and for 'o'
                // cats games could check if all spaces are filled (verbose) OR
                // have a varaible that increments every turn and call a cats game at 9 if no body has won
                // if the game is won or a cats game occurs -- set isRunning to false
                    // other ways to check out that might be good to end the game 
                    // if game is won -- we could remove the gameboard from the DOM 
                    // or you could fill up the array spaces
                    // delete a class to prevent listeners from firing
            // alternate players if a win did not occur by changing the varaible that tracks whose turn it currently is
            // increment the turn counter to move closer to the cats condition


//*************************************************************

//STARTING GAME VARIABLES

let isRunning = true;
let currentPlayer = "X";
let turnCount = 0;

//EVENT VARIABLES FROM HTML

const spcOne = document.getElementById("one");
const spcTwo = document.getElementById("two");
const spcThree = document.getElementById("three");
const spcFour = document.getElementById("four");
const spcFive = document.getElementById("five");
const spcSix= document.getElementById("six");
const spcSeven = document.getElementById("seven");
const spcEight = document.getElementById("eight");
const spcNine = document.getElementById("nine");

const stsMessage = document.getElementById("status-msg");
const theSquares = document.getElementsByClassName("squares");
const resetButton = document.getElementById("reset"); 

//EVENT LISTENERS WITH ONGOING GAME LOGIC

spcOne.addEventListener("click", function() {
    //console.log("clicked space one");
    if(spcOne.innerText == "__" && isRunning == true && currentPlayer == "X") {
        spcOne.innerText = "X";
        turnCount++;
        currentPlayer = "O";
        stsMessage.innerText = "Player 2: It's your turn!";
    }
    else if (spcOne.innerText == "__" && isRunning == true && currentPlayer == "O") {
        spcOne.innerText = "O";
        turnCount++;
        currentPlayer = "X";
        stsMessage.innerText = "Player 1: It's your turn!";
    }
    else {
        stsMessage.innerText = "That space is already taken!";
    }
    //CALL FUNCTION TO CHECK FOR WINNER AND UPDATE GAME VARIABLES 
    endOfGame(); 
})

spcTwo.addEventListener("click", function() {
    if(spcTwo.innerText == "__" && isRunning == true && currentPlayer == "X") {
        spcTwo.innerText = "X";
        turnCount++;
        currentPlayer = "O";
        stsMessage.innerText = "Player 2: It's your turn!";
    }
    else if (spcTwo.innerText == "__" && isRunning == true && currentPlayer == "O") {
        spcTwo.innerText = "O";
        turnCount++;
        currentPlayer = "X";
        stsMessage.innerText = "Player 1: It's your turn!";
    }
    else {
        stsMessage.innerText = "That space is already taken!";
    }
    //CALL FUNCTION TO CHECK FOR WINNER AND UPDATE GAME VARIABLES 
})

spcThree.addEventListener("click", function() {
    if(spcThree.innerText == "__" && isRunning == true && currentPlayer == "X") {
        spcThree.innerText = "X";
        turnCount++;
        currentPlayer = "O";
        stsMessage.innerText = "Player 2: It's your turn!";
    }
    else if (spcThree.innerText == "__" && isRunning == true && currentPlayer == "O") {
        spcThree.innerText = "O";
        turnCount++;
        currentPlayer = "X";
        stsMessage.innerText = "Player 1: It's your turn!";
    }
    else {
        stsMessage.innerText = "That space is already taken!";
    }
    endOfGame(); 
})

spcFour.addEventListener("click", function() {
    if(spcFour.innerText == "__" && isRunning == true && currentPlayer == "X") {
        spcFour.innerText = "X";
        turnCount++;
        currentPlayer = "O";
        stsMessage.innerText = "Player 2: It's your turn!";
    }
    else if (spcFour.innerText == "__" && isRunning == true && currentPlayer == "O") {
        spcFour.innerText = "O";
        turnCount++;
        currentPlayer = "X";
        stsMessage.innerText = "Player 1: It's your turn!";
    }
    else {
        stsMessage.innerText = "That space is already taken!";
    }
    endOfGame(); 
})

spcFive.addEventListener("click", function() {
    if(spcFive.innerText == "__" && isRunning == true && currentPlayer == "X") {
        spcFive.innerText = "X";
        turnCount++;
        currentPlayer = "O";
        stsMessage.innerText = "Player 2: It's your turn!";
    }
    else if (spcFive.innerText == "__" && isRunning == true && currentPlayer == "O") {
        spcFive.innerText = "O";
        turnCount++;
        currentPlayer = "X";
        stsMessage.innerText = "Player 1: It's your turn!";
    }
    else {
        stsMessage.innerText = "That space is already taken!";
    }
    endOfGame(); 
})

spcSix.addEventListener("click", function() {
    if(spcSix.innerText == "__" && isRunning == true && currentPlayer == "X") {
        spcSix.innerText = "X";
        turnCount++;
        currentPlayer = "O";
        stsMessage.innerText = "Player 2: It's your turn!";
    }
    else if (spcSix.innerText == "__" && isRunning == true && currentPlayer == "O") {
        spcSix.innerText = "O";
        turnCount++;
        currentPlayer = "X";
        stsMessage.innerText = "Player 1: It's your turn!";
    }
    else {
        stsMessage.innerText = "That space is already taken!";
    }
    endOfGame(); 
})

spcSeven.addEventListener("click", function() {
    if(spcSeven.innerText == "__" && isRunning == true && currentPlayer == "X") {
        spcSeven.innerText = "X";
        turnCount++;
        currentPlayer = "O";
        stsMessage.innerText = "Player 2: It's your turn!";
    }
    else if (spcSeven.innerText == "__" && isRunning == true && currentPlayer == "O") {
        spcSeven.innerText = "O";
        turnCount++;
        currentPlayer = "X";
        stsMessage.innerText = "Player 1: It's your turn!";
    }
    else {
        stsMessage.innerText = "That space is already taken!";
    }
    endOfGame(); 
})

spcEight.addEventListener("click", function() {
    if(spcEight.innerText == "__" && isRunning == true && currentPlayer == "X") {
        spcEight.innerText = "X";
        turnCount++;
        currentPlayer = "O";
        stsMessage.innerText = "Player 2: It's your turn!";
    }
    else if (spcEight.innerText == "__" && isRunning == true && currentPlayer == "O") {
        spcEight.innerText = "O";
        turnCount++;
        currentPlayer = "X";
        stsMessage.innerText = "Player 1: It's your turn!";
    }
    else {
        stsMessage.innerText = "That space is already taken!";
    }
    endOfGame(); 
})

spcNine.addEventListener("click", function() {
    if(spcNine.innerText == "__" && isRunning == true && currentPlayer == "X") {
        spcNine.innerText = "X";
        turnCount++;
        currentPlayer = "O";
        stsMessage.innerText = "Player 2: It's your turn!";
    }
    else if (spcNine.innerText == "__" && isRunning == true && currentPlayer == "O") {
        spcNine.innerText = "O";
        turnCount++;
        currentPlayer = "X";
        stsMessage.innerText = "Player 1: It's your turn!";
    }
    else {
        stsMessage.innerText = "That space is already taken!";
    }
    endOfGame(); 
})

//RESET THE BOARD ON BUTTON CLICK

resetButton.addEventListener("click", function() {
    spcOne.innerText = "__";
    spcTwo.innerText = "__";
    spcThree.innerText = "__";
    spcFour.innerText = "__";
    spcFive.innerText = "__";
    spcSix.innerText = "__";
    spcSeven.innerText = "__";
    spcEight.innerText = "__";
    spcNine.innerText = "__";
    stsMessage.innerText = "Player 1: Click on an open space!"
    isRunning = true;
    currentPlayer = "X";
    turnCount = 0;
})


//FUNCTION TO CHECK FOR WINNER

function endOfGame() {
    if((spcOne.innerText == "X" && spcTwo.innerText == "X" && spcThree.innerText == "X") || (spcFour.innerText == "X" && spcFive.innerText == "X" && spcSix.innerText == "X") || (spcSeven.innerText == "X" && spcEight.innerText == "X" && spcNine.innerText == "X") || (spcOne.innerText == "X" && spcFour.innerText == "X" && spcSeven.innerText == "X") || (spcTwo.innerText == "X" && spcFive.innerText == "X" && spcEight.innerText == "X") || (spcThree.innerText == "X" && spcSix.innerText == "X" && spcNine.innerText == "X") || (spcOne.innerText == "X" && spcFive.innerText == "X" && spcNine.innerText == "X") || (spcSeven.innerText == "X" && spcFive.innerText == "X" && spcThree.innerText == "X")) {
        stsMessage.innerText = "Player 1 wins!";
        isRunning = false; 
    }
    else if((spcOne.innerText == "O" && spcTwo.innerText == "O" && spcThree.innerText == "O") || (spcFour.innerText == "O" && spcFive.innerText == "O" && spcSix.innerText == "O") || (spcSeven.innerText == "O" && spcEight.innerText == "O" && spcNine.innerText == "O") || (spcOne.innerText == "O" && spcFour.innerText == "O" && spcSeven.innerText == "O") || (spcTwo.innerText == "O" && spcFive.innerText == "O" && spcEight.innerText == "O") || (spcThree.innerText == "O" && spcSix.innerText == "O" && spcNine.innerText == "O") || (spcOne.innerText == "O" && spcFive.innerText == "O" && spcNine.innerText == "O") || (spcSeven.innerText == "O" && spcFive.innerText == "O" && spcThree.innerText == "O")) {
        stsMessage.innerText = "Player 2 wins!";
        isRunning = false; 
    }
    else if(turnCount == 9) {
        stsMessage.innerText = "It's a cat's game!  Try again!"
    }

}