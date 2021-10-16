

// identify which square was clicked
const div = document.getElementsByClassName('divButton')

document.addEventListener('DOMContentLoaded', () => {

    for (let i = 0; i < 9; i++) {

        div[i].addEventListener('click', (event) => {
            const clickedDiv = event.target
        // MAKE ALL DIVS TOGGLE
        // make the div1 become a button and toggle between X and O
        if (clickedDiv.innerText == false) {
            clickedDiv.innerText = 'X'
        } else if (clickedDiv.innerText == 'X') {
            clickedDiv.innerText = 'O'
        } else {
            clickedDiv.innerText = " "
        }        
        })
    }    
})

