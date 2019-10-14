// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// first solution
const squareSum(n) => {
  var sum = 0;
  var numSqr = n.map(n => n*n);
  const addedNums = numSqr.reduce((a, b) => a + b, 0);
return addedNums;
}

// clean solution
const squareSum = n => n.map(n => n*n).reduce(a, b) => a + b, 0);
