let btnOpen = document.querySelector('.btn-nav-open');
let btnClose = document.querySelector('.btn-nav-close');
let dropDown = document.querySelector('#dropdown-nav');
let navBar = document.querySelector('.navbar')


btnOpen.addEventListener('click', showMenu);
function showMenu() {
    btnOpen.style.display = 'none';
    btnClose.style.display = 'block';
    dropDown.classList.add('show');
    
}

btnClose.addEventListener('click', closeMenu);
function closeMenu() {
    btnOpen.style.display = 'block';
    btnClose.style.display = 'none';
    dropDown.classList.remove('show');
}
