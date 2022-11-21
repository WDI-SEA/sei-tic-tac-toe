let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let option5 = document.getElementById('option5');
let option6 = document.getElementById('option6');
let option7 = document.getElementById('option7');
let option8 = document.getElementById('option8');
//all of these variables are refering to the divs that will be clickable down the line
let box0 = document.getElementById('o0');
let box1 = document.getElementById('o1');
let box2 = document.getElementById('o2');
let box3 = document.getElementById('o3');
let box4 = document.getElementById('o4');
let box5 = document.getElementById('o5');
let box6 = document.getElementById('o6');
let box7 = document.getElementById('o7');
let box8 = document.getElementById('o8');
//these are the h1 elements in the divs from above to place the X and O in them
let clear = document.getElementById('clear');
//this varibale will be used for the clear button to reset the game
let startGamebtn = document.getElementById('startGame');
//this is a button that will start the game 

let user1arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let user2arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//these two arrays are for the two different users and are set to 0 to check for wins
//when a user clicks on a div that div will set its corresponding array index to 1
// the wins will be checked by adding up 3 indexes of the arrays in different combinations

let checkBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//this array is for the possibilites of ties
//everytime either user fills a X or O it will update this array to its corresponding index
//when checking for wins this array will let us know that every spot has been taken and no one has won which means a tie
let user1W = false;
let user2W = false;
//boolean variables to let us know which of the two users wins
let userTurn = true;
//if this boolean is set to true it means that its the user 1 turn, if set to false its user 2 turn
let clicked = false;
//boolean variable that might not actaully serve a purpose but is meant to prevent either user from clicking more than one div per turn
let endGame = false;
//boolean that should shut game off if set to true, so it will be set to true once someone wins

let msg = document.getElementById('msg');
//this element is a h1 which will be displaying messages like who's turn it is and if a win has happened
startGamebtn.addEventListener('click', game, { once: true });
//start button that when clicked calls the game function which will allow the users to start clicking on the divs, can only be clicked once until the page refreshes

function game() {
    msg.innerText = 'It\'s player 1\'s turn';
  endGame = false;
//the msg.innerText is to just let the users who's turn it is 
//the endGame boolean is set to false to let the game start and run smoothly

  if ((endGame == false) && (userTurn == true)) {
    //making sure that the game isn't over and checking to see who's turn it is
    clicked = false;
    buttonSelection();
    //calling the buttonSelection function which will allow the divs to be clickable and set the option with either a X or O
  }
  else if ((endGame == false) && (userTurn == false)) {

    clicked = false;
    buttonSelection();
  }
}
//game function that will be called as soon as the start game button is pressed









function buttonSelection() {
  if (clicked == false) {
    option0.addEventListener('click', u10, { once: true });
  }
  if (clicked == false) {
    option1.addEventListener('click', u11, { once: true });
  }
  if (clicked == false) {
    option2.addEventListener('click', u12, { once: true });
  }
  if (clicked == false) {
    option3.addEventListener('click', u13, { once: true });
  }
  if (clicked == false) {
    option4.addEventListener('click', u14, { once: true });
  }
  if (clicked == false) {
    option5.addEventListener('click', u15, { once: true });
  }
  if (clicked == false) {
    option6.addEventListener('click', u16, { once: true });
  }
  if (clicked == false) {
    option7.addEventListener('click', u17, { once: true });
  }
  if (clicked == false) {
    option8.addEventListener('click', u18, { once: true });
  }
  //series of if statements to filter out which option the user has selected, the once:true means that this div can only be clicked once, anymore than once and it won't execute the tied function to it
  //each button has a paired function to it which are the 9 different options
}

function continueGame() {
  if (endGame == true) {
    endGames();
  }
}



function u10() {
    //once one of the 9 divs are clicked it calls one of the 9 different functions
  checkBoard[0] = 1;
  //this function is meant for if the top left div is selected
  //the checkBoard[0] = 1 tells the the code that this specific section is taken, this will be useful later on in the case of a tie
  if(endGame ==false){  
    //this if statement above prevents the divs to be clicked after either user has won the game
    //without this if statement the users still have access to click open spaces even after someone has won so it's to prevent that scenario
      if (userTurn == true) {
        //checking to see who's turn it currently is, in this if statement if its the user1 turn it will execute this section
        user1arr[0] = 1;
        //updating the user1 array 
        msg.innerText = 'It\'s player 2\'s turn';
        //updating the message displayed on the page to let the users know who's turn it is
        box0.innerText = 'X';
        //updates the board to have either an X 
        clicked = true;
        //tells the code that the user has already clicked their option
        checkWin();
        //calls the checkWin function to make sure that no one has won yet
        userTurn = false;
        //updates the userTurn to let the code know that it will be user 2's turn next
        continueGame();
        //exits out into the continueGame function
        //withoug this function the code allows a user to click more than one div per turn so it's meant to prevent that
      }
      else if (userTurn == false) {
        // msg.innerText = 'It\'s player 2\'s turn';
        user2arr[0] = 1;
        msg.innerText = 'It\'s player 1\'s turn';
        box0.innerText = 'O';
        clicked = true;
        checkWin();
        userTurn = true;
        continueGame();
      }
}
}
//option 1 out of the 9 functions 

