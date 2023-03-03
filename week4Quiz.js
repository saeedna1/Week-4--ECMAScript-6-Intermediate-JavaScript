// week 4 - Quiz

/* 1 - Rewrite the following function as an arrow function:
function createFullName(firstName, lastName) {
    return firstName + " " + lastName;
    }
console.log("Saeed" + " " + "Adem");*/

const createFullName = (firstName, lastName) => firstName + " " +lastName;
console.log("Saeed" + " " + "Adem");





/* 2 - Rewrite the following function as an arrow function:
function doubleNumber(number) {
  return number * 2;
}*/

let number = 10
const doubleNumber = (number) => number *2;
console.log(number)






/* 3 - Rewrite the following function as an arrow function: 
function getEvenNumbers(array) {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
} */

let index = 0
function getEvenNumbers(inputArray) {

  let evenNumbers = [];

  for (let index of inputArray) {
    if (index % 2 === 0) {
      evenNumbers.push(index);
    }
  }
  return evenNumbers;
}
console.log((index));







/* 4 - Compare Field Values:

An array of customer objects, customers, will have the following schema:*/
 
   let firstCustomers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
];
console.log (firstCustomers,"name") 



//error
 firstCustomers = firstCustomers[0]
if (firstCustomers.name.charAt(0) == "C") {
        
   }
   console.log("name's first letter matches");
   
if (firstCustomers.name.charAt(0) == 'c') {
    
}
console.log("name's first letter matches");








/* 5 - Undefined Comparison:
An array of customer objects, customers, will have the following schema:*/

 let secondCustomer = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
   //more customer objects with the same schema
];

var street, city, zip, state


 //error
if (secondCustomer.address !== street){
}
console.log("street field has a vaue");


if (secondCustomer.address !== city){
}
console.log("city field has a vaue");


if (secondCustomer.address !== zip){
}
console.log("zip field has a vaue");


if (secondCustomer.address !== state){
}
console.log("state field has a vaue");







/*  6 - Another Comparison:

An array of customer objects, customers, will have the following schema:*/

let thirdCustomer = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
   //more customer objects with the same schema
];

thirdCustomer = "membershipLevel"
if (thirdCustomer.membershipLevel == "Gold"){   
}
console.log("Gold");


if (thirdCustomer.membershipLevel == "Silver");{
}
console.log("Silver");

if (thirdCustomer.membershipLevel == "Platinum"){
}
console.log("Platinum");








/* 7 - This question puts everything together!  

Premise:  A product owner on your development team believes they've seen a pattern as to which customers purchase the most items.  If a customer matches ANY one of the criteria suggested, then they should be added into the new result array.  The result array will be returned by the function.

To verify, you've been asked to write a function that does the following:

Processes an array of customer objects
Returns a new array that contains only the customers that match ANY of the following criteria:
name starts with a 'C' -- convert to uppercase for comparison
address contains no undefined fields
the city is Peoria and the state is AZ
membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too
Note: 

Accessing properties within an object requires the use of dot notation.   
Your task is to create the comparisons that solve the above requirements. 
To start this question, you are given the following:
An array of customers named customers
The function,  and a call to the function. -- all that is missing is the comparison logic
The for-loop to traverse the array.  Notice the variable name within the for-loop!*/

const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    {
        name: "Jojo",
        address: {
            street: "4 Tupple Street.",
            city: "Milwaukee",
            zip: "50505",
            state: 'WI'
        },
        membershipLevel: 'SLIVER',
        age: 32
    },

    {
        name: "Pickle",
        address: {
            street: "4 Tupple Street.",
            zip: "50505",
            state: 'WI'
        },
        membershipLevel: 'SLIVER',
        age: 32
    },

    {
        name: "cickle",
        address: {
            street: "4 Tupple Street.",
            zip: "50505",
            state: 'WI'
        },
        membershipLevel: 'SLIVER',
        age: 32 
    },

    {
        name: "Jimmy",
        address: {
            street: "4 Tupple Street.",
            city: "Peoria",
            zip: "50505",
            state: 'AZ'
        },
        membershipLevel: 'SLIVER',
        age: 32
    },

    {
        name: "Debbie",
        address: {
            street: "5678 N Main Street",
            zip: "03055",
            state: 'NH'
        },
        membershipLevel: 'SLIVER',
        age: 21
    },
   



];

//error
let matchingCustomers = (custArray) => {
    let resultArray = [];
    for (let customer of custArray) {
        if (customer.name.charAt().toUpperCase() === "C") {
            if (customer.address.street !== undefined &&
                customer.address.city !== undefined &&
                customer.address.zip !== undefined &&
                customer.address.state !== undefined) {
                if (customer.address.city === 'Peoria' && customer.address.state === 'AZ') {
                    if (customer.membershipLevel === "GOLD" ||
                        customer.membershipLevel === "PLATINUM" ||
                        (customer.membershipLevel === "SILVER" && customer.age < 29)) {
                        resultArray.push(customer);
                    } else {
                        console.log(`${customer.name} doesn't fit criteria!`);
                    }
                }
            }
        }
    }
    return resultArray;
}
console.log(customers);
   