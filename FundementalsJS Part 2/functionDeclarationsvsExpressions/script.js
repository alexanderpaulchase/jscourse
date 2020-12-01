'use strict';

console.log(calcAge1(1993)); // we can call declarations before they are declared

// this is a function declaration
function calcAge1(birthYear) {
    return 2020 - birthYear;
}

console.log(calcAge1(1993));

// function expression
const calAge2 = function(birthYear){
    return 2020 - birthYear;
}
console.log(calAge2(1993)); // you cannot call these before they are declared

