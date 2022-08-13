
let clicked = document.addEventListener('click', function(e) {
    console.log(e.target.id)
    e.target.classList.toggle('clicked')

})