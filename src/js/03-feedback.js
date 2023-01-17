import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {}


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));


onPopulateForm();

function onPopulateForm() {
  const currentValue = onFormCurrentValue();

  if (currentValue?.email) {
    formData.email = form.email.value = currentValue.email;
  }

  if (currentValue?.message) {
    formData.message = form.message.value = currentValue.message;
  }
};

function onFormCurrentValue() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}


function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


function onFormSubmit(evt) {
  evt.preventDefault();

    if (!evt.target.email.value || !evt.target.message.value) {
    return;
  }

  console.log(onFormCurrentValue());
  clearDataStorage();
  evt.currentTarget.reset();
};



function clearDataStorage() {
  if (onFormCurrentValue()) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.clear();
    formData = {};
  }}