// APP STATE (variables)
   // a var for 'x' and a var for 'o'
const playerOne = "O"
const playerTwo = "X"
 // a variable to track whose turn it is
let turn = playerOne
// a boolean for if the game is over or not -- is the game currently happening?
let gameOver = false

const gameBoardArr = document.getElementsByClassName("game-board")
// display text function and conditions
displayText();    

    function displayText () {
        
      if (gameOver == true) {
          document.querySelector(".display-text").innerHTML = "Game Over"
      }
      if (turn === playerOne) {
         document.querySelector(".display-text").innerHTML = "Player One ( O ) is your turn!"
      }
      else {
        document.querySelector(".display-text").innerHTML = "Player Two (X ) is your turn!"
      }
    //   if (winner !== "") {
    //     gameOver = true
    //     document.querySelector(".display-text").innerHTML = " 'The winner is: " +  winner "
    //   }
    }



clicks();
    function clicks(){
    
        const gameBoardArr = document.getElementsByClassName("game-board") 
        for (let i = 0; i < gameBoardArr.length; i++) {
            gameBoardArr[i].addEventListener("click", function(){
                if (gameOver === true) {return;}
                if (gameBoardArr[i].innerText === ""){
                // change innertext of div to X or O     
                    if (turn == playerOne) {
                        gameBoardArr[i].innerHTML = "O"
                        gameBoardArr[i].setAttribute("plays", playerOne)
                        turn = playerTwo
                        displayText();
                    }
                
                    else {
                        gameBoardArr[i].innerHTML = "X"
                        gameBoardArr[i].setAttribute("plays", playerTwo)
                        turn = playerOne
                    }
                displayText();
                winCheck();
            }
            });
        }
    }
// click event to clear/reset the board
const resetButton = document.querySelector("button")
    resetButton.addEventListener("click", function (e) {
    gameBoardArr.innerHTML = ""
    })

// win/tie game logic in functions
winCheck();
function winCheck(){
    
    const x1 = document.getElementById("x1").getAttribute("plays")
    const x2 = document.getElementById("x2").getAttribute("plays")
    const x3 = document.getElementById("x3").getAttribute("plays")

    const y1 = document.getElementById("y1").getAttribute("plays")
    const y2 = document.getElementById("y2").getAttribute("plays")
    const y3 = document.getElementById("y3").getAttribute("plays")

    const z1 = document.getElementById("z1").getAttribute("plays")
    const z2 = document.getElementById("z2").getAttribute("plays")
    const z3 = document.getElementById("z3").getAttribute("plays")

    let winner = ""
    if((x1 === y1 && x1 === z1 && x1 !== "") || (x1 === x2 && x1 === x3 && x1!== "") || (x1 === y2 && x1 === z3 && x1 !== "")){
        winner = x1   
    }    
    else if ((y2 === y1 && y2 === y3 && y2 !== "") || (y2 === x2 && y2 === z2 && y2!== "") || (y2 === x3 && y2 === z1 && y2 !== "")){
        winner = y2   
    }
    else if ((z3 === z1 && z3 === z2 && z3 !== "") || (z3 === x3 && z3 === y3 && z3 !== "")){
        winner = z3   
    }
    if (winner !== "") {
        gameOver = true
        document.querySelector(".display-text").innerHTML = "The winner is: " +  winner 
      }
    
}

 

    

   


// EVENT LISTENERS
    // click event listener(s) for player clicks
       
        // store the player's move in the gameBoard array
        // change to the next player's turn
        // check for a win -- calling a win condition function/doing all the win logic
    
    // a var to keep count of moves to detect cats/draw game
// some way to tell if a player has already clicked on a square

    // option: detect a win using conditionals and comparisions 
    // option hard mode: store all winning conditions and use loops to compare them to the gameBoard array
        // if the game is won, display the winner and prevent the users from clicking more
        // if it is a cats game, display that and prevent clicks