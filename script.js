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



