const spaces = document.querySelectorAll(".space");
const result = document.querySelector(".result");
//DOM selectors
resetButton.addEventListener("click", reset);
function reset() {
  location.reload();
}

const winningConditions = {
  winningConditionRow1: ["x", "", ""],
  winningConditionRow2: ["", "", ""],
  winningConditionRow3: ["", "", ""],
  winningConditionColumn1: ["x", "", ""],
  winningConditionColumn2: ["", "", ""],
  winningConditionColumn3: ["", "", ""],
  winningConditionDiagonal1: ["x", "", ""],
  winningConditionDiagonal2: ["", "", ""],
};
function winTester(inputObject) {
  Object.values(inputObject).forEach((item) => {
    let counterX = 0;
    let counterO = 0;

    item.forEach((item) => {
      if (item[0] === "x" || item[1] === "x" || item[2] === "x") {
        counterX = counterX += 1;
      } else if (item[0] === "o" || item[1] === "o" || item[2] === "o") {
        counterO = counterO += 1;
      }
    });
    if (counterX === 3) {
      // stop the game
      // return X is the winner

      result.textContent = "X is the winner";
      spaces.forEach((space) => {
        space.disabled = true;
      });
    } else if (counterO === 3) {
      // stop the game
      // return O is the winner
      spaces.forEach((space) => {
        space.disabled = true;
      });
      result.textContent = "O is the winner";
    }
  });
}

let moves = 0;
if (moves >= 9) {
  result.textContent("cats game");
}

spaces.forEach((space) => {
  space.addEventListener("click", (e) => {
    // If player is even then currentPlayer = x else currentPlayer= 'o'
    if (moves % 2 === 0) {
      currentPlayer = "x";
    } else {
      currentPlayer = "o";
    }
    // Adding +1 to moves
    moves = moves += 1;

    //console.log(space.id);
    //console.log(moves);

    space.textContent = currentPlayer;
    console.log(space.id);
    switch (space.id) {
      case "space-1":
        space.textContent = currentPlayer;
        space.disabled = true;
        console.log(`${space.id}clicked`);
        winningConditions.winningConditionRow1[0] = currentPlayer;
        winningConditions.winningConditionColumn1[0] = currentPlayer;
        winningConditions.winningConditionDiagonal1[0] = currentPlayer;

        winTester(winningConditions);

        console.log(
          winningConditions.winningConditionRow1,
          winningConditions.winningConditionColumn1,
          winningConditions.winningConditionDiagonal1
        );
        break;
      case "space-2":
        space.textContent = currentPlayer;
        space.disabled = true;
        console.log(`${space.id}clicked`);
        winningConditions.winningConditionRow1[1] = currentPlayer;
        winningConditions.winningConditionColumn2[0] = currentPlayer;
        break;
        winTester(winningConditions);

        console.log(
          winningConditions.winningConditionRow1,
          winningConditions.winningConditionColumn2
        );
      case "space-3":
        space.textContent = currentPlayer;
        space.disabled = true;
        console.log(`${space.id}clicked`);
        winningConditions.winningConditionRow1[2] = currentPlayer;
        winningConditions.winningConditionColumn3[0] = currentPlayer;
        winningConditions.winningConditionDiagonal2[0] = currentPlayer;

        winTester(winningConditions);

        console.log(
          winningConditions.winningConditionRow1,
          winningConditions.winningConditionColumn3,
          winningConditions.winningConditionDiagonal2
        );

        break;
      case "space-4":
        space.textContent = currentPlayer;
        space.disabled = true;
        console.log(`${space.id}clicked`);
        winningConditions.winningConditionRow2[0] = currentPlayer;
        winningConditions.winningConditionColumn1[1] = currentPlayer;

        winTester(winningConditions);

        console.log(
          winningConditions.winningConditionRow2,
          winningConditions.winningConditionColumn1
        );
        break;
      case "space-5":
        space.textContent = currentPlayer;
        space.disabled = true;
        console.log(`${space.id}clicked`);
        winningConditions.winningConditionRow2[1] = currentPlayer;
        winningConditions.winningConditionColumn2[1] = currentPlayer;
        winningConditions.winningConditionDiagonal1[1] = currentPlayer;
        winningConditions.winningConditionDiagonal2[1] = currentPlayer;

        winTester(winningConditions);

        console.log(
          winningConditions.winningConditionRow2,
          winningConditions.winningConditionColumn2,
          winningConditions.winningConditionDiagonal1,
          winningConditions.winningConditionDiagonal2
        );
        break;
      case "space-6":
        space.textContent = currentPlayer;
        space.disabled = true;
        console.log(`${space.id}clicked`);
        winningConditions.winningConditionRow2[2] = currentPlayer;
        winningConditions.winningConditionColumn3[1] = currentPlayer;

        winTester(winningConditions);

        console.log(
          winningConditions.winningConditionRow2,
          winningConditions.winningConditionColumn3
        );
        break;
      case "space-7":
        space.textContent = currentPlayer;
        space.disabled = true;
        console.log(`${space.id}clicked`);
        winningConditions.winningConditionRow3[0] = currentPlayer;
        winningConditions.winningConditionColumn1[2] = currentPlayer;
        winningConditions.winningConditionDiagonal2[2] = currentPlayer;

        winTester(winningConditions);

        console.log(
          winningConditions.winningConditionRow3,
          winningConditions.winningConditionColumn1,
          winningConditions.winningConditionDiagonal2
        );
        break;
      case "space-8":
        space.textContent = currentPlayer;
        space.disabled = true;
        console.log(`${space.id}clicked`);
        winningConditions.winningConditionRow3[1] = currentPlayer;
        winningConditions.winningConditionColumn2[2] = currentPlayer;

        winTester(winningConditions);

        console.log(
          winningConditions.winningConditionRow3,
          winningConditions.winningConditionColumn2
        );
        break;
      case "space-9":
        space.textContent = currentPlayer;
        space.disabled = true;
        console.log(`${space.id}clicked`);
        winningConditions.winningConditionRow3[2] = currentPlayer;
        winningConditions.winningConditionColumn3[2] = currentPlayer;
        winningConditions.winningConditionDiagonal1[2] = currentPlayer;

        winTester(winningConditions);

        console.log(
          winningConditions.winningConditionRow3,
          winningConditions.winningConditionColumn3,
          winningConditions.winningConditionDiagonal1
        );
        break;
    }
  });
});

