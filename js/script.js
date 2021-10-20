const div = document.getElementsByClassName('divButton')
const rulesX = document.getElementById('messageX')
const rulesO = document.getElementById('messageO')
const startButton = document.getElementById('start')
const resetButton = document.getElementById('reset')
let playerOneTurn = true


let findingTie = []

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
                findingTie.push(clickedDiv.innerText)
                gamePlay()
                // console.log(findingTie.length)
            } else if (!playerOneTurn) {
                swithToPlayerTwo()
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

function swithToPlayerTwo() {
    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener('click', (event) => {
            const clickedDiv = event.target
            if (!playerOneTurn && !clickedDiv.innerText) {
                clickedDiv.innerText = 'O'
                rulesX.innerHTML = "Now it is X's turn"
                rulesO.innerHTML = " "
                playerOneTurn = true
                findingTie.push(clickedDiv.innerText)
                gamePlay()
                // console.log(findingTie.length)
            } else if (playerOneTurn) {
                playerOne()
            } 
        })
    }
}


function gameTie () {
        // console.log('gameTie function',findingTie.length)
       if (findingTie.length == 9) {
        rulesX.innerHTML = `ITS A TIE!`
        rulesO.innerHTML = ` `
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
        rulesO.innerHTML = ` ` 
        setTimeout(gameReset, 4000)
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
        setTimeout(gameReset, 4000)
    } else {
        gameTie()
    }
}

// reset game
function gameReset () { 
    for (let i = 0; i < div.length; i++) {
        div[i].innerText = " "
    }
    findingTie = []
    rulesX.innerHTML = `Game has been reset`
    rulesO.innerHTML = `Please press Start Game to play again`
}

// function gameResetAfterWin () {

// }

// press button to start game
startButton.addEventListener('click', gameStart)
// press button to reset game
resetButton.addEventListener('click', gameReset)
