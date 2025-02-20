function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  widget: document.querySelector('.widget'),
  textColor: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
  titleInHead: document.querySelector('title'),
};

// styles
const fontImportLinkMarkup = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400..600&display=swap" rel="stylesheet">
    `;
refs.titleInHead.insertAdjacentHTML('afterend', fontImportLinkMarkup);
refs.widget.classList.add('container');
refs.button.classList.add('button-common');

// code
refs.button.addEventListener('click', onChangeColor);

function onChangeColor() {
  const randomColor = getRandomHexColor();
  refs.body.style.background = randomColor;
  refs.textColor.textContent = randomColor;
}
