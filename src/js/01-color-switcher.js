
// Функція для генерування випадкового кольору фону
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Оголошуємо змінні для доступу до кнопок та сторінки
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

// Змінна індетифікатора для зупинки
let timeId = null;

  // Додаємо слухачі на кнопки старт та стоп
startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStoptBtn);

// Створюємо функцію для зміни кольору фона та заданомо стан для кнопки старт після натискання
// function changeBgColor() {
//   body.style.backgroundColor = getRandomHexColor();
// }

// Зміна кольору фона при натисканні start
function onClickStartBtn() {
  // changeBgColor();
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled', '');
  timeId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

// Зупинка зміни кольору при натисканні stop
function onClickStoptBtn() {
  clearInterval(timeId);
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled', '');
};

