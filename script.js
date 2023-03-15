//Variables
let indications = document.querySelector('#indications');
let optionButtons = document.querySelectorAll(".option");
let btnRestart = document.querySelector("#btnRestart");
let userScore = document.querySelector("#userScore");
let computerScore = document.querySelector("#computerScore");
let roundNumber = document.querySelector("#roundNumber");

let userPoints = 0;
let computerPoints = 0;
let round = 1;


//Functions
function setGameVariables() {
    userScore.textContent = `User's score: ${userPoints}`;
    computerScore.textContent = `Computer's score: ${computerPoints}`;
    if(round < 6){
        roundNumber.textContent = `Round: ${round}`;
    }
    
}

function restartScores() {
    userPoints = 0;
    computerPoints = 0;
    round = 1;
    setGameVariables();
    indications.textContent = "Please select an option!";
}

function startGame() {
    restartScores();
}

function evaluatingFinalResults(userPoints, computerPoints) {
    if (userPoints > computerPoints) {
        indications.textContent = "Game over, User Wins!";
    } else if (userPoints < computerPoints) {
        indications.textContent = "Game over, Computer Wins!";
    } else {
        indications.textContent = "Game over, There is no winner this time!";
    }
}

function getComputerChoice() {
    let option = ["Rock", "Paper", "Scissors"]
    return option[(Math.floor(Math.random() * 3))];
}


function playRound(userChoice, computerChoice) {
    //Evaluates who is the round's winner.
    let tie = (userChoice == computerChoice);
    let computerWins = (userChoice == "Rock" && computerChoice == "Paper") ||
        (userChoice == "Paper" && computerChoice == "Scissor") ||
        (userChoice == "Scissor" && computerChoice == "Rock");

    round += 1;

    if (tie) {
        return 0;
    } else if (computerWins) {  
        return 2;
    } else {
        return 1; //User wins
    }
}

function evaluateRoundResults(rResult) {

    switch (rResult) {
        case 1:
            userPoints += 1;
            console.log("User wins this round");
            break;
        case 2:
            computerPoints += 1;
            console.log("Computer wins this round");
            break;
        case 0:
            console.log("It's a tie");
            break;
    }
}

//Event Listeners
optionButtons.forEach(button => button.addEventListener('click', (e) => {
        if (round < 5) {
            let roundResult = playRound(e.target.textContent, getComputerChoice());
            evaluateRoundResults(roundResult);
            setGameVariables(userPoints, computerPoints, round);
        } else if (round === 5){
            let roundResult = playRound(e.target.textContent, getComputerChoice());
            evaluateRoundResults(roundResult);
            setGameVariables(userPoints, computerPoints, round);
            evaluatingFinalResults(userPoints, computerPoints);
        }
    }));

btnRestart.addEventListener('click', startGame);

startGame();