// establish helper functions
const clickSquare = (square) => {
  tryToClaimSquare(square);
  if (checkForWin("X")) {
    winGame("one");
  } else if (checkForWin("O")) {
    winGame("two");
  }
  if (winnerExists === false) {
    checkForDraw();
  }
};

const tryToClaimSquare = (square) => {
  if (!square.classList.contains("locked")) {
    claimSquare(square);
  } else {
    alert("PH Sorry -- that square's taken!");
  }
};

const claimSquare = (square) => {
  playerOneTurn
    ? (square.style.backgroundColor = "pink") && (square.innerText = "X")
    : (square.style.backgroundColor = "lightblue") && (square.innerText = "O");
  square.classList.add("locked");
  playerOneTurn = !playerOneTurn;
};

const checkForWin = (playerSymbol) => {
  return winLines.some((line) => {
    return line.every((square) => square.textContent === playerSymbol);
  });
};

const winGame = (player) => {
  alert(`Player ${player} wins!`);
  winnerExists = true;
};

const checkForDraw = () => {
  let squares = document.querySelectorAll(".locked");
  if (squares.length === 9) {
    alert("PH Draw game!");
  }
};

const resetGame = () => {
  playerOneTurn = true;
  winnerExists = false;
  squaresArray.forEach((square) => {
    square.classList.remove("locked");
    square.textContent = "";
    square.style.backgroundColor = "darkred";
  });
};

// create board tiles, add listeners, create array of DOM nodes
let squaresArray = [];

const addSquareListener = (element) => {
  element.addEventListener("click", () => {
    if (winnerExists === false) {
      clickSquare(element);
    }
  });
};

for (let i = 0; i < 9; i++) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "square");
  document.querySelector(".gameBoard").appendChild(newDiv);
  addSquareListener(newDiv);
  squaresArray.push(newDiv);
}
document.querySelector("button").addEventListener("click", resetGame);

// establish initial game conditions
let playerOneTurn = true;
let winnerExists = false;
let winLines = [
  [squaresArray[0], squaresArray[1], squaresArray[2]],
  [squaresArray[3], squaresArray[4], squaresArray[5]],
  [squaresArray[6], squaresArray[7], squaresArray[8]],
  [squaresArray[0], squaresArray[3], squaresArray[6]],
  [squaresArray[1], squaresArray[4], squaresArray[7]],
  [squaresArray[2], squaresArray[5], squaresArray[8]],
  [squaresArray[0], squaresArray[4], squaresArray[8]],
  [squaresArray[2], squaresArray[4], squaresArray[6]],
];
