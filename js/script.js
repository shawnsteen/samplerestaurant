
const navbarToggle = document.querySelector('.navbar-toggle');
const collapsableNavbar = document.querySelector('.collapsable-navbar');
const navItem = document.querySelectorAll('.nav-item');

function toggleNav() {
    if (collapsableNavbar.style.display != 'flex') {
        showNav();
    }else if (collapsableNavbar.style.display == 'flex') {
        hideNav();
    }
}

function showNav() {
    collapsableNavbar.style.display = 'flex';
    collapsableNavbar.style['flex-direction'] = 'column';
    collapsableNavbar.style['justify-content'] = 'center';
    collapsableNavbar.style['align-items'] = 'flex-end';
    collapsableNavbar.style.margin = '1em';    
}

function hideNav() {
    collapsableNavbar.style.display = 'none';
}

        