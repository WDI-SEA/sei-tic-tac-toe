// append <div class='x'>X</div>

const div1 = (document.getElementById("one").value = 1);
const div2 = (document.getElementById("two").value = 2);
const div3 = (document.getElementById("three").value = 3);
const div4 = (document.getElementById("four").value = 4);
const div5 = (document.getElementById("five").value = 5);
const div6 = (document.getElementById("six").value = 6);
const div7 = (document.getElementById("seven").value = 7);
const div8 = (document.getElementById("eight").value = 8);
const div9 = (document.getElementById("nine").value = 9);

let play1 = true;
let play2 = false;

if (play1) {
  document.getElementById("one");
}

document.getElementById("one").addEventListener("click", function () {
  const number1 = document.getElementById("one");
  number1.append('<div class="x">X</div>');
});

// const reset = document.querySelector('#reset');
// reset.addEventListener('click', () => {
//   document.location.reload();
// });

// Winning patterns
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

// This will be players input
const p1Input = [1, 5, 9, 8];
const p2Input = [2, 3, 4, 6];

// the goal of this function is to iterate through rows and through each array and save each array to a variable

// const storeRowsCombo = (rows, columns, across, p1Input) => {
let row1num1,
  row1num2,
  row1num3,
  row2num1,
  row2num2,
  row2num3,
  row3num1,
  row3num2,
  row3num3;
let col1num1,
  col1num2,
  col1num3,
  col2num1,
  col2num2,
  col2num3,
  col3num1,
  col3num2,
  col3num3;
let x1num1, x1num2, x1num3, x2num1, x2num2, x2num3;

// max amount of inputs can be 5, min amount is 3
// Player 1 Input
let input1p1, input2p1, input3p1, input4p1, input5p1;
// Player 2 Input
let input1p2, input2p2, input3p2, input4p2, input5p2;

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

let player2 = {
  row1: [],
  row2: [],
  row3: [],
  col1: [],
  col2: [],
  col3: [],
  x1: [],
  x2: [],
};

rows.forEach((num, i, arr) => {
  row1num1 = arr[0][0];
  row1num2 = arr[0][1];
  row1num3 = arr[0][2];

  row2num1 = arr[1][0];
  row2num2 = arr[1][1];
  row2num3 = arr[1][2];

  row3num1 = arr[2][0];
  row3num2 = arr[2][1];
  row3num3 = arr[2][2];
});
columns.forEach((num, i, arr) => {
  col1num1 = arr[0][0];
  col1num2 = arr[0][1];
  col1num3 = arr[0][2];

  col2num1 = arr[1][0];
  col2num2 = arr[1][1];
  col2num3 = arr[1][2];

  col3num1 = arr[2][0];
  col3num2 = arr[2][1];
  col3num3 = arr[2][2];
});
across.forEach((num, i, arr) => {
  x1num1 = arr[0][0];
  x1num2 = arr[0][1];
  x1num3 = arr[0][2];
  x2num1 = arr[1][0];
  x2num2 = arr[1][1];
  x2num3 = arr[1][2];
});

p1Input.forEach((num2, i2, arr2) => {
  input1p1 = arr2[0];
  input2p1 = arr2[1];
  input3p1 = arr2[2];
  input4p1 = arr2[3];
  input5p1 = arr2[4];
});

p2Input.forEach((num2, i2, arr2) => {
  input1p2 = arr2[0];
  input2p2 = arr2[1];
  input3p2 = arr2[2];
  input4p2 = arr2[3];
  input5p2 = arr2[4];
});

// can't get this to work having problems with player.row1.push
// const checkInputRow = (input, loc1, loc2, loc3, player) => {
//   if (input === loc1 ||input === loc2 ||input === loc3) {
//     player1.row1.push('X')
//     console.log(`Number ${input} was FOUND in ${loc1} ${loc2} ${loc3} Player one row A was updated: ${player.row1}`)
//   } else {
//     console.log(`Number ${input} was not found in ${loc1} ${loc2} ${loc3}`)
//   }
// }

// This part checks if input is equal to winning combo if it is then it pushes an X to players database
// Player 1
// Input 1
if (input1p1 === row1num1 || input1p1 === row1num2 || input1p1 === row1num3) {
  player1.row1.push("X");
  console.log(
    `Number ${input1p1} was FOUND in ${row1num1} ${row1num2} ${row1num3} Player one row 1 was updated: ${player1.row1}`
  );
} else {
  console.log(
    `Number ${input1p1} was not found in ${row1num1} ${row1num2} ${row1num3}`
  );
}

