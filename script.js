// Attempting a different approach to using buttons
// Attempted to merge my code with an outside source code to do basically what I wanted but in much less text.
// Putting Variable's in a callable function
function myVariable() {

    const btn1 = document.getElementById('btn1').innerText
    const btn2 = document.getElementById('btn2').innerText
    const btn3 = document.getElementById('btn3').innerText
    const btn4 = document.getElementById('btn4').innerText
    const btn5 = document.getElementById('btn5').innerText
    const btn6 = document.getElementById('btn6').innerText
    const btn7 = document.getElementById('btn7').innerText
    const btn8 = document.getElementById('btn9').innerText
    const btn9 = document.getElementById('btn9').innerText
}

// original attempt at making a checker
function player1() {
    document.getElementById('btn1').innerText = 'x'
}


// winconditions are broken still
// For some reason, the code will not work without win conditions in the code.
// Checking if Player X wins
if ((btn1 == 'x') && (btn2 == 'x') && (btn3 == 'x')) {
    document.getElementById('winner').innerText = 'Player X Won'
}
else if ((btn1 == 'x') && (btn4 == 'x') && (btn7 == 'x')) {
    document.getElementById('winner').innerText = 'Player X Won'
}
else if ((btn1 == 'x') && (btn5 == 'x') && (btn9 == 'x')) {
    document.getElementById('winner').innerText = 'Player X Won'
}
else if ((btn2 == 'x') && (btn5 == 'x') && (btn8 == 'x')) {
    document.getElementById('winner').innerText = 'Player X Won'
}
else if ((btn3 == 'x') && (btn6 == 'x') && (btn9 == 'x')) {
    document.getElementById('winner').innerText = 'Player X Won'
}
else if ((btn3 == 'x') && (btn5 == 'x') && (btn7 == 'x')) {
    document.getElementById('winner').innerText = 'Player X Won'
}
else if ((btn4 == 'x') && (btn5 == 'x') && (btn6 == 'x')) {
    document.getElementById('winner').innerText = 'Player X Won'
}
else if ((btn7 == 'x') && (btn8 == 'x') && (btn9 == 'x')) {
    document.getElementById('winner').innerText = 'Player X Won'
}

//Checking if Player O wins
if ((btn1 === "o") && (btn2 === "o") && (btn3 === "o")) {
    document.getElementById('winner').innerText = 'Player O Won'
}
else if ((btn1 === "o") && (btn4 === "o") && (btn7 === "o")) {
    document.getElementById('winner').innerText = 'Player O Won'
}
else if ((btn1 === "o") && (btn5 === "o") && (btn9 === "o")) {
    document.getElementById('winner').innerText = 'Player O Won'
}
else if ((btn2 === "o") && (btn5 === "o") && (btn8 === "o")) {
    document.getElementById('winner').innerText = 'Player O Won'
}
else if ((btn3 === "o") && (btn6 === "o") && (btn9 === "o")) {
    document.getElementById('winner').innerText = 'Player O Won'
}
else if ((btn3 === "o") && (btn5 === "o") && (btn7 === "o")) {
    document.getElementById('winner').innerText = 'Player O Won'
}
else if ((btn4 === "o") && (btn5 === "o") && (btn6 === "o")) {
    document.getElementById('winner').innerText = 'Player O Won'
}
else if ((btn7 === "o") && (btn8 === "o") && (btn9 === "o")) {
    document.getElementById('winner').innerText = 'Player O Won'
}
else if ((btn1 == 'x' || btn1 == 'o') && (btn2 == 'x'
    || btn2 == 'o') && (btn3 == 'x' || btn3 == 'o') &&
    (btn4 == 'x' || btn4 == 'o') && (btn5 == 'x' ||
        btn5 == 'o') && (btn6 == 'x' || btn6 == 'o') &&
    (btn7 == 'x' || btn7 == 'o') && (btn8 == 'x' ||
        btn8 == 'o') && (btn9 == 'x' || btn9 == 'o')) {
    document.getElementById('winner')
        .innerText = "Match Tie";
}

function reset() {
    location.reload();
    // not necessary
    // document.getElementById('btn1').innerText = '';
    // document.getElementById("btn2").innerText = '';
    // document.getElementById("btn3").innerText = '';
    // document.getElementById("btn4").innerText = '';
    // document.getElementById("btn5").innerText = '';
    // document.getElementById("btn6").innerText = '';
    // document.getElementById("btn7").innerText = '';
    // document.getElementById("btn8").innerText = '';
    // document.getElementById("btn9").innerText = '';

}



// trying to do this a more unorthodox way and by using buttons proved so much harder than it should've.
// left me with a very narrow amount of options for writing my own code compared to this source.
//essentially created a counter system utilizing a variable to check whose turn it was
turn = 1;
function myfunc_3() {
    if (turn == 1) {
        document.getElementById("btn1").value = 'x';
        document.getElementById("btn1").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("btn1").value = 'o';
        document.getElementById("btn1").disabled = true;
        turn = 1;
    }
}

function myfunc_4() {
    if (turn == 1) {
        document.getElementById("btn2").value = 'x';
        document.getElementById("btn2").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("btn2").value = 'o';
        document.getElementById("btn2").disabled = true;
        turn = 1;
    }
}

function myfunc_5() {
    if (turn == 1) {
        document.getElementById("btn3").value = 'x';
        document.getElementById("btn3").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("btn3").value = 'o';
        document.getElementById("btn3").disabled = true;
        turn = 1;
    }
}

function myfunc_6() {
    if (turn == 1) {
        document.getElementById("btn4").value = 'x';
        document.getElementById("btn4").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("btn4").value = 'o';
        document.getElementById("btn4").disabled = true;
        turn = 1;
    }
}

function myfunc_7() {
    if (turn == 1) {
        document.getElementById("btn5").value = 'x';
        document.getElementById("btn5").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("btn5").value = 'o';
        document.getElementById("btn5").disabled = true;
        turn = 1;
    }
}

function myfunc_8() {
    if (turn == 1) {
        document.getElementById("btn6").value = 'x';
        document.getElementById("btn6").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("btn6").value = 'o';
        document.getElementById("btn6").disabled = true;
        turn = 1;
    }
}

function myfunc_9() {
    if (turn == 1) {
        document.getElementById("btn7").value = 'x';
        document.getElementById("btn7").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("btn7").value = 'o';
        document.getElementById("btn7").disabled = true;
        turn = 1;
    }
}

function myfunc_10() {
    if (turn == 1) {
        document.getElementById("btn8").value = 'x';
        document.getElementById("btn8").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("btn8").value = 'o';
        document.getElementById("btn8").disabled = true;
        turn = 1;
    }
}

function myfunc_11() {
    if (turn == 1) {
        document.getElementById("btn9").value = 'x';
        document.getElementById("btn9").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("btn9").value = 'o';
        document.getElementById("btn9").disabled = true;
        turn = 1;
    }
}










// Original attempt at making an array counter, to decide x or o

// myArray = ['', '', '', '', '', '', '', '', '']
// myArray.forEach((move) => {
//     let counter = 9
//     if (move === '') {
//         counter -= 1
//     }
//     if (counter % 2 === 0) {
//         currentUser = 'x'
//     }else{
//         currentUser = 'o'
//     }
// })
