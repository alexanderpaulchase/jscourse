console.log(Boolean(0)); // prints false
console.log(Boolean(undefined)); // prints false
console.log(Boolean('')); // prints false
console.log(Boolean(NaN)); // prints false
console.log(Boolean(null)); // printsfalse

const money= 0;
if (money) { // Js will try to convert it to a boolen. Since its 0, its converted to false, and the else block is triggered
    console.log('Dont spend it all');
} else {
    console.log('You should get a job');
};
// if the const is changed to literally any value, it will trigger the if block as its truthy.

let height;
if (height) { // same thing as above, height is undefined, which is falsy. Will trigger the else block 
    console.log('YAY! this is defined');
} else {
    console.log('Not defined')
}
// If anything is assigned to the height value, it will trigger the if block. Because something is in there now.
// Now if the height is set to 0, it will be set to falsy, because this is also a falsy value.

// Anything that isnt on the list in your notes, is considered a truthy value 