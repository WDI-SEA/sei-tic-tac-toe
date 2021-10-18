![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Tic Tac Toe

## Objectives

* Build a tic tac toe game in HTML, CSS, and vanilla JavaScript
* Use best practices when writing code

This week we have been learning about writing functions, working with loops, and writing conditionals. We also learned about HTML, CSS, and the DOM.

We will be making a Tic Tac Toe game using all of these concepts.

## Getting Started

* Before you even start working with JavaScript, construct the gameboard. The gameboard page should include the 3x3 grid (of divs), and at minimum a reset button. Using `id` and/or `class` on clickable elements will help you wire this up in JavaScript afterwards.
* The JavaScript portion will be next
  * Select elements and attach functions via event listeners
  * You will also need a variable to keep track of moves. This will be used to indicate whether or not to draw an `X` or an `O`

## Requirements
* A user should be able to click on different squares to make a move.
* Every click will alternate between marking an `X` and `O`
* Upon marking of an individual cell, use JavaScript to add an `X` or `O` to the cell, according to whose turn it is.
* A cell should not be able to be replayed once marked.
* You should not be able to click remaining empty cells after the game is over.
* Add a reset button that will clear the contents of the board.
* Display a message to indicate which turn is about to be played.
* Detect draw conditions (ties/cat's game) 
* Detect winner: Stop game and declare the winner if one player ends up getting three in a row. 
  * Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

**Have Fun** - The best way to learn is by playing with code. Let creativity guide you and try some experiments with JS and CSS and see what you can do.

## Bonuses

* Implement your reset button without refreshing the whole page
* Track player's wins over time
* Add a simple AI to support one player vs computer mode. In this case, "simple" just means having the computer pick a random empty square.
* Make your computer seem more human by adding a short time delay between your turn and the computer's turn.
* Style it up! Get creative, or even make a theme!

## Super Duper Bonus

* Add an AI that can beat you every time with the mini-max algorithm.

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.


Notes:

//Alternate between x and o for every click
//determine the last move made(x or o)
//determine which should be next (x or o)
//pass something to a function that will play either x or o depending on above conditions


//How TO FRY AN EGG
get egg
crack egg
fry egg

determine if there are eggs
find where egg live
attain one egg
attain 8oz stick of butter 
place egg gently on counter near working surface
determine if you have a pan
find where the pans live
open the door to the pan cabinet 
remove one(1) pan from cabinet
select burner on stove to use
place pan gently on stove
cut 1 stbsp of butter from stick of buter
place said tbsp of butter in pan
locate stovetop dials