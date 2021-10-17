document.addEventListener('DOMContentLoaded', () => {

  const tiles = document.querySelectorAll('.tile')
  const topLeft     = document.querySelector('.topLeft')
  const topCenter   = document.querySelector('.topCenter')
  const topRight    = document.querySelector('.topRight')
  const centerLeft  = document.querySelector('.centerLeft')
  const centerCenter= document.querySelector('.centerCenter')
  const centerRight = document.querySelector('.centerRight')
  const bottomLeft  = document.querySelector('.bottomLeft')
  const bottomCenter= document.querySelector('.bottomCenter')
  const bottomRight = document.querySelector('.bottomRight')
  const xWinsMessage = document.querySelector('.xWins')
  const oWinsMessage = document.querySelector('.oWins')
  let xTurn = true // Boolean for it being x's turn
  let gameComplete = false
  const resetBtn = document.querySelector('button')

  function checkGameComplete(){
    if (
      topLeft.classList.contains('x')&&topCenter.classList.contains('x')&&topRight.classList.contains('x')
    ){
      xWinsMessage.style.display = 'initial'
      gameComplete = true
    }
    else if (
      topLeft.classList.contains('o')&&topCenter.classList.contains('o')&&topRight.classList.contains('o')
    ){
      oWinsMessage.style.display = 'initial'
      gameComplete = true
    }
  }

  function selectTile(tile){
    if(!tile.classList.contains('selected') && !gameComplete)
      if (xTurn){
        tile.classList.add('x')
        tile.innerText = 'x'
      } else {
        tile.classList.add('o')
        tile.innerText = 'o'
      }
      // Signal that the tile has been selected
      tile.classList.add('selected')
      // Change turns
      xTurn = !xTurn
      // Check for game completion
      checkGameComplete()
  }

  function reset(){
    for (let i = 0; i<tiles.length; i++){
      tiles[i].classList.remove('x','o','selected')
      tiles[i].innerText = ''
    }
    xTurn = true
    gameComplete = false
    xWinsMessage.style.display = 'none'
    oWinsMessage.style.display = 'none'
  }

    // add event listener to each tile to run selectTile()
    for (let i = 0; i<tiles.length; i++){
      tiles[i].addEventListener('click', () => {
        selectTile(tiles[i])
      })
    }
    // add event listener to reset btn to run reset()
    resetBtn.addEventListener('click', () => {
      reset()
    })

})