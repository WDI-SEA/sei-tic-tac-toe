// ******************* VARIABLES FOR HTML ELEMENTS *******************

// Variables for p elements in prompter
const gameBoard = document.querySelector(".gameboard")
const xo = document.querySelector('#xo');
const prompts = document.querySelector('#prompts');

// variables for score
const scoreX = document.querySelector('#score_x')
const scoreO = document.querySelector('#score_o')

//variables forn game board
const tile1 = document.querySelector("#tile1");
const tile2 = document.querySelector("#tile2");
const tile3 = document.querySelector("#tile3");
const tile4 = document.querySelector("#tile4");
const tile5 = document.querySelector("#tile5");
const tile6 = document.querySelector("#tile6");
const tile7 = document.querySelector("#tile7");
const tile8 = document.querySelector("#tile8");
const tile9 = document.querySelector("#tile9");

// variable for restart button
const restart = document.querySelector('#restart');
const resetScore = document.querySelector('#resetScore')

// variables for player options
const optionSelector = document.querySelector('#optionSelector')


// ******************* GAME VARIABLES *******************

// Default Empty Array 
let tileArray = [[],[],[],[],[],[],[],[]];

// Default variables for game
let winner = '';
let turn = 9
let whoseTurn = 'X'
let winCountX = 0
let winCountO = 0

// additonal veriables for vs computer

const buttonArray = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9]
let compChoiceArray = []

//  ***** Functions for the game 

//function to give the computer a choice and picks a random tile
const computerOptions = (array) => {
    if (optionSelector.value === 'computer' && whoseTurn === 'X') {
        for (i = 0 ; i < array.length ; i++) {
            if (array[i].disabled !== true) {
                compChoiceArray.push(array[i])
            }
        }
        let compMove = compChoiceArray[Math.floor(Math.random() * compChoiceArray.length)]
        console.log(compMove)
        compMove.disabled = true
        compMove.innerHTML = "o"
        compChoiceArray = []
        turn--
        updateTurn()
        console.log(turn)
    }
}


// Function  for computer to make a choice

const compPick = () => {
    let randomNum = Math.floor(Math.random()* compChoiceArray.length)
    console.log(randomNum)
}


//  Function to to update turn
gameBoard.addEventListener('click', function(){
   if (whoseTurn === 'X'){
       whoseTurn = 'O'
       xo.innerHTML = "O"
    } else if (whoseTurn === 'O') {
        whoseTurn = 'X'
        xo.innerHTML = "X"
    }
    optionSelector.disabled = true
})

const updateTurn = () => {
    if (whoseTurn === 'X'){
        whoseTurn = 'O'
        xo.innerHTML = "O"
     } else if (whoseTurn === 'O') {
         whoseTurn = 'X'
         xo.innerHTML = "X"
     };
}

// this function checks for a winner and disables the tiles if there is winner
// updated this function to also update win count and score display

