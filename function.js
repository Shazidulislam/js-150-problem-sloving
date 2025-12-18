// !!5.Function (10 Question)

// 41. Write a function to check if a number is even or odd.
const checkOddEvenNumber = (number) => {
  if (number % 2 === 0) {
    console.log(number, "This is Even Number");
  } else {
    console.log(number, "This is odd Number");
  }
};
checkOddEvenNumber(56);
// 42. Create a function to calculate the area of a circle with a given radius.
const circleArea = (radius) => {
  const pi = Math.PI;
  const result = pi * radius * radius;
  return result;
};
const r = 7;
console.log(circleArea(r));

// 43. Write a function that accepts an array and returns the sum of its elements.
const sumofArray = (array) => {
  let sum = 0;
  if (array.length > 0) {
    // for(let arr of array){
    //     sum+=arr

    // }
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  }
  console.log(sum);
};
let orginalArray = [2, 3, 9];
console.log(orginalArray);
sumofArray(orginalArray);
// 44. Create a function that checks if a string starts with a specific character.

const stringWithChar = (str, char) => {
  return str[0] === char;
};
console.log(stringWithChar("hello", "h"));
console.log(stringWithChar("hello", "p"));

// 45. Write a function to find the maximum of two numbers.
const findLargeNumber = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

console.log(findLargeNumber(50, 20));

// 46. Create a function that takes a number and returns its factorial
const factorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact
};
// !!    if (n === 0 || n === 1) return 1;
//   !! return n* factorial(n-1)

console.log(factorial(5), "factorial");
// 47. Write a function that accepts a string and returns its reverse.
const reversString = (str) => {
  // !!return str.split("").reverse().join("")
  let reversed = "";
  for (let char of str) {
    // reversed += char ;//!প্রতিটা char পুরাতনের string এর পরে add হচ্ছে
    reversed = char + reversed; //!প্রতিটা নতুন char পুরাতনের string এর আগে লাগানো হচ্ছে
  }
  return reversed;
};
console.log(reversString("shazidul"));

//48. Write a function to find the largest number in an array.

const findLargestNumber = (array) => {
  //    !return Math.max(...array);
  let maxNumber = array[0];
  //  for(let i =1; i<array.length;i++){
  //    if(array[i]>maxNumber){
  //     maxNumber = array[i];
  //    }
  //  }
  for (let arr of array) {
    if (array[arr] > maxNumber) {
      maxNumber = array[arr];
    }
  }
  return maxNumber;
};
const lagreNum = findLargestNumber([12, 3, 4, 6, 9, 30, 34, 2]);
console.log(lagreNum);
