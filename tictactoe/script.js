
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




let resetButton = document.querySelector('resetButton');
let board = ['','','','','','','','','']
let currentPlayer ='X';

function checkForWinner() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
}

function pickThePlayer(){
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}


function clearBoard(){
    for (let i=0; i < 9; i++){
        //goes through all the spots and selects them       
    let spot = document.querySelector(`#spot${i+1}`);
    //clear array
    board[i] ='';
    console.log(board);
    //clear board
    spot.innerText = '';
    console.log(spot.innerText);
    //bring it back to original player
    currentPlayer='X';
    }
}

//iterates the array as there are 9 spots it counts up til 8
for (let i = 0; i < 9; i++) {
    //goes through all the spots and adds them to the function
    let spot = document.querySelector(`#spot${i+1}`);
    //adds on click event to all the spots
    spot.addEventListener('click', function() {
        //if the spot is empty on click
      if (board[i] === '') {
        //changes the array
        board[i] = currentPlayer;
        //change it to the current player symbol
        spot.innerText = currentPlayer;
        //executed with the players symbol
        pickThePlayer();
        console.log(board);
      }
    });
  }


