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

// !!var a = true
// !!console.log(typeof(a))
// question 9 CREATE A VARIABLE holding your age and log whether it's greater than 18

// !!const age = 20
// !!
// !!if(age >18) console.log(true)
// !!else console.log(false)

// question 10. Log the result of 100 /0 and observe the output

// !!console.log(100/0)


// question 11. Declare a variable using let and log the value

// !!let name = "Hello World"
// !!console.log(name)
// !!name = "Hello Bangladesh"
// !!console.log(name)

// question 12. Create a constant to store the value of PI and log it


const pi = Math.PI
// !!console.log(pi)

// question 13. Reassign a value to a variable declared with let and log the result 

let b =12
b= 32
//!!  console.log(b)


// 14 .  Check the type of null and log it.

//!!console.log(typeof(null)) // null er type is awalays object
//!console.log(null===null) true

//15 . Create a vaiable with a number as a string {e.g. "25"} and log its type

const number = "24"
console.log(typeof(number))

//16. create 3  variable of type string , number , and boolean, and log their values

//!! let aa = "string" , bb = 12 , cc = true

//!! console.log(aa , bb , cc )

// 18. Declare a variable without assigning a value log its type

let noAssign 
// !!console.log(noAssign)

//19.Create a variable with undefined and log its type

//!! console.log(typeof(noAssign)) // undefine
//!! console.log(typeof(NaN)) // number

// 20 Use const to create an array. Try reassigning the array and obserb the error

//!! 

const array = [1 , 2 , 3, 4 ,5]
// array = 23
// !!console.log(array)

// ?? Loops(10 question)
//21. Write a for loop to print numbers from 1 to 50
let sum = 0
for(let i = 1 ;i <= 50; i++){
    //  sum = sum + i
    // console.log(i++)
}

// console.log(sum , "from for loop")

//22 . Use a while loop to sum the numbers from 1 to 10

let a  = 1;

while(a<10){
    sum = sum + a
    a++;
}

// console.log(sum , "from while loop")

//23 . Create a for ... of loop to log each character of the string "javascript"

let str = "javascript";
for (let char of str){
    // console.log(char)
}


//24. Write a for loop that skips even numbers between 1 and 20.

for(let i =1 ; i  <=20 ; i++ ){
   if( i%2 === 1){
    // !!console.log(i)
   }
}


