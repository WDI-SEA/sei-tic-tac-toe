const div1 = document.getElementById("one");
const div2 = document.getElementById("two");
const div3 = document.getElementById("three");
const div4 = document.getElementById("four");
const div5 = document.getElementById("five");
const div6 = document.getElementById("six");
const div7 = document.getElementById("seven");
const div8 = document.getElementById("eight");
const div9 = document.getElementById("nine");
const resetButtun = document.querySelector(".button");

let currentPlayer = "X";

// How to disable moves after a win
// look up remove event listener

// Where should I add this condition ?

div1.removeEventListener("click", function () {
  console.log("You have won");
});

// const numberofDivs = document.getElementById("gridd");
// const countDiv = numberofDivs.getElementsByTagName("div").length;

// console.log(countDiv);

// keeps printing who won after winning condition is shown

// how to use reset without actually using location.reload

const p1Input = [];
const p2Input = [];
const total = [];

const checkTie = () => {
  if (
    total.length === 9 &&
    checkWinPlayer1 != true &&
    checkWinPlayer2 != true
  ) {
    console.log("Tie");
    const a = document.createElement("Winner");
    a.textContent = "Tie!";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
  }
};

// pointer events = not
// style = pointer-events: none;

// const a = document.createElement("Winner");
// a.textContent = "player 1 wins";
// const menu = document.querySelector(".here");
// menu.appendChild(a);

// document.querySelector(".grid").style.pointerEvents = "none";

