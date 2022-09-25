// I was trying to click on each cell and it will return x then o 
var cells = document.querySelectorAll("#position td");
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    console.log(this.innerHTML,'x')
  });
}

 // create a constant array for the winner 
 const winner = 
    [0,1,2]//rows
    [3,4,5]
    [6,7,8]
    [0,3,6]//colomns
    [1,4,7]
    [2,5,8]
    [0,4,8]//cross
    [2,4,8]

    // make if, else  for the winner 

 