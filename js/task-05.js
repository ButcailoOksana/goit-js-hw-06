const inputName = document.querySelector("#name-input");
// console.log(formInputName);
const outputName = document.querySelector("#name-output");
// console.log(formOutputName);

inputName.addEventListener("input", (event) => {
  outputName.textContent = event.currentTarget.value;
});
