
//Welcome to Dino's Tic, Tac, Toe!

//DOM initializations 
const reset = document.getElementById('reset')
const body = document.querySelector('body')
//always let the players know who's turn it is
let youreUpMessage = document.createElement('h2')
    youreUpMessage.style.color = "orange"
    youreUpMessage.innerText = "Your move, X!"
    body.appendChild(youreUpMessage)
//display message when a tile is clicked for the second time
let notAgain = document.createElement('h2')
    body.appendChild(notAgain)
    notAgain.style.color = "orange"
    notAgain.innerText = ''
let winningMessage = document.createElement('h1')
///////////Variable Declarations/////////
//are tiles clicked? (if true, should not be selectable until re-set)
let tileClicked = [false, false, false, false, false, false, false, false, false]
//track the board
let currentBoard = ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z',]
//who's turn is it?
let isXup = true
//how many moves have been made?
let playCount = 0
//do we have a winner?
let doWeHaveAwinner = false
///declared her for scope issues, used in checkForWinner
let winnerRay = []
//winning combos
const possibleXwins = [
    ['x', 'x', 'x', 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 'x', 'x', 'x', 6, 7, 8],
    [0, 1, 2, 3, 4, 5, 'x', 'x', 'x'],
    ['x', 1, 2, 'x', 4, 5, 'x', 7, 8],
    [0, 'x', 2, 3, 'x', 5, 6, 'x', 8],
    [0, 1, 'x', 3, 4, 'x', 6, 7, 'x'],
    ['x', 1, 2, 3, 'x', 5, 6, 7, 'x'],
    [0, 1, 'x', 3, 'x', 5, 'x', 7, 8]
]

const possibleOwins = [
    ['o', 'o', 'o', 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 'o', 'o', 'o', 6, 7, 8],
    [0, 1, 2, 3, 4, 5, 'o', 'o', 'o'],
    ['o', 1, 2, 'o', 4, 5, 'o', 7, 8],
    [0, 'o', 2, 3, 'o', 5, 6, 'o', 8],
    [0, 1, 'o', 3, 4, 'o', 6, 7, 'o'],
    ['o', 1, 2, 3, 'o', 5, 6, 7, 'o'],
    [0, 1, 'o', 3, 'o', 5, 'o', 7, 8]
]


//lat player select a tile
const selectTile = (inputTile) => { 
    console.log(`inside the funciton, the tile id is: ${inputTile.id}`)
    console.log(`tile ${inputTile.id[1]} selected!`)
    const tileId = inputTile.id[1]
        //is the target clicked?
    if (tileClicked[tileId] === true) {
        ///change h2 for 'no!' message
        notAgain.innerText = "That tile is taken! Please select another."
        console.log('that tile is occupied!')

    } else if (tileClicked[tileId] === false) {
        notAgain.innerText = ''
        if (isXup === true) {
            if (inputTile.classList == "tile") {
                //put an X in the tile
                inputTile.innerText = "x"
                //make tile clicked until re-set
                tileClicked[tileId] = true 
                //add x to current board array in correct position
                currentBoard[tileId] = 'x'
                //make it O's turn
                isXup = false
                //display: Your move, o!
                youreUpMessage.innerText = "Your move, O!"
                //increment playCount
                playCount++
            }
        } else if (isXup === false) {
            if (inputTile.classList == "tile") {   
                //put an o in the tile
                inputTile.innerText = "o"
                //make the tile clicked until re-set
                tileClicked[tileId] = true 
                //place o in current board array in corect position
                 currentBoard[tileId] = 'o'
                //make it X's turn
                isXup = true
                //display: Your move, x!
                youreUpMessage.innerText = "Your move, X!"
                //increment playCount
                playCount++
             }
       
            }
        }
    
}

///write a function to check for winner 

