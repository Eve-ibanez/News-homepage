const menu = document.querySelector ('.menu-desplegable');
const menuResponsive = document.querySelector ('.header__div-menu-responsive');
const menuClose = document.querySelector ('.menu-close');

menu.addEventListener ('click', Event => {
    menuResponsive.classList.add ('active');
    menuClose.addEventListener ('click', Event=> {
        menuResponsive.classList.remove ('active');
    })

})