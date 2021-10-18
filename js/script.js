function myfunc(){
    var [1, 2, 3, 4, 5, 6, 7, 8, 9];
    1 = document.getElementById("1").value;
    2 = document.getElementById("2").value;
    3 = document.getElementById("3").value;
    4 = document.getElementById("4").value;
    5 = document.getElementById("5").value;
    6 = document.getElementById("6").value;
    7 = document.getElementById("7").value;
    8 = document.getElementById("8").value;
    9 = document.getElementById("9").value;

    if ((1 == 'X' || 1 == 'x') && (2 == 'x' || 2 == 'X') && (3 == 'x' || 3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won"
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    window.alert('Player X won');
    }

}