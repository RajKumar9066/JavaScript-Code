// ways to create array

const myArray = [0,1,2,3,4,5]
const myArr2 = new Array("raj","Amit","Anish")

console.log(myArr2[1]);

// some function sin array
console.log(myArray.push(99)); // add
console.log(myArray.pop()); //delet from last 

console.log(myArr2.unshift("Atul")) // add at first index
console.log(myArr2.shift()); // deelte from last index

console.log(myArr2.includes("Raj")); // checks

console.log(myArray.indexOf(3)); // returns position or index

// array binding 

const newArr = myArr2.join()
console.log(myArr2);
console.log(typeof newArr);

// join bind to krta hai or sath mai string mai bhi convert kr deta hai.

////////////******//////////

// important topic slice vs splice

const demo = [1,3,4,5,6,7]
console.log("A",demo);

const mya1 = demo.slice(1,3)
console.log(demo);

console.log("B",demo);
const mya2 = demo.splice(1,3)
console.log("C",demo);
console.log(demo);

// splice operation original array ko manipulate krta hai.

// operations to add two arrays 

const array1 = ["Raj","Amit","Anish"]
const array2 = ["Atul","Anshuman","Tanay"]

array1.push(array2);
// wrong way

const new_arr = array1.concat(array2)
console.log(new_arr);
// right way
// push existing array return karta hai pr concat new array return krta hai 

// another way to do this i.e spread 
const all_new_arr = [...array1,...array2]
console.log(all_new_arr);

// special case 

const unorganised = [1,2,3[1,3,4],5,7[4,6,[3,4]]]
const organised = unorganised.flat(Infinity)
console.log(organised);



