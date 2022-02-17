// --------------------------------[myinterview]--------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// -------------------------[methods to create object ]---------------------------------------------------------
// ES6 constructor class
// class person{
//     constructor(name, age,city){
//         this.name = name;
//         this.age = age;
//         this.city = city;

//     }
// }

// const obj = new person("ajnk",49, "pune");
// const mokobj = new person("mokshali", 55, "mumbai")
// console.log(obj);
// console.log(mokobj);
// **********************************************************************

// // Object.create()
// // Creates a new object with the specified prototype object and properties.

// const person = {

//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. and surname is ${this.surname} i am from ${this.city} `);
//     }

//   };
// // // // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   const me = Object.create(person);

//   me.name = 'ajnk';
//   me.surname = 'shinde';
//   me.city = 'pune';

//   me.printIntroduction();
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const obj = new Object (person);

// obj.name = 'xxx';
// obj.surname = 'yyy';
// obj.city = 'zzzzz';

// obj.printIntroduction();

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// **************************************[ prototype chaining ] *************************************************************

// function person(fname, lname, age){

//     this.fname = fname,
//     this.lname = lname,
//     this.age = age

//     // this .fullname = function(){
//     //     console.log(this.fname+ " "+ this.lname+ " "+ this.age);   // initially we wrote fn in constrctor

//   }
// person.prototype.fullname = function(){    // now we create prototypr of function seperatly
//     // this.fname = fname,
//     // this.lname = lname,
//     // this.age = age

//     console.log(this.fname+ " "+ this.lname+ " "+ this.age);
// }

// let person1 = new person('ajnk', 'shinde', 55);
// console.log(person1);
// // let person2 = new person('xxx', 'yyy', 44);
// // console.log(person2);

// *************************************[call apply bind ]****************************************************************

// let printfullname =  function (){
//    console.log("my firstname is " + this.fname + " n last name is " + this.lname);
// }

// let person = {
//     fname : 'ajinkya',
//     lname : 'shinde'
// }

// const callresult = printfullname.call(person)
// console.log(callresult);
//******************************************************************************************************
//   function printfullname(city, state){
//     console.log("my firstname is " + this.fname + " n last name is " + this.lname + " from " + city +" "+ state );
//  }
//  let person = {
//     fname : 'ajinkya',
//     lname : 'shinde'
// }

//   printfullname.apply(person , ["pune", "maha"])

//******************************************************************************************************
// function invite(greeting1, greeting2) {
//     console.log(
//         greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//         );
//     }

// var employee1 = { firstName: "John", lastName: "Rodson" };

// var inviteEmployee1 = invite.bind(employee1);
// inviteEmployee1("Hello", "How are you?");

// ################################### [ first class function ] #################################################################
// //   // functions are first calss objects ....
// //   // first class functions are trated as variables
// //   // first calss functions can be passed to anather functions as an argument and return back
// //   //and can assign value to any varible

// const handler = () => console.log ('This is a click handler function');
// document.addEventListener ('click', handler);

// ################################### [ first order function ]--[ajnk]##############################################################
//first order functions are those fun. who doesnt accept another fun as argument and
// doesnt return function as value
// const firstOrder = () => console.log ('I am a first order function!');

// function firstOrderFunc(){
//     console.log ('Hello, I am a First order function');
// }

// function higherOrder(firstOrderFunc){
//     firstOrderFunc()
// }

// higherOrder(firstOrderFunc);
// -------------------------- [ uniary function ] -[ajnk]-------------------------------------------
// // function who accept on one argument and process it

// function add(a){
//     console.log(a + 5);
// }

// add(10)

// -------------------------------[function curring ]-[ajnk]------------------------------------------------------------------
// // curring is function who accepts multiple argument and turning it into sequence of function each with only
// // single argument
// // it turns n-ary [multiple] function into uniary function
// function sum(x){
//   return function(y){
//       return function (z){
//           console.log(x*y*z);
//       }
//   }
// }
// sum(2)(4)(4);

// -------------------------------------------[pure function]--------------------------------------------------------

// // in pure funcion return value only determined by its argument without any side effects

// var mult = 2;

// function multiply(num){
//    console.log(num * mult) ;
// }
// multiply(5)
// multiply(15)
// multiply(25)
// multiply(35)

// -------------------------------------------[ IIFE ]--------------------------------------------------------
// // immediately invoke function are the function that run as soon as it define.
// // primary reason to use it bcoz of data privacy
// // any variable declared in IIFE cannot be accessible from outside of function
// (function (){
//     let msg = "ajinkya";
//     console.log(msg);
// })
// ()

