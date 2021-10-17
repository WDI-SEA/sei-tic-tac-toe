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
  let gameWon = false
  let catsGame = false
  const resetBtn = document.querySelector('button')
  const xTurnIndicators = document.getElementsByClassName('xTurnIndicator')
  const oTurnIndicators = document.getElementsByClassName('oTurnIndicator')
  const catsGameIndicator = document.querySelector('.catsGameIndicator')

  function checkCatsGame(){
    catsGame = true
    for( let i = 0; i < tiles.length; i++){
      if (!tiles[i].classList.contains('selected')){
        catsGame = false
      }
    }
    if(catsGame){
      catsGameIndicator.style.display = 'initial'
      xTurnIndicators[0].style.display = 'none'
      xTurnIndicators[1].style.display = 'none'
      oTurnIndicators[0].style.display = 'none'
    }
  }

  function checkGameWon(){
    if (
      topLeft.classList.contains('x')&&topCenter.classList.contains('x')&&topRight.classList.contains('x') ||
      centerLeft.classList.contains('x')&&centerCenter.classList.contains('x')&&centerRight.classList.contains('x') ||
      bottomLeft.classList.contains('x')&&bottomCenter.classList.contains('x')&&bottomRight.classList.contains('x') ||
      topLeft.classList.contains('x')&&centerLeft.classList.contains('x')&&bottomLeft.classList.contains('x') ||
      topCenter.classList.contains('x')&&centerCenter.classList.contains('x')&&bottomCenter.classList.contains('x') ||
      topRight.classList.contains('x')&&centerRight.classList.contains('x')&&bottomRight.classList.contains('x') ||
      topLeft.classList.contains('x')&&centerCenter.classList.contains('x')&&bottomRight.classList.contains('x') ||
      topRight.classList.contains('x')&&centerCenter.classList.contains('x')&&bottomLeft.classList.contains('x')
    ){
      xWinsMessage.style.display = 'initial'
      gameWon = true
    }
    else if (
      topLeft.classList.contains('o')&&topCenter.classList.contains('o')&&topRight.classList.contains('o') ||
      centerLeft.classList.contains('o')&&centerCenter.classList.contains('o')&&centerRight.classList.contains('o') ||
      bottomLeft.classList.contains('o')&&bottomCenter.classList.contains('o')&&bottomRight.classList.contains('o') ||
      topLeft.classList.contains('o')&&centerLeft.classList.contains('o')&&bottomLeft.classList.contains('o') ||
      topCenter.classList.contains('o')&&centerCenter.classList.contains('o')&&bottomCenter.classList.contains('o') ||
      topRight.classList.contains('o')&&centerRight.classList.contains('o')&&bottomRight.classList.contains('o') ||
      topLeft.classList.contains('o')&&centerCenter.classList.contains('o')&&bottomRight.classList.contains('o') ||
      topRight.classList.contains('o')&&centerCenter.classList.contains('o')&&bottomLeft.classList.contains('o')
    ){
      oWinsMessage.style.display = 'initial'
      gameWon = true
    }
    if(gameWon){
      xTurnIndicators[0].style.display = 'none'
      xTurnIndicators[1].style.display = 'none'
      oTurnIndicators[0].style.display = 'none'
    } else {
      checkCatsGame()
    }
  }

  function selectTile(tile){
    if(!tile.classList.contains('selected') && !gameWon){
      if (xTurn){
        tile.classList.add('x')
        tile.innerText = 'x'
        tile.style.color = 'red'
        xTurnIndicators[0].classList.add('invisible')
        xTurnIndicators[1].classList.add('invisible')
        oTurnIndicators[0].classList.remove('invisible')
      } else {
        tile.classList.add('o')
        tile.innerText = 'o'
        xTurnIndicators[0].classList.remove('invisible')
        xTurnIndicators[1].classList.remove('invisible')
        oTurnIndicators[0].classList.add('invisible')
      }
      // Signal that the tile has been selected
      tile.classList.add('selected')
      // Change turns
      xTurn = !xTurn
      // Check for game completion
      checkGameWon()
    }
  }

  function reset(){
    for (let i = 0; i<tiles.length; i++){
      tiles[i].classList.remove('x','o','selected')
      tiles[i].innerText = ''
      tiles[i].style.color = 'initial'
    }
    xTurn = true
    gameWon = false
    xWinsMessage.style.display = 'none'
    oWinsMessage.style.display = 'none'
    xTurnIndicators[0].style.display = 'initial'
    xTurnIndicators[1].style.display = 'initial'
    oTurnIndicators[0].style.display = 'initial'
    xTurnIndicators[0].classList.remove('invisible')
    xTurnIndicators[1].classList.remove('invisible')
    oTurnIndicators[0].classList.add('invisible')
    catsGameIndicator.style.display = 'none'
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