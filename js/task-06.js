const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

inputEl.addEventListener("change", setOutput);

function setOutput() {
  const inputValue = inputEl.value;
  const lengthEl = inputEl.dataset.length;
  console.log(`Мінімальна кількість символів -> ${lengthEl}`);
  console.log(`Введені символи -> ${inputValue}`);
  console.log(`Кількість введених символів -> ${inputValue.length}`);
  inputEl.classList.add("valid");

  if (inputValue.length < lengthEl) {
    console.log(`Кількість введених символів менша ${lengthEl}!
    Введіть від ${lengthEl} симолів`);
    inputEl.classList.add("invalid");
    return;
  }
  inputEl.classList.add("valid");
  console.log(`Вітаю! Ви ввели необхідну кількість симовлів`);

  inputEl.value = "";
}
