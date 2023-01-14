window.addEventListener("click", (e)=>{
    if(e.target.classList.contains("eye") || e.target.closest('.eye')){
        const input = document.querySelector('#password input');
        if(input['type'] === 'password'){
            input['type'] = 'text';
            document.querySelector('#password').classList.add('active');
        }
        else{
            input['type'] = 'password';
            document.querySelector('#password').classList.remove('active');
        }
    }
});