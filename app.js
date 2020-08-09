'use strict';

/* 1. Задать температуру в градусах по Цельсию. 
Вывести в alert соответствующую температуру вградусах по Фаренгейту. */


let Tc = +prompt('Введите температуру по цельсию');
let Tf = (9 / 5) * Tc + 32;

console.log(`${Tc} градусов по Цельсию = ${Tf} градусов по Фаренгейту`);

/* 2. Объявить две переменные: admin и name. 
Записать в name строку "Василий". 
Скопировать значение из name в admin. 
Вывести в консоль переменную admin (должно вывести "Василий").*/

let name = 'Василий';
let admin = name;

console.log(admin);

/* 3. Вывести в консоль значения выражений и 
объяснить почему получились такие значения
используя комментарии к каждому выражению: */

console.log(10 + 10 + '10'); 
// 2010 т.к. сначала сложились 2 числа, а потом произошла конкатенация

console.log(10 + '10' + 10); 
// 101010 т.к. строковый тип находится в середине и происходит конкатенация

// console.log(10 + 10++ '10'); 
// выводится ошибка связанная с постфиксным инкрементом

console.log(10 /- ''); 
// -бесконечность, наверное потому-что в ковычках ничего не содержится и интерпретатор подразумевает, что мы делим на 0 + отрицание, что в итоге дает -бесконечность

console.log(10 /+ '2,5'); 
// NaN, потому-что производим математическую операцию числового типа со строковым

/* 4. Напишите, являются ли данные имена переменных корректными: */

let mode = "normal";
// корректно

let my_valu3 = 102;
// все работает, но наверное лучше '3' заменить на 'e'

// let 3my_value3 = "102";
// имя переменной не должно начинаться с числа

let __hello__ = "world"; // в питоне таким способом инкапсулируют переменные и методы, в данном случае все работает, не знаю правильно ли таким образом называть переменные в JS

let $$$ = "money";
// работает, но наверное так навзывать переменную будет не корректно

// let !0_world = true;
// имя переменной не должно начинаться с числа + вначале имеется зарезервированый символ отрицания