if (input1p1 === row2num1 || input1p1 === row2num2 || input1p1 === row2num3) {
  player1.row2.push("X");
  console.log(
    `Number ${input1p1} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row 2 was updated: ${player1.row2}`
  );
} else {
  console.log(
    `Number ${input1p1} was not found in ${row2num1} ${row2num2} ${row2num3}`
  );
}

if (input1p1 === row3num1 || input1p1 === row3num2 || input1p1 === row3num3) {
  player1.row3.push("X");
  console.log(
    `Number ${input1p1} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 3 was updated: ${player1.row3}`
  );
} else {
  console.log(
    `Number ${input1p1} was not found in ${row3num1} ${row3num2} ${row3num3}`
  );
}

if (input1p1 === col1num1 || input1p1 === col1num2 || input1p1 === col1num3) {
  player1.col1.push("X");
  console.log(
    `Number ${input1p1} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one column A was updated: ${player1.col1}`
  );
} else {
  console.log(
    `Number ${input1p1} was not found in ${col1num1} ${col1num2} ${col1num3}`
  );
}
if (input1p1 === col2num1 || input1p1 === col2num2 || input1p1 === col2num3) {
  player1.col2.push("X");
  console.log(
    `Number ${input1p1} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one column B was updated: ${player1.col2}`
  );
} else {
  console.log(
    `Number ${input1p1} was not found in ${col2num1} ${col2num2} ${col3num3}`
  );
}

if (input1p1 === col3num1 || input1p1 === col3num2 || input1p1 === col3num3) {
  player1.col3.push("X");
  console.log(
    `Number ${input1p1} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one column C was updated: ${player1.col3}`
  );
} else {
  console.log(
    `Number ${input1p1} was not found in ${col3num1} ${col3num2} ${col3num3}`
  );
}

if (input1p1 === x1num1 || input1p1 === x1num2 || input1p1 === x1num3) {
  player1.x1.push("X");
  console.log(
    `Number ${input1p1} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one across 1 was updated: ${player1.x1}`
  );
} else {
  console.log(
    `Number ${input1p1} was not found in ${x1num1} ${x1num2} ${x1num3}`
  );
}

if (input1p1 === x2num1 || input1p1 === x2num2 || input1p1 === x2num3) {
  player1.x2.push("X");
  console.log(
    `Number ${input1p1} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one across 2 was updated: ${player1.x1}`
  );
} else {
  console.log(
    `Number ${input1p1} was not found in ${x2num1} ${x2num2} ${x2num3}`
  );
}

// Input 2
if (input2p1 === row1num1 || input2p1 === row1num2 || input2p1 === row1num3) {
  player1.row1.push("X");
  console.log(
    `Number ${input2p1} was FOUND in ${row1num1} ${row1num2} ${row1num3} Player one row 1 was updated: ${player1.row1}`
  );
} else {
  console.log(
    `Number ${input2p1} was not found in ${row1num1} ${row1num2} ${row1num3}`
  );
}

if (input2p1 === row2num1 || input2p1 === row2num2 || input2p1 === row2num3) {
  player1.row2.push("X");
  console.log(
    `Number ${input2p1} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row 2 was updated: ${player1.row2}`
  );
} else {
  console.log(
    `Number ${input2p1} was not found in ${row2num1} ${row2num2} ${row2num3}`
  );
}

if (input2p1 === row3num1 || input2p1 === row3num2 || input2p1 === row3num3) {
  player1.row3.push("X");
  console.log(
    `Number ${input2p1} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 3 was updated: ${player1.row3}`
  );
} else {
  console.log(
    `Number ${input2p1} was not found in ${row3num1} ${row3num2} ${row3num3}`
  );
}

if (input2p1 === col1num1 || input2p1 === col1num2 || input2p1 === col1num3) {
  player1.col1.push("X");
  console.log(
    `Number ${input2p1} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one column 1 was updated: ${player1.col1}`
  );
} else {
  console.log(
    `Number ${input2p1} was not found in ${col1num1} ${col1num2} ${col1num3}`
  );
}
if (input2p1 === col2num1 || input2p1 === col2num2 || input2p1 === col2num3) {
  player1.col2.push("X");
  console.log(
    `Number ${input2p1} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one column 2 was updated: ${player1.col2}`
  );
} else {
  console.log(
    `Number ${input2p1} was not found in ${col2num1} ${col2num2} ${col3num3}`
  );
}

