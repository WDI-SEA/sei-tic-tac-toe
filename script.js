// establish helper functions
const addListener = (element) => {
  element.addEventListener("click", () => {
    clickSquare(element);
  });
};

const clickSquare = (square) => {
  tryToClaimSquare(square);
  checkForWin();
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

const checkForWin = () => {
  winLines.forEach((line) => {
    let lineText = "";
    line.forEach((square) => {
      lineText += square.textContent;
    });
    if (lineText === "XXX") {
      winGame(1);
    }
    if (lineText === "OOO") {
      winGame(2);
    }
  });
};

const winGame = (playerNumber) => {
  alert(`PH Player ${playerNumber} wins!`);
};

const checkForDraw = () => {
  let squares = document.querySelectorAll(".locked");
  if (squares.length === 9) {
    alert("PH Draw game!");
  }
};

// create board tiles and add listeners
for (let i = 0; i < 9; i++) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "square");
  document.querySelector(".gameBoard").appendChild(newDiv);
  addListener(newDiv);
}

// create array of board squares for use with array methods
let domSquares = document.querySelectorAll(".square");
let squaresArray = [];
domSquares.forEach((square) => {
  squaresArray.push(square);
});

// establish initial game conditions/perameters
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
