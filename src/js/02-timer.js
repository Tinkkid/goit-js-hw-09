// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const inputDate = document.querySelector('#datetime-picker');
console.log(inputDate);
const startBtn = document.querySelector('[data-start]');
console.log(startBtn);
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

flatpickr('#datetime-picker', {
  altInput: true,
  enableTime: true,
  dateFormat: 'Y-m-d H:i'
});
