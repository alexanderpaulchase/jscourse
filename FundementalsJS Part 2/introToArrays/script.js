'use strict';

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steve','Peter'];
console.log(friends)

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]) // grab first item
console.log(friends.length) // length of array
console.log(friends[friends.length -1]) // last item of the array

friends[2] = 'Jay'; // change an item in the array
console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName, 'Schemdtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length); //5

//excercise 
const calcAge = function(birthYear){
    return 2037 - birthYear;
};

const birthYears = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(birthYears[0]));
console.log(calcAge(birthYears[1]));
console.log(calcAge(birthYears[2]));
console.log(calcAge(birthYears[birthYears.length -1]));

const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[2]), calcAge(birthYears[birthYears.length -1])];
console.log(ages)