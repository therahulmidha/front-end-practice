const controlsChildren = document.querySelector("#controls").children;
const outputArea = document.querySelector("#output > textarea");
console.log(outputArea.textContent);
let evaluated = false;

for (const key in controlsChildren) {
  if (typeof controlsChildren[key] === "object") {
    controlsChildren[key].addEventListener("click", (event) => {
      const { btnValue } = event.target.dataset;
      if (evaluated) {
        outputArea.textContent = "0";
        evaluated = false;
      }
      switch (btnValue) {
        case "AC":
          outputArea.textContent = 0;
          break;
        case "divide":
          outputArea.textContent = outputArea.textContent + "/";
          break;
        case "multiply":
          outputArea.textContent = outputArea.textContent + "*";

          break;
        case "minus":
          outputArea.textContent = outputArea.textContent + "-";

          break;
        case "plus":
          outputArea.textContent = outputArea.textContent + "+";

          break;
        case "equals":
          outputArea.textContent = eval(outputArea.textContent);
          evaluated = true;
          break;
        case "dot":
          outputArea.textContent = outputArea.textContent + ".";
          break;
        default: {
          if (outputArea.textContent === "0") {
            outputArea.textContent = "";
          }
          outputArea.textContent = outputArea.textContent + btnValue;
        }
      }
    });
  }
}
