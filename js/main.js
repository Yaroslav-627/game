let you;
let yourScore;
let opponent;
let opponentScore;
let choices = ["scissors", "rock", "paper"];

let img__opponent = document.querySelector(".opponent__img");
let your__img = document.querySelector(".your__img");
let imgChoices = document.querySelector(".img__choices");

function opponentChoice() {
    let choice = Math.floor(Math.random() * 2.9);
    console.log(choice);
    img__opponent.src = "img/" + choices[choice] + ".png";
}
function yourChoice() {
    your__img.src = img__opponent.src;
}

opponentChoice();
yourChoice()