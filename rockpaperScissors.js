
function getRandomNumber(min,max) {
    let step_1 = max - min + 1; //number of terms
    let step_2 = Math.random() * step_1; //random gives random number from 0 to 1
    let step_3 = Math.floor(step_2) + min; //floor gives the biggest int of step_2

    return step_3;
}



function computerPlay(a){
      let randomIndex = getRandomNumber(0,2);
      let result = a[randomIndex]
      return result;
}

let computerChoices = ["rock", "paper", "scissors"];
console.log(computerPlay(computerChoices))