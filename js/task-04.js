let counterValue = document.querySelector('#value');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

// console.log(counterValue);
// console.log(buttonDecrement);
// console.log(buttonIncrement);

const counter = {
  counterValue: 0,
  increment() {
    console.log('increment => this', this);
    this.counterValue += 1;
  },

  decrement() {
    console.log('decrement => this', this);
    this.counterValue -= 1;
  },
};

buttonDecrement.addEventListener('click', onButtonDecrementClick);

function onButtonDecrementClick() {
  counter.decrement();
  counterValue.textContent = counter.counterValue;
}

buttonIncrement.addEventListener('click', onButtomIncremetnClick);

function onButtomIncremetnClick() {
  counter.increment();
  counterValue.textContent = counter.counterValue;
}