// named functions

function winCheck(playerInput) {
    let plotA1 = document.getElementById('a1').innerText
    let plotA2 = document.getElementById('a2').innerText
    let plotA3 = document.getElementById('a3').innerText
    let plotB1 = document.getElementById('b1').innerText
    let plotB2 = document.getElementById('b2').innerText
    let plotB3 = document.getElementById('b3').innerText
    let plotC1 = document.getElementById('c1').innerText
    let plotC2 = document.getElementById('c2').innerText
    let plotC3 = document.getElementById('c3').innerText
    
    if(plotA1 === playerInput && plotA2 === playerInput && plotA3 === playerInput) {
        youWin()
    } else if (plotB1 === playerInput && plotB2 === playerInput && plotB3 === playerInput) {
        youWin()
    } else if (plotC1 === playerInput && plotC2 === playerInput && plotC3 === playerInput) {
        youWin()
    } else if (plotA1 === playerInput && plotB2 === playerInput && plotC3 === playerInput) {
        youWin()
    } else if (plotA3 === playerInput && plotB2 === playerInput && plotC1 === playerInput) {
        youWin()  
    } else if (plotA1 === playerInput && plotB1 === playerInput && plotC1 === playerInput) {
        youWin()
    } else if (plotA2 === playerInput && plotB2 === playerInput && plotC2 === playerInput) {
        youWin()
    } else if (plotA3 === playerInput && plotB3 === playerInput && plotC3 === playerInput) {
        youWin()
    }
}

// delay added to correctly update the winning stage after you click.

function youWin() {
    win = true
    setTimeout(function() {
        winnerNoti.innerText = `Player ${playerInput} Wins!`
        if(playerInput === 'X') {
            xWin++
            xWinUpdate.innerText = xWin
        } else {
            oWin++
            oWinUpdate.innerText = oWin
        }
    }, 10)
    clearButton.innerText = "Play Again"
    divs.forEach(div => {
        div.setAttribute('disabled', '')
        
    })
}

function youLose() {
    setTimeout(function() {
        winnerNoti.innerText = `Everyone Loses!`

    }, 10)
    clearButton.innerText = "Play Again"
    divs.forEach(div => {
        div.setAttribute('disabled', '')
        
    })
}

// Dom bulk init 

let win = false
let turn = 0
let xWin = 0
let oWin = 0
let playerInput = ""
let clearButton = document.getElementById('clearButton')
let numSpan = document.getElementById('turnNumSpan')
let winnerNoti = document.getElementById('winner-stage')
let xWinUpdate = document.getElementById('xWinSpan')
let oWinUpdate = document.getElementById('oWinSpan')
let divs = document.querySelectorAll(".grid-item")

// game functionality
// turn looping + wincheck and updates.

const plotClick = e => {

    if (turn % 2 === 0) {
        playerInput = 'X'
        e.currentTarget.innerText = "X"
        e.currentTarget.setAttribute('disabled','')
        winCheck(playerInput)
        turn++    
        winnerNoti.innerText = `Player O's Turn!`
    } else {
        playerInput = 'O'
        e.currentTarget.innerText = "O"
        e.currentTarget.setAttribute('disabled','')
        winCheck(playerInput)
        turn++
        winnerNoti.innerText = `Player X's Turn!`
    }
    numSpan.innerText = turn
    if(turn >= 9 && win === false) {
        youLose()
    }
    
}

divs.forEach(div => {
    div.addEventListener('click', plotClick)
})

// clear button functionality + disable attribute 

clearButton.addEventListener('click', function() {
    divs.forEach(div => {
        div.innerText = " "
        div.removeAttribute('disabled', '')
        turn = 0
        numSpan.innerText = turn
        if (turn === 0) {
            clearButton.innerText = "Clear"
        }
        winnerNoti.innerText = ""
        win = false
    })
})


// playscreen, wanted to see if I could figure it out. 

document.getElementById('fade-in').addEventListener('click', function() {
    document.getElementById('toFade').style.display = "none"
})
