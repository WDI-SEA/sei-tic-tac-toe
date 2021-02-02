//Selecting DOM elements

let player1 = document.querySelector("#playerone"),
    board = document.querySelector("#board"), currentPlayer, player2 = document.querySelector("#playertwo");
let reset = document.querySelector("#reset");

// Event Listener

reset.addEventListener("click",function(e){
    console.log(e.target.value);
    location.reload();
}
);



// Select players.

function selectPlayer() {
    board.addEventListener("click", function(e) {
        if (e.target.id === "playerone") {
            console.log(e.target)
            player1.classList.add("buttoncolor");
            document.querySelector("#selectplayer").textContent = `You are Player "X"`;
            document.querySelector("#playertwo").disabled = true;
        } else if (e.target.id === "playertwo") {
            console.log(e.target)
            player2.classList.add("buttoncolor");
            document.querySelector("#selectplayer").textContent = `You are Player "O"`;
            document.querySelector("#playerone").disabled = true;
    }
})
}

selectPlayer();