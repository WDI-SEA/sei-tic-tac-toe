


// Game Logic Variables 
let sausagePlayerWin = false;
let doughnutPlayerWin = false;
let imgPath = null;
let gameClickCount = 0;
let sausageArr = [];
let doughnutArr = [];
let winningCombos = [
    ["ULdiv","UMdiv","URdiv"], 
    ["MLdiv","MMdiv","MRdiv"], 
    ["LLdiv", "LMdiv", "LRdiv"], 
    ["ULdiv", "MMdiv", "LRdiv"], 
    ["URdiv", "MMdiv", "LLdiv"], 
    ["URdiv", "MRdiv", "LRdiv"], 
    ["ULdiv", "MLdiv", "LLdiv"], 
    ["UMdiv", "MMdiv", "LMdiv"],

];

// DOM variables & references
let playerTurnMsg = null;
let sausageWinGameMsg = null;
let doughnutWinGameMsg = null;
let tieGameMsg = null;
let restartButtonEl = null;
let gameBoard = null;


// Each Cellbox element IDs & display message Class

let ULBox = document.getElementById("ULimg");
let UMBox = document.getElementById("UMimg");
let URBox = document.getElementById("URimg");
let MLBox = document.getElementById("MLimg");
let MMBox = document.getElementById("MMimg");
let MRBox = document.getElementById("MRimg");
let LLBox = document.getElementById("LLimg");
let LMBox = document.getElementById("LMimg");
let LRBox = document.getElementById("LRimg");


//GAME RUNNING FUNCTIONS 

//Function to assign image

function imgReplace(event){
    // console.log("image replace called.");
    if (gameClickCount % 2 === 0) {
        gameClickCount++;
        event.target.src = "imgs/sausage.png";
        playerTurnMsg.innerHTML = "Its Sausage TIME!  Doughnut is next!"
        sausageArr.push(event.target.parentNode.id);
        // console.log(sausageArr);
        // console.log(event.target.parentNode);
        
    }else {
        gameClickCount++;
        // console.log(gameClickCount);
        event.target.src = "imgs/doughnut.png";
        playerTurnMsg.innerHTML = "DOooooo for a Doughhhhnut!  Sausage is next!"
        doughnutArr.push(event.target.parentNode.id);
        
        // console.log(doughnutArr);
        // console.log(event.target.parentNode);
    }
    // console.log(gameClickCount);
    checkWin();
}

//Game over function to reset the game
function restartGame() {
    playerTurnMsg.innerHTML = "Click on a plate to start the game!"
    sausageMatches = 0;
    doughnutMatches = 0;
    gameClickCount= 0;
    sausageArr = [];
    doughnutArr = [];
    ULBox.src = "imgs/plate.png";
    UMBox.src = "imgs/plate.png";
    URBox.src = "imgs/plate.png";
    MLBox.src = "imgs/plate.png";
    MMBox.src = "imgs/plate.png";
    MRBox.src = "imgs/plate.png";
    LLBox.src = "imgs/plate.png";
    LMBox.src = "imgs/plate.png";
    LRBox.src = "imgs/plate.png";
    sausageWinGameMsg.setAttribute("class", "sausage-message sausage-hidden");
    doughnutWinGameMsg.setAttribute("class", "doughnut-message doughnut-hidden");
    tieGameMsg.setAttribute("class", "tie-message tie-hidden");
}

//Function to select game tiles 
function selectTile(event) {
    
    imgPath = event.target.src;
    
    if(imgPath.match(/plate/g)){
      imgReplace(event);
    }else{
       alert('this square is already taken');
   }
}


// Function to determine winner or tie.

function checkWin() {
    
        //loop needs go first happen

        for(let i=0; i <= winningCombos.length - 1; i++){
            let sausageMatches = 0;
            let doughnutMatches = 0;
            for(let j=0; j <= winningCombos[i].length - 1; j++){
                
                //conditional statements occur for determining a sausage win 
                
                        if(sausageArr.includes(winningCombos[i][j])){
                            sausageMatches++; 
                        
                        }
                    
                            if(sausageMatches === 3){
                                sausageWinGameMsg.classList.remove("sausage-hidden");
                                setTimeout(function(){restartGame();}, 2000);
                                
                            }
                        
                            //conditional statements for determining a doughnut win

                        if(doughnutArr.includes(winningCombos[i][j])){
                            doughnutMatches++;
                            
                        }
                        
                            if(doughnutMatches === 3){
                                doughnutWinGameMsg.classList.remove("doughnut-hidden");
                                setTimeout(function(){restartGame();}, 2000);
                                
                            }

                    // conditional statement if there is a tie
                if(gameClickCount === 9 && doughnutMatches !== 3 && sausageMatches !== 3) {
                    tieGameMsg.classList.remove("tie-hidden");
                    setTimeout(function(){restartGame();}, 2000);
                }

        }

    }

}
    



////  EVENT LISTENERS ///
document.addEventListener('DOMContentLoaded', function(){
    
    //Game Beginning event listeners and click event listeners
    playerTurnMsg = document.querySelector(".game-status");
    gameBoard = document.querySelector(".game-plate");
    gameBoard.addEventListener('click', selectTile);
    
    
    //To reset the game
    restartButtonEl = document.querySelector("#restart");
    restartButtonEl.addEventListener('click', restartGame);


    //tie or win 
    sausageWinGameMsg = document.querySelector(".sausage-message");
    doughnutWinGameMsg = document.querySelector(".doughnut-message");
    tieGameMsg = document.querySelector(".tie-message");
    
})

// upperDiv = document.querySelector(".upper-row")



// testing

// let testMaster = [['dog', 'cat', 'mouse'], ['bird', 'horse', 'cow', 'snake'], ['pig']]
    

// for(let i=0; i <= testMaster.length -1; i++){
//     console.log(testMaster[i]);
//     for(let j=0; j <= testMaster[i].length -1; j++){
//         console.log(testMaster[i][j]);
//     }
// }