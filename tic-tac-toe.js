// your javascript file
// what kind of variables will I need? (app state)
// what will happen when the user clicks?
// document.getElementById("box").addEventListener("click", myFunction);

function cellClick(event) {
    if (event.target.classList.contains('box')) {
        let id = event.target.id;
        if (gridBox[id] == "") {
            gridBox[id] = currentUser;
            event.target.textContent = currentUser;
            event.target.style.backgroundColor = 'white';
            event.target.classList.toggle('f200');
            checkGrid();
            switchUser();
        }
    }
}

// data container (array) to hold who has gone where (on the gameboard) 
// (this would contain player choices)
// whose turn it is? -- state of player
// winning combinations to check (data container?)
// (cats option 1) board is full = draw

let gameBoard = ['', '', '', '', '', '', '', '', ''] 

function checkData() {
  if (gameBoard[0] == gameboard[1] && gameBoard[1] == gameBoard[2]) {
    console.log('winner row1')
} else if (gameBoard[3] == gameBoard[4] && gameBoard[4] == gameBoard[5]) {
    console.log('winner row2')
} else if (gameBoard[6] == gameBoard[7] && gameBoard[7] == gameBoard[8]) {
  console.log('winner row3')
} else if (gameBoard[0] == gameBoard[3] && gameBoard[3] == gameBoard[6]) {
  console.log('winner column1')
} else if (gameBoard[1] == gameBoard[4] && gameBoard[4] == gameBoard[7]) {
  console.log('winner column2')
} else if (gameBoard[2] == gameBoard[5] && gameBoard[5] == gameBoard[8]) {
  console.log('winner column3')
} else if (gameBoard[0] == gameBoard[4] && gameBoard[4] == gameBoard[8]) {
  console.log('winner diagonal1')
} else if (gameBoard[6] == gameBoard[4] && gameBoard[4] == gameBoard[2]) {
  console.log('winner diagonal2')
} else if (!gridBox.includes("")) {
    drawGame();
}
};


// toggle/boolean if someone has won (is user allowd to click/keep playing)

let gridBox = document.querySelectorAll(".grid-box");
  console.log("everything selected", gridBox)

const gridContainer = document.querySelector(".grid-container");
gridBox.addEventListener('click', );
  console.log(gridSelected);

  // slection of X or O (who's turn is it?)

let playerOne = "X";
let playerTwo = "O";
let switchUser = playerOne;

function playerChange() {
  if (currentUser == playerOne) {
      currentUser = playerTwo;
  } else {
      currentUser = playerOne;
  }
}

// mark space if it is availible
  // if it is marked -- do nothing
// check if there is a winner

function displayWinner() {
    let winnerBox = document.querySelector('.win');
    if (currentUser == playerOne) {
        scoreboard.user1 = scoreboard.playerOne + 1
    } else {
        scoreboard.user2 = scoreboard.playerTwo + 1
    }
    winnerBox.textContent = `${currentUser} is the winner!`;
    alert('You have won!')
    const grid = document.querySelector(`.grid`);
    grid.removeEventListener('click', cellClick);
    updateScoreboard();
};
  // if there is a winner -- stop gameplay and show who won
  // if not -- let gameplay continue

let gameDisplay = {
  playerOne: 0,
  playerTwo: 0,
  draw: 0,
}

function updateScoreboard() {
    let xScore = document.getElementById("X-Wins")
    xScore.textContent = scoreboard.playerOne;
    let oScore = document.getElementById("O-Wins")
    oScore.textContent = scoreboard.playerTwo;
    let tieScore = document.getElementById("Ties")
    tieScore.textContent = scoreboard.ties;
}

  // RESET GAME

  resetGame.addEventListener('click', () => {
    for(let i = 0; i < selectAllBoxes.length; i++) {
        selectAllBoxes[i].innerHTML = '';
        selectAllBoxes[i].style.backgroundColor = 'light-gray'
    }
    document.getElementById('firstMoveX').textContent = "Choose it or loose it"
    location.reload();
}
