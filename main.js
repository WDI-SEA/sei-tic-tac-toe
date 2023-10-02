/*----- constants -----*/
    const MOVES = {
        // UPDATE - NOT A COLOR LOOK UP, BUT LETTER(X OR O)
        '0' : ' ',
        '1' : 'X',
        '-1': 'O'
    };


/*----- state variables -----*/

// The board: 2D array with 3 col and 3 rows, initialized in init function
    let board;
    // The current player/turn (1 or -1)
    let turn;
    // Winner: null while in play; then 1/-1; for tie: "T"
    let winner;


/*----- cached elements  -----*/
    const messageEl = document.querySelector('h1');
    const playAgainBtn = document.querySelector('button');
    // const squareEls = [...document.querySelectorAll('#board > div')];

/*----- event listeners -----*/
    // Listen for a click in the board
    document.getElementById('board').addEventListener('click', handleFillSquare);
    // Start over by calling init when clicked; DO NOT INVOKE
    playAgainBtn.addEventListener('click', init);

/*----- functions -----*/
    function init(){
        //initializing the let board var; rotate 90 deg counterclockwise to visualize the board in the DOM
        board = [
            [" ", " ", " "], // col 0
            [" ", " ", " "], // col 1
            [" ", " ", " "], // col 2
        ]; 
        //game begins with Player 1
        turn = 1;
        winner = null;
        render();
    }
    
    function render(){
        // Display updated border after player makes a move
        renderBoard();
        // Display a message if there's a winner
        renderMessage();
        renderControls();
    }

    function renderBoard(){
        //Iterate through the board's array to determine what displays on the board
        board.forEach(function(colArr){
            let colIdx = board.indexOf(colArr)
            let rowIdx = -1;
            colArr.forEach(function(rowArr){
                rowIdx += 1;
                cellId = `c${colIdx}r${rowIdx}`
                const cellEl = document.getElementById(cellId);
                cellEl.style.textAlign = "center";
                cellEl.style.lineHeight = "10vmin";
                cellEl.innerText = board[colIdx][rowIdx];

            })
        })
    }

    function renderMessage(){
        if (winner === 'T') {
            messageEl.innerText = "It's a tie!!!"
        }
        // Declare winner if truthy, but not T (tie)
        else if (winner) {
            messageEl.innerHTML = `${winner} won!`;
        }
        // Someone's turn
        else {
            messageEl.innerHTML = `It's ${MOVES[turn].toUpperCase()}'s Turn`;

        }
    }

    function renderControls(){
        // Hide Play Again if Winner isn't truthy (tie or winner)
        playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
        //Iterate over the marker elems to hide triangles for full cols
    }

    //In response to user interaction, update all impacted state then call render()
    function handleFillSquare(e){
        const clickedSq = e.target.id;
        colIdx = clickedSq.substr(1,1)
        rowIdx = clickedSq.substr(3,3)
        if (board[colIdx][rowIdx] === " ") {
            board[colIdx][rowIdx] = MOVES[turn];
            turn *= -1;
            winner = getWinner(colIdx, rowIdx)
            render();
        } else {
            messageEl.innerText = "That spot is taken! Try again."
        }
    };

    // Check for the winner in board state and return null if no winner
    // Return 1/-1 if a player won, or T if tie
    function getWinner(colIdx, rowIdx) {
        // Pass in the last play to the check functions
        return checkVerticalWin(colIdx, rowIdx) ||
        checkHorizontalWin(colIdx, rowIdx) ||
        checkDiagonalWinNESW(colIdx, rowIdx) ||
        checkDiagonalWinNWSE(colIdx, rowIdx);
    }

    function checkDiagonalWinNESW (colIdx,rowIdx){
        let lastMove = board[colIdx][rowIdx]
        let matchCount = 0;
        let neswIdx = 0;
        board.forEach(function(col){
            if (col[neswIdx] === lastMove){
                matchCount++;
                neswIdx++;
            }
        })
        return matchCount === 3 ? lastMove : null;
    }

    function checkDiagonalWinNWSE (colIdx,rowIdx){
        let lastMove = board[colIdx][rowIdx]
        let matchCount = 0;
        let nwseIdx = 2;
        board.forEach(function(col){
            if (col[nwseIdx] === lastMove){
                matchCount++;
                nwseIdx -= 1;
            }
        })
        return matchCount === 3 ? lastMove : null;
    }

    // Check for horizontal win
    function checkHorizontalWin (colIdx, rowIdx) {
        let lastMove = board[colIdx][rowIdx]
        let matchCount = 0;
        board.forEach(function(col){
            if (col[rowIdx] === lastMove){
                matchCount++;
            }
        })
        return matchCount === 3 ? lastMove : null;
    }

    // Check for vertical win (count the # of same elem in the col below last play)
    function checkVerticalWin(colIdx, rowIdx){
        let lastMove = board[colIdx][rowIdx]
        let matchCount = 0;
        board[colIdx].forEach(function(rowEl){
            if (rowEl === lastMove){
                matchCount++;
            }
        })
        return matchCount === 3 ? lastMove : null;
    }

    init();