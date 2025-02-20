const refs = {
  inputField: document.querySelector('#name-input'),
  spanText: document.querySelector('#name-output'),
  titleInHead: document.querySelector('title'),
  title: document.querySelector('h1'),
};

// styles
const fontImportLinkMarkup = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400..600&display=swap" rel="stylesheet">
    `;
refs.titleInHead.insertAdjacentHTML('afterend', fontImportLinkMarkup);
refs.inputField.classList.add('input-field-common', 'input-task-three');
refs.title.classList.add('title-common', 'title-task-three');

// code
refs.inputField.addEventListener('input', event => {
  if (event.currentTarget.value.trim() !== '') {
    return (refs.spanText.textContent = event.currentTarget.value.trim());
  }
  return (refs.spanText.textContent = 'Anonymous');
});
