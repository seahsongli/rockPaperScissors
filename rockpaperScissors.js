
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
       

        if (playerSelection == computerSelection) 
        {
            return(`It is a tie! ${capitalizeFirstLetter(computerSelection)}(computer) vs ${capitalizeFirstLetter(playerSelection)}(player).`);
        }
        
        else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock"))  
        {
            computerScore += 1;
            return(`You lose! ${capitalizeFirstLetter(computerSelection)}(computer) beats ${capitalizeFirstLetter(playerSelection)}(player).`);
        }

        else if ((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "rock"))
        {
            playerScore += 1;
            return(`You Win! ${capitalizeFirstLetter(playerSelection)}(player) beats ${capitalizeFirstLetter(computerSelection)}(computer).`);
        }

        else 
        {
            return ("Invalid choice! Please try again!");
        }
        
    }
    declareWinner(computerScore, playerScore);

}

const body = document.querySelector('body');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let computerScore = 0;
let playerScore = 0;
const div = document.createElement('div');
//everytime player clicks on button, computerPlay() will be called and playRound will be called for results to appear
rock.addEventListener('click',function(){
    const computerSelection = computerPlay();
    const outcome = playRound("rock",computerSelection);
    rock.classList.add ="btn1";
    div.innerHTML= `${outcome}` + "<br />" + `Computer:${computerScore}, Player:${playerScore}`;
    declareWinner(computerScore,playerScore);


});
body.append(div);

paper.addEventListener('click',function(){
    const computerSelection = computerPlay();
    outcome = playRound("paper",computerSelection);
    div.innerHTML= `${outcome}` + "<br />" + `Computer:${computerScore}, Player:${playerScore}`;
    declareWinner(computerScore,playerScore);

   
});

scissors.addEventListener('click',function(){
    const computerSelection = computerPlay();
    outcome = playRound("scissors",computerSelection);
    div.innerHTML= `${outcome}` + "<br />" + `Computer:${computerScore}, Player:${playerScore}`;
    declareWinner(computerScore,playerScore);
    
});


// to determine winner
function declareWinner(computerScore, playerScore){
    if (computerScore == 5 || playerScore == 5){
        if (computerScore > playerScore) {
            alert("You lost! Better luck next time!");
        
        }
        else {
            alert("Congratulations! You won!");
           
        }
    }
   
    
}



// game();
