/*Технические требования:
- Написать функцию `createNewUser()`, которая будет создавать и возвращать объект `newUser`.
- При вызове функция должна спросить у вызывающего имя и фамилию.
- Используя данные, введенные пользователем, создать объект `newUser` со свойствами `firstName` и `lastName`.
- Добавить в объект `newUser` метод `getLogin()`, который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, `Ivan Kravchenko → ikravchenko`).
- Создать пользователя с помощью функции `createNewUser()`. Вызвать у пользователя функцию `getLogin()`. Вывести в консоль результат выполнения функции.
*/
"use strict"

function createNewUser() {
    const newUser = {}; //створюємо обєкт
        
    let firstName = prompt("What is your name?");
    let lastName = prompt("What is your surname?");

    newUser.name = firstName; //властивості обєкта
    newUser.surname = lastName;

    newUser.getLogin = function(){ //метод обєкта
        const firstLetter = newUser.name[0];
        const fullName = (firstLetter + newUser.surname).toLowerCase();
        return fullName;
    };
    return newUser;
}

console.log(createNewUser().getLogin());
