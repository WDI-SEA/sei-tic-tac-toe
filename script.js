let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

let playerTurn = 0;

function winConditionX(){
  if((one.innerText == "X" && two.innerText == "X" && three.innerText == "X") || (four.innerText == "X" && five.innerText == "X" && six.innerText == "X") || 
  (seven.innerText == "X" && eight.innerText == "X" && nine.innerText == "X") || (one.innerText == "X" && five.innerText == "X" && nine.innerText == "X") ||
  (three.innerText == "X" && five.innerText == "X" && seven.innerText == "X") || (one.innerText == "X" && four.innerText == "X" && seven.innerText == "X") ||
  (two.innerText == "X" && five.innerText == "X" && eight.innerText == "X") || (three.innerText == "X" && six.innerText == "X" && nine.innerText == "X")) {
    console.log("Blue")
    document.getElementById("player").innerText = "Player One has won!";
  }
}
function winConditionO(){
  if((one.innerText == "O" && two.innerText == "O" && three.innerText == "O") || (four.innerText == "O" && five.innerText == "O" && six.innerText == "O") || 
  (seven.innerText == "O" && eight.innerText == "O" && nine.innerText == "O") || (one.innerText == "O" && five.innerText == "O" && nine.innerText == "O") ||
  (three.innerText == "O" && five.innerText == "O" && seven.innerText == "O") || (one.innerText == "O" && four.innerText == "O" && seven.innerText == "O") ||
  (two.innerText == "O" && five.innerText == "O" && eight.innerText == "O") || (three.innerText == "O" && six.innerText == "O" && nine.innerText == "O")) {
    console.log("Red")
    document.getElementById("player").innerText = "Player Two has won!";
  }
}
function choosePlayer() {
  if(playerTurn === 0) {
    document.getElementById("player").innerText = "Player Two's Turn";
    playerTurn = 1;
  } else {
    document.getElementById("player").innerText = "Player One's Turn";
    playerTurn = 0;
  };
};
function winCondition() { 
  winConditionX(); 
  winConditionO();
};
function markSquare(e){
    if(playerTurn === 0){
      e.target.innerText = "X";
    } else{
      e.target.innerText = "O";
    }
    winCondition();
    // e.target.disabled = true;
    choosePlayer();
}

document.getElementById("playSpace").addEventListener("click", markSquare);

// function winConditionX(){
//   if((one.innerText === "X" && two.innerText === "X" && three.innerText === "X") || (four.innerText === "X" && five.innerText === "X" && six.innerText === "X") || 
//   (seven.innerText === "X" && eight.innerText === "X" && nine.innerText === "X") || (one.innerText === "X" && five.innerText === "X" && nine.innerText === "X") ||
//   (three.innerText === "X" && five.innerText === "X" && seven.innerText === "X") || (one.innerText === "X" && four.innerText === "X" && seven.innerText === "X") ||
//   (two.innerText === "X" && five.innerText === "X" && eight.innerText === "X") || (three.innerText === "X" && six.innerText === "X" && nine.innerText === "X")) {
//     document.getElementById("player").innerText = "Player One has won!";
//   }
// }
// function winConditionO(){
//   if((one.innerText === "O" && two.innerText === "O" && three.innerText === "O") || (four.innerText === "O" && five.innerText === "O" && six.innerText === "O") || 
//   (seven.innerText === "O" && eight.innerText === "O" && nine.innerText === "O") || (one.innerText === "O" && five.innerText === "O" && nine.innerText === "O") ||
//   (three.innerText === "O" && five.innerText === "O" && seven.innerText === "O") || (one.innerText === "O" && four.innerText === "O" && seven.innerText === "O") ||
//   (two.innerText === "O" && five.innerText === "O" && eight.innerText === "O") || (three.innerText === "O" && six.innerText === "O" && nine.innerText === "O")) {
//     document.getElementById("player").innerText = "Player Two has won!";
//   }
// }

