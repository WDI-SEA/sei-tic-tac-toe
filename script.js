console.log('All good')

// ******************* VARIABLES FOR HTML ELEMENTS *******************

// Variables for p elements in prompter
const gameBoard = document.querySelector(".gameboard")
console.log(gameBoard)
const xo = document.querySelector('#xo');
console.log(xo);
const prompts = document.querySelector('#prompts');
console.log(prompts);
const tiles = document.querySelector(".tiles")
console.log(tiles)

//variables forn game board
const tile1 = document.querySelector("#tile1");
console.log(tile1);
const tile2 = document.querySelector("#tile2");
console.log(tile2);
const tile3 = document.querySelector("#tile3");
console.log(tile3);
const tile4 = document.querySelector("#tile4");
console.log(tile4);
const tile5 = document.querySelector("#tile5");
console.log(tile5);
const tile6 = document.querySelector("#tile6");
console.log(tile6);
const tile7 = document.querySelector("#tile7");
console.log(tile7);
const tile8 = document.querySelector("#tile8");
console.log(tile8);
const tile9 = document.querySelector("#tile9");
console.log(tile9);

// variable for restart button

const restart = document.querySelector('#restart');
console.log(restart);

// ******************* GAME VARIABLES *******************


// Default Empty Array 
let tileArray = [[],[],[],[],[],[],[],[]];

// Default value for winner
let winner = '';
let turn = 9

//  ***** Functions for the game 

//  Function to prompt  x/o. Turns are tracked using even or odd
gameBoard.addEventListener('click', function(){
   if (turn % 2 === 0){
        xo.innerHTML = 'O'
    } else if (turn %2 !== 0) {
        xo.innerHTML = 'X'
    };

})

// this function checks for a winner and disables the tiles if there is winner

const checkForWinner = (arrays) => {
    for (let i = 0 ; i < arrays.length; i++) {
     if (arrays[i].length === 3) {
          if(arrays[i][0] === "x" && arrays[i][1] === "x" && arrays[i][2] === "x") {
            winner = "player X won. Press restart to play again!";
          } else if (arrays[i][0] === "o" && arrays[i][1] === "o" && arrays[i][2] === "o") {
           winner = "player O won. Press restart to play again!";
          } else if (turn === 1 && winner === "") {
            winner = "Its a cats game. Press restart to play again"
          }
        }
      }
      if (winner !== '') {
        tile1.disabled = true
        tile2.disabled = true
        tile3.disabled = true
        tile4.disabled = true
        tile5.disabled = true
        tile6.disabled = true
        tile7.disabled = true
        tile8.disabled = true
        tile9.disabled = true
        prompts.innerHTML = winner
      }
    }


// This function is to reset the board
restart.addEventListener('click', function(){
    tileArray = [[],[],[],[],[],[],[],[]];
    winner = '';
    turn = 9
    xo.innerHTML = 'X'
    prompts.innerHTML = 'make your choice'
    tile1.innerHTML = ''
    tile1.disabled = false
    tile2.innerHTML = ''
    tile2.disabled = false
    tile3.innerHTML = ''
    tile3.disabled = false
    tile4.innerHTML = ''
    tile4.disabled = false
    tile5.innerHTML = ''
    tile5.disabled = false
    tile6.innerHTML = ''
    tile6.disabled = false
    tile7.innerHTML = ''
    tile7.disabled = false
    tile8.innerHTML = ''
    tile8.disabled = false
    tile9.innerHTML = ''
    tile9.disabled = false
})

// This function does a fewq things
// It sets a listener for each of the buttons
// when clicked the tile will disable
// when clicked either 'x' or 'o' will be pushed to the tile based on the turn
// When clicked either 'x' or 'o' will be pushed into the array
// when clicked the check for winner function will run 

tile1.addEventListener('click', function(){
    if(turn % 2 !== 0) {
        tile1.innerHTML = 'x'
        tileArray[0].push('x')
        tileArray[3].push('x')
        tileArray[6].push('x')
    } else if (turn %2 === 0) {
        tile1.innerHTML = 'o'
        tileArray[0].push('o')
        tileArray[3].push('o')
        tileArray[6].push('o')
    }
    console.log(tileArray)
    tile1.disabled = true
    checkForWinner(tileArray)
    turn --
    console.log(winner)
})

