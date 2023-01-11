import throttle from 'lodash.throttle';

const refs = {
form : document.querySelector(".feedback-form"),
email : document.querySelector(".feedback-form input"),
message : document.querySelector(".feedback-form textarea")
};


refs.form.addEventListener('submit', OnFormSubmit);
refs.form.addEventListener('input', throttle(OnFormInput, 500));



const formData ={};


function OnFormInput(evt){

    formData[evt.target.name] = evt.target.value;
    const formDataJson = JSON.stringify(formData);
    localStorage.setItem("feedback-form-state", formDataJson);

};

function OnFormSubmit(evt){

    evt.preventDefault();
    const savedInput = localStorage.getItem("feedback-form-state");
    const savedInputJson = JSON.parse(savedInput);
    console.log(savedInputJson);
    evt.currentTarget.reset();
    localStorage.clear();


};


function OnPopulateForm(){
  
    const savedInput = localStorage.getItem("feedback-form-state");
    
    if (savedInput){
        const savedInputJson = JSON.parse(savedInput);
        refs.email.value = savedInputJson.email;
        refs.message.value = savedInputJson.message;

    }
    
};


OnPopulateForm();



