//!! Arrays (10 question)

// question 31. Create an array of your top5 favorite movies and log it
const favoriteMovies = ["aaa" , "bbbb" , 'ccccc' , "ddd" , 'eeee'];

for(let i of favoriteMovies){
    // !!console.log(i)
}
// question 32. Find and log the second element of an array.

const arr = [1,2,3,4,4]
// !!console.log(arr[1])

// question33. add two new elements to the start on an array using .unshipt()

arr.unshift(9 , 3)
console.log(arr)

//34. Remove the last element of array and log the array

arr.pop()
// console.log(arr)

//35 Use .slice() to extract the first three element of an array.


console.log(arr.slice(0 ,3))

//!! 36.Find the index of a specific element in the array using .indexof()

var newArr = [1,2,3,4,5,6,7]
//!! console.log(newArr.indexOf(7))

// 37. Check if a value exists in an array using .inCludes().

console.log(newArr.includes(2))

//38. Combine two array [1,2] and [3,4] using .concat()
let arr1 = [1,2];
let arr2 = [3,4];

console.log(arr1.concat(arr2))


//!! v.v.i 39. Sort an array of number [5,2 , 9, 1] in ascending order.
let dessenArr = [11, 45, 9, 2, 23, 1, 10];

// for (let i = 0; i < dessenArr.length; i++) {
//   for (let j =   i + 1; j < dessenArr.length; j++) {
//     if (dessenArr[i] > dessenArr[j]) {
//       let temp = dessenArr[i];
//       dessenArr[i] = dessenArr[j];
//       dessenArr[j] = temp;
//     }
//   }
// }

for(let i = 0 ; i < dessenArr.length ; i++){
    for(let j = 1+i ; j < dessenArr.length ; j++){
        if(dessenArr[i]>dessenArr[j]){
            let temp = dessenArr[i];
            dessenArr[i] = dessenArr[j];
            dessenArr[j]=temp;
        }
    }
}

// console.log("from loop",dessenArr);
// !!using sort
dessenArr.sort((a, b)=>a-b)
// console.log(dessenArr)

// 40. Write a program that create a copey of an array without mutating the orginal.

const array = [1,2,3,4,5,6,7,8,9]
let array2 = [4,5, ...array]
const empty = []
for(let arr of array){
    empty.push(arr) 
}

console.log(array , "and" , array2)
console.log(empty , "empty array")

// 1.

// 2.

// 3.loop 

// 4.array 

//5.function
