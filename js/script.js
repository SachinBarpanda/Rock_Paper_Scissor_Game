let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
 const choices = ['r','p','s'];
 const randomNumber = (Math.floor(Math.random()*3));
 return choices[randomNumber];
}

function converttoWord(letter){
  if(letter==="r")return "Rock";
  else if(letter==="s")return "Scissor";
  return "Paper";
}

function win(userChoice,computerChoice){
  console.log("Users Wins");
  userScore++;
  userScore_span.innerHTML=userScore;
  smallUserWord="User".fontsize(3).sub();
  smallComputerWord="A.I".fontsize(3).sub();
  result_p.innerHTML=`${converttoWord(userChoice)}${smallUserWord} beats ${converttoWord(computerChoice)}${smallComputerWord}  You Win! `;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow') },500);

}
function lose(userChoice,computerChoice){
  console.log("AI Wins");
  computerScore++;
  computerScore_span.innerHTML=computerScore;
  smallUserWord="User".fontsize(3).sub();
  smallComputerWord="A.I".fontsize(3).sub();
  result_p.innerHTML=`${converttoWord(userChoice)}${smallUserWord} beats ${converttoWord(computerChoice)}${smallComputerWord}  A.I Wins! `;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow') },500);

}
function draw(userChoice,computerChoice){
  console.log("Draw");
 
  smallUserWord="User".fontsize(3).sub();
  smallComputerWord="A.I".fontsize(3).sub();
computerScore_span.innerHTML=computerScore;
result_p.innerHTML=`${converttoWord(userChoice)}${smallUserWord} equals ${converttoWord(computerChoice)}${smallComputerWord}  No Wins! `;
document.getElementById(userChoice).classList.add('grey-glow');
setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow') },500);
}

// console.log(getComputerChoice());

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice+computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,computerChoice);
      break;


    case "sr":
    case "rp":
    case "ps":
      lose(userChoice,computerChoice);
      break;
    
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice,computerChoice);
        break;
    }
      

}

function main(){

  rock_div.addEventListener('click',function(){
    game("r");
  })
  
  paper_div.addEventListener('click',function(){
    game("p");
  })
  
  scissors_div.addEventListener('click',function(){
    game("s");
  })
}
main();