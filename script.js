// establish helper functions
const clickSquare = (square) => {
  tryToClaimSquare(square);
  if (checkForWin("X") || checkForWin("O")) {
    winGame();
  }
  if (winnerExists === false) {
    checkForDraw();
  }
};

const tryToClaimSquare = (square) => {
  if (!square.classList.contains("locked")) {
    claimSquare(square);
  } else {
    playerNumber = playerOneTurn ? "one" : "two";
    turnDisplay.firstElementChild.textContent = `Sorry player ${playerNumber}, 
    that square is taken! Pick another one.`;
  }
};

const claimSquare = (square) => {
  playerOneTurn
    ? (square.style.backgroundColor = "#066ea1") && (square.innerText = "X")
    : (square.style.backgroundColor = "#5a3c77") && (square.innerText = "O");
  square.classList.add("locked");
  playerOneTurn = !playerOneTurn;
  promptNextPlayer(playerOneTurn ? "one" : "two");
};

const promptNextPlayer = (playerNumber) => {
  let randNum = Math.floor(Math.random() * exhortations.length);
  let randExhort = exhortations[randNum];
  turnDisplay.firstElementChild.textContent = `Player ${playerNumber}, ${randExhort}`;
};

const checkForWin = (playerSymbol) => {
  return winLines.some((line) => {
    return line.every((square) => square.textContent === playerSymbol);
  });
};

const winGame = () => {
  // following line may look backwards -- note that
  // turn does change one more time after the
  // winning move, so if player one wins, it will be
  // player two's turn at conclusion of the game.
  playerNumber = playerOneTurn ? "two" : "one";
  turnDisplay.firstElementChild.textContent = `Player ${playerNumber} takes the win!
  Press the reset button to play again.`;
  winnerExists = true;
};

const checkForDraw = () => {
  let squares = document.querySelectorAll(".locked");
  if (squares.length === 9) {
    turnDisplay.firstElementChild.textContent = `Ah dang...it's a draw.  
    Press the reset button to play again.`;
  }
};

const resetGame = () => {
  playerOneTurn = true;
  winnerExists = false;
  squaresArray.forEach((square) => {
    square.classList.remove("locked");
    square.textContent = "";
    square.style.backgroundColor = "hsl(200, 20%, 30%)";
  });
  turnDisplay.firstElementChild.textContent = `Player one, your turn!`;
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
let turnDisplay = document.querySelector(".turnDisplay");
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

let exhortations = [
  "show us what you got!",
  "don't give up!",
  "make this move count!",
  "are you gonna take that?!",
  "you've trained for this!",
  "demonstrate excellence!",
  "I believe in you!",
];
