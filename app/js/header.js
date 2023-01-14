document.addEventListener('DOMContentLoaded', ()=>{
    const iconMenu = document.querySelector('.icon__menu');
iconMenu.addEventListener("click", ()=>{
    iconMenu.classList.toggle('active');
    document.querySelector('.menu__header-nav').classList.toggle('active');
})
//поиск
window.addEventListener('click', (e)=>{
    if(e.target.classList.contains('search-button') || e.target.closest('.search-button') && scrollY<200){
        document.querySelector('.form-header').classList.toggle('active');
    }else if(!e.target.classList.contains('form-header__input') || e.target.closest('.form-header__search')){
        document.querySelector('.form-header').classList.remove('active');             
    }
});
window.addEventListener('scroll', ()=>{
    if(scrollY > 400){
        document.querySelector('.header').classList.add('scroll');
    if(screenY>200){
        document.querySelector('.form-header').classList.remove('active'); 
        document.querySelector('.search-button').style.display = 'none';  
    }
    }else{
        document.querySelector('.header').classList.remove('scroll'); 
    }
});



});