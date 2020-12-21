//variable array for initial game state;
let gameArray = [];
let blankState = 'blank';
let cornState = 'corn';
let earState = 'ear';
let gameStart = true;
const cornImg="./assets/corn.png";
const earImg=".assets/ear.png";
const blankImg="./assets/blank.png";


gameArray = [
    ['blank', 'blank', 'blank'], 
    ['blank', 'blank', 'blank'], 
    ['blank', 'blank', 'blank'] 
]
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

document.addEventListener ("DOMContentLoaded", (e) => {


    //listen for a click and change the game state array
    aSqSt = document.querySelector(".aSq");
    bSqSt = document.querySelector(".bSq");
    cSqSt = document.querySelector(".cSq");
    dSqSt = document.querySelector(".dSq");
    eSqSt = document.querySelector(".eSq");
    fSqSt = document.querySelector(".fSq");
    gSqSt = document.querySelector(".gSq");
    hSqSt = document.querySelector(".hSq");
    iSqSt = document.querySelector(".iSq");
// initial image states
    aSqImg = document.querySelector(".aSqI");
    bSqImg = document.querySelector(".bSqI");
    cSqImg = document.querySelector(".cSqI");
    dSqImg = document.querySelector(".dSqI");
    eSqImg = document.querySelector(".eSqI");
    fSqImg = document.querySelector(".fSqI");
    gSqImg = document.querySelector(".gSqI");
    hSqImg = document.querySelector(".hSqI");
    iSqImg = document.querySelector(".iSqI");
        aSqImg.src = blankImg;
        bSqImg.src = blankImg;
        cSqImg.src = blankImg;
        dSqImg.src = blankImg;
        eSqImg.src = blankImg;
        fSqImg.src = blankImg;
        gSqImg.src = blankImg;
        hSqImg.src = blankImg;
        iSqImg.src = blankImg;
    

   
    
 

    
//listen for click on div
// change the array storage with splice
//console log the game array
//change the img of the div

if(gameArray = [
    ['blank', 'blank', 'blank'], 
    ['blank', 'blank', 'blank'], 
    ['blank', 'blank', 'blank'] 
    ] ){
    aSqSt.addEventListener ("click", (e) =>{
        gameArray.splice(0, 1,  ["corn", "blank", "blank"]);
        console.log(gameArray);
        aSqImg.src = cornImg; 
    })
    bSqSt.addEventListener ("click", (e) =>{
        gameArray.splice(0, 1,  ["blank", "corn", "blank"]);
        console.log(gameArray);
        bSqImg.src = cornImg; 
    })
    cSqSt.addEventListener ("click", (e) =>{
        gameArray.splice(0, 1,  ["blank", "blank", "corn"]);
        console.log(gameArray);
        cSqImg.src = cornImg; 
    })
    dSqSt.addEventListener ("click", (e) =>{
        gameArray.splice(1, 1,  ["corn", "blank", "blank"]);
        console.log(gameArray);
        dSqImg.src = cornImg; 
    })
    eSqSt.addEventListener ("click", (e) =>{
        gameArray.splice(1, 1,  ["blank", "corn", "blank"]);
        console.log(gameArray);
        eSqImg.src = cornImg; 
    })
    fSqSt.addEventListener ("click", (e) =>{
        gameArray.splice(1, 1,  ["blank", "blank", "corn"]);
        console.log(gameArray);
        fSqImg.src = cornImg; 
    })
    gSqSt.addEventListener ("click", (e) =>{
        gameArray.splice(2, 1,  ["corn", "blank", "blank"]);
        console.log(gameArray);
        gSqImg.src = cornImg; 
    })
    hSqSt.addEventListener ("click", (e) =>{
        gameArray.splice(2, 1,  ["blank", "corn", "blank"]);
        console.log(gameArray);
        hSqImg.src = cornImg; 
    })
    iSqSt.addEventListener ("click", (e) =>{
        gameArray.splice(2, 1,  ["blank", "blank", "corn"]);
        console.log(gameArray);
        iSqImg.src = cornImg; 
    })
    

    }
})
