


const valueInputEl = document.querySelector('#validation-input');
const valuelength = valueInputEl.dataset.length;
console.log(valuelength);



const input = document.querySelector('input');
console.log(input);

valueInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const valueText = event.target.value;
    
    if (valueText.length === +valuelength) {
        valueInputEl.classList.add('valid')
        valueInputEl.classList.remove('invalid')
    } else {
        valueInputEl.classList.add('invalid');
        };
}