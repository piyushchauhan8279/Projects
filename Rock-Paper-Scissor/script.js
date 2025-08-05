let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

let yourScore=document.querySelector('#your-score')

let computerScore=document.querySelector("#comp-score")

let msg=document.querySelector('#msg')

// method to get the computer choice

let computerChoice = () => {
  let choices = ["rock", "paper", "scissor"];

  let randomIdx = Math.floor(Math.random() * 3);
  let compChoice = choices[randomIdx];
  console.log("computer choice is ", compChoice);
  return compChoice;
};

let drawn = (compChoice,userChoice) => {
  msg.innerHTML=`Its a Draw ${userChoice} matches ${compChoice}`
  msg.style.backgroundColor="#004e89"
  
};
// comparision between user and computer choice

let playGame = (userChoice, compChoice) => {
  let userWins = true;
   
    if (userChoice === "rock") {
      // comp- paper, scissor

      userWins = compChoice === "paper" ? false : true;
    }
    else if(userChoice==="paper"){
      // comp:- rock,scissor

      userWins=compChoice==="rock"?true:false;
    }
    else{
      // scissor
      // comp- rock , paper

      userWins=compChoice==="rock"?false:true;
    }
  
  return userWins;
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // find the id
    let userChoice = choice.getAttribute("id");
    console.log("userchoice is ", userChoice);

    let compChoice = computerChoice();

    if (compChoice === userChoice) {
    drawn(compChoice,userChoice);
  }else{
    let userWins=playGame(userChoice, compChoice);
  
    if(userWins){
      userScore++;
      console.log("user wins");
      
      yourScore.innerHTML=userScore;
      msg.style.backgroundColor="green";
      msg.innerHTML=`you win ${userChoice} beats ${compChoice}`


    }
    else{
      compScore++;
      console.log("computer wins");
      computerScore.innerHTML=compScore;
      msg.style.backgroundColor="red";
      msg.innerHTML=`you lose ${compChoice} beats ${userChoice}`
    }
  }

    
  });
});
