let score = 33
let score2 = "33abc"

//first we should check the type of data.for actual type.

// we can use two types for typeof function 1 - console.log(typeof score); 2 - console.log(typeof(score));

console.table([score,score2]);
// then conert them
let variables = Number(score2);

// then we should also check the actual value inside it.
console.log(variables);

//for null = 0; undefined = nan;

//Boolean case.
 let userLoggedIn = 1;
 console.log(typeof userLoggedIn);

 let BooleanConversion = Number(userLoggedIn);
 console.log(BooleanConversion);

//  for 1 = true, 0 = false , " " - false, for any value = true