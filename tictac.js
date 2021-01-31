let gamePanel = ["", "", "", "", "", "", "", "", ""];
//////////
const panelContainer = document.querySelector(".gridArea");
let player = "X";
let computer = "0";

const givePanel = () => {
    panelContainer.innerHTML = "";
    gamePanel.forEach((e, i) => {
        panelContainer.innerHTML += `div id="square_${i}" class="square" onclick="addPlayerMove(${i})">${gamePanel[i]}</div>`;
        if (e == player || e == computer) {
            document.querySelector(`#square${i}`).classList.add("occupied");
        }
    });
};
// givePanel();

const addPlayerMove = e => {
    if (gamePanel[e] == "") {
        gamePanel[e] = player;
        givePanel();
        addComputerMove();
    }
}
const addComputerMove = e => {
    do {
        selected = Math.floor(Math.random() * 9);
    } while (gamePanel[selected] != "");
    play_board[selected] = computer;
    givePanel();
};


