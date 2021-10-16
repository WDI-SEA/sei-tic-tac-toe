//declare nine variables for squares
const square1 = document.querySelector(".div1")
const square2 = document.querySelector(".div2")
const square3 = document.querySelector(".div3")
const square4 = document.querySelector(".div4")
const square5 = document.querySelector(".div5")
const square6 = document.querySelector(".div6")
const square7 = document.querySelector(".div7")
const square8 = document.querySelector(".div8")
const square9 = document.querySelector(".div9")
//declare text area for where X or O will appear
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')
const message3 = document.querySelector('#message3')
const message4 = document.querySelector('#message4')
const message5 = document.querySelector('#message5')
const message6 = document.querySelector('#message6')
const message7 = document.querySelector('#message7')
const message8 = document.querySelector('#message8')
const message9 = document.querySelector('#message9')

//functions for creating text when each square is clicked
const createText1 = () => {
    //if square is clicked, x appears
    message1.innerText = 'X'
    console.log(message1) 
}
const createText2 = () => {
    //if square is clicked, x appears
    message2.innerText = 'X'
    console.log(message2) 
}
const createText3 = () => {
    //if square is clicked, x appears
    message3.innerText = 'X'
    console.log(message3) 
}
const createText4 = () => {
    //if square is clicked, x appears
    message4.innerText = 'X'
    console.log(message4) 
}
const createText5 = () => {
    //if square is clicked, x appears
    message5.innerText = 'X'
    console.log(message5) 
}
const createText6 = () => {
    //if square is clicked, x appears
    message6.innerText = 'X'
    console.log(message6) 
}
const createText7 = () => {
    //if square is clicked, x appears
    message7.innerText = 'X'
    console.log(message7) 
}
const createText8 = () => {
    //if square is clicked, x appears
    message8.innerText = 'X'
    console.log(message8) 
}
const createText9 = () => {
    //if square is clicked, x appears
    message9.innerText = 'X'
    console.log(message9) 
}


//call items
document.addEventListener("DOMContentLoaded", () => {
    //click square 1
    square1.addEventListener("click", createText1)
    //click square 2
    square2.addEventListener("click", createText2)
    //click square 3
    square3.addEventListener("click", createText3)
    //click square 4
    square4.addEventListener("click", createText4)
    //click square 5
    square5.addEventListener("click", createText5)
    //click square 6
    square6.addEventListener("click", createText6)
    //click square 7
    square7.addEventListener("click", createText7)
    //click square 8
    square8.addEventListener("click", createText8)
    //click square 9
    square9.addEventListener("click", createText9)

//NEXT:
    //if statement for if certain square is selected

        //if statement for other options once that square is selected
    
})