function computerPlay() {
    let options = ['', 'Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * 3) + 1];
}

function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Rock, Paper or Scissors!");

    console.log(computerSelection);
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    let result;
    switch(true) {
        case playerSelection === computerSelection:
            result = "Draw!";
            break;
        case playerSelection === 'Rock' && computerSelection === 'Scissors':
            result = 'You Win! Rock beats Scissors.';
            break;
        case playerSelection === 'Rock' && computerSelection === 'Paper':
            result = 'You Lose! Paper beats Rock.';
            break;
        case playerSelection === 'Paper' && computerSelection === 'Rock':
            result = 'You win! Paper beats Rock.';
            break;
        case playerSelection === 'Paper' && computerSelection === 'Scissors':
            result = 'You lose! Scissors beats Paper.';
            break;
        case playerSelection === 'Scissors' && computerSelection === 'Rock':
            result = 'You lose! Rock beats Scissors.';
            break;
        case playerSelection === 'Scissors' && computerSelection === 'Paper':
            result = 'You win! Scissors beats Paper.';
            break;
        default:
            result = "Enter a valid input!";
    }

    return result;
}

