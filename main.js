/*----- constants -----*/
const MARKERS = {
    '0': null,
    '1': 'X',
    '-1': 'O',
};
const WINCOUNT = {
    '1': 0,  // Player X wins
    '-1': 0  // Player O wins
};
/*----- state variables -----*/
let board;  // array of 7 column arrays
let turn;  // 1 or -1
let winner;
let tieGame;
let numRows = 3;
let numCols = 3;

/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const divEls = document.querySelectorAll('div');

/*----- event listeners -----*/
divEls.forEach(div => {
    div.addEventListener('click', inputMarker);
});
playAgainBtn.addEventListener('click', init);

/*----- functions -----*/
init();

// Initialize all state, then call render()
function init() {

// To visualize the board's mapping to the DOM,
// rotate the board array 90 degrees counter-clockwise
board = [
    [0, 0, 0],  // col 0
    [0, 0, 0],  // col 1
    [0, 0, 0],  // col 2
];

turn = 1;
winner = null;
render();
}

// In response to use interaction, update all impacted
// state, then call render();
function inputMarker(evt) {
    const cellId = evt.target.id;
    const [colIdx, rowIdx] = cellId.match(/\d+/g).map(Number);

    if (board[colIdx][rowIdx] !== 0 || winner) return;

    board[colIdx][rowIdx] = turn;
    turn *= -1;
    tieGame = catsGame();
    checkWin(colIdx, rowIdx);
    render();
}

function checkWin(colIdx, rowIdx) {
    if (checkVerticalWin(colIdx, rowIdx) || checkHorizontalWin(colIdx, rowIdx) || checkDiagonalWin(colIdx, rowIdx)) {
        winner = board[colIdx][rowIdx];
        if (winner !== null) {
            WINCOUNT[winner]++;  // Increment the win count for the winning player
        }
    }
}

function catsGame() {
    for (let i = 0; i < numCols; i++) {
        for (let j = 0; j < numRows; j++) {
            if (board[i][j] === 0) {
                return false;
            }
        }
    }
    return true;
}

function checkVerticalWin(colIdx, rowIdx) {
    const player = board[colIdx][rowIdx];
    for (let i = 0; i < numCols; i++) {
        if (board[i][rowIdx] !== player) return false;
    }
    return true;
}

function checkHorizontalWin(colIdx, rowIdx) {
    const player = board[colIdx][rowIdx];
    for (let i = 0; i < numRows; i++) {
        if (board[colIdx][i] !== player) return false;
    }
    return true;
}

function checkDiagonalWin(colIdx, rowIdx) {
    const player = board[colIdx][rowIdx];
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;
    return false;
}

// Visualize all state in the DOM
function render() {
    renderBoard();
    renderMessage();
}

function renderBoard() {
    board.forEach(function(colArr, colIdx) {
        // Iterate over the cells in the current column (colArr)
        colArr.forEach(function(cellVal, rowIdx) {
        const cellId = `c${colIdx}r${rowIdx}`;
        const cellEl = document.getElementById(cellId);
        // Display '🙅‍♀️' for 1 and '🙆‍♂️' for -1
        cellEl.innerHTML = cellVal === 1 ? '🙅‍♀️' : cellVal === -1 ? '🙆‍♂️' : ''
        });
    });
}

function renderMessage() {
    if (winner) {
        messageEl.innerHTML = `${MARKERS[winner]} Wins! 🙅‍♀️: ${WINCOUNT['1']} 🙆‍♂️: ${WINCOUNT['-1']}`;
    } else if (tieGame){ 
        messageEl.innerHTML = "Cat's game! It's a tie. 🐱";
    } else {
        messageEl.innerHTML = `${MARKERS[turn]}'s Turn`;
    }
}