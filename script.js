// APP STATE (variables)
    // a variable to track whose turn it is
    // a var for 'x' and a var for 'o'
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


// sets turn to beginning
let turn = 0;

h2.innerHTML = "Player 1's turn";

// creates array that reflects the gameboard
let testArray = ['', '', '', 
                '', '', '',
                '', '', ''];

// creates variables to grab gameboard elements
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");

// gets grid container class
let g = document.getElementsByClassName("grid");

// keeps track of score
let h3P1streak = 0;
let h3P2streak = 0;

// grid container event listener
g[0].addEventListener('click', function(e) {
    // cat game logic to prevent another click
    if(turn === 9) {
        h2.innerHTML = "&#x1F431";
        return;
    }

    // reset everything button
    button1.addEventListener("click", function(e) {
        one.innerHTML = "";
        two.innerHTML = "";
        three.innerHTML = "";
        four.innerHTML = "";
        five.innerHTML = "";
        six.innerHTML = "";
        seven.innerHTML = "";
        eight.innerHTML = "";
        nine.innerHTML = "";
        testArray = ['', '', '', '', '', '', '', '', ''];
        turn = 0;
        h2.innerHTML = "Player 1's turn";
        h3P1streak = 0;
        h3P2streak = 0;
        h3P1.innerHTML = 0;
        h3P2.innerHTML = 0;
    })

    // Play again button. Similar to reset all but keeps score
    button2.addEventListener('click', function(e) {
        one.innerHTML = "";
        two.innerHTML = "";
        three.innerHTML = "";
        four.innerHTML = "";
        five.innerHTML = "";
        six.innerHTML = "";
        seven.innerHTML = "";
        eight.innerHTML = "";
        nine.innerHTML = "";
        testArray = ['', '', '', '', '', '', '', '', ''];
        turn = 0;
        h2.innerHTML = "Player 1's turn";
    })

    

    // Player 1 win conditions
    if(testArray[0] === "X" && ((testArray[1] === "X" && testArray[2] === "X") || 
                                (testArray[4] === "X" && testArray[8] === "X") || 
                                (testArray[3] === "X" && testArray[6] === "X")) ) {
        h2.innerHTML = "Player 1 wins!";
        return;
    }
    if(testArray[4] === "X" && ((testArray[1] === "X" && testArray[7] === "X") ||
                                (testArray[3] === "X" && testArray[5] === "X") || 
                                (testArray[2] === "X" && testArray[6] === "X")) ) {
        h2.innerHTML = "Player 1 wins!";
        return;
    }
    if(testArray[8] === "X" && ((testArray[6] === "X" && testArray[7] === "X") ||
                                (testArray[2] === "X" && testArray[5] === "X")) ) {
        h2.innerHTML = "Player 1 wins!";
        return;
    }
        
    if(testArray[0] === "O" && ((testArray[1] === "O" && testArray[2] === "O") || 
                                (testArray[4] === "O" && testArray[8] === "O") || 
                                (testArray[3] === "O" && testArray[6] === "O")) ) {
        h2.innerHTML = "Player 2 wins!";
        return;
    }
    if(testArray[4] === "O" && ((testArray[1] === "O" && testArray[7] === "O") ||
                                (testArray[3] === "O" && testArray[5] === "O") || 
                                (testArray[2] === "O" && testArray[6] === "O")) ) {
        h2.innerHTML = "Player 2 wins!";
        return;
    }
    if(testArray[8] === "O" && ((testArray[6] === "O" && testArray[7] === "O") ||
                                (testArray[2] === "O" && testArray[5] === "O")) ) {
        h2.innerHTML = "Player 2 wins!";
        return;
    }

    // grid containers' click boxes
    if(one.contains(e.target)){
        // prevents the game from going on any further
        if(turn >= 9 || one.innerHTML === "X" || one.innerHTML === "O"){
            return;
        }
        // if the turn is even, it's player 1's turn
        if(turn % 2 === 0) {
            one.innerHTML = "X";
            testArray[0] = "X";
            turn++;
            h2.innerHTML = "Player 2's turn";
        // if the turn is odd it's player 2's turn
        } else {
            one.innerHTML = "O";
            testArray[0] = "O";
            turn++;
            h2.innerHTML = "Player 1's turn";
        }
    }

    if(two.contains(e.target)){
        if(turn >= 9 || two.innerHTML === "X" || two.innerHTML === "O"){
            return;
        }
        if(turn % 2 === 0) {
            two.innerHTML = "X";
            testArray[1] = "X";
            turn++;
            h2.innerHTML = "Player 2's turn";
        } else {
            two.innerHTML = "O";
            testArray[1] = "O";
            turn++;
            h2.innerHTML = "Player 1's turn";
        }
    }

    if(three.contains(e.target)){
        if(turn >= 9 || three.innerHTML === "X" || three.innerHTML === "O"){
            return;
        }
        if(turn % 2 === 0) {
            three.innerHTML = "X";
            testArray[2] = "X";
            turn++;
            h2.innerHTML = "Player 2's turn";
        } else {
            three.innerHTML = "O";
            testArray[2] = "O";
            turn++;
            h2.innerHTML = "Player 1's turn";
        }
    }

    if(four.contains(e.target)){
        if(turn >= 9 || four.innerHTML === "X" || four.innerHTML === "O"){
            return;
        }
        if(turn % 2 === 0) {
            four.innerHTML = "X";
            testArray[3] = "X";
            turn++;
            h2.innerHTML = "Player 2's turn";
        } else {
            four.innerHTML = "O";
            testArray[3] = "O";
            turn++;
            h2.innerHTML = "Player 1's turn";
        }
    }

    if(five.contains(e.target)){
        if(turn >= 9 || five.innerHTML === "X" || five.innerHTML === "O"){
            return;
        }
        if(turn % 2 === 0) {
            five.innerHTML = "X";
            testArray[4] = "X";
            turn++;
            h2.innerHTML = "Player 2's turn";
        } else {
            five.innerHTML = "O";
            testArray[4] = "O";
            turn++;
            h2.innerHTML = "Player 1's turn";
        }
    }

    if(six.contains(e.target)){
        if(turn >= 9 || six.innerHTML === "X" || six.innerHTML === "O"){
            return;
        }
        if(turn % 2 === 0) {
            six.innerHTML = "X";
            testArray[5] = "X";
            turn++;
            h2.innerHTML = "Player 2's turn";
        } else {
            six.innerHTML = "O";
            testArray[5] = "O";
            turn++;
            h2.innerHTML = "Player 1's turn";
        }
    }

    if(seven.contains(e.target)){
        if(turn >= 9 || seven.innerHTML === "X" || seven.innerHTML === "O"){
            return;
        }
        if(turn % 2 === 0) {
            seven.innerHTML = "X";
            testArray[6] = "X";
            turn++;
            h2.innerHTML = "Player 2's turn";
        } else {
            seven.innerHTML = "O";
            testArray[6] = "O";
            turn++;
            h2.innerHTML = "Player 1's turn";
        }
    }

    if(eight.contains(e.target)){
        if(turn >= 9 || eight.innerHTML === "X" || eight.innerHTML === "O"){
            return;
        }
        if(turn % 2 === 0) {
            eight.innerHTML = "X";
            testArray[7] = "X";
            turn++;
            h2.innerHTML = "Player 2's turn";
        } else {
            eight.innerHTML = "O";
            testArray[7] = "O";
            turn++;
            h2.innerHTML = "Player 1's turn";
        }
    }

    if(nine.contains(e.target)){
        if(turn >= 9 || nine.innerHTML === "X" || nine.innerHTML === "O"){
            return;
        }
        if(turn % 2 === 0) {
            nine.innerHTML = "X";
            testArray[8] = "X";
            turn++;
            h2.innerHTML = "Player 2's turn";
        } else {
            nine.innerHTML = "O";
            testArray[8] = "O";
            turn++;
            h2.innerHTML = "Player 1's turn";
        }
    }

    // Player win conditions again to prevent having to click to see who won
    if(testArray[0] === "X" && ((testArray[1] === "X" && testArray[2] === "X") || 
                                (testArray[4] === "X" && testArray[8] === "X") || 
                                (testArray[3] === "X" && testArray[6] === "X")) ) {
        h2.innerHTML = "Player 1 wins!";
        // adds to winstreak for player 1
        h3P1streak++;
        h3P1.innerHTML = h3P1streak;
        return;
    }
    if(testArray[4] === "X" && ((testArray[1] === "X" && testArray[7] === "X") ||
                                (testArray[3] === "X" && testArray[5] === "X") || 
                                (testArray[2] === "X" && testArray[6] === "X")) ) {
        h2.innerHTML = "Player 1 wins!";
        h3P1streak++;
        h3P1.innerHTML = h3P1streak;
        return;
    }
    if(testArray[8] === "X" && ((testArray[6] === "X" && testArray[7] === "X") ||
                                (testArray[2] === "X" && testArray[5] === "X")) ) {
        h2.innerHTML = "Player 1 wins!";
        h3P1streak++;
        h3P1.innerHTML = h3P1streak;
        return;
    }
      
    if(testArray[0] === "O" && ((testArray[1] === "O" && testArray[2] === "O") || 
                                (testArray[4] === "O" && testArray[8] === "O") || 
                                (testArray[3] === "O" && testArray[6] === "O")) ) {
        // adds to winstreak for player 2
        h2.innerHTML = "Player 2 wins!";
        h3P2streak++;
        h3P2.innerHTML = h3P2streak;
        return;
    }
    if(testArray[4] === "O" && ((testArray[1] === "O" && testArray[7] === "O") ||
                                (testArray[3] === "O" && testArray[5] === "O") || 
                                (testArray[2] === "O" && testArray[6] === "O")) ) {
        h2.innerHTML = "Player 2 wins!";
        h3P2streak++;
        h3P2.innerHTML = h3P2streak;
        return;
    }
    if(testArray[8] === "O" && ((testArray[6] === "O" && testArray[7] === "O") ||
                                (testArray[2] === "O" && testArray[5] === "O")) ) {
        h2.innerHTML = "Player 2 wins!";
        h3P2streak++;
        h3P2.innerHTML = h3P2streak;
        return;
    }

    // cat game logic
    if(turn === 9) {
        h2.innerHTML = "&#x1F431";
        return;
    }
})


