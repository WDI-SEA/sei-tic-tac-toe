// EVENT LISTENERS
// click event to clear/reset the board

// could try while loop to enclose entire game, but will leave it as a stretch goal
/* END NOTES */

// VARIABLES
const gameBoard = document.querySelector(".board");
let message = document.querySelector(".message");
let turnNum = 0;    // Initialize first turn (0 and evens = Player 1); #'s past 8 = Game Over
const option1 = "O";
const option2 = "X";
let weapon = option1;    // Initialize first placement as "O"
let array = ["a0", "a1", "a2", "b0", "b1", "b2", "c0", "c1", "c2"];    // Placeholder array for game state
let winRoutes = 8;    // # of ways to win in a new game
// The 8 possible win conditions set to true initially
let canRow1 = true;
let canRow2 = true;
let canRow3 = true;
let canColm1 = true;
let canColm2 = true;
let canColm3 = true;
let canDiag1 = true;    // "\" diag
let canDiag2 = true;    // "/" diag
// Array containing conditions for future check
const canArray = [canRow1, canRow2, canRow3, canColm1, canColm2, canColm3, canDiag1, canDiag2]

// EVENT LISTENERS AND FUNCTIONS
gameBoard.addEventListener("click", function(e)    // A space has been clicked
{
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
    checkDraw();
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
const checkDraw = () =>
{
    let zeros = 0;
    let ones = 0;
    for (let i = 0; i < 3; i++)    // Check contents of first row
    {
        if (array[i] === 0)
        {
            zeros++;
        }
        else if (array[i] === 1)
        {
            ones++;
        }
        if (zeros > 0 && ones > 0 && canRow1)    // Checks if at least one of each is in the row
        {
            canRow1 = false;
            canArray[0] = false;
            winRoutes--;
        }
    }
    // Reseting to zeros and ones to check next row
    zeros = 0;
    ones = 0;
    for (let i = 3; i < 6; i++)    // Check contents of second row
    {
        if (array[i] === 0)
        {
            zeros++;
        }
        else if (array[i] === 1)
        {
            ones++;
        }
        if (zeros > 0 && ones > 0 && canRow2)
        {
            canRow2 = false;
            canArray[1] = false;
            winRoutes--;
        }
    }
    zeros = 0;
    ones = 0;
    for (let i = 6; i < 9; i++)    // Check contents of third row
    {
        if (array[i] === 0)
        {
            zeros++;
        }
        else if (array[i] === 1)
        {
            ones++;
        }
        if (zeros > 0 && ones > 0 && canRow3)
        {
            canRow3 = false;
            canArray[2] = false;
            winRoutes--;
        }
    }
    zeros = 0;
    ones = 0;
    for (let i = 0; i < 3; i++)    // Check contents of first column
    {
        if (array[i * 3] === 0)
        {
            zeros++;
        }
        else if (array[i * 3] === 1)
        {
            ones++;
        }
        if (zeros > 0 && ones > 0 && canColm1)
        {
            canColm1 = false;
            canArray[3] = false;
            winRoutes--;
        }
    }
    zeros = 0;
    ones = 0;
    for (let i = 0; i < 3; i++)    // Check contents of second column
    {
        if (array[i * 3 + 1] === 0)
        {
            zeros++;
        }
        else if (array[i * 3 + 1] === 1)
        {
            ones++;
        }
        if (zeros > 0 && ones > 0 && canColm2)
        {
            canColm2 = false;
            canArray[4] = false;
            winRoutes--;
        }
    }
    zeros = 0;
    ones = 0;
    for (let i = 0; i < 3; i++)    // Check contents of third column
    {
        if (array[i * 3 + 2] === 0)
        {
            zeros++;
        }
        else if (array[i * 3 + 2] === 1)
        {
            ones++;
        }
        if (zeros > 0 && ones > 0 && canColm3)
        {
            canColm3 = false;
            canArray[5] = false;
            winRoutes--;
        }
    }
    zeros = 0;
    ones = 0;
    for (let i = 0; i < 3; i++)    // Check contents of first diag "\"
    {
        if (array[i * 4] === 0)
        {
            zeros++;
        }
        else if (array[i * 4] === 1)
        {
            ones++;
        }
        if (zeros > 0 && ones > 0 && canDiag1)
        {
            canDiag1 = false;
            canArray[6] = false;
            winRoutes--;
        }
    }
    zeros = 0;
    ones = 0;
    for (let i = 0; i < 3; i++)    // Check contents of second diag "/"
    {
        if (array[(i + 1) * 2] === 0)
        {
            zeros++;
        }
        else if (array[(i + 1) * 2] === 1)
        {
            ones++;
        }
        if (zeros > 0 && ones > 0 && canDiag2)
        {
            canDiag2 = false;
            canArray[7] = false;
            winRoutes--;
        }
    }
    if (winRoutes === 1)    // Check if the last 2 spaces are in the last win condition route
    {                       // If so, then it's a draw game
        let lastRoute = canArray.indexOf(true);
        if (turnNum === 6)    // If at end of turn 7 (2 spaces left)
        {
            let emptySpaces = 0;
            switch (lastRoute)
            {
                case 0:
                    for (let i = 0; i < 3; i++)    // Optimization note: possibly merge with for loops at beginning of checkDraw() and split into 2 more functions
                    {
                        if (array[i] !== 0 && array[i] !== 1)    // If space is unplayed
                        {
                            emptySpaces++;
                        }
                        if (emptySpaces < 3)    // If 2 or less spaces left
                        {
                            turnNum = 8;
                            message.innerText = "The game ends in a draw: cat's game";
                        }
                    }
                case 1:
                    for (let i = 3; i < 6; i++)
                    {
                        if (array[i] !== 0 && array[i] !== 1)
                        {
                            emptySpaces++;
                        }
                        if (emptySpaces < 3)
                        {
                            turnNum = 8;
                            message.innerText = "The game ends in a draw: cat's game";
                        }
                    }
                case 2:
                    for (let i = 6; i < 9; i++)
                    {
                        if (array[i] !== 0 && array[i] !== 1)
                        {
                            emptySpaces++;
                        }
                        if (emptySpaces < 3)
                        {
                            turnNum = 8;
                            message.innerText = "The game ends in a draw: cat's game";
                        }
                    }
                case 3:
                    for (let i = 0; i < 3; i++)
                    {
                        if (array[i * 3] !== 0 && array[i * 3] !== 1)
                        {
                            emptySpaces++;
                        }
                        if (emptySpaces < 3)
                        {
                            turnNum = 8;
                            message.innerText = "The game ends in a draw: cat's game";
                        }
                    }
                case 4:
                    for (let i = 0; i < 3; i++)
                    {
                        if (array[i * 3 + 1] !== 0 && array[i * 3 + 1] !== 1)
                        {
                            emptySpaces++;
                        }
                        if (emptySpaces < 3)
                        {
                            turnNum = 8;
                            message.innerText = "The game ends in a draw: cat's game";
                        }
                    }
                case 5:
                    for (let i = 0; i < 3; i++)
                    {
                        if (array[i * 3 + 2] !== 0 && array[i * 3 + 2] !== 1)
                        {
                            emptySpaces++;
                        }
                        if (emptySpaces < 3)
                        {
                            turnNum = 8;
                            message.innerText = "The game ends in a draw: cat's game";
                        }
                    }
                case 6:
                    for (let i = 0; i < 3; i++)
                    {
                        if (array[i * 4] !== 0 && array[i * 4] !== 1)
                        {
                            emptySpaces++;
                        }
                        if (emptySpaces < 3)
                        {
                            turnNum = 8;
                            message.innerText = "The game ends in a draw: cat's game";
                        }
                    }
                case 7:
                    for (let i = 0; i < 3; i++)
                    {
                        if (array[(i + 1) * 2] !== 0 && array[(i + 1) * 2] !== 1)
                        {
                            emptySpaces++;
                        }
                        if (emptySpaces < 3)
                        {
                            turnNum = 8;
                            message.innerText = "The game ends in a draw: cat's game";
                        }
                    }
            }
        }
    }
    if (winRoutes === 0)
    {
        turnNum = 8;
        message.innerText = "The game ends in a draw!";
    }
}