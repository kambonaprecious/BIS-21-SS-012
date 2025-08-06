// This program demonstrates the use of several JavaScript operators.

// 1. Division Operator (/)
// The division operator is used to divide the left operand by the right operand.
let a = 10;
let b = 2;
let resultDivision = a / b;
console.log(`Division: ${a} / ${b} = ${resultDivision}`); // Output: 5

// 2. Logical NOT Operator (!)
// The logical NOT operator inverts the truthiness of a value.
let isTrue = true;
let isFalse = false;

let notTrue = !isTrue;
let notFalse = !isFalse;

console.log(`Logical NOT on true: !${isTrue} = ${notTrue}`); // Output: false
console.log(`Logical NOT on false: !${isFalse} = ${notFalse}`); // Output: true

// 3. Ternary Operator (?:)
// The ternary operator is a shortcut for an if-else statement.
// The syntax is: condition ? expressionIfTrue : expressionIfFalse
let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(`Ternary Operator: Can a person aged ${age} vote? ${canVote}`); // Output: Yes, you can vote.

// 4. Increment Operator (++)
// The increment operator adds one to its operand. It can be used as a prefix or postfix.
let counter = 5;

// Postfix increment: The original value is used first, then it's incremented.
let postIncrement = counter++;
console.log(`Postfix Increment: original value = ${postIncrement}, new value of counter = ${counter}`); // Output: original value = 5, new value of counter = 6

// Reset counter for the next example
counter = 5;

// Prefix increment: The value is incremented first, then the new value is used.
let preIncrement = ++counter;
console.log(`Prefix Increment: new value = ${preIncrement}, final value of counter = ${counter}`); // Output: new value = 6, final value of counter = 6