const checkWinPlayer1 = () => {
  if (p1Input.includes(1) && p1Input.includes(2) && p1Input.includes(3)) {
    const a = document.createElement("Winner");
    a.textContent = "player X wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div1.style.backgroundColor = "turquoise";
    div2.style.backgroundColor = "turquoise";
    div3.style.backgroundColor = "turquoise";
    document.querySelector(".grid").style.pointerEvents = "none";
  } else if (
    p1Input.includes(4) &&
    p1Input.includes(5) &&
    p1Input.includes(6)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player X wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div4.style.backgroundColor = "turquoise";
    div5.style.backgroundColor = "turquoise";
    div6.style.backgroundColor = "turquoise";
    console.log("Player 1 Won Rows");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else if (
    p1Input.includes(7) &&
    p1Input.includes(8) &&
    p1Input.includes(9)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player X wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div7.style.backgroundColor = "turquoise";
    div8.style.backgroundColor = "turquoise";
    div9.style.backgroundColor = "turquoise";
    console.log("Player 1 Won Rows");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else if (
    p1Input.includes(1) &&
    p1Input.includes(4) &&
    p1Input.includes(7)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player X wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div1.style.backgroundColor = "turquoise";
    div4.style.backgroundColor = "turquoise";
    div7.style.backgroundColor = "turquoise";
    console.log("Player 1 Won Columns");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else if (
    p1Input.includes(2) &&
    p1Input.includes(5) &&
    p1Input.includes(8)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player X wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div2.style.backgroundColor = "turquoise";
    div5.style.backgroundColor = "turquoise";
    div8.style.backgroundColor = "turquoise";
    console.log("Player 1 Won Columns");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else if (
    p1Input.includes(3) &&
    p1Input.includes(6) &&
    p1Input.includes(9)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player X wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div3.style.backgroundColor = "turquoise";
    div6.style.backgroundColor = "turquoise";
    div9.style.backgroundColor = "turquoise";
    console.log("Player 1 Won Columns");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else if (
    p1Input.includes(3) &&
    p1Input.includes(5) &&
    p1Input.includes(7)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player X wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div3.style.backgroundColor = "turquoise";
    div5.style.backgroundColor = "turquoise";
    div7.style.backgroundColor = "turquoise";
    console.log("Player 1 Won Across");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else if (
    p1Input.includes(1) &&
    p1Input.includes(5) &&
    p1Input.includes(9)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player X wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div1.style.backgroundColor = "turquoise";
    div5.style.backgroundColor = "turquoise";
    div9.style.backgroundColor = "turquoise";
    console.log("Player 1 Won Across");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else {
    return false;
  }
};

const checkWinPlayer2 = () => {
  if (p2Input.includes(1) && p2Input.includes(2) && p2Input.includes(3)) {
    console.log("Player 2 Won Rows");
    document.querySelector(".grid").style.pointerEvents = "none";
    const a = document.createElement("Winner");
    a.textContent = "player O wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div1.style.backgroundColor = "turquoise";
    div2.style.backgroundColor = "turquoise";
    div3.style.backgroundColor = "turquoise";
  } else if (
    p2Input.includes(4) &&
    p2Input.includes(5) &&
    p2Input.includes(6)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player O wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div4.style.backgroundColor = "turquoise";
    div5.style.backgroundColor = "turquoise";
    div6.style.backgroundColor = "turquoise";
    console.log("Player 2 Won Rows");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else if (
    p2Input.includes(7) &&
    p2Input.includes(8) &&
    p2Input.includes(9)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player O wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div7.style.backgroundColor = "turquoise";
    div8.style.backgroundColor = "turquoise";
    div9.style.backgroundColor = "turquoise";
    console.log("Player 2 Won Rows");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else if (
    p2Input.includes(1) &&
    p2Input.includes(4) &&
    p2Input.includes(7)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player O wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div1.style.backgroundColor = "turquoise";
    div4.style.backgroundColor = "turquoise";
    div7.style.backgroundColor = "turquoise";
    console.log("Player 2 Won Columns");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else if (
    p2Input.includes(2) &&
    p2Input.includes(5) &&
    p2Input.includes(8)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player O wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div2.style.backgroundColor = "turquoise";
    div5.style.backgroundColor = "turquoise";
    div8.style.backgroundColor = "turquoise";
    console.log("Player 2 Won Columns");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else if (
    p2Input.includes(3) &&
    p2Input.includes(6) &&
    p2Input.includes(9)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player O wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div3.style.backgroundColor = "turquoise";
    div6.style.backgroundColor = "turquoise";
    div9.style.backgroundColor = "turquoise";
    console.log("Player 2 Won Columns");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else if (
    p2Input.includes(3) &&
    p2Input.includes(5) &&
    p2Input.includes(7)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player O wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div3.style.backgroundColor = "turquoise";
    div5.style.backgroundColor = "turquoise";
    div7.style.backgroundColor = "turquoise";
    console.log("Player 2 Won Across");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else if (
    p2Input.includes(1) &&
    p2Input.includes(5) &&
    p2Input.includes(9)
  ) {
    const a = document.createElement("Winner");
    a.textContent = "player O wins";
    const menu = document.querySelector(".here");
    menu.appendChild(a);
    div1.style.backgroundColor = "turquoise";
    div5.style.backgroundColor = "turquoise";
    div9.style.backgroundColor = "turquoise";
    console.log("Player 2 Won Across");
    document.querySelector(".grid").style.pointerEvents = "none";
  } else {
    return false;
  }
};

div1.addEventListener(
  "click",
  function () {
    console.log("Div block1");
    const one = (document.getElementById("one").value = 1);
    if (currentPlayer === "X") {
      p1Input.push(one);
      total.push(one);
      div1.innerText = "X";
      currentPlayer = "O";
      checkTie();
      checkWinPlayer1(p1Input);
    } else {
      p2Input.push(one);
      total.push(one);
      div1.innerText = "O";
      currentPlayer = "X";
      checkTie();
      checkWinPlayer2(p2Input);
    }
  },
  {
    once: true,
  }
);

div2.addEventListener(
  "click",
  function () {
    console.log("Div block2");
    const two = (document.getElementById("two").value = 2);
    if (currentPlayer === "X") {
      p1Input.push(two);
      total.push(two);
      div2.innerText = "X";
      currentPlayer = "O";
      checkTie();
      checkWinPlayer1(p1Input);
    } else {
      p2Input.push(two);
      total.push(two);
      div2.innerText = "O";
      currentPlayer = "X";
      checkTie();
      checkWinPlayer2(p2Input);
    }
  },
  {
    once: true,
  }
);

div3.addEventListener(
  "click",
  function () {
    console.log("Div block3");
    const three = (document.getElementById("three").value = 3);
    if (currentPlayer === "X") {
      p1Input.push(three);
      total.push(three);
      div3.innerText = "X";
      currentPlayer = "O";
      checkTie();
      checkWinPlayer1(p1Input);
    } else {
      p2Input.push(three);
      total.push(three);
      div3.innerText = "O";
      currentPlayer = "X";
      checkTie();
      checkWinPlayer2(p2Input);
    }
  },
  {
    once: true,
  }
);

div4.addEventListener(
  "click",
  function () {
    const four = (document.getElementById("four").value = 4);
    if (currentPlayer === "X") {
      p1Input.push(four);
      total.push(four);
      div4.innerText = "X";
      currentPlayer = "O";
      checkTie();
      checkWinPlayer1(p1Input);
    } else {
      p2Input.push(four);
      total.push(four);
      div4.innerText = "O";
      currentPlayer = "X";
      checkTie();
      checkWinPlayer2(p2Input);
    }
  },
  {
    once: true,
  }
);

div5.addEventListener(
  "click",
  function () {
    console.log("Div block5");
    const five = (document.getElementById("five").value = 5);
    if (currentPlayer === "X") {
      p1Input.push(five);
      total.push(five);
      div5.innerText = "X";
      currentPlayer = "O";
      checkTie();
      checkWinPlayer1(p1Input);
    } else {
      p2Input.push(five);
      total.push(five);
      div5.innerText = "O";
      currentPlayer = "X";
      checkTie();
      checkWinPlayer2(p2Input);
    }
  },
  {
    once: true,
  }
);

div6.addEventListener(
  "click",
  function () {
    console.log("Div block6");
    const six = (document.getElementById("six").value = 6);
    if (currentPlayer === "X") {
      p1Input.push(six);
      total.push(six);
      div6.innerText = "X";
      currentPlayer = "O";
      checkTie();
      checkWinPlayer1(p1Input);
    } else {
      p2Input.push(six);
      total.push(six);
      div6.innerText = "O";
      currentPlayer = "X";
      checkTie();
      checkWinPlayer2(p2Input);
    }
  },
  {
    once: true,
  }
);

div7.addEventListener(
  "click",
  function () {
    console.log("Div block7");
    const seven = (document.getElementById("seven").value = 7);
    if (currentPlayer === "X") {
      p1Input.push(seven);
      total.push(seven);
      div7.innerText = "X";
      currentPlayer = "O";
      checkTie();
      checkWinPlayer1(p1Input);
    } else {
      p2Input.push(seven);
      total.push(seven);
      div7.innerText = "O";
      currentPlayer = "X";
      checkTie();
      checkWinPlayer2(p2Input);
    }
  },
  {
    once: true,
  }
);

div8.addEventListener(
  "click",
  function () {
    console.log("Div block8");
    const eight = (document.getElementById("seven").value = 8);
    if (currentPlayer === "X") {
      p1Input.push(eight);
      total.push(eight);
      div8.innerText = "X";
      currentPlayer = "O";
      checkTie();
      checkWinPlayer1(p1Input);
    } else {
      p2Input.push(eight);
      total.push(eight);
      div8.innerText = "O";
      currentPlayer = "X";
      checkTie();
      checkWinPlayer2(p2Input);
    }
  },
  {
    once: true,
  }
);

div9.addEventListener(
  "click",
  function () {
    console.log("Div block9");
    const nine = (document.getElementById("seven").value = 9);
    if (currentPlayer === "X") {
      p1Input.push(nine);
      total.push(nine);
      div9.innerText = "X";
      currentPlayer = "O";
      checkTie();
      checkWinPlayer1(p1Input);
    } else {
      p2Input.push(nine);
      total.push(nine);
      div9.innerText = "O";
      currentPlayer = "X";
      checkTie();
      checkWinPlayer2(p2Input);
    }
  },
  {
    once: true,
  }
);

// add winning func before change current player in both condtionals
// same for tie

// can you pass function resetGame where the function() is?
resetButtun.addEventListener("click", function () {
  resetGame();
});

// Doesn't work after you press reset
const resetGame = () => {
  // console.log("Reset");
  // div1.innerText = "";
  // div2.innerText = "";
  // div3.innerText = "";
  // div4.innerText = "";
  // div5.innerText = "";
  // div6.innerText = "";
  // div7.innerText = "";
  // div8.innerText = "";
  // div9.innerText = "";
  // player1Moves = [];
  // player2Moves = [];
  // console.log(player1Moves, player2Moves);
  location.reload();
};
