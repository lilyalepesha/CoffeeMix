document.addEventListener('DOMContentLoaded', ()=>{
    function imagesOpen(popupSelector, imagesSelector, wrapperSelector){
        const images = document.querySelectorAll(imagesSelector);
        const popup = document.querySelector(popupSelector);
        images.forEach(image=>{
            image.addEventListener('click', ()=>{
                const src = image.getAttribute('src');
                const wrapper = document.querySelector(wrapperSelector);
                wrapper.setAttribute('src', src);
                popup.classList.add('open');
                disableScroll();
            });
        });
        popup.addEventListener('click', ()=>{
            if(popup.classList.contains('open')){
                popup.classList.remove('open');  
                enableScroll();
            }
        });
    }
    function disableScroll(){
        const paddingScroll = window.innerWidth - document.body.offsetWidth + 'px';
        document.body.classList.add('lock');
        document.body.style.paddingRight = paddingScroll;
        console.log(paddingScroll);
    }
    function enableScroll(){
        document.body.classList.remove('lock');
        document.body.style.paddingRight = 0 + "px";
    }
    imagesOpen('.popup__img', '.info__item img', '.popup__img-content img');
});

