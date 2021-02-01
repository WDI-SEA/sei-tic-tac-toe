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
        top_left: null,
        top_center: null,
        top_right: null, 
        middle_left: null,
        middle_center: null,
        middle_right: null, 
        bottom_left: null,
        bottom_center: null,
        bottom_right: null, 
    }
    counter = 0

}




function selectBox(event){
    let boxLocation = event.target.id;
    if(!gameOver && boardState[boxLocation] === null){
        if(counter %2 === 0){
        event.target.innerText = 'X'
        document.querySelector('#result').innerText= "It is O's turn!" 
        }else{
        event.target.innerText = "O"
        document.querySelector('#result').innerText= "It is X's turn!" 
        }
        boardState[boxLocation] = event.target.innerText
        counter++;
    }
    if(boardState.top_left !== null && boardState.top_left === boardState.top_center && boardState.top_right === boardState.top_left){

    gameOver = true

    if(counter %2 === 0){
    document.querySelector('#result').innerText= 'Game is over! O won the game!' 
    } else{
        document.querySelector('#result').innerText= 'Game is over! X won the game!'
    }}else if(boardState.top_left !== null && boardState.top_left === boardState.middle_left && boardState.bottom_left === boardState.top_left){

        gameOver = true
    
        if(counter %2 === 0){
        document.querySelector('#result').innerText= 'Game is over! O won the game!' 
        } else{
            document.querySelector('#result').innerText= 'Game is over! X won the game!'
    }}else if(boardState.top_left !== null && boardState.top_left === boardState.middle_center && boardState.bottom_right === boardState.top_left){

        gameOver = true
    
        if(counter %2 === 0){
        document.querySelector('#result').innerText= 'Game is over! O won the game!' 
        } else{
            document.querySelector('#result').innerText= 'Game is over! X won the game!'
    }}else if(boardState.top_center !== null && boardState.top_center === boardState.middle_center && boardState.bottom_center === boardState.top_center){

        gameOver = true
    
        if(counter %2 === 0){
        document.querySelector('#result').innerText= 'Game is over! O won the game!' 
        } else{
            document.querySelector('#result').innerText= 'Game is over! X won the game!'
    }}else if(boardState.top_right !== null && boardState.top_right === boardState.middle_right && boardState.bottom_right === boardState.top_right){

        gameOver = true
    
        if(counter %2 === 0){
        document.querySelector('#result').innerText= 'Game is over! O won the game!' 
        } else{
            document.querySelector('#result').innerText= 'Game is over! X won the game!'
    }}else if(boardState.top_center !== null && boardState.top_center === boardState.middle_center && boardState.bottom_center === boardState.top_center){

        gameOver = true
    
        if(counter %2 === 0){
        document.querySelector('#result').innerText= 'Game is over! O won the game!' 
        } else{
            document.querySelector('#result').innerText= 'Game is over! X won the game'
    }}else if(boardState.bottom_left !== null && boardState.bottom_left === boardState.bottom_center && boardState.bottom_right === boardState.bottom_left){

        gameOver = true
    
        if(counter %2 === 0){
        document.querySelector('#result').innerText= 'Game is over! O won the game!' 
        } else{
            document.querySelector('#result').innerText= 'Game is over! X won the game'
    }}else if(boardState.middle_left !== null && boardState.middle_left === boardState.middle_center && boardState.middle_right === boardState.middle_left){

        gameOver = true
    
        if(counter %2 === 0){
        document.querySelector('#result').innerText= 'Game is over! O won the game!' 
        } else{
            document.querySelector('#result').innerText= 'Game is over! X won the game!'
    }}else if(boardState.top_right !== null && boardState.top_right === boardState.middle_center && boardState.bottom_left === boardState.top_right){

        gameOver = true
    
        if(counter %2 === 0){
        document.querySelector('#result').innerText= 'Game is over! O won the game!' 
        } else{
            document.querySelector('#result').innerText= 'Game is over! X won the game!'
    }}else if (counter === 9) {
        document.querySelector('#result').innerText = "The game ends in a tie!"
    }

    
    
}


function resetGame(){
    topLeft.innerText = " "
    topCenter.innerText = " "
    topRight.innerText = " "
    middleLeft.innerText = " "
    middleCenter.innerText = " "
    middleRight.innerText = " "
    bottomLeft.innerText = " "
    bottomCenter.innerText = " "
    bottomRight.innerText = " " 
    document.querySelector('#result').innerText= ''
    
    initializeGame()
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
// if there is a click inside of div