let currentPlayer = 'X'
//variable for current players turn
//currentPlayer is basically a player action
const b1r1 = document.getElementById('box11')
b1r1.addEventListener('click',() => {
  b1r1.innerText = currentPlayer
  if (currentPlayer === 'X'){
    currentPlayer = "O"
  } else {
    currentPlayer = "X"
  }
}) 

// const b1r1 = document.getElementById('box11')
// b1r1.addEventListener('click',() => {
//   b1r1.innerText = 'X'
// })
//innerText was set to X but then set to currentPlayer to flip O in with it.
//(rando name = attach a document that is an element with 'name')
//add on click of the mouse to click resulting with a text of X.

const b2r1 = document.getElementById('box12')
b2r1.addEventListener('click',() => {
  b2r1.innerText = currentPlayer
  if (currentPlayer === 'X'){
    currentPlayer = "O"
  } else {
    currentPlayer = "X"
  }
}) 

const b3r1 = document.getElementById('box13')
b3r1.addEventListener('click',() => {
  b3r1.innerText = currentPlayer
  if (currentPlayer === 'X'){
    currentPlayer = "O"
  } else {
    currentPlayer = "X"
  }
}) 

const b1r2 = document.getElementById('box14')
b1r2.addEventListener('click',() => {
  b1r2.innerText = currentPlayer
  if (currentPlayer === 'X'){
    currentPlayer = "O"
  } else {
    currentPlayer = "X"
  }
}) 

const b2r2 = document.getElementById('box15')
b2r2.addEventListener('click',() => {
  b2r2.innerText = currentPlayer
  if (currentPlayer === 'X'){
    currentPlayer = "O"
  } else {
    currentPlayer = "X"
  }
}) 

const b3r2 = document.getElementById('box16')
b3r2.addEventListener('click',() => {
  b3r2.innerText = currentPlayer
  if (currentPlayer === 'X'){
    currentPlayer = "O"
  } else {
    currentPlayer = "X"
  }
})

const b1r3 = document.getElementById('box17')
b1r3.addEventListener('click',() => {
  b1r3.innerText = currentPlayer
  if (currentPlayer === 'X'){
    currentPlayer = "O"
  } else {
    currentPlayer = "X"
  }
}) 

const b2r3 = document.getElementById('box18')
b2r3.addEventListener('click',() => {
  b2r3.innerText = currentPlayer
  if (currentPlayer === 'X'){
    currentPlayer = "O"
  } else {
    currentPlayer = "X"
  }
}) 

const b3r3 = document.getElementById('box19')
b3r3.addEventListener('click',() => {
  b3r3.innerText = currentPlayer
  if (currentPlayer === 'X'){
    currentPlayer = "O"
  } else {
    currentPlayer = "X"
  }
}) 

// These lines of code were written first to allow X's to be selected in each box
//  then went back to each one to allow X's and O'screen to be selected.

// const b2r1 = document.getElementById('box12')
// b2r1.addEventListener('click',() => {
//   b2r1.innerText = 'X'
// })

// const b3r1 = document.getElementById('box13')
// b3r1.addEventListener('click',() => {
//   b3r1.innerText = 'X'
// })

// const b1r2 = document.getElementById('box14')
// b1r2.addEventListener('click',() => {
//   b1r2.innerText = 'X'
// })

// const b2r2 = document.getElementById('box15')
// b2r2.addEventListener('click',() => {
//   b2r2.innerText = 'X'
// })

// const b3r2 = document.getElementById('box16')
// b3r2.addEventListener('click',() => {
//   b3r2.innerText = 'X'
// })

// const b1r3 = document.getElementById('box17')
// b1r3.addEventListener('click',() => {
//   b1r3.innerText = 'X'
// })

// const b2r3 = document.getElementById('box18')
// b2r3.addEventListener('click',() => {
//   b2r3.innerText = 'X'
// })

// const b3r3 = document.getElementById('box19')
// b3r3.addEventListener('click',() => {
//   b3r3.innerText = 'X'
// })