console.log("Are you ready for some Tic Tac Toe");
///// Boxes tied to DOM ID's ---------------------
const box1 = document.getElementById("1");
const box2 = document.getElementById("2");
const box3 = document.getElementById("3");
const box4 = document.getElementById("4");
const box5 = document.getElementById("5");
const box6 = document.getElementById("6");
const box7 = document.getElementById("7");
const box8 = document.getElementById("8");
const box9 = document.getElementById("9");

///// Restart Button  --------------------------------
const restartButton = document.getElementById("restartButton");

//// play ---------------------------------------

let play = true;
let aiButton = document.getElementById("aiButton");
// player 1 value = 1
// player 2 value = 2

///// TurnKeeper -------------------------------
let turnKeeper = true;

//// Main Text -------------------------------

const playText = document.getElementById("playText");
const playWin = document.getElementById("playWin");
const pTurn = document.getElementById("turn");
//// Start ------------------------------------

function startState() {
  // return box values to  innerText to " "
  box1.innerText = " ";
  box2.innerText = " ";
  box3.innerText = " ";
  box4.innerText = " ";
  box5.innerText = " ";
  box6.innerText = " ";
  box7.innerText = " ";
  box8.innerText = " ";
  box9.innerText = " ";
  box1.value = 0;
  box2.value = 0;
  box3.value = 0;
  box4.value = 0;
  box5.value = 0;
  box6.value = 0;
  box7.value = 0;
  box8.value = 0;
  box9.value = 0;
  playWin.innerText = "X starts the game";
  // Turn State
  turnKeeper = true;
  // playText.innerText = "let's play";
  play = true;
}

///// restart Function -----------------------
restartButton.addEventListener("click", function reStart() {
  startState();
});

///// onTap function --------------------------
function onTap(event) {
  // console.log(box1.value);
  let a = document.getElementById(event.target.id);
  console.log(a);
  if (play == false) {
    console.log("game over");
    startState();
  } else {
    if (a.innerText == "X" || a.innerText == "O") {
      console.log(a.innerText);
    } else {
      if (turnKeeper == true) {
        a.value = 1;
        a.innerText = "X";
        turnKeeper = false;
        playWin.innerText = "O it's your turn";
      } else {
        a.value = 2;
        a.innerText = "O";
        turnKeeper = true;
        playWin.innerText = "X it's your turn";
      }
      checkForWin();
    }
  }
}

// All the box eventListners --- I know probaly an easier way ----
box1.addEventListener("click", onTap);
box2.addEventListener("click", onTap);
box3.addEventListener("click", onTap);
box4.addEventListener("click", onTap);
box5.addEventListener("click", onTap);
box6.addEventListener("click", onTap);
box7.addEventListener("click", onTap);
box8.addEventListener("click", onTap);
box9.addEventListener("click", onTap);
// Check for Win Function -----------------------------------------
function checkForWin() {
  if (box1.innerText == "X" && box4.innerText == "X" && box7.innerText == "X") {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (
    box1.innerText == "X" &&
    box2.innerText == "X" &&
    box3.innerText == "X"
  ) {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (
    box1.innerText == "X" &&
    box5.innerText == "X" &&
    box9.innerText == "X"
  ) {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (
    box2.innerText == "X" &&
    box5.innerText == "X" &&
    box8.innerText == "X"
  ) {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (
    box3.innerText == "X" &&
    box6.innerText == "X" &&
    box9.innerText == "X"
  ) {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (
    box3.innerText == "X" &&
    box5.innerText == "X" &&
    box7.innerText == "X"
  ) {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (
    box1.innerText == "O" &&
    box4.innerText == "O" &&
    box7.innerText == "O"
  ) {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (
    box1.innerText == "O" &&
    box2.innerText == "O" &&
    box3.innerText == "O"
  ) {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (
    box1.innerText == "O" &&
    box5.innerText == "O" &&
    box9.innerText == "O"
  ) {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (
    box2.innerText == "O" &&
    box5.innerText == "O" &&
    box8.innerText == "O"
  ) {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (
    box3.innerText == "O" &&
    box6.innerText == "O" &&
    box9.innerText == "O"
  ) {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (
    box3.innerText == "O" &&
    box5.innerText == "O" &&
    box7.innerText == "O"
  ) {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  }
}

///// Check for Cats game ----------------------

function checkCat() {
  if (box3.innerText == "O" || box3.innerText == "X") {
  }
}

console.log(playText.innerText);

/// AI Feature -------------------------------------
function aiGuy() {
  let space = Math.floor(Math.random(1 - 9) * 10);
  if (space == 1) {
    if (box1.innerText == "O" || box1.innerText == "X") {
      console.log("alreadey filled");
    } else {
    }
    box1.innerText = "O";
  } else if (space == 2) {
    if (box2.innerText == "O" || box2.innerText == "X") {
      console.log("alreadey filled");
    } else {
    }
    box2.innerText = "O";
  } else if (space == 3) {
    if (box3.innerText == "O" || box3.innerText == "X") {
      console.log("alreadey filled");
    } else {
    }
    box3.innerText = "O";
  } else if (space == 4) {
    if (box4.innerText == "O" || box4.innerText == "X") {
      console.log("alreadey filled");
    } else {
    }
    box4.innerText = "O";
  } else if (space == 5) {
    if (box5.innerText == "O" || box5.innerText == "X") {
      console.log("alreadey filled");
    } else {
    }
    box5.innerText = "O";
  } else if (space == 6) {
    if (box6.innerText == "O" || box6.innerText == "X") {
      console.log("alreadey filled");
    } else {
    }
    box6.innerText = "O";
  } else if (space == 7) {
    if (box7.innerText == "O" || box7.innerText == "X") {
      console.log("alreadey filled");
    } else {
    }
    box7.innerText = "O";
  } else if (space == 8) {
    if (box8.innerText == "O" || box8.innerText == "X") {
      console.log("alreadey filled");
    } else {
    }
    box8.innerText = "O";
  } else if (space == 9) {
    if (box9.innerText == "O" || box9.innerText == "X") {
      console.log("alreadey filled");
    } else {
    }
    box9.innerText = "O";
  }
}

///// onTap function --------------------------
function onTapAIB(event) {
  // console.log(box1.value);
  let a = document.getElementById(event.target.id);
  console.log(a);
  if (play == false) {
    console.log("game over");
    startState();
  } else {
    if (a.innerText == "X" || a.innerText == "O") {
      console.log(a.innerText);
    } else {
      if (turnKeeper == true) {
        a.value = 1;
        a.innerText = "X";
        turnKeeper = false;
        playWin.innerText = "O it's your turn";
      } else {
        aiGuy();
        a.innerText = "O";
        turnKeeper = true;
        playWin.innerText = "X it's your turn";
      }
      checkForWin();
    }
  }
}

aiButton.addEventListener("click", function () {});
