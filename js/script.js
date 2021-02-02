//Selecting DOM elements

let player1 = document.querySelector("#playerone"),
    board = document.querySelector("#board"), currentPlayer, player2 = document.querySelector("#playertwo");
let reset = document.querySelector("#resetmenot");

// Event Listener

reset.addEventListener("click",()=> location.reload());



// Select players.

function selectPlayer() {
    board.addEventListener("click", function(e) {
        if (e.target.id === "playerone") {
            console.log(e.target)
            player1.classList.add("buttoncolor");
            document.querySelector("#selectplayer").textContent = `You are Player "X"`;
            // document.getElementById("#playertwo").disabled = true;
        } else if (e.target.id === "playertwo") {
            console.log(e.target)
            player2.classList.add("buttoncolor");
            document.querySelector("#selectplayer").textContent = `You are Player "O"`;
            // document.getElementById("#playerone").disabled = true;
    }
})
}

selectPlayer();






//     // if (currentPlayer === player1){
//     //     player1.addEventListener("click", function(e){
//     //         console.log(e.target)
//     //         player1.classList.add("buttoncolor")
//     //     });
//     //     document.querySelector("#selectplayer").textContent = `You have selected "X"`;
//     //
//     // } else if (currentPlayer === player2){
//     //     player2.addEventListener("click", function(e){
//     //         console.log(e.target.id="playertwo")
//     //         player2.classList.add("buttoncolor")
//     //     });
//     //
//     //     document.querySelector("#selectplayer").textContent = `You have selected "O"`;
//     // }
//
//     return currentPlayer;
// }
//
// selectPlayer(player2);


// Add array of Players to the game, with "X" and "O" values.

// Add eventListener to listen for click events.

//Add an empty array to store the clicked "X and O" values.

//Loop over the DOM elements, and randomly push the 'X and O' onClick.

//Setup a reset button.