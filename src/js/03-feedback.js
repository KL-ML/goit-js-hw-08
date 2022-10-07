import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";

populateInputData();

form.addEventListener('input', throttle(setInputDataToLocalStorage, 500));
form.addEventListener('submit', onSubmitForm);

function setInputDataToLocalStorage(event) {
    const {
        elements: { email, message }
    } = event.target.form;
    const formData = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
    evt.preventDefault();
    const {
        elements: { email, message }
    } = evt.target;
    const formDataBeforeSubmit = { email: email.value, message: message.value };
    console.log(formDataBeforeSubmit);
    evt.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateInputData() {
    const inputValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (inputValue) {
        form.elements.email.value = inputValue.email;
        form.elements.message.value = inputValue.message;
    }

}
//   Напиши скрипт который будет сохранять значения полей в локальное хранилище 
// когда пользователь что - то печатает.

//   1. Отслеживай на форме событие input, и каждый раз записывай в локальное 
// хранилище объект с полями email и message, в которых сохраняй текущие 
// значения полей формы. 
// Пусть ключом для хранилища будет строка "feedback-form-state".
//   2. При загрузке страницы проверяй состояние хранилища, и если там есть 
// сохраненные данные, заполняй ими поля формы.
// В противном случае поля должны быть пустыми.
//   3. При сабмите формы очищай хранилище и поля формы, а также выводи объект 
// с полями email, message и текущими их значениями в консоль.
//   4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
// Для этого добавь в проект и используй библиотеку lodash.throttle.

