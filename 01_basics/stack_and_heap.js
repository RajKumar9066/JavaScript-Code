//Stack => premitive type
// Heap => non - premetive

let name = "Raj";
let age = 21;
let anotherName = name;

console.log(anotherName);

anotherName = "Raju";
console.log(anotherName);

// example of stack memoery.

let userOne = {

    email : "elvishraj9066@gmail.com",
    outlook : "21bcs5053@cuchd.in"
}

let userTwo = userOne;

userTwo.email = "rk550396@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//example of heap memory.
