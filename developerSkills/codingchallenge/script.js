// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

// Understand the problem
/**
 In order for us to get those values we will need a for loop to iterate through the given array
 Next we should do a console log with a temp. literal to grab the array indexes 
 / there needs to be a day counter to increase the days with each print
 */

// Separate the tasks into smaller ones
/*
create function with array param
create a counter of 1 starting
for loop to go over array 
log the array index value along with the counter value 
increase counter value each time the function is ran
*/

const printForecast = function (arr) {
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    let thing = console.log(`...${arr[i]} degrees Celsius in ${count} days`);
    count++;
  }
};

const example = console.log(printForecast([12, 14, 51, 23]));
