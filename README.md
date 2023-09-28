![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Tic Tac Toe

## Objectives

* Build a tic tac toe game in HTML, CSS, and vanilla JavaScript
* Use best practices when writing code

This week we have been learning about writing functions, working with loops, and writing conditionals. We also learned about HTML, CSS, and the DOM.

We will be making a Tic Tac Toe game using all of these concepts.

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

### Bonuses

* Implement your reset button without refreshing the whole page
* Track player's wins over time
* Add a simple AI to support one player vs computer mode. In this case, "simple" just means having the computer pick a random empty square.
* Make your computer seem more human by adding a short time delay between your turn and the computer's turn.
* Style it up! Get creative, or even make a theme!

### Super Duper Bonus

* Add an AI that can beat you every time with the mini-max algorithm.

## How to Get Started

### Setting up the project

* start by forking this repo, to make your personal copy on github
* clone your fork with `git clone < your fork's cloning url >`
* bootstrap your project files: create and `index.html` along with a js and css file.
* to view your html file in your browser us `open index.html` from your terminal. (remember to refresh the page to see changes you make in your code)
* Make sure your files are connected -- test a css style such a loud background color and a console.log in your js file before getting to work.

### Sling some code

* Before you even start working with JavaScript, construct the gameboard. The gameboard page should include the 3x3 grid (of divs), and at minimum a reset button. Using `id` and/or `class` on clickable elements will help you wire this up in JavaScript afterwards.
* The JavaScript portion will be next
  * Select elements and attach functions via event listeners
  * You will also need a variable to keep track of moves. This will be used to indicate whether or not to draw an `X` or an `O`
  * what should happen each time a user clicks....? What javascript will you need to support these actions....?
  * Pseudocode out your ideas and rubberduck them aloud.
* Do not style your game until the logic is finished. Only write basic css to display the gameboard.

_The next section is optional if you would like a more fleshed out guide on pseudocoding ideas for this project. You make skip it if you would like to work through the problem your own way by writing your own pseudocode. Feel free to follow the guidance of the pseudocode provided below; you may even copy it into your `js` file and code it out line by line._

<details>

<summary>One approach to pseudocoding the problem</summary>

### Pseudocode

Pseudocode is a detailed description of what an application must do, written in natural language instead of a particular programming language.

Well-written pseudocode should be easily translated into actual code.

The best way to get started is to start with the "big picture" of what the app needs to do:

```
1) Define required constants

2) Define required variables used to track the state of the game

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

4) Upon loading the app should:
  4.1) Initialize the state variables
  4.2) Render those values to the page
  4.3) Wait for the user to click a square

5) Handle a player clicking a square

6) Handle a player clicking the replay button
```

Since most web apps are event-driven by nature. Coding an event-driven program generally requires that we set up the application when it loads (steps 1 - 4) and wait for the user to interact with the app (steps 5 & 6).

Now we can start adding as many detailed steps as desired.

Typically, pseudocode does not have to be as detailed as the following - it is highly detailed here to help you as much as possible:

```
1) Define required constants:
  1.1) Define a colors object with keys of 'null' (when the square is empty), and players 1 & -1. The value assigned to each key represents the color to display for an empty square (null), player 1 and player -1.
  1.2) Define the 8 possible winning combinations, each containing three indexes of the board that make a winner if they hold the same player value.

2) Define required variables used to track the state of the game:
  2.1) Use a board array to represent the squares.
  2.2) Use a turn variable to remember whose turn it is.
  2.3) Use a winner variable to represent three different possibilities - player that won, a tie, or game in play.

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:
  3.1) Store the 9 elements that represent the squares on the page.

4) Upon loading the app should:
  4.1) Initialize the state variables:
    4.1.1) Initialize the board array to 9 nulls to represent empty squares. The 9 elements will "map" to each square, where index 0 maps to the top-left square and index 8 maps to the bottom-right square.
    4.1.2) Initialize whose turn it is to 1 (player 'X'). Player 'O' will be represented by -1.
    4.1.3) Initialize winner to null to represent that there is no winner or tie yet. Winner will hold the player value (1 or -1) if there's a winner. Winner will hold a 'T' if there's a tie. 
  4.2) Render those state variables to the page:
    4.2.1) Render the board:
      4.2.1.1) Loop over each of the 9 elements that represent the squares on the page, and for each iteration:
        4.2.1.1.2) Use the index of the iteration to access the mapped value from the board array.
        4.3.1.1.3) Set the background color of the current element by using the value as a key on the colors lookup object (constant).
    4.2.2) Render a message:
      4.2.2.1) If winner has a value other than null (game still in progress), render whose turn it is - use the color name for the player, converting it to upper case.
      4.2.2.2) If winner is equal to 'T' (tie), render a tie message.
      4.2.2.3) Otherwise, render a congratulatory message to which player has won - use the color name for the player, converting it to uppercase.
  4.3) Wait for the user to click a square

5) Handle a player clicking a square:
  5.1) Obtain the index of the square that was clicked by either:
    5.1.1) "Extracting" the index from an id assigned to the element in the HTML, or
    5.1.2) Looping through the cached square elements using a for loop and breaking out when the current square element equals the event object's target.
  5.2) If the board has a value at the index, immediately return because that square is already taken.
  5.3) If winner is not null, immediately return because the game is over.
  5.4) Update the board array at the index with the value of turn.
  5.5) Flip turns by multiplying turn by -1 (flips a 1 to -1, and vice-versa).
  5.6) Set the winner variable if there's a winner:
    5.6.1) Loop through the each of the winning combination arrays defined.
    5.6.2) Total up the three board positions using the three indexes in the current combo.
    5.6.3) Convert the total to an absolute value (convert any negative total to positive).
    5.6.4) If the total equals 3, we have a winner! Set winner to the board's value at the index specified by the first index in the combo array. Exit the loop.
  5.7) If there's no winner, check if there's a tie:
    5.7.1) Set winner to 'T' if there are no more nulls in the board array.
  5.8) All state has been updated, so render the state to the page (step 4.2).
		

6) Handle a player clicking the replay button:
  6.1) Do steps 4.1 (initialize the state variables) and 4.2 (render).
```

Using a numbered outline is not required but helps organize the more complex steps into detailed steps.

</details>

---

## Licensing

1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
