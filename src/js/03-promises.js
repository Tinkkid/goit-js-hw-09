import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const form = document.querySelector('.form');
const createPromiseBtn = form.querySelector('button');

createPromiseBtn.addEventListener('click', onClickCreateBtn);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve ({ position, delay })
      } else {
        reject ({ position, delay })
      }
    }, delay)
  });  
}

function onClickCreateBtn() {
  let delay = form.elements.delay.value;
  const step = form.elements.step.value;
  const amount = form.elements.amount.value;
  console.log(delay);
  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += step;
  }
}



