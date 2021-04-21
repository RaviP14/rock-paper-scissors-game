
function computerPlay() {
    let choice = ["rock", "paper", "scissors"]
    let chosen = choice[Math.floor(Math.random()*choice.length)];
     return chosen;
}

function getMychoice() {
    let mychoice = window.prompt("Choose rock, paper or scissors", "")
    if ((mychoice.toString().toLowerCase() === "rock") || (mychoice == "paper") || (mychoice == "scissors")) {
        return mychoice;
    } else {
        getMychoice()
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper"){
        return ("you Lose! Paper beats Rock")
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("You Win!")
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return("It\'s a draw")
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("you Win!")
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return ("You Lose! Scissors beats Paper")
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return ("It\'s a draw")
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ("You Lose! Rock beats Scissors")
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ("You Win!")
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return ("It\'s a draw")
    }
}

const playerSelection = getMychoice();
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
