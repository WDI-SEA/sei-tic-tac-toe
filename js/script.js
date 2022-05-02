// console.log("hello")

// // APP STATE (variables)
// let player1 = "X"
// let player2 = "O"

// const turns = ["X", "O"]
// // the gameboard -- use an array
// // ['x', ' ', ' ', 'x', 'o', ' ', 'x', 'o', ' ']
// let gameboard = []
const endGame = document.querySelector("#console")

const empty = ""
const options = ["empty", "X", "O"]

const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')

let winFlag = false
// [
//     ['x', ' ', ' ' ],
//     [ 'x', 'o', ' '],
//     ['x', 'o', ' ' ]
// ]

// // var for whose turn it is
let turn = 1
let playerTurn = "X"
const activePlayer = function(){
    if (playerTurn === "O" && turn < 10){
        playerTurn = "X"
        endGame.innerText = "It's Player 1's Turn!"
        return 'X'
    }else if (playerTurn === "X" && turn < 10){
        playerTurn = "O"
        endGame.innerText = "It's Player 2's Turn!"
        return 'O'
    }
}

const tieGame = function() {
    if (turn === 10){
        endGame.innerText = "It's a Tie!"
    }
}
// // has the game been won? bool

document.querySelector('#one').addEventListener('click', function(){
    if (one.innerText === ""){
    document.querySelector('#one').innerText = playerTurn
    turn++
    // activePlayer()
    winCheck()
    if (winFlag === false) {
        activePlayer()
    } 
    tieGame()
}
})
document.querySelector('#two').addEventListener('click', function(){
    if (two.innerText === ""){
    document.querySelector('#two').innerText = playerTurn
    turn++
    // activePlayer()
    winCheck()
    if (winFlag === false) {
        activePlayer()
    }
    tieGame()
}
})
document.querySelector('#three').addEventListener('click', function(){
    if (three.innerText === ""){
    document.querySelector('#three').innerText = playerTurn
    turn++
    // activePlayer()
    winCheck()
    if (winFlag === false) {
        activePlayer()
    }
    tieGame()
}
})
document.querySelector('#four').addEventListener('click', function(){
    if (four.innerText === ""){
    document.querySelector('#four').innerText = playerTurn
    turn++
    // activePlayer()
    winCheck()
    if (winFlag === false) {
        activePlayer()
    }
}
})
document.querySelector('#five').addEventListener('click', function(){
    if (five.innerText === ""){
    document.querySelector('#five').innerText = playerTurn
    turn++
    // activePlayer()
    winCheck()
    if (winFlag === false) {
        activePlayer()
    }
    tieGame()
}
})
document.querySelector('#six').addEventListener('click', function(){
    if (six.innerText === ""){
    document.querySelector('#six').innerText = playerTurn
    turn++
    // activePlayer()
    winCheck()
    if (winFlag === false) {
        activePlayer()
    }
    tieGame()
}
})
document.querySelector('#seven').addEventListener('click', function(){
    if (seven.innerText === ""){
    document.querySelector('#seven').innerText = playerTurn
    turn++
    // activePlayer()
    winCheck()
    if (winFlag === false) {
        activePlayer()
    }
    tieGame()
}
})
document.querySelector('#eight').addEventListener('click', function(){
    if (eight.innerText === ""){
    document.querySelector('#eight').innerText = playerTurn
    turn++
    // activePlayer()
    winCheck()
    if (winFlag === false) {
        activePlayer()
    }
    tieGame()
}
})
document.querySelector('#nine').addEventListener('click', function(){
    if (nine.innerText === ""){
    document.querySelector('#nine').innerText = playerTurn
    turn++
    // activePlayer()
    winCheck()
    if (winFlag === false) {
        activePlayer()
    }
    tieGame()
}
})

const winCheck = function(){
    // console.log(one.innerText)
    // console.log(four.innerText)
    // console.log(seven.innerText)
    if (one.innerText != "" && one.innerText === two.innerText && two.innerText === three.innerText){
        // console.log('win1')
        // console.log(one.innerText)
        endGame.innerText = (playerTurn + " wins!")
        winFlag = true
        playerTurn = ""
        //top row full
    }else if (four.innerText != "" && four.innerText === five.innerText && five.innerText === six.innerText){
        // console.log('win2')
        endGame.innerText = (playerTurn + " wins!")
        winFlag = true
        playerTurn = ""
        //middle row full
    }else if (seven.innerText != "" && seven.innerText === eight.innerText && eight.innerText === nine.innerText){
        // console.log('win3')
        endGame.innerText = (playerTurn + " wins!")
        winFlag = true
        playerTurn = ""
        //bottom row full
    }else if (one.innerText != "" && one.innerText === four.innerText && four.innerText === seven.innerText){
        // console.log('win4')
        endGame.innerText = (playerTurn + " wins!")
        winFlag = true
        playerTurn = ""
        //left column full
    }else if (two.innerText != "" && two.innerText === five.innerText && five.innerText === eight.innerText){
        // console.log('win5')
        endGame.innerText = (playerTurn + " wins!")
        winFlag = true
        playerTurn = ""
        //middle column full
    }else if (three.innerText != "" && three.innerText === six.innerText && six.innerText === nine.innerText){
        // console.log('win6')
        endGame.innerText = (playerTurn + " wins!")
        winFlag = true
        playerTurn = ""
        //right column full
    }else if (three.innerText != "" && three.innerText === five.innerText && five.innerText === seven.innerText){
        // console.log('win7')
        endGame.innerText = (playerTurn + " wins!")
        winFlag = true
        playerTurn = ""
        //diagonal one
    }else if (one.innerText != "" && one.innerText === five.innerText && five.innerText === nine.innerText){
        // console.log('win8')
        endGame.innerText = (playerTurn + " wins!")
        winFlag = true
        playerTurn = ""
        //diagonal two
    }
    // playerTurn = ""
}
const clear = function(){
    const el = document.querySelectorAll('.grid-items')
    // console.log(el[1])
    for (let i = 0; i < el.length; i++) {
        el[i].innerText = ""
    }
    turn = 1
    endGame.innerText = ""
    playerTurn = "X"
    winFlag = false
}
document.querySelector('#clear').addEventListener('click', clear)
// // DOM contented Loaded
// // query selector(s) to handle user clicks 
//     // current player needs to be marked on the board -- if that space is empty (conditional) using css (if you want to use it)
//     // that move needs to be place in the gameboard array
//     // function that checks if there is a winner from the gameboard array
//         // in that function -- if else statements
//             // checking all of the win conditions (visualize all ways to win the game)
//                 // if a win is found -- stop the game and show the winner
//                 // otherwise let game continue      
//         // and cats games (after nine moves) (or gameboard is full and no winner)