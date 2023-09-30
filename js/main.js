/*
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
*/