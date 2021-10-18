let reset = document.querySelector('#resetGame')
const squares = document.getElementsByTagName('p') // this is redundant code
let displayNextTurn = document.querySelector('h3')
const square1 = document.querySelector('#square1')
const square2 = document.querySelector('#square2')
const square3 = document.querySelector('#square3')
const square4 = document.querySelector('#square4')
const square5 = document.querySelector('#square5')
const square6 = document.querySelector('#square6')
const square7 = document.querySelector('#square7')
const square8 = document.querySelector('#square8')
const square9 = document.querySelector('#square9')


let currentPlayer = 'X'

checkForTie = () => {
        if (square1.innerText !== "" && square2.innerText !== "" && square3.innerText !== "" && square4.innerText !== "" 
        && square5.innerText !== "" && square6.innerText !== "" && square7.innerText !== "" && square8.innerText !== "" && square9.innerText !== ""){
            {setTimeout(function(){ alert('The game is a draw! Try again')}, 200)}  
        }
    }





const checkForWin = () => {
    switch(true){
        case (square1.innerText == 'X' && square5.innerText == 'X' && square9.innerText == 'X' || 
            square1.innerText == 'O' && square5.innerText == 'O' && square9.innerText == 'O' ):
            {setTimeout(function(){ alert('You win the game!')}, 200)}
            true
            break
        case (square3.innerText == 'X' && square5.innerText == 'X' && square7.innerText == 'X' || 
            square3.innerText == 'O' && square5.innerText == 'O' && square7.innerText == 'O' ):
            {setTimeout(function(){ alert('You win the game!')}, 200)}
            break
        case (square2.innerText == 'X' && square5.innerText == 'X' && square8.innerText == 'X' || 
            square2.innerText == 'O' && square5.innerText == 'O' && square8.innerText == 'O' ):
            {setTimeout(function(){ alert('You win the game!')}, 200)}
            break
        case (square1.innerText == 'X' && square4.innerText == 'X' && square7.innerText == 'X' || 
            square1.innerText == 'O' && square4.innerText == 'O' && square7.innerText == 'O' ):
            {setTimeout(function(){ alert('You win the game!')}, 200)}
            break
        case (square1.innerText == 'X' && square2.innerText == 'X' && square3.innerText == 'X' || 
            square1.innerText == 'O' && square2.innerText == 'O' && square3.innerText == 'O' ):
            {setTimeout(function(){ alert('You win the game!')}, 200)}
            break
        case (square3.innerText == 'X' && square6.innerText == 'X' && square9.innerText == 'X' || 
            square3.innerText == 'O' && square6.innerText == 'O' && square9.innerText == 'O' ):
            {setTimeout(function(){ alert('You win the game!')}, 200)}
            break
        case (square7.innerText == 'X' && square8.innerText == 'X' && square9.innerText == 'X' || 
            square7.innerText == 'O' && square8.innerText == 'O' && square9.innerText == 'O' ):
            {setTimeout(function(){ alert('You win the game!')}, 200)}
            break
        case (square4.innerText == 'X' && square5.innerText == 'X' && square6.innerText == 'X' || 
            square4.innerText == 'O' && square5.innerText == 'O' && square6.innerText == 'O' ):
            {setTimeout(function(){ alert('You win the game!')}, 200)}
            break
        case (squares.innerText == 'X' || squares.innerText == "O" ):
            {setTimeout(function(){ alert('The game is a draw! Try again')}, 200)} 
            break
        default: 
        if (square1.innerText !== "" && square2.innerText !== "" && square3.innerText !== "" && square4.innerText !== "" 
        && square5.innerText !== "" && square6.innerText !== "" && square7.innerText !== "" && square8.innerText !== "" && square9.innerText !== ""){
            {setTimeout(function(){ alert('The game is a draw! Try again')}, 200)}  
        }
    }}

let changeTurn =  () => {
    if(currentPlayer == 'X'){
        currentPlayer = 'O'
        displayNextTurn.innerHTML = "O, you're up!"
        checkForWin()
        // checkForTie()

    } else {
        currentPlayer = 'X'
        displayNextTurn.innerHTML = "X's turn"
        checkForWin()
        // checkForTie()
    }
}
//alternate between x and o for every click
//determing the last move made(x or o)
//determine which should be next(x or o)
// pass something to a function that will play either x or o depending on above conditions

const playSquare1 = () => {
    if (square1.innerText == ""){
        square1.innerText = currentPlayer 
        changeTurn()
    }}
        // console.log('square1')

const playSquare2 = () =>{       
    if (square2.innerText == ""){
        square2.innerText = currentPlayer 
        changeTurn()
        // console.log('square2')
    }}

const playSquare3 = () => {
    if (square3.innerText == ""){
        square3.innerText = currentPlayer 
        changeTurn()
        // console.log('square3')
    }}
const playSquare4  = () => {
    if (square4.innerText == ""){
        square4.innerText = currentPlayer 
        changeTurn()
        // console.log('square4')
    }}
const playSquare5 = () => {
    if (square5.innerText == ""){
        square5.innerText = currentPlayer 
        changeTurn()
        // console.log('square5')
    }}
const playSquare6 = () => {
    if (square6.innerText == ""){
        square6.innerText = currentPlayer 
        changeTurn()
        // console.log('square6')
    }}
const playSquare7 = () => {
    if (square7.innerText == ""){
        square7.innerText = currentPlayer 
        changeTurn()
        // console.log('square7')
    }}
const playSquare8 = () => {
    if (square8.innerText == ""){
        square8.innerText = currentPlayer 
        changeTurn()
        // console.log('square8')
    }}
const playSquare9 = () => {
    if (square9.innerText == ""){
        square9.innerText = currentPlayer 
        changeTurn()
        // console.log('square9')
    }} 



        
        
const clearBoard = () => {
   console.log('this is the button for clear:\n', 'game cleared!')
   alert
   
   square1.innerText = "" 
   square2.innerText = "" 
   square3.innerText = "" 
   square4.innerText = "" 
   square5.innerText = "" 
   square6.innerText = "" 
   square7.innerText = "" 
   square8.innerText = "" 
   square9.innerText = "" 
}
        
reset.addEventListener('click', clearBoard)
square1.addEventListener('click', playSquare1)
square3.addEventListener('click', playSquare3)
square2.addEventListener('click', playSquare2)
square4.addEventListener('click', playSquare4)
square5.addEventListener('click', playSquare5)
square6.addEventListener('click', playSquare6)
square7.addEventListener('click', playSquare7)
square8.addEventListener('click', playSquare8)
square9.addEventListener('click', playSquare9)
        
        
// document.addEventListener ('DOMContentLoaded', () => {} 
//reset.addEventListener('click', clearBoard)
