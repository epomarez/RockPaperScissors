function getComputerChoice(){
    return (Math.floor(Math.random()*3))+1;
}

function getUserChoice(){
    let userChoice = null;
    do{
        userChoice = prompt("Rock, paper or scissors?", "Rock");
    }while(userChoice == null);
     
    switch(userChoice){
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

function playRound(userChoice, computerChoice){

    if(userChoice == computerChoice){
        return 0;
    } else if ( (userChoice == 1 && computerChoice == 2) || 
    (userChoice == 2 && computerChoice == 3) ||
    (userChoice == 3 && computerChoice == 1)){
        return 2;
    } else {
        return 1;
    }
}

function evaluatingFinalResults(uScore, cScore){
    if(uScore > cScore){
        console.log("User wins!");
    } else if(uScore < cScore){
        console.log("The computer wins!");
    } else {
        console.log("There is no winner this time!");
    }
}




/*
function startGame(){
    let userWins = 0;
    let computerWins = 0;

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
*/
//startGame();