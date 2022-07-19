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
