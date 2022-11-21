// javascript

//  we need to keep track of the gameboard in javascript
// a way to index squares -- that correlates to the arrays
// a way to make the x's and o's stick
//         use an array to keep track of the x's and o's on the gameboard
//         (option 1: 1d array) ['x', '', '', '', '', '', '', '', ''] 
//         (option 2: trickier 2d array):
//         [
//             ['x', '', ''],
//             ['o', 'x', ''],
//             ['o', '', 'x']
//         ]
//         array[0][0] -- accessing a 2d array
//     a way to alternate players
//         a varaible that tracks whose turn it currently is -- this would start off as 'x'
//     a varaible that tracks if the game is running or not
//         let isRunning = true 
//     event listeners --clicking on the divs and making the x's or o's appear
//         when a square is clicked, do the following:
//             first check if that spot in the array is empty and that isRunning is true, if so, do the following:
//                 we make an x or o appear -- as simple as setting the inner text
//                 check if a win has occured  
//                     check all 8 win cases for 'x' and for 'o'
//                     cats games could check if all spaces are filled (verbose) OR
//                     have a varaible that increments every turn and call a cats game at 9 if no body has won
//                     if the game is won or a cats game occurs -- set isRunning to false
//                         other ways to check out that might be good to end the game 
//                         if game is won -- we could remove the gameboard from the DOM 
//                         or you could fill up the array spaces
//                         delete a class to prevent listeners from firing
//                 alternate players if a win did not occur by changing the varaible that tracks whose turn it currently is
//                 increment the turn counter to move closer to the cats condition

//how to make winning formulas match boxes


// how to switch players for each go 



// how to make clicked box display



// how to restart board with button 


let clearBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]
//patterns to keep track off
let winningPatterns = [
   [0, 1, 2]
   [3, 4, 5]
   [6, 7, 8]
   [0, 3, 6]
   [1, 4, 7]
   [2, 5, 8]
   [0, 4, 8]
   [2, 4, 6]
]
let board = document.getElementsByClassName('gameGrid')
let square = document.getElementsByClassName('square')
let disText = document.getElementsByClassName('gameStatus')
let restart = document.getElementsByClassName('clear')
let player1 = 'X'
let player2 = 'O'
let winnerMessage = 'X wins'
let winnerMessage2 = 'O wins'
let tieGame = 'Tie game, play again' 
// let gameActive = true

let TL = document.getElementById('TL') // 0
let TM = document.getElementById('TM') // 1
let TR = document.getElementById('TR') // 2
let ML = document.getElementById('ML') // 3
let MM = document.getElementById('MM') // 4
let MR = document.getElementById('MR') // 5
let BL = document.getElementById('BL') // 6
let BM = document.getElementById('BM') // 7
let BR = document.getElementById('BR') // 8

//try if else statement
let xWinning() {
    if (TL === 'X' && TM === 'X' && TR === 'X') {
        return(winnerMessage)
    } else if (ML === 'X' && MM === 'X' && MR === 'X') {
        return(winnerMessage)
    } else if (BL === 'X' && BM === 'X' && BR === 'X') {
        return(winnerMessage)
    } else if (TL === 'X' && ML === 'X' && BL === 'X') {
        return(winnerMessage)
    } else if  (TM === 'X' && MM === 'X' && BM === 'X') {
        return(winnerMessage)
    } else if (TR === 'X' && MR === 'X' && BR === 'X') {
        return(winnerMessage)
    } else if (TL === 'X' && MM === 'X' && BR === 'X') {
        return(winnerMessage)
    } else if (TR === 'X' && MM === 'X' && BL === 'X') {
        return(winnerMessage)
    } else {
        return(tieGame)
    }
}

let oWinning() {
    if (TL === 'O' && TM === 'O' && TR === 'O') {
        return(winnerMessage)
    } else if (ML === 'O' && MM === 'O' && MR === 'O') {
        return(winnerMessage)
    } else if (BL === 'O' && BM === 'O' && BR === 'O') {
        return(winnerMessage)
    } else if (TL === 'O' && ML === 'O' && BL === 'O') {
        return(winnerMessage)
    } else if  (TM === 'O' && MM === 'O' && BM === 'O') {
        return(winnerMessage)
    } else if (TR === 'O' && MR === 'O' && BR === 'O') {
        return(winnerMessage)
    } else if (TL === 'O' && MM === 'X' && BR === 'O') {
        return(winnerMessage)
    } else if (TR === 'O' && MM === 'O' && BL === 'O') {
        return(winnerMessage)
    } else {
        return(tieGame)
    }
}




// function gameOver(e) {
//    board.addEventListener('click', clearBoard)
// }

restart.addEventListener('click', function() {
    TL.innerText = ''
    TM.innerText = ''
    TR.innerText = ''
    ML.innerText = ''
    MM.innerText = ''
    MR.innerText = ''
    BL.innerText = ''
    BM.innerText = ''
    BL.innerText = ''
})