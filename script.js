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
//adding event listener to the sequares
// square1.addEventListener('click',  player_X)
// square2.addEventListener('click',  player_X)
// square3.addEventListener('click',  player_X)
// square4.addEventListener('click',  player_X)
// square5.addEventListener('click',  player_X)
// square6.addEventListener('click',  player_X)
// square7.addEventListener('click',  player_X)
// square8.addEventListener('click',  player_X)
// square9.addEventListener('click',  player_X)
//------------------------------------------------------------------------------------------------------------------------------
//1- initilazing the constants/variables:

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
let player_X = 1, player_O = -1, tie = "T"
let pleyerTurn = player_X
let winner = tie

//calling all the sequares from the html
let square1 = document.getElementById('square1')
let square2 = document.getElementById('square2')
let square3 = document.getElementById('square3')
let square4 = document.getElementById('square4')
let square5 = document.getElementById('square5')
let square6 = document.getElementById('square6')
let square7 = document.getElementById('square7')
let square8 = document.getElementById('square8')
let square9 = document.getElementById('square9')

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

console.log(assignedBoared)

//Who's turn is now?
    function currentPlayer(player){
        if(player === 1){
            return "Player 'X'"
        }
        else if(player === -1){
            return "Player 'O'"
        }
    }

    // console.log(currentPlayer(pleyerTurn))


//Who's the winner? 
function winnerPlayer(finalWinner){
    if(finalWinner === 1){
        winner = "Player 'X' is the Winner!"
    }
    else if(finalWinner === -1){
        winner = "Player 'O' is the Winner"
    }
    else if(finalWinner === null) {
        winner = "T"
    }
    return winner
}

assignedBoared










































































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


    