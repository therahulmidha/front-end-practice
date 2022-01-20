const params = new URLSearchParams(window.location.search);
const difficulty = params.get("difficulty");

const playerMove = document.querySelector("#player-move > img");
const computerMove = document.querySelector("#computer-move > img");
const finalPlayerScore = document.getElementById("final-player-score");
const finalComputerScore = document.getElementById("final-computer-score");
const result = document.getElementById("result");
const IMAGES_FOLDER = "images";
const playerMovesObject = {
  Rock: {
    computerSrcOnLose: `${IMAGES_FOLDER}/scissor.png`,
    computerSrcOnWin: `${IMAGES_FOLDER}/paper.png`,
  },
  Paper: {
    computerSrcOnLose: `${IMAGES_FOLDER}/rock.png`,
    computerSrcOnWin: `${IMAGES_FOLDER}/scissor.png`,
  },
  Scissor: {
    computerSrcOnLose: `${IMAGES_FOLDER}/paper.png`,
    computerSrcOnWin: `${IMAGES_FOLDER}/rock.png`,
  },
};
function processPlayerMove(move) {
  let allowPlayerWin = difficulty === "Easy" ? true : false;
  if (allowPlayerWin) {
    incrementPlayerScore();
    updateComputerMoveSrc(playerMovesObject[move].computerSrcOnLose);
  } else {
    incrementComputerScore();
    updateComputerMoveSrc(playerMovesObject[move].computerSrcOnWin);
  }

  updatePlayerMoveSrc(`images/${move.toLowerCase()}.png`);
  if (+finalPlayerScore.innerText >= 5 || +finalComputerScore.innerText >= 5) {
    const winMessage =
      +finalPlayerScore.innerText > +finalComputerScore.innerText
        ? "You Win!"
        : "CPU Wins!";
    result.innerText = winMessage;
    enablePlayerControls(true);
  }
}

function incrementPlayerScore() {
  finalPlayerScore.innerText = +finalPlayerScore.innerText + 1;
}

function incrementComputerScore() {
  finalComputerScore.innerText = +finalComputerScore.innerText + 1;
}

function updatePlayerMoveSrc(src) {
  playerMove.setAttribute("src", src);
}

function updateComputerMoveSrc(src) {
  computerMove.setAttribute("src", src);
}

function resetGame() {
  finalPlayerScore.innerText = finalComputerScore.innerText = 0;
  enablePlayerControls(false);
  result.innerText = "Whoever scores 5 first wins!";
  updatePlayerMoveSrc(`images/paper.png`);
  updateComputerMoveSrc(`images/paper.png`);
}

function enablePlayerControls(enable) {
  Array.from(
    document.getElementsByClassName("player-controls")[0].children
  ).forEach((btn) => (btn.disabled = enable));
}

// uncomment and use this function if random logic required for winning rounds
// function getAllowPlayerWinFlag() {
//   let allowPlayerWin = Math.floor(Math.random() * 10);
//   switch (difficulty) {
//     case "Easy":
//       return (
//         allowPlayerWin % 2 === 0 ||
//         allowPlayerWin % 3 === 0 ||
//         allowPlayerWin % 4 === 0 ||
//         allowPlayerWin % 6 === 0
//       );
//     case "Hard":
//       return allowPlayerWin % 5 === 0;
//   }
// }
