function computerPlay() {
    let options = ['', 'Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * 3) + 1];
}

console.log(computerPlay());
