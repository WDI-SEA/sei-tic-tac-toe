// APP STATE (variables)
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

// tie game logic in functions
        // if it is a cats game, display that and prevent clicks
// could try while loop to enclose entire game, but will leave it as a stretch goal
/* END NOTES */

// VARIABLES
const gameBoard = document.querySelector(".board");
let message = document.querySelector(".message");
let turnNum = 0;    // Initialize first turn (0 and evens = Player 1)
const option1 = "O";
const option2 = "X";
let weapon = option1;    // Initialize first placement as "O"
let array = ["a0", "a1", "a2", "b0", "b1", "b2", "c0", "c1", "c2"];    // Placeholder array for game state

// EVENT LISTENERS AND FUNCTIONS
gameBoard.addEventListener("click", function(e)    // A space has been clicked
{
    console.log("begin turn #" + (turnNum+1))
    if (turnNum < 9)
    {
        if (e.target.id === "top-left-square")
        {
            makeMove(e, 0);
        }
        else if (e.target.id === "top-mid-square")
        {
            makeMove(e, 1);
        }
        else if (e.target.id === "top-right-square")
        {
            makeMove(e, 2);
        }
        else if (e.target.id === "mid-left-square")
        {
            makeMove(e, 3);
        }
        else if (e.target.id === "mid-mid-square")
        {
            makeMove(e, 4);
        }
        else if (e.target.id === "mid-right-square")
        {
            makeMove(e, 5);
        }
        else if (e.target.id === "bot-left-square")
        {
            makeMove(e, 6);
        }
        else if (e.target.id === "bot-mid-square")
        {
            makeMove(e, 7);
        }
        else if (e.target.id === "bot-right-square")
        {
            makeMove(e, 8);
        }
    }
})
const makeMove = (e, arrayIndex) =>    // Updates game state according to move made
{
    e.target.id = "dead";    // Switch off tile to unplayable
    if (turnNum % 2 === 0)    // If Player 1's turn
    {
        weapon = option1;
        e.target.innerText = weapon;    // Visually display action
        array[arrayIndex] = 0;    // Player 1 represented in array as "0"
        if (checkWin())
        {
            message.innerText = "Player 1 has won!";
        }
        else if (turnNum < 8)    // Don't display next turn if it's last turn or more
        {
            message.innerText = "Player 2's turn";
        }
    }
    else    // If Player 2's turn
    {
        weapon = option2;
        e.target.innerText = weapon;    // Visually display action
        array[arrayIndex] = 1;    // Player 2 represented in array as "1"
        if (checkWin())
        {
            message.innerText = "Player 2 has won!";
        }
        else
        {
            message.innerText = "Player 1's turn";
        }
    }
    turnNum++;
}
const checkWin = () =>    // Win logic
{
    if (array[0] === array[1] && array[0] === array[2])    // Row 1 win
    {
        turnNum = 8;    // Ends game (doesn't listen for tile clicks anymore)
        return true;
    }
    if (array[3] === array[4] && array[3] === array[5])    // Row 2 win
    {
        turnNum = 8;
        return true;
    }
    if (array[6] === array[7] && array[6] === array[8])    // Row 3 win
    {
        turnNum = 8;
        return true;
    }
    if (array[0] === array[3] && array[0] === array[6])    // Colm 1 win
    {
        turnNum = 8;
        return true;
    }
    if (array[1] === array[4] && array[1] === array[7])    // Colm 2 win
    {
        turnNum = 8;
        return true;
    }
    if (array[2] === array[5] && array[2] === array[8])    // Colm 3 win
    {
        turnNum = 8;
        return true;
    }
    if (array[0] === array[4] && array[0] === array[8])    // '\' win
    {
        turnNum = 8;
        return true;
    }
    if (array[2] === array[4] && array[2] === array[6])    // '/' win
    {
        turnNum = 8;
        return true;
    }
    return false;    // If no win yet
}