const checkForWinner = (arrays) => {
    for (let i = 0 ; i < arrays.length; i++) {
        //checks to see if there are anny arrays with a length equalt to three
     if (arrays[i].length === 3) {
          if(arrays[i][0] === "x" && arrays[i][1] === "x" && arrays[i][2] === "x") {
            winner = "Player X won. Press restart to play again!";
            winCountX ++;
            scoreX.innerHTML = winCountX
          } 
          else if (arrays[i][0] === "o" && arrays[i][1] === "o" && arrays[i][2] === "o") {
            winner = "Player O won. Press restart to play again!";
            winCountO ++;
            scoreO.innerHTML = winCountO
          } 
          else if (turn === 1 && winner === "") {
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
    if (optionSelector.value === 'computer' && whoseTurn === 'O') {
        updateTurn()
    }
    tileArray = [[],[],[],[],[],[],[],[]];
    winner = '';
    turn = 9
    optionSelector.disabled =false
    prompts.innerHTML = ''
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

// this function resets the score
resetScore.addEventListener('click', function(){
    winCountX = 0
    scoreX.innerHTML = winCountX
    winCountO = 0
    scoreO.innerHTML = winCountO
})
// This function does a fewq things
// It sets a listener for each of the buttons
// when clicked the tile will disable
// when clicked either 'x' or 'o' will be pushed to the tile based on the turn
// When clicked either 'x' or 'o' will be pushed into the array
// when clicked the check for winner function will run 

tile1.addEventListener('click', function(){
    if(whoseTurn === 'X') {
        tile1.innerHTML = 'x'
        tileArray[0].push('x')
        tileArray[3].push('x')
        tileArray[6].push('x')
    } else if (whoseTurn === 'O') {
        tile1.innerHTML = 'o'
        tileArray[0].push('o')
        tileArray[3].push('o')
        tileArray[6].push('o')
    }
    tile1.disabled = true
    checkForWinner(tileArray)
    turn --
    setTimeout(computerOptions(buttonArray), 3000)
    
})

tile2.addEventListener('click', function(){
    if(whoseTurn === 'X') {
        tile2.innerHTML = 'x'
        tileArray[0].push('x')
        tileArray[4].push('x')
    } else if (whoseTurn === 'O') {
        tile2.innerHTML = 'o'
        tileArray[0].push('o')
        tileArray[4].push('o')
    }
    tile2.disabled = true
    checkForWinner(tileArray)
    turn --
    setTimeout(computerOptions(buttonArray), 3000)
})

tile3.addEventListener('click', function(){
    if(whoseTurn === 'X') {
        tile3.innerHTML = 'x'
        tileArray[0].push('x')
        tileArray[5].push('x')
        tileArray[7].push('x')
    } else if (whoseTurn === 'O') {
        tile3.innerHTML = 'o'
        tileArray[0].push('o')
        tileArray[5].push('o')
        tileArray[7].push('o')
    }
    tile3.disabled = true
    checkForWinner(tileArray)
    turn --
    setTimeout(computerOptions(buttonArray), 3000)
})

tile4.addEventListener('click', function(){
    if(whoseTurn === 'X') {
        tile4.innerHTML = 'x'
        tileArray[3].push('x')
        tileArray[1].push('x')
    } else if (whoseTurn === 'O') {
        tile4.innerHTML = 'o'
        tileArray[3].push('o')
        tileArray[1].push('o')
    }
    tile4.disabled = true
    checkForWinner(tileArray)
    turn --
    setTimeout(computerOptions(buttonArray), 3000)
})

tile5.addEventListener('click', function(){
    if(whoseTurn === 'X') {
        tile5.innerHTML = 'x'
        tileArray[1].push('x')
        tileArray[4].push('x')
        tileArray[6].push('x')
        tileArray[7].push('x')
    } else if (whoseTurn === 'O') {
        tile5.innerHTML = 'o'
        tileArray[1].push('o')
        tileArray[4].push('o')
        tileArray[6].push('o')
        tileArray[7].push('o')
    }
    tile5.disabled = true
    checkForWinner(tileArray)
    turn --
    setTimeout(computerOptions(buttonArray), 30000)
})

tile6.addEventListener('click', function(){
    if(whoseTurn === 'X') {
        tile6.innerHTML = 'x'
        tileArray[1].push('x')
        tileArray[5].push('x')
    } else if (whoseTurn === 'O') {
        tile6.innerHTML = 'o'
        tileArray[1].push('o')
        tileArray[5].push('o')
    }
    tile6.disabled = true
    checkForWinner(tileArray)
    turn --
    setTimeout(computerOptions(buttonArray), 3000)
})

tile7.addEventListener('click', function(){
    if(whoseTurn === 'X') {
        tile7.innerHTML = 'x'
        tileArray[2].push('x')
        tileArray[3].push('x')
        tileArray[7].push('x')
    } else if (whoseTurn === 'O') {
        tile7.innerHTML = 'o'
        tileArray[2].push('o')
        tileArray[3].push('o')
        tileArray[7].push('o')
    }
    tile7.disabled = true
    checkForWinner(tileArray)
    turn --
    setTimeout(computerOptions(buttonArray), 3000)
})

tile8.addEventListener('click', function(){
    if(whoseTurn === 'X') {
        tile8.innerHTML = 'x'
        tileArray[2].push('x')
        tileArray[4].push('x')
    } else if (whoseTurn === 'O') {
        tile8.innerHTML = 'o'
        tileArray[2].push('o')
        tileArray[4].push('o')
    }
    tile8.disabled = true
    checkForWinner(tileArray)
    turn --
    setTimeout(computerOptions(buttonArray), 3000)
})

tile9.addEventListener('click', function(){
    if(whoseTurn === 'X') {
        tile9.innerHTML = 'x'
        tileArray[2].push('x')
        tileArray[5].push('x')
        tileArray[6].push('x')
    } else if (whoseTurn === 'O') {
        tile9.innerHTML = 'o'
        tileArray[2].push('o')
        tileArray[5].push('o')
        tileArray[6].push('o')
    }
    tile9.disabled = true
    checkForWinner(tileArray)
    turn --
    setTimeout(computerOptions(buttonArray), 3000)
})

