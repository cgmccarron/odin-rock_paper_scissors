const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "scissors";
    case 1:
      return "paper";
    case 2:
      return "rock";
  }
};

const playRound = (compChoice, playerChoice) => {
  switch (playerChoice) {
    case "scissors":
      switch (compChoice) {
        case "scissors":
          return "TIE";
        case "paper":
          return "WIN";
        case "rock":
          return "LOSS";
      }
    case "paper":
      switch (compChoice) {
        case "scissors":
          return "LOSS";
        case "paper":
          return "TIE";
        case "rock":
          return "WIN";
      }
    case "rock":
      switch (compChoice) {
        case "scissors":
          return "WIN";
        case "paper":
          return "LOSS";
        case "rock":
          return "TIE";
      }
  }
};
const createMessage = (text) => {
  let message = document.createElement("div");
  const board = document.getElementById("announcementBoard");
  message.innerText = text;
  message.setAttribute("class", "message");

  board.append(message);
};

const getPlayerChoice = () => {
  const onClick = () => {
    return this.id;
  };

  document.getElementById("scissors").onclick = onClick;
  document.getElementById("rock").onclick = onClick;
  document.getElementById("paper").onclick = onClick;
};

function game(playerChoice) {
  let player = parseInt(document.getElementById("playerScore").innerText);
  let computer = parseInt(document.getElementById("computerScore").innerText);

  if (player < 5 && computer < 5) {
    let compChoice = getComputerChoice();
    let result = playRound(playerChoice, compChoice);

    if (result === "WIN") {
      player++;
      createMessage(playerChoice + " beats " + compChoice);
      document.getElementById("playerScore").innerText = player.toString();
    } else if (result === "LOSS") {
      computer++;
      createMessage(playerChoice + " loses to " + compChoice);
      document.getElementById("computerScore").innerText = computer.toString();
      console.log(document.getElementById("computerScore").innerText);
    } else if (result === "TIE") {
      createMessage("It's a tie!");
    }
  } else if (player === 5 || computer === 5) {
    createMessage("Game Over");
  }
}

let player = parseInt(document.getElementById("playerScore").innerText);
let computer = parseInt(document.getElementById("computerScore").innerText);
const button = document.querySelector("#choiceBoard");
button.addEventListener("click", (e) => {
  let playerChoice = e.target.id;
  game(playerChoice);
});
