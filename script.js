// global variables


let computerScore = 0;
let playerScore = 0;;

// a function that will randomly return either 'rock', 'paper', 'scissors'
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let answer = options[Math.floor(Math.random() * 3)]

    return answer;
}

//a function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    let result;

    switch(true) {
        case playerSelection === computerSelection:
            result = 'It\'s a tie!';
            break;
        case playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper':
            result = `You win! ${playerSelection} beats ${computerSelection}!`;
            playerScore += 1;
            break;
        case computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'paper':
            result = `You lose! ${computerSelection} beats ${playerSelection}!`;
            computerScore += 1;
            break;  
    }

    return result;
}

// a function that will let the round run 5 times
let game = () => {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
        console.log(playRound(playerSelection, computerPlay()));
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log('');
    }
}

//program starts here
game();


