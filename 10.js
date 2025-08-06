function countNegativeNumbers(numbers) {
  
  let count = 0;
  for (const num of numbers) {

    //counting negatives
    if (typeof num === 'number' && num < 0) {
      count++;
    }
  }
  return count;
}


let testArray = [1, -1, 2, -2, 0, -3];
console.log(countNegativeNumbers(testArray)); 