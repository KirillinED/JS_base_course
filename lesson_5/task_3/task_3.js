'use strict';

function getChar(num){
    switch(num) {
        case 0:
            return 'A';
        case 1:
            return 'B';
        case 2:
            return 'C';
        case 3:
            return 'D';
        case 4:
            return 'E';
        case 5:
            return 'F';
        case 6:
            return 'G';
        case 7:
            return 'H';
    }
}

const rowsCount = 8;
const colsCount = 8;
const wrapper = document.querySelector('.wrapper');

let markup = '';
for(let i = 0; i <= rowsCount; i++) {
    markup += '<tr>';
    for(let j = 0; j <= colsCount; j++) {
        markup += `<td data-row="${i}" data-col="${j}"></td>`;
    }
    markup += '</tr>';
}
wrapper.insertAdjacentHTML('afterbegin', `<table><tbody>${markup}</tbody></table>`);
wrapper.querySelector('table').classList.add('table');

let evenCell = true;
for(let i = 0; i < rowsCount; i++) {
    let leftColumn = document.querySelector(`[data-row="${i}"][data-col="0"]`);
    leftColumn.insertAdjacentHTML('afterbegin',`${rowsCount-(i)}.`);
    for(let k = 0; k < colsCount; k++) {
        if(i % 2 == 0) {
            if(!evenCell){
                let chessCell = document.querySelector(`[data-row="${i}"][data-col="${k+1}"]`);
                chessCell.classList.add('black');
                evenCell = true;
            } else {
                evenCell = false;
            }
        } else {
            if(evenCell){
                let chessCell = document.querySelector(`[data-row="${i}"][data-col="${k+1}"]`);
                chessCell.classList.add('black');
                evenCell = false;
            } else {
                evenCell = true;
            }
        }
    }
    if(i+1  == rowsCount) {
        for(let j = 0; j < colsCount; j++) {
            let charCell = document.querySelector(`[data-row="${i+1}"][data-col="${j+1}"]`);
            charCell.insertAdjacentHTML('afterbegin',`${getChar(j)}`);
        }
    }
}
