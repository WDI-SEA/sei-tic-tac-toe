//Step 1 allocate variables for the html tags
//allocate variable for array for tile
const tiles = Array.from(document.querySelectorAll('.tile'));
//allocate variable for player-turn
const playerDisplay = document.querySelector('.display-player');
//allocate variable for reset 
const resetButton = document.querySelector('#reset');
//allocate variable for announcer
const announcer = document.querySelector('.announcer');
//Step 2 create js variables for the logic
//Create variables for board
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
//create winningCondition for the board
const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function loop(){
    if (currentPlayer){

    }
}
