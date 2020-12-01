const age = 18;

if (age === 18) {
    console.log('You are old enough')
} else {
    console.log('You arent old enough')
}

// check your notes, alot more there

const favNumber = prompt("What is your favorite number?: ");
console.log(favNumber);
// this will take the prompt, store it in a variable. The output will be a string 

console.log(typeof favNumber)// string

if (favNumber == 21) {
    console.log('Cool, thats a dope number');
} // since we used loose equality, it will use type coecrsion and take the string and convert

// if you use the === it will not show anything as strict equality does not use coersion 


