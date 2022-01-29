// This eventually will be user input data, for now this is just a place holder text for camparison
let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
let six = 6;
let seven = 7;
let eight = 8;
let nine = 9;

// These arrays below should hold a value of X or O
let player1 = {
  row1: [],
  row2: ["x", "x", "x"],
  row3: [],
  col1: [],
  col2: [],
  col3: [],
  x1: [],
  x2: [],
};

let player2 = {
  row1: [3, 4],
  row2: [5, 6],
  row3: [8, 5],
  col1: [8, 3],
  col2: [1, 1],
  col3: [9],
  x1: [4, 6],
  x2: [4, 5],
};

// This happens when player one selects box one in the game
const p1Input = [1, 2];

// This condition adds an X to Player1 database
// It should also
p1Input.forEach((num, i, arr) => {
  console.log(`Index: ${i} Value: ${num} Array: ${arr}`);
  if (num === 1) {
    player1.row1.push("X");
    console.log(`Player one row 1 was updated: ${player1.row1}`);
  } else {
    console.log("There was a bug");
  }
});
for (let i = 0; i < p1Input.length; i++) {
  // if (p1Input[i] === ) {
  // player1.push('X')

  // Need to look up how to compare an array to an array and find the same values and store them in a new one
  console.log("hi");
}

//THESE ARE WINNING PATTERNS
// Rows
// let row1 = [1, 2, 3]
// let row2 = [4, 5, 6]
// let row3 = [7, 8, 9]
const rows = {
  row1: [1, 2, 3],
  row2: [4, 5, 6],
  row3: [7, 8, 9],
};

// Columns
// let col1 = [1, 4, 7]
// let col2 = [2, 5, 8]
// let col3 = [3, 6, 9]
const columns = {
  col1: [1, 4, 7],
  col2: [2, 5, 8],
  col3: [3, 6, 9],
};

// Across
// let x1 = [1, 5, 9]
// let x2 = [7, 5, 3]
const across = {
  x1: [1, 5, 9],
  x2: [7, 5, 3],
};
//END HERE

//*1.this is where I started* this algorith checks player2 database object to see if it holds arrays that equal to 3, when it finds a property with an array that equals to 3 it changes player2Won from false to true
let player1Won = false;
for (const property in player1) {
  // console.log(`${property}: ${player2[property].length}`)
  if (player1[property].length === 3) {
    player1Won = true;
    break;
  }
}
console.log(`Player 1 won: ${player1Won}`);

let player2Won = false;
for (const property in player2) {
  // console.log(`${property}: ${player2[property].length}`)
  if (player2[property].length === 3) {
    player2Won = true;
    break;
  }
}
console.log(`Player 2 won: ${player2Won}`);

if (player1Won) {
  console.log("Player 1 is the Winner!");
} else {
  console.log("Player 2 is the Winner!");
}

// player1.row1.push(2, 4 ,6)
// console.log(player1.row1)

// for (let i = 0; i < player2.length; i++) {
//   console.log(player2[i])
// }

// player2.forEach(value => {
//     for (let key in value) {
//         console.log(`${key}: ${value[key]}`);
//     }})

// const printValue = (value, i) => {
//   console.log(`${i}. ${value}`)
// }
// player2.forEach(printValue)
