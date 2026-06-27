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

function getHumanChoice(event) {
    let currentButton = event.target.closest("#button-rock, #button-paper, #button-scissors");
    if (currentButton === null) { return; }
    switch (currentButton.id) {
        case "button-rock":
            console.log("rock press");
            playRound("rock", getComputerChoice());
            break;
        case "button-paper":
            playRound("paper", getComputerChoice());
            break;
        case "button-scissors":
            playRound("scissors", getComputerChoice());
            break;
        default:
            return;
    }
}

//scores
let humanScore = 0;
let computerScore = 0;

//single round logic
function playRound(humanChoice, computerChoice) {
    if (humanScore == 5) {
        createText("You Won!");
        return;
    }
    else if (computerScore == 5) {
        createText("You Lost!")
        return;
    }

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
    createText(result);
}

function createText(text) {
    let resultBox = document.querySelector(".result")
    resultBox.textContent = text;
}

//DOM
let buttonSelected = document.querySelector(".buttons");
buttonSelected.addEventListener("click", getHumanChoice);