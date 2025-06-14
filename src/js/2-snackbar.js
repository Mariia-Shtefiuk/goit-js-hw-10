import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const delayInput = event.currentTarget.querySelector('input[name="delay"]');
  const stateInput = event.currentTarget.querySelector(
    'input[name="state"]:checked'
  );

  const delay = Number(delayInput.value);
  const state = stateInput.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(msg => {
      iziToast.success({
        message: msg,
        position: 'topRight',
      });
    })
    .catch(msg => {
      iziToast.error({
        message: msg,
        position: 'topRight',
      });
    });
}
