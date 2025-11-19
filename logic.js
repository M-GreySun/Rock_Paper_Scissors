let humanScore=0;
let computerScore= 0;
let tie=0;

let numberOfRounds=5;

function getComputerChoice(){
    let choice= Math.random();      //Will return a value greater than or equal to 0 and less than 1

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
    return "Invalid Choice";
}

function playRound(humanChoice, computerChoice){
    let results= document.querySelector(".score #results");
    if(humanChoice===computerChoice){
        tie++;
        results.textContent= `I'ts a draw both players chose ${humanChoice}!`;
        document.querySelector(".score #tie").textContent= `Ties: ${tie}`;

    }
    else if(humanChoice=== "Invalid Choice"){
        computerScore++;
        results.textContent= `Player entered an invalid choice: ${humanChoice}. You Lose!`;
        document.querySelector(".score #computer").textContent= `Computer Score: ${computerScore}`;

    }
    else if((humanChoice=== "rock" && computerChoice== "scissors") || 
            (humanChoice=== "paper" && computerChoice== "rock") || 
            (humanChoice=== "scissors" && computerChoice== "paper")){
        humanScore ++;
        results.textContent= `You win ${humanChoice} beats ${computerChoice}!`;
        document.querySelector(".score #human").textContent= `Human Score: ${humanScore}`;
    }
    else{
        computerScore++;
        results.textContent= `You lose ${computerChoice} beats ${humanChoice}!`;
        document.querySelector(".score #computer").textContent= `Computer Score: ${computerScore}`;
    }
}


function playGame(){
    for(let i=0; i< numberOfRounds; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    console.log("Final Results: \n");

    console.log(`After ${numberOfRounds} round.`);
    console.log("Human Scored: " + humanScore);
    console.log("Computer Score: "+ computerScore);
    console.log(`Draws/ Ties: ${tie}`);
}
function finalResults(){
    let final= document.querySelector(".final");
    let paragraph= document.createElement("p");

    paragraph.textContent= `After ${numberOfRounds} round the final results are as follows: `;
    final.appendChild(paragraph);

    paragraph= document.createElement("p");
    paragraph.textContent= `Human Scored: ${humanScore}`;
    final.appendChild(paragraph);

    paragraph= document.createElement("p");
    paragraph.textContent= `Computer Score: ${computerScore}`;
    final.appendChild(paragraph);

    paragraph= document.createElement("p");
    paragraph.textContent= `Draws/ Ties: ${tie}`;
    final.appendChild(paragraph);

}

let button= document.querySelectorAll(".container button");
button.forEach((ele)=>{
    ele.addEventListener("click", () => {
        playRound(ele.id, getComputerChoice());
        if((humanScore+ computerScore+ tie)==numberOfRounds){
            finalResults();
        }
    });        
});

/*
let score= document.querySelectorAll(".score div")
score.forEach((ele)=> {
    console.log(ele.id);
});
*/


//playGame();