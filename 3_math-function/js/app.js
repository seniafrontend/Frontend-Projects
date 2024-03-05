/*#### Технические требования:
- Считать с помощью модального окна браузера два числа.
- Считать с помощью модального окна браузера математическую операцию, которую нужно совершить. Сюда может быть введено `+`, `-`, `*`, `/`.
- Создать функцию, в которую передать два значения и операцию.
- Вывести в консоль результат выполнения функции.*/

"use strict"

let first_num = +prompt("Enter first numbers");
let sec_num = +prompt("Enter secound numbers"); //строка
let operation = prompt("Enter operation");

// Nan - число
// Null - об'єкт

function check_num (first_num, sec_num, operation) {
    let firstNum = Number(first_num) //приводимо до числа
    let secondNumber = Number(sec_num)

   // console.log(firstNum);

    if (Number.isNaN(firstNum) || Number.isNaN(secondNumber)) {
        alert("It's not a number");
    } else {
        alert("It's a number!");
    }
}

check_num(first_num, sec_num, operation);

function get_num (first_num, sec_num, operation) {
    let result;
    //let result = get_num (first_num, sec_num, operation);
    if (operation == "-") {
        result = first_num - sec_num;
    } else if (operation == "+") {
        result = first_num + sec_num;
    } else if (operation == "/") {
        result = first_num / sec_num;
    } else if (operation == "*") {
        result = first_num * sec_num;
    } else {
        alert("Write a operation!");
    }
    return result;
}

let test_func = get_num(first_num, sec_num, operation);
alert(test_func);