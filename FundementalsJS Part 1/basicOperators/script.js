const ageAlex = 2037 - 1993;
const ageSara = 2037 - 2018;
console.log(ageAlex, ageSara);


const now = 2037; // we dont like repeating shit in code, so we made a variable.
const ageAlex1 = now - 1993;
const ageSara1 = now - 2018;
console.log(ageAlex, ageSara);

console.log(ageAlex * 3) // multi
console.log(ageAlex * 3 / 4); //multi and divide
console.log(ageAlex * 3 / 4 ** 3); // multi divde and exponent\

// you can concat strings with the +
const firstName = 'Alex';
const lastName = 'Chase';
console.log(firstName + ' ' + lastName);

// assignment operators 
// = sign
let x = 10 + 5;
console.log(x);

// this is just saying x = x + 10;
x += 10;
x *= 4;
x -= 5;
x /= 4;
x++; // x = x + 1
x--; // x = x -1
console.log(x) // now 25

// comparison operators <, > , <= , >=, !=, ===, ==
console.log(ageAlex > ageSara); // true
console.log(ageAlex >= 27); // true