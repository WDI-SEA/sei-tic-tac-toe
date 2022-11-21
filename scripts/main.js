// Doms
let square1 = document.getElementById('square1')
let square2 = document.getElementById('square2')
let square3 = document.getElementById('square3')
let square4 = document.getElementById('square4')
let square5 = document.getElementById('square5')
let square6 = document.getElementById('square6')
let square7 = document.getElementById('square7')
let square8 = document.getElementById('square8')
let square9 = document.getElementById('square9')
let xWin = document.getElementById('xWin')
let oWin = document.getElementById('oWin')
let playAgain = document.getElementById('playAgain')
let restart = document.getElementById('restart')
let whosTurn = document.getElementById('whosTurn')

// this finds square's value
// console.log(square1.attributes.value.value)
// getting value number for array
let square1Val = square1.attributes.value.value
let square2Val = square2.attributes.value.value
let square3Val = square3.attributes.value.value
let square4Val = square4.attributes.value.value
let square5Val = square5.attributes.value.value
let square6Val = square6.attributes.value.value
let square7Val = square7.attributes.value.value
let square8Val = square8.attributes.value.value
let square9Val = square9.attributes.value.value

// setting who is playing currently
let currentPlayer = "X"

// game GO or STOP
let gameRunning = true

// win counter (does not show on screen)
let xAddNum = 0
let oAddNum = 0

// What the board current is
const boardArray = [
    square1Val,
    square2Val,
    square3Val,
    square4Val,
    square5Val,
    square6Val,
    square7Val,
    square8Val,
    square9Val
]

// function to lay down X or O
/*
check boardArry is 0
check currentPlayer
check gameRunning
change innerText of the square
change boardArray Value
send to winCheck
*/
const clickedSquare1 = () => {
    if (boardArray[0] === "0" && currentPlayer === "X" && gameRunning === true) {
        square1.innerText = 'X'
        // console.log('the square is now X')
        // console.log(square1.innerText)
        boardArray[0] = "1"
        // console.log('boardArray[0] value changed to 1')
        // console.log(boardArray[0])
        // console.log('sent to winCheckForX')
        winCheckForX()
    } else if (boardArray[0] === "0" && currentPlayer === "O" && gameRunning === true) {
        square1.innerText = "O"
        // console.log('the square is now O')
        // console.log(square1.innerText)
        boardArray[0] = "2"
        // console.log('boardArray[0] value changed to 2')
        // console.log(boardArray[0])
        // console.log('sent to winCheckForO')
        winCheckForO()
    }
}

const clickedSquare2 = () => {
    if (boardArray[1] === "0" && currentPlayer === "X" && gameRunning === true) {
        square2.innerText = 'X'
        // console.log('the square is now X')
        // console.log(square2.innerText)
        boardArray[1] = "1"
        // console.log('boardArray[1] value changed to 1')
        // console.log(boardArray[1])
        // console.log('sent to winCheckForX')
        winCheckForX()
    } else if (boardArray[1] === "0" && currentPlayer === "O" && gameRunning === true) {
        square2.innerText = "O"
        // console.log('the square is now O')
        // console.log(square2.innerText)
        boardArray[1] = "2"
        // console.log('boardArray[1] value changed to 2')
        // console.log(boardArray[1])
        // console.log('sent to winCheckForO')
        winCheckForO()
    }
}

const clickedSquare3 = () => {
    if (boardArray[2] === "0" && currentPlayer === "X" && gameRunning === true) {
        square3.innerText = 'X'
        // console.log('the square is now X')
        // console.log(square3.innerText)
        boardArray[2] = "1"
        // console.log('boardArray[2] value changed to 1')
        // console.log(boardArray[2])
        // console.log('sent to winCheckForX')
        winCheckForX()
    } else if (boardArray[2] === "0" && currentPlayer === "O" && gameRunning === true) {
        square3.innerText = "O"
        // console.log('the square is now O')
        // console.log(square3.innerText)
        boardArray[2] = "2"
        // console.log('boardArray[2] value changed to 2')
        // console.log(boardArray[2])
        // console.log('sent to winCheckForO')
        winCheckForO()
    }
}

