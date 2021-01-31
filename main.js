console.log("Are you ready for some Tic Tac Toe");
///// Boxes tied to DOM ID's ---------------------
let box1 = document.getElementById("1");
let box2 = document.getElementById("2");
let box3 = document.getElementById("3");
let box4 = document.getElementById("4");
let box5 = document.getElementById("5");
let box6 = document.getElementById("6");
let box7 = document.getElementById("7");
let box8 = document.getElementById("8");
let box9 = document.getElementById("9");

///// Restart Button  --------------------------------
let restartButton = document.getElementById("restartButton");

//// play ---------------------------------------

let play = true;

// player 1 = 1
// player 2 = 2

///// TurnKeeper -------------------------------
let turnKeeper = true;

//// Main Text -------------------------------

let playText = document.getElementById("playText");
let playWin = document.getElementById("playWin");
let pTurn = document.getElementById("turn");
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
