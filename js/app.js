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

// determine whose turn it is (iterator in a for loop using modulo to determine if the turn is even or odd)
for (let i = 0; i < 9; i++) {
    //if it is x's turn
    if (i % 2 === 0) {
        
    //if it is o's turn
    } else if (i % 2 !== 0)

}

square1.addEventListener('click', () => {
    if turn
})



// listen for a click

// on click, create a new x element

// append new x to the clicked square

// check whether x has reached win conditions

    // if win conditions are met, announce that x has won and break loop

    // create reset button

    // append reset button

// check whether the board is full

    // if board is full, announce a tie and break loop

    // display reset button

    // append reset button

// if neither condition is met, loop to the beginning 
