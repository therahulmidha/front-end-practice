const controlsChildren = document.querySelector("#controls").children;
const outputArea = document.querySelector("#output > textarea");

let currentCalculation = "";
function processBtnPress(value) {
  currentCalculation += value;
  outputArea.textContent = currentCalculation;
}

function processACPress() {
  currentCalculation = "";
  outputArea.textContent = 0;
}

function processEqualsPress() {
  outputArea.textContent = eval(currentCalculation);
  currentCalculation = outputArea.textContent;
}
