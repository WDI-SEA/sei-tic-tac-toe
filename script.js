
document.addEventListener('DOMContentLoaded', function () {
    //get html elements
    let gamecontainer = document.getElementsByClassName('game-container')
    let boradcontainer = document.getElementsByClassName('borad-container')
    let barcontainer =document.getElementsByClassName('bar-container')
    let boradDivs = document.querySelectorAll('.borad')
    let player1Div = document.querySelector('.Player1')
    let winsNumber1Div = document.querySelector(".wins-number1")
    let player2Div = document.querySelector('.Player2')
    let winsNumber2Div = document.querySelector(".wins-number2")
    let resetDiv = document.querySelector('.reset')
    
    
    
    //varibles
    let game = true;
    let xIsNext = true;
    let Player1 ='Player 1'
    let Player2 ='Player 2'
    let wins1=0
    let wins2=0
  
 
  

 

 //function of win stat
  const Win = (e )=> {
    game = false;
      if (e === 'x') {
        player1Div.innerHTML = ` Player 1  has won!`

        
      
    }else {
        player2Div.innerHTML = `player 2 has won! `
        
     }
      
    }

    

  // function if where the possible to win
  const checkGamecontainer = () => {
  const borad1 = boradDivs[0].classList[1]
  const borad2  = boradDivs[1].classList[1]
  const borad3 = boradDivs[2].classList[1]
  const borad4 = boradDivs[3].classList[1]
  const borad5= boradDivs[4].classList[1]
  const borad6 = boradDivs[5].classList[1]
  const borad7 = boradDivs[6].classList[1]
  const borad8 = boradDivs[7].classList[1]
  const borad9 = boradDivs[8].classList[1]

  // check winner
  if (borad1 && borad1=== borad2 && borad1 === borad3) {
    Win(borad1)
    boradDivs[0].classList.add('won')
    boradDivs[1].classList.add('won')
    boradDivs[2].classList.add('won')
  } else if (borad4 && borad4  === borad5 && borad4  === borad6) {
    Win(borad4 )
    boradDivs[3].classList.add('won')
    boradDivs[4].classList.add('won')
    boradDivs[5].classList.add('won')
  } else if (borad7 && borad7 === borad8  && borad7 === borad9) {
    Win(borad7)
    boradDivs[6].classList.add('won')
    boradDivs[7].classList.add('won')
    boradDivs[8].classList.add('won')
  } else if (borad1 && borad1 === borad4 && borad1=== borad7) {
   Win(borad1);
    boradDivs[0].classList.add('won')
    boradDivs[3].classList.add('won')
    boradDivs[6].classList.add('won')
  } else if (borad2 && borad2 === borad5 && borad2 === borad8) {
    Win(borad2);
    boradDivs[1].classList.add('won');
    boradDivs[4].classList.add('won');
    boradDivs[7].classList.add('won');
  } else if (borad3 && borad3 === borad6 && borad3 === borad9) {
    Win(borad3);
    boradDivs[2].classList.add('won');
    boradDivs[5].classList.add('won');
    boradDivs[8].classList.add('won');
  } else if (borad1 && borad1 === borad5 && borad1=== borad9) {
    Win(borad1);
    boradDivs[0].classList.add('won');
    boradDivs[4].classList.add('won');
    boradDivs[8].classList.add('won');
  } else if (borad3 && borad3 === borad5 && borad3 === borad7) {
    Win(borad3);
    boradDivs[2].classList.add('won');
    boradDivs[4].classList.add('won');
    boradDivs[6].classList.add('won');
  } else if (borad1 && borad2 && borad3 && borad4 && borad5 && borad6 && borad7 && borad8 && borad9) {
    game = false;
    player1Div.innerHTML='Game is tied!';
    player2Div.innerHTML='Game is tied!';
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      player2Div.innerHTML = `${Player2} is  O`;
    } else {
      player1Div.innerHTML = `${Player1}  is X`;
    }
  }
  
 }

//    if ( Win(0)){
//      winsNumber1Div=winsNumber1Div+1
//      winsNumber1Div.innerText = `${wins1}`
//      }else if ( Win(1)){
//      winsNumber2Div=winsNumber2Div+2
//      winsNumber2Div.innerText = `${wins2}`
//     }



 //reset function
const resetClick = () => {
  xIsNext = true
  player1Div.innerHTML = `${Player1}  `;
  player2Div.innerHTML = ` ${Player2}  `
  for (let boradDiv of boradDivs) {
    boradDiv.classList.remove('x');
    boradDiv.classList.remove('o');
    boradDiv.classList.remove('won');
  }
    game = true
   

   }



 // borad function
 const boradClick = (e) => {
  const classList = e.target.classList;

  if (!game || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (xIsNext) {
    classList.add('x')
    checkGamecontainer() 
  } else {
    classList.add('o')
    checkGamecontainer()
  }
 }

 // eventlisteners to make the div click 
 resetDiv.addEventListener('click', resetClick)

 for (const boradDiv of boradDivs) {
    boradDiv.addEventListener('click', boradClick)
  }
 

})
