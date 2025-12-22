// const students = ["Nam", "Hoa", "Huy", , , , ,"MindX"];

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

let students = ["Nam", "Hoa", "Huy"];
let studentsCopy = [];
studentsCopy[0] = "Van Anh";
for(let i = 1; i <= students.length; i++){
    studentsCopy[i] = students[i - 1];
}
console.log(studentsCopy);

const myTeam = ["Ngo Khong", "Bat Gioi", "Duong Tang"]
for(let value of myTeam){
    console.log(value);
}