// Arithmetic Operators
let a = 10, b = 5;
console.log("Addition:", a + b);   // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b);   // 2
console.log("Modulus:", a % b);   // 0
console.log("Exponentiation:", a ** b); // 100000

// Assignment Operators
let x = 10;
x += 5; // x = x + 5
console.log("Updated x:", x); // 15

// Comparison Operators
console.log(a == b);   // false (equal check)
console.log(a === "10"); // false (strict equality)
console.log(a > b);    // true 

// Logical Operators
let isTrue = true, isFalse = false;
console.log("AND:", isTrue && isFalse); // false
console.log("OR:", isTrue || isFalse);  // true
console.log("NOT:", !isTrue); // false

// Ternary Operator
let result = (a > b) ? "A is greater" : "B is greater";
console.log(result);  // A is greater

// Typeof Operator
console.log(typeof a); // number
console.log(typeof "Hello"); // string

// Bitwise Operators
console.log(5 & 1);  // 1 (AND)
console.log(5 | 1);  // 5 (OR)
console.log(5 ^ 1);  // 4 (XOR)
console.log(5 << 1); // 10 (Left Shift)
console.log(5 >> 1); // 2 (Right Shift)

// Using Spread Operator
let nums = [1, 2, 3];
let newNums = [...nums, 4, 5];
console.log("Spread Operator:", newNums); // [1,2,3,4,5]

var A={name:"madhu",
    age:20
    }
console.log(typeof(A))
