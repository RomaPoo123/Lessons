// методы массивов, полифилы 

// push, pop, shift, unshift - мутабельные методы массивов
// push () - добавление элемента в конец массива, возвращает длину массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.push("Nina");
// console.log("name:", name);
// console.log("result:", result);

// pop() - удаление элемента в конец массива, возвращает длину массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const popresult = names.push("Nina");
// console.log("name:", name);
// console.log("popresult:", result);

// shift() - удаляет первый элемент массива, возвращает этот удаленный элемент массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const shiftedItem = names.shift()

// console.log(names);
// console.log(shiftedItem);
// если из пустого массива удалять элемент через pop() и shift(), то он будет возвращать undefined !!!!!

//  unshift(" ") -добавляет один или более элементов в начало массива, возвращает длину нового массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.unshift("Roma", "Gera");

// console.log(names);
// console. log(result);

// reverse() - меняет порядок элементов в массиве на обратный(мутабельный)
// toRevers() - (имутабельный в отличии от reverse())

// names.reverse();
// console.log("names",names); // [ 'Sasha', 'Ivan', 'Bob', 'Alex' ]

// split() - разделение строки на массив по разделителю

// const str = 'ab-cd-ef';
// const res = str.split("-", 2);

// console.log(res);

// join() - обьеденяет элементы массива в строку

// let res = names.join(" - ");

// console.log(res);

// concat() - не мутирует исх массивы, соеденяет несколько массивов в один массив

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];

// const res1 = arr1.concat(arr2, [5,6], 7);
// console.log(res1);

// const nestedArr = [
//     [5,6]
//     [7,8]
// ]

// const res2 = arr1.concat(arr2, nestedArr);

// // flat - раскрывает уровни вложенности в массиве

// const flatArr = res1.flat(Infinity);
// console.log(flatArr)

// // indexOf(3, 5) - ищет элемент, и возвращает его порядковый номер, вторым параметром передаем позицию

// const arr = [1, 2, 3, 4, 5, 6]

// const res = arr.indexOf(3);
// console.log(res);

// // find() - ищет элементы по определенным условиям и возвращает этот элемент

// const arrStr = ['Rom', 'tettstst', 'tetrete', 'Igr'];

// const res4 = arrStr.find((el)=> el.length === 3);

// console.log(res4)

// findIndex -  ищет элементы по определенным условиям и возвращает номер этого элемента

// includes() - ищет элемент по значению и возвращает булевое значение

// filter - фильтрует  массив по определенным условиям и возвращает массив для которых условие будет true

// const result = names.filter((w)=> w.length >3);
// console.log(result);

// sort () - сортирует 

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const arr = [1, 2, 3, 4, 5, 6, -300, 256, -3]

// console.log(names.sort());
// console.log(arr.sort());

// const compareFunction = (a, b) => {
//     if (a> b) {
//         return 100
//     }else {
//         return -100
//     }
// }
// console.log(arr.sort(compareFunction));
// console.log(arr.sort((a,b)=>a-b)) // по возрастанию
// console.log(arr.sort((a,b)=>b-a))  // по убыванию

const users = [
  {
    id: 1,
    name: 'Bob',
    isStudent: true,
  },
  {
    id: 2,
    name: 'Alex',
    isStudent: true,
  },
  {
    id: 3,
    name: 'alex',
    isStudent: true,
  },
];

const result = users.sort((a, b) => a.name.localeCompare(b.name));
console.log(result);
// { id: 3, name: 'alex', isStudent: true },
// { id: 2, name: 'Alex', isStudent: true },
// { id: 1, name: 'Bob', isStudent: true }

const result1 = users.sort((a, b) => b.name.localeCompare(a.name));
console.log(result1);
// Полифил -представляет собой код, который предоставляет пользователю 

const users1 = [
  {
    id: 1,
    name: 'Bob',
    isStudent: true,
  },
  {
    id: 2,
    name: 'Alex',
    isStudent: true,
  },
  {
    id: 3,
    name: 'Ann',
    isStudent: true,
  },
  {
    id: 4,
    name: 'Donald',
    isStudent: false,
  },
];
// const result3 = users1.map((user) => user.name)
// console.log(result3); //[ 'Bob', 'Alex', 'Ann', 'Donald' ]

function newMap(arr, callback) {
  const result5 = [];

  for (let i = 0; i < arr.length; i++) {
    result5.push(callback(arr[i]));
  }
  return result5
}

const userNameArr = newMap(users1, (user) => user.name);

console.log(userNameArr);