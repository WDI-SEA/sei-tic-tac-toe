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

// const moveMade = () => {
//     changeTurns()
//     document.getElementById('one').innerText = currentPlayer
removeEventListener;

// }

let player1Moves = [];
let player2Moves = [];

div1.addEventListener(
  "click",
  function () {
    console.log("Div block1");
    const one = (document.getElementById("one").value = 1);

    if (currentPlayer === "X") {
      player1Moves.push(one);
      div1.innerText = "X";

      currentPlayer = "O";
      console.log(currentPlayer);
    } else {
      player2Moves.push(one);
      div1.innerText = "O";
      currentPlayer = "X";
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
      player1Moves.push(two);
      div2.innerText = "X";
      currentPlayer = "O";
    } else {
      player2Moves.push(two);
      div2.innerText = "O";
      currentPlayer = "X";
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
      player1Moves.push(three);
      div3.innerText = "X";
      currentPlayer = "O";
    } else {
      player2Moves.push(three);
      div3.innerText = "O";
      currentPlayer = "X";
    }
  },
  {
    once: true,
  }
);

div4.addEventListener(
  "click",
  function () {
    console.log("Div block4");
    const four = (document.getElementById("four").value = 4);
    if (currentPlayer === "X") {
      player1Moves.push(four);
      div4.innerText = "X";
      currentPlayer = "O";
    } else {
      player2Moves.push(four);
      div4.innerText = "O";
      currentPlayer = "X";
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
      player1Moves.push(five);
      div5.innerText = "X";
      currentPlayer = "O";
    } else {
      player2Moves.push(five);
      div5.innerText = "O";
      currentPlayer = "X";
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
      player1Moves.push(six);
      div6.innerText = "X";
      currentPlayer = "O";
    } else {
      player2Moves.push(six);
      div6.innerText = "O";
      currentPlayer = "X";
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
      player1Moves.push(seven);
      div7.innerText = "X";
      currentPlayer = "O";
    } else {
      player2Moves.push(seven);
      div7.innerText = "O";
      currentPlayer = "X";
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
      player1Moves.push(eight);
      div8.innerText = "X";
      currentPlayer = "O";
    } else {
      player2Moves.push(eight);
      div8.innerText = "O";
      currentPlayer = "X";
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
      player1Moves.push(nine);
      div9.innerText = "X";
      currentPlayer = "O";
    } else {
      player2Moves.push(nine);
      div9.innerText = "O";
      currentPlayer = "X";
    }
  },
  {
    once: true,
  }
);

console.log(player1Moves);
console.log(player2Moves);

// const checkWinner = () {

// }

// can you pass function resetGame where the function() is?
resetButtun.addEventListener("click", function () {
  resetGame();
});

// Doesn't work after you press reset
const resetGame = () => {
  //   console.log("Reset");
  //   div1.innerText = "";
  //   div2.innerText = "";
  //   div3.innerText = "";
  //   div4.innerText = "";
  //   div5.innerText = "";
  //   div6.innerText = "";
  //   div7.innerText = "";
  //   div8.innerText = "";
  //   div9.innerText = "";
  //   player1Moves = [];
  //   player2Moves = [];
  //   console.log(player1Moves, player2Moves);
  location.reload();
};
