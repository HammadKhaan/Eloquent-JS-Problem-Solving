// CHAPTER 3 - FUNCTIONS 

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

// // function isEven(n){
// //     if (n===0){
// //         return "even";
// //     }
// //     else if(n===1){
// //         return "odd";
// //     }
// //     else if(n < 0) {
// //          return isEven(-n);
// //     }
// //     else{
// //         return isEven(n-2);
// //     }
// // }
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

function range(num1, num2){
    let array = [];
    for(var i = num1; i <= num2; i++){
        array.push(i);
    }
    return array;
}

function sum(range){
    let add = 0;
    for (let i of range) {
        add += i;
    }
    return add;
}


//console.log(range(1,10));
console.log(sum(range(1, 10)));

