
//adding game function which returns playRound function. 
function game() {
    //a round of rock,paper or scissors consists of two player choosing one of these options, this will show their outcome.
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
    //Randamoly assign a choice to the computer.
    function computerPlay() {
        let choice = ["rock", "paper", "scissors"]
        let chosen = choice[Math.floor(Math.random()*choice.length)];
        return chosen;
    }
    //to get the players choice i must promt a question from the player and record their choice in a variable.
    function getMychoice() {
        let mychoice = window.prompt("Choose rock, paper or scissors", "").toLowerCase();
        if ((mychoice === "rock") || (mychoice == "paper") || (mychoice == "scissors")) {
            return mychoice;
        } else {
            getMychoice()
        }
    }
    const playerSelection = getMychoice();
    const computerSelection = computerPlay();
    return playRound(playerSelection,computerSelection)
}
//iterate over game to play 5 rounds.
for (let i = 0; i < 5; i++) {
    console.log(game());
}

//record the results of iteration
