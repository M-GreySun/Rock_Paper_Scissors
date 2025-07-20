let humanScore=0;
let computerScore= 0;

function getComputerChoice(){
    let choice= Math.random();      //Will return a value greater than or equal to 0 and less than 1

    //console.log(`The value of choice ${choice}`);

    if(choice <(1/3)){
        return "rock";
    }
    else if(choice>= (1/3) && choice< (2/3)){
        return "paper";
    }
    return "scissors";
}

function getHumanChoice(){
    //const prompt = require("prompt-sync")();
    let choice =prompt("Please enter a valid choice (Rock, Paper, Scissors): ");

    if(choice.toLowerCase("rock")=== "rock"){
        return "rock"
    }
    else if(choice.toLowerCase("paper")=== "paper"){
        return "paper";
    }
    else if(choice.toLowerCase("scissors")=== "scissors"){
        return "scissors";
    }
    //console.log(choice);
    return "Invalid Choice";
}

function playRound(humanChoice, computerChoice){
    if(humanChoice===computerChoice){
        return `It's a draw both player chose ${humanChoice.toUpperCase()}!\n`;
    }
    else if(humanChoice=== "Invalid Choice"){
        computerScore++;
        return `Player entered an invalid choice. You Lose!\n`;
    }
    else if((humanChoice=== "rock" && computerChoice== "scissors") || 
            (humanChoice=== "paper" && computerChoice== "rock") || 
            (humanChoice=== "scissors" && computerChoice== "paper")){
        humanScore ++;
        return `You win ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!\n`;
    }
    else{
        computerScore++;
        return `You lose ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!\n`;
    }
}


function playGame(){
    let numberOfRound=5;
    for(let i=0; i< numberOfRound; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    console.log("Final Results: \n");

    console.log(`After ${numberOfRound} round.`);
    console.log("Human Scored: " + humanScore);
    console.log("Computer Score: "+ computerScore);
    console.log(`Draws/ Ties: ${numberOfRound- humanScore- computerScore}`);
}

playGame();