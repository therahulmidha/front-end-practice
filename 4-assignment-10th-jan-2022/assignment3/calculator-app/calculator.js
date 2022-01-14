const controlsChildren = document.querySelector("#controls").children;
const outputArea = document.querySelector("#output > textarea");

let currentCalculation = "";
function processBtnPress(value) {
  if (value === "AC") {
    currentCalculation = "";
    outputArea.textContent = 0;
  } else if (value === "=") {
    outputArea.textContent = eval(currentCalculation);
    currentCalculation = outputArea.textContent;
  } else {
    currentCalculation += value;
    outputArea.textContent = currentCalculation;
  }
}