// the correspoing indeces in the current array
const checkForWinner = (tileInput) => {
    console.log("checking for winner!")
    if (!(tileInput.innerText === 'x'|| tileInput.innerText === 'o')) {
        return false 
    } else { 
        if (tileInput.innerText == 'x') {
            crossCheck (possibleXwins, tileInput)
        } else if (tileInput.innerText == 'o') {
            crossCheck (possibleOwins, tileInput)
        }
    }
}
///this function is passed to the above to solve a logical problem
const crossCheck = (winnerRay, inputTile) => {
        console.log("cross checking...!")
    if (currentBoard[0] === winnerRay[0][0] && currentBoard[1] === winnerRay[0][1] && currentBoard[2] === winnerRay[0][2]) {
        winningMessage.style.color = "green"
        winningMessage.innerText = `3 IN A ROW! ${inputTile.innerText} IS THE WINNER!`
        body.appendChild(winningMessage)
        console.log(`${inputTile.innerText} is the winner!`)
        allClicked
        doWeHaveAwinner = true
    } else if (currentBoard[3] === winnerRay[1][3] && currentBoard[4] === winnerRay[1][4] && currentBoard[5] === winnerRay[1][5]) {
        winningMessage.style.color = "green"
        winningMessage.innerText = `3 IN A ROW! ${inputTile.innerText} IS THE WINNER!`
        body.appendChild(winningMessage)
        console.log(`${inputTile.innerText} is the winner!`)
        allClicked()
        doWeHaveAwinner = true
    } else if (currentBoard[6] === winnerRay[2][6] && currentBoard[7] === winnerRay[2][7] && currentBoard[8] === winnerRay[2][8]) {
        winningMessage.style.color = "green"
        winningMessage.innerText = `3 IN A ROW! ${inputTile.innerText} IS THE WINNER!`
        body.appendChild(winningMessage)
        console.log(`${inputTile.innerText} is the winner!`)
        allClicked()
        doWeHaveAwinner = true
    } else if (currentBoard[0] === winnerRay[3][0] && currentBoard[3] === winnerRay[3][3] && currentBoard[6] === winnerRay[3][6]) {
        winningMessage.style.color = "green"
        winningMessage.innerText = `3 IN A ROW! ${inputTile.innerText} IS THE WINNER!`
        body.appendChild(winningMessage)
        allClicked()
        doWeHaveAwinner = true
    } else if (currentBoard[1] === winnerRay[4][1] && currentBoard[4] === winnerRay[4][4] && currentBoard[7] === winnerRay[4][7]) {
        winningMessage.style.color = "green"
        winningMessage.innerText = `3 IN A ROW! ${inputTile.innerText} IS THE WINNER!`
        body.appendChild(winningMessage)
        console.log(`${inputTile.innerText} is the winner!`)
        allClicked()
        doWeHaveAwinner = true
    } else if (currentBoard[2] === winnerRay[5][2] && currentBoard[5] === winnerRay[5][5] && currentBoard[8] === winnerRay[5][8]) {
        winningMessage.style.color = "green"
        winningMessage.innerText = `3 IN A ROW! ${inputTile.innerText} IS THE WINNER!`
        body.appendChild(winningMessage)
        console.log(`${inputTile.innerText} is the winner!`)
        allClicked()
        doWeHaveAwinner = true
    } else if (currentBoard[0] === winnerRay[6][0] && currentBoard[4] === winnerRay[6][4] && currentBoard[8] === winnerRay[6][8]) {
        winningMessage.style.color = "green"
        winningMessage.innerText = `3 IN A ROW! ${inputTile.innerText} IS THE WINNER!`
        body.appendChild(winningMessage)
        console.log(`${inputTile.innerText} is the winner!`)
        allClicked()
        doWeHaveAwinner = true
    } else if (currentBoard[2] === winnerRay[7][2] && currentBoard[4] === winnerRay[7][4] && currentBoard[6] === winnerRay[7][6]) {
        winningMessage.style.color = "green"
        winningMessage.innerText = `3 IN A ROW! ${inputTile.innerText} IS THE WINNER!`
        body.appendChild(winningMessage)
        console.log(`${inputTile.innerText} is the winner!`)
        allClicked()
        doWeHaveAwinner = true
    } else if (isItaTie() == true) {
        winningMessage.style.color = "green"
        winningMessage.innerText = `It's a Tie! hit Reset to play again.`
        body.appendChild(winningMessage)
        console.log(`${inputTile.innerText} is the winner!`)
        allClicked()
        doWeHaveAwinner = true
    } else {
        return false
    }
}


// check for a tie
const isItaTie = () => {
    for (i = 0; i < 9;) {
        if (!(currentBoard[i] === 'x' || currentBoard[i] === 'o' )) {
            return false
        } else if (currentBoard[i] === 'x' || currentBoard[i] === 'o') {
            i++
            if (i >=9) {
                return true
            }
        } 
    }
}
//click all tiles 
const allClicked = () => {
   for (let i = 0; i < 9; i++) {
       tileClicked[i] = true
       
   }
}

//write reset fucntion
const freshStart = () => {
    //set all variables to their orignal state
    youreUpMessage.innerText = "Your move, X!"
    tileClicked = [false, false, false, false, false, false, false, false, false]
    currentBoard = ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z',]
    isXup = true
    playCount = 0
    doWeHaveAwinner = false
    //clear board visuals
    winningMessage.remove()
    notAgain.remove()
    for (i = 0; i < 9; i++) {
        document.getElementById(`t${i}`).remove()
    }
    //recreate notAgain for bug fix
    notAgain = document.createElement('h2')
    body.appendChild(notAgain)
    notAgain.style.color = "orange"
    notAgain.innerText = ''
    //recreate tiles so they can be clicked after reset
    const tile = [];
    for (i = 0; i < 9; i++) {
        //create each tile
        tile[i] = document.createElement('div')
        tile[i].classList.add('tile')
        tile[i].setAttribute('id', `t${i}`)
       //add them to the board
       const board = document.getElementById('board')
       board.appendChild(tile[i])
    }

    //recreate click listeners
    for (let i = 0; i < 9; i++){
        document.getElementById(`t${i}`).addEventListener('click', () => {
            if (doWeHaveAwinner === true) {
                 return false
            } else if ( doWeHaveAwinner === false && playCount >= 4){ 
                selectTile(event.currentTarget)
                checkForWinner(event.currentTarget)
            } else if (doWeHaveAwinner === false)
                selectTile(event.currentTarget)
        })    

    }


}

//What Needs to be ready at window loaded? put it below.

    document.addEventListener('DOMContentLoaded', () => {

    //create tiles in the DOM so they can be removed later
    const tile = [];
    for (i = 0; i < 9; i++) {
        //create each tile
        tile[i] = document.createElement('div')
        tile[i].classList.add('tile')
        tile[i].setAttribute('id', `t${i}`)
       //add them to the board
       const board = document.getElementById('board')
       board.appendChild(tile[i])
    }


//////click events here////////// 
        //clear button click
        reset.addEventListener('click', () => {
            console.log("RESET CLICKED")
            freshStart()
        })
        //tile click
        for (let i = 0; i < 9; i++){
            document.getElementById(`t${i}`).addEventListener('click', () => {
                if (doWeHaveAwinner === true) {
                     return false
                } else if ( doWeHaveAwinner === false && playCount >= 4){ 
                    selectTile(event.currentTarget)
                    checkForWinner(event.currentTarget)
                } else if (doWeHaveAwinner === false)
                    selectTile(event.currentTarget)
            })    

        }
       
    })