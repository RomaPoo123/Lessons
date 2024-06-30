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


// Task №3 

// Альпинисты в таблице лидеров

function leaderboardSort(leaderboard, changes) {
    let nameArr = [];
    let stepArr = [];
    let result = leaderboard.slice();
    changes.forEach((item, index) => {
        let minArr = item.split(' ');
        nameArr.push(minArr[0]);
        stepArr.push(Number(minArr[1]));
    });
    for (let i = 0; i < nameArr.length; i++) {
        let nameIndex = result.findIndex((item, index) => item === nameArr[i]);
        if (stepArr[i] < 0) {
            stepArr[i] = -stepArr[i];
            for (let j = 0; j < stepArr[i]; j++) {
                [result[nameIndex], result[nameIndex + 1]] = [result[nameIndex + 1], result[nameIndex]];
                nameIndex = nameIndex + 1;
            }
        } else {
            for (let j = 0; j < stepArr[i]; j++) {
                [result[nameIndex], result[nameIndex - 1]] = [result[nameIndex - 1], result[nameIndex]];
                nameIndex = nameIndex - 1;
            }
        }
    }
    return result;
}

// console.log(leaderboardSort(['John', 'Brian', 'Jim', 'Dave', 'Fred'], ['Dave +1', 'Fred +4', 'Brian -1']))

// Task №4
// birthday candles

function blowCandles(str) {
    let result = 0; // создаем счетчик
    let num = str.split("").map(t => Number(t)); // создаем массив из строки
    while (Number(num.join('')) !== 0) { // создаем цикл, и проверяем на ноль
        result += 1; // при каждом попадании в цикл увеличиваем счетчик +1
        while (num[0] === 0) { // вторым циклом убираем все нули в начале цикла
            num.shift()
        }
        num[0] > 0 ? num[0] -= 1 : num[0] = 0;
        if (num[1] !== undefined) { // проверяем на существование 2 элемента массива
            num[1] === 0 ? num[1] = 0 : num[1] -= 1;
        }
        if (num[2] !== undefined) { // // проверяем на существование 3 элемента массива
            num[2] === 0 ? num[2] = 0 : num[2] -= 1;
        }
    }
    return result; // возвращаем результат

}

// Task №5
// Напишите простую функцию, которая принимает в качестве параметра объект даты и возвращает логическое значение, указывающее, является ли дата сегодняшней или нет.
// Убедитесь, что ваша функция не возвращает ложное срабатывание, проверяя только день.

function isToday(date) {
    const now = new Date();
    now.setHours(0, 0, 0, 0)
    console.log(now.toDateString())
    // return date.getFullYear() === now.getFullYear() &&
    //     date.getMonth() === now.getMonth() &&
    //     date.getDate() === now.getDate();
}

isToday(1)