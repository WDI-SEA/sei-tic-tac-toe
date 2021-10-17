let boardPosition = document.getElementsByClassName("board");
let reset = document.querySelector(".clear");
let playerMove = [];
let computerMove = [];
let allMoves = [];
let turn = 0;
let gameState = 0;
let winCon = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"]
];
// document.querySelectorAll("#0", "#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8")

function isBoardWin(currentPlayerMoves) {
  for (let i = 0; i < winCon.length; i++) {
    let isThereWin = winCon[i].every((num) => {
      return currentPlayerMoves.includes(num)
    })
    if (isThereWin === true) {
      return true
    }
  }
  return false
  // function checks if there is a win and spits out a winner if there is
}

function isBoardDraw(currentPlayerMoves) {
  if (allMoves.length === 9) {
    if (isBoardWin(currentPlayerMoves) === false) {
      return true
    }
  }
  return false
}

for (let i = 0; i < boardPosition.length; i++) {
  boardPosition[i].onclick = function makeMove() {
    if (gameState === 0) {
      if (playerMove.includes(this.id) === false && allMoves.includes(this.id) === false) {
        playerMove.push(this.id);
        allMoves.push(this.id)
        document.getElementById(this.id).innerHTML = "X";
        if (isBoardDraw(playerMove) === true) {
          document.querySelector("h1").innerHTML = "Draw" 
          gameState = 1     
        } else if (isBoardWin(playerMove) === true) {
          document.querySelector("h1").innerHTML = "Player Wins"   
          gameState = 1 
        } else {
          let computerChoice = Math.floor(Math.random() * 9).toString()

          while (computerMove.includes(computerChoice) === true || allMoves.includes(computerChoice) === true) {
            let newChoice = Math.floor(Math.random() * 9).toString()
            computerChoice = newChoice
          }

          computerMove.push(computerChoice);
          allMoves.push(computerChoice)
          document.getElementById(computerChoice).innerHTML = "O"
          if (isBoardDraw(computerMove) === true) {
            document.querySelector("h1").innerHTML = "Draw"   
            gameState = 1      
          } else if (isBoardWin(computerMove) === true) {
            document.querySelector("h1").innerHTML = "Computer Wins"      
            gameState = 1
          }
        }
      }

    }

  }
}



// let reset = document.querySelector(".clear")

reset.onclick = function clearBoard() {
  //on button press, clear the html
  //clear the master, player, computer arrays
  playerMove = [];
  computerMove = [];
  allMoves = [];
  gameState = 0;
  document.querySelector('h1').innerHTML = "Tic Tac Toe: Winner is...";
  let board = document.getElementsByClassName('board')
  for (let i = 0; i < board.length; i++) {
    board[i].innerHTML = ""
  }
}
