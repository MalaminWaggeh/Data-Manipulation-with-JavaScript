// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
// isSum tells us whether or not the sum of said constants is 50
console.log("one (add up to 50):", isSum50);  



// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(" two (At least two odd numbers):", isTwoOdd);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isAnyOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

const isNotOver25 = !isAnyOver25;


// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log("four (All unique numbers):", isUnique);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log("Result (isValid):", isValid);

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


console.log('========Next Steps========');

const isDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log("all numbers divisible by 5:", isDivisibleBy5);

const isFirstLargerThanLast = n1 > n4;
console.log("is the first number larger than the last number", isFirstLargerThanLast );

const subtractResult = n2 - n1;
const multiplyResult = subtractResult * n3;
const remainderResult = multiplyResult % n4;
console.log("Subtract the first number from the second result", subtractResult);
console.log("Multiply the result by the third number result", multiplyResult);
console.log("Find the remainder of dividing the result by the fourth number result: ", remainderResult);

console.log('========Part Two========');
const totalDistance = 1500; 
const fuelEfficiency55mph = 30; 
const fuelEfficiency60mph = 28; 
const fuelEfficiency75mph = 23; 
const fuelBudget = 175; 
const fuelCostPerGallon = 3; 
// Required fuel needed at every mph 
const fuelNeeded55mph = totalDistance / fuelEfficiency55mph;
const fuelNeeded60mph = totalDistance / fuelEfficiency60mph;
const fuelNeeded75mph = totalDistance / fuelEfficiency75mph;
//Minimum fuel needed

