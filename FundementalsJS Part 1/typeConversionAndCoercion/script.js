// conversion
// conversion is when we manually change the value type
const inputYear = `1991`;
// we need a way to convert the string to a number 
console.log(Number(inputYear));
console.log(Number(inputYear) + 18); // this will calculate the numbers
// without it, it will show 199118


console.log(Number('Jonas')); 
// this will show NaN - not a number

console.log(typeof NaN); // this will show number lol 

console.log(String(23));

// type coericon: 
console.log('I am ' + 23 + ' years old') // I am 23 years old
// the plus opertor triggers the coericon event that we dont see. It would be the same as this:
console.log('I am ' + '23' + ' years old');

console.log('23' - '10' - 3); // prints 10. Converts the strings to numbers.
console.log('23' + '10' + 3); // this prints 23103. Due to the + operator making them strings.
console.log('23' * '2'); // 46 
console.log('23' / '2'); //11.5
console.log('23' > '18'); // true. It converts them to numbers
