/* Only the top left cell has the winning conditions right now 
it will say X or O wins but you have to end on the top left cell
*/   

/* was trying to figure out how to not repeat myself "DRY" 
    but couldnt figure it out
    if i could figure out how to use querySelectorAll 
    to reference which cell was click i think i could set
    up a for loop to iterate the function i used for the logic
    i use but wasnt able to figure it out   

*/ 
   




//restart button
restartbtn.addEventListener('click', restart)
// restart button function
function restart(){
    location.reload()
}

// // Event Listeners

// let click = "null"

// // how do i use this one?v
// const cellClick = document.querySelectorAll('.cell')
// // // how do i use this?v to figure out which cell was clicked 
// cellClick.forEach((cell) => {
//     click = cellClick
// })
// console.log(click)

// })

// function playerSelects () {
//     gameArr[0] = "X"
//     console.log(gameArr)
// }

const cell0 = document.querySelector('#cell0')
    // console.log(cell1)
const cell1 = document.querySelector('#cell1')
    // console.log(cell2)
const cell2 = document.querySelector('#cell2')
    // console.log(cell3)
const cell3 = document.querySelector('#cell3')
    // console.log(cell4)
const cell4 = document.querySelector('#cell4')
    // console.log(cell5)
const cell5 = document.querySelector('#cell5')
    // console.log(cell6)
const cell6 = document.querySelector('#cell6')
    // console.log(cell7)
const cell7 = document.querySelector('#cell7')
    // console.log(cell8)
const cell8 = document.querySelector('#cell8')
    // console.log(cell9)



cell0.addEventListener('click',playerSelects0)
cell1.addEventListener('click',playerSelects1)
cell2.addEventListener('click',playerSelects2)
cell3.addEventListener('click',playerSelects3)
cell4.addEventListener('click',playerSelects4)
cell5.addEventListener('click',playerSelects5)
cell6.addEventListener('click',playerSelects6)
cell7.addEventListener('click',playerSelects7)
cell8.addEventListener('click',playerSelects8)

//insert user choices to this array
let gameArr = ['','','','','','','','','']

//Current Player
let currentPlayer = 'X'
let nextPlayer = 'O'

// winningCondition = [gameArr[0],gameArr[3],gameArr[6]]

// //move counter
// let moves = 0;
// if (moves = 9){
//     document.getElementById('gameresults').innerText = 'Cats Game'
// }

// const winningConditionX = 

// gameArr[0] === 'X' &&
// gameArr[1] === 'X' &&
// gameArr[2] === 'X' ||

// gameArr[0] === 'X' &&
// gameArr[3] === 'X' &&
// gameArr[6] === 'X' ||

// gameArr[0] === 'X' &&
// gameArr[4] === 'X' &&
// gameArr[8] === 'X' ||

// gameArr[1] === 'X' &&
// gameArr[4] === 'X' &&
// gameArr[7] === 'X' ||

// gameArr[2] === 'X' &&
// gameArr[4] === 'X' &&
// gameArr[6] === 'X' ||

// gameArr[2] === 'X' &&
// gameArr[5] === 'X' &&
// gameArr[8] === 'X' ||

// gameArr[3] === 'X' &&
// gameArr[4] === 'X' &&
// gameArr[5] === 'X' ||

// gameArr[6] === 'X' &&
// gameArr[7] === 'X' &&
// gameArr[8] === 'X' ;

// const winningConditionO = 

// gameArr[0] === 'O' &&
// gameArr[1] === 'O' &&
// gameArr[2] === 'O' ||
    
// gameArr[0] === 'O' &&
// gameArr[3] === 'O' &&
// gameArr[6] === 'O' ||
    
// gameArr[0] === 'O' &&
// gameArr[4] === 'O' &&
// gameArr[8] === 'O' ||
    
// gameArr[1] === 'O' &&
// gameArr[4] === 'O' &&
// gameArr[7] === 'O' ||
    
// gameArr[2] === 'O' &&
// gameArr[4] === 'O' &&
// gameArr[6] === 'O' ||
    
// gameArr[2] === 'O' &&
// gameArr[5] === 'O' &&
// gameArr[8] === 'O' ||
    
