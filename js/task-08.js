const formEl = document.querySelector('.login-form');
console.log(formEl);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    let eventElemEmailValue = event.currentTarget.elements.email.value;
    let eventElemPasswordValue = event.currentTarget.elements.password.value;
    
    const UserObj = { email: eventElemEmailValue, password: eventElemPasswordValue };
   
    if (eventElemEmailValue === '' || eventElemPasswordValue === '') {   
        return alert('All fields must be filled in');
    }
    console.dir(event.currentTarget.elements);
    console.log(UserObj);
        
    event.target.reset();
};