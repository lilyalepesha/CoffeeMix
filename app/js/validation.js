
const form = document.querySelector('.login-content__form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+375 (99) 999-99-99');
const formJoin = document.querySelector('.enter-content__form');
const telSelectorJoin = formJoin.querySelector('input[type="tel"]');
const formReq = document.querySelector('.request-content__form');
const telSelectorReq = formReq.querySelector('input[type="tel"]');
inputMask.mask(telSelector);
inputMask.mask(telSelectorJoin);
inputMask.mask(telSelectorReq);
//валидация
const messagesPopup = {
    success: 'Форма отправлена',
    loading: 'images/loading/loading.png',
    error: 'Ошибка отправки формы'
}
new window.JustValidate('.form-footer__item',{
    messages:{
        rules:{
            email:{
                required: true,
            },
           
        },
        email: {
            required: 'Введите email',
            email: 'Введите корректный email'
        }, 
    },
    submitHandler: function(thisForm){
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    popupOpen(messagesPopup.success);
                }
            }
            else{
                popupOpen(messagesPopup.error);
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        thisForm.reset();
    }
    
});
new window.JustValidate('.login-content__form',{
    rules:{
        tel:{
            required: true,
            function: ()=>{
                const phone = telSelector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 9;
            }
        },
        second:{
            required: true,
            maxLength: 15,
            minLength: 3,
        },
        password:{
            required: true, 
            minLength: 3,
        }
    },
    
    
    messages:{
        name: {
            required: 'Введите имя',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Запрещено вводить более 15 символов'
        },
        tel: {
            required: 'Введите номер телефона',
            function: 'Введите номер полностью'
            
        },
        password: {
            required: 'Введите пароль',
            minLength: 'Введите 3 и более символов',
        },
        second:{
            required: 'Введите фамилию',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Запрещено вводить более 15 символов'     
        },    
    },
    submitHandler: function(thisForm){
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    popupOpen(messagesPopup.success);
                }
            }
            else{
                popupOpen(messagesPopup.error);
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        thisForm.reset();
    }
});
new window.JustValidate('.enter-content__form',{
    rules:{
        tel:{
            required: true,
            function: ()=>{
                const phone = telSelectorJoin.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 9;
            }
        },
    },
    messages:{
        tel: {
            required: 'Введите номер телефона',
            function: 'Введите номер полностью'
        }, 
    },
    submitHandler: function(thisForm){
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    popupOpen(messagesPopup.success);
                }
            }
            else{
                popupOpen(messagesPopup.error);
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        thisForm.reset();
    }
});
new window.JustValidate('.request-content__form',{
    rules:{
        tel:{
            required: true,
            function: ()=>{
                const phone = telSelectorReq.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 9;
            }
        },
        fam:{
            required: true,
        }
    },
    messages:{
        tel: {
            required: 'Введите номер телефона',
            function: 'Введите номер полностью'
        }, 
        name: {
            required: 'Введите имя',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Запрещено вводить более 15 символов'
        },
        fam: {
            required: 'Введите фамилию',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Запрещено вводить более 15 символов' 
        }
    },

    submitHandler: function(thisForm){
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    popupOpen(messagesPopup.success);
                }
            }
            else{
                popupOpen(messagesPopup.error);
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        thisForm.reset();
    }
});


function popupOpen(message){
    document.querySelectorAll('#modal').forEach(modal=>{
        modal.classList.remove('open');
    });
    document.querySelector('.popup__message').classList.add('open');
    document.querySelector('.popup__message-title').innerHTML = `${message}`;
    disableScroll();
    document.querySelector('.popup__message-close').addEventListener('click', ()=>{
        document.querySelector('.popup__message').classList.remove('open'); 
        enableScroll();
    });
    document.querySelector('.popup__message-overlay').addEventListener('click', ()=>{
        document.querySelector('.popup__message').classList.remove('open'); 
        enableScroll();
    });
    setTimeout(()=>{
        document.querySelector('.popup__message').classList.remove('open');    
        enableScroll();
    }, 3000);
}
function disableScroll(){
    const paddingScroll = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.style.paddingRight = paddingScroll;
    document.body.classList.add('lock');


    console.log(paddingScroll);
}
function enableScroll(){
    document.body.classList.remove('lock');
    document.body.style.paddingRight = 0 + "px";
}
