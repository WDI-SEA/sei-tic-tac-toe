/*----- constants -----*/
const PLAYERS = {
  0: "init",
  1: "player",
  "-1": "CPU",
};

/*----- state variables -----*/
let board; // array of 7 column arrays
let turn; // 1 or -1
let winner; // null = no winner; 1 or -1 = winner; 'T' = Tie

/*----- cached elements  -----*/
//DOM ELEMENTS

/*----- event listeners -----*/

/*----- functions -----*/
init();

function init() {
  renderBoard();
  renderControls();
  render();
}

function renderBoard() {
  //turn 90deg counterclock to visualize
  (board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]),
    (turn = 0);
  winner = null;
}

function renderMessage() {
  if (winner === "T") {
    //update dom element to its a tie
  }
}
