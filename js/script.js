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
        // if the game is won, display the winner and prevent the users from clicking more
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
            makeMove(e);
            // Stores game state in array
            if (turnNum % 2 === 0)
            {
                array[0] = 0;    // Player 1 represented in array
                checkwin();
                message.innerText = "Player 2's turn";
            }
            else
            {
                array[0] = 1;    // Player 2 represented in array
                checkwin();
                if (turnNum !== 8)    // Don't display next turn if it's last turn
                {
                    message.innerText = "Player 1's turn";
                }
            }
            turnNum++;
        }
        else if (e.target.id === "top-mid-square")
        {
            makeMove(e);
            if (turnNum % 2 === 0)
            {
                array[1] = 0;
                checkwin();
                message.innerText = "Player 2's turn";
            }
            else
            {
                array[1] = 1;
                checkwin();
                if (turnNum !== 8)
                {
                    message.innerText = "Player 1's turn";
                }
            }
            turnNum++;
        }
        else if (e.target.id === "top-right-square")
        {
            makeMove(e);
            if (turnNum % 2 === 0)
            {
                array[2] = 0;
                checkwin();
                message.innerText = "Player 2's turn";
            }
            else
            {
                array[2] = 1;
                checkwin();
                if (turnNum !== 8)
                {
                    message.innerText = "Player 1's turn";
                }
            }
            turnNum++;
        }
        else if (e.target.id === "mid-left-square")
        {
            makeMove(e);
            if (turnNum % 2 === 0)
            {
                array[3] = 0;
                checkwin();
                message.innerText = "Player 2's turn";
            }
            else
            {
                array[3] = 1;
                checkwin();
                if (turnNum !== 8)
                {
                    message.innerText = "Player 1's turn";
                }
            }
            turnNum++;
        }
        else if (e.target.id === "mid-mid-square")
        {
            makeMove(e);
            if (turnNum % 2 === 0)
            {
                array[4] = 0;
                checkwin();
                message.innerText = "Player 2's turn";
            }
            else
            {
                array[4] = 1;
                checkwin();
                if (turnNum !== 8)
                {
                    message.innerText = "Player 1's turn";
                }
            }
            turnNum++;
        }
        else if (e.target.id === "mid-right-square")
        {
            makeMove(e);
            if (turnNum % 2 === 0)
            {
                array[5] = 0;
                checkwin();
                message.innerText = "Player 2's turn";
            }
            else
            {
                array[5] = 1;
                checkwin();
                if (turnNum !== 8)
                {
                    message.innerText = "Player 1's turn";
                }
            }
            turnNum++;
        }
        else if (e.target.id === "bot-left-square")
        {
            makeMove(e);
            if (turnNum % 2 === 0)
            {
                array[6] = 0;
                checkwin();
                message.innerText = "Player 2's turn";
            }
            else
            {
                array[6] = 1;
                checkwin();
                if (turnNum !== 8)
                {
                    message.innerText = "Player 1's turn";
                }
            }
            turnNum++;
        }
        else if (e.target.id === "bot-mid-square")
        {
            makeMove(e);
            if (turnNum % 2 === 0)
            {
                array[7] = 0;
                checkwin();
                message.innerText = "Player 2's turn";
            }
            else
            {
                array[7] = 1;
                checkwin();
                if (turnNum !== 8)
                {
                    message.innerText = "Player 1's turn";
                }
            }
            turnNum++;
        }
        else if (e.target.id === "bot-right-square")
        {
            makeMove(e);
            if (turnNum % 2 === 0)
            {
                array[8] = 0;
                checkwin();
                message.innerText = "Player 2's turn";
            }
            else
            {
                array[8] = 1;
                checkwin();
                if (turnNum !== 8)
                {
                    message.innerText = "Player 1's turn";
                }
            }
            turnNum++;
        }
    }
})
const makeMove = (e) =>    // Updates game state according to move made
{
    e.target.id = "dead";    // Switch off tile to unplayable
    if (turnNum % 2 === 0)    // If Player 1's turn
    {
        weapon = option1;
        e.target.innerText = weapon;    // Visually display action
    }
    else    // If Player 2's turn
    {
        weapon = option2;
        e.target.innerText = weapon;    // Visually display action
    }
}
const checkwin = () =>    // Win logic
{
    if (array[0] === array[1] && array[0] === array[2])    // Row 1 win
    {
        console.log('row1')
    }
    if (array[3] === array[4] && array[3] === array[5])    // Row 2 win
    {
        console.log('row2')
    }
    if (array[6] === array[7] && array[6] === array[8])    // Row 3 win
    {
        console.log('row3')
    }
    if (array[0] === array[3] && array[0] === array[6])    // Colm 1 win
    {
        console.log('colm1')
    }
    if (array[1] === array[4] && array[1] === array[7])    // Colm 2 win
    {
        console.log('colm2')
    }
    if (array[2] === array[5] && array[2] === array[8])    // Colm 3 win
    {
        console.log('colm3')
    }
    if (array[0] === array[4] && array[0] === array[8])    // '\' win
    {
        console.log('\\')
    }
    if (array[2] === array[4] && array[2] === array[6])    // '/' win
    {
        console.log('/')
    }
}
