//will declare all boxes here cause I will use them in the other functions

const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const box5 = document.getElementById('box5')
const box6 = document.getElementById('box6')
const box7 = document.getElementById('box7')
const box8 = document.getElementById('box8')
const box9 = document.getElementById('box9')


//functions
const playGame = (event) =>{
   //for whenever the game begins, deciding whos turn is it
   //event listener for clicks on any of the boxes, counter will be applied which will be same as the i

   const P1turn = document.getElementById('P1turn')
   const P2turn = document.getElementById('P2turn')

   
   

   for(let i=0; i<9; i++){
       if(i%2==0){
           //this will select the X turns: 0, 2, 4, 6, 8
           //font color will be red
           // P1turn.style.color='red'

           event.target.value='X'

       }

       else {
           //these are O turns: 1, 3, 5, 7
           //font color will be orange
       }
   }
}


const winner = ()=>{

   //winner x?
   if(box1.innerText==='X' && box2.innerText==='X' && box3.innerText==='X'){
       //return that X is winner
   }
   else if(box1.innerText==='X' && box4.innerText==='X' && box7.innerText==='X'){
       //return that X is winner
   }
   else if(box1.innerText==='X' && box5.innerText==='X' && box9.innerText==='X'){
       //return that X is winner
   }
   else if(box4.innerText==='X' && box5.innerText==='X' && box6.innerText==='X'){
       //return that X is winner
   }
   else if(box7.innerText==='X' && box8.innerText==='X' && box9.innerText==='X'){
       //return that X is winner
   }
   else if(box2.innerText==='X' && box5.innerText==='X' && box8.innerText==='X'){
       //return that X is winner
   }
   else if(box3.innerText==='X' && box6.innerText==='X' && box9.innerText==='X'){
       //return that X is winner
   }
   else if(box3.innerText==='X' && box5.innerText==='X' && box7.innerText==='X'){
       //return that X is winner
   }


   //winner O?
   if(box1.innerText==='O' && box2.innerText==='O' && box3.innerText==='O'){
       //return that O is winner
   }
   else if(box1.innerText==='O' && box4.innerText==='O' && box7.innerText==='O'){
        //return that O is winner
   }
   else if(box1.innerText==='O' && box5.innerText==='O' && box9.innerText==='O'){
        //return that O is winner
   }
   else if(box4.innerText==='O' && box5.innerText==='O' && box6.innerText==='O'){
       //return that O is winner
   }
   else if(box7.innerText==='O' && box8.innerText==='O' && box9.innerText==='O'){
      //return that O is winner
   }
   else if(box2.innerText==='O' && box5.innerText==='O' && box8.innerText==='O'){
       //return that O is winner
   }
   else if(box3.innerText==='O' && box6.innerText==='O' && box9.innerText==='O'){
       //return that O is winner
   }
   else if(box3.innerText==='O' && box5.innerText==='O' && box7.innerText==='O'){
       //return that O is winner
   }
}




document.addEventListener('DOMContentLoaded', ()=>{
   //all the dom manipulation goes here
   console.log('DOM has loaded')

  //add event listener for click on the container then play game

  const container = document.getElementById('container')

  container.addEventListener('click', ()=>{
   playGame()
   
  })
  

   //play game, (whenever the page loads, play 1 is highlighted as its his turn, able to click any free box )



   //clean up the game (boxes uncleared back to inital state)
   //button reset with id reset

   reset.addEventListener('click', ()=>{
       box1.innerText=''       
       box2.innerText='' 
       box3.innerText='' 
       box4.innerText=''  
       box5.innerText=''   
       box6.innerText=''   
       box7.innerText=''   
       box8.innerText='' 
       box9.innerText=''                          
   })
}) 