// gameArr[3] === 'O' &&
// gameArr[4] === 'O' &&
// gameArr[5] === 'O' ||
    
// gameArr[6] === 'O' &&
// gameArr[7] === 'O' &&
// gameArr[8] === 'O' 



// //Functions
function playerSelects0() {
 if(currentPlayer === 'X' && gameArr[0] === '') {
            gameArr[0]= 'X'
            document.getElementById('cell0').innerText = 'X'
            if (gameArr[0] === 'X' &&
                gameArr[1] === 'X' &&
                gameArr[2] === 'X' ||
            
                gameArr[0] === 'X' &&
                gameArr[3] === 'X' &&
                gameArr[6] === 'X' ||
            
                gameArr[0] === 'X' &&
                gameArr[4] === 'X' &&
                gameArr[8] === 'X' ||
            
                gameArr[1] === 'X' &&
                gameArr[4] === 'X' &&
                gameArr[7] === 'X' ||
            
                gameArr[2] === 'X' &&
                gameArr[4] === 'X' &&
                gameArr[6] === 'X' ||
            
                gameArr[2] === 'X' &&
                gameArr[5] === 'X' &&
                gameArr[8] === 'X' ||
            
                gameArr[3] === 'X' &&
                gameArr[4] === 'X' &&
                gameArr[5] === 'X' ||
            
                gameArr[6] === 'X' &&
                gameArr[7] === 'X' &&
                gameArr[8] === 'X' ){
                    document.getElementById('gameresult').innerText =`Player X Wins`
                }else if(
                    
                gameArr[0] === 'O' &&
                gameArr[1] === 'O' &&
                gameArr[2] === 'O' ||
            
                gameArr[0] === 'O' &&
                gameArr[3] === 'O' &&
                gameArr[6] === 'O' ||
            
                gameArr[0] === 'O' &&
                gameArr[4] === 'O' &&
                gameArr[8] === 'O' ||
            
                gameArr[1] === 'O' &&
                gameArr[4] === 'O' &&
                gameArr[7] === 'O' ||
            
                gameArr[2] === 'O' &&
                gameArr[4] === 'O' &&
                gameArr[6] === 'O' ||
            
                gameArr[2] === 'O' &&
                gameArr[5] === 'O' &&
                gameArr[8] === 'O' ||
            
                gameArr[3] === 'O' &&
                gameArr[4] === 'O' &&
                gameArr[5] === 'O' ||
            
                gameArr[6] === 'O' &&
                gameArr[7] === 'O' &&
                gameArr[8] === 'O' ){
                    document.getElementById('gameresult').innerText =`Player O Wins`
                }  else {
                document.getElementById('gameresult').innerText =`Player O's Turn`
                currentPlayer = nextPlayer}
    } else if (currentPlayer !== 'X' && gameArr[0] === ''){
            gameArr[0]= 'O'
            document.getElementById('cell0').innerText = 'O'
            if (gameArr[0] === 'X' &&
                gameArr[1] === 'X' &&
                gameArr[2] === 'X' ||
            
                gameArr[0] === 'X' &&
                gameArr[3] === 'X' &&
                gameArr[6] === 'X' ||
            
                gameArr[0] === 'X' &&
                gameArr[4] === 'X' &&
                gameArr[8] === 'X' ||
            
                gameArr[1] === 'X' &&
                gameArr[4] === 'X' &&
                gameArr[7] === 'X' ||
            
                gameArr[2] === 'X' &&
                gameArr[4] === 'X' &&
                gameArr[6] === 'X' ||
            
                gameArr[2] === 'X' &&
                gameArr[5] === 'X' &&
                gameArr[8] === 'X' ||
            
                gameArr[3] === 'X' &&
                gameArr[4] === 'X' &&
                gameArr[5] === 'X' ||
            
                gameArr[6] === 'X' &&
                gameArr[7] === 'X' &&
                gameArr[8] === 'X' ){
                    document.getElementById('gameresult').innerText =`Player O Wins`
                }else if(
                    
                gameArr[0] === 'O' &&
                gameArr[1] === 'O' &&
                gameArr[2] === 'O' ||
            
                gameArr[0] === 'O' &&
                gameArr[3] === 'O' &&
                gameArr[6] === 'O' ||
            
                gameArr[0] === 'O' &&
                gameArr[4] === 'O' &&
                gameArr[8] === 'O' ||
            
                gameArr[1] === 'O' &&
                gameArr[4] === 'O' &&
                gameArr[7] === 'O' ||
            
                gameArr[2] === 'O' &&
                gameArr[4] === 'O' &&
                gameArr[6] === 'O' ||
            
                gameArr[2] === 'O' &&
                gameArr[5] === 'O' &&
                gameArr[8] === 'O' ||
            
                gameArr[3] === 'O' &&
                gameArr[4] === 'O' &&
                gameArr[5] === 'O' ||
            
                gameArr[6] === 'O' &&
                gameArr[7] === 'O' &&
                gameArr[8] === 'O' ){
                    document.getElementById('gameresult').innerText =`Player O Wins`
                }  else {
                document.getElementById('gameresult').innerText =`Player X's Turn`
                currentPlayer = 'X'}
            }    
    } 





