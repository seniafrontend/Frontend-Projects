/*## Задание

Дополнить функцию `createNewUser()` методами подсчета возраста пользователя и его паролем. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

#### Технические требования:
- Возьмите выполненное домашнее задание номер 4 (созданная вами функция `createNewUser()`) и дополните ее следующим функционалом:
   1. При вызове функция должна спросить у вызывающего дату рождения (текст в формате `dd.mm.yyyy`) и сохранить ее в поле `birthday`.
   2. Создать метод `getAge()` который будет возвращать сколько пользователю лет.
   3. Создать метод `getPassword()`, который будет возвращать первую букву имени пользователя в верхнем регистре, соединенную с фамилией (в нижнем регистре) и годом рождения. (например, `Ivan Kravchenko 13.03.1992 → Ikravchenko1992`).
- Вывести в консоль результат работы функции `createNewUser()`, а также функций `getAge()` и `getPassword()` созданного объекта.
*/

"use strict";

function createNewUser() {
   const newUser = {}; //створюємо обєкт
       
   let firstName = prompt("What is your name?");
   let lastName = prompt("What is your surname?");
   let userBirth = prompt("What is your date of birth? (write in format: dd.mm.yyyy)").split('.').reverse().join('-');

   newUser.name = firstName; //властивості обєкта
   newUser.surname = lastName;
   newUser.birthday = userBirth;

   newUser.getLogin = function(){ //метод обєкта
       const first_letter = newUser.name[0];
       const full_name = (first_letter + newUser.surname).toLowerCase();
       return full_name;
   };

   newUser.getAge = function() {
      var today = new Date();
      var birthDate = new Date(newUser.birthday);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
          age--;
      }
      return age;
   }

  newUser.getPassword = function () {
      return newUser.name[0].toUpperCase() + newUser.surname.toLowerCase() + this.birthday.slice(0, 4);
  }

   return newUser;
}

//console.log(createNewUser().getLogin().getAge());
let user = createNewUser();

console.log(user.getPassword());
console.log(user.getAge());
