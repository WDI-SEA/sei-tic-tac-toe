let 



let playerTurn = document.querySelector('#container')
// const playerTurn = document.getElementsByClassName("playArea"));
// const div = document.querySelector('#container')
// document.getElementById('clear').addEventListener('click', clearTable)

// for (let i = 0; i < 9; i++) {
//   playerTurn.addEventListener("click", turnOne);
// }

 playerTurn.addEventListener("click", e => {playerTurn.textContent= "X"; })



function turnOne() {
  playerTurn.style.background = "X";
}

// function clearTable() {
//   document.querySelector("#output-clear").innerHTML = "";
// }

// function playerTurn () {
//   console.log('button works')
// }
// function turnOne() {

// }