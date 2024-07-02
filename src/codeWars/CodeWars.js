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
    const now = new Date(); // создаем переменную, в которой храниться текущая дата
    now.setHours(0, 0, 0, 0) // задаем этой переменной нулевое время
    return date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate(); // сравниваем год, месяц и дату переданного обьекта с нашим, при всех трех true вернется true иначе false
}

// Task №6
// Arguments to Binary addition
// Дан массив, сложите все числовые элементы и верните двоичный эквивалент этой суммы; чтобы сделать код безопасным, все, что не является числом, следует добавлять как 0, поскольку его нельзя сложить.

function arr2bin(arr) {
    let sum = 0;
    let newArr = arr.filter(t => typeof (t) === "number")
    newArr.map(t => sum += t);
    return sum.toString(2);
}

// arr2bin([1, 2, 'a'])

// Task №7
// Parse nice int from char problem
// Напишите программу, которая возвращает возраст девочки (0–9) в виде целого числа.

function getAge(inputString) {
    let num = Math.floor(Math.random() * 10) // создание рандомного числа от 0 до 9
    //     return (`${num} years old`); //  возврат этого числа
    return (Number(inputString[0]))// return не тот, так как должен выводить случайное число от 0 до 9 num
}

// Task №8
// 
// 

function DNAtoRNA(dna) {
    return dna.split('').filter(t => t === "G" || t === "C" || t === "A" || t === "T").map(t => t === "T" ? t = "U" : t).join('')
}

// console.log(DNAtoRNA("GCTATRTGA"))

// Task №9
// Сколько из них меньше меня?
// Напишите функцию, которая для заданного массива arrвозвращает массив, содержащий в каждом индексе iколичество чисел, которые меньше, чем arr[i]справа.


function smaller(nums) {
    let arr = [...nums]; // создаем копию массива
    let result = []; // обьявляем переменную с пустым массивом для результата 
    for (let i = 0; i < nums.length; i++) { // циклом проходимся по массиву
        arr.shift() // в новом массиве удаляем первый элемент, который мы сравниваем со значениями справа
        let newArr = arr.filter(t => t < nums[i]) // в переменнную фильтруем нашу копию массива, в которой будут значения меньше чем наше 
        result.push(newArr.length) // в массив результатат добавляем в конец элемент, который является длинной массива
    }
    return result // возвращаем результат
}


// console.log(smaller([5, 4, 3, 2, 1]))
// console.log(smaller([1, 2, 1]))


// Task №10
// английские нищие
// Это неправильное толкование этого ката , ваша задача здесь довольно проста: учитывая массив значений и количество нищих, вы должны вернуть массив с суммой того, что каждый нищий приносит домой, предполагая, что все они ходят по очереди, от первого до последнего.


function beggars(values, n) {
    let result = new Array(n).fill(0);
    // Проходим по каждому значению в массиве
    for (let i = 0; i < values.length; i++) {
        // Распределяем значения по нищим по очереди
        result[i % n] += values[i];
    }

    return result;
}


// console.log([1, 2, 3, 4, 5], 0)
// console.log([1, 2, 3, 4, 5], 3)
// console.log([1, 2, 3, 4, 5], 5)


