document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    let whosTurn = 'player1'




    // make the image for the "x" and "o"
    const symbolX = "<img src='https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png'>"
    const symbolO = "<img src='https://www.clipartmax.com/png/middle/440-4408148_transparent-o-tic-tac-toe-o.png'>"
    // attach an element for each box in order to put the symbols on them

    let tictacBoard = document.getElementById('tictacBoard')
    let leftTop = document.getElementById("<img src='https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png'>")
    let midTop = document.getElementById("<img src='https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png'>")
    let rightTop = document.getElementById("<img src='https://www.pinclipart.com/picdir/middle/99-992857_inner-page-closing-comments-tic-tac-toe-x.png'>")
    let leftMid = document.getElementById('')
    let midMid = document.getElementById('')
    let rightMid = document.getElementById('')
    let leftBottom = document.getElementById('')
    let midBottom = document.getElementById('')
    let rightBottom = document.getElementById('')

    function checkForWin(e) {
        if (leftTop === symbolX && midTop === symbolX && rightTop === symbolX) {
            console.log('something')
        } else {
            console.log('something2')
        }
    }

    // THIS MARKS X'S ON TO THE BOXES
    function click(e) {
        if (whosTurn === 'player1') {

            e.target.innerHTML = symbolX
            // check for win
            whosTurn ='player2'
            checkForWin
        } else {
            e.target.innerHTML = symbolO
            //check for win
            whosTurn ='player1' 
        }


    }

    // THIS MARKS 0'S ON THE BOXS
    // function markOsquare(e) {
    //     e.target.innerHTML = "<img src='https://www.clipartmax.com/png/middle/440-4408148_transparent-o-tic-tac-toe-o.png'>"
    // }

    // when you click a box it will turn to an x or o
    tictacBoard.addEventListener('click', click)

    // when you click a box it will turn to an o
    // tictacBoard.addEventListener('click', markOsquare )



});

