
// get all buttons and save to const
const box1 = document.querySelector('#space1')
const box2 = document.getElementById('space2')
const box3 = document.getElementById('space3')
const box4 = document.getElementById('space4')
const box5 = document.getElementById('space5')
const box6 = document.getElementById('space6')
const box7 = document.getElementById('space7')
const box8 = document.getElementById('space8')
const box9 = document.getElementById('space9')
const reset = document.getElementById('reset')
// set array to check for winner
// set each column array
const column1 = [box1,box4,box7]
const column2 = [box2,box5,box8]
const column3 = [box3,box6,box9]
// set row arryays
const row1 = [box1, box2, box3]
const row2 = [box4, box5, box6]
const row3 = [box7, box8, box9]
// set array to check diagonal
const diagonal1 = [box1,box5,box9]
const diagonal2 = [box3,box5,box7]
// array to access columns
const columns = [column1,column2,column3]
// arrya to access rows
const rows = [row1,row2,row3]
// array to access diagonal
const diagonals = [diagonal1, diagonal2]
// const to keep track of which players move
var Player = 'Player 1'
var Winner = 'none'

// constant to edit text at bottom of page
const bottomText = document.querySelector('h2')


const checkGame = () => {
    // check game array to see if some has won
    //test all columns for win
    for(let i = 0;i<columns.length;i++) {
        console.log(i)
        console.log(columns[i][0].innerText)
        console.log(columns[i][1].innerText)
        console.log(columns[i][2].innerText)
        if((columns[i][0].innerText=='X') && (columns[i][1].innerText=='X') && (columns[i][2].innerText == 'X')){
            Winner = 'X'
            console.log('column winner X')
            return Winner;
        }
        if((columns[i][0].innerText=='O') && (columns[i][1].innerText=='O') && (columns[i][2].innerText == 'O')){
            Winner = 'O'
            console.log('column winner O')
            return Winner;
        }
    }
    //test all rows for win
     for(let i = 0;i<rows.length;i++) {
        if((rows[i][0].innerText=='X') && (rows[i][1].innerText=='X') && (rows[i][2].innerText == 'X')){
            Winner = 'X'
            console.log('row winner X')
            return Winner;
        }
        if((rows[i][0].innerText=='O') && (rows[i][1].innerText=='O') && (rows[i][2].innerText == 'O')){
            Winner = 'O'
            console.log('row winner O')
            return Winner;
        }
     }
    // test all diag for win
     for(let i = 0;i<diagonals.length;i++) {
        if((diagonals[i][0].innerText=='X') && (diagonals[i][1].innerText=='X') && (diagonals[i][2].innerText == 'X')){
            Winner = 'X'
            console.log('diagonal winner X')
            return Winner;
        }
        if((diagonals[i][0].innerText=='O') && (diagonals[i][1].innerText=='O') && (diagonals[i][2].innerText == 'O')){
            Winner = 'O'
            console.log('diagonal winner O')
            return Winner;
        }
     }
}

const changePlay = (player) => {
    // change player after move has gone
    if (player == 'Player 1') {
        bottomText.innerText = 'Player 2 please make move' 
        return 'Player 2'
    }
    else if (player == 'Player 2') {
        bottomText.innerText = 'Player 1 please make move'
        return 'Player 1'
    }
}

const checkButton = (box) => {
    if (box.innerText == 'X' || box.innerText == 'O') {
        bottomText.innerText = 'Section has been selected please choose another'
        return 'yes'
    }
}

const endGame = () => {
    if(Winner == 'X') {
        bottomText.innerText = 'Player 1 has won!'
        return true

    }
    else if(Winner == 'O'){
        bottomText.innerText = 'Player 2 has won!'
        return true
    }
    else {
        return false
    }
}

box1.addEventListener('click', () => {
    // check if game has been won
    // check if button has been pressed before
    if(endGame() == true) {
        bottomText.innerText = 'Game has ended please use the reset button to play again'
    }
    else {
        if (checkButton(box1) == 'yes'){
        }
        else {
            // check which player is going
            // Set text in button
            if(Player == 'Player 1'){
                box1.innerText = 'X'
            }
            else if(Player == 'Player 2') {
                box1.innerText = 'O'
            }
            // check if game has been won
            // change player
            Player = changePlay(Player)
            checkGame()
            endGame()

        }
    }
    }
)

box2.addEventListener('click', () => {
    // check if game has been won
    // check if button has been pressed before
    if(endGame() == true) {
        bottomText.innerText = 'Game has ended please use the reset button to play again'
    }
    else {
        if (checkButton(box2) == 'yes'){
        }
        else {
            // check which player is going
            // Set text in button
            if(Player == 'Player 1'){
                box2.innerText = 'X'
            }
            else if(Player == 'Player 2') {
                box2.innerText = 'O'
            }
            // check if game has been won
            // change player
            Player = changePlay(Player)
            checkGame()
            endGame()
        }
    }

})

