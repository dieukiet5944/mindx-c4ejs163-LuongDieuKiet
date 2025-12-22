const users3 = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 34 },
    { id: 3, name: "Charlie", age: 22 },
];

for (let user of users3) {
    if (user.name === "Bob") {
        console.log(user);
    }
}
