// instantiate gameboard in js-grid needs to be visible
//console.log('linked')
// declare players
let turn = 0
let person = []
let computer = []
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

// create logic that allows to insert current player's letter in box
let gameBoard = document.getElementById('gameBoard')
gameBoard.addEventListener('click', playTurn)

function playTurn(e) {
    let boxClicked = e.target
    console.log(boxClicked);
    if (boxClicked.classList.contains('turnx') || boxClicked.classList.contains('turno')) {
        alert('already clicked')
    } else {
        if (turn % 2 !== 0) {
            boxClicked.classList.add('turnx')
        } else if (turn % 2 === 0) {
            boxClicked.classList.add('turno')
        }
        turn++
    }
    // reference id being clicked each time
    //push id into array(person/computer) depending upon turn
    // check tie/cat's game (maxed out on turns)
}
// set up winCondition function
// set up endGame function(nested for loop, check if player's array.includes (winningCombos-if included player has won))


// create helper logic that does not allow player to replace other player's iteration
// create variable that holds all possible winning combinations
// create function that checks current gameboard against possible winning combos every round
// create helper function that stops players from adding inner.Text when winner has been declared/tie game
// tie game only exists == 7, 8, 9 move
// create a reset button -resets inner.Text to empty string