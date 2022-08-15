// APP STATE (variables)
    // a variable to track whose turn it is
    let playerTurn = 1

    // a var for 'x' and a var for 'o'
    const x = "X";
    const o = "O";
    let score = ["1", "2", "3", "4", "empty5", "empty6", "empty7", "empty8", "empty9"];
    let arrayIndexPlace = 1;

    //defining all square elements
    const square1 = document.getElementById("square1")
    const square2 = document.getElementById("square2")
    const square3 = document.getElementById("square3")
    const square4 = document.getElementById("square4")
    const square5 = document.getElementById("square5")
    const square6 = document.getElementById("square6")
    const square7 = document.getElementById("square7")
    const square8 = document.getElementById("square8")
    const square9 = document.getElementById("square9")

   // define output message board and reset button
   const messageBoard = document.getElementById("message-board")
   const resetButton = document.getElementById('reset-button')


   // Starting message board text
   messageBoard.innerText = "Player 1, you are X's and you go first.  Click on the square to select your move."
    //FUNCTIONS CATALOGUE 

    //function to change to next player's turn
    function changePlayerTurn() {
        playerTurn++
    }

    // function to add choice to score array
    function selectionToScoreArray(arrayIndex, selection) {
        score.splice(arrayIndex,1,selection)
        console.log(score)
        console.log(score[0] === score[1] && score[0] === score[2])
    }

    // function to check to see if game is over
        function isGameOver () {
            if (playerTurn >=5) {
                if (score[0] === score[1] && score[0] === score[2] ||
                    score[3] === score[4] && score[3] === score[5] ||
                    score[6] === score[7] && score[6] === score[8] ||
                    score[0] === score[3] && score[0] === score[6] ||
                    score[1] === score[4] && score[1] === score[7] ||
                    score[2] === score[5] && score[2] === score[8] ||
                    score[0] === score[4] && score[0] === score[8] ||
                    score[2] === score[4] && score[2] === score[6] 
                    ) // THERE'S A WINNER!
                    { winnerMessage()
                        console.log('there\'s a winner');
                        console.log[score]
                } else if (playerTurn === 9) {
                        tieMessage()
                } else {
                    changePlayerTurn(); 
                    console.log(playerTurn);
                    nextTurn();
                }
            } else {
                changePlayerTurn(); 
                console.log(playerTurn);
                nextTurn();
            }
        }
    // function to throw out winning message to message board
        function winnerMessage() {
            if (playerTurn % 2 === 0) {
                messageBoard.innerText = "TIC TAC TOE, THREE IN A ROW! PLAYER 2 WINS!"
            } else {
                messageBoard.innerText = "TIC TAC TOE, THREE IN A ROW! PLAYER 1 WINS!"
            }
        }
    // function - message to change player turn
    function nextTurn () {
        if (playerTurn % 2 === 0) {
            messageBoard.innerText = "Player 2, take your turn."
        } else {
            messageBoard.innerText = "Player 1, take your turn."
        }
    }

    // function to throw out cat's game message to message board
    function tieMessage() {
        messageBoard.innerText = "'Game over! It\'s a cat\'s game!'"
    }
    
    // function to run with event listener
    function gamePlayFunction (squareIdentifier) {
        // square 1
        if (squareIdentifier === 'square1') {
            if (playerTurn % 2 === 0) {
                square1.innerText = o
            } else {square1.innerText = x}
            arrayIndexPlace = 0;
            selectionToScoreArray(arrayIndexPlace, square1.innerText);
            console.log(playerTurn)
        } // square 2 
        else if(squareIdentifier === 'square2') {
            if (playerTurn % 2 === 0) {
                square2.innerText = o
            } else {square2.innerText = x}
            arrayIndexPlace = 1;
            selectionToScoreArray(arrayIndexPlace, square2.innerText);
            console.log(playerTurn)
            
        } // square 3
        else if(squareIdentifier === 'square3') {
            if (playerTurn % 2 === 0) {
                square3.innerText = o
            } else {square3.innerText = x}
            arrayIndexPlace = 2;
            selectionToScoreArray(arrayIndexPlace, square3.innerText);
            console.log(playerTurn)
        } // square 4
        else if (squareIdentifier === 'square4' ) {
                if (playerTurn % 2 === 0) {
                    square4.innerText = o
                } else {square4.innerText = x}
                arrayIndexPlace = 3;
                selectionToScoreArray(arrayIndexPlace, square4.innerText);
                console.log(playerTurn) 
                
            } // square 5
            else if (squareIdentifier === 'square5' ) {
                    if (playerTurn % 2 === 0) {
                        square5.innerText = o
                    } else {square5.innerText = x}
                    arrayIndexPlace = 4;
                    selectionToScoreArray(arrayIndexPlace, square5.innerText);
                    console.log(playerTurn) 
                } // square 6
            else if (squareIdentifier === 'square6' ) {
                    if (playerTurn % 2 === 0) {
                        square6.innerText = o
                    } else {square6.innerText = x}
                    arrayIndexPlace = 5;
                    selectionToScoreArray(arrayIndexPlace, square6.innerText);
                    console.log(playerTurn) 
                } //square 7
            else if (squareIdentifier === 'square7' ) {
                    if (playerTurn % 2 === 0) {
                        square7.innerText = o
                    } else {square7.innerText = x}
                    arrayIndexPlace = 6;
                    selectionToScoreArray(arrayIndexPlace, square7.innerText);
                    console.log(playerTurn) 
                } // square 8
            else if (squareIdentifier === 'square8' ) {
                    if (playerTurn % 2 === 0) {
                        square8.innerText = o
                    } else {square8.innerText = x}
                    arrayIndexPlace = 7;
                    selectionToScoreArray(arrayIndexPlace, square8.innerText);
                    console.log(playerTurn) 
                } // square 9
            else if (squareIdentifier === 'square9' ) {
                    if (playerTurn % 2 === 0) {
                        square9.innerText = o
                    } else {square9.innerText = x}
                    arrayIndexPlace = 8;
                    selectionToScoreArray(arrayIndexPlace, square9.innerText);
                    console.log(playerTurn) 
                }
    isGameOver();
    
    }



    //EVENT LISTENERS
    //Square1 event listener
    square1.addEventListener("click", function(e) {
        gamePlayFunction('square1');
    })



    //trying out some event listener removal code
    // square1.removeEventListener("click",function(e) {
    //     gamePlayFunction('square1');
    // }, true)

    function turnOffEvent() {
        square1.removeEventListener('click', function(e) {
            gamePlayFunction('square1');
        },)
    }

    // square 2
    square2.addEventListener("click", gamePlayFunction('square2'))

    // square 3
    square3.addEventListener("click", function(e) {
        gamePlayFunction('square3');
    }, {once: true})
    // square 4
    square4.addEventListener("click", function(e) {
        gamePlayFunction('square4');
    }, {once: true})
    // square 5
    square5.addEventListener("click", function(e) {
        gamePlayFunction('square5');
    }, {once: true})
    // square 6
    square6.addEventListener("click", function(e) {
        gamePlayFunction('square6');
    }, {once: true})
    // square 7
    square7.addEventListener("click", function(e) {
        gamePlayFunction('square7');
    }, {once: true})
    // square 8
    square8.addEventListener("click", function(e) {
        gamePlayFunction('square8');
    }, {once: true})
    // square 9
    square9.addEventListener("click", function(e) {
        gamePlayFunction('square9');
    }, {once: true})
    // if (playerTurn % 2 === 0) {
    //         square1.innerText = o
    // } else (square1.innerText = x)
    // // console.log(playerTurn)
    // isGameOver();
    // nextTurn();
    //square2 event listener function

    // function to reset board with reset button
    resetButton.addEventListener("click", function (e) {
        score.splice(0,9,1,2,3,4,5,6,7,8,9)
        console.log(score)
        square1.innerText = ""
        square2.innerText = ""
        square3.innerText = ""
        square4.innerText = ""
        square5.innerText = ""
        square6.innerText = ""
        square7.innerText = ""
        square8.innerText = ""
        square9.innerText = ""
    })
    

    // a var to keep count of moves to detect cats/draw game
    
    // gameBoard array to keep track of player moves ['x', '', 'o', 'x', '', 'o', 'x', '', '']
        // 2d array
        // [
        //     ['x', '', 'o'],
        //     ['x', 'o', ''],
        //     ['x', '', 'o']
        // ]
    // a boolean for if the game is over or not -- is the game currently happening?


// EVENT LISTENERS
    // click event listener(s) for player clicks
        // change innertext of div to X or O
        // store the player's move in the gameBoard array
        // change to the next player's turn
        // check for a win -- calling a win condition function/doing all the win logic
    // click event to clear/reset the board

// some way to tell if a player has already clicked on a square
// win/tie game logic in functions
    // option: detect a win using conditionals and comparisions 
    // option hard mode: store all winning conditions and use loops to compare them to the gameBoard array
        // if the game is won, display the winner and prevent the users from clicking more
        // if it is a cats game, display that and prevent clicks

        //need to write function to make sure no one can click it again!!!!!!!!!
        //NEED TO WRITE CODE TO END GAME ONCE GAME IS OVER