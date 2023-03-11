// establish initial game conditions
let playerOneTurn = true;

// establish helper functions
const addListener = (element) => {
  element.addEventListener("click", () => {
    clickSquare(element);
  });
};

const clickSquare = (square) => {
  // checkIfTaken();
  // checkForWin();
  // checkForDraw();
  claimSquare(square);
  playerOneTurn = !playerOneTurn;
};

let claimSquare = (square) => {
  playerOneTurn
    ? (square.style.backgroundColor = "pink")
    : (square.style.backgroundColor = "blue");
};

// create board tiles and add listeners
for (let i = 0; i < 9; i++) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "square");
  document.querySelector(".gameBoard").appendChild(newDiv);
  addListener(newDiv);
}
