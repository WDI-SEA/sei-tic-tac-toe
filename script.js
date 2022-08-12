
let clicked = document.addEventListener('click', function(e) {
    console.log(e.target.id)
    e.target.innerText = "x"
    if(e.target.innerText === "x") {
        e.target.innerText === ""
    }
})