function playerSelects1() {
    if(currentPlayer === 'X' && gameArr[1] === '') {
        gameArr[1]= 'X'
        document.getElementById('cell1').innerText = 'X'
        document.getElementById('gameresult').innerText =`Player O's Turn`
        currentPlayer = nextPlayer
        console.log(gameArr)
        console.log(nextPlayer)
    } else if (currentPlayer !== 'X' && gameArr[1] === ''){
            gameArr[1]= 'O'
            document.getElementById('cell1').innerText = 'O'
            document.getElementById('gameresult').innerText =`Player X's Turn`
            currentPlayer = 'X'
            console.log(gameArr)
            console.log(currentPlayer)
        }
}
function playerSelects2() {
    if(currentPlayer === 'X' && gameArr[2] === '') {
            gameArr[2]= 'X'
            document.getElementById('cell2').innerText = 'X'
            document.getElementById('gameresult').innerText =`Player O's Turn`
            currentPlayer = nextPlayer
            console.log(gameArr)
            console.log(nextPlayer)
    } else if (currentPlayer !== 'X' && gameArr[2] === ''){
            gameArr[2]= 'O'
            document.getElementById('cell2').innerText = 'O'
            document.getElementById('gameresult').innerText =`Player X's Turn`
            currentPlayer = 'X'
            console.log(gameArr)
            console.log(currentPlayer)
        }
}
function playerSelects3() {
    if(currentPlayer === 'X' && gameArr[3] === '') {
            gameArr[3]= 'X'
            document.getElementById('cell3').innerText = 'X'
            document.getElementById('gameresult').innerText =`Player O's Turn`
            currentPlayer = nextPlayer
            console.log(gameArr)
            console.log(nextPlayer)
    } else if (currentPlayer !== 'X' && gameArr[3] === ''){
            gameArr[3]= 'O'
            document.getElementById('cell3').innerText = 'O'
            document.getElementById('gameresult').innerText =`Player X's Turn`
            currentPlayer = 'X'
            console.log(gameArr)
            console.log(currentPlayer)
        }
}
function playerSelects4() {
    if(currentPlayer === 'X' && gameArr[4] === '') {
            gameArr[4]= 'X'
            document.getElementById('cell4').innerText = 'X'
            document.getElementById('gameresult').innerText =`Player O's Turn`
            currentPlayer = nextPlayer
            console.log(gameArr)
            console.log(nextPlayer)
    } else if (currentPlayer !== 'X' && gameArr[4] === ''){
            gameArr[4]= 'O'
            document.getElementById('cell4').innerText = 'O'
            document.getElementById('gameresult').innerText =`Player X's Turn`
            currentPlayer = 'X'
            console.log(gameArr)
            console.log(currentPlayer)
        }
}
function playerSelects5() {
    if(currentPlayer === 'X' && gameArr[5] === '') {
            gameArr[5]= 'X'
            document.getElementById('cell5').innerText = 'X'
            document.getElementById('gameresult').innerText =`Player O's Turn`
            currentPlayer = nextPlayer
            console.log(gameArr)
            console.log(nextPlayer)
    } else if (currentPlayer !== 'X' && gameArr[5] === ''){
            gameArr[5]= 'O'
            document.getElementById('cell5').innerText = 'O'
            document.getElementById('gameresult').innerText =`Player X's Turn`
            currentPlayer = 'X'
            console.log(gameArr)
            console.log(currentPlayer)
        }
}
function playerSelects6() {
    if(currentPlayer === 'X' && gameArr[6] === '') {
            gameArr[6]= 'X'
            document.getElementById('cell6').innerText = 'X'
            document.getElementById('gameresult').innerText =`Player O's Turn`
            currentPlayer = nextPlayer
            console.log(gameArr)
            console.log(nextPlayer)
    } else if (currentPlayer !== 'X' && gameArr[6] === ''){
            gameArr[6]= 'O'
            document.getElementById('cell6').innerText = 'O'
            document.getElementById('gameresult').innerText =`Player X's Turn`
            currentPlayer = 'X'
            console.log(gameArr)
            console.log(currentPlayer)
        }
}
function playerSelects7() {
     if(currentPlayer === 'X' && gameArr[7] === '') {
            gameArr[7]= 'X'
            document.getElementById('cell7').innerText = 'X'
            document.getElementById('gameresult').innerText =`Player O's Turn`
            currentPlayer = nextPlayer
            console.log(gameArr)
            console.log(nextPlayer)
    } else if (currentPlayer !== 'X' && gameArr[7] === ''){
            gameArr[7]= 'O'
            document.getElementById('cell7').innerText = 'O'
            document.getElementById('gameresult').innerText =`Player X's Turn`
            currentPlayer = 'X'
            console.log(gameArr)
            console.log(currentPlayer)
        }
}
function playerSelects8() {
    if(currentPlayer === 'X' && gameArr[8] === '') {
            gameArr[8]= 'X'
            document.getElementById('cell8').innerText = 'X'
            document.getElementById('gameresult').innerText =`Player O's Turn`
            currentPlayer = nextPlayer
            console.log(gameArr)
            console.log(nextPlayer)
    } else if (currentPlayer !== 'X' && gameArr[8] === ''){
            gameArr[8]= 'O'
            document.getElementById('cell8').innerText = 'O'
            document.getElementById('gameresult').innerText =`Player X's Turn`
            currentPlayer = 'X'
            console.log(gameArr)
            console.log(currentPlayer)
        }
}





































