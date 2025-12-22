const users: string[] = ["Alice", "Bob", "Charlie"];

type User = {
    id: number;
    name: string;
    age: number;
    isAdmin: boolean;
};

const user2: User[] = [
    { id: 1, name: "Alice", age: 30, isAdmin: false },
    { id: 2, name: "Bob", age: 25, isAdmin: true },
    { id: 3, name: "Charlie", age: 35, isAdmin: false },
];

const myNumber: number[] = [1, 2, 3, 4, 5];

// generic type
const user3: Array<User> = [
    { id: 4, name: "David", age: 28, isAdmin: true },
    { id: 5, name: "Eve", age: 22, isAdmin: false },
];

const myNumber2: Array<number> = [1, 2, 3];
const myString: Array<string> = ["X", "Y", "Z"];
const mixedArray: Array<number | string> = [1, 2, "A", "B"];

//tuple
const point: [number, number] = [10, 20];
const info: [id: number, name: string, age: number, address: string] = [
    1,
    "Alice",
    30,
    "123 Main St",
];

const info2: [id: number, name: string, age: number, address?: string] = [
    2,
    "Nam",
    30,
];

