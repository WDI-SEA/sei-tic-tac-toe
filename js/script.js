
// check for winner, check for tie, cant replay a box//

// const clickSquare = () => {
//     const xOrO = () => {
//         const xOrO = document.createElement("X" || "O")
//         document.querySelector('.button').appendChild(xOrO)
//     }
// }
// document.addEventListener('click', ()=> {

// })
const cellElements = document.querySelectorAll("div.cell")
    cellElements.forEach(cell => {
        cell.addEventListener("click", handleClick, {once: true})
    })
    function handleClick(e) {
        console.log('clicked')
    }