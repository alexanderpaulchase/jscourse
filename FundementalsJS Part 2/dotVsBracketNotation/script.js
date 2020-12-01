'use strict';

const alex = {
    firstName: 'Alex',
    lastName: 'Chase',
    age: 2037 - 2020,
    friends: ['Michael','Peter','steve']
};


console.log(alex.lastName);
console.log(alex['lastName']);


// const interestedIn = prompt('What do you want to know about Alex? Choose between first, last, age, and friends');

// if (alex[interestedIn]) {
//     console.log(alex[interestedIn]);
// } else{
//     console.log('Wrong request! Choose between first, last, age, and friends')
// };

alex.location = 'Racine';
alex['favColor'] = 'Purple';

// Challenge: write a sentence like the one below in a dynamic way
// "Alex has three friends, and his best friend is called Michael."

const challenge = `${alex.firstName} has ${alex.friends.length} friends, and his best friend is called ${alex.friends[0]}`;
console.log(challenge);