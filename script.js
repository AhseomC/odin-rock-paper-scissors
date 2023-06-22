//Declares variable that contains choices
const choice = ['rock','paper','scissors'];

//Declares variable that contains random position in the choice 
const random = Math.floor(Math.random() * choice.length);

//Choose random position and return the string value
function getComputerChoice() {
  return choice[random]
}

//takes input
let playerAnswer = prompt("Rock? Paper? Scissors?");
//Lowers the answer down to lower cases
let playerSelection = playerAnswer.toLowerCase();
let computerSelection = getComputerChoice();

//Compares and returns result
function compareSelections(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = 'Tie!';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = 'You Lose! Paper beats Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result = 'You Lose! Scissors beats Paper';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result = 'You Lose! Rock beats Scissors'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = 'You Win! Paper beats Rock';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = 'You Win! Scissors beats Paper';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = 'You Win! Rock beats Scissors';
  } 
  return result;
}
console.log(compareSelections(playerSelection, computerSelection));