// -------------------------------------------[encoding and decoding URL]--------------------------------------------------------
// // // encodeURI() function is used to encode an URL. This function requires
// // // a URL string as a parameter and return that encoded string. decodeURI()
// // // function is used to deocde an URL.
// // //  This function requires an encoded URL string as parameter and return that decoded string.

// let uri = "https://ways-to-create-objects-in-javascript"
// console.log(uri);

// let encoding = encodeURI(uri)
// console.log(encoding);
// let decoding = decodeURI(uri)
// console.log(decoding);

// ------------------------------------------[memoization]------------------------------------------------------------
// //memoisation is technique to storing a resuly=t in cache
// //whien same problem statement occurs again , it can fetch the o/p from cache
// //otherwise compute the o/p

// function memoaddtion(){
//     let cache = {}

//     return(value) => {
//         if (value in cache){
//             console.log(" i am frm cache");
//             return cache[value]
//         }
//         else{
//             console.log("i m new output");
//             let result = value + 10;
//             cache[value] = result;
//             return result;

//         }
//     }
// }
// let addition = memoaddtion()
// console.log(addition(5));
// console.log(addition(5));
// console.log(addition(50));
// console.log(addition(50));
// console.log(addition(5));

// ------------------------------------------[closures]-[ajnk]-----------------------------------------------------------
// // // closures are combination of functions which are bundled together along with its lexical environment

// function newfunction() {
//   let b = 20;
//   y();
//   function y () {
//     z();
//     function z() {
//       console.log(b);
//     };
//   };
// }

// newfunction();
// *********************************[method 2 ] ***************************************
// function x() {
//     let b = 10;
//     y();
//   function y() {
//       console.log(b);
//     }
// }
// x();

// ----[module]--------------------------------------------------------

// Modules refer to small units of independent, reusable code and also act as
//  the foundation of many JavaScript design patterns.
//  Most of the JavaScript modules export an object literal, a function, or a constructor

// Below are the list of benefits using modules in javascript ecosystem

// Maintainability
// Reusability
// Namespacing

// -------------------------------------[ scope ]]------------------------------------------------------------------

// scope is accessibility of variable, function in a any part of code during runtime

// also defined as visibility of code in any part of code

// --------------------------------------[ promise ]--------------------------------------------------------------

// const promise = new Promise(resolve => {
//     setTimeout(()=> {
//       resolve("i m  resolved");
//     },3000)
// }, reject => {
//     reject("i m rejected")
// })

// promise.then(value => console.log(value));

// --------------------------------------[ nested promise ]--------------------------------------------------------------
// // The process of executing a sequence of
// // asynchronous tasks one after another using promises is known as Promise chaining.
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 2
//     return result * 3;
//   })
//   .then(function (result) {
//     console.log(result); // 6
//     return result * 4;
//   });

// -------------------------------------------------------------------------------------------
// let promise1 = new Promise((resolve, reject) => {
//     let result = {
//         mark = '90%'
//     }
//     resolve(result)
// });

// let promise2 = new Promise((resolve, reject)=>{
//     let result2 = {
//         marks2 = '80%'
//     }
//     resolve(result2)
// })

// let promise3 = new Promise((resolve, reject)=>{
//     let result3 = {
//         marks3 = "70%"
//     }
//     resolve(result3)
// })

// Promise.all([promise1, promise2, promise3])
//  .then((result) => {
//      console.log(result)
//  }).catch((err) => {
//      console.log(err);
//  });

// ------------------------------- [Promise.race ]--------------------------------------------------
// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 2000, 'one');
// });
// var promise2 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 1000, 'two');
// });

// Promise.race([promise1, promise2]).then(function(value) {
//   console.log(value); // "two" // Both promises will resolve, but promise2 is faster
// });

// --------------------------------------[use strict]--------------------------------------
// // The "use strict" directive was new in ECMAScript version 5.

// // It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

// // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

// // With strict mode, you can not, for example, use undeclared variables.

// // "use strict";
// x= 15
// console.log(x);

// --------------------------------------[ null ]---------------------------------------------
// const abc = null
// console.log(abc);
// console.log(typeof(abc));

//---------------------------------------[[to check capslock is on] --------------------------------------------------

// function enterInput(e) {
//     var flag = e.getModifierState("CapsLock");
//     if(flag) {
//         document.getElementById("feedback").innerHTML = "CapsLock activated";

//     } else {
//         document.getElementById("feedback").innerHTML = "CapsLock not activated";
//     }
//   }

//   enterInput()

