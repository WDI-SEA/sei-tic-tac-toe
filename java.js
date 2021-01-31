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
let gamePlate = document.querySelector(".game-plate")
let restartButtonEl = null;
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


          gamePlate.onclick = function(){
          gameClickCount++;
            
            
            if (gameClickCount % 2 === 0) {
            document.addEventListener('click', function() {
            event.target.src = "imgs/sausage.png";
            document.querySelector(".game-status").innerHTML = "Its Sausage TIME!  Doughnut is next!"


        })
                
                // sausagePlayer = 'Sausages'
                // console.log("Im the first player")
            
            }else {
            document.addEventListener('click', function() {
            event.target.src = "imgs/doughnut.png";
            document.querySelector(".game-status").innerHTML = "DOooooo for a Doughhhhnut!  Sausage is next!"
        })
                // doughnutPlayer = 'Doughnut'
                // console.log("I'm the second player")
            }



           //Conditional for tie game linked to number total number of clicks
            if(gameClickCount === 10){
               tieGameMsg.classList.remove("tie-hidden")
                console.log("TIE GAME!")
            }
        }

//Game over function to reset the game


function restartGame () {
    console.log("reset game function working!")
}



// let winGameMsg = document.addEventListener('click', function() {
// let winnerMsg = document.querySelector(".win-message");
//         winnerMsg.classList.remove("win-hidden")});


document.addEventListener('DOMContentloaded', function(){
    console.log('loaded!');
    restartButtonEl = document.querySelector("#restart")
    restartButtonEl.addEventListener('click', restartGame)

    // document.addEventListener('click', function() {
    //     if(event.target === ULBox)  {
    //         ULBox.src = "imgs/doughnut.png";
    //     }
    // })

    // document.addEventListener('click', function() {
    //     if(event.target === UMBox)  {
    //         UMBox.src = "imgs/sausage.png";
            
    //     }
    // })

    // document.addEventListener('click', function() {
    //     if(event.target === URBox)  {
    //         URBox.src = "imgs/doughnut.png";
    //     }
    // })

    // document.addEventListener('click', function() {
    //     if(event.target === MLBox)  {
    //         MLBox.src = "imgs/sausage.png";
            
    //     }
    // })

    // document.addEventListener('click', function() {
    //     if(event.target === MMBox)  {
    //         MMBox.src = "imgs/doughnut.png";
    //     }
    // })

    // document.addEventListener('click', function() {
    //     if(event.target === MRBox)  {
    //         MRBox.src = "imgs/sausage.png";
            
    //     }
    // })

    // document.addEventListener('click', function() {
    //     if(event.target === LLBox)  {
    //         LLBox.src = "imgs/doughnut.png";
    //     }
    // })

    // document.addEventListener('click', function() {
    //     if(event.target === LMBox)  {
    //        LMBox.src = "imgs/sausage.png";
            
    //     }
    // })

    // document.addEventListener('click', function() {
    //     if(event.target === LRBox)  {
    //         LRBox.src = "imgs/sausage.png";
            
    //     }