if (input2p1 === col3num1 || input2p1 === col3num2 || input2p1 === col3num3) {
  player1.col3.push("X");
  console.log(
    `Number ${input2p1} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one column 3 was updated: ${player1.col3}`
  );
} else {
  console.log(
    `Number ${input2p1} was not found in ${col3num1} ${col3num2} ${col3num3}`
  );
}

if (input2p1 === x1num1 || input2p1 === x1num2 || input2p1 === x1num3) {
  player1.x1.push("X");
  console.log(
    `Number ${input2p1} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one across 1 was updated: ${player1.x1}`
  );
} else {
  console.log(
    `Number ${input2p1} was not found in ${x1num1} ${x1num2} ${x1num3}`
  );
}

if (input2p1 === x2num1 || input2p1 === x2num2 || input2p1 === x2num3) {
  player1.x2.push("X");
  console.log(
    `Number ${input2p1} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one across 2 was updated: ${player1.x1}`
  );
} else {
  console.log(
    `Number ${input2p1} was not found in ${x2num1} ${x2num2} ${x2num3}`
  );
}

// Input 3
if (input3p1 === row1num1 || input3p1 === row1num2 || input3p1 === row1num3) {
  player1.row1.push("X");
  console.log(
    `Number ${input3p1} was FOUND in ${row1num3} ${row1num2} ${row1num3} Player one row 1 was updated: ${player1.row1}`
  );
} else {
  console.log(
    `Number ${input3p1} was not found in ${row1num1} ${row1num2} ${row1num3}`
  );
}

if (input3p1 === row2num1 || input3p1 === row2num2 || input3p1 === row2num3) {
  player1.row2.push("X");
  console.log(
    `Number ${input3p1} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row 2 was updated: ${player1.row2}`
  );
} else {
  console.log(
    `Number ${input3p1} was not found in ${row2num1} ${row2num2} ${row2num3}`
  );
}

if (input3p1 === row3num1 || input3p1 === row3num2 || input3p1 === row3num3) {
  player1.row3.push("X");
  console.log(
    `Number ${input3p1} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 3 was updated: ${player1.row3}`
  );
} else {
  console.log(
    `Number ${input3p1} was not found in ${row3num1} ${row3num2} ${row3num3}`
  );
}

if (input3p1 === col1num1 || input3p1 === col1num2 || input3p1 === col1num3) {
  player1.col1.push("X");
  console.log(
    `Number ${input3p1} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one column A was updated: ${player1.col1}`
  );
} else {
  console.log(
    `Number ${input3p1} was not found in ${col1num1} ${col1num2} ${col1num3}`
  );
}
if (input3p1 === col2num1 || input3p1 === col2num2 || input3p1 === col2num3) {
  player1.col2.push("X");
  console.log(
    `Number ${input3p1} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one column B was updated: ${player1.col2}`
  );
} else {
  console.log(
    `Number ${input3p1} was not found in ${col2num1} ${col2num2} ${col3num3}`
  );
}

if (input3p1 === col3num1 || input3p1 === col3num2 || input3p1 === col3num3) {
  player1.col3.push("X");
  console.log(
    `Number ${input3p1} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one column C was updated: ${player1.col3}`
  );
} else {
  console.log(
    `Number ${input3p1} was not found in ${col3num1} ${col3num2} ${col3num3}`
  );
}

if (input3p1 === x1num1 || input3p1 === x1num2 || input3p1 === x1num3) {
  player1.x1.push("X");
  console.log(
    `Number ${input3p1} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one across 1 was updated: ${player1.x1}`
  );
} else {
  console.log(
    `Number ${input3p1} was not found in ${x1num1} ${x1num2} ${x1num3}`
  );
}

if (input3p1 === x2num1 || input3p1 === x2num2 || input3p1 === x2num3) {
  player1.x2.push("X");
  console.log(
    `Number ${input3p1} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one across 2 was updated: ${player1.x1}`
  );
} else {
  console.log(
    `Number ${input3p1} was not found in ${x2num1} ${x2num2} ${x2num3}`
  );
}

