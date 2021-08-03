var values = ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'];
var RedsTurn = true;

function ButtonClick (clicked) {

    if (values[clicked] == 'n'){

        if (RedsTurn == true){
            values[clicked] = 'r';
            document.getElementById("button" + clicked).style.backgroundColor = "#ff6666";
            document.getElementById("button" + clicked).style.borderColor = "#eba4a4";
        }
        else{
            values[clicked] = 'b';
            document.getElementById("button" + clicked).style.backgroundColor = "#33aaff";
            document.getElementById("button" + clicked).style.borderColor = "#95cdf5";
        }

        if (RedsTurn == true){
            document.querySelector(".cursor").style.borderColor = "#33aaff";
            document.querySelector(".cursor").style.backgroundColor = "#86cdff7c";
            RedsTurn = false;
        }
        else{
            document.querySelector(".cursor").style.borderColor = "#ff6666";
            document.querySelector(".cursor").style.backgroundColor = "#ffa0a07c";
            RedsTurn = true;
        }

        CheckWin('r');
        CheckWin('b');
        CheckDraw();
    }

}

function CheckWin(p) {

    if(values[0] == p && values[1] == p && values[2] == p) {Win(p);}
    if(values[3] == p && values[4] == p && values[5] == p) {Win(p);}
    if(values[6] == p && values[7] == p && values[8] == p) {Win(p);}

    if(values[0] == p && values[3] == p && values[6] == p) {Win(p);}
    if(values[1] == p && values[4] == p && values[7] == p) {Win(p);}
    if(values[2] == p && values[5] == p && values[8] == p) {Win(p);}

    if(values[0] == p && values[4] == p && values[8] == p) {Win(p);}
    if(values[2] == p && values[4] == p && values[6] == p) {Win(p);}

}

function CheckDraw() {

    for(var i = 0; i <= 8; i++){
        if(values[i] == 'n'){
            break;
        }
        if(i == 8){
            Win('d');
        }
    }

}

function Win(p){
    document.querySelector(".cursor").style.borderColor = "#222222";
    document.querySelector(".cursor").style.backgroundColor = "#2222225c";

    if(p == 'r'){
        document.querySelector(".winscreen > .winnerdisplay").style.color = "#ff6666";
        document.querySelector(".winscreen > .winnerdisplay").innerHTML = "RED WON!";
    }
    else if (p == 'b'){
        document.querySelector(".winscreen > .winnerdisplay").style.color = "#33aaff";
        document.querySelector(".winscreen > .winnerdisplay").innerHTML = "BLUE WON!";
    }
    else {
        document.querySelector(".winscreen > .winnerdisplay").style.color = "#333333";
        document.querySelector(".winscreen > .winnerdisplay").innerHTML = "DRAW!";
    }
    document.querySelector(".winscreen").style.display = "block";
}
