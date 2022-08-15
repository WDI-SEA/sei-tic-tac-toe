// APP STATE (variables)
    // a variable to track whose turn it is
    // a var for 'X' and a var for 'o'
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
        
    // add element that displays winner or cats game
    
    //function to start the game and check for game conditions after clicking

    function startGame() {

        // setting access for each grid values
        let grid1 = document.querySelector("#grid1").value
        let grid2 = document.querySelector("#grid2").value
        let grid3 = document.querySelector("#grid3").value
        let grid4 = document.querySelector("#grid4").value
        let grid5 = document.querySelector("#grid5").value
        let grid6 = document.querySelector("#grid6").value
        let grid7 = document.querySelector("#grid7").value
        let grid8 = document.querySelector("#grid8").value
        let grid9 = document.querySelector("#grid9").value

        /*

        [grid1 grid2 grid3
         grid4 grid5 grid6
         grid7 grid8 grid9]
        
        */

        // checking if top row win condition is true
        if (grid1 === "X" && grid2 === "X" && grid3 === "X") {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid4").disabled = true
            document.querySelector("#grid5").disabled = true
            document.querySelector("#grid6").disabled = true
            document.querySelector("#grid7").disabled = true
            document.querySelector("#grid8").disabled = true
            document.querySelector("#grid9").disabled = true
            return
        // checking if left row win condition is true
        }else if (grid1 === "X" && grid4 === "X" && grid7 === "X") {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid2").disabled = true
            document.querySelector("#grid3").disabled = true
            document.querySelector("#grid5").disabled = true
            document.querySelector("#grid6").disabled = true
            document.querySelector("#grid8").disabled = true
            document.querySelector("#grid9").disabled = true
            return
        // checking if bottom row win condition is true
        }else if (grid7 === "X" && grid8 === "X" && grid9 === "X") {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid1").disabled = true
            document.querySelector("#grid2").disabled = true
            document.querySelector("#grid3").disabled = true
            document.querySelector("#grid4").disabled = true
            document.querySelector("#grid5").disabled = true
            document.querySelector("#grid6").disabled = true
            return
        // checking if right row win condition is true
        }else if (grid3 === "X" && grid6 === "X" && grid9 === "X")  {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid1").disabled = true
            document.querySelector("#grid2").disabled = true
            document.querySelector("#grid4").disabled = true
            document.querySelector("#grid5").disabled = true
            document.querySelector("#grid7").disabled = true
            document.querySelector("#grid8").disabled = true
            return
        // checking if horizontal middle win condition is true
        }else if (grid4 === "X" && grid5 === "X" && grid6=== "X") {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid1").disabled = true
            document.querySelector("#grid2").disabled = true
            document.querySelector("#grid3").disabled = true
            document.querySelector("#grid7").disabled = true
            document.querySelector("#grid8").disabled = true
            document.querySelector("#grid9").disabled = true
            return
        // checking if vertical middle win condition is true
        }else if (grid2 === "X" && grid5 === "X" && grid8 === "X") {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid1").disabled = true
            document.querySelector("#grid3").disabled = true
            document.querySelector("#grid4").disabled = true
            document.querySelector("#grid6").disabled = true
            document.querySelector("#grid7").disabled = true
            document.querySelector("#grid9").disabled = true
            return
        // checking if top left diagonal to bottom right win condition is true
        }else if (grid1 === "X" && grid5 === "X" && grid9 === "X") {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid2").disabled = true
            document.querySelector("#grid3").disabled = true
            document.querySelector("#grid4").disabled = true
            document.querySelector("#grid6").disabled = true
            document.querySelector("#grid7").disabled = true
            document.querySelector("#grid8").disabled = true  
            return 
        // checking if top right diagonal to bottom left win condition is true
        }else if (grid3 === "X" && grid5 === "X" && grid7 ==="X"){
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid1").disabled = true
            document.querySelector("#grid2").disabled = true
            document.querySelector("#grid4").disabled = true
            document.querySelector("#grid6").disabled = true
            document.querySelector("#grid8").disabled = true
            document.querySelector("#grid9").disabled = true
            return
        // checking for cats game
        }else if ((grid1 === "X" || grid1 === "O") && (grid2 === "X" || grid2 === "O") && (grid3 === "X" || grid3 === "O") && (grid4 === "X" || grid4 === "O") && (grid5 === "X" || grid5 === "O") && (grid6 === "X" || grid6 === "O") && (grid7 === "X" || grid7 === "O") && (grid8 === "X" || grid8 === "O") &&(grid9 === "X" || grid9 ==="O")) {
            document.getElementById("displayMessage").innerText = "Tie Game! Cat's Game!"
        // setting turn 1 to mean it's player X's turn and 2 to mean it's player O's turn
        }else{
            if (turn === 1) {
                document.querySelector("#displayMessage").innerText = "Player X's turn"
            }else {
                document.querySelector("#displayMessage").innerText = "Player O's turn"
            }
        }
    
    
        if (grid1 === "O" && grid2 === "O" && grid3 === "O") {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid4").disabled = true
            document.querySelector("#grid5").disabled = true
            document.querySelector("#grid6").disabled = true
            document.querySelector("#grid7").disabled = true
            document.querySelector("#grid8").disabled = true
            document.querySelector("#grid9").disabled = true
            return
    
        }else if (grid1 === "O" && grid4 === "O" && grid7 === "O") {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid2").disabled = true
            document.querySelector("#grid3").disabled = true
            document.querySelector("#grid5").disabled = true
            document.querySelector("#grid6").disabled = true
            document.querySelector("#grid8").disabled = true
            document.querySelector("#grid9").disabled = true
            return
    
        }else if (grid7 === "O" && grid8 === "O" && grid9 === "O") {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid1").disabled = true
            document.querySelector("#grid2").disabled = true
            document.querySelector("#grid3").disabled = true
            document.querySelector("#grid4").disabled = true
            document.querySelector("#grid5").disabled = true
            document.querySelector("#grid6").disabled = true
            return
    
        }else if (grid3 === "O" && grid6 === "O" && grid9 === "O")  {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid1").disabled = true
            document.querySelector("#grid2").disabled = true
            document.querySelector("#grid4").disabled = true
            document.querySelector("#grid5").disabled = true
            document.querySelector("#grid7").disabled = true
            document.querySelector("#grid8").disabled = true
            return
    
        }else if (grid4 === "O" && grid5 === "O" && grid6=== "O") {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid1").disabled = true
            document.querySelector("#grid2").disabled = true
            document.querySelector("#grid3").disabled = true
            document.querySelector("#grid7").disabled = true
            document.querySelector("#grid8").disabled = true
            document.querySelector("#grid9").disabled = true
            return
    
        }else if (grid2 === "O" && grid5 === "O" && grid8 === "O") {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid1").disabled = true
            document.querySelector("#grid3").disabled = true
            document.querySelector("#grid4").disabled = true
            document.querySelector("#grid6").disabled = true
            document.querySelector("#grid7").disabled = true
            document.querySelector("#grid9").disabled = true
            return
    
        }else if (grid1 === "O" && grid5 === "O" && grid9 === "O") {
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid2").disabled = true
            document.querySelector("#grid3").disabled = true
            document.querySelector("#grid4").disabled = true
            document.querySelector("#grid6").disabled = true
            document.querySelector("#grid7").disabled = true
            document.querySelector("#grid8").disabled = true  
            return 
        }else if (grid3 === "O" && grid5 === "O" && grid7 ==="O"){
            document.querySelector("#displayMessage").innerText = "Player X is the winner!"
            document.querySelector("#grid1").disabled = true
            document.querySelector("#grid2").disabled = true
            document.querySelector("#grid4").disabled = true
            document.querySelector("#grid6").disabled = true
            document.querySelector("#grid8").disabled = true
            document.querySelector("#grid9").disabled = true
            return
    
        }else if ((grid1 === "X" || grid1 === "O") && (grid2 === "X" || grid2 === "O") &&
        (grid3 === "X" || grid3 === "O") && (grid4 === "X" || grid4 === "O") && (grid5 === "X" || grid5 === "O") && 
        (grid6 === "X" || grid6 === "O") && (grid7 === "X" || grid7 === "O") && (grid8 === "X" || grid8 === "O") &&
        (grid9 === "X" || grid9 ==="O")) {
            document.getElementById("displayMessage").innerText = "Tie Game! Cat's Game!"
        }else{
            if (turn === 1) {
                document.getElementById("displayMessage").innerText = "Player X's turn"
            }else {
                document.getElementById("displayMessage").innerText = "Player O's turn"
            }
    
        }
    }
   
    // setting turn = 1 to denote that it's player X's turn and setting functions that set the value of the input to be X or O on the buttons.  After clicking the buttons are disabled.
    let turn = 1
       
    function clickGrid1() {
        if (turn == 1) {
            document.querySelector("#grid1").value = "X"
            document.querySelector("#grid1").disabled = true
            turn = 2
        } else {
            document.querySelector("#grid1").value = "O"
            document.querySelector("#grid1").disabled = true
            turn = 1
            }
    }

    function clickGrid2() {
        if (turn == 1) {
            document.querySelector("#grid2").value = "X"
            document.querySelector("#grid2").disabled = true
            turn = 2
        } else {
            document.querySelector("#grid2").value = "O"
            document.querySelector("#grid2").disabled = true
            turn = 1
            }
    }

    function clickGrid3() {
        if (turn == 1) {
            document.querySelector("#grid3").value = "X"
            document.querySelector("#grid3").disabled = true
            turn = 2
        } else {
                document.querySelector("#grid3").value = "O"
                document.querySelector("#grid3").disabled = true
                turn = 1
            }
    }

    function clickGrid4() {
        if (turn == 1) {
            document.querySelector("#grid4").value = "X"
            document.querySelector("#grid4").disabled = true
            turn = 2
        } else {
            document.querySelector("#grid4").value = "O"
            document.querySelector("#grid4").disabled = true
            turn = 1
        }
    }

    function clickGrid5() {
        if (turn == 1) {
            document.querySelector("#grid5").value = "X"
            document.querySelector("#grid5").disabled = true
            turn = 2
        } else {
            document.querySelector("#grid5").value = "O"
            document.querySelector("#grid5").disabled = true
            turn = 1
            }
    }

    function clickGrid6() {
        if (turn == 1) {
            document.querySelector("#grid6").value = "X"
            document.querySelector("#grid6").disabled = true
            turn = 2
        } else {
            document.querySelector("#grid6").value = "O"
            document.querySelector("#grid6").disabled = true
            turn = 1
            }
    }

    function clickGrid7() {
        if (turn == 1) {
            document.querySelector("#grid7").value = "X"
            document.querySelector("#grid7").disabled = true
            turn = 2
        } else {
            document.querySelector("#grid7").value = "O"
            document.querySelector("#grid7").disabled = true
            turn = 1
        }
    }
        
    function clickGrid8() {
        if (turn == 1) {
            document.querySelector("#grid8").value = "X"
            document.querySelector("#grid8").disabled = true
            turn = 2
        } else {
            document.querySelector("#grid8").value = "O"
            document.querySelector("#grid8").disabled = true
            turn = 1
        }
    }
        
    function clickGrid9() {
        if (turn == 1) {
            document.querySelector("#grid9").value = "X"
            document.querySelector("#grid9").disabled = true
            turn = 2
        } else {
            document.querySelector("#grid9").value = "O"
            document.querySelector("#grid9").disabled = true
            turn = 1
        }
    }

    // reset button
    function resetButton() {
        location.reload()
        document.querySelector("#grid1").value = " "
        document.querySelector("#grid2").value = " "
        document.querySelector("#grid3").value = " "
        document.querySelector("#grid4").value = " "
        document.querySelector("#grid5").value = " "
        document.querySelector("#grid6").value = " "
        document.querySelector("#grid7").value = " "
        document.querySelector("#grid8").value = " "
        document.querySelector("#grid9").value = " "
    }

    /*
    Code I couldn't get to work
    function playerX() {
            grid1click.addEventListener("click", function(e) {
                if (checked === false) {
                grid1click.innerText ="X"
                gameBoard[0] = "X"
                checked = true
                }
            })
            grid2click.addEventListener("click", function(e) {
                if (checked === false) {
                    grid2click.innerText ="X"
                    gameBoard[1] = "X"
                    checked = true
                }
               
            })
            grid3click.addEventListener("click", function(e) {
                grid3click.innerText ="X"
                gameBoard[2] = "X"
            })
            grid4click.addEventListener("click", function(e) {
                grid4click.innerText ="X"
                gameBoard[3] = "X"
            })
            grid5click.addEventListener("click", function(e) {
                grid5click.innerText ="X"
                gameBoard[4] = "X"
            })
            grid6click.addEventListener("click", function(e) {
                grid6click.innerText ="X"
                gameBoard[5] = "X"
            }) 
            grid7click.addEventListener("click", function(e) {
                grid7click.innerText ="X"
                gameBoard[6] = "X"
            })
            grid8click.addEventListener("click", function(e) {
                grid8click.innerText ="X"
                gameBoard[7] = "X"
            })
            grid9click.addEventListener("click", function(e) {
                grid9click.innerText ="X"
                gameBoard[8] = "X"
            })
        }
        
        

        

        function playerO() {
            grid1click.addEventListener("click", function(e) {
                if (checked === false) {
                grid1click.innerText ="O"
                gameBoard[0] = "O"
                checked = true
                }
            })
            grid2click.addEventListener("click", function(e) {
                if (checked === false) {
                    grid2click.innerText ="O"
                    gameBoard[1] = "O"
                    checked = true
                }
            })
            grid3click.addEventListener("click", function(e) {
                grid3click.innerText ="O"
                gameBoard[2] = "O"
            })
            grid4click.addEventListener("click", function(e) {
                grid4click.innerText ="O"
                gameBoard[3] = "O"
            })
            grid5click.addEventListener("click", function(e) {
                grid5click.innerText ="O"
                gameBoard[4] = "O"
            })
            grid6click.addEventListener("click", function(e) {
                grid6click.innerText ="O"
                gameBoard[5] = "O"
            }) 
            grid7click.addEventListener("click", function(e) {
                grid7click.innerText ="O"
                gameBoard[6] = "O"
            })
            grid8click.addEventListener("click", function(e) {
                grid8click.innerText ="O"
                gameBoard[7] = "O"
            })
            grid9click.addEventListener("click", function(e) {
                grid9click.innerText ="O"
                gameBoard[8] = "O"
            })
        }
*/