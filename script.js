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
const reset = document.getElementById('reset')
const xwins = document.getElementById('xwins')
const owins = document.getElementById('owins')

// app state variables
let turn = 'X'
let moves = 0
let gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
let gameOver = false

// logic for checking win conditions
function checkWin() {
    if (gameBoard[0] == gameBoard[1] && gameBoard[1] == gameBoard[2]){
        gameOver = true
        message.innerText = turn + " Wins!"
        // increases winner's win count
        if (turn == 'X'){
            xwins.innerText++
        } else {
            owins.innerText++
        }
    }
    if (gameBoard[3] == gameBoard[4] && gameBoard[4] == gameBoard[5]){
        gameOver = true
        message.innerText = turn + " Wins!"
        if (turn == 'X'){
            xwins.innerText++
        } else {
            owins.innerText++
        }
    }
    if (gameBoard[6] == gameBoard[7] && gameBoard[7] == gameBoard[8]){
        gameOver = true
        message.innerText = turn + " Wins!"
        if (turn == 'X'){
            xwins.innerText++
        } else {
            owins.innerText++
        }
    }
    if (gameBoard[0] == gameBoard[3] && gameBoard[3] == gameBoard[6]){
        gameOver = true
        message.innerText = turn + " Wins!"
        if (turn == 'X'){
            xwins.innerText++
        } else {
            owins.innerText++
        }
    }
    if (gameBoard[1] == gameBoard[4] && gameBoard[4] == gameBoard[7]){
        gameOver = true
        message.innerText = turn + " Wins!"
        if (turn == 'X'){
            xwins.innerText++
        } else {
            owins.innerText++
        }
    }
    if (gameBoard[2] == gameBoard[5] && gameBoard[5] == gameBoard[8]){
        gameOver = true
        message.innerText = turn + " Wins!"
        if (turn == 'X'){
            xwins.innerText++
        } else {
            owins.innerText++
        }
    }
    if (gameBoard[0] == gameBoard[4] && gameBoard[4] == gameBoard[8]){
        gameOver = true
        message.innerText = turn + " Wins!"
        if (turn == 'X'){
            xwins.innerText++
        } else {
            owins.innerText++
        }
    }
    if (gameBoard[2] == gameBoard[4] && gameBoard[4] == gameBoard[6]){
        gameOver = true
        message.innerText = turn + " Wins!"
        if (turn == 'X'){
            xwins.innerText++
        } else {
            owins.innerText++
        }
    }
}

// function for player moves
function currentMove(event){
    // adds move to tile
    event.target.innerText = turn
    moves++

    // checks for draw
    if (moves >= 9){
        message.innerText = "Cat's game! / It's a draw!"
        gameOver = true
    }

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

    // ends game if win conditions or cats game detected
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
        return
    }

    // changes whos turn it is
    if (turn == 'X') {
        turn = 'O'
    }else {
        turn = 'X'
    }
    message.innerText = turn + "'s turn!"
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

// resets game board
reset.addEventListener('click', function(){
    message.innerText = "X gets the first turn"
    zero.innerText = ""
    one.innerText = ""
    two.innerText = ""
    three.innerText = ""
    four.innerText = ""
    five.innerText = ""
    six.innerText = ""
    seven.innerText = ""
    eight.innerText = ""
    turn = "X"
    moves = 0
    gameOver = false
    gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    zero.addEventListener('click', currentMove, {once:true})
    one.addEventListener('click', currentMove, {once:true})
    two.addEventListener('click', currentMove, {once:true})
    three.addEventListener('click', currentMove, {once:true})
    four.addEventListener('click', currentMove, {once:true})
    five.addEventListener('click', currentMove, {once:true})
    six.addEventListener('click', currentMove, {once:true})
    seven.addEventListener('click', currentMove, {once:true})
    eight.addEventListener('click', currentMove, {once:true})
})