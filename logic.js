let humanScore=0;
let computerScore= 0;
let tie=0;

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
    let results= document.querySelector(".score #results");
    if(humanChoice===computerChoice){
        tie++;
        //return `It's a draw both player chose ${humanChoice.toUpperCase()}!\n`;
        results.textContent= `I'ts a draw both players chose ${humanChoice}!`;
        document.querySelector(".score #tie").textContent= `Ties: ${tie}`;

    }
    else if(humanChoice=== "Invalid Choice"){
        computerScore++;
        //return `Player entered an invalid choice. You Lose!\n`;
        results.textContent= `Player entered an invalid choice: ${humanChoice}. You Lose!`;
        document.querySelector(".score #computer").textContent= `Computer Score: ${computerScore}`;

    }
    else if((humanChoice=== "rock" && computerChoice== "scissors") || 
            (humanChoice=== "paper" && computerChoice== "rock") || 
            (humanChoice=== "scissors" && computerChoice== "paper")){
        humanScore ++;
        //return `You win ${humanChoice} beats ${computerChoice.toUpperCase()}!\n`;
        results.textContent= `You win ${humanChoice} beats ${computerChoice}!`;
        document.querySelector(".score #human").textContent= `Human Score: ${humanScore}`;
    }
    else{
        computerScore++;
        //return `You lose ${computerChoice.toUpperCase()} beats ${humanChoice}!\n`;
        results.textContent= `You lose ${computerChoice} beats ${humanChoice}!`;
        document.querySelector(".score #computer").textContent= `Computer Score: ${computerScore}`;
    }
}


function playGame(){
    //let numberOfRound=5;
    //for(let i=0; i< numberOfRound; i++){
        //playRound(getHumanChoice(), getComputerChoice());
        //score.querySelector(".results").textContent=`Round results: ${}`;
    //}
    let final= document.querySelector(".final");
    let paragraph= document.createElement("p");
    paragraph.textContent="Final Results";
    final.appendChild(p);

    //console.log("Final Results: \n");

    console.log(`After ${numberOfRound} round.`);
    console.log("Human Scored: " + humanScore);
    console.log("Computer Score: "+ computerScore);
    console.log(`Draws/ Ties: ${tie}`);
}

let button= document.querySelectorAll("button");
button.forEach((ele)=>{
    ele.addEventListener("click", () => {
        playRound(ele.id, getComputerChoice());
    });        
});

/*
let score= document.querySelectorAll(".score div")
score.forEach((ele)=> {
    console.log(ele.id);
});
*/


//playGame();