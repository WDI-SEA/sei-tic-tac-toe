const winCondition = [['0','1','2'], ['3','4','5'], ['6','7','8'], ['0','3','6'], ['1','4','7'], ['2','5','8'], ['2','4','6'], ['0','4','8']];
let playerOneScore = [];
let playerTwoScore = [];
let playerXTurn = true;
let playerOTurn = false;
let gameOver = false;
const message = document.querySelector(".message");
const board = document.querySelector(".main");
const sqId = ("1", "2", "3", "4", "5", "6", "7", "8");
// display message to start
message.innerText = "Player 1 is X, Player 2 is O.  Begin by selecting your square."

// Compares arrays of players to winCondition.  Loops through each of the winCondition arrays and compares to the player's current array.
const playerOneWin = () => { 
let match = 0;
  for (let i = 0; i < winCondition.length; i++) {
    match = 0;
    for (let j = 0; j < playerOneScore.length; j++) {
      if (winCondition[i].includes(playerOneScore[j])) {
        match++;
        if (match === 3) {
         message.innerText = "Player 1 (X) wins!";
         gameOver = true;
         break;
       }
    }
   }
  }
}
const playerTwoWin = () => { 
let match = 0;
  for (let i = 0; i < winCondition.length; i++) {
    match = 0;
    for (let j = 0; j < playerTwoScore.length; j++) {
     if (winCondition[i].includes(playerTwoScore[j])) {
         match++;
       if (match === 3) {
         message.innerText = "Player 2 (O) wins!";
         gameOver = true;
         break;
       }
    }
   }
  }
}

// update player turn, switching back and forth true and false
// This grabs the ID of the div that is clicked on.  Need to use this ID to update player click arrays
board.addEventListener("click", function(e) {
  const selectedId = e.target.id;
   if (selectedId !== '') {
     // Player 1 (X) logic - Checks to see if game is over, if it's their turn, and that the div has not been clicked/selected yet
     if (gameOver === false && playerXTurn === true && playerOneScore.indexOf(selectedId) === -1 && playerTwoScore.indexOf(selectedId) === -1) {
        playerOneScore.push(selectedId);
        playerOneScore.sort();
        document.getElementById(selectedId).innerText = "X";
        message.innerText = "Player 2, it's your turn!";
        // Checks for tie
        if (playerOneScore.length + playerTwoScore.length === 9) {
          message.innerText = "It's a tie!"
        }
        // Executes win condition function
        playerOneWin();
        // Changes players turns
        playerXTurn = false;
        playerOTurn = true; 
        // Player 2 (O) logic - Checks to see if game is over, if it's their turn, and that the div has not been clicked/selected yet  
      } else if (gameOver === false && playerOTurn === true && playerOneScore.indexOf(selectedId) === -1 && playerTwoScore.indexOf(selectedId) === -1) {
        playerTwoScore.push(selectedId);
        playerTwoScore.sort();
        document.getElementById(selectedId).innerText = "O";
        message.innerText = "Player 1, it's your turn!";
        // Checks for tie
        if (playerOneScore.length + playerTwoScore.length === 9) {
          message.innerText = "It's a tie!"
        }
        // Executes win condition function
        playerTwoWin();
        // Changes players turns
        playerOTurn = false;
        playerXTurn = true;
      }
    }
});

// For reset/clear button
document.querySelector("button").addEventListener("click",() => {
  console.log("Reset button clicked");
  const squares = document.querySelectorAll(".square");
for (let i = 0; i < squares.length; i++) {
  squares[i].innerText = '';
}
  playerOneScore = [];
  playerTwoScore = [];
  playerXTurn = true;
  playerOTurn = false;
  gameOver = false;
  message.innerText = "Player 1 is X, Player 2 is O.  Begin by selecting your square."
});