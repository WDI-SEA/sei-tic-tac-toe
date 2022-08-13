// APP STATE (variables)
    // a variable to track whose turn it is
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
        // check for a win -- calling a win condition function/doing all the win logic
    // click event to clear/reset the board

// win/tie game logic in functions
    // option: detect a win using conditionals and comparisions 
    // option hard mode: store all winning conditions and use loops to compare them to the gameBoard array
        // if the game is won, display the winner and prevent the users from clicking more
        // if it is a cats game, display that and prevent clicks
/* END NOTES */

// VARIABLES
const gameBoard = document.querySelector(".board");
let message = document.querySelector(".message");
let turnNum = 0;    // Initialize first turn (0 and evens = Player 1)
const option1 = "O";
const option2 = "X";
let weapon = option1;    // Initialize first placement as "O"

// EVENT LISTENERS AND FUNCTIONS
gameBoard.addEventListener("click", function(e)    // Which space has been clicked
{
    console.log("begin turn #" + (turnNum+1))
    if (turnNum < 9)
    {
        if (e.target.id === "top-left-square")
        {
            makeMove(e);
        }
        else if (e.target.id === "top-mid-square")
        {
            makeMove(e);
        }
        else if (e.target.id === "top-right-square")
        {
            makeMove(e);
        }
        else if (e.target.id === "mid-left-square")
        {
            makeMove(e);
        }
        else if (e.target.id === "mid-mid-square")
        {
            makeMove(e);
        }
        else if (e.target.id === "mid-right-square")
        {
            makeMove(e);
        }
        else if (e.target.id === "bot-left-square")
        {
            makeMove(e);
        }
        else if (e.target.id === "bot-mid-square")
        {
            makeMove(e);
        }
        else if (e.target.id === "bot-right-square")
        {
            makeMove(e);
        }
    }
})
const makeMove = (e) =>
{
    if (turnNum % 2 === 0)
    {
        weapon = option1;
        message.innerText = "Player 1's turn";
    }
    else
    {
        weapon = option2;
        message.innerText = "Player 2's turn";
    }
    e.target.innerText = weapon;
    e.target.id = "dead";
    console.log("end turn #" + (turnNum+1))
    turnNum++;
}