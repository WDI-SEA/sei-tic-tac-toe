let playersTurn = document.getElementById('playersTurn')
const box = document.getElementsByClassName('tttBox')
const gameResults = document.getElementById('result')
const clearButton = document.getElementById('clear')

const turnX = 'X'
const turnO = 'O'
let currentTurn = turnX

// display a message to indicate which turn is about to be played
let currentPlayerTurn = () => {
    return `It's ${currentTurn}'s turn!`
}

playersTurn.innerText = currentPlayerTurn()

// decide whose turn it is
const turnIndicator = () => {
    if (currentTurn === turnX) {
        currentTurn = turnO
    } else {
        currentTurn = turnX
    }
    playersTurn.innerText = currentPlayerTurn()
}

// empty arr to push turn into
let space = []
// allow player to click on a square
const moveMade = (event) => {
    const position = event.target.getAttribute('id')
    // console.log('this id is the position of \n', position)
    // console.log('this is space arr\n', space)
    const thisMove = {
        letter: currentTurn,
        position: position
    }
    // console.log('this is the currentTurn\n', currentTurn)
    // Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is
    event.target.innerText = currentTurn
    space.push(thisMove)
    // console.log(`space arr is keeping track of # of turns it\n,` space)
    // checks for tie
    if ((space.length) > 8 && checkWin() !== true) {
        gameResults.innerText = "Game over. It's a tie!"        
    }
    // checks win combinations on the board contents after every move
    if (checkWin() === false){
        turnIndicator()
    }
    // changes turn if no win/tie 
    turnIndicator()
} 

// create array with all ids in order to set win combos    
const board = Array.from(document.getElementsByClassName('tttBox'))
// console.log(board)
let winner = `Player ${currentTurn} is the winner! Play again?`

// Detect winner: Stop game and declare the winner if one player ends up getting three in a row
// Hint: Determine a set of winning combinations
const checkWin = () => {
    let winner = `Player ${currentTurn} is the winner! Play again?`
    if (board[0].innerText === currentTurn) {
        if (board[1].innerText === currentTurn && board[2].innerText === currentTurn) {
            gameResults.innerText = winner
            document.querySelectorAll('.tttBox').forEach(tttBox => tttBox.removeEventListener('click', moveMade))
        }
        if (board[3].innerText === currentTurn && board[6].innerText === currentTurn) {
            gameResults.innerText = winner
            document.querySelectorAll('.tttBox').forEach(tttBox => tttBox.removeEventListener('click', moveMade))
        }
        if (board[4].innerText === currentTurn && board[8].innerText === currentTurn) {
            gameResults.innerText = winner
            document.querySelectorAll('.tttBox').forEach(tttBox => tttBox.removeEventListener('click', moveMade))
        }
    }
    if (board[4].innerText === currentTurn) {
        if (board[3].innerText === currentTurn && board[5].innerText === currentTurn) {
            gameResults.innerText = winner
            document.querySelectorAll('.tttBox').forEach(tttBox => tttBox.removeEventListener('click', moveMade))
        }
        if (board[1].innerText === currentTurn && board[7].innerText === currentTurn) {
            gameResults.innerText = winner
            document.querySelectorAll('.tttBox').forEach(tttBox => tttBox.removeEventListener('click', moveMade))
        }
        if (board[6].innerText === currentTurn && board[2].innerText === currentTurn) {
            gameResults.innerText = winner
            document.querySelectorAll('.tttBox').forEach(tttBox => tttBox.removeEventListener('click', moveMade))
        } 
    }
    if (board[8].innerText === currentTurn) {
        if (board[6].innerText === currentTurn && board[7].innerText === currentTurn) {
            gameResults.innerText = winner
            document.querySelectorAll('.tttBox').forEach(tttBox => tttBox.removeEventListener('click', moveMade))
        }
        if (board[2].innerText === currentTurn && board[5].innerText === currentTurn) {
            gameResults.innerText = winner
            document.querySelectorAll('.tttBox').forEach(tttBox => tttBox.removeEventListener('click', moveMade))
        } 
    }
}

// Add a reset button that will clear the contents of the board.
const clearBoard = () => {
    board.forEach(tttBox => {
        tttBox.innerText = ''
    })
    space = []
    playersTurn.innerText = 'New Game! Player X Starts.'
    gameResults.innerText = ''
    currentTurn = turnX
    document.querySelectorAll('.tttBox').forEach(tttBox => tttBox.addEventListener('click', moveMade, {
        once: true
    }))
}
    
document.querySelectorAll('.tttBox').forEach(tttBox => tttBox.addEventListener('click', moveMade, {
    // You should not be able to click remaining empty cells after the game is over.
    once: true
}))
document.querySelector('#clear').addEventListener('click', clearBoard)