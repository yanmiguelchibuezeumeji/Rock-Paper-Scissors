function getComputerChoice() {
  let randomNumber = Math.random();
  let computerChoice = '';
  if (randomNumber>=0 && randomNumber<1/3) {
    computerChoice = 'rock';
  }
  else if (randomNumber>=1/3 && randomNumber<2/3) {
    computerChoice = 'paper';
  }
  else if (randomNumber>=2/3 && randomNumber<1) {
    computerChoice = 'scissors';
  }
  return computerChoice;
  console.log(computerChoice);
}
