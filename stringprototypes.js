// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [AT] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// String.prototype.at(index)
// Returns the character (exactly one UTF-16 code unit) at the specified index. Accepts negative integers, which count back from the last string character.


// const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let index = 15

// console.log(`at  ${index} is line present is ${string.at(index)}`) ;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [charAt] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// String.prototype.charAt(index)
// Returns the character (exactly one UTF-16 code unit) at the specified index.

// const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let index = 17

// console.log(`at  ${index} is line present is ${string.charAt(index)}`) ;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [charCodeAt] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.charCodeAt(index)
// // Returns a number that is the UTF-16 code unit value at the given index.

// const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let index = 0

// console.log(`at  ${string.charCodeAt(index)} is line present is ${string.charAt(index)}`) ;

// // //charcode of 11 is 76

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [concat] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 


// String.prototype.concat(str [, ...strN ])
// Combines the text of two (or more) strings and returns a new string.

// const str1 = 'ajinkya';
// const str2 = 'shinde';

// console.log(str1.concat(' ', str2));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [includes] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.includes(searchString [, position])
// // Determines whether the calling string contains searchString.

// const string = " hi i am ajinkya shinde . living in pune"

// const word = 'shinde'

// const result = string.includes(word)

// console.log(result);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [endsWith] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.endsWith(searchString [, length])
// // Determines whether a string ends with the characters of the string searchString.

// const string = " hi i am ajinkya shinde . living in pune"

// console.log(string.endsWith('pune'));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [indexOf] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.indexOf(searchValue [, fromIndex])
// // Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.

// const string = "hi i am ajinkya shinde . living in pune"
//  const searchterm = 'shinde'

//  console.log(string.indexOf(searchterm));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [lastIndexOf] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.lastIndexOf(searchValue [, fromIndex])
// // Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

// const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZAB";

// const search = 'A';

// console.log(string.lastIndexOf(search));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [match] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // // String.prototype.match(regexp)
// // // Used to match regular expression regexp against a string.

// const string = "hi i am ajinkya shinde . living in pune"

// const regex = /shinde/gi;

// const found = string.match(regex);
// console.log(found);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [padEnd] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.padEnd(targetLength [, padString])
// // Pads the current string from the end with a given string and returns a new string of the length targetLength.

// const str1 = 'ajinkya';

// console.log(str1.padEnd(30, '.'));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [padStart] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.padStart(targetLength [, padString])
// // Pads the current string from the start with a given string and returns a new string of the length targetLength

// const str1 = 'Ajinkya';
// console.log(str1.padStart(30, '.'));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [repeat] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.repeat(count)
// // Returns a string consisting of the elements of the object repeated count times.
//  const name1 = "ajinkya"

//  console.log(name1.repeat(5 ));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [replace] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.replace(searchFor, replaceWith)
// // Used to replace occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.
// const p = 'hare ram hare ram ram ram hare hare';

// console.log(p.replace('ram', 'krishnaaa'));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [replaceAll] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.replaceAll(searchFor, replaceWith)
// // Used to replace all occurrences of searchFor using replaceWith. searchFor may be a string or Regular
//  Expression, and replaceWith may be a string or function.

// // // Used to replace occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression,
//  and replaceWith may be a string or function.
// const p = 'hare ram hare ram ram ram hare hare';

// console.log(p.replaceAll('ram', 'krishnaaa'));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [search] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.search(regexp)
// // Search for a match between a regular expression regexp and the calling string.

// const string = "hi i am ajinkya shinde . living in pune"

// console.log(string.search('ajinkya'));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [slice] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.slice(beginIndex[, endIndex])
// // Extracts a section of a string and returns a new string.

// const string = "012345678901234567890123456789"; 

// console.log(string.slice(4));
// console.log(string.slice(1,15));
// console.log(string.slice(-4));
// console.log(string.slice(-10,-2));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [split] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.split([sep [, limit] ])
// // Returns an array of strings populated by splitting the calling string at occurrences of the substring sep.

// const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

// console.log(string.split(''));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [strtsWith] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.startsWith(searchString [, length])
// // Determines whether the calling string begins with the characters of string searchString.

// const str1 = 'jay shree ram';

// console.log(str1.startsWith('jay'));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [substring] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.substring(indexStart [, indexEnd])
// // Returns a new string containing characters of the calling string from (or between) the specified index (or indeces).

// const string = "123456789"

// console.log(string.substring(2, 7));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [toLocaleLowerCase] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.toLocaleLowerCase( [locale, ...locales])
// // The characters within a string are converted to lowercase while respecting the current locale. 

// const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// console.log(`EN-US: ${str.toLocaleLowerCase('en-US')}`)
// // For most languages, this will return the same as toLowerCase().

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [toLocaleUpperCase] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.toLocaleUpperCase( [locale, ...locales])
// // The characters within a string are converted to uppercase while respecting the current locale.

// const str = "abcdefghijklmnopqrstuvwxyz"

// console.log(`EN-US: ${str.toLocaleUpperCase('en-US')}`);


// // For most languages, this will return the same as toUpperCase().

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [toLowerCase] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.toLowerCase()
// // Returns the calling string value converted to lowercase.
// const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// console.log(str.toLowerCase());

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [toString] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.toString()
// // Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

// So: just plain String() returns a string primitive.
//  new String(xyz) returns an object constructed by the String constructor.

// const stringObj = new String('foo');

// console.log(stringObj);
// // expected output: String { "foo" }

// console.log(stringObj.toString());
// // expected output: "foo"

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [toUpperCase] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.toUpperCase()
// // Returns the calling string value converted to uppercase.

// const str = "abcdefghijklmnopqrstuvwxyz"

// console.log(str.toUpperCase());

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [trim] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.trim()
// // Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard.

// const str = "           ABCDEFGHIJKLMNOPQRSTUVWXYZ          "

// console.log(str);

// console.log(str.trim());

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [trimStart] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.trimStart()
// // Trims whitespace from the beginning of the string.

// const str = "           ABCDEFGHIJKLMNOPQRSTUVWXYZ          "
// console.log(str)

// console.log(str.trimStart());

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [trimEnd] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// // String.prototype.trimEnd()
// // Trims whitespace from the end of the string.

// const str = "           ABCDEFGHIJKLMNOPQRSTUVWXYZ          "
// console.log(str)

// console.log(str.trimEnd());

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ [valueOf] @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// String.prototype.valueOf()
// Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.
// So: just plain String() returns a string primitive. 
// new String(xyz) returns an object constructed by the String constructor.
// const str = new String('ABCDEFGHIJKLMNOPQRSTUVWXYZ')

// console.log(str);
// console.log(str.valueOf());

