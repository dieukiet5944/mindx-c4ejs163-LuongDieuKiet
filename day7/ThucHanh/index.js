//bai 1: Tinh tong tu 1 den 100
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log(`Tong 1 den 100 la: ${sum}`);

//bai 2: 
for (let i = 0; i <= 100; i++){
if(i%15 == 0){
    console.log(i);
}
}

//bai 3:
let n = 5;
let giaiThua = 1;
for (let i = 1; i <= n; i++){
    giaiThua *= i;
}
console.log(`Giai thua cua ${n} la: ${giaiThua}`);

//bai 4:
for (let i = 2; i <= 9; i++){
    for (let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

