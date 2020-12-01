'use strict';

const calcAge = function(birthYear){
    return 2020 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirment = 65 - age;
    if (retirment > 0) {
        return retirment;
        console.log(`${firstName} retires in ${retirment} years`) // things after the return statement will be ignored as the functions stops after return is executed
    } else {
        console.log(`${firstName} has already retired`); // this will log as it comes BEFORE the return statement
        return -1;
        
    }
};

console.log(yearsUntilRetirement(1993, 'Alex'));
console.log(yearsUntilRetirement(1920, 'Jim'));