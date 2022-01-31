console.log("ahhhhhhh!")
let xMoves =[]
let oMovesChoices=[0,1,2,3,4,5,6,7,8]
let oMoves =[]
let winningMoves = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,7]]

let buttons = document.getElementsByTagName('button');


let winCheck = (moves) => {
  for (let i = 0; i < winningMoves.length; i++) {
    let winningNums = winningMoves[i]
    if (moves.includes(winningNums[0]) && moves.includes(winningNums[1]) && moves.includes(winningNums[2])){
      return true
    }
  }
  return false
}

let usedMoves = (num) => {
  const index = oMovesChoices.indexOf(num);
  if (index > -1) {
    oMovesChoices.splice(index,1);
  }
}

let getOMoves = () => {
  const index = Math.floor(Math.random() * oMovesChoices.length)
    return oMovesChoices[index]
}

for (let button of buttons) {
  button.addEventListener("click", function(event) {
    const pick = (parseInt(event.target.id))
    if (xMoves.includes(pick) || oMoves.includes(pick)) {
      document.getElementById("notes").innerText = ('Already Taken')
      return 
    }

    event.target.innerText = "x";
    xMoves.push(pick)
    usedMoves(pick)

    console.log(`moves: ${xMoves}`)
    console.log(`ommoves: ${oMoves}`)
    console.log(`omovechoices: ${oMovesChoices}`)

    if (oMoves.length + xMoves.length == 9) {
      alert("TIE")
      window.location.reload(true);
      return
    }

    if (winCheck(xMoves)) {
      alert("X WINS!")
      window.location.reload(true);
      document.getElementById("notes").innerText = ("You Won!")
      return
    }

    let oPick = getOMoves()
    document.getElementById(oPick.toString()).innerText = "o";
    oMoves.push(pick)
    usedMoves(pick)
    


    if (winCheck(oMoves)) {
      alert("O WINS")
      window.location.reload(true);
      document.getElementById("notes").innerText = ("Computer Won!")
        return
    }

    })
    

}

