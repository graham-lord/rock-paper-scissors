const buttons = document.querySelectorAll('button');
const result = document.querySelector('.message');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
let pScoreLength = pScore.textContent.length;
let cScoreLength = cScore.textContent.length; 
let computerScore = 0;
let playerScore = 0;
let message;


pScore.textContent += playerScore;
cScore.textContent += computerScore;
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}


function playRound(playerSelection) {
    const computerSelection = computerPlay();

    switch(true) {
        case playerSelection == computerSelection:

            message = 'It\'s a tie!';
            break;
        case (playerSelection == 'rock' && computerSelection == 'scissors') 
        || (playerSelection == 'paper' && computerSelection == 'rock') 
        || (playerSelection == 'scissors' && computerSelection == 'paper'):

            message =  `You win! ${playerSelection} beats ${computerSelection}!`;
            playerScore++;
            pScore.textContent = pScore.textContent.slice(0, pScoreLength) + playerScore;
            if(playerScore == 5) {
                message = `You won the game! Reload the page to play again!`;
                disableButtons()
            }
            break;
        default:
            message = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
            cScore.textContent = cScore.textContent.slice(0, cScoreLength) + computerScore;
            if(computerScore == 5) {
                message = `Computer won the game! Reload the page to play again!`;
                disableButtons();
            }
            break;
    }
    result.textContent = message;
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});

