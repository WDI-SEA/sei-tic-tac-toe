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
            } else if (clickedDiv.innerText == 'O') {
                clickedDiv.innerText = "X"
                swithToPlayerTwo()
            }
        })     
    }  
    gamePlay()
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


// const winngingConditions = [
//     ['a1', 'a2', 'a3']
//     ['b1', 'b2', 'b3']
//     ['c1', 'c2', 'c3']
//     ['a1', 'b1', 'c1']
//     ['a2', 'b2', 'c2']
//     ['a3', 'b3', 'c3']
//     ['a1', 'b2', 'c3']
//     ['c1', 'b2', 'a3']
// ]

const winngingConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

function gamePlay () {
        for (let i = 0; i < winngingConditions.length; i++) {
            div[i].addEventListener('click', (event) => {
            const clickedDiv = event.target
                for (let i = 0; i < 3; i++)
                    if (winngingConditions[0] == clickedDiv.innerText) {
                        console.log('winning')
                } else {
                        console.log('losing')
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
    
    
    // const winning1 = [document.getElementById('square1'), document.getElementById('square2'), document.getElementById('square3')]
    // const winning2 = [document.getElementById('square4'), document.getElementById('square5'), document.getElementById('square6')]
    // const winning3 = [document.getElementById('square7'),document.getElementById('square8') , document.getElementById('square9')]
    // const winning4 = [document.getElementById('square1'),document.getElementById('square4') , document.getElementById('square7')]
    // const winning5 = [document.getElementById('square2'),document.getElementById('square5') , document.getElementById('square8')]
    // const winning6 = [document.getElementById('square3'),document.getElementById('square6') , document.getElementById('square9')]
    // const winning7 = [document.getElementById('square1'),document.getElementById('square5') , document.getElementById('square9')]
    // const winning8 = [document.getElementById('square3'),document.getElementById('square5') , document.getElementById('square7')]
    
    // const winningConCondenced = [winning1, winning2, winning3, winning4, winning5,winning6,winning7,winning8]
