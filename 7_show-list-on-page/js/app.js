/*## Задание

Реализовать функцию, которая будет получать массив элементов и выводить их на страницу в виде списка. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонних библиотек (типа Jquery).

#### Технические требования:

- Создать функцию, которая будет принимать на вход массив и опциональный второй аргумент parent - DOM-элемент, к которому будет прикреплен список (по дефолту должен быть document.body).
- Каждый из элементов массива вывести на страницу в виде пункта списка;
- Используйте шаблонные строки и метод `map` массива для формирования контента списка перед выведением его на страницу;
*/

"use strict";

const list = ['hello', 'Ihor', 'Kyiv', 'Kharkiv', 'Odessa', 'Lviv'];

function entrance(array, parentEl = document.body) {
    //вар 1
    // let ul = document.createElement("ul"); //не в map, бо нам треба 1 ul
    // const listLi = array.map(function (item){
    //     let li = document.createElement("li"); //document.createElement(tag) - Создаёт новый элемент с заданным тегом
    //     li.innerText = item;
    //     ul.append(li); //Чтобы наш li появился, нам нужно вставить его где-нибудь в document
    // })
    // parentEl.append(ul);

    //вар 2
    const listLi = array.map(function (item){    //Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
        return `<li>${item}</li>`;   //шаблонные строки
    })
    // const stringLi = listLi.join(" "); //listLi.join(" ")
    // parentEl.insertAdjacentHTML("afterbegin", `<ul>${stringLi}</ul>`); АБО ->   
    parentEl.insertAdjacentHTML("afterbegin", `<ul>${listLi.join(" ")}</ul>`);  //"afterbegin" – вставить html в начало elem; insertAdjacentHTML позволяет вставить строку HTML кода в любое место страницы
}
entrance(list);