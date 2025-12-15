/**
 * superset of JavaScript -> Kiểm tra tính hợp lý của kiểu dữ liệu của JS -> Giúp phát hiện lỗi sớm hơn
 * 
 * trình duyệt không thể hiểu được TypeScript -> cần biên dịch (compile) TS sang JS
 * 
 * Cách biên dịch:
 * npx tsc <tên_file>.ts 
 */

// let a: number = 5;
// a = "Kiet"; // Lỗi: Type 'string' is not assignable to type 'number'

// let b:string = "Kiet";

// let c: boolean = true;

// interface Person {
//     name: string;
//     age: number;
//     description?: string; // optional property
// }

// let person: Person = {
//     name: "Kiet",
//     age: 21
// };

// type User = {
//     username: string;
//     password: string;
//     role: "admin" | "superAdmin" | "client"; // union type
// }

// const user: User = {
//     username: "kiet123",
//     password: "123456",
//     role: "teacher" // Lỗi: Type '"teacher"' is not assignable to type '"admin" | "superAdmin" | "client"'
// }