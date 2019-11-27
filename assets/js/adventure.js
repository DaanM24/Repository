var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");



document.getElementById("inventoryItem").style.display = 'none';
document.getElementById("title").innerHTML = "Squirrel man's adventure";
document.getElementById("description").innerHTML = "Welcome to the gun show. Kies je keuze om een keuze te maken.";

document.getElementById("button2").style.display = 'none';
document.getElementById("button3").style.display = 'none';

function start(){
    document.getElementById("description").innerHTML = "Je word wakker in een bos";
    document.getElementById("button1").innerHTML = "Rick";
    var image = document.createElement("Forest");
    image.setAttribute("src", "assets/img/Forest.jpg");
    image.setAttribute("alt", "Forest");
    image.setAttribute("width", "304");
    image.setAttribute("height", "228");
    document.body.appendChild(image);
}


document.getElementById("button1").innerHTML = "Start game";

document.getElementById("button1").onclick = function() {start()};