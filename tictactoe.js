/* 
/* your css file*/
/* what css is needed to layout the page like your wireframes */
/* DO NOT DO ANY FANCY STYLING UNTIL THE JAVASCRIPT IS DONE */

// your javascript file

/*
what kind of variables will I need? (app state)
  data container (array) to hold who has gone where (the gameboard) (this would contain player choices)
  (optional) -- define each players choice x/o
  whose turn it is? -- state of player
  winning combinations to check (data container?)
  toggle/boolean if someone has won (is user allowd to click/keep playing)
  (cats option 1) board is full = draw
  (cats option 2) turn count for cats game

what will happen when the user clicks?
  slection of X or O (who's turn is it?)
  mark space if it is availible
    if it is marked -- do nothing
  check if there is a winner
    if there is a winner -- stop gameplay and show who won
    if not -- let gameplay continue
*/

//  MAGIC SQUARE --> any row/diagnoal of three adds up to 15
//  reference:
// const magicSquare = {
//   a: 2,
//   b: 7,
//   c: 6,
//   d: 9,
//   e: 5,
//   f: 1,
//   g: 4,
//   h: 3,
//   i: 8,
// };

// VARIABLES FOR DOC ELEMENTS
const blocks = document.querySelectorAll(".board-block");

const blockA = document.getElementById("a");
const blockB = document.getElementById("b");
const blockC = document.getElementById("c");
const blockD = document.getElementById("d");
const blockE = document.getElementById("e");
const blockF = document.getElementById("f");
const blockG = document.getElementById("g");
const blockH = document.getElementById("h");
const blockI = document.getElementById("i");

const topRow = document.querySelector(".top-row").children;
const midRow = document.querySelector(".middle-row").children;
const bottomRow = document.querySelector(".bottom-row").children;

const leftCol = document.querySelectorAll(".left-col");
const rightCol = document.querySelectorAll(".right-col");
const midCol = document.querySelectorAll(".mid-col");

const midHoriz = document.querySelectorAll(".mid-horiz");
const midVert = document.querySelectorAll(".mid-vert");

const diagTopLeft = document.querySelectorAll(".diagonal-topleft");
const diagTopRight = document.querySelectorAll(".diagonal-topright");

const msgBox = document.querySelector(".message-box");
const winMessage = document.querySelector(".win-message");
const turnCount = document.querySelector("#turn-count");
const xToggle = document.querySelector("#x-turn");
const oToggle = document.querySelector("#o-turn");
const resetButton = document.querySelector(".reset-game");
const resetWins = document.querySelector(".reset-wins");

const xScore = document.getElementById("x-score");
const oScore = document.getElementById("o-score");
// ------------------------------

// Initialization and Declarations

const winConditions = [
  midRow,
  topRow,
  bottomRow,
  leftCol,
  rightCol,
  midCol,
  midHoriz,
  midVert,
  diagTopRight,
  diagTopLeft,
];

const blockRefs = [
  blockA,
  blockB,
  blockC,
  blockD,
  blockE,
  blockF,
  blockG,
  blockH,
  blockI,
];

let xWins = 0;
let oWins = 0;

let currentTurn = "X";
let turnNumber = 0;

turnCount.innerText = turnNumber;
oScore.innerText = oWins;
xScore.innerText = xWins;

xToggle.style.backgroundColor = "rgba(0, 255, 0, 0.6)";

let winArray = [];
let drawArray = [];

// Function to check win conditions for three X or O in a 'row' (or diagonal)
const checkX = (value) => value === "X";
const checkO = (value) => value === "O";
const checkDraw = (value) => value !== "";
// -------------------------------

// Check Win function -- need to modify return conditions and remove console.logs etc.
function checkWin(array) {
  for (c = 0; c < array.length; c++) {
    drawArray = [];
    winArray = [];
    for (i = 0; i < array[c].length; i++) {
      winArray.push(array[c][i].innerText);
    }
    if (winArray.every(checkX)) {
      xWins++;
      xScore.innerText = xWins;
      winMessage.innerText = "X has 3 in a row! X is the WINNER!";
      msgBox.style.backgroundColor = "rgba(0, 255, 0, 0.6)";
      blocks.forEach(removeClicks);
      break;
    } else if (winArray.every(checkO)) {
      oWins++;
      oScore.innerText = oWins;
      winMessage.innerText = "O has 3 in a row! O is the WINNER!";
      msgBox.style.backgroundColor = "rgba(0, 255, 0, 0.6)";
      blocks.forEach(removeClicks);
      break;
    }
  }
  for (a = 0; a < blockRefs.length; a++) {
    drawArray.push(blockRefs[a].innerText);
  }
  if (
    drawArray.every(checkDraw) &&
    winArray.every(checkX) !== true &&
    winArray.every(checkO) !== true
  ) {
    winMessage.innerText = "Draw! No more moves available. No one wins!";
    msgBox.style.backgroundColor = "rgba(255, 0, 0, 0.6)";
    blocks.forEach(removeClicks);
  }
}
// ----------------

function updateBoard(e) {
  winMessage.innerText = "NO WINNER ...YET";

  if (e.target.innerText === "" && currentTurn === "X") {
    e.target.innerText = "X";
    turnNumber += 1;
    turnCount.innerText = turnNumber;
    currentTurn = "O";
    xToggle.style.backgroundColor = "";
    oToggle.style.backgroundColor = "rgba(0, 255, 0, 0.6)";
  } else if (e.target.innerText === "" && currentTurn === "O") {
    e.target.innerText = "O";
    turnNumber += 1;
    turnCount.innerText = turnNumber;
    currentTurn = "X";
    xToggle.style.backgroundColor = "rgba(0, 255, 0, 0.6)";
    oToggle.style.backgroundColor = "";
  } else {
    alert("Not a valid move. Please click a blank square.");
  }
  checkWin(winConditions);
}

function addClicks(element) {
  element.addEventListener("click", updateBoard);
}

function removeClicks(element) {
  element.removeEventListener("click", updateBoard);
}

blocks.forEach(addClicks);

function resetGame() {
  blocks.forEach((element) => (element.innerText = ""));
  currentTurn = "X";
  turnNumber = 0;
  turnCount.innerText = turnNumber;
  xToggle.style.backgroundColor = "rgba(0, 255, 0, 0.6)";
  oToggle.style.backgroundColor = "";
  winMessage.innerText = "NO WINNER ... YET";
  msgBox.style.backgroundColor = "rgba(255, 255, 0, 0.6)";
  blocks.forEach(addClicks);
}

function resetScore() {
  oWins = 0;
  xWins = 0;
  xScore.innerText = xWins;
  oScore.innerText = oWins;
}

resetButton.addEventListener("click", resetGame);

resetWins.addEventListener("click", resetScore);
