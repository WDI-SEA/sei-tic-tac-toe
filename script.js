// establish initial game conditions
let playerOneTurn = true;

// establish helper functions
const addListener = (element) => {
  element.addEventListener("click", () => {
    clickSquare(element);
  });
};

const clickSquare = (square) => {
  claimSquare(square);
  // checkForWin();
  // checkForDraw();
};

let claimSquare = (square) => {
  if (!square.classList.contains("locked")) {
    playerOneTurn
      ? (square.style.backgroundColor = "pink")
      : (square.style.backgroundColor = "blue");
    square.classList.add("locked");
    playerOneTurn = !playerOneTurn;
  } else {
    alert("PH Sorry -- that square's taken!");
  }
};

// create board tiles and add listeners
for (let i = 0; i < 9; i++) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "square");
  document.querySelector(".gameBoard").appendChild(newDiv);
  addListener(newDiv);
}
