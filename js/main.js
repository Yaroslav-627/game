let you;
let opponent;
let yourScore = 0;
let opponentScore = 0;
let drawScore = 0;
let data = [0, 0, 0];
let language = "eng";
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
let check = document.querySelector(".checkbox_i");

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
        language = data[3];
    }
}
check.addEventListener("click", () => {
    if(check.checked == true){
        language = "ua";
        data[3] = language;
    }else if(check.checked == false){
        language = "eng";
        data[3] = language;
    }
    render();
})
function render(){
    if (language == "eng"){
        opponentText.innerText = "Computer Score: " + data[0] + ";";
        yourText.innerText = "Your Score: " + data[1] + ";";
        drawText.innerText = "Draw Score: " + data[2] + ";";
        language = "eng";
    }else if(language == "ua"){
        opponentText.innerText = "Рахунок комп'ютера: " + data[0] + ";";
        yourText.innerText = "Твій рахунок: " + data[1] + ";";
        drawText.innerText = "Нічия: " + data[2] + ";";
        language = "ua";
    }
    console.log(data);
    Save();
}
render();