function u11() {
  checkBoard[1] = 1;
  if(endGame ==false){  
      if (userTurn == true) {
        // msg.innerText = 'It\'s player 1\'s turn';
        user1arr[1] = 1;
        msg.innerText = 'It\'s player 2\'s turn';
        box1.innerText = 'X';
        clicked = true;
        checkWin();
        userTurn = false;
        continueGame();
      }
      else if (userTurn == false) {
        // msg.innerText = 'It\'s player 2\'s turn';
        user2arr[1] = 1;
        msg.innerText = 'It\'s player 1\'s turn';
        box1.innerText = 'O';
        clicked = true;
        checkWin();
        userTurn = true;
        continueGame();
      }
}
}


function u12() {
  checkBoard[2] = 1;
  if(endGame ==false){
      if (userTurn == true) {
        // msg.innerText = 'It\'s player 1\'s turn';
        user1arr[2] = 1;
        msg.innerText = 'It\'s player 2\'s turn';
        box2.innerText = 'X';
        clicked = true;
        checkWin();
        userTurn = false;
        continueGame();
      }
      else if (userTurn == false) {
        // msg.innerText = 'It\'s player 2\'s turn';
        user2arr[2] = 1;
        msg.innerText = 'It\'s player 1\'s turn';
        box2.innerText = 'O';
        clicked = true;
        checkWin();
        userTurn = true;
        continueGame();
      }
}
}


function u13() {
  checkBoard[3] = 1;
  if(endGame ==false){
      if (userTurn == true) {
        // msg.innerText = 'It\'s player 1\'s turn';
        user1arr[3] = 1;
        msg.innerText = 'It\'s player 2\'s turn';
        box3.innerText = 'X';
        clicked = true;
        checkWin();
        userTurn = false;
        continueGame();
      }
      else if (userTurn == false) {
        // msg.innerText = 'It\'s player 2\'s turn';
        user2arr[3] = 1;
        msg.innerText = 'It\'s player 1\'s turn';
        box3.innerText = 'O';
        clicked = true;
        checkWin();
        userTurn = true;
        continueGame();
      }
}
}
function u14() {
  checkBoard[4] = 1;
  if(endGame ==false){
      if (userTurn == true) {
        // msg.innerText = 'It\'s player 1\'s turn';
        user1arr[4] = 1;
        msg.innerText = 'It\'s player 2\'s turn';
        box4.innerText = 'X';
        clicked = true;
        checkWin();
        userTurn = false;
        continueGame();
      }
      else if (userTurn == false) {
        // msg.innerText = 'It\'s player 2\'s turn';
        user2arr[4] = 1;
        msg.innerText = 'It\'s player 1\'s turn';
        box4.innerText = 'O';
        clicked = true;
        checkWin();
        userTurn = true;
        continueGame();
      }
}
}

function u15() {
  checkBoard[5] = 1;
  if(endGame ==false){
      if (userTurn == true) {
        // msg.innerText = 'It\'s player 1\'s turn';
        user1arr[5] = 1;
        msg.innerText = 'It\'s player 2\'s turn';
        box5.innerText = 'X';
        clicked = true;
        checkWin();
        userTurn = false;
        continueGame();
      }
      else if (userTurn == false) {
        // msg.innerText = 'It\'s player 2\'s turn';
        user2arr[5] = 1;
        msg.innerText = 'It\'s player 1\'s turn';
        box5.innerText = 'O';
        clicked = true;
        checkWin();
        userTurn = true;
        continueGame();
      }
}
}

function u16() {
  checkBoard[6] = 1;
  if(endGame ==false){
      if (userTurn == true) {
        // msg.innerText = 'It\'s player 1\'s turn';
        user1arr[6] = 1;
        msg.innerText = 'It\'s player 2\'s turn';
        box6.innerText = 'X';
        clicked = true;
        checkWin();
        userTurn = false;
        continueGame();
      }
      else if (userTurn == false) {
        // msg.innerText = 'It\'s player 2\'s turn';
        user2arr[6] = 1;
        msg.innerText = 'It\'s player 1\'s turn';
        box6.innerText = 'O';
        clicked = true;
        checkWin();
        userTurn = true;
        continueGame();
      }
}
}

