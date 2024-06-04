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
    score.textContent = parseInt(score.textContent) + 1;

    if (score.textContent === '5' && winner !== 'tie') {
        document.querySelector('.selections').removeEventListener('click', getHumanChoice);
        console.log(`${winner} wins the game!`);
        alert(`${winner} wins the game!`);
    } 
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

const getHumanChoice = (e) => {
    playRound(e.target.id, getComputerChoice());
}

window.onload = () => {
    document.querySelector('.selections').addEventListener('click', getHumanChoice);
};