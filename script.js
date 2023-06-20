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






