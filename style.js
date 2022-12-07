const boxes = Array.from(document.getElementsByClassName("box"));
// console.log(boxes);
const playText = document.getElementById("playText");
const spaces = [null, null, null, null, null, null, null, null, null];
const O_text = "O";
const X_text = "X";
let currentPlayer = O_text;

const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += "border-bottom: 3px solid var(--green);";
    }
    if (index % 3 === 0) {
      styleString += "border-right: 3px solid var(--green);";
    }
    if (index % 3 === 2) {
      styleString += "border-left: 3px solid var(--green);";
    }
    if (index > 5) {
      styleString += "border-top: 3px solid var(--green);";
    }
    box.style = styleString;
    box.addEventListener("click", boxClicked);
  });
};

const boxClicked = (e) => {
  //   console.log("box was clicked");
  const id = e.target.id;
  //   console.log(id);
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerHasWon()) {
      playText.innerText = `${currentPlayer} has won!`;
      return;
    }
    currentPlayer = currentPlayer === O_text ? X_text : O_text;
  }
};

const playerHasWon = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      console.log(`${currentPlayer} wins up top`);
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins up left`);
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      console.log(`${currentPlayer} wins diagonally`);
      return true;
    }
    // }
    //   if (spaces[8] === currentPlayer) {
    //     if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
    //       console.log(`${currentPlayer} wins on the right`);
    //       return true;
    //     }
    //     if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
    //       console.log(`${currentPlayer} wins on the bottom`);
    //       return true;
    //     }
    //   }
    //   if (spaces[4] === player) {
    //     if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
    //       console.log(`${currentPlayer} wins down the middle`);
    //       return true;
    //     }
    //     if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
    //       console.log(`${currentPlayer} wins horizontally`);
    //       return true;
    //     }
  }
};

drawBoard();
