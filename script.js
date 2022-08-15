console.log('test')

// APP STATE (variables)
let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let box3 = document.querySelector('#box3')
let box4 = document.querySelector('#box4')
let box5 = document.querySelector('#box5')
let box6 = document.querySelector('#box6')
let box7 = document.querySelector('#box7')
let box8 = document.querySelector('#box8')
let box9 = document.querySelector('#box9')

const result = document.querySelector('#result')

let win = false
let turn = 0
let xWon = 0
let oWon = 0
let gameBoard = ""
let reset = document.querySelector('#reset')

// players x and o
const playerX = "X" // start of game start at zero
const playerO = "O" // start of game start at zero

// a variable to track whose turn it is
let continueGame = true;

// a var to keep count of moves to detect cats/draw game
// gameBoard array to keep track of player moves ['x', '', 'o', 'x', '', 'o', 'x', '', '']

// ]

// Function
// gameboard spaces
// 1,2,3
// 4,5,6
// 7,8,9

//---
let playerTurn = true;

box1.addEventListener('click', function(){
    if(playerTurn){
        box1.innerText = 'X';
        playerTurn=false;
    }else{
        box1.innerText = 'O';
        playerTurn=true;
    }
})

box2.addEventListener('click', function(){
    if(playerTurn){
        box2.innerText = 'X';
        playerTurn=false;
    }else{
        box2.innerText = 'O';
        playerTurn=true;
    }
})

box3.addEventListener('click', function(){
    if(playerTurn){
        box3.innerText = 'X';
        playerTurn=false;
    }else{
        box3.innerText = 'O';
        playerTurn=true;
    }
});

box4.addEventListener('click', function(){
    if(playerTurn){
        box4.innerText = 'X';
        playerTurn=false;
    }else{
        box4.innerText = 'O';
        playerTurn=true;
    }
});

box5.addEventListener('click', function(){
    if(playerTurn){
        box5.innerText = 'X';
        playerTurn=false;
    }else{
        box5.innerText = 'O';
        playerTurn=true;
    }
})

box6.addEventListener('click', function(){
    if(playerTurn){
        box6.innerText = 'X';
        playerTurn=false;
    }else{
        box6.innerText = '0';
        playerTurn=true;
    }
})
box7.addEventListener('click', function(){
    if(playerTurn){
        box7.innerText = 'X';
        playerTurn=false;
    }else{
        box1.innerText = 'O';
        playerTurn=true;
    }
})
box8.addEventListener('click', function(){
    if(playerTurn){
        box8.innerText = 'X';
        playerTurn=false;
    }else{
        box8.innerText = 'O';
        playerTurn=true;
    }
})
box9.addEventListener('click', function(){
    if(playerTurn){
        box9.innerText = 'X';
        playerTurn=false;
    }else{
        box9.innerText = 'O';
        playerTurn=true;
    }
})





// let xScoreCard = // keep track of x player move 
// let oScoreCard = // keep track of x player move 



// EVENT LISTNER FOR BOX CLICKED
// box.addEventListener('click', boxClicked)
// const boxClicked = (e) => {
//     console.log('box was clicked')



// gameOver = if game is won
// gameStatus
// const xWon = "Player X won"
// const oWon = "Player O won"
// const draw = "draw"


// RESET FUNCTION
reset.addEventListener("click", function(e) {
    box.innerText = ''
})





//------------------- GAME LOGIC PSUEDO CODE

    // 1. player clicks
    //     - score gets tallied
    // 2. check if score is a winning combo
    // 3. game status 
    //     a. winner 
    //     b. tie 
    //     c. next player click
    // 4. option to clear (easy -- use code come temp clear)



// -------------------  PSEUDO WORK THRU FROM CLASS
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


// ------------------- DELIVERABLE READ OUT
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

// 