//DOM initializations 
const reset = document.getElementById('reset')
const body = document.querySelector('body')
let youreUpMessage = document.createElement('h1')
    youreUpMessage.style.color = "orange"
    body.appendChild(youreUpMessage)
// const tile0 = document.getElementById('0')
// const tile1 = document.getElementById('1')
// const tile2 = document.getElementById('2')
// const tile3 = document.getElementById('3')
// const tile4 = document.getElementById('4')
// const tile5 = document.getElementById('5')
// const tile6 = document.getElementById('6')
// const tile7 = document.getElementById('7')
// const tile8 = document.getElementById('8')    

//Variable Declarations/////////
const tileClicked = [false, false, false, false, false, false, false, false,]


// const tiles = [ [tile0, 0], [tile1, 1], [tile2, 2], [tile3, 3], [tile4, 4], [tile5, 5], [tile6, 6], [tile7, 7], [tile8,8] ]                     ]

//lat player select a tile
const selectTile = (inputTile) => { 
    const  tileId = inputTile.id
    console.log(`tile ${tileId} selected!`)
     //is the target clicked?
    if (isXup === true) {
        console.log(`${tileId} should have an X!`)
        if (inputTile.classList == "tile") {
            //put an X in the tile
            inputTile.innerText = "X"
            //make tile clicked until re-set
            tileClicked[tileId] = true 
            console.log(`tileClicked[${tileId}] is:\n ${tileClicked[tileId]}]`)   
            //make it O's turn
        }
    } else if (isXup === false) {
        console.log(`tile ${target.id} should have an O!`)
            //put an o in the tile
            //make the tile clicked until re-set
            //make it X's turn
    }
    
}


//who's turn is it?
let isXup = true
if (isXup === true) {
   //display: Your move, x!
   youreUpMessage.innerText = "Your move, X!"
   //call selectTile function
} else if (isXup === false) {
    //display: Your move, o!
    youreUpMessage.inerText = "Your move, O!"
    //call selectTile function
}




//write reset fucntion

    document.addEventListener('DOMContentLoaded', () => {
    //invoke reset function
//click events here 
        //clear button click
        reset.addEventListener('click', () => {
            //run reset function
        })
        //tile click
        for (let i = 0; i < 9; i++){
            document.getElementById(`${i}`).addEventListener('click', () => {
                console.log('tile clicked') 
                selectTile()
            })    
            document.getElementById(`${i}`).addEventListener('click', () => {
                selectTile(document.getElementById(`${i}`))
            })    

        }
       
    })