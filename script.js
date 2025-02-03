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
