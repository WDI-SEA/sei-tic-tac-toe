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

let currentPlayer = "X";
let gameboard = ["","","","","","","","",""];
let gameCounter = 0;

function gameOver() {
    alert("Game Over!!!!!");
}

const button = document.querySelector("#r");

button.onclick = function reset() {
    gameboard = ["","","","","","","","",""];
};

for (let i = 0; i < 9; i++) {
    document.querySelector("#s" + i).onclick = () => {
        if (gameboard[i] == "") {
            gameboard[i] = currentPlayer;
            document.getElementById("s" + i).innerText = currentPlayer;
            if (currentPlayer == "X") {
                currentPlayer = "O"
            } else {
                currentPlayer = "X"
            }
            gameCounter++;
            if (gameCounter == 9) {
                gameOver();
            }
        }
    }
}

