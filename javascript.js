// Computer Choice
let computerChoice;

function getComputerChoice(){    
    let rng = Math.random();
    
    if (rng <= (1/3)) {
        computerChoice = "rock";
    } else if (rng <= (2/3)) {
        computerChoice = "paper";
    } else{
        computerChoice = "scissors";
    }
}
//
// Get Player Choice and put it in lower case
let playerChoice;

function getPlayerChoice(){
    playerChoice = prompt("rock, paper or scissors ?").toLowerCase();
}

//
//Win/lose count
let win = 0
let lose = 0
let gameCount = 0
//
// Play one round
function playRound(){
    getComputerChoice();
    getPlayerChoice();

    if (((playerChoice === "rock") && (computerChoice === "scissors")) || 
    ((playerChoice === "scissors") && (computerChoice === "paper")) || 
    ((playerChoice === "paper") && (computerChoice === "rock"))){
        win++;
        gameCount++;
        console.log(`You Win ! ${playerChoice} beats ${computerChoice} !`);
        console.log(`Best of 5 games !\n\nGame number = ${gameCount}\n\nWin count = ${win}\nLose count = ${lose}`);
        return;
        
    } else if (((playerChoice === "rock") && (computerChoice === "paper")) || 
    ((playerChoice === "scissors") && (computerChoice === "rock")) || 
    ((playerChoice === "paper") && (computerChoice === "scissors"))){
        lose++;
        gameCount++;
        console.log(`You Lose ! ${playerChoice} is beaten by ${computerChoice} !`);
        console.log(`Best of 5 games !\n\nGame number = ${gameCount}\n\nWin count = ${win}\nLose count = ${lose}`)
        return;
        
    } else{
        console.log("It's a tie ! Let's play this one again.");
        console.log(`Best of 5 games !\n\nGame number = ${gameCount}\n\nWin count = ${win}\nLose count = ${lose}`);
        playRound();
        return;
    }
}
//
//BO5
function playGame(){
    alert("Welcome ! Rock Paper Scissors, best of five games ! Let's do this !");
    while(gameCount<5){
        playRound();
    }
    if(win>lose){
        alert("Well played ! You win !");
    }else alert("You lost.");
}
playGame();
//