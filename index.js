// // For inputArray = [1, 2, 1], elementToReplace = 1 and subtractionElem = 3, the output should be arrayReplace(inputArray, elementToReplace, substrationElem) = [3, 2, 3].

// const arrayreplace = (inputArray, elementToReplace, substrationElem) => {
//   const result = inputArray.map((num) =>
//     num === elementToReplace ? substrationElem : num
//   );
//   console.log(result);
// };

// // !!arrayreplace([1, 2, 1, 4, 5, 6, 1, 9, 1], 1, 4);

// // Day 2

// // Write a function that returns the sum of two numbers.
// // Write a function that returns the sum of all numbers regardless of # of params.

// // Example

// // For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.

// // Input/Output

// // Hints

// // [time limit] 400ms (js)
// // [input] integer param1

// // Arithmetic Operators
// // Rest Operators
// // forEach()

// // Guaranteed constraints:

// // Guaranteed constraints:

// // -100 ≤ param1 ≤ 1000.

// // -100 ≤ param2 ≤ 1000.

// // [input] integer

// // [input] integer param2

// // The sum of the two inputs

// const addTwoNumbers =(a ,b)=>{
//     const result = a+b
//     console.log(result)
// }

// const allNumberSum =(...numbers)=>{
//     let total = 0;
//     numbers.map(num=> total+=num)
//      console.log(total)
// }

// allNumberSum(1 , 3, 5, 1)
// addTwoNumbers(3, 5)


// question 3 use console .log() to display the current year.
const newDate = new Date()

console.log(newDate.getFullYear())


//question4 create two vaiables for frist and last name concatenate and log them

// const frist ="Shazidul"

// const last = "Shamim"

// console.log(frist +" "+ last)

// question 5 track the value of a variable by logging it before and after updating

// let a = 12; // if you use const you will found an error 

// console.log(a)
// a = 32;
// console.log(a)

// question 6 use console.error() to simulate an error message

// console.error("Something went wrong")

// question 7 the square of the number 12 to this console.
console.log(12*12) 

//Print the type of a variable holding the value true

var a = true
console.log(typeof(a))
// question 9 CREATE A VARIABLE holding your age and log whether it's greater than 18

const age = 20

if(age >18) console.log(true)
    else console.log(false)