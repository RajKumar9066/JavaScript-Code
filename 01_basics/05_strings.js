// strings and functions

let name = "Raj Kumar"
let age = 21

console.log(`My name is ${name} and my age is ${age}`);
// professional way 

const stringName = new String('Rajkumar');
// another way to declare string 

console.log(stringName[1]);

console.log(stringName.length);

console.log(stringName.toLocaleUpperCase);

// like wise charAt(), indexOf().... etc.

// String Sanitaization
const newString1 = stringName.substring(1,4)

console.log(newString1);

const anotherString = stringName.slice(-5,2)
console.log(anotherString);

const String3 = "  Raj  ";
console.log(String3.trim());

const url = "https://rajkumar.com/raj%20kumar"
console.log(url.replace('%20','-'));
console.log(url);

console.log(url.includes("razia"))

const stringName4 = "Raj-Kumar"
console.log(stringName4.split('-'))
