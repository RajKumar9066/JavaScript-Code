// checks and conversion in array

const name = "RajKumar"
console.log(Array.isArray("raj"));
console.log(Array.from("raj"));

console.log(Array.from({
    name : "Raj"
}));// intresting + imp

// we cannot conver direct objects we need keys and values for it and it it can't conver it it will return [] empty 

// how to add multiple values in array 

const s1 = 100
const s2 = 200
const s3 = 300

console.log(Array.of(s1,s2,s3));

