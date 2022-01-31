console.log("ahhhhhhh!")

// ! variables
const gameBoard = document.getElementById("game-board");
// const boardSq2 = document.getElementById('board-sq2')
// const winningCombos = [[btn0,btn1,btn2], [btn3,btn4,btn5], [btn6,btn7,btn8], [btn0,btn4,btn8], [btn2,btn4,btn6], [btn0,btn3,btn6], [btn1,btn4,btn7], [btn2,btn5,btn7]]; 


// console.log(gameBoard)
// console.log(gameBoard.rows[2].cells[0])

//create game that represents each board square
console.log(gameBoard.rows[0]) //entire row

const dos = gameBoard.rows[1].cells[1] //single cell
let target = 
console.log(dos)

//gonna push numbers that get picked
let xMoves =[]
//gonna take out numbers that get picked
let oMovesChoices=[0,1,2,3,4,5,6,7,8]
let oMoves =[]
let winningMoves = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,7]]

let buttons = document.getElementsByTagName('button');

let winCheck = (moves) => {
  for (let i = 0; i < winningMoves.length; i++) {
    let winningNums = winningMoves[i]
    if (moves.includes(winningNums[0]) && moves.includes(winningNums[1]) && moves.includes(winningNums[2])){
      return true
    }
  }
  return false
}

let usedMoves = (num) => {
  const index = oMovesChoices.indexOf(num);
  if (index > -1) {
    oMovesChoices.splice(index,1);
  }
}

let getOMoves = () => {
    const index = Math.floor(Math.random() * oMovesChoices.length)
    return oMovesChoices[index]
}

for (let button of buttons) {
    button.addEventListener("click", function(event) {
        console.log(event.target.id)
        const pick = (parseInt(event.target.id))
        if (xMoves.includes(pick) || oMoves.includes(pick)) {
            return 
        }

        event.target.innerText = "x";
        xMoves.push(pick)
        usedMoves(pick)


        console.log(`moves: ${xMoves}`)
        console.log(`ommoves: ${oMoves}`)
        console.log(`omovechoices: ${oMovesChoices}`)


        if (oMoves.length + xMoves.length == 9) {
            alert("TIE")
            return
        }

        if (winCheck(xMoves)) {
            alert("X WINS!")
            return
        }

        let oPick = getOMoves()
        document.getElementById(oPick.toString()).innerText = "o";
        oMoves.push(pick)
        usedMoves(pick)


        if (winCheck(oMoves)) {
            alert("O WINS")
            return
        }

    })
    

}



// notEmpty = []
//     document.getElementById("")
// }

//  let gameOver =() => {
    //board is full and no matches to winning combo
    //if someone wins
//  }

// document.querySelectorAll('#game-board td')
// .forEach(e => e.addEventListener("click", "function"() {
//     console.log('clicked')
// }))

// function clickHandler() {
//     console.log("clicked")
// }

// document.querySelectorAll('#board-game')
// .forEach(e => e.addEventListener("click", clickHandler));


// let isEmpty= () =>{
//     if value == " "
//     console.log("weeeee")
// }




// let ticTT = () => {
//     if gameOver == false &&
// }


// console.log(btn8.nodeValue)


// let gameOver = false;

//saves clicks in an array

// let userClicked = []
// // compiles a list of clicks and picks
// for (let i = 0; i< buttons.length; i++) {
//     let click = i
//     buttons[i].onclick = function() {
//         userClicked += click
//     }
// }


let currentPlayer = "x";
const poe = "o";

const gameWon = () => `Player ${currentPlayer} has won!`;
const tie = () => `Gameover, it's a tie!`;
const currentPlayerTurn = () => `It'${currentPlayer} turn`

const currentTurn = document.getElementById ('current-turn');
//changing the display

// computerPick

// const boardSquare = document.querySelector
// gameBoard = {
//     (1,2,3,4,5,6,7,8,9)
// }

// const player = {
//    let player = o
// }

// const player = {
//     let computer = x
// }
    
// const game = {
//     playersPicks: []  //stores numbers in array if
//     computerPicks: []
// }

// function gameOver() => {

// }

// let gameWon = () => {
    
// }
012
345
678
// let winningCombos = [1,2,3] [4,5,6] [7,8,9] [1,5,9] [3,5,7]
//where how do i store game info

//if board full && no winner
// const gameWon
//if 3 consecutive spots are picked(inc diagnals)


// ? is the game an object... can it be reset once the game is over?  create a new object? that function we learned last time
/*
1. user picks where they want X
2. check if the spot is filled 
    if yes, ask user to pick somewhere else
    break
    go back to step one.
    
    if no, place the mark 
    check if game over or game won 
            if yes 
                game is over player wins
                congratulate player alert? 
                acknowledgement resets game
            if no
                computer turn
3. computer random # generator
count boxes that are left, get number if marked go again

let randomNum = Math.floor(Math.random() * 8)

        
1 2 3
4 5 6
7 8 9

array.sort, array.join(,) then check against string!


each square == number
(1,1) (1,2) (1,3) 
(2,1) (2,2) (2,3)
(3,1) (3,2) (3,3)
maybe define completed selected rows?
completeSelectedColumn
completeSelectedDiagnol
winning combo 
123
345
679
159
357
xr

*/


//need computer 
//need random generator
//need

//start game 
//player given x
//player chooses first => picks spot
//-check if that spot is filled, 

//check if 3 slots in a row are filled or if the entire board is filled win? or game over?
//if not on both. mark spot with x


// something array that chenge doc
// record into array