document.addEventListener('DOMContentLoaded', ()=>{
    const logo = document.querySelector('.menu-footer__logo');
    logo.addEventListener('click', ()=>{
        logo.classList.toggle('active');
        document.querySelector('.menu-footer__list').classList.toggle('active');

    });
});