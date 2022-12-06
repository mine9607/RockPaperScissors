//Step 1 - Create a function to have computer choose rock, paper, scissors//

function getComputerChoice () {
    let choice = ""
    let computerResult = Math.floor(Math.random()*3);
    if (computerResult === 0){
        choice = "rock";
    } else if (computerResult === 1){
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
};

let computerSelection = getComputerChoice()

//Step 2a - Create a prompt for user input which stores playerSelection (make case insensitive)
let playerSelection = prompt('Choose:  "Rock", "Paper" or "Scissors"').toLowerCase()

//Step 2 - Create a function to play a round of rock, paper, scissors

//note - always returns "This round is a Draw"...need to fix the if then code//
function playRound (playerSelection, computerSelection){   
    if (playerSelection === computerSelection) {
        result = "This round is a Draw.";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        result = "You won this round.";
    } else {
        result = "You lost this round.";
    }
    return result;
}



//Console testing//
console.log(playerSelection)
console.log (getComputerChoice())
console.log(playRound())