const clickedSquare4 = () => {
    if (boardArray[3] === "0" && currentPlayer === "X" && gameRunning === true) {
        square4.innerText = 'X'
        // console.log('the square is now X')
        // console.log(square4.innerText)
        boardArray[3] = "1"
        // console.log('boardArray[3] value changed to 1')
        // console.log(boardArray[3])
        // console.log('sent to winCheckForX')
        winCheckForX()
    } else if (boardArray[3] === "0" && currentPlayer === "O" && gameRunning === true) {
        square4.innerText = "O"
        // console.log('the square is now O')
        // console.log(square4.innerText)
        boardArray[3] = "2"
        // console.log('boardArray[3] value changed to 2')
        // console.log(boardArray[3])
        // console.log('sent to winCheckForO')
        winCheckForO()
    }
}

const clickedSquare5 = () => {
    if (boardArray[4] === "0" && currentPlayer === "X" && gameRunning === true) {
        square5.innerText = 'X'
        // console.log('the square is now X')
        // console.log(square5.innerText)
        boardArray[4] = "1"
        // console.log('boardArray[4] value changed to 1')
        // console.log(boardArray[4])
        // console.log('sent to winCheckForX')
        winCheckForX()
    } else if (boardArray[4] === "0" && currentPlayer === "O" && gameRunning === true) {
        square5.innerText = "O"
        // console.log('the square is now O')
        // console.log(square5.innerText)
        boardArray[4] = "2"
        // console.log('boardArray[4] value changed to 2')
        // console.log(boardArray[4])
        // console.log('sent to winCheckForO')
        winCheckForO()
    }
}

const clickedSquare6 = () => {
    if (boardArray[5] === "0" && currentPlayer === "X" && gameRunning === true) {
        square6.innerText = 'X'
        // console.log('the square is now X')
        // console.log(square6.innerText)
        boardArray[5] = "1"
        // console.log('boardArray[5] value changed to 1')
        // console.log(boardArray[5])
        // console.log('sent to winCheckForX')
        winCheckForX()
    } else if (boardArray[5] === "0" && currentPlayer === "O" && gameRunning === true) {
        square6.innerText = "O"
        // console.log('the square is now O')
        // console.log(square6.innerText)
        boardArray[5] = "2"
        // console.log('boardArray[5] value changed to 2')
        // console.log(boardArray[5])
        // console.log('sent to winCheckForO')
        winCheckForO()
    }
}

const clickedSquare7 = () => {
    if (boardArray[6] === "0" && currentPlayer === "X" && gameRunning === true) {
        square7.innerText = 'X'
        // console.log('the square is now X')
        // console.log(square7.innerText)
        boardArray[6] = "1"
        // console.log('boardArray[6] value changed to 1')
        // console.log(boardArray[6])
        // console.log('sent to winCheckForX')
        winCheckForX()
    } else if (boardArray[6] === "0" && currentPlayer === "O" && gameRunning === true) {
        square7.innerText = "O"
        // console.log('the square is now O')
        // console.log(square7.innerText)
        boardArray[6] = "2"
        // console.log('boardArray[6] value changed to 2')
        // console.log(boardArray[6])
        // console.log('sent to winCheckForO')
        winCheckForO()
    }
}

const clickedSquare8 = () => {
    if (boardArray[7] === "0" && currentPlayer === "X" && gameRunning === true) {
        square8.innerText = 'X'
        // console.log('the square is now X')
        // console.log(square8.innerText)
        boardArray[7] = "1"
        // console.log('boardArray[7] value changed to 1')
        // console.log(boardArray[7])
        // console.log('sent to winCheckForX')
        winCheckForX()
    } else if (boardArray[7] === "0" && currentPlayer === "O" && gameRunning === true) {
        square8.innerText = "O"
        // console.log('the square is now O')
        // console.log(square8.innerText)
        boardArray[7] = "2"
        // console.log('boardArray[7] value changed to 2')
        // console.log(boardArray[7])
        // console.log('sent to winCheckForO')
        winCheckForO()
    }
}

