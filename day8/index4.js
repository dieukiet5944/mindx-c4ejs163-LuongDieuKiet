let a=3;
let b=a;
console.log(a);
console.log(b);

b = 10;
console.log(b);
console.log(a);

// Cách copy sai
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);

arr2[0] = 100;
console.log(arr2);
console.log(arr1);
