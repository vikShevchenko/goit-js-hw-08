import { throttle } from 'throttle-debounce';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[type="email"]');
const textarea = document.querySelector('[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const object = {} || localStorage.getItem(LOCALSTORAGE_KEY) ;

form.addEventListener('input', throttle(500, onFormInput));
form.addEventListener('submit', onFormSubmit);

onPageUpdate();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(object);
}
function onFormInput(evt) {
  object.email = email.value;
  object.message = textarea.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
}

function onPageUpdate() {
  const savedValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedValue) {
    email.value = savedValue.email;
    textarea.value = savedValue.message;
  }
}
