
function getRandomNumber(min,max) {
    let step_1 = max - min + 1; //number of terms
    let step_2 = Math.random() * step_1; //random gives random number from 0 to 1
    let step_3 = Math.floor(step_2) + min; //floor gives the biggest int of step_2

    return step_3;
}


// Function to get a random play from computer
function computerPlay(){  
      const computerChoices = ["rock", "paper", "scissors"];
      let randomIndex = getRandomNumber(0,2);
      let result = computerChoices[randomIndex]
      return result;
}

//Function to return get the first letter capitalized
function capitalizeFirstLetter(str){
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}



// Function to get the round to start playing
function playRound(playerSelection,computerSelection) {

   //If player cancel or did not type antyhing
    if(playerSelection == null || playerSelection == false ) { 
        return ("Invalid choice! Please try again!")
        
    }
    else {
        playerSelection.toLowerCase()

        if (playerSelection == computerSelection) 
        {
            return(`It is a tie! ${capitalizeFirstLetter(computerSelection)}(computer) vs ${capitalizeFirstLetter(playerSelection)}(player).`);
        }
        
        else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock"))  
        {
            return(`You lose! ${capitalizeFirstLetter(computerSelection)}(computer) beats ${capitalizeFirstLetter(playerSelection)}(player).`);
        }

        else if ((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "rock"))
        {
            return(`You Win! ${capitalizeFirstLetter(playerSelection)}(player) beats ${capitalizeFirstLetter(computerSelection)}(computer).`);
        }

        else 
        {
            return ("Invalid choice! Please try again!");
        }
    }

}
let outcome;
function game(){
    for (i=0; i< 5; i++){
        const playerSelection = prompt("Choose Rock, Paper or Scissors!");
        const computerSelection = computerPlay();
        outcome = playRound(playerSelection,computerSelection);
        if (outcome == "Invalid choice! Please try again!" ){
            i--; //so that it can be out of 5 times
        }
        alert(outcome);
        console.log(outcome);
    }
    return;
}



game();
