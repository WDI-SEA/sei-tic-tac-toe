

console.log("I'M LINKED!!!")

// Game Logic Variables 
let sausagePlayer = null;
let doughnutPlayer = null;
let gameClickCount = 1;
let sausageArr = [];
let doughnutArr = [];
let winningCombos = [["ULdiv","UMdiv","URdiv"], ["MLdiv","MMdiv","MRdiv"]];

//boolean for game over
let gameOver = false

// DOM variables & references

let winGameMsg = document.querySelector(".win-message");
let tieGameMsg = document.querySelector(".tie-message");
let sausagePicEl = null;
let doughnutPicEl = null;
let platePicEl = null;
let gameTiles = []
let restartButtonEl = null;
let upperDiv = null;
let middleDiv = null;
let lowerDiv = null;
let gameBoard = null;

//game state 

let tileState = {
    UPLeft: false,
    UPmid: false,
    UPrt: false,
    MDLeft: false,
    MDmid: false,
    MDrt: false,
    LLeft: false,
    LMid: false,
    LLeft: false,
}



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




//Conditionals for player one vs player two


    // doughnutPlayer = 'Doughnut'
    // console.log("I'm the second player")


//Conditional for tie game linked to number total number of clicks
if(gameClickCount === 10){
    tieGameMsg.classList.remove("tie-hidden")
    console.log("TIE GAME!")
}




//Function to assign image
function imgReplace(event){
    console.log("image replace called.");
    if (gameClickCount % 2 === 0) {
        gameClickCount++;
        // console.log(gameClickCount);
        event.target.src = "imgs/sausage.png";
        document.querySelector(".game-status").innerHTML = "Its Sausage TIME!  Doughnut is next!"
        sausageArr.push(event.target.parentNode.id);
                console.log(sausageArr);
                // console.log(event.target.parentNode);
                
    }else {
        gameClickCount++;
        // console.log(gameClickCount);
        event.target.src = "imgs/doughnut.png";
        document.querySelector(".game-status").innerHTML = "DOooooo for a Doughhhhnut!  Sausage is next!"
        doughnutArr.push(event.target.parentNode.id);
        
            // console.log(doughnutArr);
            // console.log(event.target.parentNode);
    }
    checkWin();
}

//Game over function to reset the game
function restartGame() {
    console.log("reset game function working!")
}

//to select the tiles for the game
function selectTile(event) {
    console.log('select tile called');
    // console.log(event.target.src);
    if(event.target.src !== "file:///Users/thedavezone/Desktop/Coding-School/wk1/weekend/sei-tic-tac-toe/imgs/sausage.png" && event.target.src !== "file:///Users/thedavezone/Desktop/Coding-School/wk1/weekend/sei-tic-tac-toe/imgs/doughnut.png") {
        imgReplace(event);
    }else{
        alert('this square is already taken');
    }

        // runs to set up the game state
            //console.log('begin the game')
}
// handle winner or tie

function checkWin() {
    

        //loop needs go first happen

        for(let i=0; i <= winningCombos.length - 1; i++){
            let sausageMatches = 0 
            for(let j=0; j <= winningCombos[i].length - 1; j++){
                
                //conditional statements occur for determining a sausage win or doughnut win
                
                if(sausageArr.includes(winningCombos[i][j])){
                    sausageMatches++; 
                    console.log("We have a match!", sausageMatches);
                }
            
            if(sausageMatches === 3){
                alert('sausage won!')
            }


        }
    }

}


    



////  EVENT LISTENERS ///
document.addEventListener('DOMContentLoaded', function(){
    //console.log('loaded!');
    //To reset the game
    restartButtonEl = document.querySelector("#restart");
    restartButtonEl.addEventListener('click', restartGame);
    
    //div event listeners and click event listener
    gameBoard = document.querySelector(".game-plate");
    gameBoard.addEventListener('click', selectTile);
    //console.dir(gamePlate.children);
    
    //winning game comparison function
    
    //tie or win 

    winGameMsg = document.querySelector(".win-message");
    tieGameMsg = document.querySelector(".tie-message");
    
})

// upperDiv = document.querySelector(".upper-row")



// testing

let testMaster = [['dog', 'cat', 'mouse'], ['bird', 'horse', 'cow', 'snake'], ['pig']]
    

// for(let i=0; i <= testMaster.length -1; i++){
//     console.log(testMaster[i]);
//     for(let j=0; j <= testMaster[i].length -1; j++){
//         console.log(testMaster[i][j]);
//     }
// }