
window.addEventListener('DOMContentLoaded', ()=>{
    const wrapperDeserts = document.querySelector('.deserts__items');
    const wrapperDrinks = document.querySelector('.products__items');
    async function getProducts(url, wrapper, path){
        let response = await fetch(url);
        let content = await response.json();
        for (let index = 0; index < content.length; index++) {
            const item = content[index];
            wrapper.innerHTML+=`
            <div class="products__item" data-products="${item.id}">
            <div class="products__item-img">
                <img src="images/${path}/${item.imgSrc}" alt="desert">
            </div>
        <div class="products__item-content">
            <h4 class="products__item-title">
                ${item.title}
            </h4>
            <p class="products__item-descr">${item.descr}</p>
            <div class="products__item-wrapper">
                <p class="products__item-wrapper-cost"><span id="products__cost">${item.cost}</span>р.</p>
                <button class="products__item-wrapper-button">Купить</button>
            </div>
        </div> 
            `;
            
        }
    }
    getProducts("../json/drinks.json", wrapperDrinks, "drinks");
    getProducts("../json/deserts.json", wrapperDeserts, "deserts");
    const paginationWrapper = document.querySelector('.drinks__pagination');
    const paginationWrapperDesert = document.querySelector('.desert__pagination');
    let currentPage = 1;
    const rows = 4;
    function DisplayList(wrapper, rows, page){
        page--;
        let start = page*rows;
        let wrapperList = Array.from(wrapper.children);
        let visibleItems = wrapperList.slice(start, start+rows);
        visibleItems.forEach(item=>{
            item.classList.add('visible');
        });
    }
    function Pagination(wrapper, paginationWrapper, rows){
        const pagItems = Array.from(paginationWrapper.children);
        const wrapperItems = Array.from(wrapper.children);
        pagItems.forEach((item, index)=>{
            item.addEventListener('click', (e)=>{
                wrapperItems.forEach(item=>{
                    item.classList.remove('visible');
                });
                let start = (index)*rows;
                let end = start + rows;
                let visibleItems = wrapperItems.slice(start,end);
                visibleItems.forEach(item=>{
                    item.classList.add('visible');
                });
                
            });
        });
    }
    setTimeout(()=>{
        DisplayList(wrapperDrinks, rows, currentPage);
        Pagination(wrapperDrinks, paginationWrapper, rows);
        DisplayList(wrapperDeserts, rows, currentPage);
        Pagination(wrapperDeserts, paginationWrapperDesert, rows);
    }, 1200);
 
});
