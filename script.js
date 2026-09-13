let humanScore = 0;
let computerScore = 0;
let rounds = 0;

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

function playRound(humanSelection) {
    const status = document.querySelector(".status");
    const humanChoice = humanSelection.toLowerCase();
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        status.textContent = `It's a tie! You pick ${humanChoice} and computer pick ${computerChoice}`;
    } else if ((humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")) 
    {
        status.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        status.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", function(event) {
    rounds++;
    
    // if status div does not exist yet
    if (!document.querySelector(".status")) {
        const body = document.body;
        const status = document.createElement("div");
        status.classList.add("status");
        body.appendChild(status);        
    }

    playRound(event.target.innerText);

    if (rounds === 5) {
        const status = document.querySelector(".status");
        if (humanScore > computerScore) {
            status.textContent = "Congratulations you win the game!";
        } else if (computerScore > humanScore) {
            status.textContent = "Computer wins!";
        } else {
            status.textContent = "It was a tie game...";
        }

        const finalScoreDiv = document.createElement("div");
        const h2 = document.createElement("h2");
        const humanP = document.createElement("p");
        const computerP = document.createElement("p");

        finalScoreDiv.appendChild(h2);
        finalScoreDiv.appendChild(humanP);
        finalScoreDiv.appendChild(computerP);
        
        h2.textContent = "Final Score: ";
        humanP.textContent = `Human: ${humanScore}`;
        computerP.textContent = `Computer: ${computerScore}`;
        
        document.body.appendChild(finalScoreDiv);

        // reset rounds and scores
        rounds = humanScore = computerScore = 0;
    }
}));
