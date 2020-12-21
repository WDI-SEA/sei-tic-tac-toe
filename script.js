const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();

function TicTacToeGame() {
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    let turn = 0;

    this.start = function() {
      const config = { childList: true };
      const observer = new MutationObserver(() => takeTurn());
      board.positions.forEach((el) => observer.observe(el, config));
      takeTurn();
    }
}

function takeTurn() {
    //if it's not an even number computer will take turn
    if (turn % 2 === 0) {
        humanPlayer.takeTurn();
    } else {
        computerPlayer.takeTurn();
    }
//decides which player's turn it is
    turn++;

}

function Board() {
    this.positions = Array.from(document.querySelectorAll('.column'));
}

//add event listener to each column to listen for changes in clicks then remove listener so human can't take a turn while computer takes turn
function HumanPlayer(board) {
    this.takeTurn = function() {
      board.positions
        forEach(el => el.addEventListener('click', handleTurnTaken));

    }

function handleTurnTaken(event) {
    event.target.innerText = 'X';
}

}

function ComputerPlayer(board) {
    this.takeTurn = function() {
   
}