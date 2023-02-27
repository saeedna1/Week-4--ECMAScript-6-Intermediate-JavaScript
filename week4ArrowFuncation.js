//Week 4 - Arrow Functions


/* Monthly Payment:
Convert the following function myFunction into an arrow function. Refer to the new function as monthlyPayment.*/

/*function myFunction(yearlyPayment){
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2);
}*/

//let monthlyPayment = yearlyPayment => (yearlyPayment / 12).toFixed(2);

a = "monthlyPayment"
let monthlyPayment = (yearlyPayment) => {
    let monthly = yearlyPayment /12;
    return monthly.toFixed(2);
}
console.log(monthlyPayment(a));

//Which of the following is the correct syntax when no arguments are passed?
/*way this option is correct
let myFunction = () => { return "Test Successful!"; }
Because we have used a return here, that implies use of a block body (with { } ). 
Additionally, the parentheses can only be omitted if the function has a single simple parameter. 
If it has multiple parameters, no parameters, or default, destructured, or rest parameters, 
the parentheses around the parameter list are required.*/







/* Pythagorean theorem:
Convert the following function myFunction into an arrow function. Refer to the new function as pythagoras.
function myFunction(num1, num2) { return Math.sqrt((num1*num1)+(num2*num2)); } */
var a = "num1"
var b = "num2"
let pythagoras = (num1, num2) => Math.sqrt((num1*num1)+(num2*num2));
console.log(pythagoras(a,b));

/*Arrow functions can contain either a block body (using { } and containing an explicit return statement),
or a concise body (a single expression).  TRUE*/






/*Template Literal:
Convert the following function myFunction into an arrow function. Refer to the new function as returnNumber.*/
/*function myFunction(num) { 
    return "Your number is ${num}";
}*/

var num = 1
const returnNumber = (num) => `Your number is ${num}`;
console.log(returnNumber(num));
//Arrow functions require curly braces if code is on more than one line. (TR






/* A More Complex Function:
Convert the following function myFunction into an arrow function. Refer to the new function as fancyAlgorithm. */
/*function myFunction (num1, num2, num3){
    let value = 0;
    for (let i = 0; i < num3; i++){
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 * 10));
}*/
a = 8;
b = 5;
c = 10;
let fancyAlgorithm = (num1, num2, num3) => {
    let value = 0;
   for (let i = 0; i < num3; i++) {
       value = (value + num2) * num1;
   }
   return value / (num1 * (num3 * 10));
}
console.log(fancyAlgorithm(a, b, c,));
//Arrow functions always require one or more arguments?.  FALSE







/*Square Root:
Convert the following function myFunction into an arrow function. Refer to the new function as returnSquareRoot.
function myFunction(num) { return Math.sqrt(num); }*/
var a = 1
let returnSquareRoot = (num) => Math.sqrt(num);
console.log(returnSquareRoot(a));

// arrow function with a concise body (only a single expression do not require the return keywork.)  TRUE







/*Addition:
Convert the following function myFunction into an arrow function. Refer to the new function as returnSum.
function myFunction(a,b) { return a+b; } */
a = 4
b = 6
let returnSum = (a, b) => {
    return a + b;
}
console.log(returnSum(a,b));

// Arrow function were introduced in javascript wiht ES6.  TRUE.








/* Revert:
Convert the following function myFunction into an arrow function. Refer to the new function as revert.
function myFunction(value){ return !value; } */
a = 10
let revert = (value)  => !value;
console.log((a));
//Arrow functions require a return statement when they exceed one line.  TRUE.

