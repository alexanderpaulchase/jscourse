'use strict';

const alex = {
    firstName: 'Alex',
    lastName: 'Chase',
    birthYear: 1993,
    job: 'programmer',
    friends: ['Michael','Peter','steve'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2030 - birthYear
    // }

    // calcAge: function() {
    //     // console.log(this)
    //     return 2030 - this.birthYear
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} , and he ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
    }
};

console.log(alex.calcAge());
console.log(alex.age); // this is using the this function shit

// challenge
// Write method getSummary should return a string that will summarize the data in the alex object:
// Alex is a 44 year old programmer, and he has a drivers license
console.log(alex.getSummary())