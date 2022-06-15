let you;
let yourScore;
let opponent;
let opponentScore;
let choices = ["scissors", "rock", "paper"];

let img__opponent = document.querySelector(".opponent__img");
let your__img = document.querySelector(".your__img");
let uChoices = document.querySelectorAll("[data-choices]");

function opponentChoice() {
    let choice = Math.floor(Math.random() * 2.9);
    console.log(choice);
    img__opponent.src = "img/" + choices[choice] + ".png";
}
uChoices.forEach(uChoice => {
    uChoice.addEventListener("click", e =>{
        const select = uChoice.dataset.choices;
        Selection(select);
    })
})
function Selection(selection){
    your__img.src = "img/" + selection + ".png";
    opponentChoice();
}
imgChoices.addEventListener("click", yourChoice);