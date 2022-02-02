// First thing: Review what we have done
// *What HTML elements do you need?
// *What will the user Click on?
// *Think about the 'user experience' -- what HTML elements are needed for that
//
// html
//
// css
//
// javascipt
// What kind of variables will i need?
// data container (array) to hold who has gone where (the gameboard)

// what will happen? when the user clicks?
// selection of X or O (who's turn it is?)
// mark space if it is availabile
// if it is marked do nothing
// check if there is a winner
// if there is a winner stop the game play and show who won
// if not -- let gameplay continue
// (optional) -- define each player choice x/o
// whose turn it is
// winning combination to check (data container?)
// toggle/boolean if someone has won (is user allowed to click/keep playing)
// board is full = draw
// turn count for cats game

const player1 = "x";
const player2 = "O";

<div id="results"></div>;

const results = document.getElementById("results");

// results.innerText =

const moveEvent = () => {};

// add event listeners to each box
// allow current player to mark a spot
// check if mark is a tie
// if a tie, display tie results
//check if mark is a win
// if a win, display with results and doe't allow  any other clicks

// state who the current player will be

// use arrays

// use one array to comapare the solution

const winCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const player1Moves = []
  // array method
  .includes();
