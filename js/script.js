const turnDiv = document.querySelector('#turn')
const clearBoard = document.getElementById('reset-button')

const anyButton = document.querySelectorAll('.play-spaces')
const anyButtonArr = Array.from(anyButton)
// console.dir(anyButton)

let currentPlayer = 'Player 1'
const gBoard = [0,0,0,0,0,0,0,0,0]

for (let i=0; i<anyButtonArr.length; i++) {
    anyButtonArr[i].addEventListener('click', (e) => {
        console.log(`${currentPlayer} has chosen ${e.target.id}`) // check move
        const spotTaken = turnDiv.innerText = `That spot is already taken. Try a different one!`
        turnDiv.style.backgroundColor = 'yellow'
        // player 1's turn
        if (currentPlayer === 'Player 1') {
            if (gBoard[i] === 0) {
                e.target.style.backgroundImage = "url('img/o.png')"
                gBoard[i] = 1
                currentPlayer = 'Player 2'
                turnDiv.innerText = `${currentPlayer}, it's your turn!`
                turnDiv.style.backgroundColor = "rgb(255, 153, 153)" 
            } else {spotTaken}
        // player 2's turn
        } else if (currentPlayer === 'Player 2') {
            if (gBoard[i] === 0) {
                e.target.style.backgroundImage = "url('img/x.png')"
                gBoard[i] = -1
                currentPlayer = 'Player 1'
                turnDiv.innerText = `${currentPlayer}, it's your turn!`
                turnDiv.style.backgroundColor = "rgb(98, 218, 255)"
            } else {spotTaken}
        }

        const rows = [gBoard[0]+gBoard[1]+gBoard[2], gBoard[3]+gBoard[4]+gBoard[5], gBoard[6]+gBoard[7]+gBoard[8]]
        const columns = [gBoard[0]+gBoard[3]+gBoard[6], gBoard[1]+gBoard[4]+gBoard[7], gBoard[2]+gBoard[5]+gBoard[8]]
        const diagonals = [gBoard[0]+gBoard[4]+gBoard[8], gBoard[2]+gBoard[4]+gBoard[6]]
        // winning combinations
        const winCombo1 = rows.includes(3) || columns.includes(3) || diagonals.includes(3)
        const winCombo2 = rows.includes(-3) || columns.includes(-3) || diagonals.includes(-3)
        console.log(gBoard) // check board status
        // console.log(rows)

        // cat's game
        if (gBoard.includes(0) === false) {
            turnDiv.innerText = `Tie game... Clear Board to start again!`
            turnDiv.style.backgroundColor = 'white'
        }
        
        // player 1 wins
        if(winCombo1) {
            turnDiv.innerText = `Player 1 has won! Clear Board to start again!`
            turnDiv.style.backgroundColor = 'white'
            document.body.style.backgroundColor = 'rgb(98, 218, 255)'
            currentPlayer = "player3"
        }
        
        // player 2 wins
        if(winCombo2) {
            turnDiv.innerText = `Player 2 has won! Clear Board to start again!`
            turnDiv.style.backgroundColor = 'white'
            document.body.style.backgroundColor = 'rgb(255, 153, 153)'
            currentPlayer = "player3"
        }
    })
}
// new game
clearBoard.addEventListener('click', () => {
    for(let i=0; i<9;i++) {
        gBoard[i] = 0
    }
    for (let i=0; i<anyButtonArr.length; i++) {
        anyButtonArr[i].style.backgroundImage = ""
    }
    currentPlayer = 'Player 1'
    turnDiv.innerText = "Player 1, let's go again!"
    turnDiv.style.backgroundColor = 'white'
    document.body.style.backgroundColor = 'rgb(201, 201, 201)'
})

// button check

// const button0 = document.getElementById('topLeft')
// const button1 = document.getElementById('topMid')
// const button2 = document.getElementById('topRight')
// const button3 = document.getElementById('centerLeft')
// const button4 = document.getElementById('centerMid')
// const button5 = document.getElementById('centerRight')
// const button6 = document.getElementById('bottomLeft')
// const button7 = document.getElementById('bottomMid')
// const button8 = document.getElementById('bottomRight')

// const but0Clicked = button0.addEventListener('click', () => {
//     console.log(`button0 has been clicked`)
// })
// const but1Clicked = button1.addEventListener('click', () => {
//     console.log(`button1 has been clicked`)
// })
// const but2Clicked = button2.addEventListener('click', () => {
//     console.log(`button2 has been clicked`)
// })
// const but3Clicked = button3.addEventListener('click', () => {
//     console.log(`button3 has been clicked`)
// })
// const but4Clicked = button4.addEventListener('click', () => {
//     console.log(`button4 has been clicked`)
// })
// const but5Clicked = button5.addEventListener('click', () => {
//     console.log(`button5 has been clicked`)
// })
// const but6Clicked = button6.addEventListener('click', () => {
//     console.log(`button6 has been clicked`)
// })
// const but7Clicked = button7.addEventListener('click', () => {
//     console.log(`button7 has been clicked`)
// })
// const but8Clicked = button8.addEventListener('click', () => {
//     console.log(`button8 has been clicked`)
// })

// // winning combinations
// const winCombo = ((gBoard[0] + gBoard[3] + gBoard[6] === 3) || (gBoard[1] + gBoard[4] + gBoard[7] === 3) || (gBoard[2] + gBoard[5] + gBoard[8] === 3) || (gBoard[0] + gBoard[1] + gBoard[2] === 3) || (gBoard[3] + gBoard[4] + gBoard[5] === 3) || (gBoard[6] + gBoard[7] + gBoard[8] === 3) || (gBoard[0] + gBoard[4] + gBoard[8] === 3) || (gBoard[2] + gBoard[4] + gBoard[6] === 3))

// if ((gBoard[0] + gBoard[3] + gBoard[6] === 3) || (gBoard[1] + gBoard[4] + gBoard[7] === 3) || (gBoard[2] + gBoard[5] + gBoard[8] === 3) || (gBoard[0] + gBoard[1] + gBoard[2] === 3) || (gBoard[3] + gBoard[4] + gBoard[5] === 3) || (gBoard[6] + gBoard[7] + gBoard[8] === 3) || (gBoard[0] + gBoard[4] + gBoard[8] === 3) || (gBoard[2] + gBoard[4] + gBoard[6] === 3)) {  }
// if ((gBoard[0] + gBoard[3] + gBoard[6] === -3) || (gBoard[1] + gBoard[4] + gBoard[7] === -3) || (gBoard[2] + gBoard[5] + gBoard[8] === -3) || (gBoard[0] + gBoard[1] + gBoard[2] === -3) || (gBoard[3] + gBoard[4] + gBoard[5] === -3) || (gBoard[6] + gBoard[7] + gBoard[8] === -3) || (gBoard[0] + gBoard[4] + gBoard[8] === -3) || (gBoard[2] + gBoard[4] + gBoard[6] === -3)) {  }


// what kind of variables will I need? (app state)
  // data container (array) to hold who has gone where (the gameboard) (this would contain player choices)
  // (optional) -- define each players choice x/o
  // whose turn it is? -- state of player
  // winning combinations to check (data container?)
  // toggle/boolean if someone has won (is user allowd to click/keep playing)
  // (cats option 1) board is full = draw
  // (cats option 2) turn count for cats game

// what will happen when the user clicks?
  // slection of X or O (who's turn is it?)
  // mark space if it is availible
    // if it is marked -- do nothing
  // check if there is a winner
    // if there is a winner -- stop gameplay and show who won
    // if not -- let gameplay continue