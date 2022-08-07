const span = document.querySelector("#value");
const btnPrev = document.querySelector('button[data-action="decrement"]');
const btnNext = document.querySelector('button[data-action = "increment"]');

let counterValue = 0;
btnPrev.addEventListener("click", () => {
  counterValue -= 1;
  span.textContent = counterValue;
});

btnNext.addEventListener("click", () => {
  counterValue += 1;
  span.textContent = counterValue;
});
