const boxes = document.querySelectorAll(".box")
console.log(boxes)
const ticTac = document.getElementById("tic-tac-board")
const xPlayer = "X"
const oPlayer = "O"
let currentPlayer = oPlayer;
let xturn = true;
// var clicked = false
// document.getElementById('.box').addEventListener("click", alertMe)




boxes.forEach(box => {
box.addEventListener("click", clickBox)
})

function clickBox(e) {
    const box = e.target;
    console.log("clicked")
    // if(xturn === true){
    //     box.innerText = "0";
    //     } else {
    //     box.innerText = "X"
    //     }  

    
    // let currentTurn = xturn;
    // if( xturn === true){
    //     xPlayer
    // } else {
    //      oPlayer
    // }
    
    // placeSymbol()
        
    }

    



function placeSymbol(){
    if(xturn === true){
    box.innerText = "0";
    } else {
    box.innerText = "X"
    }    


}


console.log("klsdajasdf")
console.log(boxes)

const alertMe = () => {
    alert("alerfddf")
}