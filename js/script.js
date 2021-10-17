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

const emptyArray = []


function playerOne() {
    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener('click', (event) => {
            const clickedDiv = event.target
    // make the divs become a button and toggle between X and O
            if (!clickedDiv.innerText) {
                clickedDiv.innerText = 'X'
                rulesX.innerHTML = "Now it is O's turn"
                rulesO.innerHTML = " "
                swithToPlayerTwo()
            //  } else if (clickedDiv.innerText == false) {
            //         clickedDiv.innerText = 'O'
             } else {
                 alert('cant be clicked')
                // swithToPlayerTwo()
                }
            // } else if (clickedDiv.innerText == 'O') {
            //     clickedDiv.innerText = 'X'
            //     rulesX.innerHTML = "Now it is O's turn"
            //     rulesO.innerHTML = " "
            //     swithToPlayerTwo()
            }) 
        }     
    }  
    // gamePlay()

    function swithToPlayerTwo() {
        for (let i = 0; i < div.length; i++) {
            div[i].addEventListener('click', (event) => {
                const clickedDiv = event.target
            if (!clickedDiv.innerText) {
                clickedDiv.innerText = 'O'
                rulesX.innerHTML = "Now it is X's turn"
                rulesO.innerHTML = " "
                playerOne()
            } else {
                alert('this has been checked')
            }
        })
    }

const winngingConditions = [
    // wining by row
    [document.getElementById('square1'),document.getElementById('square2'), document.getElementById('square3')],
    [document.getElementById('square4'),document.getElementById('square5'), document.getElementById('square6')],
    [document.getElementById('square7'),document.getElementById('square8'), document.getElementById('square9')],
    // winning by column
    [document.getElementById('square1'),document.getElementById('square4'), document.getElementById('square7')],
    [document.getElementById('square2'),document.getElementById('square5'), document.getElementById('square8')],
    [document.getElementById('square3'),document.getElementById('square6'), document.getElementById('square9')],
    // winning diagonal
    [document.getElementById('square1'),document.getElementById('square5'), document.getElementById('square9')],
    [document.getElementById('square3'),document.getElementById('square5'), document.getElementById('square7')]
]

function gamePlay () {
    for (let i = 0; i < winngingConditions[i].length; i++) { 
        div[i].addEventListener('click', (event) => {
            let clickedDiv = event.target
            let count = 0
            for (let k = 0; k < winngingConditions[i].length; k++) {
                if (clickedDiv.innerText[i] !== winngingConditions[k]) {
                    console.log('clicked', clickedDiv)
                } else {
                count++
                if (count == winngingConditions.length) {
                    console.log('this doesnt work')

                }
            } 
        }
            // for (let k = 0; k < winngingConditions[i].length; k++) {
            // }
        // for (let j = 0; j < winngingConditions[i].length; i++) {
        //     if (clickedDiv[0].innerText == 'X') {
        //         console.log('im getting it')
        //     } else {
        //         console.log('not getting it')
        //     }
        // }
        // }) 
    })
}
}

// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [2, 4, 6]
// reset game
// function gameReset () { 
//     for (let i = 0; i < 9; i++) {
//         resetButton[i].addEventListener('click', (event) => {
//             const clickedReset = event.target
                
//             }
//     }
// }

// press button to start game
startButton.addEventListener('click', gameStart)
// press button to reset game
// resetButton.addEventListener('click', gameReset)

// for (let i = 0; i < winngingConditions.length; i++) {
//     div[i].addEventListener('click', (event) => {
//     const clickedDiv = event.target
//         for (let i = 0; i < 3; i++)
//             if (winngingConditions[0] == clickedDiv.innerText) {
//                 console.log('winning')
//         } else {
//                 console.log('losing')
//         }
//     })
// }
