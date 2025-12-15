/**
 * Primitive JavaScript types
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. Undefined
 * 5. Null
 * 6. Symbol
 * 
 * Objects, Arrays, Functions... are non-primitive types
 */

// let firstName = "John"; 
// let lastName = 'Doe';
// console.log(firstName + " " + lastName);

// // let a=10;
// // let b=20;
// // console.log(a + b);
// // console.log(a - b);
// // console.log(a * b);
// // console.log(a / b);
// // console.log(a % b); // modulus - chia lay du
// // console.log(a ** 3); // exponentiation - luy thua

// // a++, a--, ++a, --a

// let a = 10;
// console.log(++a);
// console.log(a++);
// console.log(a);

// a+=10; // a = a + 10
// console.log(a);

// //-=, *=, /=, %=, **=

// let name="Kiet"
// let major="IT"

// // template string (template literal)
// let content = `My name is ${name}. I study ${major}.`;
// console.log(content);

console.log(10 > 5);

if(10%2 === 0){
    console.log("10 la so chan");
}

console.log(true && true); // AND true
console.log(true && false); // false

console.log(true || false); // OR true

// falsey values: 
// 1.false, 
// 2.0, 
// 3."", 
// 4.null, 
// 5.undefined, 
// 6.NaN