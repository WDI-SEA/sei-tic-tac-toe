const pieces = document.querySelectorAll('.boardpiece')
const restartButton = document.getElementById('restart')
let winMes = document.getElementById('winmessage')
let header = document.getElementById(`title`)
const ticScoreHtml = document.getElementById(`ticScore`)
const toeScoreHtml = document.getElementById(`toeScore`)

let winStatus = false
let board = new Array(9).fill(null)
const O = "o";
const X = `x`;
let currentPlayer = X;
let previousPlayer= O;
let turnCounter = 1;
let ticScore = 0;
let toeScore = 0;
let tieStatus =0;
let winner = X;




const pieceClicked = (tile) => {const place = tile.target.id;
    board[place]== currentPlayer;
    if(board[place] === board[place]){
        if(!board[place]){
            board[place]=previousPlayer;tile.target;
            console.log(Array)}
            if(tile.target.innerText === 'x' || tile.target.innerText === 'o'){
                winMes.innerText =`This space has already been picked, pick again somewhere else!`; pieces.removeEventListener(`clicked`,pieceClicked) }
        tile.target.innerText = currentPlayer;
        
    board[place]=currentPlayer;
    checkBoard()
   if(turnCounter === 0){
       currentPlayer=X, previousPlayer=O}else if (turnCounter ===1) {
           currentPlayer=O,previousPlayer=X} else if (turnCounter ===2 ) {currentPlayer=X,previousPlayer=O}else if (turnCounter===3) {currentPlayer=O, previousPlayer=X}else if (turnCounter ===4) {currentPlayer=X, previousPlayer=O}else if (turnCounter===5) {currentPlayer=O, previousPlayer=X}else if (turnCounter ===6) {currentPlayer=X, previousPlayer=O}else if (turnCounter===7) {currentPlayer=O, previousPlayer=X}else if (turnCounter ===8) {currentPlayer=X, previousPlayer=O}else if (turnCounter ===9) {currentPlayer=O, previousPlayer=X,checkBoard(),winMes.innerText=`It's a tie`}else if(turnCounter ===10) {tieCondition()}


           
           


           checkBoard()
           console.log(place)
            
            
           
            
        //    place.removeEventListener(`click`,pieceClicked)
            
   
           turnCounter++;
           ;
           console.log(turnCounter)
           console.log(board)
        //    console.log(turnCounter)
    }else if(board === currentPlayer || previousPlayer){}
           
       }

       

       checkBoard = () => {if(previousPlayer===board[0]&&
        board[0] == board[1] 
       && board[0] == board[2])
       {console.log(`winner`), winMes.innerText=`${previousPlayer} wins!` , endGame(),winner = previousPlayer}
       else if(previousPlayer===board[3]&&board[3] == board[4] && board[3] == board[5]){ winMes.innerText=`${previousPlayer} wins!` , endGame(),tieStatus=0}else if(previousPlayer===board[6]&&board[6] == board[7] && board[6] == board[8]){ winMes.innerText=`${previousPlayer} wins!` , endGame(),tieStatus=0}else if(previousPlayer===board[0]&&board[0] == board[3] && board[0] == board[6]){ winMes.innerText=`${previousPlayer} wins!` , endGame(),tieStatus=0}else if(previousPlayer===board[1]&&board[1] == board[4] && board[1] == board[7]){ winMes.innerText=`${previousPlayer} wins!` , endGame(),tieStatus=0}else if(previousPlayer===board[2]&&board[2] == board[5] && board[2] == board[8]){ winMes.innerText=`${previousPlayer} wins!` , endGame(),tieStatus=0}else if(previousPlayer===board[0]&&board[0] == board[4] && board[0] == board[8]){ winMes.innerText=`${previousPlayer} wins!` , endGame(),tieStatus=0}else if(previousPlayer===board[2]&&board[2] == board[4] && board[2] == board[6]){ winMes.innerText=`${previousPlayer} wins!` , endGame(),tieStatus=0}
       



       

       tieCondition = ()=>{
        checkBoard();
        // if(turnCounter===9){console.log(`tie`), winMes.innerText=`It's a tie` , endGame(),tieCorrector()}}
        // if(previousPlayer!=board[0]&&board[0] == board[1] 
        //    && board[0] == board[2]&&previousPlayer!=board[3]&&board[3] == board[4] && board[3] == board[5]&&previousPlayer!=board[6]&&board[6] == board[7] && board[6] == board[8]&&previousPlayer!=board[0]&&board[0] == board[3] && board[0] == board[6]&&previousPlayer!=board[1]&&board[1] == board[4] && board[1] == board[7]&&previousPlayer!=board[2]&&board[2] == board[5] && board[2] == board[8]&&previousPlayer!=board[0]&&board[0] == board[4] && board[0] == board[8]&&previousPlayer!=board[2]&&board[2] == board[4] && board[2] == board[6]){turnCounter++}else 
        if(turnCounter===10){console.log(`tie`), winMes.innerText=`It's a tie` , endGame()}}

       
        
      
       endGame = () =>{
           console.log(`Game is over`),
           pieces.forEach((piece)=> piece.removeEventListener('click',pieceClicked));
        if(previousPlayer==X){ticScore++}else if(previousPlayer==O){toeScore++}
           };
           ticScoreHtml.innerText = ticScore;
           toeScoreHtml.innerText = toeScore;
           console.log(previousPlayer);
           console.log(`tie status is ${tieStatus}`)
           console.log(`tic score is ${ticScore}`);
           console.log(`toe score is ${toeScore}`);
           console.log(`the winner is ${winner}`)
       }

    //    tieCorrector=()=>{
    //        if(turnCounter>=9){
    //            toeScore=toeScore-1
    //        }
    //    }
//GIVES SCORE WHEN TIE
       /*winning combos
       [0,1,2]
       [3,4,5]
       [6,7,8]
       [0,3,6]
       [1,4,7]
       [2,5,8]
       [0,4,8]
       [2,4,6]



       */
    // clearBoard = () =>{
    //     restartButton.addEventListener('click', clear)
    //     clear=()=>{board.reset()}

    //     }
// console.log(winMes)

pieces.forEach((piece) => piece.addEventListener('click', pieceClicked),{
})

restartGame = () => {
currentPlayer=X;
board = new Array(9).fill(null)
pieces.forEach((pieces) => pieces.innerText='');
turnCounter = 1;
winMes.innerText=`Who will win?`;
pieces.forEach((piece) => piece.addEventListener('click', pieceClicked));
console.log(turnCounter);

}


restartButton.addEventListener('click', restartGame)



//The forEach() method executes a provided function once for each array element.

//board should look like
// [0,1,2]
// [3,4,5]
// [6,7,8]

//create function that does something when box is clicked. 








