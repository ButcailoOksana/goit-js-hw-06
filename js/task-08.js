const loginFormEl = document.querySelector('form.login-form');
console.log(loginFormEl);
// const emailEl = loginFormEl.querySelector('[type="email"]');
// console.log(emailEl);
// const passwordEl = loginFormEl.querySelector('[type="password"]');
// console.log(passwordEl);

loginFormEl.addEventListener('submit', setOutput);

function setOutput(evt) {
  console.log('click');
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  evt.currentTarget.reset();
}
