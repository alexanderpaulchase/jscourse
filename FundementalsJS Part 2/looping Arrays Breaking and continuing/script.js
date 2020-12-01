'use strict';

const alexArray = [
    'Alex',
    'Chase',
    2037 - 1993,
    'programmer',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < alexArray.length; i++) {
    // reading from alexArray
    console.log(alexArray[i])
    // filling types array
    // types[i] = typeof alexArray[i];
    types.push(typeof alexArray[i])
};

console.log(types)

const years = [
    1991,
    2007,
    1969,
    2020
];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
    
};
console.log(ages)


// continue and break
console.log('---- ONLY STRINGS')
for (let i = 0; i < alexArray.length; i++) {
    if(typeof alexArray[i] !== 'string') continue; // just continues through if the condition is met
    console.log(alexArray[i], typeof alexArray[i])
};
console.log('---- Break with number')
for (let i = 0; i < alexArray.length; i++) {
    if(typeof alexArray[i] === 'number') break; // finds the first number in the array and just stops, so nothing prints after
    console.log(alexArray[i], typeof alexArray[i])
};