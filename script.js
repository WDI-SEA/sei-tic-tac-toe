
 // a way to index squares -- that correlates to the arrays
    // a way to make the x's and o's stick
    // use an array to keep track of the x's and o's on the gameboard
    // (option 1: 1d array) ['x', '', '', '', '', '', '', '', ''] 
    // (option 2: trickier 2d array):
    // [
    //     ['x', '', ''],
    //     ['o', 'x', ''],
    //     ['o', '', 'x']
    // ]
    // array[0][0] -- accessing a 2d array
// a way to alternate players
    // a varaible that tracks whose turn it currently is -- this would start off as 'x'
// a varaible that tracks if the game is running or not
    // let isRunning = true 
// event listeners --clicking on the divs and making the x's or o's appear
    // when a square is clicked, do the following:
        // first check if that spot in the array is empty and that isRunning is true, if so, do the following:
            // we make an x or o appear -- as simple as setting the inner text
            // check if a win has occured  
                // check all 8 win cases for 'x' and for 'o'
                // cats games could check if all spaces are filled (verbose) OR
                // have a varaible that increments every turn and call a cats game at 9 if no body has won
                // if the game is won or a cats game occurs -- set isRunning to false
                    // other ways to check out that might be good to end the game 
                    // if game is won -- we could remove the gameboard from the DOM 
                    // or you could fill up the array spaces
                    // delete a class to prevent listeners from firing
            // alternate players if a win did not occur by changing the varaible that tracks whose turn it currently is
            // increment the turn counter to move closer to the cats condition

// we need to keep track of the gameboard in javascript so might as well grab all the cells 
//DOM selectors
let cellOne = document.getElementById('cell1')
let cellTwo = document.getElementById('cell2')
let cellThree = document.getElementById('cell3')
let cellFour = document.getElementById('cell4')
let cellFive = document.getElementById('cell5')
let cellSix = document.getElementById('cell6')
let cellSeven = document.getElementById('cell7')
let cellEight = document.getElementById('cell8')
let cellNine = document.getElementById('cell9')
let container = document.getElementById('container')
let cell = document.querySelectorAll('cell')
let displayText = document.getElementById('display')
//empty array, index squares
let gameArray = ['', '', '', '', '', '', '', '', '']

//for loop cycles thru all squares in gameArray

for(i = 0; i < gameArray.length; i++) {
    console.log(gameArray[i])
} 
console.log(cell)



//Global variables
const playerOne = 'X'
const playerTwo = 'O'

// const winningFunc = [
//     ['cellOne', 'cellTwo', 'cellThree'], 
//     ['cellFour', 'cellFive', 'cellSix'], 
//     ['cellSeven', 'cellEight', 'cellNine'], 
//     ['cellOne', 'cellFive', 'cellNine'],
//     ['cellThree', 'cellFive', 'cellSeven'],
//     ['cellOne', 'cellFour', 'cellSeven'],
//     ['cellTwo', 'cellFive', 'cellEight'],
//     ['cellThree', 'cellSix', 'cellNine']
// ]

//event listener
function playerClick(e) {
    document.querySelector('#cell').innerHTML = " "
}
// document.querySelector('#cell').addEventListener('click', playerClick)


//function to check for win 
if (playerOne || playerTwo === winningFunc[0]) {
    console.log('you win') 
}   else if (playerOne || playerTwo === winningFunc[1]) {
    console.log('You win')
}   else if (playerOne || playerTwo === winningFunc[2]) {
    console.log('You win')
}   else if (playerOne || playerTwo === winningFunc[3]) {
    console.log('You win')
}   else if (playerOne || playerTwo === winningFunc[4]) {
    console.log('You win')
}   else if (playerOne || playerTwo === winningFunc[5]) {
    console.log('You win')
}   else if (playerOne || playerTwo === winningFunc[6]) {
    console.log('You win')
}   else if (playerOne || playerTwo === winningFunc[7]) {
    console.log('You win')
}   else if (playerOne || playerTwo === winningFunc[8]) {
    console.log('You win')
}   else {
    console.log('You broke the game, please tell me how you did this') //even tho the game in its current state doesn't work to begin with 
}




//e for event
function playerClick(e) {
    console.log(e.target)
}
container.addEventListener('click', playerClick)


//figure out how to display X when click


//how to display X and O alternating 
//make sure same box can't be clicked again

//clear/reset game button function
let resetButton = document.getElementById('reset-button')

resetButton.addEventListener("click", restart)
function restart(e) {
    location.reload()
    //reloads screen
}


// -hit a lot of walls, some too high to overcome 

//ideas that didn't work out/ hit deadends with 

// didn't work/ran out of ideas for these tries
// xSymbol = document.body.classList.innerText = 'X'
// console.log(xSymbol)
// //if cellOne is not equal to nothing (i.e occupied by X or O)
// if (cellOne !== '') {
//     //something goes here
// } else 
//xSymbol = document.body.cell.innerText = 'X' 
// | not sure what i was thinking here


