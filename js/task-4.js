const refs = {
  loginForm: document.querySelector('.login-form'),
  inputField: document.querySelectorAll('input'),
  button: document.querySelector('button'),
  titleInHead: document.querySelector('title'),
};

// styles
const fontImportLinkMarkup = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400..600&display=swap" rel="stylesheet">
    `;
refs.titleInHead.insertAdjacentHTML('afterend', fontImportLinkMarkup);
refs.loginForm.classList.add('container');
refs.inputField.forEach(input =>
  input.classList.add('input-field-common')
);
refs.button.classList.add('button-common', 'login-form-btn');

// code
refs.loginForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const emailValueFromInput = event.target.elements.email.value.trim();
  const passwordValueFromInput = event.target.elements.password.value.trim();

  if (emailValueFromInput === '' || passwordValueFromInput === '') {
    return alert('All form fields must be filled in.');
  }
  const dataObj = {
    email: emailValueFromInput,
    password: passwordValueFromInput,
  };
  console.log(dataObj);
  event.currentTarget.reset();
}
