document.addEventListener('DOMContentLoaded', () => {

    const displayPlayersName = document.querySelector('.displayPlayer');
    const displayPlayersTurn = document.querySelector('.displayPlayersTurn');
    const resetButton = document.querySelector('#resetBtn');
    const displayGameResult = document.querySelector('.displayGameResult');

    let board = Array(9).fill(null);
    let currentPLayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'DRAW !';

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

    const checkCellClicked = (clickedCell, clickedCellIndex) => {
        board[clickedCellIndex] = currentPLayer;
        clickedCell.innerText = currentPLayer;
        clickedCell.classList.add(`player${currentPLayer}`);
    }

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
            isGameActive = false;
            return;
        }

        let roundDraw = !board.includes(null);
        if (roundDraw) {
            announce(TIE);
            isGameActive = false;
            return;
        }
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
        displayPlayersTurn.classList.add('hide');

    }

    const updateBoard = (clickedCellIndex) => {
        board[clickedCellIndex] = currentPLayer;
    }

    const changePlayer = () => {
        displayPlayersName.classList.remove("player" + currentPLayer);
        currentPLayer = currentPLayer === 'X' ? 'O' : 'X';
        displayPlayersName.innerText = currentPLayer;
        displayPlayersName.classList.add("player" + currentPLayer);
    }

    const userAction = (clickedCellEvent) => {

        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

        if (board[clickedCellIndex] !== null || !isGameActive) {
            return;
        }

        if (isGameActive) {
            checkCellClicked(clickedCell, clickedCellIndex)
            updateBoard(clickedCellIndex);
            handleResultValidation();
            changePlayer();
        }

    }

    const resetGame = () => {
        board.fill(null);
        isGameActive = true;
        displayGameResult.classList.add('hide');
        displayGameResult.classList.remove('blink');
        resetButton.classList.add('hide');
        displayPlayersTurn.classList.remove('hide');
       
        if (currentPLayer === 'O') changePlayer();

        document.querySelectorAll('.cell').forEach((cell) => {

            cell.classList.remove(`playerX`);
            cell.classList.remove(`playerO`);
            cell.innerHTML = '';

        })
    }

    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', userAction));
    resetButton.addEventListener('click', resetGame);
});