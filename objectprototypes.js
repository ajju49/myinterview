// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [ assign ] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// // Static methods
// // Object.assign()
// // Copies the values of all enumerable own properties from one or more source objects to a target object.

// // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
// //  It returns the modified target object.

// const target = { a: 1, b: 4, c: 5 };
// const source = { b: 8, c: 3, d: 9 };

// const result = Object.assign(target, source);

// console.log(result);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [ create ] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 


// Object.create()
// Creates a new object with the specified prototype object and properties.

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
//   const neww =  Object.create(person);
   
//   neww.name = 'ajinkya';
//   neww.surname = 'shinde';
//   neww.city = 'kasba';

//   neww.printIntroduction();

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [ entries ] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// // The Object.entries() method returns an array of a given object's own enumerable 
// // string-keyed property [key, value] pairs.
// //  This is the same as iterating with a for...in loop, 
// //  except that a for...in loop enumerates properties in the prototype chain as well.

// const object1 = {
//     name: 'ajinkya',
//     surname: 'shinde',
//     city: 'pune'
//   };
//   const object2 = {
//     name: 'aaaa',
//     surname: 'ssss',
//     city: 'ppp'
//   };
//   for (const [key, value] of Object.entries(object2)) {

//     console.log(`${key}: ${value}`);
//   }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [ freeze ] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// //Object.freeze()
// // Freezes an object. Other code cannot delete or change its properties.

// const obj = {
//     prop: 100
//   };
  
//   Object.freeze(obj);
  
//   obj.prop = 500
//   delete obj.prop

  
//   console.log(obj.prop);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [ fromEntries ] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // Object.fromEntries()
// // Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).

// const entries = ([
//     ['name', 'ajinkya'],
//     ['surname', 'shinde'],
//     ['city' ,'pune']
//   ]);
  
//   const obj = Object.fromEntries(entries);
  
//   console.log(obj);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [ getOwnPropertyDescriptor ] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 


// // Object.getOwnPropertyDescriptor()
// // Returns a property descriptor for a named property on an object.

// const object1 = {
//     property1: 100,
//     property2 : 200,
//     property3 : 300
//   };
  
//   const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
 
//   console.log(descriptor1.value);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [ getOwnPropertyNames ] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // Object.getOwnPropertyNames()
// // Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
// const object1 = {
//    sports: 'football',
//    hobby: 'cooking',
//    interest: 'swimming'
//   };
  
//   console.log(Object.getOwnPropertyNames(object1));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [ keys ] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // // Object.keys()
// // // Returns an array containing the names of all of the given object's own enumerable string properties.
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };
  
//   console.log(Object.keys(object1));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [ seal ] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // // Object.seal()
// // // Prevents other code from deleting properties of an object.

// const object1 = {
//     property1: 42
//   };
  
//   Object.seal(object1);
//   object1.property1 = 330;
//   console.log(object1.property1);
 
  
//   delete object1.property1; // cannot delete when sealed
//   console.log(object1.property1);
  
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [ setPrototypeOf ] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// Object.setPrototypeOf()
// Sets the object's prototype (its internal [[Prototype]] property).

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [ values ] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // // Object.values()
// // // Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };
  
//   console.log(Object.values(object1));