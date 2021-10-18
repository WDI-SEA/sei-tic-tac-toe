let value = "X";
let clickedSquares = [];
let winnerFound = false;
//create a button taht calls the function taht reinitization to the orginal value, personX, and personO

let winningCombo = [
  ["squareOne", "squareTwo", "squareThree"],
  ["squareFour", "squareFive", "squareSix"],
  ["squareSeven", "squareEight", "squareNine"],
  ["squareOne", "squareFour", "squareSeven"],
  ["squareTwo", "squareFive", "squareEight"],
  ["squareThree", "squareSix", "squareNine"],
  ["squareOne", "squareFive", "squareNine"],
  ["squareThree", "squareFive", "squareSeven"],
];

//these are id's of what personX&O have selected
let personX = [];
let personO = [];

function userSelection(id) {
  if (!clickedSquares.includes(id)) {
    // const squareOne = document.getElementById('')
    //event equals id of the box were clicking
    document.getElementById(id).innerText = value;
    clickedSquares.push(id);
    // console.log(clickedSquares)

    if (value == "X") {
      personX.push(id);
      document.getElementById("winner").innerText = "Player 1";
      for (let i = 0; i < winningCombo.length; i++) {
        if (
          personX.includes(winningCombo[i][0]) &&
          personX.includes(winningCombo[i][1]) &&
          personX.includes(winningCombo[i][2])
        ) {
          winnerFound = true;
          clickedSquares = [
            "squareOne",
            "squareTwo",
            "squareThree",
            "squareFour",
            "squareFive",
            "squareSix",
            "squareSeven",
            "squareEight",
            "squareNine",
          ];
          document.getElementById("winner").innerText =
            "The Winner is Player " + value;
          console.log("person");
        }
      }
      value = "O";
    } else if (value == "O") {
      personO.push(id);
      document.getElementById("winner").innerText = "Player 2";
      for (let i = 0; i < winningCombo.length; i++) {
        if (
          personO.includes(winningCombo[i][0]) &&
          personO.includes(winningCombo[i][1]) &&
          personO.includes(winningCombo[i][2])
        ) {
          winnerFound = true;
          clickedSquares = [
            "squareOne",
            "squareTwo",
            "squareThree",
            "squareFour",
            "squareFive",
            "squareSix",
            "squareSeven",
            "squareEight",
            "squareNine",
          ];
          console.log("person0");
          document.getElementById("winner").innerText =
            "The Winner is Player " + value;
        }
      }
      value = "X";
    }
    if (clickedSquares.length == 9 && winnerFound == false) {
      document.getElementById("winner").innerText = "Its a TIE!!";
    }
  }
}

document.querySelector("#clear").addEventListener("click", () => {
  document.getElementById("squareOne").innerText = "";
  document.getElementById("squareTwo").innerText = "";
  document.getElementById("squareThree").innerText = "";
  document.getElementById("squareFour").innerText = "";
  document.getElementById("squareFive").innerText = "";
  document.getElementById("squareSix").innerText = "";
  document.getElementById("squareSeven").innerText = "";
  document.getElementById("squareEight").innerText = "";
  document.getElementById("squareNine").innerText = "";
  console.log(personX.value);
  personX = [];
  personO = [];
  value = "X";
  clickedSquares = [];
  document.getElementById("winner").innerText = "";
  winnerFound = false;
});

document
  .getElementById("squareOne")
  .addEventListener("click", () => userSelection("squareOne"));
document
  .getElementById("squareTwo")
  .addEventListener("click", () => userSelection("squareTwo"));
document
  .getElementById("squareThree")
  .addEventListener("click", () => userSelection("squareThree"));
document
  .getElementById("squareFour")
  .addEventListener("click", () => userSelection("squareFour"));
document
  .getElementById("squareFive")
  .addEventListener("click", () => userSelection("squareFive"));
document
  .getElementById("squareSix")
  .addEventListener("click", () => userSelection("squareSix"));
document
  .getElementById("squareSeven")
  .addEventListener("click", () => userSelection("squareSeven"));
document
  .getElementById("squareEight")
  .addEventListener("click", () => userSelection("squareEight"));
document
  .getElementById("squareNine")
  .addEventListener("click", () => userSelection("squareNine"));