function u17() {
  checkBoard[7] = 1;
  if(endGame ==false){
      if (userTurn == true) {
        // msg.innerText = 'It\'s player 1\'s turn';
        user1arr[7] = 1;
        msg.innerText = 'It\'s player 2\'s turn';
        box7.innerText = 'X';
        clicked = true;
        checkWin();
        userTurn = false;
        continueGame();
      }
      else if (userTurn == false) {
        // msg.innerText = 'It\'s player 2\'s turn';
        user2arr[7] = 1;
        msg.innerText = 'It\'s player 1\'s turn';
        box7.innerText = 'O';
        clicked = true;
        checkWin();
        userTurn = true;
        continueGame();
      }
  }
}

function u18() {
  checkBoard[8] = 1;
  if(endGame == false){
      if (userTurn == true) {
        // msg.innerText = 'It\'s player 1\'s turn';
        user1arr[8] = 1;
        msg.innerText = 'It\'s player 2\'s turn';
        box8.innerText = 'X';
        clicked = true;
        checkWin();
        userTurn = false;
        continueGame();
      }
      else if (userTurn == false) {
        // msg.innerText = 'It\'s player 2\'s turn';
        user2arr[8] = 1;
        msg.innerText = 'It\'s player 1\'s turn';
        box8.innerText = 'O';
        clicked = true;
        checkWin();
        userTurn = true;
        continueGame();
      }
  }

}
function endGames() {
   
  if (user1W == true) {
    msg.innerText = 'Game over user 1 won';
  }
  else if (user2W == true) {
    msg.innerText = 'game over user 2 won ';
  }
  else {
    msg.innerText = 'game over its a tie';
  }
}
//this is the endGame function which is called once someone has won or a tie, it has a series of if else statements which will update the message on the web page to announce who has won or a tie

function checkWin() {
  if ((user1arr[0] + user1arr[1] + user1arr[2] == 3) || (user1arr[3] + user1arr[4] + user1arr[5] == 3) || (user1arr[6] + user1arr[7] + user1arr[8] == 3) || (user1arr[0] + user1arr[3] + user1arr[6] == 3) || (user1arr[1] + user1arr[4] + user1arr[7] == 3) || (user1arr[2] + user1arr[5] + user1arr[8] == 3) || (user1arr[0] + user1arr[4] + user1arr[8] == 3) || (user1arr[2] + user1arr[4] + user1arr[6] == 3)) {
    //adding up all the possible win combinations for user 1 to win
    //since the user array was originally set to all 0's, and as the game continues it gets updated and sets the value of the index to 1.
    //by adding up the values of 3 differnet indexes, if equal to 3 means that this user has won
    user1W = true;
    //updating the boolean which tells the code that user 1 has won
    endGame = true;
    //updating endgame boolean to let the code know that it should end
    endGames();
    //calling the endGame function 


    //return endGame;
    // return user1W;
    // return user2W;
  }
  else if ((user2arr[0] + user2arr[1] + user2arr[2] == 3) || (user2arr[3] + user2arr[4] + user2arr[5] == 3) || (user2arr[6] + user2arr[7] + user2arr[8] == 3) || (user2arr[0] + user2arr[3] + user2arr[6] == 3) || (user2arr[1] + user2arr[4] + user2arr[7] == 3) || (user2arr[2] + user2arr[5] + user2arr[8] == 3) || (user2arr[0] + user2arr[4] + user2arr[8] == 3) || (user2arr[2] + user2arr[4] + user2arr[6] == 3)) {
    //different win combinations for user 2
    user2W = true;
    endGame = true;
    //updating boolean variables to tell code user 2 has won and to end game 
    endGames();
//calling the endGame function

    //console.log('user2 won');
  }
  else if (checkBoard[0] + checkBoard[1] + checkBoard[2] + checkBoard[3] + checkBoard[4] + checkBoard[5] + checkBoard[6] + checkBoard[7] + checkBoard[8] == 9) {
    //once the code has established that neither user has won, it goes into here which will check if the board is completely full(if all options have been selected)
    //if the board is completely full and neither user has won then that means that tthere has been a tie
    endGame = true;
    endGames();
    //updating variables and calling the endGame function
    //console.log("tie");
}
  else {
//once established that neither user has won or a tie hasn't occured it goes into here
//this is pretty much just an empty else statement which will let the code keep running as it means that the game should continue

    // userTurn == true ? user2turn() : user1turn(); 
    //console.log("game should continue");
    // return endGame;
    // return user1W;
    // return user2W;
     console.log();

  }
}
clear.addEventListener('click', function(){
  location.reload();
} );
//once the clear button is clicked the page will refresh

