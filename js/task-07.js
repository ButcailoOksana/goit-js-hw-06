const fontSizeEl = document.querySelector('input#font-size-control');
const fontTextEl = document.querySelector('#text');
// console.log(fontSizeEl);
// console.log(fontSizeEl.value);
// console.log(fontTextEl);

fontSizeEl.addEventListener('change', setOuput);

function setOuput() {
  const fontSizeValue = fontSizeEl.value;
  console.log(`Встановлено розмір шрифту -> ${fontSizeValue}px!`);
  fontTextEl.style.fontSize = `${fontSizeValue}px`;
}