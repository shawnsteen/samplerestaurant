
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

function initMap() {
    // The location
    var local = {lat: 39.363488, lng: -76.711588};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: local});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: local, map: map});
  }        