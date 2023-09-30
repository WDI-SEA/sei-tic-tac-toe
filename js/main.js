	/*----- constants -----*/
    const COLORS = {
        '0': 'white',
        '1': 'black',
        '-1': 'red'
    };


    /*----- state variables -----*/

// Decide State Variables for Game:
// 1. Keep track of who's turn it is (turn: Player One (1)/ Player Two (-1))
// 2. Track board state (board: 2D array)
//       null -> no player
//       Player One (1) / Player Two (-1) -> player at that cell   
// 3. Variable for winner (winner: yes or no)
//      null -> no winner / in play
//      Player One (1) / Player Two (-1) -> winner
//      'T' -> tie  

let board; //this will be an array of 3 column arrays
let turn; //this will be Player One (1) & Player Two's turns (-1)
let winner; // null = no winner; 1 or -1 = winner; 'T' = tie game

	/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
const resetButton = document.querySelector('button');
const markerEls = [...document.querySelectorAll('#board > .cell')];


    /*----- event listeners -----*/
document.querySelectorAll('#board > .cell').forEach(cell => {
        cell.addEventListener('click', handleDrop);
    });
resetButton.addEventListener('click', init);


    /*----- functions -----*/
init();

// Initialize all state, then  call render()
function init() {
    //to visualize the board's mapping to the DOM, rotate the board array 90 degrees counter-clockwise
    board = [
        [0, 0, 0], //this is column 0
        [0, 0, 0], //this is column 1
        [0, 0, 0], //this is column 2
    ];
    turn = 1;
    winner = null;
    render();
}

//in response to user interaction, update all impacted state, then call render();
function handleDrop(event) {
    const cellId = event.target.id;
    const columnIdx = parseInt(cellId.charAt(1));
    const rowIdx = parseInt(cellId.charAt(3));
    // guards
    if (columnIdx === undefined || rowIdx === undefined || winner) return;
    // check if the cell is empty
    if (board[columnIdx][rowIdx] !== 0) return;
    // update board state with current player value
    board[columnIdx][rowIdx] = turn;
    // switch turns
    turn *= -1;
    // check for winner
    winner = getWinner(columnIdx, rowIdx);
    render();
}

//check for winner in board state & return null if no winner, 1/-1 if a player has won, or 'T' if there's a tie
function getWinner(columnIdx, rowIdx) {
    const hasTie = board.every(row => row.every(cell => cell !== 0));
    if (hasTie) {
        return 'T'; // Return 'T' to indicate a tie
    }
    return checkVerticalWin(columnIdx, rowIdx) ||
        checkHorizontalWin(columnIdx, rowIdx) ||
        checkDiagonalWinNESW(columnIdx, rowIdx) ||
        checkDiagonalWinNWSE(columnIdx, rowIdx);    
}

function checkVerticalWin(columnIdx, rowIdx) {
    const adjacentCountUp = countAdjacent(columnIdx, rowIdx, 0, 1); 
    const adjacentCountDown = countAdjacent(columnIdx, rowIdx, 0, -1); 
    return (adjacentCountUp + adjacentCountDown) >= 2 ? board[columnIdx][rowIdx] : null;
}

function checkHorizontalWin(columnIdx, rowIdx) {
    const adjacentCountLeft = countAdjacent(columnIdx, rowIdx, -1, 0); 
    const adjacentCountRight = countAdjacent(columnIdx, rowIdx, 1, 0); 
    return (adjacentCountLeft + adjacentCountRight) >= 2 ? board[columnIdx][rowIdx] : null;
}

function checkDiagonalWinNESW(columnIdx, rowIdx) {
    const adjacentCountNE = countAdjacent(columnIdx, rowIdx, 1, 1); 
    const adjacentCountSW = countAdjacent(columnIdx, rowIdx, -1, -1); 
    return (adjacentCountNE + adjacentCountSW) >= 2 ? board[columnIdx][rowIdx] : null;
}

function checkDiagonalWinNWSE(columnIdx, rowIdx) {
    const adjacentCountNW = countAdjacent(columnIdx, rowIdx, -1, 1); 
    const adjacentCountSE = countAdjacent(columnIdx, rowIdx, 1, -1); 
    return (adjacentCountNW + adjacentCountSE) >= 2 ? board[columnIdx][rowIdx] : null;
}

function countAdjacent(columnIdx, rowIdx, columnOffset, rowOffset) {
    //shortcut variable to the player value
    const player = board[columnIdx][rowIdx];
    //track count of adjacent cells with the same player value
    let count = 0;
    //initialize new coordinates
    columnIdx += columnOffset;
    rowIdx += rowOffset;
    while (
        //ensure columnIdx is within bounds of the board array
        board[columnIdx] !== undefined &&
        board[columnIdx][rowIdx] !== undefined &&
        board[columnIdx][rowIdx] === player 
    ) {
    count++;
    columnIdx += columnOffset;
    rowIdx += rowOffset;
    }
    return count;
}

// Visualize all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    //hide/show UI elements (controls)
    renderControls();
}

function renderBoard() {
    board.forEach(function (columnArr, columnIdx) {
        //iterate over the cells in the current column (columnArr)
        columnArr.forEach(function(cellValue, rowIdx) {
            const cellId = `c${columnIdx}r${rowIdx}`;    
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellValue]; 
        });
    });
}

function renderMessage() {
    if (winner === 'T') {
        messageEl.innerText = "It's a tie!!!";
    } else if (winner) {
        //message for winner
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> wins!`;        
    } else {
        //message when game is in play
        messageEl.innerHTML = `It's your turn, <span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>.`;
    }
}

function renderControls() {
    resetButton.style.visibility = winner ? 'visible' : 'hidden';
    board.forEach(function (columnArr, columnIdx) {
        // iterate over the cells in the current column (columnArr)
        columnArr.forEach(function(cellValue, rowIdx) {
            const cellId = `c${columnIdx}r${rowIdx}`;    
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellValue]; 
        });
    });
}