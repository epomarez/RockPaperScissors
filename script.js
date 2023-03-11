let divGameResults = document.querySelector('.gameResults');



function getComputerChoice() {
    return (Math.floor(Math.random() * 3)) + 1;
}

function getUserChoice(userChoice) {

    switch (userChoice) {
        case "Rock":
        case "rock":
            return 1;

        case "Paper":
        case "paper":
            return 2;
        case "Scissor":
        case "scissor":
            return 3;
    }
}

function playRound(userChoice, computerChoice) {

    if (userChoice == computerChoice) {
        return 0;
    } else if ((userChoice == 1 && computerChoice == 2) ||
        (userChoice == 2 && computerChoice == 3) ||
        (userChoice == 3 && computerChoice == 1)) {
        return 2;
    } else {
        return 1;
    }
}

let userWins = 0;
let computerWins = 0;    

function evaluateRoundResults(rResults){
    

    for(let i = 0; i < 5; i++){
        switch(playRound(getUserChoice(), getComputerChoice())){
            case 1:
                userWins += 1;
                console.log("User wins this round");
                break;
            case 2:
                computerWins += 1;
                console.log("Computer wins this round");
                break;
            case 0:
                console.log("It's a tie");
                break;
        }
    }center

    evaluatingFinalResults(userWins, computerWins);

}


let buttons = document.querySelectorAll("button");
let roundResults;

buttons.forEach(
    button => button.addEventListener('click',
        roundResults = playRound(button.textContent, getComputerChoice())));

//This is needed for see how I could show the results of the game
/*
function evaluatingFinalResults(uScore, cScore){
    if(uScore > cScore){
        console.log("User wins!");
    } else if(uScore < cScore){
        console.log("The computer wins!");
    } else {
        console.log("There is no winner this time!");
    }
}
*/




//startGame();