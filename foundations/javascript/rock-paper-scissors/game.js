function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}


function getHumanChoice() {
    let choice = prompt('Choose rock, paper, or scissors: ');

    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt('Invalid choice!\nChoose rock, paper, or scissors: ');
    }

    return choice.toLowerCase();
}


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

    return winner;
}


function playGame() {
    const scores = {
        'human': 0,
        'computer': 0,
        'tie': 0
    };

    for (let i = 0; i < 5; i++) {
        scores[playRound(getHumanChoice(), getComputerChoice())] += 1;
    }

    console.log('Final scores: ' + JSON.stringify(scores));
    console.log('Game over!');
}