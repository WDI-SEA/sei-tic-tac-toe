

// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

/*----- constants -----*/
//boolean for game over
let gameOver = false

//keeps track of boxes that already have contents
let boxState = {
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false,
    box8: false,
    box9: false
}

// reset button
let resetButtonEl = null



/*----- app's state (variables) -----*/



/*----- cached element references -----*/
function resetGame() {
    console.log('reset game')
    // Update the gameOver state variable
    gameOver = false;

    //clear boxes

    // invoke initializeGame()
    initializeGame();
}

function initializeGame() {
    gameOver = false
    boxState = {
        box1: false,
        box2: false,
        box3: false,
        box4: false,
        box5: false,
        box6: false,
        box7: false,
        box8: false,
        box9: false
    }
    //set player 1
}


/*----- event listeners -----*/
document.addEventListener('DOMContentLoaded', function () {
    console.log('loaded!');
    // reset button to reset the game
    resetButtonEl = document.querySelector('#reset')
    resetButtonEl.addEventListener('click', resetGame)
    // wirebox and click event listener

    // each wire element in an array
    wires = wireboxEl.children
    // init the game
    initializeGame()
})