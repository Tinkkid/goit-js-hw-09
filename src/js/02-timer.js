// imort of libraries flatpckr and notiflix
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const refs = {
input: document.querySelector('input'),
startBtn: document.querySelector('[data-start]'),
daysEl: document.querySelector('[data-days]'),
hoursEl: document.querySelector('[data-hours]'),
minutesEl: document.querySelector('[data-minutes]'),
secondsEl: document.querySelector('[data-seconds]'),
}

refs.startBtn.disabled = true;
let selectTime = null;

// custom flatpickr object settings
const options = {
   enableTime: true,
  
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

    if (selectedDates[0] <= options.defaultDate) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
      selectTime = selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);

refs.startBtn.addEventListener('click', onStBntTimerStart);


function onStBntTimerStart() {
   refs.startBtn.disabled = true;

  const timerId = setInterval(() => {
    let diff = selectTime - Date.now();
    if (diff <= 0) {
      clearInterval(timerId);
      return;
    }
     
    //  Add contents to our countdown
    const { days, hours, minutes, seconds } = convertMs(diff);
    refs.daysEl.textContent = addingZero(days);
    refs.hoursEl.textContent = addingZero(hours);
    refs.minutesEl.textContent = addingZero(minutes);
    refs.secondsEl.textContent = addingZero(seconds);
  }, 1000);
};

// function that add zero before number
function addingZero(value) {
  return value.toString().padStart(2, 0);
}

// function conver the time from ms to d/h/m/s
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

