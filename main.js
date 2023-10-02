console.log("hello, world!");
/*----- constants -----*/
    const MOVES = {
        // UPDATE - NOT A COLOR LOOK UP, BUT LETTER(X OR O)
        '0' : 'white',
        '1' : 'pink',
        '-1': 'purple'
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
            [" ", " ", "o"], // col 0
            [" ", "x", " "], // col 1
            [" ", " ", " "], // col 2
        ]; 
        console.log(board)
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
    }

    function renderBoard(){
        //Iterate through the board's array to determine what displays on the board
        board.forEach(function(colArr){
            let colIdx = board.indexOf(colArr)
            let rowIdx = -1;
            colArr.forEach(function(rowArr){
                rowIdx += 1;
                console.log(`col row index ${colIdx}${rowIdx}`)
                cellId = `c${colIdx}r${rowIdx}`
                console.log(`cellid is ${cellId}`)
                const cellEl = document.getElementById(cellId);
                cellEl.innerText = board[colIdx][rowIdx];
            })
        })


        // let colIdx = -1;
        // board.forEach(function(colArr) {
        //     colIdx += 1;
        //     let rowIdx = -1;
        //     colArr.forEach(function(row){
        //         console.log(row)
        //         rowIdx += 1;
        //         cellId = `c${colIdx}r${rowIdx}`
        //         console.log(`cellid is ${cellId}`)
        //         const cellEl = document.getElementById(cellId);
        //         cellEl.innerText = board[colIdx][rowIdx];
        //     })
        // })
    }

    function renderMessage(){
        if (winner === 'T') {
            messageEl.innerText = "It's a tie!!!"
        }
        // Declare winner if truthy, but not T (tie)
        else if (winner) {
            messageEl.innerHTML = `${MOVES[winner].toUpperCase()} won!`;
        }
        // Someone's turn
        else {
            messageEl.innerHTML = `It's ${MOVES[turn].toUpperCase()}'s Turn`;

        }
    }

    //In response to user interaction, update all impacted state then call render()
    function handleFillSquare(e){
        colIdx = 1
        rowIdx = 1
        // console.log(board[1])
        // board[colIdx][rowIdx] = "x";
        turn *= -1;
        render();

        // console.log(e.target.id)
        // const colIdx = substr(e.target.id);
        // // Guards...
        // if (colIdx === -1) return;
        // const colArr = board[colIdx];
        // //Find the first index of the first 0 in colArr -- change
        // const rowIdx = colArr.indexOf(0)
        // colArr[rowIdx] = turn;
        // turn *= -1;
        // winner = getWinner(colIdx, rowIdx)
        // render();
    };

    // Check for the winner in board state and return null if no winner
    // Return 1/-1 if a player won, or T if tie
    // RETURNING THE WRONG COLOR WINNER
    function getWinner(colIdx, rowIdx) {
        // Pass in the last play and where to begin counting to checkVW
        return checkVerticalWin(colIdx, rowIdx) ||
        checkHorizontalWin(colIdx, rowIdx) ||
        checkDiagonalWinNESW(colIdx, rowIdx) ||
        checkDiagonalWinNWSE(colIdx, rowIdx);
    }

    function checkDiagonalWinNESW (colIdx,rowIdx){
        let adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1);
        let adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1);
        return (adjCountNE + adjCountSW) >= 3 ? board[colIdx][rowIdx] : null;
    }

    function checkDiagonalWinNWSE (colIdx,rowIdx){
        let adjCountNW = countAdjacent(colIdx, rowIdx, 1, -1);
        let adjCountSE = countAdjacent(colIdx, rowIdx, -1, 1);
        return (adjCountNW + adjCountSE) >= 3 ? board[colIdx][rowIdx] : null;
    }

    // Check for horizontal win
    function checkHorizontalWin (colIdx, rowIdx) {
        let adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0);
        let adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0);
        return (adjCountLeft + adjCountRight) >= 3 ? board[colIdx][rowIdx] : null;
    }

    // Check for vertical win (count the # of same elem in the col below last play)
    function checkVerticalWin(colIdx, rowIdx){
        return countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] : null;
    }

    function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
        // Shortcut var to play val's
        const player = board[colIdx][rowIdx]
        // Track count of adjacent cells with the same player val
        let count = 0;
        // Initialize colIdx and rowIdx locally with new values
        colIdx += colOffset;
        rowIdx += rowOffset;
        // Create while loop to count
        while (
            // Ensure coldIdx is within bounds of the board array
            board[colIdx] !== undefined &&
            // Ensure rowIdx is within bounds of the board array
            board[rowIdx] !== undefined &&
            // cannot use board[colIdx][rowIdx] to check bc it returns error, not undefined if not existant
            board[colIdx][rowIdx] === player
        ) {
            // If it meets all conditions, increment count
            count++;
            colIdx += colOffset;
            rowIdx += rowOffset;
        }
        return count;
    }

    init();