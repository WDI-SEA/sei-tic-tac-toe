const div = document.getElementsByClassName('divButton')
const rulesX = document.getElementById('messageX')
const rulesO = document.getElementById('messageO')
const startButton = document.getElementById('start')
const resetButton = document.getElementById('reset')

// identify which square was clicked
function gameStart () {
    playerOne()
    rulesX.innerHTML = `Player One Starts with X`
    rulesO.innerHTML = `Player Two is O`
}

function playerOne() {
    for (let i = 0; i < 9; i++) {
        div[i].addEventListener('click', (event) => {
            const clickedDiv = event.target
    // make the divs become a button and toggle between X and O
            if (clickedDiv.innerText == false) {
                clickedDiv.innerText = 'X'
                swithToPlayerTwo()
            } else if (clickedDiv.innerText == 'X') {
                    alert('THIS SQUARE IS ALREADY CLICKED')
            } else {
                clickedDiv.innerText = " "
             }
        })
    }          
}


    function swithToPlayerTwo() {
        for (let i = 0; i < 9; i++) {
            div[i].addEventListener('click', (event) => {
                const clickedDiv = event.target
            if (clickedDiv.innerText == 'X') {
                clickedDiv.innerText = 'O'
                playerOne()
            } 
        })
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