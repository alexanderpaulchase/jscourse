'use strict';
// for loop
// for(let rep = 1; rep <= 10; rep++){
//     console.log('Lifting weights repition ' + rep);
// };

// while loop
// this one needs a counter
let rep = 1;
while (rep <= 10) {
    // console.log('Lifting weights repition ' + rep);
    rep++;
}
// This while does not need a counter
// example of rolling adice until we get a 6
let dice = Math.floor(Math.random() * 6) + 1; // i remembered the math.floor! nice
console.log(dice); 

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('loop is about to end')
    }
}