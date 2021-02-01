// Is it linked
// const helloWorld = () => {
//     console.log('Hello');
// }

// helloWorld()

// Select elements and attach functions via event listeners
// need a variable to keep track of moves. 
// This will be used to indicate whether or not to draw an X or an O


// elements and variables | player1 is X | player2 is O
const PLAYER_ONE = 'x'
const PLAYER_TWO = 'circle'
const gridElements = document.querySelectorAll('[data-cell]')
const winningMsgEl = document.getElementById('winningMsg')
const winningMsgTextEl = document.querySelector('[data-winning-msg]')
const resetButton = document.getElementById('reset')
let playerOneTurn

// winning combos through arrays | grids 0-8
const WINNING_COMBOS = [
    // row combos
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // column combos
    [1, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diag combos
    [0, 4, 8],
    [2, 4, 6]
]


// startGame()
startGame()

resetButton.addEventListener('click', startGame)
// start game 
function startGame() {
    playerOneTurn = true;
    gridElements.forEach(grid => {
        // removes and reset game
        grid.classList.remove(PLAYER_ONE)
        grid.classList.remove(PLAYER_TWO)
        grid.removeEventListener('click', handleClick)
        grid.addEventListener('click', handleClick, { once: true})
    })
    // winningMsgEl.classList.remove('show')
}


// click handles
function handleClick(event) {
    // console.log('clicked!');
    const grid = event.target
    const currentPlayer = playerOneTurn ? PLAYER_ONE : PLAYER_TWO
    placeMark(grid, currentPlayer)
    if(checkWin(currentPlayer)) {
        // console.log('Winner!') - works
        endGame(false)
    } else if (isDraw) {
        endGame(true)
    } else {
        swapTurns()
    }
// swap turns 
    swapTurns()
}

// draw
const endGame = (draw) => {
    if(draw) {
        winningMsgTextEl.innerText = "Draw!"
    } else {
      winningMsgTextEl.innerText = `${playerOneTurn ? "Player One Wins!" : "Player Two Wins!"}`
    }
    winningMsgEl.classList.add('show')
}

const isDraw = () => {
    return [...gridElements].every(grid => {
        return grid.classList.contains(PLAYER_ONE) || grid.classList.contains(PLAYER_TWO)
    })
}

const placeMark = (grid, currentPlayer) => {
    grid.classList.add(currentPlayer)
}

//swap turns function
const swapTurns = () => {
    playerOneTurn = !playerOneTurn
}

// check win | if current player is correct with any combo it is a win
const checkWin = (currentPlayer) => {
    return WINNING_COMBOS.some(combos => {
        return combos.every(index => {
            return gridElements[index].classList.contains
            (currentPlayer)
        })
    })
}




// reset button
// const resetButton = () => {
//     document.getElementById("reset").reset();
// }


