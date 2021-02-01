const statusDisplay = document.querySelector('.gameStatus');

let gamePlay = true;

let player = "X";

let  moves = ["", "", "", "", "", "", "", "", ""];

const win = () => `${player} has won!`;
const catsGame = () => `Cats game!`;
const activePlayer = () => player + ' it is your turn'

function whichCellClicked(clickedCell, indexClickedCell) {
    moves[indexClickedCell] = player;
    clickedCell.innerHTML = player;
}

function whosTurn() {
    player = player === "X" ? "O" : "X";
    statusDisplay.innerHTML = activePlayer();
}

const waysToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkResult() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const win = waysToWin[i];
        let a = moves[win[0]];
        let b = moves[win[1]];
        let c = moves[win[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
if (roundWon) {
        statusDisplay.innerHTML = win();
        gamePlay = false;
    }
}

function cellClick(clickedCellEvent) {
        const clickedCell = clickedCellEvent.target;
        const indexClickedCell = parseInt(
          clickedCell.getAttribute('data-cell-index')
        );
        if (moves[indexClickedCell] !== "" || !gamePlay) {
            return;
        }   
        whichCellClicked(clickedCell, indexClickedCell);
        checkResult();
    }
        let tie = !moves.includes("");
        if (tie) {
            statusDisplay.innerHTML = catsGame()
            gamePlay = false
        }

function restart() {
    gamePlay = true;
    player = "X";
    moves = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = activePlayer();
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.gameRestart').addEventListener('click', restart);