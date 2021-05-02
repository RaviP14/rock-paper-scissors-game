//keep score of the game:
let playerScore = 0;
let computerScore = 0;
//adding game function which returns playRound function. 
function game(playerSelection) {
    //a round of rock,paper or scissors - two player choosing 1 of 3 options, then winners score is added.
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "paper"){
            computerScore++
            return div3.textContent = ("You Lost! This round.")
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore++
            return div3.textContent = ("You Won! This round.")
        } else if (playerSelection == "rock" && computerSelection == "rock") {
            return div3.textContent = ("It\'s a draw")
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore++
            return div3.textContent = ("You Won! This round.")
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++
            return div3.textContent = ("You Lost! This round.")
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            return div3.textContent = ("It\'s a draw")
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++
            return div3.textContent = ("You Lost! This round.")
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++
            return div3.textContent = ("You Won! This round.")
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            return div3.textContent = ("It\'s a draw")
        }
    }
    const computerSelection = computerPlay();
    return playRound(playerSelection,computerSelection)
}

//Randamoly assign a choice to the computer.
function computerPlay() {
    let choice = ["rock", "paper", "scissors"]
    let chosen = choice[Math.floor(Math.random()*choice.length)];
    div2.textContent = ("PC chooses " + chosen);
    return chosen;
}

//get player choice through button press (only runs upto 5 points):
const myButtonChoice1 = document.querySelector('#bR');
myButtonChoice1.addEventListener("click", (e) => {
    const playerSelection = e.target.dataset.control
    if (playerScore >= 5 || computerScore >= 5) {
        div5.textContent = ("Press F5 to play again")
    } else if (playerScore < 5 || computerScore < 5) {
        game(playerSelection)
        div1.textContent = "I choose " + "rock";
        div0.textContent = ("P1 " + playerScore + " : " + computerScore + " PC");
        winner()
    }
});

const myButtonChoice2 = document.querySelector('#bP');
myButtonChoice2.addEventListener("click", (e) => {
    const playerSelection = e.target.dataset.control
    if (playerScore >= 5 || computerScore >= 5) {
        div5.textContent = ("Press F5 to play again")
    } else if (playerScore < 5 || computerScore < 5) {
        game(playerSelection)
        div1.textContent = "I choose " + "paper";
        div0.textContent = ("P1 " + playerScore + " : " + computerScore + " PC");
        winner()
    }
});

const myButtonChoice3 = document.querySelector('#bS');
myButtonChoice3.addEventListener("click", (e) => {
    //console.log(e.target.dataset.control);
    const playerSelection = e.target.dataset.control
    if (playerScore >= 5 || computerScore >= 5) {
        div5.textContent = ("Press F5 to play again")
    } else if (playerScore < 5 || computerScore < 5) {
        game(playerSelection)
        div1.textContent = "I choose " + "scissors";
        div0.textContent = ("P1 " + playerScore + " : " + computerScore + " PC");
        winner()
    }
});
//div's created for responeses
const mBody = document.querySelector("body");

const div0 = document.createElement("div");
div0.classList.add("div0");

mBody.appendChild(div0);

const div1 = document.createElement("div");
div1.classList.add("div1");

mBody.appendChild(div1);

const div2 = document.createElement("div");
div2.classList.add("div2");

mBody.appendChild(div2);

const div3 = document.createElement("div");
div3.classList.add("div3");

mBody.appendChild(div3);

const div4 = document.createElement("div");
div4.classList.add("div4");

mBody.appendChild(div4);

const div5 = document.createElement("div");
div5.classList.add("div5");

mBody.appendChild(div5);

//overall winner
function winner () {
    if (playerScore >= 5) { 
        div4.textContent = ("Final result: You are the Winner!")
    } else if (computerScore >= 5) {
        div4.textContent = ("Final result: Unlucky, you lost :(")
    } else {
        return
    }
}