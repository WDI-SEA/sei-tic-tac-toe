let gameArray = [];
let blankState = 'blank';
let cornState = 'corn';
let earState = 'ear';
let gameStart = true;
const cornImg="./assets/corn.png";
const earImg=".assets/ear.png";
const blankImg="./assets/blank.png";

//Select all the 
const squareElements = document.querySelectorAll('[data-square]');

squareElements.forEach(square => {
    square.addEventListener('click', squareActive, {once: true});


})

//If a square is not pressed / active

// Place the selection via an image insertion into the div 
//with one of the image values

//Check for Win

// Check for Draw

