console.log("hey");
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
///// TurnKeeper -------------------------------
let turnKeeper = true;

//// Main Text -------------------------------

let playText = document.getElementById("playText");
let playWin = document.getElementById("playWin");
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
  box1.value = " ";
  box2.value = " ";
  box3.value = " ";
  box4.value = " ";
  box5.value = " ";
  box6.value = " ";
  box7.value = " ";
  box8.value = " ";
  box9.value = " ";
  playWin.value = " ";
  // Turn State
  turnKeeper = true;
  // playText.innerText = "let's play";
  play = true;
}
restartButton.addEventListener("click", reStart);

///// restart Function -----------------------

function reStart() {
  startState();
}
///// onTap function --------------------------
function onTap(event) {
  // console.log(box1.value);
  let a = document.getElementById(event.target.id);
  console.log(a);

  if (turnKeeper == true) {
    a.value = "x";
    a.innerText = "X";
    turnKeeper = false;
  } else {
    a.value = "o";
    a.innerText = "O";
    turnKeeper = true;
  }

  checkForWin();
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

function checkForWin() {
  if (box1.value && box4.value && box7.value == "x") {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (box1.value && box2.value && box3.value == "x") {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (box1.value && box5.value && box9.value == "x") {
    console.log("win");

    playWin.innerText = "wow you won!";
    play = false;
  } else if (box2.value && box5.value && box8.value == "x") {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (box3.value && box6.value && box9.value == "x") {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (box3.value && box5.value && box7.value == "x") {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (box1.value && box4.value && box7.value == "o") {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (box1.value && box2.value && box3.value == "o") {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (box1.value && box5.value && box9.value == "o") {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (box2.value && box5.value && box8.value == "o") {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (box3.value && box6.value && box9.value == "o") {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  } else if (box3.value && box5.value && box7.value == "o") {
    console.log("win");
    playWin.innerText = "wow you won!";
    play = false;
  }
}
