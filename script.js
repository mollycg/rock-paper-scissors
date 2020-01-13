<script>
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random()*options.length);
    return console.log(choice)};

var computerSelection = computerPlay();

var playerSelection = prompt('Rock, paper or scissors?');
console.log(playerSelection);

const regexRock = /rock/i;
const regexPaper = /paper/i;
const regexScissors = /scissors/i;

let testRock = playerSelection.match(regexRock);
let testPaper = playerSelection.match(regexPaper);
let testScissors = playerSelection.match(regexScissors);

var result;

function playRound(playerSelection, computerSelection) {
  rock:
  if (typeof testRock !== 'undefined') {
    if (computerSelection == 'paper') {
    return console.log('You lose! Paper beats rock!') 
  } else if (computerSelection == 'scissors') {
    return console.log('You win! Rock beats scissors!') 
  } else if (computerSelection == 'rock') {
    return console.log('It is a tie!') 
  } else {
    break rock;
  }
  }
  
  paper:
  if (typeof testPaper !== 'undefined') {
    if (computerSelection == 'scissors') {
      return console.log('You lose! Scissors beats paper!') 
    } else if (computerSelection == 'rock') {
      return console.log('You win! Paper beats rock!') 
    } else if (computerSelection == 'paper') {
      return console.log('It is a tie!') 
    } else {
      break paper;
    }
    }
  
  scissors:
  if (typeof testScissors !== 'undefined') {
    if (computerSelection == 'rock') {
      return console.log('You lose! Rock beats scissors!') 
    } else if (computerSelection == 'paper') {
      return console.log('You win! Scissors beats paper!') 
    } else if (computerSelection == 'scissors') {
      return console.log('It is a tie!') 
    } else {
      break scissors;
  }
  }
  
  function playGame() {
    if playerSelection != null {
      playRound()} else {
        break;
      }
    let numberOfGames = 0;
    do {
      if (result.includes('You win')) {
      let playerScore += 1
      } else if (result.includes('You lose')) {
      let computerScore += 1
      }
    } while (numberOfGames > 6)};
  
  }

</script>