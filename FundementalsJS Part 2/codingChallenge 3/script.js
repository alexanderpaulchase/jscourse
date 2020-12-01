
// const mark = {
//     fullName: 'Mark Miller',

//     calcBMI: function(){ //78
//         const mass = 78
//         const height = 1.69
//         this.markBMI = mass / height ** 2;
//     }
// };

// const john = {
//     fullName: 'John Smith',

//     calcBMI: function(){ //92
//         const mass = 92
//         const height = 1.95
//         this.johnBMI = mass / height ** 2;
//     }
// };

// console.log(`${mark.calcBMI() > john.calcBMI() ? `Mark has a higher BMI` : 'John has a higher BMI'}`)

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){ //78
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(){ //92
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI(); // the reason why your code wasnt fucking working lol you have to call these first
john.calcBMI(); // the reason why your code wasnt fucking working lol you have to call these first
// you could also do the mark.calcBMI() and john.calcBMI() in the if statement too, you dont have to call the function like the lines above

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} BMI ${mark.bmi} is higher then John's ${john.bmi}`)
} else if(john.bmi > mark.bmi){
    console.log(`${john.fullName} BMI ${johnBMI} is higher then Marks's ${mark.johnBMI}`)
};