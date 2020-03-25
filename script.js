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

var name = document.querySelectorAll('.name');
var namechange = document.querySelectorAll('.name-change');
namechange.value = name.innerText;
name.addEventListener('click', names);
function names(e) {
    name.currentTarget.style.display = 'none';
    document.querySelector('.name-change').style.display = 'block';
}





