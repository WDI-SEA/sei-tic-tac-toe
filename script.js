const splash =document.querySelector('.splash');


document.addEventListener('DOMContentLoaded', (e)=>{ 
  setTimeout(()=>{
    splash.classList.add('display-none');
  },2000);
})



const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

let status = function() {
  if (statusDiv == playerFirst) {
    statusDiv.appendChild(playerSecond)
  }else{
    statusDiv.appendChild(playerFirst)
  
  }
}



//declared game variable
let gameIslive=true;
let xIsNext =true;

//create a variable player

let playerFirst = 'x';
let playerSecond = 'o';

//event Handler

const handleReset =(e)=> {
  console.log(e);


}


const handleCellClick =(e)=> {

  const location =e.target.classList[1];

if (xIsNext) {
  e.target.classList.add('x');
  xIsNext =!xIsNext;
}else {
  e.target.classList.add('o');
  xIsNext =!xIsNext;
}

  
};


//event Listeners
resetDiv.addEventListener('click', handleReset);

for(const cellDiv of cellDivs) {
cellDiv.addEventListener('click', handleCellClick)
}