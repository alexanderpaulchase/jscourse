const firstName = 'Alex';
const lastName = 'Chase';
const birthYear = 1993;
const currentYear = 2037
const job = 'programmer';

const alex = "I'm " + firstName + " "+ lastName + ', a ' + (currentYear - birthYear) + " programmer.";
console.log(alex)

// template literal 
const alexNew = `I'm ${firstName} ${lastName}, a ${currentYear - birthYear} year old ${job}`;
console.log(alexNew)

// you can use the back tick to write normal strings
console.log(`this is a string`);

// Previously you needed to use the new line thing \n to create multiple line strings
// with template strings there is an easy way to do this

console.log(`String
multiple
line`); // output is now multiple lined