// rules
const rules = document.getElementById("rules");
const rulesDisplay = document.querySelector(".rules-display");
const closeButton = document.getElementById("closeBtn");

//boards
const gameBoard = document.querySelector(".game-board");
const fightBoard = document.querySelector(".fight-board");
const gameEnd = document.querySelector(".game-end");

//game logic
const possibleChoices = {
  'rock': "/images/Rock.png",
  'paper': "/images/Paper.png",
  'scissors': "/images/Scissors.png",
};

const userChoiceDisplay = document.getElementById("picked-by-user");
const computerChoiceDisplay = document.getElementById("picked-by-computer");
const resultDisplay = document.getElementById("result");

// points
const points = document.getElementById("scored-points");
let score = 1;

const restartGame = document.getElementById("new-game");

// dealing with rules button
let closeRules = () => {
  closeButton.addEventListener("click", () => {
    rulesDisplay.style.display = "none";
  });
};
rules.addEventListener("click", () => {
  rulesDisplay.style.display = "block";
  closeRules();
});

//restart game

restartGame.addEventListener("click", () => {
  fightBoard.style.display = "none";
  gameBoard.style.display = "flex";
});

// game process
function generateUserChoice(hand) {
  gameBoard.style.display = "none";
  fightBoard.style.display = "flex";
  userChoiceDisplay.src = possibleChoices[hand];
//   generateComputerChoice(hand)
  setTimeout(generateComputerChoice(hand), 500)
}

function generateComputerChoice(hand) {
  let hands = ["rock", "paper", "scissors"];
  let computerHand = hands[Math.floor(Math.random() * hands.length)];
  computerChoiceDisplay.src = possibleChoices[computerHand];
//   getResult(hand, computerHand)
setTimeout(getResult(hand, computerHand), 200);
}


function getResult(userHand, computerHand) {
fightBoard.style.maxWidth = '70%'
gameEnd.style.display = "flex";
  if (userHand === computerHand) {
    result = "THE DRAW";
  }
  if (userHand === "rock" && computerHand === "paper") {
    result = "YOU LOST";
  }
  if (userHand === "rock" && computerHand === "scissors") {
    result = "YOU WIN";
    points.innerHTML = score++;
  }
  if (userHand === "scissors" && computerHand === "rock") {
    result = "YOU LOST";
  }
  if (userHand === "scissors" && computerHand === "paper") {
    result = "YOU WIN";
    points.innerHTML = score++;
  }
  if (userHand === "paper" && computerHand === "rock") {
    result = "YOU WIN";
    points.innerHTML = score++;
  }
  if (userHand === "paper" && computerHand === "scissors") {
    result = "YOU LOST";
  }
  resultDisplay.innerHTML = result;
}
