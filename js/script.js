let winner = "";
let gameState = {
  box1: false,
  box2: false,
  box3: false,
  box4: false,
  box5: false,
  box6: false,
  box7: false,
  box8: false,
  box9: false,
};
let picks = {
  playerOne: [],
  playerTwo: [],
};
let winningCombos = {
  combo1: ["box1", "box2", "box3"],
  combo2: ["box4", "box5", "box6"],
  combo3: ["box7", "box8", "box9"],
  combo4: ["box1", "box4", "box7"],
  combo5: ["box2", "box5", "box8"],
  combo6: ["box3", "box6", "box9"],
  combo7: ["box1", "box5", "box9"],
  combo8: ["box3", "box5", "box7"],
};
// two event listeners logging every other click
// on click display X or O depending on even or odd number
//store picks in array, and check to see if they arrays match
// if, on click, while looping the array of picks it
// any of the comobs, console log "x won"
