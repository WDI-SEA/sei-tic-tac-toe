class ticGame {
    constructor() {
        //Starting the game
        this.turn = "X";
        //The board
        this.board = [,,,,,,,,,].fill(null);
        console.log(this.board);
    }

    nextPlay() {
        //Set who plays next
        if (this.turn === "X"){
            this.turn =  "O";
        } else{
            this.turn = "X";
        }
    }

    nextMove(i) {
        if (!this.whilePlaying()) {
            return;
        }

        if (this.board[i]) {
            return;
        }

        this.board[i] = this.turn;

        if (!this.winningCombo()) {
            this.nextPlay();
        }
    }

    winningCombo() {
        //Game logic
        const winningClicks = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const click of winningClicks) {
            const [a, b, c] = click;

            if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return click;
            }
        }

        return null;
    }

    whilePlaying() {
        //Game is on-going
        return !this.winningCombo() && this.board.includes(null);
    }
}

class ticPage {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
        <h1 id="selectplayer" class="playerbutton">X goes first</h1>
            <div class="header">
                <div class="gameheader"></div>
                <div class="statusdiv"></div>
                <button type="button" class="reset">
                    Reset
                </button>
            </div>
            <div class="board">
                <div class="gametime" data-index="0"></div>
                <div class="gametime" data-index="1"></div>
                <div class="gametime" data-index="2"></div>
                <div class="gametime" data-index="3"></div>
                <div class="gametime" data-index="4"></div>
                <div class="gametime" data-index="5"></div>
                <div class="gametime" data-index="6"></div>
                <div class="gametime" data-index="7"></div>
                <div class="gametime" data-index="8"></div>
            </div>
        `;

        this.onTileClick = undefined;
        this.onRestartClick = undefined;

        this.root.querySelectorAll(".gametime").forEach(tile => {
            tile.addEventListener("click", () => {
                if (this.onTileClick) {
                    this.onTileClick(tile.dataset.index);
                }
            });
        });

        this.root.querySelector(".reset").addEventListener("click", () => {
            if (this.onRestartClick) {
                this.onRestartClick();
            }
        });
    }

    update(game) {
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
    }

    updateTurn(game) {
        this.root.querySelector(".gameheader").textContent = `${game.turn} plays`;
    }

    updateStatus(game) {
        let status = "Game On!";

        if (game.winningCombo()) {
            status = `${game.turn} Wins!`;
        } else if (!game.whilePlaying()) {
            status = "We have a tie!";
        }

        this.root.querySelector(".statusdiv").textContent = status;
    }

    updateBoard(game) {
        const winningCombination = game.winningCombo();

        for (let i = 0; i < game.board.length; i++) {
            const tile = this.root.querySelector(`.gametime[data-index="${i}"]`);

            tile.classList.remove("gamewinner");
            tile.textContent = game.board[i];

            if (winningCombination && winningCombination.includes(i)) {
                tile.classList.add("gamewinner");
            }
        }
    }
}

let game = new ticGame();
let ticTacView = new ticPage(document.querySelector("#tictac"));

ticTacView.onTileClick = function (i) {
    game.nextMove(i);
    ticTacView.update(game);
};

ticTacView.onRestartClick = function () {
    game = new ticGame();
    ticTacView.update(game);
};

ticTacView.update(game);
