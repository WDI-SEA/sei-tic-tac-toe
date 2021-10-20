let currentPlayerIsX = true;
let announcer = document.getElementById("announcer")
let gameActive = true;



// function that checks for a winner by comparing current board to winning selections
const checkForWinner = () => {
    // Checks board for tiles with innerText of X
    if(tileOne.innerText == "X" && tileTwo.innerText == "X" && tileThree.innerText == "X"){
        announcer.innerText = "PLAYER X WON!"
        gameActive = false;
    } else if(tileOne.innerText == "X" && tileFour.innerText == "X" && tileSeven.innerText == "X") {
        announcer.innerText = "PLAYER X WON!"
        gameActive = false;
    } else if(tileTwo.innerText == "X" && tileFive.innerText == "X" && tileEight.innerText == "X") {
        announcer.innerText = "PLAYER X WON!"
        gameActive = false;
    } else if(tileThree.innerText == "X" && tileSix.innerText == "X" && tileNine.innerText == "X") {
        announcer.innerText = "PLAYER X WON!"
        gameActive = false;
    } else if(tileThree.innerText == "X" && tileFive.innerText == "X" && tileSeven.innerText == "X") {
        announcer.innerText = "PLAYER X WON!"
        gameActive = false;
    } else if(tileSeven.innerText == "X" && tileEight.innerText == "X" && tileNine.innerText == "X") {
        announcer.innerText = "PLAYER X WON!"
        gameActive = false;
    }  else if(tileOne.innerText == "X" && tileFive.innerText == "X" && tileNine.innerText == "X") {
        announcer.innerText = "PLAYER X WON!"
        gameActive = false;
    }  else if(tileFour.innerText == "X" && tileFive.innerText == "X" && tileSix.innerText == "X") {
        announcer.innerText = "PLAYER X WON!"
        gameActive = false;
    }   // else if block that checks for O winning conditions
        else if(tileThree.innerText == "O" && tileFive.innerText == "O" && tileSeven.innerText == "O") {
            announcer.innerText = "PLAYER O WON!"
            gameActive = false;
        }   else if(tileOne.innerText == "O" && tileTwo.innerText == "O" && tileThree.innerText == "O") {
            announcer.innerText = "PLAYER O WON!"
            gameActive = false;
        }   else if(tileFour.innerText == "O" && tileFive.innerText == "O" && tileSix.innerText == "O") {
            announcer.innerText = "PLAYER O WON!"
            gameActive = false;
        }   else if(tileSeven.innerText == "O" && tileEight.innerText == "O" && tileNine.innerText == "O") {
            announcer.innerText = "PLAYER O WON!"
            gameActive = false;
        }   else if(tileOne.innerText == "O" && tileFive.innerText == "O" && tileNine.innerText == "O") {
            announcer.innerText = "PLAYER O WON!"
            gameActive = false;
        }   else if(tileOne.innerText == "O" && tileTwo.innerText == "O" && tileThree.innerText == "O") {
            announcer.innerText = "PLAYER O WON!"
            gameActive = false;
        }   else if(tileTwo.innerText == "O" && tileFive.innerText == "O" && tileEight.innerText == "O") {
            announcer.innerText = "PLAYER O WON!"
            gameActive = false;
        }   else if(tileThree.innerText == "O" && tileSix.innerText == "O" && tileNine.innerText == "O") {
            announcer.innerText = "PLAYER O WON!"
            gameActive = false;
        }
}

// function to reset board on click of reset button
const resetButton = () => {
    tileOne.innerText = "";
    tileTwo.innerText = "";
    tileThree.innerText = "";
    tileFour.innerText = "";
    tileFive.innerText = "";
    tileSix.innerText = "";
    tileSeven.innerText = "";
    tileEight.innerText = "";
    tileNine.innerText = "";
    currentPlayerIsX = true
    announcer.innerText = "Player X goes first!"
    turnCount = 0
    gameActive = true;
}
let turnCount = 0
// function that checks for tie 
const isTie = () => {
    if(turnCount == 8){
        announcer.innerText = "Cats game! Its a tie!"
    } else {
        turnCount++
    }

}


// function that gets called when clickevent happens to a tile, also allows tiles to only be clicked once
const playerMove = (e) => {
    
    let tileClick = e.target
    if(currentPlayerIsX && tileClick.innerText == "" && gameActive){
    tileClick.innerText = "X"
    announcer.innerText = "Player O turn"
    currentPlayerIsX = false;
    checkForWinner()
    isTie()
    
    } else if(tileClick.innerText == "" && gameActive) {
    tileClick.innerText = "O"
    announcer.innerText = "Player X turn"
    currentPlayerIsX = true;
    checkForWinner()
    isTie()
        
        
    }
    
    
    
}

//grabs all the tiles 1-9 allowing maniupulation via JS
let tileOne = document.getElementById("tile1") 
let tileTwo = document.getElementById("tile2")
let tileThree = document.getElementById("tile3")
let tileFour = document.getElementById("tile4") 
let tileFive = document.getElementById("tile5")
let tileSix = document.getElementById("tile6") 
let tileSeven = document.getElementById("tile7") 
let tileEight = document.getElementById("tile8")
let tileNine = document.getElementById("tile9") 

// adds eventlisteners to all the tiles and executes playerMove upon click
tileOne.addEventListener('click', playerMove)
tileTwo.addEventListener('click', playerMove)
tileThree.addEventListener('click', playerMove)
tileFour.addEventListener('click', playerMove)
tileFive.addEventListener('click', playerMove)
tileSix.addEventListener('click', playerMove)
tileSeven.addEventListener('click', playerMove)
tileEight.addEventListener('click', playerMove)
tileNine.addEventListener('click', playerMove)
document.getElementById("reset").addEventListener('click', resetButton)

