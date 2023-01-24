import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const refs = {
form: document.querySelector('.form'),
delayFirst: document.querySelector('[name="delay"]'),
delayStep: document.querySelector('[name="step"]'),
amountEl: document.querySelector('[name="amount"]'),
}

// Deligation
refs.form.addEventListener('submit', onClickCreateBtn);

function onClickCreateBtn(e) {
  e.preventDefault();
  let delay = Number(refs.delayFirst.value);
  const step = Number(refs.delayStep.value);
  const amount = Number(refs.amountEl.value);
  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
  refs.form.reset();
}

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });  
}