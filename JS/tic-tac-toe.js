console.log("hello");

console.dir(Object);

gameOver = false

let boardState={
    topLeft: '',
    topCenter: '',
    topRight: '', 
    middleLeft: '',
    middleCenter: '',
    middleRight: '', 
    bottomLeft: '',
    bottomCenter: '',
    bottomRight: '', 

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


topLeft.addEventListener('click', function(){
    topLeft.innerHTML = 'X'
    
})
topCenter.addEventListener('click', function(){
    topCenter.innerHTML = 'X'
    
})
topRight.addEventListener('click', function(){
    topRight.innerHTML = 'X'
    
})
middleLeft.addEventListener('click', function(){
    middleLeft.innerHTML = 'X'
    
})
middleCenter.addEventListener('click', function(){
    middleCenter.innerHTML = 'X'
    
})
middleRight.addEventListener('click', function(){
    middleRight.innerHTML = 'X'
    
})
bottomLeft.addEventListener('click', function(){
    bottomLeft.innerHTML = 'X'
    
})
bottomCenter.addEventListener('click', function(){
    bottomCenter.innerHTML = 'X'
    
})
bottomRight.addEventListener('click', function(){
    bottomRight.innerHTML = 'X'
    
})














// if( orderSelected ==== )