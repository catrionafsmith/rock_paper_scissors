let player_score = 0;
let comp_score = 0;

function playRound(playerSelection, computerSelection) {
    console.log(`Player pick is ${playerSelection}`);
    console.log(`Computer pick is ${computerSelection}`);
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        player_score += 1;
        return `You win! Player score is ${player_score}. Computer score is ${comp_score}`;
    } else if (playerSelection == computerSelection) {
        return `It's a tie! Player score is ${player_score}. Computer score is ${comp_score}`;
    } else {
        comp_score +=1
        return `Comp win! Player score is ${player_score}. Computer score is ${comp_score}`;
    }
    
}
const rps_options = ["rock", "paper", "scissors"];
    
function getComputerChoice() {
    const comp_choice = rps_options[Math.floor(Math.random()*3)];
    return comp_choice;
}

// const playerSelection = (prompt("What would you like to pick? Rock, paper or scissors?: ")).toLowerCase();
// console.log(typeof(playerSelection))
// console.log(typeof(computerSelection))
// console.log(playerSelection == computerSelection)
// console.log(playRound(playerSelection, computerSelection))

function game() {
    for (i = 0; i <5; i++) {
        const playerSelection = (prompt("What would you like to pick? Rock, paper or scissors?: ")).toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)); 
    }
    player_score > comp_score ? console.log("Player is the winner!!") : console.log("Computer is the winner!!");
    
}
game()


// // select an option from rock paper or scissors.
// function getPlayerChoice() {
//     let you_pick = prompt("What would you like to pick? Rock, paper or scissors?: ");
//     // ensure that your selection is lower case.
//     return you_pick.toLowerCase();
// }

// // computer randomly picks an option.
// const rps_options = ["rock", "paper", "scissors"];
// function getComputerChoice () {
//     return rps_options[Math.floor(Math.random()*3)];
// }
// let computerSelection = getComputerChoice()
// // logic for win lose tie
// let ws;
// let player_score = 0
// let comp_score = 0
// function playRound(getPlayerChoice, computerSelection) {
//     let playerSelection = getPlayerChoice() 
//     if (playerSelection == computerSelection) {
//         ws = "it's a tie!"; 
//     } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
//         ws = "you win!";
//         player_score += 1;
//     } else {
//         ws = "you lose!";
//         comp_score += 1;
//     }
// let fs = `You picked ${playerSelection}, computer picked ${computerSelection} so ${ws}. Player score is ${player_score}. Computer score is ${comp_score}`;
// console.log(fs);
// }

// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound((getPlayerChoice, computerSelection));
//         let fs = `You picked ${playerSelection}, computer picked ${computerSelection} so ${ws}. Player score is ${player_score}. Computer score is ${comp_score}`;
//         console.log(fs);
//     }
// }
// console.log(game())
//     //printing a statement to let the user know what happened.


//     //     if (rps_options.includes(playerSelection)) {
// } else {
    // ws = "refresh and type a real selection you silly banana!";
//     
    // console.log(playerSelection);
    // 
    // console.log(computerSelection)
