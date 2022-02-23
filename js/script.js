'use strict';

let burgerBtn = document.querySelector('.menu__btn');
let burgerNav = document.querySelector('.navigation');

// Showing navigation menu on burger button click
burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('bg__red');
    burgerNav.classList.toggle('burger__show');
});