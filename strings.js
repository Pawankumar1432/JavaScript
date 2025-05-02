const str = "                                Hello this my string ";
const sample = "Hello World";

console.log("Intial String : ", sample);
// 1. length
console.log("1. Length:", sample.length);

// 2. charAt()
console.log("2. charAt(1):", sample.charAt(1));

// 3. slice()
console.log("3. slice(0, 5):", sample.slice(0, 5));

// 4. substring()
console.log("4. substring(0, 5):", sample.substring(0, 5));

// 5. split()
console.log("5. split(' '):", sample.split(" "));

// 6. indexOf()
console.log("6. indexOf('World'):", sample.indexOf("World"));
// 7. lastIndexOf()
console.log("7. lastIndexOf('l'):", sample.lastIndexOf("l"));

// 8. includes()
console.log("8. includes('Hello'):", sample.includes("Hello"));

// 9. startsWith()
console.log("9. startsWith('Hell'):", sample.startsWith("Hell"));

// 10. endsWith()
console.log("10. endsWith('World'):", sample.endsWith("World"));

// 11. replace()
console.log("11. replace('World', 'JS'):", sample.replace("World", "JS"));

// 12. replaceAll() – 
const text2 = "foo bar foo bar";
console.log("12. replaceAll('foo', 'baz'):", text2.replaceAll("foo", "baz"));

// 13. toUpperCase()
console.log("13. toUpperCase():", sample.toUpperCase());

// 14. toLowerCase()
console.log("14. toLowerCase():", sample.toLowerCase());

// 15. trim()
console.log("15. trim():", str.trim());















































// // 16. trimStart()
console.log("16. trimStart():", str.trimStart());

// // 17. trimEnd()
console.log("17. trimEnd():", str.trimEnd());

// // 18. split()
console.log("18. split(' '):", sample.split(" "));

// // 19. repeat()
console.log("19. repeat(3):", "Hi ".repeat(3));

// // 20. match()
// const numbers = "abc123xyz456";
// console.log("20. match(/\\d+/g):", numbers.match(/\d+/g));

// // 21. matchAll()
// const iterator = [...numbers.matchAll(/\d+/g)];
// console.log("21. matchAll:", iterator.map(m => m[0]));

// // 22. padStart()
// console.log("22. padStart(10, '*'):", "5".padStart(10, "*"));

// // 23. padEnd()
// console.log("23. padEnd(10, '-'):", "5".padEnd(10, "-"));

// // 24. concat()
// console.log("24. concat():", "Hello".concat(" ", "JS"));

// // 25. codePointAt()
// console.log("25. codePointAt(1):", sample.codePointAt(1));

// // 26. fromCharCode()
// console.log("26. fromCharCode(72, 69, 76, 76, 79):", String.fromCharCode(72, 69, 76, 76, 79));

// // 27. normalize()
// console.log("27. normalize():", "\u004e\u0303".normalize()); // ñ

// // 28. localeCompare()
// console.log("28. localeCompare('hello'):", "hello".localeCompare("HELLO"));

// // 29. valueOf()
// console.log("29. valueOf():", sample.valueOf());

// // 30. toString()
// console.log("30. toString():", sample.toString());
