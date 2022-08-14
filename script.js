console.log('test')

// BOXES CLICKED input
let box1 = document.querySelector('#1')
let box2 = document.querySelector('#2')
let box3 = document.querySelector('#3')
let box4 = document.querySelector('#4')
let box5 = document.querySelector('#5')
let box6 = document.querySelector('#6')
let box7 = document.querySelector('#7')
let box8 = document.querySelector('#8')
let box9 = document.querySelector('#9')

let reset = document.querySelector('#reset')
let result = document.querySelector('#result')

// EVENT LISTENERS

// FUNCTION

    1. player clicks
        - score gets tallied
    2. check if score is a winning combo
    3. game status 
        a. winner 
        b. tie 
        c. next player click


// --- notes from class


// APP STATE (variables)
    // a variable to track whose turn it is

    // a var for 'x' and a var for 'o'
    // a var to keep count of moves to detect cats/draw game
    // gameBoard array to keep track of player moves ['x', '', 'o', 'x', '', 'o', 'x', '', '']
        // 2d array
        // [
        //     ['x', '', 'o'],
        //     ['x', 'o', ''],
        //     ['x', '', 'o']
        // ]
    // a boolean for if the game is over or not -- is the game currently happening?

// EVENT LISTENERS
    // click event listener(s) for player clicks
        // change innertext of div to X or O
        // store the player's move in the gameBoard array
        // change to the next player's turn
        // check for a win -- calling a win condition function/doing all the win logic
    // click event to clear/reset the board

// some way to tell if a player has already clicked on a square
// win/tie game logic in functions
    // option: detect a win using conditionals and comparisions 
    // option hard mode: store all winning conditions and use loops to compare them to the gameBoard array
        // if the game is won, display the winner and prevent the users from clicking more
        // if it is a cats game, display that and prevent clicks


// DELIVERABLE READ OUT

// GETTING STARTED
// Before you even start working with JavaScript, construct the gameboard. The gameboard page should include the 3x3 grid (of divs), and at minimum a reset button. Using id and/or class on clickable elements will help you wire this up in JavaScript afterwards.
// The JavaScript portion will be next
// Select elements and attach functions via event listeners
// You will also need a variable to keep track of moves. This will be used to indicate whether or not to draw an X or an O

// REQUIREMENTS
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
// Have Fun - The best way to learn is by playing with code. Let creativity guide you and try some experiments with JS and CSS and see what you can do.

// */