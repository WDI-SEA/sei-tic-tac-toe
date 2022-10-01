//------------------------------------------------------------------------------------------------------------------------------
//1- initilazing the elements/variables:

//The board will have only 8 winning combinations, 3 rows, 3 columns, and 2 diagonals
let winningCombination = [[0,1,2],[3,4,5],[6,7,8],
                        [0,3,6],[1,4,7],[2,5,8],
                        [0,4,8],[2,4,6]]

//a baord that represents the sequares:
let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

//playerTurn--> to keep track of turns either player 1 or 2
// let player_X = 1, player_O = -1
let pleyerTurn = 1
//To keep track of how many sequares are clicked:
let sequareClicked = 0
//checks if game is running or not
let statusOfGame = 'false'

//grabbing all the sequares from the html
let square1 = document.getElementById('square1')
let square2 = document.getElementById('square2')
let square3 = document.getElementById('square3')
let square4 = document.getElementById('square4')
let square5 = document.getElementById('square5')
let square6 = document.getElementById('square6')
let square7 = document.getElementById('square7')
let square8 = document.getElementById('square8')
let square9 = document.getElementById('square9')

//grabbing the game status text, it will keep track of the players and winners etc..
let gameStatus = document.getElementById("game-status")

//grabbing the restart button
let restartBtn = document.getElementById("restartBtn")


//assign each sequare to the empty board array:
let assignedBoared = board.map((tile, index)=>{
    if(index === 0){
        tile = square1
    }
    else if(index === 1){
        tile = square2
    }
    else if(index === 2){
        tile = square3
    }
    else if(index === 3){
        tile = square4
    }
    else if(index === 4){
        tile = square5
    }
    else if(index === 5){
        tile = square6
    }
    else if(index === 6){
        tile = square7
    }
    else if(index === 7){
        tile = square8
    }
    else if(index === 8){
        tile = square9
    }
    return tile
})


//Add the restart button functionality
function restartGame(){
    board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    assignedBoared.forEach((tile) => {
    function restart(){

        tile.innerText=''
        
    }

    restartBtn.addEventListener('click',restart)
})
}


//This loop will assign each sequare the proper functionality
//First, declaring functions to alternate between players turns, then check winner/Tie

 assignedBoared.forEach((element) => {

    //declaring functions:
    //Who's turn is now?
    let currentPlayer = () =>{
        if(pleyerTurn === 1){
            pleyerTurn = -1
            element.style = "color: #ADFF2F"
            element.innerText = 'X'
            gameStatus.style = "color: #FF1493"
            gameStatus.innerText = "Turn: Player O"
            element.style.pointerEvents = 'none' //To disable clicking on the same box twice!

        }
        else{
            pleyerTurn = 1
            element.style = "color: #FF1493"
            element.innerText = 'O'
            gameStatus.style = "color: #ADFF2F" 
            gameStatus.innerText = "Turn: Player X"
            element.style.pointerEvents = 'none'
        }
         sequareClicked++
         gameIsTie() //call this function to check if there is a tie 
         winnerPlayer()// call this function to check the winner
         restartGame()//To restart the game
         
         
    }
 

    element.addEventListener('click',currentPlayer)
})


 //is game tied?
 function gameIsTie() {
    if(sequareClicked === 9){
    gameStatus.style = "color: yellow" 
    gameStatus.innerText = "It is a Tie! Wanna play again?"
    console.log("game is Tied!")
    }
}

//Who's the winner? 
//for loop to go through all winning combination, it will store the value of the winning combination in an array
let finalWinner 
function winnerPlayer(){
 for (let i of winningCombination) {
    let [element1, element2, element3] = [assignedBoared[i[0]].innerText,
                                          assignedBoared[i[1]].innerText, 
                                          assignedBoared[i[2]].innerText]

    if(element1 !='' && element2 !='' && element3 !='' ){
        if(element1 ==  element2  && element2 == element3){
            gameStatus.style = "color: yellow" 
            gameStatus.innerText = `The winner is Player ${element1} Congrats!`
            console.log(`The winner is Player ${element1}! Congrats!`)
            assignedBoared.forEach((tile) => {
                    tile.style.pointerEvents = 'none' 
            })
        }
    }
 }
}



//Disable the rest of the tiles when someone win!






































































// ----------------------------------------------------------------------------------------------------------------------------
// //1- getting the necessary elements: 
// //Use method Array.form to turn it into an array!
// let allSequares = Array.from(document.querySelectorAll('.squares'))
// //The restart button:
// let restBtn = document.getElementById('restartBtn')


// //2- Add event listenrs:
// //for loop to add event listener to every sequare in the array:
// //if even then player one turn, if odd player 2 turn
// for (let i = 0; i < allSequares.length; i++) {
//     if (i % 2 == 0) {
//         //player one
//         allSequares[i].addEventListener('click', player_X)
//     }
//     else{
//         //Player two
//         allSequares[i].addEventListener('click', player_O)

//     }
// }

// restBtn.addEventListener('click', resetButton)


// // For alternating between turns:
// // Creating two varibales to track who's turn it is:
// const xTurn = 'X'
// const oTurn = 'O'
// let playerTurn = xTurn

// function player_Turn(e) {

   
//     if ( e.target === square1) {
//         console.log('test test')
//     }
    
// }

// square1.addEventListener('click', player_Turn)







// //Test function 
// function player_X(e){

//     for (let i = 0; i <allSequares.length; i++) {
//         if(e.target.id === allSequares[i].id){
//             //Creating X text:
//             let X = document.createElement('h1')
//             X.innerText = 'X'
//             let tiles = allSequares[i].id
//             console.log(tiles)
//             e.target.appendChild(X)
//         }
//     }

//  }

// function player_O(e){

//     for (let i = 0; i <allSequares.length; i++) {
//         if(e.target.id === allSequares[i].id){
//             //Creating O text:
//             let O = document.createElement('h1')
//             O.innerText = 'O'
//             let tiles = allSequares[i].id
//             console.log(tiles)
//             e.target.appendChild(O)
//         }
//     }

// }


// //function to clear the tiles "sequares":
//     function resetButton(){
//     for (let i = 0; i <allSequares.length; i++) {
//         let tiles = allSequares[i]
//         tiles.innerHTML = " ";
//     }
//     }