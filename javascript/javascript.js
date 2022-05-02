//interactions with dom elements to add X's, O's and the final result 
console.log('js is linked')

//grab each square 
const squareOne = document.querySelector('#square-one')
const squareTwo = document.querySelector('#square-two')
const squareThree = document.querySelector('#square-three')
const squareFour = document.querySelector('#square-four')
const squareFive = document.querySelector('#square-five')
const squareSix = document.querySelector('#square-six')
const squareSeven = document.querySelector('#square-seven')
const squareEight = document.querySelector('#square-eight')
const squareNine = document.querySelector('#square-nine')

// clicking on one of theses squares will result in the placement of an X or O
// the X or O will be placed here: 
const squareOneTurn = squareOne.querySelector('.turn-effect')
const squareTwoTurn = squareTwo.querySelector('.turn-effect')
const squareThreeTurn = squareThree.querySelector('.turn-effect')
const squareFourTurn = squareFour.querySelector('.turn-effect')
const squareFiveTurn = squareFive.querySelector('.turn-effect')
const squareSixTurn = squareSix.querySelector('.turn-effect')
const squareSevenTurn = squareSeven.querySelector('.turn-effect')
const squareEightTurn = squareEight.querySelector('.turn-effect')
const squareNineTurn = squareNine.querySelector('.turn-effect')

// //create an array to represent the grid.
// const grid = [
// '','','',           // 1 2 3 
// '','','',           // 4 5 6 
// '','',''            // 7 8 9 
// ]


//add a turn variable 
// add a game status boolean
//Bonus: add a mode with a bot (easy)

let gameStatus = true
let easyBot = false
//turn variable (we will increment every time a turn occurs)
let turn = 0


//function to determine if turn is odd(X goes) or even (O goes)
const whosTurn = function() {
    if (turn % 2 ===0) {
        return "X"
    } else {
        return "O"
    }
}
// need a data collection of win conditions (three in a row) 
// we will check for the given square that is clicked. 
const checkWinCon = function() {
    const grid = [
        squareOneTurn.innerHTML , squareTwoTurn.innerHTML, squareThreeTurn.innerHTML,       // 0 1 2 
        squareFourTurn.innerHTML, squareFiveTurn.innerHTML, squareSixTurn.innerHTML,        // 3 4 5 
        squareSevenTurn.innerHTML, squareEightTurn.innerHTML, squareNineTurn.innerHTML      // 6 7 8 
    ]
    //now win conditions
    // 012 048 036
    // 147 345 246 258 678
    if (grid[0] === "X" && grid[1] === "X" && grid[2] ==="X" || 
        grid[0] ==="X" && grid[4] ==="X" && grid[8] ==="X" ||
        grid[0] ==="X" && grid[3]==="X" && grid[6]==="X" ||
        grid[1] ==="X" && grid[4]==="X" && grid[7]==="X" ||
        grid[3] ==="X" && grid[4]==="X" && grid[5]==="X" ||
        grid[2] ==="X" && grid[4]==="X" && grid[6]==="X" ||
        grid[2] ==="X" && grid[5]==="X" && grid[8]==="X" ||
        grid[6] ==="X" && grid[7]==="X" && grid[8]==="X") {
            document.querySelector('#turn-var').innerHTML = "X has won the game!"
            document.querySelector('#turn-var').classList.add('game-over')
            gameStatus=false
        }
    else if (grid[0] === "O" && grid[1] === "O" && grid[2] ==="O" || 
    grid[0] ==="O" && grid[4] ==="O" && grid[8] ==="O" ||
    grid[0] ==="O" && grid[3]==="O" && grid[6]==="O" ||
    grid[1] ==="O" && grid[4]==="O" && grid[7]==="O" ||
    grid[3] ==="O" && grid[4]==="O" && grid[5]==="O" ||
    grid[2] ==="O" && grid[4]==="O" && grid[6]==="O" ||
    grid[2] ==="O" && grid[5]==="O" && grid[8]==="O" ||
    grid[6] ==="O" && grid[7]==="O" && grid[8]==="O") {
        if (easyBot) {
            document.querySelector('#turn-var').innerHTML = "The CPU has won the game!"
        }
        else {
            document.querySelector('#turn-var').innerHTML = "O has won the game!"
        }

        document.querySelector('#turn-var').classList.add('game-over')
        gameStatus=false
    } 
    // catgame element draw
    else if (turn===8) {
        document.querySelector('h2').innerHTML = "Draw."
        document.querySelector('#turn-var').classList.add('game-over')
        gameStatus = false
    }
    else {
        gameStatus = true
    }
}
// function to add X or O, check win or draw conditions, pass turn to bot if necessary 
const test = function(square) {
    if (gameStatus) {
        if (square.innerHTML==="") {
            square.innerHTML = whosTurn()
            checkWinCon()
            turn++
            if (gameStatus) {
                document.querySelector('#turn-var').innerHTML = `${whosTurn()}'s TURN`    
                // if player vs CPU is chosen, prevent player from clicking again until cpu goes
                //include cpu mode that plays after 2 seconds. 
                if (easyBot) {
                    setTimeout(easyBotLogic, 1200)
                    document.querySelector('#turn-var').innerHTML = `Computer's TURN`
                    checkWinCon()
                }
            }
            
        }
        else {
            alert("You cannot play on an already occupied space")
        }
    } else {
        alert('The game is already over. Reset to play again.')
    }
}

//add event listeners for each square, choose to add X or O 
squareOne.addEventListener('click', () => {
        test(squareOneTurn)
})
squareTwo.addEventListener('click', () => {
    test(squareTwoTurn)
})
squareThree.addEventListener('click', () => {
    test(squareThreeTurn)
})
squareFour.addEventListener('click', () => {
    test(squareFourTurn)
})
squareFive.addEventListener('click', () => {
    test(squareFiveTurn)
})
squareSix.addEventListener('click', () => {
    test(squareSixTurn)
})
squareSeven.addEventListener('click', () => {
    test(squareSevenTurn)
})
squareEight.addEventListener('click', () => {
    test(squareEightTurn)
})
squareNine.addEventListener('click', () => {
    test(squareNineTurn)
})


//reset functionality
document.querySelector('#reset-button').addEventListener('click', function() {
    for(let i=0; i<9; i++) {
        document.querySelectorAll('.turn-effect')[i].innerHTML = ''
        gameStatus = true
        document.querySelector('#turn-var').innerHTML = 'Choose Gamemode'  
    }
    gameStatus = true
    easyBot = false
    turn = 0
    document.querySelector('#turn-var').classList.remove('game-over')
})
