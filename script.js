let clicked = 0
// const playerOne = (clicked%2 != 0)
// const playerTwo = (clicked%2 == 0)

document.getElementById("gameBoard").addEventListener("click", function() {
    clicked= clicked + 1;
    console.log(clicked);
 
// if (clicked%2 != 0) {
//     document.querySelectorAll("cell").innerText = "X"
// } else if(clicked%2 == 0) {
//     document.querySelectorAll("cell").innerText = "O"
// }

// function playerChange () {
//     if (clicked%2 != 0) {
//     document.getElementById("Player").innerText = "Player 1"
// } else if (clicked%2 == 0) {
//     document.getElementById("Player").innerText = "Player 2"
// }
// }

function changePlayer() {
    if (clicked%2 != 0) {
        document.getElementById("Player").placeholder = "Player 1"
    } else if (clicked%2 == 0) {
        document.getElementById("Player").placeholder = "Player 2"
    }
}

document.getElementById("cell1").addEventListener("click", function() {
    if (clicked%2 != 0) {
        document.getElementById("cell1").innerText = "X"
    } else if (clicked%2 == 0) {
        document.getElementById("cell1").innerText = "O"
    }

    document.getElementById("cell1").style.pointerEvents = "none"
}
)
document.getElementById("cell2").addEventListener("click", function(e) {
    if (clicked%2 != 0) {
        document.getElementById("cell2").innerText = "X"
    } else if (clicked%2 == 0) {
        document.getElementById("cell2").innerText = "O"
    }
    document.getElementById("cell2").style.pointerEvents = "none"
}
)

document.getElementById("cell3").addEventListener("click", function() {
    if (clicked%2 != 0) {
        document.getElementById("cell3").innerText = "X"
    } else if (clicked%2 == 0) {
        document.getElementById("cell3").innerText = "O"
    }
    document.getElementById("cell3").style.pointerEvents = "none"
}
)

document.getElementById("cell4").addEventListener("click", function() {
    if (clicked%2 != 0) {
        document.getElementById("cell4").innerText = "X"
    } else if (clicked%2 == 0) {
        document.getElementById("cell4").innerText = "O"
    }
    document.getElementById("cell4").style.pointerEvents = "none"
}
)

document.getElementById("cell5").addEventListener("click", function() {
    if (clicked%2 != 0) {
        document.getElementById("cell5").innerText = "X"
    } else if (clicked%2 == 0) {
        document.getElementById("cell5").innerText = "O"
    }
    document.getElementById("cell5").style.pointerEvents = "none"
}
)

document.getElementById("cell6").addEventListener("click", function() {
    if (clicked%2 != 0) {
        document.getElementById("cell6").innerText = "X"
    } else if (clicked%2 == 0) {
        document.getElementById("cell6").innerText = "O"
    }
    document.getElementById("cell6").style.pointerEvents = "none"
}
)

document.getElementById("cell7").addEventListener("click", function() {
    if (clicked%2 != 0) {
        document.getElementById("cell7").innerText = "X"
    } else if (clicked%2 == 0) {
        document.getElementById("cell7").innerText = "O"
    }
    document.getElementById("cell7").style.pointerEvents = "none"
}
)

document.getElementById("cell8").addEventListener("click", function() {
    if (clicked%2 != 0) {
        document.getElementById("cell8").innerText = "X"
    } else if (clicked%2 == 0) {
        document.getElementById("cell8").innerText = "O"
    }
    document.getElementById("cell8").style.pointerEvents = "none"
}
)

document.getElementById("cell9").addEventListener("click", function() {
    if (clicked%2 != 0) {
        document.getElementById("cell9").innerText = "X"
    } else if (clicked%2 == 0) {
        document.getElementById("cell9").innerText = "O"
    }
    document.getElementById("cell9").style.pointerEvents = "none"
}
)

let one = document.getElementById("cell1").innerText
let two = document.getElementById("cell2").innerText
let three = document.getElementById("cell3").innerText
let four = document.getElementById("cell4").innerText
let five = document.getElementById("cell5").innerText
let six = document.getElementById("cell6").innerText
let seven = document.getElementById("cell7").innerText
let eight = document.getElementById("cell8").innerText
let nine = document.getElementById("cell9").innerText


if (one === two && one === three) {
    document.getElementById("Title").innerText = "Winner!!!"
} else if (one === four && one === seven && clicked>3) {
    document.getElementById("Title").innerText = "Winner!!!"
} else if (two === five && two === eight && clicked>3) {
    document.getElementById("Title").innerText = "Winner!!!"
} else if (three === six && three === 9) {
    document.getElementById("Title").innerText = "Winner!!!"
} else if (four === five && four === six) {
    document.getElementById("Title").innerText = "Winner!!!"
} else if (seven === eight && seven === nine) {
    document.getElementById("Title").innerText = "Winner!!!"
} else if (one === five && one === nine) {
    document.getElementById("Title").innerText = "Winner!!!"
} else if (three === five && three === seven) {
    document.getElementById("Title").innerText = "Winner!!!"
} else if (clicked >= 10) {
    document.getElementById("Title").innerText = "It's a tie, try again!!"
}

// function stopGame() {
//     if (document.getElementById("Title") === "Winner!!!") {
//         document.getElementById("game-board").style.pointerEvents = "none"
//     } else if (document.getElementById("Title") === "It's a tie, try again!!") {
//         document.getElementById("game-board").style.pointerEvents = "none"
//     }
// }

// if (one == two && two == three){
//     document.getElementById("Title").innertext = "Winner!"
// } else if(four == five == six){
//     document.getAnimations("Title").innerText = "Winner!"
// }else if(clicked > 10) {
//     document.getElementById("Title").innerText = "Try Again! It's a Tie!"
// } 

// document.getElementByID("clear").addEventListener("click",
// one = " ",
// two = " ",
// three = " ",
// four = " ",
// five = " ",
// six = " ",
// seven = " ",
// eight = " ",
// nine = " ",
// )

document.getElementById("clear").addEventListener("click", function clearBoard () {
    one = document.getElementById("cell1").innerText = "1"
    two = document.getElementById("cell2").innerText = "2"
    three = document.getElementById("cell3").innerText = "3"
    four = document.getElementById("cell4").innerText = "4"
    five = document.getElementById("cell5").innerText = "5"
    six = document.getElementById("cell6").innerText = "6"
    seven = document.getElementById("cell7").innerText = "7"
    eight = document.getElementById("cell8").innerText = "8"
    nine = document.getElementById("cell9").innerText = "9"
    clicked = 0
    document.getElementById("Title").innerText = "Josh's Tik Tak Toe Game"
})


})

// function gamePlay() {
//     if (playerOne && clicked<=9) {
//         document.querySelectorAll("cell").innerText = "X"
//     } else if (playerTwo && clicked<=9) {
//         document.querySelectorAll("cell").innerText = "O"
//     }
// }