let boardArray = ["X", "O", "", "", "", "", "", "", ""];
let currentPlayer = "X";

// // # 1114 TTT Planning Document

// // ## Preparation

// // * make a simple wireframe of the TTT website
// //     * all of the html elements that will be needed for the game
// //     * visually draw boxes out of the page layout
// //     * simple mockup
// // * review phase
// //     * look over lessons from this week that you need to reivew
// //         * use the gitbook
// //         * code you wrote in lecture or deliverables or labs
// //         * do google around concepts
// // * Don't Panic!
// //     * don't forgot your towel

// // ## html

// // we need to keep track of the gameboard in javascript c
// // a way to index spaces -- that correlates to the arrays c
// // a way to make the x's and o's stick
// // use an array to keep track of the x's and o's on the gameboard
// // (option 1: 1d array) ['x', '', '', '', '', '', '', '', '']
// // (option 2: trickier 2d array):
// // [
// //     ['x', '', ''],
// //     ['o', 'x', ''],
// //     ['o', '', 'x']
// // ]
// // array[0][0] -- accessing a 2d array
// // a way to alternate players
// // a varaible that tracks whose turn it currently is -- this would start off as 'x'
// // a varaible that tracks if the game is running or not
// // let isRunning = true
// // event listeners --clicking on the divs and making the x's or o's appear
// // when a space is clicked, do the following:
// // first check if that spot in the array is empty and that isRunning is true, if so, do the following:
// // we make an x or o appear -- as simple as setting the inner text
// // check if a win has occured
// // check all 8 win cases for 'x' and for 'o'
// // cats games could check if all spaces are filled (verbose) OR
// // have a varaible that increments every turn and call a cats game at 9 if no body has won
// // if the game is won or a cats game occurs -- set isRunning to false
// // other ways to check out that might be good to end the game
// // if game is won -- we could remove the gameboard from the DOM
// // or you could fill up the array spaces
// // delete a class to prevent listeners from firing
// // alternate players if a win did not occur by changing the varaible that tracks whose turn it currently is
// // increment the turn counter to move closer to the cats condition
