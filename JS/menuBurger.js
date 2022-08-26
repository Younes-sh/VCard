const btnMenu = document.querySelector('.menu-burger');
const menuBurger = document.querySelector('.container-menu-burger');

btnMenu.addEventListener('click',menuBurgerHandler);
function menuBurgerHandler(){
    btnMenu.classList.toggle('open');
    menuBurger.classList.toggle('hiden');
}


