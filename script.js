const mainPage = document.querySelector('.hamburger-page');
const closeMenu = document.querySelector('.close-ham-img');
const openMenu = document.querySelector ('.menu-btn');

openMenu.addEventListener ('click', show);
closeMenu.addEventListener ('click', close);

function show() {

    mainPage.style.display="block";
    document.getElementById('whole-wrapper').style.display="none";

}

function close() {

    mainPage.style.display="none";
    document.getElementById('whole-wrapper').style.display="block";
}