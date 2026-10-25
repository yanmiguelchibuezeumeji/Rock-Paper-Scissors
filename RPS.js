function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    return 'scissors';
  }
}

function getHumanChoice() {
  let choice = prompt("Input your choice(rock , paper or scissors):");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let result = "";

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
      result = "You draw! rock equals rock";
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
      result = "You draw! paper equals paper";
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
      result = "You draw! scissors equals scissors";
    }
  }
  console.log(result);
  console.log("humanScore:" + humanScore, "computerScore:" + computerScore);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    console.log("getHumanChoice returned:", humanSelection);

    const computerSelection = getComputerChoice();
    console.log("getComputerChoice returned:", computerSelection);

    playRound(humanSelection, computerSelection);
  }
}

playGame();