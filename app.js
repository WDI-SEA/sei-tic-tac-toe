import Player from "./Player.js"
// DOM SELECTORS
const btn1 = document.getElementById("button1")
const btn2 = document.getElementById("button2")
const btn3 = document.getElementById("button3")
const btn4 = document.getElementById("button4")
const btn5 = document.getElementById("button5")
const btn6 = document.getElementById("button6")
const btn7 = document.getElementById("button7")
const btn8 = document.getElementById("button8")
const btn9 = document.getElementById("button9")
// EVENT LISTENERS
btn1.addEventListener("click", (e) => {})
btn2.addEventListener("click", (e) => {})
btn3.addEventListener("click", (e) => {})
btn4.addEventListener("click", (e) => {})
btn5.addEventListener("click", (e) => {})
btn6.addEventListener("click", (e) => {})
btn7.addEventListener("click", (e) => {})
btn8.addEventListener("click", (e) => {})
btn9.addEventListener("click", (e) => {})

// Winning combinations and ties will be stored in an array or object
// A game board array will store the game board
const gameBoard = ["x", "o", "x", "o", "x", "o", "x", "o", "x"]

// Start Game
// A player is designated and the titles text content will display Player X's Turn: For ease of use the first player will always be x

// player x will click a square on the board. The square will turn from the number to the letter x in the DOM.

// A cell should not be able to be replayed once filled

// An array will be populated with the game board and whichever square is clicked will be populated with either an X or an O depending on which players turn it is

// Button should reset the board and start a new game

// Winning combination idea. If a player clicks a square its coordinates within a 2d grid (x,y) are added to a "col array stored on a player object" For this idea to work the object would have to have 3 rows, 3 cols, and the two diagonals arrays. If any of these are full, or have a non empty array then the respective player has one.
const Player1 = new Player("Jay")
Player1.sayHello()
Player1.checkWinCondition()
/**
 *    012
 * 0{}{}{}
 * 1{}{}{}
 * 2{}{}{}
 */
