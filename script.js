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

//Step 2 - Create a function to play a round of rock, paper, scissors
//note - add a try except functionality to require input to match rock, paper, or scissors
function playRound (playerSelection, computerSelection){   
    const player = playerSelection
    const computer = computerSelection
    if (player === computer) {
        result = `This round is a draw. ${player.charAt(0).toUpperCase()}${player.slice(1)} matches ${computer}.`
    } else if ((player === "rock" && computer === "paper")||
        (player === "paper" && computer ==="scissors")||
        (player==="scissors"&& computer==="rock")){
        result = `You lost this round. ${computer.charAt(0).toUpperCase()}${computer.slice(1)} beats ${player}!`
    } else if ((player === "rock" && computer === "scissors")||
        (player==="paper"&&computer==="rock")||
        (player==="scissors"&&computer==="paper")) {
        result = `You won this round.  ${player.charAt(0).toUpperCase()}${player.slice(1)} beats ${computer}!`
    } else {
        result = "Undefined"
    }
    return result
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



