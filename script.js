({
  plugins: ['jsdom-quokka-plugin'],
  jsdom: { file: 'index.html' }
})

let canPlay = 1
let playerTurn = 'X'
let turnsTaken = 0
let xWins = 0
let oWins = 0
const gameBoard = document.getElementById('gamewrapper')
const divArray = document.querySelectorAll('.gamebox')
const resetButton = document.getElementById('reset')
const statusText = document.getElementById('status')
const turnText = document.getElementById('turn')

statusText.innerText = 'X Wins = 0 | O wins = 0'
turnText.innerText = playerTurn + "'s turn to move"

gameBoard.addEventListener('click', function (e) {
  if (canPlay === 1) {
    if (e.target.innerText === '') {
      e.target.innerText = playerTurn
      if (playerTurn === 'X') {
        playerTurn = 'O'
      } else {
        playerTurn = 'X'
      }
      turnText.innerText = playerTurn + "'s turn to move"
      turnsTaken++
      const boardArray = []
      for (let i = 0; i < divArray.length; i++) {
        const state = divArray[i].innerHTML
        boardArray.push(state)
      }
      if (
        (boardArray[0] === 'X' &&
          boardArray[1] === 'X' &&
          boardArray[2] === 'X') ||
        (boardArray[3] === 'X' &&
          boardArray[4] === 'X' &&
          boardArray[5] === 'X') ||
        (boardArray[6] === 'X' &&
          boardArray[7] === 'X' &&
          boardArray[8] === 'X') ||
        (boardArray[0] === 'X' &&
          boardArray[3] === 'X' &&
          boardArray[6] === 'X') ||
        (boardArray[1] === 'X' &&
          boardArray[4] === 'X' &&
          boardArray[7] === 'X') ||
        (boardArray[2] === 'X' &&
          boardArray[5] === 'X' &&
          boardArray[8] === 'X') ||
        (boardArray[0] === 'X' &&
          boardArray[4] === 'X' &&
          boardArray[8] === 'X') ||
        (boardArray[2] === 'X' &&
          boardArray[4] === 'X' &&
          boardArray[6] === 'X')
      ) {
        canPlay = 0
        xWins++
        turnText.innerText = 'X Wins'
        statusText.innerText = 'X Wins = ' + xWins + ' | O wins = ' + oWins
      } else if (
        (boardArray[0] === 'O' &&
          boardArray[1] === 'O' &&
          boardArray[2] === 'O') ||
        (boardArray[3] === 'O' &&
          boardArray[4] === 'O' &&
          boardArray[5] === 'O') ||
        (boardArray[6] === 'O' &&
          boardArray[7] === 'O' &&
          boardArray[8] === 'O') ||
        (boardArray[0] === 'O' &&
          boardArray[3] === 'O' &&
          boardArray[6] === 'O') ||
        (boardArray[1] === 'O' &&
          boardArray[4] === 'O' &&
          boardArray[7] === 'O') ||
        (boardArray[2] === 'O' &&
          boardArray[5] === 'O' &&
          boardArray[8] === 'O') ||
        (boardArray[0] === 'O' &&
          boardArray[4] === 'O' &&
          boardArray[8] === 'O') ||
        (boardArray[2] === 'O' &&
          boardArray[4] === 'O' &&
          boardArray[6] === 'O')
      ) {
        canPlay = 0
        oWins++
        turnText.innerText = 'O Wins'
        statusText.innerText = 'X Wins = ' + xWins + ' | O wins = ' + oWins
      } else if (turnsTaken === 9) {
        turnText.innerText = 'Tie Game'
        canPlay = 0
      }
    }
  }
})

resetButton.addEventListener('click', function (e) {
  divArray.forEach((box) => {
    box.innerText = ''
  })
  turnsTaken = 0
  playerTurn = 'X'
  canPlay = 1
})
