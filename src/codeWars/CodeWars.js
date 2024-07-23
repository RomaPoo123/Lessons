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

// Task №11
// Кристально чистый
// Ваша функция squeakyClean должна принимать входной массив значений и возвращать новый массив, в котором удалены все пустые строки, 0, null и undefined.

function squeakyClean(arr) {

    return arr.filter(item => item !== '' && item !== 0 && item !== null && item !== undefined);
}


// Task №12
// Построить квадрат
// Я дам вам целое число. Верните мне фигуру такой же длины и ширины, как это целое число. Целое число будет целым числом от 1 до 50.

function generateShape(integer) {
    if (integer >= 1 && integer <= 50) {
        let str = "+".repeat(integer)
        // console.log(str)
        let arr = Array(integer).fill(str).join("\n")
        // console.log(arr)
        return arr
    }
}

// generateShape(3)

// Task №13
// Испытание кода All Star #17
// Напишите функцию, которая принимает два аргумента:
// Целое число, представляющее месяц года (0-11, где 0 — январь, а 11 — декабрь).
// Целое число, представляющее день недели (0-6, где 0 — воскресенье, а 6 — суббота).

function findYear(month, dayOfWeek) {
    let output = 0;
    if (month < 0 || month > 11) { // проверка месяца
        return 0
    }
    if (dayOfWeek < 0 || dayOfWeek > 6) { // проверка дня недели
        return 0
    }
    for (let i = 2014; i <= 2050; i++) { // циклом проходим по всем годам, создаем дату с нужным месяцем и получаем день недели
        let a = new Date(i, month);
        if (a.getDay() == dayOfWeek) { // сравниваем полученный день недели с входным
            return a.getFullYear()
        }
    }
}

// console.log(findYear(11, 2))


// Task №14 
// Функция диапазона
// Создайте rangeфункцию-генератор, которая будет принимать до 3 параметров — начальное значение, шаг и конечное значение. Эта функция должна возвращать итерируемый объект с числами. Для простоты предположим, что все параметры — положительные числа.

function* range(start, step, end) { // обьявляем функциюю генератор*
    if (end === undefined) {
        if (step === undefined) { // проверяем переданное количество аргументов в функцию
            // Если передан только один аргумент то 3 аргументу присваиваем значение переданного, а остальным аргументам присваиваем 1
            end = start;
            start = 1;
            step = 1;
        } else {
            // Если переданы два аргумента, то в последний передаем второй переданный аргумент, а 1 в тот, который остался без значения
            end = step;
            step = 1;
        }
    }
    // циклом создаем нужные значения в диапазоне
    for (let value = start; value <= end; value += step) {
        yield value;
    }
}

// console.log(Array.from(range(5)));
// console.log(Array.from(range(3, 2, 20)));

// Task №15
// Клетчатая доска
// Напишите функцию, которая принимает один параметр, представляющий размеры шахматной доски. Доска всегда будет квадратной, поэтому 5 означает, что вам понадобится доска 5x5.

function checkeredBoard(dimension) {
    let str = ''; // строка с которой будем работать
    let result = 0; // переменная для результата 
    if (dimension % 2) { // проверка на четность
        // для нечета 
        for (let i = 0; i < (dimension * dimension); i++) { // циклом проходим и добавляем один символ 
            if (!(i == 0)) { // проверка на ноль, для пропуска первого значения i=0
                if (!(i % dimension)) {// проверка на конец строки, после чего добавляем переход на новую строку
                    str += "\n"
                }
            }
            if (i % 2) {// проверка на чет не чет, в зависимости от этого  добавляем определенный квадрат
                str += " \u25A1"
            } else {
                str += " \u25A0"
            }
        }
        result = str.split('\n').map(t => t.trim()).join('\n') // чистим строку от лишних пробелов
        return result
    } else {
        // для чета
        let j = 0; // доп переменная, чтобы с новой строки поменять порядок квадратов
        for (let i = 0; i < (dimension * dimension); i++) { // так же циклом добавляем символы(квадраты)
            if (!(j == 0)) {
                if (!(i % (dimension))) {
                    str += "\n"
                    j += 1;// после перехода на новую строку, добавляем +1, чтобы порядок  квадратов поменялся
                }
            }
            if (j % 2) {
                str += "\u25A0 "
            } else {
                str += "\u25A1 "
            }
            j += 1;
        }
        result = str.split('\n').map(t => t.trim()).join('\n')
        return result
    }
}

// console.log("\u25A0")
// console.log("\u25A1")

// checkeredBoard(5);
// checkeredBoard(4);
// checkeredBoard(7);
// checkeredBoard(2);
// checkeredBoard(3);
// console.log(checkeredBoard(10));
// console.log(checkeredBoard(65));

// Task №16 
// Short Long Short
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

const solution = (a, b) => {
    return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
}

// console.log(solution("a", "ba"))


// Task №17
// Grasshopper - Терминальная игровая боевая функция
// Создайте боевую функцию, которая берет текущее здоровье игрока и количество полученного урона, и возвращает новое здоровье игрока. Здоровье не может быть меньше 0 .
function combat(health, damage) {
    return (health - damage) > 0 ? health - damage : 0
}

// console.log("привет".toUpperCase)

// Task №18
// Блок чувак
// Пусть 1представляют собой коробки, а 0представляют собой фон. Напишите функцию, которая возвращает, Trueможет ли блок-чувак перемещаться с левой стороны экрана на правую, учитывая его ограничения и Falseв противном случае.


function canTraverse(matrix) {


    console.log(matrix)
}

console.log(canTraverse([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0]
]))








