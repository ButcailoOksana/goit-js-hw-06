

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
    // console.log(event.currentTarget.value);
    outputName.textContent = event.currentTarget.value === '' ? 'Anonymous' : event.currentTarget.value;
}