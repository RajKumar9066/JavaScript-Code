// object in js

//singleton - kisi bhi constructor se banta hai, apne tarha ka ek hi object hai.
// literal se ni banta hai.

// constructor eg :- object.Create

// object literals

const JsUser = {
    name: "Raj",
    age: 18,
    location: "Jaipur",
    email: "rajkumar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// two ways to call objects 
// console.log(JsUser.email) we will use mostly this case

console.log(JsUser["email"]) // interview question

// Ques - how will you use symbol as a key and print the value.

const mySym = Symbol("Key1")
const JsUser2 = {
    [mySym] : "myKey1",
}

console.log(JsUser2[mySym]);

/////////////////////////////////////**************//////////////////////////////////////////////

// functions in objects

JsUser.greeting = function(){
    console.log("Hello User");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());


//this keyword - same object ko reference dene ke lie use krtr hai, uske andar ki sari propersties usko mil jati hai 

JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
}
console.log(JsUser.greetingTwo());



