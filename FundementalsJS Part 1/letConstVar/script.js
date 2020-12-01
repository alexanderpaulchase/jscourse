// let is used for vairables that will change in the future
let age = 27;
age = 28;
// this is allowed for dynamic typing. Reassign the variable.

// const is for variables that wont change
const birthYear = 1993;
birthYear = 1994; // this will cause a type error.
// these variables cannot be changed.
// we also cannot create empty const variables
const job; // syntax error will show.

//var should be avoided in code, still should know how it works for legacy reasons
// this is the old way of defining varibles, before ES6
// works the same as let
var job = 'programmer';
job = 'teacher'

// while they look the same, they are vastly different below level.