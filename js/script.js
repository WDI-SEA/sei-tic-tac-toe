const resetDiv = document.querySelector(".reset")
const boxes = document.querySelectorAll(".box")
const ticTac = document.getElementById("tic-tac-board")
let xturn = true


 
const clickBox =(e) => {
    const boxName = e.target.classList[1]
     if(xturn){
        e.target.classList.add('x')
        xturn = !xturn
       checkWinner()          
       turnToggle()               
     } else {
        e.target.classList.add('o')
        xturn = !xturn
       checkWinner()
    turnToggle()
    }
  }

  
 
const checkWinner = () => {
    let box0 = cell0.classList.contains("x")
    let box1 = cell1.classList.contains("x")
    let box2 = cell2.classList.contains("x")
    let box3 = cell3.classList.contains("x")
    let box4 = cell4.classList.contains("x")
    let box5 = cell5.classList.contains("x")
    let box6 = cell6.classList.contains("x")
    let box7 = cell7.classList.contains("x")
    let box8 = cell8.classList.contains("x")

    let boxa = cell0.classList.contains("o")
    let boxb = cell1.classList.contains("o")
    let boxc = cell2.classList.contains("o")
    let boxd = cell3.classList.contains("o")
    let boxe = cell4.classList.contains("o")
    let boxf = cell5.classList.contains("o")
    let boxg = cell6.classList.contains("o")
    let boxh = cell7.classList.contains("o")
    let boxi = cell8.classList.contains("o")
   
     if((box0 && box1 && box2 === true) || 
        (box2 && box5 && box8 === true) ||
        (box0 && box3 && box6 === true) ||
        (box0 && box4 && box8 === true) ||
        (box2 && box4 && box6 === true) ||
        (box1 && box4 && box7 === true) ||
        (box6 && box7 && box8 === true) ||
        (box3 && box4 && box5 === true))
     {
       
            resulta.classList.add('xW')
            boxes.forEach(box => {
              box.removeEventListener("click", clickBox)
            })
        
     } else if
       ((boxa && boxb && boxc === true) || 
        (boxd && boxe && boxf === true) ||
        (boxg && boxh && boxi === true) ||
        (boxa && boxd && boxg === true) ||
        (boxb && boxe && boxh === true) ||
        (boxc && boxf && boxi === true) ||
        (boxa && boxe && boxi === true) ||
        (boxc && boxe && boxg === true))
        {
            resulta.classList.add('oW')
            boxes.forEach(box => {
              box.removeEventListener("click", clickBox)
                })
          
        }  
    }
    
const turnToggle = () => {
    if(xturn){
    player.innerText = "X turn"
    } else {
        player.innerText = "O turn"
    }

}
    
   const checkDraw = () => {
       return [...boxes].every
   }
   

  

    // if((box0                                                                                      
    // && box1 && box2 === x || o) || (box2 && box5 && box8)){
    //     console.log('we have a winner')
    // }

    
    





//event handlers
const handleReset = (e) => {
    console.log(e)
}
        

    
   
resetDiv.addEventListener('click', handleReset);


//event listeners
boxes.forEach(box => {
    box.addEventListener("click", clickBox, {once:true})
    })
// resetDiv.addEventlistener("click", handleReset)
