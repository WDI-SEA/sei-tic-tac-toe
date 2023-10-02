// constants 
const colours = { // can sub in pictures later instead of colours
    '0': 'https://mario.wiki.gallery/images/thumb/7/7f/Question_Block_-_Nintendo_JP_website.png/1200px-Question_Block_-_Nintendo_JP_website.png',
    '1': 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/318ab411192999.560f386fd4c56.jpg',
    '2': 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79648a11192999.560f387135961.jpg'
};

const players = {
    '1': ['<span style="color: rgb(228,0,15);">Mario</span>', 0],
    '2': ['<span style="color: rgb(76,187,23);">Luigi</span>', 0]
};
// variables
let board; // 3x3 board
let player; // 1 - player1, 2 - player 2, 0 - blank space
let winner; // 0 - no winners, 1 - player1 wins, 2 - player2 wins, 3 - tie
let gameCount = 0; // count games completed
let marioWins = 0;
let luigiWins = 0;
// cache
const replay = document.getElementById('replay');
const gameMessage = document.getElementById('message');
const boardOptions = [... document.querySelectorAll('#board > div')];
const gameCounter = document.getElementById('gameCounter');
// event listeners
document.getElementById('board').addEventListener('click', handlePlay);
replay.addEventListener('click', startGame);
// functions

startGame();

function startGame() {
    // made them KV objects, because I love pain
    board = {
        'r0': [0, 0, 0],
        'r1': [0, 0, 0],
        'r2': [0, 0, 0]
    }
    gameCount ++;
    winner = 0;
    player = goFirst();
    replay.classList.add('hide');
    for (let i = 0; i < Object.keys(board).length; i++) {
        for (let j = 0; j < board[`r${i}`].length; j++) {
            const cellId = `c${j}r${i}`;
            const cellElement = document.getElementById(cellId);
            cellElement.classList.add('active');
        }
    }
    render();
}

function goFirst(){
    let turnValue = Math.random() * 10
    let first = turnValue >= 5 ? 1 : 2;
    return first;
}

function render() { 
    renderGameCount();
    renderBoard();
    renderMessage();
    renderWins();
}

function renderWins() {
    const mario = document.getElementById('mario');
    const luigi = document.getElementById('luigi');
    mario.innerHTML = `${players['1'][0]}'s wins: ${players['1'][1]}`;
    luigi.innerHTML = `${players['2'][0]}'s wins: ${players['2'][1]}`;
}

function renderGameCount() {
    gameCounter.innerHTML = `Game ${gameCount}`;
}

function renderBoard() {
    for (let i = 0; i < Object.keys(board).length; i++) {
        for (let j = 0; j < board[`r${i}`].length; j++) {
            const cellId = `c${j}r${i}`;
            const cellElement = document.getElementById(cellId);
            const cellValue = board[`r${i}`][j]
            //cellElement.style.backgroundColor = colours[cellValue]; 
            console.log(`url("${colours[cellValue]}");`)
            cellElement.style.backgroundImage = `url("${colours[cellValue]}")`;
            cellElement.style.backgroundRepeat = `no-repeat`;
            cellElement.style.backgroundSize = `auto 100%`;
            cellElement.style.backgroundPosition = `center center`;
        }
    }
}


function renderMessage() {
    while (winner === 0) {
        gameMessage.innerHTML = `${players[player][0]}'s Turn!`;
        return;
    }
    if (winner === 3) {
        gameMessage.innerHTML = 'Tie!';
        replay.classList.remove('hide');
    } else if (winner === 1 || winner === 2) {
        gameMessage.innerHTML = `${players[winner][0]} Wins!`;
        players[winner][1] ++;
        replay.classList.remove('hide');
    }
}

function handlePlay(event){
    // easier to access for later loops
    const numberOfRows = Object.keys(board).length;
    // console.log("🚀 ~ file: script.js:78 ~ handlePlay ~ numberOfRows:", numberOfRows)
    const numberOfColumns = board[Object.keys(board)[0]].length;
    // console.log("🚀 ~ file: script.js:80 ~ handlePlay ~ numberOfColumns:", numberOfColumns)
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
        event.target.classList.remove('active');
        //console.log('player after = ' + player)
    }
    
    getWinner(row, col, numberOfRows, numberOfColumns);

    render();
}

function getWinner(row, col, numberOfRows, numberOfColumns) {
    checkTie(numberOfRows);
    checkHorizontals(row, col, numberOfRows, numberOfColumns);
    checkVerticals(row, col, numberOfRows, numberOfColumns);
    checkDiagonals(row, col, numberOfRows, 1);
    checkDiagonals(row, col, numberOfRows, -1);
}

function checkHorizontals(row, col, nOR, nOC) {
    for (let i = 0; i < nOR; i++) {
        let winCount = 0;
        for (let j = 0; j < nOC; j++) {
            if (board[`r${i}`][j] === board[`${row}`][col]) {
                winCount ++;
            }
            if (winCount >= 3) {
                return winner = board[`${row}`][col];
            }
        }
    }
}

function checkVerticals(row, col, nOR, nOC) {
    for (let i = 0; i < nOR; i++) {
        let winCount = 0;
        for (let j = 0; j < nOC; j++) {
            if (board[`r${j}`][i] === board[`${row}`][col]) {
                winCount ++;
            }
            if (winCount >= 3) {
                return winner = board[`${row}`][col];
            }
        }
    }
}

function checkDiagonals(row, col, nOR, columnOffset) {
    let i = 0
    let j = 0
    if (columnOffset != 1) j = 2;
    let winCount = 0;
    while ( i < nOR){
        if (board[`r${i}`][j] === board[`${row}`][col]) {
            winCount ++;
        }
        if (winCount >= 3) {
            return winner = board[`${row}`][col];
        }
        i ++;
        j += (1 * columnOffset);
    }
}

function checkTie(nOR) {
    let noSpots = 0;
    for (let i = 0; i < nOR; i++) {
        if (board[`r${i}`].some((element) => element == 0) == false) {
            noSpots++;
        }
    }
    if (noSpots == 3) winner = 3;
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