//CHAPTER 2 

//Exercise 2.1

// function loop(){
//     let l = "";
//     for(let i=0; i < 7; i++){
//         l +=  "#";
//         console.log(l);
//     }
//     return l;
// }
// loop();


//Exercise 2.2

// function fizzBuzz(){
//     for(let i=1; i <= 100; i++){
//         if (i % 3 == 0){
//             console.log("Fizz")
//         }
//         else if (i % 5 == 0){
//             console.log("Buzz")
//         }
//         else{
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();

// function fizzBuzz2(){
//     for(let i=1; i <= 100; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             console.log("FizzBuzz")
//         }
        
//         else if (i % 3 == 0){
//             console.log("Fizz")
//         }
//         else if (i % 5 == 0){
//             console.log("Buzz")
//         }
//         else{
//             console.log(i);
//         }
//     }
// }
//fizzBuzz2();


//Exercise 2.3

// let b = "";
// const firstRow = "# # # # ";
// const secondRow = " # # # #";

// for ( let i = 0; i < 8; i++ ) {
//     if(i%2==0){
//         b += `${firstRow} \n`;

//     }
//     else{
//         b += `${secondRow} \n`;
//     }
// }

// console.log(b);
    


// CHAPTER 3 - FUNCTIONS 

// Exercise 3.1 Minimum

// function min(num1, num2){
//     if(num1 > num2){
//         return num2;
//     }
//     else if(num1 < num2){
//         return num1;
//     }
//     else{
//         return `equal`;
//     }
// }
// console.log(min(5,6));


// Exercise 3.3 Bean Counting

// function countBs(str){
//     return countChar(str,"B");
// }


// function countChar(str, ch){
//     let a = str.split('');
//     let count = 0
//     for(var i = 0; i <= a.length; i++){
//         if(a[i]===ch){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countBs("BBC"));

// console.log(countChar("kakkerlak", "k"));




// Exercise 3.2 Recursion

// function isEven(n){
//     if (n===0){
//         return "even";
//     }
//     else if(n===1){
//         return "odd";
//     }
//     else if(n < 0) {
//          return isEven(-n);
//     }
//     else{
//         return isEven(n-2);
//     }
// }
// console.log(isEven(-1));




//CHAPTER 4 

//Exercise 4.2 Reversing an array

// function reverseArray(arr){
//     let reversedArr = [];
//     for(var i = arr.length-1; i>=0; i--){
//         reversedArr.push(arr[i]);
//     }
//     return reversedArr;
// }
// console.log(reverseArray(['h','a','m','m','a','d']));


//Exercise 4.1 The Sum of a range

// function range(num1, num2){
//     let array = [];
//     for(var i = num1; i <= num2; i++){
//         array.push(i);
//     }
//     return array;
// }

// function sum(range){
//     let add = 0;
//     for (let i of range) {
//         add += i;
//     }
//     return add;
// }


// console.log(range(1,10));
// console.log(sum(range(1, 10)));





