let turnsTaken = 0
let player1 = "X"
let player2 = "O"
let isPlaying = false; 
let activePlayer = null;
let status = ["", "", "", "", "", "", "", "", "" ]

const reset = document.getElementById("reset")


// click on different squares to make a move
const elements = document.querySelectorAll(".tic")
const messageDiv = document.getElementById("player-text")

// These are all the possible ways that a person can win the game. It goes from horizontal to vertical and then diagonal. 
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const determineIfGameHasEnded = () => {
    // Run through the win conditions each time, and determine whether each box has equal contents IE: 
    // first iteration: div1, div2, div3
    // fourth iteration: div1, div4, div7
    for(let i = 0; i <= winConditions.length; i++) {
        const winCondition = winConditions[i];
        let a = elements[winCondition[0]].innerHTML
        let b = elements[winCondition[1]].innerHTML
        let c = elements[winCondition[2]].innerHTML

        if (a === '' && b === '' && c === '') return;
        // If x === x && x === x
        if (a === b && b === c) {
            console.log('GAME WON');
            return true
        } if (turnsTaken === 9) {
            messageDiv.innerHTML = "Draw!";
        }

    }
}



const removeEventListeners = () => {
    // Loop through all the elements after the game has finished and remove the attached event listeners to prevent the changing of innerHTML
    for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener('click', clickListener);
    }
}

const clickListener = (event) => {
        // a cell should not be replayed once marked
        if (event.target.innerHTML !== "") {
            return
        }



        // if number is even, then player 1. Odd is player 2.
        // every click will alternate between X and O
        // use JS to add X or O to the cell depending on who's turn it is
        if (Number.isInteger(turnsTaken / 2)) {
            event.target.innerHTML = player2
            messageDiv.innerHTML = "First Player!";
            activePlayer = 'Player 1';
            turnsTaken++
        } else {
            event.target.innerHTML = player1
            messageDiv.innerHTML = "Second Player!";
            activePlayer = 'Player 2';
            turnsTaken++
        }

        // Is playing is the inverse of determineIfGameHasEnded. So if the function returns true, isPlaying will be false. 
        isPlaying = !determineIfGameHasEnded();
        if (!isPlaying) {
            removeEventListeners();
            messageDiv.innerHTML = activePlayer + ' Wins!'
            return;
        }
}

// Init functions are common, this is a common way to start the game and set all game variables to true at the end and add all event listeners for user interaction. 
const init = () => {
    for (i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", clickListener)
    }
    isPlaying = true; 
}

init(); 


// activate reset button

//reset.addEventListener("click", )
reset.addEventListener('click', () => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = ''; 
    }
    turnsTaken = 0; 
    init();
})





// display a message indicating the current turn to be played
// detect draw condition
// detect winner ands stop game to display winner
// you should not be able to click remaining empty cells after
// the game is started
