// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [ assign ] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // // program to clone the object using object.assign()

// const person = {
//     name: 'priya',
//     age: 25,
//     city: 'pune'
// }

// const clone = Object.assign({}, person)

// console.log(clone);

// // console.log(clone.name);

// clone.name = 'akki'
// console.log(clone);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [ clone by spread operator ] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// const person = {
//     name: 'priya',
//     age: 25,
//     city: 'pune'
// }

// const clone = {...person};

// console.log(clone);

// clone.city = 'varkala';

// console.log(clone);

// const array = [1,2,3,4,5,6,7,8,9]

// const clone = [...array]
// console.log(clone);
// clone.reverse();
// console.log(clone);

// // const spl = clone.slice(2,-2)
// // console.log(spl);

// array.splice(4,1,'#')
// console.log(array);

// const years = [1991 , 2007 , 1995 , 1993 , 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++){ 
//   ages.push(2021 - years[i]);
// }
// console.log(ages);


// const array = [1,2,3,4,5,6,7,8,9]

// for(i=10;i<=20;i++){
//   array.push(i)
// }
// console.log(array);


// const abc = "ajinkya shinde 1016 kasba peth pune shinde pratik"

// // console.log(abc.replaceAll ('shinde', '###'));
//  const regex = /shinde/gi;

// //  const newresult = abc.replace(regex);
// //  console.log(newresult);
// console.log(abc.replace(regex, 'hihi'));

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// const regex = /Dog/i;
// console.log(p.replace(regex, 'ferret'));
// // expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"
