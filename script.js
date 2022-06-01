function computerPlay() {
    let options = ['', 'Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * 3) + 1];
}

let computerSelection = computerPlay();
let playerSelection = 'Rock';

playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

console.log(playerSelection);
