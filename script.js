// APP STATE (variables)
    // a variable to track whose turn it is
    let playerTurn = 1

    // a var for 'x' and a var for 'o'
    const x = "X";
    const o = "O";
    let score = ["", "", "", "", "", "", "", "", ""];
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

    // function clickedSquare(turn,squareClicked)

    //FUNCTIONS CATALOGUE 

    //function to change to next player's turn
    function changePlayerTurn() {
        playerTurn++
    }

    // function to add choice to score array
    function selectionToScoreArray(arrayIndex, selection) {
        score.splice(arrayIndex,0,selection)
        console.log(score)
    }

    // function to check to see if game is over
        function isGameOver () {
            if 
        }
    // function to throw out output to message board

    //
 
    let whatsUp = 'square1';
    console.log(playerTurn)

    //EVENT LISTENERS
    //Square1 event listener
    square1.addEventListener("click", function(e) {
        if (playerTurn % 2 === 0) {
                square1.innerText = o
        } else (square1.innerText = x)
        // console.log(playerTurn)
        arrayIndexPlace = 0
        selectionToScoreArray(arrayIndexPlace,square1.innerText)
        changePlayerTurn()
        console.log(playerTurn)
    })
    //square2 event listener function
    square2.addEventListener("click", function(e) {
        if (playerTurn % 2 === 0) {
                square2.innerText = o
        } else (square2.innerText = x)
        changePlayerTurn()
        // console.log(playerTurn)
        arrayIndexPlace = 1
        selectionToScoreArray(arrayIndexPlace,square2.innerText)
        console.log(playerTurn)
    })
    
    
    
    // a var to keep count of moves to detect cats/draw game
    let g
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