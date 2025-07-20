console.log("Hello, from the javascript file");
const prompt = require("prompt-sync")();


function getComputerChoice(){
    let choice= Math.random();      //Will return a value greater than or equal to 0 and less than 1

    //console.log(`The value of choice ${choice}`);

    if(choice <(1/3)){
        return "Rock";
    }
    else if(choice>= (1/3) && choice< (2/3)){
        return "Paper";
    }
    return "Scissors";
}

function getHumanChoice(){
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
console.log(getHumanChoice());