// Input 4
if (input4p1 === row1num1 || input4p1 === row1num2 || input4p1 === row1num3) {
  player1.row1.push("X");
  console.log(
    `Number ${input4p1} was FOUND in ${row1num3} ${row1num2} ${row1num3} Player one row 1 was updated: ${player1.row1}`
  );
} else {
  console.log(
    `Number ${input4p1} was not found in ${row1num1} ${row1num2} ${row1num3}`
  );
}

if (input4p1 === row2num1 || input4p1 === row2num2 || input4p1 === row2num3) {
  player1.row2.push("X");
  console.log(
    `Number ${input4p1} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row 2 was updated: ${player1.row2}`
  );
} else {
  console.log(
    `Number ${input4p1} was not found in ${row2num1} ${row2num2} ${row2num3}`
  );
}

if (input4p1 === row3num1 || input4p1 === row3num2 || input4p1 === row3num3) {
  player1.row3.push("X");
  console.log(
    `Number ${input4p1} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 3 was updated: ${player1.row3}`
  );
} else {
  console.log(
    `Number ${input4p1} was not found in ${row3num1} ${row3num2} ${row3num3}`
  );
}

if (input4p1 === col1num1 || input4p1 === col1num2 || input4p1 === col1num3) {
  player1.col1.push("X");
  console.log(
    `Number ${input4p1} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one column A was updated: ${player1.col1}`
  );
} else {
  console.log(
    `Number ${input4p1} was not found in ${col1num1} ${col1num2} ${col1num3}`
  );
}
if (input4p1 === col2num1 || input4p1 === col2num2 || input4p1 === col2num3) {
  player1.col2.push("X");
  console.log(
    `Number ${input4p1} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one column B was updated: ${player1.col2}`
  );
} else {
  console.log(
    `Number ${input4p1} was not found in ${col2num1} ${col2num2} ${col3num3}`
  );
}

if (input4p1 === col3num1 || input4p1 === col3num2 || input4p1 === col3num3) {
  player1.col3.push("X");
  console.log(
    `Number ${input4p1} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one column C was updated: ${player1.col3}`
  );
} else {
  console.log(
    `Number ${input4p1} was not found in ${col3num1} ${col3num2} ${col3num3}`
  );
}

if (input4p1 === x1num1 || input4p1 === x1num2 || input4p1 === x1num3) {
  player1.x1.push("X");
  console.log(
    `Number ${input4p1} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one across 1 was updated: ${player1.x1}`
  );
} else {
  console.log(
    `Number ${input4p1} was not found in ${x1num1} ${x1num2} ${x1num3}`
  );
}

if (input4p1 === x2num1 || input4p1 === x2num2 || input4p1 === x2num3) {
  player1.x2.push("X");
  console.log(
    `Number ${input4p1} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one across 2 was updated: ${player1.x1}`
  );
} else {
  console.log(
    `Number ${input4p1} was not found in ${x2num1} ${x2num2} ${x2num3}`
  );
}

// Input 5
if (input5p1 === row1num1 || input5p1 === row1num2 || input5p1 === row1num3) {
  player1.row1.push("X");
  console.log(
    `Number ${input5p1} was FOUND in ${row1num3} ${row1num2} ${row1num3} Player one row 1 was updated: ${player1.row1}`
  );
} else {
  console.log(
    `Number ${input5p1} was not found in ${row1num1} ${row1num2} ${row1num3}`
  );
}

if (input5p1 === row2num1 || input5p1 === row2num2 || input5p1 === row2num3) {
  player1.row2.push("X");
  console.log(
    `Number ${input5p1} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row 2 was updated: ${player1.row2}`
  );
} else {
  console.log(
    `Number ${input5p1} was not found in ${row2num1} ${row2num2} ${row2num3}`
  );
}

if (input5p1 === row3num1 || input5p1 === row3num2 || input5p1 === row3num3) {
  player1.row3.push("X");
  console.log(
    `Number ${input5p1} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 3 was updated: ${player1.row3}`
  );
} else {
  console.log(
    `Number ${input5p1} was not found in ${row3num1} ${row3num2} ${row3num3}`
  );
}

