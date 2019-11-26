var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

function start(){
    
}

function rick(){
    document.getElementById("description").innerHTML = "Rick is uber cool";
    document.getElementById("button2").style.display = 'none';
    document.getElementById("button3").style.display = 'none';
}

function rick2(){
    document.getElementById("description").innerHTML = "Is Rick eigenlijk wel cool?";
    document.getElementById("button1").style.display = 'none';
    document.getElementById("button3").style.display = 'none';
}

function rick3(){
    document.getElementById("description").innerHTML = "Rick is zeer cool";
    document.getElementById("button1").style.display = 'none';
    document.getElementById("button2").style.display = 'none';
}

document.getElementById("button1").innerHTML = "Leuke verassing";
document.getElementById("button2").innerHTML = "Geen leuke verassing";
document.getElementById("button3").innerHTML = "De beste verassing";

document.getElementById("button1").onclick = function() {rick()};
document.getElementById("button2").onclick = function() {rick2()};
document.getElementById("button3").onclick = function() {rick3()};