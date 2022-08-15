// APP STATE (variables)
// a variable to track whose turn it is
    // %2 = 0, or %2 = 1
let playerTurn = 0
// a var for 'x' and a var for 'o'
let X = "X"
let O = "O"
let clicked = false


// a var to keep count of moves to detect cats/draw game
// gameBoard array to keep track of player moves ['x', '', 'o', 'x', '', 'o', 'x', '', '']
let gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
// a boolean for if the game is over or not -- is the game currently happening?
let gameOver = false
//Variables for game slots
const boxOne = document.getElementById("boxOne")
const oneText = document.getElementById("oneText")
const boxTwo = document.getElementById("boxTwo")
const twoText = document.getElementById("twoText")
const boxThree = document.getElementById("boxThree")
const threeText = document.getElementById("threeText")
const boxFour = document.getElementById("boxFour")
const fourText = document.getElementById("fourText")
const boxFive = document.getElementById("boxFive")
const fiveText = document.getElementById("fiveText")
const boxSix = document.getElementById("boxSix")
const sixText = document.getElementById("sixText")
const boxSeven = document.getElementById("boxSeven")
const sevenText = document.getElementById("sevenText")
const boxEight = document.getElementById("boxEight")
const eightText = document.getElementById("eightText")
const boxNine = document.getElementById("boxNine")
const nineText = document.getElementById("nineText")
const winText = document.getElementById("winText")
const xText = document.getElementById("xScore")
const oText = document.getElementById("oScore")
//reset buttons
const resetBtn = document.getElementById("resetBtn")
const allP = document.querySelectorAll("p")
const div = document.getElementsByClassName("square")  
const scoreReset = document.getElementById("scoreReset")


    // some way to tell if a player has already clicked on a square
let boxOneClick = false
let boxTwoClick = false
let boxThreeClick = false
let boxFourClick = false
let boxFiveClick = false
let boxSixClick = false
let boxSevenClick = false
let boxEightClick = false
let boxNineClick = false
//scoreboards
let oScore = 0
let xScore = 0
    // win/tie game logic in functions
    //detect a win using conditionals and comparisions 
    // if it is a cats game, display that and prevent clicks    
    //win function
    // if the game is won, display the winner and prevent the users from clicking more
function tallyScore (i){
    if(gameBoard[i] === "X"){
        xScore++
        xText.innerText = xScore
    }else if(gameBoard[i] === "O"){
        oScore++
        oText.innerText = oScore
    }
}

function winCheck (){
    if(playerTurn >= 9){
        gameOver = true
        winText.innerText = "Cat's game! Play again to find a winner."
    }
    if(gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2]){
        gameOver = true
        winText.innerText = gameBoard[0] + "'s win! Click Reset to try again!"
        tallyScore(0)
    }else if(gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6]){
        gameOver = true
        winText.innerText = gameBoard[0] + "'s win! Click Reset to try again!"
        tallyScore(0)
    }else if(gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8]){
        gameOver = true
        winText.innerText = gameBoard[0] + "'s win! Click Reset to try again!"
        tallyScore(0)
    }else if(gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7]){
        gameOver = true
        winText.innerText = gameBoard[1] + "'s win! Click Reset to try again!"
        tallyScore(1)
    }else if(gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8]){
        gameOver = true
        winText.innerText = gameBoard[2] + "'s win! Click Reset to try again!"
        tallyScore(2)
    }else if(gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6]){
        gameOver = true
        winText.innerText = gameBoard[2] + "'s win! Click Reset to try again!"
        tallyScore(2)
    }else if(gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5]){
        gameOver = true
        winText.innerText = gameBoard[3] + "'s win! Click Reset to try again!"
        tallyScore(3)
    }else if(gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8]){
        gameOver = true
        winText.innerText = gameBoard[6] + "'s win! Click Reset to try again!"
        tallyScore(6)
    }
    playerTurn++
}

// EVENT LISTENERS

