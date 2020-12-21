document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize 2D array simulating gameboard. Array moves left to right, processing each value in one row before continuing to the next
    let gameBoard = [0, 1, 2,
                     3, 4, 5,
                     6, 7, 8]
    
    // Initialize turn counter
    let turnCount = 0;
    
    // Initialize victory boolean
    let victory = false;
    
    // Initialze player
    let xMaxi = 'x'
    let aiPlayer = 'o'
    let huPlayer = 'x'
    
    // Initialize Death
    let oMini = 'o'
    
    // Define win conditions
    function checkWin (board, player) {
        if ((board[0] === player && board[1] === player && board[2] === player) ||
            (board[3] === player && board[4] === player && board[5] === player) ||
            (board[6] === player && board[7] === player && board[8] === player) ||
            (board[0] === player && board[3] === player && board[6] === player) ||
            (board[1] === player && board[4] === player && board[7] === player) ||
            (board[2] === player && board[5] === player && board[8] === player) ||
            (board[0] === player && board[4] === player && board[8] === player) ||
            (board[6] === player && board[4] === player && board[2] === player) ) {
            return true
        } else {
            return false
        }
    }
    
    // Initialize function to check for win condition, and play dialogue if met
    const winCondition = () => {
            if (checkWin(gameBoard, 'x')) {
                gameText.innerText = selectRandom(defeatDialogue)
                victory = true;
            } else if (checkWin(gameBoard, 'o')) {
                gameText.innerText = selectRandom(victoryDialogue)
                victory = true;
            } 
        
            if (victory === false && turnCount < 9) {
                letCompGo()
            } else if (victory === false && turnCount === 9) {
                gameText.innerText = 'It is a tie'
            }
    }
    
    // Function that accepts an array and returns an element from it at random
    const selectRandom = (randomArray) => {
        return randomArray[Math.floor(Math.random() * randomArray.length)]
    } 
    
    // Initialize modular function to take turn counter and determine current player's turn.
    // Returns a 0 or a 1. 0 is for Player 1. 1 is for Player 2
    function calcTurn (turnCount) {
        return turnCount % 2
    }
    
    function getId(boardPos) {
        switch(boardPos) {
            case 0:
                return 'top-left'
                break;
                
            case 1:
                return 'top-middle'
                break;
                
            case 2:
                return 'top-right'
                break;
            
            case 3:
                return 'middle-left'
                break;
            
            case 4:
                return 'middle-middle'
                break;
                
            case 5:
                return 'middle-right'
                break;
            
            case 6:
                return 'bottom-left'           
                break;
                
            case 7:
                return 'bottom-middle'
                break;
                
            case 8:
                return 'bottom-right'
                break;
        } 
    }
    
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
                              'Move cautiously, human',
                              'You move in futility',
                              'Make your move']
    
    const compMoveDialogue = ['Hmm...',
                              'Ah...',
                              'Let me think...',
                              'Let me see...',
                              'I shall go...',
                              'Where shall I move...',
                              'It is my turn, now']
    
    const victoryDialogue = ['Yesss. Your soul is mine',
                             'You have lost',
                             'Death and defeat are both inevitable',
                             'Mhmm. Tasty tasy human souls',
                             'Wow, this was WAY easier than chess',
                             'You should perhaps stick to checkers',
                             'Spookier than u, loser',
                             'Congrats on losing']
    
    const defeatDialogue = ['Well. Your soul had bad vibes anyway.',
                            'Hrmm. I appear to have lost',
                            'That one doesn\'t count. I had souls in my eye.',
                            'You elude me. For now.']
    
    // Create function to update on-screen text with Death's dialogue,
    // progress the dialogue index, and, when the end is reached,
    // clear the interval time and play title animation
    const deathSpeaks = () =>{
        gameText.innerHTML = dialogue[dialogueIndex]
        dialogueIndex++;

        if (dialogueIndex === dialogue.length) {
            clearInterval(dialogueTimer)
            titleDrop()
        }
    }
    
    // Start timer on Death's dialogue
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
    
    // Function to make the pictures quickly blink in
    const popIn = (imageUrl, elementId) => {
        let element = document.getElementById(elementId)
        element.style.backgroundImage = 'url('+imageUrl+')';
        
        setTimeout(()=>{
            element.style.backgroundImage = 'none'
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
    
    
    // Initialize helper function to take clicked square and compare to 2D array
    const checkArray = (gridId, elementId) => {
        if (victory) {
           gameText.innerText = 'The game is finished, human' 
        } else {
            if (gameBoard[gridId] !== 'x' && gameBoard[gridId] !== 'o') {
            turnCount++;
            if (calcTurn(turnCount) === 0) {
                gameBoard[gridId] = 'o';
                popIn("images/o.png", elementId);
            } else {
                gameBoard[gridId] = 'x';
                popIn("images/x.png", elementId);
            }
        } 
        
        // Call function to check if the board is in a winning configuration
        winCondition();
        }
    }
    
    // Initialize helper function to determine the clicked grid-square's status (If it has an X, O, or is empty)
    const checkSquare = (checkedId) => {
        
        switch(checkedId) {
            case "top-left":
                checkArray(0, checkedId)
                break;
                
            case "top-middle":
                checkArray(1, checkedId)
                break;
                
            case "top-right":
                checkArray(2, checkedId)
                break;
            
            case "middle-left":
                checkArray(3, checkedId)
                break;
            
            case "middle-middle":
                checkArray(4, checkedId)
                break;
                
            case "middle-right":
                checkArray(5, checkedId)
                break;
            
            case "bottom-left":
                checkArray(6, checkedId)            
                break;
                
            case "bottom-middle":
                checkArray(7, checkedId)
                break;
                
            case "bottom-right":
                checkArray(8, checkedId)
                break;
        } 
    }
     
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
        
        for (let i = 0; i < gameBoard.length; i++) {
            let element = document.getElementById(getId(i))
            gameBoard[i] = i;
            element.setAttribute('style', 'background-image: none')
        }
        
        turnCount = 0;
        victory = false;
        gameText.innerText = 'Another round, then?'
    })
    
    // Function to check if it is the computer's turn, and set a timeout on it's move to fake a thought process
    const letCompGo = () => {
        if (calcTurn(turnCount) === 1) {
            gameText.innerText = selectRandom(compMoveDialogue)
            wowRude()
            setTimeout(compTurn, 1500)
        } else {
            // Returns header text to usual state
            gameText.innerText = selectRandom(yourMoveDialogue)
        }
    }
    
    // Function which filters the gameboard, creating an array containing only empty spaces
    function filterGameboard(board) {
        let emptySpaces = []
        
        for (let i = 0; i < board.length; i++) {
            if (board[i] === i) {
                emptySpaces.push(board[i])
            }      
        }
        
        return emptySpaces
    }
    
    // This function simulates the AI. It reads the gameboard, passing the objects of any empty spaces to an
    // array, and then it randomly selects a space from the list to play on
    function compTurn () {
        let openSpaces = filterGameboard(gameBoard);
        
        let compMove = minimax(gameBoard, oMini)
        console.log(getId(compMove.index))
        
        console.log('Running comp turn')
        checkSquare(getId(compMove.index))
    }
    
    let calls = 0
    
    function minimax(board, player) {
	   let openSpaces = filterGameboard(board);

        if (checkWin(board, oMini)) {
            return {score: -10}
        } else if (checkWin(board, xMaxi)) {
            return {score: 10} 
        } else if (openSpaces.length === 0) {
            return {score: 0}
        }
        
	    let moves = []
        
	    for (let i = 0; i < openSpaces.length; i++) {
            let move = {}
            move.index = board[openSpaces[i]]
            board[openSpaces[i]] = player

            if (player == oMini) {
                let result = minimax(board, xMaxi)
                move.score = result.score
            } else {
                let result = minimax(board, oMini)
                move.score = result.score
            }

		board[openSpaces[i]] = move.index

		moves.push(move);
	}

	let bestMove = selectRandom(openSpaces)
        
	if (player === xMaxi) {
		let bestScore = -10000
		for (let i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
        
    } else {
		let bestScore = 10000;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}
})