//working with string, numbers and boolean - Works as pass by value  
let num1 = 100;
let num2 = num1;
console.log( num1, num2 );
num1 = 200;
console.log( num1, num2 );
num2 = 300;
console.log( num1, num2 );

let string1 = 'Sneha';
let string2 = string1;
console.log( string1, string2 );
string1 = 'Samuel';
console.log( string1, string2 );
string2 = 'hi';
console.log( string1, string2 );

let bool1 = true;
let bool2 = bool1;
console.log( bool1, bool2 );
bool1 = false;
console.log( bool1, bool2 );

//working with arrays - Works as pass by reference
const array1 = ['one', 'two', 'three', 'four'];
const array2 = array1;
console.log( array1, array2 );
// array1[3] = 'five'; 
console.log( array1, array2 );//this affects the original array too! So instead we create a copy instead using slice(), concat(), spread or Array.from()
const array2Copy = array1.slice();
console.log(array2Copy); //comment array[1] = 'five' to execute from this line onwards
array2Copy[3] = 'five';
console.log( array2Copy, array1 ); 
const array3 = [].concat(array1);
console.log( array3 );
const array4 = [...array1]; //spreading into array
array4[3] = 'hi there';
console.log( array4, array1 );
const array5 = Array.from(array1);
console.log( array5, array1 );    

//working with objects -  Works as pass by reference
const obj1 = {
    name: 'sneha',
    age:80
};
const obj2 = obj1;
console.log( obj1, obj2 );
obj1.residence = 'mumbai';//this affects both the original arrays since pass by reference is used. So instead we create a copy instead using Object .assign() and spread
console.log( obj1, obj2 );
const obj1Copy1 = Object.assign( {}, obj1, { number: 100} );
console.log( obj1Copy1, obj1, obj2 );
const obj1Copy2 = { ...obj1}; //spreading into object
console.log( obj1Copy2, obj1, obj2 );
///But this Object.assign() works only 1 level deep of nesting. Eg.
const person = {
    name: 'sneha',
    college: 'kjsce',
    social: {
        twitter: '@snehasam',
        facebook: 'snehasam'
    }
};
console.log( person );
const personCopy1 = Object.assign( {}, person );
console.log( personCopy1 , person );
console.log( personCopy1.social );
personCopy1.social.facebook = 'snehaatfacebook';
console.log ( person.social, personCopy1.social );   //social being at level 2, both person and personCopy are updated 
///Using JSON.stringify() and JSON.parse()
const personCopy2 = JSON.parse( JSON.stringify (person) );
console.log( personCopy2, person );
personCopy2.social.twitter = '@coolsneha';
console.log( person.social, personCopy2.social );
person.social.twitter = '@notsocoolsneha';
console.log( person.social, personCopy2.social );
