/*----- constants -----*/
const MARKERS = {
	'0': '',
	'1': 'X',
	'-1': 'O'
}

/*----- state variables -----*/

let board; //array of 7 column arrays
let turn; //1 for player 1, -1 for player 2
let winner; // winner: null = no winner, 1/-1 = winner, 'T' = tie


/*----- cached elements  -----*/
const messageEl = document.querySelector('h2')
const playAgainBtn = document.querySelector('button')
// const colMarkerEls = [...document.querySelectorAll('#column-markers > div')]

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleClick)
playAgainBtn.addEventListener('click', init)

/*----- functions -----*/

//Initialize all state, then call render()
function init () {
	//Rotate 90 degrees counter-clockwise and array is visualization of the board
	board = [
		[0, 0, 0], //col0
		[0, 0, 0], //col1
		[0, 0, 0], //col2
	]

	turn = 1
	winner = null
	render()
}

//Visualize all state in the DOM
function render(){
	renderBoard()
	renderMessage()
	renderControls()
}

function renderBoard(){
	board.forEach(function(colArr, colIdx){
		colArr.forEach(function(cellVal, rowIdx){
			const cellId = `c${colIdx}r${rowIdx}`
			const cellEl = document.getElementById(cellId)
			cellEl.innerText = MARKERS[cellVal]
		})	
	})
}

function renderMessage(){
	if(winner === 'T'){
		messageEl.innerText = "Tie Game!!!"
	}else if(winner){
		messageEl.innerHTML = 
		`<span style = "color: ${MARKERS[winner]}">${MARKERS[winner].toUpperCase()}</span> Wins!`
	}else{ //game still in play
		messageEl.innerHTML = 
		`<span style = "color: ${MARKERS[turn]}">${MARKERS[turn].toUpperCase()}</span>'s Turn`
	}
}

function renderControls(){
	playAgainBtn.style.visibility = winner ? 'visible':'hidden'
}

//Update board in response to user action
function handleClick(event){
	if(winner){return}
    const cellEl = event.target
    const colIdx = parseFloat(cellEl.id[1])
    const rowIdx = parseFloat(cellEl.id[3])

    cellEl.innerText = MARKERS[turn]

    board[colIdx][rowIdx] = turn
	turn *= -1 
	winner = getWinner(colIdx, rowIdx)
	
	render()
}

function getWinner(colIdx, rowIdx){
	const result = checkVerticalWin(colIdx, rowIdx) ||
	checkHorizontalWin(colIdx, rowIdx) ||
	checkDiagonalNWSEWin(colIdx, rowIdx) ||
	checkDiagonalNESWWin(colIdx, rowIdx)
	console.log(result)
	return(result)
}

function checkVerticalWin(colIdx, rowIdx){
	const adjacentCountDown = countAdjacent(colIdx, rowIdx, 0, -1)
	const adjacentCountUp = countAdjacent(colIdx, rowIdx, 0, 1)
    const result = (adjacentCountDown + adjacentCountUp) === 2 ? board[colIdx][rowIdx] : null

	return(result)
}

function checkHorizontalWin(colIdx, rowIdx){
	const adjacentCountLeft = countAdjacent(colIdx, rowIdx, -1, 0)
	const adjacentCountRight = countAdjacent(colIdx, rowIdx, 1, 0)
	return (adjacentCountLeft + adjacentCountRight) === 2 ? board[colIdx][rowIdx] : null
}

function checkDiagonalNWSEWin(colIdx, rowIdx){
	const adjacentCountNW = countAdjacent(colIdx, rowIdx, -1, 1)
	const adjacentCountSE = countAdjacent(colIdx, rowIdx, 1, -1)
	return (adjacentCountNW + adjacentCountSE) === 2 ? board[colIdx][rowIdx] : null
}

function checkDiagonalNESWWin(colIdx, rowIdx){
	const adjacentCountNE = countAdjacent(colIdx, rowIdx, 1, 1)
	const adjacentCountSW = countAdjacent(colIdx, rowIdx, -1, -1)
	return (adjacentCountNE + adjacentCountSW) === 2 ? board[colIdx][rowIdx] : null
}

function countAdjacent(colIdx, rowIdx, colOffset, rowOffset){
	const player = board[colIdx][rowIdx]
	let count = 0;
	colIdx += colOffset //parseFloat(colIdx) + parseFloat(colOffset)
	rowIdx += rowOffset //parseFloat(rowIdx) + parseFloat(rowOffset)

	while(
		board[colIdx] !== undefined && //colIdx >= 0 && colIdx <= 6 //Ensure that we stay on the board (within bounds)
		board[colIdx][rowIdx] !== undefined &&
		board[colIdx][rowIdx] === player
	){
		count++
		colIdx += colOffset
		rowIdx += rowOffset
	}
	return(count)
}

init()
render()