// function playerSelects2() {
//     if (currentPlayer === 'X' && gameArr[1] === ''){
//         gameArr[1]= 'X'
//         document.getElementById('cell2').innerText = 'X'
//         document.getElementById('gameresult').innerText =`Player O's Turn`
//         currentPlayer = nextPlayer
//         console.log(gameArr)
//         console.log(nextPlayer)
//     } else if (currentPlayer !== 'X' && gameArr[1] === ''){
//         gameArr[1]= 'O'
//         document.getElementById('cell2').innerText = 'O'
//         document.getElementById('gameresult').innerText =`Player X's Turn`
//         currentPlayer = 'X'
//         console.log(gameArr)
//         console.log(currentPlayer)
//     }
// }
// function playerSelects3() {
//     if (currentPlayer === 'X' && gameArr[2] === ''){
//         gameArr[2]= 'X'
//         document.getElementById('cell3').innerText = 'X'
//         document.getElementById('gameresult').innerText =`Player O's Turn`
//         currentPlayer = nextPlayer
//         console.log(gameArr)
//         console.log(nextPlayer)
//     } else if (currentPlayer !== 'X' && gameArr[2] === ''){
//         gameArr[2]= 'O'
//         document.getElementById('cell3').innerText = 'O'
//         document.getElementById('gameresult').innerText =`Player X's Turn`
//         currentPlayer = 'X'
//         console.log(gameArr)
//         console.log(currentPlayer)
//     }
// }








































// a varaible that tracks if the game is running or not
// let isRunning = true 

// // Event Listeners
// const cell1 = document.querySelector('#cell1')
//     console.log(cell1)
// const cell2 = document.querySelector('#cell2')
//     console.log(cell2)
// const cell3 = document.querySelector('#cell3')
//     console.log(cell3)
// const cell4 = document.querySelector('#cell4')
//     console.log(cell4)
// const cell5 = document.querySelector('#cell5')
//     console.log(cell5)
// const cell6 = document.querySelector('#cell6')
//     console.log(cell6)
// const cell7 = document.querySelector('#cell7')
//     console.log(cell7)
// const cell8 = document.querySelector('#cell8')
//     console.log(cell8)
// const cell9 = document.querySelector('#cell9')
//     console.log(cell9)

