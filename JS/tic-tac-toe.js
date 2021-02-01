console.log("hello");

gameOver = false

selectionEl = null

let spotsToFill= []

let counter= 0;


let boardState={
    top_left: false,
    top_center: false,
    top_right: false, 
    middle_left: false,
    middle_center: false,
    middle_right: false, 
    bottom_left: false,
    bottom_center: false,
    bottom_right: false, 

}

let topLeft = document.querySelector('#top_left');
let topCenter = document.querySelector('#top_center');
let topRight = document.querySelector('#top_right');
let middleLeft = document.querySelector('#middle_left');
let middleCenter = document.querySelector('#middle_center');
let middleRight = document.querySelector('#middle_right');
let bottomLeft = document.querySelector('#bottom_left');
let bottomCenter = document.querySelector('#bottom_center');
let bottomRight = document.querySelector('#bottom_right');









function initializeGame() {
    gameOver = false
    spotsToFill= []
    boardState= {
        top_left: false,
        top_center: false,
        top_right: false, 
        middle_left: false,
        middle_center: false,
        middle_right: false, 
        bottom_left: false,
        bottom_center: false,
        bottom_right: false, 
    }
    counter = 0

}




function selectBox(event){
    let boxLocation = event.target.id;
    if(!gameOver && boardState[boxLocation] === false){
        if(counter %2 === 0){
        event.target.innerText = 'X'
        }else{
        event.target.innerText = "O"
        }
        boardState[boxLocation] = true;
        counter++;
    }
    
}

function resetGame(){

}




document.addEventListener('DOMContentLoaded', function () {
    console.log('loaded!');
    backgroundEl = document.querySelector("main")
    resetButtonEl = document.querySelector("#reset")

    resetButtonEl.addEventListener('click', resetGame)


    selectionEl= document.querySelector(".container")
    selectionEl.addEventListener("click", selectBox)


    boxes= selectionEl.children
    console.log(initializeGame);
    initializeGame()



})
















// if( orderSelected ==== )

//if list of spots to fill is blank, the place x in there
// if spots to fill is x, then make it an o
// if there is a click inside of div then