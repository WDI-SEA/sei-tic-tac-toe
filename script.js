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

h2.value = "Player 1, place an X onto the board.";

let turn = 0;

let testArray = ['', '', '', 
                '', '', '',
                '', '', ''];
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");


console.log(one);


one.addEventListener('click', function(e) {
    if(turn >= 9){
        return;
    }
    if(turn % 2 === 0) {
        one.innerHTML = "X";
        testArray[0] = "X";
        turn++;
    } else {
        one.innerHTML = "O";
        testArray[0] = "O";
        turn++;
    }
    console.log(testArray);
    console.log(turn);
})

two.addEventListener('click', function(e) {
    if(turn >= 9){
        return;
    }
    if(turn % 2 === 0) {
        two.innerHTML = "X";
        testArray[1] = "X";
        turn++;
    } else {
        two.innerHTML = "O";
        testArray[1] = "O";
        turn++;
    }
    console.log(testArray);
    console.log(turn);
})

three.addEventListener('click', function(e) {
    if(turn >= 9){
        return;
    }
    if(turn % 2 === 0) {
        three.innerHTML = "X";
        testArray[2] = "X";
        turn++;
    } else {
        three.innerHTML = "O";
        testArray[2] = "O";
        turn++;
    }
    console.log(testArray);
    console.log(turn);
})

four.addEventListener('click', function(e) {
    if(turn >= 9){
        return;
    }
    if(turn % 2 === 0) {
        four.innerHTML = "X";
        testArray[3] = "X";
        turn++;
    } else {
        four.innerHTML = "O";
        testArray[3] = "O";
        turn++;
    }
    console.log(testArray);
    console.log(turn);
})

five.addEventListener('click', function(e) {
    if(turn >= 9){
        return;
    }
    if(turn % 2 === 0) {
        five.innerHTML = "X";
        testArray[4] = "X";
        turn++;
    } else {
        five.innerHTML = "O";
        testArray[4] = "O";
        turn++;
    }
    console.log(testArray);
    console.log(turn);
})

six.addEventListener('click', function(e) {
    if(turn >= 9){
        return;
    }
    if(turn % 2 === 0) {
        six.innerHTML = "X";
        testArray[5] = "X";
        turn++;
    } else {
        six.innerHTML = "O";
        testArray[5] = "O";
        turn++;
    }
    console.log(testArray);
    console.log(turn);
})

seven.addEventListener('click', function(e) {
    if(turn >= 9){
        return;
    }
    if(turn % 2 === 0) {
        seven.innerHTML = "X";
        testArray[6] = "X";
        turn++;
    } else {
        seven.innerHTML = "O";
        testArray[6] = "O";
        turn++;
    }
    console.log(testArray);
    console.log(turn);
})

eight.addEventListener('click', function(e) {
    if(turn >= 9){
        return;
    }
    if(turn % 2 === 0) {
        eight.innerHTML = "X";
        testArray[7] = "X";
        turn++;
    } else {
        eight.innerHTML = "O";
        testArray[7] = "O";
        turn++;
    }
    console.log(testArray);
    console.log(turn);
})

nine.addEventListener('click', function(e) {
    if(turn >= 9){
        return;
    }
    if(turn % 2 === 0) {
        nine.innerHTML = "X";
        testArray[8] = "X";
        turn++;
    } else {
        nine.innerHTML = "O";
        testArray[8] = "O";
        turn++;
    }
    console.log(testArray);
    console.log(turn);
})

    
