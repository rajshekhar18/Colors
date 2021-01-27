const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navbarLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobilemenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
}

menu.addEventListener('click', mobilemenu);

// Showing active menu whie scrolling

const highlightMenu = () => {

    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const serviceMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos)

    // adds 'highlights'  class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth > 960 && scrollPos < 1400)
    {
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.add('highlight');
        serviceMenu.classList.remove('highlight');
        return;
    }

    else if(window.innerWidth > 960 && scrollPos < 2345) 
    {
        serviceMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    else if(window.innerWidth > 960 && scrollPos >2345){
        serviceMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight')
    }

    if (elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
        element.classList.remove('highlight');
    }
};

window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);

// Close mobile menu when clicking on a menu item

const hideMobileMenu = () =>{
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars)
    {
        menu.classList.toggle('is-active');
        menulinks.classList.remove('active');
    }
};

menulinks.addEventListener('click', hideMobileMenu);
navbarLogo.addEventListener('click', hideMobileMenu);