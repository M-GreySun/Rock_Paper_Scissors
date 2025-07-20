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

function getHumanChoice(choice ="Invalid Answer"){
    choice =prompt("Please enter a valid choice (1 for Rock, 2 for Paper, or 3 for Scissors): ");

    console.log(choice);

    return choice;
}

getHumanChoice();