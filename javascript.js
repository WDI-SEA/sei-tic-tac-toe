// HTML Element store them in var & define 
const playerUpdate = document.querySelector(".playerTurn")
const resultUpdate = document.querySelector(".results")
const reset = document.querySelector(".reset").addEventListener('click', clearGame)

const cells = document.querySelectorAll(".box")

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// All possible winning conditions has been put into an array
 
let boardLayout = [
    '','','',
    '','','',
    '','',''
]
// Empty board

const players = { one: "X" , two: "O"}; // Define the players in an object

let turns = true // taking turns (true means player 1 goes first)


// if finished = true a win condition is met
// players are not longer allowed to play X or O
let finished = false  


// players taking turn
cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (cell.innerText === "X" || cell.innerText === "O" || finished === true) {
            return    //return to exit the function if "X" or "O" is present in a cell
        }
        if (turns === true)  {
            boardLayout[cell.id] = players.one
            turns = false
            cell.innerText = players.one
            resultUpdate.innerText = "Player 2's turn!"
        } else {
            boardLayout[cell.id] = players.two
            turns = true
            cell.innerText = players.two
            resultUpdate.innerText = "Player 1's turn!"
        } 
        winCondition()
        tieCondition()
    })
})


// define that counter is 1
let counter = 1
function tieCondition () {
    // if counter equals to 9 and no win condition is found
    // then split out It is a tie and end the game
   if (counter == 9 && finished === false){
       resultUpdate.innerText = "It is a tie!"
       finished = true
    // if the top statement is not true then keep adding
   } else {
       counter ++
   }
}


// Win Conditions
function winCondition () {
    for (let i = 0; i < winConditions.length; i++) {
        let winPattern = winConditions[i] //
        let leftCell = winPattern[0] // grab the leftCell of the board
        let middleCell = winPattern[1] //grab the middleCell of the board
        let rightCell = winPattern[2] //grab the rightCell of the board
        // grabs each rows and check in the boardLayout[i] if those values are present, if they are present run the next if statement
        if (boardLayout[leftCell] != ""  && boardLayout[middleCell] != "" && boardLayout[rightCell] != ""){
            if (boardLayout[leftCell] == boardLayout[middleCell] && boardLayout[middleCell] == boardLayout[rightCell]) { // if all cells have the same value (X or O)
                finished = true // finishes the game and prevents players from adding more O & X
                if (boardLayout[leftCell] == players.one) {
                    resultUpdate.innerText = "Player 1 is the winner!"
                } else {
                    resultUpdate.innerText = "Player 2 is the winner!"
                    }
                }
            }     
         } 
    }


// Reset Function
function clearGame () {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "" // Resets the board by making it into an empty array
        resultUpdate.innerText = "" // Clears the results
        playerUpdate.innerText = "Player 1's turn!" // Player 1's turn is printed when reset button is pressed
        finished = false // Game is not finished b/c a win condition is not met
        
        // Boardlayout becomes empty once a reset button is pressed
        boardLayout = [ 
            '','','',
            '','','',
            '','',''
        ] 
        counter = 1 // Counter is reset to 1 for the tie function (line 61)
    }
}