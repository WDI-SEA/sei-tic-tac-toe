
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
let statusBox = document.querySelector("#gameStatus")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let reStart = document.getElementById("reStart")


// let xinput = "X"
// let oinput = "O"
// let tracker = 0
// let xsTurn
// let osTurn
let turn = "xsTurn"
let winner =""
player1.style.backgroundColor = "#DFBFCB"



// let playXO = (event)=>{
//     //first we need to know who's turn is it?
//     //calling the turnTracker fun
//     turnTracker()



// }

function startRestart(){
    if(winner!=""){
        for(let i=0; i<boxesElements.length; i++) { 

            boxesElements[i].innerHTML = ""
    }
    statusBox.innerHTML = "XO"
    turn = "xsTurn"
    winner =""
    }



    else{
        for(let i=0; i<boxesElements.length; i++) { 

            boxesElements[i].addEventListener("click", turnTracker)
    }
    }
}

function turnTracker(id){
    let clickedBox = document.getElementById(id)
    if (turn == "xsTurn" && clickedBox.innerHTML=="" && winner==""){
        clickedBox.innerHTML = "X"
        turn = "osTurn"
        player2.style.backgroundColor= "#DFBFCB"
        player1.style.backgroundColor = "#CDCDCD"
    }

    else if(turn == "osTurn" && clickedBox.innerHTML=="" && winner==""){
        clickedBox.innerHTML = "O"
        turn = "xsTurn"
        player1.style.backgroundColor="#DFBFCB"
        player2.style.backgroundColor= "#CDCDCD"
    }
    checkIfWin()
}

let gameStatusFun = (winner)=>{
    //return winner if we already have one
    if(winner!=""){
        winner = winner
        reStart.innerHTML="Restart Game"
        endGame(winner)
    }

    //return draw if there's no winner
    else if(box1.innerHTML!="" &&
    box2.innerHTML!="" &&
    box3.innerHTML!="" &&
    box4.innerHTML!="" &&
    box5.innerHTML!="" &&
    box6.innerHTML!="" &&
    box7.innerHTML!="" &&
    box8.innerHTML!="" &&
    box9.innerHTML!="" &&
    winner==""){
        winner = "draw"
        reStart.innerHTML="Restart Game"
        endGame(winner)
    }

    else{
        winner=""
    }
}



let endGame = (winner) =>{
    statusBox.innerHTML = `The winner is ${winner}`
    player1.style.backgroundColor ="#CDCDCD"
    player2.style.backgroundColor ="#CDCDCD"

    // for(let i=0; i<boxesElements.length; i++) {
    //     boxesElements[i].removeEventListener("click", turnTracker)

    // }

    
    
}



let checkIfWin = ()=> {
     //start checking for not null and equal texts in rows
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
    return gameStatusFun(winner)
}


//CODE STARTS HERE 
//waiting for dom to load before executing code
document.addEventListener('DOMContentLoaded', ()=>{
//Adding an event listener to all boxes in the board through loop
// for(let i=0; i<boxesElements.length; i++) { 

//         boxesElements[i].addEventListener("click", turnTracker)
// }

reStart.addEventListener("click", startRestart)
})

