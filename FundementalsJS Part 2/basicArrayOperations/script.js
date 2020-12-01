'use strict';

const friends = ['Michael', 'Steve','Peter'];

//Add elements
friends.push('Jay'); // adds an element at the end of the array
// const newLength = friends.push('Jay'); // you can do this too, but its not common.
console.log(friends) // ["Michael", "Steve", "Peter", "Jay"]

friends.unshift('John'); // adds element to the beginning of the array
console.log(friends); //["John", "Michael", "Steve", "Peter", "Jay"] 5 items

//Remove elements
friends.pop(); // removes the last item in the array. Doesnt need an argument
// const popped = friends.pop(); this is not common either
console.log(friends) //["John", "Michael", "Steve", "Peter"] Jay is gone

friends.shift();
console.log(friends); // ["Michael", "Steve", "Peter"] john is gone


console.log(friends.indexOf('Steve')); // 1
console.log(friends.indexOf('Bob')); // -1 not in the array

console.log(friends.includes('Steve')); // true
console.log(friends.includes('Bob')); // false

if (friends.includes('Peter')) {
    console.log('You have a friend named Peter')
};