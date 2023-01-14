document.addEventListener('DOMContentLoaded', ()=>{
    const popup = () =>{
        function bindPopups(triggerSelector, modalSelector, closeSelector, popupOverlaySelector, destroy = false){
            const trigger = document.querySelector(triggerSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector),
                popupOverlay = document.querySelector(popupOverlaySelector);
            trigger.addEventListener('click', (e)=>{
                if(e.target){
                    e.preventDefault();
                }
                const modalsArray = document.querySelectorAll('#modal');
                modalsArray.forEach(modal=>{
                    modal.classList.remove('open');
                    enableScroll();
                });
                if(destroy){
                    trigger.remove();
                }
                modal.classList.add('open');
                disableScroll();
                
            });
            close.addEventListener('click', (e)=>{
                modal.classList.remove('open');
                enableScroll();
            });
            modal.addEventListener('click', (e)=>{
                if(e.target === popupOverlay){
                    modal.classList.remove('open');
                    enableScroll();        
                }
            });
        }
        bindPopups('.cart-header__button', '.popup__request', '.popup__request-close', '.popup__request-body');
        if(document.querySelector('.hero__order')){
            bindPopups('.hero__order', '.popup__request', '.popup__request-close', '.popup__request-body');
        }

        bindPopups('.actions-header__sign', '.popup__login', '.popup__login-close', '.popup__login-body');
        bindPopups('.login-content__link', '.popup__enter', '.popup__enter-close', '.popup__enter-body');
        bindPopups('.actions-header__account', '.popup__enter', '.popup__enter-close', '.popup__enter-body');
        if(document.querySelector('.gift')){
            bindPopups('.gift', '.popup__gift', '.gift-content__close', '.popup__gift-overlay', true);
        }
        bindPopups('.enter-content__link', '.popup__login', '.popup__login-close', '.popup__login-body');
    };
    popup();
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
});