tile2.addEventListener('click', function(){
    if(turn % 2 !== 0) {
        tile2.innerHTML = 'x'
        tileArray[0].push('x')
        tileArray[4].push('x')
    } else if (turn %2 === 0) {
        tile2.innerHTML = 'o'
        tileArray[0].push('o')
        tileArray[4].push('o')
    }
    console.log(tileArray)
    tile2.disabled = true
    checkForWinner(tileArray)
    turn --
    console.log(winner)
})

tile3.addEventListener('click', function(){
    if(turn % 2 !== 0) {
        tile3.innerHTML = 'x'
        tileArray[0].push('x')
        tileArray[5].push('x')
        tileArray[7].push('x')
    } else if (turn %2 === 0) {
        tile3.innerHTML = 'o'
        tileArray[0].push('o')
        tileArray[5].push('o')
        tileArray[7].push('o')
    }
    console.log(tileArray)
    tile3.disabled = true
    checkForWinner(tileArray)
    turn --
    console.log(winner)
})

tile4.addEventListener('click', function(){
    if(turn % 2 !== 0) {
        tile4.innerHTML = 'x'
        tileArray[3].push('x')
        tileArray[1].push('x')
    } else if (turn %2 === 0) {
        tile4.innerHTML = 'o'
        tileArray[3].push('o')
        tileArray[1].push('o')
    }
    console.log(tileArray)
    tile4.disabled = true
    checkForWinner(tileArray)
    turn --
    console.log(winner)
})

tile5.addEventListener('click', function(){
    if(turn % 2 !== 0) {
        tile5.innerHTML = 'x'
        tileArray[1].push('x')
        tileArray[4].push('x')
        tileArray[6].push('x')
        tileArray[7].push('x')
    } else if (turn %2 === 0) {
        tile5.innerHTML = 'o'
        tileArray[1].push('o')
        tileArray[4].push('o')
        tileArray[6].push('o')
        tileArray[7].push('o')
    }
    console.log(tileArray)
    tile5.disabled = true
    checkForWinner(tileArray)
    turn --
    console.log(winner)
})

tile6.addEventListener('click', function(){
    if(turn % 2 !== 0) {
        tile6.innerHTML = 'x'
        tileArray[1].push('x')
        tileArray[5].push('x')
    } else if (turn %2 === 0) {
        tile6.innerHTML = 'o'
        tileArray[1].push('o')
        tileArray[5].push('o')
    }
    console.log(tileArray)
    tile6.disabled = true
    checkForWinner(tileArray)
    turn --
    console.log(winner)
})

tile7.addEventListener('click', function(){
    if(turn % 2 !== 0) {
        tile7.innerHTML = 'x'
        tileArray[2].push('x')
        tileArray[3].push('x')
        tileArray[7].push('x')
    } else if (turn %2 === 0) {
        tile7.innerHTML = 'o'
        tileArray[2].push('o')
        tileArray[3].push('o')
        tileArray[7].push('o')
    }
    console.log(tileArray)
    tile7.disabled = true
    checkForWinner(tileArray)
    turn --
    console.log(winner)
})

tile8.addEventListener('click', function(){
    if(turn % 2 !== 0) {
        tile8.innerHTML = 'x'
        tileArray[2].push('x')
        tileArray[4].push('x')
    } else if (turn %2 === 0) {
        tile8.innerHTML = 'o'
        tileArray[2].push('o')
        tileArray[4].push('o')
    }
    console.log(tileArray)
    tile8.disabled = true
    checkForWinner(tileArray)
    turn --
    console.log(winner)
})

tile9.addEventListener('click', function(){
    if(turn % 2 !== 0) {
        tile9.innerHTML = 'x'
        tileArray[2].push('x')
        tileArray[5].push('x')
        tileArray[6].push('x')
    } else if (turn %2 === 0) {
        tile9.innerHTML = 'o'
        tileArray[2].push('o')
        tileArray[5].push('o')
        tileArray[6].push('o')
    }
    console.log(tileArray)
    tile9.disabled = true
    checkForWinner(tileArray)
    turn --
    console.log(winner)
})

