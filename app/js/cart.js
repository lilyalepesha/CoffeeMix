setTimeout(()=>{
    let cartWrapper = document.querySelector('.cart-list');
window.addEventListener("click", (e)=>{
    if(e.target.classList.contains('cart-header__link') || e.target.closest('.cart-header__link')){
        document.querySelector('.cart-header__link').classList.toggle('active');    
        document.querySelector('.cart-header__content').classList.toggle('active');
        totalCost();
        countHandler();
    }
    else if(!e.target.closest('.cart-header__content')){
        document.querySelector('.cart-header__link').classList.remove('active');    
        document.querySelector('.cart-header__content').classList.remove('active');
    }
});

const buttons = document.querySelectorAll('.slider-item__button');
buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
         totalCost();
         countHandler();
         const parent = button.closest('.slider-item');
         console.log(parent);
         parentInfo = {
            id: parent.dataset.id,
            imgSrc: parent.querySelector('.slider-item__img img').getAttribute('src'),
            title: parent.querySelector('.slider-item__title').innerText,
            cost: parent.querySelector('#cost').innerText,
            size: parent.querySelector('.size').innerText
         };
         const cartItem = cartWrapper.querySelector(`[data-id="${parentInfo.id}"]`);
    
         if(cartItem){
            const count = cartItem.querySelector('.counter__wrapper-input');
            count.value = parseInt(++count.value);
            countHandler();
            totalCost();
         }
         else{
            const cartItemHtml = `<li class="cart-list__item">
            <article class="cart-list__product product-wrapper" data-id="${parentInfo.id}">
                <div class="product-wrapper__item">
                    <img src="${parentInfo.imgSrc}" alt="product" class="product-wrapper__img">   
                    <div class="product-wrapper__text product-text">
                        <h4 class="product-text__title">${parentInfo.title}</h4>
                        <p class="product-text__size">Объём: <span id="product__size">${parentInfo.size}</span></p>
                    </div>     
                </div>
                <div class="product-wrapper__cost cost__wrapper">
                    <div class="cost__wrapper-text"><span>${parentInfo.cost}</span>р</div>
                    <div class="cost__wrapper-counter counter__wrapper">
                        <div class="counter__wrapper-minus">-</div>
                        <input disabled type="text" class="counter__wrapper-input" value="1">
                        <div class="counter__wrapper-plus">+</div>
                    </div>
                </div>
                <div class="product-wrapper__status status__wrapper">
                    <p class="status__wrapper-text">Навынос</p>
                    <span class="status__wrapper-main">Бесплатно</span>
                </div>
                <select class="toppings__select">
                <option value="0" disabled selected>Выберите топинг</option>
                <option value="1.2">Шоколад</option>
                <option value="1.5">Карамель</option>
                <option value="1.2">Клубника</option>
                <option value="1.5">Лесная ягода</option>
                <option value="1.2">Банан</option>
                <option value="1.2">Бабл гам</option>
                <option value="1.5">Фисташка</option>
                <option value="1.5">Солёная карамель</option>
                <option value="1.2">Малина</option>
            </select>
            </article>
        </li>`
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml);
            totalCost();
            countHandler();
         }
    });
});
function totalCost(){
    const total = document.querySelector('.fullprice__text');
    let totalValue = 0;
    const items = document.querySelectorAll('.cart-list__item');
    items.forEach(item=>{
        const price = item.querySelector('.cost__wrapper-text span').innerText;
        const count = item.querySelector('.counter__wrapper-input').value;
        const selectValue = item.querySelector('.toppings__select').value;
        const currentCost = parseFloat(count)*parseFloat(price)+parseFloat(selectValue);
        totalValue+=currentCost;
    });
    total.innerText = parseFloat(totalValue.toFixed(5));
    if(!document.querySelector('.gift')){
        total.innerHTML = ((parseFloat(totalValue) - parseFloat(totalValue*0.20)).toFixed(2));
    }

}
function countHandler(){
    let totalValue = 0;
    const itemsCount = document.querySelectorAll('.counter__wrapper-input');
    const circle = document.querySelector('.cart-header__count');
    if(itemsCount){
        itemsCount.forEach(item=>{
            totalValue+= parseInt(item.value);
        });
    }
    circle.innerText = totalValue;
}
window.addEventListener('click', (e)=>{
    const counter = e.target.closest('.cost__wrapper-counter');
  
    if(e.target.classList.contains('counter__wrapper-plus')){
        const counterValue = counter.querySelector('.counter__wrapper-input');
        counterValue.value = ++counterValue.value;
        totalCost();
        countHandler();
    }
    if(e.target.classList.contains('counter__wrapper-minus')){
        const counterValue = counter.querySelector('.counter__wrapper-input');
        if(counterValue.value > 1){
            counterValue.value = --counterValue.value;
            totalCost();
            countHandler();
        }
        else if(counterValue.value <= 1){
            const counterValue = counter.querySelector('.counter__wrapper-input');
            const cartItem = counter.closest('.cart-list__item');
            cartItem.remove();
            totalCost();
            countHandler();
        }
        totalCost();
    }
})

}, 3000);