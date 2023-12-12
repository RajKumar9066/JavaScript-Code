const name = "Raj kumar"
const repoCount = 10

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Raj-Kumar-Singh')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('K'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "      Raj  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rajkumar.com/raj%20kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes('raj'))
console.log(url.includes('raju'))

console.log(gameName.split('-'))