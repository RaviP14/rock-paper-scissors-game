
function computerPlay() {
    var choice = ["rock", "paper", "scissors"]
    var chosen = choice[Math.floor(Math.random()*choice.length)];
     return chosen;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return ("you Lose! Paper beats Rock")
    } else {
        return ("You Win!")
    }
}

const playerSelection = "rock"
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
