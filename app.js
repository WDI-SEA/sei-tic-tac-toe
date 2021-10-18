let playersTurn = document.getElementById('playersTurn')
let box = document.getElementsByClassName('tttBox')
const gameResults = document.getElementById('result')
const clearButton = document.getElementById('clear')

// Display a message to indicate which turn is about to be played.
const turnX = 'X'
const turnO = 'O'
let currentTurn = turnX

let currentPlayerTurn = () => {
    return `It's ${currentTurn}'s turn!`
}

playersTurn.innerText = currentPlayerTurn()

const turnIndicator = () => {
    if (currentTurn === turnX) {
        currentTurn = turnO
    } else {
        currentTurn = turnX
    }
    playersTurn.innerText = `It's ${currentTurn}'s turn!`
}


let space = ['', '', '', '', '', '', '', '', '']
const tieGame = "No winner. It's a tie!"
// A user should be able to click on different squares to make a move.
const moveMade = (event) => {
    const position = event.target.getAttribute('id')
    // console.log('this id is the position of\n', position)
    // Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
    if (!space[position]) {
        space[position] = currentTurn
        // console.log(currentTurn)
        event.target.innerText = currentTurn
        turnIndicator()
        // Check those combinations on the board contents after every move.
        if (checkWin()) {
            gameResults.innerText = `Player ${currentTurn} is the winner!`
            return
        }
    // }
    // if (checkDraw()) {
    //     return
    } else {
        playersTurn.innerText = `A play has already been made in this box! Please select an empty space, Player ${currentTurn}.`
        }
    }
    
    const board = Array.from(document.getElementsByClassName('tttBox'))
    // console.log(board)
    
    const winPaths = [
        // [0, 1, 2],
        // [3, 4, 5],
        // [6, 7, 8],
        // [0, 3, 6],
        // [1, 4 ,7],
        // [2, 5 ,8],
        // [0, 4, 8],
        // [6, 4, 2]
    ]
    
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
    // Hint: Determine a set of winning combinations.
const checkWin = () => {
    if (board[0].innerText === currentTurn) {
        if (board[1].innerText === currentTurn && board[2].innerText === currentTurn) {
            return true
        }
        if (board[3].innerText === currentTurn && board[6].innerText === currentTurn) {
            return true
        }
        if (board[4].innerText === currentTurn && board[8].innerText === currentTurn) {
            return true
        }
    }
    if (board[4].innerText === currentTurn) {
        if (board[3].innerText === currentTurn && board[5].innerText === currentTurn) {
                return true
        }
        if (board[1].innerText === currentTurn && board[7].innerText === currentTurn) {
                return true
        }
        if (board[6].innerText === currentTurn && board[2].innerText === currentTurn) {
                return true
        } 
    }
    if (board[8].innerText === currentTurn) {
        if (board[6].innerText === currentTurn && board[7].innerText === currentTurn) {
                    return true
        }
        if (board[2].innerText === currentTurn && board[5].innerText === currentTurn) {
                    return true
        } else {
            return false
        }    
    }
}

// Detect draw conditions (ties/cat's game)
 const checkDraw = () => {
    for (let i = 0; i < board.length; i++) {
        if (board[i] !== null)
        return true
    }
 }
// You should not be able to click remaining empty cells after the game is over.


// Add a reset button that will clear the contents of the board.
const clearBoard = () => {
    board.forEach(tttBox => {
        tttBox.innerText = ''
    })
    space = ['', '', '', '', '', '', '', '', '']
    playersTurn.innerText = 'New Game! Player X Starts.'
    gameResults.innerText = ''
    moveMade()
}

document.querySelectorAll('.tttBox').forEach(tttBox => tttBox.addEventListener('click', moveMade))
document.querySelector('#clear').addEventListener('click', clearBoard)