let player=0;
let AI= 0;
let tie=0;



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
    if(choice.toLowerCase("rock")=== "rock"){
        return "rock"
    }
    else if(choice.toLowerCase("paper")=== "paper"){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerChoice, AIChoice){
    
    let results= document.querySelector(".results");
    
    
    results.setAttribute("style", "visibility: visible;");
    
    
    if(playerChoice===AIChoice){
        tie++;
        results.textContent= `I'ts a draw both players chose ${playerChoice}!`;

    }
    
    else if((playerChoice=== "rock" && AIChoice== "scissors") || 
            (playerChoice=== "paper" && AIChoice== "rock") || 
            (playerChoice=== "scissors" && AIChoice== "paper")){
        player ++;
        results.textContent= `You win ${playerChoice} beats ${AIChoice}!`;
        document.querySelector(".scoreValue#player").textContent= `${player}`;
    }
    else{
        AI++;
        results.textContent= `You lose ${AIChoice} beats ${playerChoice}!`;
        document.querySelector(".scoreValue#AI").textContent= `${AI}`;
    }
}



function resetGame(){
    player=0;
    AI= 0;
    tie=0;
    document.querySelector(".scoreValue#player").textContent= `${player}`;
    document.querySelector(".scoreValue#AI").textContent= `${player}`;

}
function displayResults(){
    let display= document.querySelector(".results");
    display.textContent="";
    let paragraph= document.createElement("p");

    paragraph.textContent= `After ${player+ AI+ tie} round the final results are as follows: `;
    display.appendChild(paragraph);

    paragraph= document.createElement("p");
    paragraph.textContent= `Human Scored: ${player}`;
    display.appendChild(paragraph);

    paragraph= document.createElement("p");
    paragraph.textContent= `Computer Score: ${AI}`;
    display.appendChild(paragraph);

    paragraph= document.createElement("p");
    paragraph.textContent= `Draws/ Ties: ${tie}`;
    display.appendChild(paragraph);

    paragraph=document.createElement("p");

    if(player>AI){
        paragraph.textContent="Player Wins!";
    }
    else if(player<AI){
        paragraph.textContent="AI Wins!";
    }
    else{
        paragraph.textContent="It's a Draw!";
    }
    display.append(paragraph);
}


let button= document.querySelectorAll("button");
button.forEach((ele)=>{
    ele.addEventListener("click", () => {
        if(ele.id !="result" && ele.id != "reset"){
            playRound(ele.id, geAIChoice());
        }
        else if(ele.id =="reset"){
            resetGame();
            document.querySelector(".results").setAttribute("style", "visibility: hidden");
        }
        else{
            displayResults();
        }
    });        
});
