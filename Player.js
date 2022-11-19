export default class Player {
  constructor(name) {
    this.name = name
  }
  // winning condition arrays
  winningConditionRow1 = ["", "", ""]
  winningConditionRow2 = ["", "", ""]
  winningConditionRow3 = ["", "", ""]
  winningConditionColumn1 = ["", "", ""]
  winningConditionColumn2 = ["", "", ""]
  winningConditionColumn3 = ["", "", ""]
  winningConditionHorizontal1 = ["", "", ""]
  winningConditionHorizontal2 = ["", "", ""]

  sayHello() {
    console.log(this.name)
  }
  chooseSquare() {
    // is square marked ? do nothing : choose square
    // change square to players symbol
    //
  }

  toggleActivePlayer() {
    // toggle active player
    // if player === x toggle player o
    // if player === 0 toggle player x
    // Render to below H1 "Player ? it is your turn"
  }

  updatePlayerState() {
    // get square that was clicked and update arrays
  }
  checkWinCondition() {
    // checks arrays. If any winning condition is full the player has won.
    // If no array is full and certain amount of moves has taken place cats game
    // Render result below h1
    console.log(this.winningCondition)
  }
}
