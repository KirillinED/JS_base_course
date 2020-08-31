'use strict';

let modalWindow = document.getElementsByClassName('modalDialog')[0];
let button = document.querySelector('button');

function showWindow(event) {
    modalWindow.classList.add('modalOpen');
    button.style.display = 'none';
    event.stopPropagation();
}

function hideWindow(event) {
    if (!event.target.closest('.modalContent')) {
        modalWindow.classList.remove('modalOpen');
        button.style.display = 'block';
        event.stopPropagation();
    }
}

button.addEventListener('click', showWindow);
modalWindow.addEventListener('click', hideWindow);