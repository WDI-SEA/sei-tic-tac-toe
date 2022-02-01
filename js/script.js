let currentPlayer = 'X'
let gameInProgress = true
let playerNow = document.querySelector('.Current-Player')
let declareWinner = document.querySelector('.declareWinner')
let resetButton = document.querySelector('#restartButton')

//  Make the squares into an array
let squares = Array.from(document.querySelectorAll('.square'))

// What happens when a square is clicked
squares.forEach(function (square) {
  square.addEventListener('click', function () {
    if (square.innerText === '' && gameInProgress) {
      square.innerText = currentPlayer
      if (currentPlayer === 'X') {
        currentPlayer = 'O'
        playerNow.innerText = 'The current player is O'
      } else if (currentPlayer === 'O') {
        currentPlayer = 'X'
        playerNow.innerText = 'The current player is X'
      }
      tieCondition()
      winCondition()
    }
  })
})


// Winning Conditions
function winCondition() {
  if (squares[0].innerText === 'X' && squares[1].innerText === 'X' && squares[2].innerText === 'X') {
    declareWinner.innerText = 'Player X has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[3].innerText === 'X' && squares[4].innerText === 'X' && squares[5].innerText === 'X') {
    declareWinner.innerText = 'Player X has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[6].innerText === 'X' && squares[7].innerText === 'X' && squares[8].innerText === 'X') {
    declareWinner.innerText = 'Player X has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[0].innerText === 'X' && squares[4].innerText === 'X' && squares[8].innerText === 'X') {
    declareWinner.innerText = 'Player X has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[1].innerText === 'X' && squares[4].innerText === 'X' && squares[7].innerText === 'X') {
    declareWinner.innerText = 'Player X has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[2].innerText === 'X' && squares[5].innerText === 'X' && squares[8].innerText === 'X') {
    declareWinner.innerText = 'Player X has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[0].innerText === 'X' && squares[4].innerText === 'X' && squares[8].innerText === 'X') {
    declareWinner.innerText = 'Player X has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[2].innerText === 'X' && squares[4].innerText === 'X' && squares[6].innerText === 'X') {
    declareWinner.innerText = 'Player X has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[0].innerText === 'O' && squares[1].innerText === 'O' && squares[2].innerText === 'O') {
    declareWinner.innerText = 'Player O has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[3].innerText === 'O' && squares[4].innerText === 'O' && squares[5].innerText === 'O') {
    declareWinner.innerText = 'Player O has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[6].innerText === 'O' && squares[7].innerText === 'O' && squares[8].innerText === 'O') {
    declareWinner.innerText = 'Player O has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[0].innerText === 'O' && squares[3].innerText === 'O' && squares[6].innerText === 'O') {
    declareWinner.innerText = 'Player O has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[1].innerText === 'O' && squares[4].innerText === 'O' && squares[7].innerText === 'O') {
    declareWinner.innerText = 'Player O has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[3].innerText === 'O' && squares[5].innerText === 'O' && squares[8].innerText === 'O') {
    declareWinner.innerText = 'Player O has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[0].innerText === 'O' && squares[4].innerText === 'O' && squares[8].innerText === 'O') {
    declareWinner.innerText = 'Player O has won'
    playerNow.innerText = 'Game Over'
    gameInProgress = false
  } else if (squares[2].innerText === 'O' && squares[4].innerText === 'O' && squares[6].innerText === 'O') {
    declareWinner.innerText = 'Player O has won'
    gameInProgress = false
    playerNow.innerText = 'Game Over'
  }
}


//  Tie Condition
function tieCondition() {
  let filledSquare = 0
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerText === 'X' || squares[i].innerText === 'O') {
      filledSquare++
    }
  }
  if (filledSquare === 9) {
    declareWinner.innerText = 'Tie Game'
    playerNow.innerText = 'Game Over'
  }
}


//  Reset condition + button press
resetButton.addEventListener('click', function () {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = ''
    playerNow.innerText = ''
    declareWinner.innerText = ''
    gameInProgress = true
    currentPlayer = 'X'
    playerNow.innerText = 'The current player is X'
} })
