let xMoves = []
let oMoves = []
let turns = 0


const boxes = document.querySelectorAll(".box")

function ticTurn(target) {
    if (turns % 2 === 0){
        console.log ("playerX")
        xMoves.push(target.id)
        target.classList.add("xMoves")
        target.innerText = "X"
        console.log(target.classList)
    } else {
        console.log ("playero")
        oMoves.push(target.id)
        target.innerText = "O"
    } 
    turns++
}
//check for a winner
// we need to determind all of the combinations "if check"
// need to be able to stop the game if its a cats game
// make sure somebody cannot click on the same square twice
// button to reset the game to its initial state

document.addEventListener("DOMContentLoaded" , () => {
    console.log("DOMContentLoaded")
    boxes.forEach(box => {
        box.addEventListener("click" , event => {
            console.log (event.target.id)
            ticTurn(event.target)
        } )
    })
})