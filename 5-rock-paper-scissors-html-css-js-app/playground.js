const params = new URLSearchParams(window.location.search);
const difficulty = params.get("difficulty");

const playerMove = document.querySelector("#player-move > img");
const computerMove = document.querySelector("#computer-move > img");
const finalPlayerScore = document.getElementById("final-player-score");
const finalComputerScore = document.getElementById("final-computer-score");

function processPlayerMove(move) {
  let allowPlayerWin = getAllowPlayerWinFlag();
  switch (move) {
    case "Rock":
      if (allowPlayerWin) {
        computerMove.setAttribute("src", "images/scissor.png");
        finalPlayerScore.innerText = +finalPlayerScore.innerText + 1;
      } else {
        finalComputerScore.innerText = +finalComputerScore.innerText + 1;
        computerMove.setAttribute("src", "images/paper.png");
      }
      break;
    case "Paper":
      if (allowPlayerWin) {
        computerMove.setAttribute("src", "images/rock.png");
        finalPlayerScore.innerText = +finalPlayerScore.innerText + 1;
      } else {
        finalComputerScore.innerText = +finalComputerScore.innerText + 1;
        computerMove.setAttribute("src", "images/scissor.png");
      }
      break;
    case "Scissor":
      if (allowPlayerWin) {
        computerMove.setAttribute("src", "images/paper.png");
        finalPlayerScore.innerText = +finalPlayerScore.innerText + 1;
      } else {
        finalComputerScore.innerText = +finalComputerScore.innerText + 1;
        computerMove.setAttribute("src", "images/rock.png");
      }
      break;
  }

  playerMove.setAttribute("src", `images/${move.toLowerCase()}.png`);
  if (+finalPlayerScore.innerText >= 5 || +finalComputerScore.innerText >= 5) {
    const winMessage =
      +finalPlayerScore.innerText > +finalComputerScore.innerText
        ? "You Win!"
        : "CPU Wins!";
    document.getElementById("result").innerText = winMessage;
    Array.from(
      document.getElementsByClassName("player-controls")[0].children
    ).forEach((btn) => (btn.disabled = true));
  }
}

function resetGame() {
  document.getElementById("final-player-score").innerText =
    document.getElementById("final-computer-score").innerText = 0;
  Array.from(
    document.getElementsByClassName("player-controls")[0].children
  ).forEach((btn) => (btn.disabled = false));
  document.getElementById("result").innerText = "Whoever scores 5 first wins!";
  playerMove.setAttribute("src", `images/paper.png`);
  computerMove.setAttribute("src", `images/paper.png`);
}

function getAllowPlayerWinFlag() {
  let allowPlayerWin = Math.floor(Math.random() * 10);
  switch (difficulty) {
    case "Easy":
      return (
        allowPlayerWin % 2 === 0 ||
        allowPlayerWin % 3 === 0 ||
        allowPlayerWin % 4 === 0
      );
    case "Medium":
      return allowPlayerWin % 2 === 0 || allowPlayerWin % 4 === 0;
    case "Hard":
      return allowPlayerWin % 4 === 0;
  }
}
