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

// fetch elements
const zero = document.getElementById('zero')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const tiles = document.getElementsByClassName('tiles')
const message = document.getElementById('message')

// app state variables
let turn = 'X'
let moves = 0
let gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
let gameOver = false

// logic for checking win conditions
function checkWin() {
    if (gameBoard[0] == gameBoard[1] && gameBoard[1] == gameBoard[2]){
        gameOver = true
        message.innerText = turn + "Wins!"
    }
    if (gameBoard[3] == gameBoard[4] && gameBoard[4] == gameBoard[5]){
        gameOver = true
        message.innerText = turn + "Wins!"
    }
    if (gameBoard[6] == gameBoard[7] && gameBoard[7] == gameBoard[8]){
        gameOver = true
        message.innerText = turn + "Wins!"
    }
    if (gameBoard[0] == gameBoard[3] && gameBoard[3] == gameBoard[6]){
        gameOver = true
        message.innerText = turn + "Wins!"
    }
    if (gameBoard[1] == gameBoard[4] && gameBoard[4] == gameBoard[7]){
        gameOver = true
        message.innerText = turn + "Wins!"
    }
    if (gameBoard[2] == gameBoard[5] && gameBoard[5] == gameBoard[8]){
        gameOver = true
        message.innerText = turn + "Wins!"
    }
    if (gameBoard[0] == gameBoard[4] && gameBoard[4] == gameBoard[8]){
        gameOver = true
        message.innerText = turn + "Wins!"
    }
    if (gameBoard[2] == gameBoard[4] && gameBoard[4] == gameBoard[6]){
        gameOver = true
        message.innerText = turn + "Wins!"
    }
}

// function for player moves
function currentMove(event){
    moves++
    if (moves >= 9){
        gameOver = true
    }

    event.target.innerText = turn

    // records moves to gameBoard array
    if (event.target.id == 'zero'){
        gameBoard[0] = turn
    } else if (event.target.id == 'one'){
        gameBoard[1] = turn
    } else if (event.target.id == 'two'){
        gameBoard[2] = turn
    } else if (event.target.id == 'three'){
        gameBoard[3] = turn
    } else if (event.target.id == 'four'){
        gameBoard[4] = turn
    } else if (event.target.id == 'five'){
        gameBoard[5] = turn
    } else if (event.target.id == 'six'){
        gameBoard[6] = turn
    } else if (event.target.id == 'seven'){
        gameBoard[7] = turn
    } else {
        gameBoard[8] = turn
    }

    checkWin()

    // changes whos turn it is
    if (turn == 'X') {
        turn = 'O'
    }else {
        turn = 'X'
    }
    message.innerText = turn + "'s turn!"

    console.log(moves)
    console.log(gameBoard)
    console.log(gameOver)
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
}

// adds event handlers to tile divs
zero.addEventListener('click', currentMove, {once:true})
one.addEventListener('click', currentMove, {once:true})
two.addEventListener('click', currentMove, {once:true})
three.addEventListener('click', currentMove, {once:true})
four.addEventListener('click', currentMove, {once:true})
five.addEventListener('click', currentMove, {once:true})
six.addEventListener('click', currentMove, {once:true})
seven.addEventListener('click', currentMove, {once:true})
eight.addEventListener('click', currentMove, {once:true})

