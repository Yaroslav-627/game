let you;
let opponent;
let yourScore = 0;
let opponentScore = 0;
let drawScore = 0;
let choices = ["scissors", "rock", "paper"];

let img__opponent = document.querySelector(".opponent__img");
let your__img = document.querySelector(".your__img");
let opponentText = document.querySelector(".opponent__score");
let yourText = document.querySelector(".your__score");
let drawText = document.querySelector(".draw__score");
let uChoices = document.querySelectorAll("[data-choices]");

function opponentChoice(scr) {
    let choice = Math.floor(Math.random() * 2.9);
    img__opponent.src = "img/" + choices[choice] + ".png";
    Score(scr, choices[choice]);
}
uChoices.forEach(uChoice => {
    uChoice.addEventListener("click", e =>{
        const select = uChoice.dataset.choices;
        Selection(select);
    })
})
function Selection(selection){
    your__img.src = "img/" + selection + ".png";
    opponentChoice(selection);
    render(selection);
}
function Score(your, oppo) {
    if(your == "rock" && oppo == "scissors" || your == "scissors" && oppo == "paper" || your == "paper" && oppo == "rock"){
        console.log(oppo, your);
        yourScore++;
    }else if(your == "rock" && oppo == "paper" || your == "paper" && oppo == "scissors" || your == "scissors" && oppo == "rock"){
        console.log(oppo, your);
        opponentScore++;
    }else{
        console.log(oppo, your);
        drawScore++;
    }
}
function render(you) {
    opponentText.innerText = "Computer Score: " + opponentScore + ";";
    yourText.innerText = "Your Score: " + yourScore + ";";
    drawText.innerText = "Draw Score: " + drawScore + ";";
    console.log(drawScore + "; " + opponentScore, yourScore);
}