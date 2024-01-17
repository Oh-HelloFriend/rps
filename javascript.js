// Computer Choice
function getComputerChoice(){    
    let rng = Math.random();

    if (rng <= (1/3)) {
        return "rock"
    } else if (rng <= (2/3)) {
        return "paper"
    } else{
        return "scissors"
    }
}
let computerChoice = getComputerChoice();
//
// Get Player Choice and put it in lower case
function getPlayerChoice(){
    return prompt("rock, paper or scissors ?").toLowerCase();
}

let playerChoice = getPlayerChoice();
//
// Play one round
function playRound(playerChoice, computerChoice){

    if (((playerChoice === "rock") && (computerChoice === "scissors")) || 
    ((playerChoice === "scissors") && (computerChoice === "paper")) || 
    ((playerChoice === "paper") && (computerChoice === "rock"))){
    return `You Win ! ${playerChoice} beats ${computerChoice} !`;
        
    } else if (((playerChoice === "rock") && (computerChoice === "paper")) || 
    ((playerChoice === "scissors") && (computerChoice === "rock")) || 
    ((playerChoice === "paper") && (computerChoice === "scissors"))){
    return `You Lose ! ${playerChoice} is beaten by ${computerChoice} !`;
        
    } else{
        console.log(playRound(playerChoice, computerChoice))
    }
}

//
console.log(playRound(playerChoice,computerChoice))
//Play Five rounds
function bo5(){

}
//