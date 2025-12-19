//Bai 1: Tinh dien tich va chu vi hinh chu nhat
let lenght = 10;
let width = 5;
let area = lenght * width;
console.log("Dien tich hinh chu nhat: " + area);
let perimeter = 2 * (lenght + width);
console.log("Chu vi hinh chu nhat: " + perimeter);

//Bai 2: Chuyen giay thanh gio, phut, giay
let seconds = 36550;
let hours = Math.floor(seconds / 3600);
let minutes = Math.floor(seconds % 3600 / 60);
let remainingSeconds = seconds % 60;
console.log(`${seconds} giay = ${hours} gio, ${minutes} phut, ${remainingSeconds} giay`);

//Bai 3: Tinh luy thua
let so = 2;
let luythua = 3;
let result = Math.pow(so, luythua);
console.log(`${so} mu ${luythua} = ${result}`);

//Bai 4: Tinh trung binh 3 so
let a = 6;
let b = 7;
let c = 8;
let average = (a + b + c) / 3;
console.log(`Trung binh cong cua ${a}, ${b}, ${c} la: ${average}`);