document.addEventListener('DOMContentLoaded', () => {
    
    var player;
    var computer;

    // Setting up the box name

    var boxOne = document.querySelector("#box1");
    var boxTwo = document.querySelector("#box2");
    var boxThree = document.querySelector("#box3");
    var boxFour = document.querySelector("#box4");
    var boxFive = document.querySelector("#box5");
    var boxSix = document.querySelector("#box6");
    var boxSeven = document.querySelector("#box7");
    var boxEight = document.querySelector("#box8");
    var boxNine = document.querySelector("#box9");

    // Game selections

    var humanO = document.getElementById("human").checked && document.getElementById("StartO").checked;
    var humanX = document.getElementById("human").checked && document.getElementById("StartX").checked;
    var compuO = document.getElementById("ai").checked && document.getElementById("StartO").checked;
    var compuX = document.getElementById("ai").checked && document.getElementById("StartX").checked;

    // Setting up variable from div

    const cell1 = boxOne.getAttribute("data-value");
    const cell2 = boxTwo.getAttribute("data-value");
    const cell3 = boxThree.getAttribute("data-value");
    const cell4 = boxFour.getAttribute("data-value");
    const cell5 = boxFive.getAttribute("data-value");
    const cell6 = boxSix.getAttribute("data-value");
    const cell7 = boxSeven.getAttribute("data-value");
    const cell8 = boxEight.getAttribute("data-value");
    const cell9 = boxNine.getAttribute("data-value");
    
    // Game conditions

    const cellNumber = [
        ["cell1", "cell2", "cell3"],
        ["cell4", "cell5", "cell6"],
        ["cell7", "cell8", "cell9"],
        ["cell1", "cell4", "cell7"],
        ["cell2", "cell5", "cell8"],
        ["cell3", "cell6", "cell9"],
        ["cell1", "cell5", "cell9"],
        ["cell3", "cell5", "cell7"]
    ];
    
    const dependPattern = [
        ["cell1", "cell2"], //0, 3  // depend cell number and variable number
        ["cell2", "cell3"], //1, 1
        ["cell4", "cell5"], //2, 6
        ["cell5", "cell6"], //3, 4
        ["cell7", "cell8"], //4, 9
        ["cell8", "cell9"], //5, 7
        ["cell1", "cell4"], //6, 7
        ["cell4", "cell7"], //7, 1
        ["cell2", "cell5"], //8, 8
        ["cell5", "cell8"], //9, 2
        ["cell3", "cell6"], //10, 9
        ["cell6", "cell9"], //11, 3
        ["cell1", "cell5"], //12, 9
        ["cell5", "cell9"], //13, 1
        ["cell3", "cell5"], //14, 7
        ["cell5", "cell7"], //15, 3
    ];

    // list of functions
    // start game
    //     check game status 
    //     depend and fill
    //     win or draw (o, x)
    //     checking the box
    //     filling the box
    //     algorithms
    //         if vsHuman, -> humanO or humanX -> check for win -> if win or draw, reset
    //         else 
    //         compuO -> fill cell5 -> wait for event -> check depend -> fill -> if win or draw, reset  
    //         compuX -> wait for event -> check depend -> fill -> if win or draw, reset
    //     output text if win or draw
    //     reset

})
    
    
    