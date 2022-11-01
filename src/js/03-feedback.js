import throttle from 'lodash.throttle';
import '../css/03-feedback.css'

const form =  document.querySelector('.feedback-form');
const formInput =  document.querySelector('.feedback-form input');
const formMessage =  document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
const KEY_STORAGE = "feedback-form-state";

let getMeaning = null;
findLogic();


const formData = {
    email: getMeaning?.email ? getMeaning.email : '',
    message: getMeaning?.message ? getMeaning.message : '',
};


function onFormInput(evt){
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
    
}

function onFormSubmit(evt){
  evt.preventDefault();

  if(!formData.email || !formData.message){
    alert ('Всі рядки повинні бути заповнені');
    return;
  }
  evt.currentTarget.reset();
  localStorage.removeItem(KEY_STORAGE);

  console.log(formData)

}


function findLogic() {
    getMeaning = JSON.parse(localStorage.getItem(KEY_STORAGE));
    if (getMeaning) {
        if (getMeaning.email) {
            formInput.value = getMeaning.email;
        }
  
        if (getMeaning.message) {
            formMessage.value = getMeaning.message;
        }
    }

  }
  

   


