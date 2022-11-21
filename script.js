// variables
playerTurn = null;
playerTurnTally = 0;
winner= null

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

//updates whose turn it is by updating innertext
playerTurnDiv = document.getElementById('PlayerTurn')

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

//array of divs gotten with id tags
gameboard = [divOne, divTwo ,divThree, divFour, divFive, divSix, divSeven, divEight, divNine];

//array that stores innertext values of the gameboard. Will use in checkForWin function to determine if innertext values are equal
gameboardTwo = [divText1, divText2  ,divText3 , divText4 , divText5 , divText6 , divText7 , divText8 , divText9];

divOne.addEventListener('click', function(e){
    //first checks if the last player won
    console.log("this checks if win is true in EVL1 ", checkForWin())
    if(checkForWin() === true){
        playerTurnDiv.innerText = "Game is over! Reset to play again."

        //checks to make sure the value of the div is not already updated
    } else if(divOne.innerText !=='hello' && divOne.innerText !== 'X' && divOne.innerText !== 'O') {
        //updates value of div
        divOne.innerText = "hello"
        //tells the game to run. First, player turn is decided, then div values are checked for updates, then playertally is updated
        gamePlay()
    } else {
        //this means someone has clicked on a square with an X or O value already
        playerTurnDiv.innerText = "Not a valid move, please choose a square that has not already been played."
    }
})
divTwo.addEventListener('click', function(e){
    
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
        playerTurnDiv.innerText = "Player Two, it's your turn!"
    } else if(playerTurnTally %2 ===1) {
        playerTurn = 'X'
        playerTurnDiv.innerText = "Player One, it's your turn!"
    }

    //updates the innertext by checking if event listener function changed the div
    for (let i = 0; gameboard.length > i; i++) {
        if(gameboard[i].innerText =='hello') {
            //updates div display to X or O 
            gameboard[i].innerText = playerTurn;

            // check for updated values of gameboard's innertext
            gameboardTwo[i] = playerTurn;

            //Call a funciton to check if game is over/there is a winner
            // checkForWin()
        }
        // console.log("Checking gamboard 1 value", gameboard)
        // console.log("Checking gamboard 2 value", gameboardTwo)
    //We've finished the player's turn. We need to tally 

    }
    playerTurnTally ++
    console.log("Player's tally ", playerTurnTally)

    // checkForWin()
    // console.log("Check for win ", checkForWin)

}

function checkForWin () {
    console.log("Check for win is fired")

    //if 4 + turns have passed, check for winners
    if(playerTurnTally > 3 && playerTurnTally <= 9) {
    
    //functions checks if all 3 divs are equal, but does not work???
    function allEqual(div1, div2, div3) {
        if(div1 == div2 && div1 == div3) {
            console.log("checking inner text of allEqual function", div1)
            return div1
        }
    // } else {
        //     return "no winner"
        // }
    }

    //this consolelog has accurate output. But, my allEqual function is not working. Indexes are problem?
    console.log("Before checking equality in Checkforwin, check values", gameboardTwo)
    //values going in are correct

    //sends div variables into function to check if rows of divs have equal values
    rowOneWin = allEqual(gameboardTwo[0], gameboardTwo[1], gameboardTwo[2])
    console.log("these are row One values ", gameboardTwo[0], gameboardTwo
    [1], gameboardTwo[2])
    //these indexes are accurate in console log, could it be my function?

    rowTwoWin = allEqual(gameboardTwo[3], gameboardTwo[4], gameboardTwo[5])
    console.log("these are row two values ", gameboardTwo[3], gameboardTwo
    [4], gameboardTwo[5])

    rowThreeWin = allEqual(gameboardTwo[6], gameboardTwo[7], gameboardTwo[8])
    console.log("these are row three values ", gameboardTwo[6], gameboardTwo
    [7], gameboardTwo[8])
    //check if columns of divs have equal values
    vertColOne= allEqual(gameboardTwo[0], gameboardTwo[3], gameboardTwo[6])
    vertColTwo= allEqual(gameboardTwo[1], gameboardTwo[4], gameboardTwo[7])
    vertColThree= allEqual(gameboardTwo[2], gameboardTwo[5], gameboardTwo[8])
    //check if diagonals have equal values
    diagonalRightWin = allEqual(gameboardTwo[0], gameboardTwo[4], gameboardTwo[8])
    diagonalLeftWin = allEqual(gameboardTwo[2], gameboardTwo[4], gameboardTwo[6])

    //now check if equality is being checked accurately
    //will check array for returned innertext value returned from allEqual
    winScenarioArray=[
        rowOneWin,
        rowTwoWin,
        rowThreeWin,
        diagonalRightWin,
        diagonalLeftWin,
        vertColOne,
        vertColTwo,
        vertColThree]
    console.log("checking if win scenarios are returning a div value", winScenarioArray) 
        //they are not returning the value


    //checks through each win scenario. If one is true, it checks whether x or o won. 
    for(let i = 0; winScenarioArray.length > i; i++) {
        if(winScenarioArray[i] === "O"){
            console.log("This is the win scenario ", winScenarioArray[i])
            playerTurnDiv.innerText = "Game over! Player One Wins!"
            //returns true to Checkforwin function. Used in event listener if statements
            winner = 'winner'
            return true
        } else if(winScenarioArray[i] === "X") {
            playerTurnDiv.innerText = "Game over! Player Two wins!"
            //returns true to Checkforwin function. Used in event listener if statements
            winner = 'winner'
            return true
        }else {
            //will tell event listener that it can change the inner text of the next div
            return false
            }
    }
         //Checks for cats game-- checks if there's been a winner
         if(playerTurnTally === 9 &&  winner !== 'winner') {
            playerTurnDiv.innerText = "Game over! It's a cat's game 🐈‍⬛";
            }
     
            }
            

        }
    
   //Reset button
   function reset(){
    for(let i = 0; gameboard.length > i; i++) {
        gameboard[i].innerText = " "
        gameboardTwo[i] = " "
        playerTurnTally=0
    }
}