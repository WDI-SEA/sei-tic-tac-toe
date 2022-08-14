//variables
let r1B1 = document.getElementById('R1B1');
let r1B2 = document.getElementById('R1B2');
let r1B3 = document.getElementById('R1B3');
let r2B1 = document.getElementById('R2B1');
let r2B2 = document.getElementById('R2B2');
let r2B3 = document.getElementById('R2B3');
let r3B1 = document.getElementById('R3B1');
let r3B2 = document.getElementById('R3B2');
let r3B3 = document.getElementById('R3B3');
let gameBoard = [r1B1.innerHTML,r1B2.innerText,r1B3.innerText,
                 r2B1.innerText,r2B2.innerText,r2B2.innerText,
                 r3B1.innerText,r2B3.innerText,r3B3.innerText];
let CountClicks = 0;
let gameTracker = document.querySelector('.Tic-Tac-Toe');
let playerTurn = document.querySelector('.playerturn');
let startGame = document.querySelector('.start-button');
let resetGame = document.querySelector('.reset-game');
let pageTracker = document.querySelector('.page')


// gameTracker.addEventListener("click", function() {
//     if ((r1B1.innerText == "X" && r1B2.innerText == "X" && r1B3.innerText == "X")) {
//         console.log('Youwin!')
//         console.log(CountClicks)
//     } else if ((r2B1.innerText == "X" && r2B2.innerText == "X" && r3B3.innerText == "X")) {
//         console.log('Youwin!')
//         console.log(CountClicks)
//     }
// });
// console.log(gameBoard[0])
startGame.addEventListener("click", function() {
    gameTracker.addEventListener("click", function() {
        CountClicks += 1;
        // console.log(CountClicks);
        if (CountClicks % 2 == 0) {
            playerTurn.innerText = 'Player 1 make your move!'
        } else if (CountClicks % 2 != 0) {
            playerTurn.innerText = 'Player 2 make your move!'
        };
    });
    resetGame.addEventListener("click", function() {
        CountClicks = 0;
        playerTurn.innerText = 'Player 1 make your move!';
        r1B1.innerText = '?';
        r1B2.innerText = '?';
        r1B3.innerText = '?';
        r2B1.innerText = '?';
        r2B2.innerText = '?';
        r2B3.innerText = '?';
        r3B1.innerText = '?';
        r3B2.innerText = '?';
        r3B3.innerText = '?';
    });
    winGame();
});

r1B1.addEventListener("click", function() {
    CountClicks += 1;
    if (CountClicks % 2 == 0) {
        r1B1.innerText = 'O'
    } else {
        r1B1.innerText = 'X'
    }
})
r1B2.addEventListener("click", function() {
    CountClicks += 1;
    if (CountClicks % 2 == 0) {
        r1B2.innerText = 'O'
    } else {
        r1B2.innerText = 'X'
    }
})
r1B3.addEventListener("click", function() {
    CountClicks += 1;
    if (CountClicks % 2 == 0) {
        r1B3.innerText = 'O'
    } else {
        r1B3.innerText = 'X'
    }
})
r2B1.addEventListener("click", function() {
    CountClicks += 1;
    if (CountClicks % 2 == 0) {
        r2B1.innerText = 'O'
    } else {
        r2B1.innerText = 'X'
    }
})
r2B2.addEventListener("click", function() {
    CountClicks += 1;
    if (CountClicks % 2 == 0) {
        r2B2.innerText = 'O'
    } else {
        r2B2.innerText = 'X'
    }
})
r2B3.addEventListener("click", function() {
    CountClicks += 1;
    if (CountClicks % 2 == 0) {
        r2B3.innerText = 'O'
    } else {
        r2B3.innerText = 'X'
    }
})
r3B1.addEventListener("click", function() {
    CountClicks += 1;
    if (CountClicks % 2 == 0) {
        r3B1.innerText = 'O'
    } else {
        r3B1.innerText = 'X'
    }
})
r3B2.addEventListener("click", function() {
    CountClicks += 1;
    if (CountClicks % 2 == 0) {
        r3B2.innerText = 'O'
    } else {
        r3B2.innerText = 'X'
    }
})
r3B3.addEventListener("click", function() {
    CountClicks += 1;
    if (CountClicks % 2 == 0) {
        r3B3.innerText = 'O'
    } else {
        r3B3.innerText = 'X'
    }
})

winGame = function() {
    if ((gameBoard[0] == 'X') && (gameBoard[1] == 'X') && (gameBoard[2] == 'X')) {
        console.log('win')
    }
};

