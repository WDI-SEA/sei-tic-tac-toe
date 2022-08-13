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

       
        let turn = 1
        let grid1click = document.querySelector("#grid1")
        let grid2click = document.querySelector("#grid2")
        let grid3click = document.querySelector("#grid3")
        let grid4click = document.querySelector("#grid4")
        let grid5click = document.querySelector("#grid5")
        let grid6click = document.querySelector("#grid6")
        let grid7click = document.querySelector("#grid7")
        let grid8click = document.querySelector("#grid8")
        let grid9click = document.querySelector("#grid9")
        let playerXClick = document.querySelector(".board")
        let playerClickCount = document.querySelector(".board")

        function turnCounter() {
            if(turn % 2 === 1) {
                playerX()
                turn++
            } else {
                playerO()
                turn++
        }
    }


        playerClickCount.addEventListener("click", turnCounter)
        // function playerTurn() {
        //     if(turn % 2 === 1) {
        //         playerX()
        //         console.log(turn)
        //     }  else {
        //         console.log("not your turn")
        //     }
        // }
    
        // playerTurn()
       

       
        

        
       

        function playerX() {
            grid1click.addEventListener("click", function(e) {
                grid1click.innerText ="X"
            })
            grid2click.addEventListener("click", function(  e) {
                grid2click.innerText ="X"
            })
            grid3click.addEventListener("click", function(e) {
                grid3click.innerText ="X"
            })
            grid4click.addEventListener("click", function(e) {
                grid4click.innerText ="X"
            })
            grid5click.addEventListener("click", function(e) {
                grid5click.innerText ="X"
            })
            grid6click.addEventListener("click", function(e) {
                grid6click.innerText ="X"
            }) 
            grid7click.addEventListener("click", function(e) {
                grid7click.innerText ="X"
            })
            grid8click.addEventListener("click", function(e) {
                grid8click.innerText ="X"
            })
            grid9click.addEventListener("click", function(e) {
                grid9click.innerText ="X"
            })
        }

        function playerO() {
            grid1click.addEventListener("click", function(e) {
                grid1click.innerText ="O"
            })
            grid2click.addEventListener("click", function(  e) {
                grid2click.innerText ="O"
            })
            grid3click.addEventListener("click", function(e) {
                grid3click.innerText ="O"
            })
            grid4click.addEventListener("click", function(e) {
                grid4click.innerText ="O"
            })
            grid5click.addEventListener("click", function(e) {
                grid5click.innerText ="O"
            })
            grid6click.addEventListener("click", function(e) {
                grid6click.innerText ="O"
            }) 
            grid7click.addEventListener("click", function(e) {
                grid7click.innerText ="O"
            })
            grid8click.addEventListener("click", function(e) {
                grid8click.innerText ="O"
            })
            grid9click.addEventListener("click", function(e) {
                grid9click.innerText ="O"
            })
        }
        

    
   
    
    
    
        
        
        
       

    
       
//         playerXClick.addEventListener("click", function(e) {
//         grid1click.addEventListener("click", function(e) {
//             grid1click.innerText ="X"
//         })
//         grid2click.addEventListener("click", function(e) {
//             grid2click.innerText ="X"
//         })
//         grid3click.addEventListener("click", function(e) {
//             grid3click.innerText ="X"
//         })
//         grid4click.addEventListener("click", function(e) {
//             grid4click.innerText ="X"
//         })
//         grid5click.addEventListener("click", function(e) {
//             grid5click.innerText ="X"
//         })
//         grid6click.addEventListener("click", function(e) {
//             grid6click.innerText ="X"
//         }) 
//         grid7click.addEventListener("click", function(e) {
//             grid7click.innerText ="X"
//         })
//         grid8click.addEventListener("click", function(e) {
//             grid8click.innerText ="X"
//         })
//         grid9click.addEventListener("click", function(e) {
//             grid9click.innerText ="X"
//         })
        
// })