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

let none = '?'
let X = "X"
let O = "O"
let player1 = "Player 1"
let player2 = "Player 2"
let gameBoard = ['', '', '',
                 '', '', '',
                 '', '', ''];
let CountClicks = 0;
let gameTracker = document.querySelector('.Tic-Tac-Toe');
let playerTurn = document.querySelector('.playerturn');
let resetGame = document.querySelector('.reset-game');
let pageTracker = document.querySelector('.page')


let compareGame = function() {
    let winningX = [[X, X, X,
                     gameBoard[3], gameBoard[4], gameBoard[5],
                     gameBoard[6], gameBoard[7], gameBoard[8]],
                    [gameBoard[0], gameBoard[1], gameBoard[2],
                     'X', 'X', 'X',
                     gameBoard[6], gameBoard[7], gameBoard[8]],
                    [gameBoard[0], gameBoard[1], gameBoard[2],
                     gameBoard[3], gameBoard[4], gameBoard[5],
                     'X', 'X', 'X'],
                    ['X', gameBoard[1], gameBoard[2],
                     gameBoard[3], 'X', gameBoard[5],
                     gameBoard[6], gameBoard[7], 'X'],
                    [gameBoard[0], gameBoard[1], 'X',
                     gameBoard[3], 'X', gameBoard[5],
                     'X', gameBoard[7], gameBoard[8]],
                    ['X', gameBoard[1], gameBoard[2],
                     'X', gameBoard[4], gameBoard[5],
                     'X', gameBoard[7], gameBoard[8]],
                    [gameBoard[0], 'X', gameBoard[2],
                     gameBoard[3], 'X', gameBoard[5],
                     gameBoard[6], 'X', gameBoard[8]],
                    [gameBoard[0], gameBoard[1], 'X',
                     gameBoard[3], gameBoard[4], 'X',
                     gameBoard[6], gameBoard[7], 'X']];
    let winningO = [['O', 'O', 'O',
                     gameBoard[3], gameBoard[4], gameBoard[5],
                     gameBoard[6], gameBoard[7], gameBoard[8]],
                    [gameBoard[0], gameBoard[1], gameBoard[2],
                     'O', 'O', 'O',
                     gameBoard[6], gameBoard[7], gameBoard[8]],
                    [gameBoard[0], gameBoard[1], gameBoard[2],
                     gameBoard[3], gameBoard[4], gameBoard[5],
                     'O', 'O', 'O'],
                    ['O', gameBoard[1], gameBoard[2],
                     gameBoard[3], 'O', gameBoard[5],
                     gameBoard[6], gameBoard[7], 'O'],
                    [gameBoard[0], gameBoard[1], 'O',
                     gameBoard[3], 'O', gameBoard[5],
                     'O', gameBoard[7], gameBoard[8]],
                    ['O', gameBoard[1], gameBoard[2],
                     'O', gameBoard[4], gameBoard[5],
                     'O', gameBoard[7], gameBoard[8]],
                    [gameBoard[0], 'O', gameBoard[2],
                     gameBoard[3], 'O', gameBoard[5],
                     gameBoard[6], 'O', gameBoard[8]],
                    [gameBoard[0], gameBoard[1], 'O',
                     gameBoard[3], gameBoard[4], 'O',
                     gameBoard[6], gameBoard[7], 'O']];
               console.log(gameBoard)
               console.log(winningX[0])
    // if (CountClicks >= 0) {
        for (let i = 0; i < 8; i++) {
        if ( gameBoard == winningX[i] || gameBoard == winningO[i]) {
                console.log('You win!')
        }
        }
    }
// }

// let winningX = [['X', 'X', 'X',
//                 gameBoard[3], gameBoard[4], gameBoard[5],
//                 gameBoard[6], gameBoard[7], gameBoard[8]],
//                 ['', '', '',
//                'X', 'X', 'X',
//                '', '', ''],
//                ['', '', '',
//                '', '', '',
//                'X', 'X', 'X'],
//                ['X', '', '',
//                '', 'X', '',
//                '', '', 'X'],
//                ['', '', 'X',
//                '', 'X', '',
//                'X', '', ''],
//                ['X', '', '',
//                'X', '', '',
//                'X', '', ''],
//                ['', 'X', '',
//                '', 'X', '',
//                '', 'X', ''],
//                ['', '', 'X',
//                '', '', 'X',
//                '', '', 'X']]



function checkPlayerTurn() {
    if (CountClicks % 2 == 0) {
        playerTurn.innerText = 'Player 1 turn'
    } else if (CountClicks % 2 != 0) {
        playerTurn.innerText = 'Player 2 turn'
        };
    };
resetGame.addEventListener("click", function() {
    CountClicks = 0;
    playerTurn.innerText = player1 + ' make your move!';
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
        r1B1.innerText = O;
        gameBoard[0] = O;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r1B1.innerText, gameBoard[0]];
    } else {
        r1B1.innerText = X;
        gameBoard[0] = X;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r1B1.innerText, gameBoard[0]]; 
    };
});
r1B2.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r1B2.innerText = O;
        gameBoard[1] = O;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r1B2.innerText, gameBoard[1]];
    } else {
        r1B2.innerText = X;
        gameBoard[1] = X;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r1B2.innerText, gameBoard[1]];
    };
}, {once : true});
r1B3.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r1B3.innerText = O;
        gameBoard[2] = O;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r1B3.innerText, gameBoard[2]];
    } else {
        r1B3.innerText = X;
        gameBoard[2] = X;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r1B3.innerText, gameBoard[2]];
    };
}, {once : true});
r2B1.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r2B1.innerText = O;
        gameBoard[3] = X;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r2B1.innerText, gameBoard[3]];
    } else {
        r2B1.innerText = X;
        gameBoard[3] = X;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r2B1.innerText, gameBoard[3]];
    };
}, {once : true});
r2B2.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r2B2.innerText = O;
        gameBoard[4] = O;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r2B2.innerText, gameBoard[4]];
    } else {
        r2B2.innerText = X;
        gameBoard[4] = X;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r2B2.innerText, gameBoard[4]];
    };
}, {once : true});
r2B3.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r2B3.innerText = O;
        gameBoard[5] = O;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r2B3.innerText, gameBoard[5]];
    } else {
        r2B3.innerText = X;
        gameBoard[5] = X;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r2B3.innerText, gameBoard[5]];
    };
}, {once : true});
r3B1.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r3B1.innerText = O;
        gameBoard[6] = O;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r3B1.innerText, gameBoard[6]];
    } else {
        r3B1.innerText = X;
        gameBoard[6] = X;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r3B1.innerText, gameBoard[6]];
    };
}, {once : true});
r3B2.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r3B2.innerText = O;
        gameBoard[7] = O;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r3B2.innerText, gameBoard[7]];
    } else {
        r3B2.innerText = X;
        gameBoard[7] = X;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r3B2.innerText, gameBoard[7]];
    }
}, {once : true});
r3B3.addEventListener("click", function() {
    CountClicks ++;
    if (CountClicks % 2 == 0) {
        r3B3.innerText = O;
        gameBoard[8] = O;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r3B3.innerText, gameBoard[8]];
    } else {
        r3B3.innerText = X;
        gameBoard[8] = X;
        checkPlayerTurn();
        compareGame();
        return [CountClicks, r3B3.innerText, gameBoard[8]];
    };
}, {once : true});