if (input5p1 === col1num1 || input5p1 === col1num2 || input5p1 === col1num3) {
  player1.col1.push("X");
  console.log(
    `Number ${input5p1} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one column A was updated: ${player1.col1}`
  );
} else {
  console.log(
    `Number ${input5p1} was not found in ${col1num1} ${col1num2} ${col1num3}`
  );
}
if (input4p1 === col2num1 || input5p1 === col2num2 || input5p1 === col2num3) {
  player1.col2.push("X");
  console.log(
    `Number ${input5p1} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one column B was updated: ${player1.col2}`
  );
} else {
  console.log(
    `Number ${input5p1} was not found in ${col2num1} ${col2num2} ${col3num3}`
  );
}

if (input5p1 === col3num1 || input5p1 === col3num2 || input5p1 === col3num3) {
  player1.col3.push("X");
  console.log(
    `Number ${input5p1} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one column C was updated: ${player1.col3}`
  );
} else {
  console.log(
    `Number ${input5p1} was not found in ${col3num1} ${col3num2} ${col3num3}`
  );
}

if (input5p1 === x1num1 || input5p1 === x1num2 || input5p1 === x1num3) {
  player1.x1.push("X");
  console.log(
    `Number ${input5p1} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one across 1 was updated: ${player1.x1}`
  );
} else {
  console.log(
    `Number ${input5p1} was not found in ${x1num1} ${x1num2} ${x1num3}`
  );
}

if (input5p1 === x2num1 || input5p1 === x2num2 || input5p1 === x2num3) {
  player1.x2.push("X");
  console.log(
    `Number ${input5p1} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one across 2 was updated: ${player1.x1}`
  );
} else {
  console.log(
    `Number ${input5p1} was not found in ${x2num1} ${x2num2} ${x2num3}`
  );
}

// Player 2
// Input 1
if (input1p2 === row1num1 || input1p2 === row1num2 || input1p2 === row1num3) {
  player2.row1.push("X");
  console.log(
    `Number ${input1p2} was FOUND in ${row1num1} ${row1num2} ${row1num3} Player one row 1 was updated: ${player2.row1}`
  );
} else {
  console.log(
    `Number ${input1p2} was not found in ${row1num1} ${row1num2} ${row1num3}`
  );
}

if (input1p2 === row2num1 || input1p2 === row2num2 || input1p2 === row2num3) {
  player2.row2.push("X");
  console.log(
    `Number ${input1p2} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row 2 was updated: ${player2.row2}`
  );
} else {
  console.log(
    `Number ${input1p2} was not found in ${row2num1} ${row2num2} ${row2num3}`
  );
}

if (input1p2 === row3num1 || input1p2 === row3num2 || input1p2 === row3num3) {
  player2.row3.push("X");
  console.log(
    `Number ${input1p2} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 3 was updated: ${player2.row3}`
  );
} else {
  console.log(
    `Number ${input1p2} was not found in ${row3num1} ${row3num2} ${row3num3}`
  );
}

if (input1p2 === col1num1 || input1p2 === col1num2 || input1p2 === col1num3) {
  player2.col1.push("X");
  console.log(
    `Number ${input1p2} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one column A was updated: ${player2.col1}`
  );
} else {
  console.log(
    `Number ${input1p2} was not found in ${col1num1} ${col1num2} ${col1num3}`
  );
}
if (input1p2 === col2num1 || input1p2 === col2num2 || input1p2 === col2num3) {
  player2.col2.push("X");
  console.log(
    `Number ${input1p2} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one column B was updated: ${player2.col2}`
  );
} else {
  console.log(
    `Number ${input1p2} was not found in ${col2num1} ${col2num2} ${col3num3}`
  );
}

if (input1p2 === col3num1 || input1p2 === col3num2 || input1p2 === col3num3) {
  player2.col3.push("X");
  console.log(
    `Number ${input1p2} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one column C was updated: ${player2.col3}`
  );
} else {
  console.log(
    `Number ${input1p2} was not found in ${col3num1} ${col3num2} ${col3num3}`
  );
}

if (input1p2 === x1num1 || input1p2 === x1num2 || input1p2 === x1num3) {
  player2.x1.push("X");
  console.log(
    `Number ${input1p2} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one across 1 was updated: ${player2.x1}`
  );
} else {
  console.log(
    `Number ${input1p2} was not found in ${x1num1} ${x1num2} ${x1num3}`
  );
}

