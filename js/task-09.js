function getRmHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const color = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", onButtonClick);

function onButtonClick(evt) {
  const newColor = getRmHexColor();
  body.style.backgroundColor = newColor;
  color.textContent = newColor;
  console.log(newColor);
}



