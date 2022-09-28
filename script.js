console.log("Test JAvaScript Works!!")

//Notes: organizing my thoughts hehe
//each div should be clickable
//figure out all possiple winning conditions else it's a tie!
//if odd print player turn, if even print player 2 turn
//make a function that  returns true or false if one of the sequres are clicked. then call this function in if else statements ig..
//------------------------------------------------------------------------------------------------------------------------------
//Drafts, maybe i'll use them later!!
// let squares = document.getElementsByClassName('squares')

// //Adding event listener to each sequare!
// for (let i = 0; i < 9; i++) {
    //     squares[i].addEventListener('click', wowfunction)
    // }
     
    // function wowfunction(e){
        
        //         console.log("wow first")
        
        // }
        
//------------------------------------------------------------------------------------------------------------------------------
//1- initilazing the elements/variables:

//This object will keep track of the players and status of the sequares "give them colors"
let colors = {
    square: null, //grey
    player_X: 1, //red
    player_O: -1 //blue
}

//The board will have only 8 winning combinations, 3 rows, 3 columns, and 2 diagonals
let winningComination = [[0,1,2],[3,4,5],[6,7,8],
                        [0,3,6],[1,4,7],[2,5,8],
                        [0,4,8],[2,4,6]]

//a baord that represents the sequares:
let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

//playerTurn--> to keep track of turns either player 1 or 2, winner--> keep track of game status
// let player_X = 1, player_O = -1, tie = "T"
let pleyerTurn = 1
//checks if game is running or not
let winner = null
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


//This loop will assign each sequare the proper functionality
//First, declaring functions to alternate between players turns, then check winne/Tie
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
    }

    // let winnerPlayer = () =>{
    //     if()
    // }



    element.addEventListener('click',currentPlayer)
})







//Who's the winner? 
function winnerPlayer(finalWinner){
    if(finalWinner === 1){
        winner = "Player 'X' is the Winner!"
    }
    else if(finalWinner === -1){
        winner = "Player 'O' is the Winner"
    }
    else if(finalWinner === null) {
        winner = "It is a Tie!"
    }
    return winner
}

//To assign a color(turn) to each sequare based on whoe's the player:
// let asignColorToSequare = assignedBoared.forEach((value, index)=>{

//     if (index ==) {
        
//     }
// })










































































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


    