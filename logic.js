console.log("Hello, from the javascript file");

function getComputerChoice(){
    let choice= Math.random();      //Will return a value greater than or equal to 0 and less than 1

    console.log(`The value of choice ${choice}`);

    if(choice <(1/3)){
        return "Rock";
    }
    else if(choice>= (1/3) && choice< (2/3)){
        return "Paper";
    }
    return "Scissors";
}

for (let i=0; i< 10; i++){
    console.log(getComputerChoice());
}