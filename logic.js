let player=0;
let AI= 0;
let tie=0;

//let numberOfRounds=5;

function geAIChoice(){
    let choice= Math.random();      //Will return a value greater than or equal to 0 and less than 1

    if(choice <(1/3)){
        return "rock";
    }
    else if(choice>= (1/3) && choice< (2/3)){
        return "paper";
    }
    return "scissors";
}

function getPlayerChoice(){
    //const prompt = require("prompt-sync")();
    //let choice =prompt("Please enter a valid choice (Rock, Paper, Scissors): ");

    if(choice.toLowerCase("rock")=== "rock"){
        return "rock"
    }
    else if(choice.toLowerCase("paper")=== "paper"){
        return "paper";
    }
    else{
        return "scissors";
    }
    //return "Invalid Choice";
}

function playRound(playerChoice, AIChoice){
    let results= document.querySelector(".round");
    if(playerChoice===AIChoice){
        tie++;
        results.textContent= `I'ts a draw both players chose ${playerChoice}!`;
        //document.querySelector(".score #tie").textContent= `${tie}`;

    }
    //else if(playerChoice=== "Invalid Choice"){
        //AI++;
        //results.textContent= `Player entered an invalid choice: ${playerChoice}. You Lose!`;
        //document.querySelector(".score #computer").textContent= `Computer Score: ${AI}`;

    //}
    else if((playerChoice=== "rock" && AIChoice== "scissors") || 
            (playerChoice=== "paper" && AIChoice== "rock") || 
            (playerChoice=== "scissors" && AIChoice== "paper")){
        player ++;
        results.textContent= `You win ${playerChoice} beats ${AIChoice}!`;
        document.querySelector(".scoreValue#player").textContent= `${player}`;
        //class="scoreValue" id="player"
    }
    else{
        AI++;
        results.textContent= `You lose ${AIChoice} beats ${playerChoice}!`;
        document.querySelector(".scoreValue#AI").textContent= `${AI}`;
        //class="scoreValue" id="AI"
    }
}

/*
function playGame(){
    for(let i=0; i< numberOfRounds; i++){
        playRound(getPlayerChoice(), geAIChoice());
    }
    
    console.log("Final Results: \n");

    console.log(`After ${numberOfRounds} round.`);
    console.log("Human Scored: " + player);
    console.log("Computer Score: "+ AI);
    console.log(`Draws/ Ties: ${tie}`);
}
*/
function finalResults(){
    let final= document.querySelector(".final");
    let paragraph= document.createElement("p");

    paragraph.textContent= `After ${numberOfRounds} round the final results are as follows: `;
    final.appendChild(paragraph);

    paragraph= document.createElement("p");
    paragraph.textContent= `Human Scored: ${player}`;
    final.appendChild(paragraph);

    paragraph= document.createElement("p");
    paragraph.textContent= `Computer Score: ${AI}`;
    final.appendChild(paragraph);

    paragraph= document.createElement("p");
    paragraph.textContent= `Draws/ Ties: ${tie}`;
    final.appendChild(paragraph);

}

let button= document.querySelectorAll("button");
button.forEach((ele)=>{
    ele.addEventListener("click", () => {
        //playRound(ele.id, geAIChoice());
        //if((player+ AI+ tie)==numberOfRounds){
            //finalResults();
        //}
        if(ele.id !="result" && ele.id != "reset"){
            playRound(ele.id, geAIChoice());
        }
        else if(ele.id =="reset"){
            player=0;
            AI= 0;
            tie=0;
            document.querySelector(".scoreValue#player").textContent= `${player}`;
            document.querySelector(".scoreValue#AI").textContent= `${player}`;
        }
        console.log(`The id of the button that was clicked: ${ele.id}`);
    });        
});

/*
let score= document.querySelectorAll(".score div")
score.forEach((ele)=> {
    console.log(ele.id);
});
*/


//playGame();