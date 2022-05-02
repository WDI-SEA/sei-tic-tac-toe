// I feel like i can find  more efficiencies  in the  code, but  not sure how they would function, my brain hurts.
// adding the score increment increases as functions helped save some lines of code, i think
// realising how finicky it is to call on and change variables from within a function is a thing
// making a function be the one to change the variable seems to do the trick?
// locking the board after the alert and before the board wiping would be cool
// this was fun
// setting a variable to be Id.innerhtml is bad, cant change that inner html element in a function
// instead  set the var to Id, when changing set var.innerhtml = w/e
// i feel like i copped out by not doing the array, this method made more sense in my head
// not going to remove all console logs incase i revisit, code could be cleaner

let one = document.getElementById("gameBtn1");
let two = document.getElementById("gameBtn2");
let three = document.getElementById("gameBtn3");
let four = document.getElementById("gameBtn4");
let five = document.getElementById("gameBtn5");
let six = document.getElementById("gameBtn6");
let seven = document.getElementById("gameBtn7");
let eight = document.getElementById("gameBtn8");
let nine = document.getElementById("gameBtn9");
let playerTurnStart = true;
let playerTurnDisplay = document.getElementById("playerturndisplay").innerHTML;
let playerTurn = "";
let winner = "who";
let gameBoard = document.getElementById("gameboard");
let rowTwoClear = document.getElementById("rowTwo");
let playerXScore = document.getElementById("scoredigitX");
let playerOScore = document.getElementById("scoredigitO");
document.getElementById("reset").nodeName = "reset";

document.addEventListener("click", function (clicked) {
  if (
    clicked.target &&
    clicked.target.nodeName == "BUTTON" &&
    clicked.target !== this.getElementById("reset") &&
    clicked.target !== this.getElementById("newgame")
  ) {
    if (
      playerTurnStart === true ||
      (playerTurn === "X" &&
        clicked.target.innerText !== "X" &&
        clicked.target.innerText !== "O")
    ) {
      playerTurn = "O";
      playerTurnStart = false;
      document.getElementById("playerturndisplay").innerHTML =
        "Player O's Turn!";
      //   console.log(playerTurn);
      clicked.target.innerText = "X";

      return playerTurn;
      return playerTurnDisplay;
    } else if (
      playerTurn === "O" &&
      clicked.target.innerText !== "X" &&
      clicked.target.innerText !== "O"
    ) {
      clicked.target.innerText = "O";
      playerTurn = "X";
      document.getElementById("playerturndisplay").innerHTML =
        "Player X's Turn!";
      return playerTurnDisplay;
      return playerTurn;
    }
  }

  return playerTurn;
  return playerTurnDisplay;
});
document
  .getElementById("reset")
  .addEventListener("click", function (resetbutton) {
    boardClear();
  });
document
  .getElementById("newgame")
  .addEventListener("click", function (newgamebutton) {
    newGame();
  });

