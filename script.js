// Написать функцию, принимающую на вход количество пар скобок и возвращающую валидную строку, вида «({})()»,
// в которой соблюдена правильная вложенность всех скобок.
//     В строке должны присутствовать различные комбинации. Т.е. строка не может быть  всегда «((()))»
// или «()()()». Следует комбинировать три вида скобок «()», «{}», «[]».

function isBalanced(str) {
    var br = "(){}[]";
    var st = [];
    for (var i = 0; i < str.length; ++i) {
        var ch = str[i];
        var ind = br.indexOf(ch);
        if (ind >= 0) {
            if (ind & 1) {
                if (!st.length) return false;
                var last_br = st.pop();
                if (last_br != br[ind - 1]) return false;
            } else {
                st.push(ch);
            }
        }
    }
    return !st.length;
}

// Написать функцию, проверяющую валидность работы первой функции. Функция принимает на вход строку из задачи выше
// и возвращает true || false. (есть ошибки вложенности или нет)

// Добавить возможность изменить название товара. При клике на название, появляется поле редактирования,
//     после всех изменений и нажатии кнопки «Готов», данные о новых именах товаров отправляются на сервер

const cat = document.querySelector('.catalog-name');
const menu = document.querySelector('.menu');
cat.addEventListener('click', catalog);
function catalog () {
   menu.classList.toggle('block');
}

$(document).ready(function () {
    $(".name").click(function () {
        const currentText = $(this);
        let text = currentText.text();
        let inp = currentText.closest(".nam").find(".name-change");
        let btn = $('.ready-btn');
        inp.val(text);
        currentText.addClass('none');
        inp.addClass('block');
        btn.addClass('block');
    });
    $(".name-change").blur(function () {
        const currentText = $(this);
        let inp = currentText.closest(".nam").find(".name-change");
        currentText.text =  inp.val();
        inp.toggleClass('none');
        currentText.toggleClass('block');
    })
});



// $( function() {
//     $( ".cat" ).sortable();
//     $( ".cat" ).disableSelection();
// } );




