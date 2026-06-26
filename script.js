function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    return choice.toLowerCase();
}

//scores
let humanScore = 0;
let computerScore = 0;

//single round logic
function playRound(humanChoice, computerChoice) {
    let result = "";
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    result = "Tie! Rock vs Rock";
                    break;
                case "paper":
                    result = "You lose! Paper beats Rock";
                    computerScore++;
                    break;
                case "scissors":
                    result = "You win! Rock beats Scissors";
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    result = "You win! Paper beats Rock";
                    humanScore++;
                    break;
                case "paper":
                    result = "Tie! Paper vs Paper";
                    break;
                case "scissors":
                    result = "You lose! Scissors beat Paper";
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    result = "You lose! Rock beats Scissors";
                    computerScore++;
                    break;
                case "paper":
                    result = "You win! Scissors beat Paper";
                    humanScore++;
                    break;
                case "scissors":
                    result = "Tie! Scissors vs Scissors";
                    break;
            }
            break;
    }
    console.log(result);
}

function playGame() {
    //5 rounds 
    for (let i=0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }

    if (humanScore>computerScore) {
        console.log("You Won!");
    }
    else if (humanScore<computerScore) {
        console.log("You Lost!");
    }
    else if (humanScore==computerScore) {
        console.log("It's a Tie!");
    }
}

playGame();