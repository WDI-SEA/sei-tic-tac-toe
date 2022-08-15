
// APP STATE (variables)
    // a variable to track whose turn it is
    let turn = "turn";
    // a var for 'x' and a var for 'o'
    let x = "x";
    let o = "o";
    
    // a var to keep count of moves to detect cats/draw game
    let draw = 0;
    let detect = "outcome";
    console.log(detect);
    // gameBoard array to keep track of player moves ['x', '', 'o', 'x', '', 'o', 'x', '', '']
        // 2d array
        // [
        //     ['x', '', 'o'],
        //     ['x', 'o', ''],
        //     ['x', '', 'o']
        // ]
        let playerMoves = [
            ['','',''],
            ['','',''],
            ['','','']
        ];
    // a boolean for if the game is over or not -- is the game currently happening?
       let over='x';
    if(true){

        }else{

        };
    
        
// EVENT LISTENERS
    // click event listener(s) for player clicks
     btn1 = document.getElementById('btn');
    row1 = document.getElementById("1");
    console.log(row1.innerText);
    Divs = document.querySelectorAll("div")
    console.log(Divs[2].innerText="apple")
    Divs[3].innerText = "orange";
    console.log(Divs)
    space1 = divs[1];
    space2 = divs[2];
    space3 = divs[3];
    space4 = divs[5];
    space5 = divs[6];
    space6 = divs[7];
    space7 = divs[9];
    space8 = divs[10];
    space9 = divs[11];
     let myDiv = document.querySelectorAll('.toc')
        myDiv.forEach(item => {
        item.addEventListener('click', event => {
            for (let i=0; i < myDiv.length; i++){
                myDiv[i].innerText = ""
              }
          
        })
      })
      function myFunc(){
        for (let i=0; i < myDiv.length; i++){
           myDiv[i].innerText = ""
         }
        }
      x="currentplayer"
        // change innertext of div to X or O
       if(x==="currentplayer"){
       console.log(myDiv.innertext = "ap")
       }
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
    
