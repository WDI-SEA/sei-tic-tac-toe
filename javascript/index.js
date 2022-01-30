// append <div class='x'>X</div>

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

//Saturday morning work

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

const rows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const columns = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

// the goal of this function is to iterate through rows and through each array and save each array to a variable

const storeRowsCombo = (row) => {
  let freeNumber = 0;
  row.forEach((num, i, arr) => {
    console.log(`Index: ${i}, Element: ${num},  Array: ${arr}`);
    for (let z = 0; z < num.length; z++) {
      console.log(`${i}:`, num[z]);
      freeNumber = num[z];
      console.log(freeNumber);
    }
  });

  // for (const prop in row) {
  //   console.log(`${prop} = ${row[prop]}`)
  //   console.log(prop.length)
  // for (let z = 0; z < prop.length; z++) {
  //   console.log(prop)
  // }
};
// }
// storeRowsCombo(rows)
storeRowsCombo(columns);

// Noon work
// These arrays below should hold a value of X
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

const rows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const columns = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

const p1Input = [1, 7, 6];

// the goal of this function is to iterate through rows and through each array and save each array to a variable

const storeRowsCombo = (row, playerInput) => {
  let freeNumber = 0;
  let row1num1;
  let row1num2;
  let row1num3;

  let row2num1;
  let row2num2;
  let row2num3;

  let row3num1;
  let row3num2;
  let row3num3;

  let input1;
  let input2;
  let input3;
  let input4;
  let input5;

  let player1 = {
    row1: [],
    row2: [],
    row3: [],
    col1: [],
    col2: [],
    col3: [],
    x1: [],
    x2: [],
  };

  row.forEach((num, i, arr) => {
    console.log(`Index: ${i}, Element: ${num},  Array: ${arr}`);
    // console.log(i[1])
    if (i === 0) {
      (row1num1 = num[0]), (row1num2 = num[1]), (row1num3 = num[2]);
    }

    // here I need to get that second index value which is 1
    if (i === 1) {
      row2num1 = num[0];
    }
    console.log("@@@@" + row2num1);

    for (let z = 0; z < num.length; z++) {}
  });

  // console.log('####',row1num1)

  let playerInputValue = 0;
  playerInput.forEach((num2, i2, arr2) => {
    // console.log(`Index: ${i2} Value: ${num2} Array: ${arr2}`);

    if (i2 === 0) {
      input1 = arr2[0];
      input2 = arr2[1];
      input2 = arr2[2];
      console.log("success");
    } else {
      console.log("bug");
    }

    // console.log(input1)
  });
  let two = 2;
  console.log(row1num1, row1num2, row1num3);
  console.log(input1);

  // this works with test data
  if (input1 === row1num1 || input1 === row1num2 || input1 === row1num3) {
    player1.row1.push("X");
    console.log(`Player one row 1 was updated: ${player1.row1}`);
  } else {
    console.log(
      `Number ${input1} was not found in ${row1num1} ${row1num2} ${row1num3}`
    );
  }

  if (input2 === row1num1 || input1 === row1num2 || input1 === row1num3) {
    player1.row1.push("X");
    console.log(`Player one row 1 was updated: ${player1.row1}`);
  } else {
    console.log(
      `Number ${input1} was not found in ${row1num1} ${row1num2} ${row1num3}`
    );
  }

  console.log(player1);
};

// console.log(input1)
storeRowsCombo(columns, p1Input);

// Saturday night work %%%%%%%%%%%%%%%%
// These arrays below should hold a value of X
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

const rows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const columns = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

const across = [
  [3, 5, 7],
  [1, 5, 9],
];

const p1Input = [1, 2, 3];

// the goal of this function is to iterate through rows and through each array and save each array to a variable

