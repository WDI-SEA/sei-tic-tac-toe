// register that the page has been opened
document.addEventListener('DOMContentLoaded', () => {
    console.log('the dom has loaded')
})
// create clickable squares 1-9
const square1 = document.getElementById('div-1')
const square2 = document.getElementById('div-2')
const square3 = document.getElementById('div-3')
const square4 = document.getElementById('div-4')
const square5 = document.getElementById('div-5')
const square6 = document.getElementById('div-6')
const square7 = document.getElementById('div-7')
const square8 = document.getElementById('div-8')
const square9 = document.getElementById('div-9')

// open turn counter
turn = 0
// establish win conditions
const wins = [
    ['div-1','div-2','div-3'],['div-4','div-5','div-6'],['div-7','div-8','div-9'],
    ['div-1','div-4','div-7'],['div-2','div-5','div-8'],['div-3','div-6','div-9'],
    ['div-1','div-5','div-9'],['div-3','div-5','div-7']
]

// make array for x and o entries
const xMoves = []
const oMoves = []

// determine whose turn it is (iterator in a for loop using modulo to determine if the turn is even or odd)

const playerAction = (event) => {
    const chosenSquareId = event.target.id
    console.log('player chose:', chosenSquareId)
    const newMark = document.createElement('p')
    newMark.classList.add('mark')
    //if else statement based on turn that assigns x or o
    if (turn % 2 === 0) {
        newMark.innerText = 'x'
        xMoves.push(chosenSquareId)
    } else {
        newMark.innerText = 'o'
        oMoves.push(chosenSquareId)
    }
    document.getElementById(chosenSquareId).appendChild(newMark)
    // check whether x has won
    xMoves.sort()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    for (i = 0; i < wins.length; i++) {
        for(j = 0; j < wins[i].length; j++) {
            for(k = 0; k < xMoves.length; k++) {
                if (xMoves[k] === wins[i][j]) {

                }
            }
        }
        
    }
    
    // check whether o has won
    
    
    
    // check whether the board is full
    if (turn === 8) {
        console.log('game over')
    }
    turn++
    console.log('x Moves:', xMoves)
    console.log('o Moves:', oMoves)
}

// listen for a click
square1.addEventListener('click',playerAction)
square2.addEventListener('click',playerAction)
square3.addEventListener('click',playerAction)
square4.addEventListener('click',playerAction)
square5.addEventListener('click',playerAction)
square6.addEventListener('click',playerAction)
square7.addEventListener('click',playerAction)
square8.addEventListener('click',playerAction)
square9.addEventListener('click',playerAction)
// on click: 
    //create a new mark element
    // append new mark to the clicked square

    // check whether x has reached win conditions

    // if win conditions are met, announce that x has won and break loop

       // create reset button

        // append reset button

// check whether the board is full

    // if board is full, announce a tie and break loop

    // display reset button

    // append reset button

// if neither condition is met, up turn counter
