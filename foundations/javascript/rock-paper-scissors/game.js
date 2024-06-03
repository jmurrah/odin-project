function playRound(humanChoice, computerChoice) {
    let winner = '';
    const winsAgainst = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
    };

    if (humanChoice === computerChoice) {
        console.log('It\'s a tie!');
        winner = 'tie';
    } else if (winsAgainst[humanChoice] === computerChoice) {
        console.log(`Human wins! ${humanChoice} beats ${computerChoice}.`);
        winner = 'human';
    } else {
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
        winner = 'computer';
    }

    let score = document.querySelector('.scores').querySelector(`#${winner} p`);

    if (document.querySelector('.scores').querySelector(`#${winner} p`).textContent === '5') {
        console.log(`${winner} wins the game!`);
        document.querySelector('.selections').removeEventListener('click');
    } else {
        document.querySelector('.scores').querySelector(`#${winner} p`).textContent = parseInt(score.textContent) + 1;
    }
}


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

window.onload = () => {
    document.querySelector('.selections').addEventListener('click', (e) => {
        playRound(e.target.id, getComputerChoice());
    });
}