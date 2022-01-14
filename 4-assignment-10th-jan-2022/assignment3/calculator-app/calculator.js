const controlsChildren = document.querySelector("#controls").children;
const outputArea = document.querySelector("#output > textarea");

let evaluated = false;
const ActualValues = {
  divide: "/",
  multiply: "*",
  minus: "-",
  plus: "+",
  dot: ".",
};

for (const key in controlsChildren) {
  if (typeof controlsChildren[key] === "object") {
    controlsChildren[key].addEventListener("click", handleWithoutSwitch);
  }
}

function handleWithoutSwitch(event) {
  const { btnValue } = event.target.dataset;
  if (btnValue === "equals") {
    outputArea.textContent = eval(outputArea.textContent);
    evaluated = true;
  } else if (btnValue === "AC") {
    outputArea.textContent = 0;
  } else if (ActualValues[btnValue]) {
    outputArea.textContent = outputArea.textContent + ActualValues[btnValue];
  } else {
    if (outputArea.textContent === "0") {
      outputArea.textContent = "";
    }
    if (evaluated && /^\d+$/.test(outputArea.textContent)) {
      evaluated = false;
      outputArea.textContent = btnValue;
    } else {
      outputArea.textContent = outputArea.textContent + btnValue;
    }
  }
}

function handleBySwitch(event) {
  const { btnValue } = event.target.dataset;
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
      // if evaluated and current output is all numbers, reset
      if (evaluated && /^\d+$/.test(outputArea.textContent)) {
        evaluated = false;
        outputArea.textContent = btnValue;
      } else {
        outputArea.textContent = outputArea.textContent + btnValue;
      }
    }
  }
}
