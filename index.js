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

function game() {
  let player = 0;
  let computer = 0;

  while (player < 5 && computer < 5) {
    let playerChoice = prompt("What your input");
    playerChoice = playerChoice.toLowerCase();
    let compChoice = getComputerChoice();
    let result = playRound(playerChoice, compChoice);

    if (result === "WIN") {
      player++;
    } else if (result === "LOSS") {
      computer++;
    }

    console.log(result);
  }

  console.log("Your score : " + player);
  console.log("Computer score : " + computer);
}

game();
