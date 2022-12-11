let playerScoreText = document.querySelector(".player-score");
let computerScoreText = document.querySelector(".computer-score");

let player;
let playerScore = 0;
let computer;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

// set a listener to populate the page with the choices //

window.addEventListener("load", () => {
    for(let i = 0; i < choices.length; i++) {
        let img = document.createElement("img");
        img.id = choices[i]
        img.src = choices[i] + ".png";
        img.addEventListener("click", selectChoice);
        document.querySelector(".choices").appendChild(img);
    }
})

//Create a function for the game logic

function selectChoice(){
    player = this.id;
    document.querySelector(".player-choice").src = player + ".png";


    computer = choices[Math.floor(Math.random() * 3)];
    document.querySelector(".computer-choice").src = computer + ".png";

    if(player == computer) {
        console.log("draw");
    }
    else if(player == "rock") {
        if(computer == "scissors") {
            playerScore++
        } else {
            computerScore++
        }
    } 
    else if(player == "paper") {
        if(computer == "rock") {
            playerScore++
        } else {
            computerScore++
        }
    }
    else if(player == "scissors") {
        if(computer == "paper") {
            playerScore++
        } else {
            computerScore++
        }
    }
    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore

}

//Create a reload function


