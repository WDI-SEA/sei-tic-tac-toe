// what will happen when the user clicks?
// document.getElementById("box").addEventListener("click", myFunction);
  // slection of X or O (who's turn is it?)

  let playerOne = "X";
  let playerTwo = "O";
  let currentUser = playerOne;
  
  function playerChange(event) {
    if (currentUser == playerOne) {
      console.log(event)
      event.target.innerText = "X"
        currentUser = playerTwo;
    } else {
      event.target.innerText = "O"
        currentUser = playerOne;
    }
  }

function cellClick(event) {
  console.log(event.target)
}
  // should determine who the current player is x or o then insert 
  // insert inner text based on who the current player is
  // push into active players array the id 
  // puch into all moves whoever current player or id
  // change the current player to next


  let box = document.querySelectorAll(".box")
    box.forEach(function(box) {
      box.addEventListener('click', playerChange)
    })

// data container (array) to hold who has gone where (on the gameboard) 
// (this would contain player choices)
// whose turn it is? -- state of player
// winning combinations to check (data container?)
// (cats option 1) board is full = draw

// make three different array variable one for playerOne moves
// 2nd for playerTwo moves
//  for all moves made by either; all set and checked at end to check for tie
let gameBoard = ['', '', '', '', '', '', '', '', ''] 

// check winning combos
let winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const checkForWinners = () => {
  if (gridContainer[0] == gridContainer[1] && gridContainer[1] == gridContainer[2]) {
    console.log('winner row1')
} else if (gridContainer[3] == gridContainer[4] && gridContainer[4] == gridContainer[5]) {
    console.log('winner row2')
} else if (gridContainer[6] == gridContainer[7] && gridContainer[7] == gridContainer[8]) {
  console.log('winner row3')
} else if (gridContainer[0] == gridContainer[3] && gridContainer[3] == gridContainer[6]) {
  console.log('winner column1')
} else if (gridContainer[1] == gridContainer[4] && gridContainer[4] == gridContainer[7]) {
  console.log('winner column2')
} else if (gridContainer[2] == gridContainer[5] && gridContainer[5] == gridContainer[8]) {
  console.log('winner column3')
} else if (gridContainer[0] == gridContainer[4] && gridContainer[4] == gridContainer[8]) {
  console.log('winner diagonal1')
} else if (gridContainer[6] == gridContainer[4] && gridContainer[4] == gridContainer[2]) {
  console.log('winner diagonal2')
} else if (!gridgridContainer.includes("")) {
    drawGame();
}
}

let gridBox = document.querySelectorAll(".box");
  console.log("everything selected", gridBox)

const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < gridBox.length; i++) {
  gridBox[i].addEventListener('click', cellClick)
}

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
}; console.log("grid")
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

let resetGame = document.querySelector(".reset")
 
  resetGame.addEventListener('click', () => {
    for(let i = 0; i < selectAllBoxes.length; i++) {
        selectAllBoxes[i].innerHTML = '';
        selectAllBoxes[i].style.backgroundColor = 'light-blue'
    }
    document.getElementById('firstMoveX').textContent = "Choose it or loose it"
    location.reload();
})
