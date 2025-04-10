// Array Initialization
let a = [1, 2, 3, 4, 5];

console.log("Initial array:", a);
// push()
a.push(6); 
console.log("After push:", a);

// unshift()
a.unshift(0); 
console.log("After unshift:", a);

// splice() - Add 8 at index 2
a.splice(2, 0, 8); 
console.log("After splice (add):", a);

// pop()
a.pop(); 
console.log("After pop:", a);

// shift()
a.shift(); 
console.log("After shift:", a);

// delete
delete a[1]; 
console.log("After delete:", a);

// splice() - Remove 1 element at index 1
a.splice(1, 1); 
console.log("After splice (remove):", a);

// sort() and reverse()
let b = [7, 6, 5, 4, 7];
b.sort(); 
console.log("Sorted b:", b);

b.reverse(); 
console.log("Reversed b:", b);

// toString() and join()
let s = ["A", "B", "C", "D"];
console.log("toString:", s.toString());

console.log("join with '-':", s.join("-"));

// slice()
console.log("Slice b[1:4]:", b.slice(1, 4));

// at()
console.log("Element at index 2 of b:", b.at(2));

// find()
let nums = [1, 10, 5, 6, 14];
let res = nums.find(value => value > 5);
console.log("First element > 5:", res);

// Custom join
let ar = ["P", "A", "V", "A", "N"];
console.log("Joined with '*':", ar.slice(0, 5).join("*"));



















































































































// //Array Methods 
// var a=[1,2,3,4,5]
// //push()
// a.push(6)
// console.log(a)
// //unshift()
// a.unshift(0)
// console.log(a)
// //splice
// a.splice(2,0,8)
// console.log(a)
// //pop()
// a.pop()
// console.log(a)
// //shift()
// a.shift()
// console.log(a)
// //delete
// delete a[1]
// console.log(a)
// //slice
// a.splice(1,1)
// console.log(a)
// //sort()
// b=[7,6,5,4,7]
// b.sort()
// console.log(b)
// //reverse()
// b.reverse()
// console.log(b)
// //To-String
// s=["A","B","C","D"]
// r=s.toString()
// console.log(r)
// //join
// r=s.join("-")
// console.log(r)
// //slice
// r=b.slice(1,4)
// console.log(r)
// //at
// r=b.at(2)
// console.log(r)

// var a=[1,10,5,6,14]

// var res=a.find(find)

// console.log(res)

// function find(value)
// {
//     return value>5
// }

// var ar=["P","A","V","A","N"]
// ar=ar.slice(0,5)
// ar=ar.join("*")
// console.log(ar)

 