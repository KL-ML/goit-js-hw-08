const refs = {
  titleInHead: document.querySelector('title'),
  container: document.querySelector('#categories'),
  itemsOfCategory: document.querySelectorAll('.item'),
  itemHeader: document.querySelectorAll('h2'),
};

// styles
const fontImportLinkMarkup = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400..600&display=swap" rel="stylesheet">
    `;
refs.titleInHead.insertAdjacentHTML('afterend', fontImportLinkMarkup);
refs.container.classList.add('container', 'categories');
refs.itemHeader.forEach(header => header.classList.add('title-common'));

// code
console.log('Number of categories: ', refs.itemsOfCategory.length);
console.log(` `);

refs.itemsOfCategory.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements: ', item.lastElementChild.childElementCount);
  console.log(` `);
});
