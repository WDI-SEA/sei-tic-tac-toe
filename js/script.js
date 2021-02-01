let message = null;
let gameOver = false;
let gameState = {
  box1: false,
  box2: false,
  box3: false,
  box4: false,
  box5: false,
  box6: false,
  box7: false,
  box8: false,
  box9: false,
};
let playerOne = [];
let playerTwo = [];
let picks = [playerOne, playerTwo];
const combo1 = ["box1", "box2", "box3"];
const combo2 = ["box4", "box5", "box6"];
const combo3 = ["box7", "box8", "box9"];
const combo4 = ["box1", "box4", "box7"];
const combo5 = ["box2", "box5", "box8"];
const combo6 = ["box3", "box6", "box9"];
const combo7 = ["box1", "box5", "box9"];
const combo8 = ["box3", "box5", "box7"];

let winningCombos = [
  combo1,
  combo2,
  combo3,
  combo4,
  combo5,
  combo6,
  combo7,
  combo8,
];

let resetBtnEl = null;
let boxEl = null;
let spacePicked = null;
let spaceMarked = null;
let count = 0;
let space = "";

function resetGame() {
  gameOver = false;
  console.log("this is working");
  initializeGame();
}
function initializeGame() {
  message = document.createElement("p");
  let parent = document.getElementById("#message");
  message.innerText = "Your turn X!";
  console.log(message);
  //parent.append(message);
  gameOver = false;
  gameState = {
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false,
    box8: false,
    box9: false,
  };
  playerOne = [];
  playerTwo = [];
  boxEl = null;
  space = "";
  //console.log("this is working");
}

function pickSpace(event) {
  let spacePicked = event.target.id;
  spaceMarked = document.querySelector(`#${spacePicked}`);
  console.log(event.target.id);
  function countClicks() {
    if (!gameOver) {
      ++count;
    }
  }
  if (count % 2 === 0 && gameState[spacePicked] === false) {
    playerOne.push(`${spacePicked}`);
    gameState[spacePicked] = true;
    spaceMarked.innerText = "X";
    console.log(playerOne);
    countClicks();
  }
  if (count % 2 !== 0 && gameState[spacePicked] === false) {
    playerTwo.push(`${spacePicked}`);
    gameState[spacePicked] = true;
    spaceMarked.innerText = "O";
    console.log(playerTwo);
    countClicks();
  }
  for (combo of winningCombos) {
    if (playerOne.sort().toString() === combo.sort().toString()) {
      console.log("X won");
    } else if (playerTwo.sort().toString() === combo.sort().toString()) {
      console.log("O won");
    }
    // else if (count === 9) {
    //   console.log("cat's game!");
    // }
  }
  // console.log(count);
}
document.addEventListener("DOMContentLoaded", function () {
  resetBtnEl = document.querySelector("#reset");
  boxEl = document.querySelector(".box");
  space = document.querySelectorAll(".space").value;
  resetBtnEl.addEventListener("click", resetGame);
  boxEl.addEventListener("click", pickSpace);
  initializeGame();
});

//TO DO:
//clear the contents of the board upon refresh
//Display a message to indicate which turn is about to be played.
//Display Draw
//Display winner
//disable boxes after WIN
