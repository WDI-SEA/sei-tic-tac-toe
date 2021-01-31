const squaresArr = ["", "", "", "", "", "", "", "", ""];
let playerX = true;

const allSquares = document.querySelectorAll(".square");


//created click event on individual squares
for(let i=0; i<allSquares.length; i++){
    const currentSquare = allSquares[i];
    currentSquare.addEventListener("click" , ()=>{
        console.log(i)
    })
}
const matchSquares =()=>{
    for(let i=0; i<squaresArr.length; i++){
        const currentSquare = squaresArr[i];
        allSquares[i].innerText = currentSquare;
        // console.log(i)
    }
}

