let you;
let opponent;
let yourScore = 0;
let opponentScore = 0;
let drawScore = 0;
let data = [0, 0, 0];
let language;
let choices = ["scissors", "rock", "paper"];

Load();

let img__opponent = document.querySelector(".opponent__img");
let your__img = document.querySelector(".your__img");
let opponentText = document.querySelector(".opponent__score");
let yourText = document.querySelector(".your__score");
let drawText = document.querySelector(".draw__score");
let uChoices = document.querySelectorAll("[data-choices]");
let Lang = document.querySelector("[data-language]");
let Langu = document.querySelector(".language");

// Lang.addEventListener("click", () => {



         // language = Lang.dataset.language;
         // if (language != "ru"){
         //     Langu.innerHTML = "eng";
         // }
         // else if(language != "eng"){
         //     Langu.innerHTML = "eng";
        // }
// })

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
    render();
}
function Score(your, oppo) {
    if(your == "rock" && oppo == "scissors" || your == "scissors" && oppo == "paper" || your == "paper" && oppo == "rock"){
        console.log(oppo, your);
        data[1] ++;
    }else if(your == "rock" && oppo == "paper" || your == "paper" && oppo == "scissors" || your == "scissors" && oppo == "rock"){
        console.log(oppo, your);
        data[0] ++;
    }else{
        console.log(oppo, your);
        data[2] ++;
    }
}
function Save(){
    let score = JSON.stringify(data);
    localStorage.setItem("score", score);
}
function Load() {
    let score = localStorage.getItem("score");
    if(score != null){
        data = JSON.parse(score)
    }
}
function render() {
    opponentText.innerText = "Computer Score: " + data[0] + ";";
    yourText.innerText = "Your Score: " + data[1] + ";";
    drawText.innerText = "Draw Score: " + data[2] + ";";
    console.log(data);
    Save();
}
render();