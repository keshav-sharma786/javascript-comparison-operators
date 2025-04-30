const userAge1 = '18';
const userAge2 = 24;
console.log(userAge1 == userAge2);//false

const userAge3 = '24';
const userAge4 = 24;
//equality operator
console.log(userAge3 == userAge4);//true
//strict equality operator
console.log(userAge3 === userAge4);//false
// for comparison purposes, always use strict equality operator(===)

const userAge5 = '21';// here basically behind the scenes V8 engine is converting this string into a number for effective comparison.This concept is basically called type coercion.
const userAge6 = 21;
console.log(userAge5 == userAge6);
console.log(userAge5 === userAge6);
// Basically in the strict equality operator, we can do the manual conversion
console.log(+userAge5 === userAge6);//true
console.log(parseInt(userAge5) === userAge6);
console.log('' + userAge6 === userAge5);
