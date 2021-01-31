console.log("I'M LINKED!!!")

// Game Logic Variables 
let sausagePlayer = null;
let doughnutPlayer = null;
let gameClickCount = 1;

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
let gamePlate = [upperDiv, middleDiv, lowerDiv];

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

testMaster = [['dog', 'cat', 'mouse'], ['dog', 'cat', 'mouse']]
    

          for(i=0; i <= testMaster.length; i++){
            for(j=0;)
            
            
          }