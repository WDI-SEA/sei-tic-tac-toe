//DOM initializations
const reset = document.getElementById('reset')



//if (x's turn)
    //display: Your move, x!
    //invoke choice function

//if (o's turn)
    //display: Your move, o!
    //create o on click
    //invoke choice function


//write reset fucntion

    document.addEventListener('DOMContentLoaded', () => {
    //invoke reset function
//click events here 
        //clear button click
        reset.addEventListener('click', () => {
            //run reset function
        })
        //tile click
        for (let i = 1; i < 10; i++){
            document.getElementById(`tile${i}`).addEventListener('click', () => {
                console.log('tile clicked')
                //invoke choice function for i'th tile
            })

        }
       
    })