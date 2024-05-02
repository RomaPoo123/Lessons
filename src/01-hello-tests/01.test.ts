import React from 'react';
import { sum } from './01';
import { mult } from './01';
import { splitIntoWords } from './01';




let a: number;
let b: number;
let c: number;

beforeEach(()=>{
    a= 1;
    b= 2;
    c= 3;
})

test ("sum should be correct", ()=> {

    // data

    // action
    const result1 = sum(a,b);
    const result2 = sum(b,c);

    // expect result
    // Это специальная команда с помощью которой производятс я тесты в .toBe(?) пишется ответ, то что функция должна вернуть
    expect(result1).toBe(3);
    expect(result2).toBe(5); 
})
test ("multiplay should be correct", ()=> {

    // data

    // action
    const result1 = mult(a,b);
    const result2 = mult(b,c);

    // expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6); 
})
test ("spliting into words should be correct", ()=>{
    const sent1 = "Hello my friend!"
    const sent2 = "Js - the best programming language"

     // action
    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

     // expect result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friend");

    expect(result2.length).toBe(6); 
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("-");
    expect(result2[2]).toBe("the");
    expect(result2[3]).toBe("best");
    expect(result2[4]).toBe("programming");
    expect(result2[5]).toBe("language");
})