box3.addEventListener('click', () => {
    // check which player is going
    // check if game has been won
    if(endGame() == true) {
        bottomText.innerText = 'Game has ended please use the reset button to play again'
    }
    else {
        // check if button has been pressed before
        if (checkButton(box3) == 'yes'){
        }
        else {
            // Set text in button
            if(Player == 'Player 1'){
                box3.innerText = 'X'
            }
            else if(Player == 'Player 2') {
                box3.innerText = 'O'
            }
            // check if game has been won
            // change player
            Player = changePlay(Player)
            checkGame()
            endGame()
        }
    }
})

box4.addEventListener('click', () => {
    // check which player is going
    // check if game has been won
    if(endGame() == true) {
        bottomText.innerText = 'Game has ended please use the reset button to play again'
    }
    else {
        // check if button has been pressed before
        if (checkButton(box4) == 'yes'){
        }
        else {
            // Set text in button
            if(Player == 'Player 1'){
                box4.innerText = 'X'
            }
            else if(Player == 'Player 2') {
                box4.innerText = 'O'
            }
            // check if game has been won
            // change player
            Player = changePlay(Player)
            checkGame()
            endGame()
        }
    }

})

box5.addEventListener('click', () => {
    // check which player is going
    // check if game has been won
    if(endGame() == true) {
        bottomText.innerText = 'Game has ended please use the reset button to play again'
    }
    else {
        // check if button has been pressed before
        if (checkButton(box5) == 'yes'){
        }
        else {
            // Set text in button
            if(Player == 'Player 1'){
                box5.innerText = 'X'
            }
            else if(Player == 'Player 2') {
                box5.innerText = 'O'
            }
            // check if game has been won
            // change player
            Player = changePlay(Player)
            checkGame()
            endGame()
        }
    }
})

box6.addEventListener('click', () => {
    // check which player is going
    // check if game has been won
    if(endGame() == true) {
        bottomText.innerText = 'Game has ended please use the reset button to play again'
    }
    else {
        // check if button has been pressed before
        if (checkButton(box6) == 'yes'){
        }
        else {
            // Set text in button
            if(Player == 'Player 1'){
                box6.innerText = 'X'
            }
            else if(Player == 'Player 2') {
                box6.innerText = 'O'
            }
            // check if game has been won
            // change player
            Player = changePlay(Player)
            checkGame()
            endGame()
        }
    }   
})

box7.addEventListener('click', () => {
    // check which player is going
    // check if game has been won
    if(endGame() == true) {
        bottomText.innerText = 'Game has ended please use the reset button to play again'
    }
    else {
        // check if button has been pressed before
        if (checkButton(box7) == 'yes'){
        }
        else {
            // Set text in button
            if(Player == 'Player 1'){
                box7.innerText = 'X'
            }
            else if(Player == 'Player 2') {
                box7.innerText = 'O'
            }
            // change player
            Player = changePlay(Player)
            // check if game has been won
            checkGame()
            endGame()
        }
    }
})

box8.addEventListener('click', () => {
    // check which player is going
    if(endGame() == true) {
        bottomText.innerText = 'Game has ended please use the reset button to play again'
    }
    else {
        // check if button has been pressed before
        if (checkButton(box8) == 'yes'){
        }
        else {
            // Set text in button
            if(Player == 'Player 1'){
                box8.innerText = 'X'
            }
            else if(Player == 'Player 2') {
                box8.innerText = 'O'
            }
            // check if game has been won
            // change player
            Player = changePlay(Player)
            // check if game has been won
            checkGame()
            endGame()
        }
    }
})

box9.addEventListener('click', () => {
    // check which player is going
    if(endGame() == true) {
        bottomText.innerText = 'Game has ended please use the reset button to play again'
    }
    else {
        // check if button has been pressed before
        if (checkButton(box9) == 'yes'){
        }
        else {
            // Set text in button
            if(Player == 'Player 1'){
                box9.innerText = 'X'
            }
            else if(Player == 'Player 2') {
                box9.innerText = 'O'
            }
            // check if game has been won
            // change player
            Player = changePlay(Player)
            // check if game has been won
            checkGame()
            endGame()
        }
    }
})

reset.addEventListener('click', () => {
    Winner = 'none'
    Player = 'Player 1'
    box1.innerText = ''
    box2.innerText = ''
    box3.innerText = ''
    box4.innerText = ''
    box5.innerText = ''
    box6.innerText = ''
    box7.innerText = ''
    box8.innerText = ''
    box9.innerText = ''
    bottomText.innerText = 'Game has been reset. Player one please make first move!'
})


