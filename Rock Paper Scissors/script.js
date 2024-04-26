function game(choice) {
    console.log(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (choice === computerChoice) {
        yourScore++;
        computerScore++;
        gameStatus = "tie";
    } else if (
        (choice === "rock" && computerChoice === "paper") ||
        (choice === "paper" && computerChoice === "scissors") ||
        (choice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        gameStatus = "lose";
    } else if ((choice === "rock" && computerChoice === "scissors") ||
        (choice === "paper" && computerChoice === "rock") ||
        (choice === "scissors" && computerChoice === "paper")) {
        yourScore++;
        gameStatus = "won";
    }
    yourScoreP.textContent = `${yourScore}`;
    pcScoreP.textContent = `${computerScore}`;
    if (gameStatus === "tie") {
        statusP.textContent = "You tie!";
    } else if (gameStatus === "won") {
        statusP.textContent = "You won!";
    } else if (gameStatus === "lose") {
        statusP.textContent = `You lose! ${computerChoice} beats ${choice}`;
    }
}

const rockImg = document.getElementById("rock");
const paperImg = document.getElementById("paper");
const scissorsImg = document.getElementById("scissors");
const pcScoreP = document.getElementById("pc-score");
const yourScoreP = document.getElementById("your-score");
const statusP = document.getElementById("statusP");
let yourScore = 0;
let computerScore = 0;
let gameStatus = "";
const choices = ["rock", "paper", "scissors"];
rockImg.addEventListener("click", () => {
    game("rock");
});
paperImg.addEventListener("click", () => {
    game("paper");
});
scissorsImg.addEventListener("click", () => {
    game("scissors");
});