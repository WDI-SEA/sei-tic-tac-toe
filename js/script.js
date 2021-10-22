
const cellElements = document.querySelectorAll("div.square")

function changePlayer () {
     currentPlayer = currentPlayer === "X" ? "O" : "X"; 
        // statusDisplay.innerHTML = currentPlayerTurn();
       document.getElementById("playerTurn")
       .innerHTML = `It's Player ${currentPlayer}'s Turn`
    }

cellElements.forEach(cell => {
    cell.addEventListener("click", handleClick, {once: true})
    // .innerText = "X"
 })

 function handleClick(e){
     console.log(e.target)
     e.target.innerText = currentPlayer
     changePlayer ()
     checkWins()
    //  checkDraw()
 }

let currentPlayer = "X" 

function checkWins (){
    var square1, square2, square3, square4, square5, square6, square7, square8, square9,
 square1 = document.getElementById("square1")
 square2 = document.getElementById("square2")
 square3 = document.getElementById("square3")
 square4 = document.getElementById("square4")
 square5 = document.getElementById("square5")
 square6 = document.getElementById("square6")
 square7 = document.getElementById("square7")
 square8 = document.getElementById("square8")
 square9 = document.getElementById("square9")
 console.log(document.getElementById("printWin")
 .innerHTML)
     if ((square1.innerText == "X") && (square2.innerText == "X") && (square3.innerText == "X")) {
         document.getElementById("printWin")
         .innerHTML = "Player X Won!";
        square4.disabled = true;
        square5.disabled = true;
        square6.disabled = true;
        square7.disabled = true;
        square8.disabled = true;    
        square9.disabled = true;
     }else if ((square1.innerText == "X") && (square4.innerText == "X") && (square7.innerText == "X")){
         document.getElementById("printWin")
         .innerHTML = "Player X Won!"
        square2.disabled = true;
        square3.disabled = true;
        square5.disabled = true;
        square6.disabled = true;
        square8.disabled = true;    
        square9.disabled = true;
     }else if ((square7.innerText == "X") && (square8.innerText == "X") && (square9.innerText == "X")) {
         document.getElementById("printWin")
         .innerHTML = "Player X Won!"
        square1.disabled = true;
        square2.disabled = true;
        square3.disabled = true;
        square4.disabled = true;
        square5.disabled = true;    
        square6.disabled = true;
     }else if ((square3.innerText == "X") && (square6.innerText == "X") && (square9.innerText == "X")){
        document.getElementById("printWin")
        .innerHTML = "Player X Won!"
        square1.disabled = true;
        square2.disabled = true;
        square4.disabled = true;
        square5.disabled = true;
        square8.disabled = true;    
        square6.disabled = true;
     }else if ((square1.innerText == "X") && (square5.innerText == "X") && (square9.innerText == "X")){
         document.getElementById("printWin")
         .innerHTML = "Player X Won!"
        square2.disabled = true;
        square3.disabled = true;
        square4.disabled = true;
        square6.disabled = true;
        square7.disabled = true;    
        square8.disabled = true;
     }else if ((square3.innerText == "X") && (square5.innerText == "X") && (square7.innerText == "X")){
        document.getElementById("printWin")
        .innerHTML = "Player X Won!"
        square1.disabled = true;
        square2.disabled = true;
        square4.disabled = true;
        square6.disabled = true;
        square8.disabled = true;    
        square9.disabled = true;
    }else if ((square2.innerText == "X") && (square5.innerText == "X") && (square8.innerText == "X")){
        document.getElementById("printWin")
        .innerHTML = "Player X Won!"
        square1.disabled = true;
        square3.disabled = true;
        square4.disabled = true;
        square6.disabled = true;
        square7.disabled = true;    
        square9.disabled = true;
    }else if ((square4.innerText == "X") && (square5.innerText == "X") && (square6.innerText == "X")){
        document.getElementById("printWin")
        .innerHTML = "Player X Won!"
        square1.disabled = true;
        square2.disabled = true;
        square3.disabled = true;
        square7.disabled = true;
        square8.disabled = true;    
        square9.disabled = true;
    }
    //Start of "O" checks
    else if ((square1.innerText == "O") && (square4.innerText == "O") && (square7.innerText == "O")){
        document.getElementById("printWin")
        .innerHTML = "Player O Won!"
        square2.disabled = true;
        square3.disabled = true;
        square5.disabled = true;
        square6.disabled = true;
        square8.disabled = true;    
        square9.disabled = true;
    }else if ((square7.innerText == "O") && (square8.innerText == "O") && (square9.innerText == "O")){
        document.getElementById("printWin")
        .innerHTML = "Player O Won!"
        square1.disabled = true;
        square2.disabled = true;
        square3.disabled = true;
        square4.disabled = true;
        square5.disabled = true;    
        square6.disabled = true;
    }else if ((square3.innerText == "O") && (square6.innerText == "O") && (square9.innerText == "O")){
        document.getElementById("printWin")
        .innerHTML = "Player O Won!"
        square1.disabled = true;
        square2.disabled = true;
        square4.disabled = true;
        square5.disabled = true;
        square7.disabled = true;    
        square8.disabled = true;
    }else if ((square1.innerText == "O") && (square5.innerText == "O") && (square9.innerText == "O")){
        document.getElementById("printWin")
        .innerHTML = "Player O Won!"
        square2.disabled = true;
        square3.disabled = true;
        square4.disabled = true;
        square6.disabled = true;
        square7.disabled = true;    
        square8.disabled = true;
    }else if ((square3.innerText == "O") && (square5.innerText == "O") && (square7.innerText == "O")){
        document.getElementById("printWin")
        .innerHTML = "Player O Won!"
        square1.disabled = true;
        square2.disabled = true;
        square4.disabled = true;
        square6.disabled = true;
        square8.disabled = true;    
        square9.disabled = true;
    }else if ((square2.innerText == "O") && (square5.innerText == "O") && (square8.innerText == "O")){
        document.getElementById("printWin")
        .innerHTML = "Player O Won!"
        square1.disabled = true;
        square3.disabled = true;
        square4.disabled = true;
        square5.disabled = true;
        square7.disabled = true;    
        square9.disabled = true;
    }else if ((square1.innerText == "O") && (square2.innerText == "O") && (square3.innerText == "O")){
        document.getElementById("printWin")
        .innerHTML = "Player O Won!"
        square4.disabled = true;
        square5.disabled = true;
        square6.disabled = true;
        square7.disabled = true;
        square8.disabled = true;    
        square9.disabled = true;
    }else if ((square4.innerText == "O") && (square5.innerText == "O") && (square6.innerText == "O")){
        document.getElementById("printWin")
        .innerHTML = "Player O Won!"
        square1.disabled = true;
        square2.disabled = true;
        square3.disabled = true;
        square7.disabled = true;
        square8.disabled = true;    
        square9.disabled = true;
    }else {
    
    const allSquares = document.querySelectorAll(".square") 
    let isTie = true
    for (let i = 0; i < allSquares.length; i++) {
       
        if (allSquares[i].innerText !== "X" && allSquares[i].innerText !== "O") {
            isTie = false
        }
    } 
    if (isTie) {
        document.getElementById("printWin")
        .innerHTML = "It's a Draw! Play Again."
    }
    
    }
}
// function clickFunc() {
//     window.location.reload("Refresh")
// }


// let square = document.getElementsByClassName("square")
// square.addEventListener('click', checkWins)
// if (square1.innerText == 'X') {
//         console.log("Square1 clicked");



// var spanContent = document.getElementsByClassName("square1");
// check

// square1 = document.getElementById("square1");
// console.log(square1.includes("X"))


