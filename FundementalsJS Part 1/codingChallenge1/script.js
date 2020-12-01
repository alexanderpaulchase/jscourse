/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:

1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:

§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.

§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/ 

// test Data 1
const weightMark = 78;
const heightMark = 1.69;

const weightJohn = 92;
const heightJohn = 1.88;
// test data 1 end

// test data 2
/* const weightMark = 95;
const heightMark = 1.88;

const weightJohn = 85;
const heightJohn = 1.76; */
// test data 2 end

const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / heightJohn ** 2;

let markHigherBMI;

if (markBMI > johnBMI) {
    markHigherBMI = true;
    console.log('Mark has a higher BMI')

} else if (markBMI < johnBMI) {
    markHigherBMI = false;
    console.log('Mark has a lower BMI');

} else {
    console.log('Error: something went wrong, dipshit.');
}

// These both work great. Nice job dude. I was a little ahead with the if statements tho.\
// You basically did the second coding challenge. Fuck yeah.