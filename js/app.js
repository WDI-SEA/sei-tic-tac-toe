
// const tile0 = document.getElementById('0')
// const tile1 = document.getElementById('1')
// const tile2 = document.getElementById('2')
// const tile3 = document.getElementById('3')
// const tile4 = document.getElementById('4')
// const tile5 = document.getElementById('5')
// const tile6 = document.getElementById('6')
// const tile7 = document.getElementById('7')
// const tile8 = document.getElementById('8')    

//DOM initializations 
const reset = document.getElementById('reset')
const body = document.querySelector('body')
let youreUpMessage = document.createElement('h1')
    youreUpMessage.style.color = "orange"
    youreUpMessage.innerText = "Your move, X!"
    body.appendChild(youreUpMessage)
let notAgain = document.createElement('h2')
    body.appendChild(notAgain)
    notAgain.style.color = "orange"
    notAgain.innerText = ''

///////////Variable Declarations/////////
//are tiles clicked? (if true, should not be selectable until re-set)
const tileClicked = [false, false, false, false, false, false, false, false, false]
//who's turn is it?
let isXup = true


// const tiles = [ [tile0, 0], [tile1, 1], [tile2, 2], [tile3, 3], [tile4, 4], [tile5, 5], [tile6, 6], [tile7, 7], [tile8,8] ]                     ]

//lat player select a tile
const selectTile = (inputTile) => { 
    console.log(`inside the funciton, the tile id is: ${inputTile.id}`)
    console.log(`tile ${inputTile.id[1]} selected!`)
    const tileId = inputTile.id[1]
        //is the target clicked?
    if (tileClicked[tileId] === true) {
        ///change h2 for no message
        notAgain.innerText = "That tile is taken! Please select another."
        console.log('that tile is occupied!')

    } else if (tileClicked[tileId] === false) {
        notAgain.innerText = ''
        if (isXup === true) {
            console.log(`${tileId} should have an X!`)
            if (inputTile.classList == "tile") {
                //put an X in the tile
                inputTile.innerText = "x"
                //make tile clicked until re-set
                tileClicked[tileId] = true 
                console.log(`tileClicked[${tileId}] is:\n ${tileClicked[tileId]}]`)   
                //make it O's turn
                isXup = false
                //display: Your move, o!
                youreUpMessage.innerText = "Your move, O!"
            }
        } else if (isXup === false) {
            console.log(`tile ${inputTile.id} should have an O!`)
            if (inputTile.classList == "tile") {   
                //put an o in the tile
                inputTile.innerText = "o"
                //make the tile clicked until re-set
                tileClicked[tileId] = true 
                console.log(`tileClicked[${tileId}] is:\n ${tileClicked[tileId]}]`) 
                //make it X's turn
                isXup = true
                //display: Your move, x!
                youreUpMessage.innerText = "Your move, X!"
             }
                
            }
        }
    
}




//write reset fucntion

//What Needs to be ready at window loaded? put it below.

    document.addEventListener('DOMContentLoaded', () => {


//////click events here////////// 
        //clear button click
        reset.addEventListener('click', () => {
            //run reset function
        })
        //tile click
        for (let i = 0; i < 9; i++){
            document.getElementById(`t${i}`).addEventListener('click', () => {
                console.log('tile clicked') 
                console.log(`onclick, the tile id is: ${event.currentTarget.id}`)
                selectTile(event.currentTarget)
            })    
            // document.getElementById(`t${i}`).addEventListener('click', () => {
            //     selectTile()
            // })    

        }
       
    })