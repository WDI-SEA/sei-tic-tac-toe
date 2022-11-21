// variables
playerTurn = null;
playerTurnTally = 0;
computerTurn = null;

//function for computer's turn
function computerEvent() {

}

//variables for event listeners
divOne= document.getElementById('divOneR1')
divTwo = document.getElementById('divTwoR1')
divThree = document.getElementById('divThreeR1')
divFour = document.getElementById('divOneR2')
divFive = document.getElementById('divTwoR2')
divSix = document.getElementById('divThreeR2')
divSeven = document.getElementById('divOneR3')
divEight = document.getElementById('divTwoR3')
divNine = document.getElementById('divThreeR3')

//assigns a variable the value of the innerText of a div
divText1 = divOne.innerText
divText2 = divTwo.innerText 
divText3 = divThree.innerText 
divText4 = divFour.innerText 
divText5 = divFive.innerText 
divText6 = divSix.innerText 
divText7 = divSeven.innerText 
divText8 = divEight.innerText
divText9 = divNine.innerText 

//array of divs gotten with id tags (used with event listeners)
gameboard = [divOne, divTwo ,divThree, divFour, divFive, divSix, divSeven, divEight, divNine];

//array that stores innertext values of the gameboard. Will use in checkForWin function to determine if innertext values are equal
gameboardTwo = [divText1, divText2  ,divText3 , divText4 , divText5 , divText6 , divText7 , divText8 , divText9];

//add event listeners
//check if game is over
//assign a value to the gameboard if it doesn't have one
//otherwise, it's not a valid move
//don't think I can call a separate function because specific inner text values must be updated within the function

divOne.addEventListener('click', function(e){
    if(checkForWin() === true){
        document.getElementById('PlayerTurn').innerText = "Game is over! Reset to play again."
    } else if(divOne.innerText !=='hello' && divOne.innerText !== 'X' && divOne.innerText !== 'O') {
        divOne.innerText = "hello"
        gamePlay()
    } else {
        document.getElementById('PlayerTurn').innerText = "Not a valid move, please choose a square that has not already been played."
    }
})
divTwo.addEventListener('click', function(e){
    checkForWin()
    if(checkForWin() === true){
        document.getElementById('PlayerTurn').innerText = "Game is over! Reset to play again."
    } else if(divTwo.innerText !=='hello' && divTwo.innerText !== 'X' && divTwo.innerText !== 'O') {
        divTwo.innerText = "hello"
        gamePlay()
    } else {
        document.getElementById('PlayerTurn').innerText = "Not a valid move, please choose a square that has not already been played."
    }
})
divThree.addEventListener('click', function(e){
    checkForWin()
    if(checkForWin() === true){
        document.getElementById('PlayerTurn').innerText = "Game is over! Reset to play again."
    } else if(divThree.innerText !=='hello' && divThree.innerText !== 'X' && divThree.innerText !== 'O') {
        divThree.innerText = "hello"
        gamePlay()
    } else {
        document.getElementById('PlayerTurn').innerText = "Not a valid move, please choose a square that has not already been played."
    }
})
divFour.addEventListener('click', function(e){
    checkForWin()
    if(checkForWin() === true){
        document.getElementById('PlayerTurn').innerText = "Game is over! Reset to play again."
    } else if(divFour.innerText !=='hello' && divFour.innerText !== 'X' && divFour.innerText !== 'O') {
        divFour.innerText = "hello"
        gamePlay()
    } else {
        document.getElementById('PlayerTurn').innerText = "Not a valid move, please choose a square that has not already been played."
    }
})
divFive.addEventListener('click', function(e){
    checkForWin()
    if(checkForWin() === true){
        document.getElementById('PlayerTurn').innerText = "Game is over! Reset to play again."
    } else if(divFive.innerText !=='hello' && divFive.innerText !== 'X' && divFive.innerText !== 'O') {
        divFive.innerText = "hello"
        gamePlay()
    } else {
        document.getElementById('PlayerTurn').innerText = "Not a valid move, please choose a square that has not already been played."
    }
})
divSix.addEventListener('click', function(e){
    checkForWin()
    if(checkForWin() === true){
        document.getElementById('PlayerTurn').innerText = "Game is over! Reset to play again."
    } else if(divSix.innerText !=='hello' && divSix.innerText !== 'X' && divSix.innerText !== 'O') {
        divSix.innerText = "hello"
        gamePlay()
    } else {
        document.getElementById('PlayerTurn').innerText = "Not a valid move, please choose a square that has not already been played."
    }
})
divSeven.addEventListener('click', function(e){
    checkForWin()
    if(checkForWin() === true){
        document.getElementById('PlayerTurn').innerText = "Game is over! Reset to play again."
    } else if(divSeven.innerText !=='hello' && divSeven.innerText !== 'X' && divSeven.innerText !== 'O') {
        divSeven.innerText = "hello"
        gamePlay()
    } else {
        document.getElementById('PlayerTurn').innerText = "Not a valid move, please choose a square that has not already been played."
    }
})
divEight.addEventListener('click', function(e){
    checkForWin()
    if(checkForWin() === true){
        document.getElementById('PlayerTurn').innerText = "Game is over! Reset to play again."
    } else if(divEight.innerText !=='hello' && divEight.innerText !== 'X' && divEight.innerText !== 'O') {
        divEight.innerText = "hello"
        gamePlay()
    } else {
        document.getElementById('PlayerTurn').innerText = "Not a valid move, please choose a square that has not already been played."
    }
})
divNine.addEventListener('click', function(e){
    checkForWin()
    if(checkForWin() === true){
        document.getElementById('PlayerTurn').innerText = "Game is over! Reset to play again."
    } else if(divNine.innerText !=='hello' && divNine.innerText !== 'X' && divNine.innerText !== 'O') {
        divNine.innerText = "hello"
        gamePlay()
    } else {
        document.getElementById('PlayerTurn').innerText = "Not a valid move, please choose a square that has not already been played."
    }
})


