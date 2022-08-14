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

h2.value = "Player 1, place an X onto the board.";

let turn = 0;

let testArray = ['', '', '', 
                '', '', '',
                '', '', ''];
let input = document.getElementById("1");


console.log(input);
input.addEventListener('click', function(e) {
    if(turn % 2 === 0) {
        input.innerHTML = "X";
        testArray[0] = "X";
        turn++;
    } else {
        input.innerHTML = "O";
        testArray[0] = "O";
        turn++;
    }
    console.log(testArray);
    console.log(turn);
 })

 
