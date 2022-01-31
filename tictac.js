
const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const box5 = document.querySelector('#box5')
const box6 = document.querySelector('#box6')
const box7 = document.querySelector('#box7')
const box8 = document.querySelector('#box8')
const box9 = document.querySelector('#box9')
const player1 = document.querySelector('#player-one')
const player2 = document.querySelector('#player-two')
const result = document.querySelector('#result')

// function to switchback and fourth between player1 and player2's turn.
// !playerOneTurn makes the preceeding variable (boolean) not false
// When this function is called it pushes the selection into to diffent arrays to either check for a winner or tie

let playerOneTurn = false
function playerTurn(box) {
    playerOneTurn = !playerOneTurn
    player1.classList.toggle('turn')
    player2.classList.toggle('turn')
    if (playerOneTurn) {
        player1Moves.push(box)
        allMoves.push(box)
        return 'X'
    } else {
        player2Moves.push(box)
        allMoves.push(box)
        return 'O'
    }
}

// the arrays that keep track of player moves and all moves for a tie
let player1Moves = []
let player2Moves = []
let allMoves = []

// this function checks for a winner and then calls the display results function
function checkWinner() {
    if (player1Moves.includes(1) && player1Moves.includes(2) && player1Moves.includes(3)) {
        displayResult('PLAYER ONE WINS')
    } else if (player1Moves.includes(4) && player1Moves.includes(5) && player1Moves.includes(6)) {
        displayResult('PLAYER ONE WINS')
    } else if (player1Moves.includes(7) && player1Moves.includes(8) && player1Moves.includes(9)) {
        displayResult('PLAYER ONE WINS')
    } else if (player1Moves.includes(1) && player1Moves.includes(4) && player1Moves.includes(7)) {
        displayResult('PLAYER ONE WINS')
    } else if (player1Moves.includes(2) && player1Moves.includes(5) && player1Moves.includes(8)) {
        displayResult('PLAYER ONE WINS')
    } else if (player1Moves.includes(3) && player1Moves.includes(6) && player1Moves.includes(9)) {
        displayResult('PLAYER ONE WINS')
    } else if (player1Moves.includes(1) && player1Moves.includes(5) && player1Moves.includes(9)) {
        displayResult('PLAYER ONE WINS')
    } else if (player1Moves.includes(3) && player1Moves.includes(5) && player1Moves.includes(7)) {
        displayResult('PLAYER ONE WINS')
    } else if (player2Moves.includes(1) && player2Moves.includes(2) && player2Moves.includes(3)) {
        displayResult('PLAYER TWO WINS')
    } else if (player2Moves.includes(4) && player2Moves.includes(5) && player2Moves.includes(6)) {
        displayResult('PLAYER TWO WINS')
    } else if (player2Moves.includes(7) && player2Moves.includes(8) && player2Moves.includes(9)) {
        displayResult('PLAYER TWO WINS')
    } else if (player2Moves.includes(1) && player2Moves.includes(4) && player2Moves.includes(7)) {
        displayResult('PLAYER TWO WINS')
    } else if (player2Moves.includes(2) && player2Moves.includes(5) && player2Moves.includes(8)) {
        displayResult('PLAYER TWO WINS')
    } else if (player2Moves.includes(3) && player2Moves.includes(6) && player2Moves.includes(9)) {
        displayResult('PLAYER TWO WINS')
    } else if (player2Moves.includes(1) && player2Moves.includes(5) && player2Moves.includes(9)) {
        displayResult('PLAYER TWO WINS')
    } else if (player2Moves.includes(3) && player2Moves.includes(5) && player2Moves.includes(7)) {
        displayResult('PLAYER TWO WINS')
    }
}

function checkTie() {
    if (allMoves.length === 9) {
        displayResult('DRAW')
    }
}

function displayResult(result) {
    document.querySelector('#result').innerText = result;
}

// this is what happens when the click happens:
// the variable -box- is local. So each box variable has a number corresponding to the box clicked
// the box1 variable querySelects the box where the playerTurn() happens.
// this function also calls checkTie and checkWinner
// *** CHECK WINNER HAD TO BE BELOW CHECK TIE OR THE GAME WOULD BE CALLED A DRAW
// also there's an oject that isn't a variable... }, { } That makes is so you can't click on the same box twice

box1.addEventListener('click', function () {
    const box = 1
    box1.innerText = playerTurn(box)
    checkTie()
    checkWinner()
}, {
    once: true
})

box2.addEventListener('click', function () {
    const box = 2
    box2.innerText = playerTurn(box)
    checkTie()
    checkWinner()

}, {
    once: true
})

box3.addEventListener('click', function () {
    const box = 3
    box3.innerText = playerTurn(box)
    checkTie()
    checkWinner()
}, {
    once: true
})

box4.addEventListener('click', function () {
    const box = 4
    box4.innerText = playerTurn(box)
    checkTie()
    checkWinner()
}, {
    once: true
})

box5.addEventListener('click', function () {
    const box = 5
    box5.innerText = playerTurn(box)
    checkTie()
    checkWinner()
}, {
    once: true
})

box6.addEventListener('click', function () {
    const box = 6
    box6.innerText = playerTurn(box)
    checkTie()
    checkWinner()
}, {
    once: true
})

box7.addEventListener('click', function () {
    const box = 7
    box7.innerText = playerTurn(box)
    checkTie()
    checkWinner()
}, {
    once: true
})

box8.addEventListener('click', function () {
    const box = 8
    box8.innerText = playerTurn(box)
    checkTie()
    checkWinner()
}, {
    once: true
})

box9.addEventListener('click', function () {
    const box = 9
    box9.innerText = playerTurn(box)
    checkTie()
    checkWinner()
}, {
    once: true
})


const clearButton = document.querySelector('#clear')

const clearPage = () => {
    location.reload();
}

clearButton.addEventListener('click', clearPage)



