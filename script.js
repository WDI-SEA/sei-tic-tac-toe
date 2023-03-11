// establish initial game conditions
let playerOneTurn = true;

// establish helper functions
const addListener = (element) => {
  element.addEventListener("click", () => {
    clickSquare(element);
  });
};

const clickSquare = (square) => {
  tryToClaimSquare(square);
  // checkForWin();
  // checkForDraw();
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

// create board tiles and add listeners
for (let i = 0; i < 9; i++) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "square");
  document.querySelector(".gameBoard").appendChild(newDiv);
  addListener(newDiv);
}
