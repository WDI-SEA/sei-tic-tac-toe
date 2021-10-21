let playersTurn = document.getElementById('playersTurn')
const box = document.getElementsByClassName('tttBox')
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
    playersTurn.innerText = currentPlayerTurn()
}

let space = []
// A user should be able to click on different squares to make a move.
const moveMade = (event) => {
    const position = event.target.getAttribute('id')
    // console.log('this id is the position of \n', position)
    // Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
    console.log(space.length)
    if (!space[position]) {
        space[position] = currentTurn
        // console.log('this is the currentTurn\n', currentTurn)
        event.target.innerText = currentTurn
        space.push(event.target.innerText)
        // console.log(`space arr is keeping track of # of turns it\n,` space)
        // Check win combinations on the board contents after every move.
        if (checkWin() === false){
            turnIndicator()
        } 
        if ((space.length) >= 8 && checkWin() === false) {
            gameResults.innerText = "Game over. It's a tie!"
        }        
        turnIndicator()
        } else {
            playersTurn.innerText = `A play has already been made in this box! Please select an empty space, Player ${currentTurn}.`
        }
    }
    
const board = Array.from(document.getElementsByClassName('tttBox'))
// console.log(board)
let winner = `Player ${currentTurn} is the winner! Play again?`

// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations.
const checkWin = () => {
    let winner = `Player ${currentTurn} is the winner! Play again?`
    if (board[0].innerText === currentTurn) {
        if (board[1].innerText === currentTurn && board[2].innerText === currentTurn) {
            gameResults.innerText = winner
        }
        if (board[3].innerText === currentTurn && board[6].innerText === currentTurn) {
            gameResults.innerText = winner
        }
        if (board[4].innerText === currentTurn && board[8].innerText === currentTurn) {
            gameResults.innerText = winner
        }
    }
    if (board[4].innerText === currentTurn) {
        if (board[3].innerText === currentTurn && board[5].innerText === currentTurn) {
            gameResults.innerText = winner
        }
        if (board[1].innerText === currentTurn && board[7].innerText === currentTurn) {
            gameResults.innerText = winner
        }
        if (board[6].innerText === currentTurn && board[2].innerText === currentTurn) {
            gameResults.innerText = winner
        } 
    }
    if (board[8].innerText === currentTurn) {
        if (board[6].innerText === currentTurn && board[7].innerText === currentTurn) {
            gameResults.innerText = winner
        }
        if (board[2].innerText === currentTurn && board[5].innerText === currentTurn) {
            gameResults.innerText = winner
        } 
    }
}
// // You should not be able to click remaining empty cells after the game is over.
const endMoves = (event) => {
    event.target = null
}

// Detect draw conditions (ties/cat's game)
// const checkTie = () => {
//     if ( && checkWin() !== truespace.length === 9) {
//         // console.log(`Game over. It's a tie!`)
//         return true
//     }
// }

// Add a reset button that will clear the contents of the board.
const clearBoard = () => {
    board.forEach(tttBox => {
        tttBox.innerText = ''
    })
    space = []
    playersTurn.innerText = 'New Game! Player X Starts.'
    gameResults.innerText = ''
    currentTurn = turnX
}

document.querySelectorAll('.tttBox').forEach(tttBox => tttBox.addEventListener('click', moveMade))
document.querySelector('#clear').addEventListener('click', clearBoard)