console.log("ahhhhhhh!")
let xMoves =[]
// let oMovesChoices=[0,1,2,3,4,5,6,7,8]
let oMoves =[]
let winningMoves = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,7]]
let buttons = document.getElementsByTagName('button');

// checks oMoves and xMoves to see if it matches winningMoves
let winCheck = (moves) => {
  for (let i = 0; i < winningMoves.length; i++) {
    let winningNums = winningMoves[i]
    if (moves.includes(winningNums[0]) && moves.includes(winningNums[1]) && moves.includes(winningNums[2])){
      return true
    }
  }
  return false
}

// let usedMoves = (num) => {
//   const index = oMovesChoices.indexOf(num);
//   if (index > -1) {
//     oMovesChoices.splice(index,1);
//   }
// }

// let getOMoves = () => {
//   const index = Math.floor(Math.random() * oMovesChoices.length)
//     return oMovesChoices[index]
// }

// let gameOver = () => {
//   if (winCheck(oMoves) = false || winCheck(xMoves = false)) && (oMoves.length + xMoves.length == 9) {

//   }
// }

for (let button of buttons) {
  button.addEventListener("click", function(event) {
    const pick = (parseInt(event.target.id))
    if (xMoves.includes(pick) || oMoves.includes(pick)) {
      // document.getElementById("poewon").src="/img/poe.png"
      document.getElementById("notes").innerText = (`Already Taken`)
      return 
    }
  
    
remove event listener...
    
    if (xMoves.length > oMoves.length) {
      event.target.innerText = "o";
      oMoves.push(pick)
      document.getElementById("notes").innerText = (`o move!`)
    } else if (xMoves.length === oMoves.length) {
      document.getElementById("notes").innerText = (`x move!`)
      event.target.innerText = "x";
      xMoves.push(pick)
    }

    console.log(`xmoves: ${xMoves}`)
    console.log(`ommoves: ${oMoves}`)
    console.log(pick)

    // console.log(`omovechoices: ${oMovesChoices}`)



    if (winCheck(xMoves)) {
      document.getElementById("notes").innerText = ("x Won!")
      // document.getElementById("poewon").src="/img/poe.png"
    }
//image element add src 

    if (winCheck(oMoves)) {
      document.getElementById("notes").innerText = ("o Won!")
        return
    }

    if ((oMoves.length + xMoves.length == 9) && (winCheck(xMoves)=== false) && (winCheck(oMoves) === false)) {
      document.getElementById("notes").innerText = ("It's a Tie!")
        return
    }

  })
    

}