// -------------------------------------------[ rest parameters ]-[ajnk]--------------------------------------------------------

// function sum (...args){
//   let sum = 0;
//   for(let i  of args){
//       sum = sum + i;
//   }
//   console.log(sum);

// }
// sum(1,2,3,4,5,6,7,8,9,10)



// -------------------------------------------[ cloning objects and join]-[ajnk]--------------------------------------------------------

// const target = {a:1, b:2, c:15}

// const mark = {b:3, c: 4}

// const combine = Object.assign(target, mark);
// console.log(combine);

// *************************[ spread op ]************************************************
// const abc = {...target}
// *******************************[json ]******************************************
// const abc = JSON.parse(JSON.stringify(target))
// console.log(abc);
// -------------------------------------- [object.seal ]------------------------------------------------------------
// // in seal existing property can be change but cannot delete
// const target = {
//     a:1,
//     b:2
// }

// Object.seal(target);
// target.a = 555;
// console.log(Object.isSealed(target));
// console.log(target);
// -------------------------------------- [object.freeze ]------------------------------------------------------------
// we cannot chng and delete in freeze 

//  const abc = {
//      a: 500
//  }
//  const xyz = Object.freeze(abc)
//  console.log(xyz);
// *****************************************************
//  delete abc.a
//  console.log(abc);

// ----------------------------------------[unary(+) operator ]---------------------------------------------------
// // // The unary(+) operator is used to convert a variable to a number.
// // If the variable cannot be converted, it will still become a number but with
// //  the value NaN. Let's see this behavior in an action.
// // 
// var x = "100";
// var y = + x;
// console.log(typeof x, typeof y); // string, number

// -------------------------------------[  advantage of a comma operator ]------------------------------------------------------
// for (var a = 0, b =10; a <= 10; a++, b--)

// ------------------------------------ [ typescript ]---------------------------------------------------------
// What is npm install -g typescript
// TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types,
//  classes, async/await, and many other features, and compiles to plain JavaScript.
//  Angular built entirely in TypeScript and used as a primary language. You can install it globally as

//  npm install -g typescript
// ------------------------------------ [ constructor ]---------------------------------------------------------

// class employee{
//  constructor(){
//          this.name = 'ajnk',
//          this.lname = 'shinde'
//  }
// }

// const emp1 = new employee()

// emp1.name = "xxx"
// console.log(emp1);

// ------------------------------------ [ thunk ]---------------------------------------------------------
// // thunk is function which delays the evaluation of the value
// //  it doesnt take any argument  , but give the value wherever u invoke the thunk
// const add = (a,b) => a + b;

// const thunk = () => add(2,3);

// const result = thunk()

// console.log(result);
// ------------------------------------ [ array to object ]---higher----------------------------------------------------

// const fruits = ['apple', 'mango', 'banana', 'chiku', 'jackfruit']

// const fruitsobject = {...fruits}
// console.log(fruitsobject);
// ------------------------------------ [ object to array ]-------------------------------------------------------

// const months = {
//     first: 'january',
//     second: 'feb',
//     third: 'march'
// }

// const xyz = Object.keys(months)
// console.log(xyz);

// const abc= Object.values(months)
// console.log(abc);

// ------------------------------------ [ creating new array dynamically ]-------------------------------------------------------

// const abc = new Array(5).fill('ajinkya')
// console.log(abc);
// ------------------------------------ [ css in console ]-------------------------------------------------------

// ------------------------------------ [ table in console ]-------------------------------------------------------
// console.log('%c ajinkya ','color: orangered; font-size: x-large; background: skyblue');

// const users = [{ "name":"John", "id": 1, "city": "Delhi"}, { "name":"Max", "id": 2, "city": "London"}, { "name":"Rod", "id": 3, "city": "Paris"} ];
// console.table(users);

// ------------------------------------ [ promise example ]-------------------------------------------------------

// function promise(a,b){

//  return new Promise(function(resolve, reject){

//     var c = a/b;

//     setTimeout( () =>{
//         if(a, b){
//             resolve(`ur ans is ${c}`)
//         }else{
//             reject(`failed to calculate`)
//         }
//      },2000)
// })
// }
// promise(10,0).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })


// ********************************** [HOC ]*[REACT]************************************************** 

// import "./App.css";
// import { useState } from "react";

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Higher order component</h1>
//       <HOCRed cmp={Counter} />,
//       <HOCGreen cmp={Counter} />
//     </div>
//   );
// };

// function HOCRed(props) {
//   return (
//     <h2 style={{ backgroundColor: "red", width: 150 }}>
//       red
//       <props.cmp />
//     </h2>
//   );
// }

