const colors = {
    '0': 'transparent',
    '1': 'blue',
    '-1': 'red',
};

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

let table;
let turn;
let winner;

const messageEl = document.querySelector('h1');
const resetBtn = document.querySelector('button');
const squares = [...document.querySelectorAll('td')];

// Initialize the game:
init();

function init() {
    table = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    turn = 1;
    winner = null;
    render();
}

function render() {
    renderTable();
    renderMessage();
}

function renderTable() {
    table.forEach(function (colArr, colIdx) {
        colArr.forEach(function (cellVal, rowIdx) {
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = colors[cellVal];
            cellEl.addEventListener('click', function () {
                makeChoice(colIdx, rowIdx);
            });
        });
    });
}

function renderMessage() {
    if (winner === 'T') {
        messageEl.innerText = "It's a Tie!!";
    } else if (winner === 1) {
        messageEl.innerHTML = `<span style="color: ${colors[winner]}"> X </span> Wins!`;
    } else if (winner === -1) {
        messageEl.innerHTML = `<span style="color: ${colors[winner]}"> O </span> Wins!`;
    } else if (turn === 1) {
        messageEl.innerHTML = `<span style="color: ${colors[turn]}"> X's </span> Turn`;
    } else if (turn === -1) {
        messageEl.innerHTML = `<span style="color: ${colors[turn]}"> O's </span> Turn`;
    }
}

resetBtn.addEventListener('click', init);

function makeChoice(colIdx, rowIdx) {
    if (table[colIdx][rowIdx] !== 0 || winner !== null) {
        return;
    }

    table[colIdx][rowIdx] = turn;
    winner = checkWinner();
    turn *= -1;
    render();
}

function checkWinner() {
    let isWinner = false;
    let isTie = true;
    winningCombos.forEach(function (combos, index) {
        let winningCombo = [];
        combos.forEach(function (val, idx) {
            if (table[val[0]][val[1]] !== 0 && table[val[0]][val[1]] === turn) {
                winningCombo.push(val);
            }
            if (winningCombo.length === 3) {
                winner = table[val[0]][val[1]];
                renderMessage();
                disableMoves();
                isWinner = true;
            }
        });
        if (winningCombo.length === 0) {
            isTie = false;
        }
    });
    if (!isWinner && !isTie) {
        turn *= -1;
    }
}

function disableMoves() {
    squares.forEach(function (square) {
        square.removeEventListener('click', makeChoice);
    });
}
