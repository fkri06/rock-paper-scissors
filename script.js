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