// game Array
// we need to keep track of the gameboard in javascript
    // a way to index squares -- that correlates to the arrays
    // a way to make the x's and o's stick
    // use an array to keep track of the x's and o's on the gameboard
    // (option 1: 1d array) ['x', '', '', '', '', '', '', '', ''] 

// let gameArr = ['','','','','','','','','']


// Winning Combinations
// const winCombinations = [
//     [1,2,3]    
//     [1,4,7]    
//     [1,5,9]    
//     [2,5,8]    
//     [3,6,9]    
//     [3,5,7]    
//     [4,5,6]    
//     [7,8,9]    
// ]

// Event Listeners
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

// cell1.addEventListener('click',playerSelects)
// cell2.addEventListener('click',playerSelects)
// cell3.addEventListener('click',playerSelects)
// cell4.addEventListener('click',playerSelects)
// cell5.addEventListener('click',playerSelects)
// cell6.addEventListener('click',playerSelects)
// cell7.addEventListener('click',playerSelects)
// cell8.addEventListener('click',playerSelects)
// cell9.addEventListener('click',playerSelects)


// function playerSelects() {

//     console.log('x')
// }









































// // function handleClick(e) {
// //     console.log(e.target)
// // }
// // container.addEventListener('click', handleClick) 
 

// // we need to keep track of the gameboard in javascript
// const topLeft = document.getElementById('cell1')
// const topMiddle = document.getElementById('cell2')
// const topRight = document.getElementById('cell3')
// const middleLeft = document.getElementById('cell4')
// const middleMiddle = document.getElementById('cell5')
// const middleRight = document.getElementById('cell6')
// const bottomLeft = document.getElementById('cell7')
// const bottomMiddle = document.getElementById('cell8')
// const bottomeRight = document.getElementById('cell9')

// // a way to index squares -- that correlates to the arrays

// let gameBoard = [
//     topLeft,
//     topMiddle,
//     topRight,
//     middleLeft,
//     middleMiddle,
//     middleRight,
//     bottomLeft,
//     bottomMiddle,
//     bottomeRight
// ]
    
// // a way to make the x's and o's stick
    
// // use an array to keep track of the x's and o's on the gameboard
//     // (option 1: 1d array) ['x', '', '', '', '', '', '', '', ''] 
// let playerMoves = ['','','','','','','','','']    

// // a way to alternate players
//     // a varaible that tracks whose turn it currently is -- this would start off as 'x'
// let currentPlayer= .innter'X'
// // a varaible that tracks if the game is running or not

// let isRunning = true

// // event listeners --clicking on the divs and making the x's or o's appear
// document.querySelector('.cell').addEventListener('click', boxClicked)
// // when a square is clicked, do the following:
// function boxClicked (e){
// // first check if that spot in the array is empty and that isRunning is true, if so, do the following:
//     // if( ?gameBoard.locationclicked? === '' && isRunning === true){
//     // we make an x or o appear -- as simple as setting the inner text    
//     document.getElementById('cell1').innerText = 'X'

//     }
// // }
        
            
//             // check if a win has occured  
//                 // check all 8 win cases for 'x' and for 'o'
//                 // cats games could check if all spaces are filled (verbose) OR
//                 // have a varaible that increments every turn and call a cats game at 9 if no body has won
//                 // if the game is won or a cats game occurs -- set isRunning to false
//                     // other ways to check out that might be good to end the game 
//                     // if game is won -- we could remove the gameboard from the DOM 
//                     // or you could fill up the array spaces
//                     // delete a class to prevent listeners from firing
//             // alternate players if a win did not occur by changing the varaible that tracks whose turn it currently is
//             // increment the turn counter to move closer to the cats condition


//             // const checkSquare1 = () => {
//             //     if (boardArray[0] = "1") {
//             //         document.getElementById('square!').innerText = 'X'
//             //     }   
                    
//             //     } else if (boardArray[0] = "2"){
//             //     document.getElementById('square1').innerText = '0'
//             // }