//function to be called when game played
function gamePlay() {
        //Decides whose turn it is by even or odd
        if (playerTurnTally % 2 === 0) {
            playerTurn = 'O'
            document.getElementById('PlayerTurn').innerText = "Player Two, it's your turn!"
        } else if(playerTurnTally %2 ===1) {
            playerTurn = 'X'
            document.getElementById('PlayerTurn').innerText = "Player One, it's your turn!"
        }
        //for statement to check if array was changed to 'Hello, and update with playerTurn (X or O), updates innertext of gameboard(refers to getElement.. tags, used to call EventListeners) and gameboardTwo(refers to innerText of gameboard, used to checkForWin)
        for (let i = 0; gameboard.length > i; i++) {
            if(gameboard[i].innerText =='hello') {
                //updates div display to X or O 
                gameboard[i].innerText = playerTurn;

                // check for updated values of gameboard's innertext
                gameboardTwo[i] = playerTurn;

                //Call a funciton to check if game is over/there is a winner
                checkForWin()
            }
        }

        //tallies amount of turns played
        playerTurnTally ++

        //this should check if there are too many turns played, if so, game is over
            if(playerTurnTally === 9 && checkForWin() != true) {
            document.getElementById('PlayerTurn').innerText = "Game over! It's a cat's game 🐈‍⬛";
            }
        return playerTurnTally
    }

    //this function checks if there's been a winner, if there is, the game stops (event listeners are checking for player win)
    function checkForWin () {
        
        //if 3 turns have passed, check for winners
        if(playerTurnTally > 3) {

            //Function which defines allEqual and returns true or false if values are equal
            function allEqual(div1, div2, div3) {
                if(div1 === div2 && div1 === div3) {
                    return true
                } else{
                    return false
                }
            }

            //WIN SCENARIOS
            //checks if rows/diagonals/verticals have equal values (inner text comparison from innertext array)
            rowOneWin = allEqual(gameboardTwo[0], gameboardTwo[1], gameboardTwo[2])
            rowTwoWin = allEqual(gameboardTwo[3], gameboardTwo[4], gameboardTwo[5])
            rowThreeWin = allEqual(gameboardTwo[6], gameboardTwo[7], gameboardTwo[8])
            diagonalRightWin = allEqual(gameboardTwo[0], gameboardTwo[4], gameboardTwo[8])
            diagonalLeftWin = allEqual(gameboardTwo[2], gameboardTwo[4], gameboardTwo[6])
            vertColOne= allEqual(gameboardTwo[0], gameboardTwo[3], gameboardTwo[6])
            vertColTwo= allEqual(gameboardTwo[1], gameboardTwo[4], gameboardTwo[7])
            vertColThree= allEqual(gameboardTwo[2], gameboardTwo[5], gameboardTwo[8])

            //function that checks each scenario for win, then checks X or O win
            function winner(winScenario, div) {
                if (winScenario === true)
                    if(div === 'O') {
                        document.getElementById('PlayerTurn').innerText = "Game over! Player One Wins!"
                    } else {
                        document.getElementById('PlayerTurn').innerText = "Game over! Player Two wins!"
                    }
                    return true
            }
            winner(rowOneWin, gameboardTwo[0])
            winner(rowTwoWin, gameboardTwo[3])
            winner(rowThreeWin, gameboardTwo[6])
            winner(diagonalRightWin, gameboardTwo[0])
            winner(diagonalLeftWin , gameboardTwo[2])
            winner(vertColOne, gameboardTwo[0])
            winner(vertColTwo, gameboardTwo[1])
            winner(vertColThree, gameboardTwo[2])
    }
    //the value of Check forWin(parent function) is set to true
    if(winner === true) {
        return true
    }
 }

    //Reset button
    function reset(){
        for(let i = 0; gameboard.length > i; i++) {
            gameboard[i].innerText = " "
        }
    }
    resetButton = document.getElementById('reset')
    console.log(resetButton)
    resetButton.addEventListener('click', reset)
