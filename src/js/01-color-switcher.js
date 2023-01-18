
// Функція для генерування випадкового кольору фону
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Оголошуємо змінні для доступу до кнопок та тіла документа
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timeId = null;
// const randomColor = getRandomHexColor();


  // Додаємо слухачі на кнопки старт та стоп
startBtn.addEventListener('click', changeBgColor);
stopBtn.addEventListener('click', onClickStoptBtn);

// Виконання функції при натисканні кнопок старт та стоп
// function changeColor() {
//   body.style.backgroundColor = getRandomHexColor();
// }

// Створюємо функцію для зміни кольору фона 
function changeBgColor() {
  // changeColor();
  timeId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

// const timeId = setInterval(changeBgColor, 1000);

function onClickStoptBtn() {
  clearInterval(timeId);
};

