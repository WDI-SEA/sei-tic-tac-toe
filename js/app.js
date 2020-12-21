//variable array for initial game state;
let gameArray = [];
let blankState = 'blank';
let cornState = 'corn';
let earState = 'ear';
let gameStart = true;
const cornImg="./assets/corn.png";
const earImg=".assets/ear.png";
const blankImg="./assets/blank.png";


    // variables for square states
let aSqSt;
let bSqSt;
let cSqSt;
let dSqSt;
let eSqSt;
let fSqSt;
let gSqSt;
let hSqSt;
let iSqSt;

//variables for square's images src
let aSqImg;
let bSqImg;
let cSqImg;
let dSqImg;
let eSqImg;
let fSqImg;
let gSqImg;
let hSqImg;
let iSqImg;
let initState;
// game variables
    // is the game open for play declaration

let cornNext = true;
let earNext;

//Create a query selector for all game squares calling 
    //from game square class and data-square

const gameLogs = document.querySelectorAll('.gameSquare');
const aSqImg = document.querySelector("imgb.aSqI");
const bSqImg = document.querySelector("imgb.bSqI");
const cSqImg = document.querySelector("imgb.cSqI");
const dSqImg = document.querySelector("imgb.dSqI");
const eSqImg = document.querySelector("imgb.eSqI");
const fSqImg = document.querySelector("imgb.fSqI");
const gSqImg = document.querySelector("imgb.gSqI");
const hSqImg = document.querySelector("imgb.hSqI");
const iSqImg = document.querySelector("imgb.iSqI");

const checkGameState = () => {
    const aSq = gameLogs[0].classList[2];
    const bSq = gameLogs[1].classList[2];
    const cSq = gameLogs[2].classList[2];
    const dSq = gameLogs[3].classList[2];
    const eSq = gameLogs[4].classList[2];
    const fSq = gameLogs[5].classList[2];
    const gSq = gameLogs[6].classList[2];
    const hSq = gameLogs[7].classList[2];
    const iSq = gameLogs[8].classList[2];
    console.log(aSq, bSq, cSq, dSq, eSq, fSq, gSq, hSq, iSq);
 //checking for winner states
    if (aSq && aSq === bSq && aSq === cSq){
        
    }

};


const gameSquareClick = (e) => {
    console.log(e.target.classList);
    const classList = e.target.classList;
    const whereClicked = classList[1];
    console.log("whereClicked", whereClicked);
    if (classList [2]=== 'corn'){
        document
    }
    if (classList[2] === 'corn' || classList[2] === 'ear'){
        return;
    }
    if (cornNext) {
        classList.add('corn');
        
        // checkGameState();
        cornNext = !cornNext;
    } else {
        classList.add('ear');
        
        // checkGameState();
        cornNext = !cornNext;
        
    } 
}

//Event listener for if game square is clicked
for (const gameLog of gameLogs ){
    gameLog.addEventListener('click', gameSquareClick); 
   
        
    }




// document.addEventListener ("DOMContentLoaded", (e) => {


//     //listen for a click and change the game state array
//     aSqSt = document.querySelector(".aSq");
//     bSqSt = document.querySelector(".bSq");
//     cSqSt = document.querySelector(".cSq");
//     dSqSt = document.querySelector(".dSq");
//     eSqSt = document.querySelector(".eSq");
//     fSqSt = document.querySelector(".fSq");
//     gSqSt = document.querySelector(".gSq");
//     hSqSt = document.querySelector(".hSq");
//     iSqSt = document.querySelector(".iSq");
// // initial image states
//     aSqImg = document.querySelector("imgb.aSqI");
//     bSqImg = document.querySelector("imgb.bSqI");
//     cSqImg = document.querySelector("imgb.cSqI");
//     dSqImg = document.querySelector("imgb.dSqI");
//     eSqImg = document.querySelector("imgb.eSqI");
//     fSqImg = document.querySelector("imgb.fSqI");
//     gSqImg = document.querySelector("imgb.gSqI");
//     hSqImg = document.querySelector("imgb.hSqI");
//     iSqImg = document.querySelector("imgb.iSqI");
//         aSqImg.src = blankImg;
//         bSqImg.src = blankImg;
//         cSqImg.src = blankImg;
//         dSqImg.src = blankImg;
//         eSqImg.src = blankImg;
//         fSqImg.src = blankImg;
//         gSqImg.src = blankImg;
//         hSqImg.src = blankImg;
//         iSqImg.src = blankImg;
    

   
    


    
// //listen for click on div
// // change the array storage with splice
// //console log the game array
// //change the img of the div

// if(gameArray = [
//     ['blank', 'blank', 'blank'], 
//     ['blank', 'blank', 'blank'], 
//     ['blank', 'blank', 'blank'] 
//     ] ){
//     aSqSt.addEventListener ("click", (e) =>{
//         gameArray.splice(0, 1,  ["corn", "blank", "blank"]);
//         console.log(gameArray);
//         aSqImg.src = cornImg; 
//     })
//     bSqSt.addEventListener ("click", (e) =>{
//         gameArray.splice(0, 1,  ["blank", "corn", "blank"]);
//         console.log(gameArray);
//         bSqImg.src = cornImg; 
//     })
//     cSqSt.addEventListener ("click", (e) =>{
//         gameArray.splice(0, 1,  ["blank", "blank", "corn"]);
//         console.log(gameArray);
//         cSqImg.src = cornImg; 
//     })
//     dSqSt.addEventListener ("click", (e) =>{
//         gameArray.splice(1, 1,  ["corn", "blank", "blank"]);
//         console.log(gameArray);
//         dSqImg.src = cornImg; 
//     })
//     eSqSt.addEventListener ("click", (e) =>{
//         gameArray.splice(1, 1,  ["blank", "corn", "blank"]);
//         console.log(gameArray);
//         eSqImg.src = cornImg; 
//     })
//     fSqSt.addEventListener ("click", (e) =>{
//         gameArray.splice(1, 1,  ["blank", "blank", "corn"]);
//         console.log(gameArray);
//         fSqImg.src = cornImg; 
//     })
//     gSqSt.addEventListener ("click", (e) =>{
//         gameArray.splice(2, 1,  ["corn", "blank", "blank"]);
//         console.log(gameArray);
//         gSqImg.src = cornImg; 
//     })
//     hSqSt.addEventListener ("click", (e) =>{
//         gameArray.splice(2, 1,  ["blank", "corn", "blank"]);
//         console.log(gameArray);
//         hSqImg.src = cornImg; 
//     })
//     iSqSt.addEventListener ("click", (e) =>{
//         gameArray.splice(2, 1,  ["blank", "blank", "corn"]);
//         console.log(gameArray);
//         iSqImg.src = cornImg; 
//     })
    

//     }
// })
