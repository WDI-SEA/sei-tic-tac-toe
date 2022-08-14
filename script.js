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

let X = "X"
let O = "O"
let player1 = "Player 1"
let player2 = "Player 2"
let trackPlayerTurn = function() {
    if (X = "X") {
        playerTurn.html = 'Player 1 make your move'
    } else if (O = "O") {
        playerTurn.html = 'Player 2 make your move'
    }
}

let gameBoard = [r1B1.innerHTML, r1B2.innerText, r1B3.innerText,
                 r2B1.innerText, r2B2.innerText, r2B2.innerText,
                 r3B1.innerText, r2B3.innerText, r3B3.innerText];
let CountClicks = 0;
let gameTracker = document.querySelector('.Tic-Tac-Toe');
let playerTurn = document.querySelector('.playerturn');
let resetGame = document.querySelector('.reset-game');
let pageTracker = document.querySelector('.page')

let compareGame = function() {
    for (let i = 0; i < 16; i++) {
        if (gameBoard == winningX[i]) {
            console.log('You win!')
        } else {
            console.log('You lose!')
        }
    }
}

let winningX = [['X', 'X', 'X',
               '', '', '',
               '', '', ''],
               ['', '', '',
               'X', 'X', 'X',
               '', '', ''],
               ['', '', '',
               '', '', '',
               'X', 'X', 'X'],
               ['X', '', '',
               '', 'X', '',
               '', '', 'X'],
               ['', '', 'X',
               '', 'X', '',
               'X', '', ''],
               ['X', '', '',
               'X', '', '',
               'X', '', ''],
               ['', 'X', '',
               '', 'X', '',
               '', 'X', ''],
               ['', '', 'X',
               '', '', 'X',
               '', '', 'X'],
               ['O', 'O', 'O',
               '', '', '',
               '', '', ''],
               ['', '', '',
               'O', 'O', 'O',
               '', '', ''],
               ['', '', '',
               '', '', '',
               'O', 'O', 'O'],
               ['O', '', '',
               '', 'O', '',
               '', '', 'O'],
               ['', '', 'O',
               '', 'O', '',
               'O', '', ''],
               ['O', '', '',
               'O', '', '',
               'O', '', ''],
               ['', 'O', '',
               '', 'O', '',
               '', 'O', ''],
               ['', '', 'O',
               '', '', 'O',
               '', '', 'O']]


function checkPlayerTurn() {
    if (CountClicks % 2 == 0) {
        playerTurn.innerText = 'Player 1 make your move!'
    } else if (CountClicks % 2 != 0) {
        playerTurn.innerText = 'Player 2 make your move!'
        };
    };
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
// });

r1B1.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r1B1.innerText = 'O';
        checkPlayerTurn();
        return CountClicks, r1B1.innerText;
    } else {
        r1B1.innerText = 'X';
        checkPlayerTurn();
        clearInterval(this)
        return CountClicks, r1B1.innerText; 
    };
});
r1B2.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r1B2.innerText = 'O'
    } else {
        r1B2.innerText = 'X'
    };
    checkPlayerTurn();
    return CountClicks;
}, {once : true});
r1B3.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r1B3.innerText = 'O'
    } else {
        r1B3.innerText = 'X'
    };
    checkPlayerTurn();
    return CountClicks;
}, {once : true});
r2B1.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r2B1.innerText = 'O'
    } else {
        r2B1.innerText = 'X'
    };
    checkPlayerTurn();
    return CountClicks;
}, {once : true});
r2B2.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r2B2.innerText = 'O'
    } else {
        r2B2.innerText = 'X'
    };
    checkPlayerTurn();
    return CountClicks;
}, {once : true});
r2B3.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r2B3.innerText = 'O'
    } else {
        r2B3.innerText = 'X'
    };
    checkPlayerTurn();
    return CountClicks;
}, {once : true});
r3B1.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r3B1.innerText = 'O'
    } else {
        r3B1.innerText = 'X'
    };
    checkPlayerTurn();
    return CountClicks;
}, {once : true});
r3B2.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r3B2.innerText = 'O'
    } else {
        r3B2.innerText = 'X'
    }
}, {once : true});
r3B3.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r3B3.innerText = 'O'
    } else {
        r3B3.innerText = 'X'
    };
    checkPlayerTurn();
    return CountClicks;
}, {once : true});
