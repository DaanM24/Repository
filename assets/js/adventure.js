var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var death;
var img = document.createElement("img");

menu();

function menu(){
    document.getElementById("inventoryItem").style.display = 'none';
    document.getElementById("title").innerHTML = "Squirrel man's forest adventure™";
    document.getElementById("description").innerHTML = "Welcome to squirrel man's adventure into the depths of forest";

    document.getElementById("button2").style.display = 'none';
    document.getElementById("button3").style.display = 'none';
    
    document.getElementById("button1").innerHTML = "Start game";

    document.getElementById("button1").onclick = function() {begin()};
}

function begin(){
    document.getElementById("description").innerHTML = "You wake up in a forest dressed in a squirrel costume. You don't know you got here or what your name is.";
    document.getElementById("button2").style.display = 'inline';
    document.getElementById("button1").innerHTML = "Look around";
    document.getElementById("button2").innerHTML = "Go back to sleep";
    img.src = "assets/img/Forest.jpg";
    document.getElementById("title").appendChild(img);
    document.getElementById("button1").onclick = function() {forest()};
    document.getElementById("button2").onclick = function() {gameover()};
    death = "Some wolves have found where you were sleeping and mauled you to death. <br> GAME OVER"
}

function gameover(){
    document.getElementById("description").innerHTML = death;
    document.getElementById("button2").style.display = 'none';
    document.getElementById("button3").style.display = 'none';
    document.getElementById("button1").innerHTML = "Start over";
    document.getElementById("button1").onclick = function() {menu()};
    document.getElementById("img").style.display = 'none';
}

function forest(){
    document.getElementById("description").innerHTML = "Looking around you see trees as you'd expect from a forest. You get the feeling you know your way around a forest. You also see some smoke coming up from behind the trees. (smoke not included in image)";
    document.getElementById("button1").innerHTML = "Head to the trees";
    document.getElementById("button2").innerHTML = "Head to the smoke";
    img.src = "assets/img/forest.png";
    document.getElementById("button1").onclick = function() {trees()};
}

function trees(){
    document.getElementById("description").innerHTML = "After you start to feel less sure about where you're going";
    document.getElementById("button1").innerHTML = "Find your way back";
    document.getElementById("button2").style.display = 'none';
}