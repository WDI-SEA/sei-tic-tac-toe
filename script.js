let playerWinsMsg = document.querySelector('#player-message')
// Whose turn is it
let currentPlayer = "X"
const xPlayer = []
const oPlayer = []
const allMoves = []

const playersTurn = (event) => {
if (currentPlayer === "X") {
event.target.innerText = currentPlayer
xPlayer.push(event.target.id)
allMoves.push(event.target.id)
console.log(xPlayer)
console.log(event)
gameWin()
gameDraw()
currentPlayer = "O"
} else if (currentPlayer === "O") {
  event.target.innerText = currentPlayer
  oPlayer.push(event.target.id)
  allMoves.push(event.target.id)
  gameWin()
  gameDraw()
  currentPlayer = "X"

}}


// What happens when a button is clicked
let buttons = document.querySelectorAll(".button-board")
buttons.forEach(function(button) {
   button.addEventListener('click', playersTurn) 
  }) 
 





// Winning Scenario
const winningCombos = 
[
['0','1','2'],
['3','4','5'],
['6', '7', '8'],
['2','3','6'],
['1','4','7'],
['2','5','8'],
['0','4','8'],
['2','4','6'],
]
const gameWin = () => {
for (let i = 0; i<winningCombos.length; i++) {
  if (xPlayer.includes(winningCombos[i]['0']) && xPlayer.includes(winningCombos[i]['1']) && xPlayer.includes(winningCombos[i]['2'])) {
    playerWinsMsg.innerText = "X Player Has Won!";
    buttons.forEach(function(button) {
      button.removeEventListener('click', playersTurn) 
    })
  } else if (oPlayer.includes(winningCombos[i]['0']) && oPlayer.includes(winningCombos[i]['1']) && oPlayer.includes(winningCombos[i]['2'])) {
    playerWinsMsg.innerText = "O Player Has Won!";
    buttons.forEach(function(button) {
      button.removeEventListener('click', playersTurn) 
  }) 
}}}

// Draw Scenario
gameDraw = () => {
  if (allMoves.length === 9 && gameWin != true) {
    playerWinsMsg.innerText = "Tie!"
  }
  
}


//const declareWinner = () => {
//   if (??? === winningCombos) {
//     declareWinner.innerText = currentPlayer + "is the Winner!"
//   }
// }

// Draw Scenario
//if 0 remaining box --> it is a draw
// in that case, reset 



// id is being pushed into the array 
//all moves 
// when 9 === array.length && no winner 




// 
// let playerNow = document.querySelector('.Current-Player')
// let declareWinner = document.querySelector('.declareWinner')
// let resetButton = document.querySelector('#restartButton')

// //  Make the squares into an array
// let squares = Array.from(document.querySelectorAll('.square'))

// // What happens when a square is clicked
// squares.forEach(function (square) {
//   square.addEventListener('click', function () {
//     if (square.innerText === '' && gameInProgress) {
//       square.innerText = currentPlayer
//       if (currentPlayer === 'X') {
//         currentPlayer = 'O'
//         playerNow.innerText = 'The current player is O'
//       } else if (currentPlayer === 'O') {
//         currentPlayer = 'X'
//         playerNow.innerText = 'The current player is X'
//       }
//       winCondition()
//       tieCondition()
//     }
//   })
// })


// // Winning Conditions
// function winCondition() {
//   if (button[0].innerText === 'X' && squares[1].innerText === 'X' && squares[2].innerText === 'X') {
//     declareWinner.innerText = 'Player X has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[3].innerText === 'X' && squares[4].innerText === 'X' && squares[5].innerText === 'X') {
//     declareWinner.innerText = 'Player X has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[6].innerText === 'X' && squares[7].innerText === 'X' && squares[8].innerText === 'X') {
//     declareWinner.innerText = 'Player X has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[0].innerText === 'X' && squares[4].innerText === 'X' && squares[8].innerText === 'X') {
//     declareWinner.innerText = 'Player X has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[1].innerText === 'X' && squares[4].innerText === 'X' && squares[7].innerText === 'X') {
//     declareWinner.innerText = 'Player X has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[2].innerText === 'X' && squares[5].innerText === 'X' && squares[8].innerText === 'X') {
//     declareWinner.innerText = 'Player X has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[0].innerText === 'X' && squares[4].innerText === 'X' && squares[8].innerText === 'X') {
//     declareWinner.innerText = 'Player X has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[2].innerText === 'X' && squares[4].innerText === 'X' && squares[6].innerText === 'X') {
//     declareWinner.innerText = 'Player X has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[0].innerText === 'O' && squares[1].innerText === 'O' && squares[2].innerText === 'O') {
//     declareWinner.innerText = 'Player O has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[3].innerText === 'O' && squares[4].innerText === 'O' && squares[5].innerText === 'O') {
//     declareWinner.innerText = 'Player O has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[6].innerText === 'O' && squares[7].innerText === 'O' && squares[8].innerText === 'O') {
//     declareWinner.innerText = 'Player O has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[0].innerText === 'O' && squares[3].innerText === 'O' && squares[6].innerText === 'O') {
//     declareWinner.innerText = 'Player O has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[1].innerText === 'O' && squares[4].innerText === 'O' && squares[7].innerText === 'O') {
//     declareWinner.innerText = 'Player O has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[3].innerText === 'O' && squares[5].innerText === 'O' && squares[8].innerText === 'O') {
//     declareWinner.innerText = 'Player O has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[0].innerText === 'O' && squares[4].innerText === 'O' && squares[8].innerText === 'O') {
//     declareWinner.innerText = 'Player O has won'
//     playerNow.innerText = 'Game Over'
//     gameInProgress = false
//   } else if (squares[2].innerText === 'O' && squares[4].innerText === 'O' && squares[6].innerText === 'O') {
//     declareWinner.innerText = 'Player O has won'
//     gameInProgress = false
//     playerNow.innerText = 'Game Over'
//   }
// }


// //  Tie Condition
// function tieCondition() {
//   let filledSquare = 0
//   for (let i = 0; i < squares.length; i++) {
//     if (squares[i].innerText === 'X' || squares[i].innerText === 'O') {
//       filledSquare++
//     }
//   }
//   if (filledSquare === 9) {
//     declareWinner.innerText = 'Draw'
//     playerNow.innerText = 'Game Over'
//   }
// }


// //  Reset condition + button press
// resetButton.addEventListener('click', function () {
//   for (let i = 0; i < squares.length; i++) {
//     squares[i].innerText = ''
//     playerNow.innerText = ''
//     declareWinner.innerText = ''
//     gameInProgress = true
//     currentPlayer = 'X'
//     playerNow.innerText = 'The current player is X'
