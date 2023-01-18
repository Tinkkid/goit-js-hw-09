
// Оголошуємо змінні для доступу до кнопок та тіла документа
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const timeOutId = null;


  // Додаємо слухачі на кнопки старт та стоп
  startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStoptBtn);

// Виконання функції при натисканні кнопок старт та стоп
function onClickStartBtn() { 
   const randomColor = getRandomHexColor();
   const timeOutId = setTimeout(() => {
   body.style.backgroundColor = randomColor;
}, 1000);
};

function onClickStoptBtn() {
};


// Функція для генерування випадкового кольору фону
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
