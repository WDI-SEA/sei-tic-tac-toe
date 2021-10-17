const xGetsTheSquare = 'x';
const circleGetsTheSquare = 'o';
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const boxElements = document.querySelectorAll('[data-box]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
let osTurn;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
  osTurn = false;
  boxElements.forEach((box) => {
    box.classList.remove(xGetsTheSquare);
    box.classList.remove(circleGetsTheSquare);
    box.removeEventListener('click', handleClick);
    box.addEventListener('click', handleClick, { once: true });
  });
  winningMessageElement.classList.remove('show');
}

function handleClick(e) {
  const box = e.target;
  const currentClass = osTurn ? circleGetsTheSquare : xGetsTheSquare;
  placeMark(box, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!';
  } else {
    winningMessageTextElement.innerText = `${osTurn ? "O's" : "X's"} Wins!`;
  }
  winningMessageElement.classList.add('show');
}

function isDraw() {
  return [...boxElements].every((box) => {
    return box.classList.contains(xGetsTheSquare) || box.classList.contains(circleGetsTheSquare);
  });
}

function placeMark(box, currentClass) {
  box.classList.add(currentClass);
}

function swapTurns() {
  osTurn = !osTurn;
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return boxElements[index].classList.contains(currentClass);
    });
  });
}
