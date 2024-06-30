import React from "react";
// Task №1
// Простая забава №11: поменяйте местами соседние биты

export function swapAdjacentBits(n: number) {
    let Num: string = n.toString(2);
    let newArr: Array<string> = Num.split('');
    if (newArr.length % 2) {
        newArr.unshift('0');
    };
    for (let i = 0; i < newArr.length - 1; i += 2) {
        let a = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = a;
    };
    let Num2: string = newArr.join('');
    return (parseInt(Num2, 2));
}

console.log(swapAdjacentBits(13));