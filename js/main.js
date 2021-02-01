

// // A user should be able to click on different squares to make a move.
// // Every click will alternate between marking an X and O
// // Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
// // A cell should not be able to be replayed once marked.
// // You should not be able to click remaining empty cells after the game is over.
// // Add a reset button that will clear the contents of the board.
// // Display a message to indicate which turn is about to be played.
// // Detect draw conditions (ties/cat's game)
// // Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// // Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
// /*----- constants -----*/
const letterX = 'x';
const letterO = 'o';

// /*----- app's state (variables) -----*/
let gameOn = true;
let xIsNext = true;

// /*----- cached element references -----*/
const whoseTurnEl = document.querySelector('#turnCounter');
const resetButtonEl = document.querySelector('#reset');
const boxInputEl = document.querySelectorAll('.box');

const whoIsWinning = function() {
    const topLeft = boxInputEl[0].classList[1];
    const topMiddle = boxInputEl[1].classList[1];
    const topRight = boxInputEl[2].classList[1];
    const middleLeft = boxInputEl[3].classList[1];
    const middleMiddle = boxInputEl[4].classList[1];
    const middleRight = boxInputEl[5].classList[1];
    const bottomLeft = boxInputEl[6].classList[1];
    const bottomMiddle = boxInputEl[7].classList[1];
    const bottomRight = boxInputEl[8].classList[1];

    // check winner
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        whoWon(topLeft);
        boxInputEl[0].classList.add('won');
        boxInputEl[1].classList.add('won');
        boxInputEl[2].classList.add('won');
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        whoWon(middleLeft);
        boxInputEl[3].classList.add('won');
        boxInputEl[4].classList.add('won');
        boxInputEl[5].classList.add('won');
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        whoWon(bottomLeft);
        boxInputEl[6].classList.add('won');
        boxInputEl[7].classList.add('won');
        boxInputEl[8].classList.add('won');
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        whoWon(topLeft);
        boxInputEl[0].classList.add('won');
        boxInputEl[3].classList.add('won');
        boxInputEl[6].classList.add('won');
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        whoWon(topMiddle);
        boxInputEl[1].classList.add('won');
        boxInputEl[4].classList.add('won');
        boxInputEl[7].classList.add('won');
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        whoWon(topRight);
        boxInputEl[2].classList.add('won');
        boxInputEl[5].classList.add('won');
        boxInputEl[8].classList.add('won');
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        whoWon(topLeft);
        boxInputEl[0].classList.add('won');
        boxInputEl[4].classList.add('won');
        boxInputEl[8].classList.add('won');
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        whoWon(topRight);
        boxInputEl[2].classList.add('won');
        boxInputEl[4].classList.add('won');
        boxInputEl[6].classList.add('won');
    } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
        gameIsLive = false;
        whoseTurnEl.innerText = 'Game is tied;';
    } else {
        xIsNext = !xIsNext;
        if (xIsNext) {
            whoseTurnEl.innerText = `X's turn`;
        } else {
            whoseTurnEl.innerText = `O's turn`;
        }
    }
};

const whoWon = function(xOrO) {
    if (xOrO === 'x') {
        whoseTurnEl.innerText = 'X won!';
    } else {
        whoseTurnEl.innerText = 'O won!';
    }
};

// /*----- event listeners -----*/
    const resetGame = function() {
        xIsNext = true;
        statusDiv.innerHTML = `O's turn`;
        for (const boxInputEl of boxInputEls) {
            boxInputEl.classList.remove('x');
            boxInputEl.classList.remove('o');
            boxInputEl.classList.remove('won');
        }
        gameIsLive = true;
    };
    
    const boxClick = function(event) {
        const classList = event.target.classList;
        if (!gameOn || classList[1] === 'x' || classList[1] === 'o') {
            return;
        }
        if (xIsNext) {
            classList.add('x');
            whoIsWinning();
        } else {
            classList.add('o');
            whoIsWinning();
        }
    };
    
   resetButtonEl.addEventListener('click', resetGame);
    
    for (const boxInput of boxInputEl) {
        boxInput.addEventListener('click', boxClick)
    };