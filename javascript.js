function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'] 
    let play = Math.floor(Math.random() * choice.length)
    return console.log(play)
};