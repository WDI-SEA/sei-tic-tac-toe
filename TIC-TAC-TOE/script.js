const x_class = 'x'
const o_class = 'o'
const win_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winmessageelement = document.getElementById('winMessage')
const  winmessagetextelement = document.querySelector('[win-message-text]')
const restartButton = document.getElementById('restartButton')
let oTurn

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
})
startGame()

restartButton.addEventListener('click', startGame)
function startGame() {
    oTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(x_class)
        cell.classList.remove(o_class)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    winmessageelement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = oTurn ? o_class : x_class
     placemarker(cell, currentClass)
     if (checkwin(currentClass)) {
     endGame(false)
     } else if (isDraw()) {
         endGame(true)
     } else {
        swapTurns()
        setBoardHoverClass()
     }
}

function endGame(draw) {
    if (draw) {
     winmessagetextelement.innerText ='Draw!'
    }else {
        winmessagetextelement.innerText = `${oTurn ? "o's" :
        "x's"} Wins!`
    }
    winmessageelement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(x_class) || cell.classList.contains(o_class)
    })
}

function placemarker(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    oTurn = !oTurn
}

function setBoardHoverClass() {
board.classList.remove(x_class)
board.classList.remove(o_class)
if (oTurn) {
    board.classList.add(o_class)
} else {
    board.classList.add(x_class)
}
}

function checkwin(currentClass) {
return win_combinations.some(combinations => {
    return combinations.every(index => {
        return cellElements[index].classList.contains(currentClass)
    })
})
}