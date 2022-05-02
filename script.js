const cellElements = document.querySelectorAll('[data-cell]')
const boardElement = document.getElementById('board')
const winMessageElement = document.getElementById('winMessage')
const restartBtn = document.getElementById('restartButton')
const winMessageTextElement = document.getElementById('winMessageText')
let isPlayer_O_Turn = false

const PLAYER_X_CLASS = 'x'
const PLAYER_O_CLASS = 'circle'
const WINCOMBO = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

function handleCellClick(e) {
	const cell = e.target
	const currentClass = isPlayer_O_Turn
	placeMark(cell, currentClass)
	if (checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns()
	}
}