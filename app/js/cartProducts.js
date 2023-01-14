setTimeout(()=>{
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
let cartWrapper = document.querySelector('.cart-list');
const buttons = document.querySelectorAll('.products__item-wrapper-button');
buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        totalCost();
        countHandler();
        productsItem = button.closest('.products__item');
        const productsInfo = {
            id: productsItem.dataset.products,
            imgSrc: productsItem.querySelector('.products__item-img img').getAttribute('src'),
            title: productsItem.querySelector('.products__item-title').innerText, 
            cost: productsItem.querySelector('#products__cost').innerText
        };
        const cartItemProduct = cartWrapper.querySelector(`[data-products="${productsInfo.id}"]`);
        if(cartItemProduct){
            const cartInput = cartItemProduct.querySelector('.counter__input');
            cartInput.value = parseInt(++cartInput.value);
            countHandler();
        }
        else{
            const cartItemHtmlProducts = `
            <li class="cart-list__item" data-products="${productsInfo.id}">
            <article class="cart-list__article article-cart">
                <div class="article-cart__wrapper cart-wrapper">
                    <img class="cart-wrapper__img" src="${productsInfo.imgSrc}" alt="coffee">
                    <div class="cart-wrapper__text">
                        <p class="cart-wrapper__title">${productsInfo.title}</p>
                        <p class="cart-wrapper__cost"><span class="cart-cost">${productsInfo.cost}</span>р.</p>
                    </div>
                </div>
                <div class="cart__wrapper-counter counter">
                    <div class="counter__plus">+</div>
                    <input type="text" class="counter__input" value="1" disabled>
                    <div class="counter__minus">-</div>
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
            </li> `;
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHtmlProducts);
        totalCost();
        countHandler();
        }
    });
});

window.addEventListener('click', (e)=>{
    const counter = e.target.closest('.cart__wrapper-counter');
    if(e.target.classList.contains('counter__plus')){
        const counterValue = counter.querySelector('.counter__input');
        counterValue.value = ++counterValue.value;
        totalCost();
        countHandler();
    }
    if(e.target.classList.contains('counter__minus')){
        const counterValue = counter.querySelector('.counter__input');
        if(counterValue.value > 1){
            counterValue.value = --counterValue.value;
            totalCost();
            countHandler();
        }
        else if(counterValue.value <= 1){
            const counterValue = counter.querySelector('.counter__input');
            const cartItem = counter.closest('.cart-list__item');
            cartItem.remove();
            totalCost();
            countHandler();
        }
    }
});
function totalCost(){
    const total = document.querySelector('.fullprice__text');
    let totalValue = 0;
    const items = document.querySelectorAll('.cart-list__item');
    let currentCost = 0;
    items.forEach(item=>{
        const price = item.querySelector('.cart-wrapper__cost span').innerText;
        const count = item.querySelector('.counter__input').value;
        const select = item.querySelector('.toppings__select').value;

        currentCost = parseFloat(count)*parseFloat(price)+parseFloat(select);
        totalValue+=currentCost;
    });
    total.innerText = parseFloat(totalValue.toFixed(5));
}
function countHandler(){
    let totalValue = 0;
    const itemsCount = document.querySelectorAll('.counter__input');
    const circle = document.querySelector('.cart-header__count');
    if(itemsCount){
        itemsCount.forEach(item=>{
            totalValue+= parseInt(item.value);
        });
    }
    circle.innerText = totalValue;
}


}, 2000);