// function HOCGreen(props) {
//   return (
//     <h1 style={{ backgroundColor: "green", width: 150 }}>
//       Green <props.cmp />
//     </h1>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Update
//       </button>
//     </div>
//   );
// }
// export default App;

// // ******************************[ fetch api ]********************************************************** 
// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

// ******************************* [fetch api] [covid 19]********************************** 

// fetch("https://api.covid19api.com/summary") // in brackets () is a promise & to consume data fetched by promise we use .
//   // then method
//   .then((data) => {
//     // now, data access by promise is in function named apidata
//     console.log(data);
//     return data.json(); // to get apidata in object form so we can handle it in future ,we use function json
//   })
//   .then((actualdata) => {
//     //     // here we get actual data which is in object format. so we can handle it accordingly
//     // console.log(actualdata);

//     console.log(actualdata.Countries[76]);
//     const mydata = actualdata.Countries[76];
//     document.getElementById(
//       "apiindia"
//     ).innerHTML = `The name of country is ${mydata.Country}. 
//      The totalconfirm cases are ${mydata.TotalConfirmed}. The total deaths are ${mydata.TotalDeaths} the total recover cases are ${mydata.TotalRecovered}`;
//   });
                  

// // *******************************[ axios ]**********************************************************
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })


// // ******************************[ bubbling and capturing ]*********************************************************************


// ------------------------------------------[index.html ]----------------------------------
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>

//     <style>
//         div{
//             min-width: 50px;
//             min-height: 50px;
//             border: 2px solid black;
//             padding: 40px;
//         }
//     </style>
// </head>
// <body>
    
//     <div class="" id="grandparent">
//         <div class="" id="parent">
//             <div class="" id="child"></div>
//         </div>
//     </div>

//     <script src="app.js"></script>
// </body>
// </html>

// ------------------------------------------[app.js]----------------------------------

// document.querySelector('#grandparent').addEventListener('click', ()=> {
//     console.log('grandparent clicked')
// },false);

// document.querySelector('#parent').addEventListener('click', ()=> {
//     console.log('parent clicked')
// },false);

// document.querySelector('#child').addEventListener('click', ()=> {
//     console.log('child clicked')
// },false);


// // in bubbling third argument is always false 
// // in capturing third argument is always true 

// // bubble travels from in to out
// // capture travels from out to in 

// // e.stopPropogation() used to stop further propogation in nested loop 


//*************************[throttling]******************************************************* */

//-------------------[index.js] --------------------------------------------------
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    
//     <button id="myid">click me</button>
//     <script src="app.js"></script>
// </body>
// </html>

// -----------------------------[app.js]----------------------------------------------------

// const throttle = (fn, delay) => {
//     let last = 0;
//     return (...args) => {
//      const now = new Date().getTime();
//      if (now - last < delay){
//          return;
//      }
//      last= now;
//      return fn(...args)
//     }
//   }
  
//   document.getElementById('myid').addEventListener('click', throttle((e)=>{
//       console.log('you clicked me');
//   }, 5000 ));


// **************************************************[prototype and prototypal inheritance ]************************************************************ 

// let object = {
//     name: "ajinkya",
//     surname: "shinde",
//     city: "pune",
//     getintro: function() {
//         console.log(this.name + "is" + "from" + "" + this.city);
//     } 
// }

// let object2 = { 
//     name: "monika"
// }


// object2.__proto__ = object;

// //object having keys name , surname, city , getintro

// // object2 having key only name

// //but in line 15 we definr object2.__proto__ = objet so , object2 inherites properties of object



// *************************************************[ pure component vs. react component ]************************************************************** 


// Difference between React.Component and React.PureComponent?
// Last Updated : 27 Jan, 2021
// A Component is one of the core building blocks of React. In other words, we can say that every
//  application you will develop in React will be made up of pieces called components. But React has two types of Components:

// React.PureComponent: It is one of the most significant ways to optimize React applications.
//  By using the pure component, there is no need for shouldComponentUpdate() Lifecycle Method
//   as ReactJS Pure Component Class compares current state and props with
//  new props and states to decide whether the component should re-render or Not.
// React.Component: But on the other hand, React.Component re-renders itself every
//  time the props passed to it changes, parent component re-renders or if the shouldComponentUpdate() 
//  method is called. It doesn’t optimize the React application. They are easy and fast to implement and a
//  lso are good for very small UI views where a re-render wouldn’t matter that much. They provide cleaner
//   code and fewer files to deal with.







































