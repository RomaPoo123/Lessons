//  Task №1

/*
Вам нужно написать регулярное выражение, которое будет проверять пароль, чтобы убедиться, что он соответствует следующим критериям:

Длина не менее шести символов
содержит строчную букву
содержит заглавную букву
содержит цифру
содержит только буквенно-цифровые символы (обратите внимание, что '_'это не буквенно-цифровые символы)
*/

/*
function doTest(str) {
    if (str.length < 6) {
        return false
    }
    if (!(/[A-Z]/.test(str))) {
        return false
    }
    if (!(/[a-z]/.test(str))) {
        return false
    }
    if (!(/[0-9]/.test(str))) {
        return false
    }
    if (/[_," "]/.test(str)) {
        return false
    }

    return true

}
 */

// function doTest (string, expected) {
//     const actual = REGEXP.test(string);
//     const log = `"${string}" is${expected ? '' : ' not'} a valid password\n`;

// }
// Ответ: const REGEXP = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=[^0-9]*[0-9])[a-zA-Z0-9]{6,}$/;

// Task №2

// Функция добавления цепочки


// function add(a) {
//     function sum(b) {
//         a = a + b;
//         return sum;
//     }
//     sum.toString = function () { return a }
//     return sum;
// }

// console.log(add(1)(2));

