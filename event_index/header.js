const btnOpen = document.querySelector('.btn-nav-open');
const btnClose = document.querySelector('.btn-nav-close');
const dropDown = document.querySelector('#dropdown-nav');
const navBar = document.querySelector('.navbar')
const btnGoods = document.querySelector('#btn-addgoods');

const eventAddItem = document.querySelector('.event-additem');
const showEventAddItem = document.querySelector('.add-card-item');
const closeAddItem = document.querySelector('.close-eventadditem');
let oke = window.scrollY;

// add item
closeAddItem.addEventListener('click', function(){
    showEventAddItem.style.width="0";
});
eventAddItem.addEventListener('click',function(){
    showEventAddItem.style.width = "100%";
});

// end add item
// nav top
btnOpen.addEventListener('click', showMenu);
function showMenu() {
    btnOpen.style.display = 'none';
    btnClose.style.display = 'block';
    dropDown.classList.add('show');
    console.log(window);
}

btnClose.addEventListener('click', closeMenu);
function closeMenu() {
    btnOpen.style.display = 'block';
    btnClose.style.display = 'none';
    dropDown.classList.remove('show');
}
// end nav top

const inputImgGoods = document.querySelector('#inputimggoods');
const inputNameGoods = document.querySelector('#inputnamegoods');
const inputPricesGoods = document.querySelector('#inputpricesgoods');
const rowSection = document.querySelector('.row-section');

// function buildTodoitem(){
//     const todotemplate = document.querySelector('#todotemplate');
//     const todofragment = todotemplate.content.cloneNode(true);
//     const celement = todofragment.querySelector('.c-element');
   
//     const addImgGoods = celement.querySelector('.card img').src;
//     addImgGoods.src =  inputImgGoods.value;
//     const addNameGoods = celement.querySelector('.card .card-body .card-title');
//     addNameGoods.innerText = inputNameGoods.value;
//     const addPricesGoods = celement.querySelector('.card .card-body .card-prices');
//     addPricesGoods.innerText = `$+${inputPricesGoods}`
    
// }




function addList() {
    const todotemplate = document.querySelector('#todotemplate');
    const todofragment = todotemplate.content.cloneNode(true);
    const celement = todofragment.querySelector('.c-element');
   
    const addImgGoods = celement.querySelector('.card img').src;
    addImgGoods.src =  inputImgGoods.src;
    const addNameGoods = celement.querySelector('.card .card-body .card-title');
    addNameGoods.innerText = inputNameGoods.value;
    const addPricesGoods = celement.querySelector('.card .card-body .card-prices');
    addPricesGoods.innerText = `$${inputPricesGoods.value}`

    rowSection.appendChild(celement);
}

btnGoods.addEventListener('click', addList);

