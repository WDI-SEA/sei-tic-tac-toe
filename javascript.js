document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Death's dialogue
    let dialogueIndex = 0
    let dialogueFinished = false
    const dialogue = ["Hello. I am Death.",
                      "Play a game with me.",
                      "A Tic Tac Toe game.",
                      "For your soul.",
                      "This is...",
                      "It is your move, mortal..."
    ]
    
    const yourMoveDialogue = ['It is your move',
                              'Your turn, now',
                              'You may take your turn',
                              'Make your move']
    
    const compMoveDialogue = ['Hmm...',
                              'Ah...',
                              'I shall go...',
                              'It is my turn, now']
    
    const victoryDialogue = ['Yesss. Your soul is mine',
                             'You have lost',
                             'Death and defeat are both inevitable']
    
    const defeatDialogue = ['Well. Your soul had bad vibes anyway.',
                            'Hrmm. I appear to have lost',
                            'You elude me. For now.']

    const deathSpeaks = () =>{
        gameText.innerHTML = dialogue[dialogueIndex]
        dialogueIndex++;

        if (dialogueIndex === dialogue.length) {
            clearInterval(dialogueTimer)
            titleDrop()
        }
    }
    
    const selectRandomLine = (textArray) => {
        return textArray[Math.floor(Math.random() * textArray.length)]
    }
    
    const dialogueTimer = setInterval(deathSpeaks, 2000)
    
    //Function to make title visible after dialogue has finished
    const titleDrop = () => {
           popInText('intro-title')
           popInText('clear')
            dialogueFinished = true;
         }
    
    // Trigger "interrupt" dialogue if player moves before dialogue finishes
    const wowRude = () => {
        if (dialogueFinished === false) {
            clearInterval(dialogueTimer)
            gameText.innerText = "Wow, okay. Rude."
            titleDrop()
            dialogueFinished = true;
        }
    }
    
    // Initialize turn counter
    let turnCount = 0;
    
    // Initialize victory boolean
    let victory = false;
    
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
    
    // Initialize event listener for the reset button
    document.getElementById('clear').addEventListener('click', ()=> {
        console.log('Clearing gameboard')
        for (let i = 0; i < gameBoard.length; i++) {
            for (let j = 0; j < gameBoard[i].length; j++) {
                let element = document.getElementById(gameBoard[i][j].id)
                gameBoard[i][j].space = 0;
                console.log(element)
                element.setAttribute('style', 'background-image: none')
            }
        }
        
        turnCount = 0;
        victory = false;
        gameText.innerText = 'Another round, then?'
    })
    
    // Initialize modular function to take turn counter and determine current player's turn.
    // Returns a 0 or a 1. 0 is for Player 1. 1 is for Player 2
    function calcTurn (turnCount) {
        return turnCount % 2
    }
    
    // Function to make the pictures quickly blink in
    const popIn = (imageUrl, elementId) => {
        let element = document.getElementById(elementId)
        element.style.backgroundImage = 'url('+imageUrl+')';
        setTimeout(()=>{
            element.style.backgroundImage = 'none';
        }, 20)
        setTimeout(()=>{
            element.style.backgroundImage = 'url('+imageUrl+')';
        }, 60)
        setTimeout(()=>{
            element.style.backgroundImage = 'none';
        }, 120)
        setTimeout(()=>{
            element.style.backgroundImage = 'url('+imageUrl+')';
        }, 180)
    }
    
    // Honestly, this function does the exact same thing as the one above
    // but more generic. I should refactor anything that uses the above function
    // to use the below one instead, but I'm lazy
    const popInText = (elementId) => {
        let element = document.getElementById(elementId)
        element.style.visibility = 'visible';
        setTimeout(()=>{
            element.style.visibility = 'hidden';
        }, 20)
        setTimeout(()=>{
            element.style.visibility = 'visible';
        }, 60)
        setTimeout(()=>{
            element.style.visibility = 'hidden';
        }, 120)
        setTimeout(()=>{
            element.style.visibility = 'visible';
        }, 180)
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
        if (victory) {
           gameText.innerText = 'The game is finished, human' 
        } else {
            if (gameBoard[rowId][colId].space === 0) {
            turnCount++;
            if (calcTurn(turnCount) === 0) {
                gameBoard[rowId][colId].space = -1;
                popIn("images/o.png", elementId);
            } else {
                gameBoard[rowId][colId].space = 1;
                popIn("images/x.png", elementId);
            }
        } 
        
        // Call function to check if the board is in a winning configuration
        winCondition();
        }
    }
    
    const winCondition = () => {
        // Initialize variable to keep track of "score" from the gameboard
        let scoreRow = 0;
        let scoreColumn = 0;
        let scoreDiagonalDown = 0;
        let scoreDiagonalUp = 0;
        
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
                gameText.innerText = selectRandomLine(defeatDialogue)
                victory = true;
            } else if (scoreRow === -3 || scoreColumn === -3) {
                gameText.innerText = selectRandomLine(victoryDialogue)
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
                gameText.innerText = selectRandomLine(defeatDialogue)
                victory = true;
            } else if (scoreDiagonalDown === -3 || scoreDiagonalUp === -3) {
                gameText.innerText = selectRandomLine(victoryDialogue)
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
            gameText.innerText = 'It is a tie'
        }
    }
    
    // Function to check if it is the computer's turn, and set a timeout on it's move to fake a thought process
    const letCompGo = () => {
        if (calcTurn(turnCount) === 1) {
            gameText.innerText = selectRandomLine(compMoveDialogue)
            wowRude()
            setTimeout(compTurn, 1500)
        } else {
            // Returns header text to usual state
            gameText.innerText = selectRandomLine(yourMoveDialogue)
        }
    }
    
    // Function which filters the gameboard, creating an array containing only empty spaces
    function filterGameboard() {
        let openSpaces = []
        for (let i = 0; i < gameBoard.length; i++) {
                for (let j = 0; j < gameBoard[i].length; j++) {
                    if (gameBoard[i][j].space === 0) {
                        openSpaces.push(gameBoard[i][j])
                    }
                }
            }
        
        return openSpaces;
        }
    
    // This function simulates the AI. It reads the gameboard, passing the objects of any empty spaces to an
    // array, and then it randomly selects a space from the list to play on
    function compTurn () {
        let openSpaces = filterGameboard();
    
        let compMove = openSpaces[Math.floor(Math.random() * openSpaces.length)]
        
        // This is the same function (And ensuing function chain) used for the player
        checkSquare(compMove.id)
    }
})

// There is a grid of nine squares, made up of three columns X three rows. There are two sets of "pieces," X's and O's, and two players, each with their own respective set of pieces (Player one has X's, player two has 0's) They alternate placing their pieces on the grid, and the first player to place three of their pieces in a straight line (Which canbe achieved by covering one complete column, one complete row, or making a diagonal through the cneter) they win. If the game board is filled, and none of the colums or rows contain only one set of pieces, or create a diagonal line through the center, it is a draw.