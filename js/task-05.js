const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (evt) => {
  span.textContent = evt.currentTarget.value;
  if (evt.currentTarget.value === "") span.textContent = "Anonymous";
});
