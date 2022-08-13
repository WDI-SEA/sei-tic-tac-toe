


// if clicked
let divs = document.querySelectorAll(".grid-item")
const plotClick = e => {
    e.currentTarget.style.borderRadius = "100%"
}
divs.forEach(div => {
    div.addEventListener('click', plotClick)
})

// if win
// let win = true
// function winScreen() {
//     if(win === true) {
//         document.getElementById('a1').toggle('winner')
//     }
// }


// winScreen()