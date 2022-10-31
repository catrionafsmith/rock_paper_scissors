const para = document.createElement('p');
const results = document.querySelector('.results');
results.appendChild(para);
let player_score = 0;
let comp_score = 0;

function playRound(playerSelection, computerSelection) {
    console.log(`Player pick is ${playerSelection}`);
    console.log(`Computer pick is ${computerSelection}`);
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        player_score += 1;
        para.textContent += ` You selected ${playerSelection}. Computer selected ${computerSelection}! You win! Player score is ${player_score}. Computer score is ${comp_score}.\n`;
    } else if (playerSelection == computerSelection) {
        para.textContent += ` You selected ${playerSelection}. Computer selected ${computerSelection}! It's a tie! Player score is ${player_score}. Computer score is ${comp_score}.\n`;
    } else {
        comp_score +=1
        para.textContent += ` You selected ${playerSelection}. Computer selected ${computerSelection}! Computer wins! Player score is ${player_score}. Computer score is ${comp_score}\n`;
    }
    if (player_score == 5) {
        para.textContent = "FINAL RECKONING! YOU ARE THE WINNER!"
        player_score = 0;
        comp_score = 0;
    } else if (comp_score == 5) {
        para.textContent = "FINAL RECKONING! COMPUTER IS THE WINNER!"
        player_score = 0;
        comp_score = 0;
    }
}



function playerChoice () {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () =>{
            // para.textContent += `Player selected ${button.id}`;
            const computerSelection = getComputerChoice();
            playRound(button.id, computerSelection);
            // para.textContent += `Computer selected ${comp_choice}!`;
            // console.log(button.id);
            
        })
    })
    // return playerSelection
}
playerChoice()

const rps_options = ["rock", "paper", "scissors"];
    
function getComputerChoice() {
    const comp_choice = rps_options[Math.floor(Math.random()*3)];
    return comp_choice;
}

// const playerPick = playerChoice();


// const rock_b = document.querySelector('#rock');
// rock_b.addEventListener('click', () => {
//     console.log(rock_b.id);
//     playerSelection = rock_b.id;
//     console.log(playerSelection);
//     para.textContent = `You selected ${playerSelection}!`
// })
// const para = document.createElement('p');

// const results = document.querySelector('.results');
// results.appendChild(para);


// OLD code

// let player_score = 0;
// let comp_score = 0;

// function playRound(playerSelection, computerSelection) {
//     console.log(`Player pick is ${playerSelection}`);
//     console.log(`Computer pick is ${computerSelection}`);
//     if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
//         player_score += 1;
//         return `You win! Player score is ${player_score}. Computer score is ${comp_score}`;
//     } else if (playerSelection == computerSelection) {
//         return `It's a tie! Player score is ${player_score}. Computer score is ${comp_score}`;
//     } else {
//         comp_score +=1
//         return `Comp win! Player score is ${player_score}. Computer score is ${comp_score}`;
//     }
    
// }
// const rps_options = ["rock", "paper", "scissors"];
    
// function getComputerChoice() {
//     const comp_choice = rps_options[Math.floor(Math.random()*3)];
//     return comp_choice;
// }
// function getPlayerChoice() {
//     let playerChoice = "";
//     const rock_b = document.querySelector('#rock');
//     rock_b.addEventListener("click", () => playerChoice = "rock");
//     const scissors_b = document.querySelector('#scissors');
//     scissors_b.addEventListener("click", () => playerChoice = "scissors");
//     const paper_b = document.querySelector('#paper');
//     paper_b.addEventListener("click", () => playerChoice = "paper");
//     return playerChoice
// }
// // document.getElementById("paper").addEventListener("click", playerSelection = "paper");
// // document.getElementById("scissors").addEventListener("click", playerSelection = "scissors");
// const playerSelection = getPlayerChoice();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection)); 
    
// player_score > comp_score ? console.log("Player is the winner!!") : console.log("Computer is the winner!!");
    
// // const playerSelection = (prompt("What would you like to pick? Rock, paper or scissors?: ")).toLowerCase();
// // console.log(typeof(playerSelection))
// // console.log(typeof(computerSelection))
// // console.log(playerSelection == computerSelection)
// // console.log(playRound(playerSelection, computerSelection))

// // function game() {
// //     for (i = 0; i <5; i++) {
// //         const playerSelection = (prompt("What would you like to pick? Rock, paper or scissors?: ")).toLowerCase();
// //         const computerSelection = getComputerChoice();
// //         console.log(playRound(playerSelection, computerSelection)); 
// //     }
// //     player_score > comp_score ? console.log("Player is the winner!!") : console.log("Computer is the winner!!");
    
// // }
// // game()

// // const rock_b = document.querySelector('#rock');
// // rock_b.addEventListener('click', () => {
// //     const playerSelection = "rock";
// // })
// function getPlayerChoice() {
//     let playerChoice = "";
//     const rock_b = document.querySelector('#rock');
//     rock_b.addEventListener("click", () => playerChoice = "rock");
//     const scissors_b = document.querySelector('#scissors');
//     scissors_b.addEventListener("click", () => playerChoice = "scissors");
//     const paper_b = document.querySelector('#paper');
//     paper_b.addEventListener("click", () => playerChoice = "paper");
//     return playerChoice
// }
// // document.getElementById("paper").addEventListener("click", playerSelection = "paper");
// // document.getElementById("scissors").addEventListener("click", playerSelection = "scissors");
// const playerSelection = getPlayerChoice();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection)); 
    
// player_score > comp_score ? console.log("Player is the winner!!") : console.log("Computer is the winner!!");
    

// OLD OLD CODE

// function playerPick() {
//     const playerSelection = "";
//     const buttons = document.querySelectorAll('button');
//         buttons.forEach((button) => {
//             button.addEventListener('click', () => {
//                 playerSelection = button.id;
//             });
//         });
//     return playerSelection;
//     }

// function game() {
//     // const buttons = document.querySelectorAll('button');
//     // buttons.forEach((button) => {
//     //     button.addEventListener('click', () => {
//     //         const playerSelection = button.id;
//     //     });
//     // });
//     // const playerSelection = (prompt("What would you like to pick? Rock, paper or scissors?: ")).toLowerCase();
//     playerPick()
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection)); 
    
//     player_score > comp_score ? console.log("Player is the winner!!") : console.log("Computer is the winner!!");
    
// }
// game()


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
