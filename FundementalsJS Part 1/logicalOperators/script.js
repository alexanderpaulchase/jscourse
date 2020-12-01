
const hasLicense = true; // varibale A in notes
const hasGoodVision = false; // varibale B in notes

console.log(hasLicense && hasGoodVision); // logs true as both were set at true. Will log false when one is false
console.log(hasLicense || hasGoodVision); // logs true as one is true. 
console.log(!hasLicense); // logs true as one is false as ! changes it. 



// if (hasLicense && hasGoodVision) {
//     console.log('Sara can drive')
// } else {
//     console.log('Someone else should drive');
// } // this will trigger the else as only ONE is true, all need to be true for it to be true
// if both values are set at true it will trigger the if


const isTired = true; // varible C 
console.log(hasLicense || hasGoodVision || isTired); // will trigger as true as ALL are true. Only one has to be true
console.log(hasLicense && hasGoodVision && isTired); // will trigger as FALSE as one is false. All need to be true

if (hasLicense && hasGoodVision && !isTired) {
    console.log('Sara can drive')
} else {
    console.log('Someone else should drive');
}