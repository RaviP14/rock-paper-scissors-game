//keep score of the game:
let playerScore = 0;
let computerScore = 0;
//adding game function which returns playRound function. 
function game(playerSelection) {
    //a round of rock,paper or scissors consists of two player choosing one of these options, this will add their result to the score.
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "paper"){
            computerScore++
            return ("You Lost! This round.")
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore++
            return ("You Won! This round.")
        } else if (playerSelection == "rock" && computerSelection == "rock") {
            return("It\'s a draw")
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore++
            return ("You Won! This round.")
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++
            return ("You Lost! This round.")
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            return ("It\'s a draw")
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++
            return ("You Lost! This round.")
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++
            return ("You Won! This round.")
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            return ("It\'s a draw")
        }
    }
    console.log("P1 " + playerScore + " : " + computerScore + " PC");
    const computerSelection = computerPlay();
    return playRound(playerSelection,computerSelection)
}

//Randamoly assign a choice to the computer.
function computerPlay() {
    let choice = ["rock", "paper", "scissors"]
    let chosen = choice[Math.floor(Math.random()*choice.length)];
    console.log("PC choose " + chosen);
    return chosen;
}



//iterate over game to play 5 rounds.
//for (let i = 0; i < 5; i++) {
//    console.log(game());
//}

//get player choice through button press:
const myButtonChoice1 = document.querySelector('#bR');
myButtonChoice1.addEventListener("click", (e) => {
    const playerSelection = e.target.dataset.control
    game(playerSelection)
    console.log("I choose " + "rock");
});

const myButtonChoice2 = document.querySelector('#bP');
myButtonChoice2.addEventListener("click", (e) => {
    const playerSelection = e.target.dataset.control
    game(playerSelection)
    console.log("I choose " + "paper");
});

const myButtonChoice3 = document.querySelector('#bS');
myButtonChoice3.addEventListener("click", (e) => {
    //console.log(e.target.dataset.control);
    const playerSelection = e.target.dataset.control
    game(playerSelection)
    console.log("I choose " + "scissors");
});


//overall winner & loser of game:
// to do:add if statement to run this function eg if (loop = false) return overall
function overall () {
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
}
//concerns: 
// 1. get an error message in console log when cancel is pressed on promt.
