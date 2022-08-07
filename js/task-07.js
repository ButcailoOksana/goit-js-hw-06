const input = document.querySelector("input#font-size-control");
const span = document.querySelector("#text");
console.log(input);
console.log(input.value);
console.log(span);

input.addEventListener("change", setOuput);

function setOuput() {
  const fontSizeValue = input.value;
  console.log(`Встановлено розмір шрифту -> ${fontSizeValue}px!`);
  span.style.fontSize = `${fontSizeValue}px`;
}
