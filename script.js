// variables
let currentPlayer = 'X'
let isGameActive = true
let playerNow = document.querySelector('.current-player')
let announceWinner = document.querySelector('.announceWinner')
// let winner = null;


// const grid = document.querySelector('.wireframe-gameboard')
// let playerX = 'X'
// let playerO = 'O'

//alternating playerX and playerO // something wrong with this, dont use
// let playerX = 1;

// function gridClick (param) {
//     if (playerX === 1) {
//         document.getElementById(param).innerText = "X"
//         playerX = 0;
//     } else {
//         document.getElementById(param).innerText = "O"
//         playerX = 1;
//     } 
// }

// make divs into an array
const grid = Array.from(document.querySelectorAll('.grid'))

// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);-- calls function for each element

// check turn, mark turn
grid.forEach(function (grid) {
    grid.addEventListener('click', function() {
        if (grid.innerText === '' && isGameActive) {
            grid.innerText = currentPlayer
            if (currentPlayer === 'X') {
                currentPlayer = 'O'
                playerNow.innerText = "O's turn"
            } else if (currentPlayer === 'O') {
                currentPlayer = 'X'
                playerNow.innerText = "X's turn"
            }
        }
    })
})

// check for winner

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// something wrong with this, checking for winner but not logging winner...what am I missing?!?!!?!?
const checkWinner = () => {
    if (grid[0] === currentPlayer) {
      if (grid[1] === currentPlayer && grid[2] === currentPlayer) {
        return true
      }
      if (grid[3] === currentPlayer && grid[6] === currentPlayer) {
        return true
      }
      if (grid[4] === currentPlayer && grid[8] === currentPlayer) {
        return true
      }
    }
    if (grid[8] === currentPlayer) {
      if (grid[5] === currentPlayer && grid[2] === currentPlayer) {
        return true
      }
      if (grid[7] === currentPlayer && grid[6] === currentPlayer) {
        return true
      }
      if (grid[4] === currentPlayer && grid[0] === currentPlayer) {
        return true
      }
    }
    if (grid[4] === currentPlayer) {
      if (grid[1] === currentPlayer && grid[7] === currentPlayer) {
        return true
      }
      if (grid[3] === currentPlayer && grid[5] === currentPlayer) {
        return true
      }
      if (grid[2] === currentPlayer && grid[6] === currentPlayer) {
        return true
      }
      if (grid[0] === currentPlayer && grid[8] === currentPlayer) {
        return true
      }
    } else {
        return false
    } 
  } 
checkWinner()

// check for tie
const tieCheck = () => {
    let playedGrid = 0
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].innerText === 'X' || grid[i].innerText === 'O') {
            playedGrid++
        }
    } 
    if (playedGrid === 9) {
        announceWinner.innerText = 'Game is Tied'
        playerNow.innerText = 'Game Over'
    }
}
tieCheck() 


// reset button
document.querySelector('#reset').addEventListener('click', function() {
    for (let i = 0; i < grid.length; i++) {
        grid[i].innerText = ''
        playerNow.innerText = ''
        announceWinner.innerText = ''
        isGameActive = true
        currentPlayer = 'X'
    } 
})

// document.addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
//   });


// const grid = document.querySelector('.wireframe-gameboard')
// const playerX = 'X'
// const playerO = 'O'

//alternating playerX and playerO // something wrong with this, dont use
// let playerX = 1;

// function gridClick (param) {
//     if (playerX === 1) {
//         document.getElementById(param).innerText = "X"
//         playerX = 0;
//     } else {
//         document.getElementById(param).innerText = "O"
//         playerX = 1;
//     } 
// }

// const grid = Array.from(document.querySelectorAll('.grid'))



// make the reset button reset the game

// const resetGame = () => {
    // document.getElementById('grid1').value=''
    // document.getElementById('grid2').value=''
    // document.getElementById('grid3').value=''
    // document.getElementById('grid4').value=''
    // document.getElementById('grid5').value=''
    // document.getElementById('grid6').value=''
    // document.getElementById('grid7').value=''
    // document.getElementById('grid8').value=''
    // document.getElementById('grid9').value=''
    // document.getElementById('reset').innerText = ' '
// }


    // document.querySelector('#reset').addEventListener('click', resetGame)
    // document.getElementById('reset').innerText = ' '


// const resetButton = document.querySelector('#reset')
// document.querySelector('#reset').addEventListener('click', resetButton)











// function gridClick1 () {
//     document.getElementById('grid1').innerText = "X"
// }

// function gridClick2 () {
//     document.getElementById('grid2').innerText = "0"
// }

// function gridClick3 () {
//     document.getElementById('grid3').innerText = "X"
// }

// function gridClick4 () {
//     document.getElementById("grid4").innerText = "X"
// }

// function gridClick5 () {
//     document.getElementById("grid5").innerText = "X"
// }

// function gridClick6 () {
//     document.getElementById("grid6").innerText = "X"
// }

// function gridClick7 () {
//     document.getElementById("grid7").innerText = "X"
// }

// function gridClick8 () {
//     document.getElementById("grid8").innerText = "X"
// }

// function gridClick9 () {
//     document.getElementById("grid9").innerText = "X"
// }


// makes background red when clicked
// document.getElementById("grid9").addEventListener('click', function() {
//     this.style.backgroundColor = "red"
// })












// // announce who is the winner
// const announce = (whoWins) => {
//     switch (whoWins) {
//         case playerXWins:
//             announcer.innerText = "Player <span class="playerX">X</span> Won";
//             break;
//         case playerOWins:
//             announcer.innerText = "Player <span class="playerO">O</span> Won"; 
//             break;
//         case tieGame:
//             announcer.innerText = "tieGame"
//     }
//     announcer.classList.remove('hide')
// }
