// APP STATE (variables)
    // a variable to track whose turn it is
    // a var for 'x' and a var for 'o'
    // a var to keep count of moves to detect cats/draw game
    // gameBoard array to keep track of player moves ['x', '', 'o', 'x', '', 'o', 'x', '', '']
        // 2d array
        // [
        //     ['x', '', 'o'],
        //     ['x', 'o', ''],
        //     ['x', '', 'o']
        // ]
    // a boolean for if the game is over or not -- is the game currently happening?


// EVENT LISTENERS
    // click event listener(s) for player clicks
        // change innertext of div to X or O
        // store the player's move in the gameBoard array
        // change to the next player's turn
        // check for a win -- calling a win condition function/doing all the win logic
    // click event to clear/reset the board

// some way to tell if a player has already clicked on a square
// win/tie game logic in functions
    // option: detect a win using conditionals and comparisions 
    // option hard mode: store all winning conditions and use loops to compare them to the gameBoard array
        // if the game is won, display the winner and prevent the users from clicking more
        // if it is a cats game, display that and prevent clicks
let zero = document.getElementById('zero')
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let tiles = document.getElementsByClassName('tiles')

let turn = 'X'
let moves = 9
const gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
let gameOver = false

if (gameOver){
    zero.removeEventListener('click', currentMove)
    one.removeEventListener('click', currentMove)
    two.removeEventListener('click', currentMove)
    three.removeEventListener('click', currentMove)
    four.removeEventListener('click', currentMove)
    five.removeEventListener('click', currentMove)
    six.removeEventListener('click', currentMove)
    seven.removeEventListener('click', currentMove)
    eight.removeEventListener('click', currentMove)
}

function checkWin() {
    if (gameBoard[0] == gameBoard[1] && gameBoard[1] == gameBoard[2]){

        gameOver = true
    }
    if (gameBoard[3] == gameBoard[4] && gameBoard[4] == gameBoard[5]){

        gameOver = true
    }
    if (gameBoard[6] == gameBoard[7] && gameBoard[7] == gameBoard[8]){

        gameOver = true
    }
    if (gameBoard[0] == gameBoard[3] && gameBoard[3] == gameBoard[6]){

        gameOver = true
    }
    if (gameBoard[1] == gameBoard[4] && gameBoard[4] == gameBoard[7]){

        gameOver = true
    }
    if (gameBoard[2] == gameBoard[5] && gameBoard[5] == gameBoard[8]){

        gameOver = true
    }
    if (gameBoard[0] == gameBoard[4] && gameBoard[4] == gameBoard[8]){

        gameOver = true
    }
    if (gameBoard[2] == gameBoard[4] && gameBoard[4] == gameBoard[6]){

        gameOver = true
    }
}

function currentMove(event){
    if (moves == 9){
        gameOver = true
    }
    event.target.innerText = turn
    if (turn == 'X') {
        turn = 'O'
    }else {
        turn = 'X'
    }
    moves++
    console.log('clicked')
}

zero.addEventListener('click', currentMove, {once:true})
one.addEventListener('click', currentMove, {once:true})
two.addEventListener('click', currentMove, {once:true})
three.addEventListener('click', currentMove, {once:true})
four.addEventListener('click', currentMove, {once:true})
five.addEventListener('click', currentMove, {once:true})
six.addEventListener('click', currentMove, {once:true})
seven.addEventListener('click', currentMove, {once:true})
eight.addEventListener('click', currentMove, {once:true})