if (input1p2 === x2num1 || input1p2 === x2num2 || input1p2 === x2num3) {
  player2.x2.push("X");
  console.log(
    `Number ${input1p2} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one across 2 was updated: ${player2.x1}`
  );
} else {
  console.log(
    `Number ${input1p2} was not found in ${x2num1} ${x2num2} ${x2num3}`
  );
}

// Input 2
if (input2p2 === row1num1 || input2p2 === row1num2 || input2p2 === row1num3) {
  player2.row1.push("X");
  console.log(
    `Number ${input2p2} was FOUND in ${row1num1} ${row1num2} ${row1num3} Player one row 1 was updated: ${player2.row1}`
  );
} else {
  console.log(
    `Number ${input2p2} was not found in ${row1num1} ${row1num2} ${row1num3}`
  );
}

if (input2p2 === row2num1 || input2p2 === row2num2 || input2p2 === row2num3) {
  player2.row2.push("X");
  console.log(
    `Number ${input2p2} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row 2 was updated: ${player2.row2}`
  );
} else {
  console.log(
    `Number ${input2p2} was not found in ${row2num1} ${row2num2} ${row2num3}`
  );
}

if (input2p2 === row3num1 || input2p2 === row3num2 || input2p2 === row3num3) {
  player2.row3.push("X");
  console.log(
    `Number ${input2p2} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 3 was updated: ${player2.row3}`
  );
} else {
  console.log(
    `Number ${input2p2} was not found in ${row3num1} ${row3num2} ${row3num3}`
  );
}

if (input2p2 === col1num1 || input2p2 === col1num2 || input2p2 === col1num3) {
  player2.col1.push("X");
  console.log(
    `Number ${input2p2} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one column 1 was updated: ${player2.col1}`
  );
} else {
  console.log(
    `Number ${input2p2} was not found in ${col1num1} ${col1num2} ${col1num3}`
  );
}
if (input2p2 === col2num1 || input2p2 === col2num2 || input2p2 === col2num3) {
  player2.col2.push("X");
  console.log(
    `Number ${input2p2} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one column 2 was updated: ${player2.col2}`
  );
} else {
  console.log(
    `Number ${input2p2} was not found in ${col2num1} ${col2num2} ${col3num3}`
  );
}

if (input2p2 === col3num1 || input2p2 === col3num2 || input2p2 === col3num3) {
  player2.col3.push("X");
  console.log(
    `Number ${input2p2} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one column 3 was updated: ${player2.col3}`
  );
} else {
  console.log(
    `Number ${input2p2} was not found in ${col3num1} ${col3num2} ${col3num3}`
  );
}

if (input2p2 === x1num1 || input2p2 === x1num2 || input2p2 === x1num3) {
  player2.x1.push("X");
  console.log(
    `Number ${input2p2} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one across 1 was updated: ${player2.x1}`
  );
} else {
  console.log(
    `Number ${input2p2} was not found in ${x1num1} ${x1num2} ${x1num3}`
  );
}

if (input2p2 === x2num1 || input2p2 === x2num2 || input2p2 === x2num3) {
  player2.x2.push("X");
  console.log(
    `Number ${input2p2} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one across 2 was updated: ${player2.x1}`
  );
} else {
  console.log(
    `Number ${input2p2} was not found in ${x2num1} ${x2num2} ${x2num3}`
  );
}

// Input 3
if (input3p2 === row1num1 || input3p2 === row1num2 || input3p2 === row1num3) {
  player2.row1.push("X");
  console.log(
    `Number ${input3p2} was FOUND in ${row1num3} ${row1num2} ${row1num3} Player one row 1 was updated: ${player2.row1}`
  );
} else {
  console.log(
    `Number ${input3p2} was not found in ${row1num1} ${row1num2} ${row1num3}`
  );
}

if (input3p2 === row2num1 || input3p2 === row2num2 || input3p2 === row2num3) {
  player2.row2.push("X");
  console.log(
    `Number ${input3p2} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row 2 was updated: ${player2.row2}`
  );
} else {
  console.log(
    `Number ${input3p2} was not found in ${row2num1} ${row2num2} ${row2num3}`
  );
}