const clickedSquare9 = () => {
    if (boardArray[8] === "0" && currentPlayer === "X" && gameRunning === true) {
        square9.innerText = 'X'
        // console.log('the square is now X')
        // console.log(square9.innerText)
        boardArray[8] = "1"
        // console.log('boardArray[8] value changed to 1')
        // console.log(boardArray[8])
        // console.log('sent to winCheckForX')
        winCheckForX()
    } else if (boardArray[8] === "0" && currentPlayer === "O" && gameRunning === true) {
        square9.innerText = "O"
        // console.log('the square is now O')
        // console.log(square9.innerText)
        boardArray[8] = "2"
        // console.log('boardArray[8] value changed to 2')
        // console.log(boardArray[8])
        // console.log('sent to winCheckForO')
        winCheckForO()
    }
}

// check for win
// else if to check tie
// else send to swithplayer
const winCheckForX = () => {
    if(boardArray[0] === "1" && boardArray[1] === "1" && boardArray[2] === "1" ||
    boardArray[0] === "1" && boardArray[4] === "1" && boardArray[8] === "1" ||
    boardArray[0] === "1" && boardArray[3] === "1" && boardArray[6] === "1" ||
    boardArray[1] === "1" && boardArray[4] === "1" && boardArray[7] === "1" ||
    boardArray[2] === "1" && boardArray[4] === "1" && boardArray[6] === "1" ||
    boardArray[2] === "1" && boardArray[5] === "1" && boardArray[8] === "1" ||
    boardArray[3] === "1" && boardArray[4] === "1" && boardArray[5] === "1" ||
    boardArray[6] === "1" && boardArray[7] === "1" && boardArray[8] === "1") {
        // console.log('player X WIN!')
        xAddCount()
        gameRunning = false
        whosTurn.innerText = "Player X WIN!"
    } else if (boardArray[0] !== "0" && boardArray[1] !== "0" && boardArray[2] !== "0" && 
    boardArray[3] !== "0" && boardArray[4] !== "0" && boardArray[5] !== "0" &&
    boardArray[6] !== "0" && boardArray[7] !== "0" && boardArray[8] !== "0") {
        // console.log('It\'s a TIE')
        gameRunning = false
        whosTurn.innerText = "It's a TIE"
    } else {
        // console.log('sent to switchToplayerO')
        switchToPlayerO()
    }
}

const winCheckForO = () => {
    if(boardArray[0] === "2" && boardArray[1] === "2" && boardArray[2] === "2" ||
    boardArray[0] === "2" && boardArray[4] === "2" && boardArray[8] === "2" ||
    boardArray[0] === "2" && boardArray[3] === "2" && boardArray[6] === "2" ||
    boardArray[1] === "2" && boardArray[4] === "2" && boardArray[7] === "2" ||
    boardArray[2] === "2" && boardArray[4] === "2" && boardArray[6] === "2" ||
    boardArray[2] === "2" && boardArray[5] === "2" && boardArray[8] === "2" ||
    boardArray[3] === "2" && boardArray[4] === "2" && boardArray[5] === "2" ||
    boardArray[6] === "2" && boardArray[7] === "2" && boardArray[8] === "2") {
        // console.log('Player O WIN!')
        oAddCount()
        gameRunning = false
        whosTurn.innerText = "Player O WIN!"
    } else if (boardArray[0] !== "0" && boardArray[1] !== "0" && boardArray[2] !== "0" && 
    boardArray[3] !== "0" && boardArray[4] !== "0" && boardArray[5] !== "0" &&
    boardArray[6] !== "0" && boardArray[7] !== "0" && boardArray[8] !== "0") {
        // console.log('It\'s a tie')
        gameRunning = false
        whosTurn.innerText = "It's a TIE!"
    } else {
        // console.log('sent to switchToPlayerX')
        switchToPlayerX()
    }
}

// check all win cond
// if it wins check print 'X' win!
// else send it to 

