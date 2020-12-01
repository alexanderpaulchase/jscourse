let jsIsFun = true;

console.log(jsIsFun)

console.log(typeof(jsIsFun));
console.log(typeof(false));
console.log(typeof(true));
console.log(typeof(21));
console.log(typeof('hello'));

jsIsFun = 'Hello' // dynamic typing example
console.log(typeof jsIsFun)

let thisVar; // undefined 
console.log(typeof thisVar)

let ohAnother = null; // shows object? This is a bug in JS. The bug is never corrected for legacy reasons
console.log(typeof ohAnother)

thisVar = 1;
console.log(typeof thisVar) // dynamically changed the value. Now shows number

console.log(typeof null); // 