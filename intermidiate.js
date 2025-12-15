
//25. Use a do... while loop to log numbers from 5 to 1.

var aa = 5
do{
    // !!console.log(aa)
    // 
    aa--
}
while(aa>0)

//??26. Create a for loop that calculates the factorial of 5

let fact = 1

for(let i = 5; i>0;i--){
  fact = fact*i
}

// console.log(fact)

//?? 27 Write a nested loop to print a 3*3 grid of numbers.
var hold = 1
for(let i =1 ; i<4 ; i++){
    let str = "";
    for(let j = 1 ; j<4 ; j++){
        str+=`${hold}`
        hold++
    }
    // console.log(str)
}

// 28 use a for loop to reverse an array [1,2,3,4]

const arr =[1,2,3,4 ,5];
// arrad.reverse()
// console.log(arrad)

// !!const reverceArray=(orgArray)=>{
//     const  revrceArray=[];

//     for(let i=orgArray.length-1; i>=0;i--){
       
//         revrceArray.push(orgArray[i])
//     }
//     return revrceArray
// !!}

//!! !!const orginal = [1,2,3,4,5,6,7]

// const reverse = reverceArray(orginal)
// console.log("reverse",reverse)
// console.log("orginal",orginal)

// !!Don't use function 

const orginalArray = [1,2,3,4,5];
const reverceArray = [];

// using for loop

//?? for(let i = orginalArray.length-1 ; i >=0 ; i--){
//     reverceArray.push(orginalArray[i])
//     console.log(orginalArray[i] , i)
//?? }

// console.log(reverceArray , orginalArray.length)
//!! use for of

for(let arr of orginalArray){
    reverceArray.unshift(arr)
}
console.log(reverceArray , orginalArray.length)

// 29. Write a while loop that logs numbers from 1 to 100 divisible by 5

//30. Use a for in loop to iterate over an object and log its keys.


//Arrays(10 Question)

// 31.