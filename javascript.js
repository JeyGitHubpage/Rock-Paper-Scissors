function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'] 
    let play = Math.floor(Math.random() * choice.length)
    return console.log(choice.play)
};

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    switch(playerChoice) {
        case 'Rock':
            if (computerSelection === 'Rock') {
                console.log('Tie, both chose rock')
            }

            else if (computerselection === 'Paper') {
                console.log('You lose, paper beats rock')
            }

            else {
                console.log('You win, rock beats scissors')
            }
            #adsfdasf
    }   
}