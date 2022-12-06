//Step 1 - Create a function to have computer choose rock, paper, scissors//

function getComputerChoice () {
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

//Step 2 - Create a prompt for user input which stores playerSelection (make case insensitive)
function getPlayerChoice(){
    let choice = prompt('Choose:  "Rock", "Paper" or "Scissors"').toLowerCase();
    return choice;
}

let playerSelection = getPlayerChoice()
let computerSelection = getComputerChoice()

console.log(playerSelection)
console.log(computerSelection)
//let playerSelection = getPlayerChoice()
//Step 2 - Create a function to play a round of rock, paper, scissors

//note - always returns "This round is a Draw"...need to fix the if then code//
//note - consider using switches for the different cases//

function playRound (playerSelection, computerSelection){   
    const player = playerSelection
    const computer = computerSelection
    if (player === computer) {
        result = "This round is a draw."
    } else if ((player === "rock" && computer === "paper")||
        (player === "paper" && computer ==="scissors")||
        (player==="scissors"&& computer==="rock")){
        result = "You lost this round."
    } else if ((player === "rock" && computer === "scissors")||
        (player==="paper"&&computer==="rock")||
        (player==="scissors"&&computer==="paper")) {
        result = "You won this round."
    } else {
        result = "Undefined"
    }
}

//code for adding values to an array//
/*
const myArray  = ['I', 'love', 'chocolate', 'frogs'];
myArray.push('and oranges');
//console.log(madeAString) => ['I', 'love', 'chocolate', 'frogs', 'and oranges']
console.log(myArray)
*/

//Console testing//
console.log(playerSelection)
console.log (computerSelection)
console.log(playRound(playerSelection, computerSelection))



