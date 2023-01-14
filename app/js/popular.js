const wrapper = document.querySelector('.swiper-wrapper');
if(wrapper){
    const popular = ()=>{
        fetch("../json/db.json")
            .then((response)=>{
                console.log(response);
                return response.json();
                
            })
            .then((data)=>{
                wrapper.innerHTML = '';
                for (let index = 0; index < data.length; index++) {
                    let item = data[index];
                    wrapper.innerHTML+= 
                    `<div class="swiper-slide slider-item" data-id="${item.id}">
                    <div class="slider-item__img">
                         <img src="images/popular/${item.imgSrc}" alt="${item.title}">
                    </div>
                    <h3 class="slider-item__title">${item.title}</h3>
                    <p class="slider-item__cost">Цена: <span id="cost">${item.cost}</span></p>
                    <p class="slider-item__size">Объём: <span class="size">${item.size}</span></p>
                    <button class="slider-item__button orange-button">В корзину</button>
                    </div>`;
                }

            })
    }
    popular();
}
