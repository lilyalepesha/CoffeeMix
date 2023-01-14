let formData = {};
let formDataJoin = {};
let formDataReq = {};
function localStorageAdd(formSelector, keyValue, formData){

    const form = document.querySelector(formSelector);
    form.addEventListener('input', (e)=>{
        formData[e.target.name] = e.target.value;
        localStorage.setItem(keyValue, JSON.stringify(formData));
    });
    if(localStorage.getItem(keyValue)){
        formData = JSON.parse(localStorage.getItem(keyValue));
        
        for(let key in formData){
            form.elements[key].value = formData[key];
        }
    }
}
localStorageAdd('.enter-content__form', "formJoin", formDataJoin);
localStorageAdd('.login-content__form', "formReg", formData);
localStorageAdd('.request-content__form', "formReq", formDataReq);
