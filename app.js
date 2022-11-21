//build a tic tac toe game

var tileElements = document.getElementsByClassName("tile")
const restartBtn = document.querySelector("#restartButton")
var X_person = "X"
var Y_person = "O"

var stepCounter = 0
function determineLetter(){
    if(stepCounter % 2 == 0){
        return "X"
    }else{
        return "O"
    }
}
function reset(){
    location.reload();
}
function clickTileOne(){
    //console.log("click tile")
    if(document.getElementById("tilesone").innerText== ""){
        document.getElementById("tilesone").innerText=determineLetter()
        stepCounter+=1
    } else{
        console.log("tile1 is taken")
    }

}

function clickTile2(){
    //console.log("click tile")
    if(document.getElementById("tilestwo").innerText== ""){
        document.getElementById("tilestwo").innerText=determineLetter()
        stepCounter+=1
    } else{
        console.log("tile2 is taken")
    }
}

function clickTile3(){
    //console.log("click tile")
    if(document.getElementById("tilesthree").innerText== ""){
        document.getElementById("tilesthree").innerText=determineLetter()
        stepCounter+=1
    } else{
        console.log("tile3 is taken")
    }

}

function clickTile4(){
    //console.log("click tile")
    if(document.getElementById("tilesfour").innerText== ""){
        document.getElementById("tilesfour").innerText=determineLetter()
        stepCounter+=1
    } else{
        console.log("tile4 is taken")
    }

}

function clickTile5(){
   // console.log("click tile")
    if(document.getElementById("tilesfive").innerText== ""){
        document.getElementById("tilesfive").innerText=determineLetter()
        stepCounter+=1
    } else{
        console.log("tile5 is taken")
    }

}

function clickTile6(){
   // console.log("click tile6")
    if(document.getElementById("tilessix").innerText== ""){
        document.getElementById("tilessix").innerText=determineLetter()
        stepCounter+=1
    } else{
        console.log("tile6 is taken")
    }
}


function clickTile7(){
   // console.log("click tile")
    if(document.getElementById("tilesseven").innerText== ""){
        document.getElementById("tilesseven").innerText=determineLetter()
        stepCounter+=1
    } else{
        console.log("tile7 is taken")
    }

}

function clickTile8(){
   // console.log("click tile")
    if(document.getElementById("tileseight").innerText== ""){
        document.getElementById("tileseight").innerText=determineLetter()
        stepCounter+=1
    } else{
        console.log("tile8 is taken")
    }

}

function clickTile9(){
   // console.log("click tile")
    if(document.getElementById("tilesnine").innerText== ""){
        document.getElementById("tilesnine").innerText=determineLetter()
        stepCounter+=1
    } else{
        console.log("tile9 is taken")
    }

}

function clickButton(){
    console.log("click Button")
    if(document.getElementById("restartButton").innerText=="click"){
        console.log("restart")
    
    }
}

function startGame(){
    OTurn = false
    tileElements.forEach(tile => {
    tile.classList.remove(X_person)
    tile.classList.remove(Y_person)
    tile.removeEventListener('click', handleClick)
    tile.addEventListener('click', handleClick, { once: true })
  })
  setcontainerHoverClass()
  winMessageElement.classList.remove('show')
}


function checkWin(){
    if(container[0].textContent === "X" &&
      container[1].textContent === "X" &&
      container[2].textContent === "X"
    ) { alert("Win")}
    else if (
      container[3].textContent === "X" &&
      container[4].textContent === "X" &&
      container[5].textContent === "X"
    ) { alert("Win")}
     else if (
      container[6].textContent === "X" &&
      container[7].textContent === "X" &&
      container[8].textContent === "X"
    ) { alert("Win")}
  
  }
  
   
  var win = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [7,5,7]   
] 

document.getElementById("tilesone").addEventListener("click", clickTileOne);
document.getElementById("tilestwo").addEventListener("click", clickTile2);
document.getElementById("tilesthree").addEventListener("click", clickTile3);
document.getElementById("tilesfour").addEventListener("click", clickTile4);
document.getElementById("tilesfive").addEventListener("click", clickTile5);
document.getElementById("tilessix").addEventListener("click", clickTile6);
document.getElementById("tilesseven").addEventListener("click", clickTile7);
document.getElementById("tileseight").addEventListener("click", clickTile8);
document.getElementById("tilesnine").addEventListener("click", clickTile9);
document.getElementById("restartButton").addEventListener("click", clickButton)
document.querySelector("[data-winning-message-text]").addEventListener("click",startGame)
