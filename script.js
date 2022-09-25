document.addEventListener('DOMContentLoaded', () => {

    const squares = Array.from(document.querySelectorAll('.cell'));
    const displayPlayersTurn = document.querySelector('.displayPlayer');
    const resetButton = document.querySelector('#resetBtn');
    const displayGameResult = document.querySelector('.displayGameResult');

    let board = Array(9).fill(null);
    let currentPLayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE !';

    squares.forEach((cell, index) => {
        cell.addEventListener('click', () => userAction(cell, index));
    });

    const winingConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;

        for (let i = 0; i <= winingConditions.length - 1; i++) {
            const winCondition = winingConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === null || b === null || c === null) {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            announce(currentPLayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            return isGameActive = false;
        }

        if (!board.includes(null)) announce(TIE);

    }

    const announce = (type) => {
        switch (type) {
            case PLAYERO_WON:
                displayGameResult.innerHTML = 'Player <span class="displayPlayer blink">O</span> Has Won!';
                break;
            case PLAYERX_WON:
                displayGameResult.innerHTML = 'Player <span class="displayPlayer blink">X</span> Has Won!';
                break;
            case TIE:
                displayGameResult.innerText = TIE;
        }
        displayGameResult.classList.remove('hide');
        resetButton.classList.remove('hide');

    }

    const updateBoard = (index) => {
        board[index] = currentPLayer;
    }

    const changePlayer = () => {
        displayPlayersTurn.classList.remove(`player${currentPLayer}`);
        currentPLayer = currentPLayer === 'X' ? 'O' : 'X';
        displayPlayersTurn.innerText = currentPLayer;
        displayPlayersTurn.classList.add(`player${currentPLayer}`);
    }

    const userAction = (cell, index) => {

        if (isGameActive) {
            cell.innerText = currentPLayer;
            cell.classList.add(`player${currentPLayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        } else {
            //GAMEOVER !
        }

    }

    const resetGame = () => {
        board.fill(null);
        isGameActive = true;
        displayGameResult.classList.add('hide');
        displayGameResult.classList.remove('blink');
        resetButton.classList.add('hide');

        if (currentPLayer === 'O') changePlayer();

        squares.forEach(cell => {
            cell.innerText = '';
            cell.classList.remove('playerX');
            cell.classList.remove('playerO');

        })
    }

    resetButton.addEventListener('click', resetGame);
});

