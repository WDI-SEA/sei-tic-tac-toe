// register that the page has been opened
document.addEventListener('DOMContentLoaded', () => {})

// open turn counter
turn = 0

// establish win conditions
const wins = [
    // horizontals
    ['div-1','div-2','div-3'],['div-4','div-5','div-6'],['div-7','div-8','div-9'],
    // verticals
    ['div-1','div-4','div-7'],['div-2','div-5','div-8'],['div-3','div-6','div-9'],
    // diagonals
    ['div-1','div-5','div-9'],['div-3','div-5','div-7']
]

// make array for x and o entries
let xMoves = []
let oMoves = []

// make win indicators
let xWins = false
let oWins = false

// function to update turn announcer at the top of the page
const announceTurn = () => {
    if (turn % 2 === 0) {
        const xTurnMessage = document.createElement('p')
        xTurnMessage.innerText = 'It is X\'s turn.'
        turnCounter.innerHTML = ''
        turnCounter.appendChild(xTurnMessage)
    } else if (turn % 2 === 1) {
        const oTurnMessage = document.createElement('p')
        oTurnMessage.innerText = 'It is O\'s turn.'
        turnCounter.innerHTML = ''
        turnCounter.appendChild(oTurnMessage)
    }
}


// function triggered by click on square
const playerAction = (event) => {
    // check whether the game has already been won
    if (xWins || oWins) {
        console.log('the game is over')
    // check whether the square has already been used
    } else if (event.target.firstChild) {
        console.log('invalid move')
    } else {
        // if the square hasn't been used, id the square
        const chosenSquareId = event.target.id
        // create a mark to go in
        const newMark = document.createElement('p')
        newMark.classList.add('mark')
        //if else statement based on turn that assigns x or o
        if (turn % 2 === 0) {
            newMark.innerText = 'x'
            // record move to x player array
            xMoves.push(chosenSquareId)
        } else {
            newMark.innerText = 'o'
            // record move to o player array
            oMoves.push(chosenSquareId)
        }
        // add new mark to the square
        document.getElementById(chosenSquareId).appendChild(newMark)
        
        // check whether x won
        for (i = 0; i < wins.length; i++) {
            if(isWinner(wins[i], xMoves)) {
                xWins = true
            }
        }
        
        // check whether o won
        for (i = 0; i < wins.length; i++) {
            if(isWinner(wins[i], oMoves)) {
                oWins = true
            }
        }        
        // next turn
        turn++
        announceTurn()
        checkGameOver()
    }
}   

// function to check whether a player array contains a winning array
const isWinner = (winArray, playerArray) => {
    return winArray.every( (element) => {
        return playerArray.includes(element)
    })
}

// function to check whether the game has ended
const checkGameOver = () => {
    if (xWins) {
        const xAnnounce = document.createElement('p')
        xAnnounce.innerText = 'X wins!'
        turnCounter.innerHTML = ''
        turnCounter.appendChild(xAnnounce)
    } else if (oWins) {
        const oAnnounce = document.createElement('p')
        oAnnounce.innerText = 'O wins!'
        turnCounter.innerHTML = ''
        turnCounter.appendChild(oAnnounce)
        // if no one wins, check whether the game board is full
    } else if (turn === 9) {
        const tieAnnounce = document.createElement('p')
        tieAnnounce.innerText = 'Cat\'s game! Try again.'
        turnCounter.innerHTML = ''
        turnCounter.appendChild(tieAnnounce)
        const horns = new Audio('sounds/the-price-is-right-losing-horn.mp3')
        horns.play()
    }
}

// reset function
const reset = () => {
    turn = 0
    xMoves = []
    oMoves = []
    xWins = false
    oWins = false
    square1.innerHTML = ''
    square2.innerHTML = ''
    square3.innerHTML = ''
    square4.innerHTML = ''
    square5.innerHTML = ''
    square6.innerHTML = ''
    square7.innerHTML = ''
    square8.innerHTML = ''
    square9.innerHTML = ''
    turnCounter.innerHTML = '<p>X goes first. Select a square.</p>'
}

// create onscreen turn counter
const turnCounter = document.getElementById('turn-counter')

// create clickable squares 1-9
const square1 = document.getElementById('div-1')
const square2 = document.getElementById('div-2')
const square3 = document.getElementById('div-3')
const square4 = document.getElementById('div-4')
const square5 = document.getElementById('div-5')
const square6 = document.getElementById('div-6')
const square7 = document.getElementById('div-7')
const square8 = document.getElementById('div-8')
const square9 = document.getElementById('div-9')

// create clickable reset button
const resetButton = document.getElementById('reset')

// listen for a click on squares
square1.addEventListener('click',playerAction)
square2.addEventListener('click',playerAction)
square3.addEventListener('click',playerAction)
square4.addEventListener('click',playerAction)
square5.addEventListener('click',playerAction)
square6.addEventListener('click',playerAction)
square7.addEventListener('click',playerAction)
square8.addEventListener('click',playerAction)
square9.addEventListener('click',playerAction)

// listen for click on reset button
resetButton.addEventListener('click',reset)