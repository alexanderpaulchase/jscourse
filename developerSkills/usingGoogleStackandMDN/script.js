// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Problem 1:
/*
 We work for a company building a smart home thermometer. Our most recent taks is this: "Given anarray of temps of one day, calculates the temp amplitude. Keep in mind that sometimes there might be a sensor error."
*/
const temperatures = [3, -1, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// What is temp amplitude? - difference between the highest and lowest values in the array
// How do we compute the max and min temps?
// What is a sensor error? What to do ?

// 2) Break it up into sub-problems
// - How to ignore errors?

// - Find max value in array

// - find min value in array

//- Subtract min from max (amplitude) and return it

const calcTempAmp = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (temps[i] > max) {
      max = curTemp;
    }
    if (temps[i] < min) {
      min = curTemp;
    }
    console.log(max, min);
  }
  return max - min;
};

const amp = calcTempAmp(temperatures);
console.log(amp);

// Problem 2
// Function should now receive TWO arrays of temps
// Understand the problem
// - With 2 arrays do we need to implment the same functionality twice? NO! Just merge the two arrays together

// Breaking the problem up
// - How to merge the arrays?
/*
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
*/
const calcTempAmpNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (temps[i] > max) {
      max = curTemp;
    }
    if (temps[i] < min) {
      min = curTemp;
    }
    console.log(max, min);
  }
  return max - min;
};

const ampNew = calcTempAmp([3, 5, 1], [9, 0, 5]);
console.log(amp);