boxOne.addEventListener("click", function(e){
    if(!boxOneClick && !gameOver){
        if(playerTurn % 2 == 0){
        oneText.innerText = X
        } else{
            oneText.innerText = O
        }    
    boxOneClick = true   
    gameBoard.splice(0, 1, oneText.innerText)
    winCheck()
    }
})
boxTwo.addEventListener("click", function(e){
    if(!boxTwoClick  && !gameOver){
        if(playerTurn % 2 == 0){
            twoText.innerText = X
        } else{
            twoText.innerText = O
        }
    boxTwoClick = true
    gameBoard.splice(1, 1, twoText.innerText)
    winCheck()
    }
})
boxThree.addEventListener("click", function(e){
    if(!boxThreeClick && !gameOver){
        if(playerTurn % 2 == 0){
        threeText.innerText = X
        } else{
            threeText.innerText = O
        }    
    boxThreeClick = true 
    gameBoard.splice(2, 1, threeText.innerText)
    winCheck() 
    }
  
})
boxFour.addEventListener("click", function(e){
    if(!boxFourClick && !gameOver){
        if(playerTurn % 2 == 0){
        fourText.innerText = X
        } else{
            fourText.innerText = O
        }
    boxFourClick = true
    gameBoard.splice(3, 1, fourText.innerText)
    winCheck ()
    } 
})
boxFive.addEventListener("click", function(e){
    if(!boxFiveClick && !gameOver){
        if(playerTurn % 2 == 0){
        fiveText.innerText = X
        } else{
            fiveText.innerText = O
        }   
    boxFiveClick = true 
    gameBoard.splice(4, 1, fiveText.innerText)
    winCheck() 
    }
})
boxSix.addEventListener("click", function(e){
    if(!boxSixClick && !gameOver){
        if(playerTurn % 2 == 0){
        sixText.innerText = X
        } else{
            sixText.innerText = O
        }    
    boxSixClick = true
    gameBoard.splice(5, 1, sixText.innerText)
    winCheck() 
    }
})
boxSeven.addEventListener("click", function(e){
    if(!boxSevenClick && !gameOver){
        if(playerTurn % 2 == 0){
        sevenText.innerText = X
        } else{
            sevenText.innerText = O
        }    
    boxSevenClick = true
    gameBoard.splice(6, 1, sevenText.innerText)
    winCheck() 
    }
})
boxEight.addEventListener("click", function(e){
    if(!boxEightClick && !gameOver){
        if(playerTurn % 2 == 0){
        eightText.innerText = X
        } else{
            eightText.innerText = O
        }
    boxEightClick = true
    gameBoard.splice(7, 1, eightText.innerText)
    winCheck() 
    }
})
boxNine.addEventListener("click", function(e){
    if(!boxNineClick && !gameOver){
        if(playerTurn % 2 == 0){
        nineText.innerText = X
        } else{
            nineText.innerText = O
        }  
    boxNineClick = true
    gameBoard.splice(8, 1, nineText.innerText)
    winCheck() 
    }
})
            // --change innertext of div to X or O
            // --store the player's move in the gameBoard array
            // --change to the next player's turn
            // check for a win -- calling a win condition function/doing all the win logic
    // click event to clear/reset the board
resetBtn.addEventListener("click", function(e){
    oneText.innerText = ""
    twoText.innerText = ""
    threeText.innerText = ""
    fourText.innerText = ""
    fiveText.innerText = ""
    sixText.innerText = ""
    sevenText.innerText = ""
    eightText.innerText = ""
    nineText.innerText = ""
    boxOneClick = false
    boxTwoClick = false
    boxThreeClick = false
    boxFourClick = false
    boxFiveClick = false
    boxSixClick = false
    boxSevenClick = false
    boxEightClick = false
    boxNineClick = false
    gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    winText.innerText = ""
    playerTurn = 0
    gameOver = false
})
scoreReset.addEventListener("click", function(e){
    xScore = 0
    oScore = 0
    xText.innerText = ""
    oText.innerText = ""
})