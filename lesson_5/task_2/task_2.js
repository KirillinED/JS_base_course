'use strict';

const descButton = document.querySelectorAll('.descriptionButton');

for (let i = 0; i < descButton.length; i++) {
    let btn = descButton[i];
    btn.addEventListener('click', function(event) {
        if(!document.getElementsByClassName('description')[i].classList.contains('showDescription')) {
            document.getElementsByClassName('description')[i].classList.add('showDescription');
            event.stopImmediatePropagation();
        }
    });
    
    btn.addEventListener('click', function(event) {
        document.getElementsByClassName('description')[i].classList.remove('showDescription');
    });

}