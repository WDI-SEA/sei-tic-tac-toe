const player1Mark = "X"
const player2Mark = "O"
let playerXScore = 0
let playerOScore = 0
const playerTurn = document.querySelector('#playerName')
const playerxMove = []
const playeroMove = []
const winningCondition = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]
let moves = 0
      

const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const box5 = document.querySelector('#box5')
const box6 = document.querySelector('#box6')
const box7 = document.querySelector('#box7')
const box8 = document.querySelector('#box8')
const box9 = document.querySelector('#box9')
const marked1 = document.querySelector('#mark1')
const marked2 = document.querySelector('#mark2')
const marked3 = document.querySelector('#mark3')
const marked4 = document.querySelector('#mark4')
const marked5 = document.querySelector('#mark5')
const marked6 = document.querySelector('#mark6')
const marked7 = document.querySelector('#mark7')
const marked8 = document.querySelector('#mark8')
const marked9 = document.querySelector('#mark9')

document.addEventListener('DOMContentLoaded', function(){
    
    // const clickbox = document.querySelectorAll('p')
    // console.log(clickbox)
    // clickbox.addEventListener('click', function(event){
    //     event.target.innerText= player1Mark
    //     console.log("this is clicked")

    
    box1.addEventListener('click', function(){
        
        
        console.log("box1 clicked")
        if(playerXScore === playerOScore){
            marked1.innerText = "X"
            playerTurn.innerText = `Player O's Turn`
            playerXScore ++
            playerxMove.push(1)
            console.log(playerxMove)
        }else{
            marked1.innerText = "O"
            playerTurn.innerText = `Player X's Turn`
            playeroMove.push(1)
            playerOScore ++
        }
        
        moves++
        if(moves==9){
            playerTurn.innerText = "TIE"
        }
        xWinner()
       
    },{once: true})
    box2.addEventListener('click', function(){
       
        
        console.log("box2 clicked")
        if(playerXScore === playerOScore){
            marked2.innerText = "X"
            playerTurn.innerText = `Player O's Turn`
            playerxMove.push(2)
            playerXScore ++
        }else{
            marked2.innerText = "O"
            playerTurn.innerText = `Player X's Turn`
            playeroMove.push(2)
            playerOScore ++
        }
        moves++
        if(moves==9){
            playerTurn.innerText = "TIE"
        }
        xWinner()
       
    },{once: true})
    box3.addEventListener('click', function(){
        
        
        console.log("box3 clicked")
        if(playerXScore === playerOScore){
            marked3.innerText = "X"
            playerTurn.innerText = `Player O's Turn`
            playerxMove.push(3)
            playerXScore ++
        }else{
            marked3.innerText = "O"
            playerTurn.innerText = `Player X's Turn`
            playeroMove.push(3)
            playerOScore ++
        }
        
        moves++
        if(moves==9){
            playerTurn.innerText = "TIE"
        }
        xWinner()
        
    },{once:true})

    box4.addEventListener('click', function(){
        
        
        console.log("box4 clicked")
        if(playerXScore === playerOScore){
            marked4.innerText = "X"
            playerTurn.innerText = `Player O's Turn`
            playerxMove.push(4)
            playerXScore ++
        }else{
            marked4.innerText = "O"
            playerTurn.innerText = `Player X's Turn`
            playeroMove.push(4)
            playerOScore ++
        }
        
        moves++
        if(moves==9){
            playerTurn.innerText = "TIE"
        }
        xWinner()
       
    },{once:true})
    box5.addEventListener('click', function(){
       
        
        console.log("box5 clicked")
        if(playerXScore === playerOScore){
            marked5.innerText = "X"
            playerTurn.innerText = `Player O's Turn`
            playerxMove.push(5)
            playerXScore ++
        }else{
            marked5.innerText = "O"
            playerTurn.innerText = `Player X's Turn`
            playeroMove.push(5)
            playerOScore ++
        }
        
        moves++
        if(moves==9){
            playerTurn.innerText = "TIE"
        }
        xWinner()
       
    },{once:true})
    box6.addEventListener('click', function(){
       
        console.log("box1 clicked")
        if(playerXScore === playerOScore){
            marked6.innerText = "X"
            playerTurn.innerText = `Player O's Turn`
            playerxMove.push(6)
            playerXScore ++
        }else{
            marked6.innerText = "O"
            playerTurn.innerText = `Player X's Turn`
            playeroMove.push(6)
            playerOScore ++
        }
        
        moves++
        if(moves==9){
            playerTurn.innerText = "TIE"
        }
        xWinner()
       
    },{once:true})
    box7.addEventListener('click', function(){
       
        console.log("box7 clicked")
        if(playerXScore === playerOScore){
            marked7.innerText = "X"
            playerTurn.innerText = `Player O's Turn`
            playerxMove.push(7)
            playerXScore ++
        }else{
            marked7.innerText = "O"
            playerTurn.innerText = `Player X's Turn`
            playeroMove.push(7)
            playerOScore ++
        }
        
        moves++
        if(moves==9){
            playerTurn.innerText = "TIE"
        }
        xWinner()
        
    },{once:true})
    box8.addEventListener('click', function(){
       
        
        console.log("box1 clicked")
        if(playerXScore === playerOScore){
            marked8.innerText = "X"
            playerTurn.innerText = `Player O's Turn`
            playerxMove.push(8)
            playerXScore ++
        }else{
            marked8.innerText = "O"
            playerTurn.innerText = `Player X's Turn`
            playeroMove.push(8)
            playerOScore ++
        }
        moves++
        if(moves==9){
            playerTurn.innerText = "TIE"
        }
        xWinner()

        
    },{once:true})
    box9.addEventListener('click', function(){
        
        
        console.log("box1 clicked")
        if(playerXScore === playerOScore){
            marked9.innerText = "X"
            playerTurn.innerText = `Player O's Turn`
            playerxMove.push(9)
            playerXScore ++
        }else{
            marked9.innerText = "O"
            playerTurn.innerText = `Player X's Turn`
            playeroMove.push(9)
            playerOScore ++
        }
        
        moves++
        if(moves==9){
            playerTurn.innerText = "TIE"
        }
        xWinner()
        
    },{once:true})
   
})
const reloadButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);
function xWinner(){
    
    
    if(playerxMove.length >2){
        for(i=0; i< winningCondition.length; i++){
            if (winningCondition[i].every(element => (playerxMove.includes(element)
            ))){
              
              
              playerTurn.innerText="X is the winner"
              document.getElementById("table").style.pointerEvents = "none"
              }
            }
        }

    if(playeroMove.length >2){
        for(i=0; i< winningCondition.length; i++){
        if (winningCondition[i].every(element => (playeroMove.includes(element)
        ))){
          
          playerTurn.innerText="O is the winner"
          document.getElementById("table").style.pointerEvents = "none"
          }
        }
    }
    
}