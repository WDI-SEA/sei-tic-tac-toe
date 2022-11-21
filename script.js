let playerText = document.getElementById("playerText")
let resetButton = document.getElementById("reset")
// let winnerText = document.getElementById("winText")
let cell0 = document.getElementById('0')
let cell1 = document.getElementById('1')
let cell2 = document.getElementById('2')
let cell3 = document.getElementById('3')
let cell4 = document.getElementById('4')
let cell5 = document.getElementById('5')
let cell6 = document.getElementById('6')
let cell7 = document.getElementById('7')
let cell8 = document.getElementById('8')


let cellArray = [
  cell0,
  cell1,
  cell2,
  cell3,
  cell4,
  cell5,
  cell6,
  cell7,
  cell8
]


// console.log(cells)



const O = "O"
const X = "X"

let Player = X


// console.log(spaces)
// let startGame = true

const startGame = () => {
  cellArray.forEach(box => box.addEventListener("click", boxClicked))
  
}
// we need to keep track of the gameboard in javascript
    // a way to index squares -- that correlates to the arrays
    // a way to make the x's and o's stick

function boxClicked(e){
  // console.log(e.target)
  const id = e.target.id
  // console.log("click")
  if(!otherCells[id]){
    otherCells[id] = Player
    e.target.innerText = Player
      if(playerWon() === true){
        playerText = `${Player} n00b`
        let winText = playerWon()

        winnerText.innerText = "player has won"
      console.log(playerWon) 
      // this doesnt worky :(
    }
  // variable = to if statement. equal to x, change to o text, OR ELSE change to o 
    Player = Player === X ? O : X
  }

}
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
         
// function playerWon(){
  
// }
resetButton.addEventListener("click", reset)
function reset() {
 

  cellArray.forEach( box => {
    box.innerText = ""
  })


  
  
}



// this was a HUGE help. cut down all the bs that i was dealing with... 

const winCon = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


let otherCells = Array(9).fill(null)

//caaaaaaaaaaaaaaaaaaats gaaaaaaaaaaaaame ugh 


function playerWon(){
  for (const win of winCon){
  let [a, b, c] = win

  if (otherCells[a] && (otherCells[a] === otherCells [b] && otherCells[a] === otherCells[c])) {
    return [a,b,c]
    }
  }
  return false
} 




// a varaible that tracks if the game is running or not

startGame()














































// old work.. 








// let A1 = document.getElementById('A1')
// let A2 = document.getElementById('A2')
// let A3 = document.getElementById('A3')
// let B1 = document.getElementById('B1')
// let B2 = document.getElementById('B2')
// let B3 = document.getElementById('B3')
// let C1 = document.getElementById('C1')
// let C2 = document.getElementById('C2')
// let C3 = document.getElementById('C3')
// let X = document.getElementById('X')
// let O = document.getElementById('O')
// let reset = document.getElementById('reset')

// let boardArray = [
//     A1,
//     A2,
//     A3,
//     B1,
//     B2,
//     B3,
//     C1,
//     C2,
//     C3,
// ]


// let players = [ "player1" , 'player2']

// A1.addEventListener('click', function(e){
//     console.log('A1')
//   A1.innerText = 'O'
// })
// A2.addEventListener('click', function(e){
//     console.log('A1')
//   A2.innerText = 'O'
// })
// A3.addEventListener('click', function(e){
//     console.log('A1')
//   A3.innerText = 'O'
// })
// B1.addEventListener('click', function(e){
//     console.log('A1')
//   B1.innerText = 'O'
// })
// B2.addEventListener('click', function(e){
//     console.log('A1')
//   B2.innerText = 'O'
// })
// B3.addEventListener('click', function(e){
//     console.log('A1')
//   B3.innerText = 'O'
// })
// C1.addEventListener('click', function(e){
//     console.log('A1')
//   C1.innerText = 'O'
// })
// C2.addEventListener('click', function(e){
//     console.log('A1')
//   C2.innerText = 'O'
// })
// C3.addEventListener('click', function(e){
//     console.log('A1')
//   C3.innerText = 'O'
// })


// A1.addEventListener('click', function(e){
//     console.log('A1')
//   A1.innerText = 'X'
// })

// A2.addEventListener('click', function(e){
//     console.log('A2')
//     A2.innerText='x'
// })
// A3.addEventListener('click', function(e){
//     console.log('A3')
//     A3.innerText='x'
// })
// B1.addEventListener('click', function(e){
//     console.log('B1')
//     B1.innerText='x'
// })
// B2.addEventListener('click', function(e){
//     console.log('B2')
//     B2.innerText='x'
// })
// B3.addEventListener('click', function(e){
//     console.log('B3')
//     B3.innerText='x'
// })
// C1.addEventListener('click', function(e){
//     console.log('C1')
//     C1.innerText='x'
// })
// C2.addEventListener('click', function(e){
//     console.log('C2')
//     C2.innerText='x'
// })
// C3.addEventListener('click', function(e){
//     console.log('C3')
//     C3.innerText='x'
// })