document.addEventListener("click", function (winclick) {
  if (
    one.innerText &&
    one.innerText === three.innerText &&
    one.innerText === two.innerText
  ) {
    winner = one.innerText;
    alert("Player " + one.innerText + " is the winner!");
    scoreInc1();
    return playerXScore;
    console.log(playerXScore);

    console.log("winner is " + winner);
    return winner;
  } else if (
    four.innerText &&
    four.innerText === five.innerText &&
    four.innerText === six.innerText
  ) {
    winner = four.innerText;
    alert("Player " + four.innerText + " is the winner!");
    scoreInc4();
    boardClear();
    console.log("winner is " + winner);
    return winner;
  } else if (
    seven.innerText &&
    seven.innerText === eight.innerText &&
    seven.innerText === nine.innerText
  ) {
    winner = seven.innerText;
    alert("Player " + seven.innerText + " is the winner!");
    scoreInc7();
    boardClear();
    console.log("winner is " + winner);
    return winner;
  } else if (
    one.innerText &&
    one.innerText === four.innerText &&
    one.innerText === seven.innerText
  ) {
    winner = seven.innerText;
    alert("Player " + seven.innerText + " is the winner!");
    scoreInc7();
    boardClear();
    console.log("winner is " + winner);
    return winner;
  } else if (
    two.innerText &&
    two.innerText === five.innerText &&
    two.innerText === eight.innerText
  ) {
    winner = two.innerText;
    alert("Player " + two.innerText + " is the winner!");
    scoreInc2();
    boardClear();
    console.log("winner is " + winner);
    return winner;
  } else if (
    three.innerText &&
    three.innerText === six.innerText &&
    three.innerText === nine.innerText
  ) {
    winner = three.innerText;
    alert("Player " + three.innerText + " is the winner!");
    scoreInc3();
    boardClear();
    console.log("winner is " + winner);
    return winner;
  } else if (
    one.innerText &&
    one.innerText === five.innerText &&
    one.innerText === nine.innerText
  ) {
    winner = one.innerText;
    alert("Player " + one.innerText + " is the winner!");
    scoreInc1();
    boardClear();
    console.log("winner is " + winner);
    return winner;
  } else if (
    three.innerText &&
    three.innerText === five.innerText &&
    three.innerText === seven.innerText
  ) {
    winner = three.innerText;
    alert("Player " + three.innerText + " is the winner!");
    scoreInc7();
    boardClear();
    console.log("winner is " + winner);
    return winner;
  } else if (
    one.innerText &&
    two.innerText &&
    three.innerText &&
    four.innerText &&
    five.innerText &&
    six.innerText &&
    seven.innerText &&
    eight.innerText &&
    nine.innerText
  ) {
    alert("Cats Game!");
    boardClear();
  }
  return playerXScore;
});

const boardClear = function () {
  one.innerText = " ";
  two.innerText = " ";
  three.innerText = " ";
  four.innerText = " ";
  five.innerText = " ";
  six.innerText = " ";
  seven.innerText = " ";
  eight.innerText = " ";
  nine.innerText = " ";
};
const newGame = function () {
  boardClear();
  playerXScore.innerHTML = "0";
  playerOScore.innerHTML = "0";
};

const scoreInc1 = function () {
  if (one.innerText === "X") {
    playerXScore.innerHTML++;
    console.log(playerXScore);
    boardClear();
    return playerXScore;
  } else if (one.innerText === "O") {
    playerOScore.innerHTML++;
    boardClear();
    return playerOScore;
  }
};
const scoreInc4 = function () {
  if (four.innerText === "X") {
    playerXScore.innerHTML++;
    console.log(playerXScore);
    boardClear();
    return playerXScore;
  } else if (four.innerText === "O") {
    playerOScore.innerHTML++;
    boardClear();
    return playerOScore;
  }
};
const scoreInc7 = function () {
  if (seven.innerText === "X") {
    playerXScore.innerHTML++;
    console.log(playerXScore);
    boardClear();
    return playerXScore;
  } else if (seven.innerText === "O") {
    playerOScore.innerHTML++;
    boardClear();
    return playerOScore;
  }
};
const scoreInc2 = function () {
  if (two.innerText === "X") {
    playerXScore.innerHTML++;
    console.log(playerXScore);
    boardClear();
    return playerXScore;
  } else if (two.innerText === "O") {
    playerOScore.innerHTML++;
    boardClear();
    return playerOScore;
  }
};
const scoreInc3 = function () {
  if (three.innerText === "X") {
    playerXScore.innerHTML++;
    console.log(playerXScore);
    boardClear();
    return playerXScore;
  } else if (three.innerText === "O") {
    playerOScore.innerHTML++;
    boardClear();
    return playerOScore;
  }
};

// DOM contented Loaded
// query selector(s) to handle user clicks
// current player needs to be marked on the board -- if that space is empty (conditional) using css (if you want to use it)
// that move needs to be place in the gameboard array
// function that checks if there is a winner from the gameboard array
// in that function -- if else statements
// checking all of the win conditions (visualize all ways to win the game)
// if a win is found -- stop the game and show the winner
// otherwise let game continue
// and cats games (after nine moves) (or gameboard is full and no winner)
