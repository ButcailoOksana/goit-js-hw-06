const fontSizeControlEl = document.querySelector('#font-size-control');
console.log(fontSizeControlEl);

const textEl = document.querySelector('#text');
console.log(textEl);

fontSizeControlEl.addEventListener('input', onFontSizeControl);

function onFontSizeControl(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
    
    console.log(event.currentTarget.value);
};