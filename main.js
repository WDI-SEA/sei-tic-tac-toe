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

/*----- event listeners -----*/
    // Listen for a click in the board
    document.getElementById('board').addEventListener('click', handleFillSquare);

/*----- functions -----*/
    function init(){
        //initializing the let board var; rotate 90 deg counterclockwise to visualize the board in the DOM
        board = [
            [1, 0, 0], // col 0
            [-1, 0, 0], // col 1
            [1, 0, 0], // col 2
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
    }

    function renderBoard(){
        //Iterate through the board's array to determine what displays on the board
        board.forEach(function(colArr, colIdx) {
            // Iterate over the cells in the cur column (colArr)
            colArr.forEach(function(cellVal, rowIdx) {
                //Access the value in the col and row
                const cellId = `c${colIdx}r${rowIdx}`;
                const cellEl = document.getElementById(cellId);
                // UPDATE - DISPLAY TEXT, NOT COLOR
                cellEl.style.backgroundColor = MOVES[cellVal];
            });
        });
    }

    function renderMessage(){
        if (winner === 'T') {
            messageEl.innerText = "It's a tie!!!"
        }
        // Declare winner if truthy, but not T (tie)
        else if (winner) {
            messageEl.innerHTML = `${MOVES[turn].toUpperCase()} won!`;
        }
        // Someone's turn
        else {
            messageEl.innerHTML = `It's ${MOVES[turn].toUpperCase()}'s Turn`;

        }
    }

    //In response to user interaction, update all impacted state then call render()
    function handleFillSquare(e){
        const colIdx = markerEls.indexOf(e.target);
        // Guards...
        if (colIdx === -1) return;
        const colArr = board[colIdx];
        //Find the first index of the first 0 in colArr
        const rowIdx = colArr.indexOf(0)
        console.log(colIdx);

        render();
    };