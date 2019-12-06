var button1 = document.getElementById("button1");;
var button2 = document.getElementById("button2");;
var button3 = document.getElementById("button3");;
var description = document.getElementById("description");;
var title = document.getElementById("title");
var death;
var img = document.createElement("img");
var augurk;

menu();

function menu(){
    document.getElementById("inventoryItem").style.display = 'none';
    title.innerHTML = "Squirrel man's forest adventure™";
    description.innerHTML = "Welcome to squirrel man's adventure into the depths of forest";

    button2.style.display = 'none';
    button3.style.display = 'none';
    
    button1.innerHTML = "Start game";

    augurk = null;

    button1.onclick = function() {begin()};
}

function begin(){
    description.innerHTML = "You wake up in a forest dressed in a squirrel costume. You don't know you got here or what your name is.";
    button2.style.display = 'inline';
    button1.innerHTML = "Look around";
    button2.innerHTML = "Go back to sleep";
    img.src = "assets/img/Forest.jpg";
    title.appendChild(img);
    button1.onclick = function() {forest()};
    button2.onclick = function() {gameover()};
    death = "Some wolves have found where you were sleeping and mauled you to death. <br> GAME OVER"
}

function gameover(){
    description.innerHTML = death;
    button2.style.display = 'none';
    button3.style.display = 'none';
    button1.innerHTML = "Start over";
    button1.onclick = function() {menu()};
}

function forest(){
    description.innerHTML = "Looking around you see trees as you'd expect from a forest. You get the feeling you know your way around a forest. You also see some smoke coming up from behind the trees. (smoke not included in image)";
    button1.innerHTML = "Head to the trees";
    button2.innerHTML = "Head to the smoke";
    img.src = "assets/img/forest.png";
    button1.onclick = function() {trees()};
    button2.onclick = function() {cabin()};
}

function trees(){
    img.src = "assets/img/dark_forest.jpg";
    description.innerHTML = "After you walk into the forest you start to feel less sure about where you're going. It's probably smart to go back.";
    button1.innerHTML = "Find your way back";
    button2.innerHTML = "Keep going";
    if(augurk == true){
        button3.style.display = 'inline';
        button3.innerHTML = "Use the power of the augurk";
        button3.onclick = function() {beyond()};
    }
    button1.onclick = function() {forest()};
    button2.onclick = function() {gameover()};
    death = "As you walk further into the forest your body suddenly completes bursts apart, killing you instantly. <br> GAME OVER";
}

function cabin(){
    img.src = "assets/img/Cabin.jpg";
    description.innerHTML = "The smoke doesn't seem to go away so it's easy to follow. The smoke seemed to be coming from a log cabin, because there is smoke that must mean there is someone else here. Are they dangerous? There's also a jar of pickles next to the door.";
    button1.innerHTML = "Knock on the door";
    button2.innerHTML = "Grab the jar";
    button3.style.display = 'none';
    button1.onclick = function() {meeting()};
    button2.onclick = function() {gameover()};
    death = "The moment you grab the jar of pickled you disintegrate. <br> GAME OVER <br>Tip: Always ask for permission";
}

function meeting(){
    img.src = "assets/img/cabin1.jpg";
    description.innerHTML = "You hear some shuffling before the door opens. You are greeted by a very filthy man. <br>Man: What do you want?";
    button1.innerHTML = "Help me I'm lost";
    button2.innerHTML = "Can i have that jar of pickles?";
    button3.style.display = 'inline';
    button3.innerHTML = "Attack the man";
    button1.onclick = function() {lost()};
    button2.onclick = function() {picklescene()};
    button3.onclick = function() {fight()};
}

function picklescene(){
    description.innerHTML = "No";
    button2.innerHTML = "Attack the man";
    button3.style.display = 'none';
    button1.onclick = function() {lost()};
    button2.onclick = function() {fight()};
}

function fight(){
    img.src = "assets/img/fight.jpg";
    button3.style.display = 'none';
    description.innerHTML = "The man pulls a gun on you. <br>Man: You messed with the wrong guy.";
    button1.innerHTML = "Throw something at him";
    button2.innerHTML = "Hurl yourself at him";
    button1.onclick = function() {something()};
    button2.onclick = function() {gameover()};
    button2.style.display = 'inline';
    death = "You got shot before you even had the chance. <br>GAME OVER";
}

function something(){
    button1.onclick = function() {gameover()};
    button2.style.display = 'none';
    description.innerHTML = "You grab the first thing you see next to you which is...";
    button1.innerHTML = "Continue";
    death = "...a stick. You throw it at the man, but it does nothing. You got shot multiple times in the chest and bled out. <br> GAME OVER"
}

function lost(){
    description.innerHTML = "A lot of people end up here. Come inside.";
    button1.innerHTML = "Go inside";
    button2.innerHTML = "Refuse";
    button3.style.display = 'none';
    button1.onclick = function() {inside()};
    button2.onclick = function() {fight()};
}

function inside(){
    img.src = "assets/img/Inside.jpg";
    description.innerHTML = "The room seems to be filled with foreign pictures <br>Man: Please make yourself at home. I'll get you something to drink.";
    button2.innerHTML = "Can i have a jar of pickles instead?";
    button1.innerHTML = "Ok thanks";
    button3.innerHTML = "Leave"
    button3.style.display = 'inline';
    button1.onclick = function() {kidnap()};
    button2.onclick = function() {pickles()};
    button3.onclick = function() {cabin()};
}

function pickles(){
    description.innerHTML = "Man: Sure. Here you go. <br>Jar of pickles obtained.";
    button1.innerHTML = "Continue";
    img.src = "assets/img/augurk_obtained.jpg";
    augurk = true;
    button2.style.display = 'none';
    button3.style.display = 'none';
    button1.onclick = function() {kidnap2()};
}

function kidnap(){
    description.innerHTML = "The man hands you some tea. You take a sip and it has a weird taste. <br>You have been drugged.";
    button1.innerHTML = "Continue";
    button2.style.display = 'none';
    button3.style.display = 'none';
    button1.onclick = function() {cabinAlternate()};
}

function kidnap2(){
    description.innerHTML = "In the midst of admiring your jar of pickles you get knocked out clean in the head";
    button1.innerHTML = "Continue";
    button2.style.display = 'none';
    button3.style.display = 'none';
    button1.onclick = function() {cabinAlternate()};
}

function cabinAlternate(){
    img.src = "assets/img/Cabin.jpg";
    description.innerHTML = "You wake up outside the cabin still kinda dazed. Let's hope he didn't do anything.";
    button1.innerHTML = "Knock on the door again";
    button2.style.display = 'inline';
    button3.style.display = 'none';
    button2.innerHTML = "Go back to the forest"
    button1.onclick = function() {meeting2()};
    button2.onclick = function() {forest()};
}

function meeting2(){
    img.src = "assets/img/cabin3.jpg";
    description.innerHTML = "Really? You're gonna go back? <br>Man: You again?"
    button1.innerHTML = "Continue";
    button1.onclick = function() {fight()};
    button2.style.display = 'none';
    button3.style.display = 'none';
}