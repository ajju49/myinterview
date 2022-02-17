

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ [SLICE] $ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 

// let myFish = ['angel', 'clown', 'mandarin', 'sturgeon', 'abc','fgh', 'mno','pqr']


// console.log(myFish.slice(2,-4))

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ [SPLICE] $ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 


// const months = ['Jan', 'FEB','MARCH', 'April', 'MAY', 'June', 'JULY', 'AUG'];
// months.splice(3,4,'###');

// console.log(months);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ [FIND] $ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 


//  const array1 = [5, 12, 8, 130, 44];

// console.log(array1.find((element ) => element > 40));





// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ [SOME] $ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 


// const array1 = [1, 2, 3, 4, 5];
// const array2 = ['a','b','c','d','e'];


// // checks whether an element is even
// const even = (element) => element > 4;

// console.log(array1.some(even));
// // expected output: true

// // console.log(array.some((ele)=>ele>4));
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ [every()] $ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 



// const array1 = [1, 30, 39, 59, 10, 13];

// const below = (ele) => ele < 60;

// console.log(array1.every(below));
// // expected output: true

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ [find()] $ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 13);

// console.log(found);


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ [findIndex()] $ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 

// const array2 = [5, 12, 8, 130, 44];

// const abc = (element) => element > 13;

// console.log(array2.findIndex(abc));

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ [filter()] $ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((ele)=> ele.length > 8)

// console.log(result); 

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ [toString() + replace()] $ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 


// const array = [1, 5, 'abc', 'xyz', 8, 'pqr','xyz','XYZ']

// const tostr = array.toString();
// console.log(tostr);
// console.log(tostr);
// const regex = /xyz/gi
// const spl = tostr.replace(regex, 'ajinkya')

// console.log(spl);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ [foreach()] $ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 

// const array = [1,2,3,4,5,6,7,8,9,10]

// array.forEach((ele)=> console.log(ele * 2) );

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ [map()] $ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 
// const array = [ 1,2,3,4,5,6,7,8,9,10]

// array.map((ele)=> console.log(ele *5));

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ [forloop[()] $ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 
// const array = [ 1,2,3,4,5,6,7,8,9,10]

// function abc (array){
//     for(let i=1; i<=array.length; i++){
//         let output = [i] * 7;
//         console.log(output);
//       }
 

// }
// abc(array);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ [ fill ()] $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// const array1 = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];

// // fill with 0 from position 2 until position 4
// console.log(array1.fill('#',2,4));


let  str="my name is akash"

function toupper(para){
const a=para.split(" ")
return a.map((word) => word[0].toUpperCase() + word.slice(1));
}
document.write(toupper(str))