
// Alternate between x and y for every click
// determine the last move made(x or o)
// determine which should be next(x or o)
// pass something to a function that will play either x or o depending on above conditions
window.addEventListener('DOMContentLoaded', () => {

    const squareTile = Array.from(document.querySelectorAll('.squareTile'))
    const playerDisplay = document.querySelector('.display-player')
    const resetButton = document.querySelector("#reset")
    const announcer = document.querySelector(".announcer")

    let gameBoard = ['', '', '', '', '', '', '', '', '']
    let currentPlayer = "X"
    let isGameActive = true;

    const playerXWon = "PLAYER_X_WON"
    const playerOWon = "PLAYER_O_WON"
    const TIE = "TIE"

    const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    

    const announce = (type) => {
        switch(type){
            case playerXWon:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case playerOWon:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case TIE:
                announcer.innerHTML = 'Its a tie.';
        }

        announcer.classList.remove('hide');
    }

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i<=7; i++) {
            const winConditions = winningConditions[i];
            const a = gameBoard[winConditions[0]]
            const b = gameBoard[winConditions[1]]
            const c = gameBoard[winConditions[2]]
            if(a === '' || b === ''||c === '') {
                continue;
            }
            if(a === b && b === c){
                roundWon=true
                break;
            }
        }

        if(roundWon) {
            announce(currentPlayer === 'X' ? playerXWon : playerOWon);
            isGameActive = false;
            return;
        }

        if(!gameBoard.includes('')){
            announce(TIE);
        }
    }

    const updateBoard = (index) => {
        gameBoard[index] = currentPlayer;
    }

    const isValidAction = (tile) => {
        if(tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }
        return true;
    };
    
    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    

    

    
    

    const resetBoard = () => {
        gameBoard = ['','','','','','','','','']
        isGameActive = true;
        announcer.classList.add(`hide`);

        if(currentPlayer === 'O') {
            changePlayer();
        }

        squareTile.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX')
            tile.classList.remove('playerO')

    });
    }

    squareTile.forEach((tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);

})


// const alertTest = () => {
//     console.log("Clicked")
// }

// const squareTile = document.getElementById("squa")
// squareTile.addEventListener('click', alertTest)

// function to determine winner of game

// function that draws X 

// function that draws 