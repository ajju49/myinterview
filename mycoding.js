// ******************** [fullstack cafe] *[mycoding]*********************
// -------------------------[ *** at end of string ]-[ajnk]-----------------
// const myname = "ajinkya";

// const firstthreeletters = myname.slice(0,3);
// console.log(firstthreeletters);

// const padding = firstthreeletters.padStart(myname.length, "*")
// console.log(padding);

//------------------------ [lucky 7 ]-------------------------------------------

// const myarray = [2, 1, 5, 7, 7, 7, 1, 0];

// function lucky_sevens(arr) {
//     // if less than 3 elements then this challenge is not possible
//   if (arr.length < 3) {
//     return "not possible";
//   }

//   // because we know there are at least 3 elements we can
//   // start the loop at the 3rd element in the array (i=2)
//   // and check it along with the two previous elements (i-1) and (i-2)
//   for (var i = 2; i < arr.length; i++) {
//       if (arr[i] === 7 && arr[i - 1] === 7 && arr[i - 2] === 7) {
//       console.log("true");
//     //   break;
//     } else {
//       console.log("false");
//     }
// }
// }

// lucky_sevens(myarray);
//-----------------------------[clock]-[ajnk]-------------------------------------

// var shorthand = 12;

// const longhand = prompt("enter the position of minute hand");

// function calculateangle(longhand) {
//   if (longhand >= 12) {
//     console.log("enter no below 12");
//   } else {
//     let result = (longhand / 12) * 360;
//     console.log(result);
//   }
// }

// calculateangle(longhand);

// ---------------------------[sum of several array ]-[ajnk]----------------------------------------------------
// const input = prompt("enter lower num")
// const input2 = prompt("enter higher num")

// function findallmultbythree(low, high){

//     let array = [];
//     for(let i= low; i<= high; i++){

//         if( i % 3 === 0){
//             array.push(i)
//         }
//     }
//     return array;
// }

// const result = findallmultbythree(input, input2);
// console.log(result);

