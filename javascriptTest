document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize variable to contain the header element, for ease of alteration
    let header = document.getElementById('header')
    
    // Initialize turn counter
    let turnCount = 0;
    
    // Initialize 2D array simulating gameboard. Array moves left to right, processing each value in one row before continuing to the next
    let gameBoard = [[{space: 0, id: 'top-left'}, 
                      {space: 0, id: 'top-middle'}, 
                      {space: 0, id: 'top-right'}],

                     [{space: 0, id: 'middle-left'}, 
                      {space: 0, id: 'middle-middle'}, 
                      {space: 0, id: 'middle-right'}],

                     [{space: 0, id: 'bottom-left'}, 
                      {space: 0, id: 'bottom-middle'}, 
                      {space: 0, id: 'bottom-right'}]];
    
     
    // Initialize event listeners
    document.getElementById('top-left').addEventListener('click', ()=> {
        checkSquare('top-left')
    })
    document.getElementById('top-middle').addEventListener('click', ()=> {
        checkSquare('top-middle')
    })
    document.getElementById('top-right').addEventListener('click', ()=> {
        checkSquare('top-right')
    })
    document.getElementById('middle-left').addEventListener('click', ()=> {
        checkSquare('middle-left')
    })
    document.getElementById('middle-middle').addEventListener('click', ()=> {
        checkSquare('middle-middle')
    })
    document.getElementById('middle-right').addEventListener('click', ()=> {
        checkSquare('middle-right')
    })
    document.getElementById('bottom-left').addEventListener('click', ()=> {
        checkSquare('bottom-left')
    })
    document.getElementById('bottom-middle').addEventListener('click', ()=> {
        checkSquare('bottom-middle')
    })
    document.getElementById('bottom-right').addEventListener('click', ()=> {
        checkSquare('bottom-right')
    })
    
    // Initialize modular function to take turn counter and determine current player's turn.
    // Returns a 0 or a 1. 0 is for Player 1. 1 is for Player 2
    function calcTurn (turnCount) {
        return turnCount % 2
    }
    
    // Initialize helper function to determine the clicked grid-square's status (If it has an X, O, or is empty)
    const checkSquare = (checkedId) => {
        
        switch(checkedId) {
            case "top-left":
                checkArray(0,0, checkedId)
                break;
                
            case "top-middle":
                checkArray(0,1, checkedId)
                break;
                
            case "top-right":
                checkArray(0,2, checkedId)
                break;
            
            case "middle-left":
                checkArray(1,0, checkedId)
                break;
            
            case "middle-middle":
                checkArray(1,1, checkedId)
                break;
                
            case "middle-right":
                checkArray(1,2, checkedId)
                break;
            
            case "bottom-left":
                checkArray(2,0, checkedId)            
                break;
                
            case "bottom-middle":
                checkArray(2,1, checkedId)
                break;
                
            case "bottom-right":
                checkArray(2,2, checkedId)
                break;
        }
    }
    
    // Initialize helper function to take clicked square and compare to 2D array
    const checkArray = (rowId, colId, elementId) => {
        if (gameBoard[rowId][colId].space === 0) {
            turnCount++;
            if (calcTurn(turnCount) === 0) {
                gameBoard[rowId][colId].space = -1;
                document.getElementById(elementId).style.backgroundColor = "red";
            } else {
                gameBoard[rowId][colId].space = 1;
                document.getElementById(elementId).style.backgroundColor = "yellow";
            }
        } 
        
        // Call function to check if the board is in a winning configuration
        winCondition();
    }
    
    const winCondition = () => {
        // Initialize variable to keep track of "score" from the gameboard
        let scoreRow = 0;
        let scoreColumn = 0;
        let scoreDiagonalDown = 0;
        let scoreDiagonalUp = 0;
        let victory = false;
        
        // Initialize nested for loops that systematically check the gameboard, calculating a "score" for each
        // row, column, and diagonal. Since X tokens are stored in the gameboard array as -1, and O tokens are
        // stored as positive 1, any winning configuration should produce a result of either 3 or -3, allowing
        // for the function to check for a win condition with only two if statements (Granted, with a lot of OR operators)
        
        for (let i = 0; i < gameBoard.length; i++) {
            
            // This for loop checks row-by-row, behaving normally: it iterates through the nested arrays
            // as they appear in the larger gameboard array. It adds all the values of the array together,
            // checks if they meet the winning condition, and continues to the next array if no
            for (let j = 0; j < gameBoard[i].length; j++) {
                scoreRow = scoreRow + gameBoard[i][j].space
            }
            
            // This one's trickier: it iterates through the gameboard on a column-by-column basis, by checking
            // the first value of each nested array, adding them together, and checking them against the win
            // condition. If it does not meet it, the next loop will check the second value of each array,
            // and the third loop will check the third. This one took some thinking!
            for (let k = 0; k < gameBoard[i].length; k++) {
                scoreColumn = scoreColumn + gameBoard[k][i].space
            }
            
            // This is just the if statement that checks if any of the above loop iterations
            // met the win condition
            if (scoreRow === 3 || scoreColumn === 3) {
                header.innerText = 'You win'
                victory = true;
            } else if (scoreRow === -3 || scoreColumn === -3) {
                header.innerText = 'You lose'
                victory = true;
            } else {
                scoreRow = 0
                scoreColumn = 0
            }
        }
        
        // Lastly, since there's no clean way to programmatically check the diagonals (That I can think of, at least), 
        // they get their own special calculation.
        scoreDiagonalDown = gameBoard[0][0].space + gameBoard[1][1].space + gameBoard[2][2].space
            
        scoreDiagonalUp = gameBoard[0][2].space + gameBoard[1][1].space + gameBoard[2][0].space
        
        if (scoreDiagonalDown === 3 || scoreDiagonalUp === 3) {
                header.innerText = 'You win'
                victory = true;
            } else if (scoreDiagonalDown === -3 || scoreDiagonalUp === -3) {
                header.innerText = 'You lose'
                victory = true;
            } else {
                scoreDiagonalDown = 0
                scoreDiagonalUp = 0
            }
        
        // This checks if the anyone has achieved victory, and if not, checks if it's draw
        // if it is not a draw, it checks if it's the computer's turn to play
        if (victory === false && turnCount < 9) {
            letCompGo()
        } else if (victory === false && turnCount === 9) {
            header.innerText = 'It is a tie'
        }
    }
    
    // Function to check if it is the computer's turn, and set a timeout on it's move to fake a thought process
    const letCompGo = () => {
        if (calcTurn(turnCount) === 1) {
            header.innerText = 'The computer is going'
            setTimeout(compTurn, 1000)
        } else {
            // Returns header text to usual state
            header.innerText = 'It is your turn'
        }
    }
    
    // This function simulates the AI. It reads the gameboard, passing the objects of any empty spaces to an
    // array, and then it randomly selects a space from the list to play on
    function compTurn () {
        let openSpaces = []
        
        for (let i = 0; i < gameBoard.length; i++) {
                for (let j = 0; j < gameBoard[i].length; j++) {
                    
                    
                    if (gameBoard[i][j].space === 0) {
                        openSpaces.push(gameBoard[i][j])
                    }
                }
            }
    
        let compMove = openSpaces[Math.floor(Math.random() * openSpaces.length)]
        
        // This is the same function (And ensuing function chain) used for the player
        checkSquare(compMove.id)
    }
    //Initialize "Death" and their dialogue
})

// There is a grid of nine squares, made up of three columns X three rows. There are two sets of "pieces," X's and O's, and two players, each with their own respective set of pieces (Player one has X's, player two has 0's) They alternate placing their pieces on the grid, and the first player to place three of their pieces in a straight line (Which canbe achieved by covering one complete column, one complete row, or making a diagonal through the cneter) they win. If the game board is filled, and none of the colums or rows contain only one set of pieces, or create a diagonal line through the center, it is a draw.