// Switch players
const switchToPlayerO = () => {
    currentPlayer = "O"
    // console.log('player changed to O')
    // console.log(currentPlayer)
    whosTurn.innerText = "It\'s O\'s turn!"
    // console.log('changed to Its Xs turn')
}

const switchToPlayerX = () => {
    currentPlayer = "X"
    // console.log('player changed to X')
    // console.log(currentPlayer)
    whosTurn.innerText = "It\'s X\'s turn!"
    // console.log('changed to Its Xs turn')
}

const clickedPlayAgain = () => {
    if (currentPlayer === "X") {
        boardArray[0] = "0"
        boardArray[1] = "0"
        boardArray[2] = "0"
        boardArray[3] = "0"
        boardArray[4] = "0"
        boardArray[5] = "0"
        boardArray[6] = "0"
        boardArray[7] = "0"
        boardArray[8] = "0"
        square1.innerText = " "
        square2.innerText = " "
        square3.innerText = " "
        square4.innerText = " "
        square5.innerText = " "
        square6.innerText = " "
        square7.innerText = " "
        square8.innerText = " "
        square9.innerText = " "
        gameRunning = true
        switchToPlayerO()
    } else if (currentPlayer === "O") {
        boardArray[0] = "0"
        boardArray[1] = "0"
        boardArray[2] = "0"
        boardArray[3] = "0"
        boardArray[4] = "0"
        boardArray[5] = "0"
        boardArray[6] = "0"
        boardArray[7] = "0"
        boardArray[8] = "0"
        square1.innerText = " "
        square2.innerText = " "
        square3.innerText = " "
        square4.innerText = " "
        square5.innerText = " "
        square6.innerText = " "
        square7.innerText = " "
        square8.innerText = " "
        square9.innerText = " "
        gameRunning = true
        switchToPlayerX()
    }
}

const clickedRestart = () => {
    currentPlayer = "X"
    gameRunning = true
    xWin.innerText = "0"
    oWin.innerText = "0"
    oAddNum = 0
    xAddNum = 0
    whosTurn.innerText = "It\'s X\'s turn!"
    boardArray[0] = "0"
    boardArray[1] = "0"
    boardArray[2] = "0"
    boardArray[3] = "0"
    boardArray[4] = "0"
    boardArray[5] = "0"
    boardArray[6] = "0"
    boardArray[7] = "0"
    boardArray[8] = "0"
    square1.innerText = " "
    square2.innerText = " "
    square3.innerText = " "
    square4.innerText = " "
    square5.innerText = " "
    square6.innerText = " "
    square7.innerText = " "
    square8.innerText = " "
    square9.innerText = " "
}

const xAddCount = () => {
    // console.log('adding counter')
    xAddNum += 1
    xWin.innerText = " " + xAddNum
}

const oAddCount = () => {
    // console.log('adding counter')
    oAddNum += 1
    oWin.innerText = " " + oAddNum
}

// what square player clicked on
square1.addEventListener('click', clickedSquare1)
square2.addEventListener('click', clickedSquare2)
square3.addEventListener('click', clickedSquare3)
square4.addEventListener('click', clickedSquare4)
square5.addEventListener('click', clickedSquare5)
square6.addEventListener('click', clickedSquare6)
square7.addEventListener('click', clickedSquare7)
square8.addEventListener('click', clickedSquare8)
square9.addEventListener('click', clickedSquare9)
playAgain.addEventListener('click', clickedPlayAgain)
restart.addEventListener('click', clickedRestart)

// My logic thought process
// What player click on what square
// Check who current player is && check if gameRunning is true && if the board is empty
// If it passes everything change boardArray according currentPlayer and send it to (currentPlayer)winCheck
// Checks everypossible win combination and ties if it happens print on screen and addCount accordingly
// If not send to switchPlayer opposite of currentPlayer

// Improvements to make
// Just realized I can make some codes like switchplayer shorter with an if statement back I'll get back to it later
// also can make TIE counter
// visual flare is lacking but all it takes is time
// want to add when pressed playagain reset to what player goes first depending on who won last time. 
// but right now is good because whoever presses playagain gets punished and lets the oppenet go first