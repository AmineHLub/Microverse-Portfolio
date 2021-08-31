const mainPage = document.querySelector('.hamburger-page');
const closeMenu = document.querySelector('.close-ham-img');
const openMenu = document.querySelector ('.menu-btn');
const hambPage = document.querySelector ('.menu-inside-hamb-page');

function show() {

    mainPage.style.display="block";
    document.getElementById('whole-wrapper').style.display="none";

}

function close() {

    mainPage.style.display="none";
    document.getElementById('whole-wrapper').style.display="block";
}

openMenu.addEventListener ('click', show);
closeMenu.addEventListener ('click', close);
hambPage.addEventListener('click', close);