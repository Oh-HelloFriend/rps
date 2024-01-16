function getComputerChoice(){
    
    let rng = Math.random();

    let computerChoice;
    
    if (rng <= (1/3)) {
        computerChoice = "Rock"
    } else if (rng <= (2/3)) {
        computerChoice = "Paper"
    } else{
        computerChoice ="Scissors"
    }
    
    return computerChoice;
}

console.log(getComputerChoice())