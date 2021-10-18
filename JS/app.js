document.addEventListener('DOMContentLoaded', () => {

    const tiles = document.querySelectorAll('.tile')
    const one = document.querySelector('.one')
    const two = document.querySelector('.two')
    const three = document.querySelector('.three')
    const four = document.querySelector('.four')
    const five = document.querySelector('.five')
    const six = document.querySelector('.six')
    const seven = document.querySelector('.seven')
    const eight = document.querySelector('.eight')
    const nine = document.querySelector('.nine')
    const xWinsMessage = document.querySelector('.xWins')
    const oWinsMessage = document.querySelector('.oWins')
    let xTurn = true 
    let gameWon = false
    let catsGame = false
    const resetBtn = document.querySelector('button')
    const turnX = document.getElementsByClassName('turnX')
    const turnO = document.getElementsByClassName('turnO')
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
        turnX[0].style.display = 'none'
        turnX[1].style.display = 'none'
        turnO[0].style.display = 'none'
      }
    }
  
    function checkGameWon(){
      if (
        one.classList.contains('x')&&two.classList.contains('x')&&three.classList.contains('x') ||
        four.classList.contains('x')&&five.classList.contains('x')&&six.classList.contains('x') ||
        seven.classList.contains('x')&&eight.classList.contains('x')&&nine.classList.contains('x') ||
        one.classList.contains('x')&&four.classList.contains('x')&&seven.classList.contains('x') ||
        two.classList.contains('x')&&five.classList.contains('x')&&eight.classList.contains('x') ||
        three.classList.contains('x')&&six.classList.contains('x')&&nine.classList.contains('x') ||
        one.classList.contains('x')&&five.classList.contains('x')&&nine.classList.contains('x') ||
        three.classList.contains('x')&&five.classList.contains('x')&&seven.classList.contains('x')
      ){
        xWinsMessage.style.display = 'initial'
        gameWon = true
      }
      else if (
        one.classList.contains('o')&&two.classList.contains('o')&&three.classList.contains('o') ||
        four.classList.contains('o')&&five.classList.contains('o')&&six.classList.contains('o') ||
        seven.classList.contains('o')&&eight.classList.contains('o')&&nine.classList.contains('o') ||
        one.classList.contains('o')&&four.classList.contains('o')&&seven.classList.contains('o') ||
        two.classList.contains('o')&&five.classList.contains('o')&&eight.classList.contains('o') ||
        three.classList.contains('o')&&six.classList.contains('o')&&nine.classList.contains('o') ||
        one.classList.contains('o')&&five.classList.contains('o')&&nine.classList.contains('o') ||
        three.classList.contains('o')&&five.classList.contains('o')&&seven.classList.contains('o')

      ){
        oWinsMessage.style.display = 'initial'
        gameWon = true
      }
      if(gameWon){
        turnX[0].style.display = 'none'
        turnX[1].style.display = 'none'
        turnO[0].style.display = 'none'
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
          turnX[0].classList.add('invisible')
          turnX[1].classList.add('invisible')
          turnO[0].classList.remove('invisible')
        } else {
          tile.classList.add('o')
          tile.innerText = 'o'
          turnX[0].classList.remove('invisible')
          turnX[1].classList.remove('invisible')
          turnO[0].classList.add('invisible')
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
      for (let i = 0; i < tiles.length; i++){
        tiles[i].classList.remove('x','o','selected')
        tiles[i].innerText = ''
        tiles[i].style.color = 'initial'
      }
      xTurn = true
      gameWon = false
      xWinsMessage.style.display = 'none'
      oWinsMessage.style.display = 'none'
      turnX[0].style.display = 'initial'
      turnX[1].style.display = 'initial'
      turnO[0].style.display = 'initial'
      turnX[0].classList.remove('invisible')
      turnX[1].classList.remove('invisible')
      turnO[0].classList.add('invisible')
      catsGameIndicator.style.display = 'none'
    }
  
      // add event listener to each tile to run selectTile()
      for (let i = 0; i < tiles.length; i++){
          console.log (tiles[i]);
        tiles[i].addEventListener('click', (event) => {
        //   selectTile(tiles[i])
        let gameTile = event.target;
            console.log (gameTile);
        gameTile.innerHTML = "x";
        })
      }
      
      
      // add event listener to reset btn to run reset()
      resetBtn.addEventListener('click', () => {
        reset()
      })
    
  }) 