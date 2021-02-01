// Is it linked
// const helloWorld = () => {
//     console.log('Hello');
// }

// helloWorld()

// Select elements and attach functions via event listeners
// need a variable to keep track of moves. 
// This will be used to indicate whether or not to draw an X or an O


// elements and variables | player1 is X | player2 is O
const PLAYER_ONE = 'x'
const PLAYER_TWO = 'circle'
const gridElements = document.querySelectorAll('[data-cell]')
let playerOneTurn

// handles click count/postion
gridElements.forEach(grid => {
    grid.addEventListener('click', handleClick, { once: true})
})

function handleClick(event) {
    console.log('clicked!');
}



// reset button
// const resetButton = () => {
//     document.getElementById("reset").reset();
// }


