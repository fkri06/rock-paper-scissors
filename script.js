let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const getRandomValue = Math.floor(Math.random() * 3);
    switch (getRandomValue) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors"
    }
}

function getHumanChoice () {
    let humanChoice = prompt("Choose rock, paper, scissors: ");
    return humanChoice.toLowerCase();
} 

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Ties.");
    } else if ((humanChoice === "paper" && computerChoice === "rock") || 
         (humanChoice === "rock" && computerChoice === "scissors") ||
         (humanChoice === "scissors" && computerChoice === "paper")) 
    {
        console.log (`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);