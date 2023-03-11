const squares = document.querySelectorAll(".square");
let playerOneTurn = true;

const addListener = (element) => {
  element.addEventListener("click", () => {
    clickSquare(element);
  });
};

squares.forEach((square) => {
  addListener(square);
});

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