if (input3p2 === row3num1 || input3p2 === row3num2 || input3p2 === row3num3) {
  player2.row3.push("X");
  console.log(
    `Number ${input3p2} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 3 was updated: ${player2.row3}`
  );
} else {
  console.log(
    `Number ${input3p2} was not found in ${row3num1} ${row3num2} ${row3num3}`
  );
}

if (input3p2 === col1num1 || input3p2 === col1num2 || input3p2 === col1num3) {
  player2.col1.push("X");
  console.log(
    `Number ${input3p2} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one column A was updated: ${player2.col1}`
  );
} else {
  console.log(
    `Number ${input3p2} was not found in ${col1num1} ${col1num2} ${col1num3}`
  );
}
if (input3p2 === col2num1 || input3p2 === col2num2 || input3p2 === col2num3) {
  player2.col2.push("X");
  console.log(
    `Number ${input3p2} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one column B was updated: ${player2.col2}`
  );
} else {
  console.log(
    `Number ${input3p2} was not found in ${col2num1} ${col2num2} ${col3num3}`
  );
}

if (input3p2 === col3num1 || input3p2 === col3num2 || input3p2 === col3num3) {
  player2.col3.push("X");
  console.log(
    `Number ${input3p2} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one column C was updated: ${player2.col3}`
  );
} else {
  console.log(
    `Number ${input3p2} was not found in ${col3num1} ${col3num2} ${col3num3}`
  );
}

if (input3p2 === x1num1 || input3p2 === x1num2 || input3p2 === x1num3) {
  player2.x1.push("X");
  console.log(
    `Number ${input3p2} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one across 1 was updated: ${player2.x1}`
  );
} else {
  console.log(
    `Number ${input3p2} was not found in ${x1num1} ${x1num2} ${x1num3}`
  );
}

if (input3p2 === x2num1 || input3p2 === x2num2 || input3p2 === x2num3) {
  player2.x2.push("X");
  console.log(
    `Number ${input3p2} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one across 2 was updated: ${player2.x1}`
  );
} else {
  console.log(
    `Number ${input3p2} was not found in ${x2num1} ${x2num2} ${x2num3}`
  );
}

// Input 4
if (input4p2 === row1num1 || input4p2 === row1num2 || input4p2 === row1num3) {
  player2.row1.push("X");
  console.log(
    `Number ${input4p2} was FOUND in ${row1num3} ${row1num2} ${row1num3} Player one row 1 was updated: ${player2.row1}`
  );
} else {
  console.log(
    `Number ${input4p2} was not found in ${row1num1} ${row1num2} ${row1num3}`
  );
}

if (input4p2 === row2num1 || input4p2 === row2num2 || input4p2 === row2num3) {
  player2.row2.push("X");
  console.log(
    `Number ${input4p2} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row 2 was updated: ${player2.row2}`
  );
} else {
  console.log(
    `Number ${input4p2} was not found in ${row2num1} ${row2num2} ${row2num3}`
  );
}

if (input4p2 === row3num1 || input4p2 === row3num2 || input4p2 === row3num3) {
  player2.row3.push("X");
  console.log(
    `Number ${input4p2} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 3 was updated: ${player2.row3}`
  );
} else {
  console.log(
    `Number ${input4p2} was not found in ${row3num1} ${row3num2} ${row3num3}`
  );
}

if (input4p2 === col1num1 || input4p2 === col1num2 || input4p2 === col1num3) {
  player2.col1.push("X");
  console.log(
    `Number ${input4p2} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one column A was updated: ${player2.col1}`
  );
} else {
  console.log(
    `Number ${input4p2} was not found in ${col1num1} ${col1num2} ${col1num3}`
  );
}
if (input4p2 === col2num1 || input4p2 === col2num2 || input4p2 === col2num3) {
  player2.col2.push("X");
  console.log(
    `Number ${input4p2} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one column B was updated: ${player2.col2}`
  );
} else {
  console.log(
    `Number ${input4p2} was not found in ${col2num1} ${col2num2} ${col3num3}`
  );
}

if (input4p2 === col3num1 || input4p2 === col3num2 || input4p2 === col3num3) {
  player2.col3.push("X");
  console.log(
    `Number ${input4p2} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one column C was updated: ${player2.col3}`
  );
} else {
  console.log(
    `Number ${input4p2} was not found in ${col3num1} ${col3num2} ${col3num3}`
  );
}

