function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const resultGetRandomHexColor = getRandomHexColor();

const bodyEl = document.querySelector("body");
const changeColorBtnEl = document.querySelector("button.change-color");
// console.log(changeColorBtnEl);
const spanColorEl = document.querySelector("span.color");
// console.log(spanColorEl);

changeColorBtnEl.addEventListener("click", setOutput);

function setOutput() {
  spanColorEl.textContent = `${getRandomHexColor()}`;
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;

  console.log(`Background color -> ${getRandomHexColor()}`);
}
