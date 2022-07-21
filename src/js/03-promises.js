import Notiflix from 'notiflix';
const forma = {
  form: document.querySelector(".form")
};

forma.form.addEventListener("submit",submit );

function submit(event) {
  event.preventDefault();


const formEl = event.currentTarget.elements;

let amount = Number(formEl.amount.value);
let delay = Number(formEl.delay.value);
let step = Number(formEl.step.value);

for(let i = 1; i <= amount; i++) {
  createPromise(i, delay)
.then(({position, delay}) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)

})
.catch(({position, delay}) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
});
delay += step;
}
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({position, delay})
      } else {
        // Reject
        reject({position, delay})
      }
    }, delay)
  })
}
