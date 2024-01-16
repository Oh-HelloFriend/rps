// Computer Choice
function getComputerChoice(){
    
    let rng = Math.random();

    let computerChoice;
    
    if (rng <= (1/3)) {
        computerChoice = "rock"
    } else if (rng <= (2/3)) {
        computerChoice = "paper"
    } else{
        computerChoice ="scissors"
    }
    
    return computerChoice;
}
//

// Get Player Choice and put it in lower case
function getPlayerChoice(){
    let playerChoice = prompt("Rock, paper or scissors ?").toLowerCase();
}
//
// Make sure Player plays RPS, loop to player choice

//