const storeRowsCombo = (row, col, across, playerInput) => {
  let row1num1;
  let row1num2;
  let row1num3;
  let row2num1;
  let row2num2;
  let row2num3;
  let row3num1;
  let row3num2;
  let row3num3;

  let col1num1;
  let col1num2;
  let col1num3;
  let col2num1;
  let col2num2;
  let col2num3;
  let col3num1;
  let col3num2;
  let col3num3;

  let x1num1;
  let x1num2;
  let x1num3;
  let x2num1;
  let x2num2;
  let x2num3;

  // max amount of inputs can be 5, min amount is 3
  let input1;
  let input2;
  let input3;
  let input4;
  let input5;

  let player1 = {
    row1: [],
    row2: [],
    row3: [],
    col1: [],
    col2: [],
    col3: [],
    x1: [],
    x2: [],
  };

  row.forEach((num, i, arr) => {
    // console.log(`Index: ${i}, Element: ${num},  Array: ${arr}`)
    row1num1 = arr[0][0];
    row1num2 = arr[0][1];
    row1num3 = arr[0][2];

    row2num1 = arr[1][0];
    row2num2 = arr[1][1];
    row2num3 = arr[1][2];

    row3num1 = arr[2][0];
    row3num2 = arr[2][1];
    row3num3 = arr[2][2];

    // Test to see if everything ios stored correctly
    // console.log(`Row one: ${row1num1}, ${row1num2}, ${row1num3} Row two: ${row2num1}, ${row2num2}, ${row2num3} Row three: ${row3num1}, ${row3num2}, ${row3num3}`)
  });
  col.forEach((num, i, arr) => {
    // console.log(`*******Index: ${i}, Element: ${num},  Array: ${arr}`)
    col1num1 = arr[0][0];
    col1num2 = arr[0][1];
    col1num3 = arr[0][2];

    col2num1 = arr[1][0];
    col2num2 = arr[1][1];
    col2num3 = arr[1][2];

    col3num1 = arr[2][0];
    col3num2 = arr[2][1];
    col3num3 = arr[2][2];

    // Test to see if everything ios stored correctly
    // console.log(`&&&&&&&Row one: ${col1num1}, ${col1num2}, ${col1num3} Row two: ${col2num1}, ${col2num2}, ${col2num3} Row three: ${col3num1}, ${col3num2}, ${col3num3}`)
  });

  across.forEach((num, i, arr) => {
    // console.log(`*******Index: ${i}, Element: ${num},  Array: ${arr}`)
    x1num1 = arr[0][0];
    x1num2 = arr[0][1];
    x1num3 = arr[0][2];
    x2num1 = arr[1][0];
    x2num2 = arr[1][1];
    x2num3 = arr[1][2];

    // Test to see if everything ios stored correctly
    // console.log(`+++&&&&&&&Row one: ${x1num1}, ${x1num2}, ${x1num3} Row two: ${x2num1}, ${x2num2}, ${x2num3} `)
  });

  let playerInputValue = 0;
  playerInput.forEach((num2, i2, arr2) => {
    // console.log(`Index: ${i2} Value: ${num2} Array: ${arr2}`);
    // console.log(arr2[i2])
    input1 = arr2[0];
    input2 = arr2[1];
    input3 = arr2[2];
    input4 = arr2[3];
    input5 = arr2[4];
  });

  // This part checks if input is equal to winning combo if it is then it pushes an X to players database

  // Input 1
  if (input1 === row1num1 || input1 === row1num2 || input1 === row1num3) {
    player1.row1.push("X");
    console.log(
      `Number ${input1} was FOUND in ${row1num1} ${row1num2} ${row1num3} Player one row A was updated: ${player1.row1}`
    );
  } else {
    console.log(
      `Number ${input1} was not found in ${row1num1} ${row1num2} ${row1num3}`
    );
  }

  if (input1 === row2num1 || input1 === row2num2 || input2 === row2num3) {
    player1.row2.push("X");
    console.log(
      `Number ${input1} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row B was updated: ${player1.row2}`
    );
  } else {
    console.log(
      `Number ${input1} was not found in ${row2num1} ${row2num2} ${row2num3}`
    );
  }

  if (input1 === row3num1 || input1 === row3num2 || input2 === row3num3) {
    player1.row3.push("X");
    console.log(
      `Number ${input1} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 1 was updated: ${player1.row3}`
    );
  } else {
    console.log(
      `Number ${input1} was not found in ${row3num1} ${row3num2} ${row3num3}`
    );
  }

  if (input1 === col1num1 || input1 === col1num2 || input2 === col1num3) {
    player1.col1.push("X");
    console.log(
      `Number ${input1} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one row 1 was updated: ${player1.col1}`
    );
  } else {
    console.log(
      `Number ${input1} was not found in ${col1num1} ${col1num2} ${col1num3}`
    );
  }
  if (input1 === col2num1 || input1 === col2num2 || input2 === col2num3) {
    player1.col2.push("X");
    console.log(
      `Number ${input1} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one row 1 was updated: ${player1.col2}`
    );
  } else {
    console.log(
      `Number ${input1} was not found in ${col2num1} ${col2num2} ${col3num3}`
    );
  }

  if (input1 === col3num1 || input1 === col3num2 || input2 === col3num3) {
    player1.col3.push("X");
    console.log(
      `Number ${input1} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one row 1 was updated: ${player1.col3}`
    );
  } else {
    console.log(
      `Number ${input1} was not found in ${col3num1} ${col3num2} ${col3num3}`
    );
  }

  if (input1 === x1num1 || input1 === x1num2 || input1 === x1num3) {
    player1.x1.push("X");
    console.log(
      `Number ${input1} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one row 1 was updated: ${player1.x1}`
    );
  } else {
    console.log(
      `Number ${input1} was not found in ${x1num1} ${x1num2} ${x1num3}`
    );
  }

  if (input1 === x2num1 || input1 === x2num2 || input2 === x2num3) {
    player1.x2.push("X");
    console.log(
      `Number ${input1} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one row 1 was updated: ${player1.x1}`
    );
  } else {
    console.log(
      `Number ${input1} was not found in ${x2num1} ${x2num2} ${x2num3}`
    );
  }

  // Input 2
  if (input2 === row1num1 || input2 === row1num2 || input2 === row1num3) {
    player1.row1.push("X");
    console.log(
      `Number ${input2} was FOUND in ${row1num1} ${row1num2} ${row1num3} Player one row A was updated: ${player1.row1}`
    );
  } else {
    console.log(
      `Number ${input2} was not found in ${row1num1} ${row1num2} ${row1num3}`
    );
  }

  if (input2 === row2num1 || input2 === row2num2 || input2 === row2num3) {
    player1.row2.push("X");
    console.log(
      `Number ${input2} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row B was updated: ${player1.row2}`
    );
  } else {
    console.log(
      `Number ${input2} was not found in ${row2num1} ${row2num2} ${row2num3}`
    );
  }

  if (input2 === row3num1 || input2 === row3num2 || input2 === row3num3) {
    player1.row3.push("X");
    console.log(
      `Number ${input2} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 1 was updated: ${player1.row3}`
    );
  } else {
    console.log(
      `Number ${input2} was not found in ${row3num1} ${row3num2} ${row3num3}`
    );
  }

  if (input2 === col1num1 || input2 === col1num2 || input2 === col1num3) {
    player1.col1.push("X");
    console.log(
      `Number ${input2} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one row 1 was updated: ${player1.col1}`
    );
  } else {
    console.log(
      `Number ${input2} was not found in ${col1num1} ${col1num2} ${col1num3}`
    );
  }
  if (input2 === col2num1 || input2 === col2num2 || input2 === col2num3) {
    player1.col2.push("X");
    console.log(
      `Number ${input2} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one row 1 was updated: ${player1.col2}`
    );
  } else {
    console.log(
      `Number ${input2} was not found in ${col2num1} ${col2num2} ${col3num3}`
    );
  }

  if (input2 === col3num1 || input2 === col3num2 || input2 === col3num3) {
    player1.col3.push("X");
    console.log(
      `Number ${input2} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one row 1 was updated: ${player1.col3}`
    );
  } else {
    console.log(
      `Number ${input2} was not found in ${col3num1} ${col3num2} ${col3num3}`
    );
  }

  if (input2 === x1num1 || input2 === x1num2 || input2 === x1num3) {
    player1.x1.push("X");
    console.log(
      `Number ${input2} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one row 1 was updated: ${player1.x1}`
    );
  } else {
    console.log(
      `Number ${input2} was not found in ${x1num1} ${x1num2} ${x1num3}`
    );
  }

  if (input2 === x2num1 || input2 === x2num2 || input2 === x2num3) {
    player1.x2.push("X");
    console.log(
      `Number ${input2} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one row 1 was updated: ${player1.x1}`
    );
  } else {
    console.log(
      `Number ${input2} was not found in ${x2num1} ${x2num2} ${x2num3}`
    );
  }

  // Input 3
  if (input3 === row1num1 || input3 === row1num2 || input3 === row1num3) {
    player1.row1.push("X");
    console.log(
      `Number ${input3} was FOUND in ${row1num3} ${row1num2} ${row1num3} Player one row A was updated: ${player1.row1}`
    );
  } else {
    console.log(
      `Number ${input3} was not found in ${row1num1} ${row1num2} ${row1num3}`
    );
  }

  if (input3 === row2num1 || input3 === row2num2 || input3 === row2num3) {
    player1.row2.push("X");
    console.log(
      `Number ${input3} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row B was updated: ${player1.row2}`
    );
  } else {
    console.log(
      `Number ${input3} was not found in ${row2num1} ${row2num2} ${row2num3}`
    );
  }

  if (input3 === row3num1 || input3 === row3num2 || input3 === row3num3) {
    player1.row3.push("X");
    console.log(
      `Number ${input3} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 1 was updated: ${player1.row3}`
    );
  } else {
    console.log(
      `Number ${input3} was not found in ${row3num1} ${row3num2} ${row3num3}`
    );
  }

  if (input3 === col1num1 || input3 === col1num2 || input3 === col1num3) {
    player1.col1.push("X");
    console.log(
      `Number ${input3} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one row 1 was updated: ${player1.col1}`
    );
  } else {
    console.log(
      `Number ${input3} was not found in ${col1num1} ${col1num2} ${col1num3}`
    );
  }
  if (input3 === col2num1 || input3 === col2num2 || input3 === col2num3) {
    player1.col2.push("X");
    console.log(
      `Number ${input3} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one row 1 was updated: ${player1.col2}`
    );
  } else {
    console.log(
      `Number ${input3} was not found in ${col2num1} ${col2num2} ${col3num3}`
    );
  }

  if (input3 === col3num1 || input3 === col3num2 || input3 === col3num3) {
    player1.col3.push("X");
    console.log(
      `Number ${input3} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one row 1 was updated: ${player1.col3}`
    );
  } else {
    console.log(
      `Number ${input3} was not found in ${col3num1} ${col3num2} ${col3num3}`
    );
  }

  if (input3 === x1num1 || input3 === x1num2 || input3 === x1num3) {
    player1.x1.push("X");
    console.log(
      `Number ${input3} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one row 1 was updated: ${player1.x1}`
    );
  } else {
    console.log(
      `Number ${input3} was not found in ${x1num1} ${x1num2} ${x1num3}`
    );
  }

  if (input3 === x2num1 || input3 === x2num2 || input3 === x2num3) {
    player1.x2.push("X");
    console.log(
      `Number ${input3} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one row 1 was updated: ${player1.x1}`
    );
  } else {
    console.log(
      `Number ${input3} was not found in ${x2num1} ${x2num2} ${x2num3}`
    );
  }

  // Input 4
  if (input4 === row1num1 || input4 === row1num2 || input4 === row1num3) {
    player1.row1.push("X");
    console.log(
      `Number ${input4} was FOUND in ${row1num3} ${row1num2} ${row1num3} Player one row A was updated: ${player1.row1}`
    );
  } else {
    console.log(
      `Number ${input4} was not found in ${row1num1} ${row1num2} ${row1num3}`
    );
  }

  if (input4 === row2num1 || input4 === row2num2 || input4 === row2num3) {
    player1.row2.push("X");
    console.log(
      `Number ${input4} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row B was updated: ${player1.row2}`
    );
  } else {
    console.log(
      `Number ${input4} was not found in ${row2num1} ${row2num2} ${row2num3}`
    );
  }

  if (input4 === row3num1 || input4 === row3num2 || input4 === row3num3) {
    player1.row3.push("X");
    console.log(
      `Number ${input4} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 1 was updated: ${player1.row3}`
    );
  } else {
    console.log(
      `Number ${input4} was not found in ${row3num1} ${row3num2} ${row3num3}`
    );
  }

  if (input4 === col1num1 || input4 === col1num2 || input4 === col1num3) {
    player1.col1.push("X");
    console.log(
      `Number ${input4} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one row 1 was updated: ${player1.col1}`
    );
  } else {
    console.log(
      `Number ${input4} was not found in ${col1num1} ${col1num2} ${col1num3}`
    );
  }
  if (input4 === col2num1 || input4 === col2num2 || input4 === col2num3) {
    player1.col2.push("X");
    console.log(
      `Number ${input4} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one row 1 was updated: ${player1.col2}`
    );
  } else {
    console.log(
      `Number ${input4} was not found in ${col2num1} ${col2num2} ${col3num3}`
    );
  }

  if (input4 === col3num1 || input4 === col3num2 || input4 === col3num3) {
    player1.col3.push("X");
    console.log(
      `Number ${input4} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one row 1 was updated: ${player1.col3}`
    );
  } else {
    console.log(
      `Number ${input4} was not found in ${col3num1} ${col3num2} ${col3num3}`
    );
  }

  if (input4 === x1num1 || input4 === x1num2 || input4 === x1num3) {
    player1.x1.push("X");
    console.log(
      `Number ${input4} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one row 1 was updated: ${player1.x1}`
    );
  } else {
    console.log(
      `Number ${input4} was not found in ${x1num1} ${x1num2} ${x1num3}`
    );
  }

  if (input4 === x2num1 || input4 === x2num2 || input4 === x2num3) {
    player1.x2.push("X");
    console.log(
      `Number ${input4} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one row 1 was updated: ${player1.x1}`
    );
  } else {
    console.log(
      `Number ${input4} was not found in ${x2num1} ${x2num2} ${x2num3}`
    );
  }

  console.log(player1);
};

// console.log(input1)
storeRowsCombo(rows, columns, across, p1Input);
