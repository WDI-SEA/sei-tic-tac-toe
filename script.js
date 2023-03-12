// establish helper functions
const addListener = (element) => {
  element.addEventListener("click", () => {
    clickSquare(element);
  });
};

const clickSquare = (square) => {
  tryToClaimSquare(square);

  // broken because playerOneTurn flips before win check.
  // Probably need to refactor how I'm managing "player turn"
  // state in addition to finishing game end logic.
  if (checkForWin(playerOneTurn ? "X" : "O")) {
    alert(playerOneTurn ? "PH p1 win" : "PH p2 win");
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

const checkForDraw = () => {
  let squares = document.querySelectorAll(".locked");
  if (squares.length === 9) {
    alert("PH Draw game!");
  }
};

// create board tiles, add listeners, create array of DOM nodes
let squaresArray = [];
for (let i = 0; i < 9; i++) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "square");
  document.querySelector(".gameBoard").appendChild(newDiv);
  addListener(newDiv);
  squaresArray.push(newDiv);
}

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
