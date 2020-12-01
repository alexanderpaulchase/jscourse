'use strict';

const alex = [
    'Alex',
    'Chase',
    2037 - 1993,
    'programmer',
    ['Michael', 'Peter', 'Steven']
];

// printing arrays backwards

for (let i = alex.length - 1; i >= 0; i--) {
    console.log(i, alex[i]);
};

// loop in a loop 
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ STARTING EXERCISE ${exercise}`);
    

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weights repetition ${rep}`)
        
    }
}

/*
------ STARTING EXERCISE 1
Lifting weights repetition 1
Lifting weights repetition 2
Lifting weights repetition 3
Lifting weights repetition 4
Lifting weights repetition 5
------ STARTING EXERCISE 2
Lifting weights repetition 1
Lifting weights repetition 2
Lifting weights repetition 3
Lifting weights repetition 4
Lifting weights repetition 5
------ STARTING EXERCISE 3
Lifting weights repetition 1
Lifting weights repetition 2
Lifting weights repetition 3
Lifting weights repetition 4
Lifting weights repetition 5
*/