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
    // console.log('render')
	renderBoard()
	renderMessage()
	renderControls()
}

function renderBoard(){
	board.forEach(function(colArr, colIdx){
		colArr.forEach(function(cellVal, rowIdx){
			//console.log(colIdx, rowIdx, cellVal)
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

    const cellEl = event.target
    const colIdx = cellEl.id[1]
    const rowIdx = cellEl.id[3]

    cellEl.innerText = MARKERS[turn]
    board[colIdx][rowIdx] = turn

    console.log(board[colIdx][rowIdx])
	turn *= -1 
    // console.log(turn)
    
	winner = getWinner(colIdx, rowIdx)
	render()
}

function getWinner(colIdx, rowIdx){
    console.log('getWinner')
	return checkVerticalWin(colIdx, rowIdx) ||
	checkHorizontalWin(colIdx, rowIdx) ||
	checkDiagonalNWSEWin(colIdx, rowIdx) ||
	checkDiagonalNESWWin(colIdx, rowIdx)
}

function checkVerticalWin(colIdx, rowIdx){
	const adjacentCountDown = countAdjacent(colIdx, rowIdx, 0, -1) === 2 ? board[colIdx][rowIdx] : null
	const adjacentCountUp = countAdjacent(colIdx, rowIdx, 0, 1) === 2 ? board[colIdx][rowIdx] : null
    return (adjacentCountDown + adjacentCountUp) === 2 ? board[colIdx][rowIdx] : null
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
	colIdx += colOffset;
	rowIdx += rowOffset;

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
	// console.log(player)
}

init()
render()