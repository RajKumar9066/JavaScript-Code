// functiond

function addTwoNumber(number1, number2){ // parameters
    console.log(number1 + number2);

}
addTwoNumber(3,4) //arguments

// some more ways to do so 

function addnum(num1 , num2){
    let result = num1 + num2
    return result
}

const result = addnum(4,5)
console.log("result = ",result);

function addnum(num1 , num2){
    
    return num1 + num2
}
console.log(addnum(3,6));

// another example

function userLogin(userName){
    return `${userName} just logged in`
}

//userLogin("raj") // will return nothing as we have not tell him to print something

console.log(userLogin("Raj"));


// one real senario where we use rest operator (cartValue)

function cartItemPrice(...price){
    return price
}

console.log(cartItemPrice(200,300,400,2000));
// will return all values in form of array

// interview question what will be the output?
function cartItemPrice(val1,val2,...price){
    return price
}
console.log(cartItemPrice(200,300,400,2000)); // first 2 values will be stored in val1 and val2 rest will be printed

// object ko functions mai kaise pass krte hai 

const user = {
    username : "rajkumar",
    myage : 21
}
function handelobject(myobject){
    console.log(`username is ${myobject.username} and his age is ${myobject.myage}`);
}
handelobject(user) // tip : make check about type safety

// we can also do this directly

function handelobject2(myobject){
    console.log(`username is ${myobject.username2} and his age is ${myobject.age}`);
}

handelobject2({
    username2 : "raju",
    age : 21
})

// for arrays 

const myArray = [30,32,40,34]
function handelArrays(someArrays){
    return someArrays[1]
}

console.log(handelArrays(myArray));