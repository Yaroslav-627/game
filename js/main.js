let you;
let opponent;
let yourScore = 0;
let opponentScore = 0;
let drawScore = 0;
let data = [];
let choices = ["scissors", "rock", "paper"];

let img__opponent = document.querySelector(".opponent__img");
let your__img = document.querySelector(".your__img");
let opponentText = document.querySelector(".opponent__score");
let yourText = document.querySelector(".your__score");
let uChoices = document.querySelectorAll("[data-choices]");

function opponentChoice(src) {
    let choice = Math.floor(Math.random() * 2.9);
    img__opponent.src = "img/" + choices[choice] + ".png";
    Score(src, choices[choice]);
    History(src, choices[choice]);
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
function History(you, pc) {
    let listItem__PC = document.querySelector(".Computer");
    let listItem__You = document.querySelector(".You");
    const PC = listItem__PC.cloneNode(true);
    let You = listItem__You.cloneNode(true);
    PC.removeAttribute("style");
    You.removeAttribute("style");
    PC.querySelector(".list__choice").src = "img/" + pc + ".png";
    You.querySelector(".list__choice").src = "img/" + you + ".png";
    document.querySelector(".pc").appendChild(PC);
    document.querySelector(".you").appendChild(You);
}
function render(you) {
    // data.push({your_choices: you, PC_choices: your__img.src, who_won: your__img.src});
    // console.log(data);
    // const stor = window.localStorage;
    // stor.setItem("data", data);
    opponentText.innerText = "Computer Score: " + opponentScore + ";";
    yourText.innerText = "Your Score: " + yourScore + ";";
    console.log(drawScore + "; " + opponentScore, yourScore);
}