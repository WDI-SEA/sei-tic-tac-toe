
// script.js

// APP STATE (varaibles)
    // players choices (a vritual representation of the gameboard)
        // use an array (1d array approach) ['x', '', '', '', '', '', '', 'o', '']
        // 2d array approach
        // [
        //     ['x', '', ''],
        //     ['', '', ''],
        //     ['', 'o', '']
        // ]
    // whose turn it is (is it x or o)
    // a boolean value that tells you if the game is currently running
    // (optional) a turn counter that is used to detect cats games when it reaches 9
    // (bonus) -- how many times each player has won

// EVENT LISTENERS
    // a click on the reset button
    // event listener for when you click on the gameboard
        // when a square is clicked we should do the following:
        // set the innertext of the square that got clicked on of whose turn it currently it
        // prevent repeat clicks -- check the gameboard array or check the innertext
        // set the move into the gameboard array 
        // check if there is a winner
            // if someone has won, end the game and updated the message for who has won
                // think about all the conditions to win the game and check for all of them
            // check for cats game
                // if every square is an x or an o and no one has won   
                // or count turns    
            // if no one has won, let gameplay continue (switch turns)

let table = document.querySelector('table');
let xScore = document.querySelector('#scoreX');
let oScore = document.querySelector('#scoreO');
let winner = document.querySelector('#winnerAnnouncement');
let textP = document.querySelector('#currPlayer');
let resetButton = document.querySelector('#resetButton');
let board = ['','','','','','','','','']
let currentPlayer ='X';
let gameFinished = false;
let filledSpots = 0;
// let mySpan = document.querySelector('.spanner');
xScoreCount = 0;
oScoreCount = 0;
textP.innerHTML = 'Current Player: X';


function pickThePlayer(){
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    textP.innerText = `Current Player: ${currentPlayer}`;
    
}
    function checkForWinner(player){
    if(board[0] == player && board[1] == player && board[2] == player){
    return true;
    
        }else if(board[3] == player && board[4] == player && board[5] == player){
            return true;
        }else if(board[6] == player && board[7] == player && board[8] == player){
            return true;
        }else if(board[0] == player && board[3] == player && board[6] == player){
            return true;
        }else if(board[1] == player && board[4] == player && board[7] == player){
            return true;
        }else if(board[2] == player && board[5] == player && board[8] == player){
            return true;
        }else if(board[0] == player && board[4] == player && board[8] == player){
            return true;
        }else if(board[2] == player && board[4] == player && board[6] == player){
            return true;
    }

    }
    



function clearBoard(){
    for (let i=0; i < 9; i++){
        //goes through all the spots and selects them    
    gameFinished = false;
    let spot = document.querySelector(`#spot${i+1}`);
    //clear array
    board[i] ='';
    console.log(board);
    //clear board
    spot.innerText = '';
    console.log(spot.innerText);
    //bring it back to original player
    currentPlayer='X';
    textP.innerHTML = 'Current Player: X';
    winner.innerHTML = "";   
    filledSpots = 0; 
    }
}

//iterates the array as there are 9 spots it counts up til 8
for (let i = 0; i < 9; i++) {
    //goes through all the spots and adds them to the function
    let spot = document.querySelector(`#spot${i+1}`);
    //adds on click event to all the spots
    spot.addEventListener('click', function clickHandler() {
        //if the spot is empty on click
        console.log(gameFinished);
        if(gameFinished){
            return;
        };
      if (board[i] === '') {
        //changes the array
        board[i] = currentPlayer;
        //change it to the current player symbol
        spot.innerText = currentPlayer;
        //this is to check for a tie
        filledSpots++;
        //executed with the players symbol
        pickThePlayer();
        console.log(board);
        
        if(checkForWinner('X')){
            gameFinished = true;
            winner.innerText = "THE X PLAYER HAS WON THIS ROUND!";
            // mySpan.classList.add('.recolor');
            xScore.innerHTML = `Player <span style="color: red">X</span>: ${++xScoreCount}`;
        }
    
        if(checkForWinner('O')){
            gameFinished = true;
            winner.innerText = "THE O PLAYER HAS WON THIS ROUND!";
            oScore.innerHTML = `Player <span style="color: red">O</span>: ${++oScoreCount}`;
            // mySpan.classList.add('.recolor');

        }
        if(filledSpots === 9 && !gameFinished){
            gameFinished = true;
            winner.innerText = "ITS A TIE!";

        }
      }
    });

  }


