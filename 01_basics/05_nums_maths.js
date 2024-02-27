const score = 100;
console.log(score);

const balance = new Number(100.9865)
console.log(balance);

console.log(toString(balance).length);

console.log(balance.toFixed(2));

// important topic precesion 

const no1 = 23.9
const no2 = 112.3
const no3 = 1123.908

console.log(no1.toPrecision(3));
console.log(no2.toPrecision(3));
console.log(no3.toPrecision(3));

const bill = 1000000
console.log(bill.toLocaleString('en-In'));


// random function => important concept

console.log(Math.random())
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)


