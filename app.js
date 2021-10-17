document.addEventListener('DOMContentLoaded', () => {

  const tiles = document.querySelectorAll('.tile')
  const topLeft = document.querySelector('.topLeft')
  const xTurn = true

  function selectTile(tile){
    tile.style.backgroundColor = '#444'
  }


    
    // add event listener to each tile to run selectTile
    for (let i = 0; i<tiles.length; i++){
      // tiles[i].addEventListener('click', selectTile(tiles[i]))
    }
    topLeft.addEventListener('click', () => {
      selectTile(topLeft)
    })

})