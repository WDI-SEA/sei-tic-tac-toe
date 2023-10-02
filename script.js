// constants 
const colours = { // can sub in pictures later instead of colours
    '0': 'gray',
    '1': 'red',
    '2': 'blue'
};

const players = {
    '1': 'X',
    '2': 'O'
};
// variables
let board; // 3x3 board
let player; // 1 - player1, 2 - player 2, 0 - blank space
let winner; // 0 - no winners, 1 - player1 wins, 2 - player2 wins, 3 - tie
let turnCount; // count turns, determine if tie at 9 turns after checking for winner
// cache
const replay = document.getElementById('replay');
const gameMessage = document.getElementById('message');
const boardOptions = [... document.querySelectorAll('#board > div')];
// event listeners
document.getElementById('board').addEventListener('click', handlePlay);
replay.addEventListener('click', startGame);
// functions

startGame();

function startGame() {
    board = {
        'r0': [0, 0, 0],
        'r1': [0, 0, 0],
        'r2': [0, 0, 0]
    }
    turnCount = 0;
    winner = 0;
    player = goFirst();
    render();
}

function goFirst(){
    let turnValue = Math.random() * 10
    let first = turnValue >= 5 ? 1 : 2;
    return first;
}

function render() { 
    renderBoard();
    renderMessage()
}

function renderBoard() {
    for (let i = 0; i < Object.keys(board).length; i++) {
        for (let j = 0; j < board[`r${i}`].length; j++) {
            const cellId = `c${j}r${i}`;
            const cellElement = document.getElementById(cellId);
            const cellValue = board[`r${i}`][j]
            cellElement.style.backgroundColor = colours[cellValue];
        }
    }
}


function renderMessage() {
    while (winner === 0) {
        gameMessage.innerHTML = `Player ${player}'s Turn!`;
        return;
    }
    if (winner === 3) {
        gameMessage.innerHTML = 'Tie!';
    } else if (winner === 1 || winner === 2) {
        gameMessage.innerHTML = `Player ${winner} Wins!`;
    }
}

function handlePlay(event){
    // easier to access for later loops
    const numberOfRows = Object.keys(board).length;
    console.log("🚀 ~ file: script.js:78 ~ handlePlay ~ numberOfRows:", numberOfRows)
    const numberOfColumns = board[Object.keys(board)[0]].length;
    console.log("🚀 ~ file: script.js:80 ~ handlePlay ~ numberOfColumns:", numberOfColumns)
    // set rowIndex to the index ( [0] or [1] or [2] ) of the clicked item (div)
    // guard against misclick, the below code will return -1 if you clicked on not the div. also prevent input if game won or tied
    const columnIndex = boardOptions.indexOf(event.target);
    if (columnIndex === -1 || winner != 0) return;
    // find row and column
    const elementId = event.target.getAttribute('id');
    const col = elementId.slice(1,2);
    const row = elementId.slice(2,4);
    // only allow empty squares to be clicked
    console.log(col + row + ' just col + row');
    console.log(board[`${row}`][col])

    if (board[`${row}`][col] === 0) {
        board[`${row}`][col] = player;
        player = player == 1 ? 2 : 1;
        //console.log('player after = ' + player)
    }
    
    getWinner(row, col, numberOfRows, numberOfColumns);

    render();
}

function getWinner(row, col, numberOfRows, numberOfColumns) {
    const horizontalWin = checkHorizontals(row, col);
    const verticalWin = checkVerticals(row, col);
    //const diagonalNorthEastWin = checkDiagonals(row, col, numberOfRows, numberOfColumns, 0, 0);
    //const diagonalNorthWestWin = checkDiagonals(row, col, numberOfRows, numberOfColumns, 1, -1);
    return;
}

function checkHorizontals(row, col) {
    for (let i = 0; i < Object.keys(board).length; i++) {
        let winCount = 0;
        for (let j = 0; j < board[`r${i}`].length; j++) {
            if (board[`r${i}`][j] === board[`${row}`][col]) {
                winCount ++;
            }
            if (winCount >= 3) {
                return winner = board[`${row}`][col];
            }
        }
    }
}

function checkVerticals(row, col) {
    for (let i = 0; i < Object.keys(board).length; i++) {
        let winCount = 0;
        for (let j = 0; j < board[`r${i}`].length; j++) {
            if (board[`r${j}`][i] === board[`${row}`][col]) {
                winCount ++;
            }
            if (winCount >= 3) {
                return winner = board[`${row}`][col];
            }
        }
    }
}

function checkDiagonals(row, col, numberOfRows, numberOfColumns, addOne, minusOne) {
    let i = 0
    let j = 0
    if (minusOne != 0) j = 2;
    let winCount = 0;
    while ( i < numberOfRows && j < numberOfColumns){
        if (board[`r${i}`][j] === board[`${row}`][col]) {
            winCount ++;
        }
        if (winCount >= 3) {
            return winner = board[`${row}`][col];
        }
        i + addOne;
        j + minusOne;
    }
}

// function countAdjacents(row, col, rowOffset, colOffset) {
//     let currentPlayer = board[`${row}`][col];
//     console.log('current player' + currentPlayer);
//     let winCount = 0;
    
//     while (
//         // Ensure indexes are within bounds of the board array
//         board[`${row}`] !== undefined && 
//         board[`${row}`][col] !== undefined &&
//         board[`${row}`][col] === currentPlayer
//         ) {
//             winCount ++;
//             colIndex += colOffset;
//             rowIndex += rowOffset;
//     }

// }