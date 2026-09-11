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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    let round = 5;

    while (round !== 0) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        if (humanChoice === computerChoice) {
            console.log("Ties.");
        } else if ((humanChoice === "paper" && computerChoice === "rock") || 
         (humanChoice === "rock" && computerChoice === "scissors") ||
         (humanChoice === "scissors" && computerChoice === "paper")) 
        {
            console.log (`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
        round--;
    }

    console.log("Final score: ");
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

}

playGame();