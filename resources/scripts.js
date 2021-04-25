//keep score of the game:
let playerScore = 0;
let computerScore = 0;
//adding game function which returns playRound function. 
function game() {
    //a round of rock,paper or scissors consists of two player choosing one of these options, this will add their result to the score.
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "paper"){
            computerScore++
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore++
        } else if (playerSelection == "rock" && computerSelection == "rock") {
            return("It\'s a draw")
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore++
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            return ("It\'s a draw")
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            return ("It\'s a draw")
        }
        console.log("P1 " + playerScore + " : " + computerScore + " PC");
    }

    const playerSelection = getMychoice();
    const computerSelection = computerPlay();
    return playRound(playerSelection,computerSelection)
}

//Randamoly assign a choice to the computer.
function computerPlay() {
    let choice = ["rock", "paper", "scissors"]
    let chosen = choice[Math.floor(Math.random()*choice.length)];
    console.log("I choose " + chosen);
    return chosen;
}

//to get the players choice i must promt a question from the player 
// and then record their choice in a variable.
function getMychoice() {
    let mychoice = window.prompt("Choose rock, paper or scissors", "").toLowerCase();
    if ((mychoice === "rock") || (mychoice == "paper") || (mychoice == "scissors")) {
        console.log("pc chooses " + mychoice);
        return mychoice;
    } else if (mychoice == null) { //cancel error msg still not removed with this?
        return;
    } else {
        getMychoice()
    }
}
//iterate over game to play 5 rounds.
for (let i = 0; i < 5; i++) {
    console.log(game());
}

//overall winner & loser of game:
if (playerScore >= 3) {
    console.log("Final result: You are the Winner!")
} else if (computerScore >= 3) {
   console.log("Final result: Unlucky, you lost :(")
} else if (playerScore >= 2 && computerScore === 1) {
    console.log("Final result: You are the Winner!")
} else if (computerScore >= 2 && playerScore === 1) {
    console.log("Final result: Unlucky, you lost :(")
} else if (playerScore >= 1 && computerScore === 0) {
    console.log("Final result: You are the Winner!")
} else if (computerScore >= 1 && playerScore === 0) {
    console.log("Final result: Unlucky, you lost :(")
} else {
   console.log(" Final result: It\'s a draw")
}

//concerns: 
// 1. get an error message in console log when cancel is pressed.
// 2. get undefined randomly through rounds when score shows (plays 5 games regardless)
// debugger steps through log then to i++ 