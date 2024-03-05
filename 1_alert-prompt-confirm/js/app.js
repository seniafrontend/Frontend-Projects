/*## Задание

Реализовать простую программу на Javascript, которая будет взаимодействовать с пользователем с помощью модальных окон браузера - `alert`, `prompt`, `confirm`. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

#### Технические требования:
- Считать с помощью модального окна браузера данные пользователя: имя и возраст.
- Если возраст меньше 18 лет - показать на экране сообщение: `You are not allowed to visit this website`.
- Если возраст от 18 до 22 лет (включительно) - показать окно со следующим сообщением: `Are you sure you want to continue?` и кнопками `Ok`, `Cancel`. Если пользователь нажал `Ok`, показать на экране сообщение: `Welcome, ` + имя пользователя. Если пользователь нажал `Cancel`, показать на экране сообщение: `You are not allowed to visit this website`.
- Если возраст больше 22 лет - показать на экране сообщение: `Welcome, ` + имя пользователя.
- Обязательно необходимо использовать синтаксис ES6 (ES2015) при создании переменных. */

"use strict"

let userName = prompt("What is your name?");

let userAge = prompt("How old are you?", 0);

console.log(NaN === NaN); //Not-A-Number, в качестве значения вернут false

if (isNaN(userAge) || userAge === null || userAge === "") {         // isNaN(37); - false
    userAge = prompt("Please, write your age");
    if (isNaN(+userAge) || userAge === null || userAge === "") {
        alert("Error! This is not a number.")
    }
} else {
    if (+userAge <= 17) {
        alert("You are not allowed to visit this website");
    } else if (+userAge <= 18 || +userAge >= 22){
        if (confirm("Are you sure you want to continue?")) {
            alert("Welcome, " + userName);
        } else {
            alert("You are not allowed to visit this website");
        }
    }
    else {
        alert("Welcome, " + userName);
    }
}