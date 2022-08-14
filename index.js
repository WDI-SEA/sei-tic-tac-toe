// APP STATE (variables)
// a variable to track whose turn it is
let playerTurn = 0
// a var for 'x' and a var for 'o'
let X = "X"
let O = "O"
let clicked = false
// a var to keep count of moves to detect cats/draw game
// gameBoard array to keep track of player moves ['x', '', 'o', 'x', '', 'o', 'x', '', '']
let gameBoard = []
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
//reset button
const resetBtn = document.getElementById("resetBtn")
const allP = document.querySelectorAll("p")
const div = document.getElementsByClassName("square")  


    
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
    // win/tie game logic in functions

    //detect a win using conditionals and comparisions 

    // if the game is won, display the winner and prevent the users from clicking more

    // if it is a cats game, display that and prevent clicks
if (playerTurn >= 9){
    gameOver = true
}
    // EVENT LISTENERS
        // click event listener(s) for player clicks

boxOne.addEventListener("click", function(e){
    if(!boxOneClick){
        if(playerTurn % 2 == 0){
        oneText.innerText = X
        } else{
            oneText.innerText = O
        }
    }
    playerTurn++
    boxOneClick = true   
    console.log(boxOneClick)
})
boxTwo.addEventListener("click", function(e){
    if(!boxTwoClick){
        if(playerTurn % 2 == 0){
        twoText.innerText = X
        } else{
            twoText.innerText = O
        }
    }
    playerTurn++
    boxTwoClick = true
})
boxThree.addEventListener("click", function(e){
    if(!boxThreeClick){
        if(playerTurn % 2 == 0){
        threeText.innerText = "X"
        } else{
            threeText.innerText = "O"
        }
    }
    playerTurn++
    boxThreeClick = true   
})
boxFour.addEventListener("click", function(e){
    if(!boxFourClick){
        if(playerTurn % 2 == 0){
        fourText.innerText = "X"
        } else{
            fourText.innerText = "O"
        }
    }
    playerTurn++
    boxFourClick = true   
})
boxFive.addEventListener("click", function(e){
    if(!boxFiveClick){
        if(playerTurn % 2 == 0){
        fiveText.innerText = "X"
        } else{
            fiveText.innerText = "O"
        }
    }
    playerTurn++
    boxFiveClick = true   
})
boxSix.addEventListener("click", function(e){
    if(!boxSixClick){
        if(playerTurn % 2 == 0){
        sixText.innerText = "X"
        } else{
            sixText.innerText = "O"
        }
    }
    playerTurn++
    boxSixClick = true
})
boxSeven.addEventListener("click", function(e){
    if(!boxSevenClick){
        if(playerTurn % 2 == 0){
        sevenText.innerText = "X"
        } else{
            sevenText.innerText = "O"
        }
    }
    playerTurn++
    boxSevenClick = true
})
boxEight.addEventListener("click", function(e){
    if(!boxEightClick){
        if(playerTurn % 2 == 0){
        eightText.innerText = "X"
        } else{
            eightText.innerText = "O"
        }
    }
    playerTurn++
    boxEightClick = true
})
boxNine.addEventListener("click", function(e){
    if(!boxNineClick){
        if(playerTurn % 2 == 0){
        nineText.innerText = "X"
        } else{
            nineText.innerText = "O"
        }
    }
    playerTurn++
    boxNineClick = true
})
            // change innertext of div to X or O
            // store the player's move in the gameBoard array
            // change to the next player's turn
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
})

