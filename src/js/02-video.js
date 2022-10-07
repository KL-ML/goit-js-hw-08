import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(setCurrentTimeToLocalStorage, 1000));

function setCurrentTimeToLocalStorage( {seconds} ) {
    const currentTime = seconds;
    console.log('currentTime:', currentTime);
    localStorage.setItem(LOCALSTORAGE_KEY, currentTime);
};
    
player
    .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
    .then(function () {
    // seconds = the actual time that the player seeked to
    }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
    });

//   Напиши скрипт который будет сохранять текущее время воспроизведения видео 
// в локальное хранилище и, при перезагрузке страницы, продолжать воспроизводить 
// видео с этого времени.

//   1. Ознакомься с документацией библиотеки Vimeo плеера.
//   2. Добавь библиотеку как зависимость проекта через npm.
//   3. Инициализируй плеер в файле скрипта как это описано в секции 
// pre-existing player, но учти что у тебя плеер добавлен как npm пакет, 
// а не через CDN.
//   4. Разбери документацию метода on() и начни отслеживать событие 
// timeupdate - обновление времени воспроизведения.
//   5. Сохраняй время воспроизведения в локальное хранилище. 
// Пусть ключом для хранилища будет строка "videoplayer-current-time".
//   6. При перезагрузке страницы воспользуйся методом setCurrentTime() 
// для того чтобы возобновить воспроизведение с сохраненной позиции.
//   7. Добавь в проект бибилотеку lodash.throttle и сделай так, 
// чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.