
// Concat
//1st variant
// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];

// // const nums = num1.concat(num2)
// // console.log(nums) // [1, 2, 3, 4, 5, 6]

// function concat(arr1, arr2) {
//     let arrs = [arr1, arr2]
//     let final = []
    
//     for (let i = 0; i < arrs.length; i++) {
//       let currentArray = arrs[i]
//       for (let j = 0; j < currentArray.length; j++) {
//         final.push(currentArray[j])
//       }
//     }
    
//     return final
// }
// console.log(concat(num1, num2)); 


// 2nd variant

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// function concat() {
//     let final = []
//     let args = Array.from(arguments);
//     //     console.log(args);

//     args.forEach(arg => {
//       arg.forEach(num => final.push(num))
//     })
//     return final
//   }
//   console.log(concat(num1, num2)); 

//3rd variant

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
//   function concat(...args) {
//     let final = []
//     console.log(args);
//     args.forEach(arg => {
//       final = [ ...final, ...arg ]
//     })
//     return final
//   }
// console.log(concat(num1, num2)); 
 
//or

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// function concat(...args) {
//     let final = []
//     console.log(args);
//     args.forEach(arg => {
//               arg.forEach(val => final.push(val))
//             })
//     return final
//   }
// console.log(concat(num1, num2)); 


//Fill
// function myFill(arr, val, start, end) {
//   let resultArr = [];
//   if (start !== undefined && end === undefined) {
//     for (let i = 0; i < arr.length; i++) {
//       i < start ? resultArr.push(arr[i]) : resultArr.push(val);
//     }
//   } else if (start !== undefined && end !== undefined) {
//     for (let i = 0; i < arr.length; i++) {
//       i < start || i > end - 1 ? resultArr.push(arr[i]) : resultArr.push(val);
//     }
//   } else if (start === undefined && end === undefined) {
//     for (let i = 0; i < arr.length; i++) {
//       resultArr.push(val);
//     }
//   }
//   return resultArr;
// }

// console.log(myFill(["Aram", "Poghos", "Arik", "Noro"], "Armen", 2, 3));

//Find
// function myFind(arr, val){
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] === val){
//             return arr[i];
//         } 
//     }
//      return undefined
// }

// console.log(myFind([1,2,3], 3))


//FindIndex
// function myFindIndex(arr, val){
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] === val){
//             return i;
//         } 
//     }
//      return undefined
// }

// console.log(myFindIndex([1,2,3], 3))


// Flat
// let arr = [[1, 2],[3, 4],[5, 6],[7, 8, 9], [10, 11, 12, 13, 14, 15]];
// //let flatArray = [].concat.apply([], arr);
// let flatArray = [].concat(...arr);
// console.log(flatArray);

// Map
// let arr = [1, 2, 3, 4, 5];
//  function mymap(arr, mapFunc) {   
//       const mapArr = [];       
//      for(let i=0;i<arr.length;i++) {   
//               const result = mapFunc(arr[i], i, arr);    
//                   mapArr.push(result);  
//                   }   
//                    return mapArr;
//                 }
//                  ;
//                  const squareArr = mymap(arr, num => num ** 2);
//                  console.log(squareArr)


//Reduce
// let arr = [1, 2, 3, 4];
// const sumReducer = (accumulator, currentValue) =>accumulator + currentValue;
// function Myreduce(arr, reducer, initialValue) {  
//       let accumulator = initialValue === undefined ? 0 : initialValue;       
//        for(let i=0;i<arr.length;i++)       {
//         accumulator = reducer(accumulator, arr[i], i, arr);
//        }
        
       
//            return accumulator;}

//            const sum = Myreduce(arr, sumReducer);
//            console.log(sum); 
//            const sum2 = Myreduce(arr, sumReducer, 5);
//            console.log(sum2);


// Given an array. Determine whether it consists only of unique items or not.

// 1st variant
// function IfArrayIsUnique(arr) 
// {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) { 
//             return true; 
//         } 
//     } 
//     return false;   
// }
// console.log(IfArrayIsUnique([1,2,3,4]));  
// console.log(IfArrayIsUnique([1,2,1,4])); 

// 2nd variant
// function IfArrayIsUnique(arr) 
//     {
//         for (let i = 0; i < arr.length; i++) 
//         {
//             for (let j = i+1; j < arr.length; j++) 
//             {                  
//                     if (arr[i] == arr[j]) 
//                     {
//                         return false; 
//                     }

//             }
//         }
//         return true; 
//     }
// console.log(IfArrayIsUnique([1,2,3,4]));  
// console.log(IfArrayIsUnique([1,2,1,4]));  

// Determine if a word or phrase is an isogram. An isogram
// (also known as a "non pattern word") is a word or phrase without a repeating letter.

// const Isogram = (str) => {
    
//   const lowerCase = str.toLowerCase()
  
//   const result = lowerCase.split('').every((element,index)=>lowerCase.indexOf(element)===index)
  
//   return result

// }

// console.log(Isogram('ambidE xtRously')) 
// console.log(Isogram('patteRN')) 


