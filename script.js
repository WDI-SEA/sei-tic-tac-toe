
let container = document.getElementsByClassName("container")
let board = document.getElementsByClassName("board")
let boxesElements = document.getElementsByClassName("boxes")
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")
let box6 = document.getElementById("box6")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")
let box9 = document.getElementById("box9")

// let xinput = "X"
// let oinput = "O"
// let tracker = 0
// let xsTurn
// let osTurn
let turn = "xsTurn"
let winner




// let playXO = (event)=>{
//     //first we need to know who's turn is it?
//     //calling the turnTracker fun
//     turnTracker()



// }

function turnTracker(id){
    let clickedBox = document.getElementById(id)
    if (turn == "xsTurn"){
        clickedBox.innerHTML = "X"
        turn = "osTurn"
    }

    else if(turn == "osTurn"){
        clickedBox.textContent = "O"
        turn = "xsTurn"
    }
    checkforStatus()
}

let checkforStatus = ()=>{
    //start checking for not null and equal texts in rows
    // console.log("the winner is" + winner)
    if((box1.innerHTML!="" && box2.innerHTML!="" && box3.innerHTML!="") && (box1.innerHTML == box2.innerHTML) && (box2.innerHTML == box3.innerHTML)){
        winner = box1.innerHTML
    }
    else if((box4.innerHTML!="" && box5.innerHTML!="" && box6.innerHTML!="") && (box4.innerHTML == box5.innerHTML) && (box5.innerHTML == box6.innerHTML)){
        winner = box4.innerHTML
    }
    else if((box7.innerHTML!="" && box8.innerHTML!="" && box9.innerHTML!="") && (box7.innerHTML == box8.innerHTML) && (box8.innerHTML == box9.innerHTML)){
        winner = box7.innerHTML
    }

    //then columns
    else if((box1.innerHTML!="" && box4.innerHTML!="" && box7.innerHTML!="") && (box1.innerHTML == box4.innerHTML) && (box4.innerHTML == box7.innerHTML)){
        winner = box1.innerHTML
    }
    else if((box2.innerHTML!="" && box5.innerHTML!="" && box8.innerHTML!="") && (box2.innerHTML == box5.innerHTML) && (box5.innerHTML == box8.innerHTML)){
        winner = box2.innerHTML
    }
    else if((box3.innerHTML!="" && box6.innerHTML!="" && box9.innerHTML!="") && (box3.innerHTML == box6.innerHTML) && (box6.innerHTML == box9.innerHTML)){
        winner = box3.innerHTML
    }

    //then crosses
    else if((box1.innerHTML!="" && box5.innerHTML!="" && box9.innerHTML!="") && (box1.innerHTML == box5.innerHTML) && ( box5.innerHTML == box9.innerHTML)){
        winner = box1.innerHTML
    }
    else if((box3.innerHTML!="" && box5.innerHTML!="" && box7.innerHTML!="") && (box3.innerHTML == box5.innerHTML) && (box5.innerHTML == box7.innerHTML)){
        winner = box3.innerHTML
    }

    //draw --
    else{
        winner = "draw"
    }
    return winner
}


//CODE STARTS HERE 
//waiting for dom to load before executing code
document.addEventListener('DOMContentLoaded', ()=>{
//Adding an event listener to all boxes in the board through loop
for(let i=0; i<boxesElements.length; i++) { 

    boxesElements[i].addEventListener("click", turnTracker)
}
})








