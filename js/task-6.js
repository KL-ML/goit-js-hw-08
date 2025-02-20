function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controlsDiv: document.querySelector('#controls'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxesDiv: document.querySelector('#boxes'),
  titleInHead: document.querySelector('title'),
};

// styles
const fontImportLinkMarkup = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400..600&display=swap" rel="stylesheet">
    `;
refs.titleInHead.insertAdjacentHTML('afterend', fontImportLinkMarkup);
refs.input.classList.add('input-field-common', 'input-task-six');
refs.controlsDiv.classList.add('box');
refs.btnCreate.classList.add('button-common', 'button-task-six');
refs.btnDestroy.classList.add(
  'button-common',
  'button-task-six',
  'btn-destroy'
);

// code
refs.btnCreate.addEventListener('click', createBoxes);

function createBoxes(amount) {
  refs.boxesDiv.innerHTML = '';
  refs.boxesDiv.classList.remove('boxes-div-huge-amount');

  amount = refs.input.value;

  if (amount < 1 || amount > 100) {
    refs.boxesDiv.classList.remove('box', 'boxes-div', 'boxes-div-huge-amount');
    refs.input.value = '';
    return;
  }

  if (amount > 40) {
    refs.boxesDiv.classList.add('boxes-div-huge-amount');
  }

  let boxSize = 20;
  const countOfDivs = [];
  for (let i = 0; i < amount; i += 1) {
    const oneDivBox = document.createElement('div');
    boxSize += 10;
    oneDivBox.style.background = `${getRandomHexColor()}`;
    oneDivBox.style.height = `${boxSize}px`;
    oneDivBox.style.width = `${boxSize}px`;
    countOfDivs.push(oneDivBox);
  }
  refs.boxesDiv.classList.add('box', 'boxes-div');
  refs.boxesDiv.append(...countOfDivs);
  refs.input.value = '';
}

refs.btnDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  refs.boxesDiv.classList.remove('box', 'boxes-div', 'boxes-div-huge-amount');
  refs.boxesDiv.innerHTML = '';
  refs.boxSize = 20;
}
