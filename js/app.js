// register that the page has been opened
document.addEventListener('DOMContentLoaded', () => {
    console.log('the dom has loaded')
})

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
const xMoves = []
const oMoves = []

// make wins
let xWins = false
let oWins = false

// function triggered by click on square
const playerAction = (event) => {
    // check whether the square already has been used
    if (event.target.firstChild) {
        console.log('invalid move')
    } else {
        // if the square hasn't been used, id the square
        const chosenSquareId = event.target.id
        console.log('player chose:', chosenSquareId)
        // create a mark to go in
        const newMark = document.createElement('p')
        newMark.classList.add('mark')
        //if else statement based on turn that assigns x or o
        if (turn % 2 === 0) {
            newMark.innerText = 'x'
            xMoves.push(chosenSquareId)
        } else {
            newMark.innerText = 'o'
            oMoves.push(chosenSquareId)
        }
        document.getElementById(chosenSquareId).appendChild(newMark)
        
        // function to check whether anyone has won
        const isWinner = (winArray, playerArray) => {
            return winArray.every( (element) => {
                return playerArray.includes(element)
            })
        }
        
        // check whether x won
        for (i = 0; i < wins.length; i++) {
            if(isWinner(wins[i], xMoves)) {
                console.log('x wins')
                xWins = true
                break
            }
        }
        
        // check whether o won
        for (i = 0; i < wins.length; i++) {
            if(isWinner(wins[i], oMoves)) {
                console.log('o wins')
                oWins = true
                break
            }
        }        
        // check whether the board is full
        if (xWins) {
            const xAnnounce = document.createElement('p')
            xAnnounce.innerText = 'X wins!'
            resultField.innerHTML = ''
            resultField.appendChild(xAnnounce)
        } else if (oWins) {
            const oAnnounce = document.createElement('p')
            oAnnounce.innerText = 'O wins!'
            resultField.innerHTML = ''
            resultField.appendChild(oAnnounce)
        }
        console.log('x Moves:', xMoves)
        console.log('o Moves:', oMoves)
        if (turn === 8) {
            console.log('game over')
            // log arrays of current moves
        }
        // next turn
        turn++
    }
}   

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

const resultField = document.getElementById('results')

// listen for a click
square1.addEventListener('click',playerAction)
square2.addEventListener('click',playerAction)
square3.addEventListener('click',playerAction)
square4.addEventListener('click',playerAction)
square5.addEventListener('click',playerAction)
square6.addEventListener('click',playerAction)
square7.addEventListener('click',playerAction)
square8.addEventListener('click',playerAction)
square9.addEventListener('click',playerAction)
