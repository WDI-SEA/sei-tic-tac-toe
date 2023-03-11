const squares = document.querySelectorAll(".square");

const addListener = (element) => {
  element.addEventListener("click", () => {
    element.style.backgroundColor = "pink";
  });
};

squares.forEach((square) => {
  addListener(square);
});

squares[4].style.backgroundColor = "blue";
