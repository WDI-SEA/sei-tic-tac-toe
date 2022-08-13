console.log("Hello!")

const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const playSpace = document.querySelectorAll('.gridSpace')
const reset = document.getElementById('reset')
const playerTurn = document.getElementById('playerTurn')
console.log(playSpace)
console.log(reset)
// APP STATE (variables)
    // a variable to track whose turn it is
    // can do even/odd with % to determine player turn

    const turn = gameBoard.length


let curPlayer = 0 //0 is playerOne
// let claimedSpaces = []


    
const playerOne = 'x'
const playerTwo = 'o'

    // a var for 'x' and a var for 'o'
// const x =
// const o =
    // a var to keep count of moves to detect cats/draw game
// const draw = 
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
one.addEventListener('click', function(){
    markGridLocationAndUpdatePlayerTurn(one)
})
two.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(two)
})
three.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(three)
})
four.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(four)
})
five.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(five)
})
six.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(six)
})
seven.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(seven)
})
eight.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(eight)
})
nine.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(nine)
})
//how to insert value 

function markGridLocationAndUpdatePlayerTurn(gridLocation){
    if(curPlayer === 0){
        playerTurn.innerText = "Go for it, Player 2!"
        gridLocation.innerText = 'x'
        curPlayer = 1
    } else {
        playerTurn.innerText = "Make a move, Player 1!"
        gridLocation.innerText = 'o'
        curPlayer = 0
    }
}

// function claimSpace(space){
//   if (space === 'one'){
//     if(claimedSpaces.indexOf('one') === -1){
//             if (curPlayer === 0){
//                 one.innerText = 'x'
//                 curPlayer = 1
//             } else {
//                 one.innerText = 'o'
//                 curPlayer = 0
//             }
//             claimedSpaces.push('one')
//     } else {
//         console.log("one has already been claimed")
//     }
//   } else if (space === 'two'){
//     if(claimedSpaces.indexOf('two') === -1){
//             if (curPlayer === 0){
//                 two.innerText = 'x'
//                 curPlayer = 1
//             } else {
//                 two.innerText = 'o'
//                 curPlayer = 0
//             }
//             claimedSpaces.push('two')
//     } else {
//         console.log("one has already been claimed")
//     }
//   }
// }
// function whosTurn(){
//     if (curPlayer % 2 === 0) {
//         return playerOne
        
//     } else {
//         return playerTwo
//     }
// }

        // change innertext of div to X or O
        // store the player's move in the gameBoard array
        // change to the next player's turn
        // check for a win -- calling a win condition function/doing all the win logic
    // click event to clear/reset the board

// if (curPlayer === 0){
//     playerTurn.innerText = "Make a move, Player 1!"
// } else {
//     playerTurn.innerText = "Go for it, Player 2!"
// }

reset.addEventListener('click', resetBoard)
function resetBoard(){
    one.innerText = " - "
    two.innerText = " - "
    three.innerText = " - "
    four.innerText = " - "
    five.innerText = " - "
    six.innerText = " - "
    seven.innerText = " - "
    eight.innerText = " - "
    nine.innerText = " - "
    curPlayer = 0
    playerTurn.innerText = "Make a move, Player 1!"
}


// some way to tell if a player has already clicked on a square
// win/tie game logic in functions
    // option: detect a win using conditionals and comparisions 
    // option hard mode: store all winning conditions and use loops to compare them to the gameBoard array
        // if the game is won, display the winner and prevent the users from clicking more
        // if it is a cats game, display that and prevent clicks