function calculateAverage(numbers) {

  if (numbers.length === 0) {
    return 0; // Return 0 for empty array to avoid division by zero
  }

  // Calculate the sum of all numbers
  const sum = numbers.reduce((total, num) => total + num, 0);

  // Calculate and return the average
  return sum / numbers.length;
}


let testNumbers = [10, 20, 30, 40, 50];
let average = calculateAverage(testNumbers);
console.log(`The average is: ${average}`); 