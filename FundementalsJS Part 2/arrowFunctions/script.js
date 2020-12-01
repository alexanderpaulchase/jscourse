'use strict';

// function expression
// const calAge2 = function(birthYear){
//     return 2020 - birthYear;
// }

// arrow function
const calcAge3 = birthYear => 2020 - birthYear;
console.log(calcAge3(1993));



const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2020 - birthYear;
    const retirment = 65 - age;
    // return retirment;
    return `${firstName} retires in ${retirment} years`
};

console.log(yearsUntilRetirement(1993, 'Alex'));