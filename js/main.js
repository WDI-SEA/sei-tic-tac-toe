// script.js

/*----- constants -----*/
const COLORS = {
  0: 'white',
  1: 'X',
  '-1': 'O',
}

/*----- state variables -----*/
let board // array of 7 column arrays
let turn // 1 or -1
let winner // null = no winner; 1 or -1 = winner; 'T' = Tie

/*----- cached elements  -----*/
const messageEl = document.querySelector('h1')
const playAgainBtn = document.querySelector('button')
const cross = document.getElementsByClassName('x')
// console.log(cross)
const markerEls = [...document.querySelectorAll('#container > div')]
// const markerEls = document.querySelectorAll('#container > div')

/*----- event listeners -----*/
document.getElementById('container').addEventListener('click', handleDrop)

/*----- functions -----*/
init()

// Initialize all state, then call render()
function init() {
  // To visualize the board's mapping to the DOM,
  // rotate the board array 90 degrees counter-clockwise
  board = [
    [0, 0, 0], // col 0
    [0, 0, 0], // col 1
    [0, 0, 0], // col 2
  ]
  turn = 1
  winner = null
  // render()
}

// function render() {
//   renderBoard()
//   renderMessage()
//   renderControls()
// }

// function renderBoard() {}
// function renderMessage() {}
// function renderControls() {} // Hide/show UI elements (controls)

function handleDrop(evt) {
  const pointer = markerEls.indexOf(evt.target)
  console.log(pointer)
  // const cross = document.getElementsByClassName('x')
  // console.log(cross)
  // cross.style.visibility = 'block'
}
