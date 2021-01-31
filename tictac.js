let squaresArr = ["", "", "", "", "", "", "", "", ""];
let playerX = true;
const allSquares = document.querySelectorAll(".square");
const textDisplay = document.querySelector("#winner");
textDisplay.innerText = `Player X's turn.`;

//LOOPING THROUGH squaresArr. Make's allSquare's innerText = currentSquare
const matchSquares = () => {
  for (let i = 0; i < squaresArr.length; i++) {
    const currentSquare = squaresArr[i];
    allSquares[i].innerText = currentSquare;
    // console.log(i)
  }
};
//created click event on individual squares -> LOOPING THROUGH sq# (in CSS)
for (let i = 0; i < allSquares.length; i++) {
  const currentSquare = allSquares[i];
  currentSquare.addEventListener("click", () => {
    //Stops you from changing what a square says after being clicked.
    if (Boolean(squaresArr[i])) return;

    if (playerX === true) {
      squaresArr[i] = "X";
      playerX = false;
      textDisplay.innerText = `Player O's turn.`;
    } else {
      squaresArr[i] = "O";
      playerX = true;
      textDisplay.innerText = `Player X's turn.`;
    }
    if (
      //X Wins Vertically
      (squaresArr[0] === "X" &&
        squaresArr[3] === "X" &&
        squaresArr[6] === "X") ||
      (squaresArr[1] === "X" &&
        squaresArr[4] === "X" &&
        squaresArr[7] === "X") ||
      (squaresArr[2] === "X" &&
        squaresArr[5] === "X" &&
        squaresArr[8] === "X") ||
      //X Wins Horizontally
      (squaresArr[0] === "X" &&
        squaresArr[1] === "X" &&
        squaresArr[2] === "X") ||
      (squaresArr[3] === "X" &&
        squaresArr[4] === "X" &&
        squaresArr[5] === "X") ||
      (squaresArr[6] === "X" &&
        squaresArr[7] === "X" &&
        squaresArr[8] === "X") ||
      //X Wins Diagonally
      (squaresArr[0] === "X" &&
        squaresArr[4] === "X" &&
        squaresArr[8] === "X") ||
      (squaresArr[2] === "X" && squaresArr[4] === "X" && squaresArr[6] === "X")
    ) {
      textDisplay.innerText = `Player X wins!`;
    }
    if (
      //O Wins Vertically
      (squaresArr[0] === "O" &&
        squaresArr[3] === "O" &&
        squaresArr[6] === "O") ||
      (squaresArr[1] === "O" &&
        squaresArr[4] === "O" &&
        squaresArr[7] === "O") ||
      (squaresArr[2] === "O" &&
        squaresArr[5] === "O" &&
        squaresArr[8] === "O") ||
      //O Wins Horizontally
      (squaresArr[0] === "O" &&
        squaresArr[1] === "O" &&
        squaresArr[2] === "O") ||
      (squaresArr[3] === "O" &&
        squaresArr[4] === "O" &&
        squaresArr[5] === "O") ||
      (squaresArr[6] === "O" &&
        squaresArr[7] === "O" &&
        squaresArr[8] === "O") ||
      //O Wins Diagonally
      (squaresArr[0] === "O" &&
        squaresArr[4] === "O" &&
        squaresArr[8] === "O") ||
      (squaresArr[2] === "O" && squaresArr[4] === "O" && squaresArr[6] === "O")
    ) {
      textDisplay.innerText = `Player O wins!`;
    }
    // if (
    //     //WASH

    // )
    matchSquares();
  });
}
//RESET BUTTON
const resetButton = document.querySelector("button");
resetButton.addEventListener("click", () => {
  squaresArr = ["", "", "", "", "", "", "", "", ""];
  matchSquares();
});