if (input4p2 === x1num1 || input4p2 === x1num2 || input4p2 === x1num3) {
  player2.x1.push("X");
  console.log(
    `Number ${input4p2} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one across 1 was updated: ${player2.x1}`
  );
} else {
  console.log(
    `Number ${input4p2} was not found in ${x1num1} ${x1num2} ${x1num3}`
  );
}

if (input4p2 === x2num1 || input4p2 === x2num2 || input4p2 === x2num3) {
  player2.x2.push("X");
  console.log(
    `Number ${input4p2} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one across 2 was updated: ${player2.x1}`
  );
} else {
  console.log(
    `Number ${input4p2} was not found in ${x2num1} ${x2num2} ${x2num3}`
  );
}

// Input 5
if (input5p2 === row1num1 || input5p2 === row1num2 || input5p2 === row1num3) {
  player2.row1.push("X");
  console.log(
    `Number ${input5p2} was FOUND in ${row1num3} ${row1num2} ${row1num3} Player one row 1 was updated: ${player2.row1}`
  );
} else {
  console.log(
    `Number ${input5p2} was not found in ${row1num1} ${row1num2} ${row1num3}`
  );
}

if (input5p2 === row2num1 || input5p2 === row2num2 || input5p2 === row2num3) {
  player2.row2.push("X");
  console.log(
    `Number ${input5p2} was FOUND in ${row2num1} ${row2num2} ${row2num3} Player one row 2 was updated: ${player2.row2}`
  );
} else {
  console.log(
    `Number ${input5p2} was not found in ${row2num1} ${row2num2} ${row2num3}`
  );
}

if (input5p2 === row3num1 || input5p2 === row3num2 || input5p2 === row3num3) {
  player2.row3.push("X");
  console.log(
    `Number ${input5p2} was FOUND in ${row3num1} ${row3num2} ${row3num3} Player one row 3 was updated: ${player2.row3}`
  );
} else {
  console.log(
    `Number ${input5p2} was not found in ${row3num1} ${row3num2} ${row3num3}`
  );
}

if (input5p2 === col1num1 || input5p2 === col1num2 || input5p2 === col1num3) {
  player2.col1.push("X");
  console.log(
    `Number ${input5p2} was FOUND in ${col1num1} ${col1num2} ${col1num3} Player one column A was updated: ${player2.col1}`
  );
} else {
  console.log(
    `Number ${input5p2} was not found in ${col1num1} ${col1num2} ${col1num3}`
  );
}
if (input5p2 === col2num1 || input5p2 === col2num2 || input5p2 === col2num3) {
  player2.col2.push("X");
  console.log(
    `Number ${input5p2} was FOUND in ${col2num1} ${col2num2} ${col1num3} Player one column B was updated: ${player2.col2}`
  );
} else {
  console.log(
    `Number ${input5p2} was not found in ${col2num1} ${col2num2} ${col3num3}`
  );
}

if (input5p2 === col3num1 || input5p2 === col3num2 || input5p2 === col3num3) {
  player2.col3.push("X");
  console.log(
    `Number ${input5p2} was FOUND in ${col3num1} ${col3num2} ${col1num3} Player one column C was updated: ${player2.col3}`
  );
} else {
  console.log(
    `Number ${input5p2} was not found in ${col3num1} ${col3num2} ${col3num3}`
  );
}

if (input5p2 === x1num1 || input5p2 === x1num2 || input5p2 === x1num3) {
  player2.x1.push("X");
  console.log(
    `Number ${input5p2} was FOUND in ${x1num1} ${x1num2} ${x1num3} Player one across 1 was updated: ${player2.x1}`
  );
} else {
  console.log(
    `Number ${input5p2} was not found in ${x1num1} ${x1num2} ${x1num3}`
  );
}

if (input5p2 === x2num1 || input5p2 === x2num2 || input5p2 === x2num3) {
  player2.x2.push("X");
  console.log(
    `Number ${input5p2} was FOUND in ${x2num1} ${x2num2} ${x2num3} Player one across 2 was updated: ${player2.x1}`
  );
} else {
  console.log(
    `Number ${input5p2} was not found in ${x2num1} ${x2num2} ${x2num3}`
  );
}

console.log(player1);
console.log(player2);

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
} else if (player2Won) {
  console.log("Player 2 is the Winner!");
} else {
  console.log("Tie");
}
