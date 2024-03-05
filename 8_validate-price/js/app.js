/*
## Задание

Создать поле для ввода цены с валидацией. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).


#### Технические требования:
- При загрузке страницы показать пользователю поле ввода (`input`) с надписью `Price`. Это поле будет служить для ввода числовых значений
- Поведение поля должно быть следующим:
   - При фокусе на поле ввода - у него должна появиться рамка зеленого цвета. При потере фокуса она пропадает.
   - Когда убран фокус с поля - его значение считывается, над полем создается `span`, в котором должен быть выведен текст: `Текущая цена: ${значение из поля ввода}`. Рядом с ним должна быть кнопка с крестиком (`X`). Значение внутри поля ввода окрашивается в зеленый цвет.
   - При нажатии на `Х` - `span` с текстом и кнопка `X` должны быть удалены. Значение, введенное в поле ввода, обнуляется.
   - Если пользователь ввел число меньше 0 - при потере фокуса подсвечивать поле ввода красной рамкой, под полем выводить фразу - `Please enter correct price`. `span` со значением при этом не создается.
- В папке `img` лежат примеры реализации поля ввода и создающегося `span`.
*/

"use strict";
const input = document.getElementById('input');  //получить элемент 
//або можна написати const input = document.querySelector('#text-input');
const span = document.createElement('span');
const newButton = document.createElement('button');
newButton.textContent = 'X';
let textNode = document.createTextNode('Please enter correct price');

input.addEventListener('focus', function () {
    input.classList.add('focus');  // рамка стає зеленою коли ставимо курсор в інпут поле
    
} );   //пользователь фокусируется на элементе, например нажимает на <input>

input.addEventListener('blur', function () {
    if (input.value >= 1) {
        span.textContent = `Текущая цена: ${input.value}`;  //виводиться текст Текущая цена: _
        input.after (span, newButton);   //виводиться введене значення та кнопка хрестик
    } else { 
        input.after(textNode);  //виводиться текст 'Please enter correct price'
        input.classList.add('error');  // рамка стає червоною
    }
} ); 

newButton.addEventListener("click", function () {  //якщо натискаємо на хрестик, видаляється введене значення, зникає хрестик, зникає текст
    span.remove();
    newButton.remove();
    input.value = " ";
});














