const div = document.getElementsByClassName('divButton')
const rulesX = document.getElementById('messageX')
const rulesO = document.getElementById('messageO')
const startButton = document.getElementById('start')
const resetButton = document.getElementById('reset')
let playerOneTurn = true


// identify which square was clicked
function gameStart () {
   playingGame()
    rulesX.innerHTML = `Player One Starts with X`
    rulesO.innerHTML = `Player Two is O`
}

function playerOne() {
    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener('click', (event) => { 
            const clickedDiv = event.target
    // make the divs become a button and toggle between X and O
            if (playerOneTurn && !clickedDiv.innerText) {
                clickedDiv.innerText = 'X'
                rulesX.innerHTML = "Now it is O's turn"
                rulesO.innerHTML = " "
                playerOneTurn = false
                gamePlay()
            } else if (!playerOneTurn) {
                swithToPlayerTwo()
            }
        })
    }   
}  

function swithToPlayerTwo() {
    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener('click', (event) => {
            const clickedDiv = event.target
            if (!playerOneTurn && !clickedDiv.innerText) {
                clickedDiv.innerText = 'O'
                rulesX.innerHTML = "Now it is X's turn"
                rulesO.innerHTML = " "
                playerOneTurn = true
                gamePlay()
            } else if (playerOneTurn) {
                playerOne()
            } else {
                // continue
                // alert('this has been checked-player Two')
            }
        })
    }
}

function playingGame () {
    if (playerOneTurn) {
        playerOne()
    } else {
        swithToPlayerTwo()
    }
}

function gamePlay () {
    if (
        // X wining by row
        document.getElementById('square1').innerText == 'X' && document.getElementById('square2').innerText == 'X' && document.getElementById('square3').innerText == 'X' 
    || document.getElementById('square4').innerText == 'X' && document.getElementById('square5').innerText == 'X' && document.getElementById('square6').innerText == 'X'
    || document.getElementById('square7').innerText == 'X' &&  document.getElementById('square8').innerText == 'X' && document.getElementById('square9').innerText == 'X'
        // X winning by column
    || document.getElementById('square1').innerText == 'X' && document.getElementById('square4').innerText == 'X' && document.getElementById('square7').innerText == 'X'
    || document.getElementById('square2').innerText == 'X' && document.getElementById('square5').innerText == 'X' && document.getElementById('square8').innerText == 'X'
    || document.getElementById('square3').innerText == 'X' && document.getElementById('square6').innerText == 'X' && document.getElementById('square9').innerText == 'X'
        // X winning diagonal
    || document.getElementById('square1').innerText == 'X' && document.getElementById('square5').innerText == 'X' && document.getElementById('square9').innerText == 'X'
    || document.getElementById('square3').innerText == 'X' && document.getElementById('square5').innerText == 'X' && document.getElementById('square7').innerText == 'X') {
        
        rulesX.innerHTML = `The Winner is: X `
        rulesO.innerHTML = ``

    } else if (
        // O wining by row
        document.getElementById('square1').innerText == 'O' && document.getElementById('square2').innerText == 'O' && document.getElementById('square3').innerText == 'O' 
    || document.getElementById('square4').innerText == 'O' && document.getElementById('square5').innerText == 'O' && document.getElementById('square6').innerText == 'O'
    || document.getElementById('square7').innerText == 'O' &&  document.getElementById('square8').innerText == 'O' && document.getElementById('square9').innerText == 'O'
        // O winning by column
    || document.getElementById('square1').innerText == 'O' && document.getElementById('square4').innerText == 'O' && document.getElementById('square7').innerText == 'O'
    || document.getElementById('square2').innerText == 'O' && document.getElementById('square5').innerText == 'O' && document.getElementById('square8').innerText == 'O'
    || document.getElementById('square3').innerText == 'O' && document.getElementById('square6').innerText == 'O' && document.getElementById('square9').innerText == 'O'
        // O winning diagonal
    || document.getElementById('square1').innerText == 'O' && document.getElementById('square5').innerText == 'O' && document.getElementById('square9').innerText == 'O'
    || document.getElementById('square3').innerText == 'O' && document.getElementById('square5').innerText == 'O' && document.getElementById('square7').innerText == 'O') {
        rulesX.innerHTML = `The Winner is: O `
        rulesO.innerHTML = ``
    } else {
        for (let i = 0; i < div.length; i++) {
            if (div.length <= 7)
            rulesX.innerHTML = `The Game is A Tie!`
            rulesO.innerHTML = ``
        }
    }
}
// reset game
function gameReset () { 
    window.location.reload()
}

// press button to start game
startButton.addEventListener('click', gameStart)
// press button to reset game
resetButton.addEventListener('click', gameReset)
