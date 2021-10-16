//define winning combination array
const winConditions = [
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3'],
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    ['a1', 'b2', 'c3'],
    ['a3', 'b2', 'c1']
]
//define playerOne and playerTwo arrays
let turnCount = 1
let currentSelections = []
const playerOne = {
    isTurn: true,
    choices: []
}

const playerTwo = {
    isTurn: false,
    choices: []
}

//define the square
const square = document.getElementsByClassName('square')

const resetGame = () => {
    for (i = 0; i < square.length; i++){
        square[i].innerText = ''
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    //listen for click on square
    for (i = 0; i < 9; i++) {
        square[i].addEventListener('click', (event) => {
            // console.log('click test :\n', 'clicked')
            //identify which square was clicked
            const clickedSquare = event.target
            console.log('clicked square :\n', clickedSquare)
            //check which player's turn it is
            if (playerOne.isTurn) {
                currentSelections.push(clickedSquare.id)
                clickedSquare.innerHTML = 'X'
                playerOne.isTurn = false
                playerTwo.isTurn = true
            } else {
                currentSelections.push(clickedSquare.id)
                clickedSquare.innerHTML = 'O'
                playerOne.isTurn = true
                playerTwo.isTurn = false
            }
            console.log(currentSelections)
        })
    }

    document.getElementById('reset').addEventListener('click', resetGame)    
        
        //check if square is available to click
        //warn player
        //reset turn
        //check current player
        //place X or O depending on turn
        //add square location to player's selected squares
        //compare to winning combinations
        //announce winner
        //or
        //toggle the turn
        //update turn display
})