// ----------------------------[count odd]-[ajnk]-[reduce]---------------------------------------------------------------

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function allodds(ajnk) {
//     const odd = ajnk.filter((x) => x % 2).reduce(function (acc, curr) {
//         acc = acc + curr;
//         return acc;
//     }, 0);

//     return odd
// }

// const abc = allodds(array);
// console.log(abc);

// ----------------------------[count odd]-[ajnk]--------------------------------------------------------

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// function allodds(arr) {
//   let sum = 0;

//   //  for(let i=0; i<=arr.length; i++){
//   //      if(i % 2 === 1){
//   //          sum = sum + i;
//   //      }
//   //  }
//   //  console.log(sum);

//   //   ****************************[ forOf ] *****************************************
//   // for(let i of arr){
//   //     if(i % 2 === 1){
//   //         sum = sum + i;
//   //     }
//   // }
//   //  console.log(sum);
//   //  ******************** [forEach ]***********************************************
//   arr.forEach((i) => {
//     if (i % 2 === 1) {
//       sum = sum + i;
//     }
//   });
//   console.log(sum);
// }

// allodds(array);

// -----------------------------------[sum of array of number by adding 1 to each ]-------------------------------------------------------

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sum(arr) {
//   let result = 0;
//    for(let i=0; i<=arr.length ; i++){
//        result = result + (i+1) ;
//       }
//       console.log(result);

//   //   //   ****************************[ forOf ] *****************************************

//   //  for(let i of arr){
//   //      result = result + (i +1)
//   //  }
//   //  console.log(result);

//   //   //  ******************** [forEach ]***********************************************

// //   arr.forEach((i) => {
// //     result = result + (i+1 );
// //   });
// //   console.log(result);
// }
// sum(array);

// ------------------------------[chk if reverse is same of original ]-[ajnk]----------------------------------------------------------
// // const string = prompt("enter any string");
// const string = "nitin"

// const split = string.split("");
// // console.log(split);

// const reverse = split.reverse();
// // console.log(reverse);

// const join = reverse.join("")
// // console.log(join);

// if (string === join){
//     console.log("is same");
// }
// else{
//     console.log("not same");
// }

// ----------------------- [ conact array] ----------------------------------------------
// const array = [1,2,3,4,5,6,7,8,9]

// const newarray = array.concat(array);

// console.log(newarray);
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// const array = [1,2,3,4,5,6,7,8,9, 10]

// const newarray = [...array, ...array]

// console.log(newarray);

//------------------------------[ reverse each word ]-------------------------------------------------------
// var string = "Welcome to this Javascript Guide!";
// function reverseBySeparator(string, separator) {
//   console.log(string.split(separator).reverse().join(separator)) ;
// }

// var reverseEntireSentence = reverseBySeparator(string, "");
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// --------------------------------------[multi of 3 num. ]-[ajnk]-------------------------------------------------------

// function mul(x){
//   return function(y){
//     return function(z){
//       return x * y * z ;
//     }
//   }

// }

// console.log(mul(10)(5)(2));

// -----------------------------------------[ empty an array ]------------------------------------------------------

// let array = [1,2,3,4,5]

// array = []
// // ++++++++++++++++++++++++++++++++
// // while(array.length){
// //   array.pop()
// // }
// // +++++++++++++++++++++++++++++++++++
// // array.length = 0
// // +++++++++++++++++++++++++++++++++++
// // array.splice(0, array.length)

// console.log(array);

// --------------------------------------[addition of 2 num but one no is fixed ]-[ajnk]-------------------------------------------------------------

// function createbase(ABC){
//   return function(N){
//    console.log(ABC + N);
//   }
// }

//  let addsix = createbase(10);
//  addsix(6)

// ---------------------------------------[finding duplicates ]---------------------------------------------------------------------------

// const array = [1,2,3,4,5,6,8,9,1,5,4,6,8,6]

// const newarray = new Set(array);

// console.log(newarray);
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function news(array){
//  result = []
//  for (let i of array){
//    if(result.indexOf(i) === -1){
//      result.push(i)
//    }
//  }
//  console.log(result);
// }

// news(array)

// -----------------------------------[number is an integer]-[ajnk]----------------------------------------------------------------
// const num = prompt("enter any value")
// function  checkinteger(num){
//   if(num % 1 === 0){
//     console.log("in an integer");
//   }
//   else{
//     console.log("is not an integer");
//   }
// }

// checkinteger(num)

// ---------------------------------------------[ curring ]-[ajnk]--------------------------------------------------------

// function curryUnaryFunction(x){
//   return function (y){
//     return function (z){
//       return x * y * z ;
//     }
//   }
// }

// // const curryUnaryFunction = a => b => c => a + b + c;
// // curryUnaryFunction (1); // returns a function: b => c =>  1 + b + c
// // curryUnaryFunction (1) (2); // returns a function: c => 3 + c
// const abc = curryUnaryFunction (1) (2) (30);

// console.log(abc);

// ******************************* [count occurance] ***********************************************************
// const string = prompt('Enter a string: ');
// const string = "ilovepune"

// const Char = (str) => {
//     const counts = {};
//     for (const i of str) {
//       if (counts[i]) {
//         counts[i]++
//       } else {
//         counts[i] = 1
//       }
//     }
//     return counts;
//   }
//   const result = Char(string)
//   console.log(result);

// function Char(str){
//     let counts = {}
// for(let i of str){
//     if(counts[i]){
//       counts[i]++
//     }else{
//         counts[i] = 1
//     }
// }
// return counts;
// }
//  const abc= Char(string)
//  console.log(abc);

// **************************************[ addition of numbers in string ]****************************************
// const abc = "ajinkya494949"

// function sum(str){
//     let newarray= []
//     let result= 0;
// //  let neww = str.split("").filter(Number).map(Number).reduce((acc,curr)=> acc= acc+ curr)
//    let neww = str.split("").map(Number).filter(Number)
//    for(let i=0;i<neww.length; i++){
//        result = result + neww[i]
//     }
//     console.log(result);

// }
// sum(abc)
// *******************************************************************************************

// const namee = "grishma23101989";

// function chcknum(str) {
//   const result = str.split("").map(Number).filter(Number).reduce((acc,curr)=> acc = acc + curr)
//   console.log(result);
// //   let output = 0;
// //   for (let i = 0; i < result.length; i++) {
// //     output = output + result[i];
// //   }
// //   console.log(output);
// }
// chcknum(namee);

// *******************************************************************************************

// function sumstring(str) {

//     let sum = 0

//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(parseInt(str[i]))) {
//             console.log(str[i]);
//             sum += parseInt(str[i])
//         }
//     }
//     console.log(sum);
// }
// sumstring("grishma1989")

// ************************************[ table of 1 to 10 ]*******************************************************

// const numberr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function table(num, arr2) {

//   for (let i = 1; i < arr2.length; i++) {
//     for (let j = 1; i < num.length; j++) {
//       console.log(i + "*" + j + " = " + i*j);
//     }
//   }

// }

// table(numberr, array2);

//  -----------------------------------------------------------

// for(let a = 1;a<10;a++){
//     for(let b = 1;b<10;b++){
//         console.table(a + "*" + b + " = " + a*b)
//     }
// }

// ************************************[km to meter convertor ]********************************************************

// const numberr = prompt('enter a number to convert')

// function convertor(num){
//   const result  = num * 1000;
//   document.write(num +"km" + " " + " is equal to " + result + " " + "meter")
// }
// convertor(numberr)

// *************************************[sum of all numers in an array]*******************************************************

// const array = [1,2,3,4,5]

// function sum (arr){
//     let result = 0;
//  for(let i=0; i<arr.length; i++){
//    result = result + arr[i]
//  }
//  console.log(result)
// }
// sum(array)
// ********************************[reverse an array]*********************************************************

// const array = [1,2,3,4,5]

// function reversearray(array){
//     let rev = []
//   for(let i= array.length; i>=1; i--){
//       rev.push(i)
//   }
//   console.log(rev);
// }
// reversearray(array)
// ***********************************[ make first letter to uppercase ]********************************************************

// const string = "i am ajinkya shinde";

// function upperr(str){
//  const divide = str.split(" ")
//  console.log(divide);
// }
// upperr(string)
// **************************************************************************
// let  str="my name is akash"

// function toupper(para){
// const a=para.split(" ")
// return a.map((word) => word[0].toUpperCase() + word.slice(1));

// }
// const abc = toupper(str)
// console.log(abc);
// const regex = /,/gi
// const final = abc.toString().replace(regex, " ")
// console.log(final);
//  ************************************************************************************
// let  str="my name is akash"

// function toupper(para){
// const a=para.split(" ")
// return a.map((word) => word[0].toUpperCase() + word.slice(1))
// }
// const abc =(toupper(str))
// const result = abc.join(" ")
// console.log(result);

// *****************************[ sort array ]***********************************************************************

// const array = [5, 4, 6, 8, 2, 1, 9, 7, 6, 3];

// function sort(arr) {
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr
// }
// const result= sort(array);
// console.log(result);

// ******************************************************

// const array =[5,8,6,4,1,3,2,8,7,9]
// function sortGreatest(arr) {
//     // manually sort array from largest to smallest:
//     // loop forwards through array:
//     for (let i = 0; i < arr.length; i++) {
//
//       for (let j = i; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//           let temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//       };
//     };
//     return arr;
//   };

//   const result = sortGreatest(array)
//   console.log(result)

// *******************************[find negative]****************************************************

// const array= [5,7,-6,-8,1,5,4,-7,-9]

// function findneg(arr){
//     let result=[]
//  for(i=0; i<=arr.length; i++){
//      if(arr[i] < 0){
//          result.push(i)
//      }
//     }
//     // console.log(result)
//     return result;
// }
// const yyy= findneg(array)
// console.log(yyy)

// *******************************************[find max ]**************************************************

// const array = [5,7,5,15,3,1,55,6,4,9,11,5,3,2]

// function findmax(arr){
//     let max = 0;
//  for(let i=0; i<=arr.length;i++){
//      if(arr[i] > max){
//          max = arr[i]
//      }
//     }
//     console.log(max);
// }
// findmax(array)
// *************************************************************************************
// const abc = array.reduce((max,curr)=> {
//    if(curr > max){
//        max = curr
//    }
//    return max;
// },0)

// console.log(abc);
// **********************************************************************************
// const aaa = array.sort((p,q)=> p-q)
// console.log(aaa);
// // const result = []
// // const hhh = aaa.pop()
// // console.log(hhh);

// const myrslt = aaa.slice(-1)
// console.log(myrslt);

// *****************************[finding commons in array ]*[pranay]************************************************

// const array = [1, 2, 2, 3, 3, 4, 5, 5];

// function common(array){
//     let arrayforcommon = []
//     let arrayforUncommon =[]

//  for(let i of array){
//    if(arrayforcommon.indexOf(i)=== -1){
//     arrayforcommon.push(i)
//    }
//    else{
//     arrayforUncommon.push(i)
//    }
//  }
//  console.log(arrayforcommon)
// //  console.log(arrayforUncommon)
// }
// common(array)

// *****************************[ find second smll no] [pranay]**********************************************

// const array = [1,9,3,4,5,5,8,1,4]

// const op = array.sort()

// const result= op[1]
// console.log(result);
// ********************************[sort array ]***********************************************************

// const array = [1, 2, 2, 3, 3, 4, 5, 5];
// function sort(arr){
//   for(let i=0; i<arr.length;i++){
//       for(let j=0 ;j<arr.length;j++){
//           if(arr[i]< arr[j]){
//               let temp = arr[i]
//               arr[i]=arr[j]
//               arr[j] = temp;
//           }
//       }
//   }
//   return arr
// }
// const final = sort(array)
// console.log(final)

// ***********************************[ solve ] [avinash]***********************************

// var variable1 = 23;
// let variable2 = 89;
// function catchValues(){
//   console.log(variable1);
//   console.log(variable2);
// }
// catchValues();

// ************************************[ solve ] [avinash]********************************************************

// function normalFunc(){
//     var a = 34;
//     return 22;
//     console.log(a)
//   }
//   normalFunc()

// ************************************[ solve ] [avinash]**************************************

// 3 what  will be the ouput

// "a" === "b"

// ************************************[ spread nd rest parameter ] [avinash]**************************************

// const myarr = [1,2,3,4,5]

// const spread = [...myarr]
// console.log(spread);
// ******************************************
// function sum (...args){
//   let sum = 0;
//   for(let i  of args){
//       sum = sum + i;
//   }
//   console.log(sum);

// }
// sum(1,2,3,4,5,6,7,8,9,10)

// ***************************************[ fetch ]*[avinash ]*******************************************************

// fetch("url")
// .then((res)=> res.json())
// .then((data)=> console.log(data))

// ***************[ axios ]***********************************
// const aaa = axios.get('url')
// console.log(aaa);

// ***************************************[ sort ]*[avinash ]*[imp]******************************************************
// const A=[8,10,9,2,3]
// const B=[1,2,3,5,7]

// const concat = A.concat(B)
// // console.log(concat);

// function sort(arr){
//  for(let i=0;i<arr.length;i++){
//      for(let j=0 ;j<arr.length;j++){
//          if(arr[i]< arr[j]){
//              let temp = arr[i]
//              arr[i] = arr[j]
//              arr[j] = temp
//          }
//      }
//  }
//  console.log(arr)
// }
// sort(concat)

// ***************************************[ solve ]*[avinash ] [intersoft]******************************************************
// function showName(){
// console.log(name);
// // #########[ teporal dead zone]###########
// var name="Full Name";
// }
// showName()

// *********************************[ find out the second largest number  ]******************************************************************
// // 1. find out the second largest number
// let ranArray=[22,33,24,56,1000,44,22,12,1,888,9,5,4]

// function mysort(arr){
//  for(let i=0; i<arr.length;i++){
//      for(let j=0; j<arr.length;j++){
//          if(arr[i]<arr[j]){
//              let temp = arr[i]
//              arr[i] = arr[j]
//              arr[j] =temp
//          }
//      }
//  }
//  return arr
// }
// const abc = mysort(ranArray)
// console.log(abc)

// const secondlargest = abc[abc.length - 2]
// console.log(secondlargest)
// ***********************************************************
// const sortnew = ranArray.sort((a,b)=>b-a)
// console.log(sortnew)

// const secondlargest = sortnew[1]
// console.log(secondlargest)

// ***********************************[ find vowels ]*[avinash]************************************************************

// const myname = "jairadhekrishna"

// const vowels = ['a', 'e', 'i', 'o' , 'u']

// function findvowels(str){
//     blankarr =  []
//     let count = 0;
//  for( let i of str){
//      if(vowels.includes(i)){
//         blankarr.push(i)
//         count++
//      }
//  }
//  console.log(blankarr);
//  console.log(count);
// }
// findvowels(myname)

// **********************************************************

// const myname = "jairadhekrishna"

// function findvowels(str){
// const abc = str.match(/[aeiou]/gi)
// console.log(abc);
// }
// findvowels(myname)

// ********************************[ solve ]*[shivam ]*****************************************
// (function() {
//     console.log('this is the start');

//     setTimeout(function cb() {
//       console.log('Callback 1: this is a msg from call back');
//     });

//     console.log('this is just a message');

//     setTimeout(function cb1() {
//       console.log('Callback 2: this is a msg from call back');
//     }, 0);

//     console.log('this is the end');
//   })();

// ***********************************************************************************************
// const arr1 = ['collection', 'sample', 'data', 'value']
// const arr2 = ['data', 'val', 'collection']

// function finduni(arr1,arr2){
//     let blankarr=[]
//  for(let i=0;i<arr1.length;i++){

//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]===arr2[j]){
//            blankarr.push(j)
//         }
//     }
//  }
//  return blankarr
// }
// const abc =finduni(arr1,arr2)

// console.log(abc)

// ******************************************************************
// let a = ["1", "1", "2", "3", "3", "1"];
// let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log(unique);

// *********************************** [ find status true ]*********************************************
// let employees = [
//     {
//       "role": "senior",
//       "name": "first",
//       "status": true
//     },
//     {
//       "role": "lead",
//       "name": "second",
//       "status": false
//     },
//     {
//       "role": "lead",
//       "name": "third",
//       "status": false
//     },
//     {
//       "role": "junior",
//       "name": "fourth",
//       "status": true
//     },
//     {
//       "role": "senior",
//       "name": "none",
//       "status": true
//     }
// ]

// const newarray = employees.filter((el)=>{
//      return el.status === true
// })

// console.log(newarray);

// ********************************* [ find status true ]* [react ]*****************************************************

// import "./styles.css";

// export default function App() {
//   let employees = [
//     {
//       role: "senior",
//       name: "first",
//       status: true
//     },
//     {
//       role: "lead",
//       name: "second",
//       status: false
//     },
//     {
//       role: "lead",
//       name: "third",
//       status: false
//     },
//     {
//       role: "junior",
//       name: "fourth",
//       status: true
//     },
//     {
//       role: "senior",
//       name: "none",
//       status: true
//     }
//   ];

//   const onChange = () => {
//     for (let x of employees) {
//       if (x.status === true) {
//         console.log(x);
//       }
//     }
//   };
//   return (
//     <div className="App">
//       <button onClick={onChange}> Click Me! </button>
//     </div>
//   );
// }

// ********************************[ fibonacci ]******************************************************

// const number = prompt('enter the number')
// let n1=0 , n2= 1, temp;

// for (let i=1;i<=number;i++){
//     document.write(n1)
//  temp = n1 + n2;

//  n1 = n2;
//  n2 = temp;
// }

// ***************************************************************
// const number = prompt('enter the number')
//  let n1=0 ,n2=1 ,temp;

// for(let i=1;i<=number; i++){
//     document.write(n1);

//     temp = n1+n2
//     n1 = n2
//     n2 = temp

// }

// ******************************************************************************************

// //find unique values and duplicate values push in 2 different arrays

// let arr = [1, 2, 2, 3, 3, 4, 5, 5];

// // //find unique values
// // let arr1 = [...new Set(arr)];
// // console.log(arr1)

// //duplicate values

// let arr2 = arr.filter((value,index) => arr.indexOf(value)!= index)
// console.log(arr2)

// *********************************[code spilliting via React.lazy() loading method]*********************************************************

// // PARENT COMP
// const Content = React.lazy(() => import("./Content"));
// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <p>hi welcome to code splitting import method</p>;
//         <Suspense fallback={<h1 style={{ color: "red" }}>Content is comming soon..</h1>}>
//           <Content />
//         </Suspense>
//       </>
//     );
//   }
// }

// export default App;
// ***************************************
//CHILD COMP
// function Content() {
//     return (
//       <p>
//         Lorem type 1000 words here
//       </p>
//     );
//   }
//   export default Content;

// ************************************** [ Profiler ]* [react ]*****************************************

// import React, { Profiler } from "react";

// class ComponentDidUpdateee extends React.Component {
//   constructor() {
//     super();
//     console.warn("constructor");
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidUpdate(preprops, prestates, snapshot) {
//     //perstates & preprops are the arguments by this we can check that is previous state and current state are same or different.
//     console.warn("componentDidUpdate", prestates); // due to prestates prob the previous count will be printed in console.
//   }

//   callbackFunction = (
//     id, // the "id" prop of the Profiler tree that has just committed
//     phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
//     actualDuration, // time spent rendering the committed update
//     baseDuration, // estimated time to render the entire subtree without memoization
//     startTime, // when React began rendering this update
//     commitTime, // when React committed this update
//     interactions // the Set of interactions belonging to this update
//   ) => {
//     console.log(id, phase, actualDuration, startTime, commitTime,baseDuration, interactions);
//   };
//   render() {
//     console.warn("render");
//     return (
//       <div>
//         <h1>ComponentDidUpdate {this.state.count}</h1>;
//         <Profiler id="btn" onRender={this.callbackFunction}>
//           <button
//             onClick={() => {
//               this.setState({ count: this.state.count + 1 });
//             }}
//           >
//             Update Name
//           </button>
//         </Profiler>
//       </div>
//     );
//   }
// }
// export default ComponentDidUpdateee;

// ******************************* [ Profiler ]* [react ]***************************************************

// import React , {Profiler }from 'react'

// function Backdrop(props) {

//   mycallbackfun=(id, phase, startTime,commitTime) =>{
//         console.log(id, phase, startTime, commitTime );
//     }

//     return (
//         <div className='backdrop' >
//             <Profiler id='ajnk' onRender={mycallbackfun} >
//             <button onClick={props.closeme}> mala band kara</button>

//             </Profiler>
//         </div>
//     )
// }

// export default Backdrop  ;

// *********************************** [ find duplicate and unique] **[grishma]***************************************************

// let arr = [1, 2, 2, 3, 3, 4, 5, 5];

// //remove duplicate values:Using set
// let arr1 = [...new Set(arr)];
// console.log(arr1)

// //duplicate values

// // first method
// let arr2 = arr.filter((value,index) => arr.indexOf(value)!= index)
// console.log(arr2)

// // find unique values
// function unique1(arr1,arr2){
//     for(let i of arr2){
//             arr1.delete(i)
//         }
//          return arr1
//     }

//     let abc=unique1(arr1,arr2);
//     console.log(abc)

// *************************** [print 1 after 2 / 2 after 4 sec] *************************************************

// const array = [1,2,3,4,5]

// function print(array){
//   for(let i=0;i<=array.length;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, (i*i*1000-1000));
// }
//   }

// print(array)

// **************************************[ print array]*******************************************************

// const array = [1,2,3,4,5,6,7,8,9,10]

// function triangle(array){
//     let arr=[]
//     let neww =arr.toString()
// for(let i=0; i<=array.length;i++){
//     arr.push(i)
//     console.log(arr)
// }
// }
// triangle(array)

// ************************************************************
// const array = [1,2,3,4,5,6,7,8,9,10]

// function printfull(array){
//     let string = "";
//   for(let i=0;i<array.length;i++){
//       for(let j=0;j<array.length;j++){
//         string = string + [i];
//       }
//   }
//   string += "\n";
//   console.log(string)
// }
// printfull(array)

// *******************************[ reverse string ]************************************************

// var string = "i love javascript";

// function reverseBySeparator(string, separator) {
//   return(string.split(separator).reverse().join(separator)) ;

// }

// var reverseEntireSentence = reverseBySeparator(string, "");
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// console.log(reverseEachWord);

// *******************************[ by shubham ]***********************************************
// var strings = "i love javascript";

// function reversestring(str) {
//   return str.split("").reverse().join("");
// }

// const firstop = reversestring(strings);
// console.log(firstop);

// const secondop = firstop.split(" ").reverse().join(" ")
// console.log(secondop);

// ***************************************[ print num after every 2 sec ]**[ jennifer ]*****************************************************

//  function printnumaftr2sec(){
//    for(let i=0; i<= 20; i++){

//       setTimeout(()=>{
//          console.log(i)
//       },i*2000)

//    }
//  }
//  printnumaftr2sec()

// ***********************************[solve- guess  sequence ]**[jennifer]]**********************************************************

// console.log("first")

// setTimeout(()=>{
//   console.log("second")
// },0)

// let promise = new Promise((res, rej)=>{
//   console.log("third")
//   res("forth")
// })

// promise.then((val)=>{
//   console.log(val)
// })

// setTimeout(()=>{
//   console.log("fifth")
// },10)

// console.log("sixth");

//**********************************[reverse]* [darshan ]*********************************************

// const mystr = " my name is ajinkya"

// const op = mystr.split(" ").reverse().join(" ")
// console.log(op);

// **********************************[ count occurance ]**[darshan ]*************************************************

// const input = ['A','B','C','A','A']

// let output =  input.reduce((acc,curr)=>{
//   if(acc[curr]){
//     acc[curr] = ++acc[curr]
//   }else{
//     acc[curr]=1
//   }
//   return acc
// },{})

// console.log(output);

// ************************************************************
// const a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// let result = { };
// for(var i = 0; i < a.length; i++) {
//     if(result[a[i]]){

//       result[a[i]] = result[a[i]]+ 1;
//     }else{

//       result[a[i]] = 1;
//     }
// }

// console.log(result);

// *****************************[by shubham ]***************************************

// const array = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

// let output= {}
// array.forEach((e)=>{
//   if(output[e]){
//     output[e]++
//   }else{
//     output[e] = 1
//   }
// }
// )
// console.log(output)

// **********************************[find longest word ]**[darshan]***********************************************

// const mystr = "i am ajinkya shinde";

// function findLongestWord(str) {
//   var strSplit = str.split(' ');

//   var longestWord = 0;

//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//     }
//   }
//   return(longestWord);
// }
// const result = findLongestWord(mystr)
// console.log(result);

// *******************************[find longest word from string]*****************************************************
// //------ [sort method ] --------------
// const str = "I am shubham Pandkar mern stack developer...............";
// const longestword = (str) => {
//   const strarray = str.split(" ");
//   const sortedarray = strarray.sort((a, b) => {
//     return b.length - a.length;
//   });
//   return sortedarray[0];
// };              
// console.log(longestword(str));

//---------------[reduce method]---------------
// const str = "I am shubham Pandkar mern stack developer...............";
// function largeword(string) {
//     string = string.split(" ");
//     // string = string.map((word) => word.replace(/\./g, " ")); // regex is used for removing unnecessary characters
//     const longest = string.reduce((current, previous) => {
//       return current.length > previous.length ? current : previous;
//     });
//     return longest;
//   }
//   const result = largeword(str);
//   console.log(result);

// **********************************[find longest word ]**[darshan]***********************************************
// const array = ['i', 'am', 'ajinkya','shinde', 'from', 'pune']

// const abc = array.sort((a,b)=> b.length - a.length)
// console.log(abc)

// const result = abc[0]
// console.log(result);

// *************************************[count letters of word in array ]*[darshan]******************************************************
// const array = ['i', 'am', 'ajinkya','shinde', 'from', 'pune']
// const count = array.map((ele)=> ele.length)
// console.log(count);

// ********************************[addition of numbers in array ]***[darshan]**************************************************
// const array = [1,2,3,4,5]

// const result = array.reduce((acc,curr)=> acc=acc+ curr)
// console.log(result);

// *****************************[reverse string ]***[darshan]**************************************************

// const string = "full stack tutorials"

// const result = string.split("").reverse().join("")
// console.log(result);

// ******************************[curring problem ]***[darshan]*************************************************
// function greeter(a) {
//   return function (b) {
//     console.log(a + " " + b);
//   };
// }

// greeter("hello")("candidate");

// *********************************[ addition without plus operator ] ************************************************************ 



// function getSum(a, b){
//   while(b!=0){
//     var carry = a&b;  //calculate if is there any carry we need to add
//     a = a^b;   // a is used to hold the sum
//     b = carry<<1;  //b is used to hold left shift carry
//   }
//   return a;
// }

// document.write(getSum(7, 5))

// ************************************************************************************ 





// const reducer =  (state, action)=>{
//     return state
// }
    

          


// const [state, dispatch] = usereducer (reducer, initialState)



//  axios.get("url").then(res => console.log(res))  


//  fetch("url")
// .then((res)=>res.json)
// .then((data)=>console.log(data))





// function add(){
//     let result =33;
//     console.log(result);
// }

// function sub(){
//     let result =33;
//     console.log(result)
    
// }
// add();
// sub();



function abc(a){
    return function (b){
        console.log(a+ b);
    }
}
abc(5)(7)





















