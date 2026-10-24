function getComputerChoice() {
  let randomNumber = Math.random();
  let computerChoice = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerChoice = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerChoice = 'scissors';
  }
  return computerChoice;
  console.log(computerChoice);
}

function getHumanChoice() {
  let humanChoice = prompt("Input your choice(rock , paper or scissors):")
  return humanChoice;
  console.log(humanChoice);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let result = "";
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      result = "You win! rock beats scissors";
      humanScore += 1;
    }
    else if (computerChoice === "paper") {
      result = "You lose! paper beats rock";
      computerScore += 1;
    }
    else if (computerChoice === "rock") {
      result = "It's a draw";
    }
  }
  else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      result = "You win! paper beats rock";
      humanScore += 1;
    }
    else if (computerChoice === "scissors") {
      result = "You lose! scissors beats paper";
      computerScore += 1;
    }
    else if (computerChoice === "paper") {
      result = "It's a draw";
    }
  }
  else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      result = "You lose! rock beats scissors";
      computerScore += 1;
    }
    else if (computerChoice === "paper") {
      result = "You win! scissors beats paper";
      humanScore += 1;
    }
    else if (computerChoice === "scissors") {
      result = "It's a draw";
    }
  }
console.log(result);
console.log("humanScore:" + humanScore , "computerScore:" + computerScore);
}