let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return randomNumber = Math.floor(Math.random() * 10);
};


const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
  if (Math.abs(userGuess - secretTargetNumber) <= Math.abs(computerGuess - secretTargetNumber)) {
    return true;
  } else {
    return false;
  };
};

const updateScore = (champ) => {
if (champ ==='human') {
  humanScore += 1;
} else if (champ === 'computer') {
  computerScore += 1;
};
};

function advanceRound() {
  currentRoundNumber += 1;
};