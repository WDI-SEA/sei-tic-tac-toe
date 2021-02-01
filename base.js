// instantiate gameboard in js-grid needs to be visible
//console.log('linked')
// declare players
const person = 'x'
const computer = 'o'
let board = ['']
    // create logic that allows to insert current player's letter in box
function yourTurn() {
    document.querySelector('.boxes').addEventListener('click', yourTurn)
    console.log(yourTurn);
}

// create helper logic that does not allow player to replace other player's iteration


// create variable that holds all possible winning combinations
const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
// create function that checks current gameboard against possible winning combos every round
// create helper function that stops players from adding inner.Text when winner has been declared/tie game
// tie game only exists == 7, 8, 9 move
// create a reset button -resets inner.Text to empty string