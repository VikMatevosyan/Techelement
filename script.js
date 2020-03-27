
const cat = document.querySelector('.catalog-name');
cat.onmouseover = function(event) {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('block');
};

// 1.При наведении мыши на данную область блочное представление товарных элементов должно замениться табличным.
const right = document.querySelector('.right-span');
right.onmouseover = function(event) {
    const catalogs = document.querySelector('.catalog');
    catalogs.classList.toggle('table');
};


// 2.Добавить возможность изменить название товара. При клике на название, появляется поле редактирования,
//     после всех изменений и нажатии кнопки «Готов», данные о новых именах товаров отправляются на сервер

$(document).ready(function () {
    $(".name").click(function () {
        const currentText = $(this);
        let text = currentText.text();
        let inp = currentText.closest(".nam").find(".name-change");
        let btn = $('.ready-btn');
        btn.addClass('block-ready');
        inp.val(text);
        currentText.removeClass('block').addClass('none');
        inp.addClass('block').removeClass('none');
        $(inp).focus();
    });
    $(".name-change").blur(function () {
        const currentInput = $(this);
        let span = currentInput.closest(".nam").find(".name");
        span.text(currentInput.val());
        currentInput.removeClass('block').addClass("none");
        span.removeClass('none').addClass("block");
    });
    $('.ready-btn').click(function () {
        let s = $('.name-change').serialize();
        $.ajax({url:"", type:"post", data: s});
        $(this).removeClass('block-ready');
    });

});

// 3.Добавить возможность перетаскивать товары мышкой, менять местами
$( function() {
    $('.cat').sortable();
} );

// 4.Написать функцию, принимающую на вход количество пар скобок и возвращающую валидную строку, вида «({})()»,
// в которой соблюдена правильная вложенность всех скобок.
//     В строке должны присутствовать различные комбинации. Т.е. строка не может быть  всегда «((()))»
// или «()()()». Следует комбинировать три вида скобок «()», «{}», «[]».
// Написать функцию, проверяющую валидность работы первой функции. Функция принимает на вход строку из задачи выше
// и возвращает true || false. (есть ошибки вложенности или нет)

function correctBrackets(brs){
    let opening = {
        '[': ']',
        '{': '}',
        '(': ')',
        '<': '>',
    };

    let stack = [];
    let ret = '';

    for(let i = 0; i < brs.length; i++){
        let c = brs[i];

        if(opening[c]){
            stack.push(c);
        } else {
            if(stack.length === 0){
                return null;
            }

            let br = stack.pop();

            c = opening[br];
        }

        ret += c;
    }
    if (stack.length > 0){
        return null;
    }
}
