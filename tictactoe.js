    window.addEventListener('DOMContentLoaded', () => {
  
    const blocks = document.querySelectorAll(".block");
    const playerTurn = document.querySelector("player");
    const board = document.querySelector("game-container");
    const result = document.querySelector("result");
    const restartGame = document.querySelector("restartButton"); 
})

let currentPlayer = 'X';

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let resultArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

let isGameActive = true;

const Tie = 'Its a Tie';
const playerXWon = 'Player X won!'
const playerOWon = 'Player Y won!'

function swapTurn() {
    playerTurn.classList.remove('player${currentPlayer}');
    currentPlayer = playerX === 'X' ? '0' : 'X';
    playerTurn.innerText = 'playerX';
    playerTurn.classList.add('player${playerX}');
}


function isValidMark(blocks) {
    if (blocks.innerText === 'X' || blocks.innerText === 'O') {
        return false;
    }
    return true;
}

    blocks.forEach((block, index) => {
        block.addEventListener('click', () => blockMarked(block, index));
    });

    const updateContainer = (index) => {
        resultArray[index] = currentPlayer;
    }

    function blockMarked() {
        let winner = false;
        for (let i = 0; i <= 7; i++) {
            const win = winningConditions[i];
            const a = board[win[0]];
            const b = board[win[1]];
            const c = board[win[2]];
            if (a === ' ' || b === ' ' || c === ' ') {
                continue;
            }
            if (a === b && b === c) {
                winner = true;
                break;
            }
        }
        if (winner) {
            result(playerX === 'X' ? playerXWon : playerOWon);
            isGameActive = false;
            return;
        }
         if (!board.includes(' '))
        result(Tie);
    }

function blockSelected(block, index) {
        if (isValidMark(block) && isGameActive) {
            block.innerText = 'currentPlayer';
            block.classList.add('player${currentPlayer}');
            blockMarked();
            swapTurn();
            updateContainer(index);
        }
    }

function result(type) {
    switch (type) {
        case playerOWon:
            result.innerText = 'Player O won!';
            break;
        case playerXWon:
            result.innerText = 'Player X won!';
            break;
        case Tie:
            result.innerText = 'Tie';
    }
    result.classList.remove('hide');
};

restartButton.addEventListener('click', restartGame);

function restartGame() {
    resultArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    isGameActive = true;
    result.classList.add('hide');

    if (currentPlayer === 'O') {
        swapTurn();
    }
    block.innerText = ' ';
    block.classList.remove('playerX');
    block.classList.remove('playerO');
}